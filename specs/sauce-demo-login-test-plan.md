# Sauce Demo Login Test Plan

## Application Overview

Validate authentication on https://www.saucedemo.com/ from a fresh browser state. The login form accepts a valid demo user and password, routes successful users to the inventory page, and displays an error while keeping the user on the login page when credentials are invalid.

## Test Scenarios

### 1. Login Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with standard user

**File:** `tests/sauce-demo-login-success.spec.ts`

**Steps:**
  1. Start from a fresh browser context and navigate to https://www.saucedemo.com/.
    - expect: The page title is Swag Labs.
    - expect: The Username textbox, Password textbox, and Login button are visible.
  2. Enter standard_user in the Username textbox.
    - expect: The Username textbox contains standard_user.
  3. Enter secret_sauce in the Password textbox.
    - expect: The Password textbox accepts the password without exposing it as plain text.
  4. Click the Login button.
    - expect: The browser navigates to /inventory.html.
    - expect: The Products heading is visible.
    - expect: At least one product, including Sauce Labs Backpack, is visible.
    - expect: No login error is displayed.

#### 1.2. Invalid credentials show a login error

**File:** `tests/sauce-demo-login-invalid.spec.ts`

**Steps:**
  1. Start from a fresh browser context and navigate to https://www.saucedemo.com/.
    - expect: The login form is visible.
    - expect: The Username and Password fields are empty.
  2. Enter invalid_user in the Username textbox and wrong_password in the Password textbox.
    - expect: Both values are accepted in their respective fields.
  3. Click the Login button.
    - expect: The browser remains on the login page.
    - expect: The error message 'Epic sadface: Username and password do not match any user in this service' is visible.
    - expect: The user is not navigated to /inventory.html.
    - expect: The entered values remain available for correction.
