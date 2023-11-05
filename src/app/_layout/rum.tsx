import Script from 'next/script'

import { __env } from '@/config/env'
import { __site } from '@/config/site'

export const RumAnalytics = () => (
  <Script id="rum-analytics">
    {`(function(h,o,u,n,d) {
   h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
   d=o.createElement(u);d.async=1;d.src=n
   n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
    })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v4/datadog-rum.js','DD_RUM')
    window.DD_RUM.onReady(function() {
    window.DD_RUM.init({
     clientToken: ${__env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN},
     applicationId: ${__env.NEXT_PUBLIC_DATADOG_APPLICATION_ID},
     site: ${__env.NEXT_PUBLIC_DATADOG_SITE},
     service: 'rafer.dev',
     env: ${__env.NEXT_PUBLIC_DATADOG_ENV},
     version: ${__site.rum.version}, 
     sessionSampleRate: ${__env.NEXT_PUBLIC_DATADOG_SESSION_SAMPLE_RATE},
     sessionReplaySampleRate: ${__env.NEXT_PUBLIC_DATADOG_REPLAY_SAMPLE_RATE},
     trackUserInteractions: ${__env.NEXT_PUBLIC_DATADOG_TRACK_USER_INTERACTIONS},
     trackResources: ${__env.NEXT_PUBLIC_DATADOG_ENV_TRACK_RESOURCES},
     trackLongTasks: ${__env.NEXT_PUBLIC_DATADOG_ENV_TRACK_LONG_TASKS},
     defaultPrivacyLevel: 'mask-user-input',
   });

   window.DD_RUM.startSessionReplayRecording();
 })`}
  </Script>
)
