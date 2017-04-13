setTimeout(function() {
    var headerElement = document.getElementById('pageHeader');
    if (headerElement) {
        headerElement.style.fontSize = '3em';
    }

    var boxContainerElement = document.getElementsByClassName('boxContainer')[0];
    if (boxContainerElement) {
        var innerBoxElements = boxContainerElement.getElementsByClassName('box');
        for (var i = 0; i < innerBoxElements.length; i++) {
            var boxElement = innerBoxElements[i];
            boxElement.innerHTML += '<br /><br /><i>In case we need simple things</i>.';
            boxElement.parentNode.className += ' boxsizer';
        }

        var clearFloatDiv = document.createElement('div');
        clearFloatDiv.className = 'clear';
        boxContainerElement.appendChild(clearFloatDiv);
    }
}, 700);
