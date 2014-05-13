Feature: Registration
  Scenario: Land on the home page for the first time
    Given I am on the home page
    And I am not logged in
    Then I should see "Login"
    And I should be redirected to "/login"
  Scenario: Redirected to the login form
    Given I am on "/login"
    When I press "Don't have an account?"
    Then I should see "Register"
    And I should be redirected to "/register"
  Scenario: Creating a new account
    Given I am on "/register"
    When I fill in "name" with "Chuck Testa"
    And I fill in "email" with "chuck@testa.com"
    And I fill in "password" with "password"
    And I confirm "password" with "password"
    And I press "Register"
    Then I should see "Projects"
    And I should be redirected to "/"
  Scenario: Creating first project
    Given I am on the home page
    When I press on the "New project" button
    And I fill in "project_name" with "Foobar"
    And I fill in "project_description" with "Baz"
    And I press "Create project"
    Then I should see "Foobar"
  Scenario: Creating a new status
    Given I am on the home page
    And I press "Foobar"
    When I fill in "status_title" with "Nope"
    And I press "Submit status"
    Then I should see "Nope"
