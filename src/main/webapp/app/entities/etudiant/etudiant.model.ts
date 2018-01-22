import { BaseEntity, User } from './../../shared';

export class Etudiant implements BaseEntity {
    constructor(
        public id?: number,
        public moyenne?: string,
        public associers?: BaseEntity[],
        public etudier?: BaseEntity,
        public user?: User,
    ) {
    }
}
