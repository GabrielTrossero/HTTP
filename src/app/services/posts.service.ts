import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importo la librería

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { //lo agrego 
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  } 

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(id: number): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).toPromise(); 
  }

  create({title, body, userId}): Promise<any> {
    const bodyRequest = {title, body, userId}; //recibo un objeto y lo pongo en una variable

    return this.httpClient.post<any>(this.baseUrl, bodyRequest).toPromise();
  }
}
