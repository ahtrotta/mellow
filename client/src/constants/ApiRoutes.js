export const BOARDS_INDEX_URL = "/api/boards";
export const CREATE_BOARD_URL = "/api/boards";
export const CREATE_LIST_URL = "/api/lists";

export const getBoardUrl = (id) => {
  return `/api/boards/${id}`;
};

export const editListUrl = (id) => {
  return `/api/lists/${id}`;
};
