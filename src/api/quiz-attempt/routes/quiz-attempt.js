/**
 * quiz-attempt router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quiz-attempts",
      handler: "quiz-attempt.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/quiz-attempts/:id",
      handler: "quiz-attempt.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/quiz-attempts",
      handler: "quiz-attempt.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/quiz-attempts/:id",
      handler: "quiz-attempt.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/quiz-attempts/:id",
      handler: "quiz-attempt.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
