import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Condition from './Condition';
import Vision from './Vision';
import VisionSection from './VisionSection';

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