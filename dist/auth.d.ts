import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
export interface CompleteUserAuthStepsRequest {
    schemaCode: string;
    processId: string;
}
export interface GetUserOpenIdDataRequest {
    token: string;
}
export interface GetSessionByIdRequest {
    id: string;
    userIdentifier: string;
}
export interface SessionByIdResponse {
    status: boolean;
    platformType: string;
    platformVersion: string;
    appVersion: string;
}
export interface UserOpenIdData {
    userIdentifier: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthDay: string;
    rnokpp: string;
    email?: string | undefined;
    givenName?: string | undefined;
    phoneNumber?: string | undefined;
    unzr?: string | undefined;
}
export interface RemoveTokensByUserIdentifierRequest {
    userIdentifier: string;
    sessionType: string;
}
export declare const CompleteUserAuthStepsRequest: {
    encode(message: CompleteUserAuthStepsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompleteUserAuthStepsRequest;
    fromJSON(object: any): CompleteUserAuthStepsRequest;
    toJSON(message: CompleteUserAuthStepsRequest): unknown;
    create(base?: DeepPartial<CompleteUserAuthStepsRequest>): CompleteUserAuthStepsRequest;
    fromPartial(object: DeepPartial<CompleteUserAuthStepsRequest>): CompleteUserAuthStepsRequest;
};
export declare const GetUserOpenIdDataRequest: {
    encode(message: GetUserOpenIdDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserOpenIdDataRequest;
    fromJSON(object: any): GetUserOpenIdDataRequest;
    toJSON(message: GetUserOpenIdDataRequest): unknown;
    create(base?: DeepPartial<GetUserOpenIdDataRequest>): GetUserOpenIdDataRequest;
    fromPartial(object: DeepPartial<GetUserOpenIdDataRequest>): GetUserOpenIdDataRequest;
};
export declare const GetSessionByIdRequest: {
    encode(message: GetSessionByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionByIdRequest;
    fromJSON(object: any): GetSessionByIdRequest;
    toJSON(message: GetSessionByIdRequest): unknown;
    create(base?: DeepPartial<GetSessionByIdRequest>): GetSessionByIdRequest;
    fromPartial(object: DeepPartial<GetSessionByIdRequest>): GetSessionByIdRequest;
};
export declare const SessionByIdResponse: {
    encode(message: SessionByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SessionByIdResponse;
    fromJSON(object: any): SessionByIdResponse;
    toJSON(message: SessionByIdResponse): unknown;
    create(base?: DeepPartial<SessionByIdResponse>): SessionByIdResponse;
    fromPartial(object: DeepPartial<SessionByIdResponse>): SessionByIdResponse;
};
export declare const UserOpenIdData: {
    encode(message: UserOpenIdData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserOpenIdData;
    fromJSON(object: any): UserOpenIdData;
    toJSON(message: UserOpenIdData): unknown;
    create(base?: DeepPartial<UserOpenIdData>): UserOpenIdData;
    fromPartial(object: DeepPartial<UserOpenIdData>): UserOpenIdData;
};
export declare const RemoveTokensByUserIdentifierRequest: {
    encode(message: RemoveTokensByUserIdentifierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTokensByUserIdentifierRequest;
    fromJSON(object: any): RemoveTokensByUserIdentifierRequest;
    toJSON(message: RemoveTokensByUserIdentifierRequest): unknown;
    create(base?: DeepPartial<RemoveTokensByUserIdentifierRequest>): RemoveTokensByUserIdentifierRequest;
    fromPartial(object: DeepPartial<RemoveTokensByUserIdentifierRequest>): RemoveTokensByUserIdentifierRequest;
};
export type AuthServiceDefinition = typeof AuthServiceDefinition;
export declare const AuthServiceDefinition: {
    readonly name: "AuthService";
    readonly fullName: "AuthService";
    readonly methods: {
        readonly completeUserAuthSteps: {
            readonly name: "completeUserAuthSteps";
            readonly requestType: {
                encode(message: CompleteUserAuthStepsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CompleteUserAuthStepsRequest;
                fromJSON(object: any): CompleteUserAuthStepsRequest;
                toJSON(message: CompleteUserAuthStepsRequest): unknown;
                create(base?: DeepPartial<CompleteUserAuthStepsRequest>): CompleteUserAuthStepsRequest;
                fromPartial(object: DeepPartial<CompleteUserAuthStepsRequest>): CompleteUserAuthStepsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserOpenIdData: {
            readonly name: "getUserOpenIdData";
            readonly requestType: {
                encode(message: GetUserOpenIdDataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserOpenIdDataRequest;
                fromJSON(object: any): GetUserOpenIdDataRequest;
                toJSON(message: GetUserOpenIdDataRequest): unknown;
                create(base?: DeepPartial<GetUserOpenIdDataRequest>): GetUserOpenIdDataRequest;
                fromPartial(object: DeepPartial<GetUserOpenIdDataRequest>): GetUserOpenIdDataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UserOpenIdData, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserOpenIdData;
                fromJSON(object: any): UserOpenIdData;
                toJSON(message: UserOpenIdData): unknown;
                create(base?: DeepPartial<UserOpenIdData>): UserOpenIdData;
                fromPartial(object: DeepPartial<UserOpenIdData>): UserOpenIdData;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSessionById: {
            readonly name: "getSessionById";
            readonly requestType: {
                encode(message: GetSessionByIdRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionByIdRequest;
                fromJSON(object: any): GetSessionByIdRequest;
                toJSON(message: GetSessionByIdRequest): unknown;
                create(base?: DeepPartial<GetSessionByIdRequest>): GetSessionByIdRequest;
                fromPartial(object: DeepPartial<GetSessionByIdRequest>): GetSessionByIdRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SessionByIdResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SessionByIdResponse;
                fromJSON(object: any): SessionByIdResponse;
                toJSON(message: SessionByIdResponse): unknown;
                create(base?: DeepPartial<SessionByIdResponse>): SessionByIdResponse;
                fromPartial(object: DeepPartial<SessionByIdResponse>): SessionByIdResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeTokensByUserIdentifier: {
            readonly name: "removeTokensByUserIdentifier";
            readonly requestType: {
                encode(message: RemoveTokensByUserIdentifierRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTokensByUserIdentifierRequest;
                fromJSON(object: any): RemoveTokensByUserIdentifierRequest;
                toJSON(message: RemoveTokensByUserIdentifierRequest): unknown;
                create(base?: DeepPartial<RemoveTokensByUserIdentifierRequest>): RemoveTokensByUserIdentifierRequest;
                fromPartial(object: DeepPartial<RemoveTokensByUserIdentifierRequest>): RemoveTokensByUserIdentifierRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AuthServiceImplementation<CallContextExt = {}> {
    completeUserAuthSteps(request: CompleteUserAuthStepsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    getUserOpenIdData(request: GetUserOpenIdDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserOpenIdData>>;
    getSessionById(request: GetSessionByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SessionByIdResponse>>;
    removeTokensByUserIdentifier(request: RemoveTokensByUserIdentifierRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface AuthServiceClient<CallOptionsExt = {}> {
    completeUserAuthSteps(request: DeepPartial<CompleteUserAuthStepsRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    getUserOpenIdData(request: DeepPartial<GetUserOpenIdDataRequest>, options?: CallOptions & CallOptionsExt): Promise<UserOpenIdData>;
    getSessionById(request: DeepPartial<GetSessionByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<SessionByIdResponse>;
    removeTokensByUserIdentifier(request: DeepPartial<RemoveTokensByUserIdentifierRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=auth.d.ts.map