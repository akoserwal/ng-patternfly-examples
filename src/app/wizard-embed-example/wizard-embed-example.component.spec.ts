import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardEmbedExampleComponent } from './wizard-embed-example.component';

describe('WizardEmbedExampleComponent', () => {
  let component: WizardEmbedExampleComponent;
  let fixture: ComponentFixture<WizardEmbedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardEmbedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardEmbedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
