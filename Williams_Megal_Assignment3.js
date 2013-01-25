
//	Megal Williams
//	01/24/2013
//	Project 3
//	mercinary mission 


alert("JavaScript works!")

var say = function (message){
	console.log(message);
};

var budget = 200000,
	bunker = 5000,
	getBunker = false,
	doDocument = false;

say("I have received confirmation for a new target that needs to be eliminated.");
say("Now I have to mix and master the record.");
say("Then I will need to get the documents together for the client.");
say("Finally, I need to decide whether I want to do the covert operations myself or have someone else to do it.");
say("First step is to identify the subject. My total mission budget was $" + budget+ ".");
say("I am waiting to receive feedback from the mercenaries");
say("Now I have to pay the guys who do the job with me:");
say("I negotiated individual rations for each man, some troops demand a larger portion because they have higher skillsets than others.")

var payInvoice = function (name, invoice, message) {
	var balance = budget - invoice
	console.log("I paid " + name + " $" + invoice + " because " + message + ". I now have $" + balance + " left." );
}; 

payInvoice("Haajar", 15000, "he is mysterious and silent. But he is deadly");
payInvoice("Megal",  20000, "he has a pretty extravagant resume");
payInvoice("Sevyn", 10000, "he is new to the squad but does an great job");
payInvoice("Emmanuel", 25000, "he has several very high recommendations and is guaranteed to get the job done");

say("Now I must prepare the documents. I can do this, but I need to secure a bunker for my guys.");
say("I figure that I can have the affairs ready in 4 hours, and needs to be done stat.");
say("So I need to find a bunker for operations; today.");
say("I have a different place in mind for this. It is one that is near the target and I have seen really good vantage points out of there.");



if (getBunker === true){
	say("I called my informant and he has secured the bunker");
}else{
	console.log("I couldn't get the bunker we wanted, so I have to a plan for places to meet.")
	var bunker = ["Cover", "Concealment", "Vantage"];
  bunkeravail = ["not available", "available", "available"];
for (var i=0, a=bunker.length; i<a ; i++ ){
	console.log("I surveyed " +bunker[i]+ " and they are heavily guarded " +bunkeravail[i]+ " in that time frame")
};

};

say("Now I am preparing all loose ends. I have to get this job done quickly because I only have 4 days in the contract.")
say("I have a total of 9 different targets. Each varying in difficulty. So we need to tackle them one by one.")

var targetNamesByCode = ["Dracula", "Killer Bee", "Bart", "Sadman", "Barbarian", "Mr Black", "Mr White", "Lady Killer"], 
	wholeAmountPerCode = [60, 20, 15, 20, 15, 15, 15, 35];
var killOneTarget = function(codeName, amountThisTarget) {

	console.log("Starting to eliminate " + codeName + " for " + amountThisTarget + " credits");
	for (var credits = 0; credits < amountThisTarget; credits += 5) {
		var targetsRemain = amountThisTarget - credits;
		console.log(credits + " done, " + targetsRemain + " to go!");

	};
	console.log("I have taken care of" + codeName + ".");
};
var killAllTargets = function(codeNames, amountPerCode){
	for (var codeNumber = 0; codeNumber < codeNames.length; codeNumber++) {
		var codeName = codeNames[codeNumber],
		amountThisTarget = amountPerCode[codeNumber];
	killOneTarget(codeName, amountThisTarget);
	};


};
killAllTargets(targetNamesByCode, wholeAmountPerCode);
say("I will send this off to be signed tonight. This will take another day to complete.");
say("While that's being done, I must get the documents together to put in the covert portfolio and decide if I even want to do the risky job.");
if (doDocument === false){
	say("I'm exhausted. After all this work, I can spend the money to vacation on a private island. It's how I live my life");
}else{
	say("I am feeling kinda cheap. If I go ahead and do the covert mission, I can still keep this money. I'll sleep when I die")
};

say("Now to ensure confidentiality between me and my clients.");
say("Because I am dealing with professionals, In addition to their name and weapons they use, I must continue to give them the work they love.");

var handleData = function (json) {
	for (var i = 0; i < json.mercinaries.length; i++){
	var mercinary = json.mercinaries[i];
	console.log("Weapon: " + mercinary.weapon + ", Name: " + mercinary.name + ", Skills: " + mercinary.skills + ".")
	};
};

jQuery.parseJSON
say("Everything is ready, lets get in get out and get paid.");