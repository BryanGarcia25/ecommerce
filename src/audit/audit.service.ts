import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Audit } from './audit.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuditService {
    constructor(@InjectModel(Audit.name) private readonly auditModel: Model<Audit>) {}

    async logAction(action: string, entity: string, entityId: string, userId: string, changes: string) {
        return this.auditModel.create(action, entity, entityId, userId, changes, Date())
    }
}
