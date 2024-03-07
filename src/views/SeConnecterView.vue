
<template>
	<div class="backoffice text-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" class="bi bi-person"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
</div>
	<div class="container-fluid backoffice">
	  <div class="row">
			<p></p>
			<p></p>
			<p></p>
			<p></p>
		  <h1 >Se connecter</h1>
	  </div>
<p></p>

	  <form @submit.prevent="register" class="container-fluid row needs-validation" novalidate>
		<label for="email" class="form-label">Adresse e-mail</label>
		<input v-model="email" type="email" class="form-control" id="email"
		  placeholder="Votre adresse e-mail" required>
		<p></p>
		<p></p>
		<div class="container-fluid">
			<label for="password" class="form-label">Mot de passe</label>
			<input v-model="password" type="password" class="form-control" id="password"
			  placeholder="Votre mot de passe" required>
              <p v-if="errMsg">{{ errMsg }}</p>
		</div> 
        <p></p> 
		<p></p>
		<p></p>
		<p></p>
		<div class="col-12 btn-envoyer">
			<button class="btn btn-primary btn-warning" @click="signIn">Valider</button>
		</div>
		<p></p>
		<p></p>
		<div class="col-md-12 mb-3">
			<label for="mdpperdu" class="form-label" id="mdpperdu">Mot de passe perdu?</label>
		</div>
		<p></p>
		<p></p>
    
                <RouterLink class="login-link" to="/backoffice"> <h1>Pour s'inscrire, cliquez içi!</h1></RouterLink>
    
		<p></p>
		</form>
		</div>

  </template>
  <style scoped>

.backoffice {
	background-color: black;
	color: white;
	margin: auto;
	border-width: 100%;
}

  .login-link {
    text-decoration: underline;
  }

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
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method
	firebase
		.auth()
		.signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
		.then((data) => {
			console.log('Successfully logged in!');
			router.push('/addproduit') // redirect to the backoffice ou panier user? afinir
		})
		.catch(error => {
			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'Invalid email'
					break
				case 'auth/user-not-found':
					errMsg.value = 'No account with that email was found'
					break
				case 'auth/wrong-password':
					errMsg.value = 'Incorrect password'
					break
				default:
					errMsg.value = 'Email or password was incorrect'
					break
			}
		});
}

</script>