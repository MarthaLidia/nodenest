import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private repo: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Producto | null> {
    return this.repo.findOneBy({ id });
  }

  create(producto: Partial<Producto>): Promise<Producto> {
    const nuevoProducto = this.repo.create(producto);
    return this.repo.save(nuevoProducto);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
