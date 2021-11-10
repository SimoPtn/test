import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'tprj-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent implements OnInit {

  selectedCard!: Card;

  @Input() cards: Card[] = [];
  @Output() selected = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCard(card: Card) {
    this.selectedCard = card;
  }
}
