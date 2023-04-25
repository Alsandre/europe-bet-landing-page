import { Link } from 'react-router-dom';

export const Homepage: React.FC = () => {
  return (
    <>
      
      <h1 className="text-center p-5 m-3 rounded-xl bg-slate-600">HomePage!</h1>
      <div className="bg-slate-800 m-auto my-7 w-fit text-center py-3 px-4 rounded-2xl">
        <h3>Events:</h3>
        <ul>
          <li className="italic text-orange-21 underline text-20">
            {<Link to={'/'}>Poker Legends Malta</Link>}
          </li>
        </ul>
      </div>
    </>
  );
};
