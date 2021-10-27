const inquirer = require('inquirer')
const clipboardy = require('clipboardy');

inquirer
  .prompt([
    {
      name: "company",
      type: "input",
      message: "Enter Company Name?",
    },
    {
      name: "ticker",
      type: "input",
      message: "Enter Ticker?",
    },
  ])
  .then((answer) => {
    //console.log("Hello", answer.company, answer.ticker);
    var result=`${answer.ticker},
    ${answer.company},
    ${answer.ticker} stock, 
    ${answer.company} stock, 
    ${answer.ticker} stock analysis, 
    ${answer.company} stock analysis, 
    ${answer.ticker} stock review, 
    ${answer.company} stock review,
    ${answer.ticker} stock 2021, 
    ${answer.company} stock 2021, 
    ${answer.ticker} stock price prediction, 
    ${answer.company} stock price prediction,
    ${answer.ticker} stock forecast, 
    ${answer.company} stock forecast,
    buy ${answer.ticker}, 
    buy ${answer.company}, 
    buy ${answer.ticker} stock, 
    buy ${answer.company} stock, 
    ${answer.ticker} undervalued, 
    ${answer.company} undervalued, 
    should i buy ${answer.company} stock, 
    should i buy ${answer.ticker} stock,
    is ${answer.company} a good investment,
    is ${answer.ticker} a good investment,
    ${answer.company} fundamental analysis,`
    console.log(result)
    clipboardy.writeSync(result);
});
