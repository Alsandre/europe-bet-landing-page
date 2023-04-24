import { monthListGE } from '../constants';
import { TSpecialEventProps } from '../types';

export const SpecialEvent: React.FC<TSpecialEventProps> = ({
  title,
  prize,
  buyIn,
  date,
  backgroundImg,
  className
}) => {
  return (
    <div
      className={`rounded-xl pl-5 pr-16 h-[85px] flex justify-center gap-16 items-center mb-[14px] ${
        className ? className : ''
      }`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-col">
        <span className="text-14 font-bold">{title}</span>
        <span className="text-[24px] text-[#FFBE00] font-bold">{`${prize.toLocaleString(
          'ru-RU'
        )}₾`}</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="pl-3">
          <span className="text-12 font-bold">ბაი-ინი</span>
          <span className="text-12 font-bold">{` ${buyIn}₾`}</span>
        </div>
        <span className="inline-block text-14 px-3 py-1 bg-[#B78648] rounded-l-[15px] rounded-tr-[15px] font-medium">{`${date.getDate()} ${
          monthListGE[date.getMonth()]
        }`}</span>
      </div>
    </div>
  );
};
