<<<<<<< HEAD
$('button').on('click', function() {
=======

$('.likes').on('click', function() {
>>>>>>> 49793f39bbd4f9d5b22c5ffe15988b11b24fbed2

  var id = {
    id: $(this).attr('id')
  }
  $.ajax({
    type: "POST",
    url: "resources/new/like/" + id.id + "",
    success: function (data) {

      var likes = data

      console.log(likes)

      $('#'+id.id).text(likes[0])
      $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
      $('#heart').css("color", "red")
    }
  })
})

