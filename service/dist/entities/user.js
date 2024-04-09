"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
/**
 * Comment data definition and mapping to the database for our ORM
 */
let User = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _equipmentName_decorators;
    let _equipmentName_initializers = [];
    let _timeStamp_decorators;
    let _timeStamp_initializers = [];
    let _message_decorators;
    let _message_initializers = [];
    let _read_decorators;
    let _read_initializers = [];
    let _line_decorators;
    let _line_initializers = [];
    var User = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.equipmentName = __runInitializers(this, _equipmentName_initializers, void 0);
            this.timeStamp = __runInitializers(this, _timeStamp_initializers, void 0);
            this.message = __runInitializers(this, _message_initializers, void 0);
            this.read = __runInitializers(this, _read_initializers, void 0);
            this.line = __runInitializers(this, _line_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _equipmentName_decorators = [(0, typeorm_1.Column)({
                type: 'varchar',
                nullable: false,
            })];
        _timeStamp_decorators = [(0, typeorm_1.Column)({
                type: 'datetime',
                nullable: true,
            })];
        _message_decorators = [(0, typeorm_1.Column)({
                type: 'varchar',
                nullable: true,
            })];
        _read_decorators = [(0, typeorm_1.Column)({
                type: 'boolean',
                nullable: false,
                default: false,
            })];
        _line_decorators = [(0, typeorm_1.Column)({
                type: 'varchar',
                nullable: false,
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _equipmentName_decorators, { kind: "field", name: "equipmentName", static: false, private: false, access: { has: obj => "equipmentName" in obj, get: obj => obj.equipmentName, set: (obj, value) => { obj.equipmentName = value; } }, metadata: _metadata }, _equipmentName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _timeStamp_decorators, { kind: "field", name: "timeStamp", static: false, private: false, access: { has: obj => "timeStamp" in obj, get: obj => obj.timeStamp, set: (obj, value) => { obj.timeStamp = value; } }, metadata: _metadata }, _timeStamp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: obj => "message" in obj, get: obj => obj.message, set: (obj, value) => { obj.message = value; } }, metadata: _metadata }, _message_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _read_decorators, { kind: "field", name: "read", static: false, private: false, access: { has: obj => "read" in obj, get: obj => obj.read, set: (obj, value) => { obj.read = value; } }, metadata: _metadata }, _read_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _line_decorators, { kind: "field", name: "line", static: false, private: false, access: { has: obj => "line" in obj, get: obj => obj.line, set: (obj, value) => { obj.line = value; } }, metadata: _metadata }, _line_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
exports.User = User;
