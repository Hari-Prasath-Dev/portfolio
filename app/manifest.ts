import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hari Prasath | Frontend Developer Portfolio",
    short_name: "Hari Prasath",
    description:
      "Portfolio of Hari Prasath - Frontend Developer specializing in React.js, Next.js, TypeScript, and modern enterprise web architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e0b",
    theme_color: "#c8cb6d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
