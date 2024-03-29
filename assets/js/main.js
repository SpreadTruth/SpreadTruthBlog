(function($) {
  $(function() {
    var _window = $(window);
    var body = $('body');
    var navigation = $('#orian-navigation');
    var header = $('#blog-header');

    _window.on('resize orientationchange', function() {
      header.css({
        marginTop: navigation.outerHeight()
      });
    }).trigger('resize');

    if (body.hasClass('post-template') || body.hasClass('page-template')) {
      var detail = $('.orian-post-detail');
      var image = detail.find('.post-content').find('> p').first().find('img').first();
      var title = detail.find('.post-title').text();

      if (image && image.length > 0) {
        var paragraph = image.parents('p').first();

        if (paragraph.text() == '') {
          paragraph.addClass('hidden');
        } else {
          image.addClass('hidden');
        }

        header.css({
          backgroundImage: 'url(\'' + image.prop('src') + '\')'
        });
      }

      header.find('h1').text(title).addClass('header-shadow').hide();
      header.find('.hero-subheader').hide();

      $('article').readingTime({
        readingTimeTarget: '.eta',
        wordCountTarget: '.word-count',
      });
    } else if (body.hasClass('home-template') || body.hasClass('archive-template') || body.hasClass('tag-template')) {
      $('.orian-post-preview').each(function() {
        var el = $(this);
        var time = el.find('time');
        var imageWrapper = el.find('.post-image');
        var image = imageWrapper.find('img');

        time.text(moment(time.text()).fromNow());
        if (image.length) {
          imageWrapper.css({
            backgroundImage: 'url(' + image.prop('src') + ')'
          }).removeClass('hidden');
        } else {
          imageWrapper.remove();
        }
      });
    }

    if ($.fn.fitVids) {
      $("#orian-content").fitVids();
    }

  });

})(jQuery);
