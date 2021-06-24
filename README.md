# Getting Started
## For Your Information
- For API test, we use mocha (https://mochajs.org/) and chai (https://www.chaijs.com/)
- For UI test (web), we use cypress (https://docs.cypress.io/guides/overview/why-cypress.html)
- For mobile apps test, (still on process)

### Mocha
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### Chai
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Development Preparation

### Clone Repo
Clone from https://github.com/oimtrust/isqa-cy (choose `master` branch)

### Setup Node, NPM, Yarn
For windows and mac user you can [download node](https://nodejs.org/en/) and install.
For linux user you can install with ppa the tutorial can be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

After node and npm installed, we recommend you to also install yarn, the tutorial can be found [here](https://classic.yarnpkg.com/en/docs/install).

### Package Installation
Before start development and running the test you need to install packages that needed for flip-test project. To install them, you need to do these step: 
- Go to your flip-test repo directory in your local machine with your favorite terminal.
- and run `yarn` in your terminal
- wait, and done

### Additional Extension for your IDE or Editor
#### Visual studio code
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### PhpStorm
- [EsLint](https://plugins.jetbrains.com/plugin/7494-eslint), the setup -> [here](https://www.jetbrains.com/help/phpstorm/eslint.html)
- [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier), the setup -> [here](https://www.jetbrains.com/help/phpstorm/prettier.html)

# Code Rules

## Test Structure

- Use the `describe` function to create a group of test cases
- Use the `it` function to create a test
  - The test created with `it` should follow the test cases created in testlink.
- Example:
  ```js
  describe("Android login", function () {
    it("Return jwt token for valid credentials", async function () {
      const response = await UserAPI.login(VALID_LOGIN_CREDENTIAL_ANDROID);

      assert.equal(response.status, 200);
      assert.containsAllKeys(response.data, ["token", "device_id"]);
      assert.isNotNull(response.data.token);
    });

    it("Should not return jwt token for invalid credentials", async function () {
      const response = await UserAPI.login(INVALID_LOGIN_CREDENTIAL_ANDROID);

      assert.equal(response.status, 422);
    });
  });
  ```

## Element

> A selector is used for accuiring the element within the DOM.

- Use `id` to get element.
- If possible ask to dev to give the `id` for every element. If it is not, we can use other way such as `class` or `tag`.
	- Suggested `id` that should be given in the DOM element: `qa-[page name]-[unique element name]`. E.g.: `qa-login-submit-button`.


## File Naming
- Use dot (`.`) to separete type file, example `login.data.js` and `login.test.js`.
- For scenario file, it should have `[name scenario].test.js`.
- For scenario file that has more than 1 word using "-", example: `payment-bca.test.js`

## Variable Naming
- All variables, files, functions names **SHOULD BE DECLARED IN ENGLISH!** Any Bahasa declaration will be rejected.
- Make all naming concise and clear.

## Prettier
- `Prettier` has been installed in the repo.
- It will automatically run when you do a git commit.
- You also can install a Prettier extension for your editor.

## Eslint
- `Eslint` has been installed in the repo.
- You can install an Eslint extension for your editor.
	- e.g: https://veneciacalista.medium.com/eslint-format-on-save-for-vscode-e0988b6a2116
  
## Other Best Practice
There are tons of other sources for best practice that can be found in Google. But, some of them are:
- https://docs.cypress.io/guides/references/best-practices.html
- https://github.com/cypress-io/eslint-plugin-cypress
- https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-files
- https://ruleoftech.com/2019/notes-of-best-practices-for-writing-cypress-tests


# Folder Structure
## Web UI Test

- Data
  If we need use data (such as input from csv, or raw data), should be created here

- Helper
  If we need create function helper that can be used for steps, should be created here

- Page Elements
	This folder consist of file that mention all element object from each page, example: `login.page.js`.
  
- Scenario
  All scenario files that describe what/flow of testing should be created here, example: `login.test.js`.
  


  

# Create Merge Request

- Create branch local if you want to add scenario test

- Don't forget to merge from latest master branch

- If you have done for your work, create merge request

- Ping to `@reviewer_automation` in channel `#mr_automation_test`

- Track it if it gets review/comments


# Run Test
## Web using cypress
For linux and mac user you can run the test by run these command in your terminal:
`yarn run test-b2c:run`

For windows user:
1. Download cypress [here](https://download.cypress.io/desktop)
2. Extract it
3. run cypress.exe
4. Browse our flip-test repo in your local machine to add in cypress dashboard
5. select scenario that you want to run

## API

To be updated later.