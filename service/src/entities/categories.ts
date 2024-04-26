import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * categories definition and mapping to the database for our ORM
 */
@Entity('categories')
export class Categories {
  @PrimaryColumn()
  cat_id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  cat_name!: number

  @Column({
    type: 'int',
    nullable: false,
  })
  cat_number!: number;
}