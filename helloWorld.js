handlers.helloWorld = function (args)
{
  var message = "Hello " + args.name;
  log.info(message);
  return { messageValue: message };
}

handlers.userData = function (args)
{
  var result = server.GetUserAccountInfo({
    PlayFabId: args.pId
  });

  return result;
}
