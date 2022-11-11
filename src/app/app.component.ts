import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import { Chatbox } from './chatbox';
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
declare var jquery: any;
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
  randomStuff: Array<string> = ["Hello Nice to here you", "Hey Whatsupp", "How can I help you", "I am your assitant", "I am unable to get"];
  @ViewChild('chatlogs', { read: ElementRef, static: false }) divMsgs: ElementRef | undefined;
  @ViewChild('chatlogs', { read: ElementRef, static: false }) botMsgs: ElementRef | undefined;

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
        console.log('asdsa', this.divMsgs)
        console.log('asdsa', this.botMsgs)
      }
    );
  }

  title = 'ChatBotApp';
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
      //User Msgs
      const divMain = this.renderer.createElement('div');
      const divSub = this.renderer.createElement('div');
      const text = this.renderer.createText(this.chatModal.inputQuery);
      this.renderer.appendChild(divSub, text);
      this.renderer.addClass(divSub, "UserMsg");
      this.renderer.appendChild(divMain, divSub);
      this.renderer.addClass(divMain, "d-flex");
      this.renderer.addClass(divMain, "flex-row-reverse");
      this.renderer.appendChild(this.divMsgs?.nativeElement, divMain);

      //Bot Msgs
      let random = Math.floor(Math.random() * 5) + 0
      const botMain = this.renderer.createElement('div');
      const botimg = this.renderer.createElement('div');
      this.renderer.addClass(botimg, "botimg");
      const botSub = this.renderer.createElement('div');
      if (this.chatModal.inputQuery.toLowerCase().includes("your name")) {
        this.bottext = this.renderer.createText("Call Me Edith");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("what you can do")) {
        this.bottext = this.renderer.createText("I have access to all tony stark devices");
      } else if (this.chatModal.inputQuery.toLowerCase().includes("great")) {
        this.bottext = this.renderer.createText("I know I was made by tony stark:)");
      }
      else if (this.chatModal.inputQuery.toLowerCase().includes("hi")) {
        this.bottext = this.renderer.createText(this.randomStuff[random]);
      } else {
        this.bottext = this.renderer.createText("I don't understand you.");
      }
      //Our input chat
      if(this.bottext != null)
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
    }
  }


}
