"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../../controller/message/message.controller");
const router = (0, express_1.Router)();
router.get('/', message_controller_1.getMessage);
router.post('/', message_controller_1.createMessage);
exports.default = router;
//# sourceMappingURL=message.routes.js.map