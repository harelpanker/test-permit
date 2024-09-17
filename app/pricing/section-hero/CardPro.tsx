'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { sliderSteps } from './steps';

import check from '../assets/hero-section/check_small.svg';

const CardPro = () => {
  const [state, setState] = useState<'by user' | 'by tenant'>('by user');
  const [users, setUsers] = useState(600);
  const [value, setValue] = useState(150);
  const [usersTenant, setUsersTenant] = useState(0);
  const [valueTenant, setValueTenant] = useState(0);
  const handleToggleImage = () =>
    setState(state === 'by user' ? 'by tenant' : 'by user');
  const changeRangeHandler = (sliderIndex: number[]) => {
    if (sliderIndex[0] !== undefined) {
      const [users, value] = sliderSteps[sliderIndex[0]];
      setUsers(users);
      setValue(value);
    }
  };
  const changeRangeHandlerTenant = (sliderIndex: number[]) => {
    if (sliderIndex[0] !== undefined) {
      const [usersTenant, valueTenant] = sliderSteps[sliderIndex[0]];
      setUsersTenant(usersTenant);
      setValueTenant(valueTenant);
    }
  };

  const href =
    'https://app.permit.io?utm_source=website&utm_medium=website-pricing&utm_campaign=pricing-pro';

  const ToggleItem = ({
    name,
    isRight,
  }: {
    name: string;
    isRight?: boolean;
  }) => (
    <ToggleGroupItem
      onClick={() => handleToggleImage()}
      className={`${
        isRight
          ? 'rounded-bl-none rounded-tl-none border-l-0'
          : 'rounded-br-none rounded-tr-none border-r-0'
      } relative h-auto overflow-hidden bg-[#FEF8F4] p-2 text-[#451E11] outline outline-2
          -outline-offset-1 hover:bg-[#FFF1E7] [&[data-state="off"]]:outline-transparent [&[data-state="off"]]:hover:bg-[#FFF1E7]
           [&[data-state="off"]]:hover:text-[#451E11] [&[data-state="on"]]:pointer-events-none
           [&[data-state="on"]]:bg-[#FFE8D7] [&[data-state="on"]]:text-[#ED5F00] [&[data-state="on"]]:outline-[#FFB381]
           `}
      value={name}>
      <div className='relative z-20'>{name}</div>
    </ToggleGroupItem>
  );

  return (
    <div
      className='order-first flex w-full max-w-[340px] flex-col gap-y-14 rounded-lg bg-[#FEF8F4] px-6 py-9 text-sm outline outline-4 outline-[#FFB381] lg:order-none'
      style={{ boxShadow: '0px 3.5px 22px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className='relative flex min-h-[300px] flex-col justify-between'>
        <div className='flex flex-col gap-y-[10px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[26px] font-semibold leading-relaxed'>Pro</h2>
            <ToggleGroup
              style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}
              className='relative grid grid-cols-2 gap-0 rounded-[7px] border border-[#D1B9B0] text-sm font-medium leading-none text-[#451E11]'
              type='single'
              defaultValue='By User'>
              <ToggleItem name='By User' />
              <ToggleItem name='By Tenant' isRight />
              <div className='absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#FFB381]' />
            </ToggleGroup>
          </div>
          <hr className='border-[#EADDD7]' />
          <p className='font-medium leading-tight text-[#846358]'>
            Ideal for larger applications - all basic and advanced features -
            only pay for active users.
          </p>
          <div className='flex flex-col gap-y-1'>
            {value <= 4200 ? (
              <>
                {state === 'by user' && (
                  <p className='font-semibold'>
                    {users.toLocaleString('en-US')} Monthly Active Users
                  </p>
                )}
              </>
            ) : (
              <>
                {state === 'by user' && (
                  <p className='font-semibold'>20,000+ Monthly Active Users</p>
                )}
              </>
            )}
            {valueTenant <= 4200 ? (
              <>
                {state === 'by tenant' && (
                  <p className='font-semibold'>
                    {valueTenant !== 20000
                      ? Math.round(usersTenant * 0.35).toLocaleString('en-US')
                      : '7,000'}{' '}
                    Tenants
                  </p>
                )}
              </>
            ) : (
              <>
                {state === 'by tenant' && (
                  <p className='font-semibold'>7,000+ Tenants</p>
                )}
              </>
            )}
            {/*  */}
            <div className='relative'>
              <div
                className={`${
                  state === 'by tenant' ? 'pointer-events-none opacity-0' : ''
                }`}>
                <Slider
                  onValueChange={(sliderIndex) =>
                    changeRangeHandler(sliderIndex)
                  }
                  defaultValue={[6]}
                  step={1}
                  min={0}
                  max={sliderSteps.length - 1}
                />
              </div>
              <div
                className={`absolute inset-0 ${
                  state === 'by user' ? 'pointer-events-none opacity-0' : ''
                }`}>
                <Slider
                  onValueChange={(sliderIndex) =>
                    changeRangeHandlerTenant(sliderIndex)
                  }
                  defaultValue={[0]}
                  step={1}
                  min={0}
                  max={sliderSteps.length - 1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start gap-y-3'>
          <div>
            {/*  */}
            {value <= 4200 ? (
              <>
                {state === 'by user' && (
                  <h3 className='flex items-center gap-1 text-[26px] font-semibold leading-relaxed'>
                    <span className='tracking-[-1px]'>
                      ${value.toLocaleString('en-US')}
                    </span>{' '}
                    <span className='text-sm'>/ Monthly Total</span>
                  </h3>
                )}
              </>
            ) : (
              <>
                {state === 'by user' && (
                  <h3 className='flex items-center gap-1 text-[26px] font-semibold leading-relaxed'>
                    Let&apos;s talk
                  </h3>
                )}
              </>
            )}
            {valueTenant <= 4200 ? (
              <>
                {state === 'by tenant' && (
                  <h3 className='flex items-center gap-1 text-[26px] font-semibold leading-relaxed'>
                    <span className='tracking-[-1px]'>
                      ${valueTenant.toLocaleString('en-US')}
                    </span>{' '}
                    <span className='text-sm'>/ Monthly Total</span>
                  </h3>
                )}
              </>
            ) : (
              <>
                {state === 'by tenant' && (
                  <h3 className='flex items-center gap-1 text-[26px] font-semibold leading-relaxed'>
                    Let&apos;s talk
                  </h3>
                )}
              </>
            )}
            {state === 'by user' && (
              <p
                className={`font-medium text-[#846358] ${
                  value <= 4200 ? 'opacity-100' : 'opacity-0'
                }`}>
                $
                {value !== 20000 && users !== 0 && value !== 0
                  ? (value / users).toFixed(2)
                  : users === 0 || value === 0
                  ? '0'
                  : '7,000'}{' '}
                per user,{' '}
                {value !== 20000
                  ? Math.round(users * 0.35).toLocaleString('en-US')
                  : '7,000'}{' '}
                tenants
              </p>
            )}
            {state === 'by tenant' && (
              <p
                className={`font-medium text-[#846358] ${
                  valueTenant <= 4200 ? 'opacity-100' : 'opacity-0'
                }`}>
                $
                {valueTenant !== 20000 && usersTenant !== 0 && valueTenant !== 0
                  ? (valueTenant / (usersTenant * 0.35)).toFixed(2)
                  : usersTenant === 0 || valueTenant === 0
                  ? '0'
                  : '7,000'}{' '}
                per tenant, up to {usersTenant.toLocaleString('en-US')} MAU
              </p>
            )}
          </div>
          <Button asChild>
            <a href={href} rel='noopener noreferrer' target='_blank'>
              Get Pro
            </a>
          </Button>
        </div>
        <p className='absolute -bottom-7 top-auto font-medium text-[#846358] '>
          For special offers - Talk to us
        </p>
      </div>

      <div className='flex flex-col gap-y-[10px] border-t border-[#EADDD7] pt-[10px]'>
        <h4 className='font-medium'>
          All <span className='font-bold'>Community</span> Features, plus:
        </h4>
        <ul className='flex flex-col gap-y-[10px] text-[#846358]'>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              Manage policy-as-code with{' '}
              <a
                className='text-theme_purple transition hover:text-theme_purple/70'
                target='_blank'
                rel='noreferrer'
                href='https://docs.permit.io/integrations/gitops/overview/'>
                GitOPS
              </a>
            </p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>14 day audit-log retention (Extendable)</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Dedicated Slack Support Channel</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Priority Email, Chat, and Zoom Support</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardPro;
