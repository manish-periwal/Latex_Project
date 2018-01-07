/**
 * Created by manishp on 17-11-2017.
 */
    $(function(){


var $form = $("#thesis_form"),
    $successMsg = $(".alert");
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
    rules: {
        author_name: {
            required: true,
            minlength: 3,
            letters: true
        },

        department:{
            required: true
        },

        prof_name: {
            required: true,
            minlength: 3,
            letters: true
        },

        title: {
            required: true,
            minlength: 3
        }


    },
    messages: {
        author_name: "Please specify your name (only letters and spaces are allowed)",
        prof_name: "Please specify your name (only letters and spaces are allowed)"
    },

    submitHandler: function() {
        $successMsg.show();
        $('#thesis_form')[0].submit();
        $('#thesis_form input[type="text"]').val('');
        $('#department').val('');

    }

});

    });