/*

 *

 */

import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { BaseModel } from './BaseModel';
import moment = require('moment');
@Entity('product_special')
export class ProductSpecial extends BaseModel {
  public getId(): number {
    return this.productSpecialId;
  }
  public getIdField(): string {
    return 'productSpecialId';
  }
  @PrimaryGeneratedColumn({ name: 'product_special_id' })
  public productSpecialId: number;

  @Column({ name: 'product_id' })
  public productId: number;

  @Column({ name: 'customer_group_id' })
  public customerGroupId: number;

  @Column({ name: 'priority' })
  public priority: number;

  @Column({ name: 'price' })
  public price: number;

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
