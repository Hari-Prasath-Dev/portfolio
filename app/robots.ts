import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://hari-prasath-portfolio.vercel.app/sitemap.xml",
    host: "https://hari-prasath-portfolio.vercel.app",
  };
}
