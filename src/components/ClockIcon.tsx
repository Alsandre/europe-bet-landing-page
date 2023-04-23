type TClockIconProps = {
  className?: string
}
const ClockIcon: React.FC<TClockIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
      <line x1="10" y1="4" x2="10" y2="11" stroke="white" strokeWidth="2" />
      <line x1="9" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default ClockIcon;
