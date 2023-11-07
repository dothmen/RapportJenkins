

Feature: add a comment
  Background: 
    Given login page is open
    When user enters dorsafothmen12@gmail.comandDodo27948.!
    And clicks on login  button
    And user is navigated to the home page
    When user wants to search for the cheapest software
    And user click on informatique button
    And choose the category user click on software button
    And click on relevance button and click on decreasing price
    And user chooses the software that suits them
    And when the user clicks on the product he wants to buy

  @addcomment
  Scenario: add a comment
    When user click on add a comment
    And enter clearer photo please
    And click on submit button
    Then submit comment is successful
   

  