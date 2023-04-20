import { TableItem } from './tableItem';

const rewardsData = [
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' },
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' },
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' },
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' },
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' },
  { place: 1, voucher: '1500₾', prize: 'A კატეგორიის საგზური' }
];

export const Table: React.FC = () => {
  return (
    <div className="bg-primary-dark-200 p-4">
      <ul>
        {rewardsData.map(({place, voucher, prize}) => <TableItem place={place.toString()} voucher={voucher} prize={prize}  />)}
      </ul>
    </div>
  );
};
