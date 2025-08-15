import {
  ShowMember,
  init_show_member
} from "./chunk-4MFDCCZ3.js";
import "./chunk-ENMKV3DZ.js";
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

// src/app/member/show-member/show-member.spec.ts
var require_show_member_spec = __commonJS({
  "src/app/member/show-member/show-member.spec.ts"(exports) {
    init_testing();
    init_show_member();
    describe("ShowMember", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ShowMember]
        }).compileComponents();
        fixture = TestBed.createComponent(ShowMember);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_show_member_spec();
//# sourceMappingURL=spec-show-member.spec.js.map
