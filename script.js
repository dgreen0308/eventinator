document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    // These variables will hold the user's choices.
    let selectedVibe = null;
    let selectedContext = null;

    // --- Element Selectors ---
    // Get all the buttons from the page.
    const vibeButtons = document.querySelectorAll('.vibe-button');
    const contextButtons = document.querySelectorAll('.context-button');

    // --- Event Listeners ---

    // Add a click listener to each Vibe button
    vibeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the vibe from the button's "data-vibe" attribute
            selectedVibe = button.dataset.vibe;

            // Update visuals: remove 'selected' from all vibe buttons
            vibeButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' to the one that was just clicked
            button.classList.add('selected');

            console.log(`Vibe selected: ${selectedVibe}`);
            // We will add more logic here later
        });
    });

    // Add a click listener to each Context button
    contextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the context from the button's "data-context" attribute
            selectedContext = button.dataset.context;

            // Update visuals: remove 'selected' from all context buttons
            contextButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' to the one that was just clicked
            button.classList.add('selected');

            console.log(`Context selected: ${selectedContext}`);
            // We will add more logic here later
        });
    });
});