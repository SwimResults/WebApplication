import {Component, Input, OnInit} from '@angular/core';
import {Start} from "../../../../core/model/start/start.model";
import {StartId} from "../../../../core/model/start/start-id.model";
import {StartService} from "../../../../core/service/api";

@Component({
  selector: 'sr-start-list-tile',
  templateUrl: './start-list-tile.component.html',
  styleUrls: ['./start-list-tile.component.scss']
})
export class StartListTileComponent implements OnInit {
  @Input() start?: Start;
  @Input() startId?: StartId;
  @Input() startIdentifier?: string;
  data: Start = {} as Start;

  constructor(
    private startService: StartService
  ) {
  }

  ngOnInit() {
    this.fetchStart();
  }

  fetchStart() {
    if (this.start !== undefined) this.data = this.start;
    if (this.startId !== undefined) {
      this.startService.getStartByStartId(this.startId).subscribe(data => {
        this.data = data;
      })
    }
    if (this.startIdentifier !== undefined) {
      this.startService.getStartById(this.startIdentifier).subscribe(data => {
        this.data = data;
      })
    }
  }


}
