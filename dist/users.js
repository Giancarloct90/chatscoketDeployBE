"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsers = exports.findUserById = exports.deleteUsers = exports.addUsers = void 0;
var users = [];

var addUsers = function addUsers(user) {
  users.push(user);
};

exports.addUsers = addUsers;

var deleteUsers = function deleteUsers(id) {
  users = users.filter(function (user) {
    return user.id !== id;
  });
};

exports.deleteUsers = deleteUsers;

var findUserById = function findUserById(id) {
  var userFound = users.filter(function (user) {
    return user.id == id;
  });
  return userFound;
};

exports.findUserById = findUserById;

var getAllUsers = function getAllUsers() {
  return users;
};

exports.getAllUsers = getAllUsers;