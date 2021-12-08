import React from 'react';
import { useUser, useLogic, UserContext } from './logic/user.lg';

function UserContextProvider({ children }) {
	const { state, dispatch } = useLogic();
	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}

export default UserContextProvider;

export { useUser };
