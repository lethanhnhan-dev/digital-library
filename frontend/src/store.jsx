import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
} from "./redux/reduces/userReducers";

import {
	createCategoryReducer,
	getAllCategoriesReducer,
	editCategoryByIdReducer,
} from "./redux/reduces/categoryReducers";

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	createCategory: createCategoryReducer,
	getAllCategories: getAllCategoriesReducer,
	editCategoryById: editCategoryByIdReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: {
		userInfo: userInfoFromLocalStorage,
	},
};

const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
