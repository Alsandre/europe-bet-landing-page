import { TCardHorizontalProps } from '../types';

export const CardHorizontal: React.FC<TCardHorizontalProps> = ({
  children
}) => {
  return (
    <div className="relative py-[14px] w-mobile m-auto my-2 bg-primary-dark-100 rounded-[14px]">
      <span className="inline-block h-7 border-r-4 rounded-r-[4px] border-orange-21 drop-shadow-10px absolute top-1/2 -translate-y-1/2" />
      <div className="w-mobile m-auto text-[13px] flex gap-[8px] items-center pl-1">
        {children}
      </div>
    </div>
  );
};
