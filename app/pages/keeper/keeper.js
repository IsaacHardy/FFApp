import {Page, Platform} from 'ionic/ionic';
import {FormBuilder, Validators} from 'angular2/common';

@Page({
  templateUrl: 'build/pages/keeper/keeper.html'
})
export class KeeperPage {
  constructor(form: FormBuilder, platform: Platform) {
    this.platform = platform;
    this.keepers = [];
    this.adding = false;

    this.keeperForm = form.group({
      owner: ["", Validators.required],
      player: ["", Validators.required],
      draftround: ["", Validators.required],
      keepround: ["", Validators.required],
    });
  }
  showKeeperForm() {
    if (!this.adding) {
      this.adding = true;
    } else {
      this.adding = false;
    }
  }
  addKeeper(event) {
    this.owner = this.keeperForm.value.owner;
    this.player = this.keeperForm.value.player;
    this.draftround = this.keeperForm.value.draftround;
    this.keepround = this.keeperForm.value.keepround;

    event.preventDefault();
    this.showKeeperForm();
  }

}
