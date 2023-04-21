import { TPrizeCardProps } from '../types';

export const PrizeCard: React.FC<TPrizeCardProps> = ({icon, text}) => {
  return (
    <div className="relative py-[14px] w-mobile m-auto bg-primary-dark-100 rounded-[14px]">
      <span className="inline-block h-7 border-r-4 rounded-r-[4px] border-orange-21 drop-shadow-10px absolute top-1/2 -translate-y-1/2" />
      <div className="w-mobile m-auto text-[13px] flex gap-[8px] items-center pl-1">
        <img src={icon} alt="" className="self-center" />
        <span className='flex-1'>{text}</span>
      </div>
    </div>
  );
};
