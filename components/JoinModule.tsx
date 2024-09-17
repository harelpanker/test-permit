import { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type JoinModuleProps = {
  isOpen: boolean;
  closeModal: () => void;
  url?: string;
  width?: string;
};

const JoinModule: FC<JoinModuleProps> = ({
  isOpen,
  closeModal,
  url,
  width,
}) => {
  url = url || 'https://hello.permit.io/newsletter';

  return (
    <Transition
      show={isOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
    >
      <Dialog
        open={isOpen}
        as='div'
        onClose={closeModal}
        className='fixed z-50 inset-0 overflow-y-auto'
      >
        <div className='flex items-center justify-center min-h-screen p-4'>
          <Transition.Child
            as='div'
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-slate-900 opacity-50' />
          </Transition.Child>
          <Transition.Child
            as='div'
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              className={`relative bg-white rounded text-center max-w-[90vw] w-[770px] mx-auto p-5 py-10`}
              style={{ width }}
            >
              <div className='mb-5 flex justify-start'>
                <iframe
                  className='w-full'
                  title='subscribe'
                  src={url}
                  style={{ border: 'none', minHeight: '80vh' }}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default JoinModule;
