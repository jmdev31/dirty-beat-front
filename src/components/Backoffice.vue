
<template>
	<div class="container-fluid backoffice">
	  <div class="row">
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
		  <h1 >S'inscrire</h1>
	  </div>


	  <form @submit.prevent="register" class="container-fluid row needs-validation" novalidate>
		<label for="email" class="form-label">Adresse e-mail</label>
		<input v-model="email" type="email" class="form-control" id="email"
		  placeholder="Votre adresse e-mail" required>
		<p></p>
		<p></p>
		<p></p>
		<div class="container-fluid">
			<label for="password" class="form-label">Mot de passe</label>
			<input v-model="password" type="password" class="form-control" id="password"
			  placeholder="Votre mot de passe" required>
		</div> 
		<div class="container-fluid">
			<label for="confirmpassword" class="form-label">Confirmer Mot de passe</label>
			<input v-model="confirmpassword" type="password" class="form-control" id="password"
			  placeholder="Votre mot de passe" required>
		</div> 
		<p></p>
		<p></p>
		<p></p>
		<div class="col-12 btn-envoyer">
			<button class="btn btn-primary btn-warning" @submit.prevent="register">Valider</button>
		</div>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		</form>
		</div>

  </template>
  <style scoped>

h1 {
  font-weight: bold;
}

template {
		width: 50%;
		margin: 100px auto;
		background-color: black;
}

.container-fluid {
	color : white;
	text-align: center;
	background-color: black;
	margin: auto;
	border-width: 100%;
}

input .form-label, label .container-sm {
	text-align: center ;
	background-color: black;
	margin: auto;
	border-width: 100%;
}

.btn-primary {
	text-align: center;
	
	margin: auto;
	border-width: 200%;
	}

#mdpperdu {
	font-style: italic;
	background-color: black;
	color: white;
}
body {
	background-color: black;
}
.form-control {

margin: auto;
border-width: 100%;
}

input {
	width: fit-content;
}
  </style>

  <script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const role = ref('')
  const router = useRouter() // get a reference to our vue router
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('SUPER WELCOME GRO!');
        router.push('/seconnecter') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
  </script>
