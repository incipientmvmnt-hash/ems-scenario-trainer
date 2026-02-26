const BATCH3 = [
  // ============================================================
  // 1. Sepsis / Shock
  // ============================================================
  {
    id: "nat-sep-01",
    title: "Nursing Home Sepsis with Hemodynamic Compromise",
    dispatch: "68-year-old male, fever, altered mental status",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 68, sex: "M", cc: "Fever and confusion" },
    scene: "You arrive at a nursing home and are directed to a shared room. A 68-year-old male is lying in bed, appearing flushed and diaphoretic. Staff reports he became increasingly confused over the past 6 hours and spiked a fever. An indwelling urinary catheter is in place with dark, foul-smelling urine in the collection bag.",
    history: { pmh: "Type 2 diabetes, COPD, recurrent UTIs, prior stroke with residual left-sided weakness", meds: "Metformin, tiotropium inhaler, aspirin 81 mg", allergies: "Sulfa drugs" },
    vitals: { hr: 118, bp: "82/48", rr: 24, spo2: 91, gcs: 12, temp: "103.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on the clinical presentation, which finding is MOST indicative that this patient is experiencing sepsis rather than a simple infection?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient moans when you call his name but cannot tell you what day it is. His skin is hot, flushed, and moist. Capillary refill is 4 seconds.",
        vitals_update: {},
        clinical_pearl: "Sepsis is defined as a life-threatening organ dysfunction caused by a dysregulated host response to infection. The combination of suspected infection plus organ dysfunction (altered mental status, hypotension, tachypnea) differentiates sepsis from uncomplicated infection.",
        options: [
          { text: "Fever of 103.2°F with an indwelling catheter", correct: false, critical: false, explanation: "Fever with a catheter suggests a urinary tract infection but does not alone indicate sepsis. Many patients have infections without developing organ dysfunction.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Hypotension and altered mental status in the setting of suspected infection", correct: true, critical: false, explanation: "Hypotension (SBP <90) and altered mental status represent end-organ dysfunction. When combined with suspected infection, these findings meet criteria for sepsis and should trigger aggressive prehospital management.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines; 2021 National EMS Education Standards" },
          { text: "Heart rate greater than 100 beats per minute", correct: false, critical: false, explanation: "Tachycardia is a SIRS criterion and a common finding in many conditions including pain, anxiety, and dehydration. Alone, it does not define sepsis.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Foul-smelling urine visible in the catheter bag", correct: false, critical: false, explanation: "This suggests a urinary source of infection but is a sign of infection, not organ dysfunction. Sepsis requires evidence of organ dysfunction beyond the infection itself.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize each of the following findings as either a SIRS Criterion or a Sign of Organ Dysfunction.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You continue your assessment. The nursing staff provides additional history and you gather more clinical data.",
        vitals_update: {},
        clinical_pearl: "SIRS criteria (temperature, heart rate, respiratory rate, WBC) identify a systemic inflammatory response but are non-specific. Organ dysfunction signs (hypotension, altered mental status, elevated lactate, decreased urine output) indicate that the infection is causing life-threatening physiologic derangement — this is what defines sepsis.",
        options: [
          { text: "Heart rate of 118 bpm → SIRS Criterion", correct: true, critical: false, explanation: "Heart rate >90 bpm is one of the four classic SIRS criteria.", guideline_ref: "ACCP/SCCM Consensus Definitions; 2021 National EMS Education Standards" },
          { text: "Temperature of 103.2°F → SIRS Criterion", correct: true, critical: false, explanation: "Temperature >100.4°F (38°C) or <96.8°F (36°C) is a SIRS criterion.", guideline_ref: "ACCP/SCCM Consensus Definitions" },
          { text: "Respiratory rate of 24 → SIRS Criterion", correct: true, critical: false, explanation: "Respiratory rate >20 breaths per minute is a SIRS criterion.", guideline_ref: "ACCP/SCCM Consensus Definitions" },
          { text: "Blood pressure of 82/48 → Sign of Organ Dysfunction", correct: true, critical: false, explanation: "Hypotension (SBP <90 or MAP <65) indicates cardiovascular organ dysfunction and is a hallmark of septic shock.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "GCS of 12 (altered mental status) → Sign of Organ Dysfunction", correct: true, critical: false, explanation: "Acute alteration in mental status indicates central nervous system organ dysfunction secondary to poor perfusion or direct inflammatory effects.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Dark concentrated urine output → Sign of Organ Dysfunction", correct: true, critical: false, explanation: "Decreased and concentrated urine output indicates renal organ dysfunction, a common early sign of sepsis-related hypoperfusion.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following sepsis management steps in the correct priority order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have confirmed your clinical suspicion of sepsis with hemodynamic compromise. You need to initiate treatment and prepare for transport.",
        vitals_update: { hr: 122, bp: "78/44", rr: 26, spo2: 89 },
        clinical_pearl: "Prehospital sepsis management follows an ABCDE approach. Airway and breathing take priority, followed by circulatory support with IV fluids. Early hospital notification allows the receiving facility to prepare for time-sensitive interventions including blood cultures and antibiotics.",
        options: [
          { text: "Apply high-flow oxygen to address hypoxia", correct: true, critical: false, explanation: "Addressing the airway and breathing is always the first priority. This patient's SpO2 of 89% requires immediate supplemental oxygen.", guideline_ref: "2021 National EMS Education Standards; AHA ACLS Guidelines" },
          { text: "Establish IV/IO access for fluid resuscitation", correct: true, critical: false, explanation: "Vascular access is essential to deliver the fluid boluses needed to support blood pressure in septic shock.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines; NAEMSP Position Statement on Sepsis" },
          { text: "Administer a 500 mL normal saline bolus and reassess", correct: true, critical: false, explanation: "Initial fluid resuscitation with crystalloid is the primary circulatory intervention in prehospital sepsis management. Administer in measured boluses with frequent reassessment.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Provide early hospital notification as a sepsis alert", correct: true, critical: false, explanation: "Early notification allows the receiving facility to mobilize sepsis bundles including antibiotics and lab draws, reducing time to definitive treatment.", guideline_ref: "NAEMSP Position Statement on Prehospital Sepsis; Surviving Sepsis Campaign 2021" },
          { text: "Initiate rapid transport to the closest appropriate facility", correct: true, critical: false, explanation: "Sepsis is a time-sensitive emergency. Rapid transport to a facility capable of managing septic shock is critical to patient survival.", guideline_ref: "2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are important considerations when administering IV fluid resuscitation to this septic patient? (Select all that apply)",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "You have established an 18-gauge IV in the right antecubital fossa and are preparing to administer fluids. The patient's blood pressure remains 78/44.",
        vitals_update: {},
        clinical_pearl: "Current evidence supports initial crystalloid resuscitation in sepsis but emphasizes reassessment after each bolus. Overly aggressive fluid administration without monitoring can worsen outcomes, particularly in patients with heart failure or COPD. The days of reflexive 30 mL/kg boluses without reassessment are evolving toward a more individualized approach.",
        options: [
          { text: "Administer fluids in smaller boluses (250-500 mL) with reassessment after each", correct: true, critical: false, explanation: "Current evidence-based guidelines emphasize measured fluid administration with frequent reassessment of blood pressure, lung sounds, and work of breathing rather than large unrestricted boluses.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Monitor lung sounds for crackles during fluid administration given COPD history", correct: true, critical: false, explanation: "Patients with COPD and other cardiopulmonary comorbidities are at higher risk for fluid overload and pulmonary edema during resuscitation. Reassessing lung sounds after each bolus is essential.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Use normal saline or lactated Ringer's as the preferred crystalloid solution", correct: true, critical: false, explanation: "Isotonic crystalloids (NS or LR) are the recommended first-line fluids for sepsis resuscitation. Balanced crystalloids like LR may be preferred to reduce hyperchloremic acidosis risk.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" },
          { text: "Withhold all fluids until the patient arrives at the emergency department", correct: false, critical: true, explanation: "Withholding fluids from a hypotensive septic patient is dangerous. Delayed fluid resuscitation is associated with increased mortality in septic shock.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines; NAEMSP Position Statement on Sepsis" },
          { text: "Administer 2 liters of normal saline as fast as possible without reassessment", correct: false, critical: false, explanation: "Unrestricted large-volume fluid administration without reassessment can lead to fluid overload and pulmonary edema, especially in elderly patients with comorbidities.", guideline_ref: "Surviving Sepsis Campaign 2021 Guidelines" }
        ]
      }
    ]
  },

  // ============================================================
  // 2. Drowning / Submersion
  // ============================================================
  {
    id: "nat-drn-01",
    title: "Pediatric Submersion Injury with Respiratory Arrest",
    dispatch: "8-year-old, pulled from pool, not responsive",
    category: "Environmental",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 8, sex: "M", cc: "Pulled from pool, not breathing" },
    scene: "You arrive at a residential backyard where bystanders have pulled an 8-year-old boy from an above-ground pool. The child is lying supine on the pool deck. A frantic parent states the child was found floating face-down and may have been submerged for 2-3 minutes. The child is unresponsive, cyanotic, and not breathing. A weak pulse is palpable at the carotid.",
    history: { pmh: "None known", meds: "None", allergies: "No known allergies" },
    vitals: { hr: 52, bp: "70/40", rr: 0, spo2: 68, gcs: 3, temp: "96.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "For this submersion victim who has a pulse but is not breathing, what is the MOST important initial intervention?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The child is unresponsive with no respiratory effort. You confirm a weak carotid pulse at a rate of approximately 52 bpm.",
        vitals_update: {},
        clinical_pearl: "Drowning is fundamentally a respiratory emergency. Unlike cardiac arrest from other causes, the primary insult is hypoxia from water aspiration and airway obstruction. Providing ventilation is the highest priority and the intervention most likely to result in a positive outcome. The AHA emphasizes that rescue breaths should be initiated as soon as possible in drowning victims.",
        options: [
          { text: "Begin immediate rescue breathing with high-flow oxygen via bag-valve mask", correct: true, critical: false, explanation: "In drowning, hypoxia is the primary insult. A patient with a pulse but no respirations needs immediate ventilation. Providing rescue breaths with supplemental oxygen addresses the root cause of the arrest.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC; 2021 National EMS Education Standards" },
          { text: "Begin chest compressions immediately at a rate of 100-120 per minute", correct: false, critical: false, explanation: "This patient has a pulse, so chest compressions are not yet indicated. In drowning victims with a pulse, ventilation is the priority. If the heart rate drops below 60 with signs of poor perfusion in a pediatric patient, then compressions should begin.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC — Pediatric BLS" },
          { text: "Perform abdominal thrusts to expel water from the lungs", correct: false, critical: true, explanation: "Abdominal thrusts (Heimlich maneuver) to remove water from the lungs is ineffective, delays ventilation, and risks aspiration of gastric contents. This technique is NOT recommended for drowning victims.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC" },
          { text: "Apply the AED and analyze the cardiac rhythm first", correct: false, critical: false, explanation: "While AED application is important in cardiac arrest, this patient has a pulse. The priority is ventilation to address hypoxia. If the patient deteriorates into pulseless arrest, then AED application is appropriate.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps for managing this submersion victim in the correct sequence.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You are establishing your management plan for this pediatric submersion victim.",
        vitals_update: { hr: 48, spo2: 62 },
        clinical_pearl: "The drowning resuscitation sequence prioritizes the airway and breathing over circulation, which differs from the C-A-B approach used in standard cardiac arrest. The AHA recommends A-B-C for drowning victims because the arrest mechanism is respiratory. Inline spinal stabilization should be considered if mechanism suggests diving or trauma but should never delay ventilation.",
        options: [
          { text: "Open the airway with jaw thrust while maintaining cervical spine precautions", correct: true, critical: false, explanation: "Airway management is the first step. A jaw thrust is preferred when spinal injury cannot be ruled out, though a head-tilt chin-lift may be used if jaw thrust is ineffective.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC; PHTLS 9th Edition" },
          { text: "Suction the airway if water or debris is visible in the oropharynx", correct: true, critical: false, explanation: "Clearing the airway of visible obstructions allows for effective ventilation. Brief suctioning is appropriate but should not significantly delay rescue breathing.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC" },
          { text: "Deliver rescue breaths via BVM with high-flow oxygen at age-appropriate rate", correct: true, critical: false, explanation: "Ventilation with supplemental oxygen is the definitive initial treatment for drowning. Deliver breaths at 12-20 per minute for a pediatric patient, watching for chest rise.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC — Pediatric BLS" },
          { text: "Begin chest compressions if heart rate falls below 60 bpm with poor perfusion", correct: true, critical: false, explanation: "In pediatric patients, a heart rate below 60 bpm with signs of poor perfusion (cyanosis, altered consciousness) despite adequate oxygenation and ventilation warrants chest compressions.", guideline_ref: "AHA 2020 PALS Guidelines" },
          { text: "Remove wet clothing and prevent further heat loss during ongoing resuscitation", correct: true, critical: false, explanation: "Hypothermia worsens outcomes in drowning. Remove wet clothing and cover the patient to prevent further heat loss while continuing resuscitation efforts.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC; Wilderness Medical Society Guidelines" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which of the following associated injuries or complications should you consider in this submersion patient? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "The child is now being ventilated with a BVM. You are performing a secondary assessment and considering associated conditions.",
        vitals_update: { hr: 78, spo2: 84, rr: 8 },
        clinical_pearl: "Drowning victims may have injuries beyond the obvious respiratory compromise. Always consider the mechanism — did the patient dive, fall, or were they pushed? Cervical spine injury should be considered with any traumatic mechanism. Hypothermia affects nearly all prolonged submersion victims and influences resuscitation decisions.",
        options: [
          { text: "Cervical spine injury, especially if the mechanism involved diving or a fall", correct: true, critical: false, explanation: "Spinal injury should be considered in any submersion event where trauma is possible (diving, falls, water slides). Maintain spinal precautions if mechanism suggests potential injury.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC; PHTLS 9th Edition" },
          { text: "Hypothermia from prolonged water exposure affecting cardiac rhythm", correct: true, critical: false, explanation: "Even in warm water, submersion victims can become hypothermic. Hypothermia can cause dysrhythmias and affects resuscitation drug effectiveness and defibrillation thresholds.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC; Wilderness Medical Society" },
          { text: "Aspiration pneumonia from inhaled pool water and gastric contents", correct: true, critical: false, explanation: "Water aspiration damages surfactant and alveolar tissue. Gastric distension from swallowed water increases aspiration risk. These patients frequently develop pneumonia and ARDS.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC" },
          { text: "Hypovolemic shock from internal hemorrhage caused by water pressure", correct: false, critical: false, explanation: "Water pressure during submersion does not cause internal hemorrhage. While trauma may cause bleeding if the patient struck an object, submersion itself does not produce hypovolemic shock from hemorrhage.", guideline_ref: "2021 National EMS Education Standards" },
          { text: "Gastric distension from swallowed water complicating ventilation efforts", correct: true, critical: false, explanation: "Drowning victims frequently swallow large amounts of water, causing gastric distension that impairs diaphragmatic excursion and increases aspiration risk during BVM ventilation.", guideline_ref: "AHA 2020 Guidelines for CPR & ECC" }
        ]
      }
    ]
  },

  // ============================================================
  // 3. Chest Trauma — Tension Pneumothorax
  // ============================================================
  {
    id: "nat-tpn-01",
    title: "Penetrating Chest Trauma with Tension Pneumothorax",
    dispatch: "35-year-old male, stabbing, difficulty breathing",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 35, sex: "M", cc: "Stabbed in chest, can't breathe" },
    scene: "You arrive at a parking lot behind a bar where police have secured the scene. A 35-year-old male is sitting on the ground leaning forward, clutching the right side of his chest. He is in obvious respiratory distress with accessory muscle use. A bystander is holding a blood-soaked towel against a wound on the right lateral chest wall. The patient is anxious, pale, and diaphoretic.",
    history: { pmh: "No significant medical history", meds: "None", allergies: "No known allergies" },
    vitals: { hr: 128, bp: "88/60", rr: 32, spo2: 82, gcs: 14, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which combination of findings is MOST consistent with a developing tension pneumothorax in this patient?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        multi_select: false,
        narrative: "You remove the towel and identify a 3 cm wound on the right lateral chest at approximately the 5th intercostal space. During auscultation, you note absent breath sounds on the right side. The trachea appears deviated slightly to the left. Jugular veins are distended despite the patient's hypotension.",
        vitals_update: { hr: 134, bp: "82/56", spo2: 78 },
        clinical_pearl: "Tension pneumothorax is a clinical diagnosis — do not wait for imaging confirmation in the prehospital setting. The classic triad is absent breath sounds on the affected side, jugular venous distension (JVD), and tracheal deviation AWAY from the affected side. However, tracheal deviation is a late and often difficult-to-detect finding. Hypotension with JVD in a trauma patient with unilateral absent breath sounds should be treated as tension pneumothorax.",
        options: [
          { text: "Absent right-sided breath sounds, JVD, and tracheal deviation to the left with hypotension", correct: true, critical: false, explanation: "This combination represents the classic presentation of tension pneumothorax: absent breath sounds on the affected side, JVD from impaired venous return, tracheal deviation away from the tension, and hypotension from decreased cardiac output.", guideline_ref: "PHTLS 9th Edition; ITLS 9th Edition; 2021 National EMS Education Standards" },
          { text: "Bilateral crackles, JVD, and peripheral edema with hypertension", correct: false, critical: false, explanation: "This presentation is consistent with acute decompensated heart failure, not tension pneumothorax. The mechanism (stabbing) and unilateral findings make this incorrect.", guideline_ref: "PHTLS 9th Edition" },
          { text: "Absent left-sided breath sounds, flat neck veins, and tracheal deviation to the right", correct: false, critical: false, explanation: "The wound is on the right side. While a contralateral pneumothorax is theoretically possible, the findings should correlate with the injury side. Flat neck veins would suggest hypovolemia rather than tension physiology.", guideline_ref: "PHTLS 9th Edition" },
          { text: "Bilateral absent breath sounds, subcutaneous emphysema, and a normal blood pressure", correct: false, critical: false, explanation: "Bilateral absent breath sounds would suggest bilateral pneumothoraces or main-stem intubation, not a unilateral tension pneumothorax. Normal blood pressure is inconsistent with the hemodynamic compromise of tension.", guideline_ref: "PHTLS 9th Edition" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You are performing your physical examination. For each finding listed, indicate where you would expect to observe it on this patient. Select the correct anatomical location or physical exam technique for each finding.",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        multi_select: false,
        narrative: "You are systematically examining the patient to confirm your suspicion of tension pneumothorax and identify all injuries.",
        vitals_update: {},
        clinical_pearl: "A systematic chest exam in penetrating trauma includes inspection (wounds, symmetry, JVD, tracheal position), palpation (subcutaneous emphysema, chest wall instability), auscultation (bilateral breath sounds), and percussion (hyperresonance vs dullness). Always log-roll the patient to check for exit wounds — the most dangerous wound may be the one you don't see.",
        options: [
          { text: "Absent breath sounds → Right lateral and anterior chest (affected side) on auscultation", correct: true, critical: false, explanation: "Breath sounds will be absent on the side of the pneumothorax. Auscultate bilaterally at the anterior chest and mid-axillary lines to compare.", guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards" },
          { text: "Hyperresonance to percussion → Right chest wall (affected side)", correct: true, critical: false, explanation: "Trapped air under tension causes hyperresonance when the affected side is percussed. This helps differentiate pneumothorax (hyperresonant) from hemothorax (dull).", guideline_ref: "PHTLS 9th Edition" },
          { text: "Jugular venous distension → Bilateral neck, visible above the clavicles", correct: true, critical: false, explanation: "JVD occurs because the tension pneumothorax compresses the vena cava and right heart, impeding venous return. It is observed bilaterally in the neck.", guideline_ref: "PHTLS 9th Edition" },
          { text: "Tracheal deviation → Palpated and observed at the sternal notch, deviated to the LEFT (away from injury)", correct: true, critical: false, explanation: "Increasing pressure in the right pleural space pushes the mediastinal structures, including the trachea, toward the left (unaffected) side. Palpate at the sternal notch.", guideline_ref: "PHTLS 9th Edition" },
          { text: "Subcutaneous emphysema → Palpated around the wound site and right chest wall as a crackling sensation", correct: true, critical: false, explanation: "Air leaking from the injured lung can track into subcutaneous tissues, producing crepitus (a rice-crispy sensation) on palpation around the wound and chest wall.", guideline_ref: "PHTLS 9th Edition" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps for managing this patient's tension pneumothorax in the correct procedural order.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient is rapidly deteriorating. SpO2 has dropped to 76% and he is becoming less responsive. You must act immediately.",
        vitals_update: { hr: 140, bp: "74/50", spo2: 76, gcs: 12 },
        clinical_pearl: "For an open pneumothorax converting to tension, the immediate action is to seal the wound with a vented chest seal (or burp a non-vented seal). If tension physiology persists or worsens despite a vented seal, needle decompression is indicated at the approved site. The 2nd intercostal space midclavicular line or 4th-5th intercostal space anterior axillary line are accepted landmarks. Always reassess after each intervention.",
        options: [
          { text: "Apply a commercial vented chest seal over the open wound", correct: true, critical: false, explanation: "The first priority is to seal the open chest wound. A vented (three-way valve) chest seal allows air to escape during exhalation while preventing air entry during inhalation, addressing the open pneumothorax.", guideline_ref: "PHTLS 9th Edition; TCCC Guidelines; 2021 National EMS Education Standards" },
          { text: "Administer high-flow oxygen via non-rebreather mask at 15 LPM", correct: true, critical: false, explanation: "High-flow oxygen addresses hypoxia and helps with nitrogen washout of the pneumothorax. Apply oxygen while preparing for further interventions.", guideline_ref: "PHTLS 9th Edition; 2021 National EMS Education Standards" },
          { text: "Reassess breath sounds and hemodynamic status after chest seal application", correct: true, critical: false, explanation: "After sealing the wound, reassess to determine if the vented seal has relieved the tension. If hypotension and absent breath sounds persist, needle decompression is indicated.", guideline_ref: "PHTLS 9th Edition; TCCC Guidelines" },
          { text: "Perform needle decompression at the approved site if tension physiology persists", correct: true, critical: false, explanation: "If the vented chest seal does not relieve the tension, decompress with a 14-gauge or larger needle/catheter at the 2nd ICS midclavicular line or 4th-5th ICS anterior axillary line on the affected side.", guideline_ref: "PHTLS 9th Edition; TCCC Guidelines; NAEMSP Position Statement" },
          { text: "Reassess vitals and breath sounds post-decompression, initiate rapid transport", correct: true, critical: false, explanation: "After decompression, reassess for improvement in breath sounds, blood pressure, and oxygenation. Initiate rapid transport to a trauma center — needle decompression is a temporizing measure, not definitive treatment.", guideline_ref: "PHTLS 9th Edition; ACS Committee on Trauma" }
        ]
      }
    ]
  },

  // ============================================================
  // 4. Diabetic Emergency — DKA
  // ============================================================
  {
    id: "nat-dka-01",
    title: "Adolescent Diabetic Ketoacidosis",
    dispatch: "17-year-old female, difficulty breathing, confused",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 17, sex: "F", cc: "Lethargy, rapid deep breathing, confusion" },
    scene: "You are called to a high school where a 17-year-old female was found slumped over her desk by a teacher. She is now lying on the floor of the nurse's office. She is lethargic but rousable, breathing deeply and rapidly. You notice a fruity or acetone-like odor on her breath. A medical alert bracelet reads 'Type 1 Diabetes.' The school nurse reports the patient complained of abdominal pain and nausea earlier in the day.",
    history: { pmh: "Type 1 diabetes mellitus, diagnosed age 9", meds: "Insulin pump (found disconnected in her backpack)", allergies: "No known allergies" },
    vitals: { hr: 124, bp: "98/62", rr: 30, spo2: 97, gcs: 12, temp: "99.1°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which clinical finding is MOST specific to diabetic ketoacidosis (DKA) as opposed to other causes of altered mental status in this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "A point-of-care glucose reading shows 'HIGH' (above the meter's 500 mg/dL limit). The patient moans and says her stomach hurts but cannot tell you what day it is.",
        vitals_update: {},
        clinical_pearl: "Kussmaul respirations — deep, rapid breathing — are a compensatory mechanism to blow off CO2 and correct the metabolic acidosis of DKA. Combined with the fruity/acetone breath odor (from exhaled ketones), hyperglycemia, and known Type 1 diabetes, this presentation is classic DKA. Do not mistake Kussmaul respirations for a primary respiratory problem.",
        options: [
          { text: "Deep rapid (Kussmaul) respirations with a fruity acetone odor on the breath", correct: true, critical: false, explanation: "Kussmaul respirations represent respiratory compensation for metabolic acidosis, and the fruity odor comes from exhaled acetone (a ketone body). Together with hyperglycemia, these findings are highly specific for DKA.", guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards" },
          { text: "Tachycardia with a heart rate of 124 beats per minute", correct: false, critical: false, explanation: "Tachycardia is a non-specific finding present in many conditions including dehydration, anxiety, pain, sepsis, and drug ingestion. It does not specifically indicate DKA.", guideline_ref: "2021 National EMS Education Standards" },
          { text: "Altered mental status with a GCS of 12", correct: false, critical: false, explanation: "Altered mental status has a very broad differential including hypoglycemia, stroke, drug overdose, head injury, and many other causes. It is not specific to DKA.", guideline_ref: "2021 National EMS Education Standards" },
          { text: "Blood pressure of 98/62 indicating mild hypotension", correct: false, critical: false, explanation: "Mild hypotension can result from dehydration, hemorrhage, sepsis, anaphylaxis, and many other conditions. While dehydration-related hypotension is common in DKA, it is not a specific finding.", guideline_ref: "2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize each finding as characteristic of either Diabetic Ketoacidosis (DKA) or Hypoglycemia.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You are reviewing the clinical features to confirm your working diagnosis and differentiate DKA from hypoglycemia.",
        vitals_update: {},
        clinical_pearl: "The key prehospital distinction: hypoglycemia has a rapid onset (minutes to hours), cool/diaphoretic skin, and often presents with tremors, irritability, or seizures. DKA has a gradual onset (hours to days), warm/dry skin from dehydration, Kussmaul respirations, and fruity breath. Both cause altered mental status, but the treatments are very different — always check blood glucose.",
        options: [
          { text: "Kussmaul (deep, rapid) respirations → DKA", correct: true, critical: false, explanation: "Kussmaul respirations are the body's attempt to compensate for the severe metabolic acidosis of DKA by exhaling excess CO2.", guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards" },
          { text: "Fruity or acetone odor on breath → DKA", correct: true, critical: false, explanation: "The fruity odor results from exhaled acetone, a ketone body produced during the excessive fat metabolism that occurs when cells cannot use glucose.", guideline_ref: "ADA Standards of Medical Care in Diabetes" },
          { text: "Warm, dry skin with signs of dehydration → DKA", correct: true, critical: false, explanation: "DKA causes profound dehydration through osmotic diuresis (glucose spilling into urine pulls water with it). Skin is typically warm and dry.", guideline_ref: "ADA Standards of Medical Care in Diabetes" },
          { text: "Gradual onset over hours to days → DKA", correct: true, critical: false, explanation: "DKA develops over hours to days as insulin deficiency leads to progressive hyperglycemia, ketone production, and acidosis.", guideline_ref: "ADA Standards of Medical Care in Diabetes" },
          { text: "Cool, pale, diaphoretic skin → Hypoglycemia", correct: true, critical: false, explanation: "Hypoglycemia triggers a sympathetic nervous system response (epinephrine release), causing cool, clammy, diaphoretic skin — the body's fight-or-flight response to dangerously low glucose.", guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards" },
          { text: "Rapid onset over minutes to hours → Hypoglycemia", correct: true, critical: false, explanation: "Hypoglycemia develops rapidly, often within minutes of a missed meal, excess insulin, or unusual exertion. This rapid onset distinguishes it from the gradual development of DKA.", guideline_ref: "ADA Standards of Medical Care in Diabetes" },
          { text: "Tremors, irritability, or seizure activity → Hypoglycemia", correct: true, critical: false, explanation: "The brain depends on glucose for energy. Acute glucose deprivation causes neuroglycopenic symptoms including tremors, irritability, confusion, seizures, and eventually coma.", guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards" },
          { text: "Blood glucose reading above 300 mg/dL → DKA", correct: true, critical: false, explanation: "DKA is characterized by significant hyperglycemia (typically >250 mg/dL) due to absolute insulin deficiency. Very high readings ('HIGH' on meter) are characteristic.", guideline_ref: "ADA Standards of Medical Care in Diabetes" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Using the table below, identify the correct treatment priority for each EMS provider level when managing this DKA patient.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You are planning your treatment approach. Available resources vary by provider level.",
        vitals_update: { hr: 128, bp: "94/58", rr: 32 },
        clinical_pearl: "Prehospital DKA management focuses on supportive care: airway management, fluid resuscitation for dehydration-related hypotension, and rapid transport. Insulin is NOT a prehospital intervention for DKA — it requires careful lab-guided titration in the hospital. If blood glucose is elevated and the patient has altered mental status, do NOT administer oral glucose (aspiration risk). Fluid resuscitation should use isotonic crystalloid.",
        options: [
          { text: "EMT Level → Airway positioning, oxygen as needed, blood glucose assessment, fluid resuscitation if protocol allows, rapid transport with hospital notification", correct: true, critical: false, explanation: "EMTs focus on airway management, supplemental oxygen if SpO2 drops, obtaining a blood glucose reading, and providing supportive care during transport. Some systems allow EMT-level fluid administration.", guideline_ref: "2021 National EMS Education Standards — EMT Psychomotor Competencies" },
          { text: "AEMT Level → All EMT interventions plus IV access with normal saline fluid bolus (250-500 mL), blood glucose monitoring, cardiac monitoring if available", correct: true, critical: false, explanation: "AEMTs can establish IV access and administer isotonic crystalloid boluses to address dehydration and hypotension. Careful fluid management with reassessment is key.", guideline_ref: "2021 National EMS Education Standards — AEMT Competencies" },
          { text: "Paramedic Level → All AEMT interventions plus 12-lead ECG to assess for hyperkalemia-related changes, advanced airway if GCS deteriorates, titrated fluid resuscitation", correct: true, critical: false, explanation: "Paramedics add ECG monitoring (DKA can cause dangerous hyperkalemia with peaked T-waves), advanced airway management capability, and more aggressive fluid resuscitation with ongoing reassessment.", guideline_ref: "2021 National EMS Education Standards — Paramedic Competencies; AHA ACLS" },
          { text: "All Levels → Administer insulin to lower blood glucose in the prehospital setting", correct: false, critical: true, explanation: "Insulin administration for DKA is NOT a prehospital intervention at any level. DKA requires laboratory-guided insulin therapy with concurrent potassium monitoring. Administering insulin without lab values can cause fatal hypokalemia.", guideline_ref: "ADA Standards of Medical Care in Diabetes; 2021 National EMS Education Standards" }
        ]
      }
    ]
  },

  // ============================================================
  // 5. MCI / Triage
  // ============================================================
  {
    id: "nat-mci-01",
    title: "Multi-Casualty Incident — Bus Rollover with START Triage",
    dispatch: "Motor vehicle crash, bus rollover, multiple patients",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 0, sex: "M", cc: "Multiple patients — mass casualty incident" },
    scene: "You arrive as the first EMS unit to a highway off-ramp where a charter bus has rolled onto its side after striking a guardrail. Approximately 12 passengers are visible — some walking around dazed, others trapped inside. Bystanders are pulling people from broken windows. Fuel is leaking from the bus. No fire department or additional EMS units are on scene yet. Your partner and you are the only medical personnel currently available.",
    history: { pmh: "Multiple patients — varied histories", meds: "Various", allergies: "Various" },
    vitals: { hr: 0, bp: "0/0", rr: 0, spo2: 0, gcs: 0, temp: "0°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "As the first arriving EMS unit to this mass casualty incident, what is your MOST important first action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You and your partner arrive to a chaotic scene. People are yelling for help. You can see at least 12 patients in various conditions.",
        vitals_update: {},
        clinical_pearl: "The natural instinct is to begin treating the most critically injured patient. However, at a mass casualty incident, the first arriving unit must assume command and establish an Incident Command System (ICS) structure. Treating individual patients before triaging wastes precious time and resources. Establishing command, performing a scene size-up, and requesting appropriate resources saves the most lives.",
        options: [
          { text: "Establish Incident Command and perform a scene size-up, then request additional resources", correct: true, critical: false, explanation: "The first arriving EMS unit must assume Incident Command, assess the scope of the incident, identify hazards (fuel leak), estimate patient count, and request appropriate mutual aid resources before beginning triage.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards; NAEMSP MCI Guidelines" },
          { text: "Begin treating the most critically injured patient visible from your position", correct: false, critical: false, explanation: "In an MCI, treating individual patients before establishing command and completing triage leads to tunnel vision and underutilization of resources. Triage first, then treat.", guideline_ref: "NIMS/ICS; START Triage System" },
          { text: "Direct all walking patients to sit in the ambulance while you assess the trapped patients", correct: false, critical: false, explanation: "While identifying ambulatory patients is part of START triage, loading patients into your single ambulance before establishing command and requesting resources is premature and limits your capacity.", guideline_ref: "NIMS/ICS; START Triage System" },
          { text: "Wait for fire department arrival before approaching the scene due to fuel leak hazard", correct: false, critical: false, explanation: "While the fuel leak is a hazard that must be communicated and monitored, waiting for fire without any action delays patient care and command establishment. Approach from upwind/uphill, establish command, and request fire response.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Using START triage, categorize each of the following four patients into the correct triage category.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You begin rapid START triage. You assess the following four patients in sequence.",
        vitals_update: {},
        clinical_pearl: "START triage uses three assessments — RPM: Respirations, Perfusion (capillary refill or radial pulse), Mental status. Each step takes seconds, not minutes. Walking patients are immediately tagged GREEN (Minor). Non-breathing patients get one airway repositioning attempt — if they breathe, RED; if not, BLACK. Remember: during triage, the ONLY intervention is opening an airway. No treatment until all patients are triaged.",
        options: [
          { text: "Patient A: 45F, walking around holding her arm, crying but alert → GREEN (Minor)", correct: true, critical: false, explanation: "Any patient who can walk is immediately categorized as GREEN (Minor) in START triage, regardless of apparent injuries. Walking demonstrates adequate respirations, perfusion, and mental status.", guideline_ref: "START Triage System; 2021 National EMS Education Standards" },
          { text: "Patient B: 60M, not breathing, repositioned airway — still no respirations → BLACK (Expectant/Deceased)", correct: true, critical: false, explanation: "In START triage, if a patient is not breathing and does not begin breathing after a single airway repositioning attempt, they are categorized as BLACK (Expectant/Deceased). No further intervention during triage.", guideline_ref: "START Triage System; 2021 National EMS Education Standards" },
          { text: "Patient C: 30M, breathing at 32/min, radial pulse present, does not follow commands → RED (Immediate)", correct: true, critical: false, explanation: "This patient is breathing (>30/min = abnormal), has perfusion (radial pulse present), but fails mental status (cannot follow commands). Any failure in the RPM assessment = RED (Immediate).", guideline_ref: "START Triage System; 2021 National EMS Education Standards" },
          { text: "Patient D: 25F, breathing at 20/min, radial pulse present, follows commands, leg deformity → YELLOW (Delayed)", correct: true, critical: false, explanation: "This patient has adequate respirations (<30), adequate perfusion (radial pulse), and intact mental status (follows commands). Despite the leg injury, she can wait for treatment = YELLOW (Delayed).", guideline_ref: "START Triage System; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "scene_size_up",
        prompt: "Place the following ICS setup priorities in the correct order for this MCI.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Additional resources are responding. You need to establish an organized ICS structure.",
        vitals_update: {},
        clinical_pearl: "ICS should be established early and expanded as needed. The first arriving unit is Incident Commander until formally transferred to a higher-ranking or more qualified officer. Key early priorities include establishing command, requesting resources, beginning triage, designating a treatment area, and setting up a staging area for incoming units. Structure prevents chaos.",
        options: [
          { text: "Assume Incident Command and establish a command post in a safe location", correct: true, critical: false, explanation: "The first arriving EMS unit assumes Incident Command. Establish a command post upwind and uphill from hazards with good visibility of the scene.", guideline_ref: "NIMS/ICS; FEMA IS-100/200; 2021 National EMS Education Standards" },
          { text: "Transmit a brief initial size-up report and request additional resources", correct: true, critical: false, explanation: "Radio a concise size-up: incident type, approximate patient count, hazards, resources needed. This triggers mutual aid and sets expectations for responding units.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" },
          { text: "Begin START triage to categorize all patients by acuity", correct: true, critical: false, explanation: "Once command is established and resources requested, begin rapid triage of all patients. This determines treatment priorities and resource allocation.", guideline_ref: "START Triage System; 2021 National EMS Education Standards" },
          { text: "Designate treatment and staging areas for incoming units", correct: true, critical: false, explanation: "As additional units arrive, they need clear direction. Designate a treatment area (divided by triage category) and a staging area where incoming resources report.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" },
          { text: "Assign arriving personnel to Triage, Treatment, and Transport roles", correct: true, critical: false, explanation: "As resources arrive, assign ICS roles: Triage Officer, Treatment Officer, Transport Officer. This distributes workload and maintains organized patient flow.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "transport",
        prompt: "Which of the following are appropriate transport decisions for this MCI? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Triage is complete: 3 RED (Immediate), 4 YELLOW (Delayed), 4 GREEN (Minor), 1 BLACK (Expectant). Six ambulances and two hospitals are available — a Level I trauma center 15 minutes away and a community hospital 5 minutes away.",
        vitals_update: {},
        clinical_pearl: "In an MCI, the goal shifts from providing the best care to each individual patient to providing the greatest good for the greatest number. This means distributing patients across available facilities to avoid overwhelming any single ED. RED patients go first, but not all to the same hospital. GREEN patients may be transported by bus or non-ambulance vehicles if appropriate.",
        options: [
          { text: "Transport RED patients first, distributing them between both hospitals to avoid overwhelming one facility", correct: true, critical: false, explanation: "RED (Immediate) patients have the highest transport priority. Distributing critical patients across receiving facilities prevents any single ED from becoming saturated and unable to provide timely care.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards; NAEMSP MCI Guidelines" },
          { text: "Coordinate with hospital capacity via medical control or HEAR radio before transport", correct: true, critical: false, explanation: "Contacting receiving facilities to determine capacity and capability ensures patients are transported to hospitals that can actually manage them. This prevents diversion delays.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" },
          { text: "Consider transporting GREEN patients by non-ambulance vehicles such as a bus to preserve ambulances for critical patients", correct: true, critical: false, explanation: "GREEN (Minor) patients can safely be transported by alternative means (buses, vans) with minimal medical supervision, preserving ambulances for RED and YELLOW patients.", guideline_ref: "NIMS/ICS; 2021 National EMS Education Standards" },
          { text: "Transport all RED patients to the closest community hospital since it is only 5 minutes away", correct: false, critical: false, explanation: "Sending all critical patients to one hospital risks overwhelming that facility. In an MCI, patients should be distributed based on both hospital capability and capacity.", guideline_ref: "NIMS/ICS; NAEMSP MCI Guidelines" },
          { text: "Transport the BLACK-tagged patient first since they have the most severe condition", correct: false, critical: true, explanation: "BLACK (Expectant/Deceased) patients are not transported until all RED and YELLOW patients have been managed. Transporting deceased patients wastes ambulance resources needed for salvageable patients.", guideline_ref: "START Triage System; NIMS/ICS; 2021 National EMS Education Standards" }
        ]
      }
    ]
  },

  // ============================================================
  // 6. Newborn Resuscitation
  // ============================================================
  {
    id: "nat-neo-01",
    title: "Newborn Resuscitation After Home Delivery",
    dispatch: "Newborn not breathing after home delivery",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 0, sex: "F", cc: "Newborn not breathing, limp" },
    scene: "You arrive at a residence where a 32-year-old woman has just delivered a baby at home with the assistance of a family member. The umbilical cord has been clamped and cut. The newborn female is lying on a towel on the bed, appearing limp, cyanotic, and covered in amniotic fluid. There is no crying or spontaneous movement. The mother is alert and concerned. Estimated gestational age is full-term based on maternal report.",
    history: { pmh: "Mother: uncomplicated pregnancy, no prenatal complications reported", meds: "Prenatal vitamins", allergies: "No known allergies" },
    vitals: { hr: 72, bp: "0/0", rr: 0, spo2: 0, gcs: 0, temp: "0°F" },
    questions: [
      {
        phase: "treatment",
        prompt: "Place the initial steps of newborn resuscitation (NRP) in the correct order for this non-breathing newborn.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The newborn is limp, not crying, and has no respiratory effort. You must initiate the NRP algorithm immediately.",
        vitals_update: {},
        clinical_pearl: "The NRP initial steps are performed within the first 30 seconds — the 'Golden Minute.' Warming, drying, stimulating, and clearing the airway (if needed) are performed simultaneously and rapidly. Most newborns respond to these initial steps alone. If not, positive pressure ventilation is the single most important intervention in neonatal resuscitation. Ventilation, ventilation, ventilation.",
        options: [
          { text: "Provide warmth: place newborn on a warm surface, skin-to-skin if no radiant warmer available", correct: true, critical: false, explanation: "Hypothermia prevention is critical. Newborns lose heat rapidly. Place on a warm, dry surface. In the prehospital setting, skin-to-skin contact with the mother and covering both is effective when a warmer is unavailable.", guideline_ref: "AHA/AAP NRP 8th Edition 2020; 2021 National EMS Education Standards" },
          { text: "Dry thoroughly with warm towels, removing wet linens, and stimulate by rubbing the back or flicking the soles", correct: true, critical: false, explanation: "Vigorous drying provides thermal management and tactile stimulation simultaneously. Remove wet towels and replace with dry ones. Brief stimulation (back rub, sole flicks) may initiate breathing.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Position the airway in a neutral 'sniffing' position and suction only if the airway is visibly obstructed", correct: true, critical: false, explanation: "Place the head in a neutral position (slight extension). Routine suctioning is no longer recommended — suction only if visible secretions are obstructing the airway.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Assess breathing and heart rate — if apneic or HR <100 after initial steps, begin positive pressure ventilation", correct: true, critical: false, explanation: "After the initial steps (within 30-60 seconds), if the newborn remains apneic or has a heart rate below 100 bpm, PPV with room air or blended oxygen is initiated. PPV is the most critical intervention.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Deliver PPV at a rate of 40-60 breaths per minute using a BVM with appropriate-sized mask", correct: true, critical: false, explanation: "PPV is delivered at 40-60 breaths per minute with just enough pressure to see gentle chest rise. Use a neonatal-sized mask ensuring a good seal over the mouth and nose.", guideline_ref: "AHA/AAP NRP 8th Edition 2020; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After 30 seconds of effective PPV, you assess the newborn's heart rate by palpating the base of the umbilical cord. The heart rate is 48 bpm. What is the correct next intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have been providing PPV for 30 seconds with visible chest rise. The newborn remains limp with no spontaneous respiratory effort. Umbilical pulse check reveals a heart rate of approximately 48 bpm.",
        vitals_update: { hr: 48 },
        clinical_pearl: "In neonatal resuscitation, the heart rate is the most important indicator of successful resuscitation. If the heart rate remains below 60 bpm despite 30 seconds of effective PPV (with confirmed chest rise), chest compressions are initiated. The compression-to-ventilation ratio for newborns is 3:1 (3 compressions to 1 ventilation), delivering 90 compressions and 30 breaths per minute (120 events/minute total). This differs from the 15:2 ratio used in infant CPR.",
        options: [
          { text: "Begin chest compressions coordinated with PPV at a 3:1 ratio (90 compressions and 30 breaths per minute)", correct: true, critical: false, explanation: "A heart rate below 60 bpm despite 30 seconds of effective PPV triggers chest compressions. The neonatal compression-to-ventilation ratio is 3:1, delivering 120 total events per minute. Use the two-thumb encircling technique on the lower third of the sternum.", guideline_ref: "AHA/AAP NRP 8th Edition 2020; 2021 National EMS Education Standards" },
          { text: "Continue PPV alone for another 60 seconds before reassessing the heart rate", correct: false, critical: true, explanation: "Continuing PPV alone with a heart rate below 60 bpm after 30 seconds of effective ventilation delays critical intervention. Chest compressions must be added when the heart rate remains below 60 despite effective PPV.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Begin chest compressions at a 30:2 ratio as recommended for adult cardiac arrest", correct: false, critical: false, explanation: "The 30:2 ratio is for single-rescuer adult and child CPR. Neonatal resuscitation uses a 3:1 ratio because the cause of arrest is almost always respiratory — the newborn needs frequent ventilations.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Stop PPV and apply an AED to analyze the cardiac rhythm", correct: false, critical: true, explanation: "AEDs are not used on newborns. Neonatal bradycardia is almost always caused by hypoxia and responds to ventilation and compressions. Stopping PPV to apply an AED would worsen hypoxia.", guideline_ref: "AHA/AAP NRP 8th Edition 2020; AHA 2020 Guidelines" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize each of the following newborn findings as either Reassuring or Concerning.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "After 2 minutes of compressions and PPV, the newborn's heart rate rises to 120 bpm and she begins to make weak respiratory efforts. You continue to monitor closely.",
        vitals_update: { hr: 120, rr: 30 },
        clinical_pearl: "After successful resuscitation, continuous monitoring is essential. A heart rate above 100 bpm, spontaneous crying, pink color (acrocyanosis — blue hands and feet — is normal in the first minutes of life), and flexed tone are reassuring. Persistent central cyanosis, grunting respirations, poor tone, and heart rate instability are concerning and warrant continued intervention and rapid transport.",
        options: [
          { text: "Heart rate of 120 bpm and rising → Reassuring", correct: true, critical: false, explanation: "A heart rate above 100 bpm is the primary indicator of adequate resuscitation response. Rising heart rate confirms improving cardiac output.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Weak but present spontaneous cry → Reassuring", correct: true, critical: false, explanation: "Any spontaneous respiratory effort (even weak crying) indicates improving neurological function and respiratory drive. This is a positive sign.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Blue hands and feet with pink trunk (acrocyanosis) → Reassuring", correct: true, critical: false, explanation: "Acrocyanosis (peripheral cyanosis of hands and feet) is a normal finding in the first hours of life and does not indicate hypoxia. Central (trunk) pinkness is reassuring.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Persistent central cyanosis of the trunk and face → Concerning", correct: true, critical: false, explanation: "Central cyanosis (blue trunk and face) indicates continued hypoxemia and requires ongoing supplemental oxygen and ventilatory support.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" },
          { text: "Grunting respirations with nasal flaring and retractions → Concerning", correct: true, critical: false, explanation: "Grunting, nasal flaring, and retractions indicate significant respiratory distress. The newborn is working hard to maintain oxygenation and may need continued PPV or CPAP.", guideline_ref: "AHA/AAP NRP 8th Edition 2020; 2021 National EMS Education Standards" },
          { text: "Limp, floppy muscle tone with no spontaneous movement → Concerning", correct: true, critical: false, explanation: "Poor muscle tone suggests continued neurological depression from hypoxia. Normal newborns should demonstrate flexion of extremities. Flaccid tone warrants continued resuscitation and close monitoring.", guideline_ref: "AHA/AAP NRP 8th Edition 2020" }
        ]
      }
    ]
  },

  // ============================================================
  // 7. Toxic Exposure / Organophosphate
  // ============================================================
  {
    id: "nat-tox-01",
    title: "Organophosphate Poisoning in Agricultural Worker",
    dispatch: "42-year-old male, seizures, found in barn",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 42, sex: "M", cc: "Seizures, excessive secretions, found near pesticides" },
    scene: "You arrive at a rural farm where a 42-year-old male farm worker was found collapsed in a barn near open containers of pesticide. He is lying in a puddle of liquid and his clothing is saturated. He is actively seizing with copious oral secretions, and you notice a strong chemical odor. A coworker states he was spraying crops and started complaining of blurred vision and stomach cramps about 30 minutes ago before collapsing. The patient is soaked with a chemical solution and the barn is not well ventilated.",
    history: { pmh: "No significant medical history", meds: "None", allergies: "No known allergies" },
    vitals: { hr: 48, bp: "90/60", rr: 8, spo2: 80, gcs: 3, temp: "98.6°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient's presentation is MOST consistent with which toxidrome? Identify the mnemonic that best describes the constellation of findings.",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "On assessment (from a safe distance initially), you observe: profuse salivation and drooling, lacrimation (tearing), urinary incontinence (wet pants), active diarrhea (fecal odor), bilateral pinpoint pupils, muscle fasciculations between seizure activity, and bradycardia.",
        vitals_update: {},
        clinical_pearl: "Organophosphate poisoning causes a cholinergic toxidrome — excessive stimulation of muscarinic and nicotinic acetylcholine receptors. Two mnemonics help remember the signs: SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) and DUMBELS (Defecation, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation). The 'killer B's' — Bradycardia, Bronchorrhea, and Bronchospasm — are what kill these patients.",
        options: [
          { text: "Cholinergic toxidrome — SLUDGE/DUMBELS: Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis, Miosis, Bradycardia", correct: true, critical: false, explanation: "This patient presents with the classic cholinergic toxidrome caused by organophosphate inhibition of acetylcholinesterase. Every finding — excessive secretions, miosis, bradycardia, seizures, muscle fasciculations — fits the SLUDGE/DUMBELS pattern.", guideline_ref: "2021 National EMS Education Standards; NAEMSP Toxicology Guidelines; AHA ACLS" },
          { text: "Sympathomimetic toxidrome — tachycardia, hypertension, dilated pupils, agitation, hyperthermia", correct: false, critical: false, explanation: "Sympathomimetic toxidrome (cocaine, amphetamines) presents with the opposite findings: tachycardia (not bradycardia), mydriasis (not miosis), dry skin (not diaphoresis with secretions), and hypertension.", guideline_ref: "2021 National EMS Education Standards" },
          { text: "Anticholinergic toxidrome — 'hot as a hare, dry as a bone, red as a beet, blind as a bat'", correct: false, critical: false, explanation: "Anticholinergic toxidrome is essentially the opposite of cholinergic poisoning: dry skin, dilated pupils, tachycardia, urinary retention, decreased bowel sounds. This patient has excessive secretions and bradycardia.", guideline_ref: "2021 National EMS Education Standards" },
          { text: "Opioid toxidrome — pinpoint pupils, respiratory depression, and decreased level of consciousness", correct: false, critical: false, explanation: "While miosis and respiratory depression are shared features, opioid toxidrome does not cause excessive secretions, diarrhea, urination, fasciculations, or seizures. The copious secretions and chemical exposure point to organophosphate.", guideline_ref: "2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following management steps in the correct priority order for this organophosphate poisoning patient.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have identified this as organophosphate poisoning. The patient is seizing, bradycardic, and has copious secretions threatening his airway. You must act quickly while protecting yourself and your crew.",
        vitals_update: { hr: 44, rr: 6, spo2: 74 },
        clinical_pearl: "Scene safety is paramount with organophosphate exposure — rescuers MUST wear appropriate PPE (minimum nitrile gloves, ideally full chemical PPE) to avoid secondary contamination. Decontamination before treatment prevents ongoing absorption AND protects the treatment team. Remove all clothing (removes ~80% of contamination) and brush/rinse visible chemical. Then address ABCs — suction secretions aggressively, provide ventilation, and administer antidotes.",
        options: [
          { text: "Don appropriate PPE and ensure scene safety — do NOT enter the contaminated area without protection", correct: true, critical: false, explanation: "Organophosphates can be absorbed through skin, inhalation, and mucous membranes. Entering without PPE risks provider poisoning, creating additional patients. Minimum PPE includes chemical-resistant gloves and respiratory protection.", guideline_ref: "2021 National EMS Education Standards; NAEMSP Hazmat Guidelines; OSHA HAZWOPER" },
          { text: "Remove the patient from the contaminated environment to fresh air", correct: true, critical: false, explanation: "Move the patient out of the poorly ventilated barn to stop ongoing inhalation exposure. This is a basic rescue/removal step performed with PPE in place.", guideline_ref: "2021 National EMS Education Standards; ATSDR Organophosphate Guidelines" },
          { text: "Perform gross decontamination: remove all clothing and irrigate skin with copious water", correct: true, critical: false, explanation: "Removing contaminated clothing eliminates approximately 80% of the exposure. Copious water irrigation of the skin reduces ongoing dermal absorption. Decontaminate before loading into the ambulance.", guideline_ref: "2021 National EMS Education Standards; NAEMSP Hazmat Guidelines" },
          { text: "Aggressively suction airway secretions and provide BVM ventilation with high-flow oxygen", correct: true, critical: false, explanation: "Copious secretions (bronchorrhea) are the immediate life threat. Suction aggressively to maintain the airway, then ventilate with high-flow oxygen. These patients die from respiratory failure — airway management is critical.", guideline_ref: "2021 National EMS Education Standards; AHA ACLS" },
          { text: "Administer antidote therapy (atropine) and initiate rapid transport to definitive care", correct: true, critical: false, explanation: "Atropine blocks muscarinic receptor effects, drying secretions and increasing heart rate. This is a Paramedic-level intervention. Rapid transport is essential as these patients may need pralidoxime (2-PAM) and prolonged ICU care.", guideline_ref: "AHA ACLS; NAEMSP Toxicology Guidelines; 2021 National EMS Education Standards" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are important considerations when administering atropine for organophosphate poisoning? (Select all that apply)",
        type: "mr",
        level_filter: "Paramedic",
        multi_select: true,
        narrative: "You have decontaminated the patient and are managing his airway. As a Paramedic, you are preparing to administer atropine. The patient remains bradycardic at 44 bpm with copious secretions and an SpO2 of 74%.",
        vitals_update: {},
        clinical_pearl: "Atropine dosing in organophosphate poisoning is dramatically different from cardiac dosing. Standard ACLS atropine dose is 0.5-1 mg. Organophosphate patients may require 2-4 mg initial doses, repeated every 3-5 minutes, with total doses potentially reaching tens of milligrams. The endpoint is DRYING OF SECRETIONS, not heart rate. Carry your entire atropine supply to the patient's side — you will likely need it all.",
        options: [
          { text: "The initial atropine dose for organophosphate poisoning (2-4 mg IV) is significantly higher than the standard ACLS bradycardia dose", correct: true, critical: false, explanation: "Organophosphate poisoning requires much larger atropine doses than standard cardiac indications because the massive acetylcholine excess at receptors requires proportionally more antagonist to overcome.", guideline_ref: "AHA ACLS; NAEMSP Toxicology Guidelines; ATSDR Organophosphate Management" },
          { text: "The primary endpoint for atropine therapy is drying of bronchial secretions, not heart rate normalization", correct: true, critical: false, explanation: "Unlike ACLS bradycardia treatment where heart rate is the endpoint, in organophosphate poisoning the goal is to dry secretions enough to allow effective ventilation. Heart rate improvement is secondary.", guideline_ref: "AHA ACLS; NAEMSP Toxicology Guidelines" },
          { text: "Repeated doses may be necessary every 3-5 minutes, and total doses may far exceed typical ACLS amounts", correct: true, critical: false, explanation: "Organophosphate patients frequently require repeated atropine boluses. Total doses of 20-40 mg or more are documented. Bring all available atropine to the bedside.", guideline_ref: "NAEMSP Toxicology Guidelines; ATSDR Organophosphate Management" },
          { text: "Atropine should be withheld until the patient's heart rate drops below 40 bpm to avoid tachycardia", correct: false, critical: true, explanation: "Withholding atropine is dangerous. The patient is dying from bronchorrhea and respiratory failure. Atropine must be administered aggressively regardless of the heart rate — the target is drying secretions to enable ventilation.", guideline_ref: "AHA ACLS; NAEMSP Toxicology Guidelines" },
          { text: "Atropine only reverses muscarinic effects and will not treat nicotinic symptoms like fasciculations and paralysis", correct: true, critical: false, explanation: "Atropine blocks muscarinic receptors (secretions, bradycardia, bronchospasm) but does not address nicotinic effects (fasciculations, muscle weakness, paralysis). Pralidoxime (2-PAM) is needed for nicotinic symptoms.", guideline_ref: "NAEMSP Toxicology Guidelines; ATSDR Organophosphate Management" }
        ]
      }
    ]
  }
];
