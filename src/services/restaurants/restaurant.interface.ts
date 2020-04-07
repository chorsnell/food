import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Restaurant {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ default: null })
	name: string;

	@Column({ default: null })
	town: string;

	@Column({ default: null })
	postCode: string;

	@Column({ default: null })
	cuisine: string;
}

export interface Restaurants extends Array<Restaurant>{}