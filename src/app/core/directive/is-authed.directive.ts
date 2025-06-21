import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, inject} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Directive({selector: '[srIsAuthed]'})
export class IsAuthedDirective implements OnInit {
    private templateRef = inject<TemplateRef<any>>(TemplateRef);
    private authService = inject(AuthService);
    private viewContainer = inject(ViewContainerRef);


    condition: boolean = true;
    prevState?: boolean;

    ngOnInit() {
        this.authService.isAuthenticated.subscribe(isAuthenticated => {
            if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }

    @Input() set srIsAuthed(condition: boolean) {
        this.condition = condition;
    }

}
