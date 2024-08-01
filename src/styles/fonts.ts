import localFont from 'next/font/local'

export const spaceGrotesk = localFont({
    src: [
        {
          path: './fonts/SpaceGrotesk-Light.woff2',
          weight: '300',
          style: 'normal',
        },
        {
          path: './fonts/SpaceGrotesk-Regular.woff2',
          weight: '400',
          style: 'normal',
        },
        {
          path: './fonts/SpaceGrotesk-Medium.woff2',
          weight: '500',
          style: 'normal',
        },
        {
          path: './fonts/SpaceGrotesk-Bold.woff2',
          weight: '700',
          style: 'normal',
        },
      ],
  variable: '--font-space-grotesk',
})