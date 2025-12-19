// SEE: /use-designsafe/tools-applications/simulation/opensees/

const appElements = document.querySelectorAll('.s-app-version-list > article');

[...appElements].forEach( appElement => {
    const desc = appElement.querySelector('p');

    // To convert markdown-style formatting to HTML
    desc.innerHTML = desc.innerHTML
        // To convert **bold** to <strong>
        .replace(/(\*\*|__)(.+?)(\*\*|__)/g, '<strong>$1</strong>')
        // To convert *italic* to <em>
        .replace(/(\*|_)(.+?)(\*|_)/g, '<em>$1</em>')
        // To convert [text](url) to <a href="url">text</a>
        // FAQ: extra `<span>` prevents style bug from HTML assumption in CSS
        // https://github.com/DesignSafe-CI/portal/blob/v7.4.1/designsafe/static/styles/app-version-list.css#L54-L64
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a><span data-avoid-css-bug></span>');
});
