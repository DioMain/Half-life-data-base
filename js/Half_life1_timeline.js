var Dsc_title = document.getElementById('DSC_TITLE');
var Dsc_info = document.getElementById('DSC_INFO');

function sellect(value) {
    switch (value) {
        case 1:
            Dsc_title.innerHTML = "Prospero";
            Dsc_title.style = "color: #8df542";

            Dsc_info.innerHTML = "Первая игра, которая должна была выйти из-под пера valve." + 
            " Однако, из-за того, что большинство идей было растыкано по другим играм," + 
            " игру были вынуждены заморозить." + 
            "<br><br> Что бы узнать больше нажмите на выбранный тайм-лайн...";  
            break;
        case 2:
            Dsc_title.innerHTML = "Half-life";
            Dsc_title.style = "color: goldenrod";

            Dsc_info.innerHTML = "Научно-фантастический шутер от первого лица, разработанный и изданный компанией Valve." + 
            " Игрок берет на себя роль ученого Гордона Фримена, который изо всех сил пытается сбежать" + 
            " из подземного исследовательского центра после того, как неудачный эксперимент вызвал массовое" + 
            " вторжение инопланетян через меж пространственный разлом." + 
            "<br><br> Что бы узнать больше нажмите на выбранный тайм-лайн...";  
             break;
        case 3:
            Dsc_title.innerHTML = "Half-life:opposing force";
            Dsc_title.style = "color: green";

            Dsc_info.innerHTML = "Крупное дополнение к основному сюжету Half-life разработана Gear Box Software" + 
            " и изданная Valve. Вам в роли главнокомандующего отрядом HECU Адрианам Шепардом предстоит" + 
            " вновь пройти через комплекс Чёрная Меза. Вам на пути будут попадётся новые противники" + 
            " в виде расы-X, а так же чёрные оперативники." + 
            "<br><br> Что бы узнать больше нажмите на выбранный тайм-лайн...";  
            break;
        case 4:
            Dsc_title.innerHTML = "Half-life:decay";
            Dsc_title.style = "color: #db4f2c";

            Dsc_info.innerHTML = "Кооперативное дополнение разработана Gear Box Software изданное Valve специально" + 
            " для консоли PlayStation 2, однако уже портированна умельцами и на ПК." + 
            " В игре вы и ваш друг берут под управление двух девушек Колет Грин и Джину" + 
            " Кросс. В целом ваша задача на игру подготовить к запуску коммуникационный" + 
            " спутник, который позже запускает Фримен в Half-Life." + 
            "<br><br> Что бы узнать больше нажмите на выбранный тайм-лайн...";  
            break;
        case 5:
            Dsc_title.innerHTML = "Half-life:blue shift";
            Dsc_title.style = "color: #4f45ff";

            Dsc_info.innerHTML = "Не большое дополнение к основному сюжету Half-life," + 
            " однако очень важное в нарративном плане, разработана Gear Box Software" + 
            " и изданная Valve.  Тут вы будете играть за охранника Чёрной мезы" + 
            " и друга Гордона Фримена Барни Калхауна. " + 
            "<br><br> Что бы узнать больше нажмите на выбранный тайм-лайн...";  
             break;
        default:
            Dsc_title.innerHTML = "Выберете время...";
            Dsc_title.style = "color: white";

            Dsc_info.innerHTML = "";  
    }
}