import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-singleview-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleview-list.html',
  styleUrls: ['./singleview-list.css']
})
export class SingleviewListComponent implements OnInit {
  singleproduct: any;

  constructor(private route: ActivatedRoute, private api: Apiservice, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.api.getsingleProducts(+productId).subscribe((data: any) => {
        this.singleproduct = data;
        this.cdr.detectChanges();
      });
    }
  }
}