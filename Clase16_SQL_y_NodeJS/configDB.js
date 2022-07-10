//Como conectarse a la base de datos:
export const options = {
	MYSQL: {
		client: "mysql",
		connection: {
			host: "127.0.0.1",
			port: 3306,
			user: "root",
			password: "",
			database: "ecommerce",
		},
		pool: {min: 0, max: 10},
	},
};
