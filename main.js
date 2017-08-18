
let wrapper = document.querySelector("#wrapper");
let button = document.getElementById('submit');
let searchTerm = "";
let urlBase = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/"
let container = document.getElementById("container");

button.addEventListener("click", function (concatInnerHTML){
  searchTerm = document.getElementById("search").value;

  fetch(urlBase + "?q=" + searchTerm)
  .then(function(response){
    response.json()
    .then(function(data) {
      let recipes = data.results;

      for (i=0; i<8; i++){
        let recipe = recipes[i];
        function myRecipes(recipe){

          let html = `

        <div class ='recipeBox'>
         <div class="recipeThumbnail">
          <img src='${recipe.thumbnail}' alt="">
         </div>

         <div class="recipeLink">
          <a href='${recipe.href}'>'${recipe.title}'</a>
         </div>
       </div>
        `;
        return html;
      }
      let addingRecipes = myRecipes(recipe);
      container.innerHTML += addingRecipes;
}


})
})
})
