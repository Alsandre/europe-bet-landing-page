export type TLeaderboardEntry = {
  place: number;
  voucher: string;
  prize: string;
};
export type TBoardProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
};
export type TTableItemProps = {
  place: string;
  voucher: string;
  prize: string;
  className?: string;
};
export type TTableProps = {
  title: string;
  data: TLeaderboardEntry[];
};
export type TPrizeCardProps = {
  icon: string;
  text: string;
};
export type TTermsItemProps = {
  onClick: React.MouseEventHandler;
  text: string;
};
