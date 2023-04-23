type TIconProps = {
  icon: string;
  className?: string;
};
export const Icon: React.FC<TIconProps> = ({ icon, className }) => {
  return (
    <div
      className={`${className} shrink-0 w-8 h-8 rounded-[6px]`}
      style={{ backgroundImage: `url(${icon})` }}
    />
  );
};
