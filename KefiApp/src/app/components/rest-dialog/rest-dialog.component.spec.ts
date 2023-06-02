import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDialogComponent } from './rest-dialog.component';

describe('RestDialogComponent', () => {
  let component: RestDialogComponent;
  let fixture: ComponentFixture<RestDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestDialogComponent]
    });
    fixture = TestBed.createComponent(RestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
