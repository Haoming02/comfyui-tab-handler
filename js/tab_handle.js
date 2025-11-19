import { app } from "../../scripts/app.js";

function interceptTab() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            e.preventDefault();

            const fields = document.querySelectorAll("textarea.comfy-multiline-input");
            const activeField = document.activeElement;

            const index = Array.from(fields).indexOf(activeField);
            const nextIndex = (index + (e.shiftKey ? -1 : 1) + fields.length) % fields.length;

            fields[nextIndex].focus();
        }
    });
}

app.registerExtension({
    name: "Comfy.TabHandle",
    async setup() {
        interceptTab();
    },
});
