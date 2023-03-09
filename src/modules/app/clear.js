export function empty(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
};