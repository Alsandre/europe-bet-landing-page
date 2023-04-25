export type TLeaderboardEntry = {
  place: number;
  voucher: string;
  prize: string;
};
export type TBoardProps = {
  children: React.ReactNode;
  title: string;
  boardClass?: string;
  headerClass?: string;
  cardClass?: string;
};
export type TTableItemProps = {
  place: string;
  voucher: string;
  prize: string;
  className?: string;
  icon: string | null;
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
  rotate: boolean;
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
export type TTravelCardProps = {
  title: React.ReactNode;
  text: string;
  additionalText?: string;
  note?: string;
  variant: string;
};
export type TTravelPackProps = {
  icon: React.ReactNode;
  text: string;
};
export type TCardHorizontalProps = {
  children: React.ReactNode;
  className?: string;
};
export type TSpecialEventProps = {
  title: string;
  prize: number;
  buyIn: number | string;
  date: Date;
  backgroundImg: string;
  className?: string;
};
