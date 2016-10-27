import { TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HomeComponent
            ]
        });
    });

    it('should be defined', inject([HomeComponent], (homeComponent: HomeComponent) => {
        expect(homeComponent).toBeDefined();
    }));

});
