import type { Core } from "@strapi/strapi";

const config: Core.Config.Middlewares = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https:"],
          "media-src": ["'self'", "data:", "blob:", "https:"],
        },
      },
      // 🔥 Important: Allow secure cookies in production
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://lms-frontend-one-delta.vercel.app",
        "https://lms-backend-production-385b.up.railway.app",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true, // 🔥 Important: Allow credentials (cookies)
    },
  },
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

export default config;
