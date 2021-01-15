import styles from './layout.module.css'

export default function Layout({ children }) {
	const name = "Dodo";
	return <div className={styles.container}>{children}</div>
}