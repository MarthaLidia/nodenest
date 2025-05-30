import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto/producto.entity';
import { ProductoModule } from './producto/producto.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root', // coloca tu contraseña
      database: 'tienda',
      entities: [Producto],
      synchronize: true, // solo para desarrollo
    }),
    ProductoModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
