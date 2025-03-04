document.addEventListener("DOMContentLoaded", function () {
    const declineButton = document.querySelector('button[aria-label="Decline Invitation"]');
    const acceptButton = document.querySelector('button[aria-label="Accept Invitation"]');
    const scheduleSection = document.querySelector(".schedule");
    const popup = document.getElementById('popup'); // Pop-up element
    const popupImagesContainer = document.getElementById('popup-images'); // Container for images
    const popupMessage = document.getElementById('popup-message'); // Pop-up message element

    // Array of messages, each with an array of images
    const declineMessages = [
        {
            text: 'Please accept :(',
            images: [
                'https://ih1.redbubble.net/image.5229600143.6200/st,small,507x507-pad,600x600,f8f8f8.jpg'

            ]
        },
        {
            text: 'It would make her happy!',
            images: [
                'https://ih1.redbubble.net/image.5229619388.6668/st,medium,507x507-pad,600x600,f8f8f8.jpg'

            ]
        },
        {
            text: 'Don\'t decline :(',
            images: [
                'https://ih1.redbubble.net/image.5229626673.6847/st,small,507x507-pad,600x600,f8f8f8.jpg'

            ]
        }
    ];

    // Array of messages and images for Accept button
    const acceptMessages = [
        {
            text: 'HORAAYYYYY!',
            images: [
                'https://ih1.redbubble.net/image.5229595445.6086/st,small,507x507-pad,600x600,f8f8f8.jpg'
            ]
        },
        {
            text: 'You made her day!',
            images: [
                'https://ih1.redbubble.net/image.5241384934.1677/st,small,507x507-pad,600x600,f8f8f8.jpg'
            ]
        },
        {
            text: 'Thank you for coming!',
            images: [
                'https://ih1.redbubble.net/image.5232215125.7848/st,small,507x507-pad,600x600,f8f8f8.jpg'

            ]
        }
    ];

    let declineMessageIndex = 0; // Keeps track of the current message index for decline
    let acceptMessageIndex = 0; // Keeps track of the current message index for accept

    // Add event listener to the Decline button
    declineButton.addEventListener("click", function () {
        // Change the message and images in the popup for Decline
        popupMessage.textContent = declineMessages[declineMessageIndex].text;

        // Clear the previous images
        popupImagesContainer.innerHTML = '';

        // Add the images to the pop-up
        declineMessages[declineMessageIndex].images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Popup Image';
            popupImagesContainer.appendChild(imgElement);
        });

        // Show the pop-up
        popup.style.display = 'block';

        // Hide the pop-up after 3 seconds (3000 milliseconds)
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000); // Adjust the time as needed (currently 3 seconds)

        // Update the message index for the next time
        declineMessageIndex = (declineMessageIndex + 1) % declineMessages.length;

        // Shrink the Decline button and enlarge the Accept button
        let declineButtonScale = parseFloat(declineButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
        let acceptButtonScale = parseFloat(acceptButton.style.transform.replace('scale(', '').replace(')', '')) || 1;

        if (declineButtonScale > 0.5) {
            declineButtonScale -= 0.1;
        } else {
            declineButtonScale = 0.5;
        }

        if (acceptButtonScale < 2) {
            acceptButtonScale += 0.1;
        }

        declineButton.style.transform = `scale(${declineButtonScale})`;
        declineButton.style.transition = 'transform 0.3s ease';

        acceptButton.style.transform = `scale(${acceptButtonScale})`;
        acceptButton.style.transition = 'transform 0.3s ease';
    });

    // Add event listener to the Accept button
    acceptButton.addEventListener("click", function () {
        // Change the message and images in the popup for Accept
        popupMessage.textContent = acceptMessages[acceptMessageIndex].text;

        // Clear the previous images
        popupImagesContainer.innerHTML = '';

        // Add the images to the pop-up
        acceptMessages[acceptMessageIndex].images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Popup Image';
            popupImagesContainer.appendChild(imgElement);
        });

        // Show the pop-up
        popup.style.display = 'block';

        // Hide the pop-up after 3 seconds (3000 milliseconds)
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000); // Adjust the time as needed (currently 3 seconds)

        // Update the message index for the next time
        acceptMessageIndex = (acceptMessageIndex + 1) % acceptMessages.length;

        // Reset the buttons to their original sizes
        declineButton.style.transform = 'scale(1)';
        acceptButton.style.transform = 'scale(1)';

        // Show the schedule section and scroll to it
        scheduleSection.style.display = "block";
        window.scrollTo({ top: scheduleSection.offsetTop, behavior: "smooth" });
    });
});