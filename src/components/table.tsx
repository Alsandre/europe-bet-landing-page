import { TTableProps } from '../types';
import { TableItem } from './tableItem';
import { leaderboardData } from '../constants';
import { v4 as keygen } from 'uuid';
import voucherIcon from '../assets/voucher-icon-inline.png';
import { TableHeader } from './tableHeader';

export const Table: React.FC<TTableProps> = ({ title }) => {
  return (
    <div className="bg-primary-dark-200 p-4">
      <TableHeader title={title} />
        <div className="text-primary-grey-300 flex text-12 my-3 px-4">
          <span className="flex-1">ადგილი</span>
          <span className="flex-1 flex items-center gap-[6px] justify-center">
            <i
              className="inline-block w-[18px] h-3"
              style={{
                backgroundImage: `url(${voucherIcon})`,
                backgroundSize: '100%'
              }}
            />
            <span>ვაუჩერი</span>
          </span>
          <span className="flex-1 text-center">პრიზი</span>
        </div>
      <ul className="h-[500px] overflow-y-scroll">
        {leaderboardData.map(({ place, voucher, prize, icon }) => (
          <TableItem 
          icon={icon}
            key={keygen()}
            place={place.toString()}
            voucher={voucher}
            prize={prize}
          />
        ))}
      </ul>
    </div>
  );
};
