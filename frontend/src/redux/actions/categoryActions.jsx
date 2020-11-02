import * as categoryTypes from "../constants/categoryConstants";
import axios from "axios";

export const create = (name) => async (dispatch, getState) => {
	try {
		dispatch({ type: categoryTypes.CATEGORY_CREATE_REQUEST });

		const { userLogin } = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userLogin.userInfo.token}`,
			},
		};

		const { data } = await axios.post(
			"/api/categories/create",
			{ name },
			config,
		);
		dispatch({
			type: categoryTypes.CATEGORY_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: categoryTypes.CATEGORY_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getAllCategories = () => async (dispatch) => {
	try {
		dispatch({ type: categoryTypes.CATEGORIES_GET_ALL_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get("/api/categoies", config);
		dispatch({
			type: categoryTypes.CATEGORIES_GET_ALL_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: categoryTypes.CATEGORIES_GET_ALL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getCategoryById = (id) => async (dispatch) => {
	try {
		dispatch({ type: categoryTypes.CATEGORY_BY_ID_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(`/api/categoies/${id}`, config);
		dispatch({
			type: categoryTypes.CATEGORY_BY_ID_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: categoryTypes.CATEGORY_BY_ID_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const editCategoryById = (id, name) => async (dispatch) => {
	try {
		dispatch({ type: categoryTypes.CATEGORY_EDIT_BY_ID_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(`/api/categoies/${id}`, config);
		dispatch({
			type: categoryTypes.CATEGORY_EDIT_BY_ID_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: categoryTypes.CATEGORY_EDIT_BY_ID_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
