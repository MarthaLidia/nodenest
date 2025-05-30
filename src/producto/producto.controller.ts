import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('productos')
export class ProductoController {
  constructor(private readonly service: ProductoService) {}

  @Get()
  getAll(): Promise<Producto[]> {
    return this.service.findAll();
    console.log(this.service.findAll());
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Producto> {
    const producto = await this.service.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    return producto;
  }

  // Insertar producto
  @Post()
  create(@Body() producto: Partial<Producto>): Promise<Producto> {
    return this.service.create(producto);
  }

  // Eliminar producto por ID
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    const deleted = await this.service.delete(id);
    if (!deleted) {
      throw new NotFoundException('Producto no encontrado');
    }
    return { message: 'Producto eliminado correctamente' };
  }
}
