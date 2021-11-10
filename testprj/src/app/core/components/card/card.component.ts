import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'tprj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  @Output() selected = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  select(card: Card) {
    this.selected.emit(card);
  }
}
