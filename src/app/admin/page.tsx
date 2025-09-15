
import styles from './page.module.css';

export default function Admin() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Admin Page</h1>
        <div className={styles.content}>
          <p>Welcome to the admin page. Here you can manage your shipments.</p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tracking Number</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>In Transit</td>
                  <td>New York, USA</td>
                  <td><button>Edit</button> <button>Delete</button></td>
                </tr>
                <tr>
                  <td>67890</td>
                  <td>Delivered</td>
                  <td>London, UK</td>
                  <td><button>Edit</button> <button>Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
