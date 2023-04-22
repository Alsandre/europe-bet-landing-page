import promoLeft from '../assets/promo-left-img-m.png';
import promoRight from '../assets/promo-right-img-m.png';
import cardsLeft from '../assets/promo-left-img.png'
import cardsRight from '../assets/promo-right-img.png'
import ClockIcon from './ClockIcon';

export const DailyShedule: React.FC = () => {
  return (
    <div className='bg-primary-dark-500 rounded-b-2xl relative h-[169px]'>
      <p className='text-center font-bold text-14 pt-3 pb-4'>სერიის ფარგლებში ყოველდღიურად გაიმართება 3 ივენთი:</p>
      <div className='relative'>
        <span className='drop-shadow-12px absolute h-8 w-[200px] border-2 border-orange-22 rounded-[10px] overflow-hidden left-1/2 -translate-x-1/2' />
        <div className="h-8 w-[200px] border-2 border-orange-22 rounded-[10px] relative m-auto overflow-hidden">
          <span className=" bg-orange-22 w-[60px] h-[60px] rounded-full flex items-center justify-center absolute top-0 -translate-x-[40%] -translate-y-[16px]">
            <ClockIcon className="translate-x-[65%]" />
          </span>
          <span className='ml-11'>19:00 / 19:30 / 20:00</span>
        </div>
      </div>
      <span className='block w-[127px] h-[80px] absolute -left-4 bottom-0'><img src={cardsLeft} alt="" className='w-full h-full'/></span>
      <span className='block w-[127px] h-[80px] absolute -right-4 bottom-0'><img src={cardsRight} alt="" className='w-full h-full'/></span>
    </div>
  );
};
