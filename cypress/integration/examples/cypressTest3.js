/// <reference types="Cypress" />
 
describe('Explicit Assertions', () => {
    
    it('expect - Validation using explicit assertion on a specified subject', () => {
      
      //Chai's BDD style assertions for using expect
      expect(true).to.be.true
      const obj = { tools: 'qa' }
      expect(obj).to.equal(obj)
      expect(obj).to.deep.equal({ tools: 'qa' })
    })
  
    it('expect - matches text of two elements', () => {
      cy.visit("https://demoqa.com/category/widgets/");
      
      const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()
  
      let firstText
      let secondText
  
      cy.get(':nth-child(2) > ul > :nth-child(1)')
        .find('a')
        .then(($first) => {
          firstText = normalizeText($first.text())
        })
  
        cy.get('.demo-frame > ul > :nth-child(1)')
        .find('a')
        .then(($second) => {
           secondText = normalizeText($second.text())
  
           expect(secondText, 'second text').to.equal(firstText)
        })
        
        
        
    })
  
    it('assert - given value is an object', () => {
      const employee = {
        name: 'Lakshay',
        age: 34,
      }
  
      assert.isObject(employee, 'value is object')
    })
  })