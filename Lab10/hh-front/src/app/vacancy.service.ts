import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private client: HttpClient) { }

  getVacancies(companyID: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `http://127.0.0.1:8000/api/companies/${companyID}/vacancies/`
    );
  }


}
