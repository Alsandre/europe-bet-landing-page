import dropDown from '../assets/drop-down-icon.png';

export const DropDownNode: React.FC = () => {
  return (
    <div className="rounded-3xl bg-primary-dark-300 w-[78%] min-w-[267px] m-auto pt-[13px] pb-[12px] relative">
      <h6 className="text-11 text-left pl-5 font-bold leading-3">
        ქულების დაგროვების მექანიკა
      </h6>
      <button className="w-[38px] h-[38px] absolute top-0 right-0" style={{backgroundImage: `url(${dropDown})`}}></button>
    </div>
  );
};
