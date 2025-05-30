import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmitirFacturaPage } from './emitir-factura.page';

describe('EmitirFacturaPage', () => {
  let component: EmitirFacturaPage;
  let fixture: ComponentFixture<EmitirFacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
