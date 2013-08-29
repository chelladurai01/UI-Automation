#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"



function testSubcategoryAccessoriesList(testname){
	
	try{
		//target.logElementTree();
		for(i=0;i<5;i++)
		{
			clickOnButton(RIGHT_ARROW);
			
			}
		clickOnScreen(500,500);		
		
		for(i=0;i<5;i++)
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




function testCablesProductListPage(testname){
	
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





function testCablesPLP_ToCompareOfProducts(testname){
	
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



function  testCablesDisplayPDP_Page(testname){
	
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



function  testCables_CheckPDP_PageProductDetails(testname){
	
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
		var productName="cables";
		
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






testSubcategoryAccessoriesList("Sub_Category Accessories_Test");
testCablesProductListPage("Verify Cables PLP_Test");
testCablesDisplayPDP_Page("Display Cables PDP_Page_Test");
testCables_CheckPDP_PageProductDetails("Verify Cables PDP page product Details_Test");
testSearchProducts("Searching the Cables Product from Search Field_Test");
testWeeklyDeals("Cables Weekly Deals_Test");
testNarrowResults("Cables Narrow Results_Test");
testBluRayPLP_ToCompareOfProducts(" Cables AddToCompare_Test");
testStartOver("Cables Verify Start Over_Test");



