import { TEventButtonProps } from "../types";

export const EventButton: React.FC<TEventButtonProps> = ({title, period, isActive, onClick}) => {
  return <button className={`${isActive ? 'scale-110 bg-orange-21 rounded-lg' : 'bg-primary-dark-100'} flex-1 flex flex-col justify-center items-center`} onClick={onClick}>
    <span className={`${isActive ? "text-11" : 'text-10'}`}>{period}</span>
    <span className={`${isActive ? "text-14" : 'text-12'} font-bold`}>{title}</span>
  </button>;
};
