/**
 * progress router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/progresses",
      handler: "progress.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/progresses/:id",
      handler: "progress.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/progresses",
      handler: "progress.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/progresses/:id",
      handler: "progress.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/progresses/:id",
      handler: "progress.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
