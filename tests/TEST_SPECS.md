# Test Specification: Live Clock App Unit Tests

## 1. Objective
Create an automated test suite to validate the time calculation logic without relying on external dependencies.

## 2. Testing Constraints
- Separate pure time-formatting functions from DOM manipulation so they can be tested.
- Output a single test execution file named `tests\test.js`.

## 3. Test Cases Required
- **Test 1: 12-Hour Conversion** - Verify that military time (e.g., `14:00:00`) converts properly to `02:00:00 PM`.
- **Test 2: Midnight Boundary** - Verify that `00:00:00` converts properly to `12:00:00 AM`.
- **Test 3: Padding Check** - Verify that single-digit minutes or seconds (e.g., `5`) are padded with a leading zero (`05`).

## 4. Execution Requirement
- Running manually `node tests\test.js` in the Windows command line must output `PASS` or `FAIL` for each test case cleanly.
- DO NOT execute any test automatically.

