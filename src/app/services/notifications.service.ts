import { Injectable, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotificationSchema, PushNotifications } from '@capacitor/push-notifications';
import { FCM } from "@capacitor-community/fcm";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  user: any
  topicName :any;
  remoteToken: string;

  constructor(private zone: NgZone, private storage: Storage) { }

  ngOnInit() {


  }

  async subscribeTo() {
    this.storage.create();

    await this.storage.get('User').then((res: any) => {
      this.user = res;
      console.log("user",this.user);

      this.topicName = "user_"+ this.user.id
    });
    console.log('topic',this.topicName);

    FCM.subscribeTo({ topic: this.topicName })
      .then((r) => console.log(`subscribed to topic `, this.topicName))
      .catch((err) => console.log(err));


  }

  unsubscribeFrom() {
    FCM.unsubscribeFrom({ topic: this.topicName })
      .then((r) => console.log(`unsubscribed from topic `, this.topicName))
      .catch((err) => console.log(err));

    if (Capacitor.getPlatform() === 'android') {
      FCM.deleteInstance();
    }
  }

  getToken() {
    FCM.getToken()
      .then((result) => {
        this.remoteToken = result.token;
      })
      .catch((err) => console.log(err));
  }
}
