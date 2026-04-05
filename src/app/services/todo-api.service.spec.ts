import { TestBed } from '@angular/core/testing';

import { TodoApiServices } from './todo-api.service';

describe('TodoApi', () => {
  let service: TodoApiServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoApiServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
