import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/globe.svg" alt="Nexport Logistics Logo" width={40} height={40} />
          <h1>Nexport Logistics</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/tracking">Tracking</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>SEA FREIGHT MANAGEMENT</h2>
            <p>FCL and LCL shipments worldwide, including time-definite options.</p>
            <a href="#contact" className={styles.primary}>Get a Quote</a>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Land Transport</h3>
              <p>We handle your parcel delivery with professionalism and thoroughness.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Sea Freight</h3>
              <p>Our Customized pricing of Ocean Transport is a major attraction.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Air Freight</h3>
              <p>Nexport Logistics freight management solutions can track and manage.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Warehousing</h3>
              <p>We evaluate warehouse design strategically and provide solutions.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>Contact Us</h3>
          <p>Email: customercare@nexportlogistics.com</p>
          <p>Phone: +1 (936) 635 - 0467</p>
        </div>
      </footer>
    </div>
  );
}