/**
 * lesson router
 */
"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/lessons",
      handler: "lesson.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/lessons/:id",
      handler: "lesson.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/lessons",
      handler: "lesson.create",
      config: {
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
      path: "/lessons/:id",
      handler: "lesson.update",
      config: {
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
      path: "/lessons/:id",
      handler: "lesson.delete",
      config: {
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
  ],
};
