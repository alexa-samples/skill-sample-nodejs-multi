# 7. Edit the Code

Edit and understand the provided Lambda code.

## Edit the Code to Provide a Response to a Request

Edit the handler to properly route and handle both a custom and smart home request by exposing custom and smart home handlers for incoming requests.

> Pressing Ctrl+/ on Windows or Cmd+/ in the inline code editor lets you comment and uncomment blocks of code.

### Import Handlers
1. Open the Lambda Console at [https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph) and inspect the Function code section.
2. In the indexWorkshop.handler handler, look for `EDIT_CODE #0` and uncomment the entire block except for the `// EDIT_CODE ...` line.

> If the file is not already open in the inline editor, you can open it from the file tree on the left.

This code includes the additional handlers for Session requests (Custom) and Directive requests (Smart Home).

### Configure the Handler for Smart Home Requests
1. In the indexWorkshop.handler handler, look for `EDIT_CODE #1` and uncomment the entire block except for the `// EDIT_CODE ...` line.

This code looks for a directive, passes the request to the directive handler, and then evaluates the return response to send a message to the client.

### Configure the Handler for Custom Requests
1. In the indexWorkshop.handler handler, look for `EDIT_CODE #2` and uncomment the entire block except for the `// EDIT_CODE ...` line.
2. Click the **Save** button of the Lambda at the top right.

This code looks for a session, passes the request to the session handler, and then evaluates the return response to send a message to the client.

## Edit the Code to Send an Event

Edit the handler code to enable sending a message to your event queue.

1. In the indexWorkshop.handler handler, look for `EDIT_CODE #3` and uncomment the block.
2. Replace the value of the `sqsQueueUrl` variable with the **[Amazon SQS Queue Url]** value from the `setup.txt` file. The value you will want to replace looks like `https://sqs.us-east-1.amazonaws.com/XXXXXXXXXXXX/events-device-alexa`.
3. In the indexWorkshop.handler handler, look for `EDIT_CODE #4` and uncomment the block.
4. Click the **Save** button of the Lambda at the top right.

This code includes and configures the AWS SDK, specifies your unique queue URL, and enables the SQS client to send a message to be received by your computer.

## Test the Lambda

To test changes to the handler code, let's simulate an Alexa Request for a Smart Home message.

### Send a Smart Home Test Event

Send a simulated Alexa Smart Home Discovery request to test the Lambda.

1. Open the Lambda Console for the handler at [https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph)](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph)
2. Open the *Select a test event..* dropdown from the top right of the menu and select **Configure test events**.
3. In the *Configure test event* dialog, create a new test event with the *Event name* of `directiveDiscovery` and paste the raw content from [https://raw.githubusercontent.com/alexa/alexa-smarthome/master/sample_messages/Discovery/Discovery.request.json](https://raw.githubusercontent.com/alexa/alexa-smarthome/master/sample_messages/Discovery/Discovery.request.json) into the text area replacing the existing placeholder content.
4. Click the **Create** button at the bottom to create the test event.
5. With the *directiveDiscovery* test selected in the dropdown, click **Test**.
6. Open the **Execution result** details to inspect the result and notice that your handler now returns a `Discover.Response` and the definition of a "Beeper" device.


## Checkpoint
The skill handler code should appropriately respond to smart home messages.
 
Next to Step [8. Start the Client](start-the-client.md)

Return to the [Instructions](README.md)