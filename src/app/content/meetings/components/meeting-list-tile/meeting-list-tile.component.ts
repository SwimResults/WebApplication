import {Component, Input, OnInit} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-meeting-list-tile',
  templateUrl: './meeting-list-tile.component.html',
  styleUrls: ['./meeting-list-tile.component.scss']
})
export class MeetingListTileComponent implements OnInit{
  @Input() meeting!: MeetingImpl;

  dateString?: string;

  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {
    this.fetchTranslations()
  }

  fetchTranslations() {
    let sf = this.meeting.getDateString(true);
    let s1 = sf.split("#");
    console.log(sf);
    console.log(s1);

    if (s1.length == 3 || s1.length == 5) {

      this.translateService.get("COMMON.DATE.MONTH." + s1[1]).subscribe(tr => {
        sf = sf.replace("#" + s1[1] + "#", tr);
        console.log("fetch1: " + sf);

        if (s1.length == 5) {

          this.translateService.get("COMMON.DATE.MONTH." + s1[3]).subscribe(tr => {
            sf = sf.replace("#" + s1[3] + "#", tr);
            console.log("fetch2: " + sf);
            this.dateString = sf;
          })
        } else {
          this.dateString = sf;
        }
      })

    } else {
      this.dateString = sf;
    }
  }
}
