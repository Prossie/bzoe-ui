"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_1 = require("react");
var AnimatedMenu_1 = require("components/AnimatedMenu");
var grommet_1 = require("grommet");
var getInTouchWidget_1 = require("components/getInTouchWidget");
var useStyles = core_1.makeStyles(function (theme) { return ({
    titleStyle: {
        flex: 1,
        fontWeight: 'bold'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}); });
function Header(_a) {
    var showMuggy = _a.showMuggy, hideMenu = _a.hideMenu;
    var _b = react_1["default"].useState(true), fixed = _b[0], setFixed = _b[1];
    var _c = react_1["default"].useState(300), duration = _c[0], setDuration = _c[1];
    var size = react_1["default"].useContext(grommet_1.ResponsiveContext);
    var classes = useStyles();
    return (react_1["default"].createElement(semantic_ui_react_1.Visibility, { once: false, onBottomPassed: function () { return setFixed(true); }, onBottomPassedReverse: function () { return setFixed(false && !hideMenu); } },
        react_1["default"].createElement(core_1.AppBar, { color: fixed ? 'background' : 'transparent', elevation: 0, style: { zIndex: 1 } },
            react_1["default"].createElement(grommet_1.Box, { background: { color: '#C2185B', opacity: 0.05 }, style: { color: 'black' } },
                react_1["default"].createElement(grommet_1.Box, { direction: 'row', width: 'full', align: 'center', justify: 'around', pad: { vertical: 'medium', horizontal: 'none' }, margin: { horizontal: 'none' } },
                    react_1["default"].createElement(grommet_1.Box, { margin: 'none', direction: "row", gap: 'medium' },
                        react_1["default"].createElement(grommet_1.Box, { margin: { horizontal: 'none' }, align: 'center', justify: 'center' },
                            react_1["default"].createElement(core_1.Avatar, { alt: "Homecare services logo symbol for B'zoe", src: require('public/imgs/xx.png?webp'), className: classes.large })),
                        react_1["default"].createElement(grommet_1.Box, { align: 'center' },
                            react_1["default"].createElement(grommet_1.Text, { margin: 'none', size: 'xxlarge', color: 'brand' },
                                react_1["default"].createElement("span", { style: { fontFamily: 'Pinyon Script', fontSize: '60px' } }, "B"),
                                " 'Zoe"),
                            react_1["default"].createElement(grommet_1.Heading, { margin: 'none', level: size !== 'small' ? '3' : '4', color: 'brand' }, "Home Care"))),
                    react_1["default"].createElement(AnimatedMenu_1["default"], { duration: duration, fixed: fixed }),
                    react_1["default"].createElement(getInTouchWidget_1["default"], __assign({}, { showMuggy: showMuggy })),
                    size === 'small' &&
                        react_1["default"].createElement(semantic_ui_react_1.Button, { icon: showMobileMenu ? react_1["default"].createElement(Close, { size: 'medium', color: 'brand' }) : react_1["default"].createElement(Humbergar, { size: 'medium', color: 'brand' }), color: 'blue', onClick: toggleShowMobileMenu }))))));
}
exports["default"] = Header;
/**
 * <AppBar elevation={0}>
        <Toolbar>
        <Typography variant="h4"  className={classes.titleStyle}>
        Jitpomi
        </Typography>
        <Link href='/'>
        <IconButton color='inherit' >
        <HomeIcon/>
        </IconButton>
        </Link>
       
<CallModal/>
     
        </Toolbar>
        </AppBar>
 */ 
