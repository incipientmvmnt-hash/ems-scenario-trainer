const BATCH16 = [
  // ========== CARDIOLOGY ==========
  {
    id: "nat-card-10",
    title: "Aortic Dissection",
    dispatch: "55-year-old male with sudden severe chest pain",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 55, sex: "Male", cc: "Sudden tearing chest pain radiating to back" },
    scene: "Patient seated in recliner at home, diaphoretic and visibly distressed. Spouse states pain started abruptly 40 minutes ago while lifting furniture.",
    history: {
      pmh: "Hypertension (poorly controlled), Marfan syndrome, smoker",
      meds: "Lisinopril 20mg (admits non-compliance)",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 110, bp: "210/118 (R arm) / 158/90 (L arm)", rr: 24, spo2: 96, gcs: 15, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "You obtain bilateral blood pressures and find a >20 mmHg difference between arms. Combined with the acute tearing pain radiating to the back in a patient with Marfan syndrome, which condition should you most strongly suspect?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Acute coronary syndrome", correct: false },
          { text: "Aortic dissection", correct: true },
          { text: "Pulmonary embolism", correct: false },
          { text: "Tension pneumothorax", correct: false }
        ],
        explanation: "Acute tearing/ripping chest pain radiating to the back, blood pressure differential >20 mmHg between arms, and connective tissue disorder (Marfan syndrome) are classic indicators of aortic dissection.",
        guideline_ref: "AHA 2010 Guidelines for Diagnosis and Management of Aortic Dissection",
        clinical_pearl: "A BP differential >20 mmHg between arms is a hallmark finding. Always obtain bilateral BPs in patients with acute-onset tearing chest/back pain."
      },
      {
        phase: "treatment",
        prompt: "What is the priority management strategy for this patient in the prehospital setting?",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Establish large-bore IV access",
          "Administer IV analgesic for pain control",
          "Begin anti-impulse therapy to lower HR and BP (e.g., esmolol or labetalol per protocol)",
          "Rapid transport to a facility with cardiothoracic surgery capability"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "IV access is established first, followed by pain management (which also helps reduce sympathetic drive), then targeted heart rate and blood pressure reduction. Rapid transport to a definitive surgical center is critical.",
        guideline_ref: "AHA/ACC 2022 Aortic Disease Guideline — Acute Type A/B Dissection Management",
        clinical_pearl: "Target HR <60 and SBP 100-120 mmHg. Always use beta-blockers BEFORE vasodilators — reducing HR first prevents reflex tachycardia that increases aortic shear stress."
      },
      {
        phase: "treatment",
        prompt: "Which of the following interventions should be AVOIDED in a suspected aortic dissection? Select all that apply.",
        type: "mr",
        selectCount: 2,
        level_filter: "Paramedic",
        options: [
          { text: "Aspirin administration", correct: true },
          { text: "IV normal saline (cautious bolus for hypotension)", correct: false },
          { text: "Fibrinolytic therapy", correct: true },
          { text: "12-lead ECG acquisition", correct: false },
          { text: "IV opioid analgesics", correct: false }
        ],
        explanation: "Aspirin and fibrinolytics are contraindicated because dissection involves a tear in the vessel wall — anticoagulation/thrombolysis can worsen hemorrhage. Dissection can mimic STEMI on ECG (if it involves coronary ostia), making this a dangerous pitfall.",
        guideline_ref: "AHA 2010 Thoracic Aortic Disease Guidelines",
        clinical_pearl: "Aortic dissection can cause ST elevation by occluding a coronary ostium. Giving thrombolytics to a dissection patient misdiagnosed as STEMI is often fatal. Always consider dissection before initiating fibrinolytic therapy.",
        critical: true
      }
    ]
  },
  {
    id: "nat-card-11",
    title: "Acute Pericarditis",
    dispatch: "28-year-old male with chest pain, worse with breathing",
    category: "Cardiology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 28, sex: "Male", cc: "Sharp chest pain worse with deep breathing and lying flat" },
    scene: "Patient sitting upright and leaning forward on the edge of his bed in a college apartment. States he had a 'bad cold' last week that resolved.",
    history: {
      pmh: "Recent viral URI one week ago, no cardiac history",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 98, bp: "128/78", rr: 20, spo2: 98, gcs: 15, temp: "100.1°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient reports his chest pain improves when he sits up and leans forward, and worsens when lying supine. On auscultation you hear a scratchy, high-pitched sound with each heartbeat. Categorize the following findings as consistent with pericarditis versus acute coronary syndrome.",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        categories: ["Pericarditis", "Acute Coronary Syndrome"],
        items: [
          "Sharp, pleuritic chest pain",
          "Crushing substernal pressure",
          "Pain relieved by leaning forward",
          "Pain radiating to left arm/jaw",
          "Friction rub on auscultation",
          "Diffuse ST elevation on 12-lead",
          "ST elevation in a specific coronary distribution",
          "Recent viral illness"
        ],
        correctCategories: [
          "Pericarditis",
          "Acute Coronary Syndrome",
          "Pericarditis",
          "Acute Coronary Syndrome",
          "Pericarditis",
          "Pericarditis",
          "Acute Coronary Syndrome",
          "Pericarditis"
        ],
        explanation: "Pericarditis presents with sharp/pleuritic pain relieved by leaning forward, friction rub, diffuse (not territorial) ST elevation, and often follows a viral illness. ACS typically presents with pressure-type pain radiating to arm/jaw with focal ST changes.",
        guideline_ref: "ESC 2015 Guidelines for Diagnosis and Management of Pericardial Diseases / AHA Chest Pain Evaluation",
        clinical_pearl: "The pericardial friction rub is best heard with the diaphragm of the stethoscope at the left lower sternal border with the patient leaning forward. It may be transient — if you suspect pericarditis, listen in multiple positions."
      },
      {
        phase: "assessment",
        prompt: "You acquire a 12-lead ECG. Match each ECG finding to the condition it most likely represents.",
        type: "table",
        level_filter: "Paramedic",
        rows: [
          "Diffuse concave-up ST elevation with PR depression, no reciprocal changes",
          "ST elevation in V1-V4 with reciprocal depression in II, III, aVF",
          "New left bundle branch block with chest pain",
          "Diffuse low voltage with electrical alternans"
        ],
        columns: ["Pericarditis", "Anterior STEMI", "STEMI Equivalent", "Pericardial Effusion/Tamponade"],
        correctCells: [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],
        explanation: "Pericarditis shows diffuse ST elevation without reciprocal changes and PR depression. Anterior STEMI shows territorial ST elevation in V1-V4 with reciprocal inferior depression. New LBBB with chest pain is treated as a STEMI equivalent. Low voltage with electrical alternans (beat-to-beat QRS amplitude variation) suggests large pericardial effusion or tamponade.",
        guideline_ref: "AHA Scientific Statement on ECG Interpretation / ESC 2015 Pericardial Disease Guidelines",
        clinical_pearl: "PR depression in lead II with PR elevation in aVR is nearly pathognomonic for pericarditis. This finding helps differentiate from STEMI, which has territorial ST changes with reciprocal depression."
      },
      {
        phase: "treatment",
        prompt: "What is the appropriate prehospital management for this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Position of comfort, supportive care, transport for evaluation — avoid ASA if pericarditis is suspected prehospitally", correct: true },
          { text: "Administer nitroglycerin for chest pain", correct: false },
          { text: "Activate the cardiac catheterization lab", correct: false },
          { text: "Apply a 12-lead and administer aspirin 324mg per ACS protocol", correct: false }
        ],
        narrative: "The patient remains hemodynamically stable with unchanged vitals.",
        explanation: "While pericarditis is ultimately treated with NSAIDs/colchicine in the ED, the prehospital role is supportive care, position of comfort, and transport. Cath lab activation would be inappropriate. If pericarditis is strongly suspected (classic history, friction rub, diffuse ECG changes), unnecessarily activating STEMI protocols wastes resources.",
        guideline_ref: "NAEMSP Position Statement on Prehospital Chest Pain Evaluation",
        clinical_pearl: "Young patients with pleuritic chest pain after a viral illness are much more likely to have pericarditis than ACS. However, always obtain a 12-lead — the ECG pattern is your strongest prehospital differentiator."
      }
    ]
  },

  // ========== BEHAVIORAL/PSYCHIATRIC ==========
  {
    id: "nat-beh-08",
    title: "Autism Spectrum Behavioral Crisis",
    dispatch: "16-year-old male, behavioral emergency, family requesting assistance",
    category: "Behavioral/Psychiatric",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 16, sex: "Male", cc: "Severe agitation and self-injurious behavior" },
    scene: "Patient is in his bedroom, banging his head against the wall repeatedly. Mother is present, tearful, and states he became overwhelmed after a fire alarm went off at school today. The room has dim lighting and noise-canceling headphones on the desk. Patient is non-verbal.",
    history: {
      pmh: "Autism spectrum disorder (Level 3, non-verbal), intellectual disability, seizure disorder",
      meds: "Levetiracetam 500mg BID, risperidone 1mg BID",
      allergies: "Latex"
    },
    vitals: { hr: 128, bp: "138/84", rr: 22, spo2: 99, gcs: "10 (E3 V2 M5 — baseline V2 per mother)", temp: "98.8°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive to find a non-verbal autistic teenager hitting his head against the wall. His mother is present. What is the most important initial approach?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Immediately physically restrain the patient to prevent self-harm", correct: false },
          { text: "Reduce environmental stimuli, speak to the caregiver to understand triggers and communication methods, approach slowly", correct: true },
          { text: "Administer sedation immediately", correct: false },
          { text: "Call for law enforcement to assist with restraint", correct: false }
        ],
        explanation: "Individuals with ASD in crisis respond best to reduced stimulation, familiar people, and predictable interactions. Rushing to restrain or sedate escalates distress. The caregiver is your best resource for communication strategies and baseline behavior.",
        guideline_ref: "NAEMSP Position Statement on EMS Response to Patients with Behavioral Emergencies / Autism Society EMS Guidelines",
        clinical_pearl: "Always ask caregivers: 'What works to calm them?' and 'What is their baseline?' Many autistic individuals have communication boards, apps, or specific de-escalation routines. The caregiver is your interpreter — use them."
      },
      {
        phase: "assessment",
        prompt: "The mother helps calm the patient using his weighted blanket and noise-canceling headphones. He stops hitting his head but you notice a 4cm hematoma on his forehead. Place the following assessment priorities in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Assess the head injury for signs of significant trauma (pupil reactivity, palpation for deformity)",
          "Obtain baseline vitals using methods tolerated by the patient (caregiver guidance)",
          "Determine if current GCS represents a change from baseline (ask caregiver)",
          "Assess for seizure activity given history of seizure disorder"
        ],
        correctOrder: [0, 2, 3, 1],
        explanation: "The visible head injury takes priority — assess for serious trauma first. Then clarify GCS baseline with the caregiver (a GCS of 10 may be normal for this patient). Seizure risk is relevant given the history and head trauma. Vitals collection may require adaptation (e.g., patience with BP cuff, caregiver assistance).",
        guideline_ref: "NAEMSP Clinical Guidelines — Special Populations / ACEP Policy on Behavioral Emergencies",
        clinical_pearl: "In patients with developmental disabilities, never assume altered mental status is behavioral. Always compare to their baseline — ask the caregiver 'Is this how they normally are?' A new neurological deficit is an emergency regardless of psychiatric history."
      },
      {
        phase: "treatment",
        prompt: "During transport preparation, the patient becomes agitated again when you bring in the stretcher. Which strategy is most appropriate?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Have the mother ride in the ambulance and allow the patient to see/touch the stretcher before loading; move slowly and narrate actions", correct: true },
          { text: "Quickly load the patient to minimize the duration of distress", correct: false },
          { text: "Administer IM ketamine for procedural sedation", correct: false },
          { text: "Allow the patient to remain home since he has calmed down", correct: false }
        ],
        explanation: "Gradual exposure, caregiver presence, and predictability reduce distress in autistic patients. Rushing increases agitation. Given the head injury, transport for evaluation is warranted. Chemical sedation should be reserved for cases where safety cannot otherwise be maintained.",
        guideline_ref: "NAEMSP/ACEP Guidelines on Transport of Special Needs Populations",
        clinical_pearl: "Many ASD patients have extreme tactile sensitivity. Ask about sensory preferences — some cannot tolerate straps, certain fabrics, or bright ambulance lights. Small accommodations (dimming lights, loosening straps slightly, allowing a comfort object) dramatically improve transport success."
      }
    ]
  },
  {
    id: "nat-beh-09",
    title: "Grief Crisis and Death Notification",
    dispatch: "36-year-old female, emotional crisis, possibly hyperventilating",
    category: "Behavioral/Psychiatric",
    difficulty: "Easy",
    level_min: "EMR",
    patient: { age: 36, sex: "Female", cc: "Hyperventilation and inconsolable crying after learning of spouse's death" },
    scene: "Patient is on the kitchen floor, sobbing uncontrollably. Police officers are present — they delivered notification of her husband's death in a motor vehicle collision 15 minutes ago. Two children (ages 4 and 7) are in the next room with a neighbor.",
    history: {
      pmh: "Generalized anxiety disorder",
      meds: "Sertraline 100mg daily",
      allergies: "NKDA"
    },
    vitals: { hr: 118, bp: "148/92", rr: 28, spo2: 99, gcs: 15, temp: "98.6°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive to a grief crisis after death notification. Which of the following are appropriate initial actions? Select all that apply.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Introduce yourself calmly and sit at the patient's level", correct: true },
          { text: "Immediately begin coaching her breathing to correct hyperventilation", correct: false },
          { text: "Allow silence and emotional expression without trying to 'fix' the grief", correct: true },
          { text: "Tell her 'I know how you feel' to build rapport", correct: false },
          { text: "Ensure the children are being cared for and are not witnessing the acute crisis", correct: true }
        ],
        explanation: "Acute grief is a normal response, not a psychiatric emergency. Sitting at the patient's level, allowing emotional expression, and ensuring dependent children are cared for are appropriate. Avoid minimizing phrases like 'I know how you feel.' Breathing coaching can come later once rapport is established.",
        guideline_ref: "NAEMSP Wellness and Resilience Guidelines / ICISF Crisis Intervention Model",
        clinical_pearl: "Hyperventilation during acute grief is a stress response, not a respiratory emergency. Resist the urge to 'treat' the grief — your role is compassionate presence and medical assessment. Carpopedal spasm from hyperventilation resolves when the acute distress eases."
      },
      {
        phase: "assessment",
        prompt: "The patient's hyperventilation produces tingling in her hands and perioral numbness. Her SpO2 is 99%. What is the most appropriate interpretation and action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Respiratory alkalosis from hyperventilation — coach calm breathing, reassure, monitor", correct: true },
          { text: "Impending respiratory failure — apply high-flow oxygen via non-rebreather", correct: false },
          { text: "Stroke symptoms — activate stroke alert", correct: false },
          { text: "Allergic reaction — administer epinephrine", correct: false }
        ],
        explanation: "Perioral and extremity tingling/numbness with hyperventilation and normal SpO2 is classic respiratory alkalosis from anxiety/grief-driven tachypnea. Gentle coaching ('breathe with me') is appropriate. High-flow O2 is unnecessary and may worsen alkalosis.",
        guideline_ref: "NAEMSP Clinical Guidelines on Respiratory Assessment / AHA BLS/ACLS SpO2 Guidelines",
        clinical_pearl: "Never use a paper bag for hyperventilation — it's an outdated practice that can cause hypoxia if an organic cause is missed. Instead, use calm verbal coaching: 'Try to breathe with me — in through your nose for 4 seconds, out slowly.'"
      },
      {
        phase: "treatment",
        prompt: "After 10 minutes, the patient's breathing has improved (RR 18) but she asks you to 'just give her something to calm down.' She has a history of anxiety and takes sertraline. What is the most appropriate response?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Explain that acute grief is a normal response, continue supportive care, offer transport to the ED where further evaluation and resources can be provided", correct: true },
          { text: "Administer a benzodiazepine for acute anxiety", correct: false },
          { text: "Have her take an extra dose of her sertraline", correct: false },
          { text: "Tell her she doesn't need medical care since her vitals are normalizing", correct: false }
        ],
        explanation: "Acute grief does not warrant prehospital sedation. Validate her distress, provide supportive care, and offer transport where social work, chaplain services, and ongoing support can be arranged. Never dismiss the patient or advise self-medication.",
        guideline_ref: "NAEMSP Position Statement on Behavioral Emergencies / Crisis Intervention Standards",
        clinical_pearl: "Offer concrete help: 'Is there someone I can call for you?' 'Would you like us to take you to the hospital where they can help connect you with support?' Having actionable options helps patients in crisis regain a sense of agency."
      }
    ]
  },
  {
    id: "nat-beh-10",
    title: "Alcohol Withdrawal / Delirium Tremens",
    dispatch: "48-year-old male, seizure, altered mental status",
    category: "Behavioral/Psychiatric",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 48, sex: "Male", cc: "Witnessed seizure, confusion, tremors" },
    scene: "Patient is on the floor of a halfway house. Staff reports he was admitted 3 days ago after completing a 5-day jail stay. He has been increasingly agitated, tremulous, and confused over the past 12 hours. He just had a witnessed generalized tonic-clonic seizure lasting approximately 90 seconds.",
    history: {
      pmh: "Alcohol use disorder (severe — daily consumption of 750mL liquor for 15+ years), prior alcohol withdrawal seizures x2, chronic liver disease, hypertension",
      meds: "Unknown — staff believes he was not given any medications during jail stay",
      allergies: "Phenytoin"
    },
    vitals: { hr: 132, bp: "174/102", rr: 22, spo2: 94, gcs: 12, temp: "101.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on the timeline (last drink approximately 3 days ago), witnessed seizure, autonomic instability, and altered mental status, what stage of alcohol withdrawal is this patient most likely experiencing?",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Minor withdrawal (6-24h): tremor, anxiety, insomnia", correct: false, position: "left" },
          { text: "Alcoholic hallucinosis (12-48h): visual/auditory hallucinations, intact sensorium", correct: false, position: "center-left" },
          { text: "Withdrawal seizures (12-48h): generalized tonic-clonic seizures", correct: false, position: "center-right" },
          { text: "Delirium tremens (48-96h): delirium, autonomic instability, seizures, hyperthermia", correct: true, position: "right" }
        ],
        explanation: "At 72+ hours after last drink, with delirium (GCS 12, confusion), autonomic instability (tachycardia, hypertension, hyperthermia), and seizures, this patient meets criteria for delirium tremens — the most severe and life-threatening form of alcohol withdrawal with 5-15% mortality if untreated.",
        guideline_ref: "ASAM 2020 Clinical Practice Guideline on Alcohol Withdrawal Management",
        clinical_pearl: "DTs has a mortality rate of up to 37% if untreated. The classic triad is delirium + autonomic hyperactivity + seizures. Fever in DTs is an ominous sign — temp >104°F is associated with significantly higher mortality."
      },
      {
        phase: "treatment",
        prompt: "Categorize the following interventions as appropriate or inappropriate for this patient.",
        type: "categorize",
        level_filter: "Paramedic",
        categories: ["Appropriate", "Inappropriate"],
        items: [
          "IV benzodiazepine (diazepam or midazolam)",
          "Dextrose-containing IV fluid (D5NS) after checking glucose",
          "Thiamine 100mg IV before glucose administration",
          "Physical restraints as the sole management strategy",
          "Phenytoin for seizure prophylaxis",
          "Continuous cardiac monitoring",
          "Active cooling if temp exceeds 104°F"
        ],
        correctCategories: [
          "Appropriate",
          "Appropriate",
          "Appropriate",
          "Inappropriate",
          "Inappropriate",
          "Appropriate",
          "Appropriate"
        ],
        explanation: "Benzodiazepines are the cornerstone of DTs treatment. Thiamine should precede glucose to prevent Wernicke encephalopathy. Phenytoin is ineffective for alcohol withdrawal seizures. Physical restraints alone without pharmacological management increase mortality (rhabdomyolysis, hyperthermia). Cardiac monitoring is essential due to dysrhythmia risk.",
        guideline_ref: "ASAM 2020 Alcohol Withdrawal Guidelines / ACEP Clinical Policy on Seizures",
        clinical_pearl: "Always give thiamine BEFORE glucose in suspected alcoholics. Glucose metabolism consumes thiamine — administering glucose first can precipitate acute Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia), which can become permanent (Korsakoff syndrome).",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "After administering midazolam 5mg IV, the patient's seizure activity has stopped but he remains agitated and tachycardic (HR 124). His temperature is now 102.4°F. What is the most appropriate next step?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Repeat benzodiazepine dosing, continue monitoring, rapid transport — DTs requires aggressive titration and ICU-level care", correct: true },
          { text: "Withhold further benzodiazepines since the seizure stopped", correct: false },
          { text: "Administer haloperidol as the primary agent for agitation", correct: false },
          { text: "Administer phenobarbital as a first-line agent", correct: false }
        ],
        explanation: "DTs requires aggressive benzodiazepine titration — often far exceeding standard dosing. A single dose is rarely sufficient. Haloperidol lowers the seizure threshold and should not be used as a primary agent. These patients need ICU admission. Transport should not be delayed.",
        guideline_ref: "ASAM 2020 Clinical Practice Guideline / NAEMSP Sedation Guidelines",
        clinical_pearl: "Patients in DTs may require massive benzodiazepine doses — sometimes hundreds of milligrams of diazepam equivalent. Do not be afraid to re-dose. Under-treatment kills more DTs patients than over-sedation. If your patient is still agitated, they need more medication."
      }
    ]
  },

  // ========== TRAUMA ==========
  {
    id: "nat-tra-13",
    title: "Facial / Maxillofacial Trauma with Airway Compromise",
    dispatch: "22-year-old male, assault victim, facial injuries, difficulty breathing",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 22, sex: "Male", cc: "Facial trauma, bleeding from mouth, difficulty breathing" },
    scene: "Patient found sitting on a curb outside a bar, leaning forward and spitting blood. Bystanders report he was struck in the face multiple times and kicked while on the ground. Significant facial swelling and deformity visible. Blood and broken teeth on the ground. Patient is conscious but speaking in garbled voice.",
    history: {
      pmh: "None",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 112, bp: "144/88", rr: 26, spo2: 91, gcs: 13, temp: "98.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient has massive facial swelling, bilateral periorbital ecchymosis, blood pooling in the oropharynx, several missing teeth, and midface instability on palpation. SpO2 is 91%. What is the MOST immediate life threat to address?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Airway compromise from blood, edema, and displaced tissue/teeth", correct: true },
          { text: "Cervical spine injury", correct: false },
          { text: "Traumatic brain injury", correct: false },
          { text: "Hemorrhagic shock from facial bleeding", correct: false }
        ],
        explanation: "While all listed concerns are valid, the immediate life threat is airway compromise. Massive facial trauma causes airway obstruction through hemorrhage into the oropharynx, edema, displaced fracture segments, avulsed teeth, and loss of structural support for the tongue. The SpO2 of 91% confirms active compromise.",
        guideline_ref: "ATLS 10th Edition — Maxillofacial Trauma Chapter / NAEMSP Airway Management Guidelines",
        clinical_pearl: "In severe midface (Le Fort) fractures, the entire midface can displace posteriorly, pushing the soft palate against the posterior pharyngeal wall and causing complete obstruction. Sitting the patient upright and allowing them to lean forward to drain blood is often more effective than supine positioning.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "Place the following airway management steps in the correct order for this patient.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Suction blood and debris from the oropharynx",
          "Manually remove visible loose teeth and foreign bodies",
          "Position the patient leaning forward to allow drainage (if spinal injury not suspected) or log-roll to lateral if immobilized",
          "Prepare for advanced airway management — have surgical/cricothyrotomy kit immediately available",
          "Attempt orotracheal intubation if skills and equipment allow (expect difficult airway)"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "Clear the airway of blood and debris first. Remove loose fragments that could be aspirated. Position to facilitate drainage. In severe maxillofacial trauma, always prepare for a surgical airway BEFORE attempting intubation — these are predicted difficult airways where failed intubation is common.",
        guideline_ref: "ATLS 10th Edition / Difficult Airway Society 2015 Guidelines / NAEMSP Prehospital Airway Guidelines",
        clinical_pearl: "In maxillofacial trauma, have your cricothyrotomy kit OPEN and READY before your first intubation attempt. Distorted anatomy, blood, and swelling make these among the most difficult airways in prehospital care. The backup plan must be ready before you need it."
      },
      {
        phase: "treatment",
        prompt: "After suctioning and positioning, the patient's SpO2 improves to 94% with high-flow oxygen. You note continued bleeding from the nose and mouth. Which interventions are appropriate for hemorrhage control in maxillofacial trauma? Select all that apply.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Direct pressure with gauze to actively bleeding facial lacerations", correct: true },
          { text: "Posterior nasal packing or epistaxis balloon/catheter for uncontrolled nasal hemorrhage", correct: true },
          { text: "Applying a tourniquet to the neck", correct: false },
          { text: "Having the patient lean forward and spit rather than swallow blood", correct: true },
          { text: "Bilateral carotid artery compression", correct: false }
        ],
        explanation: "Direct pressure controls external hemorrhage. Posterior nasal packing addresses posterior epistaxis common in midface fractures. Having the patient spit blood prevents swallowing (which causes nausea/vomiting, aspiration risk, and masks hemorrhage volume). Neck tourniquets and carotid compression are never appropriate.",
        guideline_ref: "ATLS 10th Edition / TCCC Guidelines on Hemorrhage Control / NAEMSP Trauma Guidelines",
        clinical_pearl: "Swallowed blood is your hidden enemy — patients can swallow 500mL+ of blood, masking significant hemorrhage. It also causes gastric distension and vomiting, creating aspiration risk. Always have the patient spit blood into a container so you can estimate volume."
      },
      {
        phase: "transport",
        prompt: "What is the most appropriate transport decision for this patient?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Transport to the nearest Level I or II trauma center", correct: true },
          { text: "Transport to the nearest community hospital ED", correct: false },
          { text: "Transport to a dental surgery center", correct: false },
          { text: "Allow the patient to refuse transport since his SpO2 improved", correct: false }
        ],
        explanation: "Severe maxillofacial trauma with airway compromise, midface instability, and ongoing hemorrhage requires a trauma center with oral/maxillofacial surgery, ENT, and potentially neurosurgery capability. These patients are at risk for delayed airway deterioration as edema progresses.",
        guideline_ref: "ACS-COT Field Triage Decision Scheme / CDC Guidelines for Field Triage of Injured Patients",
        clinical_pearl: "Facial edema WORSENS over the first 24-48 hours. A patient with a manageable airway now may have complete obstruction in 2-4 hours as swelling progresses. Always warn the receiving facility that the airway may deteriorate — early planning for definitive airway management saves lives."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { BATCH16 };
