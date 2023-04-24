//@ts-nocheck
import { useNavigate, useRouteError } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className='text-center mt-10'>
      <h1>Error occured!</h1>
      <p className='text-sm italic text-slate-200 py-4'>{error.data || "Unknown error"}</p>
      <button onClick={() => navigate(-1)} className='italic text-slate-500 underline'>Go back!</button>
    </div>
  );
};
