import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponentComponent } from './block-component.component';

describe('BlockComponentComponent', () => {
  let component: BlockComponentComponent;
  let fixture: ComponentFixture<BlockComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
