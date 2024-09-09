import { app } from "../../scripts/app.js";

function interceptTab() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            const textareas = document.querySelectorAll('textarea');
            const activeTextarea = document.activeElement;

            const index = Array.from(textareas).indexOf(activeTextarea);
            const nextIndex = ((!e.shiftKey) ? (index + 1) :
                (index - 1 + textareas.length)) % textareas.length;

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
