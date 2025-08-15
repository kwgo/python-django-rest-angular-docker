import {
  HttpClient,
  environment,
  init_environment,
  init_http
} from "./chunk-OMDYHGR3.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-DVWL2YKN.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/service/shared.service.ts
var SharedService;
var init_shared_service = __esm({
  "src/app/service/shared.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_environment();
    SharedService = class SharedService2 {
      http;
      apiUrl = environment.apiBaseUrl;
      mediaUrl = this.apiUrl + "/media/";
      constructor(http) {
        this.http = http;
      }
      getCoaches() {
        console.log("-----------------------------");
        return this.http.get(this.apiUrl + "/coach/");
      }
      addCoach(coach) {
        return this.http.post(this.apiUrl + "/coach/", coach);
      }
      updateCoach(coach) {
        return this.http.put(this.apiUrl + "/coach/", coach);
      }
      deleteCoach(coachId) {
        return this.http.delete(this.apiUrl + "/coach/" + coachId + "/");
      }
      getMembers() {
        return this.http.get(this.apiUrl + "/member/");
      }
      addMember(member) {
        return this.http.post(this.apiUrl + "/member/", member);
      }
      updateMember(member) {
        return this.http.put(this.apiUrl + "/member/", member);
      }
      deleteMember(memberId) {
        return this.http.delete(this.apiUrl + "/member/" + memberId + "/");
      }
      uploadPhoto(photo) {
        return this.http.post(this.apiUrl + "/savefile/", photo);
      }
      getCoachNames() {
        return this.http.get(this.apiUrl + "/coach/");
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    SharedService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], SharedService);
  }
});

export {
  SharedService,
  init_shared_service
};
//# sourceMappingURL=chunk-PSE4N3RH.js.map
