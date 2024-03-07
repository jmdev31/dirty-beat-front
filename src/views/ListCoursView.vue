<template>
	<!-- Contenu principal -->
	<div class="container mt-5">
		<h2 class="text-center mb-4">Liste de Cours</h2>
		<!-- Liste de cours -->
		<div class="row row-cols-1 row-cols-md-3 g-4">
			<!-- Cours 1 C CA KON VA VFOR -->
			<div v-for="(oneCours, index) in cours" :key="oneCours.key" class="col">
				<div class="card h-100">
					<img :src="oneCours.logo" class="card-img-top img-fluid" alt="Cours 1">
					<div class="card-body">
						<h5 class="card-title">{{ oneCours.title }}</h5>
						<p class="card-text">{{oneCours.description}}</p>
						<a href="#" class="btn btn-primary">En savoir plus</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'
import CoursDataService from '../services/CoursDataService';
let cours = ref([])

const onDataChange = (items) => {
	let _cours = [];

	items.forEach((item) => {
		let key = item.key;
		let data = item.val();
		_cours.push({
			key: key,
			title: data.title,
			description: data.description,
			logo:data.logo,
			published: data.published,
		});
	});
	cours.value = _cours;
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
	CoursDataService.getAll().on("value", onDataChange);
	console.log(cours);
});

// onUpdated(() => {
// });

onBeforeUnmount(() => {
	// stopWatch();
	CoursDataService.getAll().off("value", onDataChange);

});

</script>

<style scoped lang="css"></style>