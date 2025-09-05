import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function FondationOSAContact() {
  return (
    <div className="max-w-md mx-auto bg-white">
      <div className="py-6 px-2 space-y-6 flex flex-col">

        {/* Téléphone */}
        <div className="text-center shadow-sm rounded-xl p-6 bg-[#F7F7F7]">
          <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <Phone className="w-7 h-7 text-white" />
          </div>
          <p className="text-gray-700 text-sm font-medium">
            (+225) 07 09 538 834
          </p>
        </div>

        {/* Email */}
        <div className="text-center shadow-sm rounded-xl p-6 bg-[#F7F7F7]">
          <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div className="text-gray-700 text-sm space-y-1 font-semibold">
            <p>football.direction.fcrosa@gmail.com</p>
            <p>osafbot.osa@gmail.com</p>
            <p>osasercomingmail.com</p>
          </div>
        </div>

        {/* Adresse */}
        <div className="text-center shadow-sm rounded-xl p-6 bg-[#F7F7F7]">
          <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Abidjan, Abobo - Sagephia
          </p>
        </div>

        {/* Horaires */}
        <div className="text-center shadow-sm rounded-xl p-6 bg-[#F7F7F7]">
          <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <Clock className="w-7 h-7 text-white" />
          </div>
          <div className="text-gray-700 text-sm ">
            <p className="font-medium">Lundi - Samedi</p>
            <p className="font-medium">8:00 - 18:00</p>
          </div>
        </div>

      </div>
    </div>
  );
}
