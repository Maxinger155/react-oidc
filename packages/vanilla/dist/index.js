"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _oidcClient = require("oidc-client");

/* eslint-disable */
var _userManager = null;
var state = {
  oidcUser: null
};
var _document = null;

var onUserLoaded = function onUserLoaded(user) {
  state = {
    oidcUser: user
  };
};

var onUserUnloaded = function onUserUnloaded() {
  state = {
    oidcUser: null
  };
};

var onAccessTokenExpired = function onAccessTokenExpired() {
  state = {
    oidcUser: null
  };
  return _userManager.signinSilent();
};

var onError = function onError(error) {
  state = {
    error: error
  };
};

var init = function init(config) {
  var document = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  _userManager = new _oidcClient.UserManager(config);
  var _userManager2 = _userManager,
      events = _userManager2.events;
  events.addUserLoaded(onUserLoaded);
  events.addSilentRenewError(onError);
  events.addUserUnloaded(onUserUnloaded);
  events.addUserSignedOut(onUserUnloaded);
  events.addAccessTokenExpired(onAccessTokenExpired);
  _document = document;

  if (_document.location.toString().includes(config.redirect_uri)) {
    return _userManager.signinRedirectCallback().then(function (user) {
      if (user.state.url) {
        _document.location = user.state.url;
      }
    }).then(function () {
      return {
        type: "callback"
      };
    });
  }

  if (_document.location.toString().includes(config.silent_redirect_uri)) {
    return _userManager.signinSilentCallback().then(function () {
      return {
        type: "callback"
      };
    });
  }

  return _userManager.getUser().then(function (user) {
    state.oidcUser = user;
    return {
      type: "user",
      user: user
    };
  });
};

var logout = function logout() {
  state = {
    oidcUser: null
  };
  var _userManager3 = _userManager,
      events = _userManager3.events;
  events.removeUserLoaded(onUserLoaded);
  events.removeSilentRenewError(onError);
  events.removeUserUnloaded(onUserUnloaded);
  events.removeUserSignedOut(onUserUnloaded);
  events.removeAccessTokenExpired(onAccessTokenExpired);
};

function signinSilent() {
  state = {
    oidcUser: null
  };
  return _userManager.signinSilent();
}

function signinRedirect(url) {
  if (!url) {
    url = _document.location.toString();
  }

  return _userManager.signinRedirect({
    state: {
      url: url
    }
  });
}

var _default = {
  state: state,
  signinRedirect: signinRedirect,
  signinSilent: signinSilent,
  logout: logout,
  init: init,
  getUserSync: function getUserSync() {
    return state.oidcUser;
  }
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map