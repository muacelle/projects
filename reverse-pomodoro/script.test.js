'use strict';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

describe("setup of presentation tests", () => {
    test('use jsdom in this test file', () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull();
    });

    let focusBtn = null;
    let stopFocBtn = null;

    beforeEach(() => {
        focusBtn = document.querySelector('#focusbtn');
        stopFocBtn = document.querySelector('#stopfocusbtn'); 
    })

    it('should format the focusWatch section to have initial timestring', () => {
        document.body.innerHTML = `
        <div>
            <div class="focusWatch">
                <div class="time">
                    00:00:00
                </div>
                <div class="controls">
                    <button id="focusbtn">Focus</button>
                    <button id="stopfocusbtn">Break</button>
                </div>
            </div>
        </div>
        `;
    
        const { timerFocus } = require('./script');
    
        timerFocus();

        const focusWatch = document.querySelector('.focusWatch .time');
        
        expect(focusWatch.innerText).toBe('00:00:01');
    });
});