const pageLoaderInitialState = false;

type PageLoaderStateType = boolean;

// Reducer
export const pageLoaderReducer = (
  state = pageLoaderInitialState,
  action: PageLoaderGeneralActionType
): PageLoaderStateType => {
  switch (action.type) {
    case OPEN_PAGE_LOADER:
      return true;
    case CLOSE_PAGE_LOADER:
      return false;
    default:
      return state;
  }
};

//action names
const OPEN_PAGE_LOADER = "OPEN_PAGE_LOADER";
const CLOSE_PAGE_LOADER = "CLOSE_PAGE_LOADER";

//action types
type PageLoaderGeneralActionType = OpenLoaderActionType | CloseLoaderActionType;

type OpenLoaderActionType = {
  type: typeof OPEN_PAGE_LOADER;
};
type CloseLoaderActionType = {
  type: typeof CLOSE_PAGE_LOADER;
};

//action creators
export const openPageLoaderAction = (): OpenLoaderActionType => {
  return { type: OPEN_PAGE_LOADER };
};
export const closePageLoaderAction = (): CloseLoaderActionType => {
  return { type: CLOSE_PAGE_LOADER };
};
