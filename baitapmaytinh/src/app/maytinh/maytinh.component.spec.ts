import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaytinhComponent } from './maytinh.component';

describe('MaytinhComponent', () => {
  let component: MaytinhComponent;
  let fixture: ComponentFixture<MaytinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaytinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaytinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
