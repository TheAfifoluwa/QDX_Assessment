# Cypress Framework with Mocha Reporter and Cucumber

This repository contains a Cypress framework that utilizes cypress custom commands and Cucumber for end-to-end (E2E) testing.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [Features](#features)
   - [Cloning & Installation](#cloning-&-installation)
   - [Running Tests](#running-tests)
3. [Test Structure](#test-structure)
   - [Cucumber Integration](#cucumber-integration)



## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Getting Started

### Features

- End-to-end (E2E) testing using Cypress
- Custom commands for reusable functionality
- Cucumber BDD (Behaviour-Driven Development)
- Faker to generate random values

### Cloning & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheAfifoluwa/QDX_Assessment.git

2. Navigate to the project directory:
   ```bash
   cd QDX_Assessment

3. Install the dependencies:
   ```bash
   npm install

4. Install Plugins
    cuke and gherkin extensions for BDD

4. Run test:
   ```bash
   npx cypress open --e2e

## Test Structure

The tests in this framework are structured using the Cucumber BDD (Behavior-Driven Development) approach. Each test case is defined as a feature file, and the step definitions are implemented in JavaScript files.

### Cucumber Integration
Cucumber is integrated into the Cypress framework using the cypress-cucumber-preprocessor plugin. This allows you to write your test cases in a human-readable format using Gherkin syntax.







