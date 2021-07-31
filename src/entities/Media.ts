import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Model, { UPLOAD_SCHEMA } from './Model';

@Entity({ schema: UPLOAD_SCHEMA })
export class Media extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uploaded: boolean;
}
