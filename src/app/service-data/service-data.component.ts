import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  data$: Observable<Object>;

  constructor(private mySer: DataService) {
    // console.log(this.mySer.data1);
   // this.dataFromService();

   this.data$ = this.mySer.getData();
   }

   ngOnInit(): void {
    this.data$.subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // ngOnInit(): void {

  // }

  // dataFromService(){
  //   this.mySer.getData().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     },
  //     (err:any)=>{
  //       console.log(err);
  //     }
  //   )
    
    
  // }

}

