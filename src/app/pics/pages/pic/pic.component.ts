import { Component } from '@angular/core';
import { PicService } from '../../../core/services/pic.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { IPic } from '../../../core/interfaces/i-pic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrl: './pic.component.css',
})
export class PicComponent {
  pic?: IPic;
  file: any;

  constructor(private picService: PicService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.picService
        .upload(this.file)
        .pipe(catchError(this.picService.baseHttp.handleError))
        .subscribe((resp: IPic) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload successfully!',
            icon: 'success',
          });

          this.pic = resp;
          this.router.navigate(['/pic']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
