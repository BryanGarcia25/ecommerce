import { IEvent } from "@nestjs/cqrs";

export class CustomerCreateEvent implements IEvent {
    constructor (public readonly customerId: string, public readonly name: string, public readonly email: string) {}
}