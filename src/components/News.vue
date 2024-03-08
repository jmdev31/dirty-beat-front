
<template>
  <div class="container">
    <div class="row">

      <div class="col-12">
        <h1>News / Events</h1>
      </div>
    </div>
    <article>
      <div class="row article-container">
        <h3>Titre de niveau 3</h3>
        <div class="col-md-6 article-img">
          <img src="@/assets/dirty_fest.jpg" alt="dirty fest">
        </div>
        <div class="col-md-6">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
        </div>
      </div>
    </article>

    <article>
      <div class="row article-container">
        <h3>Titre de niveau 3</h3>
        <div class="col-md-6 article-img">
          <img src="@/assets/dirty_fest.jpg" alt="dirty fest">
        </div>
        <div class="col-md-6">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum ut, consequuntur cum aliquam quasi aspernatur fugiat et ab esse nisi animi labore deleniti doloribus earum quam iusto omnis ipsum.</p>
        </div>
      </div>
    </article>

  </div>
		<div v-for="(onenews, index) in news" :key="onenews.key" class="col-md-4">
		  <div class="card" style="width: 18rem;">
	  <img src="C:\src\assets\dirty tee shirt 2.jpg" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">{{onenews.title}}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{onenews.description}}</h6>
				<h1 class="card-subtitle mb-2 text-muted">aaaaaaaa</h1>
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
</template>

 <style scoped>
h1 {
  font-weight: bold;
}
  .article-container {
    justify-content: space-between;
    align-items: center;
  }
  .article-img img {
    width: 50%;
  }
</style> 

 <script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'
import NewsDataService  from  '../service/NewsDataService';
let news = ref([]);

const onDataChange = (items) => {
	let _news = [];

	items.forEach((item) => {
		let key = item.key;
		let data = item.val();
		_news.push({
			key: key,
			title: data.title,
			description: data.description,
			img: data.img,
			published: data.published,
		});
	});
	news.value = _news;
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
	NewsDataService.getAll().on("value", onDataChange);

});

onUpdated(() => {
});

onBeforeUnmount(() => {
	// stopWatch();
	NewsDataService.getAll().off("value", onDataChange);

});
</script>