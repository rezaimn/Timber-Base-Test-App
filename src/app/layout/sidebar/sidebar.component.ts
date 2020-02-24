import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedItem='/invoices';
  constructor(private router:Router) {
   this.selectedItem=this.router.url;
  }

  ngOnInit(): void {
  }
  setSelectedItem(item){
    this.selectedItem=item;
    this.router.navigate([item])
  }
}
