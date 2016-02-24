handlers.helloWorld = function (args)
{
  var message = "Hello " + args.name;
  log.info(message);
  return { messageValue: message };
}

handlers.SetCoin = function (args)
{
  var result = server.AddUserVirtualCurrency({
    PlayFabId: args.id,
    VirtualCurrency: args.code,
	Amount: args.amount
  });

  return result;
}
handlers.userData = function (args)
{
  var result = server.GetUserAccountInfo({
    PlayFabId: args.pId
  });

  return result;
}
