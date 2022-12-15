function changeStyle() {
    var input_width_val = document.getElementById('width').value;
    var input_heigth_val = document.getElementById('height').value;
    var input_bgColor_val = document.getElementById('bgColor').value;
    var position = document.getElementById('pos').value;
    var top = document.getElementById('t').value;
    var left = document.getElementById('l').value;
    var border = document.getElementById('border').value;
    var bgImage = document.getElementById('bgImage').value;
    var transition = document.getElementById('transition').value;

    document.getElementById('kvadrat').style.width = input_width_val;
    document.getElementById('kvadrat').style.height = input_heigth_val;
    document.getElementById('kvadrat').style.backgroundColor = input_bgColor_val;
    document.getElementById('kvadrat').style.position = position;
    document.getElementById('kvadrat').style.top = top;
    document.getElementById('kvadrat').style.left = left;
    document.getElementById('kvadrat').style.border = border;
    document.getElementById('kvadrat').style.backgroundImage = bgImage;
    document.getElementById('kvadrat').style.transition = transition;

}