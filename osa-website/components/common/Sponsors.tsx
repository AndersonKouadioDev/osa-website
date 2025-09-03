import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="mt-10 px-4 md:px-0">
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="flex justify-center">
          <Image
            width={72}
            height={72}
            src={"/Assets/images/nav/sponsor1.png"}
            alt="sponsor 1"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            width={72}
            height={72}
            src={"/Assets/images/nav/sponsor2.png"}
            alt="sponsor 2"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        {/* Tu peux ajouter plus de sponsors ici */}
      </div>
    </div>
  );
};

export default Sponsors;
