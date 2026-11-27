---
type: note
status: active
created: "2026-11-19"
tags: []
project: "[[Receipt App]]"
---

# Functional Core

Sourced from [[Receipt App]]

We should have a stateless core that encapsulates our business logic.

## Total Rate Calculation

- Most transactions have a percent-increase applied, from tax and tip. We
  usually do:

$$\mathrm{rate} = \dfrac{\mathrm{subtotal}+\mathrm{tax}+\mathrm{tip}}{\mathrm{subtotal}}$$

- Then, we can apply that rate on each item.

### Examples

| Item         | Value ($) |
| ------------ | --------- |
| Pho          | 15.50     |
| Large        | 2.50      |
| Pho          | 16.00     |
| Large        | 2.50      |
| Spring Rolls | 6.00      |
| Pho          | 16.00     |
| Large        | 2.50      |

| Category | Value ($) |
| -------- | --------- |
| Subtotal | 61.00     |
| Tax      | 5.03      |
| Tip      | 9.15      |
| Total    | 75.18     |


## Per-item Rate Calculation

- Individual items' subtotals can simply be multiplied by the rate calculated
  above in `Total Rate Calculation`

### Examples
