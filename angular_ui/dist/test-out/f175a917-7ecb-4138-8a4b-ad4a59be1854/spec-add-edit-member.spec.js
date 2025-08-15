import {
  AddEditMember,
  init_add_edit_member
} from "./chunk-ENMKV3DZ.js";
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

// src/app/member/add-edit-member/add-edit-member.spec.ts
var require_add_edit_member_spec = __commonJS({
  "src/app/member/add-edit-member/add-edit-member.spec.ts"(exports) {
    init_testing();
    init_add_edit_member();
    describe("AddEditMember", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AddEditMember]
        }).compileComponents();
        fixture = TestBed.createComponent(AddEditMember);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_edit_member_spec();
//# sourceMappingURL=spec-add-edit-member.spec.js.map
