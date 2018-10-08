/**
 * Created by nosova.m on 01.10.2018.
 */

$(document).ready(function () {

    $('input').keyup(function () {

        $(this).siblings('label').addClass('show');
        if (!$(this).val().trim()) {
            $(this).siblings('label').removeClass('show');
        }
    });


    function readURL(input) {
        if ($(input).parents('.file-upload').siblings('.img-preview').length) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {


                    $('#image').attr('src', e.target.result);

                };

                reader.readAsDataURL(input.files[0]);

            }


        }
        if (input.files[0].size > 1024 * 1024) {
            fileSize = (Math.round(input.files[0].size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        } else {
            fileSize = (Math.round(input.files[0].size * 100 / 1024) / 100).toString() + 'KB';
        }
        $(input).parents('.file-upload').siblings(".file-size").text('Размер: ' + fileSize);
        var filename = $(input).val().replace(/.*\\/, "");
        $(input).parents('.file-upload').siblings(".file-name").text(filename);


    }

    $(".file-upload input[type=file]").change(function () {

        readURL(this);
    });

    $('input[type="checkbox"]#4').click(function () {

        var f = this.form;

        if (this.checked) {
            f.submit.disabled = 0;
        }

        else {

            f.submit.disabled = 1;
        }
    });

    $('input').inputmask();
});