import Component from '/components/social-link-tooltip';
import Download from '/components/Download';
import Head from "next/head";

export default function Tooltip() {
  return (
  <>
  <Head>
    <title>Social Links with Tooltip</title>
    <meta name="description" content="Icon links to your social media profiles. Shows a tooltip when hovered with amazing hover effext."/>
    <meta name="keywords" content="react,react js, components, saurabh khade, web development,front end development,tooltip, react tooltip, social media links,navbar, react navbar, hover effect,download components" />
    <meta property="og:title" content="Social Links with Tooltip" />
    <meta property="og:description" content="Icon links to your social media profiles. Shows a tooltip when hovered with amazing hover effext." />
  </Head>
  <Component />
  <Download link = "social-link-tooltip.zip" />
  </>
  )
}