<<<<<<< master
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {JhiEventManager, JhiAlertService} from 'ng-jhipster';

import {Absences} from './absences.model';
import {AbsencesService} from './absences.service';
import {Principal, ResponseWrapper} from '../../shared';
import * as Chartist from 'chartist';

@Component({
  selector: 'jhi-absences',
  templateUrl: './absences.component.html'
})
export class AbsencesComponent implements OnInit, OnDestroy {
  absences: Absences[];
  currentAccount: any;
  eventSubscriber: Subscription;
  data: any;
  constructor(
    private absencesService: AbsencesService,
    private jhiAlertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private principal: Principal
  ) {
  }
  loadAll() {
    this.absencesService.query().subscribe(
      (res: ResponseWrapper) => {
        this.absences = res.json;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }
  ngOnInit() {
    const dataPreferences = {
      series: [
        [25, 30, 20, 25]
      ]
    };

    const optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false
      }
    };
    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    Chartist.Pie('#chartPreferences', {
      labels: ['62%', '38%'],
      series: [62, 38]
    });
    this.loadAll();
    this.principal.identity().then((account) => {
      this.currentAccount = account;
    });
    this.registerChangeInAbsences();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: Absences) {
    return item.id;
  }
  registerChangeInAbsences() {
    this.eventSubscriber = this.eventManager.subscribe('absencesListModification', (response) => this.loadAll());
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Absences } from './absences.model';
import { AbsencesService } from './absences.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-absences',
    templateUrl: './absences.component.html'
})
export class AbsencesComponent implements OnInit, OnDestroy {
absences: Absences[];
    currentAccount: any;
    eventSubscriber: Subscription;
    data: any;
    constructor(
        private absencesService: AbsencesService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
       this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE5'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            };
    }
    loadAll() {
        this.absencesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.absences = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInAbsences();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Absences) {
        return item.id;
    }
    registerChangeInAbsences() {
        this.eventSubscriber = this.eventManager.subscribe('absencesListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
>>>>>>> projectSOA
}
