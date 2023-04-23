import singleTicket from '../assets/poker-item-1-ticket-icon.png';
import doubleTicket from '../assets/poker-item-2-ticket-icon.png';

import { TTravelCardProps } from '../types';

export const TravelCard: React.FC<TTravelCardProps> = ({
  title,
  text,
  variant
}) => {
  const icon = variant === 'single-ticket' ? singleTicket : doubleTicket;
  return (
    <div className=" p-5 relative w-mobile m-auto my-3 bg-primary-dark-300 rounded-xl">
      <img src={icon} alt="" className="absolute top-0 right-[14px]" />
      <h6>{title}</h6>
      <p className="text-13">{text}</p>
    </div>
  );
};
