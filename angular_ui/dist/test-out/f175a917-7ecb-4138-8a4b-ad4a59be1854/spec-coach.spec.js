import {
  ShowCoach,
  init_show_coach
} from "./chunk-A7NKJ2UP.js";
import "./chunk-Z25BOWNM.js";
import "./chunk-6C6X67HY.js";
import "./chunk-APW2P7EM.js";
import "./chunk-PSE4N3RH.js";
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

// angular:jit:template:src\app\coach\coach.html
var coach_default;
var init_coach = __esm({
  "angular:jit:template:src\\app\\coach\\coach.html"() {
    coach_default = "<app-show-coach></app-show-coach>\r\n<!--\r\n<app-show-member></app-show-member>\r\n-->";
  }
});

// angular:jit:style:src\app\coach\coach.css
var coach_default2;
var init_coach2 = __esm({
  "angular:jit:style:src\\app\\coach\\coach.css"() {
    coach_default2 = "/* src/app/coach/coach.css */\n/*# sourceMappingURL=coach.css.map */\n";
  }
});

// src/app/coach/coach.ts
var Coach;
var init_coach3 = __esm({
  "src/app/coach/coach.ts"() {
    "use strict";
    init_tslib_es6();
    init_coach();
    init_coach2();
    init_core();
    init_show_coach();
    Coach = class Coach2 {
      constructor() {
      }
      ngOnInit() {
      }
      static ctorParameters = () => [];
    };
    Coach = __decorate([
      Component({
        selector: "app-coach",
        imports: [ShowCoach],
        template: coach_default,
        styles: [coach_default2]
      })
    ], Coach);
  }
});

// src/app/coach/coach.spec.ts
var require_coach_spec = __commonJS({
  "src/app/coach/coach.spec.ts"(exports) {
    init_testing();
    init_coach3();
    describe("Coach", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Coach]
        }).compileComponents();
        fixture = TestBed.createComponent(Coach);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_coach_spec();
//# sourceMappingURL=spec-coach.spec.js.map
