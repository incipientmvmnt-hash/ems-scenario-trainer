const BATCH12 = [
  // ============================================================
  // AIRWAY & BREATHING — Smoke Inhalation / Airway Burns
  // ============================================================
  {
    id: "nat-air-08",
    title: "Smoke Inhalation with Airway Burns",
    dispatch: "Residential structure fire — patient rescued from second floor, complaining of difficulty breathing",
    category: "Airway & Breathing",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 34, sex: "M", cc: "Difficulty breathing and hoarse voice after house fire" },
    scene: "Patient seated on curb outside a two-story house with heavy smoke showing. Fire department has the patient on supplemental oxygen. Soot visible around nose and mouth, singed nasal hairs noted. Voice is raspy.",
    history: {
      pmh: "None significant",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 118, bp: "142/88", rr: 26, spo2: 91, gcs: 15, temp: "37.4°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which findings in this patient are the most concerning indicators of significant airway involvement?",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Hoarse/raspy voice", correct: true },
          { text: "Singed nasal hairs", correct: true },
          { text: "Soot in the airway (nose/mouth)", correct: true },
          { text: "Heart rate of 118", correct: false },
          { text: "Blood pressure of 142/88", correct: false },
          { text: "Temperature of 37.4°C", correct: false }
        ],
        explanation: "Hoarseness, singed nasal hairs, and carbonaceous deposits in the airway are classic signs of inhalation injury and suggest thermal/chemical damage to the upper airway that may worsen rapidly due to edema.",
        guideline_ref: "ABA Practice Guidelines for Burn Care; NAEMSP Position Statement on Airway Management",
        clinical_pearl: "Upper airway edema from thermal injury can progress to complete obstruction within hours. Early intubation is far safer than emergent surgical airway after swelling occludes the glottis."
      },
      {
        phase: "treatment",
        prompt: "Place the following airway management steps in the correct order for this patient:",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Apply high-flow oxygen via non-rebreather mask",
          "Prepare rapid sequence intubation equipment",
          "Perform direct or video laryngoscopy to visualize the glottis",
          "Secure the endotracheal tube and confirm placement with waveform capnography"
        ],
        correctOrder: [0, 1, 2, 3],
        narrative: "SpO2 has dropped to 88% despite high-flow O2. Stridor is now audible. Medical control advises intubation.",
        explanation: "High-flow O2 is the immediate first step. RSI preparation must precede the attempt. Visualization confirms tube placement potential, and waveform ETCO2 is the gold standard for confirming ETT placement.",
        guideline_ref: "AHA/NAEMSP Airway Management Guidelines; ABA Inhalation Injury Guidelines",
        clinical_pearl: "Use an ETT 0.5–1.0 size smaller than normal — edematous airways narrow the glottic opening. Have a surgical airway kit immediately available as a backup."
      },
      {
        phase: "treatment",
        prompt: "Complete the following table comparing monitoring methods for this patient:",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        columns: ["Monitoring Method", "Reliable in This Patient?", "Reason"],
        rows: [
          { "Monitoring Method": "Standard Pulse Oximetry (SpO2)", "Reliable in This Patient?": "No", "Reason": "Cannot distinguish COHb from oxyhemoglobin — falsely normal readings" },
          { "Monitoring Method": "CO-Oximetry", "Reliable in This Patient?": "Yes", "Reason": "Uses multiple wavelengths to separately measure COHb, O2Hb, and MetHb" },
          { "Monitoring Method": "Waveform Capnography (ETCO2)", "Reliable in This Patient?": "Yes", "Reason": "Measures exhaled CO2 directly — not affected by CO poisoning" },
          { "Monitoring Method": "Skin Color Assessment", "Reliable in This Patient?": "No", "Reason": "COHb can cause cherry-red coloring that mimics good perfusion" }
        ],
        explanation: "Standard pulse oximetry cannot distinguish carboxyhemoglobin (COHb) from oxyhemoglobin — SpO2 may read falsely normal despite significant CO poisoning. CO-oximetry and capnography remain reliable adjuncts.",
        guideline_ref: "NAEMSP CO Poisoning Guidelines; AHA 2020 Guidelines — Special Circumstances",
        clinical_pearl: "A CO-oximeter (multiwavelength) can measure COHb directly. If unavailable, treat the exposure, not the number — administer 100% O2 regardless of SpO2 reading in fire victims."
      }
    ]
  },

  // ============================================================
  // AIRWAY & BREATHING — Pulmonary Embolism
  // ============================================================
  {
    id: "nat-air-09",
    title: "Pulmonary Embolism with Respiratory Distress",
    dispatch: "45-year-old female with sudden onset shortness of breath and chest pain at a workplace",
    category: "Airway & Breathing",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 45, sex: "F", cc: "Sudden shortness of breath and sharp chest pain on right side" },
    scene: "Patient sitting upright in an office chair, visibly anxious and diaphoretic. Coworkers state she was fine 20 minutes ago and suddenly couldn't breathe. She recently returned from a long international flight 3 days ago.",
    history: {
      pmh: "Oral contraceptive use, DVT in left leg 4 years ago",
      meds: "Combined oral contraceptive pill",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 124, bp: "98/62", rr: 30, spo2: 88, gcs: 15, temp: "37.1°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which risk factors in this patient's history increase suspicion for the underlying condition?",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Recent long-distance travel (prolonged immobility)", correct: true },
          { text: "Oral contraceptive use", correct: true },
          { text: "Prior history of deep vein thrombosis", correct: true },
          { text: "Allergy to sulfa drugs", correct: false },
          { text: "Working in an office environment", correct: false }
        ],
        explanation: "Prolonged immobility, estrogen-containing contraceptives, and prior DVT are major risk factors for venous thromboembolism. The sudden onset of dyspnea and pleuritic chest pain with these risk factors strongly suggests PE.",
        guideline_ref: "AHA 2019 Scientific Statement on PE; NAEMSP Prehospital Assessment Guidelines",
        clinical_pearl: "The classic triad of dyspnea, pleuritic chest pain, and tachycardia is present in fewer than 20% of PE cases. Maintain a high index of suspicion based on risk factors alone."
      },
      {
        phase: "treatment",
        prompt: "Categorize each intervention as appropriate for EMT-level or Paramedic-level care for this patient:",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "High-flow oxygen via non-rebreather mask",
          "Position of comfort (upright)",
          "Establish IV access with normal saline",
          "Obtain 12-lead ECG",
          "Continuous pulse oximetry monitoring",
          "Administer IV fluid bolus for hypotension"
        ],
        categories: ["EMT-Level", "Paramedic-Level"],
        correctCategories: {
          "High-flow oxygen via non-rebreather mask": "EMT-Level",
          "Position of comfort (upright)": "EMT-Level",
          "Establish IV access with normal saline": "Paramedic-Level",
          "Obtain 12-lead ECG": "Paramedic-Level",
          "Continuous pulse oximetry monitoring": "EMT-Level",
          "Administer IV fluid bolus for hypotension": "Paramedic-Level"
        },
        explanation: "Basic interventions like high-flow O2, positioning, and SpO2 monitoring are EMT-scope. IV access, 12-lead ECG acquisition, and fluid resuscitation for hypotension require advanced-level providers.",
        guideline_ref: "NAEMSP Scope of Practice; National EMS Education Standards",
        clinical_pearl: "Massive PE with hypotension may require cautious fluid boluses (250–500 mL) — aggressive volume loading can worsen RV dilation and further compromise cardiac output."
      },
      {
        phase: "treatment",
        prompt: "The 12-lead ECG shows sinus tachycardia with an S1Q3T3 pattern. What is the significance of this finding?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "It suggests right heart strain, consistent with significant pulmonary embolism", correct: true },
          { text: "It confirms an acute ST-elevation myocardial infarction", correct: false },
          { text: "It indicates hyperkalemia requiring immediate treatment", correct: false },
          { text: "It is a normal variant and not clinically significant", correct: false }
        ],
        explanation: "The S1Q3T3 pattern (deep S wave in Lead I, Q wave and inverted T wave in Lead III) indicates acute right ventricular strain. While not pathognomonic for PE, it supports the clinical picture.",
        guideline_ref: "AHA 2019 PE Scientific Statement; NAEMSP 12-Lead ECG Guidelines",
        clinical_pearl: "S1Q3T3 is found in only ~20% of PE cases. The most common ECG finding in PE is simply sinus tachycardia. Right axis deviation and new RBBB are other clues."
      }
    ]
  },

  // ============================================================
  // AIRWAY & BREATHING — Spontaneous Pneumothorax
  // ============================================================
  {
    id: "nat-air-10",
    title: "Spontaneous Pneumothorax (Non-Traumatic)",
    dispatch: "22-year-old male with sudden chest pain and difficulty breathing at a college dormitory",
    category: "Airway & Breathing",
    difficulty: "Easy",
    level_min: "EMR",
    patient: { age: 22, sex: "M", cc: "Sudden sharp right-sided chest pain and shortness of breath while sitting at desk" },
    scene: "Tall, thin male sitting on the edge of his bed, leaning forward. He states the pain started abruptly about 30 minutes ago. No trauma or exertion. Roommate called 911.",
    history: {
      pmh: "None — no prior episodes",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 104, bp: "128/78", rr: 22, spo2: 94, gcs: 15, temp: "36.8°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "On auscultation, you note diminished breath sounds on the right side. What is the most likely explanation given this patient's presentation?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Air has accumulated in the pleural space, partially collapsing the right lung", correct: true },
          { text: "The patient has a right-sided pneumonia causing consolidation", correct: false },
          { text: "The patient is not breathing deeply enough on that side due to anxiety", correct: false },
          { text: "A mucus plug is obstructing the right mainstem bronchus", correct: false }
        ],
        explanation: "Sudden onset of unilateral pleuritic chest pain with diminished breath sounds in a tall, thin young male is the classic presentation of primary spontaneous pneumothorax — air leaking into the pleural space from a ruptured subpleural bleb.",
        guideline_ref: "ACEP Clinical Policy on Pneumothorax; NAEMSP Respiratory Emergency Guidelines",
        clinical_pearl: "Primary spontaneous pneumothorax classically affects tall, thin males aged 15–35. Smoking increases the risk 20-fold, even in otherwise healthy individuals."
      },
      {
        phase: "treatment",
        prompt: "What is the priority prehospital management for this stable patient?",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Place the patient in a position of comfort",
          "Administer high-flow supplemental oxygen",
          "Monitor vitals and SpO2 continuously during transport",
          "Transport to an appropriate facility for definitive imaging and care"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "For a hemodynamically stable spontaneous pneumothorax, prehospital care is supportive: comfort positioning, high-flow O2 (which also accelerates reabsorption of pleural air), monitoring for deterioration, and transport.",
        guideline_ref: "NAEMSP Respiratory Emergency Guidelines; BTS Pleural Disease Guidelines (adapted)",
        clinical_pearl: "Supplemental oxygen isn't just for hypoxia here — high-concentration O2 creates a nitrogen gradient that accelerates reabsorption of pleural air by up to 4x the normal rate."
      },
      {
        phase: "reassessment",
        prompt: "During transport, the patient becomes increasingly dyspneic, tachycardic to 130, hypotensive at 82/50, and you note tracheal deviation to the left. What has likely occurred?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "The simple pneumothorax has progressed to a tension pneumothorax", correct: true, critical: true },
          { text: "The patient is having a panic attack from anxiety", correct: false },
          { text: "The patient has developed a pulmonary embolism", correct: false },
          { text: "The oxygen flow rate is set too high", correct: false }
        ],
        explanation: "Worsening dyspnea, tachycardia, hypotension, and contralateral tracheal deviation indicate a tension pneumothorax — a life-threatening emergency requiring immediate decompression.",
        guideline_ref: "NAEMSP Position Statement on Needle Decompression; ACS ATLS Guidelines",
        clinical_pearl: "Tracheal deviation is a LATE finding in tension pneumothorax. Don't wait for it — progressive tachycardia, hypotension, and worsening respiratory distress in a known pneumothorax patient should prompt immediate intervention."
      },
      {
        phase: "treatment",
        prompt: "As a Paramedic, identify the correct anatomical landmark for needle decompression on this patient's chest:",
        type: "graphical",
        level_filter: "Paramedic",
        image_desc: "Anterior chest wall diagram with numbered landmarks: (A) 2nd intercostal space, right midclavicular line; (B) 5th intercostal space, right midclavicular line; (C) 4th intercostal space, left anterior axillary line; (D) 2nd intercostal space, left midclavicular line",
        options: [
          { text: "A — 2nd intercostal space, right midclavicular line (affected side)", correct: true },
          { text: "B — 5th intercostal space, right midclavicular line", correct: false },
          { text: "C — 4th intercostal space, left anterior axillary line (wrong side)", correct: false },
          { text: "D — 2nd intercostal space, left midclavicular line (wrong side)", correct: false }
        ],
        explanation: "The traditional landmark for needle decompression is the 2nd intercostal space at the midclavicular line on the AFFECTED side. The 4th/5th intercostal space at the anterior axillary line on the same side is an acceptable alternative.",
        guideline_ref: "NAEMSP Needle Decompression Position Statement; ACS TCCC Guidelines",
        clinical_pearl: "In muscular or obese patients, the anterior chest wall may be too thick for standard 5 cm angiocatheters to reach the pleural space. The lateral (4th/5th ICS, anterior axillary line) site has a higher success rate in these patients."
      }
    ]
  },

  // ============================================================
  // CARDIOLOGY — Atrial Fibrillation with RVR
  // ============================================================
  {
    id: "nat-card-07",
    title: "Atrial Fibrillation with Rapid Ventricular Response",
    dispatch: "68-year-old male with palpitations and dizziness at a restaurant",
    category: "Cardiology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 68, sex: "M", cc: "Racing heartbeat and feeling lightheaded for the past hour" },
    scene: "Patient seated in a booth, appearing pale and mildly diaphoretic. He states his heart has been 'fluttering' and he feels dizzy when standing. Denies chest pain. Had two glasses of wine with dinner.",
    history: {
      pmh: "Hypertension, hyperlipidemia, paroxysmal atrial fibrillation (diagnosed 2 years ago)",
      meds: "Lisinopril 20 mg, atorvastatin 40 mg, apixaban 5 mg BID",
      allergies: "Penicillin"
    },
    vitals: { hr: 156, bp: "106/68", rr: 20, spo2: 96, gcs: 15, temp: "36.9°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "The cardiac monitor shows an irregularly irregular rhythm with no discernible P waves at a rate of 156. Which rhythm is this most consistent with?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Atrial fibrillation with rapid ventricular response", correct: true },
          { text: "Supraventricular tachycardia (SVT)", correct: false },
          { text: "Ventricular tachycardia", correct: false },
          { text: "Sinus tachycardia", correct: false }
        ],
        explanation: "An irregularly irregular narrow-complex tachycardia without P waves is the hallmark of atrial fibrillation. The rate of 156 qualifies as rapid ventricular response (RVR), typically defined as >100 bpm.",
        guideline_ref: "AHA/ACC/HRS 2023 AFib Guideline; AHA ACLS Tachycardia Algorithm",
        clinical_pearl: "The key distinguisher: SVT is regular, AFib is irregularly irregular. When in doubt at high rates, look at the R-R intervals — even subtle irregularity points to AFib."
      },
      {
        phase: "treatment",
        prompt: "The patient remains hemodynamically stable with the vitals shown. As a Paramedic, what is the most appropriate initial pharmacological intervention?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Diltiazem IV for rate control", correct: true },
          { text: "Adenosine 6 mg rapid IV push", correct: false },
          { text: "Amiodarone 150 mg IV for rhythm conversion", correct: false },
          { text: "Synchronized cardioversion at 120–200J biphasic", correct: false }
        ],
        narrative: "The patient's BP has stabilized at 108/70 after a 250 mL NS bolus. He remains symptomatic with dizziness but is alert and oriented.",
        explanation: "For stable AFib with RVR, rate control with a calcium channel blocker (diltiazem) or beta-blocker is first-line. Adenosine is ineffective for AFib. Cardioversion is reserved for unstable patients. Prehospital rhythm conversion with amiodarone is not standard first-line.",
        guideline_ref: "AHA ACLS 2020 Tachycardia Algorithm; AHA/ACC/HRS 2023 AFib Guideline",
        clinical_pearl: "Diltiazem 0.25 mg/kg IV over 2 minutes is highly effective for AFib rate control. Avoid in patients with heart failure with reduced EF — use amiodarone instead in that population."
      },
      {
        phase: "treatment",
        prompt: "Which of the following are important considerations before attempting pharmacological or electrical cardioversion of atrial fibrillation? Select all that apply.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 2,
        options: [
          { text: "Duration of AFib episode — cardioversion of AFib lasting >48 hours increases stroke risk", correct: true },
          { text: "Anticoagulation status — the patient's medication list should be reviewed", correct: true },
          { text: "The patient must be intubated before any cardioversion attempt", correct: false },
          { text: "Cardioversion is contraindicated in patients over age 65", correct: false }
        ],
        explanation: "AFib lasting >48 hours (or unknown duration) carries a risk of atrial thrombus formation. Cardioversion can dislodge thrombus causing stroke. Anticoagulation status (this patient takes apixaban) and episode duration are critical factors.",
        guideline_ref: "AHA/ACC/HRS 2023 AFib Guideline; AHA ACLS Provider Manual",
        clinical_pearl: "This patient's apixaban use is important context — if he's been compliant, he may already be therapeutically anticoagulated. Always relay medication information to the receiving facility for cardioversion decisions."
      }
    ]
  },

  // ============================================================
  // CARDIOLOGY — Hypertensive Emergency
  // ============================================================
  {
    id: "nat-card-08",
    title: "Hypertensive Emergency",
    dispatch: "55-year-old female with severe headache and blurred vision",
    category: "Cardiology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 55, sex: "F", cc: "Worst headache of my life with blurry vision" },
    scene: "Patient lying on couch in a dimly lit living room, holding her head with both hands. Daughter states mother has been complaining of headache for 2 hours that keeps getting worse. Patient appears distressed and slightly confused.",
    history: {
      pmh: "Hypertension (poorly controlled), type 2 diabetes, chronic kidney disease stage 3",
      meds: "Amlodipine 10 mg (admits to missing doses frequently), metformin 1000 mg BID",
      allergies: "ACE inhibitors (angioedema)"
    },
    vitals: { hr: 96, bp: "248/142", rr: 18, spo2: 97, gcs: 14, temp: "37.0°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "What distinguishes a hypertensive emergency from hypertensive urgency?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "The presence of end-organ damage (brain, heart, kidneys, eyes)", correct: true },
          { text: "A systolic blood pressure above 200 mmHg", correct: false },
          { text: "The patient being over 50 years of age", correct: false },
          { text: "Having a history of chronic kidney disease", correct: false }
        ],
        explanation: "Hypertensive emergency is defined by severely elevated BP WITH evidence of acute end-organ damage. This patient shows neurological symptoms (headache, confusion, visual changes) suggesting hypertensive encephalopathy. The BP number alone does not define the emergency.",
        guideline_ref: "AHA/ACC 2017 Hypertension Guideline; NAEMSP Hypertensive Emergency Position Statement",
        clinical_pearl: "A patient with chronic hypertension may tolerate a BP of 220/120 without symptoms, while someone normally normotensive could have end-organ damage at 180/110. Treat the patient, not the number."
      },
      {
        phase: "assessment",
        prompt: "Categorize each finding as evidence of end-organ damage or NOT evidence of end-organ damage in hypertensive emergency:",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        items: [
          "Altered mental status / confusion",
          "Visual disturbances",
          "Headache alone without other neurological findings",
          "Chest pain with ECG changes",
          "Elevated blood pressure reading",
          "Nausea/vomiting with focal neurological deficits"
        ],
        categories: ["End-Organ Damage", "Not End-Organ Damage"],
        correctCategories: {
          "Altered mental status / confusion": "End-Organ Damage",
          "Visual disturbances": "End-Organ Damage",
          "Headache alone without other neurological findings": "Not End-Organ Damage",
          "Chest pain with ECG changes": "End-Organ Damage",
          "Elevated blood pressure reading": "Not End-Organ Damage",
          "Nausea/vomiting with focal neurological deficits": "End-Organ Damage"
        },
        explanation: "End-organ damage indicators include neurological deficits (AMS, visual changes, focal deficits with N/V suggesting stroke), and cardiac ischemia. Elevated BP alone and isolated headache without other findings suggest urgency, not emergency.",
        guideline_ref: "AHA/ACC 2017 Hypertension Guideline; AHA Stroke Guidelines",
        clinical_pearl: "Always perform a focused neurological exam — hypertensive encephalopathy presents diffusely (confusion, visual changes, headache), while hypertension-related stroke presents with focal deficits. The distinction changes hospital management."
      },
      {
        phase: "treatment",
        prompt: "What is the recommended approach to blood pressure reduction in a hypertensive emergency?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Reduce MAP by no more than 20-25% in the first hour using IV antihypertensives", correct: true },
          { text: "Rapidly normalize BP to 120/80 within 30 minutes", correct: false, critical: true },
          { text: "Administer sublingual nifedipine for rapid reduction", correct: false, critical: true },
          { text: "Withhold all treatment and transport — only hospitals should lower BP", correct: false }
        ],
        explanation: "Gradual, controlled reduction (≤25% of MAP in the first hour) prevents hypoperfusion of organs that have autoregulated to chronically high pressures. Rapid normalization can cause watershed strokes and MI. Sublingual nifedipine causes unpredictable, precipitous drops and is contraindicated.",
        guideline_ref: "AHA/ACC 2017 Hypertension Guideline; NAEMSP Hypertensive Emergency Guidelines",
        clinical_pearl: "Sublingual nifedipine for hypertensive emergencies was abandoned decades ago after reports of strokes and MIs from precipitous BP drops. If your protocols still list it, advocate for an update."
      },
      {
        phase: "treatment",
        prompt: "Given this patient's allergy to ACE inhibitors (angioedema), which IV antihypertensive would be CONTRAINDICATED?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Enalaprilat (IV ACE inhibitor)", correct: true },
          { text: "Nicardipine (IV calcium channel blocker)", correct: false },
          { text: "Labetalol (IV beta-blocker)", correct: false },
          { text: "Nitroglycerin (IV vasodilator)", correct: false }
        ],
        explanation: "Enalaprilat is an IV ACE inhibitor and is contraindicated in a patient with a history of ACE inhibitor-induced angioedema. Nicardipine and labetalol are first-line IV agents for hypertensive emergency without this contraindication.",
        guideline_ref: "AHA/ACC 2017 Hypertension Guideline; ACEP Hypertensive Emergency Clinical Policy",
        clinical_pearl: "Cross-reactivity between ACE inhibitors and ARBs for angioedema is debated but estimated at ~2-17%. In the acute setting, avoid both classes and choose nicardipine or labetalol."
      }
    ]
  },

  // ============================================================
  // CARDIOLOGY — Cardiac Tamponade (Medical)
  // ============================================================
  {
    id: "nat-card-09",
    title: "Cardiac Tamponade (Medical Etiology)",
    dispatch: "40-year-old male with chest tightness and progressive shortness of breath, history of recent illness",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 40, sex: "M", cc: "Worsening chest pressure and shortness of breath over 2 days" },
    scene: "Patient sitting bolt upright on edge of bed, tripoding. Appears anxious and diaphoretic. Wife states he had a 'viral illness' about 2 weeks ago and has been complaining of chest discomfort since. Getting progressively worse.",
    history: {
      pmh: "Viral pericarditis diagnosed at urgent care 10 days ago",
      meds: "Ibuprofen 600 mg TID, colchicine 0.5 mg BID",
      allergies: "NKDA"
    },
    vitals: { hr: 128, bp: "88/72", rr: 28, spo2: 93, gcs: 15, temp: "37.6°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "You note jugular venous distension and muffled heart sounds. Combined with hypotension, these three findings constitute:",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Beck's triad — classic for cardiac tamponade", correct: true },
          { text: "Cushing's triad — indicating increased intracranial pressure", correct: false },
          { text: "Virchow's triad — indicating risk for venous thromboembolism", correct: false },
          { text: "Charcot's triad — indicating ascending cholangitis", correct: false }
        ],
        explanation: "Beck's triad (hypotension, JVD, muffled heart sounds) is the classic presentation of cardiac tamponade. In this case, post-viral pericarditis has likely progressed to a pericardial effusion compressing the heart.",
        guideline_ref: "AHA 2020 ACLS Guidelines — Cardiac Arrest in Special Circumstances; ESC 2015 Pericardial Disease Guidelines",
        clinical_pearl: "The full Beck's triad is present in fewer than 40% of tamponade cases. JVD alone with unexplained hypotension after recent pericarditis should raise your suspicion significantly."
      },
      {
        phase: "assessment",
        prompt: "While assessing the patient, you notice the BP drops from 88/72 to 74/60 during inspiration. What is this phenomenon called?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Pulsus paradoxus — an exaggerated drop in systolic BP (>10 mmHg) during inspiration", correct: true },
          { text: "Pulsus alternans — alternating strong and weak pulse beats", correct: false },
          { text: "Pulsus bisferiens — a double-peaked pulse waveform", correct: false },
          { text: "Postural hypotension — BP drop with position change", correct: false }
        ],
        explanation: "Pulsus paradoxus is an exaggerated decrease in systolic BP (>10 mmHg) during normal inspiration. It occurs because the tamponade-compressed heart cannot accommodate increased venous return during inspiration, further compromising left ventricular output.",
        guideline_ref: "ESC 2015 Pericardial Disease Guidelines; AHA ACLS Special Circumstances",
        clinical_pearl: "You can screen for pulsus paradoxus in the field by noting whether the pulse weakens or disappears during inspiration. A manual BP cuff is more reliable than automated for detecting the exact difference."
      },
      {
        phase: "treatment",
        prompt: "Place the following prehospital interventions in priority order for this patient:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "High-flow oxygen and position of comfort",
          "Establish bilateral large-bore IV access",
          "Administer IV fluid bolus (500–1000 mL NS) to increase preload",
          "Rapid transport to a facility capable of pericardiocentesis or surgical intervention"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Tamponade requires definitive treatment (pericardiocentesis) that is rarely in the prehospital scope. Prehospital management focuses on supporting the patient: oxygenation, IV access, aggressive fluid resuscitation to maintain preload against the compressed heart, and rapid transport.",
        guideline_ref: "AHA ACLS 2020 Special Circumstances; NAEMSP Transport Decision Guidelines",
        clinical_pearl: "Fluid boluses are critical in tamponade — they increase venous pressure to 'push back' against the pericardial pressure compressing the heart. This is one of the few shock states where aggressive fluids are temporizing while awaiting definitive care."
      },
      {
        phase: "treatment",
        prompt: "Which medications should be AVOIDED in this patient because they would worsen his condition?",
        type: "mr",
        level_filter: "Paramedic",
        selectCount: 2,
        options: [
          { text: "Nitroglycerin (reduces preload)", correct: true, critical: true },
          { text: "Morphine or fentanyl for pain (may cause vasodilation and reduce preload)", correct: true },
          { text: "Normal saline bolus", correct: false },
          { text: "Supplemental oxygen", correct: false }
        ],
        explanation: "In cardiac tamponade, the patient is preload-dependent. Any medication that reduces preload (nitrates, opioids causing vasodilation) can precipitate cardiovascular collapse. Volume expansion is the prehospital bridge to definitive care.",
        guideline_ref: "AHA ACLS 2020 — Obstructive Shock Management; ESC 2015 Pericardial Disease Guidelines",
        clinical_pearl: "Think of tamponade as a 'preload-hungry' state. The right ventricle can only fill if venous pressure exceeds pericardial pressure. Anything that drops preload — nitrates, diuretics, opioid vasodilation, or positive pressure ventilation — can be lethal."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { BATCH12 };
