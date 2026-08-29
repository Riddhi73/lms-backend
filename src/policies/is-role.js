"use strict";

/**
 * Policy to check if user has the required role(s)
 * Usage: { name: 'global::is-role', config: { allowedRoles: ['admin', 'content_manager'] } }
 */
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const user = ctx.state.user;

    // Check if user is authenticated
    if (!user) {
      return ctx.unauthorized("You must be logged in to perform this action.");
    }

    // Check if user has one of the allowed roles
    if (!config.allowedRoles.includes(user.user_type)) {
      return ctx.forbidden(
        `Access denied. Only ${config.allowedRoles.join(", ")} can perform this action.`,
      );
    }

    ctx.state.user = { ...ctx.state.user, user_type: user.user_type };

    await next();
  };
};
