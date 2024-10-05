import { Component } from '@angular/core';
import { IPic } from '../../../core/interfaces/i-pic';
import { IPagination } from '../../../core/interfaces/i-pagination';
import { catchError } from 'rxjs';
import { PicService } from '../../../core/services/pic.service';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrl: './pic-list.component.css',
})
export class PicListComponent {
  pics!: IPagination<IPic>;
  constructor(private picService: PicService) {}

  ngOnInit(): void {
    this.picService
      .getPics()
      .pipe(catchError(this.picService.baseHttp.handleError))
      .subscribe((resp: IPagination<IPic>) => {
        this.pics = resp;
      });
  }
}
