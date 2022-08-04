import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //importo la librería

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

    //en caso de que necesitemos especificar una cabecera en la solicitud, lo podemos hacer así
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-type': 'application/json; charset=UTF-8',
      })
    };

    return this.httpClient.post<any>(this.baseUrl, bodyRequest, httpOptions).toPromise();
  }

  update({id, title, body, userId}): Promise<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, {id, title, body, userId}).toPromise();
  }

  delete(id: number): Promise<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }
}
