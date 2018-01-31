/*
* Angular 2 CRUD application using Nodejs
*/

export class UserModel {
	constructor(
		public _id: string,
		public name: string,
		public gender: string,
		public country: string,
		public number: number,
	) {}
}
