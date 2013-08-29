#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"

function displayProductList(testname){
	
	//UIALogger.logStart(testname);
	try{	
		//launchingApplication();
		target.delay(2);
		UIALogger.logMessage("-----------Display List of Products-----------------") ;
		clickOnScreen(100,100);
		target.delay(2);
		isTextPresent(VERIFY_TEXT);
		for(var i=0;i<5;i++){
			
				clickOnButton(RIGHT_ARROW);
			 	waitForFewSeconds(2);
			}	
		waitForFewSeconds(3);
			for(var i=0;i<5;i++){
				clickOnButton(LEFT_ARROW);
				waitForFewSeconds(2);
			}
	UIALogger.logPass(testname);
	}
	catch(err){
		UIALogger.logMessage("-----------Failed to list Products-----------------") ;
		captureScreenshot(testname);
		UIALogger.logFail("fail");
	}
}
for(var i=0;i<1;i++){
displayProductList("ProductList_Test");
}	




