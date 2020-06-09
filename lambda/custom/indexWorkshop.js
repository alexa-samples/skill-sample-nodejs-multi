// -*- coding: utf-8 -*-

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

/* eslint-disable  func-names */
/* eslint-disable  no-console */

'use strict';

// // EDIT_CODE #0 - Uncomment below to require model handlers
// const IndexDirective = require('indexDirective');
// const IndexSession = require('indexSession');

// // EDIT_CODE #3 - Uncomment below and replace with your SqsQueueUrl from the CloudFormation template Outputs
// const AWS = require('aws-sdk');
// const region = 'eu-west-1';
// AWS.config.update({region: region});
// let sqsClient = new AWS.SQS();
// let sqsQueueUrl = `https://sqs.${region}.amazonaws.com/XXXXXXXXXXXX/BeeperEventQueue`;

exports.handler = async function(request, context) {

    // Dump the request for logging - check the CloudWatch logs
    console.log("----- request");
    console.log(JSON.stringify(request));

    if (context !== undefined) {
        console.log("----- context");
        console.log(JSON.stringify(context));
    }

    let response = "{}";

    // // EDIT_CODE #1 - Handle smart home model Directives
    // if ('directive' in request) {
    //     console.log("----- Routing Directive Handler");
    //     response = await IndexDirective.handler(request, context);
    //
    //     let properties = ((response || {}).context || {}).properties;
    //     if (properties !== undefined && properties[0].name === "powerState") {
    //         if (properties[0].value === "ON")
    //             await sendMessage("BEEPER_ON");
    //         else
    //             await sendMessage("BEEPER_OFF");
    //     }
    // }

    // // EDIT_CODE #2 - Handle custom model Sessions
    // if ('session' in request) {
    //     console.log("----- Routing Session Handler");
    //     response = await IndexSession.handler(request, context);
    //
    //     // Handle any command passed back from a the custom handler
    //     let command = ((response || {}).sessionAttributes || {}).command;
    //     if (command !== undefined) {
    //         console.log(command);
    //         await sendMessage(command);
    //     }
    //
    // }

    console.log("----- response");
    console.log(JSON.stringify(response));

    // // EDIT_CODE #66 - Let's avoid some trouble
    if ('directive' in request)
        return response;

    return process_response(response);
};


async function sendMessage(command) {

    // NOTE: The endpoint_id is fixed to "computer" - adjust as necessary
    let messageBody = JSON.stringify({"endpoint_id":"computer", "state":command});

    // // EDIT_CODE #4
    // // Prepare the parameters of the message
    // let params = {
    //     MessageBody: messageBody,
    //     QueueUrl: sqsQueueUrl
    // };
    //
    // console.log("----- params");
    // console.log(JSON.stringify(params));
    //
    // let sqsResponse;
    // try {
    //     // Send a message to the queue
    //     sqsResponse = await sqsClient.sendMessage(params).promise();
    // }
    // catch (err) {
    //     console.log(err);
    //     return err;
    // }
    //
    // console.log("----- sqsResponse");
    // console.log(sqsResponse);
}

async function process_response(response_value) {
  // Not Yet Implemented - Part of a troubleshooting exercise
  return '{"Reason":"NYI"}';
}
