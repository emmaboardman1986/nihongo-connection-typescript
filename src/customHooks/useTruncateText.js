export const useTruncateText = (text, charLimit) => {
    if (!text || ! charLimit) return;
    return text.split(" ").slice(0, charLimit).join(" ");
}