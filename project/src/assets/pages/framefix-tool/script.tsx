import React from "react";


export const SelectedFrame = {
    getInfo: (element: HTMLElement)=> {

        const tagName = element.tagName;
        const id = element.id;
        const className = element.className;
        const textContent = element.textContent;

        return {
            tagName,
            id,
            className,
            textContent
        };
    },
    applyStyle: (element: HTMLElement, styles: Record<string, string>) => {

        Object.assign(element.style, styles);
    }
};