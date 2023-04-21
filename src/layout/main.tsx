import { useState } from 'react';
import { CashGames, NewYearSeries, FinalStage } from '../events';
import { EventButton } from '../UI';

export const Main: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('cash-games');
  return (
    <div>
      <div className="w-mobile m-auto">
        <div className="mb-4 mt-4">
          <span className="bg-primary-dark-200 rounded-2xl px-[10px] py-1 text-12 mr-2 opacity-90">
            სლოტები
          </span>
          <span className="text-14 opacity-90">10 სექტემბერი - 7 ნოემბერი</span>
        </div>
        <div className="flex flex-col gap-[14px] mb-[26px]">
          <span className="text-14 font-semibold font-mtavruli">
            მოიპოვე 10 საგზურიდან ერთ-ერთი
          </span>
          <span className="text-14 opacity-90">მოხვდი პოკერის ფესტივალზე მალტაში</span>
        </div>
      </div>
      <div className="w-mobile m-auto mb-8 flex h-[77px]">
        <EventButton title='Cash Games' period='28 ოქტ. - 7 ნოემ.' isActive={selectedEvent==='cash-games'} onClick={() => setSelectedEvent('cash-games')} />
        <EventButton title='New Year Series' period='10 - 29 დეკ.' isActive={selectedEvent==='new-year-series'} onClick={() => setSelectedEvent('new-year-series')} />
        <EventButton title='Final Stage' period='28 ოქტ. - 7 ნოემ.' isActive={selectedEvent==='final-stage'} onClick={() => setSelectedEvent('final-stage')} />
      </div>
      {selectedEvent === 'cash-games' && <CashGames />}
      {selectedEvent === 'new-year-series' && <NewYearSeries />}
      {selectedEvent === 'final-stage' && <FinalStage />}
    </div>
  );
};
