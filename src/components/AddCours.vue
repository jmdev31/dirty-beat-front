<template>
	<div class="container">
		<div v-if="!submitted">
			<form>
					<h1>Ajouter Cours</h1>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Titre du cours</label>
					<input v-model="cours.title" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Logo du cours (SRC)</label>
					<input v-model="cours.logo" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Description cours</label>
					<textarea v-model="cours.description" class="form-control" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<button @click="saveCours" type="button" class="btn btn-outline-primary">Ajouter un cours</button>
				</div>
			</form>
			</div>
			<div v-else>
				<h4>Cours ajouté en BDD avec Succès</h4>
				<button class="btn btn-success" @click="newCours">Add</button>
			</div>
		</div>
	</template>
	
	<script>
	import CoursDataService from '../services/CoursDataService.js';
	// import { marked } from "marked";
	export default {
		name:'add-cours',
		data(){
			return{
			cours: {
				title: "",
				description: "",
				logo: "",
				published: false
			},
			submitted: false
		};
		},
		methods:{
			saveCours(){
				const data = {
					title : this.cours.title,
					description: this.cours.description,
					logo: this.cours.logo,
					// description: marked.parse(this.cours.description),
					published:false
				};
				CoursDataService.create(data)
				.then(()=>{
					console.log('1 Cours A ETE CREE');
					this.submitted = true;
				}).catch(error=>console.log(error));
			},
	
			newCours(){
				this.submitted = false;
				this.cours = {
					title :'',
					description :'',
					logo :'',
					published :false,
				}
			}
		}
	
	};
	</script>
	