// SEE: /admin/.../snippet/26
// SEE: /use-designsafe/tools-applications/simulation/opensees/

const interactiveVariant = document.getElementById('app-var-6-v');

const desc = interactiveVariant.querySelector('p');
desc.innerHTML = desc.innerHTML
    // to soften voice
    .replace(
        'If your connection fails, please use JupyterHub instead.',
        '<em>If your connection fails, please use JupyterHub instead.</em>'
    )
    // to link to JupyterHub
    // FAQ: extra `<span>` prevents style bug from HTML assumption in CSS
    // SEE: https://github.com/DesignSafe-CI/portal/blob/v7.4.1/designsafe/static/styles/app-version-list.css#L54-L64
    .replace(
        'JupyterHub',
        '<a href="/use-designsafe/tools-applications/analysis/jupyter/">JupyterHub</a><span></span>'
    );
