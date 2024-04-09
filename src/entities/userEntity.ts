import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * Comment data definition and mapping to the database for our ORM
 */
@Entity('user')
export class User {
  @PrimaryColumn()
  user_id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  user_vorname!: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  user_name?: string | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  user_birth?: string | undefined;

  @Column({
    type: 'int',
    nullable: false,
    default: false,
  })
  user_weight?: number | undefined;

  @Column({
    type: 'int',
    nullable: false,
  })
  user_height?: number | undefined;

  @Column({
    type: 'int',
    nullable: false,
  })
  user_gender?: number | undefined;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  user_bmi?: string | undefined;
}
