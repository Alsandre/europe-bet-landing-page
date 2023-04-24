import { PrimaryCard } from '../UI';
import { CardHorizontal } from '../UI/cardHorizontal';
import {
  EventIcon,
  FinalStageHeader,
  HotelIcon,
  MoneyIcon,
  MysticKeyEvent,
  TicketIcon,
  TravelCard
} from '../components';
import { TravelPack } from '../components/travelPack';

export const FinalStage: React.FC = () => {
  return (
    <>
      <div className="w-mobile m-auto p-5 rounded-2xl border-4 border-primary-dark-200 bg-primary-dark-500">
        <FinalStageHeader />
        <CardHorizontal className="pl-3 pr-2">
          <h5 className="font-bold text-12 text-center">
            15-დან 21 მაისის ჩათვლით მალტა პკერის ფესტივალს უმასპინძლებს
          </h5>
        </CardHorizontal>
        <PrimaryCard className="mt-5">
          <h5 className="rounded-t-2xl bg-primary-dark-100 py-4 text-center text-14 font-bold mb-2">
            A კატეგორიის საგზურში შედის
          </h5>
          <TravelPack text="ორმხრივი ავიაბილეთი" icon={<TicketIcon />} />
          <TravelPack
            text="The Festival in Malta-ს მეინ ივენთის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack
            text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack text="სასტუმრო" icon={<HotelIcon />} />
          <TravelPack text="€500 სახარჯი ფული" icon={<MoneyIcon />} />
        </PrimaryCard>
        <PrimaryCard className="mt-5">
          <h5 className="rounded-t-2xl bg-primary-dark-100 py-4 text-center text-14 font-bold mb-2">
            A კატეგორიის საგზურში შედის
          </h5>
          <TravelPack text="ორმხრივი ავიაბილეთი" icon={<TicketIcon />} />
          <TravelPack
            text="The Festival in Malta-ს მეინ ივენთის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack
            text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack text="სასტუმრო" icon={<HotelIcon />} />
          <TravelPack text="€500 სახარჯი ფული" icon={<MoneyIcon />} />
        </PrimaryCard>
        <PrimaryCard className="mt-5">
          <h5 className="rounded-t-2xl bg-primary-dark-100 py-4 text-center text-14 font-bold mb-2">
            A კატეგორიის საგზურში შედის
          </h5>
          <TravelPack text="ორმხრივი ავიაბილეთი" icon={<TicketIcon />} />
          <TravelPack
            text="The Festival in Malta-ს მეინ ივენთის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack
            text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
            icon={<EventIcon />}
          />
          <TravelPack text="სასტუმრო" icon={<HotelIcon />} />
        </PrimaryCard>
      </div>
      <PrimaryCard className='w-mobile m-auto'>
        <h5 className="rounded-t-2xl bg-primary-dark-100 py-4 text-center text-14 font-bold mb-2">
          მოიგე საგზური 30 აპრილის ტურნირებზე
        </h5>
        <TravelCard
          variant="single-ticket"
          title="„Holdem Grinders”"
          text="C კატეგორიის 1 საგზური"
        />
        <TravelCard
          variant="single-ticket"
          title="“Cashgame Sharks”"
          text="C კატეგორიის 1 საგზური"
        />
        <TravelCard
          variant="single-ticket"
          title="„Holdem Grinders”"
          text="C კატეგორიის 1 საგზური"
        />
        <TravelCard
          variant="double-ticket"
          title="„The Festival in Malta, GTD“"
          text="B კატეგორიის 1 საგზური"
          additionalText="C კატეგორიის 1 საგზური"
          note="*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით."
        />
        <TravelCard
          variant="single-ticket"
          title="“Cashgame Sharks”"
          text="C კატეგორიის 1 საგზური"
          note="*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები."
        />
        <TravelCard
          variant="single-ticket"
          title="“Cashgame Sharks”"
          text="C კატეგორიის 1 საგზური"
          note="*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები."
        />
        <p className='w-mobile m-auto mb-[10px] text-center text-13'>
          * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
          ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
        </p>
        <p className='w-mobile m-auto text-center text-13'>
          *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
          ბაი-ინის გადახდით.
        </p>
      </PrimaryCard>
      <MysticKeyEvent />
    </>
  );
};
