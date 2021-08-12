import Component from '/components/login-form';
import Download from '/components/Download';
import Head from "next/head";

export default function Tooltip() {
  return (
  <>
  <Head>
    <title>Perfect login form for your website.</title>
    <meta name="description" content="Excellent login form with great ui. also you can download the component and use in your website with just one click."/>
    <meta name="keywords" content="react,react js, components, saurabh khade, web development,front end development,download components,login form, form" />
    <meta property="og:title" content="Perfect login form for your website." />
    <meta property="og:description" content="Excellent login form with great ui. also you can download the component and use in your website with just one click." />
  </Head>
  <Component />
  <Download link = "login-form.zip" />
  </>
  )
}