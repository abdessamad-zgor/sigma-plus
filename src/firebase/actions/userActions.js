import { db, auth } from '../index';

//actions are function that directely deal with the firebase project created , handelling firestore queries and auth requests

const loginAction = async (payload) => {
	//login a user with email and password
	return auth
		.signInWithEmailAndPassword(payload.email, payload.password)
		.then((userCredential) => {
			return userCredential.user;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

const signUpAction = async (payload) => {
	//create a new user with a combination of email and password authentication, whilst storing primary user info provided by the user , the user will not be created or loggrd in without passing the required info
	return auth.createUserWithEmailAndPassword(payload.email, payload.password).then(async (userCredential) => {
		await storeUserInfoAction(userCredential.user.uid, payload);
		return userCredential;
	});
};

const storeUserInfoAction = async (uid, payload) => {
	//store user info after signup

	const userRef = db.collection('users').doc(uid);
	return userRef
		.set({
			fullName: `${payload.firstName} ${payload.lastName}`,
			username: payload.username,
			email: payload.email,
		})
		.then()
		.catch((err) => {
			throw new Error(err.message);
		});
};

//export all action here
export { loginAction, signUpAction, storeUserInfoAction };
