// import { Component, Injector, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-accordion',
//   templateUrl: './accordion.component.html',
//   styleUrls: ['./accordion.component.css']
// })
// export class AccordionComponent  {
//   // panels = [
//   //   { title: 'Panel 1', content: 'Content for Panel 1' },
//   //   { title: 'Panel 2', content: 'Content for Panel 2' },
//   //   { title: 'Panel 3', content: 'Content for Panel 3' }
//   // ];
  

  

// }

import { Component } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  // Button click event handler
  handleClick() { 
    console.log('Button clicked');
  }
}
