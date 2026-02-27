# Clinical Audit — Scenarios Chunk 1 (IDs nat-cardiac-01 through nat-tox-02)

**Auditor:** Clinical EMS Content Auditor (AI)  
**Date:** 2026-02-27  
**Reference Standards:** 2021 National EMS Education Standards, AHA 2020 Guidelines, PHTLS 10th Ed, NRP 8th Ed, Surviving Sepsis Campaign 2021  
**Scenarios Reviewed:** 20 scenarios, ~65 questions total

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| HIGH | 6 |
| MEDIUM | 10 |
| LOW | 8 |

---

## CRITICAL Issues

### 1. nat-acs-01 · Q4 (NTG Contraindications) — Question/Answer Mismatch
**Severity:** CRITICAL  
**What's wrong:** The prompt asks "Which of the following are contraindications to nitroglycerin administration **in this patient**?" with `selectCount: 3`. The narrative explicitly states: BP is 142/88, V4R shows 1mm STE, and "he denies taking any erectile dysfunction medications." Of the 3 "correct" answers (RV infarction, PDE5 inhibitors, SBP <90), **only RV infarction actually applies to this patient**. PDE5 inhibitors are denied, and SBP is 142, not <90.  
**What it should be:** Either (a) change prompt to "Which of the following are **general** contraindications to nitroglycerin?" removing "in this patient," or (b) change `selectCount` to 1 and mark only RV infarction as correct, making the others plausible distractors that don't apply here. Option (a) is the better educational approach.

### 2. nat-str-01 · Q6 (Stroke Severity Scales) — All Options Marked Correct in MC
**Severity:** CRITICAL  
**What's wrong:** Question type is `"mc"` (single-select multiple choice) but ALL FOUR options have `correct: true`. CPSS, RACE, NIHSS, and VAN are all marked correct. This is structurally broken — the UI would either accept any answer or confuse learners.  
**What it should be:** Change question type to `"categorize"` or `"table"` matching each assessment component set to its scale, OR convert to a multi-select (`"mr"`) if intent is "select all correct matches." As-is, this cannot function as an MC question.

### 3. nat-env-01 · Q3 (Heat Illness Classification) — All Options Marked Correct in MC  
**Severity:** CRITICAL  
**What's wrong:** Same structural issue. Question type is `"mc"` (single-select) but all four options (heat cramps, heat exhaustion, exertional heat stroke, classic heat stroke) are `correct: true`. No wrong answer exists.  
**What it should be:** Convert to a `"categorize"` or `"table"` type matching each classification to its findings, or restructure as a true MC with one correct and three incorrect options.

---

## HIGH Issues

### 4. nat-neo-01 · Q3 (Newborn Assessment Findings) — All Options Correct in MC
**Severity:** HIGH  
**What's wrong:** Same pattern — `"mc"` type but all 6 options are marked `correct: true`. Each is a reassuring or concerning finding labeled as such. No incorrect option exists.  
**What it should be:** Convert to `"categorize"` type with categories "Reassuring" and "Concerning." The content itself is clinically accurate.

### 5. nat-str-01 · Q4 (Stroke vs. Mimics) — All Options Correct in MC
**Severity:** HIGH  
**What's wrong:** `"mc"` type, all four options `correct: true`. Each correctly classifies a presentation as stroke or mimic.  
**What it should be:** Convert to `"categorize"` type with categories "Acute Stroke" and "Stroke Mimic."

### 6. nat-allergy-01 · Q1 — Correct Answer Length Bias
**Severity:** HIGH  
**What's wrong:** The correct answer (option A) is significantly longer and more detailed than all three distractors: "Involvement of two or more body systems (skin: urticaria, respiratory: stridor, cardiovascular: hypotension) following a known allergen exposure" vs. much shorter alternatives. A test-wise student can pick the correct answer based on length alone.  
**What it should be:** Equalize option lengths. Expand distractors to include similar clinical detail, or trim the correct answer. All options should be within ~20% of the same word count.

### 7. nat-trauma-01 · Q1 — Correct Answer Length Bias
**Severity:** HIGH  
**What's wrong:** Correct answer (option A) is substantially longer: includes pathophysiology explanation ("indicating a flail chest with likely underlying pulmonary contusion") baked into the answer text itself. Distractors are shorter and simpler.  
**What it should be:** Move the explanatory content to the explanation field. The answer option should be comparable in length to distractors.

### 8. nat-sep-01 · Q3 — Vitals Inconsistency in Explanation
**Severity:** HIGH  
**What's wrong:** Patient vitals show SpO2 91%. The Step 1 explanation states "This patient's SpO2 of 89% requires immediate supplemental oxygen." The value 89% doesn't appear in the scenario vitals.  
**What it should be:** Change explanation to reference SpO2 91%, which still supports the same clinical decision (supplemental O2 indicated <94%).

### 9. nat-cardiac-01 · Q3 — Epinephrine Timing Nuance  
**Severity:** HIGH  
**What's wrong:** The item states "After 2nd shock and 2 minutes of CPR, administer epinephrine 1 mg IV/IO." Per AHA ACLS 2020, epinephrine in VF/pVT is recommended **as soon as IV/IO access is available** — the algorithm no longer specifies waiting until after the 2nd shock specifically for the first dose. The 2020 update emphasizes early epi. While many teaching materials still show epi after the 2nd shock, the actual guideline language is less prescriptive about the exact timing relative to shock number.  
**What it should be:** Reword to "Administer epinephrine 1 mg IV/IO — give as soon as access is established; may be given during or after the 2nd CPR cycle" to reflect the nuance. Alternatively, keep as-is but note this is a common teaching convention rather than strict guideline language.

---

## MEDIUM Issues

### 10. nat-hypoglycemia-01 · Q2 — Clinical Pearl Contradicts Patient Scenario
**Severity:** MEDIUM  
**What's wrong:** Clinical pearl states "A patient with a GCS below 13 or who cannot follow commands may not be able to protect their airway during oral administration." The patient's GCS IS 13, right at the boundary. The scenario then has the correct order administer oral glucose, implying GCS 13 is adequate. The pearl creates confusion about whether this specific patient can safely receive oral glucose.  
**What it should be:** Adjust pearl to "GCS below 12" or add nuance: "Always individually assess the patient's ability to swallow and protect their airway — GCS alone is not a definitive cutoff."

### 11. nat-allergy-01 · Q2 — Positioning Concern in Anaphylaxis
**Severity:** MEDIUM  
**What's wrong:** Step 3 instructs "Place patient in supine position with legs elevated (shock position)." The explanation hedges with "unless contraindicated by respiratory distress." However, this patient HAS significant respiratory distress (stridor, SpO2 91%). Supine with legs elevated may worsen respiratory compromise. The correct answer for this specific patient should prioritize a compromise position.  
**What it should be:** Reword to "Position patient supine or semi-Fowler's based on respiratory tolerance; elevate legs if tolerated" or reorder to make this step conditional.

### 12. nat-trauma-01 · Q3 — IV Access Before Spinal Motion Restriction
**Severity:** MEDIUM  
**What's wrong:** The correct order places IV access/fluid resuscitation (Step 2) before spinal motion restriction (Step 3). In a multi-system trauma patient with signs of basilar skull fracture and head injury, spinal motion restriction is arguably a higher priority than IV access, which can be done en route. PHTLS's "Platinum 10 Minutes" emphasizes doing only critical interventions on scene and starting transport quickly. The clinical pearl even acknowledges this: "Start IVs and reassess during transport."  
**What it should be:** Consider swapping steps 2 and 3, or accept both orders as correct. The current pearl contradicts the correct order.

### 13. nat-drn-01 · Q2 — Automatic C-Spine Precautions for Pool Submersion
**Severity:** MEDIUM  
**What's wrong:** Step 1 assumes cervical spine precautions (jaw thrust) for a child found face-down in an above-ground pool. AHA 2020 states spinal precautions should be applied only when a mechanism suggests spinal injury (diving, fall from height, water slides). A child who may have simply been playing and submerged doesn't automatically warrant c-spine precautions. The explanation partially addresses this but the step still defaults to jaw thrust.  
**What it should be:** Reword to "Open the airway — use jaw thrust if mechanism suggests spinal injury (diving, fall); otherwise, head-tilt chin-lift is acceptable."

### 14. nat-tpn-01 · Scenario level_min vs. Content
**Severity:** MEDIUM  
**What's wrong:** `level_min: "AEMT"` but needle decompression scope varies significantly by state/protocol. Many jurisdictions restrict needle decompression to Paramedic scope. The questions appropriately filter to "AEMT-Paramedic" but the scenario-level minimum of AEMT could be misleading in jurisdictions where AEMTs cannot decompress.  
**What it should be:** Either change `level_min` to "Paramedic" or add a note that needle decompression scope varies by jurisdiction.

### 15. nat-obn-01 · Q2 Step 3 — "Mouth First Then Nose" Suction Order
**Severity:** MEDIUM  
**What's wrong:** States "Suction the mouth first, then the nose." This is legacy language from older NRP editions. NRP 8th Edition (2020) de-emphasizes routine suctioning entirely and does not specify mouth-before-nose order. The "only if obvious obstruction" qualifier is correct, but the specific order instruction adds outdated specificity.  
**What it should be:** Reword to "Clear visible airway secretions with gentle suctioning only if obstruction is apparent."

### 16. nat-behavioral-01 · Q3 — Excited Delirium Terminology
**Severity:** MEDIUM  
**What's wrong:** Clinical pearl uses term "Excited delirium/acute behavioral disturbance." ACEP withdrew its excited delirium position paper in 2023, and the term is increasingly controversial. AMA has called for retiring the term.  
**What it should be:** Use "acute behavioral disturbance" or "hyperactive delirium with agitation" consistently. Reference NAEMSP's current guidance language rather than the deprecated "excited delirium" term.

### 17. nat-cardiac-01 · Q5 — Post-ROSC TTM Clinical Pearl  
**Severity:** MEDIUM  
**What's wrong:** Pearl states "Targeted temperature management (TTM) should be initiated as early as possible for comatose post-cardiac arrest patients." The TTM2 trial (2021) showed no benefit of hypothermia (33°C) vs. normothermia (37.5°C) with active fever prevention. Current guidance emphasizes **actively preventing fever** rather than "initiating TTM as early as possible," which implies active cooling to a target.  
**What it should be:** "Actively prevent fever (maintain temperature ≤37.5°C) in comatose post-cardiac arrest patients. Avoid hyperthermia aggressively." Reference TTM2 trial alongside AHA guidance.

### 18. nat-env-01 · Q2 Step 4 — Cold IV Fluids Contradiction
**Severity:** MEDIUM  
**What's wrong:** States "avoid ice-cold fluids that may cause shivering" but then the explanation says "Some evidence supports cold IV fluids for internal cooling." These two statements contradict each other within the same question.  
**What it should be:** Pick one position. Current evidence supports room temperature or cool (not ice-cold) IV fluids in heat stroke with benzodiazepine coverage for shivering. Clarify accordingly.

### 19. nat-mci-01 · Q2 — All Options Correct in MC (Structural)
**Severity:** MEDIUM  
**What's wrong:** `"mc"` type but all four START triage classifications are `correct: true`. Each describes a different patient with correct triage categorization. No wrong answer exists.  
**What it should be:** Convert to `"categorize"` type mapping patients to triage categories (RED/YELLOW/GREEN/BLACK), or include at least one incorrectly triaged patient as a distractor.

---

## LOW Issues

### 20. nat-cardiac-01 · Q1 — "BSI/PPE" Terminology
**Severity:** LOW  
**What's wrong:** Uses "BSI/PPE" which is outdated terminology. Current standards use "Standard Precautions" or simply "PPE."  
**What it should be:** "Don appropriate PPE (standard precautions)"

### 21. nat-hypoglycemia-01 · Q4 — Glucagon Scope as AEMT
**Severity:** LOW  
**What's wrong:** Table assigns glucagon IM to AEMT as the lowest level. Per 2021 National EMS Education Standards, glucagon is in the AEMT scope. However, some states authorize EMTs to administer IM glucagon (similar to auto-injector epinephrine). The table is nationally correct but may cause confusion.  
**What it should be:** Add a note: "Scope varies by state protocol; nationally, glucagon IM is in the AEMT scope."

### 22. nat-peds-seizure-01 · Q3 — Tagged as "graphical" Type
**Severity:** LOW  
**What's wrong:** Question type is `"graphical"` but there is no actual graphical element — it's a standard MC question about monitor findings.  
**What it should be:** Change type to `"mc"` unless a graphical element (ECG strip image, waveform) is planned.

### 23. nat-str-01 · Q2 — Missing Clinical Pearl
**Severity:** LOW  
**What's wrong:** `clinical_pearl: null`. Every other question has a clinical pearl. Missing pearl is a content gap.  
**What it should be:** Add pearl, e.g., "Time is brain: every 15-minute delay in stroke treatment results in measurably worse outcomes. Establish last known well time as your FIRST action."

### 24. nat-acs-01 · Q3 — Missing Clinical Pearl
**Severity:** LOW  
**What's wrong:** `clinical_pearl: null`.  
**What it should be:** Add pearl about door-to-balloon time targets or the importance of right-sided ECG in inferior STEMI.

### 25. Multiple Scenarios — Null Clinical Pearls in Order Questions
**Severity:** LOW  
**What's wrong:** Several `"order"` type questions have `clinical_pearl: null` (nat-ped-01 Q2, Q3; nat-env-01 Q2; nat-obn-01 Q4; etc.). While explanations exist in step-by-step format, the missing pearls are a consistency gap.  
**What it should be:** Add clinical pearls to all questions for consistency.

### 26. nat-tra-01 · Q3 — PHTLS Edition Reference
**Severity:** LOW  
**What's wrong:** Some guideline refs cite "PHTLS 9th Edition" while scenario nat-trauma-01 cites "PHTLS 10th Edition." PHTLS 10th Edition is the current edition. The geriatric hip fracture and penetrating trauma scenarios reference the 9th edition.  
**What it should be:** Update all PHTLS references to 10th Edition for consistency.

### 27. nat-tox-01 · Q2 — Redundant "multi_select: false" on Order Question
**Severity:** LOW  
**What's wrong:** The `"order"` type question has a `multi_select: false` field that doesn't apply to ordering questions. No clinical impact but creates schema inconsistency.  
**What it should be:** Remove `multi_select` from order-type questions.

---

## Clinically Accurate — No Issues Found

The following scenarios/questions were reviewed and found clinically sound with no significant issues:

- **nat-cardiac-01** Q2 (AED shock delivery) — Correct, well-constructed
- **nat-cardiac-01** Q4 (H's and T's categorization) — Accurate categorizations
- **nat-allergy-01** Q3 (reassessment findings) — Good clinical reasoning
- **nat-trauma-01** Q2 (body region classification) — Accurate
- **nat-trauma-01** Q4 (advanced airway in trauma) — Excellent NPA contraindication inclusion
- **nat-trauma-01** Q5 (transport decisions) — TXA, helicopter, permissive hypotension all correct
- **nat-trauma-01** Q6 (tension pneumothorax) — DOPE mnemonic, correct management
- **nat-peds-seizure-01** Q1-Q2 — Febrile seizure content accurate
- **nat-behavioral-01** Q1-Q2 — De-escalation content excellent
- **nat-hypoglycemia-01** Q1, Q3, Q5 — D10 content current and accurate
- **nat-acs-01** Q1-Q2 — MONA deprecation, inferior STEMI content excellent
- **nat-acs-01** Q5 (fentanyl for ACS) — Current best practice
- **nat-ped-01** (croup) — All questions clinically sound
- **nat-tox-01** all questions — Naloxone titration content excellent
- **nat-obn-01** Q1, Q3-Q4 — OB content accurate
- **nat-sep-01** Q1-Q2, Q4 — Sepsis content solid
- **nat-drn-01** Q1, Q3 — Drowning management accurate
- **nat-tpn-01** all questions — Penetrating trauma content strong
- **nat-dka-01** all questions — DKA content excellent, especially ventilation rate warning
- **nat-mci-01** Q1, Q3-Q4 — ICS/MCI content accurate
- **nat-neo-01** Q1-Q2 — NRP content current
- **nat-tox-02** all questions — Organophosphate content thorough and accurate

---

## Recommendations

1. **Fix structural bugs first** (CRITICALs #1-3): These are broken questions that cannot function correctly in any quiz engine.
2. **Address answer length bias** (HIGHs #6-7): This is the most common psychometric flaw and the easiest to exploit via test-taking strategy.
3. **Resolve vitals inconsistencies** (HIGH #8): Mismatched numbers erode trust in the content.
4. **Update deprecated terminology** (excited delirium, BSI/PPE, PHTLS edition numbers).
5. **Convert "all-correct MC" questions** (#4, #5, #19) to appropriate question types.
6. **Add missing clinical pearls** for consistency across all questions.
7. **Review TTM2 implications** for post-cardiac arrest care guidance.
