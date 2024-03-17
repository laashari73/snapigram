//! enter your site details here

let SiteDetails = {
  googleAnalytic: "G-11DL416RWD",
  title: "snapinsta.org",
  description:
    "snapinsta is an open source free to use online web tool which help users to download or save Instgram Stories, Reels, Audio with just its link.",
  website:
    process.env.NODE_ENV == "production"
      ? "https://snapinsta.org"
      : "http://localhost:3000",
  website_name: "snapinsta",
  "google-site-verification": "YOUR_GOOGLE_SITE_VERIFICATION",
  domain_extension: "org",
  email: "Hola@snapinsta.org",
  "X-RapidAPI-Key": "8d50d0a418mshd5fde661853b9f2p1d5a2ajsnda73ec3fca44",
};

export { SiteDetails };
