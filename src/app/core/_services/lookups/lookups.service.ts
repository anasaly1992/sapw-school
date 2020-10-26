import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GET_COUNTRIES,
  GET_CITES,
  GET_CLASS_CATEGORIES,
  GET_CLASS_GRADES,
} from '../../_constants/api.constant.js';

@Injectable({
  providedIn: 'root',
})
export class LookupsService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(GET_COUNTRIES);
  }
  getCities(countryId) {
    return this.http.get(GET_CITES(countryId));
  }
  getClassCategories() {
    return this.http.get(GET_CLASS_CATEGORIES);
  }
  getClassGrades(classCategoryId) {
    return this.http.get(GET_CLASS_GRADES(classCategoryId));
  }
}
