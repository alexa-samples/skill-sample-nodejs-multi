# 3. Create the Skill

Create an Alexa skill that will respond to custom and smart home commands by using both types of interaction models.

## Create a Skill using the Alexa Skills Kit Developer Console

1. In a web browser to the *Alexa Skills Kit Developer Console* at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask). If not already authenticated, you may have to sign in with your Amazon Developer Account.
2. Click the **Create Skill** button.
3. For the _Skill name_, enter `Beeper`.
4. Leave the _Default language_ as **English (US)** and under _Choose a model to add to your skill_ select the **Custom** model.
5. Click the **Create skill** button. 
6. When prompted to *Choose a template*, select **Start from scratch** and then click the **Choose** button. When completed, you should be at the *Build* page for a newly created *Beeper* page.
7. From the left menu, select **Add Model** and then add the **Smart Home** model to your skill by clicking the **Add to skill** button.
8. Click the **Save** button.
9. If successful, a *Smart Home* section will be added to the left menu. Select the **Smart Home** section and then, in the *Smart Home service endpoint* section, locate the *Your Skill ID* value.
10. Click the **Copy to clipboard** link to copy *Your Skill ID*.
11. Using a text editor, open the `setup.txt` file in your working directory `instructions` folder.
12. Paste the copied skill ID value into the **[Alexa Skill Application ID]** section overwriting the placeholder.

	```
	[Alexa Skill Application ID]
	amzn1.ask.skill.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	```

> You will use the `setup.txt` file to collect the required ARNs, Credentials, IDs, & URLs.

## Checkpoint
- You should have a folder on your desktop called *skill-sample-nodejs-multi* that contains the sample code with the README.md file at the root.
- You should have captured the Alexa Skill Application ID generated during skill creation into the `setup.txt` file. You will use the ID to create the backend resources.

Next to Step [4. Create the Backend Resources](create-the-backend-resources.md)

___
Return to the [Instructions](README.md)
