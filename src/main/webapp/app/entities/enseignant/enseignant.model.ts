import { BaseEntity, User } from './../../shared';

export class Enseignant implements BaseEntity {
    constructor(
        public id?: number,
        public iduser?: number,
        public enseigners?: BaseEntity[],
        public user?: User,
    ) {
    }
}
