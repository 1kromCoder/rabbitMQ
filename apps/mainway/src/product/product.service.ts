import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODS') private readonly prods: ClientProxy) {}

  create(createProductDto: CreateProductDto) {
    return this.prods.send('createProduct', createProductDto);
  }

  findAll() {
    return this.prods.send('findAllProduct', {});
  }

  findOne(id: number) {
    return this.prods.send('findOneProduct', id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prods.send('updateProduct', id);
  }

  remove(id: number) {
    return this.prods.send('removeProduct', id);
  }
}
