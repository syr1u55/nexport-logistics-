
import styles from "./page.module.css";

export default function Tracking() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shipment Tracking</h1>
        <div className={styles.content}>
          <p>Track your shipment by entering the tracking number below.</p>
          <div className={styles.form}>
            <input type="text" placeholder="Enter your tracking number" />
            <button type="submit">Track</button>
          </div>
        </div>
      </main>
    </div>
  );
}
