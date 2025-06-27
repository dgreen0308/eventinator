// 1. Store all 30 of your activities in a structured array
const activities = [
    { vibe: 'Playful', context: 'Welcome Reception', name: 'Human Bingo', ... },
    { vibe: 'Creative', context: 'Mid-day Break', name: 'Alternative Uses', ... },
    // ... all 30 activities here
];

// 2. Keep track of the user's clicks
let clickCounter = 0;
const MAX_CLICKS = 5;

// 3. Add "event listeners" to your buttons
document.getElementById('inspire-button').addEventListener('click', () => {
    if (clickCounter >= MAX_CLICKS) {
        // Show the contact message
        document.getElementById('result-card').classList.add('hidden');
        document.getElementById('contact-us').classList.remove('hidden');
        return; // Stop here
    }

    // Get the user's selected vibe and context
    const selectedVibe = 'Playful'; // Get this from the selector
    const selectedContext = 'Welcome Reception'; // Get this from the selector

    // Find a matching activity from your array
    const result = activities.find(a => a.vibe === selectedVibe && a.context === selectedContext);

    // Display the result on the page
    document.getElementById('activity-name').innerText = result.name;
    // ... and so on for the other details

    // Play a sound
    const sound = new Audio('sounds/upbeat-chime.mp3'); // You'll need sound files
    sound.play();

    // Increase the counter and show the result card
    clickCounter++;
    document.getElementById('result-card').classList.remove('hidden');
    document.getElementById('contact-us').classList.add('hidden');
});