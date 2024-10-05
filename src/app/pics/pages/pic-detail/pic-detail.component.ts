import { Component } from '@angular/core';
import { IPic } from '../../../core/interfaces/i-pic';
import { PicService } from '../../../core/services/pic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrl: './pic-detail.component.css',
})
export class PicDetailComponent {
  pic!: IPic;
  file: any;
  id: number = 0;

  constructor(
    private picService: PicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
    // You can use this also
    // this.id=this._Activatedroute.snapshot.params['id'];
    this.picService
      .getPic(this.id)
      .pipe(catchError(this.picService.baseHttp.handleError))
      .subscribe((resp: IPic) => {
        this.pic = resp;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.picService
        .updatePic(this.id, this.file)
        .pipe(catchError(this.picService.baseHttp.handleError))
        .subscribe((resp: IPic) => {
          Swal.fire({
            title: 'Success',
            text: 'Edit successfully!',
            icon: 'success',
          });

          this.pic = resp;
          this.router.navigate(['/pic']);
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
        this.picService
          .removePic(this.id)
          .pipe(catchError(this.picService.baseHttp.handleError))
          .subscribe((resp: null) => {
            Swal.fire({
              title: 'Success',
              text: 'Remove Successed',
            });
            this.router.navigate(['/pic']);
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
