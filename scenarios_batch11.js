const BATCH11 = [
  // ─── ENVIRONMENTAL 1: High-Altitude Sickness / HAPE ───
  {
    id: "nat-env-05",
    title: "High-Altitude Pulmonary Edema",
    dispatch: "Difficulty breathing at mountain campsite, elevation ~12,000 ft",
    category: "Environmental",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 34, sex: "M", cc: "Progressive shortness of breath and cough" },
    scene: "Remote mountain campsite at approximately 12,000 feet elevation. Patient arrived from sea level 36 hours ago. Tent and backpacking gear visible. Temperature is 28°F with light wind.",
    history: {
      pmh: "None significant",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 112, bp: "138/88", rr: 28, spo2: 82, gcs: 14, temp: "99.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient reports arriving at this elevation 36 hours ago from sea level. He developed a dry cough yesterday that now produces frothy pink sputum. He is dyspneic at rest. Which finding is MOST concerning for a life-threatening altitude illness?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Headache and nausea", correct: false },
          { text: "Frothy pink sputum with SpO2 of 82%", correct: true },
          { text: "Mild peripheral edema in the hands", correct: false },
          { text: "Fatigue and poor appetite", correct: false }
        ],
        explanation: "Frothy pink sputum with severe hypoxemia indicates high-altitude pulmonary edema (HAPE), which is the leading cause of death from altitude illness. AMS symptoms like headache, nausea, and fatigue are common but less immediately life-threatening.",
        guideline_ref: "Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness (2019)",
        clinical_pearl: "HAPE typically develops 2-4 days after rapid ascent above 8,000 ft. The hallmark triad is dyspnea at rest, cough with pink frothy sputum, and severe hypoxemia — it can be fatal within hours without descent."
      },
      {
        phase: "treatment",
        prompt: "Rank the following interventions for this patient in order of priority from MOST to LEAST important.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Immediate descent to lower elevation",
          "Supplemental high-flow oxygen",
          "Place patient in position of comfort",
          "Warm the patient and protect from wind"
        ],
        correctOrder: [
          "Immediate descent to lower elevation",
          "Supplemental high-flow oxygen",
          "Place patient in position of comfort",
          "Warm the patient and protect from wind"
        ],
        explanation: "Descent is the definitive treatment for HAPE and takes absolute priority. Supplemental oxygen is the most important adjunct and can be life-saving when descent is delayed. Positioning and warming are supportive but secondary.",
        guideline_ref: "Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness (2019)",
        clinical_pearl: "Even a descent of 1,000-3,000 feet can produce dramatic improvement in HAPE. If descent is impossible, supplemental oxygen to maintain SpO2 >90% and a portable hyperbaric chamber (Gamow bag) are temporizing measures."
      },
      {
        phase: "treatment",
        prompt: "Medical control authorizes pharmacological treatment. Which medication is indicated as an adjunct for this altitude emergency?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Furosemide 40 mg IV", correct: false },
          { text: "Nifedipine 30 mg PO extended-release", correct: true },
          { text: "Dexamethasone 8 mg IV", correct: false },
          { text: "Acetazolamide 250 mg PO", correct: false }
        ],
        explanation: "Nifedipine reduces pulmonary artery pressure and is the recommended pharmacological adjunct for HAPE. Dexamethasone is first-line for high-altitude cerebral edema (HACE), not HAPE. Furosemide is contraindicated as these patients are often volume-depleted. Acetazolamide is for AMS prevention/treatment, not HAPE.",
        guideline_ref: "Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness (2019)",
        clinical_pearl: "Nifedipine for HAPE, dexamethasone for HACE — don't mix them up. Diuretics are harmful in HAPE because the pulmonary edema is caused by elevated pulmonary pressures, not fluid overload.",
        critical: true
      }
    ]
  },

  // ─── ENVIRONMENTAL 2: Carbon Monoxide Poisoning ───
  {
    id: "nat-env-06",
    title: "Carbon Monoxide Exposure",
    dispatch: "Multiple patients with headache and nausea in a residential home",
    category: "Environmental",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 45, sex: "F", cc: "Headache, nausea, and dizziness" },
    scene: "Single-story home with a portable kerosene heater running in the living room. Windows are closed. Three other family members report similar symptoms. No smoke or fire visible. CO detector is not present.",
    history: {
      pmh: "Migraines, hypertension",
      meds: "Lisinopril, sumatriptan PRN",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 104, bp: "148/92", rr: 22, spo2: 98, gcs: 15, temp: "98.6°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive to find four family members with similar complaints in a closed home with a kerosene heater. What is your FIRST action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Begin assessing the most symptomatic patient", correct: false },
          { text: "Evacuate all occupants to fresh air immediately", correct: true },
          { text: "Open windows to ventilate the home", correct: false },
          { text: "Apply pulse oximetry to all patients", correct: false }
        ],
        explanation: "When multiple occupants in a closed space with a combustion source share similar symptoms, suspect a toxic atmospheric hazard. Immediate evacuation to fresh air is the priority — do not remain in the environment to assess or treat.",
        guideline_ref: "NAEMT PHTLS 10th Edition – Scene Safety and Hazardous Environments",
        clinical_pearl: "Standard pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin — an SpO2 of 98% can be falsely reassuring in CO poisoning. CO-oximetry is required for accurate readings.",
        critical: true
      },
      {
        phase: "assessment",
        prompt: "After evacuation, which of the following findings would indicate the need for IMMEDIATE transport to a facility with hyperbaric oxygen capability? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "SpCO level of 15% on CO-oximetry", correct: false },
          { text: "Patient is pregnant (any CO level)", correct: true },
          { text: "Loss of consciousness, even if now alert", correct: true },
          { text: "Mild headache that resolves with fresh air", correct: false },
          { text: "Chest pain or ECG changes suggesting cardiac ischemia", correct: true },
          { text: "Nausea without vomiting", correct: false }
        ],
        explanation: "Hyperbaric oxygen therapy is indicated for CO poisoning with loss of consciousness (even if transient), cardiac ischemia/ECG changes, pregnancy (fetal hemoglobin binds CO more avidly), and severely elevated carboxyhemoglobin levels (>25%). Mild symptoms resolving with fresh air and NRB oxygen do not require HBO.",
        guideline_ref: "Undersea and Hyperbaric Medical Society – Indications for Hyperbaric Oxygen Therapy (2023)",
        clinical_pearl: "Fetal hemoglobin has a much higher affinity for CO than adult hemoglobin, meaning the fetus is at extreme risk even when the mother appears mildly symptomatic. All pregnant CO exposure patients warrant HBO evaluation."
      },
      {
        phase: "treatment",
        prompt: "Categorize each finding as either an 'Early CO Symptom' or a 'Severe CO Poisoning Sign'.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Headache",
          "Seizures",
          "Nausea and dizziness",
          "Syncope",
          "Fatigue and malaise",
          "Cardiac dysrhythmias"
        ],
        categories: ["Early CO Symptom", "Severe CO Poisoning Sign"],
        correctCategories: {
          "Headache": "Early CO Symptom",
          "Seizures": "Severe CO Poisoning Sign",
          "Nausea and dizziness": "Early CO Symptom",
          "Syncope": "Severe CO Poisoning Sign",
          "Fatigue and malaise": "Early CO Symptom",
          "Cardiac dysrhythmias": "Severe CO Poisoning Sign"
        },
        explanation: "Early CO symptoms (COHb 10-20%) mimic flu or migraine: headache, nausea, dizziness, fatigue. Severe poisoning (COHb >30-40%) produces syncope, seizures, dysrhythmias, and altered mental status. Recognizing the progression guides urgency of transport and HBO referral.",
        guideline_ref: "NAEMT AMLS 3rd Edition – Toxicology Emergencies",
        clinical_pearl: "CO poisoning is called 'the great mimicker' because early symptoms look like the flu. The key differentiator: multiple household members sick simultaneously, especially in winter with combustion heating. Always ask about heating sources."
      }
    ]
  },

  // ─── ENVIRONMENTAL 3: Lightning Strike ───
  {
    id: "nat-env-07",
    title: "Lightning Strike Injury",
    dispatch: "Person struck by lightning at outdoor sports field",
    category: "Environmental",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 22, sex: "M", cc: "Unresponsive after lightning strike" },
    scene: "Open soccer field during a thunderstorm. Patient is supine on wet grass approximately 30 yards from a metal goal post. Bystanders report a nearby lightning strike and the patient immediately collapsed. Storm is still active with lightning visible.",
    history: {
      pmh: "None",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: { hr: 0, bp: "---/---", rr: 0, spo2: "unable to obtain", gcs: 3, temp: "97.4°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive to an active thunderstorm with a pulseless patient on an open field. How does lightning MCI triage differ from standard triage?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Treat walking wounded first, as in standard START triage", correct: false },
          { text: "Prioritize pulseless/apneic patients first — 'reverse triage'", correct: true },
          { text: "Tag all lightning victims as Expectant due to high mortality", correct: false },
          { text: "No difference from standard MCI triage protocols", correct: false }
        ],
        explanation: "Lightning MCI uses 'reverse triage' — the opposite of normal MCI protocol. Patients who appear dead (pulseless/apneic) are treated FIRST because lightning-induced cardiac arrest is often reversible with immediate CPR and defibrillation. Those who are breathing will likely survive without immediate intervention.",
        guideline_ref: "AHA/ILCOR Guidelines for CPR and ECC – Special Circumstances: Lightning Strike (2020)",
        clinical_pearl: "Lightning causes simultaneous cardiac and respiratory arrest. The heart may restart spontaneously, but respiratory arrest often persists longer. Without ventilatory support, the patient re-arrests from hypoxia — this is why aggressive airway management is critical.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "After moving to a safer location, you begin resuscitation. The cardiac monitor shows ventricular fibrillation. Rank the following actions in correct order.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Immediate defibrillation",
          "Resume high-quality CPR",
          "Establish IV/IO access",
          "Administer epinephrine 1 mg IV/IO",
          "Perform advanced airway management"
        ],
        correctOrder: [
          "Immediate defibrillation",
          "Resume high-quality CPR",
          "Establish IV/IO access",
          "Administer epinephrine 1 mg IV/IO",
          "Perform advanced airway management"
        ],
        explanation: "VF in lightning strike is treated per standard ACLS. Immediate defibrillation is the priority for a shockable rhythm. CPR resumes immediately after the shock. IV/IO access enables epinephrine administration. Advanced airway is important but should not delay defibrillation or compressions.",
        guideline_ref: "AHA ACLS Guidelines – Ventricular Fibrillation/Pulseless VT Algorithm (2020)",
        clinical_pearl: "Lightning strike cardiac arrest has a much higher survival rate than other causes of cardiac arrest — up to 70-90% with prompt intervention. Never withhold resuscitation based on initial appearance; these patients can have excellent neurological outcomes."
      },
      {
        phase: "assessment",
        prompt: "After ROSC is achieved, which secondary injuries should you specifically assess for in a lightning strike victim? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 4,
        options: [
          { text: "Tympanic membrane rupture", correct: true },
          { text: "Spinal injury from tetanic contraction or blast effect", correct: true },
          { text: "Burns, especially at entry/exit points and around metal objects", correct: true },
          { text: "Lichtenberg figures (ferning pattern on skin)", correct: true },
          { text: "Hypothermia from ice crystal formation in tissues", correct: false },
          { text: "Radiation sickness", correct: false }
        ],
        explanation: "Lightning causes a unique injury pattern: tympanic membrane rupture (up to 50% of survivors), spinal injuries from violent muscle contraction or being thrown, characteristic burns (linear, punctate, or feathering/Lichtenberg figures), and injuries around metal objects (jewelry, belt buckles). There is no radiation or freezing mechanism.",
        guideline_ref: "NAEMT PHTLS 10th Edition – Environmental and Wilderness Trauma",
        clinical_pearl: "Lichtenberg figures (fern-like skin patterns) are pathognomonic for lightning strike — they are not true burns but rather erythema from electron shower across the skin surface. They typically fade within 24 hours and require no treatment."
      }
    ]
  },

  // ─── ENVIRONMENTAL 4: Decompression Sickness ───
  {
    id: "nat-env-08",
    title: "Scuba Diving Emergency",
    dispatch: "Diver with joint pain and confusion after surfacing",
    category: "Environmental",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 38, sex: "F", cc: "Severe joint pain, skin mottling, and confusion" },
    scene: "Marina dock. Patient completed two dives to 90 feet today and reports ascending rapidly from the second dive when she ran low on air approximately 45 minutes ago. Dive buddy is present and provides history. Dive gear is on the dock.",
    history: {
      pmh: "Patent foramen ovale (diagnosed incidentally 2 years ago)",
      meds: "Oral contraceptives",
      allergies: "Penicillin"
    },
    vitals: { hr: 96, bp: "134/82", rr: 20, spo2: 95, gcs: 13, temp: "98.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient has joint pain ('the bends'), mottled skin ('cutis marmorata'), and confusion after a rapid ascent from depth. On the table below, match each diving injury to its mechanism and typical presentation timeline.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        headers: ["Condition", "Mechanism", "Onset After Surfacing"],
        rows: [
          {
            label: "Decompression Sickness (DCS)",
            cells: [
              { answer: "Dissolved nitrogen forms bubbles in tissues during ascent", options: ["Dissolved nitrogen forms bubbles in tissues during ascent", "Air trapped in enclosed body spaces expands", "Air embolism from ruptured alveoli"] },
              { answer: "Minutes to 24 hours", options: ["Immediate upon surfacing", "Minutes to 24 hours", "24-72 hours"] }
            ]
          },
          {
            label: "Arterial Gas Embolism (AGE)",
            cells: [
              { answer: "Air embolism from ruptured alveoli", options: ["Dissolved nitrogen forms bubbles in tissues during ascent", "Air trapped in enclosed body spaces expands", "Air embolism from ruptured alveoli"] },
              { answer: "Immediate upon surfacing", options: ["Immediate upon surfacing", "Minutes to 24 hours", "24-72 hours"] }
            ]
          },
          {
            label: "Barotrauma (Squeeze)",
            cells: [
              { answer: "Air trapped in enclosed body spaces expands", options: ["Dissolved nitrogen forms bubbles in tissues during ascent", "Air trapped in enclosed body spaces expands", "Air embolism from ruptured alveoli"] },
              { answer: "Immediate upon surfacing", options: ["Immediate upon surfacing", "Minutes to 24 hours", "24-72 hours"] }
            ]
          }
        ],
        explanation: "DCS occurs when dissolved nitrogen comes out of solution as bubbles during ascent — onset is typically minutes to hours. AGE is caused by alveolar rupture sending air emboli to the brain — onset is immediate and often presents as stroke-like symptoms. Barotrauma/squeeze involves gas expansion in enclosed spaces (sinuses, ears, lungs) during ascent.",
        guideline_ref: "Divers Alert Network (DAN) – Field Management of Diving Emergencies (2023)",
        clinical_pearl: "A patent foramen ovale (PFO) dramatically increases DCS risk because venous nitrogen bubbles can shunt directly into arterial circulation, bypassing the pulmonary filter. Up to 50% of serious DCS cases have a PFO."
      },
      {
        phase: "treatment",
        prompt: "What is the MOST important prehospital treatment for this patient?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "High-flow oxygen via non-rebreather mask at 15 LPM", correct: true },
          { text: "Position the patient in left lateral Trendelenburg", correct: false },
          { text: "Rapid IV fluid bolus with normal saline", correct: false },
          { text: "Administer aspirin 325 mg for joint pain", correct: false }
        ],
        explanation: "100% high-flow oxygen is the single most important prehospital intervention for DCS. Oxygen accelerates nitrogen washout from tissues, reduces bubble size, and improves tissue oxygenation. Left lateral Trendelenburg was previously recommended for AGE but is no longer supported. IV fluids are helpful (DCS patients are often dehydrated) but secondary to oxygen.",
        guideline_ref: "Divers Alert Network (DAN) – Oxygen First Aid for Diving Emergencies",
        clinical_pearl: "Keep the DCS patient supine — do NOT sit them up, as this can worsen bubble migration to the CNS. The old advice of Trendelenburg positioning has been abandoned as it may increase intracranial pressure without benefit."
      },
      {
        phase: "transport",
        prompt: "You are arranging transport. The nearest hyperbaric chamber is 60 miles away. If air transport is used, what is the critical altitude restriction?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Cabin altitude must not exceed 1,000 feet AGL or the aircraft must be pressurized to sea level", correct: true },
          { text: "Standard cabin pressurization (8,000 feet equivalent) is acceptable", correct: false },
          { text: "Air transport is absolutely contraindicated; ground only", correct: false },
          { text: "Any altitude is safe as long as 100% O2 is maintained", correct: false }
        ],
        explanation: "Altitude worsens DCS by further decreasing ambient pressure and expanding gas bubbles. Air transport should maintain cabin altitude at or below 1,000 feet, ideally pressurized to sea level. Standard commercial cabin pressure (~8,000 ft equivalent) would worsen the condition. Ground transport is preferred if timely, but air transport is acceptable with altitude restrictions.",
        guideline_ref: "UHMS/DAN Guidelines – Transport of the Diving Casualty",
        clinical_pearl: "Always contact Divers Alert Network (DAN) at 1-919-684-9111 for 24/7 dive emergency consultation. They can locate the nearest operational hyperbaric chamber and provide medical direction specific to the dive profile.",
        critical: true
      }
    ]
  },

  // ─── ENVIRONMENTAL 5: Pediatric Vehicular Hyperthermia ───
  {
    id: "nat-env-09",
    title: "Pediatric Hyperthermia — Enclosed Vehicle",
    dispatch: "Child locked in vehicle, bystanders report child unresponsive",
    category: "Environmental",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 2, sex: "M", cc: "Unresponsive child found in hot vehicle" },
    scene: "Shopping center parking lot on a sunny day, ambient temperature 92°F. Bystanders broke the rear window to extract a toddler from a car seat. Child is flushed, hot to touch, and limp. Unknown time in vehicle; car was parked in direct sun. Law enforcement on scene.",
    history: {
      pmh: "None known (per bystanders)",
      meds: "Unknown",
      allergies: "Unknown"
    },
    vitals: { hr: 180, bp: "78/50", rr: 8, spo2: 90, gcs: 6, temp: "107.2°F" },
    questions: [
      {
        phase: "treatment",
        prompt: "This child has a core temperature of 107.2°F, is obtunded, and tachycardic. Rank the cooling interventions in order of effectiveness for rapid core temperature reduction.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Cold water immersion or ice water dousing",
          "Evaporative cooling (wet sheets with fanning)",
          "Cold packs to axillae, groin, and neck",
          "Remove from hot environment and remove clothing"
        ],
        correctOrder: [
          "Cold water immersion or ice water dousing",
          "Evaporative cooling (wet sheets with fanning)",
          "Cold packs to axillae, groin, and neck",
          "Remove from hot environment and remove clothing"
        ],
        explanation: "Cold water immersion provides the fastest cooling rate (~0.2°C/min) and is the gold standard. Evaporative cooling is the next most effective field method. Ice packs to vascular areas are helpful adjuncts. Simply removing from the environment is necessary but insufficient for severe hyperthermia.",
        guideline_ref: "NAEMT PHTLS 10th Edition – Environmental Emergencies; AHA PALS Guidelines (2020)",
        clinical_pearl: "In pediatric hyperthermia, a temperature above 104°F (40°C) with altered mental status defines heat stroke — a true emergency. Children overheat faster than adults due to higher body surface area-to-mass ratio and less effective sweating."
      },
      {
        phase: "treatment",
        prompt: "During cooling, the child begins seizing. As a Paramedic, what is the appropriate intervention?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Midazolam 0.1 mg/kg IM or IN and continue aggressive cooling", correct: true },
          { text: "Stop cooling to avoid triggering more seizures", correct: false },
          { text: "Administer rectal acetaminophen 15 mg/kg", correct: false },
          { text: "Immediate intubation before any medication", correct: false }
        ],
        explanation: "Heat stroke seizures are treated with benzodiazepines (midazolam IM/IN is preferred in the prehospital setting for pediatrics due to rapid onset without IV). Cooling must continue — seizures increase metabolic heat production and worsen the condition. Antipyretics are ineffective because hyperthermia is not fever (no elevated hypothalamic set point). Airway management follows standard PALS algorithms.",
        guideline_ref: "AHA PALS Guidelines – Seizure Management; NAEMT AMLS 3rd Edition",
        clinical_pearl: "Antipyretics (acetaminophen, ibuprofen) do NOT work for environmental hyperthermia. They target the hypothalamic set point, which is normal in heat stroke — the problem is overwhelming external heat load. Only active cooling works.",
        critical: true
      },
      {
        phase: "transport",
        prompt: "Which complications should you specifically monitor for during transport of this pediatric heat stroke patient? Select ALL that apply.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Hypoglycemia", correct: true },
          { text: "Cardiac dysrhythmias from electrolyte imbalance", correct: true },
          { text: "Overcooling/hypothermia during aggressive cooling", correct: true },
          { text: "Allergic reaction to cooling methods", correct: false },
          { text: "Spontaneous pneumothorax", correct: false }
        ],
        explanation: "Pediatric heat stroke patients are at high risk for hypoglycemia (depleted glycogen stores), cardiac dysrhythmias (from hyperkalemia, hyponatremia, and direct cardiac stress), and iatrogenic hypothermia if cooling is not closely monitored. Cease active cooling at 101-102°F to prevent overshoot.",
        guideline_ref: "AHA PALS Guidelines – Post-Resuscitation Care; NAEMT AMLS 3rd Edition",
        clinical_pearl: "Stop active cooling when core temperature reaches 101-102°F (38.3-38.9°C). Temperature will continue to drift downward after cooling stops ('afterdrop'), and overshoot hypothermia can cause coagulopathy and dysrhythmias."
      }
    ]
  },

  // ─── AIRWAY & BREATHING 1: Epiglottitis ───
  {
    id: "nat-air-06",
    title: "Acute Epiglottitis",
    dispatch: "Adult with severe sore throat and difficulty breathing",
    category: "Airway & Breathing",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 42, sex: "M", cc: "Severe sore throat, muffled voice, difficulty swallowing" },
    scene: "Patient sitting upright on the edge of his bed at home, leaning forward with jaw thrust open, drooling into a towel. Wife reports rapid onset over the past 6 hours. He appears anxious and is reluctant to lie down.",
    history: {
      pmh: "Type 2 diabetes, former smoker",
      meds: "Metformin",
      allergies: "NKDA"
    },
    vitals: { hr: 118, bp: "150/90", rr: 26, spo2: 93, gcs: 15, temp: "102.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient is sitting upright in the 'tripod' position, drooling, with a muffled 'hot potato' voice, high fever, and stridor. Which assessment technique must you AVOID?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Auscultating lung sounds", correct: false },
          { text: "Examining the oropharynx with a tongue depressor", correct: true },
          { text: "Applying a pulse oximeter", correct: false },
          { text: "Obtaining a blood pressure", correct: false }
        ],
        explanation: "Direct examination of the oropharynx with a tongue depressor can precipitate complete airway obstruction by causing laryngospasm in a patient with a swollen epiglottis. This applies to both adults and children with suspected epiglottitis. Visual inspection without instrumentation is acceptable.",
        guideline_ref: "NAEMT AMLS 3rd Edition – Upper Airway Emergencies",
        clinical_pearl: "The classic presentation of epiglottitis follows the '4 Ds': Dysphagia, Drooling, Dysphonia (muffled voice), and Distress. In adults, sore throat that seems disproportionately severe compared to exam findings is a red flag.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "Categorize each action as either 'Appropriate' or 'Contraindicated' for this patient.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Allow patient to maintain position of comfort",
          "Force patient supine for spinal immobilization",
          "Provide humidified oxygen via blow-by if not tolerated by mask",
          "Attempt blind nasotracheal intubation",
          "Prepare for surgical airway as backup",
          "Transport with advanced airway equipment immediately available"
        ],
        categories: ["Appropriate", "Contraindicated"],
        correctCategories: {
          "Allow patient to maintain position of comfort": "Appropriate",
          "Force patient supine for spinal immobilization": "Contraindicated",
          "Provide humidified oxygen via blow-by if not tolerated by mask": "Appropriate",
          "Attempt blind nasotracheal intubation": "Contraindicated",
          "Prepare for surgical airway as backup": "Appropriate",
          "Transport with advanced airway equipment immediately available": "Appropriate"
        },
        explanation: "Epiglottitis management centers on keeping the patient calm and in their position of comfort. Forcing them supine, agitating them, or instrumenting the airway blindly can cause complete obstruction. Humidified oxygen, surgical airway readiness, and rapid transport are appropriate. Blind NTI is absolutely contraindicated due to the swollen epiglottis.",
        guideline_ref: "NAEMT AMLS 3rd Edition – Airway Management in Upper Airway Obstruction",
        clinical_pearl: "Adult epiglottitis is increasing in incidence as the Hib-vaccinated generation ages. Unlike pediatric cases, adults may present more subtly — always consider epiglottitis when sore throat severity is out of proportion to pharyngeal findings."
      },
      {
        phase: "treatment",
        prompt: "During transport, the patient's stridor worsens and SpO2 drops to 78%. He becomes obtunded. As a Paramedic, you must secure the airway. What is the best approach?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Video laryngoscopy with a smaller-than-expected ETT, with surgical airway kit open and ready", correct: true },
          { text: "Blind nasotracheal intubation", correct: false },
          { text: "Immediate cricothyrotomy without attempting oral intubation", correct: false },
          { text: "Insert an LMA and ventilate through it", correct: false }
        ],
        explanation: "When epiglottitis progresses to respiratory failure, intubation becomes necessary. Video laryngoscopy provides the best visualization of the distorted anatomy. Use a smaller ETT (6.0-6.5 for an adult) because the airway is narrowed. A surgical airway must be immediately available as backup. Blind NTI is contraindicated, and an LMA will not reliably ventilate past the obstruction.",
        guideline_ref: "Walls & Murphy, Manual of Emergency Airway Management 5th Ed; NAEMT AMLS 3rd Edition",
        clinical_pearl: "Always grab one or two sizes smaller ETT than you would normally use — the swollen epiglottis narrows the glottic opening dramatically. Have a bougie ready as your first-pass adjunct, and a cricothyrotomy kit opened on the stretcher.",
        critical: true
      }
    ]
  },

  // ─── AIRWAY & BREATHING 2: Tracheostomy Emergency ───
  {
    id: "nat-air-07",
    title: "Tracheostomy Emergency — Accidental Decannulation",
    dispatch: "Difficulty breathing, patient with neck stoma",
    category: "Airway & Breathing",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 68, sex: "F", cc: "Respiratory distress with tracheostomy" },
    scene: "Skilled nursing facility. Patient found in bed with tracheostomy tube dislodged and lying on the pillow. Stoma site is visible with pink tissue. Staff reports the trach was placed 3 weeks ago following laryngeal cancer surgery. Patient is working to breathe with audible gurgling from the stoma.",
    history: {
      pmh: "Laryngeal squamous cell carcinoma (total laryngectomy 3 weeks ago), hypertension, GERD",
      meds: "Amlodipine, omeprazole",
      allergies: "Latex"
    },
    vitals: { hr: 128, bp: "168/96", rr: 32, spo2: 81, gcs: 12, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient had a total laryngectomy. Why is this critical information for airway management?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "The patient may have a latex allergy affecting equipment choices", correct: false },
          { text: "The stoma is the patient's ONLY airway — there is no oral/nasal connection to the trachea", correct: true },
          { text: "Laryngectomy patients cannot have cardiac arrest", correct: false },
          { text: "The tracheostomy is temporary and can be removed safely", correct: false }
        ],
        explanation: "After total laryngectomy, the trachea is surgically separated from the pharynx and brought to the skin surface. The stoma is the ONLY airway — there is no connection between the mouth/nose and the lungs. BVM via face mask will NOT ventilate this patient. All ventilation must be delivered through the stoma.",
        guideline_ref: "AHA BLS/ACLS Guidelines – Special Circumstances: Tracheostomy and Stoma Patients (2020)",
        clinical_pearl: "Laryngectomy = stoma is the ONLY airway. Tracheostomy (without laryngectomy) = patient may still have a patent upper airway. This distinction is critical — if unsure, attempt stoma ventilation first, then try oral if stoma fails.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "The stoma is patent but the trach tube fell out. Rank the following steps in correct order for managing this emergency.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Suction the stoma to clear secretions",
          "Attempt to reinsert the tracheostomy tube (or a smaller backup tube)",
          "If reinsertion fails, ventilate via BVM with infant/pediatric mask sealed over the stoma",
          "If unable to ventilate via stoma, insert a cuffed 6.0 ETT into the stoma"
        ],
        correctOrder: [
          "Suction the stoma to clear secretions",
          "Attempt to reinsert the tracheostomy tube (or a smaller backup tube)",
          "If reinsertion fails, ventilate via BVM with infant/pediatric mask sealed over the stoma",
          "If unable to ventilate via stoma, insert a cuffed 6.0 ETT into the stoma"
        ],
        explanation: "First, clear the stoma of secretions to visualize and open the airway. Then attempt to reinsert the trach tube — try the same size, then a smaller size if needed. If the tube cannot be replaced, a pediatric BVM mask can seal over the stoma for ventilation. As a last resort, a standard cuffed ETT (5.0-6.0) can be inserted directly into the stoma.",
        guideline_ref: "AHA BLS/ACLS Guidelines – Tracheostomy Emergencies (2020); National Tracheostomy Safety Project (NTSP) Emergency Algorithm",
        clinical_pearl: "A fresh tracheostomy (<7 days old) is extremely dangerous to reinsert in the field because the tract is not yet mature and you can create a false passage. This patient is 3 weeks post-op, so the tract is more established — but always use gentle technique and a water-soluble lubricant."
      },
      {
        phase: "treatment",
        prompt: "You successfully reinsert a backup trach tube. Which of the following confirms correct placement and ensures ongoing patency?",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        image_desc: "Diagram showing a cross-section of the neck with a tracheostomy tube in place. Labels point to: (A) Capnography waveform on monitor, (B) Condensation in the trach tube during exhalation, (C) Bilateral chest rise with ventilation, (D) Subcutaneous crepitus around the stoma site.",
        options: [
          { text: "A, B, and C all confirm correct placement", correct: true },
          { text: "D confirms correct placement — air is moving through tissues normally", correct: false },
          { text: "Only A (capnography) is reliable; B and C can be misleading", correct: false },
          { text: "Correct placement cannot be confirmed in the field", correct: false }
        ],
        explanation: "Capnography (ETCO2 waveform) is the gold standard for confirming tube placement. Condensation in the tube and bilateral chest rise are supportive confirmation signs. Subcutaneous crepitus (D) is a WARNING sign — it indicates air is leaking into the subcutaneous tissue, suggesting a false passage or dislodged tube, and is NOT a sign of correct placement.",
        guideline_ref: "AHA ACLS Guidelines – Confirmation of Advanced Airway Placement (2020); NAEMT AMLS 3rd Edition",
        clinical_pearl: "Always carry capnography for tracheostomy calls. False passage into the pretracheal space is the most dangerous complication of trach reinsertion — the patient will desaturate rapidly and you'll see no ETCO2 waveform despite apparent 'placement.' Subcutaneous emphysema is your red flag."
      }
    ]
  }
];

if (typeof module !== "undefined") module.exports = BATCH11;
