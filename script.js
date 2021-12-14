$( function() {

    // menuの最初の要素以外を非表示にする
    $('.contents > div[id != "lunch"]').hide();

    $('.tab-menu__list-item > a').on('click', function() {

        // 1度全ての要素を非表示にする
        $('.contents > .menu').hide();

        // 選択された要素を表示する
        const a = $(this).attr ("href");
        $(a).show();

        return false;
    })
});