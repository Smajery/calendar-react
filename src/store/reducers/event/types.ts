import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

type Action<T, P> = { type: T, payload: P }

export enum EventActions {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS",
}

export type SetGuestsAction = Action<EventActions.SET_GUESTS, IUser[]>
export type SetEventsAction = Action<EventActions.SET_EVENTS, IEvent[]>

export type EventAction =
    SetGuestsAction |
    SetEventsAction