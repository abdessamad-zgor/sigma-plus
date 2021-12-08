import { useContext, createContext, useEffect, useReducer } from 'react';
import userReducer from '../reducers/userReducer';

//import init state
import { userInit } from '../states';

const UserContext = createContext();

function useUser() {
	let context = useContext(UserContext);
	return context;
}

const useLogic = function () {
	const { state, dispatch } = useReducer(userReducer, userInit);
	return { state, dispatch };
};

export { UserContext, useUser, useLogic };
