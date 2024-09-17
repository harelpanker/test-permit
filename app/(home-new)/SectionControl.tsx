import ControlCard from './components/ControlCard';
import TypographyH2 from './components/TypographyH2';

import card1 from '../(home-new)/assets/control/card1.png';
import card2 from '../(home-new)/assets/control/card2.png';
import card3 from '../(home-new)/assets/control/card3.svg';
import card4 from '../(home-new)/assets/control/card4.svg';
import card1mobile from '../(home-new)/assets/control/card1mobile.png';
import card2mobile from '../(home-new)/assets/control/card2mobile.svg';
import card3mobile from '../(home-new)/assets/control/card3mobile.svg';
import card4mobile from '../(home-new)/assets/control/card4mobile.svg';
import icon1 from '../(home-new)/assets/control/icon1.svg';
import icon2 from '../(home-new)/assets/control/icon2.svg';
import icon3 from '../(home-new)/assets/control/icon3.svg';
import icon4 from '../(home-new)/assets/control/icon4.svg';

const SectionControl = () => {
  return (
    <section className='relative z-20 px-5 pb-14 pt-[5.25rem] text-theme_orange_12 lg:pb-24 lg:pt-36'>
      <div className='container relative z-20 flex max-w-6xl flex-col gap-12'>
        <header className='text-center'>
          <TypographyH2>
            <span className='lg:block'>All of your access control </span>needs{' '}
            <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
              in one place.
            </span>
          </TypographyH2>
        </header>
        {/* cards */}
        <div className='mx-auto flex max-w-[516px] flex-col gap-y-14 lg:grid lg:max-w-full lg:grid-cols-2 lg:gap-x-14'>
          <div className='flex flex-col gap-10 lg:gap-14'>
            {/* card 2 */}
            <ControlCard
              cardBGOption='bg2'
              cardImage={card2}
              isCenterImage={false}
              tagIcon={icon2}
              tag='Authorization Elements'
              title='Create and embed'
              text='Embed customizable access control elements like User Management, Approval Flows, and Audit Logs directly into your app'
              cardLink='/elements'
              imageMobile={card2mobile}
            />
            {/* card 3 */}
            <ControlCard
              cardBGOption='bg1'
              cardImage={card3}
              tagIcon={icon3}
              tag='Audit Logs'
              title='Access powerful audit logs'
              text='Enjoy automatically generated audit logs for your app and the permission management control plane, and easily propagate them to any logging solution'
              imageMobile={card3mobile}
              cardLink='https://docs.permit.io/how-to/use-audit-logs/types-and-filtering'
              isExternalLink
            />
          </div>
          <div className='flex flex-col gap-10 lg:mt-40 lg:gap-14'>
            {/* card 1 */}
            <ControlCard
              cardBGOption='bg1'
              cardImage={card1}
              tagIcon={icon1}
              tag='Authorization for Authorization'
              title="Manage your team's access"
              text="Manage and audit who can grant, change and revoke permissions within your application's authorization system."
              isExternalLink
              cardLink='https://docs.permit.io/manage-your-account/workspace-settings/#member-management'
              imageMobile={card1mobile}
            />
            {/* card 4 */}
            <ControlCard
              cardBGOption='bg1'
              cardImage={card4}
              tagIcon={icon4}
              tag='Gitops'
              title='Enjoy true Policy-as-Code'
              text='Manage your policies in a cloud native GitOps flow, combining application level authorization with infra admissions in a unified policy repo.'
              imageMobile={card4mobile}
              cardLink='https://docs.permit.io/integrations/gitops/overview'
              isExternalLink
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionControl;
