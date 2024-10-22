var color = 0;
function changeColors()
{
    var colors = ["red", "blue", "green", "orange", "yellow", "purple"];
    document.getElementsByTagName("body")[0].
    style.background = colors[color++];

    if(color > colors.length - 1)
    {
        color = 0
    }
}