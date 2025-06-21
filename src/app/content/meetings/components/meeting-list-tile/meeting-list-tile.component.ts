import { Component, Input, OnInit, inject } from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {TranslateService} from "@ngx-translate/core";
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {IconBtnComponent} from '../../../../shared/elements/buttons/icon-btn/icon-btn.component';

@Component({
    selector: 'sr-meeting-list-tile',
    templateUrl: './meeting-list-tile.component.html',
    styleUrls: ['./meeting-list-tile.component.scss'],
    imports: [PanelComponent, MatIcon, RouterLink, IconBtnComponent]
})
export class MeetingListTileComponent implements OnInit{
  private translateService = inject(TranslateService);

  @Input() meeting!: MeetingImpl;

  dateString?: string;

  ngOnInit() {
    this.fetchTranslations()
  }

  fetchTranslations() {
    if (!this.meeting) return;
    let sf = this.meeting.getDateString(true);
    const s1 = sf.split("#");
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
