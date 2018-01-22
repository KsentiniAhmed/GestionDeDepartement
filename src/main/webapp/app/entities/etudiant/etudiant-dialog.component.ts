import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Etudiant } from './etudiant.model';
import { EtudiantPopupService } from './etudiant-popup.service';
import { EtudiantService } from './etudiant.service';
import { Section, SectionService } from '../section';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-etudiant-dialog',
    templateUrl: './etudiant-dialog.component.html'
})
export class EtudiantDialogComponent implements OnInit {

    etudiant: Etudiant;
    isSaving: boolean;

    sections: Section[];

    users: User[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private etudiantService: EtudiantService,
        private sectionService: SectionService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.sectionService.query()
            .subscribe((res: ResponseWrapper) => { this.sections = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.etudiant.id !== undefined) {
            this.subscribeToSaveResponse(
                this.etudiantService.update(this.etudiant));
        } else {
            this.subscribeToSaveResponse(
                this.etudiantService.create(this.etudiant));
        }
    }

    private subscribeToSaveResponse(result: Observable<Etudiant>) {
        result.subscribe((res: Etudiant) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Etudiant) {
        this.eventManager.broadcast({ name: 'etudiantListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackSectionById(index: number, item: Section) {
        return item.id;
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-etudiant-popup',
    template: ''
})
export class EtudiantPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private etudiantPopupService: EtudiantPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.etudiantPopupService
                    .open(EtudiantDialogComponent as Component, params['id']);
            } else {
                this.etudiantPopupService
                    .open(EtudiantDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
