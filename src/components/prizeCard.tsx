import { CardHorizontal } from '../UI/cardHorizontal';
import { TPrizeCardProps } from '../types';

export const PrizeCard: React.FC<TPrizeCardProps> = ({ icon, text }) => {
  return (
    <CardHorizontal>
      <div className="w-mobile m-auto text-[13px] flex gap-[8px] items-center pl-1">
        <img src={icon} alt="" className="self-center" />
        <span className="flex-1">{text}</span>
      </div>
    </CardHorizontal>
  );
};
