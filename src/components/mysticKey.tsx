import eventHead from '../assets/final-mystic-key.jpg';

type TMysticCardProps = {
  place: number;
  text: string;
};

const MysticCard: React.FC<TMysticCardProps> = ({ place, text }) => {
  return (
    <div className="w-mobile m-auto mb-2 rounded-[76px] h-14 flex items-center gap-3 bg-primary-dark-300 pl-3">
      <span className="flex w-6 h-6 items-center justify-center rounded-full bg-primary-dark-100 shrink-0">
        {place}
      </span>
      <p className="text-12">{text}</p>
    </div>
  );
};
export const MysticKeyEvent: React.FC = () => {
  return (
    <div className=" w-mobile m-auto mt-6 pb-5 bg-primary-dark-200 rounded-2xl">
      <span className="flex items-center justify-center rounded-2xl mb-5 w-full h-16 bg-primary-dark-100">
        <div className="w-[276px]">
          <img src={eventHead} alt="" className="object-cover" />
        </div>
      </span>
      <div className='m-auto mt-5'>
        <MysticCard
          place={1}
          text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
        />
        <MysticCard
          place={1}
          text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
        />
        <MysticCard
          place={1}
          text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
        />
        <MysticCard
          place={1}
          text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
        />
        <MysticCard
          place={1}
          text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
        />
      </div>
    </div>
  );
};
