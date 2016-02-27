import {Injectable} from 'angular2/core';
import {Platform, Storage, SqlStorage} from 'ionic/ionic';

@Injectable()
export class KeeperService {
  constructor(platform: Platform) {
    this.platform = platform;
    this.platform.ready().then(() => {
        let options = {
          name: 'keeper',
          backupFlag: SqlStorage.BACKUP_LOCAL,
          existingDatabase: true
        };
        this.storage = new Storage(SqlStorage, options);
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

        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err.message));
        });
    });
  }
  refresh() {
    this.platform.ready().then(() => {
        this.storage.query("SELECT * FROM keeper").then((data) => {
          this.keepers = [];
            if(data.res.rows.length > 0) {
                for(var i = 0; i < data.res.rows.length; i++) {
                    this.keepers.push({
                      id: data.res.rows.item(i).id,
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
