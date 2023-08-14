document.getElementById('btn').addEventListener('click',function(){
   const emailField = document.getElementById('email')
   const email = emailField.value
  
   const pass = document.getElementById('password')
   const password = pass.value

   if(email === 'misk@gmail.com' && password ==='misky'){
    window.location.href='bank.html'
   }
   else{
alert('tui password kemne bhule geli!!! get out of my side now')
   }
})