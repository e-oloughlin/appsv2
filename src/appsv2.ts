import { AppPool, AppDef } from '@genesys/apps-v2-host';

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
  // monochromicIcon: {
  //   type: 'sparkV3SvgSprite',
  //   classNames: ['chrome']
  // },
  icon: {
    type: 'remoteVectorImage',
    url: new URL(
      'https://www.google.com/chrome/static/images/chrome-logo.svg'
    )
  }
};

appPool.updateAppDefs({
  [groupID]: [downloadChromeBrowserAppDef]
});
