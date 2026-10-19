export interface FooterNavLink {
  label: string;
  linkTo: string;
}

export const featuredLinks: FooterNavLink[] = [
  {
    label: "Featured Courses",
    linkTo: "/courses",
  },
  {
    label: "Featured Categories",
    linkTo: "/courses",
  },
  {
    label: "Business",
    linkTo: "/courses?category=Business",
  },
  {
    label: "Data Science",
    linkTo: "/courses?category=Data%Science",
  },
  {
    label: "Design",
    linkTo: "/courses?category=Graphic%Design",
  },
];

export const categoryLinks: FooterNavLink[] = [
  {
    label: "Development",
    linkTo: "/courses?category=Web%20Development",
  },
  {
    label: "Marketing",
    linkTo: "/courses?category=Marketing",
  },
  {
    label: "Photography",
    linkTo: "/courses?category=Photography",
  },
  {
    label: "Music",
    linkTo: "/courses?category=Music",
  },
  {
    label: "Cooking",
    linkTo: "/courses?category=Cooking",
  },
];

export const creatorLinks: FooterNavLink[] = [
  {
    label: "Become a Creator",
    linkTo: "#creator-cta",
  },
  {
    label: "Affiliate Program",
    linkTo: "/",
  },
  {
    label: "Contact",
    linkTo: "/contact",
  },
  {
    label: "Help",
    linkTo: "/",
  },
  {
    label: "About",
    linkTo: "/",
  },
];

export const policyAndTerms: FooterNavLink[] = [
  {
    label: "Privacy Policy",
    linkTo: "/",
  },
  {
    label: "Terms of Service",
    linkTo: "/",
  },
];
