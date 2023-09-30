import Script from 'next/script'

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
      clientToken: 'pubbc1f54e837e21deca655ee64984730f2',
      applicationId: 'b96ee7a5-bee5-4a91-a436-d3ff5517a43d',
      site: 'datadoghq.com',
      service: 'raferdev',
      env: '<ENV_NAME>',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });

    window.DD_RUM.startSessionReplayRecording();
  })`}
    </Script>
  )
}
