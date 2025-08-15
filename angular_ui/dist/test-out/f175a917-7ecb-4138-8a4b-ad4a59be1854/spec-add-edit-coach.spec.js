import {
  AddEditCoach,
  init_add_edit_coach
} from "./chunk-Z25BOWNM.js";
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

// src/app/coach/add-edit-coach/add-edit-coach.spec.ts
var require_add_edit_coach_spec = __commonJS({
  "src/app/coach/add-edit-coach/add-edit-coach.spec.ts"(exports) {
    init_testing();
    init_add_edit_coach();
    describe("AddEditCoach", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AddEditCoach]
        }).compileComponents();
        fixture = TestBed.createComponent(AddEditCoach);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_edit_coach_spec();
//# sourceMappingURL=spec-add-edit-coach.spec.js.map
