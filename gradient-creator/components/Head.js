import NextHead from 'next/head'

export default function Head() {
  return (
    <NextHead>
      <title>Gradient Creator</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="Create linear, radial or conical gradient easily and copy the css code on clipboard." />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="Gradient Creator" />
      <meta property="og:title" content="Gradient Creator" />
      <meta property="og:description" content="Create linear, radial or conical gradient easily and copy the css code on clipboard." />
      <meta property="og:image" content="/gradient-creator/logo.jpeg" />
      <meta property="og:url" content="https://saurabhkhade.github.io/gradient-creator" />
      <meta property="og:site_name" content="Gradient Creator" />
      <meta name="keywords" content="Saurabh,Khade,gradient creator,css generator" />
      <meta name="author" content="Saurabh Khade" />
      
      <link rel="shortcut icon" href="/gradient-creator/logo.jpeg" type="image/x-icon" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </NextHead>
  )
}