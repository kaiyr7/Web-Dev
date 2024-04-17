import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "./models";
import {CompanyService} from "./company.service";
import {VacancyService} from "./vacancy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Company[]=[];
  vacancies: Vacancy[]=[];

  constructor(private companyService: CompanyService, private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data)=>{
      this.companies = data;
    })
  }

  onCompanyClick(company: Company) {
    this.vacancyService.getVacancies(company.id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}

