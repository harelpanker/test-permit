import { FC, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type ToggleGroupWrapperMobileProps = {
  onClick: () => void;
};

const ToggleGroupWrapperMobile: FC<ToggleGroupWrapperMobileProps> = ({
  onClick,
}) => {
  const [state, setState] = useState(true);
  const ToggleItem = ({
    name,
    isRight,
    state,
    onClick,
  }: {
    name: string;
    isRight?: boolean;
    state: boolean;
    onClick: () => void;
  }) => (
    <ToggleGroupItem
      onClick={() => {
        onClick();
        setState((state) => !state);
      }}
      className={`${
        isRight
          ? 'rounded-bl-none rounded-tl-none border-l-0'
          : 'rounded-br-none rounded-tr-none border-r-0'
      } relative h-auto overflow-hidden border border-[#D1B9B0]
      bg-[#FEF8F4] p-2 text-[#451E11] hover:bg-[#FFF1E7]
      [&[data-state="off"]]:hover:bg-[#FFF1E7] [&[data-state="off"]]:hover:text-[#451E11]
      [&[data-state="on"]]:pointer-events-none [&[data-state="on"]]:border-[#FFB381]
       [&[data-state="on"]]:bg-[#FFE8D7] [&[data-state="on"]]:text-[#ED5F00]`}
      value={name}>
      <div className='relative z-20'>{name}</div>
      <div
        className={`absolute left-0 top-0 h-full w-full rounded-[5px] border-[1px] border-[#FFB381] transition ${
          state ? 'opacity-100' : 'opacity-0'
        } ${isRight && state ? '!opacity-0' : ''} ${
          isRight && !state ? '!opacity-100' : ''
        } ${
          isRight
            ? 'rounded-bl-none rounded-tl-none border-l-0'
            : 'rounded-br-none rounded-tr-none border-r-0'
        }`}
      />
    </ToggleGroupItem>
  );

  return (
    <ToggleGroup
      style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}
      className='relative grid grid-cols-2 gap-0 rounded-[5px] text-sm font-semibold leading-none text-[#451E11]'
      type='single'
      defaultValue='Policy UI Editor'>
      <ToggleItem name='Policy UI Editor' state={state} onClick={onClick} />
      <ToggleItem
        name='Policy as Code'
        state={state}
        onClick={onClick}
        isRight
      />
      <div className='absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#FFB381]' />
    </ToggleGroup>
  );
};

export default ToggleGroupWrapperMobile;
