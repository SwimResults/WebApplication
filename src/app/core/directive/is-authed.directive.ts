import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Directive({selector: '[srIsAuthed]'})
export class IsAuthedDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) { }

  condition: boolean = true;
  prevState?: boolean;

  ngOnInit() {
    console.log("SHOW AUTH DIRECTIVE: started");
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
        console.log("SHOW AUTH DIRECTIVE:" + isAuthenticated);
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.clear();
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set srIsAuthed(condition: boolean) {
    this.condition = condition;
  }

}
