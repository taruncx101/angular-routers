import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMsg: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMsg = this.route.snapshot.data.msg;
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMsg = data.msg;
      }
    );
  }

}
