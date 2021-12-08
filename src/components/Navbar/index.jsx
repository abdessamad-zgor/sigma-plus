import React from 'react';
import styles from './navbar.module';
import { Link } from 'react-router-dom';

function Navbar({ auth }) {
	return (
		<div className={styles.root}>
			<Link to="/" className={styles.logo}>
				SIGMA++
			</Link>
			<div className={styles.grow} />

			{/* menu */}
			{auth ? (
				''
			) : (
				<div className={styles.navList}>
					<div className={styles.navItem}>
						<div className={styles.btnAlt}>Get Started</div>
					</div>
					<div className={styles.navItem}>
						<Link to="/auth" className={styles.btn}>
							Register
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
