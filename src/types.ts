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
  title: string | React.ReactNode;
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
export type TEventButtonProps = {
  isActive: boolean;
  title: string;
  period: string;
  onClick: React.MouseEventHandler;
};
export type TPrimaryCardProps = {
  children: React.ReactNode;
  className?: string;
};
export type TCardHorizontalProps = {
  children: React.ReactNode;
};
export type TSpecialEventProps = {
  title: string;
  prize: number;
  buyIn: number | string;
  date: Date;
  backgroundImg: string;
};
