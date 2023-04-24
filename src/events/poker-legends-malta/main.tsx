import { useState } from 'react';
import { CashGames, NewYearSeries, FinalStage } from '../../malta-series';
import { EventButton } from '../../UI';

export const Main: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('cash-games');
  return (
    <div>
      
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
