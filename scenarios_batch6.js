const BATCH6 = [
  {
    id: "nat-ob-02",
    title: "Eclampsia / Seizures in Pregnancy",
    dispatch: "25-year-old female, pregnant, seizure",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: {
      age: 25,
      sex: "Female",
      cc: "Seizure activity in late pregnancy"
    },
    scene: "You arrive at a small apartment. A 25-year-old female who is visibly pregnant is lying on the living room floor. Her partner states she suddenly began shaking and went unresponsive about 2 minutes ago. The shaking has stopped but she remains confused and groaning. There is no evidence of trauma. The partner reports she has been complaining of a severe headache and swollen ankles for the past two days.",
    history: {
      pmh: "First pregnancy, 36 weeks gestation, no prior seizure history",
      meds: "Prenatal vitamins",
      allergies: "NKDA"
    },
    vitals: {
      hr: 112,
      bp: "188/116",
      rr: 22,
      spo2: 94,
      gcs: 10,
      temp: "99.8°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient is postictal and has a blood pressure of 188/116. What is the MOST important immediate action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is lying on her left side, groaning but not following commands. Her airway is patent with occasional gurgling. The partner confirms she is 36 weeks pregnant with no complications until now.",
        clinical_pearl: "In late pregnancy with seizures and severe hypertension, eclampsia should be strongly suspected. Positioning the patient in the left lateral recumbent position helps prevent supine hypotensive syndrome by displacing the uterus off the inferior vena cava.",
        options: [
          {
            text: "Position patient in left lateral recumbent position and suction airway as needed",
            correct: true,
            explanation: "Left lateral positioning prevents aortocaval compression and improves venous return. Suctioning addresses the gurgling to maintain airway patency. These are priority BLS interventions.",
            guideline_ref: "NAEMSP Obstetric Emergencies; AHA ACLS in Pregnancy Guidelines"
          },
          {
            text: "Restrain the patient to prevent injury during further seizure activity",
            correct: false,
            critical: true,
            explanation: "Restraining a seizing or postictal patient is inappropriate and can cause injury. Protect from harm by clearing the area, but do not restrain.",
            guideline_ref: "NAEMSP Seizure Management Guidelines"
          },
          {
            text: "Immediately begin rapid transport without further assessment",
            correct: false,
            explanation: "While transport is important, failing to address airway and positioning first could lead to aspiration or cardiovascular compromise during transport.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Administer oral glucose in case of hypoglycemia",
            correct: false,
            critical: true,
            explanation: "The patient has a GCS of 10 and is not fully conscious. Administering oral glucose to a patient who cannot protect their airway risks aspiration.",
            guideline_ref: "AHA BLS/ACLS Airway Management"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have positioned the patient on her left side and suctioned her airway. She remains postictal with a GCS of 10. Her SpO2 is 94% and vitals are unchanged.",
        explanation: "Airway management and oxygenation take priority, followed by protecting the patient from injury, continuous monitoring, and initiating transport to an appropriate facility. Seizure precautions should be maintained throughout.",
        guideline_ref: "NAEMSP Obstetric Emergencies; National EMS Education Standards",
        items: [
          "Apply high-flow oxygen via non-rebreather mask",
          "Pad surrounding area and maintain seizure precautions",
          "Obtain vascular access (AEMT/Paramedic) or prepare for transport (EMT)",
          "Perform ongoing neurological and vital sign reassessment",
          "Transport emergently to closest appropriate facility with OB capability"
        ]
      },
      {
        phase: "reassessment",
        prompt: "The patient has another seizure en route. Which interventions are appropriate at the EMT level? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Three minutes into transport, the patient begins tonic-clonic seizure activity again. She is on the stretcher with oxygen in place.",
        vitals_update: {
          hr: 124,
          bp: "194/120",
          rr: 8,
          spo2: 88,
          gcs: 3
        },
        clinical_pearl: "Recurrent seizures in eclampsia indicate severe disease. At the EMT level, focus on airway protection, oxygenation, and rapid transport. Magnesium sulfate is the definitive treatment but is a Paramedic-level intervention.",
        options: [
          {
            text: "Maintain left lateral position and protect from injury",
            correct: true,
            explanation: "Continued left lateral positioning and injury prevention are core BLS interventions during active seizures.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Suction airway as needed and maintain high-flow oxygen",
            correct: true,
            explanation: "Airway management is critical during and after seizures. Suction and supplemental oxygen address the dropping SpO2.",
            guideline_ref: "National EMS Education Standards – Airway Management"
          },
          {
            text: "Insert an oropharyngeal airway during active seizure",
            correct: false,
            critical: true,
            explanation: "Do NOT insert an OPA during active seizure activity — it risks oral trauma and broken teeth. Wait until the seizure subsides and only if the patient cannot maintain their own airway.",
            guideline_ref: "NAEMSP Airway Management; AHA BLS Guidelines"
          },
          {
            text: "Notify the receiving facility of the patient's condition and recurrent seizures",
            correct: true,
            explanation: "Early hospital notification allows the OB team to prepare for a critically ill eclamptic patient, improving time to definitive treatment.",
            guideline_ref: "NAEMSP Transport and Communication Guidelines"
          },
          {
            text: "Administer IV magnesium sulfate",
            correct: false,
            explanation: "Magnesium sulfate is the treatment of choice for eclamptic seizures but is outside EMT scope of practice. This is a Paramedic-level intervention.",
            guideline_ref: "NAEMSP Obstetric Emergencies; AHA ACLS in Pregnancy"
          }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize the following findings as either signs of SEVERE preeclampsia/eclampsia or NORMAL pregnancy findings.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The seizure has stopped. You are gathering additional history from the partner while continuing transport.",
        clinical_pearl: "Distinguishing normal pregnancy discomforts from warning signs of preeclampsia/eclampsia is critical. Severe headache, visual changes, upper abdominal pain, and marked edema with hypertension are red flags that demand urgent evaluation.",
        explanation: "Recognizing the constellation of eclampsia warning signs versus normal pregnancy changes helps providers triage and communicate urgency to receiving facilities.",
        guideline_ref: "ACOG Practice Bulletin – Hypertensive Disorders of Pregnancy; NAEMSP Obstetric Emergencies",
        categories: ["Severe Preeclampsia / Eclampsia Warning Signs", "Normal Pregnancy Findings"],
        items: [
          { text: "Blood pressure 188/116", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Mild ankle swelling that worsens throughout the day", category: "Normal Pregnancy Findings" },
          { text: "Severe persistent headache unrelieved by rest", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Occasional heartburn after meals", category: "Normal Pregnancy Findings" },
          { text: "Visual disturbances — seeing spots or flashing lights", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Right upper quadrant or epigastric pain", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Mild shortness of breath when climbing stairs", category: "Normal Pregnancy Findings" },
          { text: "Sudden facial and hand edema", category: "Severe Preeclampsia / Eclampsia Warning Signs" }
        ]
      }
    ]
  },

  {
    id: "nat-ob-03",
    title: "Prolapsed Umbilical Cord",
    dispatch: "30-year-old female, in labor, something is wrong",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: {
      age: 30,
      sex: "Female",
      cc: "Active labor with visible abnormality at vaginal opening"
    },
    scene: "You arrive at a residence where a 30-year-old female is in active labor on the bedroom floor. Her water broke approximately 15 minutes ago. She is in obvious distress, crying and saying 'something came out — that's not the baby!' A loop of pulsating tissue is visible at the vaginal opening. A family member is present and panicking.",
    history: {
      pmh: "G3P2, 38 weeks gestation, uncomplicated pregnancy",
      meds: "Prenatal vitamins, iron supplement",
      allergies: "Penicillin"
    },
    vitals: {
      hr: 108,
      bp: "132/84",
      rr: 24,
      spo2: 98,
      gcs: 15,
      temp: "98.6°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "You observe a loop of pulsating tissue protruding from the vaginal opening. What is the MOST critical immediate intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The cord is visible and you can feel it pulsating. The patient is having strong contractions approximately 2 minutes apart. The baby's presenting part is not yet visible.",
        clinical_pearl: "A prolapsed umbilical cord is a true obstetric emergency. The cord can become compressed between the fetal presenting part and the birth canal, cutting off blood and oxygen supply to the fetus. Relieving pressure on the cord is the single most important prehospital intervention.",
        options: [
          {
            text: "Insert a gloved hand into the vagina and lift the presenting part off the cord",
            correct: true,
            explanation: "Manual elevation of the presenting part off the umbilical cord relieves compression and restores fetal blood flow. This must be maintained continuously until surgical delivery at the hospital.",
            guideline_ref: "NAEMSP Obstetric Emergencies; ACOG Umbilical Cord Prolapse Management"
          },
          {
            text: "Attempt to push the cord back into the vagina",
            correct: false,
            critical: true,
            explanation: "Never attempt to push the cord back in. This can cause vasospasm, knotting, or further compression, worsening fetal compromise.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Clamp and cut the cord immediately",
            correct: false,
            critical: true,
            explanation: "Clamping and cutting a prolapsed cord before delivery would completely cut off the fetal blood supply, resulting in fetal death.",
            guideline_ref: "NAEMSP Obstetric Emergencies; National EMS Education Standards"
          },
          {
            text: "Place the mother in a sitting position to use gravity to assist delivery",
            correct: false,
            explanation: "Sitting or upright positioning increases gravitational pressure on the cord. The correct position is knee-chest or Trendelenburg to reduce pressure on the prolapsed cord.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Arrange the following interventions in the correct order for managing this emergency.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have inserted your gloved hand and are lifting the presenting part off the cord. The cord continues to pulsate. Your partner is preparing for transport.",
        explanation: "The priority sequence is: relieve cord compression (already done), position the mother to reduce pressure, keep the cord moist and warm, administer oxygen to maximize maternal-fetal oxygenation, and transport emergently for cesarean delivery. The hand must remain in place throughout.",
        guideline_ref: "NAEMSP Obstetric Emergencies; ACOG Umbilical Cord Prolapse Management",
        items: [
          "Position the mother in knee-chest or Trendelenburg position",
          "Cover the exposed cord with saline-moistened sterile dressings",
          "Administer high-flow oxygen to the mother via non-rebreather mask",
          "Notify receiving hospital of cord prolapse for emergency cesarean preparation",
          "Transport emergently while maintaining manual elevation of the presenting part"
        ]
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate ongoing actions? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You are en route to the hospital. The patient is in knee-chest position on the stretcher. Your hand remains in place lifting the presenting part. The cord is covered with moist dressings. Transport time is approximately 8 minutes.",
        clinical_pearl: "The hand providing elevation of the presenting part must NOT be removed until the patient is in the operating room for cesarean delivery. Even brief release can cause fatal cord compression. Monitor the cord pulse as an indicator of fetal perfusion.",
        options: [
          {
            text: "Continuously monitor the cord for pulsations",
            correct: true,
            explanation: "Cord pulsations indicate fetal cardiac activity and perfusion. Loss of pulsations suggests worsening compression or fetal compromise.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Maintain manual elevation of the presenting part until hospital handoff",
            correct: true,
            explanation: "The hand must remain in place relieving cord compression until the patient is transferred to the surgical team. This is non-negotiable.",
            guideline_ref: "NAEMSP Obstetric Emergencies; ACOG Cord Prolapse Management"
          },
          {
            text: "Periodically remove your hand to reassess the cord position",
            correct: false,
            critical: true,
            explanation: "Removing your hand, even briefly, allows the presenting part to compress the cord again, potentially causing fetal hypoxia or death.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Keep the exposed cord warm and moist with saline dressings",
            correct: true,
            explanation: "Keeping the cord moist and warm prevents vasospasm from cold or drying, which could reduce blood flow through the umbilical vessels.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Coach the mother to avoid bearing down or pushing",
            correct: true,
            explanation: "Pushing increases pressure on the cord and could worsen compression. The mother should be coached to use panting breaths to resist the urge to push.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          }
        ]
      }
    ]
  },

  {
    id: "nat-peds-02",
    title: "Pediatric Dehydration / Shock",
    dispatch: "9-month-old, not acting right, won't eat",
    category: "OB/Peds/Neonatal",
    difficulty: "Medium",
    level_min: "EMT",
    patient: {
      age: 0.75,
      sex: "Male",
      cc: "Lethargy, poor feeding, vomiting and diarrhea for 2 days"
    },
    scene: "You arrive at a home where a concerned mother is holding a 9-month-old male infant. She states the baby has been vomiting and having watery diarrhea for 2 days and stopped taking breast milk this morning. The infant appears listless and pale. The diaper the mother shows you is dry — she says he hasn't urinated in about 8 hours. The home is clean and there are no signs of trauma or abuse.",
    history: {
      pmh: "Born full-term, no chronic medical conditions, immunizations up to date",
      meds: "None",
      allergies: "NKDA"
    },
    vitals: {
      hr: 188,
      bp: "72/palp",
      rr: 44,
      spo2: 97,
      gcs: 12,
      temp: "100.4°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Based on the Pediatric Assessment Triangle, which component is MOST concerning in this infant?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
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
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You are assessing the infant more thoroughly while your partner prepares for transport. The mother provides additional details about the baby's condition over the past 48 hours.",
        explanation: "Classifying dehydration severity guides the urgency of intervention. Mild dehydration shows subtle signs; moderate shows clear clinical findings; severe dehydration presents with signs of shock and requires immediate fluid resuscitation and emergent transport.",
        guideline_ref: "WHO Dehydration Classification; NAEMSP Pediatric Emergencies; PEPP Shock Assessment",
        categories: ["Mild Dehydration", "Moderate Dehydration", "Severe Dehydration"],
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
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have determined this infant is severely dehydrated and in shock. You are preparing interventions during transport.",
        clinical_pearl: "In pediatric hypovolemic shock, fluid resuscitation is the cornerstone of treatment. The initial bolus is 20 mL/kg of isotonic crystalloid (normal saline or lactated Ringer's). For a 9-month-old weighing approximately 9 kg, that is 180 mL. Reassess after each bolus and repeat up to 3 times (60 mL/kg total).",
        explanation: "Each clinical finding drives a specific intervention. Matching findings to treatments reinforces the assessment-driven approach to pediatric shock management.",
        guideline_ref: "NAEMSP Pediatric Shock Management; PEPP; AHA PALS Guidelines",
        columns: ["Assessment Finding", "Appropriate Intervention"],
        rows: [
          ["Tachycardia (HR 188) with weak pulses and mottling", "20 mL/kg NS bolus (AEMT/Paramedic); keep warm and transport emergently (EMT)"],
          ["Lethargy and poor responsiveness (GCS 12)", "Continuous monitoring of mental status; reassess after each intervention"],
          ["Temperature 100.4°F with ongoing fluid losses", "Prevent further heat loss — remove wet clothing, wrap in warm blankets"],
          ["SpO2 97% with tachypnea (RR 44)", "Provide blow-by oxygen or non-rebreather mask; avoid agitating the infant"],
          ["No urine output for 8 hours", "Document and report to receiving facility as indicator of perfusion status"]
        ]
      }
    ]
  },

  {
    id: "nat-beh-02",
    title: "Excited Delirium / Agitated Patient",
    dispatch: "30-year-old male, combative, police on scene, needs medical",
    category: "Behavioral/Psychiatric",
    difficulty: "Hard",
    level_min: "EMT",
    patient: {
      age: 30,
      sex: "Male",
      cc: "Extreme agitation, combativeness, incoherent speech"
    },
    scene: "You arrive at a parking lot where police have a 30-year-old male on the ground in handcuffs. He is naked, diaphoretic, and screaming incoherently. Officers report he was running through traffic, threw a trash can through a store window, and fought four officers before being subdued. He was tased twice. He continues to struggle against restraints and appears to have superhuman strength. His skin is hot to the touch and flushed. There are no obvious weapons or drug paraphernalia visible.",
    history: {
      pmh: "Unknown — patient is not providing history",
      meds: "Unknown",
      allergies: "Unknown"
    },
    vitals: {
      hr: 162,
      bp: "198/110",
      rr: 36,
      spo2: 92,
      gcs: 12,
      temp: "104.2°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "This patient presents with extreme agitation, hyperthermia, and tachycardia after a violent encounter. What is the GREATEST immediate threat to this patient's life?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient continues to struggle violently. His skin is burning hot and drenched in sweat. He is not responding to verbal commands and alternates between screaming and grunting. Officers state the encounter began about 20 minutes ago.",
        clinical_pearl: "Excited delirium syndrome carries a significant risk of sudden cardiac arrest. The combination of extreme metabolic demand, hyperthermia, acidosis, and catecholamine surge creates a perfect storm for fatal dysrhythmias. Rapid cooling and sedation (at Paramedic level) are time-critical.",
        options: [
          {
            text: "Cardiac arrest from metabolic crisis — hyperthermia, acidosis, and extreme exertion",
            correct: true,
            explanation: "The combination of severe hyperthermia (104.2°F), extreme physical exertion, tachycardia, and likely metabolic acidosis places this patient at imminent risk for sudden cardiac arrest. This is the leading cause of death in excited delirium.",
            guideline_ref: "NAEMSP Position Statement on Excited Delirium; ACEP Excited Delirium White Paper"
          },
          {
            text: "Airway obstruction from prone positioning",
            correct: false,
            explanation: "While positional asphyxia is a concern and prone restraint should be avoided, the metabolic crisis and hyperthermia pose a more immediate and lethal threat in this presentation.",
            guideline_ref: "NAEMSP Restraint Guidelines"
          },
          {
            text: "Bleeding from injuries sustained during the altercation",
            correct: false,
            explanation: "While traumatic injuries should be assessed, there is no evidence of significant hemorrhage. The physiological crisis from the agitated state is far more dangerous.",
            guideline_ref: "NAEMSP Trauma Assessment"
          },
          {
            text: "Taser barb injuries requiring immediate removal",
            correct: false,
            explanation: "Taser barbs are low-priority injuries. They do not pose an immediate life threat and should not distract from managing the metabolic emergency.",
            guideline_ref: "NAEMSP Conducted Energy Device Injuries"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following interventions are appropriate for this patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Police have the patient in handcuffs. He is on his side but still actively struggling. You need to begin medical management while maintaining scene safety.",
        options: [
          {
            text: "Ensure the patient is NOT kept in prone/facedown position",
            correct: true,
            explanation: "Prone restraint contributes to positional asphyxia and is especially dangerous in agitated, obese, or intoxicated patients. The patient must be placed on their side or sitting up as soon as possible.",
            guideline_ref: "NAEMSP Position Statement on Excited Delirium; DOJ Positional Asphyxia Guidelines"
          },
          {
            text: "Begin active cooling measures — remove excess clothing, apply cold packs to neck, axillae, and groin",
            correct: true,
            explanation: "Hyperthermia (104.2°F) is immediately life-threatening. Aggressive cooling is critical to prevent organ damage, rhabdomyolysis, and cardiac arrest.",
            guideline_ref: "NAEMSP Excited Delirium Management; ACEP Hyperthermia Guidelines"
          },
          {
            text: "Apply a hobble restraint connecting wrists to ankles behind the back",
            correct: false,
            critical: true,
            explanation: "Hogtie/hobble restraints are contraindicated and have been associated with in-custody deaths. They severely restrict breathing and worsen metabolic acidosis.",
            guideline_ref: "NAEMSP Position Statement on Restraint; DOJ Guidelines"
          },
          {
            text: "Continuously monitor cardiac rhythm and prepare for possible cardiac arrest",
            correct: true,
            explanation: "These patients are at extreme risk for sudden cardiac arrest. Early cardiac monitoring and having defibrillation immediately available is essential.",
            guideline_ref: "NAEMSP Excited Delirium Management; AHA Cardiac Arrest Guidelines"
          },
          {
            text: "Withhold treatment until the patient calms down on their own",
            correct: false,
            critical: true,
            explanation: "Waiting for the patient to 'calm down' is extremely dangerous. Sudden quiet after extreme agitation may indicate impending cardiovascular collapse, not improvement. Immediate medical intervention is required.",
            guideline_ref: "NAEMSP Excited Delirium Management; ACEP White Paper"
          },
          {
            text: "Administer high-flow oxygen",
            correct: true,
            explanation: "The patient is hypoxic (SpO2 92%) and in a state of extreme metabolic demand. Supplemental oxygen helps address tissue hypoxia and metabolic acidosis.",
            guideline_ref: "NAEMSP Oxygen Therapy Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following treatment priorities in order from FIRST to LAST.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You and your partner are now managing this patient. Police are assisting with safe positioning. The patient remains agitated but is now on his side.",
        explanation: "The treatment sequence prioritizes preventing positional asphyxia (most immediate death risk), then addressing hyperthermia, ensuring oxygenation, monitoring for cardiac arrest, and transporting emergently. Every minute of delay increases mortality risk.",
        guideline_ref: "NAEMSP Excited Delirium Management; ACEP White Paper on Excited Delirium",
        items: [
          "Ensure patient is positioned on their side — NOT prone or hogtied",
          "Begin aggressive cooling — ice packs to groin, axillae, and neck",
          "Apply high-flow oxygen and monitor SpO2",
          "Place cardiac monitor and prepare defibrillator (AED at EMT level)",
          "Transport emergently with continuous reassessment"
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize the following findings as either signs of WORSENING CONDITION requiring immediate intervention or EXPECTED FINDINGS in this presentation.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You are en route to the hospital. The patient has been on his side with cooling measures in place for 4 minutes. You are performing ongoing assessment.",
        clinical_pearl: "The most dangerous moment in excited delirium is when the patient suddenly becomes quiet and stops struggling. This is NOT a sign of improvement — it often precedes cardiac arrest. Treat sudden calm as a critical deterioration.",
        explanation: "Differentiating expected findings from signs of imminent collapse is essential. Sudden cessation of agitation, declining mental status, and loss of pulses indicate the patient is transitioning from a hypermetabolic state to cardiovascular collapse.",
        guideline_ref: "NAEMSP Excited Delirium Management; ACEP Excited Delirium White Paper",
        categories: ["Worsening — Immediate Intervention Needed", "Expected Finding in This Presentation"],
        items: [
          { text: "Patient suddenly stops struggling and becomes quiet", category: "Worsening — Immediate Intervention Needed" },
          { text: "Continued diaphoresis (profuse sweating)", category: "Expected Finding in This Presentation" },
          { text: "Heart rate remains elevated at 158 bpm", category: "Expected Finding in This Presentation" },
          { text: "Patient becomes unresponsive with agonal breathing", category: "Worsening — Immediate Intervention Needed" },
          { text: "Incoherent screaming and continued agitation", category: "Expected Finding in This Presentation" },
          { text: "Loss of peripheral pulses with central pulses weakening", category: "Worsening — Immediate Intervention Needed" },
          { text: "Skin remains hot and flushed", category: "Expected Finding in This Presentation" },
          { text: "Cardiac monitor shows widening QRS complexes", category: "Worsening — Immediate Intervention Needed" }
        ]
      }
    ]
  },

  {
    id: "nat-beh-03",
    title: "Suicidal Patient with Ingestion",
    dispatch: "17-year-old female, possible ingestion, crying",
    category: "Behavioral/Psychiatric",
    difficulty: "Medium",
    level_min: "EMT",
    patient: {
      age: 17,
      sex: "Female",
      cc: "Intentional ingestion of unknown quantity of pills, now regretful"
    },
    scene: "You arrive at a suburban home where a 17-year-old female is sitting on her bed, crying. Her mother met you at the door and is visibly upset. The patient is holding an empty medication bottle and tells you through tears, 'I took a bunch of my mom's pills about 30 minutes ago. I didn't really want to die, I just wanted the pain to stop. But now I'm scared.' The empty bottle contained acetaminophen 500mg tablets — the label indicates it was a 50-count bottle that was nearly full. There is no other evidence of ingestion or self-harm.",
    history: {
      pmh: "History of depression, sees a therapist weekly",
      meds: "Sertraline 50mg daily",
      allergies: "NKDA"
    },
    vitals: {
      hr: 96,
      bp: "118/72",
      rr: 18,
      spo2: 99,
      gcs: 15,
      temp: "98.4°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient's vital signs are currently normal and she is alert and oriented. What is the MOST important consideration about this ingestion?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is cooperative, tearful, and answering questions. She states she swallowed 'a big handful' of pills about 30 minutes ago. She has not vomited. Her vitals are stable and she appears clinically well at this time.",
        clinical_pearl: "Acetaminophen overdose is extremely deceptive. Patients often look and feel completely well for the first 24 hours while silent hepatic destruction is occurring. A potentially lethal dose (>150 mg/kg) requires urgent treatment with N-acetylcysteine, which is most effective within 8 hours. Never be falsely reassured by normal vitals in early acetaminophen ingestion.",
        options: [
          {
            text: "The patient may appear well now but could develop delayed life-threatening organ damage",
            correct: true,
            explanation: "Acetaminophen toxicity has a deceptive timeline. The patient may look fine for 12-24 hours while hepatotoxic metabolites cause irreversible liver damage. Early hospital treatment is critical even though the patient currently looks well.",
            guideline_ref: "NAEMSP Toxicology Emergencies; American Association of Poison Control Centers Guidelines"
          },
          {
            text: "Since vital signs are normal, this is primarily a psychiatric emergency, not medical",
            correct: false,
            critical: true,
            explanation: "This is BOTH a medical and psychiatric emergency. Dismissing the medical significance because vitals are currently normal could result in the patient dying from liver failure days later. The ingestion must be treated as medically urgent.",
            guideline_ref: "NAEMSP Toxicology Emergencies; NAEMSP Behavioral Emergencies"
          },
          {
            text: "The patient should be made to vomit to remove the pills",
            correct: false,
            critical: true,
            explanation: "Inducing emesis is no longer recommended in the prehospital setting. It is ineffective at removing significant amounts of ingested substance and can cause aspiration, esophageal tears, and delays to definitive care.",
            guideline_ref: "NAEMSP Toxicology Guidelines; American Association of Poison Control Centers"
          },
          {
            text: "Since she regrets the action, she is no longer a suicide risk",
            correct: false,
            explanation: "Expressing regret does not eliminate suicide risk. Ambivalence is common in suicidal patients. She still requires psychiatric evaluation and should not be left alone or have the seriousness of her situation minimized.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; National Suicide Prevention Standards"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following actions in the correct order for managing this patient.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is cooperative and willing to go to the hospital. Her mother wants to drive her. You need to determine the appropriate course of action.",
        explanation: "The correct sequence addresses scene safety and evidence preservation first, then medical assessment, emotional support and rapport-building, and finally transport to an appropriate facility. Bringing the medication container provides critical information for toxicology treatment at the hospital.",
        guideline_ref: "NAEMSP Behavioral Emergencies; NAEMSP Toxicology Guidelines; National EMS Education Standards",
        items: [
          "Ensure scene safety — confirm no weapons or additional hazards, secure remaining medications",
          "Perform thorough patient assessment and gather ingestion details (what, how much, when)",
          "Establish rapport — use calm, non-judgmental communication and active listening",
          "Bring the medication container and any remaining pills to the hospital",
          "Transport to a facility capable of both medical management and psychiatric evaluation"
        ]
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate actions? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "The patient is on the stretcher, crying quietly. Her mother is riding in the front of the ambulance. The patient says, 'Please don't tell anyone at school about this.' She asks you, 'Do you think I'm crazy?'",
        clinical_pearl: "Your interaction with a suicidal patient in the ambulance may be one of the most impactful moments in their life. Compassionate, non-judgmental care has been shown to reduce future suicide attempts. Avoid clichés like 'you have so much to live for' — instead, validate their pain and reinforce that seeking help was the right thing to do.",
        options: [
          {
            text: "Reassure confidentiality within professional limits and answer her questions honestly and compassionately",
            correct: true,
            explanation: "Honest, compassionate communication builds trust. Explain that her medical information is protected but that the treatment team needs to know what happened to help her.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; Crisis Intervention Standards"
          },
          {
            text: "Monitor vital signs every 5 minutes — watch for nausea, vomiting, or abdominal pain",
            correct: true,
            explanation: "Early signs of acetaminophen toxicity include nausea, vomiting, and right upper quadrant pain. Frequent vital sign monitoring detects any early deterioration.",
            guideline_ref: "NAEMSP Toxicology Emergencies; Poison Control Guidelines"
          },
          {
            text: "Tell her 'Don't worry, everything will be fine — you have so much to live for'",
            correct: false,
            explanation: "Dismissive platitudes minimize the patient's emotional pain and can damage rapport. Instead, validate her feelings: 'It sounds like you've been in a lot of pain. I'm glad you're getting help now.'",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; National Suicide Prevention Standards"
          },
          {
            text: "Do not leave the patient unattended at any point during transport",
            correct: true,
            explanation: "Suicidal patients must never be left alone. They may attempt further self-harm, attempt to leave the ambulance, or have a medical decompensation from the ingestion.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines"
          },
          {
            text: "Scold the patient to make her understand the seriousness of her actions",
            correct: false,
            critical: true,
            explanation: "Lecturing, scolding, or shaming a suicidal patient is harmful and unprofessional. It increases psychological distress and may reduce the likelihood of seeking help in the future.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; Crisis Intervention Standards"
          }
        ]
      }
    ]
  },

  {
    id: "nat-pharm-01",
    title: "Pediatric Status Epilepticus — Medication Dosing",
    dispatch: "8-year-old, seizure won't stop, been 10 minutes",
    category: "Pharmacology",
    difficulty: "Hard",
    level_min: "Paramedic",
    patient: {
      age: 8,
      sex: "Male",
      cc: "Continuous seizure activity lasting over 10 minutes"
    },
    scene: "You arrive at an elementary school where an 8-year-old male is having a generalized tonic-clonic seizure on the floor of the nurse's office. The school nurse reports the seizure started approximately 12 minutes ago and has not stopped. The child has no known seizure history. He weighs 35 kg per school health records. The nurse has placed him on his side and cleared furniture away. There is no evidence of trauma. The child is cyanotic around the lips.",
    history: {
      pmh: "No seizure history, ADHD",
      meds: "Methylphenidate 20mg daily (taken this morning per school nurse)",
      allergies: "NKDA"
    },
    vitals: {
      hr: 148,
      bp: "106/68",
      rr: 8,
      spo2: 88,
      gcs: 3,
      temp: "101.8°F"
    },
    questions: [
      {
        phase: "treatment",
        prompt: "Which benzodiazepine and route of administration is the MOST appropriate first-line treatment for this patient if IV access is not yet established?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The child continues to seize. You do not have IV access yet. The seizure has now been ongoing for approximately 14 minutes. Your partner is managing the airway with suctioning and BVM-assisted ventilations.",
        clinical_pearl: "For status epilepticus without IV access, intranasal midazolam (IN) and intramuscular midazolam (IM) have been shown to be equally effective to IV diazepam and have the advantage of not requiring vascular access, which saves critical time. The dose for IM midazolam is 0.2 mg/kg (max 10 mg); for IN midazolam it is 0.2 mg/kg (max 10 mg).",
        options: [
          {
            text: "Midazolam 7 mg IM (0.2 mg/kg × 35 kg)",
            correct: true,
            explanation: "IM midazolam at 0.2 mg/kg is the preferred first-line treatment for status epilepticus when IV access is unavailable. For a 35 kg child: 0.2 × 35 = 7 mg IM. This avoids delays from attempting IV access during active seizure.",
            guideline_ref: "AHA PALS Status Epilepticus Algorithm; NAEMSP Seizure Management Guidelines"
          },
          {
            text: "Diazepam 10 mg IV push",
            correct: false,
            explanation: "IV access is not established. Attempting IV access during active seizure activity delays treatment. Additionally, 10 mg would exceed the typical pediatric dose of 0.1-0.2 mg/kg (3.5-7 mg for 35 kg).",
            guideline_ref: "AHA PALS Guidelines; NAEMSP Seizure Management"
          },
          {
            text: "Midazolam 17.5 mg IM (0.5 mg/kg × 35 kg)",
            correct: false,
            critical: true,
            explanation: "This is a dangerous overdose. The correct IM dose is 0.2 mg/kg, not 0.5 mg/kg. A dose of 17.5 mg could cause severe respiratory depression or arrest in a child.",
            guideline_ref: "AHA PALS Guidelines; Pediatric Pharmacology References"
          },
          {
            text: "Lorazepam 4 mg rectal",
            correct: false,
            explanation: "Lorazepam is not typically given rectally. Rectal diazepam is an option, but IM or IN midazolam is preferred due to faster onset and more reliable absorption. The correct rectal diazepam dose would be 0.3-0.5 mg/kg.",
            guideline_ref: "AHA PALS Guidelines; NAEMSP Seizure Management"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of the pediatric status epilepticus treatment algorithm in the correct order.",
        type: "order",
        level_filter: "Paramedic",
        narrative: "You have administered midazolam IM. After 3 minutes, the seizure activity has slowed but not stopped completely. Your partner has established IV access.",
        vitals_update: {
          hr: 138,
          bp: "100/64",
          rr: 12,
          spo2: 92,
          gcs: 3
        },
        explanation: "The status epilepticus algorithm follows a stepwise approach: initial benzodiazepine, reassess, repeat benzodiazepine if needed, then consider second-line agents if seizures persist after two adequate benzodiazepine doses. Airway management and oxygenation are continuous priorities throughout.",
        guideline_ref: "AHA PALS Status Epilepticus Algorithm; Neurocritical Care Society Guidelines for Status Epilepticus",
        items: [
          "Administer first-line benzodiazepine (midazolam IM/IN if no IV — DONE)",
          "Reassess airway, breathing, and seizure activity after 5 minutes",
          "If seizure persists, administer second dose of benzodiazepine via IV/IO (now that access is established)",
          "Check blood glucose and treat hypoglycemia if present",
          "If seizure continues after two benzodiazepine doses, consider second-line agent (e.g., levetiracetam, fosphenytoin per protocol)",
          "Transport emergently with continuous monitoring and seizure precautions"
        ]
      },
      {
        phase: "decision-making",
        prompt: "Calculate the correct doses for each medication for this 35 kg patient.",
        type: "table",
        level_filter: "Paramedic",
        narrative: "The seizure has finally stopped after the second dose of benzodiazepine. The child is postictal. You are reviewing your medication reference to prepare for possible recurrence and ensure all dosing has been correct.",
        clinical_pearl: "Pediatric medication errors are among the most common and dangerous in EMS. Always use weight-based dosing (mg/kg), double-check your math, and use a length-based resuscitation tape (Broselow) when available. The most lethal dosing errors involve 10-fold miscalculations — always verify decimal placement.",
        explanation: "Accurate weight-based dosing is critical in pediatric emergencies. This table covers the key medications used in pediatric status epilepticus. Each dose is calculated as: dose (mg) = weight (kg) × dose per kg. Always verify against the maximum single dose.",
        guideline_ref: "AHA PALS Pharmacology; NAEMSP Pediatric Drug Dosing; Broselow Tape Reference",
        columns: ["Medication", "Dose per kg", "Calculated Dose (35 kg)", "Max Single Dose", "Route"],
        rows: [
          ["Midazolam (first-line, no IV)", "0.2 mg/kg", "7 mg", "10 mg", "IM or IN"],
          ["Midazolam (IV/IO)", "0.1 mg/kg", "3.5 mg", "5 mg", "IV/IO"],
          ["Diazepam (IV)", "0.2 mg/kg", "7 mg", "10 mg", "IV"],
          ["Diazepam (rectal)", "0.5 mg/kg", "17.5 mg", "20 mg", "PR"],
          ["Lorazepam (IV/IO)", "0.1 mg/kg", "3.5 mg", "4 mg", "IV/IO"]
        ]
      }
    ]
  }
];
