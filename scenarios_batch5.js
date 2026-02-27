const BATCH5 = [
  {
    id: "nat-tra-02",
    title: "Penetrating Abdominal Trauma",
    dispatch: "29-year-old male, stabbing, abdominal wound",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 29, sex: "M", cc: "Abdominal wound after stabbing" },
    scene: "You arrive at a dimly lit parking lot behind a bar. Police are on scene and have secured the area. A 29-year-old male is found sitting against a wall, holding a blood-soaked shirt against his left lower abdomen. A bystander states the patient was stabbed once approximately 10 minutes ago. The patient is alert but appears pale and anxious.",
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    vitals: { hr: 112, bp: "98/64", rr: 24, spo2: 97, gcs: 15, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "You remove the blood-soaked shirt and find a single stab wound to the left lower quadrant with minimal active external bleeding. A small loop of pinkish tissue is visible at the wound edge. What is your MOST appropriate immediate action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You cover the wound appropriately and begin rapid transport preparations. The patient groans as you move him onto the stretcher.",
        vitals_update: { hr: 118, bp: "92/60" },
        clinical_pearl: "Eviscerated tissue should never be pushed back into the abdomen. Cover with a sterile dressing moistened with saline and then an occlusive layer to retain warmth and moisture. Replacing eviscerated contents risks contamination and further injury.",
        options: [
          { text: "Cover the wound with a moist sterile dressing and occlusive layer; do not replace protruding tissue", correct: true, explanation: "Eviscerated tissue must be kept moist and warm but never pushed back in. Cover with saline-moistened sterile dressing and an occlusive outer layer.", guideline_ref: "NAEMSP Prehospital Trauma Guidelines; PHTLS 10th Ed — Abdominal Trauma" },
          { text: "Gently push the tissue back into the abdomen and cover with a dry dressing", correct: false, critical: true, explanation: "Replacing eviscerated tissue introduces contamination risk and can worsen internal injury. This is a dangerous error.", guideline_ref: "PHTLS 10th Ed — Abdominal Trauma" },
          { text: "Pack the wound tightly with hemostatic gauze", correct: false, explanation: "Wound packing is for hemorrhage control in junctional or extremity wounds, not for an evisceration. Packing could damage exposed bowel.", guideline_ref: "PHTLS 10th Ed — Abdominal Trauma" },
          { text: "Apply direct pressure over the protruding tissue with a pressure bandage", correct: false, critical: true, explanation: "Direct pressure on eviscerated tissue can cause ischemia, perforation, or further herniation. This is contraindicated.", guideline_ref: "PHTLS 10th Ed — Abdominal Trauma" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of managing this patient in the correct order from first to last.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You are en route to the trauma center. The patient is becoming more anxious and his skin is cool and diaphoretic.",
        vitals_update: { hr: 124, bp: "88/56", rr: 26 },
        explanation: "The priority sequence follows the MARCH/PHTLS approach: address life threats, protect the wound, keep the patient warm, and transport rapidly to definitive surgical care.",
        guideline_ref: "PHTLS 10th Ed — Abdominal Trauma; ACS-COT Field Triage Guidelines",
        items: [
          "Ensure scene safety and apply BSI/PPE",
          "Perform primary assessment (XABCDE)",
          "Cover evisceration with moist sterile dressing and occlusive layer",
          "Position patient supine with knees flexed if tolerated",
          "Initiate rapid transport to trauma center and keep patient warm",
          "Obtain vitals and secondary assessment en route"
        ]
      },
      {
        phase: "reassessment",
        prompt: "The patient's vitals are now HR 130, BP 82/50, RR 28, SpO2 96%, GCS 14. He is confused and restless. Which of the following signs suggest this patient is deteriorating? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You increase oxygen delivery and notify the receiving trauma center of the patient's declining status.",
        clinical_pearl: "Tachycardia is often the earliest compensatory sign of hemorrhagic shock. By the time hypotension is present in a young healthy adult, they may have already lost 30-40% of their blood volume. Changes in mental status (confusion, agitation) are ominous late findings.",
        options: [
          { text: "Rising heart rate from 112 to 130", correct: true, explanation: "Progressive tachycardia indicates worsening hemorrhage and compensatory sympathetic response.", guideline_ref: "PHTLS 10th Ed — Shock" },
          { text: "Falling blood pressure from 98/64 to 82/50", correct: true, explanation: "Progressive hypotension in a trauma patient indicates decompensating hemorrhagic shock.", guideline_ref: "PHTLS 10th Ed — Shock" },
          { text: "GCS decline from 15 to 14 with confusion", correct: true, explanation: "Altered mental status reflects inadequate cerebral perfusion — a late and serious sign of shock.", guideline_ref: "PHTLS 10th Ed — Shock" },
          { text: "SpO2 of 96%", correct: false, explanation: "SpO2 of 96% is adequate and not itself a sign of deterioration in this context.", guideline_ref: "PHTLS 10th Ed — Shock" },
          { text: "Cool, diaphoretic skin", correct: true, explanation: "Peripheral vasoconstriction causing cool, clammy skin is a classic sign of shock.", guideline_ref: "PHTLS 10th Ed — Shock" },
          { text: "Respiratory rate of 28", correct: true, explanation: "Tachypnea is a compensatory response to metabolic acidosis from poor perfusion.", guideline_ref: "PHTLS 10th Ed — Shock" }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize each of the following findings as either an indication for IMMEDIATE SURGICAL INTERVENTION or a finding that can be MONITORED AND REASSESSED in the field.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        explanation: "Penetrating abdominal trauma with evisceration, hemodynamic instability, or peritoneal signs all indicate the need for emergent surgical exploration. Stable patients with isolated soft-tissue injury and no signs of shock may allow for continued assessment, but the threshold for rapid transport should remain low.",
        guideline_ref: "ACS-COT Field Triage Decision Scheme; PHTLS 10th Ed — Abdominal Trauma",
        categories: ["Immediate Surgical Intervention", "Monitor and Reassess"],
        items: [
          { text: "Evisceration of abdominal contents", category: "Immediate Surgical Intervention" },
          { text: "Hypotension unresponsive to fluid resuscitation", category: "Immediate Surgical Intervention" },
          { text: "Isolated superficial laceration with stable vitals", category: "Monitor and Reassess" },
          { text: "Progressive abdominal rigidity and guarding", category: "Immediate Surgical Intervention" },
          { text: "Patient alert with stable vitals and soft abdomen", category: "Monitor and Reassess" },
          { text: "Declining mental status with penetrating mechanism", category: "Immediate Surgical Intervention" }
        ]
      }
    ]
  },
  {
    id: "nat-tra-03",
    title: "Burns — Thermal",
    dispatch: "40-year-old female, burns from house fire",
    category: "Trauma",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 40, sex: "F", cc: "Burns to arms and chest from house fire" },
    scene: "Fire department has extinguished a kitchen fire in a single-story home. A 40-year-old female is sitting on the front lawn. She is alert and crying. Her sleeves are partially burned away, and you see reddened and blistered skin on both arms and across her anterior chest. She has soot around her nose and mouth. She states she was trying to put out a grease fire when her shirt caught fire.",
    history: { pmh: "Asthma", meds: "Albuterol inhaler PRN", allergies: "Sulfa drugs" },
    vitals: { hr: 104, bp: "132/84", rr: 22, spo2: 96, gcs: 15, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient has soot around her nose and mouth, singed nasal hairs, and a hoarse voice since the fire. Her SpO2 reads 96%. What is your GREATEST concern and most important intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You apply high-flow oxygen and continue your assessment. The patient coughs occasionally and her voice remains hoarse.",
        vitals_update: { spo2: 98 },
        clinical_pearl: "Pulse oximetry cannot differentiate carboxyhemoglobin from oxyhemoglobin, so SpO2 readings may be falsely reassuring in fire/smoke exposure. Singed nasal hairs, soot in the airway, hoarseness, and stridor are warning signs of impending airway compromise from thermal/inhalation injury. Early high-flow O2 and transport are critical — the airway can swell shut rapidly.",
        options: [
          { text: "Potential inhalation injury with impending airway compromise — apply high-flow oxygen via NRB and prepare for rapid transport", correct: true, explanation: "Hoarseness, soot in the airway, and singed nasal hairs are classic signs of inhalation injury. The airway can swell rapidly. High-flow O2 (100%) helps displace CO and supports oxygenation.", guideline_ref: "ABA Burn Referral Criteria; PHTLS 10th Ed — Burns" },
          { text: "The SpO2 of 96% is reassuring — focus on burn wound care first", correct: false, critical: true, explanation: "SpO2 is unreliable in smoke inhalation due to carboxyhemoglobin. Ignoring airway warning signs in a burn patient is a dangerous error.", guideline_ref: "PHTLS 10th Ed — Burns; ABA Guidelines" },
          { text: "Asthma exacerbation from smoke — administer albuterol nebulizer", correct: false, explanation: "While bronchospasm may occur, the primary concern is thermal/chemical airway injury, not asthma. Albuterol may help wheezing but does not address the core threat of airway edema.", guideline_ref: "PHTLS 10th Ed — Burns" },
          { text: "Apply cool water to the burns immediately to stop the burning process", correct: false, explanation: "While cooling small burns is appropriate, the airway takes priority. Additionally, extensive cooling risks hypothermia in larger burns.", guideline_ref: "PHTLS 10th Ed — Burns" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Using the Rule of Nines, estimate the total body surface area (BSA) burned. Match each body region to its percentage in an adult.",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        clinical_pearl: "The Rule of Nines is a rapid estimation tool for adults. Remember: each arm is 9%, the anterior trunk is 18%, the posterior trunk is 18%, each leg is 18%, the head is 9%, and the perineum is 1%. In this patient, both entire arms (9% + 9% = 18%) and the anterior chest (9% — half the anterior trunk) totals approximately 27% TBSA.",
        explanation: "The Rule of Nines allows rapid BSA estimation to guide fluid resuscitation decisions and burn center referral criteria. Burns >20% TBSA in adults require aggressive fluid resuscitation and burn center transfer.",
        guideline_ref: "ABA Burn Referral Criteria; PHTLS 10th Ed — Burns; Parkland Formula Reference",
        columns: ["Body Region", "Adult Rule of Nines %"],
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
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You complete your burn care, wrap the patient, and begin transport to the regional burn center. She remains alert but anxious.",
        vitals_update: { hr: 100, bp: "128/80", rr: 20, spo2: 99 },
        explanation: "Burn management follows PHTLS priorities: stop the burning process, address airway and breathing first, then manage wounds. Prevention of hypothermia is critical in burn patients — they lose thermoregulation through damaged skin. Remove jewelry early before edema makes it impossible.",
        guideline_ref: "PHTLS 10th Ed — Burns; ABA Prehospital Burn Care Guidelines",
        items: [
          "Ensure scene safety and stop the burning process (remove clothing/jewelry from burned areas)",
          "Assess airway for signs of inhalation injury and apply high-flow oxygen",
          "Perform primary assessment (XABCDE)",
          "Cover burns with dry sterile dressings — avoid wet dressings on large burns",
          "Keep the patient warm to prevent hypothermia",
          "Initiate rapid transport to a burn center"
        ]
      }
    ]
  },
  {
    id: "nat-tra-04",
    title: "Spinal Motion Restriction",
    dispatch: "55-year-old male, diving accident, neck pain, in water",
    category: "Trauma",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 55, sex: "M", cc: "Neck pain after diving into shallow water" },
    scene: "You arrive at a public pool where lifeguards have stabilized a 55-year-old male in the shallow end. He dove into the pool and struck his head on the bottom. He is conscious, floating face-up with a lifeguard maintaining in-line stabilization of his head and neck in the water. He is complaining of severe neck pain and tingling in both hands. Other swimmers have been cleared from the pool.",
    history: { pmh: "Hypertension, mild osteoarthritis", meds: "Lisinopril 10mg daily, ibuprofen PRN", allergies: "Penicillin" },
    vitals: { hr: 88, bp: "148/90", rr: 18, spo2: 97, gcs: 15, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient is alert with neck pain and bilateral hand tingling after striking his head on the pool bottom. Which of the following BEST describes your initial approach?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You coordinate with lifeguards to maintain manual in-line stabilization while preparing for extrication from the water onto a long backboard.",
        clinical_pearl: "Water-based spinal injury extrication requires continuous in-line stabilization throughout the entire process. The key principle is to float the patient onto a rigid device while in the water rather than lifting them out first. Hypothermia risk increases the longer the patient remains in the water, so efficient but careful extrication is essential.",
        options: [
          { text: "Maintain manual in-line stabilization, float the patient onto a backboard in the water, then extricate as a unit", correct: true, explanation: "Water extrication for suspected spinal injury requires floating the patient onto a rigid device while maintaining in-line stabilization, then removing the patient and board together.", guideline_ref: "PHTLS 10th Ed — Spinal Trauma; ARC Aquatic Spinal Injury Management" },
          { text: "Have lifeguards lift the patient out of the pool by his arms and legs, then apply spinal precautions on the deck", correct: false, critical: true, explanation: "Lifting a patient with a suspected spinal injury without stabilization risks catastrophic secondary spinal cord injury.", guideline_ref: "PHTLS 10th Ed — Spinal Trauma" },
          { text: "Instruct the patient to carefully swim to the ladder and climb out while you prepare the stretcher", correct: false, critical: true, explanation: "Any movement of the spine in a patient with a suspected unstable injury risks permanent neurological damage.", guideline_ref: "PHTLS 10th Ed — Spinal Trauma" },
          { text: "Wait for the dive rescue team before initiating any care", correct: false, explanation: "The patient is in shallow water with lifeguard stabilization already in place. Delaying care is unnecessary and risks hypothermia and deterioration.", guideline_ref: "PHTLS 10th Ed — Spinal Trauma" }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize each finding as either an INDICATION for spinal motion restriction or NOT AN INDICATION based on national guidelines.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        explanation: "National guidelines (NAEMSP/ACS) recommend spinal motion restriction when specific criteria are met: significant mechanism with midline tenderness, neurological deficits, altered mental status, distracting injuries, or intoxication that prevents reliable exam. A reliable negative exam in an alert, sober patient without midline tenderness can clear the need for SMR.",
        guideline_ref: "NAEMSP/ACS 2018 Position Statement on EMS Spinal Precautions; PHTLS 10th Ed — Spinal Trauma",
        categories: ["Indication for SMR", "Not an Indication for SMR"],
        items: [
          { text: "Midline cervical tenderness on palpation", category: "Indication for SMR" },
          { text: "Neurological deficit (bilateral hand tingling)", category: "Indication for SMR" },
          { text: "Altered mental status (GCS < 15)", category: "Indication for SMR" },
          { text: "Isolated minor fender-bender, no pain, no tenderness, GCS 15", category: "Not an Indication for SMR" },
          { text: "Significant mechanism with distracting painful injury", category: "Indication for SMR" },
          { text: "Alert patient, no neck pain, no tenderness, full ROM, no intoxication", category: "Not an Indication for SMR" },
          { text: "Patient intoxicated and unable to provide reliable exam", category: "Indication for SMR" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps for water extrication and spinal motion restriction in the correct order.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You successfully extricate the patient from the pool. On the deck, he continues to report neck pain and bilateral hand tingling. You secure him and begin transport.",
        vitals_update: { hr: 84, bp: "142/88", rr: 16 },
        explanation: "Water extrication follows a specific sequence: stabilize in water first, then float onto a rigid device, secure, extricate, and reassess. The principle is to minimize spinal movement at every step.",
        guideline_ref: "PHTLS 10th Ed — Spinal Trauma; ARC Aquatic Spinal Injury Management",
        items: [
          "Maintain continuous manual in-line stabilization of the head and neck",
          "Slowly float a backboard under the patient while in the water",
          "Secure the patient's torso, then head to the backboard while still in the water",
          "Extricate the patient and board from the water as a unit",
          "Apply cervical collar once out of the water and reassess neurovascular status",
          "Transport with continuous spinal precautions and reassess en route"
        ]
      }
    ]
  },
  {
    id: "nat-tra-05",
    title: "Pediatric Non-Accidental Trauma",
    dispatch: "2-year-old, fell down stairs, not using right arm",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 2, sex: "F", cc: "Not using right arm after reported fall" },
    scene: "You arrive at a second-floor apartment. A 2-year-old girl is sitting on a couch, quiet and withdrawn. Her mother states the child fell down 3 carpeted stairs about an hour ago and has not been moving her right arm since. You notice the child also has multiple bruises in various stages of healing on her torso and upper legs. The mother's boyfriend is pacing in the kitchen. The home is cluttered but the child appears thin.",
    history: { pmh: "None reported; immunizations reportedly up-to-date", meds: "None", allergies: "NKDA" },
    vitals: { hr: 132, bp: "90/60", rr: 28, spo2: 99, gcs: 14, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "You observe multiple bruises in varying stages of healing on the child's torso and upper legs, along with the reported arm injury. The mechanism described is a fall down 3 carpeted stairs. What is your MOST important consideration?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You carefully assess and splint the child's right arm while observing the overall environment. You treat the child gently and note your findings carefully for documentation.",
        clinical_pearl: "EMS providers are mandated reporters in all 50 states. You are not required to diagnose abuse — only to report reasonable suspicion. Document objective findings factually (location, size, color, pattern of injuries) without accusatory language. Do not confront caregivers. Your role is to provide medical care, document thoroughly, and report to the receiving facility and/or appropriate authorities.",
        options: [
          { text: "The injury pattern is inconsistent with the reported mechanism — document findings objectively, provide appropriate medical care, and report concerns to the receiving facility", correct: true, explanation: "Multiple bruises in various healing stages on the torso of a 2-year-old, combined with a mechanism that does not match the injury severity, raises concern for non-accidental trauma. EMS providers should document and report.", guideline_ref: "NAEMSP Position Statement on Child Maltreatment; EMS Mandated Reporter Guidelines; PHTLS 10th Ed — Pediatric Trauma" },
          { text: "Confront the mother and boyfriend about the suspicious injuries before transporting", correct: false, critical: true, explanation: "Confronting caregivers can escalate the situation, endanger the child and providers, and compromise any subsequent investigation. This is never the EMS role.", guideline_ref: "NAEMSP Position Statement on Child Maltreatment" },
          { text: "The bruises are likely normal for a toddler learning to walk — focus only on the arm injury", correct: false, explanation: "Bruises on the torso and upper legs of a pre-ambulatory or barely ambulatory child are highly suspicious. Normal toddler bruises occur over bony prominences (shins, forehead), not the trunk.", guideline_ref: "PHTLS 10th Ed — Pediatric Trauma; CDC Child Abuse Recognition" },
          { text: "Refuse to transport until law enforcement arrives to investigate", correct: false, explanation: "Delaying medical care for a potentially injured child is inappropriate. Transport and provide care — you can report your concerns to the hospital and authorities.", guideline_ref: "NAEMSP Position Statement on Child Maltreatment" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Which of the following findings are RED FLAGS for non-accidental trauma in a pediatric patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        clinical_pearl: "The TEN-4 FACES bruising rule helps identify concerning patterns: bruises to the Torso, Ears, Neck in a child ≤4 years, or to the Frenulum, Angle of jaw, Cheeks, Eyes, Sclera at any age. Bruises in pre-mobile infants are extremely rare and almost always warrant further evaluation. 'Those who don't cruise rarely bruise.'",
        options: [
          { text: "Bruises in various stages of healing", correct: true, explanation: "Bruises of different colors/ages suggest repeated injury over time, not a single event.", guideline_ref: "PHTLS 10th Ed — Pediatric Trauma; TEN-4 FACES Rule" },
          { text: "Bruises on the torso and upper legs (non-bony prominences)", correct: true, explanation: "Accidental bruises in toddlers typically occur over bony prominences. Trunk and proximal extremity bruises are concerning.", guideline_ref: "TEN-4 FACES Rule; CDC Child Abuse Recognition" },
          { text: "Injury inconsistent with the described mechanism", correct: true, explanation: "When the mechanism cannot explain the injuries, non-accidental trauma must be considered.", guideline_ref: "NAEMSP Position Statement on Child Maltreatment" },
          { text: "Delay in seeking care (injury 1 hour ago)", correct: true, explanation: "Delayed presentation is a common pattern in non-accidental trauma cases.", guideline_ref: "PHTLS 10th Ed — Pediatric Trauma" },
          { text: "A single bruise on the shin of a walking toddler", correct: false, explanation: "Shin bruises are common in ambulatory toddlers and are consistent with normal activity.", guideline_ref: "TEN-4 FACES Rule" },
          { text: "Child is quiet, withdrawn, and avoids eye contact", correct: true, explanation: "Behavioral changes such as withdrawal, excessive compliance, or avoiding eye contact can be associated with abuse.", guideline_ref: "CDC Child Abuse Recognition" }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize each documentation element as either APPROPRIATE or INAPPROPRIATE for an EMS report involving suspected non-accidental trauma.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        explanation: "EMS documentation in suspected abuse cases must be objective, factual, and thorough. Describe what you see without diagnosing abuse. Use direct quotes when possible. Avoid subjective opinions, accusations, or conclusions about who caused injuries. Your documentation may become part of a legal investigation.",
        guideline_ref: "NAEMSP Position Statement on Child Maltreatment; EMS Documentation Standards",
        categories: ["Appropriate Documentation", "Inappropriate Documentation"],
        items: [
          { text: "\"Multiple bruises noted on anterior torso ranging from yellow-green to dark purple\"", category: "Appropriate Documentation" },
          { text: "\"The boyfriend obviously beat this child\"", category: "Inappropriate Documentation" },
          { text: "\"Mother states child fell down 3 carpeted stairs approximately 1 hour ago\"", category: "Appropriate Documentation" },
          { text: "\"This is clearly a case of child abuse\"", category: "Inappropriate Documentation" },
          { text: "\"Child is withdrawn, avoids eye contact, does not reach for caregiver\"", category: "Appropriate Documentation" },
          { text: "\"Reported mechanism inconsistent with observed injury pattern\" — documented factually", category: "Appropriate Documentation" },
          { text: "Omitting bruise findings from the report to avoid conflict", category: "Inappropriate Documentation" }
        ]
      }
    ]
  },
  {
    id: "nat-tra-06",
    title: "Blast Injury / Explosion",
    dispatch: "Explosion at industrial site, person down",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 34, sex: "M", cc: "Found down after industrial explosion" },
    scene: "Fire and HAZMAT have cleared the scene. You approach a 34-year-old male worker found approximately 15 feet from the blast site. He is lying prone, conscious but confused. There is debris scattered around him. He has visible burns to his face and arms, blood coming from both ears, and a large piece of metal is embedded in his left thigh. His coworker says he was standing near a pressurized vessel when it exploded.",
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    vitals: { hr: 128, bp: "100/62", rr: 30, spo2: 92, gcs: 13, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "This patient has bleeding from both ears, facial burns, an embedded metal fragment in his thigh, and was thrown by the blast. Which injury mechanism is MOST likely responsible for the bilateral ear bleeding?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "You log-roll the patient supine with spinal precautions. He is confused but follows commands. You note decreased breath sounds on the left side.",
        vitals_update: { hr: 132, bp: "96/58", rr: 32, spo2: 90 },
        clinical_pearl: "Blast injuries occur in four phases and often present simultaneously. The tympanic membrane is the organ most sensitive to primary blast overpressure and ruptures at relatively low pressures (~5 psi). Bilateral TM rupture suggests significant overpressure exposure and should raise suspicion for occult primary blast lung injury (pulmonary contusion, pneumothorax) and hollow viscus injury, even if the patient initially appears stable.",
        options: [
          { text: "Primary blast injury — overpressure wave causing tympanic membrane rupture", correct: true, explanation: "Bilateral ear bleeding after a blast is classic for primary blast injury. The pressure wave damages air-filled structures, with the TM being the most susceptible.", guideline_ref: "PHTLS 10th Ed — Blast Injuries; CDC Blast Injury Fact Sheets" },
          { text: "Secondary blast injury — shrapnel perforating the ear canals", correct: false, explanation: "While shrapnel causes secondary blast injuries, bilateral symmetric ear bleeding is much more consistent with overpressure (primary) injury than penetrating fragments.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" },
          { text: "Tertiary blast injury — head striking the ground after being thrown", correct: false, explanation: "Being thrown is a tertiary mechanism and could cause head injury, but bilateral ear bleeding is most characteristic of primary overpressure injury.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" },
          { text: "Quaternary blast injury — thermal burns extending to the ears", correct: false, explanation: "Quaternary injuries include burns and inhalation, but bilateral ear bleeding is a hallmark of primary blast overpressure, not thermal injury.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize each injury mechanism into the correct blast injury phase.",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        explanation: "Blast injuries are classified into four phases: PRIMARY (overpressure wave affecting air-filled organs), SECONDARY (projectiles/shrapnel), TERTIARY (body thrown by blast wind), and QUATERNARY (everything else — burns, crush, inhalation, environmental). Understanding phases helps anticipate occult injuries.",
        guideline_ref: "PHTLS 10th Ed — Blast Injuries; CDC Blast Injury Fact Sheets",
        categories: ["Primary (Overpressure)", "Secondary (Projectiles)", "Tertiary (Displacement)", "Quaternary (Other)"],
        items: [
          { text: "Tympanic membrane rupture", category: "Primary (Overpressure)" },
          { text: "Blast lung (pulmonary contusion from pressure wave)", category: "Primary (Overpressure)" },
          { text: "Metal fragment embedded in thigh", category: "Secondary (Projectiles)" },
          { text: "Patient thrown 15 feet and striking the ground", category: "Tertiary (Displacement)" },
          { text: "Flash burns to face and arms", category: "Quaternary (Other)" },
          { text: "Bowel perforation from pressure wave", category: "Primary (Overpressure)" },
          { text: "Fractures from impact after being thrown", category: "Tertiary (Displacement)" },
          { text: "Inhalation injury from toxic fumes", category: "Quaternary (Other)" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following treatment steps in the correct priority order for this blast injury patient.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "You stabilize the embedded object, address the pneumothorax, and prepare for rapid transport. The patient remains confused but is following commands.",
        vitals_update: { hr: 122, bp: "102/64", rr: 26, spo2: 94 },
        explanation: "Blast injury management follows MARCH: Massive hemorrhage, Airway, Respiration, Circulation, Hypothermia prevention. The embedded object must be stabilized in place, not removed. Tension pneumothorax must be identified and treated rapidly. Avoid over-resuscitation in blast lung patients as it worsens pulmonary edema.",
        guideline_ref: "PHTLS 10th Ed — Blast Injuries; TCCC Guidelines; NAEMSP Trauma Guidelines",
        items: [
          "Address massive hemorrhage — control bleeding around the embedded object without removing it",
          "Manage airway with cervical spine precautions and high-flow oxygen",
          "Assess and treat respiratory compromise — decompress tension pneumothorax if indicated",
          "Stabilize the embedded thigh object with bulky dressings",
          "Establish IV/IO access for judicious fluid resuscitation",
          "Prevent hypothermia and initiate rapid transport to a trauma center"
        ]
      },
      {
        phase: "reassessment",
        prompt: "Given this patient's blast exposure with bilateral TM rupture and decreased left-sided breath sounds, which of the following are potential OCCULT injuries you should anticipate? Select ALL that apply.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        clinical_pearl: "Bilateral TM rupture is a sentinel marker for significant primary blast exposure. If the TMs ruptured, assume the lungs and bowel were also exposed to damaging overpressure. Blast lung may not manifest fully for 24-48 hours. Avoid positive pressure ventilation if possible — it can worsen air emboli and pneumothorax in blast lung patients.",
        options: [
          { text: "Blast lung (pulmonary contusion/hemorrhage)", correct: true, explanation: "The lungs are highly susceptible to primary blast overpressure. Decreased breath sounds and low SpO2 suggest blast lung.", guideline_ref: "PHTLS 10th Ed — Blast Injuries; CDC Blast Injury Fact Sheets" },
          { text: "Tension pneumothorax", correct: true, explanation: "Blast overpressure can cause alveolar rupture leading to pneumothorax. Decreased unilateral breath sounds support this concern.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" },
          { text: "Hollow viscus (bowel) perforation", correct: true, explanation: "Air-filled organs like the bowel are vulnerable to primary blast injury. Perforation may present with delayed peritonitis.", guideline_ref: "PHTLS 10th Ed — Blast Injuries; CDC Blast Injury Fact Sheets" },
          { text: "Traumatic brain injury", correct: true, explanation: "Both primary blast wave and tertiary impact (being thrown) can cause TBI. The patient's confusion (GCS 13) supports this.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" },
          { text: "Isolated rotator cuff tear", correct: false, explanation: "While musculoskeletal injuries can occur, an isolated rotator cuff tear is not a typical occult blast injury concern.", guideline_ref: "PHTLS 10th Ed — Blast Injuries" },
          { text: "Air embolism from pulmonary vascular disruption", correct: true, explanation: "Blast lung can cause air to enter pulmonary vasculature, leading to arterial air embolism — a potentially fatal complication.", guideline_ref: "PHTLS 10th Ed — Blast Injuries; CDC Blast Injury Fact Sheets" }
        ]
      }
    ]
  },
  {
    id: "nat-tra-07",
    title: "Hemorrhagic Shock / Tourniquet",
    dispatch: "38-year-old male, severe bleeding from arm, power tool accident",
    category: "Trauma",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 38, sex: "M", cc: "Severe bleeding from left forearm" },
    scene: "You arrive at a residential garage where a 38-year-old male was using a table saw. He has a deep laceration to his left forearm with bright red blood spurting with each heartbeat. A bystander is holding a blood-soaked towel against the wound. There is a significant amount of blood on the floor and the saw table. The patient is alert but pale, anxious, and diaphoretic.",
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    vitals: { hr: 120, bp: "96/62", rr: 24, spo2: 98, gcs: 15, temp: null },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "You observe bright red blood spurting rhythmically from a deep forearm laceration. Direct pressure with a towel has not controlled the bleeding. What is the MOST appropriate next step?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You apply a tourniquet proximal to the wound and the bleeding stops. You note the time of application. The patient winces in pain but the hemorrhage is controlled.",
        vitals_update: { hr: 114, bp: "100/66" },
        clinical_pearl: "Tourniquet application has been shown to be life-saving when direct pressure fails to control extremity hemorrhage. Modern evidence (from military and civilian data) shows tourniquets are safe for up to 2 hours with minimal risk of limb complications. Apply the tourniquet 2-3 inches proximal to the wound, tighten until bleeding stops, and note the time. Never loosen a tourniquet in the field once applied.",
        options: [
          { text: "Apply a tourniquet proximal to the wound", correct: true, explanation: "Arterial bleeding uncontrolled by direct pressure requires a tourniquet. This is bright red, spurting blood indicating arterial hemorrhage.", guideline_ref: "PHTLS 10th Ed — Hemorrhage Control; Stop the Bleed National Guidelines; NAEMSP/ACS Tourniquet Position Statement" },
          { text: "Apply more towels and press harder", correct: false, explanation: "Direct pressure has already failed. Stacking materials without escalating to a tourniquet wastes critical time and allows continued blood loss.", guideline_ref: "PHTLS 10th Ed — Hemorrhage Control; Stop the Bleed" },
          { text: "Elevate the arm above the heart and apply a pressure bandage", correct: false, explanation: "Elevation alone does not reliably control arterial hemorrhage. When direct pressure fails on an extremity, the next step is a tourniquet.", guideline_ref: "PHTLS 10th Ed — Hemorrhage Control" },
          { text: "Apply a blood pressure cuff as a tourniquet above the wound", correct: false, explanation: "BP cuffs are not reliable tourniquets — they lose pressure over time and may not provide sufficient occlusion. Use a purpose-built tourniquet.", guideline_ref: "NAEMSP/ACS Tourniquet Position Statement" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following hemorrhage control steps in the correct escalation order from first attempted to last resort.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "With bleeding controlled, you move to a full assessment. The patient is still pale and tachycardic but his mental status remains intact.",
        vitals_update: { hr: 110, bp: "104/68", rr: 22 },
        explanation: "Hemorrhage control follows a stepwise escalation: direct pressure first, then wound packing with hemostatic agents if available and appropriate, then tourniquet for extremity hemorrhage that cannot be controlled. For life-threatening hemorrhage, providers may go directly to tourniquet application. The key principle is to stop the bleeding as quickly as possible — 'stop the bleed' takes priority.",
        guideline_ref: "PHTLS 10th Ed — Hemorrhage Control; Stop the Bleed National Guidelines; NAEMSP/ACS Position Statements",
        items: [
          "Apply direct pressure with a sterile dressing",
          "If bleeding continues, pack the wound with hemostatic gauze and apply direct pressure",
          "If still uncontrolled on an extremity, apply a commercial tourniquet proximal to the wound",
          "If first tourniquet does not control bleeding, apply a second tourniquet proximal to the first",
          "Note tourniquet application time and do not remove in the field",
          "Reassess distal hemorrhage control and initiate rapid transport"
        ]
      },
      {
        phase: "assessment",
        prompt: "Review the stages of hemorrhagic shock. Match each stage to its estimated blood loss and key clinical findings.",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        clinical_pearl: "In healthy adults, compensatory mechanisms can mask significant blood loss. Tachycardia is often the first measurable sign. Hypotension typically doesn't appear until Class III shock (~30% volume loss). Young, fit patients compensate longer but decompensate suddenly. This patient's presentation (HR 120, BP 96/62, pale, diaphoretic) is consistent with Class III hemorrhagic shock.",
        explanation: "The four classes of hemorrhagic shock help estimate blood loss severity and guide treatment urgency. Recognizing the class of shock informs transport decisions and fluid resuscitation strategies.",
        guideline_ref: "PHTLS 10th Ed — Shock; ATLS 10th Ed — Hemorrhagic Shock Classification",
        columns: ["Shock Class", "Blood Loss", "Heart Rate", "Blood Pressure", "Mental Status"],
        rows: [
          { values: ["Class I", "Up to 15% (~750 mL)", "Normal to mildly elevated", "Normal", "Alert, minimal anxiety"] },
          { values: ["Class II", "15–30% (~750–1500 mL)", "100–120", "Normal (narrowed pulse pressure)", "Anxious, mildly confused"] },
          { values: ["Class III", "30–40% (~1500–2000 mL)", "120–140", "Decreased", "Confused, anxious"] },
          { values: ["Class IV", ">40% (>2000 mL)", ">140 or absent", "Severely decreased", "Lethargic, obtunded"] }
        ]
      }
    ]
  }
];
