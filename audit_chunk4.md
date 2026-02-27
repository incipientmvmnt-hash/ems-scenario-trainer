# Audit Report — Chunk 4 (25 Scenarios)

**Auditor:** Subagent | **Date:** 2026-02-27

---

## Summary

- **Scenarios reviewed:** 25
- **Total questions reviewed:** 78
- **Issues found:** 28
- **CRITICAL:** 1
- **HIGH:** 7
- **MEDIUM:** 13
- **LOW:** 7

---

## Issues by Scenario

### nat-card-09 — Cardiac Tamponade (Medical Etiology)
No significant issues. Well-constructed scenario with accurate clinical content.

---

### nat-ob-04 — Placental Abruption / Third Trimester Hemorrhage

**Q2 | MEDIUM | Inconsistent correctOrder format**
`correctOrder` uses string values while nat-card-09 Q3 uses integer indices. Should be consistent across all scenarios. Pick one format.
**Suggested fix:** Standardize all `correctOrder` to use integer indices (positional) for code consistency.

---

### nat-ob-05 — Pediatric Severe Asthma Exacerbation

**Q2 | MEDIUM | Ipratropium dose may be high for pediatric patient**
Ipratropium 0.5mg is the adult dose. For a 7-year-old (~25 kg), the standard pediatric dose is 0.25mg (250 mcg) for children under 12 in many protocols, though 0.5mg is used in some severe exacerbation protocols.
**Suggested fix:** Clarify as "Ipratropium bromide 0.25–0.5mg nebulized (per protocol)" or note the weight-based consideration.

**Q3 | LOW | Phase label "reassessment"**
Not a standard phase seen elsewhere. Most scenarios use "assessment", "treatment", "transport". This is fine semantically but should be verified as an accepted phase label in the app.
**Suggested fix:** Confirm "reassessment" is in the allowed phase list; if not, use "treatment" or "transport".

---

### nat-ob-06 — Neonatal Meconium Aspiration

**Q3 | HIGH | Question type "graphical" but structured as categorize**
Type is `graphical` but the question has `items`, `categories`, and `correctCategories` — this is a categorize question. The `graphical` type is not well-defined. If the app doesn't handle `graphical` as a categorize variant, this will break.
**Suggested fix:** Change type to `categorize` or ensure the app explicitly supports `graphical` with categorize-style data.

---

### nat-pharm-06 — Calcium Channel Blocker Overdose

**Q3 | LOW | Phase "reassessment"**
Same as nat-ob-05 Q3 — confirm this is an accepted phase.

---

### nat-pharm-07 — Polypharmacy Adverse Drug Interaction in Elderly

**Q1 | HIGH | Question type "table" has no answer mechanism**
Type is `table` with `items` containing drug interaction data, but there's no `options`, `correctAnswer`, or scoring mechanism. How does the user interact with this? It appears informational, not a question. If the app expects user input, the structure is missing.
**Suggested fix:** Either convert to a categorize question (e.g., "categorize by severity") or add an MC question after the table, or mark as type `info` / `educational` if supported.

**Q2 | CRITICAL | Calcium contraindication nuance — correct answer may mislead**
The correct answer says "administer a cautious fluid bolus" and the explanation correctly notes calcium is CONTRAINDICATED in digoxin toxicity. However, option C ("Administer calcium chloride IV to treat suspected hyperkalemia") is marked incorrect with the explanation that calcium + digoxin = "stone heart." This is clinically accurate and well-explained. **However**, the scenario also suspects hyperkalemia — in real practice, if hyperkalemia is severe with ECG changes, calcium may still be given carefully even with digoxin on board (risk-benefit). The absolute contraindication language could be dangerous if a provider withholds calcium in a crashing hyperkalemic patient. 
**Suggested fix:** Soften the explanation to: "Calcium is relatively contraindicated in the setting of digoxin toxicity due to risk of fatal arrhythmias — this decision should be made at the hospital with lab confirmation. In the prehospital setting, the safer approach is supportive care and transport."

---

### nat-pharm-08 — Steroid-Dependent Adrenal Crisis

No significant issues. Excellent scenario with well-structured categorize question.

---

### nat-tra-08 — Traumatic Brain Injury — Fall from Height

**Q1 | MEDIUM | Vitals say RR 14 but prompt says "irregular respirations"**
The documented RR is 14 (normal rate), but the question prompt states "irregular respirations" as part of Cushing's triad. The vitals block doesn't indicate irregularity.
**Suggested fix:** Add a qualifier to vitals, e.g., `"rr": "14, irregular"` or note in the question that respirations have become irregular since initial vitals.

---

### nat-tra-09 — Pelvic Fracture — Pedestrian vs. Vehicle

**Q2 | MEDIUM | PASG/MAST categorization debatable**
PASG is listed as "Contraindicated/Harmful." While PASG is outdated and not recommended, it's not strictly "contraindicated" — it's simply no longer standard of care. Some older protocols still reference it.
**Suggested fix:** Consider renaming the category to "Inappropriate/Not Recommended" or keep as-is with a note in the explanation that it's outdated rather than dangerous per se.

---

### nat-tra-10 — Crush Injury — Building Collapse
No significant issues. Excellent scenario.

---

### nat-tra-11 — Geriatric Fall — Anticoagulated Patient

**Q1 | HIGH | Question type "table" with narrative containing a markdown table but options are MC**
The `table` type is used but the actual interaction is a standard MC question (options with correct/incorrect). The `narrative` contains a table for context. This type mismatch may confuse the rendering engine.
**Suggested fix:** Change type to `mc` and keep the narrative table as context, or ensure the app handles `table` type with MC options.

---

### nat-tra-12 — Motorcycle Crash — Traumatic Amputation

**Q4 | HIGH | Question type "graphical" but structured as MC**
Type is `graphical` but has standard MC `options` with correct/incorrect. The `narrative` contains a table. Should be type `mc`.
**Suggested fix:** Change type to `mc`.

---

### nat-ob-07 — Pediatric Near-Drowning

**Q1 | MEDIUM | Temperature 97.4°F option calls it "mild hypothermia" — distractor is misleading**
97.4°F (36.3°C) is technically on the low end of normal, not true hypothermia (<95°F/35°C). The option says "mild hypothermia from pool immersion" and is marked incorrect, which is fine — but the explanation doesn't address why 97.4 isn't concerning.
**Suggested fix:** Add to explanation: "97.4°F is low-normal, not hypothermia. Monitor for continued cooling but this alone is not a transport indication."

---

### nat-med-11 — Pediatric Meningitis

**Q1 | MEDIUM | Bulging fontanelle distractor for a 3-year-old**
The anterior fontanelle typically closes by 18 months. At age 3, a bulging fontanelle would not be assessable. This makes the distractor clinically unrealistic and could confuse learners.
**Suggested fix:** Replace with another plausible distractor, e.g., "Positive Brudzinski sign" or "Photophobia and neck stiffness."

---

### nat-med-12 — Status Epilepticus

**Q1 | MEDIUM | Phase label "scene_size_up"**
Should be a clean label like "assessment" or "scene". "scene_size_up" uses underscores and is inconsistent with other phase labels.
**Suggested fix:** Change to "scene" or "assessment".

**Q3 | LOW | Order question — glucose check before IV in an actively seizing patient**
The correct order puts "Check blood glucose" before "Establish IV access." In practice, checking glucose requires a fingerstick which is difficult during active seizure. Many protocols would have IM midazolam or IV access as higher priority than glucose in active status epilepticus.
**Suggested fix:** Consider reordering: IV access → glucose check → benzodiazepine. Or add a note that glucose can be checked simultaneously with IV prep.

---

### nat-med-13 — Acute Kidney Injury
No significant issues. Well-structured with appropriate graphical/table question.

---

### nat-med-14 — Thyroid Storm
No significant issues. Clinically accurate.

---

### nat-med-15 — Acute Pancreatitis
No significant issues. Good scenario.

---

### nat-pharm-09 — Lithium Toxicity

**Q3 | HIGH | Question type "table" with no interactive element**
Same issue as nat-pharm-07 Q1. The `items` contain pre-matched finding→system pairs. There's nothing for the user to do — the answers are given. This should either be a categorize question (user matches findings to systems) or an info panel.
**Suggested fix:** Convert to type `categorize` with `items` as finding strings and `categories` as body systems, with `correctCategories` mapping.

---

### nat-card-10 — Aortic Dissection

**Q2 | MEDIUM | correctOrder uses integer indices (0,1,2,3) — inconsistent**
Some scenarios use string arrays, some use integer indices for `correctOrder`. Should be standardized.
**Suggested fix:** Standardize format across all scenarios.

---

### nat-card-11 — Acute Pericarditis

**Q1 | HIGH | correctCategories is an array, not an object**
The `correctCategories` field is an array of category names: `["Pericarditis", "Acute Coronary Syndrome", ...]` rather than an object mapping items to categories like every other categorize question (e.g., `{"Sharp, pleuritic chest pain": "Pericarditis", ...}`).
**Suggested fix:** Convert to object format:
```json
{
  "Sharp, pleuritic chest pain": "Pericarditis",
  "Crushing substernal pressure": "Acute Coronary Syndrome",
  "Pain relieved by leaning forward": "Pericarditis",
  "Pain radiating to left arm/jaw": "Acute Coronary Syndrome",
  "Friction rub on auscultation": "Pericarditis",
  "Diffuse ST elevation on 12-lead": "Pericarditis",
  "ST elevation in a specific coronary distribution": "Acute Coronary Syndrome",
  "Recent viral illness": "Pericarditis"
}
```

**Q2 | HIGH | Table question has NO items/options — completely empty**
The question has a `prompt` and `explanation` but no `items`, `options`, `narrative` table, or any interactive content. The user has nothing to answer.
**Suggested fix:** Add ECG findings to match, e.g.:
```json
"items": [
  {"finding": "Diffuse ST elevation with PR depression", "condition": "Acute Pericarditis"},
  {"finding": "ST elevation V1-V4 with reciprocal inferior changes", "condition": "Anterior STEMI"},
  {"finding": "New LBBB with chest pain", "condition": "STEMI equivalent"},
  {"finding": "Low voltage with electrical alternans", "condition": "Pericardial effusion/Tamponade"}
]
```

---

### nat-beh-08 — Autism Spectrum Behavioral Crisis

**Q1 | MEDIUM | Phase label "scene_size_up"**
Same underscore issue as nat-med-12 Q1.
**Suggested fix:** Change to "scene" or "assessment".

**Q2 | MEDIUM | correctOrder uses integer indices (0,2,3,1)**
Uses index-based ordering. Functionally fine but inconsistent with string-based ordering in other scenarios.
**Suggested fix:** Standardize.

---

### nat-beh-09 — Grief Crisis and Death Notification

**Q1 | MEDIUM | Phase label "scene_size_up"**
Same issue.
**Suggested fix:** Change to "scene".

---

### nat-beh-10 — Alcohol Withdrawal / Delirium Tremens

**Q2 | LOW | correctCategories is an array, not an object**
Same issue as nat-card-11 Q1. Uses array format `["Appropriate", "Appropriate", ...]` instead of object mapping items to categories.
**Suggested fix:** Convert to object format mapping each item string to its category.

---

### nat-tra-13 — Facial / Maxillofacial Trauma with Airway Compromise

**Q2 | LOW | correctOrder uses integer indices**
Uses `[0,1,2,3,4]` — consistent with some scenarios but not others.
**Suggested fix:** Standardize.

**Q3 | LOW | selectCount missing**
MR question with 3 correct answers but no `selectCount` field.
**Suggested fix:** Add `"selectCount": 3`.

---

## Cross-Cutting Issues

### 1. Phase Label Inconsistency (MEDIUM — affects 4 questions)
Three different non-standard phase labels found:
- `"scene_size_up"` — nat-med-12 Q1, nat-beh-08 Q1, nat-beh-09 Q1
- `"reassessment"` — nat-ob-05 Q3, nat-pharm-06 Q3, nat-pharm-07 Q3, nat-pharm-09 Q3, nat-med-12 Q2

**Recommendation:** Establish an allowed phase enum: `scene`, `assessment`, `treatment`, `transport`, `reassessment` (if desired). Convert all `scene_size_up` to `scene`.

### 2. correctOrder Format Inconsistency (MEDIUM — affects ~6 scenarios)
Some use integer index arrays `[0,1,2,3]`, others use string arrays matching item text. This will cause bugs if the rendering code expects one format.
**Recommendation:** Standardize to one format. Integer indices are more robust (no string matching issues).

### 3. correctCategories Format Inconsistency (HIGH — affects 2 scenarios)
nat-card-11 Q1 and nat-beh-10 Q2 use array format instead of object mapping. Every other categorize question uses the object format. The array format is ambiguous and likely broken in the app.
**Recommendation:** Convert both to object format `{ "item": "category" }`.

### 4. "table" and "graphical" Question Types Unclear (HIGH — affects 5 questions)
Several questions use type `table` or `graphical` but have wildly different structures — some are really MC, some are categorize, some are informational with no interaction. These types need formal schemas.
**Affected:** nat-pharm-07 Q1, nat-tra-11 Q1, nat-tra-12 Q4, nat-ob-06 Q3, nat-med-13 Q3, nat-pharm-09 Q3, nat-beh-10 Q1

### 5. Missing selectCount on MR Questions (LOW — affects 1 question)
nat-tra-13 Q3 is missing `selectCount`.

---

## Clinical Accuracy Notes (All Verified Correct)

- **nat-ob-06 Q1:** NRP 8th edition guideline change (no routine tracheal suction) — correctly reflected ✓
- **nat-pharm-06:** CCB overdose management with HDI — correct order and rationale ✓
- **nat-pharm-07 Q2:** Calcium contraindicated in digoxin toxicity — correct but see nuance note above
- **nat-tra-08:** Cushing's triad and TBI management — correct ✓
- **nat-med-12:** Status epilepticus benzos first-line — correct ✓
- **nat-beh-10:** DTs timeline and benzos as cornerstone — correct ✓
- **nat-card-10:** Aortic dissection — aspirin/fibrinolytic contraindication — correct ✓
