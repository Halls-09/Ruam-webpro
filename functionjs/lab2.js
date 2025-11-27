function createItemManager() {
    let items = [];

    return {
        addItem(item) {
            if (!items.includes(item)) {
                items.push(item);
            }
        },

        removeItem(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        listItems() {
            return items;
        }
    };
}
