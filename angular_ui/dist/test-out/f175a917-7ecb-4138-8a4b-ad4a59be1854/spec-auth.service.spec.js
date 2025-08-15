import {
  AuthService,
  init_auth_service
} from "./chunk-XSFDDTT6.js";
import "./chunk-2SGEPFOW.js";
import "./chunk-APW2P7EM.js";
import "./chunk-OMDYHGR3.js";
import {
  TestBed,
  init_testing
} from "./chunk-DVWL2YKN.js";
import "./chunk-TTULUY32.js";

// src/app/service/auth.service.spec.ts
init_testing();
init_auth_service();
describe("AuthService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth.service.spec.js.map
