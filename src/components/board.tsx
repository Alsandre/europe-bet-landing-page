import infoIcon from '../assets/info-icon.png';
import { PrimaryCard } from '../UI';
import { TBoardProps } from '../types';

export const LeaderBoard: React.FC<TBoardProps> = ({
  children,
  title,
  boardClass,
  headerClass,
  cardClass
}) => {
  return (
    <PrimaryCard className={cardClass ? cardClass : ''}>
      <h3 className={`"rounded-2xl bg-primary-dark-100 py-6 text-center ${headerClass ? headerClass : ''}"`}>
        {title}
      </h3>
      {children}
    </PrimaryCard>
  );
};
