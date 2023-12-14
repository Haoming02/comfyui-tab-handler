import { app } from "../../scripts/app.js";

function interceptTab() {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();

            const textareas = document.querySelectorAll('textarea');
            const activeTextarea = document.activeElement;

            const index = Array.from(textareas).indexOf(activeTextarea);
            var nextIndex = 0;

            if (e.shiftKey)
                nextIndex = (index - 1 + textareas.length) % textareas.length;
            else
                nextIndex = (index + 1) % textareas.length;

            textareas[nextIndex].focus();
        }
    });
}

app.registerExtension({
    name: "Comfy.TabHandle",
    async setup() {

        interceptTab();

    }
});
