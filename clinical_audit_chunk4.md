# Clinical Audit — Chunk 4 (Scenarios 61–80)

**Auditor:** Clinical EMS Content Auditor (AI)
**Date:** 2026-02-27
**Scope:** Scenarios `nat-ops-08` through `nat-pharm-06` (20 scenarios)
**Standards:** 2021 National EMS Education Standards, AHA 2020/2025 Guidelines, NAEMSP, PHTLS 10th Ed, NRP 8th Ed

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH | 6 |
| MEDIUM | 10 |
| LOW | 8 |

---

## CRITICAL Issues

### nat-air-08 — Smoke Inhalation, Q2 (Airway management order)
- **Severity:** CRITICAL
- **What's wrong:** The `correctOrder` uses numeric indices `[0, 1, 2, 3]` instead of the text strings used in every other ordering question. This is a data format inconsistency that will likely cause the application to malfunction — the question won't score correctly.
- **What it should be:** `correctOrder` should contain the text strings matching the `items` array, consistent with all other `order`-type questions in the dataset.
- **Note:** Same issue appears in `nat-air-10` Q2 and `nat-card-09` Q3. All three need fixing.

---

## HIGH Issues

### nat-ops-08 — Mass Gathering, Q2 (Categorize tiers)
- **Severity:** HIGH
- **What's wrong:** The category name "First Aid / BLS Tier" uses "BLS" terminology. While this scenario is EMT+ level, the framing reinforces the "BLS vs ALS" dichotomy that can be problematic. More importantly, the term "BLS Tier" is imprecise — EMTs perform more than "BLS" and this tier mixes true first-aid (blister stations) with EMT-scope care.
- **What it should be:** Rename to "Basic Care / First Aid Tier" or "Tier 1 — Basic Life Support" to be more precise. Minor issue but affects how providers conceptualize their role.

### nat-env-05 — HAPE, Q3 (Nifedipine for HAPE)
- **Severity:** HIGH
- **What's wrong:** Dexamethasone (option C) is marked incorrect with explanation "Dexamethasone is first-line for HACE, not HAPE." However, the 2019 WMS guidelines actually support dexamethasone as an adjunct for HAPE when descent is not possible, particularly when HACE co-exists or is suspected. With GCS 14 (mildly altered), this patient may have overlapping HACE, making dexamethasone a reasonable choice. A competent provider could argue this answer is also correct.
- **What it should be:** Either (a) make the patient clearly NOT altered (GCS 15) to remove HACE ambiguity, or (b) rephrase the question to ask specifically "which medication targets the pulmonary vascular mechanism of HAPE" to make nifedipine unambiguously correct, or (c) acknowledge in the explanation that dexamethasone may be used adjunctively but nifedipine is the primary HAPE-specific treatment.

### nat-env-07 — Lightning Strike, Q2 (VF treatment order)
- **Severity:** HIGH
- **What's wrong:** Per AHA ACLS, epinephrine is given after the 2nd shock in VF/pVT (i.e., after the first 2-minute CPR cycle post-shock). The ordering here places epi as step 4 after IV/IO access (step 3), which is correct sequentially, but the order implies IV access → epi happens before a second rhythm check/shock cycle. The ACLS algorithm is: shock → 2 min CPR → rhythm check → 2nd shock → epi. The order as written could be interpreted as all steps happening linearly without intervening rhythm checks.
- **What it should be:** Add a note in the explanation that this represents the sequence of *initiating* each intervention, and that rhythm checks occur between defibrillation and medication cycles per ACLS. Or restructure to include "Perform 2 minutes of CPR and recheck rhythm" between defibrillation and epinephrine.

### nat-ob-04 — Placental Abruption, Q1 (Guideline ref)
- **Severity:** HIGH
- **What's wrong:** The guideline reference cites "ACOG Practice Bulletin #200 (2018) — Early Pregnancy Loss." Practice Bulletin #200 is about **early pregnancy loss** (miscarriage), NOT about placental abruption or third-trimester hemorrhage. The correct reference would be ACOG Practice Bulletin #227 (Placenta Previa and Accreta) or the general ACOG guidance on antepartum hemorrhage.
- **What it should be:** Change to "ACOG Committee Opinion on Obstetric Hemorrhage" or "ACOG Practice Bulletin — Management of Placental Abruption" with the correct number.

### nat-ob-04 — Placental Abruption, Q2 (Treatment order)
- **Severity:** HIGH
- **What's wrong:** The correct order places oxygen first, then left lateral tilt, then fluids. In a patient with BP 86/52, positioning in left lateral tilt to relieve aortocaval compression is arguably the single fastest intervention to improve hemodynamics and is simultaneous/co-priority with oxygen. More importantly, the order implies these are sequential when in practice O2 and positioning happen simultaneously. The explanation justifying O2 first ("addresses fetal and maternal hypoxia first") is weak — the patient's SpO2 is 96%, so hypoxia isn't the immediate threat; hemorrhagic shock is.
- **What it should be:** Either accept both orders (O2/tilt or tilt/O2 first) as correct, or reframe the question to acknowledge these are near-simultaneous interventions. The current order is defensible but could cause confusion.

### nat-air-09 — PE, Q2 (Scope categorization)
- **Severity:** HIGH
- **What's wrong:** "Establish IV access with normal saline" is categorized as Paramedic-Level, but IV access is explicitly within AEMT scope per the 2021 National EMS Education Standards. The question is filtered for "EMT-AEMT-Paramedic" but the categorization only offers "EMT-Level" vs "Paramedic-Level" — there's no AEMT category. This forces an incorrect scope assignment for AEMTs.
- **What it should be:** Either add an "AEMT-Level" category, or rename categories to "BLS Provider" and "ALS Provider" (though this has its own issues), or change IV access categorization to acknowledge AEMT scope in the explanation.

---

## MEDIUM Issues

### nat-ops-08 — Mass Gathering, Q1 (PPR factors)
- **Severity:** MEDIUM
- **What's wrong:** The distractor "Color of event T-shirts" is absurd and not plausible. Similarly, "Distance from the state capital" is obviously wrong. Good distractors should be plausible — e.g., "Duration of individual performances" or "Average ticket price" would test knowledge more rigorously.
- **What it should be:** Replace absurd distractors with plausible-but-wrong options like "Social media engagement for the event" or "Number of food vendors on site."

### nat-ops-09 — IFT STEMI, Q1 (Answer option length)
- **Severity:** MEDIUM
- **What's wrong:** The correct answer ("Confirming the receiving facility has an available catheterization lab and has accepted the patient") is significantly longer and more detailed than the distractors (fuel, insurance, contract). This is a test-taking cue — students can identify the correct answer by length alone.
- **What it should be:** Equalize option lengths. E.g., expand distractors: "Ensuring your ambulance has a full fuel tank and backup oxygen supply for the 90-minute transport."

### nat-ops-09 — IFT STEMI, Q4 (Door-to-balloon terminology)
- **Severity:** MEDIUM
- **What's wrong:** The correct answer says "Total door-to-balloon time (first medical contact to balloon inflation)" — but "door-to-balloon" and "first medical contact to balloon" are different metrics. Door-to-balloon is measured from ED arrival; FMC-to-device is the broader metric. The answer conflates them. For transfer STEMI, the AHA metric is specifically "first door to balloon" or "FMC to device."
- **What it should be:** Change to "Total first medical contact to device time (FMC-to-device)" or clarify that for transfer STEMIs, "door-to-balloon" encompasses the entire system including the referring facility's door.

### nat-env-06 — CO Exposure, Q2 (HBO indications)
- **Severity:** MEDIUM
- **What's wrong:** SpCO of 15% is listed as NOT an indication for HBO. While 15% alone may not mandate HBO, many toxicologists would argue that SpCO >15% with symptoms warrants HBO evaluation. The threshold varies by source (some say >25%, UHMS says consider at >25% or with symptoms). The answer as written is defensible but the 15% distractor could confuse providers who've been taught different thresholds.
- **What it should be:** Change the non-indicated SpCO level to something clearly below threshold, like "SpCO level of 5% on CO-oximetry" to avoid ambiguity.

### nat-env-08 — Scuba DCS, Q1 (Left lateral Trendelenburg)
- **Severity:** MEDIUM
- **What's wrong:** The explanation correctly states left lateral Trendelenburg is no longer recommended, but the option text doesn't clarify this is outdated — a provider trained on older protocols might select it as correct and feel the question is unfair. The explanation is good but the question could better test current knowledge.
- **What it should be:** Add "previously recommended but no longer supported" to the option text, or rephrase the option to make it clearer this is testing current vs. outdated practice.

### nat-env-09 — Pediatric Hyperthermia, Q1 (Cooling order)
- **Severity:** MEDIUM
- **What's wrong:** "Remove from hot environment and remove clothing" is ranked last, but this is actually a prerequisite that happens simultaneously with/before any cooling method. You can't do cold water immersion while the child is still in the car. The ranking implies effectiveness, but the question asks for "order of effectiveness" — conceptually different from order of performance.
- **What it should be:** Clarify the prompt: "Rank the following by cooling effectiveness (fastest temperature reduction)" to make clear this isn't the order you'd perform them in the field.

### nat-air-06 — Epiglottitis, Q2 (Spinal immobilization)
- **Severity:** MEDIUM
- **What's wrong:** "Force patient supine for spinal immobilization" is listed as contraindicated. While correct, there's no clinical indication for spinal immobilization in this scenario at all — it's a nonsensical intervention for an atraumatic presentation. The distractor tests whether students know not to force the patient supine, but the spinal immobilization framing is misleading.
- **What it should be:** Change to "Force patient supine for transport per standard positioning" — removes the irrelevant spinal immobilization element.

### nat-card-07 — AFib RVR, Q2 (Hemodynamic stability)
- **Severity:** MEDIUM
- **What's wrong:** The initial vitals show BP 106/68, and the narrative states BP "stabilized at 108/70 after a 250mL NS bolus." A patient with symptomatic AFib RVR at BP 106/68 is borderline unstable — some ACLS instructors would argue this patient warrants cardioversion, not rate control. The scenario walks a fine line.
- **What it should be:** Either raise the initial BP to clearly stable (e.g., 122/78) or acknowledge in the explanation that this is a judgment call and that cardioversion would also be acceptable if the provider considered the patient unstable.

### nat-card-09 — Tamponade, Q4 (Opioid avoidance)
- **Severity:** MEDIUM
- **What's wrong:** Listing "Morphine or fentanyl for pain" as contraindicated due to vasodilation is clinically nuanced. Low-dose fentanyl causes minimal vasodilation compared to morphine. In practice, careful fentanyl use with fluid co-loading is acceptable for severe pain in tamponade. Marking all opioids as contraindicated oversimplifies.
- **What it should be:** Change the option to "Morphine IV (causes vasodilation and preload reduction)" to be more specific, or note in the explanation that low-dose fentanyl may be cautiously acceptable with volume support.

---

## LOW Issues

### nat-ops-10 — Safe Haven, Q1 (Distractor quality)
- **Severity:** LOW
- **What's wrong:** "Safe Haven laws only apply during business hours at hospitals" is too obviously wrong to be a useful distractor.
- **What it should be:** Replace with something more plausible like "Safe Haven laws require the parent to provide basic medical history of the infant."

### nat-ops-10 — Safe Haven, Q4 (Distractor quality)
- **Severity:** LOW
- **What's wrong:** "The FBI" and "The local school district" are absurd distractors. They don't test knowledge meaningfully.
- **What it should be:** Use "Local law enforcement" and "The state health department" as more plausible distractors.

### nat-env-07 — Lightning Strike, Q3 (Lichtenberg figures)
- **Severity:** LOW
- **What's wrong:** Lichtenberg figures are included as a correct answer for "secondary injuries to assess for," but they are benign erythema that requires no treatment. Including them alongside serious injuries (TM rupture, spinal injury, burns) could give the impression they require intervention.
- **What it should be:** The explanation correctly notes they're benign, which is sufficient. Consider adding "recognize but no treatment needed" in the option text.

### nat-env-08 — Scuba DCS, Q2 (Altitude restriction)
- **Severity:** LOW
- **What's wrong:** The correct answer states "1,000 feet AGL." DAN/UHMS guidelines typically specify 1,000 feet above the departure point or as close to sea level as possible, and reference cabin pressure altitude, not AGL. "AGL" (above ground level) is an aviation term that doesn't directly relate to cabin pressure in pressurized aircraft.
- **What it should be:** Change to "cabin altitude must not exceed 1,000 feet above sea level, or the aircraft must be pressurized to sea level."

### nat-air-10 — Spontaneous Pneumothorax, Q2 (Order format)
- **Severity:** LOW (duplicate of CRITICAL format issue)
- **What's wrong:** `correctOrder` uses `[0, 1, 2, 3]` numeric indices instead of text strings. Same format bug as nat-air-08 Q2 and nat-card-09 Q3.

### nat-ob-05 — Pediatric Asthma, Q2 (Ipratropium dose)
- **Severity:** LOW
- **What's wrong:** Ipratropium 0.5mg is the adult dose. For a 7-year-old (~25 kg), the standard pediatric dose is 0.25mg (250mcg) per nebulization per NAEPP EPR-3 guidelines. The 0.5mg dose is used in some aggressive protocols but is technically the adult dose.
- **What it should be:** Change to "Ipratropium bromide 0.25mg nebulized" or note "0.25-0.5mg" to acknowledge the pediatric dosing.

### nat-ob-06 — Meconium Aspiration, Q1 (Answer length)
- **Severity:** LOW
- **What's wrong:** The correct answer is notably longer and more detailed than the other options, providing a test-taking cue.
- **What it should be:** Equalize option lengths or make distractors more detailed.

### nat-pharm-06 — CCB Overdose, Q2 (Order — atropine first)
- **Severity:** LOW
- **What's wrong:** Placing atropine before calcium is somewhat debatable. Many toxicology sources (ACMT, EM:RAP) recommend calcium as the first-line intervention in known CCB overdose because atropine is almost always ineffective. The explanation acknowledges atropine will "likely fail" but places it first because it's "fast and low-risk." In practice, most toxicologists would push calcium first.
- **What it should be:** Either order is defensible. Consider noting in the explanation that calcium first is equally acceptable and that many toxicology experts prefer it.

---

## Scenarios With No Issues Found

The following scenarios had no clinically significant issues:
- `nat-ops-09` Q2, Q3 — IFT transport (minor length issue noted above)
- `nat-env-06` Q1, Q3 — CO exposure scene safety and symptom categorization ✓
- `nat-env-09` Q2, Q3 — Pediatric hyperthermia seizure management and monitoring ✓
- `nat-air-06` Q3 — Epiglottitis airway management ✓
- `nat-air-07` — Tracheostomy emergency (all questions) ✓
- `nat-card-07` Q1, Q3 — AFib identification and cardioversion considerations ✓
- `nat-card-08` — Hypertensive emergency (all questions) ✓

---

## Overall Assessment

**Quality: GOOD — This is a strong chunk of content.** The clinical accuracy is high across the board. The major issues are:

1. **Data format bug** (CRITICAL): Three questions use numeric indices instead of text strings in `correctOrder` — these will break scoring.
2. **Scope categorization gap**: The EMT vs Paramedic binary doesn't accommodate AEMT scope properly in several categorize questions.
3. **Answer length bias**: Several questions have correct answers that are noticeably longer/more detailed than distractors.
4. **Guideline citation error**: The ACOG Practice Bulletin #200 citation for placental abruption is wrong (it's about early pregnancy loss).

The clinical content itself is accurate and well-aligned with current guidelines. The NRP meconium management update is correctly reflected. Pharmacology content (CCB overdose, HAPE medications) is current. The environmental scenarios are particularly well-constructed.
