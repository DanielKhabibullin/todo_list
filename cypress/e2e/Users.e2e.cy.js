describe('Users', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.intercept('GET', '/users', {fixture: 'users.json'}).as('getUsers');
	});

	it('displays loading spinner while fetching users', () => {
		cy.wait('@getUsers');
		cy.get('[data-testid="circles-loading"]').should('exist');
	});

	it('displays users table after fetching users', () => {
		cy.wait('@getUsers');
		cy.get('[data-testid="circles-loading"]').should('not.exist');
		cy.get('h1').contains('Users');
		cy.get('tbody tr').should('have.length', 10);
	});

	it('navigates to user details when user name is clicked', () => {
		cy.wait('@getUsers');
		cy.get('tbody tr').eq(0).find('td').eq(1).contains('Leanne Graham').click();
		cy.url().should('include', '/todos/1');
	});
});