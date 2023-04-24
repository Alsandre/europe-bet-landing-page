import { TTableItemProps } from '../types';

export const TableItem: React.FC<TTableItemProps> = ({
  place,
  voucher,
  prize,
  icon
}) => {
  return (
    <li className="text-white text-10 flex items-center justify-between px-4 h-[45px] bg-primary-dark-300 mt-[6px] rounded-[76px]">
      <div className="flex-1 flex justify-start">
        <span className="w-[22px] h-[22px] rounded-full bg-primary-dark-100 flex justify-center items-center">
          {place}
        </span>
      </div>
      <div className="flex-1 flex justify-center">
        <span className="">{voucher}</span>
      </div>
      <div className="flex-1 flex justify-center ">
        {icon && <i
          className="inline-block w-[14px] h-[14px] shrink-0"
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: '100%'
          }}
        />}
        <span className="text-center">{prize}</span>
      </div>
    </li>
  );
};
