/* フェード */

$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        var header = $('header').height();
        //ヘッダーの高さを引く
        var position = target.offset().top - header;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function() {
    setTimeout(function() {
        $('.start p').fadeIn(1600);
    }, 0); //0.5秒後にロゴをフェードイン!
    setTimeout(function() {
        $('.start').fadeOut(500);
    }, 2500);
});

/* スマホ用メニュー */

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }

    });
});
//メニュー内を閉じておく
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');

    });
});