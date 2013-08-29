#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"



function testSubcategorySmartTvAndDevicesList(testname){
	
	try{
		//target.logElementTree();
		for(i=0;i<3;i++)
		{
			clickOnButton(RIGHT_ARROW);
			
			}
		clickOnScreen(500,500);		
		
		for(i=0;i<3;i++)
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




function testSmartTvProductListPage(testname){
	
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





function testSmartTvPLP_ToCompareOfProducts(testname){
	
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



function  testSmartTvDisplayPDP_Page(testname){
	
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



function  testSmartTv_CheckPDP_PageProductDetails(testname){
	
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
		var productName="SmartTv";
		
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






testSubcategorySmartTvAndDevicesList("Sub_Category SmartTvAndDevices_Test");
testSmartTvProductListPage("Verify SmartTv PLP_Test");
testSmartTvDisplayPDP_Page("Display SmartTv PDP_Page_Test");
testSmartTv_CheckPDP_PageProductDetails("Verify SmartTv PDP page product Details_Test");
testSearchProducts("Searching the SmartTv Product from Search Field_Test");
testWeeklyDeals("SmartTv Weekly Deals_Test");
testNarrowResults("SmartTv Narrow Results_Test");
testBluRayPLP_ToCompareOfProducts(" SmartTv AddToCompare_Test");
testStartOver("SmartTv Verify Start Over_Test");



