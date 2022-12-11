import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Chatbox } from './chatbox';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    "../../node_modules/font-awesome/css/font-awesome.css"
  ]
})
export class AppComponent implements OnInit {
  TextMsg: FormGroup | undefined;
  chatModal = new Chatbox("Say hi");
  sendButton: boolean;
  bottext: string | undefined;
  randomStuff: Array<string> = ["Hello Nice to here you", "Hey Whatsupp", "How can I help you", "Hello! How may I help you."];
  @ViewChild('chatlogs', { read: ElementRef, static: false }) divMsgs: ElementRef | undefined;
  @ViewChild('chatlogs', { read: ElementRef, static: false }) botMsgs: ElementRef | undefined;

  title = 'Hilal İlke Karakaş Final Project';
  subject = "ChatBot";
  coordinator = "DR. ÖĞR. ÜYESİ Yılmaz AR"

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {
    this.sendButton = true
  }
  ngOnInit() {
    $("#close").hover(
      function () {
        $("#chatdone").show();
      },
      () => {
        $("#chatdone").hide();
      }
    );
  }


  Empty() {
    if (this.chatModal.inputQuery != null) {
      this.sendButton = true
    }
    if (this.chatModal.inputQuery == null) {
      this.sendButton = false
    }
  }

  onSubmit() {
    this.sendButton = false
    if (this.chatModal.inputQuery == "") {
      return false
    } else {
      //#region user message
      const divMain = this.renderer.createElement('div');
      const divSub = this.renderer.createElement('div');
      const text = this.renderer.createText(this.chatModal.inputQuery);
      this.renderer.appendChild(divSub, text);
      this.renderer.addClass(divSub, "UserMsg");
      this.renderer.appendChild(divMain, divSub);
      this.renderer.addClass(divMain, "d-flex");
      this.renderer.addClass(divMain, "flex-row-reverse");
      this.renderer.appendChild(this.divMsgs?.nativeElement, divMain);
      //#endregion user message

      //#region bot msg
      let random = Math.floor(Math.random() * 5) + 0
      const botMain = this.renderer.createElement('div');
      const botimg = this.renderer.createElement('div');
      this.renderer.addClass(botimg, "botimg");
      const botSub = this.renderer.createElement('div');
      //#endregion bot msg

      //#region DataSet

      if (this.chatModal.inputQuery.toLowerCase().includes("your name")) {
        this.bottext = this.renderer.createText("Call Me CoffeeBot");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("what you can do")) {
        this.bottext = this.renderer.createText("With my service you can order easily.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("i will take 1 espresso and 5 americano")) {
        this.bottext = this.renderer.createText("Thanks for your order. You have ordered 1 espresso and 5 americano. Please wait for sometime. Your total is 13$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("anything special")) {
        this.bottext = this.renderer.createText("We have coffe, pastries, puff pastries and milkshakes. What would you like to have?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("suggest something")) {
        this.bottext = this.renderer.createText("We have coffe,pastries,puff pastries and milkshakes. What would you like to have?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have coffee")) {
        this.bottext = this.renderer.createText("What kind of coffee do you want?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("i would like to order one latte")) {
        this.bottext = this.renderer.createText("Thanks for your order. You have ordered 1 latte. Please wait for sometime. Your total is 5$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have lactose free milk?")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have filter coffee")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have latte")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have americano")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have espresso")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have cappuccino")) {
        this.bottext = this.renderer.createText("Yes we have.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("do you have chai latte")) {
        this.bottext = this.renderer.createText("No, we don't unfortunately.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("what do you have")) {
        this.bottext = this.renderer.createText("We have coffe, pastries, puff pastries and milkshakes. What would you like to have?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("which coffee do you have")) {
        this.bottext = this.renderer.createText("We have filter coffee, latte, americano, espresso and cappuccino. What would you like to have?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("how much is latte",)) {
        this.bottext = this.renderer.createText("One large Latte is 5$, medium is 4$ and small is 3$.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("how much is filter coffee")) {
        this.bottext = this.renderer.createText("One large Latte is 3$, medium is 2$ and small is 1$.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("how much is americano")) {
        this.bottext = this.renderer.createText("One large Latte is 4$, medium is 3$ and small is 2$.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("how much is espresso")) {
        this.bottext = this.renderer.createText("One shot 2$ and two shot 3,52$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("how much is cappuccino")) {
        this.bottext = this.renderer.createText("One large Latte is 5$, medium is 4$ and small is 2$.");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one large latte please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 5$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one medium latte please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 4$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one small latte plase")) {
        this.bottext = this.renderer.createText("Great choice, your total is 3$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one large filter coffee please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 3$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one medium filter coffee please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 2$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one small filter coffee plase")) {
        this.bottext = this.renderer.createText("Great choice, your total is 1$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one large americano please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 4$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one medium americano please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 3$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one small americano plase")) {
        this.bottext = this.renderer.createText("Great choice, your total is 2$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one shot espresso please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 2$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("two shot espresso please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 3,52$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one large cappuccino please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 5$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one medium cappuccino please")) {
        this.bottext = this.renderer.createText("Great choice, your total is 4$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("one small cappuccino plase")) {
        this.bottext = this.renderer.createText("Great choice, your total is 2$");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("i want coffee")) {
        this.bottext = this.renderer.createText("What kind of coffee do you want?");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("hi")) {
        this.bottext = this.renderer.createText(this.randomStuff[random]);

        this.bottext = this.renderer.createText("I don't understand you.");
      }

      //#endregion DataSet

      //#region Our input chat
      if (this.bottext != null)
        this.renderer.appendChild(botSub, botimg);
      this.renderer.appendChild(botSub, this.bottext);
      this.renderer.addClass(botSub, "botMsg");
      this.renderer.appendChild(botMain, botSub);
      this.renderer.addClass(botMain, "d-flex");
      this.renderer.appendChild(this.divMsgs?.nativeElement, botMain);

      var out = document.getElementById("chatlogs");
      var isScrolledToBottom = out != null ? out.scrollHeight - out.clientHeight <= out.scrollTop + 1 : null;
      if (!isScrolledToBottom)
        if (out != null) {
          out.scrollTop = out.scrollHeight - out.clientHeight;
        }

      //Audio click
      let audio = new Audio();
      audio.src = "../../../assets/audio/tick.mp3";
      audio.load();
      audio.play();
      this.chatModal.inputQuery = "" //Reseting to empty for next query
      return true;
      //#endregion Our input chat
    }
  }


}
