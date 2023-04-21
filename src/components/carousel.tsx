import carousel from '../assets/carousel.png';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';

export const Carousel: React.FC = () => {
  return (
    <div className="relative w-mobile m-auto h-[225px] mb-[220px] mt-10">
      <h5 className="text-16 text-start font-mtavruli">მსგავსი აქციები</h5>
      <div className="relative h-48 m-auto overflow-x-scroll scrollbar-hide">
        <div className="absolute  w-screen top-5 flex gap-4 overflow-x-scroll">
          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#0D649B] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მიიღე 300% ქეშბ…</span>
              <span className="text-11">
                retrieve 300% bet amount as real mone…
              </span>
            </div>
          </div>

          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel1} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#EF541C] from-50% via-[#EF541C99] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მალე</span>
              <span className="text-11">
                retrieve 300% bet amount as real money…
              </span>
            </div>
          </div>

          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel2} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#1A176C] from-40% via-[#1A176C99] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მოიგე ჯეკპოტი</span>
              <span className="text-11">
                retrieve 300% bet amount as real mone…
              </span>
            </div>
          </div>

          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#0D649B] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მიიღე 300% ქეშბ…</span>
              <span className="text-11">
                retrieve 300% bet amount as real mone…
              </span>
            </div>
          </div>

          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel1} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#EF541C] from-50% via-[#EF541C99] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მალე</span>
              <span className="text-11">
                retrieve 300% bet amount as real money…
              </span>
            </div>
          </div>

          <div className="rounded-[5px] h-[180px] overflow-hidden relative flex-shrink-0">
            <img src={carousel2} alt="first action poster" />
            <div className="w-40 h-[113px] bg-gradient-to-t from-[#1A176C] from-40% via-[#1A176C99] z-50 absolute bottom-0 px-3 pb-5 flex flex-col justify-end gap-2">
              <span className="text-12">მოიგე ჯეკპოტი</span>
              <span className="text-11">
                retrieve 300% bet amount as real mone…
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
