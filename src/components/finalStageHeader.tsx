import fsBg from '../assets/final-stage-bg.png';
import fsBgM from '../assets/final-stage-bg-m.png';
import { useMediaQuery } from 'react-responsive';

export const FinalStageHeader: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: '1280px' })
  return (
    <div className="rounded-t-[6px]">
      <img src={isDesktop ? fsBg : fsBgM} alt="" className=" rounded-[6px] w-full h-[200px]" />
      <div className='text-center text-13 mb-4'>
        <p className='my-2'>გაემგზავრე The Festival in Malta-ზე!</p>
        <p>
          The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
          აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>
      </div>
    </div>
  );
};
