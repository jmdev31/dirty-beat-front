
<template>
	<div class="container-fluid backoffice">
	  <div class="row">
		<div class="col-12">
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
		  <h1 >Back Office</h1>
		</div>
	  </div>
	  <form class="container-fluid row needs-validation" novalidate>
		<div class="container-fluid">
			<label for="nom" class="container-sm">Identifiant</label>
			<p></p>
			<input type="text" class="form-control" id="identifiant" value="">
		</div>
		<p></p>
		<p></p>
		<p></p>
		<div class="container-fluid">
			<label for="email" class="container-fluid">Mot de passe</label>
			<p></p>
			<p></p>
			<input type="email" class="form-control" id="motdepasse">
		</div> 
		<p></p>
		<p></p>
		<p></p>
		<div class="col-12 btn-envoyer">
			<button class="btn btn-warning" type="submit">Se Connecter</button>
		</div>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<p></p>
		<div class="col-md-12 mb-3">
			<label for="mdpperdu" class="form-label" id="mdpperdu">Mot de passe perdu?</label>
		</div>
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
	background-color: black;
	margin: auto;
	border-width: 100%;
}
.container-fluid {
	color : white;
	text-align: center;
	background-color: black;
	margin: auto;
	border-width: 100%;
}
.col-12 {
	color: white;
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

.btn-envoyer {
	text-align: center;
	background-color: black;
	margin: auto;
	border-width: 200%;
	}

.col-md-12 {
text-align: center;
background-color: black;
	}

.col-12 {
text-align: center;
background-color: black;
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
flex: auto;
margin: auto;
border-width: 100%;
}
input {
	width: fit-content;
}
  </style>