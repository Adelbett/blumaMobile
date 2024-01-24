import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule, AngularFireDatabaseModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule { }
