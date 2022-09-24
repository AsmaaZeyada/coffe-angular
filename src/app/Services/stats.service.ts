import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats = {};
  constructor() {
    this.stats = {
      'happyClients': 2536,
      'totalProjects': 7562,
      'cupsOfCoffee': 2013,
      'totalSubmitted': 10536
    };
  }

  getStats() {
    return this.stats;
  }
}
