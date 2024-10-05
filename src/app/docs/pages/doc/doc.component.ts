import { Component } from '@angular/core';
import { DocService } from '../../../core/services/doc.service';
import { IDoc } from '../../../core/interfaces/i-doc';
import { catchError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css',
})
export class DocComponent {
  doc?: IDoc;
  file: any;

  constructor(private docService: DocService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.docService
        .upload(this.file)
        .pipe(catchError(this.docService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          this.doc = resp;
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
    // this.docService
    //   .upload(file)
    //   .pipe(catchError(this.docService.baseHttp.handleError))
    //   .subscribe((resp: IDoc) => {
    //     this.doc = resp;
    //   });
  }
}
