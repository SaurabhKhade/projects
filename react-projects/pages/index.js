import Tooltip from '/components/social-link-tooltip';
import {useRouter} from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  
  const visit = (path) => {
    router.push(path)
  }
  
  return (
  <>
  <Head>
    <title>ReactJS Components | Homepage</title>
    <meta name="description" content="get small, effective and responsive components for your react js project."/>
    <meta name="keywords" content="react,react js, components, saurabh khade, web development,front end development" />
    <meta property="og:title" content="ReactJS Components | Homepage" />
    <meta property="og:description" content="get small, effective and responsive components for your react js project." />
  </Head>
  <div className="home">
    <h2>Download Small components for your react project</h2>
    <div className="card" name="tooltip" onClick={()=>visit("tooltip")}>
      <h3>Social Links with Tooltip</h3>
      <p>
        Icon links to your social media profiles. Shows a tooltip when hovered with amazing hover effext
      </p>
    </div>
  </div>
  </>
  );
}