import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import {BuildInfoService} from "../../services/build-info/build-info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year?: number;
  buildNumber: string = '';

  constructor(private buildInfo: BuildInfoService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.buildInfo.getBuildInfo().pipe(take(1)).subscribe(
      buildInfo => this.buildNumber = buildInfo.buildNumber
    );
  }

}
