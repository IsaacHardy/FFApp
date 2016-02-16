import {App, IonicApp, Platform} from 'ionic/ionic';

import {HomePage} from './pages/home/home';
import {TradePage} from './pages/trade/trade';
import {BoardPage} from './pages/board/board';
import {KeeperPage} from './pages/keeper/keeper';
import {DraftPage} from './pages/draft/draft';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  constructor(app: IonicApp, platform: Platform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Keepers', component: KeeperPage },
      { title: 'Draft History', component: DraftPage },
      { title: 'Trade History', component: TradePage },
      { title: 'Draft Board', component: BoardPage }
    ];

    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
