
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  { name: "Land Transport", href: "/services/land-transport" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Forwarding Services", href: "/services/forwarding-services" },
  { name: "Logistics", href: "/services/logistics" },
  { name: "Warehousing", href: "/services/warehousing" },
  { name: "Diplomatic Shipment", href: "/services/diplomatic-shipment" },
  { name: "Supply Chain", href: "/services/supply-chain" },
];

export default function Services() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <Link key={service.name} href={service.href}>
              <a className={styles.serviceCard}>
                <h3>{service.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
