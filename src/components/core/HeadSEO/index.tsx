import Head from 'next/head'

interface HeadSEOProps {
  pageTitle?: string
  metaDescription?: string
  metaType?: string
  url?: string
}

export const HeadSEO = ({
  pageTitle,
  metaDescription,
  metaType,
  url
}: HeadSEOProps) => {
  return (
    <Head>
      {pageTitle && (
        <>
          <title>{pageTitle}</title>
          <meta itemProp="name" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
          <meta name="twitter:title" content={pageTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta itemProp="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {metaType && <meta property="og:type" content={metaType} />}
      {url && <meta property="og:url" content={url} />}
    </Head>
  )
}
