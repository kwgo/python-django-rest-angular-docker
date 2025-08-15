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

// angular:jit:template:src\app\member\member.html
var member_default;
var init_member = __esm({
  "angular:jit:template:src\\app\\member\\member.html"() {
    member_default = "<app-show-member></app-show-member>";
  }
});

// angular:jit:style:src\app\member\member.css
var member_default2;
var init_member2 = __esm({
  "angular:jit:style:src\\app\\member\\member.css"() {
    member_default2 = "/* src/app/member/member.css */\n/*# sourceMappingURL=member.css.map */\n";
  }
});

// src/app/member/member.ts
var Member;
var init_member3 = __esm({
  "src/app/member/member.ts"() {
    "use strict";
    init_tslib_es6();
    init_member();
    init_member2();
    init_core();
    init_show_member();
    Member = class Member2 {
    };
    Member = __decorate([
      Component({
        selector: "app-member",
        imports: [ShowMember],
        template: member_default,
        styles: [member_default2]
      })
    ], Member);
  }
});

// src/app/member/member.spec.ts
var require_member_spec = __commonJS({
  "src/app/member/member.spec.ts"(exports) {
    init_testing();
    init_member3();
    describe("Member", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Member]
        }).compileComponents();
        fixture = TestBed.createComponent(Member);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_member_spec();
//# sourceMappingURL=spec-member.spec.js.map
