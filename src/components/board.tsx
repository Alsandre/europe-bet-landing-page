import { PrimaryCard } from '../UI';
import { TBoardProps } from '../types';

export const LeaderBoard: React.FC<TBoardProps> = ({
  children,
  title,
  className
}) => {
  return (
    <PrimaryCard>
      <h3 className="rounded-2xl bg-primary-dark-100 py-6 text-center">
        {title}
      </h3>
      {children}
    </PrimaryCard>
  );
};
