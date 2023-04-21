import { TTableProps } from '../types';
import { TableItem } from './tableItem';
import { leaderboardData } from '../constants';
import { v4 as keygen } from 'uuid';

export const Table: React.FC<TTableProps> = ({ title }) => {
  return (
    <div className="bg-primary-dark-200 p-4">
      <h5 className="text-center">{title}</h5>
      <ul>
        <li className="text-primary-grey-300 flex justify-between text-12 my-3">
          <span>ადგილი</span>
          <span>ვაუჩერი</span>
          <span>პრიზი</span>
        </li>
        {leaderboardData.map(({ place, voucher, prize }) => (
          <TableItem key={keygen()} place={place.toString()} voucher={voucher} prize={prize} />
        ))}
      </ul>
    </div>
  );
};
