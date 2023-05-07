 class HomePage {

    get searchInput() { 
        return $('#gh-ac'); }

    get searchButton() { 
        return $('#gh-btn'); }
         

    open() {
        browser.url('https://www.ebay.com');
    }

    async searchFor(elemento) {
        this.searchInput.setValue(elemento);
        this.searchButton.click();
    }
}

module.exports = new HomePage();