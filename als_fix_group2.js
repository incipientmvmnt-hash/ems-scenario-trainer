const ALS_FIX_2 = {

  "nat-trauma-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "During the primary survey of this multi-system trauma patient, what is the MOST critical finding that must be addressed first?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          {
            text: "Paradoxical chest wall movement on the right side with SpO2 of 84% indicating a flail chest with likely underlying pulmonary contusion",
            correct: true,
            critical: false,
            explanation: "In the XABCDE approach, life-threatening chest injuries take priority after hemorrhage control. The paradoxical chest movement indicates flail chest with probable underlying pulmonary contusion, explaining the severely compromised oxygenation (SpO2 84%). This requires immediate positive-pressure ventilation and high-flow oxygen.",
            guideline_ref: "PHTLS 10th Edition — Primary Survey; National EMS Education Standards — Trauma Assessment"
          },
          {
            text: "The open forehead laceration with active bleeding as it represents a major source of hemorrhage",
            correct: false,
            critical: false,
            explanation: "While scalp lacerations can bleed significantly, this patient's hypotension is more likely from thoracic and/or femur injuries. The forehead laceration should be controlled with direct pressure, but the immediately life-threatening chest injury takes priority in the primary survey.",
            guideline_ref: "PHTLS 10th Edition — Primary Survey"
          },
          {
            text: "The left femur deformity, which requires immediate traction splinting to prevent further vascular damage",
            correct: false,
            critical: false,
            explanation: "Femur fractures can cause significant blood loss (750-1500 mL), but splinting is a secondary survey intervention. The flail chest with hypoxia is the more immediately life-threatening finding that must be addressed in the primary survey.",
            guideline_ref: "PHTLS 10th Edition — Primary Survey"
          },
          {
            text: "The patient's GCS of 7, which requires immediate endotracheal intubation before any other interventions",
            correct: false,
            critical: false,
            explanation: "While a GCS ≤ 8 generally indicates the need for definitive airway management, the XABCDE approach dictates addressing life-threatening hemorrhage and breathing problems before definitive airway. BVM ventilation with OPA can temporize while addressing the flail chest.",
            guideline_ref: "PHTLS 10th Edition — Primary Survey; National EMS Education Standards — Trauma Assessment"
          }
        ],
        clinical_pearl: "Remember XABCDE: eXsanguinating hemorrhage, Airway, Breathing, Circulation, Disability, Exposure. Massive external hemorrhage is addressed first with tourniquets/direct pressure, then airway, then breathing threats like tension pneumothorax and flail chest."
      },
      {
        phase: "assessment",
        prompt: "As you complete your rapid trauma assessment, classify each finding into the body region most affected.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        rows: [
          "Paradoxical movement of right chest wall with crepitus on palpation",
          "Rigid, distended abdomen with bruising to left upper quadrant",
          "Shortened and externally rotated left lower extremity with mid-shaft deformity",
          "Bilateral periorbital ecchymosis with clear fluid from the right ear"
        ],
        columns: ["Head/Spine", "Chest", "Abdomen/Pelvis", "Extremity"],
        correctCells: [
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
          [1, 0, 0, 0]
        ],
        explanation: "Paradoxical chest movement with crepitus = Chest (flail chest). Rigid abdomen with LUQ bruising = Abdomen (suspect splenic injury — Kehr's sign). Shortened/rotated extremity with deformity = Extremity (femur fracture). Periorbital ecchymosis with otorrhea = Head/Spine (raccoon eyes and CSF leak suggest basilar skull fracture).",
        guideline_ref: "PHTLS 10th Edition — Rapid Trauma Assessment; National EMS Education Standards — Trauma Assessment",
        clinical_pearl: "Bilateral periorbital ecchymosis (raccoon eyes) and CSF otorrhea are late signs of basilar skull fracture. Never pack the ears or nose if CSF leak is suspected — allow drainage and cover loosely with sterile gauze."
      },
      {
        phase: "treatment",
        prompt: "Arrange the following treatment interventions in the correct order for this multi-system trauma patient.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Apply traction splint to the left femur fracture",
          "Control forehead hemorrhage and stabilize the flail segment; assist ventilations with BVM and high-flow O2",
          "Apply spinal motion restriction precautions and prepare for rapid transport",
          "Establish bilateral large-bore IV access and initiate fluid resuscitation"
        ],
        correctOrder: [1, 3, 2, 0],
        explanation: "Priority order: (1) Address the immediately life-threatening flail chest — stabilize the segment and assist ventilations to correct hypoxia while controlling the scalp hemorrhage. (2) Establish IV access and begin fluid resuscitation for hemorrhagic shock. (3) Apply spinal motion restriction — this patient has high mechanism and signs of head/spine injury. (4) Splint the femur fracture — important but addressed after more critical interventions.",
        guideline_ref: "PHTLS 10th Edition — Treatment Priorities; National EMS Education Standards — Trauma Management",
        clinical_pearl: "In multi-system trauma, the 'Platinum 10 Minutes' concept emphasizes minimal on-scene time. Focus on interventions that cannot be done en route: hemorrhage control, spinal motion restriction, and splinting. Start IVs and reassess during transport."
      },
      {
        phase: "treatment",
        prompt: "This patient has a GCS of 7, SpO2 of 84%, and paradoxical chest wall movement. After initial BVM ventilation, SpO2 improves to 91% but the patient is not protecting his airway. Which advanced airway approach is MOST appropriate?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "You have been assisting ventilations with BVM and OPA. SpO2 has improved to 91%. The patient has no gag reflex and blood is pooling in the oropharynx from the facial laceration. Transport time to the trauma center is 25 minutes by ground.",
        vitals_update: { hr: 128, bp: "82/54", spo2: 91, gcs: 6 },
        options: [
          {
            text: "Perform endotracheal intubation with in-line cervical stabilization, using video laryngoscopy if available, and have a supraglottic airway as backup",
            correct: true,
            critical: false,
            explanation: "This patient requires a definitive airway: GCS ≤ 8, no gag reflex, blood in the airway, and a prolonged transport. ETI with in-line stabilization protects the cervical spine while securing the airway. Video laryngoscopy improves first-pass success in trauma. Always have a supraglottic device as a rescue plan.",
            guideline_ref: "PHTLS 10th Edition — Airway Management in Trauma; 2021 National EMS Education Standards — Paramedic Airway"
          },
          {
            text: "Continue BVM ventilation for the entire transport since SpO2 improved to 91%",
            correct: false,
            critical: false,
            explanation: "While BVM is temporizing, 91% with assisted ventilations in a patient who cannot protect his airway with blood pooling in the oropharynx is not adequate for a 25-minute transport. Aspiration risk is high and ongoing BVM in a moving ambulance is unreliable.",
            guideline_ref: "PHTLS 10th Edition — Airway Management"
          },
          {
            text: "Perform a surgical cricothyrotomy as the first-line approach given the facial trauma",
            correct: false,
            critical: false,
            explanation: "Surgical cricothyrotomy is a rescue technique when oral and nasal intubation have failed or are contraindicated. The forehead laceration does not preclude oral intubation. Always attempt less invasive definitive airways first.",
            guideline_ref: "PHTLS 10th Edition — Surgical Airway; National EMS Education Standards"
          },
          {
            text: "Insert a nasopharyngeal airway and continue BVM ventilation",
            correct: false,
            critical: true,
            explanation: "Nasopharyngeal airways are contraindicated in patients with signs of basilar skull fracture (this patient has raccoon eyes and CSF otorrhea). Additionally, an NPA alone does not provide a definitive airway for a patient who cannot protect against aspiration.",
            guideline_ref: "PHTLS 10th Edition — Airway Adjuncts; National EMS Education Standards"
          }
        ],
        clinical_pearl: "In trauma patients with suspected basilar skull fracture, avoid nasopharyngeal airways. Use oral intubation with in-line stabilization as the definitive airway. Have suction immediately available — blood in the airway is the most common cause of failed intubation in trauma."
      },
      {
        phase: "transport",
        prompt: "You are preparing for transport. Select ALL appropriate transport decisions for this patient.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        narrative: "The patient remains hemodynamically unstable despite 1L of NS. GCS is now 6. SpO2 has improved to 90% with assisted ventilations. The nearest community hospital is 10 minutes away. The nearest Level I trauma center is 25 minutes by ground or 15 minutes by helicopter.",
        vitals_update: { hr: 128, bp: "82/54", rr: 14, spo2: 90, gcs: 6 },
        options: [
          {
            text: "Request helicopter EMS for transport to the Level I trauma center given the patient's multi-system injuries and hemodynamic instability",
            correct: true,
            critical: false,
            explanation: "This patient meets trauma center criteria based on mechanism (ejection), injuries (head, chest, abdomen, extremity), and physiologic compromise (GCS ≤ 8, SBP < 90). Air medical transport to a Level I center provides the best chance for survival.",
            guideline_ref: "CDC Field Triage Decision Scheme 2021; National EMS Education Standards — Trauma Transport Decisions"
          },
          {
            text: "Continue assisted ventilations and consider advanced airway management given the declining GCS",
            correct: true,
            critical: false,
            explanation: "With GCS of 6 and declining, this patient cannot protect his own airway. Continued BVM ventilation or advanced airway placement (supraglottic or ETT by Paramedic) is essential to maintain oxygenation during transport.",
            guideline_ref: "National EMS Education Standards — Airway Management in Trauma"
          },
          {
            text: "Administer tranexamic acid (TXA) within the first 3 hours of injury if available per local guidelines",
            correct: true,
            critical: false,
            explanation: "TXA has been shown to reduce mortality in hemorrhagic trauma when given within 3 hours of injury. Current evidence supports its use in the prehospital setting for patients with suspected significant hemorrhage.",
            guideline_ref: "CRASH-2 Trial; National Evidence-Based Guidelines — TXA in Trauma"
          },
          {
            text: "Transport to the nearest community hospital for stabilization before transferring to the trauma center",
            correct: false,
            critical: false,
            explanation: "Direct transport to a trauma center is preferred for patients meeting major trauma criteria. Stopping at a community hospital adds delay without providing definitive surgical care, and transfer times significantly worsen outcomes.",
            guideline_ref: "CDC Field Triage Decision Scheme 2021"
          },
          {
            text: "Administer aggressive IV fluid resuscitation with 3-4 liters of normal saline to normalize blood pressure before transport",
            correct: false,
            critical: true,
            explanation: "Aggressive crystalloid resuscitation in hemorrhagic shock is harmful — it dilutes clotting factors, worsens hypothermia, and can increase bleeding. Current evidence supports permissive hypotension (SBP 80-90) and early blood products rather than large-volume crystalloid.",
            guideline_ref: "PHTLS 10th Edition — Shock Management; NAEMSP Position Statement on Fluid Resuscitation"
          }
        ],
        clinical_pearl: "The 'lethal triad' of trauma — hypothermia, acidosis, and coagulopathy — is worsened by excessive crystalloid administration. Limit NS/LR to 1-2L and prioritize rapid transport to surgical care. Keep the patient warm."
      },
      {
        phase: "transport",
        prompt: "En route, the patient's SpO2 drops to 82% despite assisted ventilations through an ETT, and you note absent breath sounds on the right with jugular venous distension. Tracheal deviation is difficult to assess. What is the MOST appropriate immediate intervention?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The patient was intubated successfully. Tube placement was confirmed with waveform capnography and bilateral breath sounds initially. Five minutes into transport, SpO2 drops acutely, peak airway pressures increase, and you note absent breath sounds on the right. HR increases to 140 and BP drops to 68/40.",
        vitals_update: { hr: 140, bp: "68/40", spo2: 82 },
        options: [
          {
            text: "Perform needle decompression of the right chest at the 2nd intercostal space, midclavicular line or 4th-5th intercostal space, anterior axillary line",
            correct: true,
            critical: false,
            explanation: "This presentation — acute desaturation, absent right breath sounds, JVD, hypotension, and increased airway pressures in an intubated trauma patient with known right flail chest — is classic tension pneumothorax. Needle decompression is the immediate life-saving intervention. Either the 2nd ICS MCL or 4th-5th ICS AAL are acceptable sites per current guidelines.",
            guideline_ref: "PHTLS 10th Edition — Tension Pneumothorax; ACS-COT Guidelines; 2021 National EMS Education Standards"
          },
          {
            text: "Pull back the endotracheal tube 2 cm assuming right mainstem intubation",
            correct: false,
            critical: false,
            explanation: "Right mainstem intubation would cause absent LEFT breath sounds, not right. Additionally, the JVD and hypotension point to tension physiology, not tube malposition. However, always verify tube position when ventilation changes acutely.",
            guideline_ref: "PHTLS 10th Edition — Airway Troubleshooting"
          },
          {
            text: "Increase the ventilation rate to 20 breaths per minute to compensate for the desaturation",
            correct: false,
            critical: true,
            explanation: "Increasing ventilation rate in a tension pneumothorax will worsen the condition by forcing more air into the pleural space. The underlying mechanical problem must be corrected before ventilation changes will help. Additionally, hyperventilation worsens outcomes in TBI.",
            guideline_ref: "PHTLS 10th Edition — Tension Pneumothorax; Brain Trauma Foundation Guidelines"
          },
          {
            text: "Administer a 500 mL fluid bolus to address the hypotension before treating the chest",
            correct: false,
            critical: false,
            explanation: "The hypotension is caused by obstructive shock from the tension pneumothorax compressing the great vessels and heart. Fluids will not correct obstructive shock — relieving the tension is the definitive treatment. Needle decompression must come first.",
            guideline_ref: "PHTLS 10th Edition — Obstructive Shock"
          }
        ],
        clinical_pearl: "In intubated patients, the DOPE mnemonic helps troubleshoot acute desaturation: Displacement of the tube, Obstruction, Pneumothorax, Equipment failure. Tension pneumothorax is especially common in ventilated trauma patients because positive pressure ventilation can convert a simple pneumothorax to tension."
      }
    ]
  },

  "nat-tra-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "What is the MOST important assessment priority for this patient beyond the obvious hip injury?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The patient is alert and oriented but in pain. She states she simply slipped — she did not feel dizzy or pass out. Her right leg is shortened and externally rotated with tenderness over the right hip.",
        options: [
          {
            text: "Determine the cause of the fall — assess for syncope, dizziness, cardiac symptoms, or neurological deficits that may have precipitated the event",
            correct: true,
            critical: false,
            explanation: "The most critical question: did the fall cause the injury, or did a medical event cause the fall? Syncope, dysrhythmias, stroke, and hypoglycemia must all be considered. This changes the urgency and destination.",
            guideline_ref: "2021 National EMS Education Standards — Geriatric Assessment; AGS/BGS Fall Prevention Guidelines"
          },
          {
            text: "Immediately splint the right hip in the position found to prevent further displacement before any other assessment",
            correct: false,
            critical: false,
            explanation: "While splinting is important, it is not the first priority. A medical cause of the fall (cardiac event, stroke) could be immediately life-threatening and should be assessed first.",
            guideline_ref: "2021 National EMS Education Standards — Trauma Assessment Priorities"
          },
          {
            text: "Obtain a detailed medication list and determine when the patient last ate, as these are most important for hospital care",
            correct: false,
            critical: false,
            explanation: "Medication history is important (especially the warfarin) but is not the most immediate priority. Determining why the patient fell takes precedence as it may reveal an ongoing emergency.",
            guideline_ref: "2021 National EMS Education Standards — Geriatric Emergencies"
          },
          {
            text: "Assess the bathroom for hazards and document environmental risk factors to prevent future falls",
            correct: false,
            critical: false,
            explanation: "Fall prevention and environmental assessment are important for long-term care but are not the acute assessment priority. Focus on the patient first.",
            guideline_ref: "AGS/BGS Fall Prevention Guidelines"
          }
        ],
        clinical_pearl: "In geriatric falls, always ask WHY the patient fell. A mechanical fall (slipped, tripped) has different implications than a syncopal fall. Falls can be caused by cardiac dysrhythmias, orthostatic hypotension, medication effects, stroke, or hypoglycemia — any of which may need urgent treatment beyond the injury itself."
      },
      {
        phase: "assessment",
        prompt: "Which of the following factors complicate this patient's presentation and management? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          {
            text: "Warfarin use increases bleeding risk — hip fractures can cause significant occult hemorrhage into the thigh and pelvis",
            correct: true,
            critical: false,
            explanation: "Hip fractures can result in 1–2 liters of blood loss into surrounding tissues. Warfarin impairs clotting and can turn moderate bleeding into life-threatening hemorrhage. Serial vital sign monitoring is essential.",
            guideline_ref: "PHTLS 9th Edition — Geriatric Trauma; ACS TQIP Geriatric Trauma Management Guidelines"
          },
          {
            text: "Osteoporosis means the fracture may be more severe than the mechanism suggests — low-energy mechanisms can cause significant injuries",
            correct: true,
            critical: false,
            explanation: "Osteoporotic bones fracture with minimal force. A simple fall from standing is the most common mechanism for hip fracture in the elderly. Don't underestimate injury severity based on mechanism alone.",
            guideline_ref: "2021 National EMS Education Standards — Geriatric Trauma; PHTLS Geriatric Considerations"
          },
          {
            text: "Atrial fibrillation may contribute to hemodynamic instability and complicates heart rate interpretation as a vital sign trend",
            correct: true,
            critical: false,
            explanation: "Atrial fibrillation makes heart rate an unreliable indicator of volume status. The irregular rhythm and rate-controlled medications may blunt the normal tachycardic response to hemorrhage.",
            guideline_ref: "PHTLS 9th Edition — Shock Assessment in Geriatric Patients"
          },
          {
            text: "History of TIA suggests she may have had a stroke that caused the fall, requiring reassessment",
            correct: true,
            critical: false,
            explanation: "Although she reports a mechanical fall, her history of TIA places her at higher risk for stroke. A brief neurological reassessment (stroke screen) is prudent to confirm no new deficits.",
            guideline_ref: "AHA/ASA Stroke Risk Assessment; 2021 National EMS Education Standards"
          },
          {
            text: "The patient's age of 84 means pain medications should be completely withheld due to high risk of respiratory depression",
            correct: false,
            critical: false,
            explanation: "Elderly patients deserve adequate pain management. Untreated pain causes tachycardia, hypertension, and agitation. Appropriate analgesia at adjusted doses is both safe and recommended.",
            guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management; 2021 National EMS Education Standards"
          }
        ],
        clinical_pearl: "Anticoagulated geriatric trauma patients are high-risk. Hip fractures in elderly patients on anticoagulants have increased surgical mortality, greater blood loss, and higher complication rates. Additionally, these patients may have occult bleeding that presents late. Even 'minor' mechanisms in anticoagulated elderly patients warrant a high index of suspicion."
      },
      {
        phase: "treatment",
        prompt: "Match each injury type to the most appropriate prehospital splinting consideration:",
        type: "table",
        level_filter: "EMR-EMT-AEMT",
        rows: [
          "Suspected hip fracture",
          "Isolated mid-shaft femur fracture",
          "Ankle fracture/dislocation with distal pulse present",
          "Knee dislocation with absent pedal pulse"
        ],
        columns: [
          "Immobilize on scoop/backboard with padding; NO traction",
          "Apply traction splint",
          "Splint in position found; pillow/rigid splint",
          "Splint in position found; rapid transport for vascular emergency"
        ],
        correctCells: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1]
        ],
        explanation: "Hip fractures: traction splints are contraindicated for proximal femur fractures — use a scoop stretcher with padding. Mid-shaft femur: traction splints reduce pain and bleeding. Ankle with pulse: splint in position found. Knee dislocation without pulse: limb-threatening emergency requiring rapid surgical intervention.",
        guideline_ref: "2021 National EMS Education Standards — Musculoskeletal Trauma; PHTLS 9th Edition",
        clinical_pearl: "For suspected hip fractures, avoid traction splints — they are contraindicated for fractures at or near the hip joint. Secure the patient to a long backboard or scoop stretcher with padding between the legs and blanket rolls to immobilize the hip in the position found. Prioritize comfort and gentle handling."
      },
      {
        phase: "treatment",
        prompt: "This patient is in severe pain (8/10) from her hip injury. She has a codeine allergy (nausea) and is on warfarin. What is the MOST appropriate analgesic approach?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient is grimacing and guarding. She rates her pain 8/10. You have established IV access. Her vitals remain stable with HR 96, BP 138/78, RR 18, SpO2 96%.",
        options: [
          {
            text: "Administer fentanyl 0.5–1 mcg/kg IV, titrated in small increments with continuous monitoring of respiratory status and blood pressure",
            correct: true,
            critical: false,
            explanation: "Fentanyl is the preferred analgesic in geriatric patients due to its short duration, hemodynamic stability, and ease of titration. Start low (0.5 mcg/kg) and titrate. Codeine allergy (nausea only) is not a contraindication to fentanyl — they are structurally different opioids, and the reported reaction is a side effect, not a true allergy.",
            guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management; 2021 National EMS Education Standards — Paramedic Pharmacology"
          },
          {
            text: "Withhold all opioid analgesics because the patient has a codeine allergy",
            correct: false,
            critical: false,
            explanation: "Codeine-induced nausea is a common side effect, not a true allergy. Fentanyl is structurally dissimilar to codeine. Withholding pain relief based on this history is inappropriate and causes unnecessary suffering.",
            guideline_ref: "NAEMSP Prehospital Pain Management; Cross-reactivity guidance — opioid classes"
          },
          {
            text: "Administer morphine 4 mg IV as the standard first-line prehospital analgesic",
            correct: false,
            critical: false,
            explanation: "While morphine is effective, it causes histamine release and hypotension more frequently than fentanyl, making it less ideal in elderly patients. Fentanyl's hemodynamic stability and shorter duration make it preferable in this population.",
            guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management"
          },
          {
            text: "Administer ketorolac 30 mg IV as a non-opioid alternative",
            correct: false,
            critical: true,
            explanation: "Ketorolac (an NSAID) is contraindicated in this patient. She is anticoagulated with warfarin, and NSAIDs further impair platelet function and increase bleeding risk. NSAIDs also carry renal risks in elderly patients.",
            guideline_ref: "NAEMSP Prehospital Pain Management; NSAID-anticoagulant interaction guidelines"
          }
        ],
        clinical_pearl: "In geriatric patients on anticoagulants, choose analgesics that don't worsen bleeding. Fentanyl is ideal: it doesn't release histamine, has minimal hemodynamic effects, and is easily titrated. Always start with reduced doses in the elderly — 'start low, go slow.' Monitor respiratory status closely."
      },
      {
        phase: "assessment",
        prompt: "You acquire a 12-lead ECG on this patient given her history of atrial fibrillation and TIA. Which findings would change your transport priority or destination?",
        type: "mr",
        level_filter: "Paramedic",
        narrative: "The patient's fall was mechanical, but given her cardiac history and anticoagulation, you perform a 12-lead ECG during your assessment.",
        options: [
          {
            text: "New ST elevation in contiguous leads suggesting acute MI as a possible cause of the fall",
            correct: true,
            critical: false,
            explanation: "Acute MI can present as syncope or near-syncope in the elderly, particularly women. ST elevation would indicate the fall may have been caused by a cardiac event and changes the destination to a STEMI-capable facility.",
            guideline_ref: "AHA STEMI Guidelines; 2021 National EMS Education Standards — Cardiac Emergencies"
          },
          {
            text: "Atrial fibrillation with a controlled ventricular rate of 78 bpm",
            correct: false,
            critical: false,
            explanation: "Known atrial fibrillation with a controlled rate is an expected baseline finding in this patient. It does not change management or transport priority.",
            guideline_ref: "AHA Atrial Fibrillation Guidelines"
          },
          {
            text: "New-onset third-degree heart block with a ventricular rate of 38 bpm",
            correct: true,
            critical: false,
            explanation: "Complete heart block with bradycardia can cause syncope (Stokes-Adams attack). This would explain the fall and represents a life-threatening rhythm requiring transcutaneous pacing and transport to a facility with cardiology capability.",
            guideline_ref: "AHA Bradycardia Algorithm; 2021 National EMS Education Standards — Cardiac Emergencies"
          },
          {
            text: "Prolonged QTc interval (520 ms)",
            correct: true,
            critical: false,
            explanation: "A prolonged QTc increases the risk of torsades de pointes, which can cause syncope. This finding may indicate drug interaction or electrolyte abnormality and warrants close monitoring and early hospital notification.",
            guideline_ref: "AHA Guidelines — QT Prolongation; 2021 National EMS Education Standards"
          },
          {
            text: "Occasional premature ventricular complexes (PVCs)",
            correct: false,
            critical: false,
            explanation: "Isolated PVCs are common in elderly patients and are generally benign in this context. They do not change transport priority unless they are frequent, multifocal, or occurring in runs.",
            guideline_ref: "AHA Arrhythmia Recognition"
          }
        ],
        clinical_pearl: "Always consider why a geriatric patient fell. A 12-lead ECG can reveal cardiac causes that change everything — acute MI, complete heart block, and long QT can all present as 'I just fell.' In anticoagulated patients with atrial fibrillation, any rhythm change also raises concern for stroke."
      }
    ]
  },

  "nat-dka-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "Which clinical finding is MOST specific to diabetic ketoacidosis (DKA) as opposed to other causes of altered mental status in this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          {
            text: "Deep rapid (Kussmaul) respirations with a fruity acetone odor on the breath",
            correct: true,
            critical: false,
            explanation: "Kussmaul respirations represent respiratory compensation for metabolic acidosis, and the fruity odor comes from exhaled acetone (a ketone body). Together with hyperglycemia, these findings are highly specific for DKA.",
            guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards"
          },
          {
            text: "Tachycardia with a heart rate of 124 beats per minute",
            correct: false,
            critical: false,
            explanation: "Tachycardia is a non-specific finding present in many conditions including dehydration, anxiety, pain, sepsis, and drug ingestion. It does not specifically indicate DKA.",
            guideline_ref: "2021 National EMS Education Standards"
          },
          {
            text: "Altered mental status with a GCS of 12",
            correct: false,
            critical: false,
            explanation: "Altered mental status has a very broad differential including hypoglycemia, stroke, drug overdose, head injury, and many other causes. It is not specific to DKA.",
            guideline_ref: "2021 National EMS Education Standards"
          },
          {
            text: "Blood pressure of 98/62 indicating mild hypotension",
            correct: false,
            critical: false,
            explanation: "Mild hypotension can result from dehydration, hemorrhage, sepsis, anaphylaxis, and many other conditions. While dehydration-related hypotension is common in DKA, it is not a specific finding.",
            guideline_ref: "2021 National EMS Education Standards"
          }
        ],
        clinical_pearl: "Kussmaul respirations — deep, rapid breathing — are a compensatory mechanism to blow off CO2 and correct the metabolic acidosis of DKA. Combined with the fruity/acetone breath odor (from exhaled ketones), hyperglycemia, and known Type 1 diabetes, this presentation is classic DKA. Do not mistake Kussmaul respirations for a primary respiratory problem."
      },
      {
        phase: "assessment",
        prompt: "Categorize each finding as characteristic of either Diabetic Ketoacidosis (DKA) or Hypoglycemia.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["Diabetic Ketoacidosis (DKA)", "Hypoglycemia"],
        items: [
          { text: "Kussmaul (deep, rapid) respirations", category: "Diabetic Ketoacidosis (DKA)" },
          { text: "Fruity or acetone odor on breath", category: "Diabetic Ketoacidosis (DKA)" },
          { text: "Warm, dry skin with signs of dehydration", category: "Diabetic Ketoacidosis (DKA)" },
          { text: "Gradual onset over hours to days", category: "Diabetic Ketoacidosis (DKA)" },
          { text: "Cool, pale, diaphoretic skin", category: "Hypoglycemia" },
          { text: "Rapid onset over minutes to hours", category: "Hypoglycemia" },
          { text: "Tremors, irritability, or seizure activity", category: "Hypoglycemia" },
          { text: "Blood glucose reading above 300 mg/dL", category: "Diabetic Ketoacidosis (DKA)" }
        ],
        explanation: "DKA features develop gradually from insulin deficiency: hyperglycemia, ketone production, metabolic acidosis (Kussmaul breathing), and dehydration (warm/dry skin). Hypoglycemia features develop rapidly from excess insulin or missed meals: sympathetic activation (cool/diaphoretic skin, tremors) and neuroglycopenia (confusion, seizures).",
        guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards",
        clinical_pearl: "The key prehospital distinction: hypoglycemia has a rapid onset (minutes to hours), cool/diaphoretic skin, and often presents with tremors, irritability, or seizures. DKA has a gradual onset (hours to days), warm/dry skin from dehydration, Kussmaul respirations, and fruity breath. Both cause altered mental status, but the treatments are very different — always check blood glucose."
      },
      {
        phase: "treatment",
        prompt: "Arrange the following prehospital treatment steps for this DKA patient in the correct order of priority.",
        type: "order",
        level_filter: "EMT-AEMT",
        items: [
          "Assess and maintain airway patency — position patient and have suction available",
          "Obtain blood glucose and confirm hyperglycemia",
          "Apply supplemental oxygen if SpO2 drops below 94%",
          "Establish IV access and administer isotonic crystalloid bolus (250–500 mL)",
          "Initiate rapid transport with hospital notification"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "Airway first (altered mental status = aspiration risk), then confirm the working diagnosis with glucose, support oxygenation, establish IV access for fluid resuscitation, and transport. Do NOT administer insulin in the field — DKA requires lab-guided therapy.",
        guideline_ref: "2021 National EMS Education Standards — Diabetic Emergencies; ADA Standards of Medical Care",
        clinical_pearl: "Prehospital DKA management focuses on supportive care: airway management, fluid resuscitation for dehydration-related hypotension, and rapid transport. Insulin is NOT a prehospital intervention for DKA — it requires careful lab-guided titration in the hospital. If blood glucose is elevated and the patient has altered mental status, do NOT administer oral glucose (aspiration risk)."
      },
      {
        phase: "treatment",
        prompt: "You acquire a 12-lead ECG on this DKA patient. Identify which ECG findings are associated with the electrolyte derangements of DKA and match them to the correct clinical significance.",
        type: "table",
        level_filter: "Paramedic",
        narrative: "The patient's GCS has decreased to 10. You have established IV access and begun a normal saline infusion. You place the patient on the cardiac monitor and acquire a 12-lead ECG.",
        vitals_update: { hr: 130, bp: "92/58", gcs: 10 },
        rows: [
          "Peaked, narrow T waves",
          "Flattened or absent T waves with prominent U waves",
          "Widened QRS complex (>120 ms)",
          "Prolonged PR interval progressing to AV block"
        ],
        columns: [
          "Hyperkalemia — cardiac arrest risk",
          "Hypokalemia — may develop during treatment",
          "Severe hyperkalemia — imminent arrest",
          "Severe hyperkalemia — conduction failure"
        ],
        correctCells: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1]
        ],
        explanation: "DKA causes a total body potassium deficit but serum levels may be elevated initially due to acidosis shifting K+ out of cells. Peaked T waves = early hyperkalemia. Widened QRS and prolonged PR = severe hyperkalemia approaching lethal levels. As DKA is treated (insulin drives K+ back into cells), hypokalemia can develop — flattened T waves and U waves indicate this dangerous shift.",
        guideline_ref: "AHA ACLS — Electrolyte Emergencies; ADA DKA Management Guidelines; 2021 National EMS Education Standards — Paramedic ECG Interpretation",
        clinical_pearl: "In DKA, the ECG is your potassium monitor. Peaked T waves mean hyperkalemia is present and cardiac arrest risk is elevated. Communicate ECG findings to the receiving facility — they need to check potassium before starting insulin, because insulin drives potassium into cells and can cause fatal hypokalemia if the true potassium is already depleted."
      },
      {
        phase: "treatment",
        prompt: "The patient's GCS drops to 8 and she begins vomiting. Which advanced intervention sequence is MOST appropriate?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "During transport, the patient becomes less responsive. GCS is now 8 (E2, V2, M4). She vomits a large amount of dark-colored fluid. SpO2 drops to 89%. You have an IV running NS at 250 mL/hr.",
        vitals_update: { gcs: 8, spo2: 89, hr: 134 },
        options: [
          {
            text: "Suction the airway aggressively, administer ondansetron 4 mg IV for emesis control, and place a supraglottic airway or perform endotracheal intubation to protect the airway",
            correct: true,
            critical: false,
            explanation: "This patient now meets criteria for advanced airway management: GCS ≤ 8, active vomiting with aspiration risk, and declining oxygenation. Suction first to clear the airway, control emesis with ondansetron, then secure a definitive airway. Waveform capnography should be used to confirm placement and monitor ventilation — in DKA, maintain the patient's compensatory hyperventilation (do NOT reduce their respiratory rate).",
            guideline_ref: "2021 National EMS Education Standards — Paramedic Airway Management; ADA DKA Guidelines"
          },
          {
            text: "Administer dextrose 25g IV to empirically treat possible hypoglycemia causing the mental status change",
            correct: false,
            critical: true,
            explanation: "This patient has confirmed severe hyperglycemia (>500 mg/dL). Administering dextrose would dramatically worsen the DKA, increase osmolality, and could precipitate cerebral edema — especially dangerous in adolescent patients.",
            guideline_ref: "ADA DKA Management; 2021 National EMS Education Standards — Diabetic Emergencies"
          },
          {
            text: "Begin bag-valve-mask ventilation at 8 breaths per minute to match a normal respiratory rate",
            correct: false,
            critical: true,
            explanation: "Reducing the respiratory rate to 'normal' eliminates the patient's respiratory compensation for metabolic acidosis. This will cause a rapid, potentially fatal drop in pH. When ventilating a DKA patient, match their pre-intubation respiratory rate to maintain CO2 elimination.",
            guideline_ref: "ADA DKA Guidelines; Critical Care Transport — Ventilation in Metabolic Acidosis"
          },
          {
            text: "Position the patient on her side and continue monitoring without advanced airway intervention",
            correct: false,
            critical: false,
            explanation: "Recovery position is temporizing but insufficient. With GCS of 8, active vomiting, and declining SpO2, this patient requires definitive airway protection. Continued observation without intervention risks aspiration pneumonia or complete airway obstruction.",
            guideline_ref: "2021 National EMS Education Standards — Airway Management"
          }
        ],
        clinical_pearl: "When intubating or ventilating a DKA patient, match their pre-arrest respiratory rate. Their rapid breathing is compensating for severe metabolic acidosis. Dropping from 30 breaths/min to 10 will cause pH to plummet and may trigger cardiac arrest. Use waveform capnography to monitor EtCO2 and maintain it at or near pre-intubation levels."
      }
    ]
  },

  "nat-tra-05": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "You observe multiple bruises in varying stages of healing on the child's torso and upper legs, along with the reported arm injury. The mechanism described is a fall down 3 carpeted stairs. What is your MOST important consideration?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You carefully assess and splint the child's right arm while observing the overall environment. You treat the child gently and note your findings carefully for documentation.",
        options: [
          {
            text: "The injury pattern is inconsistent with the reported mechanism — document findings objectively, provide appropriate medical care, and report concerns to the receiving facility",
            correct: true,
            critical: false,
            explanation: "Multiple bruises in various healing stages on the torso of a 2-year-old, combined with a mechanism that does not match the injury severity, raises concern for non-accidental trauma. EMS providers should document and report.",
            guideline_ref: "NAEMSP Position Statement on Child Maltreatment; EMS Mandated Reporter Guidelines; PHTLS 10th Ed — Pediatric Trauma"
          },
          {
            text: "Confront the mother and boyfriend about the suspicious injuries before transporting",
            correct: false,
            critical: true,
            explanation: "Confronting caregivers can escalate the situation, endanger the child and providers, and compromise any subsequent investigation. This is never the EMS role.",
            guideline_ref: "NAEMSP Position Statement on Child Maltreatment"
          },
          {
            text: "The bruises are likely normal for a toddler learning to walk — focus only on the arm injury",
            correct: false,
            critical: false,
            explanation: "Bruises on the torso and upper legs of a pre-ambulatory or barely ambulatory child are highly suspicious. Normal toddler bruises occur over bony prominences (shins, forehead), not the trunk.",
            guideline_ref: "PHTLS 10th Ed — Pediatric Trauma; CDC Child Abuse Recognition"
          },
          {
            text: "Refuse to transport until law enforcement arrives to investigate",
            correct: false,
            critical: false,
            explanation: "Delaying medical care for a potentially injured child is inappropriate. Transport and provide care — you can report your concerns to the hospital and authorities.",
            guideline_ref: "NAEMSP Position Statement on Child Maltreatment"
          }
        ],
        clinical_pearl: "EMS providers are mandated reporters in all 50 states. You are not required to diagnose abuse — only to report reasonable suspicion. Document objective findings factually (location, size, color, pattern of injuries) without accusatory language. Do not confront caregivers. Your role is to provide medical care, document thoroughly, and report to the receiving facility and/or appropriate authorities."
      },
      {
        phase: "assessment",
        prompt: "Which of the following findings are RED FLAGS for non-accidental trauma in a pediatric patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          {
            text: "Bruises in various stages of healing",
            correct: true,
            critical: false,
            explanation: "Bruises of different colors/ages suggest repeated injury over time, not a single event.",
            guideline_ref: "PHTLS 10th Ed — Pediatric Trauma; TEN-4 FACES Rule"
          },
          {
            text: "Bruises on the torso and upper legs (non-bony prominences)",
            correct: true,
            critical: false,
            explanation: "Accidental bruises in toddlers typically occur over bony prominences. Trunk and proximal extremity bruises are concerning.",
            guideline_ref: "TEN-4 FACES Rule; CDC Child Abuse Recognition"
          },
          {
            text: "Injury inconsistent with the described mechanism",
            correct: true,
            critical: false,
            explanation: "When the mechanism cannot explain the injuries, non-accidental trauma must be considered.",
            guideline_ref: "NAEMSP Position Statement on Child Maltreatment"
          },
          {
            text: "Delay in seeking care (injury 1 hour ago)",
            correct: true,
            critical: false,
            explanation: "Delayed presentation is a common pattern in non-accidental trauma cases.",
            guideline_ref: "PHTLS 10th Ed — Pediatric Trauma"
          },
          {
            text: "A single bruise on the shin of a walking toddler",
            correct: false,
            critical: false,
            explanation: "Shin bruises are common in ambulatory toddlers and are consistent with normal activity.",
            guideline_ref: "TEN-4 FACES Rule"
          },
          {
            text: "Child is quiet, withdrawn, and avoids eye contact",
            correct: true,
            critical: false,
            explanation: "Behavioral changes such as withdrawal, excessive compliance, or avoiding eye contact can be associated with abuse.",
            guideline_ref: "CDC Child Abuse Recognition"
          }
        ],
        clinical_pearl: "The TEN-4 FACES bruising rule helps identify concerning patterns: bruises to the Torso, Ears, Neck in a child ≤4 years, or to the Frenulum, Angle of jaw, Cheeks, Eyes, Sclera at any age. Bruises in pre-mobile infants are extremely rare and almost always warrant further evaluation. 'Those who don't cruise rarely bruise.'"
      },
      {
        phase: "decision-making",
        prompt: "Categorize each documentation element as either APPROPRIATE or INAPPROPRIATE for an EMS report involving suspected non-accidental trauma.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        categories: ["Appropriate Documentation", "Inappropriate Documentation"],
        items: [
          { text: "\"Multiple bruises noted on anterior torso ranging from yellow-green to dark purple\"", category: "Appropriate Documentation" },
          { text: "\"The boyfriend obviously beat this child\"", category: "Inappropriate Documentation" },
          { text: "\"Mother states child fell down 3 carpeted stairs approximately 1 hour ago\"", category: "Appropriate Documentation" },
          { text: "\"This is clearly a case of child abuse\"", category: "Inappropriate Documentation" },
          { text: "\"Child is withdrawn, avoids eye contact, does not reach for caregiver\"", category: "Appropriate Documentation" },
          { text: "\"Reported mechanism inconsistent with observed injury pattern\" — documented factually", category: "Appropriate Documentation" },
          { text: "Omitting bruise findings from the report to avoid conflict", category: "Inappropriate Documentation" }
        ],
        explanation: "EMS documentation in suspected abuse cases must be objective, factual, and thorough. Describe what you see without diagnosing abuse. Use direct quotes when possible. Avoid subjective opinions, accusations, or conclusions about who caused injuries. Your documentation may become part of a legal investigation.",
        guideline_ref: "NAEMSP Position Statement on Child Maltreatment; EMS Documentation Standards",
        clinical_pearl: "Document like your report will be read in court — because it might be. Use objective language: describe colors, sizes, locations, and patterns. Quote caregivers verbatim when possible. Never accuse or diagnose abuse in your report — state facts and let investigators draw conclusions."
      },
      {
        phase: "treatment",
        prompt: "This 2-year-old has an obviously deformed right forearm and is crying inconsolably. After splinting, she continues to scream in pain. What is the MOST appropriate analgesic approach?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "You have carefully splinted the child's right arm. She is crying inconsolably and pulling away from you. Her vitals are stable: HR 140, RR 28, SpO2 99%, BP 92/60. Weight is estimated at 12 kg using a length-based tape.",
        options: [
          {
            text: "Administer intranasal fentanyl 1.5 mcg/kg (18 mcg) using a mucosal atomization device, with continuous monitoring",
            correct: true,
            critical: false,
            explanation: "Intranasal fentanyl via mucosal atomization device provides rapid, effective analgesia without requiring IV access in a distressed child. The 1.5 mcg/kg dose is well-established for pediatric pain management. Onset is 5-10 minutes. This avoids the additional trauma of IV insertion in an already distressed child.",
            guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management; 2021 National EMS Education Standards — Pediatric Pharmacology"
          },
          {
            text: "Withhold analgesics because pain medication may mask injuries and complicate the hospital evaluation",
            correct: false,
            critical: false,
            explanation: "Withholding pain management in a child with an obvious fracture is inappropriate. Adequate analgesia does not mask clinically significant injuries and is an ethical obligation. Untreated pain causes physiologic stress responses harmful to children.",
            guideline_ref: "NAEMSP Position Statement on Prehospital Pain Management; AAP Pain Management Guidelines"
          },
          {
            text: "Administer oral acetaminophen 15 mg/kg and wait for it to take effect before transport",
            correct: false,
            critical: false,
            explanation: "Oral acetaminophen is inadequate for acute fracture pain and takes 30-60 minutes for onset. This patient needs rapid-acting, appropriately potent analgesia. Do not delay transport waiting for oral medication to work.",
            guideline_ref: "NAEMSP Prehospital Pain Management"
          },
          {
            text: "Establish IO access and administer morphine 0.1 mg/kg for definitive pain control",
            correct: false,
            critical: false,
            explanation: "IO access is reserved for emergent vascular access when IV access fails in critically ill patients. This child has stable vitals and a non-life-threatening injury. Intranasal fentanyl provides effective pain relief without the pain and risks of IO insertion.",
            guideline_ref: "2021 National EMS Education Standards — Vascular Access Indications"
          }
        ],
        clinical_pearl: "Intranasal fentanyl via mucosal atomization device (MAD) is a game-changer in pediatric EMS. It provides effective opioid analgesia without needles in a terrified child. Limit volume to 0.3 mL per nare for optimal absorption. If the child is crying with a runny nose, absorption may be reduced — consider an alternative route if no effect in 10-15 minutes."
      }
    ]
  },

  "nat-beh-02": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "This patient presents with extreme agitation, hyperthermia, and tachycardia after a violent encounter. What is the GREATEST immediate threat to this patient's life?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient continues to struggle violently. His skin is burning hot and drenched in sweat. He is not responding to verbal commands and alternates between screaming and grunting. Officers state the encounter began about 20 minutes ago.",
        options: [
          {
            text: "Cardiac arrest from metabolic crisis — hyperthermia, acidosis, and extreme exertion",
            correct: true,
            critical: false,
            explanation: "The combination of severe hyperthermia (104.2°F), extreme physical exertion, tachycardia, and likely metabolic acidosis places this patient at imminent risk for sudden cardiac arrest. This is the leading cause of death in excited delirium.",
            guideline_ref: "NAEMSP Position Statement on Excited Delirium; ACEP Excited Delirium White Paper"
          },
          {
            text: "Airway obstruction from prone positioning",
            correct: false,
            critical: false,
            explanation: "While positional asphyxia is a concern and prone restraint should be avoided, the metabolic crisis and hyperthermia pose a more immediate and lethal threat in this presentation.",
            guideline_ref: "NAEMSP Restraint Guidelines"
          },
          {
            text: "Bleeding from injuries sustained during the altercation",
            correct: false,
            critical: false,
            explanation: "While traumatic injuries should be assessed, there is no evidence of significant hemorrhage. The physiological crisis from the agitated state is far more dangerous.",
            guideline_ref: "NAEMSP Trauma Assessment"
          },
          {
            text: "Taser barb injuries requiring immediate removal",
            correct: false,
            critical: false,
            explanation: "Taser barbs are low-priority injuries. They do not pose an immediate life threat and should not distract from managing the metabolic emergency.",
            guideline_ref: "NAEMSP Conducted Energy Device Injuries"
          }
        ],
        clinical_pearl: "Excited delirium syndrome carries a significant risk of sudden cardiac arrest. The combination of extreme metabolic demand, hyperthermia, acidosis, and catecholamine surge creates a perfect storm for fatal dysrhythmias. Rapid cooling and sedation (at Paramedic level) are time-critical."
      },
      {
        phase: "treatment",
        prompt: "Which of the following interventions are appropriate for this patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT-AEMT",
        options: [
          {
            text: "Ensure the patient is NOT kept in prone/facedown position",
            correct: true,
            critical: false,
            explanation: "Prone restraint contributes to positional asphyxia and is especially dangerous in agitated, obese, or intoxicated patients. The patient must be placed on their side or sitting up as soon as possible.",
            guideline_ref: "NAEMSP Position Statement on Excited Delirium; DOJ Positional Asphyxia Guidelines"
          },
          {
            text: "Begin active cooling measures — remove excess clothing, apply cold packs to neck, axillae, and groin",
            correct: true,
            critical: false,
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
            text: "Administer high-flow oxygen",
            correct: true,
            critical: false,
            explanation: "The patient is hypoxic (SpO2 92%) and in a state of extreme metabolic demand. Supplemental oxygen helps address tissue hypoxia and metabolic acidosis.",
            guideline_ref: "NAEMSP Oxygen Therapy Guidelines"
          },
          {
            text: "Withhold treatment until the patient calms down on their own",
            correct: false,
            critical: true,
            explanation: "Waiting for the patient to 'calm down' is extremely dangerous. Sudden quiet after extreme agitation may indicate impending cardiovascular collapse, not improvement. Immediate medical intervention is required.",
            guideline_ref: "NAEMSP Excited Delirium Management; ACEP White Paper"
          }
        ],
        clinical_pearl: "Positioning and cooling are the two interventions available at all provider levels that most directly reduce mortality. Get the patient off their stomach and start cooling immediately — don't wait for ALS."
      },
      {
        phase: "treatment",
        prompt: "This patient requires chemical sedation to break the cycle of agitation, hyperthermia, and metabolic crisis. Which medication and approach is MOST appropriate?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The patient remains violently agitated despite positioning and cooling measures. HR is 168, temp 104.6°F, SpO2 90%. IV access is not feasible due to combativeness. You have IM medications available.",
        vitals_update: { hr: 168, temp: "104.6°F", spo2: 90 },
        options: [
          {
            text: "Ketamine 4 mg/kg IM — provides rapid dissociative sedation with preserved respiratory drive and bronchodilation",
            correct: true,
            critical: false,
            explanation: "Ketamine IM is the preferred agent for excited delirium: rapid onset (3-5 minutes IM), reliable absorption, preserved respiratory drive, bronchodilation, and does not cause the respiratory depression seen with benzodiazepines at sedating doses. The 4 mg/kg IM dose is well-established for this indication.",
            guideline_ref: "NAEMSP Position Statement on Excited Delirium; ACEP Ketamine for Agitation; 2021 National EMS Education Standards — Paramedic Pharmacology"
          },
          {
            text: "Midazolam 5 mg IM — standard benzodiazepine dosing for agitation",
            correct: false,
            critical: false,
            explanation: "Midazolam 5 mg IM is often inadequate for severe excited delirium and may require repeated doses. Onset is slower than ketamine (10-15 min IM vs 3-5 min), and at the doses needed for effective sedation, respiratory depression is significant. It remains an acceptable alternative if ketamine is unavailable.",
            guideline_ref: "NAEMSP Excited Delirium Management; 2021 National EMS Education Standards"
          },
          {
            text: "Haloperidol 10 mg IM — antipsychotic sedation is first-line for behavioral emergencies",
            correct: false,
            critical: true,
            explanation: "Haloperidol lowers the seizure threshold, prolongs QT interval, and has a slow onset (20-40 minutes IM). In a patient with severe hyperthermia and tachycardia who is at imminent risk for cardiac arrest, haloperidol's QT prolongation can trigger torsades de pointes. It is not appropriate for this acute metabolic crisis.",
            guideline_ref: "NAEMSP Excited Delirium Management; FDA Black Box Warning — QT Prolongation"
          },
          {
            text: "Diphenhydramine 50 mg IM — sedating antihistamine to calm the patient",
            correct: false,
            critical: false,
            explanation: "Diphenhydramine has anticholinergic properties that impair sweating and worsen hyperthermia. It provides inadequate sedation for this level of agitation and would actively harm this patient by further elevating temperature.",
            guideline_ref: "NAEMSP Excited Delirium Management; Anticholinergic toxicity considerations"
          }
        ],
        clinical_pearl: "Ketamine IM has become the preferred agent for severe prehospital agitation because it works fast, works reliably, and maintains respiratory drive. Always have suction and airway equipment ready — emergence reactions and hypersalivation can occur. Once sedated, continue aggressive cooling and cardiac monitoring. Prepare for possible apnea, especially if benzodiazepines were given first."
      },
      {
        phase: "treatment",
        prompt: "Place the following treatment priorities in order from FIRST to LAST.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You and your partner are now managing this patient. Police are assisting with safe positioning. The patient remains agitated but is now on his side.",
        items: [
          "Ensure patient is positioned on their side — NOT prone or hogtied",
          "Begin aggressive cooling — ice packs to groin, axillae, and neck",
          "Apply high-flow oxygen and monitor SpO2",
          "Place cardiac monitor and prepare defibrillator",
          "Transport emergently with continuous reassessment"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "The treatment sequence prioritizes preventing positional asphyxia (most immediate death risk), then addressing hyperthermia, ensuring oxygenation, monitoring for cardiac arrest, and transporting emergently. Every minute of delay increases mortality risk.",
        guideline_ref: "NAEMSP Excited Delirium Management; ACEP White Paper on Excited Delirium",
        clinical_pearl: "Time is the enemy in excited delirium. The goal is rapid sedation (Paramedic level), aggressive cooling, and emergent transport. Do not spend extended time on scene. If chemical sedation is achieved, continue cooling and monitoring en route — these patients can arrest without warning even after sedation."
      },
      {
        phase: "decision-making",
        prompt: "Categorize the following findings as either signs of WORSENING CONDITION requiring immediate intervention or EXPECTED FINDINGS in this presentation.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You are en route to the hospital. The patient has been on his side with cooling measures in place for 4 minutes. You are performing ongoing assessment.",
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
        ],
        explanation: "Differentiating expected findings from signs of imminent collapse is essential. Sudden cessation of agitation, declining mental status, and loss of pulses indicate the patient is transitioning from a hypermetabolic state to cardiovascular collapse.",
        guideline_ref: "NAEMSP Excited Delirium Management; ACEP Excited Delirium White Paper",
        clinical_pearl: "The most dangerous moment in excited delirium is when the patient suddenly becomes quiet and stops struggling. This is NOT a sign of improvement — it often precedes cardiac arrest. Treat sudden calm as a critical deterioration."
      },
      {
        phase: "decision-making",
        prompt: "After ketamine sedation, the patient's agitation resolves but he becomes apneic. His cardiac monitor shows the rhythm below. What is your interpretation and immediate action?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "Three minutes after ketamine 4 mg/kg IM, the patient stops struggling. You note he is now apneic with a weak pulse. The cardiac monitor shows a wide-complex tachycardia at approximately 180 bpm. BP is 72/40.",
        vitals_update: { hr: 180, bp: "72/40", rr: 0, spo2: 78 },
        graphic_description: "Wide-complex tachycardia: regular rhythm, rate ~180, QRS >140 ms, monomorphic pattern, no discernible P waves. Axis suggests ventricular origin.",
        options: [
          {
            text: "Ventricular tachycardia with a pulse — begin BVM ventilation, prepare for synchronized cardioversion at 100J, and administer amiodarone 150 mg IV if cardioversion is delayed or unsuccessful",
            correct: true,
            critical: false,
            explanation: "This is a wide-complex tachycardia in an unstable patient (hypotension, apnea). Treat as VT until proven otherwise. Synchronized cardioversion is the primary intervention for unstable VT with a pulse. Amiodarone is the first-line antiarrhythmic. Begin ventilating immediately for the apnea — hypoxia will worsen the rhythm.",
            guideline_ref: "AHA ACLS Tachycardia Algorithm; 2021 National EMS Education Standards — Paramedic Cardiac Emergencies"
          },
          {
            text: "Supraventricular tachycardia with aberrant conduction — administer adenosine 6 mg rapid IV push",
            correct: false,
            critical: true,
            explanation: "In the context of excited delirium with metabolic derangement, wide-complex tachycardia should be treated as ventricular tachycardia. Adenosine is ineffective for VT and delays definitive treatment. In unstable patients, cardioversion is the priority regardless of rhythm interpretation.",
            guideline_ref: "AHA ACLS Tachycardia Algorithm; Brugada Criteria for WCT"
          },
          {
            text: "Artifact from patient movement — continue monitoring without intervention",
            correct: false,
            critical: true,
            explanation: "The patient is no longer moving (sedated and apneic). A regular wide-complex tachycardia at 180 bpm with hypotension cannot be dismissed as artifact. Failure to treat this rhythm will result in cardiac arrest.",
            guideline_ref: "AHA ACLS — Arrhythmia Recognition"
          },
          {
            text: "Pulseless electrical activity — begin CPR immediately",
            correct: false,
            critical: false,
            explanation: "The patient has a pulse (weak but present) and the rhythm shows organized electrical activity with a rate and morphology consistent with VT. This is NOT PEA. Check the pulse carefully — if pulse is lost, then begin CPR and follow the VF/pulseless VT algorithm with defibrillation.",
            guideline_ref: "AHA ACLS Cardiac Arrest Algorithm"
          }
        ],
        clinical_pearl: "In excited delirium, cardiac arrest is often preceded by a wide-complex tachycardia — the hyperadrenergic state, acidosis, hyperkalemia, and hyperthermia all promote ventricular irritability. When you see a wide-complex tachycardia in this context, act immediately. Synchronized cardioversion for unstable VT with a pulse; defibrillation if pulses are lost."
      }
    ]
  },

  "nat-med-08": {
    questions: [
      {
        phase: "assessment",
        prompt: "The patient rates her pain 9/10 in her legs and lower back. She says this feels like her usual crises but worse, and she's also having some chest tightness. What is your MOST important initial concern with this presentation?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is tachycardic, mildly febrile, and her SpO2 is below normal. She appears in significant distress and is splinting her breathing.",
        options: [
          {
            text: "She may be developing acute chest syndrome, a life-threatening complication",
            correct: true,
            critical: false,
            explanation: "The combination of chest tightness, fever, tachypnea, and low SpO2 in a sickle cell patient raises concern for acute chest syndrome, which requires aggressive oxygen therapy and rapid transport.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; ACS diagnostic criteria"
          },
          {
            text: "Her pain is causing hyperventilation and anxiety — reassurance is the priority",
            correct: false,
            critical: false,
            explanation: "While pain can cause tachypnea, dismissing respiratory symptoms in a sickle cell patient is dangerous. The low SpO2 and fever suggest a more serious process than anxiety.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          },
          {
            text: "The fever indicates a simple infection unrelated to her sickle cell disease",
            correct: false,
            critical: true,
            explanation: "Fever in sickle cell patients is never 'simple.' These patients are functionally asplenic and at high risk for sepsis and acute chest syndrome. Fever always warrants urgent evaluation.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; Emergency Severity Index for SCD"
          },
          {
            text: "This is a routine pain crisis and standard pain management is all that's needed",
            correct: false,
            critical: false,
            explanation: "While pain management is important, the respiratory symptoms, fever, and low SpO2 indicate this may be more than a routine vaso-occlusive crisis. A thorough assessment is essential before focusing only on pain.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          }
        ],
        clinical_pearl: "Acute chest syndrome (ACS) is the leading cause of death in sickle cell patients. Any sickle cell patient with chest pain, tachypnea, fever, or dropping SpO2 should be treated aggressively with oxygen and transport — do not dismiss respiratory complaints as just part of the pain crisis."
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order of priority for this patient:",
        type: "order",
        level_filter: "EMR-EMT-AEMT",
        narrative: "The patient's SpO2 has dropped to 91% and she is becoming more tachypneic. She remains alert but is now having difficulty completing full sentences.",
        vitals_update: { spo2: 91, rr: 26 },
        items: [
          "Apply high-flow oxygen via non-rebreather mask",
          "Position patient upright for comfort and breathing",
          "Keep patient warm — avoid cold exposure",
          "Establish IV access and administer normal saline bolus",
          "Provide appropriate pain management per protocol",
          "Initiate rapid transport to appropriate facility"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Oxygen is the immediate priority given worsening hypoxemia. Positioning and keeping the patient warm prevent further sickling. IV access enables fluid and medication administration. Pain management is important but follows life-threat interventions. Transport should not be delayed.",
        guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; National Association of EMS Physicians position statement on SCD",
        clinical_pearl: "Cold exposure and dehydration trigger sickling. Keep the ambulance warm, use warmed IV fluids if available, and avoid ice packs. Sickle cell patients often have difficult IV access due to repeated hospitalizations — consider alternative sites early."
      },
      {
        phase: "treatment",
        prompt: "Which of the following are appropriate prehospital considerations for this sickle cell patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          {
            text: "Keep the ambulance warm and avoid exposing the patient to cold",
            correct: true,
            critical: false,
            explanation: "Cold causes vasoconstriction and promotes sickling. Maintaining a warm environment is a simple but critical intervention.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          },
          {
            text: "Administer IV normal saline — dehydration worsens sickling",
            correct: true,
            critical: false,
            explanation: "Hydration helps reduce blood viscosity and prevent further vaso-occlusion. Normal saline is the appropriate fluid choice.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          },
          {
            text: "Apply ice packs to the most painful areas for comfort",
            correct: false,
            critical: true,
            explanation: "Ice packs cause local vasoconstriction and cooling, which directly promotes sickling and can worsen the crisis. Never apply cold to a sickle cell patient in crisis.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          },
          {
            text: "Note the patient's morphine allergy and communicate it to the receiving facility",
            correct: true,
            critical: false,
            explanation: "Accurate allergy documentation prevents administration of a medication that causes adverse reactions. This information is critical for hospital pain management planning.",
            guideline_ref: "General prehospital documentation standards"
          },
          {
            text: "Withhold all pain medication because the patient takes oxycodone at home",
            correct: false,
            critical: true,
            explanation: "Withholding pain management from a patient in sickle cell crisis is inappropriate and harmful. Pain itself worsens sickling through stress responses. Treat pain aggressively within your scope.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; NAEMSP position on prehospital pain management"
          },
          {
            text: "Transport to a facility experienced in managing sickle cell disease if available",
            correct: true,
            critical: false,
            explanation: "Sickle cell patients benefit from care at facilities familiar with the disease, especially when acute chest syndrome is suspected. This may require a specialty center.",
            guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines"
          }
        ],
        clinical_pearl: "Cold exposure and dehydration trigger sickling. Keep the ambulance warm, use warmed IV fluids if available, and avoid ice packs. Sickle cell patients often have difficult IV access due to repeated hospitalizations — consider alternative sites early."
      },
      {
        phase: "treatment",
        prompt: "This patient has a morphine allergy (itching) and requires aggressive pain management. Her SpO2 is 91% with worsening chest tightness. Which analgesic approach is MOST appropriate?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient is in severe distress with 9/10 pain. You have IV access established. Her morphine allergy is documented as 'itching' — a histamine-mediated side effect. SpO2 is 91% on high-flow O2.",
        vitals_update: { spo2: 91, hr: 118 },
        options: [
          {
            text: "Fentanyl 1 mcg/kg IV, titrated in 0.5 mcg/kg increments every 5 minutes, with continuous SpO2 and EtCO2 monitoring",
            correct: true,
            critical: false,
            explanation: "Fentanyl is ideal here: it does not cause histamine release (unlike morphine), has rapid onset, is easily titrated, and has minimal hemodynamic effects. The morphine 'allergy' is actually a predictable side effect (histamine-mediated itching), but fentanyl avoids this entirely. Titrate carefully given the respiratory compromise — use waveform capnography to monitor for hypoventilation.",
            guideline_ref: "NAEMSP Prehospital Pain Management; 2021 National EMS Education Standards — Paramedic Pharmacology; Sickle Cell Pain Management Guidelines"
          },
          {
            text: "Morphine 4 mg IV since the documented reaction is only a side effect, not a true allergy",
            correct: false,
            critical: false,
            explanation: "While technically the 'itching' reaction to morphine is a predictable histamine-mediated side effect rather than a true allergy, giving a medication the patient reports as an allergy creates medicolegal risk and erodes patient trust. Better alternatives exist. Additionally, morphine's histamine release can worsen bronchospasm in a patient with respiratory compromise.",
            guideline_ref: "NAEMSP Prehospital Pain Management; Cross-allergenicity of opioids"
          },
          {
            text: "Ketorolac 30 mg IV as a non-opioid alternative to avoid any opioid-related concerns",
            correct: false,
            critical: false,
            explanation: "While ketorolac is effective for pain, NSAIDs should be used cautiously in sickle cell patients. They can impair renal function, which is already compromised in many SCD patients from repeated sickling events. Additionally, 30 mg IV ketorolac alone is inadequate for severe crisis pain.",
            guideline_ref: "NAEMSP Prehospital Pain Management; SCD Nephropathy Considerations"
          },
          {
            text: "Nitrous oxide 50:50 blend as a non-invasive analgesic alternative",
            correct: false,
            critical: false,
            explanation: "Nitrous oxide can provide modest pain relief but is insufficient for severe sickle cell crisis pain (9/10). It also requires patient cooperation with a demand valve, which is difficult in severe respiratory distress. Nitrous is not a substitute for appropriate opioid analgesia in this scenario.",
            guideline_ref: "NAEMSP Prehospital Pain Management"
          }
        ],
        clinical_pearl: "Sickle cell patients often face undertreated pain due to provider bias and 'opioid-seeking' assumptions. Treat their pain aggressively — pain causes sympathetic activation, vasoconstriction, and more sickling, creating a vicious cycle. Fentanyl is the preferred prehospital opioid: no histamine release, rapid onset, easy titration, and minimal hypotension."
      },
      {
        phase: "transport",
        prompt: "En route, the patient's SpO2 drops to 85% despite high-flow O2 and she becomes increasingly dyspneic. You suspect worsening acute chest syndrome. Categorize each intervention as APPROPRIATE or NOT APPROPRIATE for this deterioration.",
        type: "categorize",
        level_filter: "Paramedic",
        narrative: "Despite NRB at 15 LPM, the patient's SpO2 has fallen to 85%. She is using accessory muscles, speaking only 1-2 words at a time, and becoming increasingly anxious. Lung sounds reveal crackles in the right lower lobe. HR 128, BP 108/68, RR 32.",
        vitals_update: { spo2: 85, hr: 128, rr: 32, bp: "108/68" },
        categories: ["Appropriate Intervention", "Not Appropriate"],
        items: [
          { text: "Switch to CPAP at 5-10 cmH2O to improve oxygenation and reduce work of breathing", category: "Appropriate Intervention" },
          { text: "Continue IV normal saline at maintenance rate to maintain hydration", category: "Appropriate Intervention" },
          { text: "Prepare for endotracheal intubation if CPAP fails to improve oxygenation", category: "Appropriate Intervention" },
          { text: "Administer albuterol 2.5 mg nebulized if wheezing or bronchospasm is present", category: "Appropriate Intervention" },
          { text: "Administer a 2-liter normal saline bolus to treat the presumed hypovolemia", category: "Not Appropriate" },
          { text: "Reduce oxygen flow to 2 LPM nasal cannula to prevent oxygen toxicity", category: "Not Appropriate" },
          { text: "Notify receiving facility early for preparation of blood transfusion and respiratory support", category: "Appropriate Intervention" }
        ],
        explanation: "Worsening acute chest syndrome requires escalating respiratory support: CPAP provides positive pressure to recruit collapsed alveoli. If CPAP fails, intubation may be necessary. Albuterol can help if bronchospasm is contributing. Aggressive fluid boluses can worsen pulmonary edema in ACS. Reducing oxygen in a patient with SpO2 85% is dangerous. Early hospital notification allows preparation of exchange transfusion, the definitive treatment.",
        guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; ACS Management Guidelines; 2021 National EMS Education Standards — Paramedic Respiratory Emergencies",
        clinical_pearl: "CPAP is a powerful tool for sickle cell patients with acute chest syndrome. The positive pressure recruits collapsed alveoli and improves V/Q matching without intubation. If you don't have CPAP, assist ventilations with BVM if the patient tires. Early notification to the ED is critical — these patients may need emergent exchange transfusion, which requires advance preparation."
      }
    ]
  }

};
