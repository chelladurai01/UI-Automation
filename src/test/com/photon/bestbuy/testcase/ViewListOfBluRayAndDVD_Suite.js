#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"



function testSubcategoryBluRayAndDVDList(testname){
	
	try{
		target.logElementTree();
		for(i=0;i<2;i++)
		{
			clickOnButton(RIGHT_ARROW);
			
			}
		clickOnScreen(500,500);		
		
		for(i=0;i<2;i++)
		{
			clickOnButton(SUB_RIGHT_ARROW);
			
			}
		isButtonExist(BACK_BUTTON);
		clickOnButton(BACK_BUTTON);
		UIALogger.logPass("Pass");
		
		}	
		catch(exception)
	{		
			captureScreenshot(testname);
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);			 
			throw exception;					
		}
}




function testBluRayProductListPage(testname){
	
	try{
		clickOnScreen(500,500);
		clickOnScreen(500,500);
		commonFunctionalityToShowPLPofAllProducts();	
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
			captureScreenshot(testname);
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);			 
			throw exception;					
		}
}	





function testBluRayPLP_ToCompareOfProducts(testname){
	
	try{
		clickOnScreen(500,500);
		commonFunctionalityToCompareOfProducts();
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
			captureScreenshot(testname);
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);			 
			throw exception;					
		}
}



function  testBluRayDisplayPDP_Page(testname){
	
	try{
		clickOnScreen(500,500);
		commonFunctionalityForViwePDPPage();
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
			captureScreenshot(testname);
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);				 
			throw exception;					
		}
}



function  testBluRay_CheckPDP_PageProductDetails(testname){
	
	try{
		
		clickOnScreen(500,500);
		commonFunctionalityForPDPPageToggleMenu();
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);
			throw exception;					
		}
	
}

function testSearchProducts(testname){
	try{
		var productName="BlueRay";
		
		clickOnScreen(500,500);
		isButtonExist(NARROW_RESULT_MENU);
		searchForProduct(productName);
		clickOnButton(BACK_BUTTON);
		target.delay(2);
		clickOnButton(BACK_BUTTON);
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
		UIALogger.logError(exception);
		throw exception;					
		}
}


function testWeeklyDeals(testname){
	try{
		
		clickOnScreen(500,500);
		commonFunctionWeeklyDeals();
		waitForFewSeconds(1);
		clickOnButton(BACK_BUTTON);
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
		UIALogger.logError(exception);
		throw exception;					
		}
}

function testNarrowResults(testname){
	try{
		
		clickOnScreen(500,500);
		commonNarrowResults();
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
		UIALogger.logError(exception);
		throw exception;					
		}
}

function testStartOver(testname){
	try{
		
		clickOnScreen(500,500);
		clickOnButton(START_OVER);
			waitForFewSeconds(2);
		UIALogger.logPass("Pass");
		}
	catch(exception)
		{		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
		UIALogger.logError(exception);
		throw exception;					
		}
}






testSubcategoryBluRayAndDVDList("Sub_Category BluRayAndDVD_Test");
testBluRayProductListPage("Verify BluRay PLP_Test");
testBluRayDisplayPDP_Page("Display BluRay PDP_Page_Test");
testBluRay_CheckPDP_PageProductDetails("Verify BluRay PDP page product Details_Test");
testSearchProducts("Searching the BluRay Product from Search Field_Test");
testWeeklyDeals("BluRay Weekly Deals_Test");
testNarrowResults("BluRay Narrow Results_Test");
testBluRayPLP_ToCompareOfProducts(" BluRay AddToCompare_Test");
testStartOver("BluRay Verify Start Over_Test");



