type TIconProps = {
  icon: string;
  className?: string;
};
export const Icon: React.FC<TIconProps> = ({ icon, className }) => {
  return (
    <div
      className={`shrink-0 w-8 h-8 rounded-[6px] ${className}`}
      style={{ backgroundImage: `url(${icon})` }}
    />
  );
};
