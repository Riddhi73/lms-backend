"use strict";

const { sanitize } = require("@strapi/utils");

module.exports = {
  async login(ctx) {
    const { identifier, password } = ctx.request.body;

    // 🔥 Authenticate user
    const user = await strapi
      .service("plugin::users-permissions.user")
      .authenticate({ identifier, password });

    // 🔥 Generate JWT
    const jwt = strapi.plugin("users-permissions").service("jwt").issue({
      id: user.id,
    });

    // 🔥 Sanitize user data
    const userSanitized = await sanitize.contentAPI.output(
      user,
      strapi.getModel("plugin::users-permissions.user"),
    );

    // 🔥 Send ONLY JWT – NO COOKIE
    ctx.send({
      jwt,
      user: userSanitized,
    });
  },
};
