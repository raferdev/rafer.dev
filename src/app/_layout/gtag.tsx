import Script from 'next/script'

import { __env } from '@/config/env'

export const GoogleAnalytics = () => (
  <>
    <Script async src={__env.NEXT_PUBLIC_GA_SRC} />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${__env.NEXT_PUBLIC_GA_TAG_ID}');
        `}
    </Script>
  </>
)
