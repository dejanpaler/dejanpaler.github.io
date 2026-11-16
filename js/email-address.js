// The address is put together here, not written in the HTML, so harvesters that read only the served pages do not find it.
const MAILBOX = "contact";
const DOMAIN = ["dejanpaler", "com"].join(".");

const toLink = (address) => {
    const link = document.createElement("a");
    link.href = `mailto:${address}`;
    link.textContent = address;
    return link;
};

export const enhance = () => {
    const address = `${MAILBOX}@${DOMAIN}`;
    for (const placeholder of document.querySelectorAll("[data-email]")) {
        placeholder.replaceChildren(toLink(address));
    }
};
