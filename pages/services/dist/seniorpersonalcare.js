"use strict";
exports.__esModule = true;
var Layout_1 = require("components/Layout");
var grommet_1 = require("grommet");
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var useStyles = core_1.makeStyles(function (theme) { return ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}); });
exports["default"] = (function () {
    var size = react_1["default"].useContext(grommet_1.ResponsiveContext);
    var classes = useStyles();
    return react_1["default"].createElement(Layout_1["default"], { showShareThis: true },
        react_1["default"].createElement(grommet_1.Box, { gap: "xlarge", background: {
                //color:'brand',
                dark: true,
                position: "bottom",
                repeat: 'no-repeat',
                size: 'cover',
                image: "url(" + require('public/imgs/821.png?webp') + ")",
                opacity: 0.96
            } },
            react_1["default"].createElement(grommet_1.Box, { background: { color: 'light-3', opacity: 0.0 }, gap: 'large', margin: 'none', align: "center", direction: 'row-responsive', alignSelf: 'center' },
                react_1["default"].createElement(grommet_1.Box, { background: 'transparent', width: '50vw', alignSelf: 'center' },
                    react_1["default"].createElement(core_1.Paper, { elevation: 0, style: { background: 'transparent' } },
                        react_1["default"].createElement(grommet_1.Box, { alignSelf: 'center', align: 'center', justify: 'center' },
                            react_1["default"].createElement(core_1.Paper, { elevation: 0, style: { background: 'transparent' } },
                                react_1["default"].createElement(grommet_1.Box, { background: { color: 'transparent' } },
                                    react_1["default"].createElement(grommet_1.Box, { pad: 'medium', margin: { horizontal: 'large', vertical: 'xlarge' }, gap: 'medium' },
                                        react_1["default"].createElement(grommet_1.Box, { gap: 'small' },
                                            react_1["default"].createElement(grommet_1.Box, null,
                                                react_1["default"].createElement(grommet_1.Heading, { level: "2", color: 'brand' }, "Senior Personal Care"),
                                                react_1["default"].createElement(grommet_1.Paragraph, { color: 'black' }, "As age kicks in, our strength and ability to do the essential personal tasks fades. Unfortunately the responsibilities of our closest friends and family that would help us out at this time have also increased so much that they can no  longer attend to us as we would want them to. B'Zoe understands this and is fully committed to making sure your loved one gets that exceptional personal assistance that would still make them feel independent, comfortable and able to help themselves as much as possible in the home they truly love.")),
                                            react_1["default"].createElement(grommet_1.Box, { direction: 'row', gap: 'small', margin: { vertical: 'small' } },
                                                react_1["default"].createElement(core_1.Button, { color: 'secondary', variant: "contained", size: 'large' }, "Get In Touch"))))))))),
                react_1["default"].createElement(grommet_1.Box, { background: 'transparent', width: 'large', height: 'large' },
                    react_1["default"].createElement(grommet_1.Box, { fill: true, align: 'center', justify: 'center' },
                        react_1["default"].createElement(grommet_1.Heading, { level: '1', color: 'light-1', size: 'large', textAlign: 'center' }, "We are that extra hand your loved one needs."))))),
        react_1["default"].createElement(grommet_1.Box, { background: { color: 'light-1', opacity: 0.7 }, width: 'fill', gap: 'small', align: 'center', justify: 'center', pad: 'large' },
            react_1["default"].createElement(grommet_1.Anchor, { reverse: true, style: { textDecoration: 'none', fontStyle: "italic", fontWeight: 'bold' }, color: 'dark-1', href: 'https://www.care.com/b/l/b-zoe-home-care-giving-services/bellevue-wa-12400-se-38th-st-50462' },
                react_1["default"].createElement(grommet_1.Paragraph, { textAlign: 'center', size: 'medium' },
                    "\"It gives me great pleasure to recommend this Agency. They gave us incredible caregivers who were very professional. They would always make sure that my parents were safe, well fed and clean in a clean environment. There were no complaints whatsoever about their care from my parents and/or any of all my family members. I do not know what I would have done without them. Thank you Bzoe Care Givers. \"",
                    react_1["default"].createElement("p", { style: { fontSize: '1rem' } }, " ~ Jonah P")))),
        react_1["default"].createElement(grommet_1.Box, { pad: 'none', margin: 'none', gap: 'medium' },
            react_1["default"].createElement(SectionOne, null)),
        react_1["default"].createElement(SectionTwo, null));
});
var SectionOne = function () {
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
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "How we do it.")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-3', margin: { bottom: "small" }, size: 'xlarge', textAlign: 'center' }, "We listen to make sure that we take care of your loved one exactly how you want us to."))),
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, null,
                    react_1["default"].createElement(grommet_1.Box, { style: { paddingRight: '5rem !important' }, align: 'center' },
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "We understand the trust you're placing in us by allowing us to care for your loved one in your absence. This is why we pay attention to the detail of how you would want us to take care of your loved one and also address all the concerns you may have."),
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "We make this process easy by giving you the ability to reach us online in real time via our virtual assistant, call us or set up an appointment so we can get your exact requirements to the detail."),
                        react_1["default"].createElement(grommet_1.Paragraph, { fill: true }, "We then compare your preferences to our caregivers\u2019 qualifications, ensuring a compatible match. Our caregivers offer companionship at home, or in your loved one\u2019s senior community.")))))));
};
var SectionTwo = function () {
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
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "Senior Personal Care")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-2', margin: { bottom: "small" }, textAlign: 'center' }, "We make aging in place possible for for your loved one in the comfort of their own home. We believe that it is better to spend their old age in an environment where they have a strong feeling of attachment and great memories than in a random facility with so many doctors. That is why we commit to giving them as much personal assistance as would still make them feel independent, comfortable and able to help themselves as much as possible in the home they truly love. Our devotion is in giving you and your loved one a better peace of mind as we empower them and give them a hand in their personal day to day activities while respecting their privacy and dignity."))),
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { style: { margin: '0px' } },
                    react_1["default"].createElement(grommet_1.Box, { fill: true, align: 'center', justify: 'center' },
                        react_1["default"].createElement(grommet_1.Anchor, { color: 'brand', href: '/', style: { textDecoration: 'none' } },
                            react_1["default"].createElement(grommet_1.Heading, { level: '2' }, "Companion Care")),
                        react_1["default"].createElement(grommet_1.Paragraph, { color: 'dark-3', margin: { bottom: "small" }, textAlign: 'center' }, "Our companion care line of senior home health care services offers daily companionship and assistance with daily living activities. If your loved one is living alone and your visits are limited, social interaction becomes very important to their happiness and helps prevent feelings of isolation and depression. Whether they need a little fun or maybe just help keeping house and running errands, we have you covered with home care activities.")))))));
};
