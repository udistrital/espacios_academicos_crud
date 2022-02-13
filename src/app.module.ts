import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspacioAcademicoModule } from './espacio-academico/espacio-academico.module';
import { environment } from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
    `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, {
      //useFindAndModify: false
    }),
    EspacioAcademicoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
