import React from 'react';
import styles from './auth.module';

//import components
import Navbar from '../../components/Navbar';
import Authform from '../../components/Authform';

function Auth() {
	return (
		<div className={styles.root}>
			<Navbar auth />

			<div className={styles.container}>
				<Authform />
			</div>
		</div>
	);
}

export default Auth;
