import { useNavigate } from 'react-router-dom';

export const PokerLobby: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>
        პოკერის ლობი{' '}
        <span className="text-slate-500 italic text-17">
          UNDER CONSTRUCTION!
        </span>
      </h1>
      <button onClick={() => navigate(-1)} className="text-slate-800">
        Back
      </button>
    </>
  );
};
