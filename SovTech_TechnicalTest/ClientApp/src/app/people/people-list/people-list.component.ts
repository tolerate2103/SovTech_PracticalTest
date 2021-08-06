import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../../framework/base/base.component";
import { AllCriteria } from "../../framework/criteria/AllCriteria";

@Component({
  selector: 'people-list-component',
  templateUrl: './people-list.component.html'
})

export class PeopleListComponent extends BaseComponent implements OnInit {

  model: any;
  ngOnInit() {
    this.IsLoading = true;
    this.Criteria = (<any>Object).assign(new AllCriteria(), { Page: 1, PageSize: 50 })
    this.loadData();
  }


  loadData() {
    this.IsLoading = true;
    this.dc.post('api/Swapi/People', this.Criteria).subscribe((response: any) => {

      this.model = response;
      console.log(this.model);
      this.Criteria = this.model.Criteria;
      this.IsLoading = false;
    },
      (error) => {
        console.error(error);
        this.somethingWentWrong();
        this.IsLoading = false;
      });
  }




}
