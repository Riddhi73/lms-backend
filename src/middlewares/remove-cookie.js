"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // 🔥 Remove any Set-Cookie header from the response
    if (ctx.response.headers) {
      delete ctx.response.headers["set-cookie"];
    }

    // Also check if it's stored in the response object
    if (ctx.response.set) {
      // Some versions store it differently
      ctx.response._headers = ctx.response._headers || {};
      delete ctx.response._headers["set-cookie"];
    }
  };
};
