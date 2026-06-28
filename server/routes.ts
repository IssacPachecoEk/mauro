import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  nombre: z.string().min(2).max(70),
  email: z.string().trim().email().refine((value) => !/\s/.test(value)),
  telefono: z.string().regex(/^\d{10}$/),
  tipoProyecto: z.string().min(1),
  mensaje: z.string().min(10).max(2500),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/contact", async (req, res) => {
    const parsed = contactFormSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: "Datos de formulario inválidos" });
    }

    const mailUser = process.env.MAIL_USER;
    const rawMailPass = process.env.MAIL_PASS || "";
    const mailPass = rawMailPass.replace(/^['\"]|['\"]$/g, "").replace(/\s+/g, "");
    const mailTo = process.env.MAIL_TO || "issacpachecoek@hotmail.com";
    const mailFrom = process.env.MAIL_FROM || mailUser;

    if (!mailUser || !mailPass || !mailFrom) {
      return res.status(500).json({
        message: "Falta configuración de correo en el servidor",
      });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE || "gmail",
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const { nombre, email, telefono, tipoProyecto, mensaje } = parsed.data;

    try {
      await transporter.sendMail({
        from: `Formulario Web <${mailFrom}>`,
        to: mailTo,
        replyTo: email,
        subject: `Nuevo contacto de ${nombre}`,
        text: [
          "Se recibio un nuevo mensaje desde el formulario de contacto.",
          "",
          `Nombre: ${nombre}`,
          `Email: ${email}`,
          `Telefono: ${telefono}`,
          `Tipo de proyecto: ${tipoProyecto}`,
          "",
          "Mensaje:",
          mensaje,
        ].join("\n"),
      });

      return res.status(200).json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
      console.error("Error enviando correo de contacto:", error);

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as { code?: string }).code === "EAUTH"
      ) {
        const smtpResponse = "response" in error ? String((error as { response?: string }).response || "") : "";

        if (smtpResponse.includes("InvalidSecondFactor") || smtpResponse.includes("Application-specific password required")) {
          return res.status(500).json({
            message: "Gmail requiere App Password valida. Genera una nueva en Google y pegala sin espacios.",
          });
        }

        return res.status(500).json({
          message: "Error de autenticacion SMTP. Revisa MAIL_USER y MAIL_PASS (App Password).",
        });
      }

      return res.status(500).json({ message: "No se pudo enviar el mensaje" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
