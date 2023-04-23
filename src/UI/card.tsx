import { TPrimaryCardProps } from '../types';

export const PrimaryCard: React.FC<TPrimaryCardProps> = ({
  className,
  children
}) => {
  return (
    <div
      className={`${className} relative rounded-2xl bg-primary-dark-200 overflow-hidden text-white`}
    >
      <span className="inline-block w-[124px] border-b-4 rounded-b-[4px] border-orange-21 drop-shadow-10px absolute left-1/2 top-0 -translate-x-1/2" />
      {children}
    </div>
  );
};
