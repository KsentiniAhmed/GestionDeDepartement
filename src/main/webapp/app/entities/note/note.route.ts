import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { NoteComponent } from './note.component';
import { NoteDetailComponent } from './note-detail.component';
import { NotePopupComponent } from './note-dialog.component';
import { NoteDeletePopupComponent } from './note-delete-dialog.component';

export const noteRoute: Routes = [
    {
        path: 'note',
        component: NoteComponent,
        data: {
<<<<<<< master
            authorities: ['ROLE_USER', 'ROLE_ETUDIANT'],
=======
            authorities: ['ROLE_USER'],
>>>>>>> projectSOA
            pageTitle: 'Notes'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'note/:id',
        component: NoteDetailComponent,
        data: {
<<<<<<< master
            authorities: ['ROLE_USER', 'ROLE_ETUDIANT'],
=======
            authorities: ['ROLE_USER'],
>>>>>>> projectSOA
            pageTitle: 'Notes'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const notePopupRoute: Routes = [
    {
        path: 'note-new',
        component: NotePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Notes'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note/:id/edit',
        component: NotePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Notes'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note/:id/delete',
        component: NoteDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Notes'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
