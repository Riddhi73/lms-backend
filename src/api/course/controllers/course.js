"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  // 🔥 Override update to check ownership
  async update(ctx) {
    const user = ctx.state.user;

    // Admin and Content Manager can update any course
    if (user.user_type === "admin" || user.user_type === "content_manager") {
      return super.update(ctx);
    }

    // Instructor can only update their own courses
    const course = await strapi.documents("api::course.course").findOne({
      documentId: ctx.params.id,
      populate: ["instructor"],
    });

    if (!course) {
      return ctx.notFound("Course not found");
    }

    if (course.instructor?.id !== user.id) {
      return ctx.forbidden("You can only edit your own courses.");
    }

    return super.update(ctx);
  },

  // 🔥 Override delete to check ownership
  async delete(ctx) {
    const user = ctx.state.user;

    // Admin and Content Manager can delete any course
    if (user.user_type === "admin" || user.user_type === "content_manager") {
      return super.delete(ctx);
    }

    // Instructor can only delete their own courses
    const course = await strapi.documents("api::course.course").findOne({
      documentId: ctx.params.id,
      populate: ["instructor"],
    });

    if (!course) {
      return ctx.notFound("Course not found");
    }

    if (course.instructor?.id !== user.id) {
      return ctx.forbidden("You can only delete your own courses.");
    }

    return super.delete(ctx);
  },
}));
