

$(document).ready(function () {

    $('input').keyup(function () {
        $(this).siblings('label').addClass('show');
        if (!$(this).val().trim()) $(this).siblings('label').removeClass('show');
    });


    function readURL(input) {
        if ($(input).parents('.file-upload').siblings('.img-preview').length) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload =  (e) => $('#image').attr('src', e.target.result);
                reader.readAsDataURL(input.files[0]);

            }


        }
        if (input.files[0].size > 1024 * 1024)
            fileSize = (Math.round(input.files[0].size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
         else
            fileSize = (Math.round(input.files[0].size * 100 / 1024) / 100).toString() + 'KB';

        $(input).parents('.file-upload').siblings(".file-size").text('Размер: ' + fileSize);
        let filename = $(input).val().replace(/.*\\/, "");
        $(input).parents('.file-upload').siblings(".file-name").text(filename);


    }

    $(".file-upload input[type=file]").change(function () {

        readURL(this);
    });

    $('input[type="checkbox"]#4').click(function () {
        let f = this.form;
        (this.checked) ? f.submit.disabled = 0 : f.submit.disabled = 1;

    });

    $('.eye').on('click', function () {
        if ($(this).hasClass('hidden')) {
            $(this).siblings('input').attr('type', 'text');
            $(this).removeClass('hidden');
        } else {
            $(this).siblings('input').attr('type', 'password');
            $(this).addClass('hidden');
        }
        return false;
    });

    $('#firstname').on('keyup', function () {
        ($(this).val().trim()) ? $(this).siblings('a').removeClass('hidden'): $(this).siblings('a').addClass('hidden');
        return false;
    });

    $('.cross').on('click', function () {
        $(this).siblings('input').val(" ");
        ($(this).siblings('input').val().trim())? $(this).removeClass('hidden') : $(this).addClass('hidden');
        return false;
    });
});

