import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../../framework/base/base.component";
import { AllCriteria } from "../../framework/criteria/AllCriteria";

@Component({
  selector: 'category-list-component',
  templateUrl: './category-list.component.html'
})

export class CategoryListComponent extends BaseComponent implements OnInit {

  model: any;
  ngOnInit() {
    this.IsLoading = true;
    this.Criteria = (<any>Object).assign(new AllCriteria(), { Page: 1, PageSize: 50 })
    this.loadData();
  }



  LoadItem(event) {

    console.log('event after clicked ');
    console.log(event);

  }



  loadData() {
    this.IsLoading = true;
    this.dc.post('api/Chuck/Categories', this.Criteria).subscribe((response: any) => {

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
