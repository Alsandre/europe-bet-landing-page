import { Link } from 'react-router-dom';

export const Events: React.FC = () => {
  return (
    <>
      <h1 className="p-5 m-auto mt-8 w-mobile bg-slate-700 rounded-xl">
        Events page is{' '}
        <span className="text-slate-500 italic text-17">
          UNDER CONSTRUCTION!
        </span>
      </h1>
      <div className="bg-slate-800 m-auto my-7 w-fit text-center py-3 px-4 rounded-2xl">
        <h3>Events:</h3>
        <ul>
          <li className="italic text-orange-21 underline text-20">
            <Link to={'/'}>Poker Legends Malta</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
