export interface restaurant {
	id: number,
	name: string,
	town: string,
	postCode: string,
	cuisine: string
}

export interface restaurants extends Array<restaurant>{}