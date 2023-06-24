import { useEffect } from 'react'
import styles from './Alert.module.css'
import { IoMdClose } from 'react-icons/io'

const Alert = ({ type, message, removeAlert, envoker, time = 5000, show }) => {
	const showAlert = Boolean(show) && typeof show !== 'object'

	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert()
		}, time)
		return () => clearTimeout(timeout)
	}, [envoker])

	if (!showAlert) {
		return null
	}
	return (
		<div className={styles['alert__wrapper']}>
			<div
				className={`${styles.alert} ${styles[`alert--${type}`]} ${show && styles['alert--show']}`}>
				{message}
				<button type='button' className={`${styles.icon}`} onClick={removeAlert}>
					<IoMdClose />
				</button>
			</div>
		</div>
	)
}

export default Alert
