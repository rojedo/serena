function nextPage() {
    window.location.href="yes.html"
}

function moveButton() {
    var button = document.getElementById('noButton');
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    var maxX = window.innerWidth - buttonWidth;
    var maxY = window.innerHeight - buttonHeight;
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}
