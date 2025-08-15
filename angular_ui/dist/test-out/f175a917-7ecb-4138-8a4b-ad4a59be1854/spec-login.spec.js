import {
  AuthService,
  init_auth_service
} from "./chunk-XSFDDTT6.js";
import "./chunk-2SGEPFOW.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-6C6X67HY.js";
import "./chunk-APW2P7EM.js";
import "./chunk-OMDYHGR3.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-DVWL2YKN.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\login\\login.html"() {
    login_default = `<div class="container mt-5" style="max-width: 400px;">\r
    <h3 class="text-center mb-4">Login</h3>\r
    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">\r
        <div class="mb-3">\r
            <label class="form-label">Email</label>\r
            <input type="email" formControlName="email" class="form-control" placeholder="Enter your email"\r
                [class.is-invalid]="loginForm.controls['email'].invalid && loginForm.controls['email'].touched" />\r
            <div class="invalid-feedback">\r
                Please enter a valid email address.\r
            </div>\r
        </div>\r
        <div class="mb-3">\r
            <label class="form-label">Password</label>\r
            <input type="password" formControlName="password" class="form-control" placeholder="Enter your password"\r
                [class.is-invalid]="loginForm.controls['password'].invalid && loginForm.controls['password'].touched" />\r
            <div class="invalid-feedback">\r
                Password must be at least 4 characters long.\r
            </div>\r
        </div>\r
        <button type="submit" class="btn btn-primary w-100" [disabled]="loginForm.invalid">\r
            Login\r
        </button>\r
\r
        @if(errorMessage) {\r
        <div class="alert alert-danger mt-3">{{ errorMessage }}</div>\r
        }\r
    </form>\r
</div>`;
  }
});

// angular:jit:style:src\app\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\login\\login.css"() {
    login_default2 = "/* src/app/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_forms();
    init_auth_service();
    Login = class Login2 {
      formBuilder;
      authService;
      email = "";
      password = "";
      errorMessage = "";
      loginForm;
      constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loginForm = this.formBuilder.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength(4)]]
        });
      }
      onLogin() {
        if (this.loginForm.invalid) {
          this.loginForm.markAllAsTouched();
          return;
        }
        this.errorMessage = "";
        this.email = this.loginForm.get("email")?.value;
        this.password = this.loginForm.get("password")?.value;
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        var user = {
          email: this.email,
          password: this.password
        };
        console.log(user);
        this.authService.login(user).subscribe({
          next: (res) => {
            console.log(res);
            if (res.access) {
              console.log("has access token");
              this.authService.saveTokens(res.access, res.refresh);
              window.location.href = "/member";
            } else {
              this.errorMessage = res.error || "Invalid credentials.";
            }
          },
          error: () => {
            this.errorMessage = "Error connecting to server.";
          }
        });
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: AuthService }
      ];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        //  imports: [FormsModule],
        imports: [ReactiveFormsModule],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
