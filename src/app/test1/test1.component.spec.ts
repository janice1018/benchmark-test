import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1Component, HttpClientModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
