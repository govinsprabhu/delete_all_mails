function performOperations() {
    // Perform the checkbox click
    checkboxButton = document.querySelector("#\\:2c > div.J-J5-Ji.J-JN-M-I-Jm > span")
    if (checkboxButton) {
        checkboxButton.click();
    }

    // Perform the delete button actions
    document.querySelector("#\\:4 > div > div.nH.aqK > div.Cq.aqL > div > div > div.G-Ni.G-aE.J-J5-Ji > div.T-I.J-J5-Ji.nX.T-I-ax7.T-I-Js-Gs.mA")
	if (deleteButton) {
        // Create and dispatch mousedown event
        var mouseDownEvent = new MouseEvent('mousedown', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        deleteButton.dispatchEvent(mouseDownEvent);

        // Create and dispatch mouseup event
        var mouseUpEvent = new MouseEvent('mouseup', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        deleteButton.dispatchEvent(mouseUpEvent);

        // Finally, trigger the click event
        deleteButton.click();
    }
}

// Set interval to run the operation every 3 seconds (3000 milliseconds)
setInterval(performOperations, 3000);
