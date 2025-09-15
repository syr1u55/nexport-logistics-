
"use client";

import { useState } from "react";

interface TrackingInfo {
  status: string;
  location?: string;
  estimatedDelivery?: string;
  details?: { date: string; time: string; status: string }[];
  message?: string;
}
import styles from "./page.module.css";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);

  const handleTrack = () => {
    // Simulate API call
    if (trackingNumber === "12345") {
      setTrackingInfo({
        status: "In Transit",
        location: "New York, USA",
        estimatedDelivery: "2025-09-20",
        details: [
          { date: "2025-09-14", time: "10:00 AM", status: "Shipped from origin" },
          { date: "2025-09-15", time: "03:00 PM", status: "Arrived at sorting facility" },
          { date: "2025-09-16", time: "08:00 AM", status: "In transit to destination" },
        ],
      });
    } else if (trackingNumber === "67890") {
      setTrackingInfo({
        status: "Delivered",
        location: "London, UK",
        estimatedDelivery: "2025-09-10",
        details: [
          { date: "2025-09-08", time: "09:00 AM", status: "Shipped from origin" },
          { date: "2025-09-09", time: "02:00 PM", status: "Arrived at destination country" },
          { date: "2025-09-10", time: "11:00 AM", status: "Delivered" },
        ],
      });
    } else {
      setTrackingInfo({ status: "Not Found", message: "Tracking number not found." });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shipment Tracking</h1>
        <div className={styles.content}>
          <p>Track your shipment by entering the tracking number below.</p>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Enter your tracking number (e.g., 12345 or 67890)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
          </div>

          {trackingInfo && (
            <div className={styles.trackingResults}>
              <h2>Tracking Status: {trackingInfo.status}</h2>
              {trackingInfo.message ? (
                <p>{trackingInfo.message}</p>
              ) : (
                <>
                  <p><strong>Current Location:</strong> {trackingInfo.location}</p>
                  <p><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
                  <h3>Details:</h3>
                  <ul className={styles.trackingDetails}>
                    {trackingInfo.details.map((event, index) => (
                      <li key={index}>
                        <span>{event.date} {event.time}</span> - <span>{event.status}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
