/* Вывод объявлений */
loadMore();
var index = 0;
var limit_items = 16;
function loadMore() {
    $.getJSON('products.json', function (products) {
        for (var i = 0; i < limit_items; i++) {
            if (index++ >= products.length) {
                $('#loadmore').hide();
                return;
            }
            var j = new Date(products[index - 1]['date'] * 1000);
            $("#announcement__items").append('<div class="item-add ' + products[index - 1]['seen'] + '" ><div class="item-add__img"><div class="item__add-slick"><img class="main-img" src="img/add-1.jpg" alt=""><img class="main-img" src="img/add-2.jpg" alt=""></div><div class="item-add__stat"><span class="item-add__compare item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z" fill="white" stroke="#2C2C2C"/> <path d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z" fill="white" stroke="#2C2C2C"/> <path d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z" fill="white" stroke="#2C2C2C"/> </svg></span><span class="item-add__like item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.7145 22.3777L12.0346 22.6553L12.3609 22.3852C13.7603 21.2268 15.9105 19.3458 17.8187 17.4619C18.7725 16.5203 19.6721 15.5719 20.3888 14.7086C21.0941 13.859 21.6617 13.0463 21.9022 12.3825C22.9848 9.3955 22.7974 5.73779 19.6122 3.72888C17.6001 2.45985 15.589 2.78969 14.1306 3.40281C13.4019 3.70916 12.7982 4.09036 12.3774 4.39363C12.2533 4.4831 12.1445 4.56621 12.0524 4.63922C12.0244 4.61489 11.9949 4.5894 11.9638 4.5629C11.7025 4.33971 11.334 4.04131 10.9066 3.74188C10.4805 3.44341 9.98677 3.13747 9.47528 2.90464C8.96903 2.6742 8.41214 2.4999 7.86869 2.5C6.19655 2.5003 4.01031 3.18253 2.76019 5.02228C1.07992 7.49509 1.07994 11.172 2.76022 13.6446C3.42257 14.6193 5.07482 16.289 6.82054 17.9439C8.58336 19.615 10.4931 21.3185 11.7145 22.3777Z" /></svg></span></div></div><div class="item-add__information-block"><div class="item-add__information-up"><div class="information-up__price"><span class="item-add__oldprice">' + products[index - 1]['oldPrice'] + ' ₽</span><span class="item-add__newprice">' + products[index - 1]['price'] + ' ₽</span></div><div class="information-up__icons"><span class="item-add__delivery"><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.42149 14.4356C5.50378 14.4356 6.38115 13.5583 6.38115 12.476C6.38115 11.3937 5.50378 10.5163 4.42149 10.5163C3.33919 10.5163 2.46182 11.3937 2.46182 12.476C2.46182 13.5583 3.33919 14.4356 4.42149 14.4356Z" fill="#C7C7C7"/> <path d="M17.6681 2.15701C17.3836 1.62474 16.8285 1.29297 16.225 1.29432H13.9336V4.35927C13.9336 4.70064 14.2333 4.97678 14.5748 4.97678H19.1774L17.6681 2.15701Z" fill="#C7C7C7"/> <path d="M15.5007 10.5163C14.4183 10.5163 13.5409 11.3937 13.5409 12.4761C13.5409 13.5585 14.4183 14.4359 15.5007 14.4359C16.5831 14.4359 17.4605 13.5585 17.4605 12.4761C17.4605 12.4761 17.4605 12.476 17.4605 12.476C17.4592 11.3942 16.5825 10.5175 15.5007 10.5163Z" fill="#C7C7C7"/> <path d="M20.6466 7.06404L19.6335 5.7729H14.5748C13.7943 5.7729 13.1374 5.13961 13.1374 4.35918V0.589641C13.1447 0.271307 12.8925 0.0074144 12.5742 0.000149016C12.5629 -9.97985e-05 12.5516 -5.01722e-05 12.5403 0.000397694H0.634577C0.293153 0.000397694 0 0.248217 0 0.589641V11.4847C0 11.8262 0.293153 12.0928 0.634577 12.0928H1.69119C1.89637 10.585 3.285 9.52895 4.79282 9.73407C6.01972 9.90103 6.98457 10.8659 7.15153 12.0928H12.7706C12.9759 10.5849 14.3646 9.529 15.8725 9.73422C17.0993 9.90123 18.064 10.866 18.231 12.0928H20.3654C20.7068 12.0928 21 11.8262 21 11.4847V8.07075C20.9966 7.70534 20.8724 7.35138 20.6466 7.06404Z" fill="#C7C7C7"/> </svg></span><span class="item-add__safe"><svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3L7 0L14 3V10.5C13 18 7 19 7 19C7 19 1 18 0 10.5V3ZM8.13247 7.07651L7.43896 5.80489C7.24946 5.45742 6.75054 5.45742 6.56104 5.80489L5.86754 7.07651C5.79562 7.20838 5.66824 7.30092 5.52061 7.32857L4.09692 7.59518C3.7079 7.66803 3.55372 8.14254 3.82562 8.43014L4.8207 9.48265C4.92389 9.59179 4.97255 9.74154 4.95322 9.89049L4.76683 11.3269C4.7159 11.7194 5.11954 12.0126 5.47709 11.8429L6.78558 11.2218C6.92127 11.1574 7.07873 11.1574 7.21441 11.2218L8.52291 11.8429C8.88045 12.0126 9.2841 11.7194 9.23317 11.3269L9.04678 9.89049C9.02745 9.74154 9.07611 9.59179 9.1793 9.48265L10.1744 8.43014C10.4463 8.14254 10.2921 7.66803 9.90308 7.59518L8.4794 7.32857C8.33176 7.30092 8.20438 7.20838 8.13247 7.07651Z" fill="#C4C4C4"/></svg></span></div></div><div class="item-add__information-middle"><span class="item-add__title">' + products[index - 1]['title'] + '</span></div><div class="item-add__information-down"><span class="item-add__cityname">' + products[index - 1]['locality'] + '</span><span class="item-add__date">' + (('0' + (j.getDate())).slice(-2)) + '.' + (('0' + (j.getMonth() + 1)).slice(-2)) + '.' + j.getFullYear().toString().substring(2) + ', ' + (('0' + (j.getHours())).slice(-2)) + '.' + (('0' + (j.getMinutes())).slice(-2)) + '</span></div></div></div>');

            var seen = products[index - 1]['seen'];
            seenCheck(seen);
            stingLength();   
        }
        readySlick();
        index += limit_items - 16;
        limit_items = products.length;
    });
   
}
/* Создание дива с надписью "просмотрено" */
function seenCheck(seen) {
    if (seen == true) {
        var articleDiv = document.getElementsByClassName("item-add")[index - 1];
        div = document.createElement('div');
        span = document.createElement('span');
        span.innerHTML = 'Просмотрено';
        div.className = 'add-seen';
        articleDiv.appendChild(div);
        div.appendChild(span);
    }
}
/* Сокращение строки с названием города до 15 символов */
function stingLength() {
    var cityname = document.getElementsByClassName("item-add__cityname")[index - 1];
    $(cityname).each(function () {
        if ($(this).text().length > 15) {
            $(this).text($(this).text().substring(0, 15) + '…');
        }
    });
}

/* Запуск слайдера объявлений */
function readySlick(){
    $('.item__add-slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false
    });
    
}

