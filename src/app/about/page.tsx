import AboutHero from '@/app/components/about/AboutHero';
import OurStory from '@/app/components/about/OurStory';
import OurValues from '@/app/components/about/OurValues';
import TeamSection from '@/app/components/about/TeamSection';
import NewsletterBanner from '@/app/components/about/NewsletterBanner';
import InstagramFeed from '@/app/components/about/InstagramFeed';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <NewsletterBanner />
      <InstagramFeed />
    </>
  );
}
