# LCMAILER

This is essentially a configurable leetcode daily challenge system.

Range of difficulty of the daily challenge question can be configured.

Range of concepts from which the daily questions are chosen from can also be configured.

Cron for scheduling mailer can also be configured.

For instance the app can be configured to send only Easy and Medium questions from DP and Graphs everyday at a pre-configured time.

The setup steps will create a mysql container with a table pre-loaded with all the free LC questions (around 5k questions).

Local Setup:
- For GMAIL password an app password must be generated from google account (https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor).
- Create a .env file in project root (refer .env-sample for required variables).
- Set GMAIL ID and generated app password in .env.

Configuration:
- Edit the mailing list in app.config.js to send to required mail IDs.
- Configure required difficulty ranges and concepts in config/app.config.js. Choose concepts from concepts.txt in resources folder.
- Cron is set for 10PM every day but can be configured in app.config to custom time.

Run:
- Run docker-compose up -d to spin up the docker containers for the App and DB.
- Mail with link of the LC question will be sent to the given list of mail IDs at configured time.

Future:
- Would like to post to discord channel instead of mailing.