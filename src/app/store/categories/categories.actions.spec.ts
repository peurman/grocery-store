import * as fromActions from './categories.actions';
import { CategoryInterface } from 'src/app/core/models/category.interface';

describe('Categories actions', () => {
  it('should create an action to retrieve the categories', () => {
    const action = fromActions.getCategoriesAction();
    expect(action.type).toEqual('[Category] Get Categories Action');
  });

  it('should create an action to indicate a successful categories retrieval', () => {
    const payload: CategoryInterface = {
      data: [{ id: 1, slug: 'category-1', name: 'category 1' }],
      meta: {
        current_page: 1,
        from: null,
        last_page: 4,
        per_page: 4,
        to: null,
        total: 2,
      },
    };
    const action = fromActions.getCategoriesSuccessAction({ data: payload });
    expect(action.type).toEqual('[Category] Get Categories Success Action');
    expect(action.data).toEqual(payload);
  });

  it('should create an action to indicate an error retrieving the categories', () => {
    const payload = 'Error message';
    const action = fromActions.getCategoriesErrorAction({ message: payload });
    expect(action.type).toEqual('[Category] Get Categories Error Action');
    expect(action.message).toEqual(payload);
  });
});
