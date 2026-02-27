# Audit Report — Chunk 3 (25 Scenarios)

Generated: 2026-02-27

---

## nat-beh-04 — Acute Psychosis with Command Hallucinations

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | Phase label `scene_size_up` — should be `scene` | Normalize to `"scene"` |
| Q2 | **LOW** | Categorize question is clinically solid but the distinction between positive/negative psychosis symptoms is more psychiatric didactic than field-relevant for EMTs | Acceptable as-is; consider AEMT-Paramedic only filter |
| Q4 | **MEDIUM** | Order question: the correct placement of "Obtain IV/IO access" before "Document" is reasonable but debatable — some protocols emphasize documentation timestamps concurrently with monitoring | Add note in explanation that documentation is ongoing, not deferred |

**Summary**: Clean scenario. Minor phase label issue.

---

## nat-beh-05 — Panic Attack vs Acute Coronary Event

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | "A feeling of impending doom" marked incorrect — while it occurs in both conditions, it IS classically associated with MI/PE and many EMS texts list it as a cardiac red flag. Marking it wrong could reinforce a dangerous dismissal. | Consider marking this correct (select 4) or rewording explanation to emphasize it's non-specific but still concerning |
| Q3 | **LOW** | Table question type `table` — this is a good format. No structural issues. | None |

**Summary**: Q1 impending doom classification is the most concerning item — worth revisiting.

---

## nat-beh-06 — Dementia Patient with Combative Behavior

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **MEDIUM** | "Hypertensive emergency with end-organ damage" marked correct — BP 168/94 is elevated but likely not hypertensive emergency range for a patient with chronic HTN. AMS is more likely from delirium/infection than from this BP. | Consider changing to incorrect, or rewording to "hypertensive encephalopathy" and noting it's less likely but must be considered |
| Q3 | **LOW** | Chemical restraint listed last — correct for elderly, well-explained | None |

**Summary**: BP 168/94 as "hypertensive emergency" is a stretch clinically. Medium concern.

---

## nat-beh-07 — PTSD Crisis in Combat Veteran

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | Phase label `scene_size_up` — normalize | Change to `"scene"` |
| Q3 | **LOW** | `graphical` type but uses text narrative instead of an actual image — acceptable as-is with the text pyramid | None |

**Summary**: Very well-written scenario. Minor phase label.

---

## nat-pharm-03 — Beta-Blocker Overdose with Hemodynamic Compromise

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | "Hyperglycemia (impaired insulin release)" categorized as "Primarily Beta-Blocker Effect" — this is correct for beta-blockers, but CCBs (especially non-dihydropyridines) also impair insulin release. Amlodipine (dihydropyridine) is less associated with hyperglycemia, so the categorization is acceptable but could confuse learners | Add clarifying note in explanation that dihydropyridine CCBs have less hyperglycemic effect than non-dihydropyridines |
| Q2 | **HIGH** | Treatment order is debatable. Many toxicology guidelines place calcium BEFORE atropine for combined BB/CCB OD since atropine is typically ineffective. ACMT guidelines suggest calcium early. Placing atropine second and calcium third may teach suboptimal sequencing. | Consider swapping atropine and calcium positions, or noting in explanation that order may vary by protocol and calcium is often prioritized over atropine |

**Summary**: Q2 treatment order is the key issue — could lead to suboptimal care if atropine delays calcium administration.

---

## nat-pharm-04 — Polypharmacy Crisis in Geriatric Patient

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | "Levofloxacin inhibiting digoxin clearance" — the primary mechanism is actually that fluoroquinolones kill gut flora (Eubacterium lentum) that metabolize digoxin, plus renal competition. The explanation says "reducing renal clearance and altering gut flora" which is adequate but "inhibiting digoxin clearance" in the option text is slightly oversimplified | Minor — acceptable as-is |
| Q2 | **LOW** | "Missed potassium—but she's on furosemide so it may balance out" marked incorrect — this is reasonable since missing both would roughly balance, though it's an oversimplification | Acceptable |

**Summary**: Excellent scenario. Clinically rich and well-constructed.

---

## nat-pharm-05 — Steroid-Dependent Adrenal Crisis

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| — | **LOW** | All questions clinically accurate and well-structured | None |

**Summary**: Outstanding scenario. No issues found.

---

## nat-ops-05 — Crew Resource Management / Communication Failure

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | Phase label `scene` — acceptable but the scenario describes an on-scene clinical disagreement, not scene size-up. `"assessment"` or `"treatment"` might be more accurate since the dispute is about a clinical intervention (12-lead) | Consider `"assessment"` |
| Q3 | **LOW** | Phase label `post-call` — non-standard but descriptive. Consider `"post_call"` or just accept it | Normalize if desired |
| Q3 | **LOW** | `selectCount: 3` with 5 options and 3 correct — works fine | None |

**Summary**: Good CRM scenario. Minor phase label considerations.

---

## nat-ops-06 — Active Shooter / Rescue Task Force Response

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **HIGH** | Categorize `correctCategories` uses a **different format** (object with arrays) than other categorize questions in the dataset (which use a flat array mapping items to categories in order). This inconsistency will likely break the app. | Standardize to flat array format: `["Hot Zone", "Warm Zone", "Cold Zone", "Warm Zone", "Hot Zone", "Cold Zone"]` matching item order |
| Q3 | **LOW** | `graphical` type with text narrative — no actual image. Acceptable with the text description. | None |

**Summary**: Q1 categorize format inconsistency is a functional bug — HIGH priority.

---

## nat-ops-07 — Ambulance Crash / Crew Injury

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q3 | **LOW** | Phase `post-call` — same normalization note as ops-05 | Standardize |

**Summary**: Clean scenario. Well done.

---

## nat-ops-08 — Special Event / Mass Gathering Medical Planning

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **HIGH** | Categorize `correctCategories` uses **object with arrays format** — same inconsistency as nat-ops-06 Q1 | Standardize to flat array format matching item order |
| Q3 | **LOW** | Phase `post-call` for a planning scenario — slightly odd but acceptable as it represents after-action review | Consider `"assessment"` or a planning-specific phase |

**Summary**: Format inconsistency in Q2. Otherwise excellent planning scenario.

---

## nat-ops-09 — Inter-Facility Critical Care Transport

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **LOW** | Phase `scene` for IFT acceptance — not quite a scene size-up but acceptable | None |
| Q4 | **LOW** | Phase `post-call` — acceptable for quality metric discussion | None |
| Q3 | **MEDIUM** | Level filter `AEMT-Paramedic` but EMTALA knowledge is relevant to all transport providers | Consider `EMT-AEMT-Paramedic` |

**Summary**: Good IFT scenario. Minor level filter consideration.

---

## nat-ops-10 — Pediatric Safe Surrender / Abandoned Newborn

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| — | **LOW** | All questions well-structured and clinically appropriate | None |

**Summary**: Excellent scenario. No issues.

---

## nat-env-05 — High-Altitude Pulmonary Edema

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q3 | **MEDIUM** | Dexamethasone marked incorrect for HAPE — while nifedipine is first-line for HAPE specifically, dexamethasone IS used as an adjunct for HAPE in some guidelines (WMS 2019 recommends it when descent isn't possible). Marking it flatly wrong oversimplifies. | Add to explanation: "Dexamethasone may be used as adjunct but is primarily indicated for HACE. Nifedipine is the specific pharmacological treatment for HAPE." |

**Summary**: Good scenario. Q3 could benefit from nuanced explanation.

---

## nat-env-06 — Carbon Monoxide Exposure

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | Phase label `scene_size_up` — normalize | Change to `"scene"` |
| Q3 | **HIGH** | Categorize `correctCategories` uses **object format** (keyed by item text) — a THIRD different format from the flat array and the array-of-arrays formats seen elsewhere | Standardize to flat array: `["Early CO Symptom", "Severe CO Poisoning Sign", "Early CO Symptom", "Severe CO Poisoning Sign", "Early CO Symptom", "Severe CO Poisoning Sign"]` |

**Summary**: Another categorize format inconsistency. Functional bug.

---

## nat-env-07 — Lightning Strike Injury

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **MEDIUM** | Phase label `scene_size_up` — normalize | Change to `"scene"` |
| Q3 | **LOW** | MR with `selectCount: 4` and 4 correct out of 6 — works | None |

**Summary**: Well-constructed scenario. Minor phase label.

---

## nat-env-08 — Scuba Diving Emergency

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q1 | **HIGH** | `table` type question has NO `options`, NO `narrative` with table content, and the prompt says "match each diving injury" but provides nothing to match. Missing the actual table data and answer structure. Only an `explanation` is present. | This question is **broken** — needs complete table content, answer options, and correct answer designation |
| Q2 | **MEDIUM** | "Left lateral Trendelenburg" marked incorrect — the explanation correctly notes this is no longer recommended. Good. However, "Rapid IV fluid bolus" being marked wrong may surprise some providers since DAN and many protocols do recommend concurrent IV fluids alongside O2. | Consider rewording explanation to emphasize O2 is MOST important (which it is) but fluids are also indicated |

**Summary**: Q1 is a broken/incomplete question — HIGH priority fix needed.

---

## nat-env-09 — Pediatric Hyperthermia — Enclosed Vehicle

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| — | **LOW** | All questions well-structured and clinically sound | None |

**Summary**: Excellent scenario. No issues.

---

## nat-air-06 — Acute Epiglottitis

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **HIGH** | Categorize `correctCategories` uses **object format** keyed by item text — same inconsistency | Standardize to flat array format |

**Summary**: Great clinical content. Format issue in Q2.

---

## nat-air-07 — Tracheostomy Emergency — Accidental Decannulation

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q3 | **HIGH** | `graphical` type references "A, B, and C" and "D" in the options but there is NO narrative, image, or diagram describing what A, B, C, and D are. The explanation reveals A=capnography, B=condensation, C=bilateral chest rise, D=subcutaneous crepitus, but the learner would have no way to answer this. | Add a narrative or image describing the four confirmation methods labeled A-D |

**Summary**: Q3 is broken — missing the visual/narrative content that options reference.

---

## nat-air-08 — Smoke Inhalation with Airway Burns

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **CRITICAL** | `correctOrder` is `[0, 1, 2, 3]` — uses numeric indices instead of the actual item text strings. This is a different format from all other order questions and will likely break the app. | Change to text strings: `["Apply high-flow oxygen...", "Prepare rapid sequence...", "Perform direct or video...", "Secure the endotracheal tube..."]` |
| Q3 | **HIGH** | `table` type question has NO options, NO table content in narrative, and just an explanation. Same broken pattern as nat-env-08 Q1. The prompt says "Complete the following table" but there's nothing to complete. | This question is **broken** — needs complete table, options, and answer structure |

**Summary**: Two broken questions. Q2 format bug is CRITICAL (wrong data type). Q3 missing content.

---

## nat-air-09 — Pulmonary Embolism with Respiratory Distress

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **HIGH** | Categorize `correctCategories` uses **object format** keyed by item text — inconsistent | Standardize to flat array |
| Q2 | **MEDIUM** | "Establish IV access with normal saline" and "Administer IV fluid bolus" both categorized as Paramedic-level — IV access is AEMT scope in most states, and the level filter includes AEMT. Consider splitting the category to include AEMT. | Change categories to `"EMT-Level"`, `"AEMT/Paramedic-Level"` or note scope differences |

**Summary**: Format inconsistency plus scope nuance.

---

## nat-air-10 — Spontaneous Pneumothorax (Non-Traumatic)

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **CRITICAL** | `correctOrder` is `[0, 1, 2, 3]` — uses numeric indices instead of text strings. Same bug as nat-air-08 Q2. | Change to actual item text strings |
| Q3 | **LOW** | Phase `reassessment` — non-standard but descriptive and clean | Acceptable |

**Summary**: Q2 format bug is critical — must fix.

---

## nat-card-07 — Atrial Fibrillation with Rapid Ventricular Response

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q3 | **LOW** | `selectCount: 2` — clearly indicated. Good. | None |

**Summary**: Clean, well-written cardiology scenario. No issues.

---

## nat-card-08 — Hypertensive Emergency

| # | Severity | Issue | Suggested Fix |
|---|----------|-------|---------------|
| Q2 | **HIGH** | Categorize `correctCategories` uses **object format** keyed by item text — inconsistent | Standardize to flat array |

**Summary**: Excellent clinical content. Format issue only.

---

## Cross-Cutting Issues Summary

### 🔴 CRITICAL (2)
1. **nat-air-08 Q2 & nat-air-10 Q2**: `correctOrder` uses numeric indices `[0,1,2,3]` instead of text strings — breaks order question rendering/grading
2. No clinically wrong correct answers found

### 🟠 HIGH (8)
1. **Categorize format inconsistency** (6 instances): nat-ops-06 Q1, nat-ops-08 Q2, nat-env-06 Q3, nat-air-06 Q2, nat-air-09 Q2, nat-card-08 Q2 — all use object format instead of flat array. Need standardization across the entire dataset.
2. **nat-env-08 Q1**: Table question completely missing content (no table, no options)
3. **nat-air-07 Q3**: Graphical question references A/B/C/D labels with no image or narrative defining them
4. **nat-air-08 Q3**: Table question completely missing content
5. **nat-pharm-03 Q2**: Treatment order may teach suboptimal sequencing (atropine before calcium in combined BB/CCB OD)

### 🟡 MEDIUM (12)
- Phase label `scene_size_up` in 5 questions — normalize to `"scene"`
- nat-beh-05 Q1: "Impending doom" classification debatable
- nat-beh-06 Q2: BP 168/94 labeled hypertensive emergency
- nat-env-05 Q3: Dexamethasone for HAPE oversimplified
- nat-ops-09 Q3: EMTALA level filter too restrictive
- nat-env-08 Q2: IV fluids explanation could be clearer
- nat-pharm-03 Q1: Hyperglycemia categorization nuance
- nat-air-09 Q2: AEMT scope for IV access

### 🟢 LOW (15)
- Various minor phase label normalizations (`post-call`, `reassessment`)
- Style/polish items as noted above

### Format Standardization Needed
Three different `correctCategories` formats exist in this chunk:
1. **Flat array** (items mapped by index): nat-beh-04 Q2, nat-pharm-03 Q1, nat-pharm-05 Q3
2. **Object with arrays** (category → item arrays): nat-ops-06 Q1, nat-ops-08 Q2
3. **Object keyed by item text** (item → category): nat-env-06 Q3, nat-air-06 Q2, nat-air-09 Q2, nat-card-08 Q2

**Recommendation**: Pick ONE format and standardize. The flat array (format 1) is simplest and most consistent with other question types.
