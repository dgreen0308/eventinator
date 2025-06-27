document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let selectedVibe = null;
    let selectedContext = null;

    // --- Element Selectors ---
    const vibeButtons = document.querySelectorAll('.vibe-button');
    const contextButtons = document.querySelectorAll('.context-button');

    // --- Data ---
    // This is the complete list of all possible activities.
    const activities = [
        { vibe: 'Playful', context: 'Welcome Reception', name: 'Human Bingo' },
        { vibe: 'Playful', context: 'Post-meeting cool-down', name: 'Team Mad Libs' },
        { vibe: 'Playful', context: 'Conference social', name: 'Reverse Charades' },
        { vibe: 'Playful', context: 'Mid-day break', name: 'One-Word Story' },
        { vibe: 'Playful', context: 'Quick warm-up', name: 'Who Am I? (Sticky Note Game)' },
        { vibe: 'Playful', context: 'Team lunch', name: 'Two-Sided Coin' },
        { vibe: 'Creative', context: 'Welcome Reception', name: 'Collaborative Doodle' },
        { vibe: 'Creative', context: 'Post-meeting cool-down', name: '"What If..." Scenarios' },
        { vibe: 'Creative', context: 'Conference social', name: 'Alternative Uses Challenge' },
        { vibe: 'Creative', context: 'Mid-day break', name: '30 Circles Challenge' },
        { vibe: 'Creative', context: 'Quick warm-up', name: 'Gibberish Expert' },
        { vibe: 'Creative', context: 'Team lunch', name: 'Napkin Pitch' },
        { vibe: 'Chill', context: 'Welcome Reception', name: 'Conversation Jenga' },
        { vibe: 'Chill', context: 'Post-meeting cool-down', name: 'Rose, Thorn, Bud' },
        { vibe: 'Chill', context: 'Conference social', name: 'Curated Music Listening' },
        { vibe: 'Chill', context: 'Mid-day break', name: 'Mindful Tasting' },
        { vibe: 'Chill', context: 'Quick warm-up', name: 'Collective Deep Breath' },
        { vibe: 'Chill', context: 'Team lunch', name: 'Desert Island Discs' },
        { vibe: 'Competitive', context: 'Welcome Reception', name: 'Company Trivia' },
        { vibe: 'Competitive', context: 'Post-meeting cool-down', name: '"Minute to Win It" Challenge' },
        { vibe: 'Competitive', context: 'Conference social', name: 'Pub-Style Quiz' },
        { vibe: 'Competitive', context: 'Mid-day break', name: 'Paper Airplane Contest' },
        { vibe: 'Competitive', context: 'Quick warm-up', name: 'Rock, Paper, Scissors Tournament' },
        { vibe: 'Competitive', context: 'Team lunch', name: 'Two-Bite Challenge' },
        { vibe: 'Surprising', context: 'Welcome Reception', name: 'Secret Agent Mission' },
        { vibe: 'Surprising', context: 'Post-meeting cool-down', name: 'Unexpected Expert Talk' },
        { vibe: 'Surprising', context: 'Conference social', name: 'Spontaneous Magician' },
        { vibe: 'Surprising', context: 'Mid-day break', name: 'The Marshmallow Challenge' },
        { vibe: 'Surprising', context: 'Quick warm-up', name: 'Empathy Map' },
        { vibe: 'Surprising', context: 'Team lunch', name: 'Blind Food Tasting' }
    ];

    // --- Functions ---
    function findAndDisplayActivity() {
        // Only run if both a vibe and a context have been selected.
        if (selectedVibe && selectedContext) {
            console.log(`Searching for: Vibe=${selectedVibe}, Context=${selectedContext}`);
            
            const result = activities.find(activity => 
                activity.vibe === selectedVibe && activity.context === selectedContext
            );

            if (result) {
                // For now, we just print the result to the console to test it.
                console.log('Found a match:', result);
                alert(`Activity Found: ${result.name}`); // We can use an alert for easy testing!
            } else {
                console.log('No match found for this combination.');
            }
        }
    }

    // --- Event Listeners ---
    vibeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedVibe = button.dataset.vibe;
            vibeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findAndDisplayActivity(); // Run the search
        });
    });

    contextButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedContext = button.dataset.context;
            contextButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            findAndDisplayActivity(); // Run the search
        });
    });
});