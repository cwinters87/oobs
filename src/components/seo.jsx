import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({
  title,
  description,
  pathname,
  children,
  robots,
  noIndex,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    // image,
    siteUrl,
    robots: defaultRobots,
    noIndex: defaultNoIndex,
    // twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    robots: robots || defaultRobots,
    noIndex: noIndex || defaultNoIndex,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  }

  // const googleScript = `
  //   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //   })(window,document,'script','dataLayer','GTM-WXTCT9W');
  // `

  return (
    <>
      <title>{seo.title}</title>
      <meta
        name="title"
        content=" Loan Management, Origination, Servicing, and Credit Software"
      ></meta>
      {/* <script>{googleScript}</script> */}
      <meta name="description" content={seo.description} />
      <link
        rel="image_src"
        href="https://i.ibb.co/N1jbm4q/Untitled-design-1.png"
      />

      <meta name={seo.robots} content={seo.noIndex} />

      <meta property="og:title" content="TaskSuite" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta
        property="og:image"
        content="https://i.ibb.co/N1jbm4q/Untitled-design-1.png"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="945" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/N1jbm4q/Untitled-design-1.png"
      />

      {/* <meta name="image" content={seo.image} /> */}

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} /> */}

      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}

      {children}
    </>
  )
}
