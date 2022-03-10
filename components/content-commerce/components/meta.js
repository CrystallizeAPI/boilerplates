import Head from 'next/head'
const MetaGenerator = ({
  title,
  type = 'website',
  description,
  mediaUrl,
  siteName = 'Voyage',
}) => {
  //@TODO add OG:URL
  return (
    <Head>
      <meta name="robots" content="index, follow" />
      <title>{!!title ? `${title} | ${siteName}` : siteName}</title>

      <meta property="og:title" content={title || siteName} />
      <meta name="twitter:title" content={title || siteName} />

      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary" />
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {!!mediaUrl && (
        <>
          <meta property="og:image" content={mediaUrl} />
          <meta name="twitter:image" content={mediaUrl} />
        </>
      )}
    </Head>
  )
}

export default MetaGenerator
