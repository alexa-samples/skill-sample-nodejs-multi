// -*- coding: utf-8 -*-

// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

/* eslint-disable  func-names */
/* eslint-disable  no-console */

'use strict';

const AWS = require('aws-sdk');
const region = 'eu-west-1';
const queue_id = 'XXXXXXXXXXXX';
AWS.config.update({region: region});
let sqsClient = new AWS.SQS();
let sqsQueueUrl = `https://sqs.${region}.amazonaws.com/${queue_id}/BeeperEventQueue`;

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
        if (!!properties && properties[0].name === "powerState") {
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
        if (!!command) {
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
