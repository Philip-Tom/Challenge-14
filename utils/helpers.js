const moment = require("moment");

const helpers = {
  formatTimeAgo: function (date) {
    return moment(date).fromNow();
  },
  eq: function (a, b) {
    return a === b;
  },
  formatDate: function (date) {
    return moment(date).format("M/D/YYYY");
  },
};

module.exports = helpers;
