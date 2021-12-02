import * as CatalogueActions from "../actions/catalogue.actions";

const initialState = {
  items: [],
  promotedItems: [],
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
  errorInItems: null,
  errorInCategories: null,
  errorInSubCategories: null,
  loadingItems: false,
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
    case CatalogueActions.FETCH_ALL_ITEMS.REQUEST:
      return {
        ...state,
        loadingItems: true,
      };
    case CatalogueActions.FETCH_ALL_ITEMS.SUCCESS:
      return {
        ...state,
        loadingItems: false,
        promotedItems: action.payload.data.filter(
          (item) => item.promoted === "true"
        ),
        items: action.payload.data.filter((item) => item.promoted !== "true"),
      };
    case CatalogueActions.FETCH_ALL_ITEMS.FAILURE:
      return {
        ...state,
        loadingItems: false,
        errorInItems: action.payload,
        promotedItems: [],
        items: [],
      };
    default:
      return state;
  }
}
