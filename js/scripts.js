$(document).ready(function (){

    
    let containerA = document.getElementById("circleA");
    let containerB = document.getElementById("circleB");
    let containerC = document.getElementById("circleC");
    let containerD = document.getElementById("circleD");

    //Start ProgrssBar
    let dataAreaOffset = $('#data-area').offset();
    let stop = false;
    $(window).scroll(function (e) {
        let scroll = $(this).scrollTop();
        
        if (scroll > (dataAreaOffset.top - 500) && !stop) {
            progressBarCicle(containerA, 60);
            progressBarCicle(containerB, 254);
            progressBarCicle(containerC, 32);
            progressBarCicle(containerD, 5243);
            
            stop = true;
        }
    });

    //Parallax
    setTimeout(function () {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 250);

    // ProgessBar Function
    function progressBarCicle (container, size) {
        var duration = 1000 + 100 * (size / 50);
        duration = duration > 2000 ? 2000 : duration;
        let circleA = new ProgressBar.Circle(container, {
            color: '#64daf9',
            strokeWidth: 8,
            duration: duration,
            from: { color: '#aaa' },
            to: { color: '#64daf9' },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);

                let value = Math.round(circle.value() * size);

                circle.setText(value);
            }
        });

        circleA.animate(1.0)
    }

    //Portifolio Filter
    $('.filter-btn').on('click', function () {
        let type = $(this).attr('id');
        let boxes = $('.project-boxes div');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        eachBoxes(type, boxes);
    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn()
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut();
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    $('.navbar-nav a').click(function (e) {
        let url = $(this).attr('href');

        e.preventDefault();

        $([document.documentElement, document.Body]).animate({
            scrollTop: $(url).offset().top - 70
        });
    });

});