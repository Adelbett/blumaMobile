import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppserviceService } from '../services/appservice.service';
import { Storage } from '@ionic/storage';
import { log } from 'console';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  res: any;
  user: any;
  id_buyer: any;

  user_id: any;
  buyer: any;
  id_commandes: any;
  messageText: any;
  loading: any;
  routing: any;
  public images = [];
  chatsRef: any;
  messages: any = []
  info: any[] = [];
  constructor(private service: AppserviceService, private storage: Storage, private router: Router,
    private route: ActivatedRoute,
    private afDB: AngularFireDatabase,) { }

  ngOnInit() {
    this.loading = true;
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      this.user = res;

      this.getMessages()
    })
    this.getprof()
    this.loading = true;


  }
  sendMessage() {
    console.log('adel')
    this.storage.get('User').then((res: any) => {
      this.id_buyer = this.route.snapshot.paramMap.get('id');
      console.log(' this.id_buyer', this.id_buyer)

      this.afDB.list('messages/').push({
        receiver: this.id_buyer,
        sender: this.user.id,
        text: this.messageText,
        timestamp: new Date().toISOString(),


      });
      console.log('ok')
      // let req = {
      //   id: this.user.id,
      //   message_satut: 1
      // }
      // console.log("req", req)
      // this.service.updatestatumessage(req).subscribe((res: any) => {
      //   console.log("res", res)
      // });
      this.messageText = '';
    });
  }
  // sendMessage() {
  //   console.log("adellll")
  //   if (this.messageText) {
  //     this.storage.get('User').then((res: any) => {
  //       this.id_buyer = this.route.snapshot.paramMap.get('id');
  //       this.afDB
  //         .list('messages/')
  //         .push({
  //           idUser: this.user.id,
  //           id_byer: this.id_buyer,
  //           text: this.messageText,
  //           date: new Date().toISOString(),
  //         })
  //         .then(() => {
  //           this.messageText = '';
  //         })
  //         .catch((error) => {
  //           console.error('Failed to push message:', error);
  //         });
  //     });
  //   }
  // }

  getprof() {
    // this.storage.create();
    this.id_buyer = this.route.snapshot.paramMap.get('id');
    console.log("this.id_buyer", this.id_buyer);


    if (this.id_buyer == 'admin') {

      this.info = [{
        nom: "Administration",
        image: "../../assets//logo.png"
      }];

      // this.info = [this.res]
      console.log("", this.res.nom);
      console.log("", this.res.image);

    } else {
      let req = {
        id: this.id_buyer

      }
      this.service.getprofchat(req).subscribe((res: any) => {
        console.log("res", res)
        this.info = [res]

      });

    }

  }

  scrollToBottom() {
    console.log('test');

    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }
  getMessages() {

    this.afDB.list('messages/', (ref) => ref.orderByChild('timestamp'))
      .snapshotChanges(['child_added'])
      .subscribe((actions) => {
        this.messages = [];
        actions.forEach((action) => {
          const message = action.payload.exportVal();

          if ((message.sender == this.id_buyer && message.receiver == this.user.id) ||
            (message.sender == this.user.id && message.receiver == this.id_buyer)) {
            this.messages.push({
              receiver: message.receiver,
              sender: message.sender,
              text: message.text,
              date: message.date
            });
          }
          else ('false')
        });
        this.loading = false;
        console.log('message', this.messages)
        setTimeout(() => {
          this.scrollToBottom()

        }, 1000);


      })

  }



}
