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

	it('completes a todo when the checkbox is clicked', () => {
		cy.get('tr[data-id="1"]').within(() => {
			cy.get('input[type="checkbox"]').click();
		});

		cy.get('[aria-label="circles-loading"]').should('not.exist');

		cy.get('tr[data-id="1"]').should('have.class', 'table-success');
	});

	it('edits a todo when the edit button is clicked', () => {
		const editedText = 'Updated Todo';

		cy.get('tr[data-id="1"]').within(() => {
			cy.get('.btn-primary').click();
			cy.get('td[contenteditable="true"]').type(editedText);
			cy.get('.btn-success').click();
		});

		cy.get('tr[data-id="1"] td').eq(1).contains(editedText);
	});
});