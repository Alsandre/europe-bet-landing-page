import { DropDownIcon } from '../UI';
import { TTermsItemProps } from '../types';

export const TermsItem: React.FC<TTermsItemProps> = ({text, onClick}) => {
  return (
    <li className="bg-primary-dark-200 rounded-lg min-h-[50px] py-2 px-4 flex items-center justify-between" onClick={onClick}>
      <span className='flex text-primary-grey-200'>{text}</span>
      <DropDownIcon />
    </li>
  );
};
