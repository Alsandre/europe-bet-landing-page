import money from '../assets/final-item-money-icon.png';
import ticket from '../assets/final-item-ticket-icon.png';
import hotel from '../assets/final-item-hotel-icon.png';
import event from '../assets/final-item-event-icon.png';
import dropDown from '../assets/dropDown.png';
import { Icon } from '../UI';

export const TicketIcon: React.FC = () => {
  return <Icon icon={ticket} />;
};

export const MoneyIcon: React.FC = () => {
  return <Icon icon={money} />;
};

export const HotelIcon: React.FC = () => {
  return <Icon icon={hotel} />;
};

export const EventIcon: React.FC = () => {
  return <Icon icon={event} />;
};

export const DropDownIcon: React.FC<{ rotate: boolean }> = ({ rotate }) => {
  return (
    <span className="inline-block w-4 h-[9px]">
      <img
        src={dropDown}
        alt="drop down"
        className={rotate ? 'rotate-180' : ''}
      />
    </span>
  );
};

export const ClockIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
      <line x1="10" y1="4" x2="10" y2="11" stroke="white" strokeWidth="2" />
      <line x1="9" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" />
    </svg>
  );
};
