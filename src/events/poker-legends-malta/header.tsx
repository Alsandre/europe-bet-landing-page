import headerMBG from '../../assets/header-mobile.png';

export const Header: React.FC = () => {
  return (
    <>
      <div>
        <img src={headerMBG} alt="poker malta legends" />
      </div>
      <div className="w-mobile m-auto">
        <div className="mb-4 mt-4">
          <span className="bg-primary-dark-200 rounded-2xl px-[10px] py-1 text-12 mr-2 opacity-90">
            სლოტები
          </span>
          <span className="text-14 opacity-90">10 სექტემბერი - 7 ნოემბერი</span>
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
    </>
  );
};
