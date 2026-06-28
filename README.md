# mauro

## Envio real del formulario de contacto

El formulario de `Contacto` ahora envia los datos al endpoint `POST /api/contact` y el backend manda un correo real via SMTP.

### 1) Configurar variables de entorno

Crea un archivo `.env` en la raiz del proyecto usando este ejemplo:

```env
MAIL_SERVICE=gmail
MAIL_USER=tu_correo@gmail.com
MAIL_PASS=tu_app_password_de_gmail
MAIL_FROM=tu_correo@gmail.com
MAIL_TO=issacpachecoek@hotmail.com
```

Notas para Gmail:
- `MAIL_PASS` debe ser una App Password de Google (no tu contrasena normal).
- Debes tener activada la verificacion en dos pasos en la cuenta que envia.

### 2) Ejecutar la app con backend

Para que funcione `/api/contact`, ejecuta:

```bash
npm run dev:server
```

Esto levanta Express con Vite integrado en `http://localhost:5000`.