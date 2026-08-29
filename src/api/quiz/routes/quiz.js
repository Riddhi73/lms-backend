/**
 * quiz router
 */

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quizzes",
      handler: "quiz.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/quizzes/:id",
      handler: "quiz.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/quizzes",
      handler: "quiz.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/quizzes/:id",
      handler: "quiz.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/quizzes/:id",
      handler: "quiz.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
