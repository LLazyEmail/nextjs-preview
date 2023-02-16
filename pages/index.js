// import Head from 'next/head';
// import App from '../components/main';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{ textAlign: 'center', fontSize: '40px' }}
    >
      <h1>Simple template navigation</h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>

        <Link href="/billing-google">
           BillingGoogle 
          </Link> 
        <Link href="/first">
          first
        </Link>
        <Link href="/content-only">
          content-only
        </Link>
        <Link href="/full">
          full
        </Link>
        <Link href="/vouchful">
          vouchful
        </Link>
        <Link href="/mdx-test">
          Here test mdx
        </Link>
        <Link href="/mdx-components">
          MDX with components inside
        </Link>
      </ul>
    </div>
  );
}
