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
    return super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    const fullUser = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: user.id },
        select: ["user_type"],
      });

    if (
      fullUser.user_type === "admin" ||
      fullUser.user_type === "content_manager"
    ) {
      return super.update(ctx);
    }

    // Check ownership using instructor relation
    const course = await strapi.db.query("api::course.course").findOne({
      where: { id: id },
      populate: ["instructor"],
    });

    if (!course) return ctx.notFound("Course not found");
    if (course.instructor.id !== user.id) {
      return ctx.forbidden("You can only edit your own courses.");
    }

    return super.update(ctx);
  },

  async delete(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    const fullUser = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: user.id },
        select: ["user_type"],
      });

    if (
      fullUser.user_type === "admin" ||
      fullUser.user_type === "content_manager"
    ) {
      return super.delete(ctx);
    }

    const course = await strapi.db.query("api::course.course").findOne({
      where: { id: id },
      populate: ["instructor"],
    });

    if (!course) return ctx.notFound("Course not found");
    if (course.instructor.id !== user.id) {
      return ctx.forbidden("You can only delete your own courses.");
    }

    return super.delete(ctx);
  },
}));
