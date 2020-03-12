# 10. Review the Logs

To see what went wrong, let's find more information.

## Review the Amazon CloudWatch logs

To see the log output of your skill handler, look to Amazon CloudWatch where the logs are collected.

1. Browse to the Lambda function page for *skill-sample-nodejs-multi* at [https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph).
2. Select the *Monitoring* tab.
3. Click the **View logs in CloudWatch** button.
4. Select the current *$LATEST* log stream.
5. Review the latest log for any errors. For any errors you find, look at the response your Lambda returned. Is the response correct?


## Correct the Error

Update the problem code to properly pass a response.

1. Return to the code editor of the Lambda at [https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-multi?tab=graph).
2. Review the code for errors:
	- Have a hard stare at the `process_response` function and understand what it does (or shouldn't do).
	- Understand what the `EDIT_CODE #66` block does and how our smart home test functions succeeded.
3. Fix the code by simply returning the `response_value`.
4. Click the **Save** button of the Lambda.

> If you are really stuck and cannot get the code to run change the Handler in the Lambda Function Code from `indexWorkshop.handler` to `index.handler` or at least compare and contrast the two underlying source files.

## Test again by Sending an Utterances to Alexa
1. Navigate to the ASK developer console at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask) and select the *Beeper* skill.
2. Open the **Test** tab from the top menu.
3. Type the following commands to test the skill:
	- Custom: `ask beeper to beep`
	- Custom: `ask beeper to beep once`
	- Smart Home: `turn on beeper`
	- Smart Home: `turn off beeper`

For the custom model, if successful, Alexa should respond with "Beeping!" and a tone should play from your computer.
For the smart home model, if successful, Alexa should respond with "OK" and turn on or turn off the beeping on your computer.

If not successful, contact a proctor or have another look for additional issues in your logs and code.

## Checkpoint
You should now have a skill that beeps at you!

## Cleanup
If you want to remove the sample and cleanup the backend:
1. Close any open instance of `setup.txt`
2. Delete the working directory from your desktop
3. From the Alexa Developer Console, select and then delete the `Beeper` skill.
4. In the CloudFormation console, select `skill-sample-nodejs-multi` and then **Delete Stack** from the Actions dropdown.


## Extra Work
- Implement another intent that passes back a different command to the client via session attributes.
- Implement the [Alexa Smart Home Lock Controller interface](https://developer.amazon.com/docs/device-apis/alexa-lockcontroller.html) to utilize the `lockComputer` function in the client code.
- Use the `openFile` function in the client code using a custom model.

___
Return to the [Instructions](README.md)
