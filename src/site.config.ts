export const SITE = {
  name: "Top League Tech",
  tagline: "Best SEO Content Writing Services",
  description: "SEO-friendly content writing, article writing, and content marketing services.",
  url: "https://topleaguetech.com",
  web3formsKey: "", // paste your Web3Forms access key here
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export const NAV_LINKS = [
  { label: "About", href: "/about/" },
  {
    label: "Services", href: "/services/",
    children: [
      { label: "Article Writing", href: "/services/seo-article-writing/" },
      { label: "Description Writing", href: "/services/product-description-writing/" },
      { label: "Article Rewriting", href: "/services/seo-article-rewriting/" },
      { label: "SEO Services", href: "/services/seo-services/" },
    ],
  },
  {
    label: "Blog", href: "/blog/",
    children: [
      { label: "Content Marketing", href: "/category/content-marketing/" },
      { label: "SEO", href: "/category/seo/" },
      { label: "Blogging", href: "/category/blogging/" },
      { label: "WordPress", href: "/category/wordpress/" },
      { label: "Social Media", href: "/category/social-media/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Website Content", href: "/services/" },
    { label: "SEO Articles", href: "/services/seo-article-writing/" },
    { label: "Product Descriptions", href: "/services/product-description-writing/" },
    { label: "SEO Audit", href: "/services/seo-services/" },
  ],
  blogCategories: [
    { label: "SEO Tips", href: "/category/seo/" },
    { label: "Content Writing Tips", href: "/category/content-marketing/" },
    { label: "WordPress Tips", href: "/category/wordpress/" },
    { label: "Blogging Tips", href: "/category/blogging/" },
  ],
};
