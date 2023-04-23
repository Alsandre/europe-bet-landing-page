import { DropDownIcon, PrimaryCard } from '../UI';
import { Table, PrizeCard, DailyShedule } from '../components';
import { leaderboardData } from '../constants';

import travel from '../assets/travel-icon-sm.png';
import ticket from '../assets/ticket-icon-sm.png';
import voucher from '../assets/voucher-icon-sm.png';
import { SpecialEvent } from '../components/specialEvent';
import specialEvent from '../assets/special-event.png';
import specialEvent1 from '../assets/special-event1.png';
import { DropDownNode } from '../components/dropDownNode';

export const NewYearSeries: React.FC = () => {
  return (
    <>
      <PrimaryCard className="mb-2">
        <h3 className="rounded-t-2xl bg-primary-dark-100 py-6 text-center">
          ტურნირები და სატელიტები
        </h3>
        <DailyShedule />
        <p className="text-center my-3 text-14">
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
        </p>
        <p className="text-center text-14">
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </p>
        <button className="block w-36 h-8 rounded-[5px] bg-orange-22 py-[6px] px-[18px] m-auto mt-4 mb-5 text-14">
          პოკერის ლობი
        </button>
      </PrimaryCard>
      <PrimaryCard>
        <h3 className="rounded-2xl bg-primary-dark-100 py-6 text-center font-bold">
          მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </h3>
        <Table title={<DropDownNode />} data={leaderboardData} />
        <PrizeCard icon={travel} text="The Festival in Malta-ს საგზური" />
        <PrizeCard
          icon={ticket}
          text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"
        />
        <PrizeCard icon={voucher} text="„ალტას“ ვაუჩერი" />
        <div className="flex flex-col py-4">
          <span className="inline-block text-center text-13">
            * ლიდერბორდის შედეგები განახლდება
          </span>
          <a href="" className="text-orange-21 text-center underline text-13">
            პოკერის ლობიში
          </a>
        </div>
        <p className="text-center text-13 px-2 pb-4">
          * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
          სატელიტები
        </p>
      </PrimaryCard>

      <div>
        <h5 className="font-bold text-12 mt-6 mb-5 w-mobile m-auto">
          ყოველდღიური ტურნირები და სატელიტები
        </h5>
        <SpecialEvent
          title="Omaha Highrollers"
          prize={40000}
          buyIn="XXX"
          date={new Date(2023, 11, 27)}
          backgroundImg={specialEvent1}
        />
        <SpecialEvent
          title="Omaha Highrollers"
          prize={40000}
          buyIn="XXX"
          date={new Date(2023, 11, 27)}
          backgroundImg={specialEvent1}
        />
        <SpecialEvent
          title="Omaha Highrollers"
          prize={40000}
          buyIn="XXX"
          date={new Date(2023, 11, 27)}
          backgroundImg={specialEvent}
        />
        <p className="font-medium text-14 w-mobile m-auto">
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </div>

      <PrimaryCard className="mt-5 pt-6 pb-4 flex flex-col text-center">
        <p className="text-16 font-bold pb-2">
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </p>
        <span className="text-12 opacity-90">
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </span>
      </PrimaryCard>
    </>
  );
};
