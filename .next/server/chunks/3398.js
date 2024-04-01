"use strict";
exports.id = 3398;
exports.ids = [3398];
exports.modules = {

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Star({
  likes,
  id,
  user,
  posts,
  postArray
}) {
  var star = false;

  if (likes) {
    if (likes.includes(user.email)) {
      star = true;
    }
  }

  const like = async id => {
    const res = await fetch("/api/posts/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        email: user.email
      })
    });
  };

  const handleClick = () => {
    if (!star) {
      postArray = posts;
      let post = postArray.find(post => post._id === id);

      if (post) {
        if (post.likes) {
          post.likes.push(user.email);
        } else {
          post.likes = [];
          post.likes.push(user.email);
        }

        star = true;
        like(id, user.email);
      }
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: `fa fa-star me-2 ${star ? "text-warning" : ""}`,
    style: {
      cursor: "pointer"
    },
    onClick: handleClick
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Star);

/***/ })

};
;