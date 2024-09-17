import { FC } from 'react';

type layoutProps = { children: React.ReactNode };

const layout: FC<layoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
