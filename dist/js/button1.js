$(document).ready(function () {
    $(".particles-btn").toArray().forEach(function (currentElement) {
        $(currentElement).on("click", function () {
            let radius = $(this).attr("data-radius");
            let particles = $(this).attr("data-particles");

            //add particles on click

            for (let i = 0; i < particles; i++) {
                $(this).append($("<span>").addClass("particle"));
            }
            $(this).addClass("active")
                .find(".particle")
                .toArray()
                .forEach(function (particle, index) {

                    $(particle).animate({
                        opacity: 0,
                        top: getRandomInteger(-radius, radius),
                        left: getRandomInteger(-radius, radius),
                        right: getRandomInteger(-radius, radius),
                        bottom: getRandomInteger(-radius, radius),


                    }, 600, function () {
                        $(this).remove();
                        $(currentElement).removeClass("active");

                    }); //animate
                });
        });

    });
    const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});