import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.metaService.changePageMetas();
  }

}
