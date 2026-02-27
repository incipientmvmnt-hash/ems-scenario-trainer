# Audit Report — Chunk 2 (25 Scenarios)

**Audited:** 2026-02-27
**Scenarios:** nat-air-04, nat-tra-02 through nat-tra-07, nat-ob-02, nat-ob-03, nat-peds-02, nat-beh-02, nat-beh-03, nat-pharm-01, nat-pharm-02, nat-env-02 through nat-env-04, nat-ops-02 through nat-ops-04, nat-med-08 through nat-med-10, nat-card-06, nat-air-05

---

## CRITICAL Issues

*None found.* All "correct" answers are clinically accurate. Critical distractors are properly marked. No dangerous clinical content identified.

---

## HIGH Issues

### 1. `nat-tra-03` Q2 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` but has no `items`, `rows`, or any data structure to render. The prompt says "Match each body region to its percentage" but there's nothing to match.
- **Fix:** Add items array with body regions (head/neck 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%) and the matching percentages.

### 2. `nat-tra-07` Q3 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` but has no items/rows. Prompt says "Match each stage to its estimated blood loss and key clinical findings" with nothing to match.
- **Fix:** Add items for Class I–IV hemorrhagic shock with blood loss estimates and clinical findings.

### 3. `nat-peds-02` Q3 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` with no items. Prompt says "Match each assessment finding to the appropriate intervention."
- **Fix:** Add items pairing findings (e.g., hypoxia → O2, dehydration → fluids, hypothermia → warming) with interventions.

### 4. `nat-pharm-01` Q3 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` with no items. Prompt says "Calculate the correct doses for each medication for this 35 kg patient."
- **Fix:** Add items with medications (midazolam, lorazepam, diazepam, levetiracetam, fosphenytoin) and their weight-based calculations.

### 5. `nat-ops-02` Q4 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` with no items. Prompt says "Match the following hazmat reference resources to their correct description."
- **Fix:** Add items with resources (ERG, SDS, CHEMTREC, placards, NIOSH Pocket Guide) and descriptions.

### 6. `nat-med-09` Q4 — Missing table data
- **Severity:** HIGH
- **Problem:** Question type is `table` with no items. Prompt says "Match each hyperkalemia treatment to its correct mechanism of action."
- **Fix:** Add items pairing treatments (calcium, albuterol, bicarb, insulin/glucose, dialysis) with mechanisms.

### 7. `nat-pharm-02` Q3 — Wrong categorize data structure
- **Severity:** HIGH
- **Problem:** Uses `categories` as an object with arrays of strings (`{ "Mild Allergic Reaction": [...], "Severe...": [...] }`) instead of the standard `items` array with `category` per item. Will likely fail to render.
- **Fix:** Convert to standard format: `items` array where each item has `text` and `category` properties, plus a flat `categories` array.

### 8. `nat-beh-02` Q6, `nat-med-09` Q1, `nat-env-03` Q5, `nat-card-06` Q4, `nat-air-05` Q2 — Graphical type with no graphic
- **Severity:** HIGH
- **Problem:** These questions use type `graphical` but have no image, SVG, or graphic reference. They function as regular MC/MR questions. Notably `nat-env-03` Q5 has ALL options marked correct, making it not really a question.
- **Fix:** Either provide actual graphics (ECG strips, diagrams) or change type to `mc`/`mr`. For `nat-env-03` Q5, restructure as a `categorize` or educational review since all answers are correct.

---

## MEDIUM Issues

### 9. Inconsistent order item format — Multiple scenarios
- **Severity:** MEDIUM
- **Scenarios:** `nat-env-02` Q3, `nat-env-03` Q2/Q3, `nat-env-04` Q3, `nat-ops-02` Q2, `nat-ops-03` Q3, `nat-ops-04` Q2, `nat-med-10` Q3
- **Problem:** Order items use `{ "text": "..." }` object format instead of plain strings. Other scenarios (nat-air-04, nat-tra-02, etc.) use plain strings. Inconsistent and may cause rendering issues.
- **Fix:** Standardize all order items to the same format (plain strings preferred for simplicity).

### 10. Redundant `correctOrder` field — `nat-beh-02` Q4, `nat-med-08` Q2
- **Severity:** MEDIUM
- **Problem:** These order questions include a `correctOrder: [0,1,2,3,4]` field that just restates the array order. Redundant and potentially confusing — could imply the items array is shuffled when it's already in correct order.
- **Fix:** Remove `correctOrder` if the convention is that items array = correct order, or add `correctOrder` to ALL order questions for consistency.

### 11. `nat-tra-03` Q5 — Categorize uses `correctCategories` indices instead of inline `category`
- **Severity:** MEDIUM
- **Problem:** Uses `correctCategories: [0, 1, 0, 0, 1, 0]` (numeric indices into categories array) instead of inline `category` property per item. Inconsistent with all other categorize questions in this chunk.
- **Fix:** Convert to standard format with `category` string on each item.

### 12. `nat-env-03` Q5 — All options correct
- **Severity:** MEDIUM
- **Problem:** All 4 options are marked `correct: true`. This is an educational review, not a question. No way for a user to get it wrong.
- **Fix:** Add incorrect distractors, or restructure as a `categorize` question matching symptoms to body systems, with some incorrect pairings.

### 13. Non-standard phase labels — Multiple scenarios
- **Severity:** MEDIUM
- **Phases flagged:**
  - `"initial-assessment"` → use `"assessment"` (nat-air-04 Q1, nat-tra-02 Q1, nat-tra-04 Q1, nat-tra-05 Q1, nat-tra-06 Q1, nat-tra-07 Q1, nat-ob-02 Q1, nat-ob-03 Q1, nat-beh-02 Q1, nat-beh-03 Q1, nat-env-02 Q1, nat-env-03 Q1, nat-env-04 Q1)
  - `"scene-size-up"` → use `"assessment"` (nat-ops-02 Q1)
  - `"scene-management"` → use `"assessment"` (nat-ops-02 Q2)
  - `"clinical-reasoning"` → use `"assessment"` or `"decision-making"` (nat-env-02 Q2, nat-env-03 Q3, nat-ops-02 Q3, nat-ops-03 Q2, nat-ops-04 Q3)
  - `"transport-decision"` → use `"transport"` or `"decision-making"` (nat-ops-03 Q1)
  - `"evaluation"` → use `"reassessment"` (nat-med-09 Q4, nat-pharm-02 Q3)
- **Fix:** Standardize to the clean set: `assessment`, `treatment`, `transport`, `reassessment`, `decision-making`.

### 14. `nat-ob-02` Q2 — EMR-EMT order includes vascular access
- **Severity:** MEDIUM
- **Problem:** Step 3 is "Obtain vascular access or prepare for transport" — vascular access is AEMT+ scope. The "or prepare for transport" hedge partially addresses this but could confuse EMR/EMT learners.
- **Fix:** Rephrase to "Prepare for transport; assist with vascular access if ALS is available."

### 15. `nat-beh-02` Q2 — No `selectCount` for MR question
- **Severity:** MEDIUM
- **Problem:** MR question doesn't indicate how many correct answers to select (3 correct out of 5). Other MR questions in this chunk also lack `selectCount` — only `nat-tra-03` Q4 has it.
- **Fix:** Add `selectCount` to all MR questions, or standardize on not using it and relying on "Select ALL that apply."

---

## LOW Issues

### 16. `nat-air-04` Q1 — Phase `initial-assessment` has hyphen
- **Severity:** LOW
- **Problem:** All `initial-assessment` phases are hyphenated. Not ugly like `SCENE_SIZE_UP` but inconsistent with non-hyphenated phases like `treatment`, `reassessment`.
- **Fix:** Use `assessment` throughout.

### 17. `nat-beh-02` Q3 — Haloperidol marked `critical: true`
- **Severity:** LOW
- **Problem:** While haloperidol is not first-line for excited delirium, marking it as critical may be slightly aggressive — some protocols do include it as a second-line agent. The concern about QT prolongation and lowered seizure threshold is valid but debatable.
- **Note:** Acceptable as-is given the context (teaching best practice), but consider downgrading to non-critical with explanation.

### 18. `nat-peds-02` Q1 — Distractor wording
- **Severity:** LOW
- **Problem:** Option C says "Circulation to Skin — the infant appears well-perfused" — the narrative contradicts this (pale, mottled, delayed cap refill). The obviously wrong framing makes it a throwaway answer.
- **Fix:** Make it a more plausible distractor: "Circulation to Skin — pale with mottled extremities and delayed capillary refill."

### 19. Temperature format inconsistency
- **Severity:** LOW
- **Problem:** Some scenarios use °F (nat-air-04, nat-ob-02, nat-beh-02), others use °C (nat-med-08, nat-med-09, nat-card-06, nat-air-05, nat-pharm-02, nat-med-10), and some have both (nat-env-02, nat-env-03, nat-env-04).
- **Fix:** Standardize to one format (°F with °C in parentheses, or vice versa).

### 20. `nat-beh-03` — Dispatch says 17yo but title says "Suicidal Patient"
- **Severity:** LOW
- **Problem:** Minor — the dispatch is appropriately vague ("possible ingestion, crying") but the scenario title reveals the nature. If titles are shown to users, this could prime them.
- **Fix:** Consider if titles are user-facing; if so, use something like "Adolescent Ingestion."

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 0     |
| HIGH     | 8     |
| MEDIUM   | 7     |
| LOW      | 5     |

**Key themes:**
1. **6 table-type questions have no data** — these are completely non-functional and need item data added urgently.
2. **Graphical questions lack graphics** — 5 questions reference visuals that don't exist.
3. **Inconsistent data structures** — order items (object vs string), categorize format (indices vs inline), and one categorize with completely wrong schema.
4. **Phase labels need standardization** — ~15+ questions use non-standard phases.
5. **Clinical accuracy is excellent** — all correct answers verified, critical distractors properly flagged, no dangerous content found.
