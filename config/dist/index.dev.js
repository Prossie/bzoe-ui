"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.socialLinks = exports.address = exports.title = exports.ogImage = exports.contact = exports["default"] = exports.schema = exports.logo = exports.url = exports.legalName = exports.type = void 0;

var _passwordValidator = _interopRequireDefault(require("password-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var type = 'LocalBusiness';
exports.type = type;
var legalName = 'B\'Zoe Homecare Services';
exports.legalName = legalName;
var url = process.env.FRONTEND_URL;
exports.url = url;
var logo = "".concat(url, "/imgs/xx.png");
exports.logo = logo;
var schema = new _passwordValidator["default"]();
exports.schema = schema;
schema.is().min(4) // Minimum length 8
.is().max(4).has().digits();
var _default = schema; // export const foundingDate='February 2010'

exports["default"] = _default;
var contact = {
  email: 'prossielockett@bzoehomecare.org',
  phone: '+1 (888) 545 4331'
};
exports.contact = contact;
var ogImage = "".concat(url, "/imgs/ogimage-min.png");
exports.ogImage = ogImage;
var title = 'In-home Care, Respite Care, Elderly Care & Companion Care';
exports.title = title;
var address = {
  country: 'US',
  region: 'North America',
  zipCode: '98004',
  city: 'Bothel',
  street: '12400 SE 38TH ST. # 50462',
  state: 'Washington'
};
exports.address = address;
var socialLinks = {
  facebook: 'https://www.facebook.com/homecarebellevue/',
  twitter: 'https://twitter.com/bzoehomecare',
  instagram: 'https://www.instagram.com/bzoehomcare/',
  linkedin: 'https://www.linkedin.com/company/b-zoe-homecare-giving-services',
  care: 'https://www.care.com/b/l/b-zoe-home-caregiving-services/bellevue-wa'
};
exports.socialLinks = socialLinks;
var description = "Home care services for the elderly is our priority at B'zoe. Find the best quality care. We would love to hear from you.";
exports.description = description;