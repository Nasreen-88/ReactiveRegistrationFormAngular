import { Component, OnInit, TemplateRef, forwardRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export const MODAL_SERVICE_PROVIDER = forwardRef(() => BsModalService);

@Component({
  selector: 'app-ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.css'],
  providers: [
    { provide: BsModalService, useExisting: MODAL_SERVICE_PROVIDER }
  ]
})
export class NgxModalComponent implements OnInit {

  
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }
}
