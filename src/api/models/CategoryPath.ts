/*


 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
@Entity('category_path')
export class CategoryPath extends BaseModel {
  public getId(): number {
    return this.categoryPathId;
  }
  public getIdField(): string {
    return 'categoryPathId';
  }
  @PrimaryGeneratedColumn({ name: 'category_path_id' })
  public categoryPathId: number;

  @Column({ name: 'category_id' })
  public categoryId: number;

  @Column({ name: 'path_id' })
  public pathId: number;

  @Column({ name: 'level' })
  public level: number;
}
