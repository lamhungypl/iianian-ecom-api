/*

 *

 */

import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { BaseModel } from './BaseModel';
import moment = require('moment');
@Entity('product_discount')
export class ProductDiscount extends BaseModel {
  public getId(): number {
    return this.productDiscountId;
  }
  public getIdField(): string {
    return 'productDiscountId';
  }
  @PrimaryGeneratedColumn({ name: 'product_discount_id' })
  public productDiscountId: number;

  @Column({ name: 'product_id' })
  public productId: number;

  @Column({ name: 'quantity' })
  public quantity: number;

  @Column({ name: 'priority' })
  public priority: number;

  @Column({ name: 'price' })
  public price: number;

  @Column({ name: 'is_active' })
  public isActive: number;

  @Column({ name: 'date_start' })
  public dateStart: Date;

  @Column({ name: 'date_end' })
  public dateEnd: Date;

  @BeforeInsert()
  public async createDetails(): Promise<void> {
    this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  @BeforeUpdate()
  public async updateDetails(): Promise<void> {
    this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
