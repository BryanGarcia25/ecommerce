import { IEventHandler } from "@nestjs/cqrs";
import { CustomerCreateEvent } from "../events/customer-create.event";

export class CustomerCreateHandler implements IEventHandler<CustomerCreateEvent> {
    handle(event: CustomerCreateEvent) {
        console.log(`Cliente creado con el id: ${event.customerId} bajo el nombre de ${event.name}`);
    }
}