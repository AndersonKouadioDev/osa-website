import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-5 text-gray-300 w-full">
      {/* Ligne des icônes des réseaux sociaux */}
      <div className="flex justify-center py-4 sm:py-6 border-b border-gray-600 px-4 bg-[#2F2F2F]">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full ">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/fcosaofficiel/?locale=fr_FR"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Facebook"
            target="_blank"
          >
            <Facebook size={18} className="sm:size-5 md:size-6" />
          </Link>

          {/* TikTok */}
          <Link
            href="https://www.tiktok.com/@fcosaofficiel"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path d="M12.514 1.138A7.733 7.733 0 0 0 7 13.568v8.34a7.733 7.733 0 0 0 5.514-11.23zm-.088 1.947v10.384a7.733 7.733 0 0 0 5.514 11.23v-8.34a7.733 7.733 0 0 0-5.514-11.23z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://ci.linkedin.com/in/amza-gamal-fc-osa-62119385"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="sm:size-5 md:size-6" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/fcosaofficiel/"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FFD319] via-[#FF2A6A] to-[#D302EB] text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Instagram"
          >
            <Instagram size={18} className="sm:size-5 md:size-6" />
          </Link>

          {/* Twitter */}
          <Link
            href="https://x.com/fcosaofficiel"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Twitter"
          >
            <Twitter size={18} className="sm:size-5 md:size-6" />
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@fcosaofficiel"
            className="w-20 h-10 sm:w-24 sm:h-10 md:w-32 md:h-12 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="YouTube"
          >
            <Youtube size={18} className="sm:size-5 md:size-6" />
          </Link>
        </div>
      </div>

      {/* Contenu principal du pied de page avec copyright intégré */}
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-center bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/assets/images/all-img/BackgroundFooter.png')",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center mx-auto">
          <div className="mb-4 sm:mb-6"  >
            <Image
              src="/assets/images/all-img/logoOSA.png"
              alt="FC OSA Logo"
              width={80}
              height={80}
              className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 w-auto h-auto"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3">
            FC OSA
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 mb-4 sm:mb-6">
            TOUJOURS EN AVANT !
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2">
            Le lien entre les supporters et le club est profondément enraciné,
            créant une atmosphère unique qui résonne avec l&apos;essence du beau
            jeu
          </p>

          {/* Liens de navigation du pied de page */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm md:text-base font-medium mb-8 sm:mb-12">
            <Link
              href="#"
              className="hover:text-white transition-colors px-2 py-1 whitespace-nowrap"
            >
              NOUS CONTACTER
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors px-2 py-1 whitespace-nowrap"
            >
              MENTIONS LÉGALES
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors px-2 py-1 whitespace-nowrap"
            >
              CONFIDENTIALITÉ
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors px-2 py-1 whitespace-nowrap"
            >
              F.A.Q
            </Link>
          </div>

          {/* Ligne de séparation et copyright intégrés */}
          <div className="w-full  border-t border-gray-600 pt-4 ">
            <p className="text-xs sm:text-sm text-gray-400">
              FC OSACI © 2025 - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
