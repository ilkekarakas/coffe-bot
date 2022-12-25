import { Injectable } from '@angular/core';

@Injectable()
export class DatasetService {
  constructor() {}

  randomStuff: Array<string> = [
    'Hello Nice to here you',
    'Hey Whatsupp',
    'How can I help you',
    'Hey',
    'Hello',
    'Hello! How may I help you.',
  ];

  randomStuffGoodBye: Array<string> = [
    'See, you',
    'GoodBye',
    'Bye',
    'Have a great day',
    'I hope,we will see you again',
  ];
  menuItems: Array<string> = [
    'espresso',
    'cappuccino',
    'latte',
    'americano',
    'filter coffee',
    'tiramisu',
    'cheescake',
  ];
  menuDontHave: Array<string> = [
    'Not on the menu. :((',
    'Not on the menu. :((',
    'Unfortunately not left. :(',
    'Unfortunately not left. :(',
    'Not available. :((((',
    'Not available. :((((',
  ];

  generateRandom() {
    return Math.floor(Math.random() * 5) + 0;
  }

  giveAnswer(inputString: String) {
    if (inputString.toLowerCase().includes('your name')) {
      return "Call Me İlke's CoffeeBot";
    } else if (inputString.toLowerCase().includes('who are you')) {
      return "Call Me İlke's CoffeeBot";
    }
    if (inputString.toLowerCase().includes('do you have')) {
      var selectedCoffeItem = inputString.split('do you have ')[1];
      if (this.menuItems.find((x) => x == selectedCoffeItem)) {
        var findIt = selectedCoffeItem + ' is in our menu';
        return findIt;
      } else {
        var cannotFindIt =
          selectedCoffeItem + ' ' + this.menuDontHave[this.generateRandom()];
        return cannotFindIt;
      }
    } else if (
      inputString.toLowerCase().includes('what do yo have on your menu?')
    ) {
      var menu = '';
      this.menuItems.forEach((element) => {
        menu += element + ', ';
      });
      return menu;
    } else if (inputString.toLowerCase().includes('what can you do')) {
      return 'With my service you can order easily.';
    } else if (
      inputString
        .toLowerCase()
        .includes('i will take 1 espresso and 5 americano')
    ) {
      return 'Thanks for your order. You have ordered 1 espresso and 5 americano.  wait for sometime. Your total is 13$';
    } else if (inputString.toLowerCase().includes('anything special')) {
      return 'We have coffe, pastries, puff pastries and milkshakes. What would you like to have?';
    } else if (inputString.toLowerCase().includes('suggest something')) {
      return 'We have coffe,pastries,puff pastries and milkshakes. What would you like to have?';
    } else if (inputString.toLowerCase().includes('do you have coffee')) {
      return 'What kind of coffee do you want?';
    } else if (
      inputString.toLowerCase().includes('i would like to order one latte')
    ) {
      return 'Thanks for your order. You have ordered 1 latte. wait for sometime. Your total is 5$';
    } else if (
      inputString.toLowerCase().includes('do you have lactose free milk?')
    ) {
      return 'Yes we have.';
    } else if (
      inputString.toLowerCase().includes('do you have filter coffee')
    ) {
      return 'Yes we have.';
    } else if (inputString.toLowerCase().includes('do you have latte')) {
      return 'Yes we have.';
    } else if (inputString.toLowerCase().includes('do you have americano')) {
      return 'Yes we have.';
    } else if (inputString.toLowerCase().includes('do you have espresso')) {
      return 'Yes we have.';
    } else if (inputString.toLowerCase().includes('do you have cappuccino')) {
      return 'Yes we have.';
    } else if (inputString.toLowerCase().includes('do you have chai latte')) {
      return 'No, we do not unfortunately.';
    } else if (inputString.toLowerCase().includes('what do you have')) {
      return 'We have coffe, pastries, puff pastries and milkshakes. What would you like to have?';
    } else if (inputString.toLowerCase().includes('which coffee do you have')) {
      return 'We have filter coffee, latte, americano, espresso and cappuccino. What would you like to have?';
    } else if (inputString.toLowerCase().includes('how much is latte')) {
      return 'One large Latte is 5$, medium is 4$ and small is 3$.';
    } else if (
      inputString.toLowerCase().includes('how much is filter coffee')
    ) {
      return 'One large Latte is 3$, medium is 2$ and small is 1$.';
    } else if (inputString.toLowerCase().includes('one big latte')) {
      return 'Great choice, your total is 5$';
    } else if (inputString.toLowerCase().includes('one big americano')) {
      return 'Great choice, your total is 4$';
    } else if (inputString.toLowerCase().includes('one big cappuccino')) {
      return 'Great choice, your total is 5$';
    } else if (inputString.toLowerCase().includes('how much is americano')) {
      return 'One large Latte is 4$, medium is 3$ and small is 2$.';
    } else if (inputString.toLowerCase().includes('how much is espresso')) {
      return 'One shot 2$ and two shot 3,52$';
    } else if (inputString.toLowerCase().includes('how much is cappuccino')) {
      return 'One large Latte is 5$, medium is 4$ and small is 2$.';
    } else if (inputString.toLowerCase().includes('one large latte')) {
      return 'Great choice, your total is 5$';
    } else if (inputString.toLowerCase().includes('one medium latte')) {
      return 'Great choice, your total is 4$';
    } else if (inputString.toLowerCase().includes('one small latte')) {
      return 'Great choice, your total is 3$';
    } else if (inputString.toLowerCase().includes('one large filter coffee')) {
      return 'Great choice, your total is 3$';
    } else if (inputString.toLowerCase().includes('one medium filter coffee')) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('one small filter coffee')) {
      return 'Great choice, your total is 1$';
    } else if (inputString.toLowerCase().includes('one large americano')) {
      return 'Great choice, your total is 4$';
    } else if (inputString.toLowerCase().includes('one medium americano')) {
      return 'Great choice, your total is 3$';
    } else if (inputString.toLowerCase().includes('one small americano ')) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('one shot espresso')) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('two shot espresso')) {
      return 'Great choice, your total is 3,52$';
    } else if (inputString.toLowerCase().includes('one large cappuccino')) {
      return 'Great choice, your total is 5$';
    } else if (inputString.toLowerCase().includes('one medium cappuccino')) {
      return 'Great choice, your total is 4$';
    } else if (inputString.toLowerCase().includes('one small cappuccino')) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('i want coffee')) {
      return 'What kind of coffee do you want?';
    } else if (inputString.toLowerCase().includes('how are you')) {
      return 'I am good thanks for asking.How can I help you?';
    } else if (inputString.toLowerCase().includes('can i get coffee')) {
      return 'Of cource.What kind of coffee do you want?';
    } else if (inputString.toLowerCase().includes('good thanks you?')) {
      return 'I am good thanks for asking.How can I help you?';
    } else if (inputString.toLowerCase().includes('can i see your latte')) {
      return 'Of course';
    } else if (
      inputString.toLowerCase().includes('can i see your filter coffee')
    ) {
      return 'Of course';
    } else if (
      inputString.toLowerCase().includes('can i see your cappuccino')
    ) {
      return 'Of course';
    } else if (inputString.toLowerCase().includes('can i see your americano')) {
      return 'Of course';
    } else if (inputString.toLowerCase().includes('can i see your espresso')) {
      return 'Of course';
    } else if (inputString.toLowerCase().includes('hi')) {
      return this.randomStuff[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('hello')) {
      return this.randomStuff[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('bye')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('bb')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('goodbye')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('thanks,bye')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('see you')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('thank, bb')) {
      return this.randomStuffGoodBye[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('hey')) {
      return this.randomStuff[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('latte')) {
      return 'I see that you want latte. Which size ?';
    } else if (inputString.toLowerCase().includes('americano')) {
      return 'I see that you want americano. Which size?';
    } else if (inputString.toLowerCase().includes('cappuccino')) {
      return 'I see that you want cappuccino. Which size?';
    } else if (inputString.toLowerCase().includes('espresso')) {
      return 'I see that you want espresso. Which size?';
    } else {
      return 'I do not understand you.';
    }
  }
}
