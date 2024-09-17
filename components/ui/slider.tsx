'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full max-w-[250px] touch-none select-none items-center',
      className
    )}
    {...props}>
    <SliderPrimitive.Track className='relative h-[18px] w-full grow overflow-hidden rounded-full bg-[#D1B9B0]'>
      <SliderPrimitive.Range className='absolute h-full bg-gradient-to-r from-[#FF953F] to-[#974EF2]' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-6 w-6 cursor-grab rounded-full border-2 border-[#FEFCFB] bg-theme_orange_dark_2 transition-colors focus:cursor-grabbing' />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
