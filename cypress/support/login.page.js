/* Page Locators */
const USERNAME_FIELD = 'input[name="username"]';
const PASSWORD_FIELD = 'input[name="password"]';
const LOGIN_BUTTON = 'button:contains("LOGIN")';
const CHECK_SUCCESS = `div:contains("Today's Income (IDR)")`;
const CHECK_FAILED = `div:contains("Invalid Credential")`;
const LOGO = '[alt="logo"]';
const USERNAME_REQUIRED = `div:contains("Username is required")`;
const PASSWORD_REQUIRED = `div:contains("Password is required")`;
const FORGOT_PASS_BUTTON = `a:contains("Forgot Password?")`;
const CHECK_FORGOT = `h5:contains("Enter your registered email and the code will be sent to you to reset your password")`;


/* Page Actions */
class loginPage {

    visitUrl(url) {
        cy.visit(url);
    }

    checkLogo() {
        cy.get(LOGO).click()
    }

    login(username, pass) {
        //Input username and password 
        cy.get(USERNAME_FIELD).type(username)
        cy.get(PASSWORD_FIELD).type(pass)

        //Click Button Login
        cy.get(LOGIN_BUTTON).click()
    }

    checkSuccess() {
        cy.get(CHECK_SUCCESS).should($text => {
            expect($text).to.contain(`Today's Income (IDR)`)
        })
    }

    checkFailed() {
        cy.get(CHECK_FAILED).should($text => {
            expect($text).to.contain(`Invalid Credential`)
        })
    }

    usernameRequired() {
        cy.get(USERNAME_REQUIRED).should($text => {
            expect($text).to.contain(`Username is required`)
        })
    }

    passwordRequired() {
        cy.get(PASSWORD_REQUIRED).should($text => {
            expect($text).to.contain(`Password is required`)
        })
    }

    forgotPassword() {
        cy.get(FORGOT_PASS_BUTTON).click()
    }

    checkForgot() {
        cy.get(CHECK_FORGOT).should($text => {
            expect($text).to.contain(`Enter your registered email and the code will be sent to you to reset your password`)
        })
    }
}

module.exports = loginPage;