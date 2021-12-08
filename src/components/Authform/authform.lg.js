import { useUser } from '../../context';

//useLogic function stores all the logic a component is gonna need

export const useLogic = () => {
	const { state, dispatch } = useUser();

	//login process function goes here
	const loginClick = async () => {};

	//signUp process function goes here
	const signUpClick = async () => {};

	return { loginClick };
};
