
#import "../../../../../main/com/photon/bestbuy/util/MainActivity.js"
#import "../../../../../main/com/photon/bestbuy/util/UIElements.js"





function dragAndDropOfProductList(){

		target.dragFromToForDuration({x:400, y:400},{x:50,y:100},1.5);
		target.delay(2);
		
		target.dragFromToForDuration({x:400, y:400},{x:50,y:100},1.5);
		target.delay(2);
		
		target.dragFromToForDuration({x:400, y:400},{x:50,y:100},1.5);
		target.delay(2);
		
		target.dragFromToForDuration({x:400, y:400},{x:50,y:100},1.5);
		target.delay(2);
		
	
	}

/**
 
 	Here the function will show the PLP page for all the products and it will drag and drop the screen.
 */

function commonFunctionalityToShowPLPofAllProducts(){
	
	var functionName="commonFunctionalityToShowPLPofAllProducts";
	
	try{
		UIALogger.logMessage("------@function :"+ functionName);
		target.logElementTree();
		isButtonExist(NARROW_RESULT_MENU);
		target.delay(2);
		// This fucntion will drag the screen and shows the available products.
		dragAndDropOfProductList();		
		clickOnButton(BACK_BUTTON);
		waitForFewSeconds(2);
		
		
	}	
		catch(exception)
		{		
			UIALogger.logError(exception);
			UIALogger.logFail("------@function :"+ functionName);				 
			throw exception;
					
		}

}
/** 
	 Here the function will verify the compare of two products and it will show the product info of selected product after that it will close the screen. 
 */

function commonFunctionalityToCompareOfProducts(){	
	
	UIALogger.logMessage("---- @ commonFunctionalityToCompareOfProducts----");	
	isButtonExist(NARROW_RESULT_MENU);
	clickOnScreen(40,330);
	clickOnScreen(678,330);
	clickOnScreen(359,330);
	waitForFewSeconds(3);	
	clickOnButton(COMPARE_BUTTON);
	waitForFewSeconds(2);
	clickOnButton(COMPARE_CLOSE);
	waitForFewSeconds(2);
	commonFunctionalityForRemoveFromCompare();
	waitForFewSeconds(2);	
	
}
/**
 
 		This functionality will click on RemoveFromCompare button and will go back to main Screen.
 */
function commonFunctionalityForRemoveFromCompare(){
	//	It will click on Remove addtocompare buttons. 	 
	clickOnScreen(40,330);
	clickOnScreen(678,330);
	clickOnScreen(359,330);
	//	 Click on back arrow button 		
	clickOnButton(BACK_BUTTON);
}



function commonFunctionalityForViwePDPPage(){
	
	isButtonExist(NARROW_RESULT_MENU);
	
	//	It will click on PLP page product.	
	clickOnScreen(100,100);
	waitForFewSeconds(2);
	//	 Click on back arrow button 		
	isButtonExist(BACK_BUTTON);
	clickOnButton(BACK_BUTTON);
	isButtonExist(BACK_BUTTON);
	clickOnButton(BACK_BUTTON);
	
}



function commonFunctionalityForPDPPageToggleMenu(){
	
	isButtonExist(NARROW_RESULT_MENU);
	//	It will click on PLP page product. 	
	
	clickOnScreen(100,100);
	waitForFewSeconds(2);
	//	 Click on back arrow button 		
	isButtonExist(PDP_LEFT_TOGGLE_BTN);	
	
	clickOnButton(PDP_LEFT_TOGGLE_BTN);
	
	target.logElementTree();
	waitForFewSeconds(2);
	clickOnTableCell(PDP_RATING_REVIEWS);
	
	isButtonExist(PDP_LEFT_TOGGLE_BTN);	
	clickOnButton(PDP_LEFT_TOGGLE_BTN);
	
	waitForFewSeconds(3);
	clickOnTableCell(PDP_SPECS);
	
	isButtonExist(PDP_LEFT_TOGGLE_BTN);	
	clickOnButton(PDP_LEFT_TOGGLE_BTN);
	
	waitForFewSeconds(2);
	clickOnTableCell(PDP_RELATED_PRODUCT);
	
	isButtonExist(PDP_LEFT_TOGGLE_BTN);	
	clickOnButton(PDP_LEFT_TOGGLE_BTN);
	
	waitForFewSeconds(2);
	clickOnTableCell(PDP_SERVICE_INSTAL);
	
	
	isButtonExist(PDP_LEFT_TOGGLE_BTN);	
	clickOnButton(PDP_LEFT_TOGGLE_BTN);
	
	
	waitForFewSeconds(2);
	clickOnButton(BACK_BUTTON);
	waitForFewSeconds(2);
	clickOnButton(BACK_BUTTON);
	
	
}



/*
 
 This function will Click on the Weekly deals button and select the products in bro
 
 */

function commonFunctionWeeklyDeals(){
	clickOnButton(WEEKLY_DEALS);
	isTextPresent(WEEKLY_DEALS_TEXT);
	isButtonExist(CLOSE_WEEKLY_DEALS);
	waitForFewSeconds(30);
	clickOnButton(BROWSE_DEALS_BTN);
	clickOnTableCell(WEEKLY_DEALS_TABLECELL);
	//waitForFewSeconds(30);
	//clickOnScreen(500,500);
	//isButtonExist(PDP_ADD_COMP_BUTTON);
	//clickOnButton(PDP_ADD_COMP_BUTTON);
	waitForFewSeconds(2);
	clickOnButton(CLOSE_WEEKLY_DEALS);
	
}


function commonNarrowResults(){
	
		isButtonExist(NARROW_RESULT_MENU);
		clickOnButton(NARROW_RESULT_MENU);
		waitForFewSeconds(2);
		clickOnButton(NARROW_RESULT_MENU);
		clickOnButton(BACK_BUTTON);
		waitForFewSeconds(1);	
}




