import { Event } from "./event";

export class EventComment {
    idCommentaire!: number;

    idClient!: number;

    comment!: string;

    likes!: number;

    events!: Event;

    dateCreated!: Date;

    lastUpdated!: Date;
}
