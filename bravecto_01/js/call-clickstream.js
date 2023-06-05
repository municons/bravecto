//Create a function to trigger Call Clickstream
function myClickstream(id, description, usageDuration, usageDurationSeconds, type){
    console.log(id + " - " + description + " -  " + usageDuration + " - " + usageDurationSeconds + "sec. - " + type);

	//Create a variable to hold your Call Clickstream values
	var myObject = {};
	
	myObject.Track_Element_Id_vod__c = id;
	myObject.Track_Element_Description_vod__c = description;
	myObject.Usage_Duration_vod__c = usageDurationSeconds;
	//myObject.Answer_vod__c = usageDuration;
	myObject.Usage_Start_Time_vod__c = new Date();
	myObject.Track_Element_Type_vod__c = type;
	
	//Create a new Call Clickstream record in the CRM and assign the contents of your variable to it
	com.veeva.clm.createRecord("Call_Clickstream_vod__c", myObject, printSavedResults);
}

//Print the result to an alert to test your Call Clickstream
function printSavedResults(result) {
	//alert(JSON.stringify(result));
}