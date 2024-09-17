import AccessSharing from './town-section/AccessSharing';
import NewShareIf from './town-section/NewShareIf';

const TownSection = () => {
  return (
    <section className='mt-[2px] flex flex-col'>
      <NewShareIf />
      <AccessSharing />
    </section>
  );
};

export default TownSection;
