import { CardHorizontal } from '../UI/cardHorizontal';
import { TPrizeCardProps } from '../types';

export const PrizeCard: React.FC<TPrizeCardProps> = ({ icon, text }) => {
  return (
    <CardHorizontal>
      <img src={icon} alt="" className="self-center" />
      <span className="flex-1">{text}</span>
    </CardHorizontal>
  );
};
