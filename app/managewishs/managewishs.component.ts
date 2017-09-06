import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Wish } from '../models/wish';
import { FeedbackMessage } from '../models/feedbackMessage';

import { WishService } from '../services/wish.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'managewishs',
  templateUrl: `managewishs.component.html`,
})
export class ManageWishsComponent implements OnInit, OnDestroy {

  constructor(private wishService: WishService, private titleService: Title) {
        this.titleService.setTitle('Wünsche');
  }

  getWishsSubscription: Subscription;
  wishs: Wish[];
  creationMode: boolean = false;
  editIndex: number = -1;
  newWish: Wish = new Wish();
  feedbackMessage: FeedbackMessage = null;


  ngOnInit(): void {
    this.getWishsSubscription = this.wishService.getWishs().subscribe((wishs: Wish[]) =>
      {
        this.wishs = Object.create(wishs);

      });
  }


  ngOnDestroy(): void {
    this.getWishsSubscription.unsubscribe();
  }


  createWish(): void{
    this.newWish.created = new Date();
    this.wishService.createWish(this.newWish)
          .subscribe(
            (wish: Wish) => {
              this.newWish._id = wish._id;
              this.wishs.push(this.newWish);
              this.wishs = Object.create(this.wishs);
              this.newWish = new Wish();
              this.feedbackMessage = new FeedbackMessage("Titel", "Neuer Wunsch angelegt", "success");
          },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Wunsch konnte nicht angelegt werden.", "Wunsch konnte nicht angelegt werden.", "error");
            });
  }

  updateWish(wish: Wish): void{
    this.wishService.updateWish(wish)
          .subscribe(
            (updatedWish: Wish)  => {
              this.feedbackMessage = new FeedbackMessage("Wunsch wurde aktualisiert", "Wunsch wurde aktualisiert", "success");
            },
            (err:Error)  => {
              this.feedbackMessage = new FeedbackMessage("Wunsch konnte leider nicht aktualisiert werden.", "Wunsch konnte leider nicht aktualisiert werden.", "error");
            });
  }


  deleteWish(wish: Wish): void{
    this.wishService.deleteWish(wish._id)
          .subscribe(
            () => {
              let i = this.wishs.findIndex(e => e._id === wish._id);
              this.wishs.splice(i,1);
              this.feedbackMessage = new FeedbackMessage("Wunsch aktualisiert", "Wunsch wurde erfolgreich aktualisiert.", "success");
            },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Wunsch konnte nicht aktualisiert werden", "Wunsch konnte nicht aktualisiert werden.", "error");
          });
  }



}
