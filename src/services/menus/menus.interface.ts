import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Restaurant } from "../restaurants/restaurant.interface";

@Entity()
export class Menu {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name: string;

	@Column({ default: null })
	type: string;

	@Column('numeric', { default: 0, precision: 7, scale: 2 })
	price: number;

	@ManyToOne(type => Restaurant, restaurant => restaurant.menu)
	parent?: Restaurant;
}

export interface Menus extends Array<Menu>{}