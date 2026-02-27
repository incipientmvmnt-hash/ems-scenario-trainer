# EMS Scenario Audit — Chunk 1

Audited: 2026-02-27 | Scenarios: 25 | Total Questions: ~95

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH | 12 |
| MEDIUM | 34 |
| LOW | 11 |

---

## CRITICAL Issues

### nat-air-03 Q1 — Wrong correct answer for 18-month-old FBAO
- **Severity:** CRITICAL
- **Problem:** Patient is 18 months old (a *child*, not an infant per AHA guidelines — cutoff is 1 year). The correct answer is "Begin cycles of 5 back blows followed by 5 chest thrusts" — this is the **infant (<1 year) technique**. For a child >1 year with severe FBAO, AHA recommends **abdominal thrusts** (if conscious) or **CPR** (if unresponsive). The question states the child is "unresponsive," which means CPR is actually the correct intervention per AHA guidelines. The marked-correct answer is wrong on two counts: wrong age technique AND wrong responsiveness protocol.
- **Fix:** Either (a) change patient age to <1 year (e.g., 8 months) to match the back blows/chest thrusts answer, or (b) change the correct answer to "Begin immediate CPR with chest compressions" for an unresponsive child >1 year. Also reconcile with Q3's categorization which correctly distinguishes infant vs. child techniques — currently Q1 and Q3 contradict each other.

---

## HIGH Issues

### nat-str-01 Q2 — Order question uses wrong field names
- **Severity:** HIGH
- **Problem:** Type is `order` but uses `options` array (with `correct` booleans) instead of `items` + `correctOrder`. The app likely won't render this as a drag-to-order question.
- **Fix:** Convert `options` texts to `items` array and add `correctOrder` array. Remove `correct` booleans.

### nat-str-01 Q4 — Graphical question with all answers correct
- **Severity:** HIGH
- **Problem:** All 4 options are marked `correct: true`. This appears to be a categorize/matching question (stroke vs. stroke mimic) disguised as `graphical` with no wrong answers. Users can't fail and learn nothing from feedback.
- **Fix:** Either convert to `categorize` type with proper categories, or add incorrect distractor options.

### nat-acs-01 Q3 — Order question uses wrong field names
- **Severity:** HIGH
- **Problem:** Same as nat-str-01 Q2. Type `order` but uses `options` with `correct` booleans instead of `items` + `correctOrder`.
- **Fix:** Convert to proper `items`/`correctOrder` format.

### nat-ped-01 Q2 — Categorize uses wrong format
- **Severity:** HIGH
- **Problem:** Type is `categorize` but uses `options` array with embedded "→ UPPER AIRWAY" / "→ LOWER AIRWAY" text and `correct: true` booleans. Missing proper `items`, `categories`, and `correctCategories` fields. The app won't render the drag-to-category UI.
- **Fix:** Extract items (e.g., "Inspiratory stridor") and categories ["Upper Airway Obstruction", "Lower Airway Obstruction"], add `correctCategories` index array.

### nat-ped-01 Q3 — Order question uses wrong format
- **Severity:** HIGH
- **Problem:** Type `order` but uses `options` with `correct: true` on all. Missing `items`/`correctOrder`.
- **Fix:** Convert to proper order format.

### nat-obn-01 Q4 — Categorize uses wrong format
- **Severity:** HIGH
- **Problem:** Type `categorize` but uses `options` with embedded "→ NORMAL" / "→ ABNORMAL" text and `correct: true`. Missing proper categorize fields.
- **Fix:** Extract items and categories, add `correctCategories` array.

### nat-env-01 Q3 — Table question but all options just have `correct: true`
- **Severity:** HIGH
- **Problem:** Type `table` but structured like a multiple-choice with all options correct. No actual table/matching data structure. Same pattern as other broken table questions.
- **Fix:** Define proper table structure with rows, columns, and matchable content.

### nat-mci-01 Q2 — Table question with no table data
- **Severity:** HIGH
- **Problem:** Same as above — type `table` but uses flat `options` with `correct: true`. No real matching/table structure.
- **Fix:** Create proper table structure for START triage matching.

### nat-tox-01 Q3 — Categorize format inconsistency
- **Severity:** HIGH
- **Problem:** Uses `items` with `{text, category}` objects (embedding the answer in the item) AND also has `categories`/explanation. But missing `correctCategories` index array. The `{text, category}` format embeds the answer directly in the item text, which would show the answer to the user.
- **Fix:** Use plain text `items` (without category) and add `correctCategories` index array matching each item to its category index. Same fix needed for nat-dka-01 Q2 and nat-air-03 Q3.

### nat-dka-01 Q2 — Categorize embeds answers in items
- **Severity:** HIGH
- **Problem:** Items use `{text, category}` format which exposes the correct category to the user. Missing `correctCategories` index array.
- **Fix:** Strip `category` from items, add `correctCategories` array.

### nat-air-03 Q3 — Categorize embeds answers in items
- **Severity:** HIGH
- **Problem:** Same as above — `{text, category}` objects expose the answer.
- **Fix:** Strip `category` from items, add `correctCategories` array.

### nat-trauma-01 Q2 — Table question with no table data
- **Severity:** HIGH
- **Problem:** Type `table` with only a `prompt` and `explanation` — no `options`, `items`, `rows`, or any content. The question is completely empty and unrenderable.
- **Fix:** Add the actual matching data: findings → body regions (Chest, Abdomen, Extremity, Head/Spine).

---

## MEDIUM Issues

### Phase Label Issues (ugly/inconsistent names)

| Scenario | Question | Current Phase | Suggested Fix |
|----------|----------|---------------|---------------|
| nat-behavioral-01 | Q1 | `scene_size_up` | `scene_size-up` or `assessment` |
| nat-mci-01 | Q1 | `scene_size_up` | `scene_size-up` or `assessment` |
| nat-mci-01 | Q3 | `scene_size_up` | `scene_size-up` or `assessment` |
| nat-air-02 | Q1 | `initial-assessment` | `assessment` |
| nat-air-02 | Q4 | `reassessment` | `transport` or `reassessment` (acceptable if supported) |
| nat-air-02 | Q5 | `reassessment` | `treatment` |
| nat-air-03 | Q1 | `initial-assessment` | `assessment` |
| nat-air-03 | Q3 | `reassessment` | `assessment` |
| nat-card-03 | Q1 | `initial-assessment` | `assessment` |
| nat-card-03 | Q3 | `transport` | OK, but Q4 = `reassessment` → `transport` |
| nat-card-04 | Q1 | `initial-assessment` | `assessment` |
| nat-card-05 | Q1 | `initial-assessment` | `assessment` |

- **Severity:** MEDIUM (each)
- **Fix:** Standardize phases to: `assessment`, `treatment`, `transport`. If `scene_size-up` and `reassessment` are supported phase values, keep them but use kebab-case, not snake_case.

### Missing `selectCount` on MR questions

| Scenario | Question |
|----------|----------|
| nat-str-01 | Q3 |
| nat-str-01 | Q5 |
| nat-acs-01 | Q4 |
| nat-tra-01 | Q2 |
| nat-tra-01 | Q5 |
| nat-env-01 | Q4 |
| nat-sep-01 | Q4 |
| nat-drn-01 | Q3 |
| nat-tox-02 | Q3 |
| nat-air-02 | Q3 |
| nat-air-02 | Q4 |
| nat-card-03 | Q3 |

- **Severity:** MEDIUM (each)
- **Problem:** Multi-response (`mr`) questions should have `selectCount` to tell users how many to select.
- **Fix:** Add `selectCount` based on the number of correct options in each question.

### Missing `correct`/`critical` fields on some options

| Scenario | Question | Notes |
|----------|----------|-------|
| nat-air-02 | Q1 | Options B, C, D missing `critical` field |
| nat-air-02 | Q4 | Options A, B, D, E missing `critical` |
| nat-air-03 | Q1 | Option B missing `critical`, D missing `critical` |
| nat-card-03 | Q2 | Options A, C, D missing `critical` |
| nat-card-03 | Q3 | Options A, B, C, E, F missing `critical` |
| nat-card-04 | Q1 | All options missing `critical` |
| nat-card-05 | Q1 | Options A, C, D missing `critical` |
| nat-card-05 | Q3 | Option A missing `critical` |

- **Severity:** MEDIUM (each)
- **Problem:** Inconsistent schema — some options have `critical` field, others don't. Should default to `false` if missing, but better to be explicit.
- **Fix:** Add `critical: false` to all options missing the field.

### Empty table questions (no content)

| Scenario | Question | Description |
|----------|----------|-------------|
| nat-hypoglycemia-01 | Q4 | Glucose treatments → provider levels. Has prompt/explanation only. |
| nat-str-01 | Q6 | Stroke scales matching. Has prompt/narrative/options but all correct. |
| nat-tra-01 | Q3 | Splinting considerations. Has prompt/explanation only. |
| nat-dka-01 | Q4 | ECG findings in DKA. Has prompt/narrative/explanation only. |
| nat-card-03 | Q4 | Post-ROSC findings → responses. Has prompt/narrative/explanation only. |

- **Severity:** MEDIUM (each)
- **Problem:** Table-type questions that have explanations but no interactive content. Users see a prompt with no way to answer.
- **Fix:** Add proper matching/table data structures with items to match.

### nat-str-01 Q6 — Table type but all options correct
- **Severity:** MEDIUM
- **Problem:** Has `options` with all marked `correct: true`. Functions as educational content, not an assessable question.
- **Fix:** Convert to proper table matching (scale names → components) or add distractor options.

### nat-mci-01 — Vitals all zeros
- **Severity:** MEDIUM
- **Problem:** Vitals are all 0 (hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 0, temp: "0°F"). While this is an MCI with multiple patients, zero vitals look like a data error. A real MCI scenario shouldn't display vitals for "the patient" since there are many.
- **Fix:** Either omit vitals entirely (set to null) or note "N/A — multiple patients" in vitals fields.

### nat-neo-01 — Vitals partially zeros
- **Severity:** MEDIUM
- **Problem:** BP "0/0", spo2: 0, gcs: 0, temp: "0°F" for a newborn. HR and RR are clinically set (72, 0) which makes sense, but the others look like unfilled defaults rather than clinical values.
- **Fix:** Use `null` for unobtainable values. Set GCS to 3 (minimum, appropriate for non-responsive newborn). Temp should be noted as not yet obtained.

---

## LOW Issues

### nat-cardiac-01 Q1 — Order explanation doesn't match correctOrder
- **Severity:** LOW
- **Problem:** The `correctOrder` is `[1, 0, 3, 2]` which maps to: (1) Ensure scene safety, (2) Begin compressions, (3) Open airway/ventilate, (4) AED. The explanation matches this sequence. Just noting the zero-indexed mapping is correct but could confuse developers — consider adding a comment or using 1-indexed.
- **Fix:** None required, but consider 1-indexed ordering for clarity.

### nat-allergy-01 Q2 — Positioning concern
- **Severity:** LOW
- **Problem:** The explanation notes that supine positioning may be contraindicated by respiratory distress and suggests semi-Fowler's as compromise. Since this patient has significant respiratory distress (stridor, SpO2 91%), the order placing supine position as step 3 might confuse providers. The nuance is in the explanation but not the answer.
- **Fix:** Consider adding a caveat to the item text: "Place patient supine with legs elevated if tolerated (modify for respiratory distress)."

### nat-behavioral-01 Q2 — MR question but selectCount present
- **Severity:** LOW
- **Problem:** This is fine — just noting it as a positive example. `selectCount: 3` is correctly set.
- **Fix:** None.

### nat-hypoglycemia-01 Q3 — D10 vs D50 nuance
- **Severity:** LOW
- **Problem:** The correct answer (D10 25g IV as 250 mL) is clinically appropriate and reflects modern practice favoring D10 over D50. However, many protocols still use D50. The explanation could note this is evolving practice.
- **Fix:** Consider adding to explanation: "Many systems are transitioning from D50 to D10 due to reduced risk of phlebitis and tissue necrosis from extravasation."

### nat-env-01 Q2 — Cooling order may vary
- **Severity:** LOW
- **Problem:** The order places cold water immersion before evaporative cooling, but in a field setting at a music festival, cold water immersion may not be available. The question forces a specific order that may not match all field realities.
- **Fix:** Consider noting in explanation that the order may vary based on resource availability.

### nat-sep-01 Q3 — Order question all options `correct: true`
- **Severity:** LOW
- **Problem:** All options marked `correct: true` — these booleans are meaningless for order-type questions (which use `correctOrder`). However, this question IS missing `correctOrder`.
- **Fix:** Add `correctOrder` array. Remove `correct` booleans from options (convert to `items`).

### nat-drn-01 Q2 — Order uses `options` not `items`
- **Severity:** LOW (consistent with other order questions)
- **Problem:** Same pattern as other order questions using `options` + `correct: true` instead of `items` + `correctOrder`.
- **Fix:** Batch fix with all other order questions.

### nat-card-04 Q3 — Order question explanation references atropine/pacing
- **Severity:** LOW
- **Problem:** The level_filter is "AEMT-Paramedic" and the last step mentions "atropine or transcutaneous pacing per medical direction." AEMTs generally cannot administer atropine or pace. The step says "prepare for and anticipate" which is acceptable, and "per medical direction" covers it. Borderline but acceptable.
- **Fix:** Consider clarifying: "Prepare for pharmacological/electrical intervention (Paramedic-level) or facilitate ALS intercept."

### nat-card-05 — Level min is Paramedic
- **Severity:** LOW
- **Problem:** `level_min: "Paramedic"` but this scenario could be educational for AEMTs who may encounter SVT. Not a bug, just a design choice.
- **Fix:** Consider `level_min: "AEMT"` with Paramedic-specific questions filtered by `level_filter`.

### nat-obn-01 Q2 — Order uses `options` not `items`
- **Severity:** LOW
- **Problem:** Consistent with the batch issue. Uses `options` with `correct: true` instead of `items` + `correctOrder`.
- **Fix:** Batch fix.

---

## Batch Issues Summary

### 1. Order questions using wrong schema (~10 questions)
Many `order` type questions use `options` with `correct: true` booleans instead of the proper `items` + `correctOrder` format. Affected: nat-str-01 Q2, nat-acs-01 Q3, nat-ped-01 Q3, nat-obn-01 Q2, nat-env-01 Q2, nat-sep-01 Q3, nat-drn-01 Q2, nat-card-03 Q1, nat-card-05 Q2. These need batch conversion.

### 2. Categorize questions with embedded answers (~3 questions)
Questions using `{text, category}` objects expose the correct answer in the item. Affected: nat-tox-01 Q3, nat-dka-01 Q2, nat-air-03 Q3. Strip category from items, use `correctCategories` array.

### 3. Categorize questions using options instead of proper format (~3 questions)
Affected: nat-ped-01 Q2, nat-obn-01 Q4, nat-str-01 Q4. Need full restructuring to items/categories/correctCategories.

### 4. Missing selectCount on MR questions (~12 questions)
See MEDIUM section for full list.

### 5. Table questions with no interactive content (~6 questions)
Have prompts/explanations but no answerable data. See MEDIUM section.

### 6. Inconsistent `critical` field on options (~8 questions)
Some options have it, some don't. Should be explicit on all.
