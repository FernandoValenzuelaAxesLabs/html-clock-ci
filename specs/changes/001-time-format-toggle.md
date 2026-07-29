# Change: Time format toggle

## Objective

Allow the user to switch the clock between 12-hour and 24-hour formats.

## Current behavior

The clock displays time using the system format.

## Required behavior

- Add a toggle for selecting 12-hour or 24-hour format time.
- The default format must remain the current format.
- Changing the toggle must change the format immediately.
- Do not add external dependencies.

## Existing behavior to preserve

- In general the current behavior and UI/UX style must remain without changes.
- Preserve the current visual design.
- Preserve the current layout and responsive behavior.

## Out of the scope

- Saving the selected format after the page closes.
- Redesigning the clock.

## Acceptance criteria

- The toggle is visible an usable always.
- In 12-hour mode, the time includes AM or PM.
- In 24-hour mode, the time uses values from '00' to '23'.
- Existing tests continue to pass.
- Adapt the toggle to the current style and UI design.
