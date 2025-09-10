import Image from 'next/image';
import React from 'react';

const DonationFooter = () => {
    return (
        <div>
            <div className="text-center text-xs sm:text-sm text-gray-600 mt-6">
            <div className="mb-2 font-semibold">Paiement sécurisé</div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* KiePay */}
              <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
                <Image
                  src="/assets/images/all-img/LogoKKi.jpeg"
                  alt="KiePay"
                  width={60}
                  height={20}
                  className="object-contain"
                />
              </div>

              {/* Visa */}
              <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
                <Image
                  src="/assets/images/all-img/LogoVisa.jpeg"
                  alt="Visa"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* MasterCard */}
              <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
                <Image
                  src="/assets/images/all-img/LogoMasterCard.jpeg"
                  alt="MasterCard"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
    );
}

export default DonationFooter;
