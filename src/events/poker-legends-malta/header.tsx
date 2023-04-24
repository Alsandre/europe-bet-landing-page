import headerMBG from '../../assets/header-mobile.png';
import headerDBG from '../../assets/header-D.png';

type TProps = {
  isDesktop?: boolean;
};

export const Header: React.FC<TProps> = ({ isDesktop }) => {
  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <img src={isDesktop ? headerDBG : headerMBG} alt="poker malta legends" />
      </div>
      <div className="w-mobile m-auto text-center ">
        <div
          className={`${
            isDesktop
              ? 'absolute top-4 left-4 pl-1 pr-3 py-2 rounded-[35px] bg-primary-dark-200'
              : 'mt-4'
          } mb-4`}
        >
          <span
            className={`${
              isDesktop ? 'bg-primary-dark-100' : 'bg-primary-dark-200'
            }  rounded-2xl px-[10px] py-1 text-12 mr-2 opacity-90`}
          >
            სლოტები
          </span>
          <span
            className={`${
              isDesktop ? 'text-15 font-bold' : 'text-14'
            } opacity-90`}
          >
            10 სექტემბერი - 7 ნოემბერი
          </span>
        </div>
        <div className="flex flex-col gap-[14px] mb-[26px]">
          <span className="text-14 font-semibold font-mtavruli">
            მოიპოვე 10 საგზურიდან ერთ-ერთი
          </span>
          <span className="text-14 opacity-90">
            მოხვდი პოკერის ფესტივალზე მალტაში
          </span>
        </div>
      </div>
    </div>
  );
};
