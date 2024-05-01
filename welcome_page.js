window.onload = function() {
    document.getElementById('folk_handicrafts').addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.getElementById('folk_handicrafts_content').addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        document.getElementById('folk_handicrafts_content').style.display = 'none';
    });
};
