import {normalize, denormalize, schema} from "normalizr";
import {inspect} from "util";

const originalData = {
	id: "999",
	posts: [
		{
			id: "123",
			author: {
				id: "1",
				nombre: "Pablo",
				apellido: "Perez",
				DNI: "20442654",
				direccion: "CABA 123",
				telefono: "1567876547",
			},
			title: "My awesome blog post",
			comments: [
				{
					id: "324",
					commenter: {
						id: "2",
						nombre: "Nicole",
						apellido: "Gonzalez",
						DNI: "20442638",
						direccion: "CABA 456",
						telefono: "1567811543",
					},
				},
				{
					id: "325",
					commenter: {
						id: "3",
						nombre: "Pedro",
						apellido: "Mei",
						DNI: "20446938",
						direccion: "CABA 789",
						telefono: "1567291542",
					},
				},
			],
		},
		{
			id: "1123",
			author: {
				id: "2",
				nombre: "Nicole",
				apellido: "Gonzalez",
				DNI: "20442638",
				direccion: "CABA 456",
				telefono: "1567811543",
			},
			title: "My awesome blog post",
			comments: [
				{
					id: "1324",
					commenter: {
						id: "1",
						nombre: "Pablo",
						apellido: "Perez",
						DNI: "20442654",
						direccion: "CABA 123",
						telefono: "1567876547",
					},
				},
				{
					id: "1325",
					commenter: {
						id: "3",
						nombre: "Pedro",
						apellido: "Mei",
						DNI: "20446938",
						direccion: "CABA 789",
						telefono: "1567291542",
					},
				},
			],
		},
		{
			id: "2123",
			author: {
				id: "3",
				nombre: "Pedro",
				apellido: "Mei",
				DNI: "20446938",
				direccion: "CABA 789",
				telefono: "1567291542",
			},
			title: "My awesome blog post",
			comments: [
				{
					id: "2324",
					commenter: {
						id: "2",
						nombre: "Nicole",
						apellido: "Gonzalez",
						DNI: "20442638",
						direccion: "CABA 456",
						telefono: "1567811543",
					},
				},
				{
					id: "2325",
					commenter: {
						id: "1",
						nombre: "Pablo",
						apellido: "Perez",
						DNI: "20442654",
						direccion: "CABA 123",
						telefono: "1567876547",
					},
				},
			],
		},
	],
};

const userSchema = new schema.Entity("users");
const commentSchema = new schema.Entity("comments", {
	commenter: userSchema,
});
const singlePostSchema = new schema.Entity("singlePost", {
	author: userSchema,
	comments: [commentSchema],
});
const postSchema = new schema.Entity("posts", {
	posts: [singlePostSchema],
});

const normalizedData = normalize(originalData, postSchema);

console.log("Data Inicial", JSON.stringify(originalData).length);
console.log("Data Normalized", JSON.stringify(normalizedData).length);

function print(obj) {
	console.log(inspect(obj, false, 12, true));
}

print(normalizedData);
