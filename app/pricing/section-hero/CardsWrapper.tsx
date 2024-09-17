import CardCommunity from './CardCommunity';
import CardEnterprise from './CardEnterprise';
import CardPro from './CardPro';

const CardsWrapper = () => {
  return (
    <div className='relative z-20 flex flex-wrap justify-center gap-6'>
      <CardCommunity />
      <CardPro />
      <CardEnterprise />
    </div>
  );
};

export default CardsWrapper;
