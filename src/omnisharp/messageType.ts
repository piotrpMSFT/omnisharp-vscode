/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IObserver } from "rx";
import { PackageError } from "../packages";
import { PlatformInformation } from "../platform";
import { Request } from "./requestQueue";

export type MessageObserver = IObserver<Message>;
export enum MessageType {
    ActivationFailure,
    CommandShowOutput,
    DebuggerNotInstalledFailure,
    DebuggerPreRequisiteFailure,
    DebuggerPreRequisiteWarning,
    DownloadEnd,
    DownloadProgress, 
    DownloadStart, 
    InstallationFailure,
    InstallationSuccess, 
    InstallationProgress, 
    OmnisharpDelayTrackerEventMeasures,
    OmnisharpEventPacketReceived, 
    OmnisharpFailure,
    OmnisharpInitialisation,
    OmnisharpLaunch,
    OmnisharpRequestMessage, 
    OmnisharpServerMessage, 
    OmnisharpServerVerboseMessage, 
    PackageInstallation,
    Platform,
    TestExecutionCountReport,
}
export type Message = 
    ActivationFailure |
    CommandShowOutput |
    DebuggerNotInstalledFailure |
    DebuggerPreRequisiteFailure |
    DebuggerPreRequisiteWarning |
    DownloadStep |
    InstallationStep |
    InstallationFailure |
    InstallationSuccess |
    OmnisharpDelayTrackerEventMeasures |
    OmnisharpEventPacketReceived |
    OmnisharpFailure |
    OmnisharpInitialisation |
    OmnisharpLaunch |
    OmnisharpRequestMessage |
    OmnisharpServerMessage |
    PackageInstallation |
    Platform |
    TestExecutionCountReport;

interface ActivationFailure {
    type: MessageType.ActivationFailure;
}

interface CommandShowOutput {
    type: MessageType.CommandShowOutput;
}

interface DebuggerNotInstalledFailure {
    type: MessageType.DebuggerNotInstalledFailure;
}

interface DebuggerPreRequisiteFailure {
    type: MessageType.DebuggerPreRequisiteFailure;
    message: string;
}

interface DebuggerPreRequisiteWarning {
    type: MessageType.DebuggerPreRequisiteWarning;
    message: string;
}

interface OmnisharpDelayTrackerEventMeasures {
    type: MessageType.OmnisharpDelayTrackerEventMeasures;
    eventName: string;
    measures: { [key: string]: number } ;
}
interface OmnisharpInitialisation {
    type: MessageType.OmnisharpInitialisation;
    timeStamp: Date;
    solutionPath: string;
}

interface OmnisharpLaunch {
    type: MessageType.OmnisharpLaunch;
    usingMono: boolean;
    command: string;
    pid: number;
}

interface PackageInstallation {
    type: MessageType.PackageInstallation;
    packageInfo: string;
}

interface Platform {
    type: MessageType.Platform;
    info: PlatformInformation;
}

interface InstallationStep {
    type: MessageType.InstallationProgress;
    stage: string;
    message: string;
}

interface InstallationFailure {
    type: MessageType.InstallationFailure;
    stage: string;
    error: any;
}

interface InstallationSuccess {
    type: MessageType.InstallationSuccess;
}

interface DownloadStep {
    type: MessageType.DownloadStart | MessageType.DownloadProgress | MessageType.DownloadEnd;
    message: string;
}

interface OmnisharpFailure {
    type: MessageType.OmnisharpFailure;
    message: string;
    error: Error;
}

interface OmnisharpServerMessage {
    type: MessageType.OmnisharpServerMessage | MessageType.OmnisharpServerVerboseMessage;
    message: string;
}

interface OmnisharpRequestMessage {
    type: MessageType.OmnisharpRequestMessage;
    request: Request;
    id: number;
}

interface TestExecutionCountReport {
    type: MessageType.TestExecutionCountReport;
    debugCounts: { [testFrameworkName: string]: number };
    runCounts: { [testFrameworkName: string]: number };
}

export interface OmnisharpEventPacketReceived {
    type: MessageType.OmnisharpEventPacketReceived;
    logLevel: string;
    name: string;
    message: string;
}