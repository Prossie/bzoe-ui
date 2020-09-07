"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var colors_1 = require("@material-ui/core/colors");
// import { green } from '@material-ui/core/colors'
exports["default"] = core_1.createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#C2185B'
        },
        secondary: {
            main: '#1565C0'
        },
        error: {
            main: colors_1.red.A400
        },
        background: {
            "default": '#fff'
        }
    }
});
