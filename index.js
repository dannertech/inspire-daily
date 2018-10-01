"use strict";

var Alexa = require("alexa-sdk");

var quotes = [
    {
        author: "Nora Ephron",
        quote: "Above all, be the heroine of your life, not the victim."
    },
     {
        author: "Everyone has talent. What's rare is the courage to follow it to the dark places where it leads",
        quote: "Erica Jong"
    },
     {
        author: "C. Joybell C",
        quote: "Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it."
    },
     {
        author: "Anais Nin",
        quote: "Life shrinks or expands in proportion to one's courage."
    },
     {
        author: "Maya Angelou",
        quote: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently"
    },
     {
        author: "Coco Chanel",
        quote: "The most courageous act is still to think for yourself. Aloud."
    },
     {
        author: "Winston Churchill",
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
     {
        author: "John A. Shedd",
        quote: "A ship is safe in harbor, but that's not what ships are for."
    },
    {
        author: "E. E. Cummings",
        quote: "It  takes courage to grow up and become who you really are."
    },
    {
        author: "Emma Donnaghue",
        quote: "Scared is what you're feeling. Brave is what you're doing."
    },
    {
        author: "John A. Shedd",
        quote: "A ship is safe in harbor, but that's not what ships are for."
    }
];

var randomQuoteLength = quotes.length;
 var handlers = {
     "LaunchRequest":function(){
         this.emit(":tell","Welcome to Daily Inspirations");
     },
     "GenerateQuote":function(){
         var randomQuoteIndex = Math.floor(Math.random * randomQuoteLength);
         var quote = quotes[randomQuoteIndex];
         this.response.speak(quote.author + " by " + "quote.quote");
         this.emit(":responseReady");
     }
     
 };
exports.handler = function(event, context, callback) {
21
    // Create an instance of the Alexa library and pass it the requested command.
22
    var alexa = Alexa.handler(event, context);
    
23

24
    // Give our Alexa instance instructions for handling commands and execute the request.
25
    alexa.registerHandlers(handlers);
26
    alexa.execute();
27
};
