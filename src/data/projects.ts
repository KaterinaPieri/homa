import type { StaticImageData } from 'next/image';
import ApbThumbnail from '@/assets/apb/apb-unfiltered.png';
import ApbTop from '@/assets/apb/apb-top-hero.png';
import VillaBajThumbnail from '@/assets/villa-baj/villa-baj-unfiltered.png';
import VillaBajTop from '@/assets/villa-baj/villa-baj-top-hero.png';
import VillaKazaThumbnail from '@/assets/villa-kaza/villa-kaza-unfiltered.png';
import HomaHouseThumbnail from '@/assets/homa-house/homa-unfiltered.png';
import HomaHouseFeatured from '@/assets/homa-house/homa-featured-image.png';
import HomaHouseTop from '@/assets/homa-house/homa-top-hero-image.png';
import HomaHouseImage1 from '@/assets/homa-house/homa-image-1.png';
import HomaHouseImage2 from '@/assets/homa-house/homa-image-2.png';
import HomaHouseImage2Full from '@/assets/homa-house/homa-image-2-full.png';
import HomaHouseImage3 from '@/assets/homa-house/homa-image-3.png';
import HomaHouseImage4 from '@/assets/homa-house/homa-image-4.png';
import HomaHouseImage4Full from '@/assets/homa-house/homa-image-4-full.png';
import HomaHouseImage4a from '@/assets/homa-house/homa-image-4a.png';
import HomaHouseImage5 from '@/assets/homa-house/homa-image-5.png';
import HomaHouseImage5Full from '@/assets/homa-house/homa-image-5-full.png';
import HomaHouseImage6 from '@/assets/homa-house/homa-image-6.png';
import HomaHouseImage6Full from '@/assets/homa-house/homa-image-6-full.png';
import HomaHouseImage7 from '@/assets/homa-house/homa-image-7.png';
import HomaHouseImage7Full from '@/assets/homa-house/homa-image-7-full.png';
import HomaHouseImage8 from '@/assets/homa-house/homa-image-8.png';
import HomaHouseImage9 from '@/assets/homa-house/homa-image-9.png';
import HomaHouseImage10 from '@/assets/homa-house/homa-image-10.png';
import HomaHouseImage11 from '@/assets/homa-house/homa-image-11.png';
import HomaHouseImage12 from '@/assets/homa-house/homa-image-12.png';
import HomaHouseImage13 from '@/assets/homa-house/homa-image-13.png';
import HomaHouseImage14 from '@/assets/homa-house/homa-image-14.png';
import HomaHouseImage15 from '@/assets/homa-house/homa-image-15.png';
import HomaHouseImage16 from '@/assets/homa-house/homa-image-16.png';
import HomaHouseImage17 from '@/assets/homa-house/homa-image-17.png';
import HomaHouseImage18 from '@/assets/homa-house/homa-image-18.png';
import HomaHouseImage18Full from '@/assets/homa-house/homa-image-18-full.png';
import HomaHouseImage19 from '@/assets/homa-house/homa-image-19.png';
import HomaHouseImage19Full from '@/assets/homa-house/homa-image-19-full.png';

import VillaKazaTop from '@/assets/villa-kaza/villa-kaza-top-image-section.png';
import VillaKazaImage1 from '@/assets/villa-kaza/villa-kaza-image-1.png';
import VillaKazaImage2 from '@/assets/villa-kaza/villa-kaza-image-2.png';
import VillaKazaImage3 from '@/assets/villa-kaza/villa-kaza-image-3.png';
import VillaKazaImage4 from '@/assets/villa-kaza/villa-kaza-image-4.png';
import VillaKazaImage7 from '@/assets/villa-kaza/villa-kaza-image-7.png';
import VillaKazaImage8 from '@/assets/villa-kaza/villa-kaza-image-8.png';
import VillaKazaImage5 from '@/assets/villa-kaza/villa-kaza-image-5.png';
import VillaKazaImage9 from '@/assets/villa-kaza/villa-kaza-image-9.png';
import VillaKazaImage10 from '@/assets/villa-kaza/villa-kaza-image-10.png';
import VillaKazaImage11 from '@/assets/villa-kaza/villa-kaza-image-11.png';
import VillaKazaImage12 from '@/assets/villa-kaza/villa-kaza-image-12.png';
import VillaKazaImage13 from '@/assets/villa-kaza/villa-kaza-image-13.png';
import VillaKazaLights from '@/assets/villa-kaza/villa-kaza-lights.gif';
import VillaKazaImage2Full from '@/assets/villa-kaza/villa-kaza-image-2-full.png';
import VillaKazaImage3Full from '@/assets/villa-kaza/villa-kaza-image-3-full.png';
import VillaKazaImage4Full from '@/assets/villa-kaza/villa-kaza-image-4-full.png';
import VillaKazaImage7Full from '@/assets/villa-kaza/villa-kaza-image-7-full.png';
import VillaKazaImage8Full from '@/assets/villa-kaza/villa-kaza-image-8-full.png';
import VillaKazaImage5Full from '@/assets/villa-kaza/villa-kaza-image-5-full.png';
import VillaKazaImage9Full from '@/assets/villa-kaza/villa-kaza-image-9-full.png';
import VillaKazaImage10Full from '@/assets/villa-kaza/villa-kaza-image-10-full.png';
import VillaKazaImage11Full from '@/assets/villa-kaza/villa-kaza-image-11-full.png';
import VillaKazaImage12Full from '@/assets/villa-kaza/villa-kaza-image-12-full.png';
import VillaKazaImage13Full from '@/assets/villa-kaza/villa-kaza-image-13-full.png';

export enum project {
  VillaKaza = 'villa kaza',
  HomaHouse = 'homa house',
  Apb = 'apb',
  VillaBaj = 'villa baj'
};

export enum projectCode {
  VillaKaza = '001',
  HomaHouse = '002',
  Apb = '003',
  VillaBaj = '004'
};

export const getProjectSlug = (projectName: project) =>
  projectName.toLowerCase().replaceAll(' ', '-');

export const getProjectUrl = (projectName: project) =>
  `/project/${getProjectSlug(projectName)}`;

export const getImage = (src: string, alt: string, full?: string): ProjectImage => ({ src, alt, full });

export const PROJECTS = [
  { code: projectCode.VillaKaza, name: project.VillaKaza, location: 'larnaca', year: 2023, image: VillaKazaThumbnail, href: getProjectUrl(project.VillaKaza) },
  { code: projectCode.HomaHouse, name: project.HomaHouse, location: 'larnaca', year: 2024, image: HomaHouseThumbnail, href: getProjectUrl(project.HomaHouse) },
  { code: projectCode.Apb,       name: project.Apb,       location: 'nicosia', year: 2023, image: ApbThumbnail,       href: getProjectUrl(project.Apb) },
  { code: projectCode.VillaBaj,  name: project.VillaBaj,  location: 'larnaca', year: 2024, image: VillaBajThumbnail,  href: getProjectUrl(project.VillaBaj) },
];

export const TOTAL_PROJECTS = PROJECTS.length;

export type FeaturedProject = {
  name: project;
  image: StaticImageData;
  href: string;
  mobileImagePosition?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  { name: project.HomaHouse, image: HomaHouseFeatured, href: getProjectUrl(project.HomaHouse), mobileImagePosition: '26%' },
  { name: project.VillaKaza, image: VillaKazaThumbnail, href: getProjectUrl(project.VillaKaza) },
  { name: project.Apb,       image: ApbThumbnail,       href: getProjectUrl(project.Apb) },
  { name: project.VillaBaj,  image: VillaBajThumbnail,  href: getProjectUrl(project.VillaBaj) },
];

/* ────────────────────────────────────────────────────────────────────────────
 * Project page schema
 *
 * Each project page is a `sections` array. A future CMS would surface each
 * `type` as a block in the editor; the order of the array drives the page.
 * Section types are a discriminated union so adding a new one is local: add
 * a variant here, add a renderer in `ProjectSections.tsx`, done.
 * ────────────────────────────────────────────────────────────────────────── */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  full?: string;
};

export type ProjectMeta = {
  location: string;
  typology: string;
  client: string;
  budget: string;
  builtArea: string;
  year: string;
};

export type SplitContent =
  | { kind: 'image'; image: ProjectImage }
  | { kind: 'text'; heading?: string; paragraphs: string[] }
  | { kind: 'imageWithText'; image: ProjectImage; paragraphs: string[]; imagePosition?: 'top' | 'bottom' }
  | { kind: 'imageStack'; mainImage: ProjectImage; subImages: ProjectImage[] }
  | { kind: 'imagePair';  images: [ProjectImage, ProjectImage] }
  | { kind: 'imagePairWithText'; images: [ProjectImage, ProjectImage]; paragraphs: string[]; imagePosition?: 'top' | 'bottom' }

export type ProjectSection =
  | { type: 'hero';          image: ProjectImage }
  | { type: 'header';        name: project; location: string }
  | { type: 'fullImage';     image: ProjectImage }
  | { type: 'centeredImage'; image: ProjectImage; maxWidth?: number }
  | { type: 'imagePair';     images: [ProjectImage, ProjectImage] }
  | { type: 'split';         left: SplitContent; right: SplitContent; align?: 'top' | 'bottom' | 'center' };

export type ProjectPageData = {
  code: projectCode;
  name: project;
  description?: string;
  meta: ProjectMeta;
  sections: ProjectSection[];
};

const villaKaza: ProjectPageData = {
  code: projectCode.VillaKaza,
  name: project.VillaKaza,
  description: 'A modern family nest in Larnaca, shaped around the rhythms of shared life.',
  meta: {
    location: 'larnaca, cyprus',
    typology: 'family house',
    client: 'private',
    budget: '€650.000',
    builtArea: '450 m²',
    year: '2023',
  },
  sections: [
    { type: 'hero', image: getImage(VillaKazaTop.src, 'Villa Kaza exterior at dusk') },
    { type: 'header', name: project.VillaKaza, location: 'larnaca, cyprus' },
    { type: 'fullImage', image: getImage(VillaKazaImage1.src, 'Villa Kaza facade and reflecting pool') },
    {
      type: 'split',
      align: 'top',
      left: { kind: 'image', image: getImage(VillaKazaImage2.src, 'Concrete and timber facade detail', VillaKazaImage2Full.src) },
      right: {
        kind: 'imageWithText',
        image: getImage(VillaKazaImage3.src, 'Living room interior at dusk', VillaKazaImage3Full.src),
        paragraphs: [
          'Rooted in the essence of family living, this villa is conceived as a modern nest — a place of protection, belonging, and shared life. A home conceived not simply as a structure, but as a place of belonging, protection, and shared life. Though the scale of the villa reaches toward the generous, its spirit remains intimate, carefully shaped around the rhythms of family living and the moments that bind generations together. This is a house that gathers its inhabitants, holding them within a warm and sheltered embrace.',
          'A sequence of volumes unfolds across the site, defined by a protective boundary wall that shields the home from the movement of the main road while establishing a sense of arrival. This outer layer acts as a gentle filter, allowing natural light to pass through in softened elements, creating moments of shadow and illumination that shift throughout the day. Beyond this threshold, the landscape becomes part of the experience of the architecture — water features reflecting the sky, green spaces breathing life into the composition, and carefully framed views that draw nature into everyday experience.',
        ],
      },
    },
    {
      type: 'split',
      align: 'top',
      left: {
        kind: 'imageWithText',
        imagePosition: 'bottom',
        image: getImage(VillaKazaImage4.src, 'Living and dining interior', VillaKazaImage4Full.src),
        paragraphs: [
          'At the heart of the home, communal life finds its center in a sunken living room — a space both grounded and embracing, where family members gather in comfort and conversation. Above, double height common areas open vertically, forging a visual and emotional connection between the ground floor and the first-floor domains. Light descends through these volumes, cascading gently across surfaces and reinforcing the continuity between levels, between individuals, and between shared experiences.',
        ],
      },
      right: {
        kind: 'image',
        image: getImage(VillaKazaImage5.src, 'Sunken living room with double-height ceiling', VillaKazaImage5Full.src),
      },
    },
    { type: 'fullImage', image: getImage(VillaKazaLights.src, 'Interior corridor at night with lights turning on') },
    // { type: 'centeredImage', image: getImage(VillaKazaImage7.src, 'Cross-section drawing', VillaKazaImage7Full.src), maxWidth: 800 },
    { 
      type: 'split',
      align: 'top',
      left: {
        kind: 'image',
        image: getImage(VillaKazaImage7.src, 'Cross-section drawing', VillaKazaImage7Full.src)
      },
      right: {
        kind: 'text',
        paragraphs: []
      }
    },
    {
      type: 'split',
      align: 'top',
      left: {
        kind: 'text',
        paragraphs: [
          'The spatial journey moves fluidly between indoors and outdoors, dissolving boundaries to create environments suited for celebration, rest, and togetherness. Landscape becomes part of the daily narrative — a feature that softens the architecture and enriches the routines of family life.',
          'It is a home defined by connection — between people, between spaces, and between architecture and nature. A contemporary family villa that balances scale with intimacy, openness with privacy, and structure with warmth. Above all, it is a place designed to nurture the life within it: a modern nest, protective yet generous, where memories can root and grow.',
        ],
      },
      right: {
        kind: 'imageStack',
        mainImage: getImage(VillaKazaImage8.src, 'Open dining and kitchen', VillaKazaImage8Full.src),
        subImages: [
          getImage(VillaKazaImage9.src, 'Dining detail', VillaKazaImage9Full.src),
          getImage(VillaKazaImage10.src, 'Bar counter detail', VillaKazaImage10Full.src),
        ],
      },
    },
    // { type: 'centeredImage', image: getImage(VillaKazaImage11.src, 'Floor plan', VillaKazaImage11Full.src), maxWidth: 800 },
    { 
      type: 'split',
      align: 'top',
      left: {
        kind: 'image',
        image: getImage(VillaKazaImage11.src, 'Floor plan', VillaKazaImage11Full.src)
      },
      right: {
        kind: 'text',
        paragraphs: []
      }
    },
    {
      type: 'imagePair',
      images: [
        getImage(VillaKazaImage12.src, 'Master bedroom', VillaKazaImage12Full.src),
        getImage(VillaKazaImage13.src, 'Master bedroom with wardrobe area at twilight', VillaKazaImage13Full.src),
      ],
    },
  ],
};

const homaHouse: ProjectPageData = {
  code: projectCode.HomaHouse,
  name: project.HomaHouse,
  meta: {
    location: 'larnaca, cyprus',
    typology: 'architects house',
    client: 'private',
    budget: '€400.000',
    builtArea: '200 m²',
    year: '2024',
  },
  sections: [
    { type: 'hero', image: getImage(HomaHouseTop.src, 'Homa House terracotta facade running along the road under a desert sky') },
    { type: 'header', name: project.HomaHouse, location: 'larnaca, cyprus' },
    { type: 'fullImage', image: getImage(HomaHouseFeatured.src, 'Stepped terracotta volumes of the Homa House front elevation with native shrubs') },
    {
      type: 'split',
      align: 'top',
      left: { kind: 'image', image: getImage(HomaHouseImage1.src, 'Earth-toned courtyard corner with terracotta-tile floor and a single potted plant') },
      right: {
        kind: 'imageWithText',
        image: getImage(HomaHouseImage2.src, 'Inner courtyard with a reflecting pool flanked by terracotta walls and ornamental grasses', HomaHouseImage2Full.src),
        paragraphs: [
          'It all begins with the earth. A project emerges, rooted deeply in the land it inhabits — not merely as a nod to ancestry or locality but as an invitation to reimagine what living can be. This is a home fully protected, quietly experimental, unfolding through a series of nuanced and intriguing moments.'
        ],
      },
    },
    { type: 'fullImage', image: getImage(HomaHouseImage3.src, 'Axonometric site diagram showing Homa House footprint within its oval site boundary') },
    {
      type: 'split',
      align: 'top',
      left: {
        kind: 'imageWithText',
        imagePosition: 'bottom',
        image: getImage(HomaHouseImage4.src, 'Outdoor terrace with terracotta-tile floor, planted edges and a tall earthen boundary wall', HomaHouseImage4Full.src),
        paragraphs: [
          'Three monolithic volumes rise from the soil, their tones drawn directly from the earth from which they spring. Two carefully carved gestures in these masses offer a passage, an entrance both welcoming and mysterious, leading into the heart of the house — a courtyard that subtly recalls the traditional gathering spaces of family life.',
          'Beyond this threshold, the robust walls sculpt a delicate interplay of light and shadow, weaving natural hues with fleeting glimpses of sky to guide the traveler inward.'
        ],
      },
      right: {
        kind: 'image',
        image: getImage(HomaHouseImage4a.src, 'Threshold view through a tall doorway into the warm terracotta corridor beyond'),
      },
    },
    {
      type: 'split',
      align: 'center',
      left: {
        kind: 'imageStack',
        mainImage: getImage(HomaHouseImage5.src, 'Close-up of a beam meeting the terracotta wall with light grazing the textured surface', HomaHouseImage5Full.src),
        subImages: [
          getImage(HomaHouseImage6.src, 'Open-air light well between terracotta volumes with a flowering shrub and gravel bed', HomaHouseImage6Full.src),
          getImage(HomaHouseImage7.src, 'Living interior with bronze cabinetry, a built-in stone bench and a blue sofa', HomaHouseImage7Full.src),
        ],
      },
      right: {
        kind: 'text',
        paragraphs: [
          'The seemingly severe exterior of these monoliths yields to interiors marked by warmth and distinct character, where landscape and architecture merge effortlessly. The spatial journey unfolds gradually, a gradient that moves from private sanctuaries to semi-private domains and ultimately to communal spaces.',
          'A long corridor extends through the volumes, culminating in a veranda that binds the whole — creating spaces imbued with understated charm and richness.',
        ],
      },
    },
    { type: 'fullImage', image: getImage(HomaHouseImage8.src, 'View from the tiled veranda into the living room through a wide framed opening') },
    {
      type: 'imagePair',
      images: [
        getImage(HomaHouseImage9.src, 'Bedroom looking past a chair toward a doorway opening onto a sunlit terracotta wall'),
        getImage(HomaHouseImage10.src, 'Glimpse from the bed through a doorway into an adjoining room with built-in shelving'),
      ],
    },
    { type: 'centeredImage', image: getImage(HomaHouseImage11.src, 'Cross-section drawing of Homa House showing the pool and adjoining volumes'), maxWidth: 1200 },
    {
      type: 'imagePair',
      images: [
        getImage(HomaHouseImage12.src, 'Tall narrow window framing the horizon above a wooden window seat'),
        getImage(HomaHouseImage13.src, 'Looking up the terracotta walls of an open-sky courtyard with a single wall sconce'),
      ],
    },
    { type: 'centeredImage', image: getImage(HomaHouseImage14.src, 'Roof and site plan of Homa House drawn in white on black'), maxWidth: 1200 },
    {
      type: 'imagePair',
      images: [
        getImage(HomaHouseImage15.src, 'Dark wood kitchen cabinetry with a built-in oven beside a curtained window'),
        getImage(HomaHouseImage16.src, 'Galley kitchen with dark cabinetry and a sink, sunlight falling across the floor'),
      ],
    },
    {
      type: 'split',
      align: 'top',
      right: {
        kind: 'imagePairWithText',
        imagePosition: 'top',
        images: [
          getImage(HomaHouseImage18.src, "Kitchen interior with a sink counter at left and a dark door at the corridor's end", HomaHouseImage18Full.src),
          getImage(HomaHouseImage19.src, 'Bathroom with a long trough sink and a tall window above a built-in window seat', HomaHouseImage19Full.src),
        ],
        paragraphs: [
          'It is a contemporary reinterpretation of tradition, a carefully considered architectural composition that offers a refined environment for its hosts — protective, inviting, and suffused with a quiet sense of purpose.'
        ],
      },
      left: {
        kind: 'image',
        image: getImage(HomaHouseImage17.src, 'View from the bedroom through a doorway to a single tree in the terracotta courtyard'),
      },
    },
  ],
};

const apb: ProjectPageData = {
  code: projectCode.Apb,
  name: project.Apb,
  meta: {
    location: 'nicosia, cyprus',
    typology: 'hospitality',
    client: 'private',
    budget: '€150.000',
    builtArea: '150 m²',
    year: '2023',
  },
  sections: [
    { type: 'hero', image: getImage(ApbTop.src, 'APB') },
  ],
};

const villaBaj: ProjectPageData = {
  code: projectCode.VillaBaj,
  name: project.VillaBaj,
  meta: {
    location: 'larnaca, cyprus',
    typology: 'private villa',
    client: 'private',
    budget: '€1,200.000',
    builtArea: '600 m²',
    year: '2024',
  },
  sections: [
    { type: 'hero', image: getImage(VillaBajTop.src, 'Villa Baj') },
  ],
};

export const PROJECT_PAGES: Record<string, ProjectPageData> = {
  [getProjectSlug(project.VillaKaza)]: villaKaza,
  [getProjectSlug(project.HomaHouse)]: homaHouse,
  [getProjectSlug(project.Apb)]: apb,
  [getProjectSlug(project.VillaBaj)]: villaBaj,
};
