import { Component, OnInit } from '@angular/core';
import { DocService } from '../../../core/services/doc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { IDoc } from '../../../core/interfaces/i-doc';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doc-detail',
  templateUrl: './doc-detail.component.html',
  styleUrl: './doc-detail.component.css',
})
export class DocDetailComponent implements OnInit {
  doc!: IDoc;
  file: any;
  id: number = 0;

  constructor(
    private docService: DocService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
    // You can use this also
    // this.id=this._Activatedroute.snapshot.params['id'];
    this.docService
      .getDoc(this.id)
      .pipe(catchError(this.docService.baseHttp.handleError))
      .subscribe((resp: IDoc) => {
        this.doc = resp;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.docService
        .updateDoc(this.id, this.file)
        .pipe(catchError(this.docService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          Swal.fire({
            title: 'Success',
            text: 'Edit successfully!',
            icon: 'success',
          });

          this.doc = resp;
          this.router.navigate(['/doc']);
        });
    }
  }

  onRemove() {
    Swal.fire({
      title: 'Do you want to delete this file?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Setuju
        this.docService
          .removeDoc(this.id)
          .pipe(catchError(this.docService.baseHttp.handleError))
          .subscribe((resp: null) => {
            Swal.fire({
              title: 'Success',
              text: 'Remove Successed',
            });
            this.router.navigate(['/doc']);
          });
      } else if (result.isDenied) {
        // Ga setuju
      }
    });
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
