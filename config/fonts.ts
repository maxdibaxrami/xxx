import localFont from 'next/font/local';

export const SFProText = localFont({
  src: [
    {
      path: '/fonts/SFProText-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-SFProText',
});
