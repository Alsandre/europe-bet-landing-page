import { TTableProps } from '../types';
import { TableItem } from './tableItem';
import { leaderboardData } from '../constants';
import { v4 as keygen } from 'uuid';
import infoIcon from '../assets/info-icon.png';

export const Table: React.FC<TTableProps> = ({ title }) => {
  return (
    <div className="bg-primary-dark-200 p-4">
      <div className="flex gap-2 justify-center items-center">
        <h5 className="text-center inline-block">{title}</h5>
        <i
          className="inline-block w-6 h-6 group relative"
          style={{ backgroundImage: `url(${infoIcon})` }}
        >
          <span className={`w-24 md:w-52 text-12 md:text-14 bg-primary-dark-400 rounded-lg text-center py-2 invisible group-hover:visible absolute top-0 -translate-x-[calc(50%-12px)] -translate-y-[calc(100%+8px)]`}>
            {typeof title === 'string' ? title : 'This is info Block!'}
          </span>
          <i className='inline-block border-t-8 border-r-4 border-l-4 border-b-0 border-transparent border-t-primary-dark-400 invisible group-hover:visible absolute top-0 -translate-x-[calc(50%-12px)] -translate-y-full'/>
        </i>
      </div>
      <ul>
        <li className="text-primary-grey-300 flex justify-between text-12 my-3">
          <span>ადგილი</span>
          <span>ვაუჩერი</span>
          <span>პრიზი</span>
        </li>
        {leaderboardData.map(({ place, voucher, prize }) => (
          <TableItem
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
