$(document).ready(() => {
  $('#contact').click(() => {
    const body = {
      email: $('#email').val(),
      message: $('#message').val()
    }
    $('#signup').attr('disabled', true);
    $.ajax({
      url: 'https://nanr-prod.azurewebsites.net/api/contact',
      type: 'POST',
      data: JSON.stringify(body),
      contentType: 'application/json',
      success: () => {
        $('#sent').css('display', 'initial');
        $('#signupForm').css('display', 'none');
      }
    });
  });
});
