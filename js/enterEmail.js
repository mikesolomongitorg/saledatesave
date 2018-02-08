$(document).ready(function() {

  // update email field value at bottom when top is changed
  $('#top_email').on('change', function(e) {
    e.preventDefault();
    $('#email').val( $('#top_email').val() )
  })

  // Scroll to the contact section when clicking Submit at the top of page
  $('#top_submit').on('click', function(e) {
    e.preventDefault();
    $(document).scrollTop( $("#contact").offset().top )
    $('#firstname').focus()
  })

})
