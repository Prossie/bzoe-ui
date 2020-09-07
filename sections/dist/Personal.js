"use strict";
exports.__esModule = true;
var grommet_1 = require("grommet");
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports["default"] = (function () {
    return (react_1["default"].createElement(core_1.Paper, { elevation: 0, style: {
            backgroundImage: "url(" + require('public/imgs/819.png?webp') + ")",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.96,
            border: 0
        } },
        react_1["default"].createElement(grommet_1.Box, { pad: 'large', height: '100%', background: { color: 'white', opacity: 0.5 } },
            react_1["default"].createElement(semantic_ui_react_1.Grid, { columns: 2, centered: true, stackable: true, verticalAlign: 'middle' },
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { style: { margin: '0px' } },
                    react_1["default"].createElement(grommet_1.Box, { fill: true, align: 'center', justify: 'center' },
                        react_1["default"].createElement(grommet_1.Anchor, { color: 'brand', href: '/', style: { textDecoration: 'none' } },
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "Senior Personal Care")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-3', margin: { bottom: "small" }, size: 'xlarge', textAlign: 'center' }, "When you hire us, your search for professional dependable and kind care givers ends. We guarantee the best non medical personal assistance to our clients with uttermost dignity."))),
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, null,
                    react_1["default"].createElement(grommet_1.Box, { style: { paddingRight: '5rem !important' }, align: 'center' },
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "Our personal care line of services helps your loved ones with more intimate, non-medical care needs. Whether it is for normal aging challenges, hospital recovery or sickness, we are here to make everyday life easier and more manageable. "),
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "We understand that every person is unique and so are their non medical personal care needs. For that reason work with them and their family members to get to know each personal care client individually so we can match them with one of our licensed professionals who are best suited to meet their care needs."),
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "Our experienced caregivers are specifically trained to handle these tasks and our care managers will be closely involved to conduct periodic assessments to survey your loved one's care.")))))));
});
