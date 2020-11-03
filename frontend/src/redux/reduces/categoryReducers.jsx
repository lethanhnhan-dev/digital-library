import * as categoryTypes from "../constants/categoryConstants";

export const createCategoryReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case categoryTypes.CATEGORY_CREATE_REQUEST:
			return { loading: true };
		case categoryTypes.CATEGORY_CREATE_SUCCESS:
			return { loading: false, success: true, category: action.payload };
		case categoryTypes.CATEGORY_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case categoryTypes.CATEGORY_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const getAllCategoriesReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case categoryTypes.CATEGORIES_GET_ALL_REQUEST:
			return { loading: true };
		case categoryTypes.CATEGORIES_GET_ALL_SUCCESS:
			return { loading: false, success: true, categories: action.payload };
		case categoryTypes.CATEGORIES_GET_ALL_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const editCategoryByIdReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case categoryTypes.CATEGORY_EDIT_BY_ID_REQUEST:
			return { loading: true };
		case categoryTypes.CATEGORY_EDIT_BY_ID_SUCCESS:
			return { loading: false, success: true, message: action.payload };
		case categoryTypes.CATEGORY_EDIT_BY_ID_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
export const deleteCategoryByIdReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case categoryTypes.CATEGORY_EDIT_BY_ID_REQUEST:
			return { loading: true };
		case categoryTypes.CATEGORY_EDIT_BY_ID_SUCCESS:
			return { loading: false, success: true, message: action.payload };
		case categoryTypes.CATEGORY_EDIT_BY_ID_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
