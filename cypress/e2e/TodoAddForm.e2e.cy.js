describe('TodoAddForm', () => {
	beforeEach(() => {
		cy.visit('/todos/1');
	});

	it('displays the form and adds a new todo', () => {
		const newTodoTitle = 'New Todo';

		cy.get('input').type(newTodoTitle);
		cy.get('button[type="submit"]').click();

		cy.get('[aria-label="circles-loading"]').should('be.visible');

		cy.get('[aria-label="circles-loading"]').should('not.exist');

		cy.get('input').should('have.value', '');

		cy.contains(newTodoTitle).should('be.visible');
	});

	it('disables the save button when the input is empty', () => {
		cy.get('button[type="submit"]').should('be.disabled');
	});

	it('enables the save button when the input has text', () => {
		const newTodoTitle = 'New Todo';
		cy.get('input').type(newTodoTitle);
		cy.get('button[type="submit"]').should('be.enabled');
	});
});