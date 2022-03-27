"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

// IMPORT LIBRARIES
// CREATE SOCKET SERVER
var app = (0, _express["default"])();

var server = _http["default"].Server(app);

var io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
}); // CONFIG SERVER


exports.io = io;
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("short")); // ROUTES

server.listen(process.env.PORT || 4000, function (err) {
  return err ? console.log("Error Server") : console.log("Server ON on port 4000");
});