import { Component } from '@angular/core';
import { InspectionFormComponent } from "./inspection-form/inspection-form.component";

@Component({
  selector: 'app-root',
  template: '<app-inspection-form></app-inspection-form>',
  import: [InspectionFormComponent],
})
export class AppComponent {}
