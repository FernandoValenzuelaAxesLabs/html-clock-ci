# Test Specification: Time format toggle

## New behavior

- Verify that the format toggle exists.
- Verify that the default formast matches the existing application behavior.
- Verify that the 12-hour mode displays 'AM' or 'PM'.
- Verify that the 24-hour mode does not display 'AM' or 'PM'.
- Verify that switching the toggle displays time immediately.

## Regression requirements

- Existing clock update behavior continue to work.
- Existing markup required by current tests must remain available.
- Existing styles and layout must not be removed.
- All existing tests must continue to pass.
- All new tests codification must be added to the existing file named `tests\test.js`.