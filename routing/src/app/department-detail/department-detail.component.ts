import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
  }
}
