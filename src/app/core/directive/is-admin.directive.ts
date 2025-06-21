import {Directive, OnInit, TemplateRef, ViewContainerRef, inject} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Directive({selector: '[srIsAdmin]'})
export class IsAdminDirective implements OnInit {
    private templateRef = inject<TemplateRef<any>>(TemplateRef);
    private authService = inject(AuthService);
    private viewContainer = inject(ViewContainerRef);

    prevState?: boolean;

    ngOnInit() {
        this.authService.scopes.subscribe(scopes => {
            if (scopes && scopes.includes("root")) {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        });
    }


}
