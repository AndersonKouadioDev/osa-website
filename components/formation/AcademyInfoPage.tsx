import React from 'react';


import Condition from './Condition';
import Vision from './Vision';


const AcademyInfoPage = () => {
  return (
    <div className="">
      {/* Section 1: Comment intégrer l'académie */}
     <Condition />

      {/* Section 2: Notre Vision */}
      <Vision/>
      
    </div>
  );
};

export default AcademyInfoPage;