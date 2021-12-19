$( function() {


    // header-burger-btn
    $('.header-burger-btn').click ( function() {

        $( this ).toggleClass('cross');
        $('.header-nav').fadeToggle(500);
    });



    // スクロールするとヘッダーを固定
    $(window).scroll( function () {

        const headerHeight = $('.header').Height();
        const scrollHeight = $(window).scrollTop();

        if (headerHeight < scrollHeight) {

            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });




    // menuの最初の要素以外を非表示にする
    $('.contents > div[id != "lunch"]').hide();

    $('.tab-menu__list-item > a').on('click', function() {

        // 1度全ての要素を非表示にする
        $('.contents > .menu').hide();

        // 選択された要素を表示する
        const a = $(this).attr ("href");
        $(a).show();

        // 現在のcurrentクラスを削除
        $('.current').removeClass('current');

        // 選択されたタブにcurrentクラスを追加
        $(this).addClass('current');

        return false;
    });






    // burger-btnを押したらクリックイベント
    $('.burger-btn').click( function() {

        // burger-btnにcrossクラスを追加
        if ($('.burger-btn').hasClass('cross')) {
            $(this).removeClass('cross');
        } else {
            $(this).addClass('cross');
        }

        $('.nav').slideToggle(200);
    });







    // .bgを非表示にする
    $('.bg').hide();

    $('.alert-btn').click( function () {
        $('.bg').fadeIn(300);
    });

    $('.ok').click( function () {
        $('.bg').fadeOut(300);
    })









    // viewer
    $('.img-item > a').click ( function() {

        const img = $(this).attr("href");

        $('figure > img').attr("src", img);

        return false;
    });





    // dropdown
    $('.dropdown-list__item-list').hide();

    $('.dropdown-list__item').hover( function () {

        $(this).children('.dropdown-list__item-list').stop().slideToggle(200);
    });





    // modal
    $('.modal-item > a').click (function () {

        $('body').append('<div id="bg">');
        $('#bg').append('<div class="photo">');

        $('.photo').html("<img>");
        $('.photo > img').attr("src", $(this).attr("href"));

        

        return false;
    });
});