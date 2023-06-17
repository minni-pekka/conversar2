// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
 const firebaseConfig = {
    apiKey: "AIzaSyC7HlJIQUZluZSsFFErnVkeL_Lw3VCFRDM",
    authDomain: "conversar-a7c02.firebaseapp.com",
    projectId: "conversar-a7c02",
    storageBucket: "conversar-a7c02.appspot.com",
    messagingSenderId: "170005666919",
    appId: "1:170005666919:web:00a2d45037ec46601f08c2"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";

}



