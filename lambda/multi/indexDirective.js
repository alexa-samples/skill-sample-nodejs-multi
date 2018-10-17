// -*- coding: utf-8 -*-

// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

// Licensed under the Amazon Software License (the "License"). You may not use this file except in
// compliance with the License. A copy of the License is located at

//    http://aws.amazon.com/asl/

// or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific
// language governing permissions and limitations under the License.

/* eslint-disable  func-names */
/* eslint-disable  no-console */

'use strict';

let AlexaResponse = require("./alexa/skills/smarthome/AlexaResponse");


exports.handler = async function (request, context) {

    // Validate we have an Alexa directive
    if (!('directive' in request)) {
        let aer = new AlexaResponse(
            {
                "name": "ErrorResponse",
                "payload": {
                    "type": "INVALID_DIRECTIVE",
                    "message": "Missing key: directive, Is request a valid Alexa directive?"
                }
            });
        return aer.get();
    }

    // Check the payload version
    if (request.directive.header.payloadVersion !== "3") {
        let aer = new AlexaResponse(
            {
                "name": "ErrorResponse",
                "payload": {
                    "type": "INTERNAL_ERROR",
                    "message": "This skill only supports Smart Home API version 3"
                }
            });
        return aer.get();
    }

    // Route based on our received Directive namespace
    let namespace = ((request.directive || {}).header || {}).namespace;

    if (namespace === 'Alexa.Authorization') {
        let aar = new AlexaResponse({"namespace": "Alexa.Authorization", "name": "AcceptGrant.Response",});
        return aar.get();
    }

    if (namespace === 'Alexa.Discovery') {
        let adr = new AlexaResponse({"namespace": "Alexa.Discovery", "name": "Discover.Response"});
        let capability_alexa = adr.createPayloadEndpointCapability();
        let capability_alexa_customintent = adr.createPayloadEndpointCapability({"interface": "Alexa.CustomIntent", "supportedIntents": [{"name": "BeepIntent"}]});
        let capability_alexa_powercontroller = adr.createPayloadEndpointCapability({"interface": "Alexa.PowerController", "supported": [{"name": "powerState"}]});
        let capabilities = [capability_alexa, capability_alexa_customintent, capability_alexa_powercontroller];
        adr.addPayloadEndpoint({"endpointId": "beeper", "friendlyName": "Beeper", "description": "A computer beeper", "capabilities": capabilities});
        return adr.get();
    }

    if (namespace === 'Alexa.PowerController') {

        let power_state_value = "OFF";
        if (request.directive.header.name === "TurnOn")
            power_state_value = "ON";

        let endpoint_id = request.directive.endpoint.endpointId;
        let token = request.directive.endpoint.scope.token;
        let correlationToken = request.directive.header.correlationToken;

        let ar = new AlexaResponse(
            {
                "correlationToken": correlationToken,
                "token": token,
                "endpointId": endpoint_id
            }
        );
        ar.addContextProperty({"namespace":"Alexa.PowerController", "name": "powerState", "value": power_state_value});

        return ar.get();
    }

};

