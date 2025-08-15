import {
  AuthService,
  Router,
  RouterLink,
  RouterOutlet,
  init_auth_service,
  init_router
} from "./chunk-XSFDDTT6.js";
import "./chunk-2SGEPFOW.js";
import "./chunk-APW2P7EM.js";
import "./chunk-OMDYHGR3.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-DVWL2YKN.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '@if(authService.isLoggedIn()) {\r\n<div class="container-fluid">\r\n    <h3 class="d-flex justify-content-center">&nbsp;</h3>\r\n    <h3 class="d-flex justify-content-center">MOVATI Member Management Portal</h3>\r\n    <div class="d-flex justify-content-center">Angular 20, REST Api and Sqlite App Demo</div>\r\n\r\n    <nav class="navbar navbar-expand-sm bg-light navbar-dark">\r\n        <ul class="navbar-nav d-flex w-100">\r\n            <li class="nav-item ">\r\n                <button routerLink="coach" class="m-1 btn btn-light btn-outline-primary" Button>Coaches</button>\r\n            </li>\r\n\r\n            <li class="nav-item">\r\n                <button routerLink="member" class="m-1 btn btn-light btn-outline-primary" Button>Members</button>\r\n            </li>\r\n\r\n            <li class="nav-item" style="margin-left: auto;">\r\n                <button (click)="logout()" class="m-1 btn btn-danger">Logout</button>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>\r\n}\r\n\r\n<router-outlet></router-outlet>';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_router();
    init_router();
    init_auth_service();
    App = class App2 {
      authService;
      router;
      title = signal("angular_ui");
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }
      logout() {
        this.authService.logout();
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, RouterLink],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, angular_ui");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
