import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Chatbox } from './chatbox';
import { DatasetService } from './services/dateset.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/font-awesome/css/font-awesome.css',
  ],
})
export class AppComponent implements OnInit {
  TextMsg: FormGroup | undefined;
  chatModal = new Chatbox('hi');
  sendButton: boolean;
  bottext: string | undefined;
  bottext2: string | undefined;

  @ViewChild('chatlogs', { read: ElementRef, static: false }) divMsgs:
    | ElementRef
    | undefined;
  @ViewChild('chatlogs', { read: ElementRef, static: false }) botMsgs:
    | ElementRef
    | undefined;

  title = 'Hilal İlke Karakaş Final Project';
  subject = "İlke's ChatBot";
  coordinator = 'DR. ÖĞR. ÜYESİ Yılmaz AR';

  constructor(
    private renderer: Renderer2,
    private dateSetService: DatasetService
  ) {
    this.sendButton = true;
  }
  ngOnInit() {
    $('#close').hover(
      function () {
        $('#chatdone').show();
      },
      () => {
        $('#chatdone').hide();
      }
    );
  }

  Empty() {
    if (this.chatModal.inputQuery != null) {
      this.sendButton = true;
    }
    if (this.chatModal.inputQuery == null) {
      this.sendButton = false;
    }
  }

  onSubmit() {
    this.sendButton = false;
    if (this.chatModal.inputQuery == '') {
      return false;
    } else {
      //#region user message
      const divMain = this.renderer.createElement('div');
      const divSub = this.renderer.createElement('div');
      const text = this.renderer.createText(this.chatModal.inputQuery);
      this.renderer.appendChild(divSub, text);
      this.renderer.addClass(divSub, 'UserMsg');
      this.renderer.appendChild(divMain, divSub);
      this.renderer.addClass(divMain, 'd-flex');
      this.renderer.addClass(divMain, 'flex-row-reverse');
      this.renderer.appendChild(this.divMsgs?.nativeElement, divMain);
      //#endregion user message

      //#region bot msg
      const botMain = this.renderer.createElement('div');
      const botimg = this.renderer.createElement('div');
      this.renderer.addClass(botimg, 'botimg');
      const botSub = this.renderer.createElement('div');

      const botImageMain = this.renderer.createElement('div');
      const botImageimg = this.renderer.createElement('div');
      if (
        this.chatModal.inputQuery.toLowerCase().includes('can i see your latte')
      ) {
        this.renderer.addClass(botImageimg, 'latteImg');
      } else if (
        this.chatModal.inputQuery
          .toLowerCase()
          .includes('can i see your cappuccino')
      ) {
        this.renderer.addClass(botImageimg, 'cappuccinoImg');
      } else if (
        this.chatModal.inputQuery
          .toLowerCase()
          .includes('can i see your filter coffee')
      ) {
        this.renderer.addClass(botImageimg, 'filterCoffeeImg');
      } else if (
        this.chatModal.inputQuery
          .toLowerCase()
          .includes('can i see your americano')
      ) {
        this.renderer.addClass(botImageimg, 'americanoImg');
      } else if (
        this.chatModal.inputQuery
          .toLowerCase()
          .includes('can i see your espresso')
      ) {
        this.renderer.addClass(botImageimg, 'espressoImg');
      }
      const botImageSub = this.renderer.createElement('div');
      //#endregion bot msg

      const response = this.dateSetService.giveAnswer(
        this.chatModal.inputQuery
      );
      if (response != null) {
        this.bottext = this.renderer.createText(response);
        if (response == 'Of course') {
          this.bottext2 = this.renderer.createText('');
        }
      }

      //#region Our input chat
      if (this.bottext != null) this.renderer.appendChild(botSub, botimg);
      this.renderer.appendChild(botSub, this.bottext);
      this.renderer.addClass(botSub, 'botMsg');
      this.renderer.appendChild(botMain, botSub);
      this.renderer.addClass(botMain, 'd-flex');
      this.renderer.appendChild(this.divMsgs?.nativeElement, botMain);

      if (this.bottext2 != null) {
        this.renderer.appendChild(botImageSub, botImageimg);
        this.renderer.appendChild(botImageSub, this.bottext2);
        this.renderer.addClass(botImageSub, 'botMsg');
        this.renderer.appendChild(botImageMain, botImageSub);
        this.renderer.addClass(botImageMain, 'd-flex');
        this.renderer.appendChild(this.divMsgs?.nativeElement, botImageMain);
      }

      var out = document.getElementById('chatlogs');
      var isScrolledToBottom =
        out != null
          ? out.scrollHeight - out.clientHeight <= out.scrollTop + 1
          : null;
      if (!isScrolledToBottom)
        if (out != null) {
          out.scrollTop = out.scrollHeight - out.clientHeight;
        }

      //Audio click
      let audio = new Audio();
      audio.src = '../../../assets/audio/tick.mp3';
      audio.load();
      audio.play();
      this.chatModal.inputQuery = ''; //Reseting to empty for next query
      this.bottext2 = undefined;
      return true;
      //#endregion Our input chat
    }
  }
}
