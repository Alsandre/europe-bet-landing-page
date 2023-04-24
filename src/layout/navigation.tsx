import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export const MainNavigation: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: '1280px' });
  return (
    <div className={isDesktop ? 'pt-3' : 'pt-[104px]'}>
      <div className="w-mobile m-auto flex justify-between ">
        <Link to={'/'}>
          <span className="inline-block w-6 h-6 rounded-full bg-orange-22"></span>
        </Link>
        <div>
          <Link to={'/sign-up'}>
            <span className="inline-block px-3 py-1 hover:bg-orange-2A hover:rounded-[5px] mr-1">
              Sign up
            </span>
          </Link>
          <Link to={'/sign-in'}>
            <span className="inline-block px-3 py-1 rounded-[5px] bg-orange-2A">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
