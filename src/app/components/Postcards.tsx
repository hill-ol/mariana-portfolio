import type { Destination } from "../content/destinations";
import { Stagger, StaggerItem } from "./Stagger";
import styles from "./Postcards.module.css";

function padded(order: number) {
  return String(order).padStart(2, "0");
}

export default function Postcards({
  destinations,
}: {
  destinations: Destination[];
}) {
  return (
    <Stagger className={styles.grid} as="ul" stagger={0.1} inView>
      {destinations.map((destination) => (
        <StaggerItem key={destination.slug} className={styles.card} as="li">
          <span className={styles.stripe} aria-hidden="true" />

          <div className={styles.head}>
            <span className={styles.country}>{destination.countryCode}</span>
            <div>
              <p className={styles.eyebrow}>
                Destination No. {padded(destination.order)}
                {destination.isHomeBase ? " · Home Base" : null}
              </p>
              <p className={styles.city}>
                {destination.city}, {destination.region}
              </p>
            </div>
          </div>

          <div className={styles.split}>
            <div className={styles.photo}>
              {destination.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={destination.image.src}
                  alt={destination.image.alt}
                  className={styles.photoImg}
                />
              ) : (
                <span className={styles.photoPlaceholder} aria-hidden="true" />
              )}
              <span className={styles.photoLabel}>
                {destination.photoLabel}
              </span>
            </div>

            <div className={styles.text}>
              <h3 className={styles.headline}>{destination.headline}</h3>
              <p className={styles.quote}>{destination.quote}</p>
              <p className={styles.blurb}>{destination.blurb}</p>
            </div>
          </div>

          <div className={styles.foot}>
            <span className={styles.coords} aria-hidden="true">
              {destination.coordinates}
            </span>
            <span className={styles.tag}>{destination.tag}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
