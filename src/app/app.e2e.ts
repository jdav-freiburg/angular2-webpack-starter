describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        expect(subject).toBeDefined();
    });

});
