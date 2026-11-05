import type { SiteWorkItem } from '../components/FunnelBarrel';

const grahamMoreheadImg = new URL('../img/Site Works/Grahammorehead.jfif', import.meta.url).href;
const heatherStratfordImg = new URL('../img/Site Works/HeatherStratford.jfif', import.meta.url).href;
const hirenovaImg = new URL('../img/Site Works/Hirenova.jfif', import.meta.url).href;
const kuyaPasbuyImg = new URL('../img/Site Works/KuyaPasbuy.jfif', import.meta.url).href;
const pysciCareImg = new URL('../img/Site Works/PysciCare.jfif', import.meta.url).href;
const secretbeachImg = new URL('../img/Site Works/secretbeach.jfif', import.meta.url).href;
const travelTewnewsImg = new URL('../img/Site Works/TravelTewnews.jfif', import.meta.url).href;
const vainImg = new URL('../img/Site Works/Vain.jfif', import.meta.url).href;
const vanillyImg = new URL('../img/Site Works/Vanilly.jfif', import.meta.url).href;

export const siteWorksGallery: SiteWorkItem[] = [
  {
    id: 'grahammorehead',
    title: 'Graham Morehead',
    category: 'Consulting & AI Portfolio',
    description: 'Personal brand funnel and thought leadership platform for AI researcher & author.',
    image: grahamMoreheadImg,
    url: 'https://grahammorehead.com/',
  },
  {
    id: 'heatherstratford',
    title: 'Heather Stratford',
    category: 'Cybersecurity & Keynote',
    description: 'Executive speaking booking funnel and keynote leadership platform.',
    image: heatherStratfordImg,
    url: 'https://heatherstratford.com/',
  },
  {
    id: 'hirenova',
    title: 'Siargao HireHub / HireNova',
    category: 'Recruitment & Job Platform',
    description: 'Employment technology platform connecting talent and island businesses with applicant tracking.',
    image: hirenovaImg,
    url: 'https://hirenova-cec8.onrender.com/',
  },
  {
    id: 'kuyapasbuy',
    title: 'Kuya Pasabuy Delivery',
    category: 'Commerce & Logistics',
    description: 'Island delivery platform with dynamic customer ordering and rider fulfillment routing.',
    image: kuyaPasbuyImg,
    url: 'https://www.kuyapasabuysiargao.com/',
  },
  {
    id: 'pyscicare',
    title: 'Physio-Care',
    category: 'Healthcare & Clinic Platform',
    description: 'Physical therapy clinic platform with patient appointment intake and treatment services.',
    image: pysciCareImg,
    url: 'https://physio-care-one.vercel.app/',
  },
  {
    id: 'secretbeach',
    title: 'Secret Beach Siargao',
    category: 'Hospitality & Luxury Resort',
    description: 'Direct guest booking funnel and luxury island resort accommodation showcase.',
    image: secretbeachImg,
    url: 'https://secretbeachsiargao.com/',
  },
  {
    id: 'traveltewnews',
    title: 'TravelTewNews',
    category: 'Media & News Aggregator',
    description: 'Multi-channel travel news indexing engine and cloud-distributed publication.',
    image: travelTewnewsImg,
    url: 'https://traveltewnews.com/',
  },
  {
    id: 'vain',
    title: 'Vain',
    category: 'Fashion & E-Commerce',
    description: 'Lifestyle apparel brand store with streamlined cart checkout and responsive gallery.',
    image: vainImg,
    url: 'https://vain.com/',
  },
  {
    id: 'vanilly',
    title: 'Vanilly Australia',
    category: 'E-Commerce · Australia',
    description: 'Direct-to-consumer Australian vanilla products e-commerce store with Stripe checkout.',
    image: vanillyImg,
    url: 'https://www.vanilly.com.au/',
  },
];
