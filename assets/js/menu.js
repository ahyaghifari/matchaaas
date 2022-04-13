AOS.init()
$(document).ready(function () {
    $('#header').load('components/header.html');
    $('#footer').load('components/footer.html');

    $.getJSON("data/menu.json", function (data) {
        let donut = data.menu[0].donut;
        let coffe = data.menu[1].coffe;
        let deserts = data.menu[2].desert;


        function menus(images, names) {
            return '<div class="menus"><img src="menu/'+ images +'" class="img-fluid" alt=""><p>'+names+'</p></div>'
        }

        $.each(donut, function (i, data) { 
            $('.donuts-menus').append(menus(data.image, data.name));
        });

        $.each(coffe, function (i, data) { 
            $('.coffes-menus').append(menus(data.image, data.name));
        });

        $.each(deserts, function (i, data) { 
            $('.deserts-menus').append(menus(data.image, data.name));
        });

    

        });

});