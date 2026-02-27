const BATCH15 = [
  // ─── 1. Meningitis (Pediatric) ───
  {
    id: "nat-med-11",
    title: "Pediatric Meningitis",
    dispatch: "3-year-old with fever and altered behavior",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 3, sex: "M", cc: "Fever and irritability" },
    scene: "Daycare center; child lying on a cot, crying inconsolably. Staff report he has been 'not himself' for several hours.",
    history: {
      pmh: "Up to date on vaccinations, no chronic illnesses",
      meds: "Children's acetaminophen given 2 hours ago by staff",
      allergies: "None known"
    },
    vitals: { hr: 168, bp: "82/50", rr: 34, spo2: 97, gcs: 12, temp: "39.8°C (103.6°F)" },
    questions: [
      {
        phase: "assessment",
        prompt: "During your assessment, you note the child cries louder when picked up and resists neck flexion. Which of the following assessment findings would MOST increase your suspicion for a serious central nervous system infection?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Bulging fontanelle", correct: false },
          { text: "Non-blanching petechial rash on the trunk and extremities", correct: true },
          { text: "Bilateral otitis media", correct: false },
          { text: "Mild rhinorrhea and cough", correct: false }
        ],
        explanation: "A non-blanching petechial or purpuric rash in a febrile child with nuchal rigidity is highly suggestive of meningococcemia, a life-threatening condition requiring emergent transport and early notification of the receiving facility.",
        guideline_ref: "AHA/AAP PALS Guidelines; NAEMSP Pediatric Prehospital Care Guidelines",
        clinical_pearl: "Petechiae that do not blanch under pressure (glass test) in a febrile child should be treated as meningococcemia until proven otherwise. Note: the anterior fontanelle typically closes by 18 months, so it would not be assessable in a 3-year-old.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "Place the following prehospital interventions in the correct order of priority for this patient.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Don appropriate PPE including mask",
          "Assess and manage airway with positioning",
          "Establish vascular access (IV/IO)",
          "Administer isotonic crystalloid fluid bolus 20 mL/kg",
          "Initiate rapid transport with early hospital notification"
        ],
        correctOrder: [
          "Don appropriate PPE including mask",
          "Assess and manage airway with positioning",
          "Establish vascular access (IV/IO)",
          "Administer isotonic crystalloid fluid bolus 20 mL/kg",
          "Initiate rapid transport with early hospital notification"
        ],
        explanation: "Provider safety comes first with suspected meningitis (droplet precautions). Airway management follows, then vascular access for fluid resuscitation of the hypotensive child, and rapid transport with early notification so the ED can prepare antibiotics.",
        guideline_ref: "NAEMSP Prehospital Pediatric Sepsis Guidelines; AHA PALS 2020",
        clinical_pearl: "Prehospital antibiotics for suspected meningitis are not standard in most US EMS protocols, but early hospital notification allows the ED to have antibiotics drawn and ready on arrival — this can save critical minutes."
      },
      {
        phase: "transport",
        prompt: "Which of the following are appropriate actions during transport of this pediatric patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Maintain droplet precautions throughout transport", correct: true },
          { text: "Allow the parent to hold the child to reduce agitation", correct: true },
          { text: "Perform serial neurological assessments including GCS", correct: true },
          { text: "Administer prophylactic dexamethasone IV", correct: false },
          { text: "Apply a cervical collar due to neck stiffness", correct: false }
        ],
        explanation: "Droplet precautions protect providers, parental comfort reduces agitation and improves assessment reliability, and serial neuro checks detect deterioration. Dexamethasone is a hospital intervention, and cervical collars are not indicated for nuchal rigidity from infection.",
        guideline_ref: "CDC Meningitis Infection Control Guidelines; PALS 2020",
        clinical_pearl: "Nuchal rigidity from meningeal irritation is a neurological sign — it is NOT a spinal injury. Applying a cervical collar is inappropriate and may worsen the child's agitation and mask clinical changes."
      }
    ]
  },

  // ─── 2. Status Epilepticus ───
  {
    id: "nat-med-12",
    title: "Status Epilepticus",
    dispatch: "42-year-old male seizing at a restaurant",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 42, sex: "M", cc: "Witnessed seizure activity" },
    scene: "Restaurant dining area; patient on the floor between tables, actively seizing with tonic-clonic movements. Bystanders state the seizure has been ongoing for approximately 8 minutes. A medical alert bracelet reads 'EPILEPSY'.",
    history: {
      pmh: "Epilepsy diagnosed age 16, last seizure 6 months ago",
      meds: "Unknown — wallet contains pharmacy card",
      allergies: "Unknown"
    },
    vitals: { hr: 124, bp: "162/98", rr: 8, spo2: 88, gcs: 3, temp: "37.9°C (100.2°F)" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive to find the patient in active tonic-clonic seizure on a hard floor surrounded by furniture. What is your FIRST action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Restrain the patient to prevent injury", correct: false },
          { text: "Insert an oral airway to protect the tongue", correct: false },
          { text: "Clear the surrounding area of hazards and protect the patient's head", correct: true },
          { text: "Immediately roll the patient to the recovery position", correct: false }
        ],
        explanation: "During active seizure, the priority is preventing injury by clearing the environment. Never restrain a seizing patient or force anything into the mouth. Recovery positioning is appropriate after the seizure stops.",
        guideline_ref: "AHA/AAN Seizure First Aid Guidelines; NASEMSO National Model EMS Clinical Guidelines v3.0",
        clinical_pearl: "The myth of 'swallowing the tongue' persists — the tongue is attached. Forcing objects into a seizing patient's mouth risks broken teeth, aspiration, and provider injury from bite force that can exceed 150 pounds.",
        critical: true
      },
      {
        phase: "assessment",
        prompt: "The seizure has now been ongoing for over 10 minutes. Categorize the following findings as either 'Expected with prolonged seizure' or 'Warrants additional concern for secondary cause'.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["Expected with prolonged seizure", "Warrants additional concern for secondary cause"],
        items: [
          "Tachycardia to 124 bpm",
          "Transient hypertension",
          "Unilateral posturing of the right arm",
          "SpO2 of 88%",
          "Fixed and dilated left pupil",
          "Mild temperature elevation"
        ],
        correctCategories: {
          "Tachycardia to 124 bpm": "Expected with prolonged seizure",
          "Transient hypertension": "Expected with prolonged seizure",
          "Unilateral posturing of the right arm": "Warrants additional concern for secondary cause",
          "SpO2 of 88%": "Expected with prolonged seizure",
          "Fixed and dilated left pupil": "Warrants additional concern for secondary cause",
          "Mild temperature elevation": "Expected with prolonged seizure"
        },
        explanation: "Tachycardia, hypertension, hypoxia, and mild hyperthermia are expected physiologic responses to prolonged seizure. However, unilateral posturing and a fixed dilated pupil suggest a focal structural lesion (e.g., intracranial hemorrhage, mass) requiring urgent neurosurgical evaluation.",
        guideline_ref: "AAN Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus; NASEMSO Model Guidelines",
        clinical_pearl: "Status epilepticus in a known epileptic is most commonly from medication non-compliance — but focal neurological signs (unilateral posturing, anisocoria) should raise concern for a new structural pathology such as hemorrhage or tumor."
      },
      {
        phase: "treatment",
        prompt: "After ensuring scene safety and initiating oxygen therapy, which sequence represents the correct Paramedic-level management of this patient in status epilepticus?",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Check blood glucose",
          "Establish IV access",
          "Administer benzodiazepine (midazolam IM if no IV, or diazepam/lorazepam IV)",
          "Reassess seizure activity and airway after medication",
          "Prepare for advanced airway if seizure persists and airway is unprotectable"
        ],
        correctOrder: [
          "Check blood glucose",
          "Establish IV access",
          "Administer benzodiazepine (midazolam IM if no IV, or diazepam/lorazepam IV)",
          "Reassess seizure activity and airway after medication",
          "Prepare for advanced airway if seizure persists and airway is unprotectable"
        ],
        explanation: "Glucose check rules out hypoglycemia as a reversible cause. IV access enables medication delivery (though IM midazolam is an effective alternative). Benzodiazepines are first-line for status epilepticus. Reassessment guides further intervention including advanced airway management.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines v3.0 — Seizure; AAN Status Epilepticus Treatment Guideline 2016",
        clinical_pearl: "Intranasal and IM midazolam have been shown to terminate seizures faster than IV lorazepam when accounting for the time needed to establish IV access — if IV isn't already in place, don't delay treatment to start one."
      },
      {
        phase: "transport",
        prompt: "The seizure terminates after midazolam administration. The patient is now postictal with GCS 8 and sonorous respirations. What is the MOST important airway intervention at this time?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Immediate endotracheal intubation", correct: false },
          { text: "Lateral recovery position with suctioning and NPA placement", correct: true },
          { text: "Bag-valve-mask ventilation at 20 breaths per minute", correct: false },
          { text: "Cricothyrotomy", correct: false }
        ],
        explanation: "A postictal patient with sonorous respirations and GCS 8 benefits most from positioning, suctioning, and a nasopharyngeal airway. This addresses the obstruction without the risks of intubation in a patient who is expected to improve. Hyperventilation with BVM is inappropriate.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines — Post-Seizure Care; AHA Airway Management Guidelines",
        clinical_pearl: "Postictal patients typically regain consciousness over 15-30 minutes. Premature intubation exposes them to unnecessary procedural risk and medications — basic airway maneuvers and positioning are usually sufficient."
      }
    ]
  },

  // ─── 3. Acute Kidney Injury / Renal Emergency ───
  {
    id: "nat-med-13",
    title: "Acute Kidney Injury",
    dispatch: "68-year-old female with weakness and nausea",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 68, sex: "F", cc: "Progressive weakness and nausea for 2 days" },
    scene: "Patient's apartment; she is sitting in a recliner, appears fatigued and pale. Multiple medication bottles on the kitchen counter. Minimal urine output reported over past 24 hours.",
    history: {
      pmh: "Hypertension, Type 2 diabetes, chronic kidney disease stage 3, congestive heart failure",
      meds: "Lisinopril, metformin, furosemide, potassium supplement",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 52, bp: "98/60", rr: 24, spo2: 94, gcs: 14, temp: "36.4°C (97.5°F)" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient presents with bradycardia, hypotension, and oliguria. Which combination of her medications is MOST likely contributing to her acute deterioration?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Metformin and furosemide", correct: false },
          { text: "Lisinopril and potassium supplement", correct: true },
          { text: "Furosemide and lisinopril", correct: false },
          { text: "Potassium supplement and metformin", correct: false }
        ],
        explanation: "ACE inhibitors (lisinopril) reduce renal perfusion and can precipitate acute kidney injury, especially when combined with exogenous potassium in a patient with baseline CKD. The resulting hyperkalemia explains the bradycardia and hypotension.",
        guideline_ref: "AHA ACLS Hyperkalemia Management; NASEMSO National Model EMS Clinical Guidelines — Renal/Electrolyte",
        clinical_pearl: "The 'triple whammy' of ACE inhibitors + diuretics + NSAIDs is a well-known cause of acute kidney injury — but ACE inhibitors + potassium supplementation in CKD patients is equally dangerous and often overlooked."
      },
      {
        phase: "treatment",
        prompt: "A 12-lead ECG shows peaked T-waves, prolonged PR interval, and widened QRS complexes. As a Paramedic, which interventions should you perform? Select ALL that apply.",
        type: "mr",
        level_filter: "Paramedic",
        selectCount: 3,
        options: [
          { text: "Calcium chloride or calcium gluconate IV for cardiac membrane stabilization", correct: true },
          { text: "Sodium bicarbonate IV to shift potassium intracellularly", correct: true },
          { text: "Albuterol nebulization to promote potassium redistribution", correct: true },
          { text: "Kayexalate (sodium polystyrene sulfonate) orally in the field", correct: false },
          { text: "Aggressive IV normal saline bolus of 2 liters", correct: false }
        ],
        explanation: "Calcium stabilizes the cardiac membrane (does not lower K+), while bicarbonate and albuterol shift potassium intracellularly. Kayexalate works too slowly for emergent use. Aggressive fluids are contraindicated given her CHF history and oliguric renal failure.",
        guideline_ref: "AHA ACLS 2020 — Hyperkalemia; NASEMSO National Model EMS Clinical Guidelines",
        clinical_pearl: "Calcium is the first drug to give in severe hyperkalemia with ECG changes — it does NOT lower potassium, but it stabilizes the myocardium within minutes and buys time for potassium-lowering therapies to work.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "Review the following 12-lead ECG findings and match each to the corresponding stage of hyperkalemia severity.",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "You are interpreting ECG findings in the context of suspected hyperkalemia. Match each ECG change to its place in the progression of hyperkalemia.",
        items: [
          { label: "Peaked T-waves", correctZone: "Mild-Moderate (5.5–6.5 mEq/L)" },
          { label: "Prolonged PR interval", correctZone: "Moderate (6.5–7.5 mEq/L)" },
          { label: "Widened QRS complex", correctZone: "Moderate-Severe (7.0–8.0 mEq/L)" },
          { label: "Sine wave pattern", correctZone: "Severe/Pre-arrest (>8.0 mEq/L)" },
          { label: "Loss of P-waves", correctZone: "Moderate-Severe (7.0–8.0 mEq/L)" }
        ],
        explanation: "Hyperkalemia produces a predictable ECG progression: peaked T-waves appear first, followed by PR prolongation, P-wave loss, QRS widening, and ultimately a sine wave pattern preceding cardiac arrest. Recognizing where a patient falls in this spectrum guides urgency of treatment.",
        guideline_ref: "AHA ACLS 2020 — Electrolyte Emergencies; Mattu A, Brady W. ECGs for the Emergency Physician",
        clinical_pearl: "The classic 'peaked T-waves' of hyperkalemia are best seen in the precordial leads (V2-V4). However, ECG changes correlate poorly with exact potassium levels — a patient with 'mild' ECG changes can deteriorate to arrest rapidly."
      }
    ]
  },

  // ─── 4. Thyroid Storm ───
  {
    id: "nat-med-14",
    title: "Thyroid Storm",
    dispatch: "35-year-old female with rapid heart rate and agitation",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 35, sex: "F", cc: "Racing heart and feeling very hot" },
    scene: "Office building break room; patient is diaphoretic, anxious, and restless. Coworkers report she has been increasingly agitated and confused over the past hour. She feels very warm to the touch.",
    history: {
      pmh: "Graves' disease (diagnosed 2 years ago), anxiety disorder",
      meds: "Methimazole — patient admits she stopped taking it 2 weeks ago",
      allergies: "No known drug allergies"
    },
    vitals: { hr: 172, bp: "168/70", rr: 28, spo2: 97, gcs: 13, temp: "40.2°C (104.4°F)" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which assessment finding BEST distinguishes this presentation from a primary cardiac dysrhythmia or stimulant toxicity?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Heart rate greater than 150 bpm", correct: false },
          { text: "Markedly elevated temperature with widened pulse pressure and known thyroid disease", correct: true },
          { text: "Diaphoresis and anxiety", correct: false },
          { text: "Systolic hypertension", correct: false }
        ],
        explanation: "While tachycardia, agitation, and diaphoresis overlap with many conditions, the combination of significant hyperthermia, widened pulse pressure (168/70 = pulse pressure of 98), and a known history of thyroid disease with medication non-compliance points strongly to thyroid storm.",
        guideline_ref: "ATA Guidelines for Thyrotoxicosis Management; NASEMSO National Model EMS Clinical Guidelines — Endocrine",
        clinical_pearl: "Widened pulse pressure is a hallmark of thyroid storm — excess thyroid hormone increases cardiac output and decreases systemic vascular resistance, creating a high systolic/low diastolic pattern similar to aortic regurgitation."
      },
      {
        phase: "treatment",
        prompt: "You are a Paramedic managing this patient. Place the following treatment priorities in order.",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Apply cardiac monitor and obtain 12-lead ECG",
          "Establish IV access and begin conservative crystalloid infusion",
          "Initiate passive and active cooling measures",
          "Consider beta-blocker therapy if within protocol for rate control",
          "Rapid transport to appropriate facility with early notification"
        ],
        correctOrder: [
          "Apply cardiac monitor and obtain 12-lead ECG",
          "Establish IV access and begin conservative crystalloid infusion",
          "Initiate passive and active cooling measures",
          "Consider beta-blocker therapy if within protocol for rate control",
          "Rapid transport to appropriate facility with early notification"
        ],
        explanation: "Cardiac monitoring identifies the rhythm (often sinus tach or afib with RVR). IV access supports hydration for the hypermetabolic state. Cooling addresses dangerous hyperthermia. Beta-blockers address the sympathetic hyperactivity. Definitive treatment (antithyroid drugs, iodine) requires hospital care.",
        guideline_ref: "ATA Thyroid Storm Management Guidelines; NASEMSO National Model EMS Clinical Guidelines",
        clinical_pearl: "Thyroid storm is one of the few medical emergencies where a beta-blocker can be both rate-controlling AND disease-modifying — propranolol specifically inhibits peripheral conversion of T4 to the more active T3."
      },
      {
        phase: "transport",
        prompt: "During transport, the cardiac monitor shows atrial fibrillation with rapid ventricular response at 164 bpm. The patient becomes increasingly confused with a GCS of 10. What is your MOST appropriate next action?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Synchronized cardioversion at 120-200J biphasic", correct: false },
          { text: "Administer amiodarone 150mg IV", correct: false },
          { text: "Continue supportive care, cooling, IV fluids, and expedite transport — the dysrhythmia is driven by the underlying thyroid crisis", correct: true },
          { text: "Administer adenosine 6mg rapid IV push", correct: false }
        ],
        explanation: "Atrial fibrillation in thyroid storm is driven by the underlying endocrine crisis. Cardioversion and antiarrhythmics are unlikely to be effective while the thyroid hormone excess persists. The confusion is likely from the thyroid storm itself. Supportive care and rapid transport for definitive antithyroid therapy is appropriate.",
        guideline_ref: "AHA ACLS 2020 — Tachycardia Algorithm; ATA Thyrotoxicosis Guidelines",
        clinical_pearl: "AF in thyroid storm is notoriously resistant to cardioversion and rate control because the underlying driver is hormonal, not cardiac. Treating the thyroid storm IS treating the arrhythmia. Adenosine has no role in atrial fibrillation.",
        critical: true
      }
    ]
  },

  // ─── 5. Acute Pancreatitis ───
  {
    id: "nat-med-15",
    title: "Acute Pancreatitis",
    dispatch: "48-year-old male with severe abdominal pain",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 48, sex: "M", cc: "Severe epigastric pain radiating to the back" },
    scene: "Patient's home; found on the bathroom floor in a fetal position. Multiple episodes of vomiting. An empty bottle of whiskey is visible nearby.",
    history: {
      pmh: "Alcohol use disorder, previous episode of similar pain 1 year ago, gallstones",
      meds: "None currently",
      allergies: "Codeine (nausea)"
    },
    vitals: { hr: 118, bp: "96/62", rr: 22, spo2: 96, gcs: 15, temp: "38.1°C (100.6°F)" },
    questions: [
      {
        phase: "assessment",
        prompt: "During your abdominal assessment, which finding is MOST consistent with the suspected condition?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Rigid, board-like abdomen with rebound tenderness in the right lower quadrant", correct: false },
          { text: "Severe epigastric tenderness that worsens when supine and improves when leaning forward", correct: true },
          { text: "Pulsatile abdominal mass at the umbilicus", correct: false },
          { text: "Absent bowel sounds with distension and tympany throughout", correct: false }
        ],
        explanation: "Epigastric pain that radiates to the back and worsens in the supine position but improves with leaning forward is a classic presentation of pancreatic inflammation. The pancreas is retroperitoneal, and leaning forward reduces stretch on the inflamed organ.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines — Abdominal Pain; ACG Acute Pancreatitis Guidelines 2013",
        clinical_pearl: "The 'pancreatic position' — patient leaning forward or in fetal position — is so characteristic that it should be documented in your narrative. Patients who cannot find a comfortable position may have a different etiology."
      },
      {
        phase: "treatment",
        prompt: "Categorize the following interventions as 'Appropriate prehospital care' or 'Not indicated in the field'.",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        categories: ["Appropriate prehospital care", "Not indicated in the field"],
        items: [
          "IV fluid resuscitation with normal saline",
          "Antiemetic administration (ondansetron)",
          "Analgesic administration for pain management",
          "Nasogastric tube insertion for gastric decompression",
          "Positioning of comfort (allow patient to remain curled forward)",
          "Empiric antibiotic administration"
        ],
        correctCategories: {
          "IV fluid resuscitation with normal saline": "Appropriate prehospital care",
          "Antiemetic administration (ondansetron)": "Appropriate prehospital care",
          "Analgesic administration for pain management": "Appropriate prehospital care",
          "Nasogastric tube insertion for gastric decompression": "Not indicated in the field",
          "Positioning of comfort (allow patient to remain curled forward)": "Appropriate prehospital care",
          "Empiric antibiotic administration": "Not indicated in the field"
        },
        explanation: "Prehospital management of suspected pancreatitis focuses on aggressive fluid resuscitation (these patients third-space significant volume), pain management, antiemesis, and comfort positioning. NGT placement and antibiotics are not indicated in the prehospital setting for this condition.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines — Abdominal Pain/Nausea; ACG Pancreatitis Guidelines",
        clinical_pearl: "Acute pancreatitis patients can sequester liters of fluid into the retroperitoneal space. Aggressive crystalloid resuscitation started in the prehospital phase has been associated with improved outcomes — don't underestimate their fluid deficit despite a 'normal' abdomen."
      },
      {
        phase: "treatment",
        prompt: "The patient rates his pain 10/10 and is writhing in distress. Given his allergy to codeine (nausea), which analgesic approach is MOST appropriate?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Withhold all opioid analgesics due to the codeine allergy", correct: false },
          { text: "Administer fentanyl IV in titrated doses", correct: true },
          { text: "Administer ketorolac (Toradol) IM for non-opioid pain control", correct: false },
          { text: "Administer morphine IV", correct: false }
        ],
        explanation: "Codeine nausea is a common side effect, not a true allergy, but even if treated as such, fentanyl is a synthetic opioid with minimal cross-reactivity to natural opiates. Ketorolac is relatively contraindicated due to the hypotension and potential renal effects. Morphine historically was avoided in pancreatitis (sphincter of Oddi spasm concern), though this is debated.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines — Pain Management; ACS Opioid Cross-Reactivity Guidelines",
        clinical_pearl: "The old teaching that 'morphine is contraindicated in pancreatitis' due to sphincter of Oddi spasm has been largely debunked — but fentanyl remains preferred in most EMS protocols due to its rapid onset, easy titration, and minimal histamine release."
      },
      {
        phase: "transport",
        prompt: "The patient's vitals show a systolic blood pressure that has dropped to 82/54 despite an initial 500mL NS bolus. Which assessment parameter is MOST important to monitor during transport?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Pupillary response", correct: false },
          { text: "Serial blood pressure and heart rate with ongoing fluid titration", correct: true },
          { text: "Capnography waveform", correct: false },
          { text: "Skin turgor assessment every 5 minutes", correct: false }
        ],
        explanation: "Serial hemodynamic monitoring (BP, HR) guides ongoing fluid resuscitation. This patient is showing signs of hypovolemic shock from third-spacing. While capnography and other assessments have value, hemodynamic trending directly guides the most critical intervention — fluid resuscitation.",
        guideline_ref: "NASEMSO National Model EMS Clinical Guidelines — Shock/Fluid Resuscitation",
        clinical_pearl: "A narrowing pulse pressure (systolic minus diastolic <25) during transport is an ominous sign of decompensating shock. Trend the numbers, not just individual readings — a falling systolic with rising diastolic demands action."
      }
    ]
  },

  // ─── 6. Lithium Toxicity ───
  {
    id: "nat-pharm-09",
    title: "Lithium Toxicity",
    dispatch: "29-year-old female with tremors and confusion",
    category: "Pharmacology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 29, sex: "F", cc: "Shaking and acting confused" },
    scene: "Patient's apartment; roommate called 911 because patient has been 'shaking and saying things that don't make sense.' The apartment is hot — the air conditioning is broken. Several medication bottles on the nightstand including lithium carbonate. A near-empty bottle of ibuprofen is also visible.",
    history: {
      pmh: "Bipolar disorder type I, hypothyroidism",
      meds: "Lithium carbonate 900mg BID, levothyroxine 75mcg daily",
      allergies: "No known drug allergies"
    },
    vitals: { hr: 56, bp: "142/88", rr: 18, spo2: 98, gcs: 12, temp: "38.9°C (102.0°F)" },
    questions: [
      {
        phase: "assessment",
        prompt: "Multiple factors may have contributed to this patient's toxicity. Which of the following are risk factors for lithium toxicity present in this scenario? Select ALL that apply.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "NSAID use (ibuprofen) reducing renal lithium clearance", correct: true },
          { text: "Dehydration from heat exposure with broken air conditioning", correct: true },
          { text: "Hypothyroidism as a comorbid condition", correct: false },
          { text: "Levothyroxine drug interaction with lithium", correct: false },
          { text: "Potential intentional overdose given psychiatric history", correct: true }
        ],
        explanation: "NSAIDs decrease renal lithium clearance by 15-20%, dehydration concentrates lithium (it's renally excreted and reabsorbed with sodium), and intentional overdose must always be considered in psychiatric patients. Hypothyroidism can result from lithium use but doesn't cause toxicity.",
        guideline_ref: "AAPCC/ACMT Lithium Poisoning Guidelines; NASEMSO National Model EMS Clinical Guidelines — Toxicology",
        clinical_pearl: "The SLUDGE of lithium toxicity precipitants: Sun/heat, Low fluid intake, Uppers in dose, Drug interactions (NSAIDs, ACE inhibitors, diuretics), GI losses, and Exercise in heat. NSAIDs are the most commonly overlooked precipitant because they're available OTC."
      },
      {
        phase: "treatment",
        prompt: "Place the following prehospital management steps in the correct order for this patient.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Assess and secure airway — patient is confused with GCS 12",
          "Obtain blood glucose to rule out hypoglycemia",
          "Establish IV access and begin normal saline bolus",
          "Apply cardiac monitor — assess for bradycardia and conduction delays",
          "Initiate cooling measures and transport to facility with dialysis capability"
        ],
        correctOrder: [
          "Assess and secure airway — patient is confused with GCS 12",
          "Obtain blood glucose to rule out hypoglycemia",
          "Apply cardiac monitor — assess for bradycardia and conduction delays",
          "Establish IV access and begin normal saline bolus",
          "Initiate cooling measures and transport to facility with dialysis capability"
        ],
        explanation: "Airway assessment is always first with altered mental status. Glucose check rules out a common reversible cause. Cardiac monitoring is critical because lithium toxicity causes bradycardia and conduction abnormalities. Normal saline enhances renal lithium excretion. Severe cases require hemodialysis.",
        guideline_ref: "AAPCC/ACMT Lithium Poisoning Management Guidelines; NASEMSO National Model EMS Clinical Guidelines",
        clinical_pearl: "Normal saline is the preferred fluid in lithium toxicity — lithium is reabsorbed in the proximal tubule alongside sodium. Volume expansion with NS enhances lithium excretion. Avoid lactated Ringer's as the lower sodium content is less effective."
      },
      {
        phase: "transport",
        prompt: "During transport, the cardiac monitor shows a sinus bradycardia at 44 bpm with a new first-degree AV block. The patient's mental status has declined to GCS 9. You are reviewing this clinical picture. Match each finding to the body system affected by lithium toxicity.",
        type: "table",
        level_filter: "Paramedic",
        narrative: "Complete the table matching clinical findings to the organ system affected by lithium toxicity.",
        items: [
          { finding: "Coarse tremor progressing to myoclonus", system: "Neurological" },
          { finding: "Bradycardia with first-degree AV block", system: "Cardiovascular" },
          { finding: "Nausea, vomiting, diarrhea (reported by roommate earlier)", system: "Gastrointestinal" },
          { finding: "Confusion and declining GCS", system: "Central Nervous System" },
          { finding: "Polyuria preceding this event (reported by roommate)", system: "Renal — Nephrogenic DI" }
        ],
        explanation: "Lithium toxicity is a multi-system poisoning. GI symptoms often appear first (chronic toxicity may skip this). Neurological effects range from tremor to seizures and coma. Cardiovascular effects include bradycardia, AV blocks, and QT prolongation. Nephrogenic diabetes insipidus causes polyuria which worsens dehydration and toxicity in a vicious cycle.",
        guideline_ref: "AAPCC/ACMT Guidelines on Lithium Poisoning; Goldfrank's Toxicologic Emergencies",
        clinical_pearl: "Lithium toxicity has a paradox: the kidney damage it causes (nephrogenic DI → polyuria → dehydration) actually worsens the toxicity by concentrating the drug. This positive feedback loop is why chronic lithium toxicity can escalate rapidly and why aggressive hydration is critical.",
        critical: true
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = BATCH15;
