import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, select } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { mockCategoriesArray } from 'src/app/test/mock/mock-categories';

import { CategoriesComponent } from './categories.component';
import { Category } from 'src/app/core/models/category.interface';

import { getCategoriesAction } from 'src/app/store/categories/categories.actions';
import { getProductsByCategoryAction } from 'src/app/store/products/products.actions';

import { selectCategoriesData } from 'src/app/store/categories/categories.selectors';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let store: Store<{ categories: Category[] }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [CategoriesComponent],
      providers: [
        // provideMockStore({ initialState }),
        { useValue: jasmine.createSpyObj('store', ['select', 'dispatch']) },
      ],
    }).compileComponents();
    // store = TestBed.inject(MockStore);
    store = TestBed.get(Store);
    spyOn(store, 'select').and.callThrough();
    spyOn(store, 'dispatch').and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('component creation', () => {
    it('should create the categories component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit', () => {
    it('should dispatch getCategoriesAction on ngOnInit', () => {
      fixture.detectChanges();
      expect(store.dispatch).toHaveBeenCalledWith(getCategoriesAction());
    });
    // // ! NOT WORKING -> <toHaveBeenCalled> : Expected a spy, but got Store...
    // it('should select categoriesData on ngOnInit', () => {
    //   spyOn(store, 'select').and.callThrough();
    //   component.ngOnInit();
    //   expect(component.categories$).toBeDefined();
    //   expect(
    //     store.select<Category[] | undefined>(selectCategoriesData)
    //   ).toHaveBeenCalled();
    // });
    it('should select categories data', waitForAsync(() => {
      fixture.whenStable().then(() => {
        component.categories$.subscribe(categories => {
          store
            .pipe(select(selectCategoriesData))
            .subscribe(selectCategoriesData => {
              expect(categories).toEqual(selectCategoriesData);
              // done();
            });
        });
      });
    }));
  });
  describe('onSelect function', () => {
    it('should dispatch getProductsByCategoryAction on onSelect', () => {
      const value = 2;
      component.onSelect({
        target: { value },
      } as any);

      expect(store.dispatch).toHaveBeenCalledWith(
        getProductsByCategoryAction({ id: value })
      );
    });
  });

  describe('template', () => {
    it('should display a select element if categories are loaded', () => {
      const categories: Category[] = mockCategoriesArray;
      component.categories$ = of(categories);
      fixture.detectChanges();
      const selectElement = fixture.debugElement.query(By.css('select'));
      expect(selectElement).toBeTruthy();
    });
    it('should display options for each category', () => {
      const categories: Category[] = mockCategoriesArray;
      component.categories$ = of(categories);
      fixture.detectChanges();
      const optionElements = fixture.debugElement.queryAll(By.css('option'));
      expect(optionElements.length).toBe(4); // 1 default + 3 options
      expect(optionElements[1].nativeElement.textContent).toContain(
        ' category 1'
      );
      expect(optionElements[2].nativeElement.textContent).toContain(
        ' category 2'
      );
      expect(optionElements[3].nativeElement.textContent).toContain(
        ' category 3'
      );
    });
  });
});
