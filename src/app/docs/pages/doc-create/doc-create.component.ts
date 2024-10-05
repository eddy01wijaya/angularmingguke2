import { Component } from '@angular/core';
import { IDoc } from '../../../core/interfaces/i-doc';
import { DocService } from '../../../core/services/doc.service';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-create',
  templateUrl: './doc-create.component.html',
  styleUrl: './doc-create.component.css',
})
export class DocCreateComponent {
  doc?: IDoc;
  file: any;

  constructor(private docService: DocService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.docService
        .upload(this.file)
        .pipe(catchError(this.docService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload successfully!',
            icon: 'success',
          });

          this.doc = resp;
          this.router.navigate(['/doc']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
    this.docService
      .upload(this.file)
      .pipe(catchError(this.docService.baseHttp.handleError))
      .subscribe((resp: IDoc) => {
        this.doc = resp;
      });
  }
}
