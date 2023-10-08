import Script from 'next/script'
import { version } from '@/../../package.json'

export const RumAnalytics = () => {
  return (
    <Script id="rum-analytics">
      {`
 (function(h,o,u,n,d) {
   h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
   d=o.createElement(u);d.async=1;d.src=n
   n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
 })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v4/datadog-rum.js','DD_RUM')
 window.DD_RUM.onReady(function() {
   window.DD_RUM.init({
     clientToken: ${process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN},
     applicationId: ${process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID},
     site: ${process.env.NEXT_PUBLIC_DATADOG_SITE},
     service: 'rafer.dev',
     env: ${process.env.NEXT_PUBLIC_DATADOG_ENV},
     version: ${version}, 
     sessionSampleRate: 100,
     sessionReplaySampleRate: 20,
     trackUserInteractions: true,
     trackResources: true,
     trackLongTasks: true,
     defaultPrivacyLevel: 'mask-user-input',
   });

   window.DD_RUM.startSessionReplayRecording();
 })
`}
    </Script>
  )
}
