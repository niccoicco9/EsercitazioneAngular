import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavigazioneComponent } from './menu-navigazione.component';

describe('MenuNavigazioneComponent', () => {
  let component: MenuNavigazioneComponent;
  let fixture: ComponentFixture<MenuNavigazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavigazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavigazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
