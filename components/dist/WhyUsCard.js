"use strict";
exports.__esModule = true;
var grommet_1 = require("grommet");
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var useStyles = core_1.makeStyles(function (theme) { return ({
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18)
    }
}); });
exports["default"] = (function (_a) {
    var icon = _a.icon, title = _a.title, body = _a.body;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.List, null,
        react_1["default"].createElement(core_1.ListItem, { alignItems: "flex-start" },
            react_1["default"].createElement(core_1.ListItemAvatar, null,
                react_1["default"].createElement(core_1.Avatar, { alt: "Remy Sharp", src: icon, className: classes.large })),
            react_1["default"].createElement(core_1.ListItemText, { primary: react_1["default"].createElement(grommet_1.Heading, { level: '4' }, title), color: 'primary', secondary: react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, body) })),
        react_1["default"].createElement(core_1.Divider, { variant: "inset", component: "li" })));
});
