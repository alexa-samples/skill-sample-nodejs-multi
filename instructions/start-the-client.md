# 8. Start the Client

To have our computer respond to events from Alexa, you need to run a client that listens to messages on your SQS Queue.

## Run the Node Client

Run a small script that listens for events on a SQS Queue.

1. From the command-line, navigate to the `client` directory of the *skill-sample-nodejs-multi-master* working directory.
2. Open the `client.js` file and replace the `sqsQueueUrl` variable with **[Amazon SQS Queue Url]** value from your `setup.txt` file. That value should look something like" `https://sqs.region.amazonaws.com/XXXXXXXXXXXX/BeeperEventQueue`
3. In the same `client` directory, run the command `npm install` from the command-line.
4. In the `client` directory, run the command `node client.js` to start the client.
5. Once started, you should get a "Listening for a new message" status message.
6. Leave the client running in the background and proceed with then next step.

## Checkpoint
The client should now be running on your computer and listening for messages from your Alexa skill handler.

Next to Step [9. Test the Skill](test-the-skill.md)

___
Return to the [Instructions](README.md)
