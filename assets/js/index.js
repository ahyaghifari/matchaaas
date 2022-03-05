  AOS.init();

        function reveal() {
                var reveals = document.querySelectorAll(".about-title");
                var body = document.querySelectorAll(".about-body");

                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("now");
                        body[i].classList.add("now");
                    } else {
                        reveals[i].classList.remove("now");
                        body[i].classList.remove("now");
                    }
                }
            }

            window.addEventListener("scroll", reveal);

        $(document).ready(function () {
        

            $(window).on("scroll", function() {
                if($(this).scrollTop() >= 900 ) {
                    $('.spanline').addClass("scrl");
                }else{
                    $('.spanline').removeClass("scrl");
                };
            });

        });