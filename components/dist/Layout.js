"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var Header_1 = require("components/Header");
var AppContainer_1 = require("./AppContainer");
var Footer_js_1 = require("./Footer.js");
var grommet_1 = require("grommet");
var shareThis_1 = require("components/shareThis");
var lodash_throttle_1 = require("lodash.throttle");
var analytics_1 = require("analytics");
var chatbot_1 = require("components/chatbot");
var useStyles = core_1.makeStyles({
    layout: {
        height: '100%',
        backgroundColor: 'transparent'
    }
});
var Layout = function (_a) {
    var children = _a.children, showShareThis = _a.showShareThis, register = _a.register, setRegister = _a.setRegister, withFooter = _a.withFooter;
    var size = react_1["default"].useContext(grommet_1.ResponsiveContext);
    var classes = useStyles();
    var _b = react_1["default"].useState(false), showMobileMenu = _b[0], setShowMobileMenu = _b[1];
    var _c = react_1["default"].useState({ padding: '0px 0px' }), scrollStyle = _c[0], setScrollStyle = _c[1];
    var toggleShowMobileMenu = react_1["default"].useCallback(function () {
        setShowMobileMenu(!showMobileMenu);
    }, [showMobileMenu]);
    react_1["default"].useEffect(function () {
        // every time you scroll
        window.addEventListener('scroll', lodash_throttle_1["default"](function () {
            // after 300 ms
            var scrollPosition = Math.round(window.scrollY); // get scrollposition
            // If we've scrolled 100px, add "padding" class to the header
            if (scrollPosition > 100) {
                setScrollStyle({ padding: '10px 20px' });
            }
            else {
                // If not, remove "remove" class from header
                setScrollStyle({ padding: '0px 0px' });
            }
        }, 300));
    }, []);
    var logout = function () {
        window.location.replace('/');
    };
    react_1["default"].useEffect(function () {
        if (!window.GA_INITIALIZED) {
            analytics_1.initGA();
            window.GA_INITIALIZED = true;
        }
        analytics_1.logPageView();
    }, []);
    return (react_1["default"].createElement(AppContainer_1["default"], { className: classes.layout },
        react_1["default"].createElement(grommet_1.Box, { gap: size === 'small' ? 'large' : 'none' },
            showShareThis && react_1["default"].createElement(shareThis_1["default"], null),
            react_1["default"].createElement(Header_1["default"], { hideMenu: false }),
            children),
        react_1["default"].createElement(chatbot_1["default"], null),
        react_1["default"].createElement(Footer_js_1["default"], { id: "footer" })));
};
exports["default"] = Layout;
