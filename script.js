document.addEventListener('DOMContentLoaded', function() {
    const rewardButton = document.getElementById('claimRewardButton');
    const rewardMessage = document.getElementById('rewardMessage');
    
    let rewards = 0;

    rewardButton.addEventListener('click', function() {
        rewards += 10; // Simulate gaining rewards
        rewardMessage.textContent = `You have earned 10 points! Total rewards: ${rewards} points.`;
    });
});
