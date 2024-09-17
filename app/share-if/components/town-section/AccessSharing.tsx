import AccessSharingCard from './AccessSharingCard';
import AccessSharingHeader from './AccessSharingHeader';

import card1 from '../../assets/access-sharing/card1.svg';
import card2 from '../../assets/access-sharing/card2.svg';

const AccessSharing = () => {
  const hrefRequest =
    'https://docs.permit.io/embeddable-uis/element/access-request';
  const hrefApproval =
    'https://docs.permit.io/embeddable-uis/element/operation-approval';
  const accessRequestData = [
    'Uses an easily recognizable, familiar UI (Just like Google Drive / Dropbox)',
    "Fully customizable via UI and API to fit your application's needs.",
    "Once a request is made, it's sent to your designated admin, who can approve/deny it via a simple, secure UI.",
  ];
  const accessApprovalData = [
    'Manage the approval process for critical actions (Like a wire transfer from a joint account).',
    'Allow admins to round up and approve/deny operation requests in a single embedded component. ',
    'Delegate access control to your end users with confidence while maintaining strict oversight',
  ];

  return (
    <div className='container flex max-w-[480px] flex-col items-center gap-y-14 px-5 py-14 lg:max-w-[1132px] lg:items-start lg:py-36 xl:px-0'>
      <AccessSharingHeader />
      <AccessSharingCard
        title='Access Request'
        description='Allow users to request restricted resource access directly from your application'
        array={accessRequestData}
        linkHref={hrefRequest}
        linkText='Access Request Docs'
        imageSrc={card1}
      />
      <AccessSharingCard
        title='Operation Approval'
        description='Enable users to submit approval requests - keep a tight grip on the approval process'
        array={accessApprovalData}
        linkHref={hrefApproval}
        linkText='Operation Approval Docs'
        imageSrc={card2}
      />
    </div>
  );
};

export default AccessSharing;
