function showDayOne() {

    // clears content
    $(".movie-show-wrapper-col1").children().remove();
    $(".movie-show-wrapper-col2").children().remove();
    $(".movie-show-wrapper-col3").children().remove();

    //add movie in first column
    $(".movie-show-wrapper-col1").append(

        '<img src="assets/httyd.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">How to Train Your Dragon</h5>' +
        '<p class="card-text">6pm - 8pm</p>' +
        '<button class="btn btn-outline-primary" value="0" id="movie-btn0" onclick="MovieDetails(0);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    //add movie in second column
    $(".movie-show-wrapper-col2").append(

        '<img src="assets/shazam.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">Shazam</h5>' +
        '<p class="card-text">8pm - 10pm</p>' +
        '<button class="btn btn-outline-primary" value="1" id="movie-btn1" onclick="MovieDetails(1);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    //add movie in third column
    $(".movie-show-wrapper-col3").append(

        '<img src="assets/starWars.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">Star Wars: Fource Awakened</h5>' +
        '<p class="card-text">10pm - 12pm</p>' +
        '<button class="btn btn-outline-primary" value="2" id="movie-btn2" onclick="MovieDetails(2);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )

};

function showDayTwo() {

    $(".movie-show-wrapper-col1").children().remove();
    $(".movie-show-wrapper-col2").children().remove();
    $(".movie-show-wrapper-col3").children().remove();

    $(".movie-show-wrapper-col1").append(

        '<img src="assets/dumbo.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">Dumbo</h5>' +
        '<p class="card-text">6pm - 8pm</p>' +
        '<button class="btn btn-outline-primary" value="3" id="movie-btn3" onclick="MovieDetails(3);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    $(".movie-show-wrapper-col2").append(

        '<img src="assets/spiderMan.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">Spider-Man: Far From Home</h5>' +
        '<p class="card-text">8pm - 10pm</p>' +
        '<button class="btn btn-outline-primary" value="4" id="movie-btn4" onclick="MovieDetails(4);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    $(".movie-show-wrapper-col3").append(

        '<img src="assets/venom.jpg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">Venom</h5>' +
        '<p class="card-text">10pm - 12pm</p>' +
        '<button class="btn btn-outline-primary" value="5" id="movie-btn5" onclick="MovieDetails(5);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )

};

function showDayThree() {

    $(".movie-show-wrapper-col1").children().remove();
    $(".movie-show-wrapper-col2").children().remove();
    $(".movie-show-wrapper-col3").children().remove();

    $(".movie-show-wrapper-col1").append(

        '<img src="assets/legoMovie.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">lego Movie 2</h5>' +
        '<p class="card-text">6pm - 8pm</p>' +
        '<button class="btn btn-outline-primary" value="6" id="movie-btn6" onclick="MovieDetails(6);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    $(".movie-show-wrapper-col2").append(

        '<img src="assets/dogsWay.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">A Dogs Way Home</h5>' +
        '<p class="card-text">8pm - 10pm</p>' +
        '<button class="btn btn-outline-primary" value="7" id="movie-btn7" onclick="MovieDetails(7);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )
    $(".movie-show-wrapper-col3").append(

        '<img src="assets/avengers.jpeg" height="500" class="card-img-top" alt="...">' +
        '<div class="card-body text-center">' +
        '<h5 class="card-title">avengers: Endgame</h5>' +
        '<p class="card-text">10pm - 12pm</p>' +
        '<button class="btn btn-outline-primary" value="8" id="movie-btn8" onclick="MovieDetails(8);" type="button" data-toggle="modal" data-target="#movieModal">More Info...</button>' +
        '</div>'

    )

};
