/**
 * blog-post router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-posts",
      handler: "blog-post.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/blog-posts/:id",
      handler: "blog-post.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/blog-posts",
      handler: "blog-post.create",
      config: {
        policies: [
          {
            name: "global::is-role",
            config: { allowedRoles: ["admin", "content_manager"] },
          },
        ],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/blog-posts/:id",
      handler: "blog-post.update",
      config: {
        policies: [
          {
            name: "global::is-role",
            config: { allowedRoles: ["admin", "content_manager"] },
          },
        ],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/blog-posts/:id",
      handler: "blog-post.delete",
      config: {
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
