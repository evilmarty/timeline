Given(/^I am on the home page$/) do
  visit "/"
end

Given(/^I am on "(.*?)"$/) do |path|
  visit path
end

Given(/I am not logged in$/) do
  page.should have_content "Login"
end

When(/^I fill in "(.*?)" with "(.*?)"$/) do |field, value|
  fill_in field.underscore, with: value
end

When(/^I confirm "(.*?)" with "(.*?)"$/) do |field, value|
  fill_in "#{field.underscore}_confirmation", with: value
end

When(/^I press "(.*?)"$/) do |label|
  click_on label
end

When(/^I press on the "(.*?)" button$/) do |title|
  find("button[title=\"#{title}\"]").click
end

Then(/^I should see "(.*?)"$/) do |text|
  page.should have_content text
end

Then(/^I should be redirected to "(.*?)"$/) do |path|
  expect(page.current_path).to eq(path)
end
