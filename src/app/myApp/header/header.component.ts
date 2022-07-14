import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-serive';

@Component({
  selector: 'app-myApp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderMyAppComponent implements OnInit {


  constructor(private datastorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.datastorageService.storeRecipe();
  }

  onFatchData() {
    this.datastorageService.fatchRecipe().subscribe();
  }
}
