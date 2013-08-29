#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"
#import "CommonTestcase.js"



function testSubcategoriProjectorAndScreenList(testname){
	
	try{
		target.logElementTree();
		clickOnScreen(500,500);
		
		for(i=0;i<1;i++)
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




function testProjectorAndScreenProductListPage(testname){
	
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





function testProjectorAndScreensPLP_ToCompareOfProducts(testname){
	
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



function testProjectorAndScreensDisplayPDP_Page(testname){
	
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



function testProjectorAndScreen_CheckPDP_PageProductDetails(testname){
	
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






testSubcategoriProjectorAndScreenList("Sub_CategoriProjectorAndScreenList_Test");
testProjectorAndScreenProductListPage("Verify Projector And ScreenList PLP_Test");
testProjectorAndScreensDisplayPDP_Page("Display Projector And ScreenList PDP_Page_Test");
testProjectorAndScreen_CheckPDP_PageProductDetails("Verify Projector And ScreenList PDP page product Details");
testSearchProducts(" --Searching the ProjectorAndScreenList Product from Search Field--");
testWeeklyDeals("ProjectorAndScreenList Weekly Deals_Test");
testNarrowResults("ProjectorAndScreenList Narrow Results_Test");
testProjectorAndScreensPLP_ToCompareOfProducts(" ProjectorAndScreenList AddToCompare_Test");
testStartOver(" ProjectorAndScreenList Verify Start Over_Test");



