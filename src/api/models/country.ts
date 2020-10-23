/*

 *

 */

import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Zone } from './zone';

@Entity('country')
export class Country extends BaseModel {
  @PrimaryGeneratedColumn({ name: 'country_id' })
  public countryId: number;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'iso_code_2' })
  public isoCode2: string;

  @Column({ name: 'iso_code_3' })
  public isoCode3: string;

  @Column({ name: 'address_format' })
  public addressFormat: string;

  @Column({ name: 'postcode_required' })
  public postcodeRequired: number;

  @Column({ name: 'is_active' })
  public isActive: number;

  @OneToMany(type => Zone, zone => zone.country)
  public zone: Zone[];
}
