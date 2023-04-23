import fsBg from '../assets/final-stage-bg.png';
import fsBgM from '../assets/final-stage-bg-m.png';

export const FinalStageHeader: React.FC = () => {
  return (
    <div className="rounded-t-[6px]">
      <img src={fsBgM} alt="" className=" rounded-[6px] w-full h-[200px]" />
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
