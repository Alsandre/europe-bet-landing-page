export type TModalProps = {
  children: React.ReactNode;
  isDesktop: boolean;
};

export const Modal: React.FC<TModalProps> = ({ children, isDesktop }) => {
  return (
    <div
      className={
        isDesktop
          ? 'w-[940px] m-auto fixed top-8 left-1/2 -translate-x-1/2 h-screen overflow-y-scroll scrollbar-hide rounded-xl'
          : ''
      }
    >
        {isDesktop && <button className="w-8 h-8 rounded-full bg-primary-dark-200 flex justify-center items-center absolute top-4 right-4 z-50">X</button>}
      {children}
    </div>
  );
};
