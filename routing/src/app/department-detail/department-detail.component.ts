import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
//https://github.com/gopinav/Angular-Tutorials/blob/master/routing-demo/src/styles.css
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
public departmentId: any

constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    this.route.paramMap.subscribe(( params: ParamMap) => {
      let id = parseInt(params.get('id'));
    })

}
}
