document.addEventListener('DOMContentLoaded', (event) => {

    function animateButton(button) {
        button.style.transition = 'transform 0.2s';
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
    
    if (document.title === 'AimClick - Accueil') {
        const playButton = document.getElementById('playButton');
        const importSaveButton = document.getElementById('importSaveButton');
        const optionsButton = document.getElementById('optionsButton');

        playButton.addEventListener('click', () => {
            animateButton(playButton);
            window.location.href = '../aimClick.html';
        });

        importSaveButton.addEventListener('click', () => {
            animateButton(importSaveButton);
            // Add your import save button functionality here
        });

        optionsButton.addEventListener('click', () => {
            animateButton(optionsButton);
            // Add your options button functionality here
        });
    }

    if (document.title === 'AimClick') {
       
        const scoreElement          = document.getElementById('score'         );
        const scorePerClickElement  = document.getElementById('scorePerClick' );
        const upgrade1Button        = document.getElementById('upgrade1'      );
        const upgradeCost1Element   = document.getElementById('upgradeCost1'  );
        const upgrade1CountElement  = document.getElementById('upgrade1Count' );
        const upgrade2Button        = document.getElementById('upgrade2'      );
        const upgradeCost2Element   = document.getElementById('upgradeCost2'  );
        const upgrade2CountElement  = document.getElementById('upgrade2Count' );
        const gameFrame             = document.getElementById('gameFrame'     );
        const clickButton           = document.getElementById('clickButton'   );

        let score = 0;
        let clickValue = 1;
        let scorePerClick = clickValue;
        scorePerClickElement.textContent = scorePerClick;

        let upgradeCost1 = parseInt(upgradeCost1Element.textContent);  
        let upgrade1Count = 0;
        upgrade1CountElement.textContent = upgrade1Count;

        let upgradeCost2 = parseInt(upgradeCost2Element.textContent);
        let upgrade2Count = 0;
        upgrade2CountElement.textContent = upgrade2Count;

        function getRandomPosition() {
            const frameRect = gameFrame.getBoundingClientRect();
            const buttonWidth = clickButton.offsetWidth;
            const buttonHeight = clickButton.offsetHeight;

            const maxX = frameRect.width - buttonWidth;
            const maxY = frameRect.height - buttonHeight;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            return { x: randomX, y: randomY };
        }


        clickButton.addEventListener('click', () => {
            animateButton(clickButton);
            score += clickValue;
            const newPosition = getRandomPosition();
            clickButton.style.left = `${newPosition.x}px`;
            clickButton.style.top = `${newPosition.y}px`;
            
            
            scoreElement.textContent = score;
        });

        upgrade1Button.addEventListener('click', () => {
            animateButton(upgrade1Button);
            if (score >= upgradeCost1) {
            score -= upgradeCost1;
            upgrade1Count++;
            upgradeCost1 = Math.round(upgradeCost1 * 1.6);

            clickValue += 1;
            scorePerClick = clickValue;

            scorePerClickElement.textContent = scorePerClick;
            scoreElement.textContent = score;
            upgrade1CountElement.textContent = upgrade1Count;
            upgradeCost1Element.textContent = upgradeCost1;
            }
        });

        upgrade2Button.addEventListener('click', () => {
            animateButton(upgrade2Button);
            if (score >= upgradeCost2) {
            score -= upgradeCost2;
            upgrade2Count++;
            upgradeCost2 = Math.round(upgradeCost2 * 1.6);

            clickValue += 5;
            scorePerClick = clickValue;

            scorePerClickElement.textContent = scorePerClick;
            scoreElement.textContent = score;
            upgrade2CountElement.textContent = upgrade2Count;
            upgradeCost2Element.textContent = upgradeCost2;
            }
        });
            

        // Initialize button position
        const initialPosition = getRandomPosition();
        clickButton.style.left = `${initialPosition.x}px`;
        clickButton.style.top = `${initialPosition.y}px`;

    }

        

});