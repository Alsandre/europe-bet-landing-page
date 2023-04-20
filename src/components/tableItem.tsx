import { TTableItemProps } from "../types";

export const TableItem: React.FC<TTableItemProps> = ({place, voucher, prize}) => {
  return <li className="text-white text-10 flex justify-between items-center px-4 h-[45px] bg-primary-dark-300 mt-[6px] rounded-[76px]">
    <span className="w-[22px] h-[22px] rounded-full bg-primary-dark-100 flex justify-center items-center">{place}</span>
    <span>{voucher}</span>
    <span className="w-[74px] text-center">{prize}</span>
  </li>;
};
