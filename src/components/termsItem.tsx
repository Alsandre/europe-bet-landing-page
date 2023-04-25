import { TTermsItemProps } from '../types';
import { DropDownIcon } from './icons';

export const TermsItem: React.FC<TTermsItemProps> = ({ text, rotate }) => {
  return (
    <li className="bg-primary-dark-200 rounded-lg min-h-[50px] py-2 px-4 flex items-center justify-between w-full">
      <span className="flex text-primary-grey-200 text-14 pr-12 text-left">
        {text}
      </span>
      <DropDownIcon rotate={rotate} />
    </li>
  );
};
