<!-- <template>
	<div>
		<div class="card mb-4">
			<div class="card-body">
				<h5 class="card-title">Nouvelle Publication</h5>
				<form @submit.prevent="saveFeed">
					<div class="mb-3">
						<textarea v-model="feed.txt" class="form-control" placeholder="Partagez vos idées..." rows="3"></textarea>
					</div>
					<button type="submit" class="btn btn-primary">Publier</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'
import firebase from 'firebase'
import FeedDataService from '../services/FeedDataService.js';

const feed = {
	txt: '',
	date: '',
	author: ''
};
const user = firebase.auth().currentUser;


const saveFeed = () => {
	const data = {
		txt: feed.txt,
		date: new Date(),
		author: user.uid,
	};
	FeedDataService.create(data)
		.then(() => {
			console.log('1 Nouveau Feed Posté');
		})
		.catch(error => console.log(error));
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
});

onUpdated(() => {
});

onBeforeUnmount(() => {
	stopWatch();
});

</script>

<style scoped lang="css"></style> -->