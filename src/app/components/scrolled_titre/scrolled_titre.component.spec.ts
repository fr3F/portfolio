import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolledTitreComponent } from './scrolled_titre.component';

describe('ScrolledTitreComponent', () => {
  let component: ScrolledTitreComponent;
  let fixture: ComponentFixture<ScrolledTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrolledTitreComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScrolledTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
