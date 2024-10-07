import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Audit } from './audit.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuditService {
    constructor(@InjectModel(Audit.name) private readonly auditModel: Model<Audit>) {}

    async logAction(action: string, entity: string, entityId: string, changes: string) {
        const createAudit = new this.auditModel({action, entity, entityId, changes, timestamp: Date()});
        return createAudit.save();
    }
}
