import ticket from '../assets/ticket-icon-sm.png';
import travel from '../assets/travel-icon-sm.png';
import voucher from '../assets/voucher-icon-sm.png';
import { leaderboardData } from '../constants';
import { LeaderBoard, PrizeCard, Table } from '../components';

export const CashGames: React.FC = () => {
  return (
    <div>
      <LeaderBoard title="1₾ რეიქი = 1 ქულას">
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
      <span>* ლიდერბორდის შედეგები განახლდება პოკერის ლობიში</span>
      </LeaderBoard>
    </div>
  );
};
