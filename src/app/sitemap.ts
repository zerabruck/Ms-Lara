import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://65.21.105.199:3000/individuals",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/individuals",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/providers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/providers",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/business",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/business",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/refferal",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/refferal",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/veteran",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/veteran",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/help",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/help",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/book",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/book",
        },
      },
    },
    {
      url: "http://65.21.105.199:3000/auth",

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: "http://65.21.105.199:3000/fr/auth",
        },
      },
    },
  ];
}
