/*

 *

 */

import {
  Column,
  Entity,
  BeforeInsert,
  BeforeUpdate,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseModel } from './BaseModel';
import { Exclude } from 'class-transformer';
import { Country } from './country';
import moment = require('moment/moment');

@Entity('zone')
export class Zone extends BaseModel {
  public getId(): number {
    return this.zoneId;
  }
  public getIdField(): string {
    return 'zoneId';
  }
  @PrimaryGeneratedColumn({ name: 'zone_id' })
  public zoneId: number;

  @Exclude()
  @Column({ name: 'country_id' })
  public countryId: number;

  @Column({ name: 'code' })
  public code: string;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'is_active' })
  public isActive: number;

  @ManyToOne(type => Country, country => country.zone)
  @JoinColumn({ name: 'country_id' })
  public country: Country;

  @BeforeInsert()
  public async createDetails(): Promise<void> {
    this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  @BeforeUpdate()
  public async updateDetails(): Promise<void> {
    this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
