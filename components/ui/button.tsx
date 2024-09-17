import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex font-semibold text-lg border-[2px] border-transparent
  justify-center gap-2 items-center whitespace-nowrap
  rounded-full ring-offset-white transition-colors focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950
  dark:focus-visible:ring-slate-300 px-6 py-3 tracking-[-0.5px] font-poppins`,
  {
    variants: {
      variant: {
        default: `bg-theme_purple font-semibold text-theme_white
         ring-offset-theme_purple transition hover:border-theme_purple hover:bg-[#A666F4]
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme_black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline:
          'hover:border-theme-orange-dark-2 rounded-full border-theme_bronze_7 bg-[#FFF1E7] text-theme_orange_dark_2 hover:border-[#A18072] hover:bg-[#FFCCA7]',
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        ghost: 'hover:bg-slate-100 hover:text-slate-900',
        link: 'text-[#7011E4] underline-offset-4 font-inter hover:underline dark:text-slate-50 text-base',
      },
      size: {
        default: 'h-12 px-5 py-3',
        sm: 'h-9 text-sm px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
