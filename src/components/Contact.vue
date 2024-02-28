
<template>
	<div class="container contact">
	  <div class="row">
		<div class="col-12">
		  <h1>Contact</h1>
		</div>
	  </div>

	  <form class="myForm" action="/file.php" onsubmit="return validateForm()" method="post">
         <table class="form-style">
            
				<div class="col-md-12">
			<label for="nom" class="form-label">Nom</label>
			<input type="text" class="form-control" id="nom" value="">
		</div>
                  <span class="error" id="errorname"></span>
            
            
			<div class="col-md-12 mb-3">
			<label for="email" class="form-label">Email</label>
			<input type="email" class="form-control" id="email" placeholder="nom@exemple.com">
		</div>
            <tr>
               <td>
				<div class="mb-3">
			<label for="message" class="form-label">Message</label>
			<textarea class="form-control" id="message" rows="3"></textarea>
		</div> 
                  <span class="error" id="errormsg"></span>
               </td>
            </tr>
            <tr>
               <td></td>
			   <div class="col-12 btn-envoyer">
			<button class="btn btn-warning" type="submit">Envoyer</button>
		</div>
            </tr>
         </table>
      </form>
	</div>
  </template>
  
  <style scoped>
  h1 {
  font-weight: bold;
}
.form-label {
 padding-left: 15px;
}
	.container {
	  justify-content: space-between;
	  align-items: center;
	}
	.img {
	  width: 50%;
	}
	.contact form {
    display: flex;
    justify-content: center;
	}
  .myForm {
    display:flex;
    justify-content: center;
  }


	submit {
		text-align: right;;
	}

.formulaire_sofian {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
}

	h2 {
		color: black;
	}

  </style>
  
  <script setup>
function validateForm()                                    
{ 
    let nom = document.forms["myForm"]["nom"];               
    let email = document.forms["myForm"]["email"];    
    let message = document.forms["myForm"]["message"];   
   
    if (nom.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        nom.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}

</script>