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
