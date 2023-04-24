import { createPortal } from 'react-dom';
import { Modal, Overlay } from '../../UI';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { useMediaQuery } from 'react-responsive';

const PokerLegendsMalta: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: '1280px' });
  return (
    <>
      {isDesktop && createPortal(<Overlay />, document.getElementById('react-portal') as HTMLElement)}
      <Modal isDesktop={isDesktop}>
        <Header isDesktop={isDesktop}/>
        <Main />
        <Footer />
      </Modal>
    </>
  );
};

export default PokerLegendsMalta;
