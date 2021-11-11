
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../../models/card';
@Component({
  selector: 'tprj-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  @Input() card!: Card;
  @Output() delete = new EventEmitter<Card>();
  @Output() buy = new EventEmitter<Card>();
  constructor() { }

  ngOnInit(): void {
  }

  deselect(card: Card) {
    this.delete.emit(card);
  }

  buyCard(card: Card) {
    this.buy.emit(card);
  }

}
