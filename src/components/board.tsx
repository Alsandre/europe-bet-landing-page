import { TBoardProps } from '../types';

export const LeaderBoard: React.FC<TBoardProps> = ({
  children,
  title,
  className
}) => {
  return (
    <div
      className={`${className} rounded-2xl bg-primary-dark-200 w-mobile mx-auto overflow-hidden text-white`}
    >
      <h3 className="rounded-2xl bg-primary-dark-100 py-6 text-center">
        {title}
      </h3>
      {children}
    </div>
  );
};
