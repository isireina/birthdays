# Get it running

## Preparation Step 1 - Run on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Preparation Step 2 (Optional) - Run locally

(Having deployed to Heroku feel free to move directly to the technical challenge.)

### Prerequisites

* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Postgres (e.g. [Postgres.app](https://postgresapp.com))
* Node v6.11.x
* `$ npm install` runs OK

### Database setup

* Create a file named `.env` in the root of the project. In the file, `DATABASE_URL` should contain a url for your Postgres server in the format `postgres://username:password@host:port/databasename` e.g.

> ```
> DATABASE_URL=postgres://joebloggs:@localhost:5432/birthdays_development
> ```

* Create the database `$ heroku local:run node_modules/.bin/sequelize db:create`
* Migrate the database `$ heroku local:run ./node_modules/.bin/sequelize db:migrate`
* Load seed data `$ heroku local:run ./node_modules/.bin/sequelize db:seed:all`

### Web server

* Specify a PORT number in the `.env` file e.g.

> ```
> PORT=3000
> ```

Start the local server `$ heroku local -f Procfile.dev`

![Celebrities](./img-app-running.png)

# Technical challenge

We'd like you to spend no more than 4 hours on the task below (don’t worry if you don’t finish it all).

To complete these exercises you will need personal GitHub and Heroku accounts.

Make sure all your code is pushed back to your repos at the end of the 4 hours (or sooner if you finish early). _We will check the timestamps of the commits to confirm when the push took place._

1. [ ] 1. Fork this GitHub repo

2. [ ] 2. Deploy the birthdays app to Heroku using GitHub Integration ([Heroku GitHub Deploys](https://devcenter.heroku.com/articles/github-integration)) from your fork

3. [ ] 3. Configure the birthdays app to use [New Relic](https://devcenter.heroku.com/articles/github-integration)

4. [ ] 4. Configure the birthdays app to use [Papertrail](https://elements.heroku.com/addons/papertrail)

5. [ ] 5. Update the birthdays app so that every time the root `/` page is loaded, the name of the person in the first row of the table is written to Papertrail

6. [ ] 6. Create a second app “Hello” using the language or framework of your choice:

    * [ ] Its source code should be in a separate GitHub repo and deployed to Heroku
    * [ ] The root `/` page displays `Hello world` in a browser
    * [ ] Every time the root `/` page is loaded, `Hello world` is written to the Papertrail add-on **attached to the birthdays app**
    * [ ] Report on the app’s performance via the New Relic add-on **attached to the birthdays app** e.g. two apps show in the same New Relic dashboard as below
    ![New Relic](./img-new-relic.png)

7. [ ] 7. Modify the birthdays app so that the celebrities are ordered by who has the next birthday
    * e.g. if we view the app on 2nd June, Angelina Jolie will be the first row and Morgan Freeman will be the last/bottom row
    * e.g. if we view the app on 7th June, Kanye West will be the first row and Angelina Jolie will be the last/bottom row


