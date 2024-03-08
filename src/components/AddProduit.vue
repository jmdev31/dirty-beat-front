<template>
	<div class="container">
		<div v-if="!submitted">
		<li class="nav-item">
                <RouterLink class="nav-link" to="/addnews">Ajouter une News</RouterLink>
              </li>
			<form>
					<h1>Ajouter Produit</h1>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Titre du produit</label>
					<input v-model="produit.title" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">image du Produit</label>
					<input v-model="produit.img" type="text" class="form-control">
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Description produit</label>
					<textarea v-model="produit.description" class="form-control" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Prix</label>
					<textarea v-model="produit.prix" class="form-control" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<button @click="saveProduit" type="button" class="btn btn-outline-primary">Ajouter un Produit</button>
				</div>
			</form>
			</div>
			<div v-else>
				<h4>Produit ajouté en BDD avec Succès</h4>
				<button class="btn btn-success" @click="newProduit">Votre produit a bien été enregistré!</button>
			</div>
		</div>
	</template>
	
	<script>
	import ProduitDataService from '../service/ProduitDataService.js';
	export default {
		name:'add-produit',
		data(){
			return{
			produit: {
				title: "",
				img:"", 
				description: "",
				prix:"",
				published: false
			},
			submitted: false
		};
		},
		methods:{
			saveProduit(){
				const nouveauProduit = {
					title : this.produit.title,
					img: this.produit.img,
					description: this.produit.description,
					prix: this.produit.prix,  //prix etc...
					published:false
				};
				ProduitDataService.create(nouveauProduit)
				.then(()=>{
					console.log('1 PRODUIT A ETE CREE');
					this.submitted = true;
				}).catch(error=>console.log(error));
			},
	
			newProduit(){
				this.submitted = false;
				this.produit = {
					title :'',
					description :'',
					img :'',
					prix : '',
					published :false,
				}
			}
		}
	
	};
	</script>
	