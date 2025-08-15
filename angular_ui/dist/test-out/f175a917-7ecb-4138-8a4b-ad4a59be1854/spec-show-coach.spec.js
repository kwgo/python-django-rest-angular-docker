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
  TestBed,
  init_testing
} from "./chunk-DVWL2YKN.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/coach/show-coach/show-coach.spec.ts
var require_show_coach_spec = __commonJS({
  "src/app/coach/show-coach/show-coach.spec.ts"(exports) {
    init_testing();
    init_show_coach();
    describe("ShowCoach", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ShowCoach]
        }).compileComponents();
        fixture = TestBed.createComponent(ShowCoach);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_show_coach_spec();
//# sourceMappingURL=spec-show-coach.spec.js.map
