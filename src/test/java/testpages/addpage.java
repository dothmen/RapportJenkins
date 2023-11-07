package testpages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class addpage {
	WebDriver driver;
	By btn_product=By.xpath("//body/main/section/div/div/section/section/div[1]/div[1]/div[1]");
	By btn_addtocart=By.xpath("//button[@class='btn btn-primary add-to-cart']");
	By text=By.xpath("//h4[@id='myModalLabel']");
	
	public addpage (WebDriver driver) {
		this.driver=driver;
	}
	
	public void clickonproduct() {
		driver.findElement(btn_product).click();
	}
	public void clickonaddtocart() {
		driver.findElement(btn_addtocart).click();
	}
	public void cheakaddtext() {
		driver.findElement(text).isDisplayed();
	}
}
