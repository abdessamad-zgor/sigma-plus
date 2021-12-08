import React from 'react';
import styles from './authform.module';

//import useLogic
import { useLogic } from './authform.lg';

function Authform() {
	const { loginClick, signUpClick } = useLogic();
	return (
		<div className={styles.root}>
			<form className={styles.form}>
				<div className={styles.row}>
					<div className={styles.flex}>
						<div className={styles.half}>
							<label id="firstNameLabel" className={styles.label} htmlFor="">
								First Name
							</label>
							<input id="firstName" className={styles.input} type="text" name="" id="" />
						</div>
						<div className={styles.grow} />
						<div className={styles.half}>
							<label id="lastNamefirstNameLabel" className={styles.label} htmlFor="">
								{' '}
								Last Name
							</label>
							<input className={styles.input} type="text" name="" id="" />
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<label id="label" className={styles.label} htmlFor="">
						Username
					</label>
					<input id="label" className={styles.input} type="text" name="" id="" />
				</div>

				<div className={styles.row}>
					<label id="label" className={styles.label} htmlFor="">
						Email
					</label>
					<input id="label" className={styles.input} type="text" name="" id="" />
				</div>
				<div className={styles.row}>
					<label id="label" className={styles.label} htmlFor="">
						Password
					</label>
					<input className={styles.input} type="text" name="" id="" />
				</div>
				<div className={styles.row}>
					<label id="label" className={styles.label} htmlFor="">
						Confirm Password
					</label>
					<input className={styles.input} type="text" name="" id="" />
				</div>
				{/* onClick={} needs to bee added in authform logic */}
				<button className={styles.btn} onClick={signUpClick}>
					{' '}
					Sign up
				</button>
			</form>
		</div>
	);
}

export default Authform;
