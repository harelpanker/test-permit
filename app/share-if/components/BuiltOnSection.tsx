import Header from './built-on-section/Header';
import BuiltOnRow from './built-on-section/BuiltOnRow';

import userDesktop from '../assets/built-on/user-management.svg';
import userMobile from '../assets/built-on/user-management-mobile.svg';
import auditDesktop from '../assets/built-on/audit-log.svg';
import auditMobile from '../assets/built-on/audit-log-mobile.svg';

const BuiltOnSection = () => {
  const userManagementLink =
    'https://docs.permit.io/embeddable-uis/element/user-management';
  const auditLink = 'https://docs.permit.io/embeddable-uis/element/audit-logs';
  const dataManagement = [
    'Allow your users to manage access control and permissions within safe boundaries.',
    'Enable users to effortlessly manage user permissions in a secure, embeddable UI component.',
    'Use permission levels to define who can manage users, view the component, and more.',
  ];
  const dataAudit = [
    'Provide your users with decision-monitoring capabilities for each access control policy',
    'Use the permission levels to define who can view access control audit logs',
    'Track and trace user activity in an easy-to-use, secure, embeddable UI component.',
    'Enforce security and provide your users with a detailed history of access events.',
  ];
  return (
    <section className='pt-[54px] lg:px-12 lg:pb-24 lg:pt-36'>
      <div className='container flex max-w-[480px] flex-col gap-y-14 lg:max-w-[1065px] lg:gap-y-24'>
        <Header />
        <BuiltOnRow
          title='User Management'
          listArray={dataManagement}
          href={userManagementLink}
          linkText='User Management Docs'
          imageDesktopSrc={userDesktop}
          imageMobileSrc={userMobile}
        />
        <BuiltOnRow
          title='Audit Logs'
          listArray={dataAudit}
          href={auditLink}
          linkText='Audit Logs Docs'
          imageDesktopSrc={auditDesktop}
          imageMobileSrc={auditMobile}
        />
      </div>
    </section>
  );
};

export default BuiltOnSection;
