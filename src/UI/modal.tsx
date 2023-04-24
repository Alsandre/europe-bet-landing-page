import { useNavigate } from "react-router-dom";

export type TModalProps = {
  children: React.ReactNode;
  isDesktop: boolean;
};

export const Modal: React.FC<TModalProps> = ({ children, isDesktop }) => {
  const navigate = useNavigate()
  return (
    <div
      className={
        isDesktop
          ? 'w-[940px] m-auto fixed top-8 left-1/2 -translate-x-1/2 h-screen overflow-y-scroll scrollbar-hide rounded-xl'
          : ''
      }
    >
        
      {children}
    </div>
  );
};
