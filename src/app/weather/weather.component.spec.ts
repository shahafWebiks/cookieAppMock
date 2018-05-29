import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {WeatherComponent} from './weather.component';
import {DashboardComponent} from '../dashboard/dashboard.component';


describe('WeatherComponent', () => {

  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
