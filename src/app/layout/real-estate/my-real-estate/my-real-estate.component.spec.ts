import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRealEstateComponent } from './my-real-estate.component';

describe('MyAdsComponent', () => {
    let component: MyAdsComponent;
    let fixture: ComponentFixture<MyRealEstateComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [MyRealEstateComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MyRealEstateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
