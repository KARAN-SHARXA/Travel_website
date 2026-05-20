import { Helmet } from 'react-helmet-async';
import { CONTACT } from '@/lib/contact';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_SEO = {
  title:
    'Kuldeep Tour & Travel | Taxi, Car Booking & Tour Packages in Himachal & Chandigarh',

  description:
    'Kuldeep Tour & Travel provides professional taxi and car booking services across Himachal Pradesh and Chandigarh. Book cabs from Amb Andura Railway Station, Dehra, Chandigarh & Jalandhar Railway Station, Gaggal Airport to Dharamshala, Chintpurni, Jwala Ji, Baglamukhi, Kangra, Shimla, Manali, Bir Billing, Kasol and all major Himachal tourist places and temples. Affordable prices with reliable drivers.',

  keywords:
    'Kuldeep Tour & Travel, Himachal taxi service, Chandigarh taxi service, Dehra taxi booking, car booking Himachal Pradesh, Amb Andura railway station taxi, Dehra to Dharamshala cab, Chandigarh to Himachal taxi, Jalandhar railway station taxi, Gaggal airport taxi service, Dharamshala taxi, Chintpurni temple taxi, Jwala Ji car booking, Baglamukhi temple taxi, Kangra cab service, Shimla taxi booking, Manali tour package, Bir Billing taxi, Kasol cab service, Devi Darshan taxi, Himachal tour packages, local taxi, outstation cab',

  ogImage: new URL('../assets/logo.jpg', import.meta.url).href,
  ogType: 'website',
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  noIndex = false,
  structuredData,
}) => {
  const finalTitle = title
    ? `${title} | Kuldeep Tour & Travel`
    : DEFAULT_SEO.title;

  const finalDescription = description || DEFAULT_SEO.description;
  const finalKeywords = keywords
    ? `${keywords}, ${DEFAULT_SEO.keywords}`
    : DEFAULT_SEO.keywords;

  const finalOgImage = ogImage || DEFAULT_SEO.ogImage;

  const siteOrigin =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://kuldeeptourandtravel.com';

  const finalCanonicalUrl = (() => {
    if (canonicalUrl) return canonicalUrl;
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    return url.toString();
  })();

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Kuldeep Tour & Travel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kuldeep Tour & Travel" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Geo SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-HP" />
      <meta name="geo.placename" content="Himachal Pradesh & Chandigarh, India" />
      <meta name="ICBM" content="32.1024,77.5619" />

      {/* 🔥 ADVANCED STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
          name: 'Kuldeep Tour & Travel',
          url: siteOrigin,
          description: finalDescription,
          telephone: CONTACT.phoneE164,
          email: CONTACT.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dharamshala',
            addressRegion: 'Himachal Pradesh',
            addressCountry: 'IN',
          },
          areaServed: [
            'Himachal Pradesh',
            'Chandigarh',
            'Dehra',
            'Dharamshala',
            'Kangra',
            'Chintpurni',
            'Jwala Ji',
            'Baglamukhi',
            'Shimla',
            'Manali',
            'Bir Billing',
            'Kasol',
            'McLeod Ganj',
          ],
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceLocation: {
              '@type': 'Place',
              name:
                'Amb Andura Railway Station, Dehra, Chandigarh Railway Station, Jalandhar Railway Station, Gaggal Airport',
            },
          },
          makesOffer: [
            { '@type': 'Offer', name: 'Railway Station Taxi Pickup' },
            { '@type': 'Offer', name: 'Airport Taxi Service' },
            { '@type': 'Offer', name: 'Chandigarh to Himachal Taxi' },
            { '@type': 'Offer', name: 'Devi Darshan Temple Taxi' },
            { '@type': 'Offer', name: 'Himachal Tour Packages' },
          ],
          sameAs: [CONTACT.facebookUrl, CONTACT.instagramUrl],
        })}
      </script>

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
