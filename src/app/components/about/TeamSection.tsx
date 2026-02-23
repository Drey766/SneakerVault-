import React from 'react';
import styles from './TeamSection.module.css';

const team = [
  { name: 'Ferguson', role: 'Designer', image: '/images/team-1.jpg' },
  { name: 'Saga Norén', role: 'Developer', image: '/images/team-2.jpg' },
  { name: 'Karen Ryan', role: 'Developer', image: '/images/team-3.jpg' }
];

const TeamSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Behind The Brands</h2>
        <p className={styles.sectionSubtitle}>
          We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity
          and have-nothing-fearlessness in everything that we do. We take unmeosureable pride in our work, intentionally
          etching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented
          individuals dedicated to bringing you otherworldly designs with integrity at every stitch.
        </p>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
