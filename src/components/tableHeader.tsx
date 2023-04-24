import infoIcon from '../assets/info-icon.png';

type TTableHeaderProps = {
  title: string | React.ReactNode;
};
export const TableHeader: React.FC<TTableHeaderProps> = ({ title }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <h5 className="text-center inline-block">{title}</h5>
      {typeof title === 'string' && (
        <i
          className="inline-block w-6 h-6 group relative"
          style={{ backgroundImage: `url(${infoIcon})` }}
        >
          <span
            className={`w-24 md:w-52 text-12 md:text-14 bg-primary-dark-400 rounded-lg text-center py-2 invisible group-hover:visible absolute top-0 -translate-x-[calc(50%-12px)] -translate-y-[calc(100%+8px)]`}
          >
            {typeof title === 'string' ? title : 'This is info Block!'}
          </span>
          <i className="inline-block border-t-8 border-r-4 border-l-4 border-b-0 border-transparent border-t-primary-dark-400 invisible group-hover:visible absolute top-0 -translate-x-[calc(50%-12px)] -translate-y-full" />
        </i>
      )}
    </div>
  );
};
