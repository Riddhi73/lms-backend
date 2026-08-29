/**
 * enrollment router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/enrollments",
      handler: "enrollment.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/enrollments/:id",
      handler: "enrollment.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/enrollments",
      handler: "enrollment.create",
      config: {
        // 🔥 Only students can enroll
        policies: [
          {
            name: "global::is-role",
            config: { allowedRoles: ["student"] },
          },
        ],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/enrollments/:id",
      handler: "enrollment.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/enrollments/:id",
      handler: "enrollment.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
