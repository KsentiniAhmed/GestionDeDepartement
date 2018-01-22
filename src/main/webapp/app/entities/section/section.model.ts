import { BaseEntity } from './../../shared';

export class Section implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public coefTotal?: number,
        public contients?: BaseEntity[],
    ) {
    }
}
