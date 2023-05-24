import { TestBed } from '@angular/core/testing';

import { SidebarMenuService } from './sidebar-menu.service';

describe('SidebarMenuService', () => {
  let service: SidebarMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
