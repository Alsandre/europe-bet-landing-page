import ticket from '../assets/ticket-icon-sm.png';
import travel from '../assets/travel-icon-sm.png';
import voucher from '../assets/voucher-icon-sm.png';
import { leaderboardData } from '../constants';
import { LeaderBoard, PrizeCard, Table } from '../components';
import { PrimaryCard } from '../UI';

export const CashGames: React.FC = () => {
  return (
    <div>
      <PrimaryCard>
        <h3 className="rounded-2xl bg-primary-dark-100 py-6 text-center">
          "1₾ რეიქი = 1 ქულას"
        </h3>
        <Table title="TOP20 ლიდერბორდი ჰოლდემში" data={leaderboardData} />
        <PrizeCard icon={travel} text="The Festival in Malta-ს საგზური" />
        <PrizeCard
          icon={ticket}
          text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"
        />
        <PrizeCard icon={voucher} text="„ალტას“ ვაუჩერი" />
        <Table title="TOP20 ლიდერბორდი ჰოლდემში" data={leaderboardData} />
        <PrizeCard icon={travel} text="The Festival in Malta-ს საგზური" />
        <PrizeCard
          icon={ticket}
          text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"
        />
        <PrizeCard icon={voucher} text="„ალტას“ ვაუჩერი" />
        <div className='flex flex-col py-4'>
          <span className="inline-block text-center text-13">
            * ლიდერბორდის შედეგები განახლდება
          </span>
          <a href="" className="text-orange-21 text-center underline text-13">
            პოკერის ლობიში
          </a>
        </div>
      </PrimaryCard>
      <PrimaryCard className="mt-6 pt-6 pb-4 flex flex-col text-center">
        <p className="text-16 font-bold pb-2">
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </p>
        <span className="text-12 opacity-90">
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </span>
      </PrimaryCard>
    </div>
  );
};
