var useLocalStorage = false;

$(document).ready(function () {
    

    $('#add-news').click(function () {
        fetch("http://localhost:3000/add-news?description=" + $('#text-news').val().trim() + "&title=" + $('#label-news').val().trim() + "&image=" +"PNG/new_news.jpg" );
        addDataToDB($('#text-news').val().trim(), $('#label-news').val().trim(),"PNG/new_news.jpg")
    });



    $('input[type=file]').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $("#add-image").attr('src', tmppath);

    });
});

function isOnline() {
    return window.navigator.onLine;
}

function checkForms() {
    if ($('#add-image').attr('src') != 'PNG/Image.png' && $('#label-news').val().trim() != '' && $('#text-news').val().trim() != '') {
        return true;
    } else {
        if ($('#text-news').val().trim() == '') {
            $('#text-news').css('border-color', '#FF2D2D');
            $('#text-news').css('border-width', '4px');
        } else {
            $('#text-news').css('border-color', '#A9A9A9');
            $('#text-news').css('border-width', '1px');
        };
        if ($('#label-news').val().trim() == '') {
            $('#label-news').css('border-color', '#FF2D2D');
            $('#label-news').css('border-width', '4px');
        } else {
            $('#label-news').css('border-color', '#A9A9A9');
            $('#label-news').css('border-width', '1px');
        }
        if ($('#add-image').attr('src') == 'PNG/Image.png') {
            alert('Додайте зображення')
        }
        return false;
    }

}

function addDataToDB(description, title, image) {
    
    alert("sended");
};
        
    
