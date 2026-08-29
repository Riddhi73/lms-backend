module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      refreshToken: {
        enabled: false,
      },
      cookie: {
        secure: false,
        httpOnly: false,
      },
      register: {
        allowedFields: ["user_type"],
      },
    },
  },
});
