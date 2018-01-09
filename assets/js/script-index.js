$(document).ready( function(){
  printNews()

  $("#arrow").remove();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);
  renderActivities(activitiesArray);

});
//función para agregar noticia
function printNews () {
  $(".newscontainer").append("NUEVAS RECETAS");
};
/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  var highlightedRecipes = [];
  for (var i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].highlighted == true) {
      highlightedRecipes.push(recipesArray[i]);
    }
  }
  renderRecipe(highlightedRecipes);
  console.log('Recipes: ', highlightedRecipes);
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
  for (var i = 0; i < recipe.length; i++) {
    $(".list-recipes").append(`<a class="item-recipe" href="#"><span class="attribution">
      <span class="title-recipe">`+ recipe[i].title + `</span><span class="metadata-recipe">
      <span class="author-recipe">`+ recipe[i].source.name + `</span><span class="bookmarks-recipe">
      <span class="icon-bookmark"></span></span></span></span><img src="assets/img/recipes/320x350/`+ recipe[i].name +`.jpg"</a>` );
    console.log('Voy a pintar la receta: ', recipe[i]);
  }
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities (activitiesArray) {
  for(var i = 0; i < activitiesArray.length; i++){
    renderActivity (activitiesArray[i]);
    if(activitiesArray.length > 0){
      $('.wrapper-message').hide();
    }
  }
  console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity (recipe) {
  $(".list-activities").append(`<a href="#" class="item-activity"><span class="attribution"><span class="avatar">
    <img src="`+ recipe.userAvatar + `" class="image-avatar"></span><span class="meta">
    <span class="author">`+ recipe.userName + `</span> made <span class="recipe">`+ recipe.recipeName +
    `</span>: `+ recipe.text + `<span class="location">&mdash;`+ recipe.place + `</span>
    </span></span> <div class="bg-image" style="background-image: url('assets/`+ recipe.image +
    `'"></div></a>`);
}
