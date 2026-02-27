# Clinical Audit — Chunk 3 (Scenarios 41–60)

**Auditor:** AI Clinical EMS Content Auditor  
**Date:** 2026-02-27  
**Scope:** Scenarios `nat-env-04` through `nat-ops-07` (20 scenarios)  
**Standards:** 2021 National EMS Education Standards, AHA 2020/2025, NAEMSP, PHTLS 9th Ed, TECC, current guidelines

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| HIGH | 8 |
| MEDIUM | 12 |
| LOW | 9 |

---

## CRITICAL Issues

### 1. nat-med-09 (Hyperkalemia) — Q3, Ordering

**Severity:** CRITICAL  
**What's wrong:** The ordering question places "nebulized albuterol" before "continuous cardiac monitoring with TCP pads applied." In a patient with HR 44 and BP 94/58 who just received calcium, transcutaneous pacing pads should already be on the patient as a safety net BEFORE spending time on nebulized albuterol. More importantly, the order places "rapid transport" and "early hospital notification" AFTER all treatments, but transport should be initiated concurrent with treatment, not sequential after it.  
**What it should be:** TCP pads should be applied immediately after calcium (or concurrently). Transport should be initiated early with treatments performed en route. The current ordering implies a prolonged on-scene approach for a patient who needs emergent dialysis.

### 2. nat-pharm-02 (Allergic Reaction) — Q2, Ordering

**Severity:** CRITICAL  
**What's wrong:** The correct order places "Position patient appropriately" as step 3, after epinephrine and oxygen. However, the narrative states BP 96/62 — a hypotensive patient in anaphylaxis should be placed supine with legs elevated IMMEDIATELY, not after fumbling with an NRB. Additionally, the instruction says "monitor airway closely for worsening edema" under positioning but doesn't specify that a patient in respiratory distress should remain upright, creating conflicting guidance.  
**What it should be:** For a patient with BOTH respiratory distress AND hypotension, position of comfort (usually semi-recumbent) should be noted as the appropriate compromise. The explanation should explicitly address this conflict rather than giving a generic "position appropriately." Epinephrine first is correct; positioning should be concurrent with or immediately after epi, not after oxygen setup.

### 3. nat-pharm-03 (Beta-Blocker OD) — Q2, Treatment Order

**Severity:** CRITICAL  
**What's wrong:** The correct order places IV fluid bolus first, then atropine, then calcium. In combined BB/CCB overdose with HR 38 and BP 72/40, **calcium should be the first medication** — it directly antagonizes CCB cardiotoxicity and is widely recognized as the first-line intervention in severe CCB toxicity. Atropine is typically ineffective in significant BB/CCB overdose. Placing fluids and atropine before calcium delays the most impactful intervention.  
**What it should be:** Order should be: (1) Calcium chloride/gluconate IV, (2) Atropine (may attempt while preparing calcium), (3) IV fluid bolus, (4) Glucagon, (5) High-dose insulin with dextrose, (6) Vasopressor. Per ACMT 2023 and toxicology consensus, calcium is THE first-line drug in CCB toxicity with hemodynamic compromise.

---

## HIGH Issues

### 4. nat-env-04 (Electrical Injury) — Q1, Correct Answer Nuance

**Severity:** HIGH  
**What's wrong:** The correct answer is "Establish manual in-line cervical spine stabilization." While not wrong, the scenario states the provider has already "confirmed the power source has been disconnected" — scene safety is already addressed. The real first action after scene safety confirmation in a trauma patient is a primary survey starting with airway assessment, not isolated C-spine stabilization. PHTLS teaches simultaneous manual C-spine with airway assessment, not C-spine as a standalone first action.  
**What it should be:** The correct answer should be reworded to "Establish manual in-line cervical spine stabilization while assessing the airway" or the explanation should note that C-spine and airway assessment occur simultaneously per PHTLS's XABCDE approach.

### 5. nat-med-08 (Sickle Cell) — Q2, Level Filter & Ordering

**Severity:** HIGH  
**What's wrong:** The question is tagged `EMR-EMT-AEMT` but step 4 is "Establish IV access and administer normal saline bolus" — this is beyond EMR scope and may be beyond basic EMT scope depending on the state. Additionally, step 5 is "Provide appropriate pain management per protocol" which for EMR/EMT is limited to non-pharmacologic measures or acetaminophen in some systems — the ordering implies IV pain meds which conflicts with the level filter.  
**What it should be:** Either change level_filter to `AEMT-Paramedic` or add scope-specific notes to steps 4 and 5 (e.g., "AEMT/Paramedic scope" parenthetical as done elsewhere in the dataset).

### 6. nat-med-08 (Sickle Cell) — Q5, Categorize — Fluid Management

**Severity:** HIGH  
**What's wrong:** "Continue IV normal saline at maintenance rate to maintain hydration" is marked as "Appropriate." However, in a patient with SpO2 85%, crackles in the right lower lobe, and suspected acute chest syndrome, maintenance fluids should be administered cautiously. ACS can progress to ARDS, and even maintenance-rate fluids can worsen pulmonary edema. The explanation itself warns against aggressive fluids but then marks maintenance fluids as appropriate without caveats.  
**What it should be:** This should either be marked "Appropriate with caution" (if the system supports it) or the explanation should explicitly note that fluid rate should be reduced if pulmonary edema develops, or the answer should be moved to "Not Appropriate" with an explanation about pulmonary edema risk in ACS.

### 7. nat-card-06 (Cardiogenic Shock) — Q3, Ordering — CPAP Before Positioning

**Severity:** HIGH  
**What's wrong:** CPAP is listed as step 1, before "Position patient sitting fully upright" (step 2). In practice, you must position the patient upright BEFORE or SIMULTANEOUSLY with CPAP application — CPAP is nearly impossible to apply to a supine patient, and the upright position itself provides immediate respiratory benefit. The current order is not how this would actually be performed.  
**What it should be:** Position upright should be step 1 (or concurrent with CPAP). The explanation should note these happen simultaneously in practice.

### 8. nat-card-06 (Cardiogenic Shock) — Q1, Correct Answer — NTG Threshold

**Severity:** HIGH  
**What's wrong:** The explanation states NTG requires "typically SBP >100" but many current protocols and AHA guidelines use SBP >90 as the threshold. The patient's SBP of 92 might actually permit cautious NTG use under some protocols. Stating >100 as a general rule may be misleading.  
**What it should be:** Note that thresholds vary by protocol (90-110 mmHg depending on the system) and that with SBP 92 and signs of shock, NTG is generally contraindicated regardless of the specific threshold because of the cardiogenic shock pathophysiology.

### 9. nat-beh-04 (Acute Psychosis) — Q1, Missing Explanations on Distractors

**Severity:** HIGH  
**What's wrong:** Options A, C, and D in Q1 have no `explanation` field — only `correct: false`. Every option should have an explanation so learners understand WHY each wrong answer is wrong. This is inconsistent with the pattern used in every other scenario.  
**What it should be:** Add explanations. E.g., Option A: "Approaching quickly and initiating physical contact can escalate the situation and trigger a violent response." Option C: "Restraints are a last resort after de-escalation and chemical sedation have failed." Option D: "A detailed psychiatric history is inappropriate during an acute crisis and delays safety measures."

### 10. nat-beh-05 (Panic vs Cardiac) — Q2, Missing Explanations on Distractors

**Severity:** HIGH  
**What's wrong:** Same as above — options A, C, and D lack individual explanations. Only the overall explanation exists but the per-option structure is missing.  
**What it should be:** Add per-option explanations for consistency and learning value.

### 11. nat-beh-06 (Dementia) — Q2, Hypertensive Emergency

**Severity:** HIGH  
**What's wrong:** "Hypertensive emergency with end-organ damage" is marked correct with BP 168/94. A BP of 168/94 is hypertensive urgency, not emergency. Hypertensive emergency requires SBP >180 and/or DBP >120 WITH end-organ damage. While the altered mental status could technically represent end-organ damage, labeling 168/94 as a hypertensive emergency is clinically inaccurate and could teach providers to misclassify hypertension severity.  
**What it should be:** Either increase the BP in the vitals to >180/120 to be consistent with the answer, or change this option to "Hypertensive urgency contributing to altered mental status" and mark it as a lower-priority concern, or remove it and replace with another plausible option (e.g., "medication adverse effect from trimethoprim-sulfamethoxazole" which can cause CNS effects in elderly with CKD).

---

## MEDIUM Issues

### 12. nat-ops-02 (Hazmat) — Q3, Categorize Format

**Severity:** MEDIUM  
**What's wrong:** The `correctCategories` array uses numeric indices (0, 0, 1, 1, 1, 2, 2, 2) while nat-ops-06 Q1 uses a different format with named category keys mapping to item arrays. This inconsistency could cause rendering bugs.  
**What it should be:** Standardize the categorize answer format across all scenarios.

### 13. nat-ops-03 (Air Medical) — Q1, Time Calculation

**Severity:** MEDIUM  
**What's wrong:** The explanation says air transport is "~30 min total: 12-min activation + 18-min flight." But the patient still has 15-20 min of extrication remaining. If the helicopter is called now, it arrives at ~12 min (activation) + 18 min (flight) = arriving to pick up patient ~30 min from now. But patient won't be extricated for 15-20 min, so the helicopter may arrive before the patient is ready. This actually strengthens the case for calling early but the math should note this.  
**What it should be:** The explanation should clarify: "Activating now means the helicopter arrives approximately when extrication completes, minimizing total scene-to-definitive-care time."

### 14. nat-ops-04 (Refusal) — Q4, Answer Length Disparity

**Severity:** MEDIUM  
**What's wrong:** The correct answer is significantly longer than all distractors: "Obtain a 12-lead ECG — this patient's cardiac history and transient chest tightness warrant evaluation for ischemic changes, which would strengthen your risk counseling" vs much shorter alternatives. This is a test-taking giveaway.  
**What it should be:** Shorten the correct answer to ~same length as distractors: "Obtain a 12-lead ECG to evaluate for ischemic changes" and move the rationale to the explanation field.

### 15. nat-med-09 (Hyperkalemia) — Q2, Answer Length Disparity

**Severity:** MEDIUM  
**What's wrong:** The correct answer "Calcium chloride (or calcium gluconate) IV to stabilize the myocardium" includes a parenthetical alternative. While clinically accurate, the parenthetical makes it longer and more "complete-looking" than the other options.  
**What it should be:** Either add parenthetical alternatives to other options too, or remove it: "Calcium IV to stabilize the myocardium."

### 16. nat-card-06 (Cardiogenic Shock) — Q4, Answer Length Disparity

**Severity:** MEDIUM  
**What's wrong:** The correct answer is substantially longer than the three wrong answers, making it identifiable by length alone.  
**What it should be:** Equalize option lengths. Shorten correct answer or lengthen distractors.

### 17. nat-air-05 (Tension Pneumothorax) — Q1, Answer Length Disparity

**Severity:** MEDIUM  
**What's wrong:** Correct option A is much longer than options C and D, making it a length-based giveaway.  
**What it should be:** Balance option lengths.

### 18. nat-pharm-04 (Polypharmacy) — Q1, Drug Interaction Accuracy

**Severity:** MEDIUM  
**What's wrong:** The explanation states levofloxacin increases digoxin levels by "reducing renal clearance and altering gut flora that metabolize digoxin." The primary mechanism of fluoroquinolone-digoxin interaction is disruption of gut flora (specifically *Eubacterium lentum*) that normally inactivates digoxin, NOT reduced renal clearance. Levofloxacin does not significantly alter renal digoxin clearance.  
**What it should be:** "Levofloxacin disrupts intestinal flora (*Eubacterium lentum*) that normally inactivates digoxin in the gut, increasing bioavailability. In a patient with CKD (already impaired renal clearance), this additional increase in digoxin absorption can push levels into the toxic range."

### 19. nat-pharm-05 (Adrenal Crisis) — Q2, Level Filter

**Severity:** MEDIUM  
**What's wrong:** Q2 is tagged `level_filter: Paramedic` but Q1 is tagged `AEMT-Paramedic`. Hydrocortisone or dexamethasone administration may be within AEMT scope in some systems (especially with standing orders for adrenal crisis), and AEMT should at minimum understand the treatment concept. The sudden scope restriction from Q1 to Q2 seems inconsistent.  
**What it should be:** Consider `AEMT-Paramedic` for Q2 as well, since AEMTs can administer IV medications and some systems include stress-dose steroids in AEMT protocols.

### 20. nat-beh-04 (Acute Psychosis) — Q3, Midazolam as First-Line

**Severity:** MEDIUM  
**What's wrong:** The explanation states midazolam is "the preferred first-line agent for acute undifferentiated agitation." Current NAEMSP/ACEP 2021 guidelines and many systems now favor ketamine IM as first-line for severe acute agitation due to faster onset and more predictable sedation. Midazolam is a reasonable choice but calling it universally "preferred first-line" is debatable.  
**What it should be:** Reword to "IM midazolam is an appropriate first-line agent for acute agitation when IV access is not established. Ketamine IM is an increasingly common alternative with faster onset." This avoids a definitive statement that varies by protocol.

### 21. nat-ops-06 (Active Shooter) — Q1, Categorize Format Inconsistency  

**Severity:** MEDIUM  
**What's wrong:** The `correctCategories` field uses a nested object format with named keys mapping to arrays of item strings, which differs from every other categorize question that uses a flat array of numeric indices. This will likely cause rendering/scoring bugs.  
**What it should be:** Standardize to numeric index format matching other categorize questions: `[0, 1, 2, 1, 0, 2]`.

### 22. nat-beh-04 (Acute Psychosis) — Q4, Ordering Format Inconsistency

**Severity:** MEDIUM  
**What's wrong:** The `correctOrder` uses an array of strings (item text) instead of numeric indices. Other ordering questions in the dataset use `[0, 1, 2, 3, 4]` format. This inconsistency exists in Q4 of nat-beh-04, Q3 of nat-beh-06, and Q2/Q3 of nat-ops-05.  
**What it should be:** Standardize all ordering correctOrder fields to numeric index format.

### 23. nat-beh-06 (Dementia) — Q3, Ordering Accuracy

**Severity:** MEDIUM  
**What's wrong:** Chemical restraint is placed as the absolute last step, AFTER the focused trauma assessment. But the ordering instructions say "Place the following de-escalation and management steps in the correct order" — if de-escalation fails and the patient is actively combative and swinging, you may need chemical restraint BEFORE you can safely perform a hands-on head/neuro exam. A combative patient won't let you palpate their skull.  
**What it should be:** Chemical restraint should be positioned as a conditional branch — if de-escalation and glucose check succeed, then trauma exam. If the patient remains combative after de-escalation, chemical restraint may need to precede the full trauma exam. The explanation should acknowledge this nuance.

---

## LOW Issues

### 24. nat-env-04 (Electrical Injury) — Clinical Pearl

**Severity:** LOW  
**What's wrong:** The clinical pearl says current "travels through the body along the path of least resistance." This is a common simplification. In reality, current travels through ALL available paths proportional to their conductance, not exclusively the path of least resistance. The simplification is standard in EMS education but could be updated.  
**What it should be:** "Current flows through all tissues but preferentially through tissues with lower resistance (nerves, blood vessels, muscles)."

### 25. nat-med-08 (Sickle Cell) — Q1, Guideline Reference

**Severity:** LOW  
**What's wrong:** "NAEMSP Sickle Cell Prehospital Guidelines" is referenced repeatedly. While NAEMSP has published position statements on SCD, there is no standalone document titled "Sickle Cell Prehospital Guidelines." The correct reference is likely "NAEMSP Position Statement: EMS Management of Patients with Sickle Cell Disease" or the ASH 2020 guidelines.  
**What it should be:** Cite as "NAEMSP Position Statement on EMS Management of Sickle Cell Disease" or "ASH 2020 Guidelines for Sickle Cell Disease."

### 26. nat-card-06 (Cardiogenic Shock) — Q2, Categorize — Dyspnea on Exertion

**Severity:** LOW  
**What's wrong:** "Dyspnea on exertion" is categorized as left-sided heart failure only. While primarily a left-sided symptom, severe right-sided failure with reduced cardiac output also causes exertional dyspnea. This is an acceptable simplification for training but worth noting.  
**What it should be:** Acceptable as-is for educational purposes, but the explanation could note that severe biventricular failure causes overlapping symptoms.

### 27. nat-pharm-03 (BB OD) — Q1, Categorize — "Hyperglycemia"

**Severity:** LOW  
**What's wrong:** The item says "Hyperglycemia (impaired insulin release)" and categorizes it as "Primarily Beta-Blocker Effect." Beta-blockers actually cause hypo*glycemia* by blocking glycogenolysis and masking hypoglycemic symptoms. It's CCBs (especially verapamil/diltiazem) that cause hyperglycemia by impairing insulin release. The explanation at the bottom correctly notes this distinction but contradicts the categorization.  
**What it should be:** "Hyperglycemia (impaired insulin release)" should be categorized as "Primarily Calcium Channel Blocker Effect." The clinical pearl already correctly states "Beta-blocker OD classically causes hypoglycemia...while CCB OD causes HYPERglycemia."

**Wait — reclassifying this to CRITICAL:**

### ~~27~~ → Reclassified: nat-pharm-03 Q1 — Hyperglycemia Categorization

**Severity:** CRITICAL → **Upgrading to CRITICAL**  
**What's wrong:** "Hyperglycemia (impaired insulin release)" is categorized as "Primarily Beta-Blocker Effect" but this is factually backwards. Beta-blockers cause HYPOglycemia; CCBs cause HYPERglycemia. The scenario's own clinical pearl states this correctly, directly contradicting the categorization answer.  
**What it should be:** Move "Hyperglycemia (impaired insulin release)" to "Primarily Calcium Channel Blocker Effect."

---

### 28. nat-ops-04 (Refusal) — Q1, Answer Length

**Severity:** LOW  
**What's wrong:** The correct answer is noticeably longer than the incorrect options.  
**What it should be:** Trim to comparable length.

### 29. nat-med-08 (Sickle Cell) — Q4, Fentanyl Dosing

**Severity:** LOW  
**What's wrong:** Fentanyl 1 mcg/kg IV with 0.5 mcg/kg increments q5min is reasonable but on the higher side of initial dosing for some protocols. Many EMS systems use 50-100 mcg flat dosing rather than weight-based for adults.  
**What it should be:** Acceptable but could add "per local protocol" language since dosing varies significantly.

### 30. nat-ops-07 (Ambulance Crash) — Q3, DOT Testing

**Severity:** LOW  
**What's wrong:** The clinical pearl states DOT post-accident testing is required "when the crash involves a fatality, a citation with injury, or a citation with a vehicle towed." The actual 49 CFR 382 criteria for post-accident testing apply to CDL holders and involve: (1) fatality, (2) citation AND injury requiring immediate medical treatment away from scene, (3) citation AND vehicle towed. The scenario doesn't specify CDL requirements for ambulance operators, which vary by state.  
**What it should be:** Add a note that CDL requirements and testing thresholds vary by state and employer policy.

### 31. nat-beh-05 (Panic vs Cardiac) — Q1, "Feeling of Impending Doom"

**Severity:** LOW  
**What's wrong:** "A feeling of impending doom" is marked as not suspicious for cardiac events. While it occurs in both conditions, impending doom is actually a classic and well-documented symptom of acute MI, particularly in women. Marking it as not increasing cardiac suspicion could reinforce dismissal of this symptom.  
**What it should be:** The explanation correctly notes it occurs in both, but the question structure (asking which INCREASE suspicion for cardiac) means marking it false is defensible. However, a brief note in the explanation that impending doom IS a recognized ACS symptom would improve the educational value.

### 32. nat-pharm-05 (Adrenal Crisis) — Scenario Realism

**Severity:** LOW  
**What's wrong:** The correct answer includes "hydrocortisone 100 mg IV/IM" as a prehospital intervention. While increasingly available in EMS systems, many services still do not carry stress-dose steroids. The alternative of "dexamethasone 4 mg if available" is more realistic for most EMS systems.  
**What it should be:** Acceptable as-is since it represents best practice, but could note "availability varies by system."

---

## Revised Summary (After Reclassification)

| Severity | Count |
|----------|-------|
| CRITICAL | 4 |
| HIGH | 8 |
| MEDIUM | 12 |
| LOW | 8 |

**Total Issues Found: 32**

### Top Priority Fixes:
1. **nat-pharm-03 Q1** — Hyperglycemia miscategorized as BB effect (should be CCB) — directly contradicts its own clinical pearl
2. **nat-pharm-03 Q2** — Treatment order has calcium too late; should be first-line
3. **nat-pharm-02 Q2** — Positioning logic in anaphylaxis ordering needs revision
4. **nat-med-09 Q3** — TCP pads and transport timing need reordering

### Structural Issues (Affect Multiple Scenarios):
- **Answer length disparity** in nat-ops-04 Q4, nat-med-09 Q2, nat-card-06 Q4, nat-air-05 Q1
- **Format inconsistency** in correctOrder (strings vs indices): nat-beh-04 Q4, nat-beh-06 Q3, nat-ops-05 Q2-Q3
- **Format inconsistency** in correctCategories (object vs array): nat-ops-06 Q1
- **Missing per-option explanations**: nat-beh-04 Q1, nat-beh-05 Q2
