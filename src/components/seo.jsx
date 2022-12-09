import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { 
    title: defaultTitle, 
    description: defaultDescription, 
    // image, 
    siteUrl, 
    // twitterUsername
    } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <link rel="image_src" href="https://i.ibb.co/HFcHY6K/tasksuite.png" />

        <meta property="og:title" content="TaskSuite" />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url}/>
        <meta property="og:image" content="https://i.ibb.co/HFcHY6K/tasksuite.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="945" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://i.ibb.co/HFcHY6K/tasksuite.png"/>

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