import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';
export declare class ProductoController {
    private readonly service;
    constructor(service: ProductoService);
    getAll(): Promise<Producto[]>;
    getOne(id: number): Promise<Producto>;
    create(producto: Partial<Producto>): Promise<Producto>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
