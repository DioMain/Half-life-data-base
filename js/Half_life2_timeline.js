var Dsc_title = document.getElementById('DSC_TITLE');
var Dsc_info = document.getElementById('DSC_INFO');

function sellect(value) {
    switch (value) {
        case 1:
            Dsc_title.innerHTML = "Half-life 2 beta";
            Dsc_title.style = "color: #632b00";

            Dsc_info.innerHTML = "Ранняя версия игры";  
            break;
        case 2:
            Dsc_title.innerHTML = "Half-life 2";
            Dsc_title.style = "color: #d48300";

            Dsc_info.innerHTML = "Продожение";
            break;
        case 3:
            Dsc_title.innerHTML = "Half-life 2: ep 1";
            Dsc_title.style = "color: #c49a56";

            Dsc_info.innerHTML = "Небольшой эпизод";  
             break;
        case 4:
            Dsc_title.innerHTML = "Half-life 2: ep 2";
            Dsc_title.style = "color: #bdac91";

            Dsc_info.innerHTML = "Завершающий эпизод";  
            break;
        default:
            Dsc_title.innerHTML = "Выберете время...";
            Dsc_title.style = "color: white";

            Dsc_info.innerHTML = "";  
    }
}