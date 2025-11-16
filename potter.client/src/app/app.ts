import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { IntellectualPropertyAsset } from './types';
import MOCK_IP_ASSETS from '../temp/mock-ip-assets';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [MatButtonModule, MatTableModule, CommonModule],
})
export class App implements OnInit {
  displayedColumns: (keyof IntellectualPropertyAsset | 'actions')[] = [
    'title',
    'client',
    'type',
    'description',
    'dateCreated',
    'actions'
  ];

  dataSource: IntellectualPropertyAsset[] = MOCK_IP_ASSETS;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getForecasts();
  }

  // getForecasts() {
  //   this.http.get<any[]>('/weatherforecast').subscribe(
  //     (result) => {
  //       this.forecasts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // protected readonly title = signal('potter.client');

  onEdit(asset: IntellectualPropertyAsset): void {
    console.log('Edit clicked for:', asset.internalReference);
    alert(`Editing asset: ${asset.title}`);
  }

  onDelete(asset: IntellectualPropertyAsset): void {
    console.log('Delete clicked for:', asset.internalReference);
    alert(`Deleting asset: ${asset.title}`);
  }
}
