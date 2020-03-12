# 6. Configure the Skill

Configure the Alexa skill and fill out the required settings.

## Configure the Custom settings

Configure the Custom model settings for the skill by setting the invocation, creating a BeepIntent, and assigning the endpoint to the created Lambda ARN.

### Configure the Invocation
1. Return to the Alexa Skills Kit Developer Console at [https://developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask) and edit your *Beeper* skill.
2. If you see Smart home model details, on left menu, select the *CUSTOM* tab (otherwise there's no need to do this).
3. Select the *Invocation* sub-tab and verify the *Skill Invocation Name* is set to `beeper`.

### Configure the Intents
1. Click the **+ Add** button in the *Intents* sub-tab.
2. With *Create custom intent* selected, enter `BeepIntent` 
3. Click the **Create custom intent** button.
4. In the *Sample Utterances*, add the following utterances pressing enter or **+** after each: 
	1. `beep`
	2. `beep once`
5. Click **Save Model**.

### Configure the Endpoint
1. Click *Endpoint* sub-tab.
2. Select *AWS Lambda ARN*
3. In the **Default Region**, enter the ARN stored as **[AWS Lambda ARN]** in the `setup.txt` file. The ARN should look something like: `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:skill-sample-LANGUAGE-multi`
4. Click the **Save Endpoints** button.
5. Return to the *Invocation* sub-tab and click the **Build Model** button.

> After a minute or so, you should receive a **Full Build Successful** notice. It is OK to proceed with the next steps while the Custom model builds in the background.

## Configure the Smart Home settings

Set the endpoint value of the Smart Home model to the same created Lambda ARN as the Custom model. 

1. On left menu, select *PERMISSIONS* or *ACCOUNT LINKING*, then select the *SMART HOME* tab.
2. For the *Smart Home service endpoint*, enter the ARN saved in your `setup.txt` file as **[AWS Lambda ARN]** into the *Default endpoint* field. The ARN should look something like: `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:skill-sample-LANGUAGE-multi`
3. Click the **Save** button.


## Configure the Account Linking settings

Fill out the required entities for account linking and copy your unique redirect URLs for configuring the return URLs of the security profile.

1. Either select the *ACCOUNT LINKING* tab from the left menu or click the **Setup Account Linking** button from the Smart Home model section.
2. On the *Account Linking* page, for the *Authorization URI*, enter `https://www.amazon.com/ap/oa`.
3. For the Access Token URI, enter `https://api.amazon.com/auth/o2/token`.
4. For the Client ID, copy and paste the previously saved **[Security Profile Client ID]** value from the `setup.txt` file.
5. For the Client Secret, copy and paste the previously saved **[Security Profile Client Secret]** value from the `setup.txt` file.
6. Under *Scope*, click the **+ Add scope** link and then add the following scope into the text box that says *Enter scope...*: `profile:user_id`
7. Copy the three (3) redirect urls from the Redirect URLs section and save them to the **[Redirect URLs]** section of the `setup.txt` file.
8. Click **Save**.

## Set the Allowed Return URLs

Using your account-specific values from the skill configuration section, collect the Redirect URLs and set them in the *Security Profile Web Settings* **Allowed Return URLs**.

1. Open [https://developer.amazon.com/iba-sp/overview.html](https://developer.amazon.com/iba-sp/overview.html) and make sure *APPS & SERVICES* is selected in the top menu and *Security Profiles* is selected in the sub menu.
2. Select the **Skill Sample** Security Profile.
3. On the *Security Profile Management* page, select the **Web Settings** tab.
4. In the *Web Settings*, click the **Edit** button.
5. In the Allowed Return URLs text input, add each of the saved Redirect URLs from the `setup.txt` file. You will need to click the **Add Another** link to add each Return/Redirect URL. Each of the Return/Redirect URLs will have a format similar to `https://pitangui.amazon.com/api/skill/link/XXXXXXXXXXXXXX`
6. Click **Save**.

## Checkpoint
We should now have a have a fully configured Alexa skill that handles the selected custom and smart home interaction models and has account linking configured.
 
Next to Step [7. Edit the Code](edit-the-code.md)

___
Return to the [Instructions](README.md)