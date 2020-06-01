# 3. Create the Skill

Create an Alexa skill that will respond to custom and smart home commands by using both types of interaction models.

## Create a Skill using the Alexa Skills Kit Developer Console

You have two options, create it manually or via the ASK-CLI

### Do it Manually

1. In a web browser to the *Alexa Skills Kit Developer Console* at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask). If not already authenticated, you may have to sign in with your Amazon Developer Account.
2. Click the **Create Skill** button.
3. For the _Skill name_, enter `Beeper` (or a proper translation if you want to use another locale).
4. In _Default language_ you'll see **English (US)**, leave it as is or change it to your preferred locale. Under _Choose a model to add to your skill_ select the **Smarthome** model. As method to host your skills backend **Provision your own** will be automatically selected
5. Click the **Create skill** button.
6. You will see the Skill ID that was generated for your skill in the middle of the screen. Click on **Copy to clipboard**
7. From the left menu, select **Models** and enable the toggle control for **Custom**.
8. Click the **Save** button. If successful, a *Custom* section will be added to the left menu.
9. Click on **Custom** on the left, select **Start from scratch** as template and click on the **Choose** button. You'll see an empty custom voice interaction model. On the left menu, you should now see a **Models** section. 
9. Using a text editor, open the `setup.txt` file in your working directory `instructions` folder.
10. Paste the copied Skill ID value in step 6 into the **[Alexa Skill Application ID]** section overwriting the placeholder.

	```
	[Alexa Skill Application ID]
	amzn1.ask.skill.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	```

> You will use the `setup.txt` file to collect the required ARNs, Credentials, IDs, & URLs.

### Do it via ASK-CLI

1. First make sure you're using ASK-CLI v1.7.23 (if not try doing `npm install -g ask-cli@1.7.23`). Go to the root directory of the downloaded or cloned project and just do an `ask deploy`. This will deploy the Beeper skill in all English and Spanish locales (8 total).
2. Take a look at the file `.ask/config` and copy the value next to `skill_id` to the clipboard.
3. Using a text editor, open the `setup.txt` file in your working directory `instructions` folder.
4. Paste the copied Skill ID value into the **[Alexa Skill Application ID]** section overwriting the placeholder.

## Checkpoint
- You should have a folder called *skill-sample-nodejs-multi* that contains the sample code with the README.md file at the root.
- You should have a skill with two models (Smart home and Custom) and should have captured the Alexa Skill Application ID generated during skill creation into the `setup.txt` file. You will use the ID to create the backend resources.

Next to Step [4. Create the Backend Resources](create-the-backend-resources.md)

___
Return to the [Instructions](README.md)
