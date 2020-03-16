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

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
let sqsClient = new AWS.SQS();
let sqsQueueUrl = 'https://sqs.us-east-1.amazonaws.com/XXXXXXXXXXXX/BeeperEventQueue';

const IndexDirective = require('indexDirective');
const IndexSession = require('indexSession');

exports.handler = async function(request, context) {

    // Dump the request for logging - check the CloudWatch logs
    console.log("----- request");
    console.log(JSON.stringify(request));

    if (context !== undefined) {
        console.log("----- context");
        console.log(JSON.stringify(context));
    }

    let response;

    if ('directive' in request) {
        console.log("----- Routing Directive Handler");
        response = await IndexDirective.handler(request, context);

        let properties = ((response || {}).context || {}).properties;
        if (properties !== undefined && properties[0].name === "powerState") {
            if (properties[0].value === "ON")
                await sendMessage("BEEPER_ON");
            else
                await sendMessage("BEEPER_OFF");
        }
    }

    if ('session' in request) {
        console.log("----- Routing Session Handler");
        response = await IndexSession.handler(request, context);

        // Handle any command passed back from a the custom handler
        let command = ((response || {}).sessionAttributes || {}).command;
        if (command !== undefined) {
            console.log(command);
            await sendMessage(command);
        }

    }

    console.log("----- response");
    console.log(JSON.stringify(response));

    return response;
};


async function sendMessage(command) {

    let messageBody = JSON.stringify({"endpoint_id":"computer", "state":command});

    // Send a message to the queue
    let params = {
        MessageBody: messageBody,
        QueueUrl: sqsQueueUrl
    };

    console.log("----- params");
    console.log(JSON.stringify(params));

    let sqsResponse;
    try {
        sqsResponse = await sqsClient.sendMessage(params).promise();
    }
    catch (err) {
        console.log(err);
        return err;
    }

    console.log("----- sqsResponse");
    console.log(sqsResponse);
}
