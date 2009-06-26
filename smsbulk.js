// $Id$ 

;if (Drupal && Drupal.jsEnabled) {
  Drupal.behaviors.smsbulk = function(context) {
    var $smstext = $('#edit-sms-text');
    var $keystrokes = $('#keystrokes span').eq(0).text('0 / ');
    var limit = Number($('#keystrokes').attr('class'));
    $smstext.bind('keypress', function(e) {
      var key = (e.keyCode ? e.keyCode : e.which);
      if ($smstext.val().length >= limit && (key != String.charCodeAt('\b'))) {
        e.preventDefault();
        return false;
      }
      return true;
    });
    $smstext.bind('keyup', function(e) {
      var chars = $smstext.val().length;
      $keystrokes.text(chars + ' / ');
    });
  };
}
