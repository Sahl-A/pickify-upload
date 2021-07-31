import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Model from './Model';

@Entity()
export class Media extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uploaded: boolean;
}
