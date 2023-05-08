import { Component } from '@angular/core';

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'swimresults';

  build: string = "";
  showBuild: boolean = true;

  constructor() {
    this.fetchBuild().then(r => {
      this.build = r;
    });
  }

  async fetchBuild() {
    const response = await fetch("assets/release.txt");
    return await response.text();
  }

  toggleBuild() {
    this.showBuild = !this.showBuild;
  }
}
