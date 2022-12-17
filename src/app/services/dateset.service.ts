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

  generateRandom() {
    return Math.floor(Math.random() * 5) + 0;
  }

  giveAnswer(inputString: String) {
    if (inputString.toLowerCase().includes('your name')) {
      return 'Call Me CoffeeBot';
    } else if (inputString.toLowerCase().includes('what you can do')) {
      return 'With my service you can order easily.';
    } else if (
      inputString
        .toLowerCase()
        .includes('i will take 1 espresso and 5 americano')
    ) {
      return 'Thanks for your order. You have ordered 1 espresso and 5 americano. Please wait for sometime. Your total is 13$';
    } else if (inputString.toLowerCase().includes('anything special')) {
      return 'We have coffe, pastries, puff pastries and milkshakes. What would you like to have?';
    } else if (inputString.toLowerCase().includes('suggest something')) {
      return 'We have coffe,pastries,puff pastries and milkshakes. What would you like to have?';
    } else if (inputString.toLowerCase().includes('do you have coffee')) {
      return 'What kind of coffee do you want?';
    } else if (
      inputString.toLowerCase().includes('i would like to order one latte')
    ) {
      return 'Thanks for your order. You have ordered 1 latte. Please wait for sometime. Your total is 5$';
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
    } else if (inputString.toLowerCase().includes('how much is americano')) {
      return 'One large Latte is 4$, medium is 3$ and small is 2$.';
    } else if (inputString.toLowerCase().includes('how much is espresso')) {
      return 'One shot 2$ and two shot 3,52$';
    } else if (inputString.toLowerCase().includes('how much is cappuccino')) {
      return 'One large Latte is 5$, medium is 4$ and small is 2$.';
    } else if (inputString.toLowerCase().includes('one large latte please')) {
      return 'Great choice, your total is 5$';
    } else if (inputString.toLowerCase().includes('one medium latte please')) {
      return 'Great choice, your total is 4$';
    } else if (inputString.toLowerCase().includes('one small latte plase')) {
      return 'Great choice, your total is 3$';
    } else if (
      inputString.toLowerCase().includes('one large filter coffee please')
    ) {
      return 'Great choice, your total is 3$';
    } else if (
      inputString.toLowerCase().includes('one medium filter coffee please')
    ) {
      return 'Great choice, your total is 2$';
    } else if (
      inputString.toLowerCase().includes('one small filter coffee plase')
    ) {
      return 'Great choice, your total is 1$';
    } else if (
      inputString.toLowerCase().includes('one large americano please')
    ) {
      return 'Great choice, your total is 4$';
    } else if (
      inputString.toLowerCase().includes('one medium americano please')
    ) {
      return 'Great choice, your total is 3$';
    } else if (
      inputString.toLowerCase().includes('one small americano please')
    ) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('one shot espresso please')) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('two shot espresso please')) {
      return 'Great choice, your total is 3,52$';
    } else if (
      inputString.toLowerCase().includes('one large cappuccino please')
    ) {
      return 'Great choice, your total is 5$';
    } else if (
      inputString.toLowerCase().includes('one medium cappuccino please')
    ) {
      return 'Great choice, your total is 4$';
    } else if (
      inputString.toLowerCase().includes('one small cappuccino please')
    ) {
      return 'Great choice, your total is 2$';
    } else if (inputString.toLowerCase().includes('i want coffee')) {
      return 'What kind of coffee do you want?';
    } else if (inputString.toLowerCase().includes('hi')) {
      return this.randomStuff[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('hello')) {
      return this.randomStuff[this.generateRandom()];
    } else if (inputString.toLowerCase().includes('hey')) {
      return this.randomStuff[this.generateRandom()];
    } else {
      return 'I do not understand you.';
    }
  }
}
