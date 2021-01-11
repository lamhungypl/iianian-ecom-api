import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../models/ProductModel';
import { ProductToCategory } from '../models/ProductToCategory';
import { OrderProduct } from '../models/OrderProduct';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
