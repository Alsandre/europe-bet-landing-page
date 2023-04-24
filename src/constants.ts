import travelIcon from './assets/travel-icon-inline.png';
import ticketIcon from './assets/ticket-icon-inline.png';
export const leaderboardData = [
  { place: 1, voucher: '-', prize: 'A კატეგორიის საგზური', icon: travelIcon },
  { place: 2, voucher: '-', prize: 'B კატეგორიის საგზური', icon: ticketIcon },
  { place: 3, voucher: '1500₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 4, voucher: '1200₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 5, voucher: '1000₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 6, voucher: '800₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 7, voucher: '700₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 8, voucher: '600₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 9, voucher: '500₾', prize: 'სპეც ტურნირის ბილეთი', icon: null },
  { place: 10, voucher: '400₾', prize: 'სპეც ტურნირის ბილეთი', icon: null }
];

for (let i = 11; i < 100; i++) {
  let voucher = i < 20 ? 4500 / i : '-';
  let prize = i < 50 ? 'სპეც ტურნირის ბილეთი' : '-';
  leaderboardData.push({
    place: i,
    voucher: typeof voucher === 'number' ? voucher.toFixed(2) : voucher,
    prize: prize,
    icon: null
  });
}

export const monthListGE = [
  'იანვარი',
  'თებერვალი',
  'მარტი',
  'აპრილი',
  'მაისი',
  'ივნისი',
  'ივლისი',
  'აგვისტო',
  'სექტემბერი',
  'ოქტომბერი',
  'ნოემბერი',
  'დეკემბერი'
];
