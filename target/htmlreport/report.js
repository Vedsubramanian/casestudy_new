$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/addtocart.feature");
formatter.feature({
  "name": "Searching product",
  "description": "Description: Registered user can login into application using valid username and valid password",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials and search for a product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user open login page in TestMee application",
  "keyword": "Given "
});
formatter.match({
  "location": "addtocart.user_open_login_page_in_TestMee_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr enter un as \"shwesam\"",
  "keyword": "When "
});
formatter.match({
  "location": "addtocart.userr_enter_un_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr enter pd  as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.userr_enter_pd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click signinn button",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.click_signinn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr searche for headphones in sb as \"head\"",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.userr_searche_for_headphones_in_sb_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr select headphones from suggestion list",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.userr_select_headphones_from_suggestion_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userr click on find button",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.userr_click_on_find_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on cart button",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart.click_on_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify cart is empty or not",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});