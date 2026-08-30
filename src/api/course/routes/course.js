/**
 * course router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses",
      handler: "course.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/courses/:id",
      handler: "course.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/courses",
      handler: "course.create",
      config: {
        // 🔥 Only Admin, Content Manager, and Instructor can create
        policies: [
          {
            name: "global::is-role",
            config: {
              allowedRoles: ["admin", "content_manager", "instructor"],
            },
          },
        ],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/courses/:id",
      handler: "course.update",
      config: {
        // 🔥 Only Admin, Content Manager, and Instructor can update
        policies: [
          {
            name: "global::is-role",
            config: {
              allowedRoles: ["admin", "content_manager", "instructor"],
            },
          },
        ],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/courses/:id",
      handler: "course.delete",
      config: {
        // 🔥 Only Admin and Content Manager can delete
        policies: [
          {
            name: "global::is-role",
            config: { allowedRoles: ["admin", "content_manager"] },
          },
        ],
        middlewares: [],
      },
    },
  ],
};
