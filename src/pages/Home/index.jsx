import React from 'react';
import styles from './home.module';
import { Link } from 'react-router-dom';

//import components
import Navbar from '../../components/Navbar';

function Home() {
	return (
		<div className={styles.root}>
			<Navbar />
			<section className={styles.sec}>
				<h1 className={styles.logo}>SIGMA++</h1>
				<p className={styles.paragraph}>Math & Physics lessons, exercices exams for free</p>
				<div className={styles.offer}>
					<div className={styles.container}>
						<p className={styles.paragraphAlt}>get interactive lessons, proofs illustrated</p>

						<button className={styles.btn}>Join NOW</button>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.header}>
					<Link className={styles.link} to="/curriculums">
						All
					</Link>
					<Link className={styles.link} to="/curriculums/math">
						Math
					</Link>
					<Link className={styles.link} to="/curriculums/physics">
						Physics
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Home;
