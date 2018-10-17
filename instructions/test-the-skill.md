# 9. Test the Skill

All of the skill configuration elements *should* be in place. Let's test.

## Link the Skill

Before you can use your skill, you need to account link the skill.

1. Browse to [https://alexa.amazon.com](https://alexa.amazon.com).
2. Select *Skills* from the left menu.
3. Click the **Your Skills** button from the top-right.
4. Filter down to *DEV SKILLS* and click on your *Beeper* skill. (It should say "Account linking required")
5. Click the **Enable** button and sign in as necessary and click 'Allow' to sign in to Skill Sample.
6. If successful, you should receive a confirmation similar to "Beeper has been successfully linked."
7. Close the tab, return to the skill, and click the **Discover Devices** button.
8. When complete, a new discovered device called "Beeper" will appear in your Smart Home Devices list.

## Send an Utterance to Alexa using the Developer Console

1. Navigate to the ASK developer console at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask) and select the *Beeper* skill.
2. Open the **Test** tab from the top menu.
3. Type the following command: `ask beeper to beep`

If successful, Alexa should respond with "Beeping!" and a tone should play from your computer.
If not successful, Alexa should respond with "There was a problem with the requested skill's response" and your computer will not beep. If your skill does not work correctly, you will need to review your logs and troubleshoot.

## Checkpoint
You should now have an enabled skill and are able to test the skill in the developer console. 

**If you are attending a workshop, your skill may not work and will need troubleshooting.**

Next to Step [10. Review the Logs](review-the-logs.md)

___
Return to the [Instructions](README.md)
