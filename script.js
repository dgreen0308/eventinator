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
    const contactUsSection = document.getElementById('contact-us');
    
    const activityNameEl = document.getElementById('activity-name');
    const activityDescEl = document.getElementById('activity-desc');
    const activityWhyEl = document.getElementById('activity-why');

    // --- Data ---
    const activities = [
        { vibe: 'Playful', context: 'Welcome Reception', name: 'Human Bingo', desc: 'Guests get bingo cards with descriptions and must mingle to get signatures.', why: 'A purpose-driven icebreaker that encourages broad mingling and sparks fun conversations.' },
        { vibe: 'Playful', context: 'Post-meeting cool-down', name: 'Team Mad Libs', desc: 'Create a Mad Libs story related to your company. Ask the team for nouns, verbs, and adjectives before revealing the story.', why: 'A low-stakes, humorous way to decompress that generates a shared, funny memory.' },
        { vibe: 'Creative', context: 'Mid-day break', name: '30 Circles Challenge', desc: 'Give everyone a paper with 30 empty circles. Challenge them to turn as many as they can into unique objects in one minute.', why: 'A quick, effective way to jump-start creative thinking and push past the first, most obvious ideas.' },
        { vibe: 'Chill', context: 'Post-meeting cool-down', name: 'Rose, Thorn, Bud', desc: 'Each person shares a success (Rose), a challenge (Thorn), and a new idea (Bud) from the meeting.', why: 'A structured reflection that builds psychological safety and gathers gentle feedback.'},
        // Add all 30 activities here in this format...
    ];

    // --- Functions ---
    function findAndDisplayActivity() {
        if (selectedVibe && selectedContext) {
            attemptCounter++;
            
            if (attemptCounter > MAX_ATTEMPTS) {
                resultCard.classList.add('hidden'); // Hide result card
                contactUsSection.classList.remove('hidden'); // Show contact message
                return;
            }

            const result = activities.find(activity => 
                activity.vibe === selectedVibe && activity.context === selectedContext
            );

            if (result) {
                activityNameEl.textContent = result.name;
                activityDescEl.textContent = result.desc;
                activityWhyEl.textContent = result.why;
                
                contactUsSection.classList.add('hidden');
                resultCard.classList.remove('hidden'); // Show the result card
            } else {
                activityNameEl.textContent = 'No Activity Found';
                activityDescEl.textContent = 'We don\'t have a suggestion for that specific combination yet!';
                activityWhyEl.textContent = 'Try another combination.';
                
                contactUsSection.classList.add('hidden');
                resultCard.classList.remove('hidden');
            }

            // Reset selections for the next try
            selectedVibe = null;
            selectedContext = null;
            vibeButtons.forEach(btn => btn.classList.remove('selected'));
            contextButtons.forEach(btn => btn.classList.remove('selected'));
        }
    }

    // --- Event Listeners ---
    vibeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedVibe = button.dataset.vibe;
            vibeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findAndDisplayActivity();
        });
    });

    contextButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedContext = button.dataset.context;
            contextButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findAndDisplayActivity();
        });
    });
});