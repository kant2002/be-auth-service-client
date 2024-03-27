"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceDefinition = exports.RemoveTokensByUserIdentifierRequest = exports.UserOpenIdData = exports.SessionByIdResponse = exports.GetSessionByIdRequest = exports.GetUserOpenIdDataRequest = exports.CompleteUserAuthStepsRequest = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const empty_1 = require("./google/protobuf/empty");
function createBaseCompleteUserAuthStepsRequest() {
    return { schemaCode: "", processId: "" };
}
exports.CompleteUserAuthStepsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.schemaCode !== "") {
            writer.uint32(10).string(message.schemaCode);
        }
        if (message.processId !== "") {
            writer.uint32(18).string(message.processId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompleteUserAuthStepsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schemaCode = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.processId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            schemaCode: isSet(object.schemaCode) ? globalThis.String(object.schemaCode) : "",
            processId: isSet(object.processId) ? globalThis.String(object.processId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaCode !== "") {
            obj.schemaCode = message.schemaCode;
        }
        if (message.processId !== "") {
            obj.processId = message.processId;
        }
        return obj;
    },
    create(base) {
        return exports.CompleteUserAuthStepsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCompleteUserAuthStepsRequest();
        message.schemaCode = object.schemaCode ?? "";
        message.processId = object.processId ?? "";
        return message;
    },
};
function createBaseGetUserOpenIdDataRequest() {
    return { token: "" };
}
exports.GetUserOpenIdDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserOpenIdDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.token !== "") {
            obj.token = message.token;
        }
        return obj;
    },
    create(base) {
        return exports.GetUserOpenIdDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserOpenIdDataRequest();
        message.token = object.token ?? "";
        return message;
    },
};
function createBaseGetSessionByIdRequest() {
    return { id: "", userIdentifier: "" };
}
exports.GetSessionByIdRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.userIdentifier !== "") {
            writer.uint32(18).string(message.userIdentifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSessionByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        return obj;
    },
    create(base) {
        return exports.GetSessionByIdRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSessionByIdRequest();
        message.id = object.id ?? "";
        message.userIdentifier = object.userIdentifier ?? "";
        return message;
    },
};
function createBaseSessionByIdResponse() {
    return { status: false, platformType: "", platformVersion: "", appVersion: "" };
}
exports.SessionByIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status === true) {
            writer.uint32(8).bool(message.status);
        }
        if (message.platformType !== "") {
            writer.uint32(18).string(message.platformType);
        }
        if (message.platformVersion !== "") {
            writer.uint32(26).string(message.platformVersion);
        }
        if (message.appVersion !== "") {
            writer.uint32(34).string(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSessionByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.status = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.platformType = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.platformVersion = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.appVersion = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
            platformType: isSet(object.platformType) ? globalThis.String(object.platformType) : "",
            platformVersion: isSet(object.platformVersion) ? globalThis.String(object.platformVersion) : "",
            appVersion: isSet(object.appVersion) ? globalThis.String(object.appVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.status === true) {
            obj.status = message.status;
        }
        if (message.platformType !== "") {
            obj.platformType = message.platformType;
        }
        if (message.platformVersion !== "") {
            obj.platformVersion = message.platformVersion;
        }
        if (message.appVersion !== "") {
            obj.appVersion = message.appVersion;
        }
        return obj;
    },
    create(base) {
        return exports.SessionByIdResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSessionByIdResponse();
        message.status = object.status ?? false;
        message.platformType = object.platformType ?? "";
        message.platformVersion = object.platformVersion ?? "";
        message.appVersion = object.appVersion ?? "";
        return message;
    },
};
function createBaseUserOpenIdData() {
    return {
        userIdentifier: "",
        firstName: "",
        lastName: "",
        gender: "",
        birthDay: "",
        rnokpp: "",
        email: undefined,
        givenName: undefined,
        phoneNumber: undefined,
        unzr: undefined,
    };
}
exports.UserOpenIdData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.firstName !== "") {
            writer.uint32(18).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(26).string(message.lastName);
        }
        if (message.gender !== "") {
            writer.uint32(34).string(message.gender);
        }
        if (message.birthDay !== "") {
            writer.uint32(42).string(message.birthDay);
        }
        if (message.rnokpp !== "") {
            writer.uint32(50).string(message.rnokpp);
        }
        if (message.email !== undefined) {
            writer.uint32(58).string(message.email);
        }
        if (message.givenName !== undefined) {
            writer.uint32(66).string(message.givenName);
        }
        if (message.phoneNumber !== undefined) {
            writer.uint32(74).string(message.phoneNumber);
        }
        if (message.unzr !== undefined) {
            writer.uint32(82).string(message.unzr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserOpenIdData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.gender = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.birthDay = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.rnokpp = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.phoneNumber = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.unzr = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            gender: isSet(object.gender) ? globalThis.String(object.gender) : "",
            birthDay: isSet(object.birthDay) ? globalThis.String(object.birthDay) : "",
            rnokpp: isSet(object.rnokpp) ? globalThis.String(object.rnokpp) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : undefined,
            givenName: isSet(object.givenName) ? globalThis.String(object.givenName) : undefined,
            phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : undefined,
            unzr: isSet(object.unzr) ? globalThis.String(object.unzr) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.gender !== "") {
            obj.gender = message.gender;
        }
        if (message.birthDay !== "") {
            obj.birthDay = message.birthDay;
        }
        if (message.rnokpp !== "") {
            obj.rnokpp = message.rnokpp;
        }
        if (message.email !== undefined) {
            obj.email = message.email;
        }
        if (message.givenName !== undefined) {
            obj.givenName = message.givenName;
        }
        if (message.phoneNumber !== undefined) {
            obj.phoneNumber = message.phoneNumber;
        }
        if (message.unzr !== undefined) {
            obj.unzr = message.unzr;
        }
        return obj;
    },
    create(base) {
        return exports.UserOpenIdData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserOpenIdData();
        message.userIdentifier = object.userIdentifier ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.gender = object.gender ?? "";
        message.birthDay = object.birthDay ?? "";
        message.rnokpp = object.rnokpp ?? "";
        message.email = object.email ?? undefined;
        message.givenName = object.givenName ?? undefined;
        message.phoneNumber = object.phoneNumber ?? undefined;
        message.unzr = object.unzr ?? undefined;
        return message;
    },
};
function createBaseRemoveTokensByUserIdentifierRequest() {
    return { userIdentifier: "", sessionType: "" };
}
exports.RemoveTokensByUserIdentifierRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.sessionType !== "") {
            writer.uint32(18).string(message.sessionType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveTokensByUserIdentifierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionType = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            sessionType: isSet(object.sessionType) ? globalThis.String(object.sessionType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.sessionType !== "") {
            obj.sessionType = message.sessionType;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveTokensByUserIdentifierRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveTokensByUserIdentifierRequest();
        message.userIdentifier = object.userIdentifier ?? "";
        message.sessionType = object.sessionType ?? "";
        return message;
    },
};
exports.AuthServiceDefinition = {
    name: "AuthService",
    fullName: "AuthService",
    methods: {
        completeUserAuthSteps: {
            name: "completeUserAuthSteps",
            requestType: exports.CompleteUserAuthStepsRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        getUserOpenIdData: {
            name: "getUserOpenIdData",
            requestType: exports.GetUserOpenIdDataRequest,
            requestStream: false,
            responseType: exports.UserOpenIdData,
            responseStream: false,
            options: {},
        },
        getSessionById: {
            name: "getSessionById",
            requestType: exports.GetSessionByIdRequest,
            requestStream: false,
            responseType: exports.SessionByIdResponse,
            responseStream: false,
            options: {},
        },
        removeTokensByUserIdentifier: {
            name: "removeTokensByUserIdentifier",
            requestType: exports.RemoveTokensByUserIdentifierRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=auth.js.map