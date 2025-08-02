import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        {t('footer.text')}
      </div>
    </footer>
  );
}
