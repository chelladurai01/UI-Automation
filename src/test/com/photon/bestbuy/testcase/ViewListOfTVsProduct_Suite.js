#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"



function testSubcategoryTVsList(testname){
	
	try{
		//target.logElementTree();
		clickOnScreen(500,500);		
		
		for(i=0;i<6;i++)
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




function testTVsProductListPage(testname){
	
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





function testTVsPLP_ToCompareOfProducts(testname){
	
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



function testTVsDisplayPDP_Page(testname){
	
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



function testTVs_CheckPDP_PageProductDetails(testname){
	
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
		var productName="TV";
		
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






testSubcategoryTVsList("Sub_CategoryTVsList_Test");
testTVsProductListPage("Verify PLP_Test");
testTVsDisplayPDP_Page("DisplayPDP_Page_Test");
testTVs_CheckPDP_PageProductDetails("Verify PDP page product Details_Test");
testSearchProducts("Searching the TV Product from Search Field_Test");
testWeeklyDeals("Weekly Deals_Test");
testNarrowResults("Narrow Results_Test");
testTVsPLP_ToCompareOfProducts("AddToCompare_Test");
testStartOver("Verify Start Over_Test");



