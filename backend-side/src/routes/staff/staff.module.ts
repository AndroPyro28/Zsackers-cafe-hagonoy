import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { User } from 'src/models';
import { ArgonHelper } from 'src/common/helpers/argon.helper';
import { SMTP } from 'src/common/utils';

@Module({
  controllers: [StaffController],
  providers: [StaffService, User, ArgonHelper, SMTP]
})
export class StaffModule {}
