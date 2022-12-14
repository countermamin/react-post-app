import React from 'react';
import styles from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
	const rootCLasses = [styles.myModal];
	if (visible) {
		rootCLasses.push(styles.active);
	}

	return (
		<div className={rootCLasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
