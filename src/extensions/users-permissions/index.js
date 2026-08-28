"use strict";

module.exports = {
  register({ strapi }) {
    // Override the login controller
    const authController = require("./controllers/auth");
    strapi.container
      .get("controllers")
      .set("plugin::users-permissions.auth", authController);
  },
};
