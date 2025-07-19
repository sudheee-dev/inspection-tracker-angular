import { Component } from '@angular/core';

@Component({
  selector: 'app-inspection-form',
  templateUrl: './inspection-form.component.html'
})
export class InspectionFormComponent {
  itemName = '';
  status = 'pass';
  comments = '';

  submitForm() {
    console.log('Submitted:', this.itemName, this.status, this.comments);
    alert('Submitted!');
  }
}
