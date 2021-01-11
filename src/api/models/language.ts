/*

 *

 */

import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { BaseModel } from './BaseModel';
import moment = require('moment');
@Entity('language')
export class Language extends BaseModel {
  public getId(): number {
    return this.languageId;
  }
  public getIdField(): string {
    return 'languageId';
  }
  @PrimaryGeneratedColumn({ name: 'language_id' })
  public languageId: number;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'code' })
  public code: string;

  @Column({ name: 'image' })
  public image: string;

  @Column({ name: 'image_path' })
  public imagePath: string;

  @Column({ name: 'locale' })
  public locale: number;

  @Column({ name: 'sort_order' })
  public sortOrder: number;

  @Column({ name: 'is_active' })
  public isActive: number;

  @BeforeInsert()
  public async createDetails(): Promise<void> {
    this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  @BeforeUpdate()
  public async updateDetails(): Promise<void> {
    this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
