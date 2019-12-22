@SDETTesting1
#User login with multiple data parameters
Feature: Login test feature with multiple user

  Scenario Outline: Verify the valid Invalid user login functions
  Given Browser initialize to open
    When Enter the App url
    And Click on login button from top menu 
    And Enter the <username>
    And Enter the <passowrd>
    Then check the <status>
	Then Closed the browser
	
    Examples: 
      |username  					|passowrd     |status  |
      |myunknowxaad@mailinator.com  |    		  |error   |
      |abc213@mailinator.com 		|myinvalidpwd |error   |
      |abc213@mailinator.com  		|abc12345     |success |
      
    