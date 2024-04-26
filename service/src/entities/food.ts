import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * food data definition and mapping to the database for our ORM
 */
@Entity('food')
export class Food {
  @PrimaryColumn()
  food_id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  cat_id!: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  name?: string | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  kkal?: number | undefined;
  
  @Column({
    type: 'varchar',
    nullable: true,
  })
  prot?: number | undefined;
  
  @Column({
    type: 'varchar',
    nullable: true,
  })
  fett?: number | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  kohlenhydraten?: number | undefined;
}