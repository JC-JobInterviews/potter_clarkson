import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import MOCK_IP_ASSETS from '../temp/mock-ip-assets';
import { IntellectualPropertyAsset } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, MatTableModule],
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

  dataSource = new MatTableDataSource<IntellectualPropertyAsset>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getForecasts();
    this.dataSource.data = MOCK_IP_ASSETS;

    this.dataSource.filterPredicate = (data: IntellectualPropertyAsset, filter: string): boolean => {
      return data.client.toLowerCase().includes(filter);
    };
  }

   applyClientFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
