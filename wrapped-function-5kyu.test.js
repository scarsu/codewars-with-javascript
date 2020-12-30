test('wrapped function', () => {
  Function.prototype.wrap = require('./wrapped-function-5kyu')
  function speak(name){
    return "Hello " + name;
  }
  
  speak = speak.wrap(function(original, yourName, myName){
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
  })
  
  var greeting = speak("Mary", "Kate");

  expect(greeting).toBe('Hello Mary, my name is Kate');
});