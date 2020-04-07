import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Menu } from "../menus/menus.interface";

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

	@OneToMany(type => Menu, menu => menu.parent)
	menu?: Menu[];
}

export interface Restaurants extends Array<Restaurant>{}