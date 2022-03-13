import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export class BuildInfo {
  constructor(
    public buildNumber: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BuildInfoService {

  constructor(private http: HttpClient) {
  }

  public getBuildInfo(): Observable<BuildInfo> {
    return this.http.get<BuildInfo>('/api/build-info');
  }
}
