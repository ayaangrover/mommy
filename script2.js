        // Function to change the text
        function changeText() {
            document.getElementById("change").textContent = "CLICK HERE";
        }

        // Function to redirect to card.html
        function redirectToCard() {
            window.location.href = "card.html";
        }

        // Wait for the page to load
        window.addEventListener("load", function() {
            // Change the text after 5 seconds
            setTimeout(changeText, 3000);
        });