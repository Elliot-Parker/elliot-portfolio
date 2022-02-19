import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGridviewComponent } from './videos-gridview.component';

describe('VideosGridviewComponent', () => {
    let component: VideosGridviewComponent;
    let fixture: ComponentFixture<VideosGridviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ VideosGridviewComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VideosGridviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
