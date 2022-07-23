import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: any): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(mainData => {
        var propertiesArray: Array<IProperty> = [];
        propertiesArray = getAllPList(mainData,SellRent);
        return propertiesArray;
      })
    );
  }
}

function getAllPList(mData: any, mSell: any) {
  var pArray: Array<IProperty> = [];
  for (var data in mData){
    if (mData.hasOwnProperty(data) && mData[data].SellRent === mSell){
      pArray.push(mData[data]);
    }
  }
  return pArray;
}

