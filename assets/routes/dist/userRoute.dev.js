"use strict";

var _require = require('../db/sequelize'),
    User = _require.User;

module.exports = function (app) {
  app.post("/api/users/register", function (req, res) {
    User.create(req.body).then(function (users) {
      var message = "Le user ".concat(req.body.name, " a bien \xE9t\xE9 cr\xE9e.");
      res.json({
        message: message,
        users: users
      });
    })["catch"](function (error) {
      var message = "l'utilisateur n'a pas \xE9t\xE9 enregoistrer";
      res.status(500).json({
        message: message,
        data: error
      });
    });
  });
  app.post("/api/users/login", function _callee(req, res) {
    var _req$body, email, password, user, currentUser;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(User.findAll({
              email: email,
              password: password
            }));

          case 4:
            user = _context.sent;

            if (!(user.length > 0)) {
              _context.next = 10;
              break;
            }

            currentUser = {
              name: user[0].name,
              email: user[0].email,
              isAdmin: user[0].isAdmin,
              id: user[0].id
            };
            res.send(currentUser);
            _context.next = 11;
            break;

          case 10:
            return _context.abrupt("return", res.status(400).json({
              message: 'User Login Failed'
            }));

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(400).json({
              message: 'Something went weong'
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 13]]);
  });
};