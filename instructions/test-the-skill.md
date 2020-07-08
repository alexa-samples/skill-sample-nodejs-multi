# 9. Test the Skill

All of the skill configuration elements *should* be in place. Let's test.

## Link the Skill

Before you can use your skill, you need to account link the skill.

> Alternatively you can do the Account Linking steps below from the Alexa app

1. Browse to [https://alexa.amazon.com](https://alexa.amazon.com).
2. Select *Skills* from the left menu.
3. Click the **Your Skills** button from the top-right.
4. In the search box type *Beeper* and your skill will show up. (It should say "Account linking required"). Click on it.
5. Click on the **Enable** button and sign in as necessary and click *Allow* to sign in to Skill Sample.
6. If successful, you should receive a confirmation similar to "Beeper has been successfully linked."
7. Close the tab and you should see a message prompt that offers you to detect devices. Go ahead and detect them (alternatively you can click on *Smart Home* on the left navigation menu items, click on the **Devices** button, scroll all the way down and click on the **Discover** button).
8. When complete, a new discovered device called "Beeper" will appear in your Smart Home Devices list which supports being turned on and off.

## Send an Utterance to Alexa using the Developer Console

1. Navigate to the ASK developer console at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask) and select the *Beeper* skill.
2. Open the **Test** tab from the top menu.
3. Type or say the following: `ask beeper to beep` (which will trigger the custom model)

If successful, Alexa should respond with "Beeping!" and a tone should play from your computer via the client.
If not successful, Alexa should respond with "There was a problem with the requested skill's response" and your computer will not beep. If your skill does not work correctly, you will need to review your logs and troubleshoot.

4. Now try the SmartHome model by saying or typing `turn on beeper` (which will trigger the SH model)

If successful your virtual beeper will start beeping non stop.

5. After that you can stop your virtual beeper by saying or typing `turn off beeper`

## Checkpoint
You should now have an enabled skill and be able to test the skill in the developer console. 

> **If you are attending a workshop, your skill may not work and will need troubleshooting (see next step).**

Next to Step [10. Review the Logs](review-the-logs.md)

___
Return to the [Instructions](README.md)
