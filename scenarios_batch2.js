const BATCH2 = [
  // ─── 1. Acute Stroke ───
  {
    id: "nat-str-01",
    title: "Acute Ischemic Stroke — Left MCA Territory",
    dispatch: "72-year-old female, sudden weakness, difficulty speaking",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 72, sex: "F", cc: "Sudden right-sided weakness and slurred speech" },
    scene: "You arrive at a single-story home. The patient's husband meets you at the door and states his wife was eating breakfast when she suddenly dropped her fork and started speaking 'gibberish.' He says it began approximately 25 minutes ago. The patient is seated at the kitchen table, awake but with obvious facial asymmetry.",
    history: { pmh: "Atrial fibrillation, hypertension, type 2 diabetes", meds: "Apixaban, metoprolol, metformin", allergies: "Sulfa drugs" },
    vitals: { hr: 88, bp: "178/96", rr: 16, spo2: 97, gcs: 13, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "You perform a rapid neurological assessment. Using the Cincinnati Prehospital Stroke Scale (CPSS), which combination of findings is MOST consistent with an acute stroke?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient attempts to follow your commands. When she smiles, the right side of her face droops noticeably. When she raises both arms and closes her eyes, the right arm drifts downward within 5 seconds. Her speech is slurred and she substitutes incorrect words.",
        vitals_update: {},
        clinical_pearl: "The CPSS evaluates three components: facial droop, arm drift, and speech. Abnormality in ANY one component has a sensitivity of approximately 66% for stroke. Document the exact time of symptom onset — this drives treatment decisions at the hospital.",
        options: [
          { text: "Facial droop on the right, right arm drift, and abnormal speech — all three CPSS components are positive", correct: true, critical: false, explanation: "All three CPSS components are abnormal: unilateral facial droop, unilateral arm drift, and slurred/inappropriate speech. This is highly suggestive of acute stroke.", guideline_ref: "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke; 2021 National EMS Education Standards — Neurological Emergencies" },
          { text: "Bilateral arm weakness, normal speech, and facial droop — two of three CPSS components are positive", correct: false, critical: false, explanation: "Bilateral arm weakness is not typical of a unilateral stroke affecting one hemisphere. CPSS specifically assesses for unilateral findings.", guideline_ref: "AHA/ASA Prehospital Stroke Assessment" },
          { text: "Right arm drift and slurred speech only — facial symmetry is normal so only two components count", correct: false, critical: false, explanation: "The scenario clearly describes right-sided facial droop. All three components are positive, not just two.", guideline_ref: "Cincinnati Prehospital Stroke Scale" },
          { text: "Altered mental status and headache with normal motor findings — suggests metabolic cause rather than stroke", correct: false, critical: false, explanation: "The patient has clear motor deficits (facial droop, arm drift). While altered mental status can occur in stroke, the focal neurological findings here point strongly to stroke.", guideline_ref: "AHA/ASA Prehospital Stroke Assessment" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Place the following steps of your stroke assessment and early management in the correct order:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Your CPSS is positive for all three components. You need to move efficiently — time is critical.",
        vitals_update: {},
        clinical_pearl: "Remember: 'Time is brain.' Each minute of large vessel occlusion results in the loss of approximately 1.9 million neurons. Establishing last known well time is as important as any intervention you perform.",
        options: [
          { text: "Establish last known well time and note current time", correct: true, critical: false, explanation: "First priority — last known well time determines eligibility for thrombolytics (up to 4.5 hours) and thrombectomy (up to 24 hours in select patients). Document it immediately.", guideline_ref: "AHA/ASA 2019 Acute Ischemic Stroke Guidelines" },
          { text: "Perform Cincinnati Prehospital Stroke Scale assessment", correct: true, critical: false, explanation: "Rapid validated stroke screen confirms suspicion and communicates findings efficiently to the receiving facility.", guideline_ref: "AHA/ASA Prehospital Stroke Care" },
          { text: "Check blood glucose level", correct: true, critical: false, explanation: "Hypoglycemia is the most common stroke mimic and is rapidly reversible. Checking glucose is essential to rule out this treatable cause.", guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards" },
          { text: "Provide early notification to a designated stroke center", correct: true, critical: false, explanation: "Early hospital notification activates the stroke team and reduces door-to-needle time. This should occur as soon as stroke is suspected, not upon arrival.", guideline_ref: "AHA/ASA Mission: Lifeline Stroke Severity-Based Routing" },
          { text: "Initiate rapid transport to the closest appropriate stroke center", correct: true, critical: false, explanation: "Transport to the closest appropriate stroke-capable facility — not necessarily the closest hospital. Do not delay transport for non-essential interventions.", guideline_ref: "AHA/ASA 2019 Guidelines; NAEMSP Position Statement on Stroke Routing" }
        ]
      },
      {
        phase: "transport",
        prompt: "Which of the following transport decisions are consistent with current evidence-based stroke guidelines? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Your glucose is 142 mg/dL. CPSS is positive for all three components. Last known well time was 25 minutes ago. The closest hospital is 8 minutes away but is not a stroke center. A certified Primary Stroke Center is 18 minutes away. A Comprehensive Stroke Center is 30 minutes away.",
        vitals_update: { hr: 90, bp: "182/98", rr: 16, spo2: 96, gcs: 13 },
        clinical_pearl: "Bypass protocols for stroke routing are increasingly evidence-based. The AHA recommends transport to the highest level of stroke care available within a reasonable time frame, considering patient severity and transport time differences.",
        options: [
          { text: "Transport to the Primary Stroke Center 18 minutes away, as it is the closest stroke-capable facility", correct: true, critical: false, explanation: "The Primary Stroke Center can provide IV thrombolytics. Bypassing the non-stroke-capable hospital is appropriate when a stroke center is within a reasonable additional transport time.", guideline_ref: "AHA/ASA Mission: Lifeline Stroke Routing; NAEMSP Position Statement" },
          { text: "Provide early notification to the receiving stroke center including last known well time and CPSS findings", correct: true, critical: false, explanation: "Pre-arrival notification with stroke scale results and last known well time significantly reduces door-to-treatment times.", guideline_ref: "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke" },
          { text: "Transport to the closest hospital 8 minutes away since it can stabilize the patient and transfer later", correct: false, critical: false, explanation: "The 'drip and ship' model adds significant delays. When a stroke center is within reasonable transport time, direct transport is preferred.", guideline_ref: "AHA/ASA Stroke System of Care; NAEMSP Stroke Routing" },
          { text: "Position the patient supine with the head of the stretcher elevated to 30 degrees during transport", correct: true, critical: false, explanation: "Head elevation to 30 degrees is recommended to optimize cerebral venous drainage and reduce intracranial pressure.", guideline_ref: "AHA/ASA 2019 Acute Stroke Guidelines" },
          { text: "Administer aspirin 324 mg to begin antiplatelet therapy during transport", correct: false, critical: true, explanation: "NEVER administer aspirin in the prehospital setting for suspected stroke. A CT scan must first rule out hemorrhagic stroke — aspirin could worsen an intracranial hemorrhage and be fatal.", guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Review the following clinical presentations. Identify which findings are consistent with ACUTE STROKE versus common STROKE MIMICS:",
        type: "graphical",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Consider the following clinical scenarios and classify each as more likely stroke or more likely a stroke mimic. This distinction is important for clinical reasoning, though prehospital providers should treat all suspected strokes as emergencies.",
        vitals_update: {},
        clinical_pearl: "Up to 30% of suspected strokes are ultimately diagnosed as mimics. However, prehospital providers should err on the side of transporting to a stroke center — the consequences of missing a real stroke far outweigh overtriage. Hypoglycemia is the most common and most important mimic to rule out in the field.",
        options: [
          { text: "Sudden unilateral facial droop with arm weakness and speech difficulty in a patient with atrial fibrillation → ACUTE STROKE", correct: true, critical: false, explanation: "Classic acute stroke presentation: sudden onset, unilateral deficits, and a major risk factor (atrial fibrillation). This is a high-probability stroke.", guideline_ref: "AHA/ASA Stroke Recognition Guidelines" },
          { text: "Gradual onset of bilateral tingling in hands and feet with anxiety and hyperventilation → STROKE MIMIC", correct: true, critical: false, explanation: "Bilateral symptoms, gradual onset, and association with hyperventilation suggest a mimic — likely hyperventilation syndrome or anxiety. Stroke typically causes unilateral, sudden-onset deficits.", guideline_ref: "AHA/ASA Stroke Differential Diagnosis" },
          { text: "Unresponsive patient with blood glucose of 38 mg/dL and left-sided weakness → STROKE MIMIC", correct: true, critical: false, explanation: "Hypoglycemia is the most common stroke mimic and can produce focal neurological deficits identical to stroke. Treat the glucose first — if symptoms resolve, it was likely hypoglycemia.", guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards" },
          { text: "Sudden severe headache described as 'worst of my life' with vomiting and neck stiffness → ACUTE STROKE (hemorrhagic)", correct: true, critical: false, explanation: "This 'thunderclap headache' presentation with meningeal signs is classic for subarachnoid hemorrhage, a form of hemorrhagic stroke. This is a true neurological emergency.", guideline_ref: "AHA/ASA Subarachnoid Hemorrhage Guidelines" }
        ]
      }
    ]
  },

  // ─── 2. Chest Pain / ACS ───
  {
    id: "nat-acs-01",
    title: "Acute Coronary Syndrome — ST-Elevation Myocardial Infarction",
    dispatch: "58-year-old male, chest pain, sweating",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 58, sex: "M", cc: "Crushing substernal chest pain radiating to left arm" },
    scene: "You respond to an office building. A 58-year-old male is seated in a chair in the break room, clutching his chest. Coworkers state he suddenly complained of chest pain about 15 minutes ago and became pale and sweaty. He appears anxious, diaphoretic, and in obvious distress. Skin is pale, cool, and diaphoretic.",
    history: { pmh: "Hypertension, hyperlipidemia, family history of MI (father at age 55)", meds: "Lisinopril, atorvastatin", allergies: "No known drug allergies" },
    vitals: { hr: 104, bp: "148/92", rr: 22, spo2: 95, gcs: 15, temp: "98.6°F" },
    questions: [
      {
        phase: "treatment",
        prompt: "After placing the patient on the stretcher and applying the cardiac monitor, what is the MOST appropriate initial treatment for this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient rates his pain as 9/10, crushing and substernal, radiating to his left arm and jaw. It began at rest 15 minutes ago. He has not taken any medications for it.",
        vitals_update: {},
        clinical_pearl: "The mnemonic MONA (Morphine, Oxygen, Nitroglycerin, Aspirin) is outdated. Current AHA guidelines emphasize aspirin first, oxygen only if SpO2 <94%, and nitroglycerin for ongoing pain. Morphine is used with caution due to potential hypotension.",
        options: [
          { text: "Administer aspirin 162–325 mg (chewed) and assist with or administer nitroglycerin if not contraindicated", correct: true, critical: false, explanation: "Aspirin is the single most important early medication — it reduces mortality by inhibiting platelet aggregation. Chewing ensures rapid absorption. Nitroglycerin is appropriate for ongoing chest pain if blood pressure supports it.", guideline_ref: "AHA 2020 ACLS Guidelines; 2021 National EMS Education Standards — Cardiovascular Emergencies" },
          { text: "Apply high-flow oxygen at 15 LPM via non-rebreather mask and obtain IV access before any medications", correct: false, critical: false, explanation: "Current evidence shows supplemental oxygen provides no benefit and may cause harm in normoxic ACS patients (SpO2 ≥94%). Oxygen is indicated only for hypoxemia, respiratory distress, or heart failure.", guideline_ref: "AHA 2020 Guidelines; AVOID Trial (Stub et al., 2015)" },
          { text: "Administer nitroglycerin 0.4 mg sublingual immediately, then aspirin after pain is controlled", correct: false, critical: false, explanation: "Aspirin should not be delayed for nitroglycerin. Aspirin addresses the underlying pathology (platelet-mediated thrombus), while nitroglycerin only treats the symptom (pain). Aspirin first.", guideline_ref: "AHA 2020 ACLS Guidelines" },
          { text: "Establish IV access and administer a 500 mL normal saline bolus to support blood pressure before medications", correct: false, critical: false, explanation: "The patient's blood pressure is adequate (148/92). A fluid bolus is not indicated and could worsen cardiac workload. Fluids in ACS are reserved for hypotension or right ventricular infarction.", guideline_ref: "AHA 2020 ACLS ACS Algorithm" }
        ]
      },
      {
        phase: "assessment",
        prompt: "At the Paramedic level, you acquire a 12-lead ECG. Review the following findings and select the interpretation that BEST matches this clinical scenario:",
        type: "graphical",
        level_filter: "Paramedic",
        multi_select: false,
        narrative: "The 12-lead ECG shows: ST-segment elevation >2 mm in leads II, III, and aVF. Reciprocal ST depression in leads I and aVL. Normal sinus rhythm at a rate of 104. No bundle branch block pattern.",
        vitals_update: { hr: 104, bp: "142/88", rr: 22, spo2: 95 },
        clinical_pearl: "Inferior STEMI (leads II, III, aVF) should prompt acquisition of a right-sided 12-lead (V4R) to evaluate for right ventricular involvement. If RV infarction is present, nitroglycerin and morphine are relatively contraindicated due to preload dependence — these patients need volume, not vasodilators.",
        options: [
          { text: "Inferior STEMI — ST elevation in II, III, aVF with reciprocal changes in I and aVL, indicating acute right coronary artery occlusion", correct: true, critical: false, explanation: "ST elevation in the inferior leads (II, III, aVF) with reciprocal depression in the lateral leads (I, aVL) is the classic pattern of inferior STEMI, most commonly caused by right coronary artery occlusion.", guideline_ref: "AHA 2020 ACLS Guidelines; 12-Lead ECG Interpretation for STEMI Recognition" },
          { text: "Anterior STEMI — ST elevation in V1-V4 indicating left anterior descending artery occlusion", correct: false, critical: false, explanation: "Anterior STEMI involves the precordial leads V1-V4, not the inferior leads. The described findings are in II, III, and aVF, which are inferior leads.", guideline_ref: "AHA 12-Lead ECG Interpretation" },
          { text: "Left bundle branch block — wide QRS with ST changes that are secondary to conduction abnormality", correct: false, critical: false, explanation: "The scenario specifically states 'no bundle branch block pattern.' LBBB has a wide QRS (>120 ms) with characteristic morphology distinct from STEMI.", guideline_ref: "AHA 2020 ACLS Guidelines — Modified Sgarbossa Criteria" },
          { text: "Pericarditis — diffuse ST elevation across multiple lead groups without reciprocal changes", correct: false, critical: false, explanation: "Pericarditis causes diffuse, concave-up ST elevation without reciprocal changes. This ECG shows focal ST elevation with clear reciprocal depression, consistent with STEMI.", guideline_ref: "AHA Differential Diagnosis of ST Elevation" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following ACS management steps in the correct sequence:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have confirmed an inferior STEMI on 12-lead ECG. The patient continues to have 9/10 chest pain. Blood pressure is 142/88.",
        vitals_update: {},
        clinical_pearl: "For STEMI, the goal is first medical contact to percutaneous coronary intervention (PCI) within 90 minutes (or 120 minutes if transfer is needed). Every minute of delay increases myocardial damage. Early cath lab activation notification is critical.",
        options: [
          { text: "Administer aspirin 162–325 mg chewed if not already given", correct: true, critical: false, explanation: "Aspirin is the first medication priority in ACS. If not already administered, give it immediately.", guideline_ref: "AHA 2020 ACLS ACS Algorithm" },
          { text: "Acquire right-sided 12-lead ECG (V4R) to evaluate for right ventricular involvement", correct: true, critical: false, explanation: "In inferior STEMI, right ventricular infarction occurs in up to 50% of cases. V4R is the most sensitive single lead for RV infarction and changes treatment (avoid nitroglycerin, give fluids).", guideline_ref: "AHA 2020 ACLS Guidelines; STEMI Management" },
          { text: "Activate cardiac catheterization lab via early hospital notification with 12-lead ECG transmission", correct: true, critical: false, explanation: "Early cath lab activation and ECG transmission reduce door-to-balloon time. This should occur as soon as STEMI is identified.", guideline_ref: "AHA 2020 ACLS Guidelines; Mission: Lifeline" },
          { text: "Administer nitroglycerin 0.4 mg sublingual if no RV infarction and BP supports it", correct: true, critical: false, explanation: "Nitroglycerin is appropriate after ruling out RV involvement (via V4R) and confirming adequate blood pressure. Contraindicated in RV infarction, hypotension, or recent PDE5 inhibitor use.", guideline_ref: "AHA 2020 ACLS ACS Algorithm" },
          { text: "Initiate rapid transport to the closest PCI-capable facility", correct: true, critical: false, explanation: "STEMI patients should be transported to a PCI-capable facility. Primary PCI is the preferred reperfusion strategy when achievable within guideline time windows.", guideline_ref: "AHA 2020 ACLS Guidelines; ACC/AHA STEMI Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are contraindications to nitroglycerin administration in this patient? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Before administering nitroglycerin, you review potential contraindications. The patient's current BP is 142/88. His right-sided ECG (V4R) shows 1 mm ST elevation. He denies taking any erectile dysfunction medications.",
        vitals_update: {},
        clinical_pearl: "Right ventricular infarction patients are preload-dependent. Nitroglycerin causes venodilation that reduces preload, which can cause precipitous and potentially fatal hypotension. If you see inferior STEMI — always check V4R before giving nitro.",
        options: [
          { text: "ST elevation in V4R suggesting right ventricular infarction — these patients are preload dependent", correct: true, critical: false, explanation: "RV infarction is a critical contraindication to nitroglycerin. RV infarction patients depend on adequate preload to maintain cardiac output; nitroglycerin's venodilation can cause severe hypotension.", guideline_ref: "AHA 2020 ACLS Guidelines; STEMI Management" },
          { text: "Use of phosphodiesterase-5 inhibitors (sildenafil, tadalafil) within 24–48 hours", correct: true, critical: false, explanation: "PDE5 inhibitors potentiate the hypotensive effect of nitrates and can cause severe, refractory hypotension. Withhold nitroglycerin for 24 hours after sildenafil/vardenafil or 48 hours after tadalafil.", guideline_ref: "AHA 2020 ACLS Guidelines" },
          { text: "Systolic blood pressure below 90 mmHg or more than 30 mmHg below the patient's baseline", correct: true, critical: false, explanation: "Hypotension is an absolute contraindication. Nitroglycerin causes vasodilation that can worsen hypotension and reduce coronary perfusion pressure.", guideline_ref: "AHA 2020 ACLS ACS Algorithm" },
          { text: "Heart rate of 104 beats per minute — tachycardia is a contraindication to all nitrate therapy", correct: false, critical: false, explanation: "Tachycardia alone is not a contraindication to nitroglycerin. Mild reflex tachycardia may actually occur after administration. However, tachycardia should prompt investigation of its cause.", guideline_ref: "AHA 2020 ACLS Guidelines" },
          { text: "Patient age over 55 years — nitroglycerin has increased risk of adverse effects in older adults", correct: false, critical: false, explanation: "Age alone is not a contraindication to nitroglycerin. Dosing and monitoring are the same across adult age groups, though elderly patients may be more sensitive to hypotension.", guideline_ref: "AHA 2020 ACLS Guidelines" }
        ]
      }
    ]
  },

  // ─── 3. Pediatric Respiratory Distress ───
  {
    id: "nat-ped-01",
    title: "Pediatric Croup — Viral Laryngotracheobronchitis",
    dispatch: "2-year-old, difficulty breathing, barking cough",
    category: "Airway & Breathing",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 2, sex: "M", cc: "Barking cough and noisy breathing" },
    scene: "You arrive at an apartment where a distressed mother is holding a 2-year-old boy. The child has a harsh, bark-like cough and audible inspiratory stridor. He has been sick with a runny nose and low-grade fever for two days. The barking cough worsened tonight. The child is crying but consolable when held by his mother.",
    history: { pmh: "Full-term birth, up-to-date on vaccinations, no prior hospitalizations", meds: "Children's acetaminophen given 1 hour ago", allergies: "No known allergies" },
    vitals: { hr: 136, bp: "90/58", rr: 32, spo2: 93, gcs: 15, temp: "100.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on the clinical presentation, which condition is MOST likely and what is the key distinguishing feature from the most dangerous alternative?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The child has a barking, seal-like cough. Inspiratory stridor is present at rest. He has a 2-day history of URI symptoms with gradual onset. He is sitting upright in his mother's arms, crying but consolable. There is no drooling. He is able to swallow and drink small sips of juice.",
        vitals_update: {},
        clinical_pearl: "Croup has a gradual onset with URI prodrome and a characteristic barking cough. Epiglottitis has a rapid onset with high fever, drooling, dysphagia, and the child often assumes a 'tripod' or 'sniffing' position. Epiglottitis is now rare due to the Hib vaccine but remains a life-threatening emergency.",
        options: [
          { text: "Croup (viral laryngotracheobronchitis) — distinguished from epiglottitis by gradual onset, barking cough, URI prodrome, absence of drooling, and low-grade fever", correct: true, critical: false, explanation: "Classic croup: 6 months–3 years old, gradual onset with URI symptoms, barking cough, inspiratory stridor, and low-grade fever. No drooling, able to swallow, and consolable — all argue against epiglottitis.", guideline_ref: "2021 National EMS Education Standards — Pediatric Respiratory Emergencies; AAP Clinical Practice Guidelines" },
          { text: "Epiglottitis — distinguished from croup by the presence of inspiratory stridor and respiratory distress in a toddler", correct: false, critical: false, explanation: "Stridor can occur in both conditions. Epiglottitis is distinguished by rapid onset, high fever (often >103°F), drooling, dysphagia, muffled voice, and toxic appearance — none of which are present here.", guideline_ref: "AAP Pediatric Emergency Guidelines" },
          { text: "Foreign body aspiration — the sudden onset of stridor in a 2-year-old should always suggest aspiration first", correct: false, critical: false, explanation: "Foreign body aspiration typically presents with sudden onset during eating or playing with small objects. This child has a 2-day prodrome of URI symptoms and gradual onset — not consistent with aspiration.", guideline_ref: "2021 National EMS Education Standards — Airway Emergencies" },
          { text: "Asthma exacerbation — the wheezing and coughing in this age group is most commonly caused by reactive airway disease", correct: false, critical: false, explanation: "Asthma causes expiratory wheezing, not the inspiratory stridor and barking cough described. The stridor here indicates upper airway obstruction (subglottic area), while asthma affects the lower airways.", guideline_ref: "National Asthma Education and Prevention Program (NAEPP) Guidelines" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize the following clinical findings as indicators of UPPER AIRWAY obstruction or LOWER AIRWAY obstruction:",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Understanding the difference between upper and lower airway findings helps determine the cause of respiratory distress and guides treatment decisions.",
        vitals_update: {},
        clinical_pearl: "A simple rule: inspiratory sounds suggest upper airway problems (above the vocal cords), while expiratory sounds suggest lower airway problems (below the carina). Stridor = upper. Wheezing = lower. This distinction changes your entire management approach.",
        options: [
          { text: "Inspiratory stridor → UPPER AIRWAY", correct: true, critical: false, explanation: "Stridor is a high-pitched sound heard on inspiration caused by turbulent airflow through a narrowed upper airway (supraglottic or subglottic). It is the hallmark of upper airway obstruction.", guideline_ref: "2021 National EMS Education Standards — Airway Management" },
          { text: "Barking or seal-like cough → UPPER AIRWAY", correct: true, critical: false, explanation: "The barking cough of croup results from subglottic edema and inflammation, which is an upper airway process.", guideline_ref: "AAP Croup Guidelines" },
          { text: "Expiratory wheezing → LOWER AIRWAY", correct: true, critical: false, explanation: "Wheezing is caused by narrowing of the bronchioles (lower airways). Air becomes trapped during exhalation, creating the characteristic musical sound. Common in asthma and bronchiolitis.", guideline_ref: "2021 National EMS Education Standards — Respiratory Emergencies" },
          { text: "Hoarse or muffled voice → UPPER AIRWAY", correct: true, critical: false, explanation: "Voice changes indicate involvement of the larynx or supraglottic structures — upper airway anatomy.", guideline_ref: "2021 National EMS Education Standards — Airway Assessment" },
          { text: "Prolonged expiratory phase → LOWER AIRWAY", correct: true, critical: false, explanation: "Prolonged expiration indicates air trapping from lower airway obstruction. The patient must actively exhale to push air past narrowed bronchioles.", guideline_ref: "NAEPP Guidelines; National EMS Education Standards" },
          { text: "Drooling with inability to swallow → UPPER AIRWAY", correct: true, critical: false, explanation: "Drooling and dysphagia indicate supraglottic swelling (as in epiglottitis or peritonsillar abscess) — upper airway emergencies that may progress to complete obstruction.", guideline_ref: "AAP Pediatric Emergency Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following treatment and management steps for this child in the correct priority order:",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The child continues to have stridor at rest with mild intercostal retractions. SpO2 is 93%. He is crying but consolable when held by his mother. You need to manage this patient for transport.",
        vitals_update: {},
        clinical_pearl: "In croup, keeping the child calm is therapeutic. Agitation and crying increase airway turbulence and can worsen the obstruction dramatically. Allow the parent to hold the child whenever possible. Cool mist/humidified oxygen and blow-by oxygen delivery are preferred over face masks in this age group.",
        options: [
          { text: "Allow the child to remain in a position of comfort with the parent — avoid agitating the child", correct: true, critical: false, explanation: "Most important first step. Agitation worsens stridor and can precipitate complete obstruction. A calm child in a comfortable position has better airway dynamics.", guideline_ref: "2021 National EMS Education Standards — Pediatric Assessment; PAT (Pediatric Assessment Triangle)" },
          { text: "Administer humidified blow-by oxygen to maintain SpO2 above 94%", correct: true, critical: false, explanation: "With SpO2 at 93%, supplemental oxygen is indicated. Blow-by delivery is least distressing and should be attempted before a mask. Let the parent hold the tubing near the child's face.", guideline_ref: "2021 National EMS Education Standards — Pediatric Oxygen Therapy" },
          { text: "Continuously monitor for signs of worsening airway obstruction during transport", correct: true, critical: false, explanation: "Croup can progress. Monitor for absent stridor (may indicate complete obstruction, not improvement), severe retractions, cyanosis, or altered mental status.", guideline_ref: "2021 National EMS Education Standards — Pediatric Reassessment" },
          { text: "Transport to an appropriate facility with the child secured in a car seat or on the parent's lap with both restrained", correct: true, critical: false, explanation: "Safe transport is essential. If the child tolerates a car seat, use it. Otherwise, the child may be transported on the restrained parent's lap per local guidelines, prioritizing both safety and keeping the child calm.", guideline_ref: "2021 National EMS Education Standards — Pediatric Transport; NAEMSP Pediatric Transport Position" }
        ]
      }
    ]
  },

  // ─── 4. Geriatric Fall with Hip Fracture ───
  {
    id: "nat-tra-01",
    title: "Geriatric Hip Fracture — Anticoagulated Patient",
    dispatch: "84-year-old female, fall, unable to get up",
    category: "Trauma",
    difficulty: "Easy",
    level_min: "EMR",
    patient: { age: 84, sex: "F", cc: "Right hip pain after fall, unable to bear weight" },
    scene: "You arrive at a single-story home. An 84-year-old woman is lying on the bathroom floor. She states she slipped getting out of the bathtub approximately 30 minutes ago and has been unable to get up since. She is alert and oriented, complaining of severe right hip pain. Her right leg appears shortened and externally rotated.",
    history: { pmh: "Atrial fibrillation, osteoporosis, hypertension, previous TIA", meds: "Warfarin, alendronate, lisinopril, calcium with vitamin D", allergies: "Codeine (nausea)" },
    vitals: { hr: 96, bp: "138/78", rr: 18, spo2: 96, gcs: 15, temp: "97.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "What is the MOST important assessment priority for this patient beyond the obvious hip injury?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient is alert and oriented but in pain. She states she simply slipped — she did not feel dizzy or pass out. Her right leg is shortened and externally rotated with tenderness over the right hip.",
        vitals_update: {},
        clinical_pearl: "In geriatric falls, always ask WHY the patient fell. A mechanical fall (slipped, tripped) has different implications than a syncopal fall. Falls can be caused by cardiac dysrhythmias, orthostatic hypotension, medication effects, stroke, or hypoglycemia — any of which may need urgent treatment beyond the injury itself.",
        options: [
          { text: "Determine the cause of the fall — assess for syncope, dizziness, cardiac symptoms, or neurological deficits that may have precipitated the event", correct: true, critical: false, explanation: "The most critical question: did the fall cause the injury, or did a medical event cause the fall? Syncope, dysrhythmias, stroke, and hypoglycemia must all be considered. This changes the urgency and destination.", guideline_ref: "2021 National EMS Education Standards — Geriatric Assessment; AGS/BGS Fall Prevention Guidelines" },
          { text: "Immediately splint the right hip in the position found to prevent further displacement before any other assessment", correct: false, critical: false, explanation: "While splinting is important, it is not the first priority. A medical cause of the fall (cardiac event, stroke) could be immediately life-threatening and should be assessed first.", guideline_ref: "2021 National EMS Education Standards — Trauma Assessment Priorities" },
          { text: "Obtain a detailed medication list and determine when the patient last ate, as these are most important for hospital care", correct: false, critical: false, explanation: "Medication history is important (especially the warfarin) but is not the most immediate priority. Determining why the patient fell takes precedence as it may reveal an ongoing emergency.", guideline_ref: "2021 National EMS Education Standards — Geriatric Emergencies" },
          { text: "Assess the bathroom for hazards and document environmental risk factors to prevent future falls", correct: false, critical: false, explanation: "Fall prevention and environmental assessment are important for long-term care but are not the acute assessment priority. Focus on the patient first.", guideline_ref: "AGS/BGS Fall Prevention Guidelines" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which of the following factors complicate this patient's presentation and management? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You've confirmed the fall was mechanical (slipped on wet floor). The patient's right leg is shortened and externally rotated. She is on warfarin for atrial fibrillation and has a history of osteoporosis.",
        vitals_update: {},
        clinical_pearl: "Anticoagulated geriatric trauma patients are high-risk. Hip fractures in elderly patients on anticoagulants have increased surgical mortality, greater blood loss, and higher complication rates. Additionally, these patients may have occult bleeding that presents late. Even 'minor' mechanisms in anticoagulated elderly patients warrant a high index of suspicion.",
        options: [
          { text: "Warfarin use increases bleeding risk — hip fractures can cause significant occult hemorrhage into the thigh and pelvis", correct: true, critical: false, explanation: "Hip fractures can result in 1–2 liters of blood loss into surrounding tissues. Warfarin impairs clotting and can turn moderate bleeding into life-threatening hemorrhage. Serial vital sign monitoring is essential.", guideline_ref: "PHTLS 9th Edition — Geriatric Trauma; ACS TQIP Geriatric Trauma Management Guidelines" },
          { text: "Osteoporosis means the fracture may be more severe than the mechanism suggests — low-energy mechanisms can cause significant injuries", correct: true, critical: false, explanation: "Osteoporotic bones fracture with minimal force. A simple fall from standing is the most common mechanism for hip fracture in the elderly. Don't underestimate injury severity based on mechanism alone.", guideline_ref: "2021 National EMS Education Standards — Geriatric Trauma; PHTLS Geriatric Considerations" },
          { text: "Atrial fibrillation may contribute to hemodynamic instability and complicates heart rate interpretation as a vital sign trend", correct: true, critical: false, explanation: "Atrial fibrillation makes heart rate an unreliable indicator of volume status. The irregular rhythm and rate-controlled medications may blunt the normal tachycardic response to hemorrhage.", guideline_ref: "PHTLS 9th Edition — Shock Assessment in Geriatric Patients" },
          { text: "History of TIA suggests she may have had a stroke that caused the fall, requiring reassessment", correct: true, critical: false, explanation: "Although she reports a mechanical fall, her history of TIA places her at higher risk for stroke. A brief neurological reassessment (stroke screen) is prudent to confirm no new deficits.", guideline_ref: "AHA/ASA Stroke Risk Assessment; 2021 National EMS Education Standards" },
          { text: "The patient's age of 84 means pain medications should be completely withheld due to high risk of respiratory depression", correct: false, critical: false, explanation: "Elderly patients deserve adequate pain management. Untreated pain causes tachycardia, hypertension, and agitation. Appropriate analgesia at adjusted doses is both safe and recommended.", guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Match each injury type to the most appropriate prehospital splinting consideration:",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Review the following table of common lower extremity injuries and the appropriate splinting method for each in the prehospital setting.",
        vitals_update: {},
        clinical_pearl: "For suspected hip fractures, avoid traction splints — they are contraindicated for fractures at or near the hip joint. Secure the patient to a long backboard or scoop stretcher with padding between the legs and blanket rolls to immobilize the hip in the position found. Prioritize comfort and gentle handling.",
        options: [
          { text: "Suspected hip fracture → Immobilize on a long backboard or scoop stretcher with padding; secure legs together with blanket rolls; do NOT apply traction splint", correct: true, critical: false, explanation: "Traction splints are contraindicated for hip fractures (fractures proximal to the femoral shaft). Secure the patient on a rigid device with padding to prevent rotation and movement.", guideline_ref: "2021 National EMS Education Standards — Musculoskeletal Trauma; PHTLS 9th Edition" },
          { text: "Isolated mid-shaft femur fracture → Apply a traction splint to reduce pain, control bleeding, and prevent further soft tissue damage", correct: true, critical: false, explanation: "Traction splints are specifically designed for isolated mid-shaft femur fractures. They realign bone fragments, reduce muscle spasm pain, and limit internal bleeding.", guideline_ref: "2021 National EMS Education Standards — Traction Splinting; PHTLS 9th Edition" },
          { text: "Ankle fracture/dislocation with distal pulse present → Splint in position found using a pillow splint or padded rigid splint; reassess CSM", correct: true, critical: false, explanation: "When distal pulses are present, splint in position found. A pillow splint conforms well to ankle injuries and provides cushioned immobilization. Always reassess circulation, sensation, and motor function after splinting.", guideline_ref: "2021 National EMS Education Standards — Extremity Splinting" },
          { text: "Knee dislocation with absent pedal pulse → Urgent condition; splint in position found, rapid transport — do NOT attempt reduction in the field", correct: true, critical: false, explanation: "Knee dislocations have a high incidence of popliteal artery injury. An absent distal pulse indicates vascular compromise — this is a limb-threatening emergency requiring emergent surgical intervention.", guideline_ref: "PHTLS 9th Edition — Extremity Trauma; 2021 National EMS Education Standards" }
        ]
      }
    ]
  },

  // ─── 5. Opioid Overdose ───
  {
    id: "nat-tox-01",
    title: "Opioid Overdose — Respiratory Arrest",
    dispatch: "26-year-old male, unresponsive, not breathing normally",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 26, sex: "M", cc: "Unresponsive with slow, shallow breathing" },
    scene: "You respond to a public park restroom. A bystander flagged you down after finding a 26-year-old male slumped on the floor of a restroom stall. The patient is unresponsive to voice. You note a tourniquet around his left upper arm, a syringe on the floor, and small plastic bags nearby. His breathing is slow and shallow — approximately 4 breaths per minute. His lips are cyanotic. Pupils are pinpoint bilaterally.",
    history: { pmh: "Unknown — patient is unresponsive and no family is present", meds: "Unknown", allergies: "Unknown" },
    vitals: { hr: 52, bp: "88/54", rr: 4, spo2: 72, gcs: 3, temp: "96.8°F" },
    questions: [
      {
        phase: "treatment",
        prompt: "What is the MOST critical first intervention for this patient?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient is unresponsive (GCS 3), breathing at 4 breaths per minute, with cyanotic lips and SpO2 of 72%. Pinpoint pupils and scene evidence suggest opioid use.",
        vitals_update: {},
        clinical_pearl: "Opioid overdose deaths occur from respiratory failure, not from the drug directly stopping the heart. The single most important intervention is restoring adequate ventilation. Naloxone is critical but takes 2–5 minutes to work — the patient will suffer irreversible brain damage or die from hypoxia in that time if you don't ventilate first.",
        options: [
          { text: "Open the airway and begin bag-valve-mask ventilation with supplemental oxygen — ventilation is the immediate life-saving intervention", correct: true, critical: false, explanation: "Airway and breathing first — always. This patient is in respiratory failure with severe hypoxia (SpO2 72%). BVM ventilation with supplemental oxygen immediately addresses the life threat. Naloxone is important but is an adjunct to ventilation, not a replacement.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; 2021 National EMS Education Standards — Toxicological Emergencies" },
          { text: "Administer intranasal naloxone 4 mg immediately — reversing the opioid is the highest priority before any airway intervention", correct: false, critical: false, explanation: "Naloxone is essential but not the FIRST intervention. It takes 2–5 minutes to take effect. With a respiratory rate of 4 and SpO2 of 72%, this patient needs ventilatory support NOW while naloxone is being prepared and administered.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Algorithm" },
          { text: "Perform a sternal rub to attempt to arouse the patient — pain stimulus may be sufficient to increase respiratory drive", correct: false, critical: false, explanation: "A patient with GCS 3 and a respiratory rate of 4 is unlikely to respond to painful stimuli sufficiently to restore adequate ventilation. This wastes critical time.", guideline_ref: "2021 National EMS Education Standards — Patient Assessment" },
          { text: "Place the patient in the recovery position and monitor — naloxone should only be given after confirming the substance used", correct: false, critical: true, explanation: "This patient is in respiratory arrest. Placing a patient with a respiratory rate of 4 and SpO2 of 72% in the recovery position without assisted ventilation will likely result in death or anoxic brain injury. Naloxone does not require confirmation of the specific opioid.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of opioid overdose management in the correct sequence:",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have identified this as a suspected opioid overdose with respiratory failure. You need to manage this patient systematically.",
        vitals_update: {},
        clinical_pearl: "Titrate naloxone to restore adequate respirations, not necessarily to full consciousness. A fully awake patient who was using opioids may become combative, experience acute withdrawal (vomiting with aspiration risk), or leave against medical advice. The goal is a respiratory rate of 12+ with adequate tidal volume.",
        options: [
          { text: "Ensure scene safety — wear gloves, be aware of needles, do not touch unknown powders", correct: true, critical: false, explanation: "Scene safety first, especially with drug paraphernalia. Fentanyl and its analogs can be absorbed through skin or inhaled. Gloves are mandatory; avoid contact with unknown substances.", guideline_ref: "NAEMSP/ACMT Joint Position Statement on Fentanyl Exposure; 2021 National EMS Education Standards" },
          { text: "Open the airway and begin assisted ventilation with BVM and supplemental oxygen", correct: true, critical: false, explanation: "Ventilatory support is the immediate life-saving intervention. Opioids kill by suppressing respiratory drive — restoring oxygenation and ventilation is the highest treatment priority.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Algorithm" },
          { text: "Administer naloxone via appropriate route (intranasal, intramuscular, or intravenous)", correct: true, critical: false, explanation: "Naloxone is the specific opioid antagonist. All EMS levels can administer it. Intranasal (4 mg) and intramuscular (0.4 mg) are appropriate first-line routes when IV access is not available.", guideline_ref: "AHA 2020 Guidelines; FDA-Approved Naloxone Dosing" },
          { text: "Reassess respirations and titrate additional naloxone doses every 2–3 minutes if inadequate response", correct: true, critical: false, explanation: "Naloxone may need repeated doses, especially with synthetic opioids like fentanyl. Reassess respiratory rate and depth after each dose. Titrate to adequate ventilation.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines" },
          { text: "Monitor closely for recurrence — naloxone duration (30–90 min) may be shorter than the opioid, requiring redosing or extended observation", correct: true, critical: false, explanation: "Many opioids (especially long-acting formulations and fentanyl analogs) outlast naloxone. Patients may re-sedate and develop respiratory failure again. Extended monitoring and transport are essential.", guideline_ref: "AHA 2020 Guidelines; NAEMSP Position on Naloxone Administration" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize the following clinical findings as characteristic of OPIOID toxidrome versus OTHER toxidromes:",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Recognizing toxidrome patterns helps identify the substance class involved and guides treatment, even when the specific drug is unknown.",
        vitals_update: {},
        clinical_pearl: "The classic opioid toxidrome triad is: respiratory depression + pinpoint pupils (miosis) + altered mental status. However, mixed ingestions are common — a patient may have taken stimulants AND opioids simultaneously, creating a confusing clinical picture. When in doubt, if respirations are depressed, give naloxone.",
        options: [
          { text: "Pinpoint pupils (miosis) → OPIOID TOXIDROME", correct: true, critical: false, explanation: "Miosis is a hallmark of opioid intoxication. The opioid effect on the Edinger-Westphal nucleus causes pupillary constriction that persists even in coma.", guideline_ref: "2021 National EMS Education Standards — Toxicology; Goldfrank's Toxicologic Emergencies" },
          { text: "Respiratory depression with bradycardia → OPIOID TOXIDROME", correct: true, critical: false, explanation: "Opioids depress the medullary respiratory center, reducing both rate and depth. Bradycardia often accompanies severe respiratory depression from hypoxia and direct opioid effects.", guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines" },
          { text: "Dilated pupils, tachycardia, agitation, and hyperthermia → OTHER (Sympathomimetic toxidrome)", correct: true, critical: false, explanation: "This is the sympathomimetic toxidrome (cocaine, methamphetamine, bath salts): fight-or-flight overdrive with mydriasis, tachycardia, hypertension, agitation, and hyperthermia — the opposite of opioids.", guideline_ref: "2021 National EMS Education Standards — Toxicology" },
          { text: "Excessive salivation, lacrimation, urination, defecation, and bradycardia → OTHER (Cholinergic toxidrome)", correct: true, critical: false, explanation: "The SLUDGE/BBB mnemonic (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis / Bradycardia, Bronchorrhea, Bronchospasm) indicates cholinergic poisoning — organophosphates or nerve agents.", guideline_ref: "2021 National EMS Education Standards — Toxicology; CHEMPACK Guidelines" },
          { text: "Decreased level of consciousness with hypotension → OPIOID TOXIDROME", correct: true, critical: false, explanation: "Opioids cause CNS depression and can cause hypotension through vasodilation and reduced sympathetic tone. Combined with other opioid signs (miosis, respiratory depression), this fits the opioid toxidrome.", guideline_ref: "2021 National EMS Education Standards — Toxicology" },
          { text: "Seizures, wide QRS complex on ECG, and dry skin → OTHER (Anticholinergic/TCA toxidrome)", correct: true, critical: false, explanation: "This pattern suggests tricyclic antidepressant or anticholinergic poisoning: 'Mad as a hatter, blind as a bat, dry as a bone, hot as a hare, red as a beet.' Sodium channel blockade causes wide QRS.", guideline_ref: "AHA 2020 ACLS — Toxicology; 2021 National EMS Education Standards" }
        ]
      }
    ]
  },

  // ─── 6. Childbirth — Field Delivery ───
  {
    id: "nat-obn-01",
    title: "Imminent Field Delivery — Cephalic Presentation",
    dispatch: "32-year-old female, pregnant, baby coming now",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 32, sex: "F", cc: "Active labor with crowning — imminent delivery" },
    scene: "You arrive at a residence where a 32-year-old pregnant female is lying on the bedroom floor on towels. Her partner called 911 stating 'the baby is coming right now.' The patient is groaning with contractions approximately 60 seconds apart. Upon visual inspection, you can see the top of the baby's head at the vaginal opening during contractions (crowning). This is her third pregnancy (G3P2) and she states she 'delivers fast.'",
    history: { pmh: "Two prior uncomplicated vaginal deliveries, no gestational complications this pregnancy", meds: "Prenatal vitamins, iron supplement", allergies: "No known allergies" },
    vitals: { hr: 108, bp: "128/76", rr: 22, spo2: 98, gcs: 15, temp: "98.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which finding is the MOST reliable indicator that delivery is imminent and transport should NOT be attempted?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You need to quickly decide whether to attempt transport or prepare for field delivery. Contractions are 60 seconds apart, lasting 45–60 seconds each. The baby's head is visible at the perineum during contractions and no longer retracts fully between contractions.",
        vitals_update: {},
        clinical_pearl: "Crowning (the baby's head visible at the vaginal opening and not retracting between contractions) is the definitive sign that delivery is imminent. A multiparous patient (G3P2) with crowning can deliver within minutes. Do NOT attempt transport — delivery in a moving ambulance is dangerous for both mother and baby.",
        options: [
          { text: "Crowning — the baby's head is visible at the vaginal opening and does not retract between contractions, indicating delivery within minutes", correct: true, critical: false, explanation: "Crowning is the definitive indicator of imminent delivery. Combined with a multiparous patient (G3P2) and contractions every 60 seconds, delivery will likely occur in minutes. Prepare for field delivery.", guideline_ref: "2021 National EMS Education Standards — Obstetric Emergencies; NAEMSP Field Delivery Guidelines" },
          { text: "Contractions every 60 seconds — close contraction intervals alone mean delivery will happen before reaching the hospital", correct: false, critical: false, explanation: "Contraction frequency alone is not reliable. Some patients have close contractions for hours. Crowning is the definitive indicator, not contraction timing.", guideline_ref: "2021 National EMS Education Standards — Obstetric Assessment" },
          { text: "The patient's statement that she 'delivers fast' — maternal history is the most reliable predictor of imminent delivery", correct: false, critical: false, explanation: "While maternal history is helpful context, the physical finding of crowning is the most reliable indicator. Many patients perceive delivery as imminent when it may still be hours away.", guideline_ref: "2021 National EMS Education Standards — Obstetric Emergencies" },
          { text: "The patient's urge to push and bearing down — this sensation always means the baby will deliver within minutes", correct: false, critical: false, explanation: "The urge to push can occur well before delivery, especially in nulliparous patients. While it suggests advanced labor, it is not as reliable as direct visualization of crowning.", guideline_ref: "2021 National EMS Education Standards — Obstetric Assessment" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of normal cephalic delivery in the correct sequence:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have decided to prepare for field delivery. The patient is pushing with contractions and the baby's head is advancing.",
        vitals_update: {},
        clinical_pearl: "Do NOT pull the baby out — guide and support. The most common delivery complication for EMS providers is nuchal cord (cord around the neck), occurring in up to 25% of deliveries. If encountered, attempt to slip it over the baby's head. If too tight, clamp in two places and cut between the clamps, then continue delivery.",
        options: [
          { text: "Apply gentle, controlled pressure to the baby's head as it delivers to prevent explosive delivery", correct: true, critical: false, explanation: "Controlled delivery of the head prevents perineal tearing and protects the baby. Apply gentle counterpressure — never hold the baby back, just slow the delivery.", guideline_ref: "2021 National EMS Education Standards — Normal Delivery; NRP 8th Edition" },
          { text: "Check for nuchal cord once the head is delivered — if present, attempt to slip it over the head or clamp and cut", correct: true, critical: false, explanation: "Immediately check for cord around the neck after the head delivers. Nuchal cord occurs in ~25% of deliveries. Slip it over the head if loose; if tight, clamp and cut.", guideline_ref: "2021 National EMS Education Standards — Delivery Complications; NRP 8th Edition" },
          { text: "Suction the mouth first, then the nose, only if obvious obstruction is present", correct: true, critical: false, explanation: "Current NRP guidelines recommend suctioning only if the airway appears obstructed. Routine suctioning is no longer recommended as it can cause vagal bradycardia and delay breathing.", guideline_ref: "NRP 8th Edition (2021); AHA Neonatal Resuscitation Guidelines" },
          { text: "Guide the anterior shoulder downward gently, then deliver the posterior shoulder upward", correct: true, critical: false, explanation: "After head delivery, guide gently downward to deliver the anterior (top) shoulder, then upward to deliver the posterior shoulder. Never force — if shoulders don't deliver, suspect shoulder dystocia.", guideline_ref: "2021 National EMS Education Standards — Normal Delivery" },
          { text: "Clamp the cord in two places and cut between the clamps — delay clamping 30–60 seconds in vigorous term newborns", correct: true, critical: false, explanation: "Delayed cord clamping (30–60 seconds) for vigorous term newborns improves iron stores and transitional circulation. Clamp at least 2 inches apart and cut between the clamps with sterile scissors.", guideline_ref: "NRP 8th Edition; AHA/AAP 2020 Neonatal Resuscitation Guidelines; ACOG Delayed Cord Clamping" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are appropriate steps in neonatal resuscitation if the newborn is NOT vigorous at birth? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "The baby delivers successfully. However, the newborn is limp, not crying, and has poor respiratory effort. Heart rate assessed by palpating the umbilical cord base is approximately 80 beats per minute.",
        vitals_update: {},
        clinical_pearl: "The most important and effective step in neonatal resuscitation is ventilation. Most newborns who need help at birth respond to drying, stimulation, and positive-pressure ventilation. Only about 1% will need chest compressions. Ventilate at 40–60 breaths per minute with just enough volume to see chest rise.",
        options: [
          { text: "Dry the newborn thoroughly with warm towels and provide tactile stimulation by rubbing the back or flicking the soles of the feet", correct: true, critical: false, explanation: "Drying and stimulation are the first steps for any newborn. This provides tactile stimulation to initiate breathing and prevents hypothermia, which worsens neonatal outcomes.", guideline_ref: "NRP 8th Edition; AHA 2020 Neonatal Resuscitation Algorithm" },
          { text: "Position the airway in the 'sniffing' position, clear any visible secretions, and begin positive-pressure ventilation at 40–60 breaths per minute", correct: true, critical: false, explanation: "If stimulation fails to produce adequate respirations within 30 seconds, begin PPV. The 'sniffing' position optimizes the neonatal airway. Ventilate at 40–60 bpm with enough pressure for gentle chest rise.", guideline_ref: "NRP 8th Edition; AHA 2020 Neonatal Resuscitation Guidelines" },
          { text: "Maintain the newborn's temperature by placing skin-to-skin with the mother and covering both, or wrapping in warm blankets", correct: true, critical: false, explanation: "Thermoregulation is critical. Hypothermia increases oxygen consumption and worsens outcomes. Skin-to-skin contact or wrapping in warm blankets are appropriate methods.", guideline_ref: "NRP 8th Edition; WHO Thermal Protection Guidelines" },
          { text: "Administer high-flow oxygen via face mask directly onto the newborn's face at 15 LPM to maximize oxygenation", correct: false, critical: false, explanation: "NRP recommends beginning PPV with 21% oxygen (room air) for term newborns. Free-flow high-concentration oxygen is not the first step and may cause oxidative injury. Titrate oxygen based on pulse oximetry.", guideline_ref: "NRP 8th Edition; AHA 2020 Neonatal Resuscitation Guidelines" },
          { text: "Hold the newborn upside down by the ankles and slap the back to clear the airway and stimulate crying", correct: false, critical: true, explanation: "This outdated practice is dangerous. It can cause spinal injury, intracranial hemorrhage, and hypothermia. Proper neonatal resuscitation involves positioning, suctioning only if needed, and PPV.", guideline_ref: "NRP 8th Edition; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize the following findings as NORMAL delivery/postpartum findings versus ABNORMAL findings requiring immediate intervention:",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "After delivery of the newborn, you continue to monitor both mother and baby. Identify which findings are expected and which require immediate action.",
        vitals_update: { hr: 98, bp: "118/72", rr: 20, spo2: 98 },
        clinical_pearl: "Postpartum hemorrhage (>500 mL blood loss after vaginal delivery) is the leading cause of maternal death worldwide. Fundal massage is the first-line intervention: place one hand above the pubic bone for support and massage the uterine fundus firmly with the other hand until the uterus feels firm (like a grapefruit). Encourage breastfeeding — nipple stimulation releases oxytocin which promotes uterine contraction.",
        options: [
          { text: "Delivery of the placenta within 20 minutes with moderate blood loss (up to 300 mL) → NORMAL", correct: true, critical: false, explanation: "The placenta typically delivers within 5–30 minutes after the baby. Up to 500 mL of blood loss is considered physiologically normal for vaginal delivery, though prompt management begins well before that threshold.", guideline_ref: "2021 National EMS Education Standards — Postpartum Care; ACOG Postpartum Hemorrhage Guidelines" },
          { text: "Continuous bright red vaginal bleeding soaking more than one pad per minute after placental delivery → ABNORMAL", correct: true, critical: false, explanation: "This rate of bleeding suggests postpartum hemorrhage, most commonly from uterine atony. Immediate fundal massage, keep the uterus firm, and rapid transport. This is a life-threatening emergency.", guideline_ref: "ACOG Postpartum Hemorrhage Guidelines; 2021 National EMS Education Standards" },
          { text: "Mild uterine cramping after delivery with a firm uterine fundus palpable at the umbilicus → NORMAL", correct: true, critical: false, explanation: "Cramping after delivery indicates uterine involution (contraction). A firm fundus at the level of the umbilicus is the expected normal finding and indicates the uterus is contracting to control bleeding.", guideline_ref: "2021 National EMS Education Standards — Postpartum Assessment" },
          { text: "Newborn with acrocyanosis (blue hands and feet) but pink trunk, strong cry, and HR above 100 → NORMAL", correct: true, critical: false, explanation: "Acrocyanosis (blue extremities) is normal in the first 24–48 hours. A pink trunk, strong cry, and heart rate >100 bpm indicate a vigorous, well-transitioning newborn. Central cyanosis would be abnormal.", guideline_ref: "NRP 8th Edition; AHA 2020 Neonatal Assessment" },
          { text: "Placenta has not delivered after 30 minutes, with increasing vaginal bleeding → ABNORMAL", correct: true, critical: false, explanation: "A retained placenta beyond 30 minutes with increasing bleeding is an emergency. Do NOT pull on the cord — this can cause uterine inversion or cord avulsion. Transport immediately for manual extraction.", guideline_ref: "2021 National EMS Education Standards — Postpartum Complications; ACOG Guidelines" },
          { text: "Newborn with central cyanosis, gasping respirations, and HR below 60 at 5 minutes of age → ABNORMAL", correct: true, critical: false, explanation: "This newborn is critically ill. Central cyanosis, gasping, and HR <60 at 5 minutes despite PPV indicates the need for chest compressions (3:1 ratio with ventilations) and emergency transport.", guideline_ref: "NRP 8th Edition; AHA 2020 Neonatal Resuscitation Algorithm" }
        ]
      }
    ]
  },

  // ─── 7. Environmental — Heat Emergency ───
  {
    id: "nat-env-01",
    title: "Exertional Heat Stroke",
    dispatch: "19-year-old male, collapsed at outdoor concert, confused",
    category: "Environmental",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 19, sex: "M", cc: "Altered mental status after collapse at outdoor event" },
    scene: "You respond to an outdoor summer music festival on a day with an ambient temperature of 98°F and high humidity. A 19-year-old male was found by security after collapsing in the crowd. He is confused and combative when stimulated. His skin is hot and flushed. Friends state he has been in the sun for over 5 hours, dancing, and drinking alcohol but very little water. He vomited once before collapsing.",
    history: { pmh: "No significant medical history", meds: "None reported, friends state he may have taken MDMA (ecstasy)", allergies: "No known allergies" },
    vitals: { hr: 132, bp: "98/62", rr: 28, spo2: 96, gcs: 12, temp: "105.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on this presentation, which condition does this patient MOST likely have, and what is the critical distinguishing feature from a less severe heat illness?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient's core temperature is 105.2°F. He is confused, combative, and unable to answer questions appropriately. His skin is hot and flushed. He has tachycardia, hypotension, and tachypnea.",
        vitals_update: {},
        clinical_pearl: "The critical distinction: heat STROKE has altered mental status; heat EXHAUSTION does not. A patient with a heat-related illness who is confused, combative, seizing, or unconscious has heat stroke until proven otherwise. Temperature >104°F (40°C) with altered mental status = heat stroke = true emergency with up to 80% mortality if untreated.",
        options: [
          { text: "Heat stroke — distinguished from heat exhaustion by the presence of altered mental status and core temperature above 104°F (40°C)", correct: true, critical: false, explanation: "Heat stroke is defined by core temperature >104°F (40°C) with CNS dysfunction (confusion, combativeness, seizures, coma). This is a life-threatening emergency. Heat exhaustion preserves normal mental status.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Heat Illness Guidelines" },
          { text: "Heat exhaustion — the vomiting, tachycardia, and hypotension indicate severe dehydration rather than true heat stroke", correct: false, critical: true, explanation: "This patient has altered mental status (GCS 12, confused, combative) and a temperature of 105.2°F — this is heat STROKE, not exhaustion. Misclassifying heat stroke as exhaustion delays critical cooling and can be fatal.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies" },
          { text: "Sympathomimetic toxidrome from MDMA — the altered mental status is from the drug, not the heat", correct: false, critical: false, explanation: "MDMA can cause hyperthermia and may be contributory, but the treatment is the same — aggressive cooling. Regardless of cause, a temperature of 105.2°F with altered mental status requires immediate cooling. Don't delay treatment debating the cause.", guideline_ref: "2021 National EMS Education Standards — Toxicology/Environmental" },
          { text: "Hyponatremia from excessive water intake — this is more common than heat stroke at outdoor events", correct: false, critical: false, explanation: "The history describes minimal water intake and alcohol/possible MDMA use, making hyponatremia unlikely. Additionally, hyponatremia does not typically cause core temperatures of 105°F.", guideline_ref: "Wilderness Medical Society Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following cooling interventions in order of priority for this heat stroke patient:",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have identified this as heat stroke. Rapid cooling is the definitive treatment — every minute of delay increases organ damage and mortality.",
        vitals_update: {},
        clinical_pearl: "The goal is to reduce core temperature to below 104°F (40°C) as rapidly as possible. Cold water immersion is the gold standard (cooling rate ~0.2°C/min). If immersion isn't possible, apply ice packs to the neck, axillae, and groin (areas of high blood flow), and wet the entire body with cool water while fanning. Do NOT administer antipyretics (acetaminophen/ibuprofen) — they don't work for heat stroke and may worsen liver/kidney injury.",
        options: [
          { text: "Remove the patient from the hot environment to a shaded or air-conditioned area", correct: true, critical: false, explanation: "First step — stop the heat exposure. Move to shade or a cooled ambulance. This alone won't suffice but prevents further heat gain.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies" },
          { text: "Remove excess clothing and begin cold water immersion if available, or apply ice packs to neck, axillae, and groin", correct: true, critical: false, explanation: "Aggressive cooling is the definitive treatment. Cold water immersion is the gold standard. If unavailable, ice packs to the neck, axillae, and groin target high-flow vascular areas for maximum heat exchange.", guideline_ref: "Wilderness Medical Society Heat Illness Guidelines; NAEMSP Position on Heat Stroke" },
          { text: "Wet the patient's entire body with cool water and fan continuously to maximize evaporative cooling", correct: true, critical: false, explanation: "Evaporative cooling (wetting + fanning) is effective and can be done simultaneously with ice packs. This creates additional cooling via convection and evaporation.", guideline_ref: "2021 National EMS Education Standards — Environmental Cooling Methods" },
          { text: "Administer IV normal saline (if scope allows) for volume replacement — avoid ice-cold fluids that may cause shivering", correct: true, critical: false, explanation: "IV fluids address dehydration and support blood pressure. Room temperature or cool fluids are appropriate. Some evidence supports cold IV fluids for internal cooling, though shivering must be monitored as it generates heat.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Guidelines" },
          { text: "Initiate rapid transport to the hospital while continuing active cooling measures en route", correct: true, critical: false, explanation: "Heat stroke requires hospital-based monitoring, lab evaluation (rhabdomyolysis, coagulopathy, organ damage), and potentially more aggressive interventions. Never delay cooling for transport — do both simultaneously.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Match each heat illness classification to its characteristic clinical findings:",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Understanding the spectrum of heat-related illness helps providers accurately assess severity and determine appropriate treatment urgency.",
        vitals_update: {},
        clinical_pearl: "Heat illness exists on a spectrum, but heat stroke is NOT simply 'severe heat exhaustion' — it is a distinct pathological state involving thermoregulatory failure and systemic inflammatory response. Progression from exhaustion to stroke can occur rapidly, especially with continued exertion. When in doubt, treat for the more severe condition.",
        options: [
          { text: "Heat cramps → Painful muscle spasms during or after exertion in heat; normal mental status; normal to mildly elevated core temperature; treated with rest, cooling, and oral electrolyte replacement", correct: true, critical: false, explanation: "Heat cramps are the mildest heat illness. Caused by electrolyte losses in sweat, particularly sodium. Mental status is completely normal. Stretching, rest, and oral rehydration are usually sufficient.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies" },
          { text: "Heat exhaustion → Heavy sweating, weakness, nausea, headache, and dizziness; NORMAL mental status; core temperature typically 100–104°F; skin may be cool and clammy; responds to rest, cooling, and rehydration", correct: true, critical: false, explanation: "Heat exhaustion is moderate heat illness with systemic symptoms but preserved mental status. This is the critical distinction from heat stroke. These patients can deteriorate to heat stroke if not cooled.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Guidelines" },
          { text: "Exertional heat stroke → Core temperature >104°F (40°C) with ALTERED mental status (confusion, combativeness, seizures, coma); hot skin (may still be sweating); tachycardia; potential for multi-organ failure; requires immediate aggressive cooling", correct: true, critical: false, explanation: "Heat stroke is a true emergency defined by hyperthermia >104°F with CNS dysfunction. Contrary to classic teaching, exertional heat stroke patients often ARE still sweating. Do not rely on dry skin to diagnose heat stroke.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Heat Illness Guidelines" },
          { text: "Classic (non-exertional) heat stroke → Develops over days in elderly/chronically ill during heat waves; hot, dry skin typical; altered mental status; core temperature >104°F; high mortality without cooling", correct: true, critical: false, explanation: "Classic heat stroke affects the elderly, chronically ill, and those without air conditioning during prolonged heat waves. Unlike exertional, skin is typically dry. Same treatment: aggressive, rapid cooling.", guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; CDC Heat-Related Illness Guidelines" }
        ]
      }
    ]
  }
];
