handlers.helloWorld = function (args)
{
	var message = "Hello " + args.name;
		log.info(message);
	return { messageValue: message };
}

handlers.SetCoin = function (args)
{
	var result = server.AddUserVirtualCurrency({
		PlayFabId: currentPlayerId,
		VirtualCurrency: args.code,
		Amount: args.amount
	});
	
	var dataKey = "COIN_KEY";
	var dataValue = args.curCoin;
	
	var updateUserDataResult = server.UpdateUserData({
		PlayFabId: currentPlayerId,
		Data: {
			dataKey: dataValue
		},
		Permission: true
	});

	return result;
}
