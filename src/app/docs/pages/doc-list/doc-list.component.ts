import { Component, OnInit } from '@angular/core';
import { DocService } from '../../../core/services/doc.service';
import { catchError } from 'rxjs';
import { IPagination } from '../../../core/interfaces/i-pagination';
import { IDoc } from '../../../core/interfaces/i-doc';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrl: './doc-list.component.css',
})
export class DocListComponent implements OnInit {
  docs!: IPagination<IDoc>;

  constructor(private docService: DocService) {}

  ngOnInit(): void {
    this.docService
      .getDocs()
      .pipe(catchError(this.docService.baseHttp.handleError))
      .subscribe((resp: IPagination<IDoc>) => {
        this.docs = resp;
      });
  }
}
