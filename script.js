function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
       console.log(data);

        function afficherTitreJournal(){
          let title = data.journal.nomJournal;
          console.log(title);
          let titleID= document.getElementById("title");
          console.log(titleID);
          titleID.insertAdjacentHTML("beforeend",title);
        }
        afficherTitreJournal();

        function afficherphraseAccroche(){
          let phrased = data.journal.phraseAccroche;
          console.log(phrased);
          let phraseID= document.getElementById("phrased");
          console.log(phraseID);
          phraseID.insertAdjacentHTML("beforeend", phrased);
        }
        //afficherphraseAccroche();

        function affichertexteappelaction(){
        let textaa = data.journal.texteAppelAction;
        console.log(textaa);
        let textId = document.getElementById("textaa");
        console.log(textId);
        textId.insertAdjacentHTML("beforeend",textaa)
        } 
        //affichertexteappelaction();
      

        function articlePrincipal(){

          let arrticlePrincipalID= document.getElementById("articlePrincipal");



          let image =data.journal.articlePrincipal.image;
          console.log(image);
          

          let titlemaj = data.journal.articlePrincipal.titre;
          console.log(titlemaj);
     
          
          let description = data.journal.articlePrincipal.description;
          console.log(description);
         

          let date1 = data.journal.articlePrincipal.date;
          console.log(date1);
        

          let theme = data.journal.articlePrincipal.theme;
          console.log(theme);
          

          let articlePrincipal= `<div class="fond">
          <img src="${image}" alt="${titlemaj}">
          <h2 id="${titlemaj}"></h2>
          <h3 id="${description}"></h3>
          <h5 id="${date1}"></h5>
          <h2 id="${theme}"></h2>
          </div>`;
          arrticlePrincipalID.insertAdjacentHTML("beforeend",articlePrincipal);

        }
        articlePrincipal()


        
       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici