import { TCardHorizontalProps } from '../types';

export const CardHorizontal: React.FC<TCardHorizontalProps> = ({
  children,
  className
}) => {
  return (
    <div className={`${className} relative py-[14px] my-2 bg-primary-dark-100 rounded-[14px]`}>
      <span className="inline-block h-7 border-r-4 rounded-r-[4px] border-orange-21 drop-shadow-10px absolute top-1/2 left-0 -translate-y-1/2" />
        {children}
    </div>
  );
};
