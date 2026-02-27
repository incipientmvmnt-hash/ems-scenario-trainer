# Clinical Audit — Scenarios Chunk 2 (IDs 21–40)

**Auditor:** Clinical EMS Content Auditor (Subagent)  
**Date:** 2026-02-27  
**Scenarios Reviewed:** nat-air-02, nat-air-03, nat-card-03, nat-card-04, nat-card-05, nat-air-04, nat-tra-02, nat-tra-03, nat-tra-04, nat-tra-05, nat-tra-06, nat-tra-07, nat-ob-02, nat-ob-03, nat-peds-02, nat-beh-02, nat-beh-03, nat-pharm-01, nat-env-02, nat-env-03

---

## CRITICAL Issues

### 1. nat-air-03 Q1 — Wrong Correct Answer: FBAO in 18-Month-Old
- **Severity:** CRITICAL
- **What's wrong:** The correct answer is "Begin cycles of 5 back blows followed by 5 chest thrusts." However, this patient is 18 months old — a **child**, not an infant per AHA definitions (infant = <1 year). AHA BLS guidelines recommend **abdominal thrusts** for conscious children >1 year with complete FBAO. More critically, the prompt states the patient is **unresponsive**. AHA 2020 guidelines state: *"If a choking victim becomes unresponsive, begin CPR."* For unresponsive FBAO at any age, the recommendation is to start CPR (looking in the mouth between cycles for a visible foreign body). Option D ("Begin immediate CPR with chest compressions") is actually the most correct answer per AHA guidelines for an unresponsive FBAO patient.
- **Additional problem:** The explanation for option C (abdominal thrusts) incorrectly states "the AHA recommends back blows and chest thrusts for this age group" — this is false for a child >1 year.
- **What it should be:** Option D (CPR) should be correct for an unresponsive choking patient. If the intent is to test back blows/chest thrusts, change the patient age to <12 months AND make the patient **conscious** with complete obstruction.

### 2. nat-air-03 Q2 — Ordering Based on Wrong Algorithm
- **Severity:** CRITICAL
- **What's wrong:** The ordering question teaches back blows/chest thrusts sequence for an "unresponsive patient." Per AHA, this sequence is for **conscious infants** only. For unresponsive FBAO, the algorithm is CPR with airway checks between cycles.
- **What it should be:** Either change to the CPR-based unresponsive FBAO algorithm, or change the scenario to a conscious infant (<1 year).

### 3. nat-air-03 Q3 — Age Classification Error
- **Severity:** CRITICAL  
- **What's wrong:** The categorize question itself is clinically sound and well-constructed. However, the scenario context (18-month-old treated with infant technique) reinforces the incorrect age-based treatment from Q1. The clinical pearl correctly notes the transition is "approximately at age 1" but then rationalizes using infant technique on a child, contradicting AHA guidelines.
- **What it should be:** If keeping this categorize question (which is educationally valuable), ensure Q1 and Q2 are corrected first so the scenario doesn't teach the wrong algorithm application.

---

## HIGH Issues

### 4. nat-beh-02 — "Excited Delirium" Terminology and Guideline References
- **Severity:** HIGH
- **What's wrong:** Multiple references cite "ACEP Excited Delirium White Paper" and "ACEP White Paper on Excited Delirium." ACEP formally retired/withdrew its task force report on excited delirium in 2023, and the term itself is increasingly contested in medical literature. The AMA adopted a policy in 2023 opposing "excited delirium" as a diagnosis. While NAEMSP still references severe agitation syndromes, the ACEP citations are no longer valid.
- **What it should be:** Replace "ACEP Excited Delirium White Paper" references with "NAEMSP Position Statement on Agitated/Violent Patient Management" or "2021 National EMS Education Standards — Behavioral Emergencies." Consider using "severe behavioral/metabolic emergency" or "hyperadrenergic crisis" language rather than relying solely on the contested "excited delirium" term.

### 5. nat-tra-02 Q2 — Ordering Steps Don't Match Narrative Context
- **Severity:** HIGH
- **What's wrong:** The narrative states "You are en route to the trauma center" but step 1 of the ordering is "Ensure scene safety and apply BSI/PPE" and step 2 is "Perform primary assessment (XABCDE)." These are scene-phase activities that should already be complete if the patient is en route.
- **What it should be:** Either change the narrative to match the ordering (scene-phase narrative), or change the ordering to reflect transport-phase priorities (ongoing assessment, fluid resuscitation, reassessment, hospital notification).

### 6. nat-ob-02 Q2 — EMR Level Includes Vascular Access Step
- **Severity:** HIGH
- **What's wrong:** Level filter is "EMR-EMT" but step 3 is "Obtain vascular access or prepare for transport." EMRs do not establish vascular access. The "or prepare for transport" qualifier partially mitigates this, but the ordering implies vascular access is a step EMRs should sequence.
- **What it should be:** Change to "Prepare for transport (obtain vascular access if within scope)" or remove EMR from the level filter for this question.

### 7. nat-air-02 Q5 — Epinephrine for COPD Exacerbation
- **Severity:** HIGH
- **What's wrong:** The ordering includes "Administer epinephrine 0.3 mg IM (1:1,000) for severe refractory bronchospasm" for a COPD patient. While epinephrine is well-established for severe refractory **asthma**, its use in COPD is more controversial. In a 78-year-old with hypertension and prior cardiac history (implied by HTN), IM epinephrine carries higher risk of adverse cardiac events. GOLD guidelines do not include epinephrine in the COPD exacerbation algorithm.
- **What it should be:** Add a note in the explanation about the risk-benefit consideration in elderly COPD patients with cardiovascular comorbidities, or change to "Consider epinephrine 0.3 mg IM if life-threatening bronchospasm with imminent arrest despite all other interventions — weigh cardiac risk in elderly patients."

---

## MEDIUM Issues

### 8. nat-card-03 Q2 — "HR 60 is adequate for adults" Oversimplification
- **Severity:** MEDIUM
- **What's wrong:** The explanation for option D states "A rate of 60 bpm is adequate for adults." While technically CPR is not indicated with a palpable pulse, 60 bpm in a post-arrest patient with BP 82/54 may warrant close monitoring and consideration of chronotropic support. The statement is oversimplified for a post-ROSC patient.
- **What it should be:** "A heart rate of 60 bpm with a palpable pulse represents ROSC. While this rate may be borderline, CPR is not indicated when a perfusing pulse is present. Monitor closely and be prepared to resume CPR if the pulse is lost or perfusion deteriorates."

### 9. nat-env-03 Q5 — Question Structure Mismatch
- **Severity:** MEDIUM
- **What's wrong:** Tagged as type "graphical" with `multi_select: false`, but all 4 options are marked `correct: true`. This appears to be an educational matching exercise (match sign → system) rather than a traditional MC question. The question structure doesn't fit the type designation and would confuse the quiz engine.
- **What it should be:** Change type to "categorize" or "mr" (multi-select) with `selectCount: 4`, or restructure as a matching exercise with distinct correct/incorrect pairings.

### 10. nat-tra-03 Q2 — Ordering: Airway Assessment Before Primary Assessment
- **Severity:** MEDIUM
- **What's wrong:** Step 2 is "Assess airway for signs of inhalation injury and apply high-flow oxygen" and step 3 is "Perform primary assessment (XABCDE)." Airway assessment IS part of the primary assessment (the "A" in XABCDE). Having it as a separate prior step creates a false sequence that contradicts the systematic approach.
- **What it should be:** Combine or reorder: Step 2 should be "Perform primary assessment (XABCDE) with special attention to airway for inhalation injury signs — apply high-flow O2." Or remove step 3 and integrate it into step 2.

### 11. nat-beh-02 Q3 — Haloperidol Marked as CRITICAL Wrong
- **Severity:** MEDIUM
- **What's wrong:** Haloperidol option is marked `critical: true` (implying selecting it could harm the patient). While haloperidol is suboptimal for excited delirium, it has been used for decades and is still carried on many ambulances. The QT prolongation concern is valid but labeling it as "critical" (equivalent to patient-harming) is an overstatement compared to, say, administering a clearly wrong drug. The explanation is accurate but the severity tag is excessive.
- **What it should be:** Change to `critical: false`. The explanation already correctly identifies the problems with haloperidol in this context.

### 12. nat-air-02 Q1 — Venturi Mask Explanation Inaccuracy
- **Severity:** MEDIUM
- **What's wrong:** Option D states a Venturi mask at 24% FiO2 delivers "potentially less than what his current nasal cannula provides." A nasal cannula at 2 LPM delivers approximately 24-28% FiO2. A Venturi at 24% could actually deliver slightly less. The explanation is roughly correct but could be more precise.
- **What it should be:** "A Venturi mask at 24% FiO2 delivers a precise but low concentration equivalent to or less than his current nasal cannula at 2 LPM (~24-28% FiO2). This patient needs significantly MORE oxygen, not a lateral device change."

### 13. nat-tra-04 Q3 — C-Collar Application Timing
- **Severity:** MEDIUM
- **What's wrong:** Step 5 is "Apply cervical collar once out of the water and reassess neurovascular status." Current evidence and NAEMSP/ACS 2018 guidelines de-emphasize rigid cervical collars in favor of manual stabilization and self-application to a vacuum mattress or long board with head blocks. The step isn't wrong per se, but referencing C-collar application as a standard step may not reflect the most current evidence-based practice.
- **What it should be:** "Apply cervical collar or head blocks per local protocol once out of the water; reassess neurovascular status." Or update to reflect NAEMSP 2018 guidance that manual stabilization alone may be sufficient.

---

## LOW Issues

### 14. Answer Option Length Bias — Multiple Scenarios
- **Severity:** LOW (recurring pattern)
- **Affected scenarios:**
  - **nat-air-02 Q1:** Correct answer (titrate O2) is the longest option
  - **nat-card-05 Q1:** Correct answer is notably longer and more detailed than distractors
  - **nat-tra-05 Q1:** Correct answer is the longest by significant margin
  - **nat-ob-02 Q3:** Correct answer (MgSO4) has the longest text with the most clinical detail
  - **nat-beh-02 Q3:** Correct answer (ketamine) is longest with most supporting detail
  - **nat-peds-02 Q3:** Correct answer is longest with most specific detail
- **What's wrong:** Test-wise students can identify the correct answer simply by picking the longest, most detailed option — a well-known exam design flaw.
- **What it should be:** Normalize answer option lengths. Add comparable clinical detail to distractors (e.g., include dosing, rationale, and caveats in wrong answers too).

### 15. nat-air-04 Q3 — EMR Level for NRB Application
- **Severity:** LOW
- **What's wrong:** Level filter is "EMR-EMT" and step 2 is "Apply high-flow oxygen via non-rebreather mask." While EMRs can administer oxygen, some states/protocols limit EMR to nasal cannula only. NRB with high-flow O2 is universally EMT scope but varies at EMR level.
- **What it should be:** Consider changing level filter to "EMT" only, or note "apply supplemental oxygen per scope" instead of specifying NRB.

### 16. nat-air-02 Q2 — Albuterol Assist After 3 Failed Doses
- **Severity:** LOW
- **What's wrong:** The narrative states the patient "used his albuterol inhaler three times before calling 911 with no relief," but the ordering question includes "Assist with prescribed albuterol inhaler using spacer if available" as step 2. While technically within EMT scope, assisting with a 4th dose of medication that has already failed 3 times is questionable clinical judgment. A spacer might improve delivery, but this could be misleading.
- **What it should be:** Add a note: "A spacer device may improve drug delivery even if prior doses without a spacer were ineffective" — or acknowledge in the explanation that the EMT-level intervention has limitations here.

### 17. nat-card-04 Q1 — Graphical Type Without Image
- **Severity:** LOW
- **What's wrong:** Tagged as type "graphical" with an `image_description` field, but no actual image or image reference is provided. The narrative describes the rhythm strip textually. This is consistent across several "graphical" type questions.
- **What it should be:** Either provide actual rhythm strip images/references or change type to "mc" since the question functions as a standard MC question with a text-described rhythm.

### 18. nat-pharm-01 Q2 — Glucose Check Ordering
- **Severity:** LOW
- **What's wrong:** Step 4 in the ordering is "Check blood glucose and treat hypoglycemia if present." In practice, glucose should be checked early/concurrently with initial assessment, not after the second benzodiazepine dose. PALS guidelines recommend glucose check as part of the initial workup for seizures.
- **What it should be:** Move glucose check to step 2 (concurrent with reassessment) or note in the explanation that glucose should be checked as early as feasible.

### 19. nat-env-02 — Metoprolol Not Addressed
- **Severity:** LOW
- **What's wrong:** The patient is on metoprolol, which contributes to bradycardia and impairs the shivering response. This is clinically relevant but never mentioned in the questions or clinical pearls. It's a missed teaching opportunity.
- **What it should be:** Add a clinical pearl or question addressing how beta-blockers impair thermoregulatory response and contribute to hypothermic bradycardia.

### 20. nat-ob-02 Q4 — IV MgSO4 Listed as Wrong for EMR-EMT
- **Severity:** LOW
- **What's wrong:** Option E (administer IV magnesium sulfate) is marked incorrect with explanation "outside EMT scope of practice." This is correct but the option text doesn't clarify that it's wrong *because of scope* — a test-taker might think MgSO4 is clinically wrong for eclampsia, which would be a harmful misconception.
- **What it should be:** Reword explanation: "Magnesium sulfate IS the correct pharmacologic treatment for eclamptic seizures, but it is outside EMR/EMT scope of practice. Focus on airway management, positioning, and rapid transport to definitive care."

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| HIGH | 4 |
| MEDIUM | 6 |
| LOW | 7 |
| **Total** | **20** |

### Top Priority Fixes
1. **nat-air-03 (Pediatric FBAO)** — Q1, Q2, Q3 all flow from the same fundamental error: treating an 18-month-old unresponsive child with the conscious infant FBAO algorithm. This needs a complete rework of the scenario's clinical core. Either make the patient <1 year and conscious, or correct the algorithm to CPR for unresponsive FBAO.
2. **nat-beh-02 (Excited Delirium)** — Update guideline references to remove withdrawn ACEP citations.
3. **Answer option length normalization** — Systematic issue across ~6 scenarios; correct answers are consistently the longest/most detailed options.
