"use strict";

var _app = require("./app");

var _users = require("./users");

_app.io.on("connection", function (client) {
  client.on("sendMessageToServer", function (message) {
    client.broadcast.emit("messageFromServerToClients", {
      message: message
    });
  });
  client.on("joined", function (data, fnCallback) {
    (0, _users.addUsers)({
      id: client.id,
      user: data.user
    });
    fnCallback((0, _users.getAllUsers)());
    client.broadcast.emit("joindAnotherUser", (0, _users.getAllUsers)());
  });
  client.on("disconnect", function (data) {
    (0, _users.deleteUsers)(client.id);
    client.broadcast.emit("userLeft", (0, _users.getAllUsers)());
  });
  client.on("oneleft", function () {
    (0, _users.deleteUsers)(client.id);
    client.broadcast.emit("userLeft", (0, _users.getAllUsers)());
  });
});