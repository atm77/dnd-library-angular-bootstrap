import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalsService } from './shared/services/common-modals.service';
import { MonsterService } from './core/http/api.service';
import { ResultList } from './core/http/dtos/resultList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'dnd-library-angular-bootstrap';
  activeModal: NgbActiveModal;
  monstersList: ResultList<any> = {};

  constructor(private commonModalsService: CommonModalsService, private monsterService: MonsterService) { }

  openAlertModal() {

    this.commonModalsService.showAlert('1', 'teste 1');
    this.commonModalsService.showAlert('2', 'teste 2');
  }

  openLoadingModal() {
    this.commonModalsService.startLoading('wait for a second...');
    window.setTimeout(() => {
      this.commonModalsService.stopLoading();
    }, 3000)
  }

  handleSelectMonster(event) {
    this.commonModalsService.startLoading('wait for a second...');
    this.monsterService.getMonster(event.target.value)
      .subscribe(monster => {
        this.commonModalsService.stopLoading();
        console.log(monster);
      })
  }

  ngOnInit() {
    this.monsterService.listMonsters().subscribe(results => {
      this.monstersList = results;
    })
  }

}
