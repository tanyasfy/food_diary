import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * Comment data definition and mapping to the database for our ORM
 */
@Entity('breakfest')
export class Breakfest {
  @PrimaryColumn()
  id_breakfest?: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  user_id!: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  category?: string | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  weight?: string | undefined;
}
