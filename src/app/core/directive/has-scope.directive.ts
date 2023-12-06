import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Directive({
  selector: '[srHasScope]',
  standalone: true
})
export class HasScopeDirective implements OnInit {

    constructor(
        private templateRef: TemplateRef<any>,
        private authService: AuthService,
        private viewContainer: ViewContainerRef
    ) {
    }

    prevState?: boolean;
    scope: string = "root";

    ngOnInit() {
        console.log("SCOPE DIRECTIVE: started for scope " + this.scope);
        this.authService.scopes.subscribe(scopes => {
                console.log("scopes: " + scopes);
                if (scopes && scopes.includes(this.scope) || scopes.includes("root")) {
                    this.viewContainer.clear();
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            }
        );
    }


    @Input() set srHasScope(scope: string) {
        this.scope = scope;
    }
}
