import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css',
})
export class ResourceApiComponent {
  userLitResource = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json() as Promise<any[]>
      );
    },
  });

  http = inject(HttpClient);
  userList = rxResource({
    loader: () => {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    },
  });
}
