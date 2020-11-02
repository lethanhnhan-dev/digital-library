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
