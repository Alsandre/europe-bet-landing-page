import { TBoardProps } from "../types";

export const LeaderBoard: React.FC<TBoardProps> = ({children, title, className}) => {
  return (
    <div className={`${className} rounded-2xl bg-primary-dark-200 w-mobile m-auto`}>
      <h3 className="rounded-2xl bg-primary-dark-100 py-6 text-center text-white">{title}</h3>
      {children}
    </div>
  );
};
