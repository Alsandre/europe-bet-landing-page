import money from '../assets/final-item-money-icon.png';
import ticket from '../assets/final-item-ticket-icon.png';
import hotel from '../assets/final-item-hotel-icon.png';
import event from '../assets/final-item-event-icon.png';
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
