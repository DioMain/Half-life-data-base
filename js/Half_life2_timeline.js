var Dsc_title = document.getElementById('DSC_TITLE');
var Dsc_info = document.getElementById('DSC_INFO');

function sellect(value) {
    switch (value) {
        case 1:
            Dsc_title.innerHTML = "Half-life 2 beta";
            Dsc_title.style = "color: #632b00";

            Dsc_info.innerHTML = "Half-Life 2 Beta, также известная как Half-Life 2 Alpha, Half-Life 2 Leak, Beta или утечка, — это общее название, которое относится к Half-Life 2 на интересных этапах его разработки, начиная с 1999 года. до его выпуска в 2004 году.";
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