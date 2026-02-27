const BATCH4 = [
  {
    id: "nat-air-02",
    title: "COPD Exacerbation",
    dispatch: "78-year-old male, difficulty breathing, can't speak full sentences",
    category: "Airway & Breathing",
    difficulty: "Medium",
    level_min: "EMT",
    patient: {
      age: 78,
      sex: "M",
      cc: "Difficulty breathing"
    },
    scene: "You arrive at a small apartment. An elderly male is sitting on the edge of his recliner, leaning forward with hands on his knees. He is using pursed-lip breathing and can only speak 2-3 words between breaths. You notice a home oxygen concentrator and multiple inhalers on the end table.",
    history: {
      pmh: "Chronic lung disease, hypertension, former 40-pack-year smoker (quit 5 years ago)",
      meds: "Tiotropium inhaler, albuterol PRN, lisinopril, home O2 at 2 LPM",
      allergies: "Sulfa drugs"
    },
    vitals: {
      hr: 108,
      bp: "158/92",
      rr: 28,
      spo2: 86,
      gcs: 15,
      temp: "99.1°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Your patient is on home oxygen at 2 LPM via nasal cannula and his SpO2 reads 86%. What is the MOST appropriate next step for oxygen administration?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is working hard to breathe. Accessory muscle use is visible in the neck and intercostal spaces. He gasps out: 'Can't... catch... my breath.' His lips appear dusky.",
        clinical_pearl: "Patients with chronic lung disease may rely on hypoxic drive, but acute hypoxia is always dangerous. The priority is correcting life-threatening hypoxemia. Titrate oxygen to achieve an SpO2 of 88-92% in known chronic lung disease patients, but never withhold oxygen from a hypoxic patient.",
        options: [
          {
            text: "Keep the nasal cannula at 2 LPM since he has chronic lung disease and you don't want to eliminate his hypoxic drive",
            correct: false,
            critical: true,
            explanation: "Withholding oxygen from a hypoxic patient is dangerous. The 'hypoxic drive' concern does not justify allowing an SpO2 of 86%. Acute hypoxia kills faster than any theoretical respiratory drive suppression.",
            guideline_ref: "AHA/ECC Guidelines — Supplemental Oxygen in Acute Respiratory Distress"
          },
          {
            text: "Increase to a non-rebreather mask at 15 LPM immediately",
            correct: false,
            explanation: "While high-flow oxygen may ultimately be needed, jumping straight to 15 LPM NRB bypasses a titrated approach. A reasonable step-up (e.g., nasal cannula increase or simple mask) targeting 88-92% is more appropriate for a patient with known chronic lung disease.",
            guideline_ref: "NAEMSP Position Statement — Oxygen Administration"
          },
          {
            text: "Titrate oxygen upward with the goal of achieving an SpO2 of 88-92%, reassessing after each adjustment",
            correct: true,
            explanation: "Titrating oxygen to an SpO2 target of 88-92% balances correcting dangerous hypoxemia while respecting the patient's chronic physiology. Increase flow rate or switch delivery devices as needed while monitoring closely.",
            guideline_ref: "AHA/ECC Guidelines — Supplemental Oxygen Titration in COPD"
          },
          {
            text: "Remove the nasal cannula and apply a Venturi mask at 24% FiO2",
            correct: false,
            explanation: "A Venturi mask at 24% FiO2 delivers a precise but very low concentration — potentially less than what his current nasal cannula provides. This patient needs MORE oxygen, not a device change that may deliver equivalent or less.",
            guideline_ref: "AARC Clinical Practice Guidelines — Oxygen Therapy"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient's respiratory distress.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "After titrating oxygen, the patient's SpO2 has improved to 89%. He remains in significant distress with audible expiratory wheezing. He tells you he used his albuterol inhaler three times before calling 911 with no relief.",
        clinical_pearl: "Coaching a patient through pursed-lip breathing can help reduce air trapping and improve ventilation. Position of comfort (usually upright/tripod) significantly aids respiratory mechanics in obstructive lung disease.",
        items: [
          "Position patient upright in position of comfort",
          "Assist with prescribed albuterol inhaler using spacer if available",
          "Continue to titrate supplemental oxygen to target SpO2 88-92%",
          "Obtain full set of vitals and reassess lung sounds",
          "Prepare for transport and provide ongoing reassessment"
        ],
        explanation: "Positioning comes first to optimize respiratory mechanics. Medication assistance follows since the patient has a prescribed inhaler (EMT scope with medical direction). Oxygen titration is concurrent but listed after initial positioning. Full vital signs and lung sound reassessment guide further decisions, then prepare for transport with ongoing monitoring.",
        guideline_ref: "NREMT Psychomotor Skills — Supplemental Oxygen / Airway Management; AHA BLS Guidelines"
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate ongoing assessments and interventions for this patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You are en route to the hospital. The patient's breathing has improved slightly with the inhaler but he remains tachypneic at 24/min. SpO2 is 90% on supplemental oxygen.",
        vitals_update: {
          hr: 102,
          bp: "150/88",
          rr: 24,
          spo2: 90,
          gcs: 15
        },
        clinical_pearl: "Worsening mental status in a respiratory patient (confusion, drowsiness, agitation) may indicate CO2 retention and impending respiratory failure — this is a critical finding that demands immediate intervention.",
        options: [
          {
            text: "Reassess lung sounds every 5 minutes",
            correct: true,
            explanation: "Serial lung sound assessment tracks response to treatment and can identify deterioration (diminishing sounds may indicate worsening air trapping or fatigue).",
            guideline_ref: "EMT National Education Standards — Reassessment"
          },
          {
            text: "Monitor mental status closely for any changes",
            correct: true,
            explanation: "Declining mental status may indicate CO2 narcosis or worsening hypoxia — both are signs of impending respiratory failure requiring escalation of care.",
            guideline_ref: "AHA/ECC Guidelines — Respiratory Emergency Assessment"
          },
          {
            text: "Lay the patient supine for transport to maintain spinal alignment",
            correct: false,
            critical: true,
            explanation: "Placing a patient in severe respiratory distress supine worsens breathing mechanics and can precipitate respiratory failure. Maintain upright or semi-Fowler's position.",
            guideline_ref: "EMT National Education Standards — Patient Positioning"
          },
          {
            text: "Continue to monitor SpO2 and titrate oxygen as needed",
            correct: true,
            explanation: "Continuous pulse oximetry allows real-time tracking of oxygenation status and guides oxygen titration during transport.",
            guideline_ref: "NAEMSP Position Statement — Pulse Oximetry Monitoring"
          },
          {
            text: "Prepare bag-valve mask in case of respiratory failure",
            correct: true,
            explanation: "Having BVM ready is prudent for any patient in significant respiratory distress. If the patient fatigues or mental status declines, assisted ventilations may be needed immediately.",
            guideline_ref: "AHA BLS Guidelines — Assisted Ventilation"
          },
          {
            text: "Administer a second round of the patient's albuterol inhaler without contacting medical direction",
            correct: false,
            explanation: "EMTs assisting with a patient's prescribed medication should follow local protocol regarding repeat doses and medical direction contact. Administering additional doses without authorization exceeds standard practice.",
            guideline_ref: "NREMT Practice Standards — Medication Administration (EMT)"
          }
        ]
      }
    ]
  },

  {
    id: "nat-air-03",
    title: "Pediatric Foreign Body Airway Obstruction",
    dispatch: "18-month-old, choking, turning blue",
    category: "Airway & Breathing",
    difficulty: "Medium",
    level_min: "EMR",
    patient: {
      age: 1.5,
      sex: "M",
      cc: "Choking"
    },
    scene: "You arrive at a home to find a frantic mother holding an 18-month-old boy. The child is limp, cyanotic around the lips, and making no sounds. The mother screams that he was eating grapes and suddenly couldn't breathe. She tried to help but 'nothing worked.'",
    history: {
      pmh: "None, healthy child, up to date on immunizations",
      meds: "None",
      allergies: "No known allergies"
    },
    vitals: {
      hr: 160,
      bp: "Not obtained",
      rr: 4,
      spo2: 68,
      gcs: 9,
      temp: "Not obtained"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The 18-month-old is unresponsive and not breathing effectively. You cannot visualize anything in the mouth. What is the MOST appropriate immediate action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The child is limp in the mother's arms. His chest is barely moving with minimal air exchange. His lips and fingertips are blue. You open his mouth and perform a visual check — you do not see a foreign body.",
        clinical_pearl: "Blind finger sweeps are contraindicated in infants and children — they can push the object deeper. Only remove a foreign body you can directly visualize.",
        options: [
          {
            text: "Perform a blind finger sweep to try to dislodge the object",
            correct: false,
            critical: true,
            explanation: "Blind finger sweeps are contraindicated in infants and children. This maneuver can push the foreign body deeper into the airway, worsening the obstruction.",
            guideline_ref: "AHA BLS Guidelines — FBAO in Infants"
          },
          {
            text: "Begin cycles of 5 back blows followed by 5 chest thrusts",
            correct: true,
            explanation: "For an unresponsive infant with a complete airway obstruction, the AHA recommends cycles of 5 back blows and 5 chest thrusts, checking the mouth between each cycle for a visible foreign body. If the infant becomes pulseless, transition to CPR.",
            guideline_ref: "AHA BLS Guidelines — FBAO Relief in Unresponsive Infants"
          },
          {
            text: "Perform abdominal thrusts (Heimlich maneuver)",
            correct: false,
            critical: true,
            explanation: "Abdominal thrusts are NOT recommended for infants under 1 year of age due to the risk of liver and organ injury. This patient is 18 months old — while technically past infancy, the AHA recommends back blows and chest thrusts for this age group.",
            guideline_ref: "AHA BLS Guidelines — FBAO Age-Specific Techniques"
          },
          {
            text: "Begin immediate CPR with chest compressions",
            correct: false,
            explanation: "CPR is indicated if the infant becomes pulseless. The child currently has a pulse (HR 160). The priority is relieving the airway obstruction first with back blows and chest thrusts.",
            guideline_ref: "AHA BLS Guidelines — Pediatric Cardiac Arrest vs. FBAO"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of infant FBAO management in the correct order for this unresponsive patient.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You take the child from the mother and position him for intervention. You need to act quickly — the child's color is worsening.",
        clinical_pearl: "When delivering back blows to an infant, support the jaw and head with one hand while the infant is face-down along your forearm, with the head lower than the trunk. Gravity assists dislodgment.",
        items: [
          "Position infant face-down on forearm, supporting the head, with head lower than trunk",
          "Deliver 5 firm back blows between the shoulder blades with the heel of your hand",
          "Turn infant face-up, supporting head and neck, keeping head lower than trunk",
          "Deliver 5 chest thrusts using two fingers on the lower half of the breastbone",
          "Open the mouth and perform a visual check — remove foreign body only if visible",
          "If obstruction not relieved, repeat cycles; if infant becomes unresponsive and pulseless, begin CPR"
        ],
        explanation: "The AHA-recommended sequence for infant FBAO is: position face-down for back blows, deliver 5 back blows, turn face-up for chest thrusts, deliver 5 chest thrusts, then visually check the airway. Repeat until the object is expelled or the patient becomes pulseless (then transition to CPR).",
        guideline_ref: "AHA BLS Guidelines — Foreign Body Airway Obstruction in Infants"
      },
      {
        phase: "reassessment",
        prompt: "Categorize each item as either appropriate for an INFANT (<1 year) or a CHILD (1-puberty) during FBAO management.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "After several cycles, the grape dislodges and the child begins crying. While monitoring the patient, you review age-appropriate FBAO techniques with your partner.",
        clinical_pearl: "The transition from 'infant' to 'child' FBAO technique is approximately at age 1. For patients near the age boundary (like this 18-month-old), back blows + chest thrusts remain appropriate if the child is small enough to position on the forearm.",
        categories: ["Infant FBAO Technique", "Child FBAO Technique"],
        items: [
          { text: "5 back blows + 5 chest thrusts", category: "Infant FBAO Technique" },
          { text: "Abdominal thrusts (Heimlich maneuver)", category: "Child FBAO Technique" },
          { text: "Support on forearm, head lower than trunk", category: "Infant FBAO Technique" },
          { text: "Stand or kneel behind the patient", category: "Child FBAO Technique" },
          { text: "Two-finger chest thrust technique", category: "Infant FBAO Technique" },
          { text: "Inward and upward fist thrusts above the navel", category: "Child FBAO Technique" }
        ],
        explanation: "Infant FBAO relief uses back blows and chest thrusts with the infant positioned along the rescuer's forearm. Child FBAO relief uses abdominal thrusts (Heimlich maneuver) performed from behind the patient. Knowing the age-appropriate technique is essential to avoid injury.",
        guideline_ref: "AHA BLS Guidelines — FBAO Management by Age Group"
      }
    ]
  },

  {
    id: "nat-card-03",
    title: "Cardiac Arrest with ROSC",
    dispatch: "52-year-old female, collapsed at gym, CPR in progress",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "EMT",
    patient: {
      age: 52,
      sex: "F",
      cc: "Unresponsive, collapsed"
    },
    scene: "You arrive at a large fitness center. A personal trainer is performing CPR on a 52-year-old female who collapsed on the treadmill approximately 6 minutes ago. An AED is attached and has delivered one shock. A bystander reports the patient suddenly grabbed her chest and fell off the treadmill. The collapse was witnessed and CPR began within 90 seconds.",
    history: {
      pmh: "High cholesterol (per gym intake form), family history of heart disease (per friend on scene)",
      meds: "Unknown — friend believes she takes 'a cholesterol pill'",
      allergies: "Unknown"
    },
    vitals: {
      hr: 0,
      bp: "Not obtainable",
      rr: 0,
      spo2: "Not obtainable",
      gcs: 3,
      temp: "Not obtained"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Place the following actions in the correct order upon your arrival at this cardiac arrest scene.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You and your partner approach with your equipment. The personal trainer is performing compressions. The AED is attached with pads in place. You can see the patient is unresponsive and not breathing.",
        clinical_pearl: "Minimizing interruptions in chest compressions is critical. Every pause in compressions drops coronary perfusion pressure, which takes multiple compressions to rebuild. The goal is less than 10 seconds for any interruption.",
        items: [
          "Immediately take over high-quality CPR from the bystander without prolonged interruption",
          "Confirm the AED is functioning and check the rhythm when prompted",
          "Establish a ventilation plan — insert OPA and prepare BVM with oxygen",
          "Deliver shock if advised by AED, then immediately resume CPR",
          "Obtain brief history from bystanders (collapse circumstances, down time, number of shocks)"
        ],
        explanation: "Taking over CPR immediately ensures continued high-quality compressions. Verifying the AED and rhythm guides next steps. Establishing an airway/ventilation plan occurs in parallel. Shocks are delivered as indicated with immediate CPR resumption. History is gathered without delaying resuscitation efforts.",
        guideline_ref: "AHA BLS/ACLS Guidelines — Cardiac Arrest Management Sequence"
      },
      {
        phase: "treatment",
        prompt: "After 2 minutes of high-quality CPR, the AED reanalyzes and advises 'no shock.' You check for a pulse and find a weak but palpable carotid pulse at a rate of approximately 60 bpm. The patient is not breathing. What is the MOST important immediate action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The AED announces 'No shock advised.' Your partner checks for a pulse and after 10 seconds confirms a weak carotid pulse. The patient remains unresponsive with no spontaneous respirations. Her skin is pale and cool.",
        vitals_update: {
          hr: 60,
          bp: "82/54",
          rr: 0,
          spo2: 78,
          gcs: 3
        },
        clinical_pearl: "Return of spontaneous circulation (ROSC) does not mean the patient is stable. Post-ROSC patients frequently re-arrest. Maintain constant vigilance and be ready to resume CPR immediately if the pulse is lost.",
        options: [
          {
            text: "Begin assisted ventilations with BVM at 10-12 breaths per minute",
            correct: true,
            explanation: "The patient has ROSC but is not breathing. Providing assisted ventilations at 10-12 breaths/min with supplemental oxygen is the immediate priority to support oxygenation and ventilation.",
            guideline_ref: "AHA BLS/ACLS Guidelines — Post-ROSC Ventilation"
          },
          {
            text: "Remove the AED pads since a shock is no longer advised",
            correct: false,
            critical: true,
            explanation: "AED pads must remain in place after ROSC. Post-arrest patients are at very high risk of re-arrest, and the AED will be needed for immediate rhythm analysis if the pulse is lost.",
            guideline_ref: "AHA BLS Guidelines — AED Use Post-ROSC"
          },
          {
            text: "Begin rapid transport immediately without further intervention",
            correct: false,
            explanation: "While transport is important, the apneic patient will deteriorate rapidly without ventilatory support. Assisted ventilations must begin immediately — treatment and transport preparation can occur simultaneously.",
            guideline_ref: "AHA BLS Guidelines — Post-Cardiac Arrest Care"
          },
          {
            text: "Resume chest compressions since the heart rate is only 60",
            correct: false,
            explanation: "A heart rate of 60 bpm with a palpable pulse indicates ROSC — CPR is not indicated when a perfusing pulse is present. A rate of 60 bpm is adequate for adults. Continue to monitor closely and resume CPR only if the pulse is lost.",
            guideline_ref: "AHA BLS Guidelines — Pulse Check and ROSC Recognition"
          }
        ]
      },
      {
        phase: "transport",
        prompt: "During post-ROSC care and transport, which of the following are appropriate actions? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You are ventilating the patient with a BVM. Her SpO2 is slowly climbing. She remains unresponsive. Your partner is preparing for rapid transport to the nearest cardiac-capable facility.",
        clinical_pearl: "Hyperventilation in post-arrest patients is harmful — it increases intrathoracic pressure, reduces venous return, and worsens cerebral outcomes. Ventilate at 10-12 breaths per minute, avoiding excessive rates or volumes.",
        options: [
          {
            text: "Maintain ventilation rate of 10-12 breaths per minute — avoid hyperventilation",
            correct: true,
            explanation: "Post-ROSC ventilation should be 10-12 breaths/min. Hyperventilation increases intrathoracic pressure, decreases venous return, and is associated with worse neurological outcomes.",
            guideline_ref: "AHA ACLS Guidelines — Post-Cardiac Arrest Ventilation"
          },
          {
            text: "Leave AED pads attached and powered on during transport",
            correct: true,
            explanation: "Re-arrest is common. Keeping the AED attached allows immediate rhythm analysis and defibrillation if needed.",
            guideline_ref: "AHA BLS Guidelines — Post-ROSC Monitoring"
          },
          {
            text: "Reassess pulse and vital signs every 5 minutes or if condition changes",
            correct: true,
            explanation: "Frequent reassessment is critical in post-ROSC patients. Pulse checks every 5 minutes and whenever clinical changes are noted can identify re-arrest early.",
            guideline_ref: "AHA ACLS Guidelines — Post-ROSC Reassessment"
          },
          {
            text: "Ventilate aggressively at 20-24 breaths per minute to maximize oxygenation",
            correct: false,
            critical: true,
            explanation: "Hyperventilation is harmful in post-arrest patients. It increases intrathoracic pressure, reduces cerebral blood flow, and is associated with increased mortality. Maintain 10-12 breaths/min.",
            guideline_ref: "AHA ACLS Guidelines — Avoiding Hyperventilation Post-ROSC"
          },
          {
            text: "Transport to the nearest cardiac-capable receiving facility",
            correct: true,
            explanation: "Post-cardiac arrest patients benefit from transport to facilities with cardiac catheterization and critical care capabilities for definitive management.",
            guideline_ref: "AHA ACLS Guidelines — Systems of Care / Post-Arrest Destination"
          },
          {
            text: "Place patient in the recovery position since she has a pulse",
            correct: false,
            explanation: "The recovery position is for unresponsive patients who are breathing adequately on their own. This patient is apneic and requires ongoing assisted ventilations — the supine position with airway management is appropriate.",
            guideline_ref: "AHA BLS Guidelines — Recovery Position Indications"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "Match each post-ROSC finding with the appropriate immediate response.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "En route to the hospital, you continue to monitor the patient. Your partner quizzes you on potential post-ROSC complications and how to respond to changes in the patient's condition.",
        clinical_pearl: "Post-ROSC patients may display a variety of signs. Purposeful movement and improving GCS are encouraging. Hypotension, re-arrest, and seizures are common complications that require immediate action.",
        columns: ["Post-ROSC Finding", "Immediate Response"],
        rows: [
          ["Loss of palpable pulse", "Immediately resume CPR and reanalyze with AED"],
          ["SpO2 drops below 80% despite BVM ventilations", "Reassess airway patency, reposition, ensure good mask seal, consider OPA/NPA"],
          ["Patient begins to vomit", "Logroll to side, suction airway, then reposition and resume ventilations"],
          ["Patient begins purposeful movement", "Continue monitoring, provide reassurance, reassess mental status"],
          ["Blood pressure drops to 70/40", "Position supine, elevate legs if no contraindication, expedite transport"]
        ],
        explanation: "Post-ROSC care requires constant vigilance for re-arrest, airway compromise, hemodynamic instability, and neurological changes. Each finding demands a specific, time-sensitive response at the EMT level.",
        guideline_ref: "AHA ACLS Guidelines — Post-Cardiac Arrest Care; NAEMSP Post-Resuscitation Care"
      }
    ]
  },

  {
    id: "nat-card-04",
    title: "Symptomatic Bradycardia",
    dispatch: "66-year-old male, dizzy, nearly passed out",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: {
      age: 66,
      sex: "M",
      cc: "Dizziness and near-syncope"
    },
    scene: "You arrive at a residence to find a 66-year-old male sitting in a kitchen chair. His wife reports he stood up from dinner, became very pale, and nearly fell. She caught him and helped him sit down. He appears pale and diaphoretic. He says he feels 'lightheaded and weak.'",
    history: {
      pmh: "Hypertension, type 2 diabetes, previous heart bypass surgery (3 years ago)",
      meds: "Metoprolol 100mg twice daily, metformin, lisinopril, aspirin 81mg",
      allergies: "Penicillin"
    },
    vitals: {
      hr: 38,
      bp: "86/52",
      rr: 18,
      spo2: 94,
      gcs: 14,
      temp: "98.4°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Review the cardiac rhythm strip shown below. What feature is MOST significant in the context of this patient's presentation?",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        narrative: "You place the patient on the cardiac monitor. The rhythm strip shows a regular rhythm with a rate of approximately 38 bpm. Each QRS complex is preceded by a P wave with a consistent PR interval. The QRS complexes are narrow.",
        image_description: "Rhythm strip showing regular sinus bradycardia at 38 bpm. P waves are present before each narrow QRS complex with a consistent PR interval of 0.18 seconds.",
        clinical_pearl: "In symptomatic bradycardia, the key question is: are the symptoms caused by the slow rate? Hypotension, altered mental status, chest pain, and signs of shock in the setting of bradycardia indicate the rhythm is hemodynamically significant and requires treatment.",
        options: [
          {
            text: "The heart rate of 38 bpm, which is well below normal and correlates with the patient's symptoms of hypotension and near-syncope",
            correct: true,
            explanation: "The profoundly slow rate of 38 bpm is causing inadequate cardiac output, resulting in hypotension (86/52), near-syncope, pallor, and diaphoresis. This is symptomatic bradycardia requiring intervention.",
            guideline_ref: "AHA ACLS Guidelines — Bradycardia Algorithm"
          },
          {
            text: "The presence of P waves before each QRS, indicating a normal conduction pathway",
            correct: false,
            explanation: "While the presence of P waves with consistent PR intervals suggests sinus bradycardia (a 'normal' conduction pathway), this finding does not negate the clinical significance. The rate is still dangerously slow and causing hemodynamic compromise.",
            guideline_ref: "AHA ACLS Guidelines — Rhythm Identification"
          },
          {
            text: "The narrow QRS complexes, which indicate a ventricular conduction problem",
            correct: false,
            explanation: "Narrow QRS complexes actually indicate normal ventricular conduction. Wide QRS complexes would suggest a ventricular conduction abnormality. The narrow complexes here confirm the rhythm originates above the ventricles.",
            guideline_ref: "AHA ACLS Guidelines — QRS Morphology Interpretation"
          },
          {
            text: "The regular rhythm, which rules out any dangerous cardiac condition",
            correct: false,
            explanation: "A regular rhythm does not rule out a dangerous condition. This patient has a regular rhythm at 38 bpm that is causing significant hemodynamic compromise — regularity does not equal safety.",
            guideline_ref: "AHA ACLS Guidelines — Clinical Correlation of Rhythm Findings"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which medication in this patient's history is MOST likely contributing to his current presentation?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "Your partner has established IV access. You review the patient's medication list with his wife, who confirms he takes all medications as prescribed. She mentions the cardiologist recently increased one of his medications.",
        clinical_pearl: "Beta-blockers and calcium channel blockers are common causes of symptomatic bradycardia, especially in elderly patients or when doses are increased. Always review the medication list when encountering unexplained bradycardia.",
        options: [
          {
            text: "Metformin",
            correct: false,
            explanation: "Metformin is an oral diabetes medication that does not significantly affect heart rate or cardiac conduction. Its primary adverse effect concern is lactic acidosis, not bradycardia.",
            guideline_ref: "AHA ACLS Guidelines — Reversible Causes of Bradycardia"
          },
          {
            text: "Metoprolol",
            correct: true,
            explanation: "Metoprolol is a beta-blocker that slows heart rate by blocking beta-1 adrenergic receptors in the heart. At 100mg twice daily, this is a substantial dose. Beta-blocker toxicity or sensitivity is a very common cause of symptomatic bradycardia, especially if the dose was recently increased.",
            guideline_ref: "AHA ACLS Guidelines — Bradycardia Reversible Causes; Toxicology"
          },
          {
            text: "Lisinopril",
            correct: false,
            explanation: "Lisinopril is an ACE inhibitor used for hypertension. It lowers blood pressure but does not directly slow heart rate or affect cardiac conduction.",
            guideline_ref: "AHA ACLS Guidelines — Medication-Induced Bradycardia"
          },
          {
            text: "Aspirin 81mg",
            correct: false,
            explanation: "Low-dose aspirin is an antiplatelet agent. It has no effect on heart rate or cardiac conduction and would not cause bradycardia.",
            guideline_ref: "AHA ACLS Guidelines — Medication-Induced Bradycardia"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions for symptomatic bradycardia in the correct treatment order.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient's mental status is declining — he is now confused and his skin is becoming increasingly cool and mottled. Blood pressure has dropped to 78/48. He needs definitive treatment.",
        vitals_update: {
          hr: 34,
          bp: "78/48",
          rr: 20,
          spo2: 92,
          gcs: 13
        },
        clinical_pearl: "For AEMT scope: IV fluid bolus and rapid transport are the primary interventions. Atropine and transcutaneous pacing are typically paramedic-level interventions but understanding the algorithm helps anticipate hospital care and communicate effectively with receiving facilities.",
        items: [
          "Ensure adequate airway and oxygenation — apply supplemental oxygen",
          "Establish IV/IO access if not already done",
          "Administer IV fluid bolus to support blood pressure",
          "Initiate rapid transport to appropriate facility with early hospital notification",
          "Prepare for and anticipate atropine administration or transcutaneous pacing per medical direction"
        ],
        explanation: "The treatment ladder for symptomatic bradycardia follows ABCs first (airway/oxygen), then vascular access, fluid resuscitation for hypotension, and rapid transport. Pharmacological intervention (atropine) and electrical therapy (pacing) follow the ACLS bradycardia algorithm and may require paramedic-level intervention or medical direction.",
        guideline_ref: "AHA ACLS Guidelines — Bradycardia Algorithm; NAEMSP Scope of Practice"
      }
    ]
  },

  {
    id: "nat-card-05",
    title: "SVT / Narrow Complex Tachycardia",
    dispatch: "34-year-old female, racing heart, feels like passing out",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "Paramedic",
    patient: {
      age: 34,
      sex: "F",
      cc: "Palpitations and near-syncope"
    },
    scene: "You arrive at an office building where coworkers lead you to a conference room. A 34-year-old female is sitting in a chair, visibly anxious, clutching her chest. She reports her heart suddenly started 'racing out of control' about 15 minutes ago during a meeting. She feels lightheaded and says it feels 'like my heart is going to explode.' She denies any recent caffeine, drug use, or unusual exertion.",
    history: {
      pmh: "Reports 'episodes of fast heartbeat' twice before — went to the ER, told it 'fixed itself,' no formal diagnosis or follow-up",
      meds: "Oral contraceptive pills only",
      allergies: "No known allergies"
    },
    vitals: {
      hr: 188,
      bp: "98/62",
      rr: 22,
      spo2: 97,
      gcs: 15,
      temp: "98.6°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Review the cardiac rhythm strip. What features of this rhythm are MOST consistent with the suspected dysrhythmia?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "You place the patient on the cardiac monitor. The rhythm strip shows a very fast, regular rhythm at approximately 188 bpm. The QRS complexes are narrow. No clearly discernible P waves are visible. The rhythm is perfectly regular with no variation in R-R intervals.",
        image_description: "12-lead ECG rhythm strip showing regular narrow complex tachycardia at 188 bpm. No visible P waves. QRS duration is approximately 0.08 seconds. R-R intervals are perfectly regular. No ST segment changes are apparent.",
        clinical_pearl: "The hallmarks of SVT include: sudden onset, regular narrow QRS complexes, rate typically 150-250 bpm, and absent or retrograde P waves. The perfectly regular R-R intervals help distinguish SVT from atrial fibrillation with rapid ventricular response (which is irregularly irregular).",
        options: [
          {
            text: "Regular narrow QRS complexes at ~188 bpm with no visible P waves and perfectly regular R-R intervals",
            correct: true,
            explanation: "These features — regular narrow complex tachycardia at 150-250 bpm without discernible P waves — are classic for SVT (most commonly AVNRT or AVRT). The perfect regularity distinguishes this from atrial fibrillation.",
            guideline_ref: "AHA ACLS Guidelines — Tachycardia Algorithm; Narrow Complex Tachycardia"
          },
          {
            text: "Wide QRS complexes suggesting a ventricular origin",
            correct: false,
            critical: true,
            explanation: "The QRS complexes are narrow (0.08 sec), not wide. Misidentifying this as a wide complex tachycardia could lead to inappropriate treatment. Wide complex tachycardia (>0.12 sec) suggests ventricular tachycardia — a different algorithm entirely.",
            guideline_ref: "AHA ACLS Guidelines — Wide vs. Narrow Complex Tachycardia"
          },
          {
            text: "Irregularly irregular rhythm suggesting atrial fibrillation",
            correct: false,
            explanation: "This rhythm is perfectly regular. Atrial fibrillation is characterized by irregularly irregular R-R intervals. The regular rate here points toward SVT rather than atrial fibrillation with rapid ventricular response.",
            guideline_ref: "AHA ACLS Guidelines — Rhythm Differentiation"
          },
          {
            text: "Sawtooth baseline pattern suggesting atrial flutter",
            correct: false,
            explanation: "There is no sawtooth pattern visible. Atrial flutter typically shows flutter waves at ~300/min with a ventricular rate that is a fraction (commonly 150 bpm with 2:1 block). The rate of 188 and absence of flutter waves makes SVT more likely.",
            guideline_ref: "AHA ACLS Guidelines — Atrial Flutter vs. SVT"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this stable narrow complex tachycardia.",
        type: "order",
        level_filter: "Paramedic",
        narrative: "The patient remains alert and oriented but symptomatic. Her blood pressure is borderline at 98/62. She is anxious but hemodynamically stable enough for a stepwise approach. You need to attempt to convert this rhythm.",
        clinical_pearl: "Vagal maneuvers work best when the patient is supine. The modified Valsalva maneuver (strain for 15 seconds, then immediately reposition supine with passive leg raise) has shown significantly higher conversion rates than traditional Valsalva alone — up to 43% vs 17%.",
        items: [
          "Apply oxygen, establish IV access, place patient on continuous cardiac monitoring",
          "Attempt vagal maneuvers (modified Valsalva or carotid sinus massage if no contraindications)",
          "If vagal maneuvers fail: administer adenosine 6mg rapid IV push followed by rapid 20mL saline flush",
          "If no conversion: administer adenosine 12mg rapid IV push with saline flush",
          "If adenosine fails and patient remains stable: consider calcium channel blocker or transport for further management"
        ],
        explanation: "The ACLS tachycardia algorithm for stable narrow complex tachycardia follows a stepwise approach: establish monitoring/access, attempt vagal maneuvers first (low-risk), then escalate to adenosine 6mg, followed by 12mg if needed. If chemical cardioversion fails, additional agents or synchronized cardioversion may be considered.",
        guideline_ref: "AHA ACLS Guidelines — Tachycardia with a Pulse Algorithm"
      },
      {
        phase: "treatment",
        prompt: "Adenosine 6mg is administered via rapid IV push in the antecubital vein, followed by a 20mL rapid saline flush. The monitor briefly shows asystole for 3 seconds, then the rhythm converts to normal sinus at 82 bpm. The patient gasps and says she feels 'a horrible sensation in her chest.' What is the MOST appropriate response?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "You push the adenosine rapidly and immediately follow with the saline flush while your partner watches the monitor. The rhythm slows dramatically — the monitor shows a flat line for about 3 seconds. Then a normal sinus rhythm appears at 82 bpm. The patient gasps loudly and grabs her chest, looking frightened. 'What was THAT?!' she exclaims.",
        vitals_update: {
          hr: 82,
          bp: "118/72",
          rr: 18,
          spo2: 99,
          gcs: 15
        },
        clinical_pearl: "The brief asystole or pause after adenosine administration is expected and not cause for alarm. Warn patients BEFORE administration that they may feel chest tightness, flushing, or a 'sense of impending doom' — this is transient and typically lasts less than 30 seconds.",
        options: [
          {
            text: "Reassure the patient that the brief uncomfortable sensation is a normal expected effect of the medication and that her heart rhythm has converted successfully",
            correct: true,
            explanation: "Adenosine commonly causes a brief sensation of chest tightness, flushing, and anxiety. The brief asystole followed by conversion to sinus rhythm is the desired therapeutic effect. Patient reassurance and education are appropriate.",
            guideline_ref: "AHA ACLS Guidelines — Adenosine Administration; Expected Effects"
          },
          {
            text: "Immediately administer a second dose of adenosine 12mg since the patient is still symptomatic",
            correct: false,
            critical: true,
            explanation: "The rhythm has successfully converted to normal sinus at 82 bpm. The patient's complaint is about the expected transient side effects of adenosine, not ongoing SVT. Administering additional adenosine to a patient in sinus rhythm could cause dangerous bradycardia or prolonged asystole.",
            guideline_ref: "AHA ACLS Guidelines — Adenosine Dosing"
          },
          {
            text: "Begin immediate CPR since the monitor showed asystole",
            correct: false,
            explanation: "The brief asystole (3 seconds) after adenosine is expected and transient. The rhythm has already converted to sinus at 82 bpm with an improving blood pressure. CPR is not indicated when a perfusing rhythm is present.",
            guideline_ref: "AHA ACLS Guidelines — Post-Adenosine Monitoring"
          },
          {
            text: "Administer epinephrine for the asystole that appeared on the monitor",
            correct: false,
            critical: true,
            explanation: "The transient asystole after adenosine is an expected pharmacological effect, not a cardiac arrest. Administering epinephrine to a patient who has just converted to sinus rhythm could cause dangerous tachycardia, hypertension, or trigger a new arrhythmia.",
            guideline_ref: "AHA ACLS Guidelines — Adenosine Expected Effects vs. Cardiac Arrest"
          }
        ]
      }
    ]
  },

  {
    id: "nat-air-04",
    title: "Asthma — Status Asthmaticus",
    dispatch: "14-year-old male, severe breathing difficulty at school",
    category: "Airway & Breathing",
    difficulty: "Hard",
    level_min: "EMT",
    patient: {
      age: 14,
      sex: "M",
      cc: "Severe breathing difficulty"
    },
    scene: "You arrive at a middle school nurse's office. A 14-year-old male is sitting upright, leaning forward on a desk, struggling to breathe. The school nurse reports the student had an asthma attack during gym class approximately 20 minutes ago. His rescue inhaler provided minimal relief. He is visibly distressed, using accessory muscles, and can only speak in 1-2 word fragments. You hear audible wheezing from the doorway.",
    history: {
      pmh: "Asthma since age 4, two prior hospitalizations for breathing problems, last one 8 months ago",
      meds: "Albuterol rescue inhaler, fluticasone daily inhaler (nurse reports he 'doesn't use it regularly')",
      allergies: "Cats, dust mites, pollen"
    },
    vitals: {
      hr: 138,
      bp: "132/78",
      rr: 36,
      spo2: 88,
      gcs: 15,
      temp: "98.8°F"
    },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Which of the following assessment findings would be MOST concerning for imminent respiratory failure in this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You begin your assessment. The patient is alert but exhausted. He is breathing at 36/min with visible intercostal retractions and nasal flaring. Wheezing is heard bilaterally. He has been struggling for 20 minutes and the nurse says he seems to be 'getting worse, not better.'",
        clinical_pearl: "A 'silent chest' in a patient with a known severe asthma attack is an ominous sign. The absence of wheezing does NOT mean improvement — it means there is so little air moving through the airways that wheezing cannot be generated. This indicates critical airway obstruction and imminent respiratory arrest.",
        options: [
          {
            text: "Sudden absence of wheezing with continued respiratory distress",
            correct: true,
            explanation: "A 'silent chest' — the disappearance of wheezing in a patient who was previously wheezing and remains in distress — indicates critically reduced air movement. This is a pre-arrest finding that demands immediate aggressive intervention.",
            guideline_ref: "NAEMSP/AHA Guidelines — Severe Asthma Assessment; Signs of Impending Respiratory Failure"
          },
          {
            text: "Loud bilateral wheezing heard without a stethoscope",
            correct: false,
            explanation: "Audible wheezing indicates significant bronchospasm but also confirms that air IS moving through the airways. While concerning, this is less ominous than the loss of breath sounds, which indicates critical air trapping.",
            guideline_ref: "EMT National Education Standards — Respiratory Assessment"
          },
          {
            text: "Heart rate of 138 bpm",
            correct: false,
            explanation: "Tachycardia is expected in acute asthma due to hypoxia, anxiety, and beta-agonist use. While it should be monitored, it is not the most concerning finding for imminent respiratory failure.",
            guideline_ref: "AHA/NAEMSP Guidelines — Vital Sign Interpretation in Respiratory Emergencies"
          },
          {
            text: "Respiratory rate of 36 breaths per minute",
            correct: false,
            explanation: "Tachypnea reflects the body's compensatory effort to maintain ventilation. A respiratory rate that suddenly drops to normal or below in a patient who was tachypneic may actually be more concerning (indicating fatigue/failure).",
            guideline_ref: "EMT National Education Standards — Pediatric Respiratory Assessment"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Categorize each finding as either a sign of COMPENSATED respiratory distress or DECOMPENSATED respiratory failure.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "As you treat the patient, you discuss respiratory assessment findings with your partner to ensure you both recognize the warning signs of deterioration.",
        clinical_pearl: "The transition from compensated distress to decompensated failure can happen rapidly in pediatric asthma patients. Continuous monitoring is essential — the patient may appear stable one minute and crash the next.",
        categories: ["Compensated Respiratory Distress", "Decompensated Respiratory Failure"],
        items: [
          { text: "Tachypnea with audible wheezing", category: "Compensated Respiratory Distress" },
          { text: "Silent chest with minimal air movement", category: "Decompensated Respiratory Failure" },
          { text: "Able to speak in short phrases, alert and oriented", category: "Compensated Respiratory Distress" },
          { text: "Altered mental status, unable to speak", category: "Decompensated Respiratory Failure" },
          { text: "Accessory muscle use with intercostal retractions", category: "Compensated Respiratory Distress" },
          { text: "Bradycardia and decreasing respiratory effort", category: "Decompensated Respiratory Failure" },
          { text: "Tachycardia with agitation and anxiety", category: "Compensated Respiratory Distress" },
          { text: "Cyanosis with head-bobbing respirations", category: "Decompensated Respiratory Failure" }
        ],
        explanation: "Compensated distress shows the body is still fighting: tachypnea, tachycardia, accessory muscle use, and the ability to speak all indicate ongoing compensation. Decompensated failure shows the body is losing the fight: silent chest, altered mental status, bradycardia, decreasing effort, and cyanosis are pre-arrest findings.",
        guideline_ref: "AHA PALS Guidelines — Pediatric Respiratory Distress vs. Failure; EMT National Education Standards"
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient's severe asthma exacerbation.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient's SpO2 is 88% and he is worsening despite having already used his inhaler. You need to act quickly to prevent respiratory failure.",
        clinical_pearl: "When assisting with a metered-dose inhaler, use a spacer device if available. It significantly improves medication delivery to the lower airways. Have the patient hold each inhalation for 5-10 seconds if possible, and wait at least 1 minute between puffs.",
        items: [
          "Position patient upright (high Fowler's) and provide calm reassurance",
          "Apply high-flow oxygen via non-rebreather mask to address hypoxemia",
          "Assist patient with prescribed albuterol rescue inhaler (with spacer if available)",
          "Obtain complete vital signs and reassess lung sounds after intervention",
          "Initiate rapid transport with early hospital notification, prepare BVM for potential respiratory failure"
        ],
        explanation: "Upright positioning optimizes respiratory mechanics. High-flow oxygen addresses the immediate hypoxemia. Medication assistance with the patient's prescribed albuterol targets the underlying bronchospasm. Reassessment guides further treatment decisions. Early transport preparation with BVM readiness anticipates potential deterioration.",
        guideline_ref: "NAEMSP Guidelines — Acute Asthma Management; AHA PALS Guidelines — Asthma"
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate actions if the patient's condition continues to deteriorate? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Despite your interventions, the patient's wheezing is diminishing — but not because he's improving. He appears more lethargic, his respiratory rate has dropped to 16, and he is less responsive to verbal stimuli. SpO2 has dropped to 82%.",
        vitals_update: {
          hr: 148,
          bp: "140/82",
          rr: 16,
          spo2: 82,
          gcs: 12
        },
        clinical_pearl: "When ventilating a severe asthma patient with BVM, use slow, steady breaths and allow adequate exhalation time. Aggressive ventilation can worsen air trapping (auto-PEEP), decrease venous return, and potentially cause pneumothorax.",
        options: [
          {
            text: "Begin assisted ventilations with BVM if respiratory effort becomes inadequate",
            correct: true,
            explanation: "Declining mental status with decreasing respiratory rate and effort in an asthma patient indicates impending respiratory arrest. BVM ventilations with supplemental oxygen are indicated when the patient can no longer maintain adequate ventilation.",
            guideline_ref: "AHA PALS Guidelines — Respiratory Failure Management"
          },
          {
            text: "Use slow, controlled BVM ventilations allowing adequate exhalation time",
            correct: true,
            explanation: "In severe bronchospasm, air trapping is a major concern. Slow ventilations (allowing a full 1:3 or 1:4 I:E ratio) reduce the risk of air stacking, which can cause hypotension and pneumothorax.",
            guideline_ref: "AHA PALS Guidelines — Ventilation in Obstructive Lung Disease"
          },
          {
            text: "Ventilate rapidly at 30+ breaths per minute to compensate for the bronchospasm",
            correct: false,
            critical: true,
            explanation: "Rapid ventilation in a bronchospastic patient dramatically worsens air trapping (auto-PEEP), can cause pneumothorax, and decreases venous return leading to cardiovascular collapse. This is extremely dangerous.",
            guideline_ref: "AHA PALS Guidelines — Avoiding Breath Stacking in Asthma"
          },
          {
            text: "Request ALS intercept or rendezvous if available for advanced airway and medication administration",
            correct: true,
            explanation: "A deteriorating status asthmaticus patient benefits from ALS interventions including IV/IO access, epinephrine, continuous nebulized albuterol, and advanced airway management if needed.",
            guideline_ref: "NAEMSP Guidelines — BLS/ALS Intercept Criteria"
          },
          {
            text: "Continue to monitor and reassess, providing updates to the receiving facility",
            correct: true,
            explanation: "Continuous reassessment and early hospital notification allow the receiving facility to prepare for a critically ill pediatric patient. Communicate the patient's deterioration, current interventions, and estimated arrival time.",
            guideline_ref: "EMT National Education Standards — Ongoing Assessment and Communication"
          },
          {
            text: "Assume the patient is improving since the wheezing has decreased, and reduce interventions",
            correct: false,
            critical: true,
            explanation: "Decreasing wheezing with worsening mental status and falling SpO2 is NOT improvement — it indicates the patient is moving so little air that wheezing can no longer be generated. This is a critical, life-threatening deterioration.",
            guideline_ref: "AHA PALS Guidelines — Silent Chest in Asthma as Ominous Sign"
          }
        ]
      }
    ]
  }
];
