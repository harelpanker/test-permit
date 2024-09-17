import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ApplayModuleProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const ApplayModule: FC<ApplayModuleProps> = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-slate-900 bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full h-[500px] max-h-[85vh] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                {/* Airtable form imbed */}
                <iframe
                  className='airtable-embed'
                  src='https://airtable.com/embed/shriULqONXZXo8YM7?backgroundColor=green'
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                  }}></iframe>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ApplayModule;
