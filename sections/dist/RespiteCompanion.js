"use strict";
exports.__esModule = true;
var grommet_1 = require("grommet");
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports["default"] = (function () {
    return (react_1["default"].createElement(core_1.Paper, { elevation: 0, style: {
            backgroundImage: "url(" + require('public/imgs/817.png?webp') + ")",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.96,
            border: 0
        } },
        react_1["default"].createElement(grommet_1.Box, { pad: 'large', height: '100%', background: { color: 'white', opacity: 0.5 } },
            react_1["default"].createElement(semantic_ui_react_1.Grid, { columns: 2, centered: true, stackable: true, verticalAlign: 'middle' },
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, null,
                    react_1["default"].createElement(grommet_1.Box, { fill: true, align: 'center', justify: 'center' },
                        react_1["default"].createElement(grommet_1.Anchor, { color: 'dark-1', href: '/', style: { textDecoration: 'none' } },
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "Respite Care")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-2', margin: { bottom: "small" }, textAlign: 'center' }, "B'Zoe's Respite Care Services enable your senior loved one to comfortably remain in their own home, while providing you with a much-needed interval of rest or relief. As the primary caregiver for your loved one, it is important to recognize that it is ok to take a break from your caregiving responsibilities."))),
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { style: { margin: '0px' } },
                    react_1["default"].createElement(grommet_1.Box, { fill: true, align: 'center', justify: 'center' },
                        react_1["default"].createElement(grommet_1.Anchor, { color: 'brand', href: '/', style: { textDecoration: 'none' } },
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "Companion Care")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-3', margin: { bottom: "small" }, textAlign: 'center' }, "Our companion care line of senior home health care services offers daily companionship and assistance with daily living activities. If your loved one is living alone and your visits are limited, social interaction becomes very important to their happiness and helps prevent feelings of isolation and depression. Whether they need a little fun or maybe just help keeping house and running errands, we have you covered with home care activities.")))))));
});
