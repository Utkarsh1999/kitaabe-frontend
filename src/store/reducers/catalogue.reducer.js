import * as CatalogueActions from "../actions/catalogue.actions";

const initialState = {
  categories: [
    {
      id: "amdjfbkadjbf1",
      name: "cat1",
    },
    {
      id: "amdjfbkadjbf2",
      name: "cat2",
    },
    {
      id: "amdjfbkadjbf3",
      name: "cat3",
    },
  ],
  subCategories: [
    {
      id: "1",
      name: "hard copy",
    },
    {
      id: "2",
      name: "soft copy",
    },
    {
      id: "3",
      name: "other",
    },
  ],
  errorInCategories: null,
  errorInSubCategories: null,
  loadingCategories: false,
  loadingSubCategories: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CatalogueActions.FETCH_CATEGORIES.REQUEST:
      return {
        ...state,
        loadingCategories: true,
      };
    case CatalogueActions.FETCH_CATEGORIES.SUCCESS:
      console.log("data: " + action.payload["data"]);
      return {
        ...state,
        loadingCategories: false,
        categories: [...action.payload.data],
      };
    case CatalogueActions.FETCH_CATEGORIES.FAILURE:
      return {
        ...state,
        loadingCategories: false,
        errorInCategories: action.payload,
      };
    case CatalogueActions.FETCH_SUB_CATEGORIES.REQUEST:
      return {
        ...state,
        loadingSubCategories: true,
      };
    case CatalogueActions.FETCH_SUB_CATEGORIES.SUCCESS:
      return {
        ...state,
        loadingSubCategories: false,
        subCategories: action.payload.data,
      };
    case CatalogueActions.FETCH_SUB_CATEGORIES.FAILURE:
      return {
        ...state,
        loadingSubCategories: false,
        errorInSubCategories: action.payload,
      };
    default:
      return state;
  }
}
