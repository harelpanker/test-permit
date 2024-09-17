import { FC } from 'react';
import { Button } from './ui/button';
import JoinModule from './JoinModule';

type CalendlyModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  url?: string;
  text?: string;
};

const CalendlyModal: FC<CalendlyModalProps> = ({
  isOpen,
  closeModal,
  openModal,
  url = 'https://calendly.com/d/44n-hc4-th3',
  text = 'Talk to Us',
}) => {
  return (
    <>
      <Button onClick={openModal} variant='outline'>
        {text}
      </Button>
      <JoinModule
        isOpen={isOpen}
        closeModal={closeModal}
        url={url}
        width={'80vw'}
      />
    </>
  );
};

export default CalendlyModal;
