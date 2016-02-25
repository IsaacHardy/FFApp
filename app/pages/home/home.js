import {Platform, Page, Storage} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/home/home.html',
})

export class HomePage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.platform.ready().then(() => {

    });
  }
}
