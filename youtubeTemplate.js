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
    var result=`${answer.ticker}, ${answer.company},${answer.ticker} stock, ${answer.company} stock, ${answer.ticker} stock analysis, ${answer.company} stock analysis, ${answer.ticker} stock 2021, ${answer.company} stock 2021, buy ${answer.ticker}, buy ${answer.company}, buy ${answer.ticker} stock, buy ${answer.company} stock, ${answer.ticker} overvalued, ${answer.ticker} undervalued, ${answer.company} overvalued, ${answer.company} undervalued, stock analysis, stock market analysis, stock market, investing, financial statement analysis, balance sheet, income statement, stocks to buy now, fundamental analysis, should i buy ${answer.company} stock, should i buy ${answer.ticker} stock`
    console.log(result)
    clipboardy.writeSync(result);
});
