import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CategoriesComponent } from './categories.component';
import { Category } from 'src/app/core/models/category.interface';

import { getCategoriesAction } from 'src/app/store/categories/categories.actions';
import { getProductsByCategoryAction } from 'src/app/store/products/products.actions';

import { selectCategoriesData } from 'src/app/store/categories/categories.selectors';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let selectEl: DebugElement;
  let store: Store<{ categories: Category[] }>;
  // const initialState = { categories: [] };

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
    selectEl = fixture.debugElement.query(By.css('select'));
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
    // ! NOT WORKING -> <toHaveBeenCalled> : Expected a spy, but got Store...
    it('should select categoriesData on ngOnInit', () => {
      fixture.detectChanges();

      component.ngOnInit();
      // expect(store.select).toHaveBeenCalledWith(selectCategoriesData);
      // expect(component.categories$).toBeDefined();
      expect(
        store.select<Category[] | undefined>(selectCategoriesData)
      ).toHaveBeenCalled();
    });
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
  // ! NOT WORKING -> Cannot read properties of null (reading 'queryAll')
  describe('template', () => {
    it('should render categories in the select', async () => {
      const categories: Category[] = [
        { id: 1, slug: 'category-1', name: 'category 1' },
        { id: 2, slug: 'category-2', name: 'category 2' },
        { id: 3, slug: 'category-3', name: 'category 3' },
      ];
      component.categories$ = of(categories);
      // await component.categories$;
      fixture.detectChanges();
      const options = selectEl.queryAll(By.css('option'));
      console.log(options);
      expect(options.length).toBe(3); // 1 default + 3 categories
      expect(options[1].nativeElement.textContent).toContain('category1');
      expect(options[2].nativeElement.textContent).toContain('category2');
      expect(options[3].nativeElement.textContent).toContain('category3');
    });
  });
});
