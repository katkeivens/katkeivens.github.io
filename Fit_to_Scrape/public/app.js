var thisId;

$(document).ready(function() {
  $.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "<br />" + "<br />" + "<button data-id='" + data[i]._id + "'>View Notes</button>" + "</p>");
      $("#articles").append("<hr>");
    }
  });


  $(document).on("click", "p", function() {
    $("#notes").empty();
    thisId = $(this).attr("data-id");
    refreshNotes(thisId);
  });

  $(document).on("click", "#savenote", function() {
    thisId = $(this).attr("data-id");
    console.log(thisId)

    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        title: $("#titleinput").val(),
        body: $("#bodyinput").val()
      }
    })
      .then(function(data) {
        refreshNotes(thisId);
      });

    $("#titleinput").val("");
    $("#bodyinput").val("");
  });

  $(document).on("click", ".noteButton", function() {
    var noteId = $(this).attr("data-noteId");
    console.log(thisId)

    $.ajax({
      method: "DELETE",
      url: "/notes/" + noteId,
    })
    refreshNotes(thisId);
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });

  function refreshNotes (id) {
    $("#notes").empty();
    $.ajax({
      method: "GET",
      url: "/articles/" + id
    })
    .then(function(data) {
      console.log(data);
      $("#notes").append("<h2>" + data.title + "</h2>");
      $("#notes").append("<div id='notesDiv'>");
      data.note.forEach(note => {
        $("#notes").append("<h3>Title: " + note.title + "</h3>");
        $("#notes").append("<p>Note: " + note.body + "</p>");
        $("#notes").append("<button class='noteButton' data-noteId=" + note._id + ">Delete</button>")
        $("#notes").append("<hr>");
      })
      $("#notes").append("<input id='titleinput' name='title' placeholder='Title'>");
      $("#notes").append("<textarea id='bodyinput' name='body' placeholder='Note'></textarea>");
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
    });
  }
})