'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function RefreshOnFocus() {
  const { refresh } = useRouter();

  useEffect(() => {
    const onFocus = () => {
      document.querySelector('html')?.classList.remove('scroll-smooth');
      refresh();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', onFocus);
    }
    return () => window.removeEventListener('focus', onFocus);
  }, [refresh]);

  return null;
}
