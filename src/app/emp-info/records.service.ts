import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Juma Grivin", "37246395", "grivinjuma@gmail.com"]
  info2: string[] = ["Jashon Owano", "25577792", "owanojashon@gmail.com"]
  info3: string []= ["Jestmore Muyaka", "89629455", "muyakajestmore@gmail.com"]

  getinfo1():string[]{
    return this.info1
  }
  getinfo2():string[]{
    return this.info2
  }
  getinfo3():string[]{
    return this.info3
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1

  }

  constructor() { }
}
