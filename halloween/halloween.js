$(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        //ハンバーガーメニュー//
        $(function() {
            $('.hamburger').click(function() {
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $('.globalMenuSp').addClass('active');
                } else {
                    $('.globalMenuSp').removeClass('active');
                }

                $(this).toggleClass('t-up');
                if ($(this).hasClass('t-up')) {
                    $('.m-logo .h img , .m-l a').addClass('t-up');
                } else {
                    $('.m-logo .h img , .m-l a').removeClass('t-up');
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

        //スクロールしたらロゴを変換//
        $(function() {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 180) {
                    $('.logo2 ').stop().fadeIn(200);
                } else {
                    $('.logo2 ').stop().fadeOut(300);
                }
            });
        });



        //ロードしたらロゴ２を高さによって表示、非表示//
        $(function() {
            $(document).ready(function() {
                if ($(window).scrollTop() < 180) {
                    $('.logo2').hide();
                } else {
                    $('.logo2').show();
                }
            });
        });

        //スクロールしたらヘッダーが上にずれる//
        $(function() {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 180) {
                    $('header ').addClass('slideOn');
                } else {
                    $('header ').removeClass('slideOn');
                }

            });
        });

    } else {
        // windowのサイズが768px以上
        //ハンバーガーメニュー//
        $(function() {
            $('.hamburger').click(function() {
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $('.globalMenuSp').addClass('active');
                } else {
                    $('.globalMenuSp').removeClass('active');
                }

                $(this).toggleClass('t-up');
                if ($(this).hasClass('t-up')) {
                    $('.m-logo .h img , .m-l a').addClass('t-up');
                } else {
                    $('.m-logo .h img , .m-l a').removeClass('t-up');
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

        //スクロールしたらロゴを変換//
        $(function() {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    $('.logo2 ').stop().fadeIn(200);
                } else {
                    $('.logo2 ').stop().fadeOut(300);
                }
            });
        });



        //ロードしたらロゴ２を高さによって表示、非表示//
        $(function() {
            $(document).ready(function() {
                if ($(window).scrollTop() < 300) {
                    $('.logo2').hide();
                } else {
                    $('.logo2').show();
                }
            });
        });

        //スクロールしたらヘッダーが上にずれる//
        $(function() {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    $('header ').addClass('slideOn');
                } else {
                    $('header ').removeClass('slideOn');
                }

            });
        });

        //スクロールして画像がずれる//
        $(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var mv = scroll / 8;
                $('.js-mv-img').css('transform', 'translateY(' + mv + 'px)');
                //ロゴの文字が段違いでずれる
                var hallo = scroll / -1.5;
                $('.hallo').css('transform', 'translateY(' + hallo + 'px)');
                var x = scroll / -2;
                $('.x').css('transform', 'translateY(' + x + 'px)');
                var ween = scroll / -2.5;
                $('.ween').css('transform', 'translateY(' + ween + 'px)');
            });
        });


        // スクロール時のふんわり感 //
        $(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var scrollB = -3 * scroll;
                var b = scrollB / 4;
                $("main").css('transform', 'translateY(' + b + 'px)');
            });
        });

        // footerをずらす //
        $(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var f = $('#video').offset().top;
                var fl = f - 500;
                var fs = (scroll / 10) - 150;
                if (fl < scroll) {
                    $('.js-f').css('transform', 'translateY(' + fs + 'px)');
                } else {
                    $('.js-f').css('transform', 'translateY(' + 0 + 'px)');
                };


            });
        });

        //　ロード画面　//

        $(function() {
            setTimeout(function() {
                $('.start p').fadeIn(500);
            }, 0);
            setTimeout(function() {
                $('.start').fadeOut(2500);
            }, 5000);
        });
    }
});