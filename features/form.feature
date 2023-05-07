Feature: I search one element in eBay website

  Scenario Outline: Buscar pilas en eBay

    Given Abro el navegador
    When Ingreso <elemento> en el inputSearch
    And Hago click en el boton de buscar
    And Deberia imprimir el valor total de la busqueda

    Examples:
      | elemento |
      | pilas    | 
