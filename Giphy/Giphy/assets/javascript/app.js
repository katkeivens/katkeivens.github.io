
      var dogBreeds = ["Pitbull", "Dachshund","Pug", "Chihuahua", "Labrador Retriever", "German Shepard", "Golden Retriever", "Greyhound"];

      function displayDogBreed() {
        $('#results').empty();
        
        var dog = $(this).attr("data-breed");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=dog-" +
        dog + "&api_key=LqFfxQgacoaBAcKSMLGOIZugtjW5zzyk&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        console.log(response)
        var results = response.data
        for (var i = 0; i < results.length; i++) {

          var breedDiv = $('<div class="dog col-sm-4">');
          var paragraph = $('<p>').text("Rating: " + results[i].rating);
          var dogImage = $('<img>');
          dogImage.attr('src', results[i].images.fixed_width.url);
          breedDiv.append(paragraph);
          breedDiv.append(dogImage);
          $('#results').prepend(breedDiv)
        }
      });

      }

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < dogBreeds.length; i++) {

          var button = $("<button>");
          button.addClass("breed");
          button.attr("data-breed", dogBreeds[i]);
          button.text(dogBreeds[i]);
          $("#buttons-view").append(button);
        }
      }

      $("#add-dogBreed").on("click", function(event) {
        event.preventDefault();
        var breed = $("#dog-input").val().trim();
        dogBreeds.push(breed);
        renderButtons();
      });

      $(document).on("click", ".breed", displayDogBreed);
      renderButtons();