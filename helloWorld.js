handlers.helloWorld = function (args)
{
  var message = "Hello " + args.name;
  log.info(message);
  return { messageValue: message };
}