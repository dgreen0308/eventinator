document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let selectedVibe = null;
    let selectedContext = null;
    let attemptCounter = 0;
    const MAX_ATTEMPTS = 5;

    // --- Element Selectors ---
    const vibeButtons = document.querySelectorAll('.vibe-button');
    const contextButtons = document.querySelectorAll('.context-button');
    const resultCard = document.getElementById('result-card');
    const activityNameEl = document.getElementById('activity-name');
    const activityDescEl = document.getElementById('activity-desc');
    const activityWhyEl = document.getElementById('activity-why');
    const contactUsEl = document.getElementById('contact-us');
    
    // --- Data ---
    const activities = [
        { vibe: 'Playful', context: 'Welcome Reception', name: 'Human Bingo', desc: 'Guests receive bingo cards with descriptions (e.g., "Find someone who speaks 3 languages") and must mingle to get signatures.', why: 'A purpose-driven icebreaker that encourages broad mingling and sparks fun, non-obvious conversations.' },
        { vibe: 'Creative', context: 'Mid-day break', name: '30 Circles Challenge', desc: 'Give everyone a paper with 30 empty circles. Challenge them to turn as many as they can into unique objects in one minute.', why: 'A quick, effective way to jump-start creative thinking and push past the first, most obvious ideas.' },
        { vibe: 'Chill', context: 'Post-meeting cool-down', name: 'Rose, Thorn, Bud', desc: 'Each person briefly shares a success (Rose), a challenge (Thorn), and a new idea or opportunity (Bud) from the meeting.', why: 'A structured reflection that builds psychological safety and gathers gentle feedback on the session.' },
        { vibe: 'Competitive', context: 'Quick warm-up', name: 'Rock, Paper, Scissors Tournament', desc: 'A fast-paced, elimination-style tournament. Winners play winners until only one champion remains.', why: 'A zero-prep, high-energy warm-up that gets everyone immediately engaged and laughing in under two minutes.' },
        { vibe: 'Surprising', context: 'Team lunch', name: 'Blind Food Tasting', desc: 'Arrange for a course or item to be eaten blindfolded, with the team guessing the ingredients.', why: 'Turns a simple meal into an adventurous and memorable sensory experience that challenges perception.' },
        // Add all other 25 activities here with 'desc' and 'why' properties...
    ];

    // --- Functions ---
    function displayResult(result) {
        if (attemptCounter >= MAX_ATTEMPTS) {
            resultCard.classList.add('hidden');
            contactUsEl.classList.remove('hidden');
            return;
        }

        if (result) {
            // Populate the card with the activity details
            activityNameEl.textContent = result.name;
            activityDescEl.textContent = result.desc;
            activityWhyEl.textContent = result.why;

            // Hide the contact message and show the result card
            contactUsEl.classList.add('hidden');
            resultCard.classList.remove('hidden');
            
            attemptCounter++;
        } else {
            // Optional: handle cases where no match is found
            resultCard.classList.add('hidden');
        }
    }

    function findActivity() {
        if (selectedVibe && selectedContext) {
            const result = activities.find(activity => 
                activity.vibe === selectedVibe && activity.context === selectedContext
            );
            displayResult(result);
        }
    }

    // --- Event Listeners ---
    vibeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedVibe = button.dataset.vibe;
            vibeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findActivity();
        });
    });

    contextButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedContext = button.dataset.context;
            contextButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findActivity();
        });
    });
});