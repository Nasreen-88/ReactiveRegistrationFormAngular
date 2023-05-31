import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-ngx-pagination',
  templateUrl: './ngx-pagination.component.html',
  styleUrls: ['./ngx-pagination.component.css']
})
export class NgxPaginationComponent implements OnInit {

  contentArray: string[] = new Array(50).fill('');
   returnedArray: string[] | undefined;
   showBoundaryLinks: boolean = true;
   showDirectionLinks: boolean = true;


  constructor() { }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
 }

 
  ngOnInit(): void {

    this.contentArray = this.contentArray.map((v: string, i: number) => {
      return 'Line '+ (i + 1);
   });
   this.returnedArray = this.contentArray.slice(0, 5);
   
  }

}
