@SDETTesting
Feature: Login test feature

  Scenario: Login test scenario
    Given Browser initialize to open
    When Enter the App url
    When Click on login button from top menu 
    When Enter the username
    When Enter the Passowrd
    When Click on Sign In button below Passowrd field
    When Verify to Get title of the page to make sure user login successfully
    Then Verify the Welcome to your account msg from the main page
    Then Closed the browser
