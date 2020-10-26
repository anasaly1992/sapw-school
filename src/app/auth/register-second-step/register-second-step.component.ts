import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LookupsService } from '../../core/_services/lookups/lookups.service';
import { Country, City, Grade, ClassCategory } from '../../core/_models';

@Component({
  selector: 'app-register-second-step',
  templateUrl: './register-second-step.component.html',
  styleUrls: ['./register-second-step.component.scss'],
})
export class RegisterSecondStepComponent implements OnInit {
  constructor(private lookupsService: LookupsService) {}

  @Output() secondStepCompleted: EventEmitter<object> = new EventEmitter<
    object
  >();

  countries: Country[] = [];
  cities: City[] = [];
  classGrades: Grade[] = [];
  classCategories: ClassCategory[] = [];
  defaultCityValue: City = {
    id: null,
    Title: 'من فضلك أختر بلدك أولا',
    countryId: null,
    country: {},
  };
  defaultGradeValue: Grade = {
    id: null,
    Title: 'من فضلك أختر نوع الدراسة أولا',
    classCategoryId: null,
  };

  registerSecondForm: FormGroup = new FormGroup({
    country_id: new FormControl('', [Validators.required]),
    city_id: new FormControl('', Validators.required),
    class_category: new FormControl('', Validators.required),
    class_grade: new FormControl('', Validators.required),
  });
  get country_id() {
    return this.registerSecondForm.get('country_id');
  }
  get city_id() {
    return this.registerSecondForm.get('city_id');
  }
  get class_category() {
    return this.registerSecondForm.get('class_category');
  }
  get class_grade() {
    return this.registerSecondForm.get('class_grade');
  }

  getCountries() {
    this.lookupsService.getCountries().subscribe((data: any) => {
      this.countries = data.Country;
    });
  }
  getCities(countryId) {
    this.registerSecondForm.patchValue({
      city_id: '',
    });
    this.lookupsService.getCities(countryId).subscribe((data: any) => {
      this.cities = data.City;
      if (this.cities.length) this.defaultCityValue = null;
    });
  }
  getClassCategories() {
    this.lookupsService.getClassCategories().subscribe((data: any) => {
      this.classCategories = data.Schools;
    });
  }
  getClassGrades(classCategoryId) {
    this.registerSecondForm.patchValue({
      class_grade: '',
    });
    this.lookupsService
      .getClassGrades(classCategoryId)
      .subscribe((data: any) => {
        this.classGrades = data.Grades;
        if (this.classGrades.length) this.defaultGradeValue = null;
      });
  }
  completeSecondStep() {
    this.secondStepCompleted.emit({
      data: this.registerSecondForm.value,
      propName: 'secondStepFormData',
    });
  }

  ngOnInit(): void {
    this.getCountries();
    this.getClassCategories();
  }
}
