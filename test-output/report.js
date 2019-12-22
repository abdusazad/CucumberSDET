$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SQLDBA/eclipse-workspace/CucumberSDET/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login test feature",
  "description": "",
  "id": "login-test-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SDETTesting"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login test scenario",
  "description": "",
  "id": "login-test-feature;login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Browser initialize to open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the App url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login button from top menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter the Passowrd",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Sign In button below Passowrd field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify to Get title of the page to make sure user login successfully",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify the Welcome to your account msg from the main page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Closed the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAccountStepDefinition.browser_initialize_to_open()"
});
formatter.result({
  "duration": 6470026400,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.enter_the_App_url()"
});
formatter.result({
  "duration": 1964398800,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.click_on_login_button_from_top_menu()"
});
formatter.result({
  "duration": 1640592200,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.enter_the_username()"
});
formatter.result({
  "duration": 209786300,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.enter_the_Passowrd()"
});
formatter.result({
  "duration": 111865200,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.click_on_Sign_In_button_below_Passowrd_field()"
});
formatter.result({
  "duration": 1788652300,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.verify_to_Get_title_of_the_page_to_make_sure_user_login_successfully()"
});
formatter.result({
  "duration": 60620800,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.verify_the_Welcome_to_your_account_msg_from_the_main_page()"
});
formatter.result({
  "duration": 70744000,
  "status": "passed"
});
formatter.match({
  "location": "UserAccountStepDefinition.closed_the_browser()"
});
formatter.result({
  "duration": 748328400,
  "status": "passed"
});
formatter.after({
  "duration": 103600,
  "status": "passed"
});
});