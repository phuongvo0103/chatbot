const conversation = require('./conversation');

conversation("hello").then(function (data) { 
    console.log(data.conversation.input, data.conversation.output[0]);
 });

 conversation("what are you doing?").then(function (data) { 
    console.log(data.conversation.input, data.conversation.output[0]);
 });

 conversation("what you name?").then(function (data) { 
    console.log(data.conversation.input, data.conversation.output[0]);
 });
