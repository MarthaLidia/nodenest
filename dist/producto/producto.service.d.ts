import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
export declare class ProductoService {
    private repo;
    constructor(repo: Repository<Producto>);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto | null>;
    create(producto: Partial<Producto>): Promise<Producto>;
    delete(id: number): Promise<boolean>;
}
