"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code404 = exports.code403 = exports.code401 = exports.code400 = exports.code500 = exports.code201 = exports.token200 = exports.code200 = exports.code204 = void 0;
const code204 = (req, res) => {
    res.status(204).json({ message: 'no content' });
};
exports.code204 = code204;
const code200 = (req, res, content) => {
    res.status(200).json({ message: 'ok', content });
};
exports.code200 = code200;
const token200 = (req, res, token) => {
    res.status(200).json({ message: 'ok', token });
};
exports.token200 = token200;
const code201 = (req, res) => {
    res.status(201).json({ message: 'ok' });
};
exports.code201 = code201;
const code500 = (req, res, error) => {
    res.status(500).json({ message: 'internal server error', error });
};
exports.code500 = code500;
const code400 = (req, res, attribute) => {
    res.status(400).json({ message: `${attribute} already exists` });
};
exports.code400 = code400;
const code401 = (req, res) => {
    res.status(401).json({ message: `Unauthorized` });
};
exports.code401 = code401;
const code403 = (req, res) => {
    res.status(403).json({ message: `token not provided` });
};
exports.code403 = code403;
const code404 = (req, res) => {
    res.status(404).json({ message: `Not found` });
};
exports.code404 = code404;
//# sourceMappingURL=responses.js.map