import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-blank',
  template: `
    <p>
      blank works!
    </p>
  `,
  styles: [
  ]
})
export class BlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
