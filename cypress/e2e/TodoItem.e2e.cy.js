describe('TodoItem', () => {
	beforeEach(() => {
		cy.visit('/todos/1');
	});

	it('deletes a todo when the delete button is clicked', () => {
		cy.get('tr[data-id="1"]').first().within(() => {
			cy.get('.btn-danger').click();
		});

		cy.get('tr[data-id="1"]').should('not.exist');
	});
});