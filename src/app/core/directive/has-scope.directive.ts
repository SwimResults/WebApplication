import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, inject} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Directive({
    selector: '[srHasScope]',
    standalone: true
})
export class HasScopeDirective implements OnInit {
    private templateRef = inject<TemplateRef<any>>(TemplateRef);
    private authService = inject(AuthService);
    private viewContainer = inject(ViewContainerRef);

    scope: string = "root";

    ngOnInit() {
        this.authService.scopes.subscribe(scopes => {
            if (scopes && scopes.includes(this.scope) || scopes.includes("root")) {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        });
    }


    @Input() set srHasScope(scope: string) {
        this.scope = scope;
    }
}
