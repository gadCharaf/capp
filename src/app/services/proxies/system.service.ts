import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemModel} from '../../models/system.model';
import {Subject} from 'rxjs';


@Injectable()
export class SystemService{
  apiEndpoint="";

  constructor(private httpClient: HttpClient) { }

  private systems: SystemModel[];
  systemSubject = new Subject<SystemModel[]>();

  getAll() {
    this.httpClient.get<SystemModel[]>(this.apiEndpoint).subscribe(
        (response) => {
         this.systems=response;
         this.emitSystems();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  add(system: SystemModel) {
    this.httpClient.post(this.apiEndpoint,system).subscribe(
      (response) => {
        this.systems.push(system);
        this.emitSystems();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
/*
  update(system: SystemModel) {
    this.httpClient.put(this.apiEndpoint+'/'+system._id,system).subscribe(
      (response) => {
        this.systems.push(system);
        this.systems.
        this.emitSystems();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

*/


  emitSystems() {
    this.systemSubject.next(this.systems.slice());
  }


}
