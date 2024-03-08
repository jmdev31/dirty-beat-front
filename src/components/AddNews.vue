<template>
	<div class="container">
		<div v-if="!submitted">
		
			<form>
					<h1>Ajouter News</h1>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Titre News</label>
					<input v-model="news.title" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">image du news</label>
					<input v-model="news.img" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Description news</label>
					<textarea v-model="news.description" class="form-control" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<button @click="saveNews" type="button" class="btn btn-outline-primary">Ajouter news</button>
				</div>
			</form>
			</div>
			<div v-else>
				<h4>news ajouté en BDD avec Succès</h4>
				<button class="btn btn-success" @click="newNews">Votre news a bien été enregistré!</button>
			</div>
		</div>
	</template>
	
	<script>
	import NewsDataService from '../service/NewsDataService.js';
	export default {
		name:'add-news',
		data(){
			return{
			news: {
				title: "",
				img:"", 
				description: "",
				published: false
			},
			submitted: false
		};
		},
		methods:{
			saveNews(){
				const nouveauNews = {
					title : this.news.title,
					img: this.news.img,
					description: this.news.description,
					published:false
				};
				NewsDataService.create(nouveauNews)
				.then(()=>{
					console.log('1 NEWS A ETE CREE');
					this.submitted = true;
				}).catch(error=>console.log(error));
			},
	
			newNews(){
				this.submitted = false;
				this.news = {
					title :'',
					description :'',
					img :'',
					published :false,
				}
			}
		}
	
	};
	</script>
	