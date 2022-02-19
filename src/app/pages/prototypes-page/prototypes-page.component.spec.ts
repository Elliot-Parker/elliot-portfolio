import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypesPageComponent } from './prototypes-page.component';

describe('PrototypesPageComponent', () => {
    let component: PrototypesPageComponent;
    let fixture: ComponentFixture<PrototypesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PrototypesPageComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrototypesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
