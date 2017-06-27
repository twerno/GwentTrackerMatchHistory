import { Injectable } from '@angular/core';
import { AnaliticData } from 'app/model/analitics-data';

@Injectable()
export class AnaliticsService {

  data: AnaliticData = {
    playerNames: []
  };

  constructor() { }

  
}
