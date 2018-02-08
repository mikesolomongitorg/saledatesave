$(document).ready(function() {

  // update email field value at bottom when top is changed
  $('#top_email').on('change', function(e) {
    e.preventDefault();
    $('#email').val( $('#top_email').val() )
    $('#replyto').val( $('#top_email').val() )
  })

  // set replyto to value of email
  $('#email').on('change', function(e) {
    e.preventDefault();
    $('#replyto').val( $('#email').val() )
  })

  // Scroll to the contact section when clicking Submit at the top of page
  $('#top_submit').on('click', function(e) {
    e.preventDefault();
    $(document).scrollTop( $("#contact").offset().top )
    $('#firstname').focus()
  })

  // redirect form after email submissions
  $('#form-redirect').val( window.location + 'thanks.html' )

})
