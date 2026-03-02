import { Global, Module } from '@nestjs/common';
import { ParameterStoreService } from './parameter_store.service';

@Global()
@Module({
  providers: [ParameterStoreService],
  exports: [ParameterStoreService],
})
export class ParameterStoreModule { }