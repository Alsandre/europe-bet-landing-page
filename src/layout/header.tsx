import headerMBG from '../assets/header-mobile.png';

export const Header: React.FC = () => {
  return (
    <div className='pt-[104px]'>
      <div className='w-mobile m-auto flex justify-between '>
        <a><span className='inline-block w-6 h-6 rounded-full bg-orange-22'></span></a>
        <div>
            <a><span className='inline-block px-3 py-1 hover:bg-orange-2A hover:rounded-[5px] mr-1'>Sign up</span></a>
            <a><span className='inline-block px-3 py-1 rounded-[5px] bg-orange-2A'>Sign in</span></a>
        </div>
      </div>
      <img src={headerMBG} alt="poker malta legends" />
    </div>
  );
};
