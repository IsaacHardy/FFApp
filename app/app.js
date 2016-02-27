import {App, IonicApp, Platform} from 'ionic/ionic';

import {HomePage} from './pages/home/home';
import {TradePage} from './pages/trade/trade';
import {BoardPage} from './pages/board/board';
import {KeeperPage} from './pages/keeper/keeper';
import {DraftPage} from './pages/draft/draft';
import {LoginPage} from './pages/login/login';


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
      { title: 'Calendar', component: HomePage },
      { title: 'Keepers', component: KeeperPage },
      { title: 'Draft History', component: DraftPage },
      { title: 'Trade History', component: TradePage },
      { title: 'Draft Board', component: BoardPage },
      { title: 'Login', component: LoginPage },
    ];

    this.rootPage = LoginPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
