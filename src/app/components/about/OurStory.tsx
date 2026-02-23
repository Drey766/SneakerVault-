import React from 'react';
import styles from './OurStory.module.css';

const OurStory: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Our Story */}
        <div className={styles.storyBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Our Story</h2>
            <p className={styles.subtitle}>THE NORD STREET FAVOURITE</p>
            <p className={styles.description}>
              Praesent rutrus tellus, elementum eu, semper e, adipiscing nec, purus. Vestibulum volutpat
              pretium libero. In ut quam vitae odious lacinia tincidunt. Etiam ut purus mattis mauris sodales
              aliquam. Aenean massa. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Praesent consequat tincidunt hac habitasse platea dictumst. Et facilisis lorem odio eu amet,
              consectetuer adipiscing elit.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>

        {/* Who We Are */}
        <div className={`${styles.storyBlock} ${styles.reverse}`}>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Who We Are?</h2>
            <p className={styles.subtitle}>THE NORD STREET FAVOURITE</p>
            <p className={styles.description}>
              Praesent rutrus tellus, elementum eu, semper e, adipiscing nec, purus. Vestibulum volutpat
              pretium libero. In ut quam vitae odious lacinia tincidunt. Etiam ut purus mattis mauris sodales
              aliquam. Aenean massa. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Praesent
              consequat tincidunt hac habitasse platea dictumst. Et facilisis lorem odio eu amet, consectetuer
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
