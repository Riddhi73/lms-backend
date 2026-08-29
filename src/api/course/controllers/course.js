/**
 * course controller
 */

"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized("You must be logged in.");
    }

    // Fetch user with user_type
    const fullUser = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: user.id },
        select: ["user_type"],
      });

    // Allow admin, content_manager, instructor
    const allowed = ["admin", "content_manager", "instructor"];
    if (!allowed.includes(fullUser?.user_type)) {
      return ctx.forbidden(
        "Only admin, content manager, or instructor can create courses.",
      );
    }

    // Set instructor field
    if (!ctx.request.body.data.instructor) {
      ctx.request.body.data.instructor = user.id;
    }

    // Call default create
    return super.create(ctx);
  },
}));
