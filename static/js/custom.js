jQuery(document).ready(function ($) {

  // make code pretty
  window.prettyPrint && prettyPrint();
  
  (function () {

    var $menu = $('nav'),
      optionsList = '<option value="" selected>Go to..</option>';

    $menu.find('li').each(function () {
        var $this = $(this),
          $anchor = $this.children('a'),
          depth = $this.parents('ul').length - 1,
          indent = '';

        if (depth) {
          while (depth > 0) {
            indent += ' - ';
            depth--;
          }

        }
        $(".nav li").parent().addClass("bold");

        optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
      }).end()
      .after('<select class="selectmenu">' + optionsList + '</select>');

    $('select.selectmenu').on('change', function () {
      window.location = $(this).val();
    });

  })();

  //to top
  $().UItoTop({
    easingType: 'easeOutQuart'
  });

  //add some elements with animate effect
  /*$(".features").hover(
    function () {
      $(this).find('.icon').addClass("animated fadeInUp");
      $(this).find('a.btn').addClass("animated fadeInRight");
      $(this).find('.features_content').addClass("animated fadeInDown");
    },
    function () {
      $(this).find('.icon').removeClass("animated fadeInUp");
      $(this).find('a.btn').removeClass("animated fadeInRight");
      $(this).find('.features_content').removeClass("animated fadeInDown");
    }
  );*/

  $(".cta-box").hover(
    function () {
      $(this).find('.cta a').addClass("animated wiggle");
    },
    function () {
      $(this).find('.cta a').removeClass("animated wiggle");
    }
  );

  $(".da-animate a").mouseover(function () {
    $(".da-thumbs li article", this).stop().animate({
      "padding-top": "10p%"
    }, {
      queue: false,
      duration: 500
    }, "slow");
  });
  $(".da-animate a").mouseout(function () {
    $(".da-thumbs li article", this).stop().animate({
      "padding-top": "25p%"
    }, "slow");
  });

  $('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });

});
