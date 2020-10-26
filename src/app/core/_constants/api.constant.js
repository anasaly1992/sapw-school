import { environment } from "../../../environments/environment";

export const GET_COUNTRIES = `${environment.apiUrl}/V1/User/Country`;
export const GET_CLASS_CATEGORIES = `${environment.apiUrl}/V1/Course/Schools`;
export const GET_CITES = (countryId) =>
  `${environment.apiUrl}/V1/User/${countryId}/City`;
export const GET_CLASS_GRADES = (classCategoryId) =>
  `${environment.apiUrl}/V1/Course/${classCategoryId}/Grade`;
