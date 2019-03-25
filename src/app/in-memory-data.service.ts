import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {

    const  heroes = [
    {id: 11, name: 'Mr. JOHN'},
    {id: 12, name: 'Mr. JOSHUA'},
    {id: 13, name: 'Mr. KEN'},
    {id: 14, name: 'Mr. BET'},
    {id: 15, name: 'Mr. JOASH'},
    {id: 16, name: 'Mr. EDWIN'},
    {id: 17, name: 'Mr. SHEM'},
    {id: 18, name: 'Mr. ROBERT'},
    {id: 19, name: 'Mr. SAM'},
    {id: 20, name: 'Mr. EDWIN'}
  ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
