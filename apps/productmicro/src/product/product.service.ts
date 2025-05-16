import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateProductDto) {
    let post = await this.prisma.product.create({ data });
    return post;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findFirst({ where: { id } });
  }

  async update(id: number, data: UpdateProductDto) {
    let edit = await this.prisma.product.update({ where: { id }, data });
    return edit;
  }

  async remove(id: number) {
    let del = await this.prisma.product.delete({ where: { id } });
    return del;
  }
}
