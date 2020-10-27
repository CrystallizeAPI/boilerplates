import produce from 'immer';

export default produce(function SearchSpecReducer(draft, { action, ...rest }) {
  switch (action) {
    case 'setSearchTerm': {
      draft.filter.searchTerm = rest.searchTerm;
      break;
    }
    case 'setOrderBy': {
      draft.orderBy = rest.orderBy;
      break;
    }
    case 'navigate': {
      draft.before = rest.before;
      draft.after = rest.after;
      break;
    }
    default: {
      throw new Error(`Action ${action} not supported`);
    }
  }

  if (!draft.filter.searchTerm) {
    delete draft.filter.searchTerm;
  }
});
