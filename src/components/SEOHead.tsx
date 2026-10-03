import { useEffect } from 'react';

const SITE_NAME = 'Jhoeven Kent Escobal';
const SITE_URL = 'https://jhoevenkentescobal.com';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>[];
}

const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Lightweight client-side document head manager for the single-page app.
 * Mirrors the reference project's SEOHead contract without a server dependency.
 */
export const SEOHead = ({ title, description, canonicalPath = '/', jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', `${SITE_URL}${canonicalPath}`);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    const scriptId = 'page-json-ld';
    document.getElementById(scriptId)?.remove();
    if (jsonLd && jsonLd.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.textContent = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};