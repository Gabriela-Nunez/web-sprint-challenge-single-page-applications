describe('Pizza Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza'); 
  })


  const nameInput = () => cy.get('input[name=name]');
  const pizzaSizeSelect = () => cy.get('select[name=pizzaSize]');
  const pizzaSauceSelect = () => cy.get('select[name=pizzaSauce]');
  const mushroomsInput = () => cy.get('input[name=mushrooms]');
  const pepperoniInput = () => cy.get('input[name=pepperoni]');
  const sausageInput = () => cy.get('input[name=sausage]');
  const jalapeñosInput = () => cy.get('input[name=jalapeños]');
  const spinachInput = () => cy.get('input[name=spinach]');
  const olivesInput = () => cy.get('input[name=olives]');
  const baconInput = () => cy.get('input[name=bacon]');
  const instructionsInput = () => cy.get('input[name=instructions]');
  const submitInput = () => cy.get('input[name=orderButton]');

  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
    expect(5 + 5).not.equal(9);
    expect({}).not.to.equal({});
  })

  it('proper elements are showing', () => {
    nameInput().should('exist');
    pizzaSizeSelect().should('exist');
    pizzaSauceSelect().should('exist');
    mushroomsInput().should('exist');
    pepperoniInput().should('exist');
    sausageInput().should('exist');
    jalapeñosInput().should('exist');
    spinachInput().should('exist');
    olivesInput().should('exist');
    baconInput().should('exist');
    instructionsInput().should('exist');
    submitInput().should('exist');
  })

  describe('filling out form and submiting', () => {
    it('can navigate to the site', () => {
      cy.url().should('include', 'localhost');
    })

    it('submit button starts disabled', () => {
      submitInput().should('be.disabled')
    })

    it('can type in inputs', () => {
      nameInput()
        .should('have.value', '')
        .type('Gabby Nunez')
        .should('have.value', 'Gabby Nunez');

      instructionsInput()
        .should('have.value', '')
        .type('please cut into squares')
        .should('have.value', 'please cut into squares');    
    })

    it('can select options from size and sauce', () => {
      pizzaSizeSelect()
        .should('have.value', '')
        .select('SMALL (10 inches)')
        .should('have.value', 'small');

      pizzaSauceSelect()
        .should('have.value', '')
        .select('Marinara Sauce')  
        .should('have.value', 'marinara');
    })

    it('checkboxes can be checked', () => {
      mushroomsInput().check()
      pepperoniInput().check()
      sausageInput().check()
      jalapeñosInput().check()
      spinachInput().check()
      olivesInput().check()
      baconInput().check()
    })

    it('submit button enables when required input and selections have been filled', () => {
      nameInput().type('Gabby Nunez')
      pizzaSizeSelect().select('SMALL (10 inches)')
      pizzaSauceSelect().select('Buffalo Sauce')
      submitInput().should('not.be.disabled');
    })
  })

  describe('placing an order', () => {
    it('can type in all inputs, make selections, and submit order', () => {
      nameInput().type('Gabby Nunez')
      pizzaSizeSelect().select('SMALL (10 inches)')
      pizzaSauceSelect().select('Buffalo Sauce')
      mushroomsInput().check()
      pepperoniInput().check()
      sausageInput().check()
      jalapeñosInput().check()
      spinachInput().check()
      olivesInput().check()
      baconInput().check()
      instructionsInput().type('please cut into squares')
      submitInput().click();
    })
  })

















})