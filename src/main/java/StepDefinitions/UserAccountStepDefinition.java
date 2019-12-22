package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class UserAccountStepDefinition {

	public WebDriver driver=null;

	@Given("^Browser initialize to open$")
	public void browser_initialize_to_open() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "lib\\chromedriver-windows-32bit.exe");
		driver = new ChromeDriver();

		// Page load time
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);

		// ImplecitlyWait time
				driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
				
		// Window maximizing
		driver.manage().window().maximize();
	}


	@When("^Enter the App url$")
	public void enter_the_App_url() throws Throwable {
		driver.get("http://automationpractice.com/index.php?");
	}
	
	@When("^Click on login button from top menu$")
	public void click_on_login_button_from_top_menu() throws Throwable {
	  driver.findElement(By.xpath("//a[@class='login']")).click();
	}
	
	@When("^Enter the username$")
	public void enter_the_username() throws Throwable {
		driver.findElement(By.xpath("(//input[@name='email'])[1]")).sendKeys("abc213@mailinator.com");
		
	}
	
	@When("^Enter the Passowrd$")
	public void enter_the_Passowrd() throws Throwable {
	driver.findElement(By.xpath("//input[@name='passwd']")).sendKeys("abc1234");
		
	}

	@When("^Click on Sign In button below Passowrd field$")
	public void click_on_Sign_In_button_below_Passowrd_field() throws Throwable {
	driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();
	}
	
	@When("^Verify to Get title of the page to make sure user login successfully$")
	public void verify_to_Get_title_of_the_page_to_make_sure_user_login_successfully() throws Throwable {
	String user_name = driver.findElement(By.xpath("//*[contains(text(),'Misir Ali')]")).getText();
	Assert.assertEquals("Misir Ali", user_name);
	}
	
	@Then("^Verify the Welcome to your account msg from the main page$")
	public void verify_the_Welcome_to_your_account_msg_from_the_main_page() throws Throwable {
    String page_titel = driver.getTitle();
    System.out.println(page_titel);
    
    String Welcome_msg=driver.findElement(By.xpath("//p[contains(text(),'Welcome to your account. Here you can manage all of your personal information and orders.')]")).getText();
    
    System.out.println(Welcome_msg);
    Assert.assertEquals("Welcome to your account. Here you can manage all of your personal information and orders.", Welcome_msg);
    
    	}

	@Then("^Closed the browser$")
	public void closed_the_browser() throws Throwable {
		driver.quit(); 
	}
	
	@After()
	public void closeBrowser() {
	driver.quit();
	}
}