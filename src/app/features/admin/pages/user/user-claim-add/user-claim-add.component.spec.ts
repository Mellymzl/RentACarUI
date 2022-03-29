import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClaimAddComponent } from './user-claim-add.component';

describe('UserClaimAddComponent', () => {
  let component: UserClaimAddComponent;
  let fixture: ComponentFixture<UserClaimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClaimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClaimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
