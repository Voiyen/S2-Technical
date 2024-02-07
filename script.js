function animateBox(day) {
    var existingBox = document.querySelector('.box');
    if (existingBox) {
        // If there's already a box, exit it with animation and remove it
        existingBox.style.transform = 'translateY(200px)';
        existingBox.style.opacity = '0';

        setTimeout(function () {
            existingBox.remove();
            showNewBox(day);
        }, 500);
    } else {
        // If there's no existing box, just show the new box
        showNewBox(day);
    }
}

function showNewBox(day) {
    // Create a new box element
    var newBox = document.createElement('div');
    newBox.className = 'box';
    document.body.appendChild(newBox);

    // Set up the new box with entrance animation
    setTimeout(function () {
        newBox.style.backgroundColor = getRandomColor(day);
        newBox.style.transform = 'translateY(0)';
        newBox.style.opacity = '1';
    }, 100);
}

function getRandomColor(day) {
    // Specific color spectrums for each day
    switch (day) {
        case 'Monday':
            return '#000080';
        case 'Tuesday':
            return '#04047a';
        case 'Wednesday':
            return '#0a173b';
        case 'Thursday':
            return '#0f1c52';
        case 'Friday':
            return '#17236a';
        case 'Saturday':
            return '#71788f';
        case 'Sunday':
            return '#eaf0f7';
        default:
            return '#ccc';
    }
}

function changeButtonStyle(button) {
    button.style.backgroundColor = '#666';
    button.style.color = '#fff';
}

function restoreButtonStyle(button) {
    var day = button.id;
    button.style.backgroundColor = getRandomColor(day);
    button.style.color = '#fff';
}