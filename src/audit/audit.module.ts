import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Audit, AuditSchema } from './audit.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Audit.name,
          schema: AuditSchema
        }
      ]
    )
  ],
  providers: [AuditService],
  exports: [AuditService]
})
export class AuditModule {}
