import NextHead from 'next/head'

export default function Head(props) {
  
  return (
    <NextHead>
      <title>{props.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={props.desc} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="Math Calculator" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content="/img/logo.webp" />
      <meta property="og:url" content="https://saurabhkhade.github.io/Math-Calculator" />
      <meta property="og:site_name" content="Math-Calculator" />
      <meta name="keywords" content={`maths,calculator,saurabh khade,${props.keys}`} />
      <meta name="author" content="Saurabh Khade" />
      
      <link rel="shortcut icon" href="/img/logo.ico" type="image/x-icon" />
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="http://cdn.jsdelivr.net/npm/eruda"></script>
      <script>eruda.init()</script> 
    </NextHead>
  )
}