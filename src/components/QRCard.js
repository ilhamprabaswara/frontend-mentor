import styles from './QRCard.module.css'
export default function QRCard() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img alt='qr-code' className={styles.qrCode} src="images/image-qr-code.png"/>
                    <div className={styles.content}>
                        <h2 className={styles.h2Card}>Improve your front-end skills by building projects</h2>
                        <p className={styles.pCard}>Scan the QR code to visit Front-end Mentor and take your coding skills to next level</p>
                    </div>
            </div>
        </div>
    )
}