import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full bg-gray-100 py-6 mt-2">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-600 transition-colors duration-300"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        
        {/* Footer Text */}
        <div className="text-gray-500 text-sm">
          {t('footer.text')}
        </div>
      </div>
    </footer>
  );
}
