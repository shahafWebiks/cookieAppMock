import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {PlaceService} from '../place.service';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {PLACES} from '../mock-places';
import {of} from 'rxjs/observable/of';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

function mockReducer() {
}

export const mockRoutes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot(mockReducer),
        RouterTestingModule.withRoutes(mockRoutes)
      ],
      providers: [
        PlaceService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call get places', inject([PlaceService], (service: PlaceService) => {
    spyOn(service, 'getPlaces').and.returnValue(of(PLACES));
    component.getPlaces();
    expect(service.getPlaces).toHaveBeenCalled();
  }));
  it('should show top developers title', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Top Places');
  });
});
