import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';
import {Animal} from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAnimals(): Observable<Animal[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // const url = 'https://www.dropbox.com/s/n0hlv69bzpha4nu/evaluation_data.json?dl=0';
    const url = 'assets/data/animals.json';
    return this.httpClient.get<Animal[]>(url, {headers});
  }


}
