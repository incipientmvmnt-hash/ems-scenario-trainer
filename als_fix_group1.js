const ALS_FIX_1 = {

  "nat-cardiac-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "You confirm the patient is unresponsive with no pulse and no breathing. Arrange the following initial interventions in the correct order of priority.",
        type: "order",
        level_filter: "EMR-EMT",
        items: [
          "Begin high-quality chest compressions",
          "Ensure scene safety and don BSI/PPE",
          "Attach and analyze with AED as soon as available",
          "Open the airway and provide ventilations"
        ],
        correctOrder: [1, 0, 3, 2],
        explanation: "The correct sequence is: (1) Ensure scene safety and PPE, (2) Begin high-quality chest compressions — push hard and fast with minimal interruptions, (3) Open airway and ventilate at a 30:2 ratio, (4) Attach and use the AED as soon as it is available. Early, high-quality CPR is the highest priority intervention after confirming cardiac arrest.",
        guideline_ref: "AHA BLS Guidelines 2020 — Adult Cardiac Arrest Algorithm",
        clinical_pearl: "Every minute without CPR decreases survival by 7-10%. High-quality compressions (rate 100-120/min, depth 2-2.4 inches, full recoil) are the single most important intervention in cardiac arrest."
      },
      {
        phase: "treatment",
        prompt: "CPR is in progress. Your partner retrieves the AED and powers it on. The AED analyzes the rhythm and advises 'Shock advised.' What is your next action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT",
        narrative: "CPR has been in progress for approximately 2 minutes. The AED pads have been applied and the device has completed its analysis.",
        options: [
          {
            text: "Clear the patient, ensure no one is touching them, and deliver the shock immediately",
            correct: true,
            critical: false,
            explanation: "When the AED advises a shock, ensure all rescuers are clear of the patient and deliver the shock without delay. Resume CPR immediately after the shock — do not pause to recheck a pulse.",
            guideline_ref: "AHA BLS Guidelines 2020 — AED Use"
          },
          {
            text: "Perform 2 minutes of CPR first, then deliver the shock to improve myocardial readiness",
            correct: false,
            critical: false,
            explanation: "When the AED advises a shock, it should be delivered as quickly as possible. Delaying the shock reduces the chance of successful defibrillation.",
            guideline_ref: "AHA BLS Guidelines 2020 — AED Use"
          },
          {
            text: "Remove the AED pads, check for a pulse, then reapply and deliver the shock",
            correct: false,
            critical: true,
            explanation: "Removing AED pads wastes critical time and interrupts the resuscitation. The AED has already analyzed the rhythm. Unnecessary delays in defibrillation decrease survival.",
            guideline_ref: "AHA BLS Guidelines 2020 — AED Use"
          },
          {
            text: "Deliver the shock while your partner continues chest compressions to maintain coronary perfusion",
            correct: false,
            critical: true,
            explanation: "No one should be touching the patient during shock delivery. This poses a serious electrocution risk to the rescuer performing compressions.",
            guideline_ref: "AHA BLS Guidelines 2020 — AED Safety"
          }
        ],
        clinical_pearl: "Resume CPR immediately after shock delivery, starting with compressions. Do not stop to check rhythm or pulse — complete a full 2-minute cycle of CPR before the next AED analysis."
      },
      {
        phase: "treatment",
        prompt: "You attach the cardiac monitor and identify ventricular fibrillation. CPR is ongoing with high-quality compressions. What is the correct sequence of ACLS interventions for this patient?",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Defibrillate at 200J biphasic (or manufacturer recommendation) — resume CPR immediately after shock",
          "Establish IV/IO access during CPR",
          "After 2nd shock and 2 minutes of CPR, administer epinephrine 1 mg IV/IO",
          "After 3rd shock, administer amiodarone 300 mg IV/IO bolus",
          "Continue CPR cycles — reassess rhythm every 2 minutes with pulse checks; repeat epinephrine every 3-5 minutes"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "The ACLS VF/pVT algorithm sequences: (1) Defibrillate as soon as VF is identified, (2) Establish vascular access during CPR, (3) Epinephrine 1 mg after the 2nd shock cycle, (4) Amiodarone 300 mg after the 3rd shock (may repeat 150 mg once), (5) Continue cycles with epinephrine q3-5 min. CPR quality and early defibrillation remain the highest priorities — medications are secondary.",
        guideline_ref: "AHA ACLS 2020 — VF/Pulseless VT Algorithm",
        clinical_pearl: "Epinephrine's primary benefit in cardiac arrest is its alpha-1 mediated vasoconstriction, which increases coronary and cerebral perfusion pressure during CPR. Give it early but never delay defibrillation or interrupt compressions for drug administration."
      },
      {
        phase: "treatment",
        prompt: "As a Paramedic, you identify ventricular fibrillation on the monitor. After multiple defibrillation attempts, the patient remains in VF. You are considering reversible causes. Categorize each of the following into either 'H's' (Hypovolemia, Hypoxia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia) or 'T's' (Tension pneumothorax, Tamponade, Toxins, Thrombosis-pulmonary, Thrombosis-coronary).",
        type: "categorize",
        level_filter: "Paramedic",
        items: [
          "Suspected massive PE based on recent leg surgery",
          "Patient found in unheated home, skin cool to touch",
          "Known history of end-stage renal disease with missed dialysis",
          "Bottle of tricyclic antidepressants found on nightstand",
          "Muffled heart sounds with JVD noted between compression pauses"
        ],
        categories: [
          "H's (Reversible Causes)",
          "T's (Reversible Causes)"
        ],
        correctCategories: [1, 0, 0, 1, 1],
        explanation: "Suspected massive PE = Thrombosis-pulmonary (T). Hypothermic environment = Hypothermia (H). Missed dialysis with ESRD = Hyperkalemia (H). Tricyclic antidepressants = Toxins (T). Muffled heart sounds with JVD = Tamponade (T). Identifying and treating reversible causes is essential when standard ACLS interventions fail to achieve ROSC.",
        guideline_ref: "AHA ACLS Guidelines 2020 — H's and T's of Cardiac Arrest",
        clinical_pearl: "In refractory VF, always reassess for reversible causes. Hyperkalemia is one of the most common and treatable causes — empiric calcium chloride and sodium bicarbonate may be considered."
      },
      {
        phase: "transport",
        prompt: "After 12 minutes of resuscitation, you achieve ROSC. The patient has a pulse of 88, BP 90/60, and is unresponsive with occasional agonal respirations. Select ALL appropriate post-ROSC interventions.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        narrative: "The patient has regained a pulse. He remains unconscious with a GCS of 6 (E1V2M3). Skin is pale and diaphoretic.",
        vitals_update: {
          hr: 88,
          bp: "90/60",
          rr: 6,
          spo2: 92,
          gcs: 6
        },
        options: [
          {
            text: "Maintain advanced airway and ventilate at 10 breaths/min; titrate oxygen to SpO2 94-99%",
            correct: true,
            critical: false,
            explanation: "Post-ROSC ventilation should target normoxia (SpO2 94-99%) and normocarbia. Hyperventilation is harmful and should be avoided. A rate of 10 breaths/min is appropriate.",
            guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020"
          },
          {
            text: "Establish IV/IO access and administer a 1-2 L normal saline fluid bolus targeting SBP > 90 mmHg",
            correct: true,
            critical: false,
            explanation: "Hypotension post-ROSC is common and should be treated aggressively with IV fluids and vasopressors as needed. Target SBP ≥ 90 mmHg or MAP ≥ 65 mmHg.",
            guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020"
          },
          {
            text: "Obtain a 12-lead ECG to evaluate for STEMI and prepare for transport to a cardiac catheterization-capable facility",
            correct: true,
            critical: false,
            explanation: "A 12-lead ECG should be obtained as soon as possible post-ROSC. STEMI is a common cause of cardiac arrest, and emergent PCI significantly improves outcomes.",
            guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020"
          },
          {
            text: "Administer prophylactic amiodarone 300 mg IV push to prevent recurrent VF regardless of current rhythm",
            correct: false,
            critical: false,
            explanation: "Prophylactic antiarrhythmics post-ROSC are not routinely recommended. If amiodarone was given during the arrest, a maintenance infusion may be considered, but routine prophylactic boluses are not indicated.",
            guideline_ref: "AHA ACLS Guidelines 2020"
          },
          {
            text: "Hyperventilate the patient at 20 breaths/min to rapidly correct acidosis from the arrest",
            correct: false,
            critical: true,
            explanation: "Hyperventilation is harmful post-ROSC. It decreases cerebral blood flow through excessive CO2 clearance, increases intrathoracic pressure reducing venous return, and worsens neurological outcomes.",
            guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020"
          }
        ],
        clinical_pearl: "Targeted temperature management (TTM) should be initiated as early as possible for comatose post-cardiac arrest patients. Avoid hyperthermia aggressively. Transport to a facility capable of comprehensive post-cardiac arrest care including PCI and TTM."
      }
    ]
  },

  "nat-acs-01": {
    questions: [
      {
        phase: "treatment",
        prompt: "After placing the patient on the stretcher and applying the cardiac monitor, what is the MOST appropriate initial treatment for this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient rates his pain as 9/10, crushing and substernal, radiating to his left arm and jaw. It began at rest 15 minutes ago. He has not taken any medications for it.",
        vitals_update: {},
        clinical_pearl: "The mnemonic MONA (Morphine, Oxygen, Nitroglycerin, Aspirin) is outdated. Current AHA guidelines emphasize aspirin first, oxygen only if SpO2 <94%, and nitroglycerin for ongoing pain. Morphine is used with caution due to potential hypotension.",
        options: [
          {
            text: "Administer aspirin 162–325 mg (chewed) and assist with or administer nitroglycerin if not contraindicated",
            correct: true,
            critical: false,
            explanation: "Aspirin is the single most important early medication — it reduces mortality by inhibiting platelet aggregation. Chewing ensures rapid absorption. Nitroglycerin is appropriate for ongoing chest pain if blood pressure supports it.",
            guideline_ref: "AHA 2020 ACLS Guidelines; 2021 National EMS Education Standards — Cardiovascular Emergencies"
          },
          {
            text: "Apply high-flow oxygen at 15 LPM via non-rebreather mask and obtain IV access before any medications",
            correct: false,
            critical: false,
            explanation: "Current evidence shows supplemental oxygen provides no benefit and may cause harm in normoxic ACS patients (SpO2 ≥94%). Oxygen is indicated only for hypoxemia, respiratory distress, or heart failure.",
            guideline_ref: "AHA 2020 Guidelines; AVOID Trial (Stub et al., 2015)"
          },
          {
            text: "Administer nitroglycerin 0.4 mg sublingual immediately, then aspirin after pain is controlled",
            correct: false,
            critical: false,
            explanation: "Aspirin should not be delayed for nitroglycerin. Aspirin addresses the underlying pathology (platelet-mediated thrombus), while nitroglycerin only treats the symptom (pain). Aspirin first.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          },
          {
            text: "Establish IV access and administer a 500 mL normal saline bolus to support blood pressure before medications",
            correct: false,
            critical: false,
            explanation: "The patient's blood pressure is adequate (148/92). A fluid bolus is not indicated and could worsen cardiac workload. Fluids in ACS are reserved for hypotension or right ventricular infarction.",
            guideline_ref: "AHA 2020 ACLS ACS Algorithm"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "You acquire a 12-lead ECG. Review the following findings and select the interpretation that BEST matches this clinical scenario:",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "The 12-lead ECG shows: ST-segment elevation >2 mm in leads II, III, and aVF. Reciprocal ST depression in leads I and aVL. Normal sinus rhythm at a rate of 104. No bundle branch block pattern.",
        vitals_update: {
          hr: 104,
          bp: "142/88",
          rr: 22,
          spo2: 95
        },
        clinical_pearl: "Inferior STEMI (leads II, III, aVF) should prompt acquisition of a right-sided 12-lead (V4R) to evaluate for right ventricular involvement. If RV infarction is present, nitroglycerin and morphine are relatively contraindicated due to preload dependence — these patients need volume, not vasodilators.",
        options: [
          {
            text: "Inferior STEMI — ST elevation in II, III, aVF with reciprocal changes in I and aVL, indicating acute right coronary artery occlusion",
            correct: true,
            critical: false,
            explanation: "ST elevation in the inferior leads (II, III, aVF) with reciprocal depression in the lateral leads (I, aVL) is the classic pattern of inferior STEMI, most commonly caused by right coronary artery occlusion.",
            guideline_ref: "AHA 2020 ACLS Guidelines; 12-Lead ECG Interpretation for STEMI Recognition"
          },
          {
            text: "Anterior STEMI — ST elevation in V1-V4 indicating left anterior descending artery occlusion",
            correct: false,
            critical: false,
            explanation: "Anterior STEMI involves the precordial leads V1-V4, not the inferior leads. The described findings are in II, III, and aVF, which are inferior leads.",
            guideline_ref: "AHA 12-Lead ECG Interpretation"
          },
          {
            text: "Left bundle branch block — wide QRS with ST changes that are secondary to conduction abnormality",
            correct: false,
            critical: false,
            explanation: "The scenario specifically states 'no bundle branch block pattern.' LBBB has a wide QRS (>120 ms) with characteristic morphology distinct from STEMI.",
            guideline_ref: "AHA 2020 ACLS Guidelines — Modified Sgarbossa Criteria"
          },
          {
            text: "Pericarditis — diffuse ST elevation across multiple lead groups without reciprocal changes",
            correct: false,
            critical: false,
            explanation: "Pericarditis causes diffuse, concave-up ST elevation without reciprocal changes. This ECG shows focal ST elevation with clear reciprocal depression, consistent with STEMI.",
            guideline_ref: "AHA Differential Diagnosis of ST Elevation"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following ACS management steps in the correct sequence:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have confirmed an inferior STEMI on 12-lead ECG. The patient continues to have 9/10 chest pain. Blood pressure is 142/88.",
        vitals_update: {},
        clinical_pearl: "For STEMI, the goal is first medical contact to percutaneous coronary intervention (PCI) within 90 minutes (or 120 minutes if transfer is needed). Every minute of delay increases myocardial damage. Early cath lab activation notification is critical.",
        options: [
          {
            text: "Administer aspirin 162–325 mg chewed if not already given",
            correct: true,
            critical: false,
            explanation: "Aspirin is the first medication priority in ACS. If not already administered, give it immediately.",
            guideline_ref: "AHA 2020 ACLS ACS Algorithm"
          },
          {
            text: "Acquire right-sided 12-lead ECG (V4R) to evaluate for right ventricular involvement",
            correct: true,
            critical: false,
            explanation: "In inferior STEMI, right ventricular infarction occurs in up to 50% of cases. V4R is the most sensitive single lead for RV infarction and changes treatment (avoid nitroglycerin, give fluids).",
            guideline_ref: "AHA 2020 ACLS Guidelines; STEMI Management"
          },
          {
            text: "Activate cardiac catheterization lab via early hospital notification with 12-lead ECG transmission",
            correct: true,
            critical: false,
            explanation: "Early cath lab activation and ECG transmission reduce door-to-balloon time. This should occur as soon as STEMI is identified.",
            guideline_ref: "AHA 2020 ACLS Guidelines; Mission: Lifeline"
          },
          {
            text: "Administer nitroglycerin 0.4 mg sublingual if no RV infarction and BP supports it",
            correct: true,
            critical: false,
            explanation: "Nitroglycerin is appropriate after ruling out RV involvement (via V4R) and confirming adequate blood pressure. Contraindicated in RV infarction, hypotension, or recent PDE5 inhibitor use.",
            guideline_ref: "AHA 2020 ACLS ACS Algorithm"
          },
          {
            text: "Initiate rapid transport to the closest PCI-capable facility",
            correct: true,
            critical: false,
            explanation: "STEMI patients should be transported to a PCI-capable facility. Primary PCI is the preferred reperfusion strategy when achievable within guideline time windows.",
            guideline_ref: "AHA 2020 ACLS Guidelines; ACC/AHA STEMI Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are contraindications to nitroglycerin administration in this patient? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "Before administering nitroglycerin, you review potential contraindications. The patient's current BP is 142/88. His right-sided ECG (V4R) shows 1 mm ST elevation. He denies taking any erectile dysfunction medications.",
        vitals_update: {},
        clinical_pearl: "Right ventricular infarction patients are preload-dependent. Nitroglycerin causes venodilation that reduces preload, which can cause precipitous and potentially fatal hypotension. If you see inferior STEMI — always check V4R before giving nitro.",
        options: [
          {
            text: "ST elevation in V4R suggesting right ventricular infarction — these patients are preload dependent",
            correct: true,
            critical: false,
            explanation: "RV infarction is a critical contraindication to nitroglycerin. RV infarction patients depend on adequate preload to maintain cardiac output; nitroglycerin's venodilation can cause severe hypotension.",
            guideline_ref: "AHA 2020 ACLS Guidelines; STEMI Management"
          },
          {
            text: "Use of phosphodiesterase-5 inhibitors (sildenafil, tadalafil) within 24–48 hours",
            correct: true,
            critical: false,
            explanation: "PDE5 inhibitors potentiate the hypotensive effect of nitrates and can cause severe, refractory hypotension. Withhold nitroglycerin for 24 hours after sildenafil/vardenafil or 48 hours after tadalafil.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          },
          {
            text: "Systolic blood pressure below 90 mmHg or more than 30 mmHg below the patient's baseline",
            correct: true,
            critical: false,
            explanation: "Hypotension is an absolute contraindication. Nitroglycerin causes vasodilation that can worsen hypotension and reduce coronary perfusion pressure.",
            guideline_ref: "AHA 2020 ACLS ACS Algorithm"
          },
          {
            text: "Heart rate of 104 beats per minute — tachycardia is a contraindication to all nitrate therapy",
            correct: false,
            critical: false,
            explanation: "Tachycardia alone is not a contraindication to nitroglycerin. Mild reflex tachycardia may actually occur after administration. However, tachycardia should prompt investigation of its cause.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          },
          {
            text: "Patient age over 55 years — nitroglycerin has increased risk of adverse effects in older adults",
            correct: false,
            critical: false,
            explanation: "Age alone is not a contraindication to nitroglycerin. Dosing and monitoring are the same across adult age groups, though elderly patients may be more sensitive to hypotension.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's pain persists at 8/10 despite aspirin and nitroglycerin. His V4R is now clear. You establish IV access. Which analgesic approach is MOST appropriate for this patient's ongoing ischemic chest pain?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The patient has received aspirin 324 mg chewed and nitroglycerin 0.4 mg SL x2 with minimal relief. BP is 136/84, HR 100. He continues to report severe crushing substernal chest pain.",
        vitals_update: {
          hr: 100,
          bp: "136/84"
        },
        clinical_pearl: "Fentanyl has largely replaced morphine for prehospital ACS pain management. Morphine causes histamine-mediated vasodilation and hypotension, and some retrospective studies associate it with worse outcomes in ACS. Fentanyl provides effective analgesia with more hemodynamic stability.",
        options: [
          {
            text: "Fentanyl 25-50 mcg IV, titrated in small increments every 5 minutes to pain relief while monitoring hemodynamics",
            correct: true,
            critical: false,
            explanation: "Fentanyl provides potent analgesia with minimal hemodynamic effects compared to morphine. Small, titrated doses allow careful pain management while maintaining blood pressure. Pain itself increases myocardial oxygen demand.",
            guideline_ref: "AHA 2020 ACLS Guidelines; 2021 National EMS Education Standards — Pharmacology"
          },
          {
            text: "Morphine 10 mg IV push as a single bolus dose for rapid pain relief",
            correct: false,
            critical: true,
            explanation: "A 10 mg IV bolus of morphine is an excessive dose that risks severe hypotension, respiratory depression, and hemodynamic collapse. If morphine is used, it should be given in 2-4 mg increments titrated to effect.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          },
          {
            text: "Ketorolac 30 mg IV for anti-inflammatory analgesia",
            correct: false,
            critical: true,
            explanation: "NSAIDs (including ketorolac) are contraindicated in ACS. They increase the risk of cardiovascular events, impair platelet function in a way that interferes with aspirin's benefit, and can promote thrombosis.",
            guideline_ref: "AHA 2020 ACLS Guidelines; ACC/AHA STEMI Guidelines"
          },
          {
            text: "No additional analgesia — pain management should wait until the emergency department",
            correct: false,
            critical: false,
            explanation: "Untreated pain increases sympathetic tone, raising heart rate and blood pressure, which increases myocardial oxygen demand and worsens ischemia. Appropriate analgesia is an important ACS intervention.",
            guideline_ref: "AHA 2020 ACLS Guidelines"
          }
        ]
      }
    ]
  },

  "nat-tpn-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "Which combination of findings is MOST consistent with a developing tension pneumothorax in this patient?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "You remove the towel and identify a 3 cm wound on the right lateral chest at approximately the 5th intercostal space. During auscultation, you note absent breath sounds on the right side. The trachea appears deviated slightly to the left. Jugular veins are distended despite the patient's hypotension.",
        vitals_update: {
          hr: 134,
          bp: "82/56",
          spo2: 78
        },
        clinical_pearl: "Tension pneumothorax is a clinical diagnosis — do not wait for imaging confirmation in the prehospital setting. The classic triad is absent breath sounds on the affected side, jugular venous distension (JVD), and tracheal deviation AWAY from the affected side. However, tracheal deviation is a late and often difficult-to-detect finding. Hypotension with JVD in a trauma patient with unilateral absent breath sounds should be treated as tension pneumothorax.",
        options: [
          {
            text: "Absent right-sided breath sounds, JVD, and tracheal deviation to the left with hypotension",
            correct: true,
            critical: false,
            explanation: "This combination represents the classic presentation of tension pneumothorax: absent breath sounds on the affected side, JVD from impaired venous return, tracheal deviation away from the tension, and hypotension from decreased cardiac output.",
            guideline_ref: "PHTLS 9th Edition; ITLS 9th Edition; 2021 National EMS Education Standards"
          },
          {
            text: "Bilateral crackles, JVD, and peripheral edema with hypertension",
            correct: false,
            critical: false,
            explanation: "This presentation is consistent with acute decompensated heart failure, not tension pneumothorax. The mechanism (stabbing) and unilateral findings make this incorrect.",
            guideline_ref: "PHTLS 9th Edition"
          },
          {
            text: "Absent left-sided breath sounds, flat neck veins, and tracheal deviation to the right",
            correct: false,
            critical: false,
            explanation: "The wound is on the right side. While a contralateral pneumothorax is theoretically possible, the findings should correlate with the injury side. Flat neck veins would suggest hypovolemia rather than tension physiology.",
            guideline_ref: "PHTLS 9th Edition"
          },
          {
            text: "Bilateral absent breath sounds, subcutaneous emphysema, and a normal blood pressure",
            correct: false,
            critical: false,
            explanation: "Bilateral absent breath sounds would suggest bilateral pneumothoraces or main-stem intubation, not a unilateral tension pneumothorax. Normal blood pressure is inconsistent with the hemodynamic compromise of tension.",
            guideline_ref: "PHTLS 9th Edition"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "You are performing your physical examination. For each finding listed, indicate where you would expect to observe it on this patient. Select the correct anatomical location or physical exam technique for each finding.",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        narrative: "You are systematically examining the patient to confirm your suspicion of tension pneumothorax and identify all injuries.",
        vitals_update: {},
        clinical_pearl: "A systematic chest exam in penetrating trauma includes inspection (wounds, symmetry, JVD, tracheal position), palpation (subcutaneous emphysema, chest wall instability), auscultation (bilateral breath sounds), and percussion (hyperresonance vs dullness). Always log-roll the patient to check for exit wounds — the most dangerous wound may be the one you don't see.",
        options: [
          {
            text: "Absent breath sounds → Right lateral and anterior chest (affected side) on auscultation",
            correct: true,
            critical: false,
            explanation: "Breath sounds will be absent on the side of the pneumothorax. Auscultate bilaterally at the anterior chest and mid-axillary lines to compare.",
            guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards"
          },
          {
            text: "Hyperresonance to percussion → Right chest wall (affected side)",
            correct: true,
            critical: false,
            explanation: "Trapped air under tension causes hyperresonance when the affected side is percussed. This helps differentiate pneumothorax (hyperresonant) from hemothorax (dull).",
            guideline_ref: "PHTLS 9th Edition"
          },
          {
            text: "Jugular venous distension → Bilateral neck, visible above the clavicles",
            correct: true,
            critical: false,
            explanation: "JVD occurs because the tension pneumothorax compresses the vena cava and right heart, impeding venous return. It is observed bilaterally in the neck.",
            guideline_ref: "PHTLS 9th Edition"
          },
          {
            text: "Tracheal deviation → Palpated and observed at the sternal notch, deviated to the LEFT (away from injury)",
            correct: true,
            critical: false,
            explanation: "Increasing pressure in the right pleural space pushes the mediastinal structures, including the trachea, toward the left (unaffected) side. Palpate at the sternal notch.",
            guideline_ref: "PHTLS 9th Edition"
          },
          {
            text: "Subcutaneous emphysema → Palpated around the wound site and right chest wall as a crackling sensation",
            correct: true,
            critical: false,
            explanation: "Air leaking from the injured lung can track into subcutaneous tissues, producing crepitus (a rice-crispy sensation) on palpation around the wound and chest wall.",
            guideline_ref: "PHTLS 9th Edition"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps for managing this patient's tension pneumothorax in the correct procedural order.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient is rapidly deteriorating. SpO2 has dropped to 76% and he is becoming less responsive. You must act immediately.",
        vitals_update: {
          hr: 140,
          bp: "74/50",
          spo2: 76,
          gcs: 12
        },
        clinical_pearl: "For an open pneumothorax converting to tension, the immediate action is to seal the wound with a vented chest seal (or burp a non-vented seal). If tension physiology persists or worsens despite a vented seal, needle decompression is indicated at the approved site. The 2nd intercostal space midclavicular line or 4th-5th intercostal space anterior axillary line are accepted landmarks. Always reassess after each intervention.",
        options: [
          {
            text: "Apply a commercial vented chest seal over the open wound",
            correct: true,
            critical: false,
            explanation: "The first priority is to seal the open chest wound. A vented (three-way valve) chest seal allows air to escape during exhalation while preventing air entry during inhalation, addressing the open pneumothorax.",
            guideline_ref: "PHTLS 9th Edition; TCCC Guidelines; 2021 National EMS Education Standards"
          },
          {
            text: "Administer high-flow oxygen via non-rebreather mask at 15 LPM",
            correct: true,
            critical: false,
            explanation: "High-flow oxygen addresses hypoxia and helps with nitrogen washout of the pneumothorax. Apply oxygen while preparing for further interventions.",
            guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards"
          },
          {
            text: "Reassess breath sounds and hemodynamic status after chest seal application",
            correct: true,
            critical: false,
            explanation: "After sealing the wound, reassess to determine if the vented seal has relieved the tension. If hypotension and absent breath sounds persist, needle decompression is indicated.",
            guideline_ref: "PHTLS 9th Edition; TCCC Guidelines"
          },
          {
            text: "Perform needle decompression at the approved site if tension physiology persists",
            correct: true,
            critical: false,
            explanation: "If the vented chest seal does not relieve the tension, decompress with a 14-gauge or larger needle/catheter at the 2nd ICS midclavicular line or 4th-5th ICS anterior axillary line on the affected side.",
            guideline_ref: "PHTLS 9th Edition; TCCC Guidelines; NAEMSP Position Statement"
          },
          {
            text: "Reassess vitals and breath sounds post-decompression, initiate rapid transport",
            correct: true,
            critical: false,
            explanation: "After decompression, reassess for improvement in breath sounds, blood pressure, and oxygenation. Initiate rapid transport to a trauma center — needle decompression is a temporizing measure, not definitive treatment.",
            guideline_ref: "PHTLS 9th Edition; ACS Committee on Trauma"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "After needle decompression, the patient's SpO2 improves to 88% but he remains hypotensive at 76/48 and is becoming increasingly obtunded (GCS 10). You are preparing for transport. Select ALL appropriate advanced interventions for this patient.",
        type: "mr",
        level_filter: "Paramedic",
        selectCount: 3,
        narrative: "The chest seal is in place and needle decompression has been performed. Some improvement in breath sounds noted on the right. The patient is deteriorating neurologically and remains hemodynamically unstable.",
        vitals_update: {
          hr: 138,
          bp: "76/48",
          spo2: 88,
          gcs: 10
        },
        clinical_pearl: "In penetrating chest trauma with hemodynamic instability, consider both pneumothorax AND hemothorax. A patient who improves after decompression but remains hypotensive likely has concurrent hemorrhage. Fluid resuscitation in penetrating trauma targets permissive hypotension (SBP 80-90) to avoid disrupting clot formation — unless there are signs of traumatic brain injury.",
        options: [
          {
            text: "Establish bilateral large-bore IV access and initiate fluid resuscitation with isotonic crystalloid, targeting SBP 80-90 mmHg (permissive hypotension)",
            correct: true,
            critical: false,
            explanation: "Permissive hypotension (SBP 80-90) in penetrating trauma without TBI reduces the risk of dilutional coagulopathy and clot disruption while maintaining minimum organ perfusion. Aggressive fluid resuscitation to normotension can worsen hemorrhage.",
            guideline_ref: "PHTLS 9th Edition; TCCC Guidelines; 2021 National EMS Education Standards"
          },
          {
            text: "Prepare for advanced airway management (supraglottic or endotracheal intubation) given declining mental status and need for ventilatory support",
            correct: true,
            critical: false,
            explanation: "With GCS declining to 10 and ongoing respiratory compromise, advanced airway management is indicated to protect the airway and ensure adequate ventilation/oxygenation. A supraglottic airway is a reasonable first-line device in the prehospital setting.",
            guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards — Airway Management"
          },
          {
            text: "Administer tranexamic acid (TXA) 1 g IV over 10 minutes if within 3 hours of injury",
            correct: true,
            critical: false,
            explanation: "TXA inhibits fibrinolysis and has been shown to reduce mortality in hemorrhaging trauma patients when given within 3 hours of injury (CRASH-2 trial). It should be considered for significantly hemorrhaging trauma patients.",
            guideline_ref: "CRASH-2 Trial; TCCC Guidelines; NAEMSP Position Statement on TXA"
          },
          {
            text: "Administer fentanyl 200 mcg IV push for pain management to reduce sympathetic drive",
            correct: false,
            critical: true,
            explanation: "A 200 mcg IV bolus of fentanyl in a hypotensive, obtunded trauma patient risks fatal respiratory depression and cardiovascular collapse. Pain management should be carefully titrated in small doses if needed, with close monitoring.",
            guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards — Pharmacology"
          },
          {
            text: "Administer 2 liters of normal saline wide open to normalize blood pressure to 120/80 before transport",
            correct: false,
            critical: false,
            explanation: "Aggressive crystalloid resuscitation to normotension in penetrating trauma (without TBI) worsens outcomes by promoting hemodilution, hypothermia, and disruption of nascent clots. Target permissive hypotension instead.",
            guideline_ref: "PHTLS 9th Edition; TCCC Guidelines"
          }
        ]
      }
    ]
  },

  "nat-tra-03": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient has soot around her nose and mouth, singed nasal hairs, and a hoarse voice since the fire. Her SpO2 reads 96%. What is your GREATEST concern and most important intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You apply high-flow oxygen and continue your assessment. The patient coughs occasionally and her voice remains hoarse.",
        vitals_update: {
          spo2: 98
        },
        clinical_pearl: "Pulse oximetry cannot differentiate carboxyhemoglobin from oxyhemoglobin, so SpO2 readings may be falsely reassuring in fire/smoke exposure. Singed nasal hairs, soot in the airway, hoarseness, and stridor are warning signs of impending airway compromise from thermal/inhalation injury. Early high-flow O2 and transport are critical — the airway can swell shut rapidly.",
        options: [
          {
            text: "Potential inhalation injury with impending airway compromise — apply high-flow oxygen via NRB and prepare for rapid transport",
            correct: true,
            explanation: "Hoarseness, soot in the airway, and singed nasal hairs are classic signs of inhalation injury. The airway can swell rapidly. High-flow O2 (100%) helps displace CO and supports oxygenation.",
            guideline_ref: "ABA Burn Referral Criteria; PHTLS 10th Ed — Burns"
          },
          {
            text: "The SpO2 of 96% is reassuring — focus on burn wound care first",
            correct: false,
            critical: true,
            explanation: "SpO2 is unreliable in smoke inhalation due to carboxyhemoglobin. Ignoring airway warning signs in a burn patient is a dangerous error.",
            guideline_ref: "PHTLS 10th Ed — Burns; ABA Guidelines"
          },
          {
            text: "Asthma exacerbation from smoke — administer albuterol nebulizer",
            correct: false,
            explanation: "While bronchospasm may occur, the primary concern is thermal/chemical airway injury, not asthma. Albuterol may help wheezing but does not address the core threat of airway edema.",
            guideline_ref: "PHTLS 10th Ed — Burns"
          },
          {
            text: "Apply cool water to the burns immediately to stop the burning process",
            correct: false,
            explanation: "While cooling small burns is appropriate, the airway takes priority. Additionally, extensive cooling risks hypothermia in larger burns.",
            guideline_ref: "PHTLS 10th Ed — Burns"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Using the Rule of Nines, estimate the total body surface area (BSA) burned. Match each body region to its percentage in an adult.",
        type: "table",
        level_filter: "EMR-EMT-AEMT",
        clinical_pearl: "The Rule of Nines is a rapid estimation tool for adults. Remember: each arm is 9%, the anterior trunk is 18%, the posterior trunk is 18%, each leg is 18%, the head is 9%, and the perineum is 1%. In this patient, both entire arms (9% + 9% = 18%) and the anterior chest (9% — half the anterior trunk) totals approximately 27% TBSA.",
        explanation: "The Rule of Nines allows rapid BSA estimation to guide fluid resuscitation decisions and burn center referral criteria. Burns >20% TBSA in adults require aggressive fluid resuscitation and burn center transfer.",
        guideline_ref: "ABA Burn Referral Criteria; PHTLS 10th Ed — Burns; Parkland Formula Reference",
        columns: [
          "Body Region",
          "Adult Rule of Nines %"
        ],
        rows: [
          { values: ["Head and neck", "9%"] },
          { values: ["Each upper extremity (entire arm)", "9%"] },
          { values: ["Anterior trunk", "18%"] },
          { values: ["Posterior trunk", "18%"] },
          { values: ["Each lower extremity (entire leg)", "18%"] },
          { values: ["Perineum", "1%"] }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following burn management steps in the correct order from first to last.",
        type: "order",
        level_filter: "EMR-EMT-AEMT",
        narrative: "You complete your burn care, wrap the patient, and begin transport to the regional burn center. She remains alert but anxious.",
        vitals_update: {
          hr: 100,
          bp: "128/80",
          rr: 20,
          spo2: 99
        },
        explanation: "Burn management follows PHTLS priorities: stop the burning process, address airway and breathing first, then manage wounds. Prevention of hypothermia is critical in burn patients — they lose thermoregulation through damaged skin. Remove jewelry early before edema makes it impossible.",
        guideline_ref: "PHTLS 10th Ed — Burns; ABA Prehospital Burn Care Guidelines",
        clinical_pearl: "Burn management follows PHTLS priorities: stop the burning process, address airway and breathing first, then manage wounds. Prevention of hypothermia is critical — burned skin loses thermoregulation.",
        items: [
          "Ensure scene safety and stop the burning process (remove clothing/jewelry from burned areas)",
          "Assess airway for signs of inhalation injury and apply high-flow oxygen",
          "Perform primary assessment (XABCDE)",
          "Cover burns with dry sterile dressings — avoid wet dressings on large burns",
          "Keep the patient warm to prevent hypothermia",
          "Initiate rapid transport to a burn center"
        ]
      },
      {
        phase: "treatment",
        prompt: "You estimate approximately 27% TBSA burns with signs of inhalation injury. The patient weighs approximately 70 kg. You establish IV access en route. Calculate the appropriate fluid resuscitation and select ALL correct statements about managing this patient.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        narrative: "During transport, the patient becomes increasingly hoarse. Her voice is now barely a whisper. HR has increased to 112 and she is becoming more anxious. You have bilateral large-bore IVs established.",
        vitals_update: {
          hr: 112,
          bp: "118/74",
          rr: 24,
          spo2: 97
        },
        clinical_pearl: "The Parkland formula (4 mL × kg × %TBSA) estimates total fluid needs for the first 24 hours. Half is given in the first 8 hours from time of burn (not time of IV start). For this patient: 4 × 70 × 27 = 7,560 mL total; ~3,780 mL in the first 8 hours (~473 mL/hr). In the prehospital setting, initiate at a reasonable rate and let the burn center titrate.",
        options: [
          {
            text: "Using the Parkland formula (4 mL × kg × %TBSA), this patient needs approximately 7,560 mL in the first 24 hours, with half given in the first 8 hours from time of burn",
            correct: true,
            critical: false,
            explanation: "4 × 70 kg × 27% = 7,560 mL. Half (3,780 mL) is given in the first 8 hours from the time of the burn injury. This is a starting point — actual rates are titrated to urine output (0.5-1 mL/kg/hr in adults).",
            guideline_ref: "ABA Fluid Resuscitation Guidelines; PHTLS 10th Ed — Burns"
          },
          {
            text: "The worsening hoarseness indicates progressive airway edema — prepare for advanced airway management before the airway becomes unmanageable",
            correct: true,
            critical: false,
            explanation: "Progressive hoarseness in a burn patient with inhalation injury is an ominous sign of worsening airway edema. Early intubation should be considered before the airway swells shut and becomes impossible to manage. This is a 'secure it now or lose it' situation.",
            guideline_ref: "ABA Guidelines; PHTLS 10th Ed — Burns and Inhalation Injury"
          },
          {
            text: "Administer analgesics for pain management — fentanyl 1 mcg/kg IV titrated to effect is appropriate for burn pain",
            correct: true,
            critical: false,
            explanation: "Burns are extremely painful and inadequate analgesia increases stress response, heart rate, and oxygen consumption. Fentanyl is preferred over morphine due to less histamine release and greater hemodynamic stability. Titrate carefully while monitoring respiratory status.",
            guideline_ref: "ABA Prehospital Burn Guidelines; 2021 National EMS Education Standards — Pharmacology"
          },
          {
            text: "Administer lactated Ringer's at wide-open rate to keep up with massive fluid losses — do not worry about over-resuscitation in burns",
            correct: false,
            critical: false,
            explanation: "Over-resuscitation ('fluid creep') in burns worsens edema including airway edema, causes compartment syndrome, and pulmonary edema. Fluid resuscitation should be calculated and titrated to clinical endpoints, not given indiscriminately.",
            guideline_ref: "ABA Fluid Resuscitation Guidelines"
          },
          {
            text: "Apply ice packs to the burned areas to provide analgesia and reduce tissue damage",
            correct: false,
            critical: true,
            explanation: "Ice is contraindicated on burns. It causes vasoconstriction that worsens tissue injury, and on large burns it can cause dangerous hypothermia. Cool running water (not ice) may be applied briefly to small burns only.",
            guideline_ref: "ABA Prehospital Burn Guidelines; PHTLS 10th Ed — Burns"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "During transport, the patient develops audible stridor and can no longer speak. SpO2 drops to 91%. You decide to perform endotracheal intubation. Categorize each of the following as either a factor that makes this intubation HIGH RISK or a factor that is REASSURING.",
        type: "categorize",
        level_filter: "Paramedic",
        narrative: "You are preparing your intubation equipment. Your partner is maintaining high-flow oxygen via BVM. The patient is still conscious but in severe distress.",
        vitals_update: {
          hr: 124,
          bp: "108/68",
          rr: 28,
          spo2: 91
        },
        clinical_pearl: "Burn/inhalation airway intubation is one of the most high-risk intubations in prehospital medicine. Airway edema distorts anatomy, makes visualization difficult, and may require a smaller ETT than expected. Have backup airways (bougie, surgical airway kit) immediately available. If you can't intubate, a surgical cricothyrotomy may be your only option — but edematous tissue makes even that more difficult.",
        items: [
          "Progressive airway edema distorting normal anatomy",
          "Patient is still conscious and able to follow commands",
          "Soot and secretions obscuring visualization",
          "SpO2 91% — limited apnea tolerance",
          "Patient has no history of difficult airway or cervical spine issues",
          "Potential for rapid complete airway obstruction if attempt fails"
        ],
        categories: [
          "High Risk Factor",
          "Reassuring Factor"
        ],
        correctCategories: [0, 1, 0, 0, 1, 0],
        explanation: "High-risk factors: airway edema (distorted anatomy, smaller tube needed), soot/secretions (poor visualization), low SpO2 (minimal safe apnea time), and risk of complete obstruction (can't-intubate-can't-oxygenate scenario). Reassuring factors: patient follows commands (can attempt cooperative RSI or awake intubation) and no prior difficult airway history.",
        guideline_ref: "2021 National EMS Education Standards — Advanced Airway Management; Difficult Airway Society Guidelines"
      }
    ]
  },

  "nat-peds-02": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Based on the Pediatric Assessment Triangle, which component is MOST concerning in this infant?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT",
        narrative: "Using the Pediatric Assessment Triangle: Appearance — the infant is limp, has a weak cry, and does not track visually. Work of Breathing — respirations are rapid but without retractions, flaring, or abnormal sounds. Circulation to Skin — the infant is pale with mottled extremities and delayed capillary refill of approximately 4 seconds.",
        clinical_pearl: "The Pediatric Assessment Triangle (PAT) is a rapid 'across the room' assessment. In dehydration and hypovolemic shock, Appearance and Circulation are typically abnormal while Work of Breathing may initially appear normal. An abnormal appearance in an infant is always a red flag.",
        options: [
          {
            text: "Appearance — limp, weak cry, poor visual tracking",
            correct: true,
            explanation: "Abnormal appearance (altered mental status) in an infant is the most sensitive indicator of serious illness. Combined with circulatory compromise, this suggests compensated to decompensated shock.",
            guideline_ref: "NAEMSP Pediatric Assessment; Pediatric Education for Prehospital Professionals (PEPP)"
          },
          {
            text: "Work of Breathing — rapid respirations at 44/min",
            correct: false,
            explanation: "While tachypnea is present, there are no signs of increased work of breathing (no retractions, flaring, or abnormal sounds). The tachypnea is likely compensatory for metabolic acidosis, not a primary respiratory problem.",
            guideline_ref: "PEPP Pediatric Assessment Triangle"
          },
          {
            text: "Circulation to Skin — the infant appears well-perfused",
            correct: false,
            explanation: "This is incorrect — the infant has pale, mottled skin with delayed capillary refill, indicating poor peripheral perfusion. Circulation is clearly abnormal.",
            guideline_ref: "PEPP Pediatric Assessment Triangle"
          },
          {
            text: "None — the vital signs are within normal limits for this age",
            correct: false,
            explanation: "A heart rate of 188 and BP of 72/palp in a 9-month-old, combined with lethargy and mottling, are clearly abnormal. Normal HR for this age is 100-160, and hypotension in infants is a late and ominous sign.",
            guideline_ref: "NAEMSP Pediatric Vital Sign Reference; PEPP"
          }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize the following clinical findings by severity of dehydration.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT",
        narrative: "You are assessing the infant more thoroughly while your partner prepares for transport. The mother provides additional details about the baby's condition over the past 48 hours.",
        explanation: "Classifying dehydration severity guides the urgency of intervention. Mild dehydration shows subtle signs; moderate shows clear clinical findings; severe dehydration presents with signs of shock and requires immediate fluid resuscitation and emergent transport.",
        guideline_ref: "WHO Dehydration Classification; NAEMSP Pediatric Emergencies; PEPP Shock Assessment",
        clinical_pearl: "In pediatrics, clinical signs are your primary guide — lab values are rarely available prehospitally. A sunken fontanelle is a moderate dehydration sign unique to infants. Absence of tears and dry mucous membranes progress from moderate to severe. Mottling with prolonged cap refill signals cardiovascular compromise.",
        categories: [
          "Mild Dehydration",
          "Moderate Dehydration",
          "Severe Dehydration"
        ],
        items: [
          { text: "Slightly decreased urine output", category: "Mild Dehydration" },
          { text: "Sunken fontanelle", category: "Moderate Dehydration" },
          { text: "No tears when crying", category: "Moderate Dehydration" },
          { text: "Mottled skin with capillary refill >4 seconds", category: "Severe Dehydration" },
          { text: "Slightly dry mucous membranes", category: "Mild Dehydration" },
          { text: "No urine output for 8+ hours", category: "Severe Dehydration" },
          { text: "Lethargic and limp — difficult to arouse", category: "Severe Dehydration" },
          { text: "Increased thirst, mildly fussy", category: "Mild Dehydration" },
          { text: "Tachycardia with weak peripheral pulses", category: "Moderate Dehydration" },
          { text: "Hypotension with altered mental status", category: "Severe Dehydration" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Match each assessment finding to the appropriate intervention.",
        type: "table",
        level_filter: "EMR-EMT",
        narrative: "You have determined this infant is severely dehydrated and in shock. You are preparing interventions during transport.",
        clinical_pearl: "At the EMT level, keeping the infant warm, providing blow-by oxygen, continuous monitoring, and rapid transport to an appropriate facility are the key interventions. Avoid agitating the infant unnecessarily — a crying infant increases oxygen demand.",
        explanation: "Each clinical finding drives a specific intervention. Matching findings to treatments reinforces the assessment-driven approach to pediatric shock management.",
        guideline_ref: "NAEMSP Pediatric Shock Management; PEPP; AHA PALS Guidelines",
        columns: [
          "Assessment Finding",
          "Appropriate Intervention"
        ],
        rows: [
          ["Tachycardia (HR 188) with weak pulses and mottling", "Keep warm and transport emergently; notify receiving facility early"],
          ["Lethargy and poor responsiveness (GCS 12)", "Continuous monitoring of mental status; reassess after each intervention"],
          ["Temperature 100.4°F with ongoing fluid losses", "Prevent further heat loss — remove wet clothing, wrap in warm blankets"],
          ["SpO2 97% with tachypnea (RR 44)", "Provide blow-by oxygen or non-rebreather mask; avoid agitating the infant"],
          ["No urine output for 8 hours", "Document and report to receiving facility as indicator of perfusion status"]
        ]
      },
      {
        phase: "treatment",
        prompt: "You determine this infant is in decompensated hypovolemic shock requiring immediate vascular access and fluid resuscitation. Your first IV attempt fails due to peripheral vasoconstriction. What is your next step, and what is the correct fluid resuscitation approach?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "You have attempted IV access in the right antecubital fossa and right hand without success. The infant's extremities are cool and mottled with poor vein visualization. Time on scene is now 6 minutes.",
        vitals_update: {
          hr: 194,
          bp: "68/palp",
          spo2: 96
        },
        clinical_pearl: "In pediatric shock, do not delay fluid resuscitation for repeated IV attempts. After two failed peripheral IV attempts (or 90 seconds), proceed to IO access. The proximal tibia is the preferred IO site in infants — it provides rapid, reliable vascular access with flow rates adequate for resuscitation. Use a weight-based fluid bolus of 20 mL/kg.",
        options: [
          {
            text: "Establish IO access (proximal tibia) and administer 20 mL/kg isotonic crystalloid bolus (~180 mL for a 9 kg infant); reassess and repeat up to 60 mL/kg total",
            correct: true,
            critical: false,
            explanation: "IO access is indicated after failed peripheral IV in a critically ill infant. The proximal tibia (1-2 cm below the tibial tuberosity on the flat medial surface) is the preferred site. 20 mL/kg NS boluses are given and reassessed — up to 60 mL/kg total before considering vasopressors.",
            guideline_ref: "AHA PALS Guidelines 2020; 2021 National EMS Education Standards — Vascular Access"
          },
          {
            text: "Attempt a scalp vein IV — scalp veins are often accessible in infants when peripheral veins are not",
            correct: false,
            critical: false,
            explanation: "While scalp veins can be used for IV access in infants, they are technically difficult, time-consuming, and provide slow flow rates inadequate for resuscitation. IO is faster and more reliable in an emergency.",
            guideline_ref: "AHA PALS Guidelines 2020"
          },
          {
            text: "Administer a 10 mL/kg bolus of D5W (5% dextrose in water) via IO to address both dehydration and possible hypoglycemia",
            correct: false,
            critical: true,
            explanation: "Hypotonic solutions like D5W are never used for volume resuscitation — they distribute into intracellular space and do not expand intravascular volume. This can cause dangerous hyponatremia and cerebral edema. Use isotonic crystalloid (NS or LR).",
            guideline_ref: "AHA PALS Guidelines 2020; 2021 National EMS Education Standards"
          },
          {
            text: "Transport immediately without vascular access — fluid resuscitation should be deferred to the emergency department",
            correct: false,
            critical: false,
            explanation: "While rapid transport is important, this infant is in decompensated shock with hypotension. Delaying fluid resuscitation in frank shock worsens organ perfusion and increases mortality. IO access can be obtained rapidly en route if needed.",
            guideline_ref: "AHA PALS Guidelines 2020; NAEMSP Pediatric Emergencies"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "After establishing IO access and administering 20 mL/kg NS, the infant's heart rate decreases to 170 but blood pressure remains 70/palp. You administer a second 20 mL/kg bolus. During transport, you obtain a point-of-care glucose reading of 42 mg/dL. What is the appropriate intervention?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The infant has received 360 mL (40 mL/kg) of normal saline. There is modest improvement in heart rate but perfusion remains poor. The glucose check reveals significant hypoglycemia.",
        vitals_update: {
          hr: 170,
          bp: "74/palp",
          spo2: 97,
          gcs: 11
        },
        clinical_pearl: "Infants have limited glycogen stores and are highly susceptible to hypoglycemia during illness. Always check glucose in a sick infant. D10W (0.5-1 g/kg = 5-10 mL/kg of D10W) is the preferred concentration in pediatrics — D50W is too hypertonic and causes vascular injury, tissue necrosis if extravasated, and dangerous osmotic shifts in small patients.",
        options: [
          {
            text: "Administer D10W at 5 mL/kg (45 mL) IV/IO; recheck glucose in 5-10 minutes and repeat if still <60 mg/dL",
            correct: true,
            critical: false,
            explanation: "D10W at 5 mL/kg provides 0.5 g/kg of dextrose, which is the standard pediatric dose for hypoglycemia. D10W is the appropriate concentration for infants and children — it is less hypertonic than D25 or D50 and safer for small vessels and tissues.",
            guideline_ref: "AHA PALS Guidelines 2020; 2021 National EMS Education Standards — Pediatric Pharmacology"
          },
          {
            text: "Administer D50W at 1 mL/kg (9 mL) IV/IO push for rapid glucose correction",
            correct: false,
            critical: true,
            explanation: "D50W is contraindicated in infants and young children. It is extremely hypertonic (osmolality ~2,525 mOsm/L) and causes severe vascular injury, tissue necrosis with extravasation, and dangerous hyperosmolar shifts. Use D10W in pediatric patients.",
            guideline_ref: "AHA PALS Guidelines 2020; 2021 National EMS Education Standards"
          },
          {
            text: "Withhold dextrose — the glucose of 42 is borderline and will correct with continued fluid resuscitation alone",
            correct: false,
            critical: false,
            explanation: "A glucose of 42 mg/dL in a critically ill infant is not borderline — it requires treatment. Hypoglycemia in the setting of shock worsens neurological outcomes and impairs the stress response. Treat immediately.",
            guideline_ref: "AHA PALS Guidelines 2020"
          },
          {
            text: "Administer oral glucose gel applied to the buccal mucosa",
            correct: false,
            critical: false,
            explanation: "Oral glucose requires an intact swallowing reflex and adequate GI absorption. This obtunded infant with GCS 11 is at risk for aspiration, and oral absorption is unreliable in shock due to poor GI perfusion. Use IV/IO dextrose.",
            guideline_ref: "AHA PALS Guidelines 2020; 2021 National EMS Education Standards"
          }
        ]
      }
    ]
  },

  "nat-ops-04": {
    questions: [
      {
        phase: "clinical-reasoning",
        prompt: "The patient insists he is fine and wants to refuse transport. What is the MOST appropriate initial approach?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient says, 'I feel much better now. It was probably just heartburn. I don't need to go to the hospital.' His wife says, 'Please, tell him he needs to go!' The patient is alert, oriented to person, place, time, and event, and appears to understand the conversation.",
        clinical_pearl: "A patient's right to refuse care is legally protected, but it must be an INFORMED refusal. Your job is not to force transport — it is to ensure the patient fully understands the risks of refusing so they can make a truly informed decision.",
        options: [
          {
            text: "Thoroughly explain the risks of refusing, including the possibility of a life-threatening condition, and ensure the patient demonstrates understanding",
            correct: true,
            explanation: "Informed refusal requires that the patient understand their condition, the recommended treatment, the risks of refusing (including death), and alternatives. The provider must ensure the patient has decision-making capacity and document the entire interaction.",
            guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport; ACEP — Informed Consent in EMS"
          },
          {
            text: "Accept the refusal immediately — the patient has the right to refuse and you should respect that without further discussion",
            correct: false,
            explanation: "While patients have the right to refuse, EMS has an obligation to ensure it is an informed refusal. Simply accepting without thorough risk explanation and capacity assessment is negligent.",
            guideline_ref: "NAEMSP — Patient Refusal of Transport"
          },
          {
            text: "Tell the patient you will restrain and transport him against his will because his condition is dangerous",
            correct: false,
            critical: true,
            explanation: "Transporting a competent adult against their will constitutes assault and battery and false imprisonment. A patient with decision-making capacity has the legal right to refuse, even if the decision is medically unwise.",
            guideline_ref: "NAEMSP — Patient Refusal; Legal Principles of EMS"
          },
          {
            text: "Leave without documenting the interaction since the patient refused",
            correct: false,
            critical: true,
            explanation: "Failure to document a refusal is a major medical-legal liability. Thorough documentation of the assessment, risks explained, patient understanding, and refusal is essential to protect both the patient and the provider.",
            guideline_ref: "NAEMSP — Patient Refusal Documentation; EMS Medical-Legal Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of the refusal of care process in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient continues to refuse transport. You need to follow proper refusal procedures to protect the patient and yourself.",
        clinical_pearl: "Consider contacting medical control (online medical direction) for high-risk refusals. Having a physician speak directly with the patient can sometimes change their mind and also provides additional documentation and medical oversight for the refusal.",
        items: [
          { text: "Perform a thorough patient assessment including vitals and history" },
          { text: "Assess decision-making capacity: alert, oriented, understands situation and consequences" },
          { text: "Clearly explain your assessment findings and why transport is recommended" },
          { text: "Explain specific risks of refusing, including the possibility of worsening condition or death" },
          { text: "Contact medical control (online medical direction) for physician input on this high-risk refusal" },
          { text: "If patient still refuses: have patient sign the refusal form after confirming understanding" },
          { text: "Provide instructions for calling 911 again if symptoms return or worsen" },
          { text: "Document the entire encounter thoroughly: assessment, risks explained, patient responses, and signatures" }
        ],
        explanation: "A proper refusal of care follows a systematic approach: assess the patient, confirm capacity, inform them of risks (especially death or serious harm), involve medical control for high-risk situations, obtain a signed refusal, provide return instructions, and document everything meticulously.",
        guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport; ACEP Informed Consent in EMS"
      },
      {
        phase: "clinical-reasoning",
        prompt: "Which of the following should be included in your documentation of this refusal? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient has signed the refusal form. You are completing your patient care report and want to ensure thorough documentation.",
        clinical_pearl: "Document as if a jury will read it — because they might. Refusal calls are among the highest-liability EMS encounters. Thorough documentation is your best legal protection.",
        options: [
          {
            text: "Complete patient assessment findings and vital signs",
            correct: true,
            explanation: "Full assessment and vitals demonstrate you performed a thorough evaluation before accepting the refusal.",
            guideline_ref: "NAEMSP — Patient Refusal Documentation"
          },
          {
            text: "Specific risks explained to the patient, including the possibility of death",
            correct: true,
            explanation: "Documenting the specific risks communicated proves the refusal was informed. Always document that you discussed the risk of death or serious disability.",
            guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport"
          },
          {
            text: "Patient's mental status and evidence of decision-making capacity",
            correct: true,
            explanation: "Documenting that the patient was alert, oriented, and demonstrated understanding of the risks confirms they had the capacity to make an informed decision.",
            guideline_ref: "NAEMSP — Patient Refusal; ACEP Informed Consent"
          },
          {
            text: "That medical control was contacted and their recommendations",
            correct: true,
            explanation: "If medical control was contacted, document the physician's name, their recommendations, and whether the physician spoke to the patient directly.",
            guideline_ref: "NAEMSP — Patient Refusal Documentation"
          },
          {
            text: "Instructions given for follow-up care and when to call 911 again",
            correct: true,
            explanation: "Documenting discharge instructions shows you took steps to ensure patient safety even after refusal.",
            guideline_ref: "NAEMSP — Patient Refusal Documentation"
          },
          {
            text: "Signatures of the patient and a witness",
            correct: true,
            explanation: "A signed refusal with a witness signature provides legal evidence that the patient was informed and voluntarily refused. If a witness is available (such as the patient's wife), obtain their signature.",
            guideline_ref: "NAEMSP — Patient Refusal Documentation"
          },
          {
            text: "Your personal opinion that the patient is making a bad decision",
            correct: false,
            explanation: "Personal opinions do not belong in medical documentation. Document objective findings, what was communicated, and patient responses — not subjective judgments about the patient's choices.",
            guideline_ref: "EMS Documentation Best Practices"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Before accepting this high-risk refusal, you want to gather additional clinical information. Given this patient's history and presentation, which assessment would be MOST valuable in informing your risk discussion with the patient?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "You have a cardiac monitor and 12-lead capability. The patient is cooperative with assessment but insistent about not going to the hospital. His chest tightness has resolved. Vitals: HR 88, BP 148/92, SpO2 96%, RR 18.",
        vitals_update: {},
        clinical_pearl: "A 12-lead ECG can be a powerful tool in refusal situations. If the ECG shows ischemic changes, sharing those findings with the patient — 'Sir, your heart tracing shows signs that your heart may not be getting enough blood' — is far more persuasive than abstract risk discussions. Even a normal ECG does not rule out ACS, but an abnormal one can change a patient's mind and provides crucial documentation.",
        options: [
          {
            text: "Obtain a 12-lead ECG — this patient's cardiac history and transient chest tightness warrant evaluation for ischemic changes, which would strengthen your risk counseling",
            correct: true,
            critical: false,
            explanation: "A 12-lead ECG is a high-yield, low-risk assessment that can reveal ST changes, arrhythmias, or other findings that change both your clinical concern and the patient's understanding of risk. Prior MI patients have high risk for recurrent events.",
            guideline_ref: "AHA 2020 ACLS ACS Algorithm; NAEMSP — Patient Refusal of Transport"
          },
          {
            text: "Check a fingerstick blood glucose — hypoglycemia may be causing his chest discomfort",
            correct: false,
            critical: false,
            explanation: "While glucose checks are reasonable in most patients, this patient is on metformin and his symptoms (chest tightness with cardiac history) are far more concerning for an ischemic event. A 12-lead provides more clinically relevant information.",
            guideline_ref: "2021 National EMS Education Standards"
          },
          {
            text: "Perform a stroke assessment (Cincinnati or LAMS) to rule out neurological emergency",
            correct: false,
            critical: false,
            explanation: "This patient has no neurological symptoms. His presentation — chest tightness in a patient with prior MI — is a classic cardiac complaint. A stroke screen is not indicated.",
            guideline_ref: "2021 National EMS Education Standards"
          },
          {
            text: "No additional assessment is needed — the patient refused, and further testing could be considered assault",
            correct: false,
            critical: false,
            explanation: "A cooperative patient who allows assessment but refuses transport is not refusing all care. Performing additional non-invasive assessments like a 12-lead ECG is appropriate and recommended for high-risk refusals. Assessment is not assault when the patient consents to it.",
            guideline_ref: "NAEMSP — Patient Refusal of Transport; Legal Principles of EMS"
          }
        ]
      }
    ]
  }

};
