import { AppPool, AppDef, IframeAppDef } from '@genesys/apps-v2-host';

// Could be a conversation ID
// or random UUID maybe
// could also be something like "main" for single groups
export const groupID = "4f09f81b-04f3-4646-8f3f-0b11c873ef5d";

export const appPool = new AppPool({}, {
  poolId: 'my-cool-app',
  hostAppName: 'My Cool App',
  hostAppVersion: '0.0.1',
  maxPoolSize: -1
});

const downloadChromeBrowserAppDef: AppDef = {
  id: 'downloadChromeBrowser',
  displayName: 'Download Chrome Browser',
  type: 'iframe',
  src: new URL('https://www.google.com/intl/en_US/chrome/'),
  sandbox: ['allow-scripts', 'allow-same-origin', 'allow-forms'],
  startBehavior: 'lazy',
  monochromicIcon: {
    type: 'sparkV3SvgSprite',
    classNames: ['chrome']
  },
  icon: {
    type: 'remoteVectorImage',
    url: new URL(
      'https://www.google.com/chrome/static/images/chrome-logo.svg'
    )
  }
};

export const appsSdkShowcaseIframeApp: IframeAppDef = {
  id: 'appsSdkShowcaseIframeApp',
  displayName: 'Apps SDK Showcase (Public)',
  type: 'iframe',
  sandbox: [
      'allow-same-origin',
      'allow-scripts',
      'allow-modals',
      'allow-popups',
      'allow-forms',
      'allow-downloads'
  ],
  src: new URL(
      'https://apps.inindca.com/appsv2-demo/apps/apps-sdk-showcase/public.html',
      window.location.origin + window.location.pathname
  ),
  monochromicIcon: {
      type: 'sparkV3SvgSprite',
      classNames: ['fa/code-regular']
  },
  startBehavior: 'lazy',
  trustedDataPassing: true,
  lifecycleConfig: {
      bootstrap: true,
      focus: true,
      blur: true,
      stop: true
  }
};

// this is an alternative to passing app defs on instantiation
appPool.updateAppDefs({
  [groupID]: [downloadChromeBrowserAppDef, appsSdkShowcaseIframeApp],
});
