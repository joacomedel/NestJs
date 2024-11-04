import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
 /* 
{
      type: 'postgres',
      host:process.env.DB_HOST,
      port:Number(process.env.DB_PORT),
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: 'true' === process.env.DB_SYNC,
    }
*/
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true //carga .env por defecto 
  }),DatabaseModule,ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
