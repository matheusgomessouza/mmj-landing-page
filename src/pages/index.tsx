import Head from 'next/head';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

// Dynamic imports for better initial bundle size
const FinancialFreedom = dynamic(() => import('@/components/FinancialFreedom'));
const Features = dynamic(() => import('@/components/Features'));
const Stats = dynamic(() => import('@/components/Stats'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const CTA = dynamic(() => import('@/components/CTA'));

export default function Home() {
  return (
    <>
      <Head>
        <title>My Money Journey - Your Personal Financial Journey</title>
        <meta name="description" content="Take Control of Your Financial Journey. Visualize, plan, and achieve your financial goals." />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Hero />
      <FinancialFreedom />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
