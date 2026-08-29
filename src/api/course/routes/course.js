/**
 * course router
 */

"use strict";

export default {
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
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/courses/:id",
      handler: "course.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/courses/:id",
      handler: "course.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
