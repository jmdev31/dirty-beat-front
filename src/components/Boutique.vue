
<template>
	    <h1>Boutique</h1>
	<div class="container mx-auto mt-4">
	  <div class="row">
		
		<div class="col-md-4">
		  <div class="card" style="width: 18rem;">
	  <img src="C:...\src\assets\dbmixetape1.png" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Dirty Beat Mixetape</h5>
		<p class="card-text">15,00e</p>
		<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
		<div class="mb-3 col cs-btn-container">
                <button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button>
              </div>
	  </div>
	  </div>
		</div>    
		   <div class="col-md-4">
	<div class="card" style="width: 18rem;">
	  <img src="C:\src\assets\dbmixetape2.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Dirty Beat Mixetape vol.2</h5>
		<p class="card-text">15,00e</p>
		<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
		<div class="mb-3 col cs-btn-container">
                <button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button>
              </div>
	  </div>
	  </div>
		</div>    
			  <div class="col-md-4">
	<div class="card" style="width: 18rem;">
	  <img src="C:\src\assets\dirty-beats mixetape3.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Dirty Beat Mixetape vol.3</h5>
		<p class="card-text">15,00e</p>
		<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
		<div class="mb-3 col cs-btn-container">
                <button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button>
              </div>
	  </div>
	  </div>
	  </div>
		
		<div class="col-md-4">
		  <div class="card" style="width: 18rem;">
	  <img src="\src\assets\yee shirt dirty beat.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Tee shirt Dirty Beat</h5>
			<h6 class="card-subtitle mb-2 text-muted">Modele unique L</h6>
		<p class="card-text">20.00e</p>
		<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
		   <div class="mb-3 col cs-btn-container">
                <button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button>
              </div>
	  </div>
	  </div>
		</div>    
		
		<div class="col-md-4">
		  <div class="card" style="width: 18rem;">
	  <img src="C:\src\assets\ghbghg.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Tee shirt Dirty Beat</h5>
			<h6 class="card-subtitle mb-2 text-muted">Modele unique L</h6>
		<p class="card-text">20.00e</p>
		<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
		   <div class="mb-3 col cs-btn-container">
                <button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button>
              </div>
	  </div>
	  </div>
		</div> 

		<div v-for="(oneproduit, index) in produit" :key="oneproduit.key" class="col-md-4">
		  <div class="card" style="width: 18rem;">
	  <img src="C:\src\assets\dirty tee shirt 2.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">{{oneproduit.title}}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{oneproduit.description}}</h6>
		<p class="card-text">{{oneproduit.prix}}</p>
				<form>
<input type="button" value=" - " onclick="javascript:this.form.champ.value--;">
<input type="text" name="champ" value="0" size="1">
<input type="button" value=" + " onclick="javascript:this.form.champ.value++;">
</form>
<span></span>

<button type="submit" class="btn btn-warning btn-sm">Ajouter au panier</button> 
	  </div>
	  </div>
		</div>
	</div>
	  </div>
	</template>
	
	  <style scoped>
	
	  p {
		color: red;
		font-weight: bold;
		text-align: center; 
	  }
h5, h6, button {
	text-align: center;
}
	  h1 {
  font-weight: bold;
}
	.card {
	  color: rgba(5, 5, 5, 0.8);
	  margin-bottom: 1rem;
	}
	
	.btn {
		background-color: rgb(217, 172, 177);
	  border: 2px solid;
	  border-image-slice: 1;
	  border-image-source:  var(--gradient) !important; 
	  transition: all .4s ease;
	  font-weight: bold;
	  margin-left: 1em  ;
	}
	
	.btn:hover, .btn:focus {
	  border: 5px solid #000000 !important; 
	  box-shadow: #222 1px 0 10px;
	  text-decoration: underline;
	}
	form {
		text-align: center;
	}
	  </style>

	  <script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'
import ProduitDataService  from  '../service/ProduitDataService';
let produit = ref([]);

const onDataChange = (items) => {
	let _produit = [];

	items.forEach((item) => {
		let key = item.key;
		let data = item.val();
		_produit.push({
			key: key,
			title: data.title,
			description: data.description,
			img: data.img,
			prix: data.prix,
			published: data.published,
		});
	});
	produit.value = _produit;
};

const props = defineProps({
	// v-model
	modelValue: {
		default: '',
	},
});

const emit = defineEmits({
	// v-model event with validation
	'update:modelValue': (value) => value !== null,
});

const value = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});

const stopWatch = watch(
	() => props.modelValue, async (_newValue, _oldValue) => {
		// do something
	},
	{
		immediate: true
	}
);

onMounted(() => {
	ProduitDataService.getAll().on("value", onDataChange);

});

onUpdated(() => {
});

onBeforeUnmount(() => {
	// stopWatch();
	ProduitDataService.getAll().off("value", onDataChange);

});

</script> 
