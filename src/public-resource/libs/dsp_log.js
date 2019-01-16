/*
 * @Author: zhanhaitao(zhanhaitao@021.com)
 * @Date:   2017-08-09 20:32:18
 * dsp可视日志上报js
 * @Last Modified time: 2017-08-09 21:15:43
 */

Zepto(function($) {
    $(window).on('scroll', function() {
        var $dspDomArr = $('.J-dsp-news');
        $dspDomArr.each(function() {
            var $target = $(this);
            var wH = $(window).height();
            var tH = $target.offset().top;
            var sH = $(window).scrollTop();
            var hasView = Number($target.attr('data-hasview')) || 0;
            if ((tH - sH + 16) < wH && $target.attr('data-inviewbackurl')) {
                if (hasView !== 1 && $target.attr('data-inviewbackurl')) {
                    new Image().src = $target.attr('data-inviewbackurl');
                    $target.attr('data-hasview', '1');
                }
            }
        });
    });
});