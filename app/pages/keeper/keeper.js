import {Page, Storage} from 'ionic/ionic';
import {FormBuilder, Validators} from 'angular2/common';
import { CORE_DIRECTIVES } from "angular2/common";
import {KeeperService} from '../../services/keeper.service';

@Page({
  templateUrl: 'build/pages/keeper/keeper.html',
  providers: [KeeperService],
})
export class KeeperPage {
  constructor(keeperService: KeeperService, form: FormBuilder) {

    this.keeperService = keeperService;
    this.keepers = this.keeperService.keepers;

    this.keeperForm = form.group({
      owner: ["", Validators.required],
      player: ["", Validators.required],
      draftround: ["", Validators.required],
      keepround: ["", Validators.required],
    });
  }
  addKeeper(event) {
    this.keeperService.add(this.keeperForm.value);
    event.preventDefault();
  }
}
