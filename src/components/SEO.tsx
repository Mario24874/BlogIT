import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
}

export function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | BlogIT</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={`${title} | BlogIT`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | BlogIT`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}