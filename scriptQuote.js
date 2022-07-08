
var button = document.querySelector("#btn");



button.addEventListener("click", quoteGenerator);


function quoteGenerator() {

const randomNumber = Math.floor(Math.random() * 14);

var quote="";

switch(randomNumber) {
  case 0 : quote = "What you get by achieving your goals is not as important as what you become by achieving your goals.-Henry David Thoreau";
  break;
  case 1 : quote = "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.-Jimmy Dean";
  break;
  case 2:  quote = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
  break;
  case 3: quote = "Sometimes you will never know the value of a moment, until it becomes a memory. -Dr. Seuss";
  break;
  case 4 : quote = "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs";
  break;
  case 5 : quote = "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela";
  break;
  case 6:  quote = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey";
  break;
  case 7: quote = "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson";
  break;
  case 8: quote = "It is during our darkest moments that we must focus to see the light. -Aristotle";
  break;
  case 9: quote = "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson";
  break;
  case 10: quote = "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison";
  break;
  case 11: quote = "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost";
  break;
  case 12: quote = "We know what we are, but know not what we may be. -William Shakespeare"
  break;
  case 13: quote = "Doubt kills more dreams than failure ever will. -Suzy Kassem";
  break;
  case 14: quote = "It always seems impossible until its done. -Nelson Mandela";
  break;
  }

  var display = document.querySelector("h2");
  display.innerHTML = quote;
  
}





