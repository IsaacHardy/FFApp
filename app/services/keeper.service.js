import {Injectable} from 'angular2/core';
import {Platform, Storage, SqlStorage} from 'ionic/ionic';

@Injectable()
export class KeeperService {
  constructor(platform: Platform) {
    this.platform = platform;
    this.keepers = [];
    this.platform.ready().then(() => {
        this.storage = new Storage(SqlStorage);
        this.refresh();
    });
  }
  add(data) {
    this.owner = data.owner;
    this.player = data.player;
    this.draftround = data.draftround;
    this.keepround = data.keepround;

    this.platform.ready().then(() => {
        this.storage.query(`INSERT INTO keeper (owner, player, draftround, keepround) VALUES ('${this.owner}', '${this.player}', '${this.draftround}', '${this.keepround}')`).then((data) => {
            // this.refresh();
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err.message));
        });
    });
  }
  refresh() {
    console.log(this);
    this.platform.ready().then(() => {
        this.storage.query("SELECT * FROM keeper").then((data) => {
            console.log(data);


            if(data.res.rows.length > 0) {
                for(var i = 0; i < data.res.rows.length; i++) {
                    this.keepers.push({
                      owner: data.res.rows.item(i).owner,
                      player: data.res.rows.item(i).player,
                      draftround: data.res.rows.item(i).draftround,
                      keepround: data.res.rows.item(i).keepround,
                    });
                }
            }

        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
    });
  }
}
