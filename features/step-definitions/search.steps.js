import HomePage from '../pageobjects/HomePage';
const { Given, When, And } = require('cucumber');
const HomePage = require('../pageobjects/HomePage');

Given('Abro el navegador', async () => {
  await HomePage.open();
});
  
  When('Ingreso <elemento> en el inputSearch', async (elemento) => {
    await HomePage.searchFor(elemento);
});
  
  And('Hago click en el boton de buscar', async () => {
    await HomePage.searchButton();
  });
  
  And('Deberia imprimir el valor total de la busqueda', async () => {
    const numberOfItems = await $$('.srp-controls__count-heading');
    console.log(`El número de pilas conseguidas son: ${numberOfItems.length}`);
  });
