$(document).ready(function () {
     images=JSON.parse(localStorage.getItem("images"));
    titleNews=JSON.parse(localStorage.getItem("titleNews"));
    textNews=JSON.parse(localStorage.getItem("textNews"));
    if(titleNews==null){
        images=[]
        titleNews=[]
        textNews=[]
    }
     $('#add-news').click(function () {
        if ($('#add-image').attr('src') != 'PNG/Image.png') {
            if ($('#label-news').val().trim() != '' && $('#text-news').val().trim() != '') {
                 images.push("PNG/new_news.jpg");
                titleNews.push($('#label-news').val());
                textNews.push($('#text-news').val());
                if(!isOnline()){
                    localStorage.setItem("images", JSON.stringify(images));
                    localStorage.setItem("titleNews", JSON.stringify(titleNews));
                    localStorage.setItem("textNews", JSON.stringify(textNews));
                }
                $('#label-news').css('border-color', '#A9A9A9');
                $('#label-news').css('border-width', '1px');
                $('#text-news').css('border-color', '#A9A9A9');
                $('#text-news').css('border-width', '1px');
                alert('Новина успішно додана');
                $('#text-news').val('');
                $('#label-news').val('');
                $('#add-image').attr("src", "img/icon.png");
}
}
    });
});
 function isOnline() {
    return window.navigator.onLine;
}
 window.addEventListener("online", function(){
    sendData();
    this.localStorage.removeItem("images");
    this.localStorage.removeItem("textNews");
    this.localStorage.removeItem("textNews");
});
 function sendData() {
