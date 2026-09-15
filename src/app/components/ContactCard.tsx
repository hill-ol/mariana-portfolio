import { channels, linkedInUrl, postscript } from "../content/contact";
import styles from "./ContactCard.module.css";

/**
 * The contact "letter". Shared by the /say-hello page and the modal opened
 * from the top bar, so the markup only exists once.
 */
export default function ContactCard() {
  return (
    <div className={styles.letter}>
      <span className={styles.stripe} aria-hidden="true" />

      <ul className={styles.channels}>
        {channels.map((channel) => (
          <li key={channel.label} className={styles.channel}>
            <p className={styles.channelLabel}>{channel.label}</p>
            <a
              href={channel.href}
              className={styles.channelValue}
              data-primary={channel.primary || undefined}
            >
              {channel.value}
            </a>
            {channel.hint ? (
              <p className={styles.channelHint}>{channel.hint}</p>
            ) : null}
          </li>
        ))}

        <li className={styles.channel}>
          <p className={styles.channelLabel}>LinkedIn</p>
          {linkedInUrl ? (
            <a href={linkedInUrl} className={styles.channelValue}>
              View profile
            </a>
          ) : (
            <span className={styles.channelPending} aria-disabled="true">
              Coming soon
            </span>
          )}
        </li>
      </ul>

      <p className={styles.postscript}>
        <span className={styles.postscriptMark}>P.S.</span>
        {postscript}
      </p>

      <span className={styles.stripe} data-edge="bottom" aria-hidden="true" />
    </div>
  );
}
