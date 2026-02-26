const BATCH1 = [
  // ============================================================
  // SCENARIO 1: Cardiac Arrest
  // ============================================================
  {
    id: "nat-cardiac-01",
    title: "70M — Cardiac Arrest at Home",
    dispatch: "70-year-old male, unresponsive, not breathing",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "EMR",
    patient: { age: 70, sex: "M", cc: "Unresponsive, not breathing" },
    scene: "You arrive at a single-story home. Family members are frantic in the living room. A 70-year-old male is found supine on the floor near the recliner. His wife states he was watching television, complained of chest pain, then suddenly slumped over approximately 8 minutes ago. Bystander CPR has not been initiated. The scene is safe with no hazards.",
    history: { pmh: "Hypertension, hyperlipidemia, prior MI 5 years ago, Type 2 diabetes", meds: "Metoprolol, atorvastatin, lisinopril, metformin", allergies: "Sulfa drugs" },
    vitals: { hr: 0, bp: "0/0", rr: 0, spo2: null, gcs: 3, temp: "97.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "You confirm the patient is unresponsive with no pulse and no breathing. Arrange the following BLS interventions in the correct order of priority.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Begin high-quality chest compressions",
          "Ensure scene safety and don BSI/PPE",
          "Attach and analyze with AED as soon as available",
          "Open the airway and provide ventilations"
        ],
        correctOrder: [1, 0, 3, 2],
        explanation: "The correct BLS sequence is: (1) Ensure scene safety and PPE, (2) Begin high-quality chest compressions — push hard and fast with minimal interruptions, (3) Open airway and ventilate at a 30:2 ratio, (4) Attach and use the AED as soon as it is available. Early, high-quality CPR is the highest priority intervention after confirming cardiac arrest.",
        guideline_ref: "AHA BLS Guidelines 2020 — Adult Cardiac Arrest Algorithm",
        clinical_pearl: "Every minute without CPR decreases survival by 7-10%. High-quality compressions (rate 100-120/min, depth 2-2.4 inches, full recoil) are the single most important intervention in cardiac arrest."
      },
      {
        phase: "treatment",
        prompt: "CPR is in progress. Your partner retrieves the AED and powers it on. The AED analyzes the rhythm and advises 'Shock advised.' What is your next action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "CPR has been in progress for approximately 2 minutes. The AED pads have been applied and the device has completed its analysis.",
        options: [
          { text: "Clear the patient, ensure no one is touching them, and deliver the shock immediately", correct: true, critical: false, explanation: "When the AED advises a shock, ensure all rescuers are clear of the patient and deliver the shock without delay. Resume CPR immediately after the shock — do not pause to recheck a pulse.", guideline_ref: "AHA BLS Guidelines 2020 — AED Use" },
          { text: "Perform 2 minutes of CPR first, then deliver the shock to improve myocardial readiness", correct: false, critical: false, explanation: "When the AED advises a shock, it should be delivered as quickly as possible. Delaying the shock reduces the chance of successful defibrillation.", guideline_ref: "AHA BLS Guidelines 2020 — AED Use" },
          { text: "Remove the AED pads, check for a pulse, then reapply and deliver the shock", correct: false, critical: true, explanation: "Removing AED pads wastes critical time and interrupts the resuscitation. The AED has already analyzed the rhythm. Unnecessary delays in defibrillation decrease survival.", guideline_ref: "AHA BLS Guidelines 2020 — AED Use" },
          { text: "Deliver the shock while your partner continues chest compressions to maintain coronary perfusion", correct: false, critical: true, explanation: "No one should be touching the patient during shock delivery. This poses a serious electrocution risk to the rescuer performing compressions.", guideline_ref: "AHA BLS Guidelines 2020 — AED Safety" }
        ],
        clinical_pearl: "Resume CPR immediately after shock delivery, starting with compressions. Do not stop to check rhythm or pulse — complete a full 2-minute cycle of CPR before the next AED analysis."
      },
      {
        phase: "treatment",
        prompt: "As a Paramedic, you identify ventricular fibrillation on the monitor. After multiple defibrillation attempts, the patient remains in VF. You are considering reversible causes. Categorize each of the following into either 'H's' (Hypovolemia, Hypoxia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia) or 'T's' (Tension pneumothorax, Tamponade, Toxins, Thrombosis-pulmonary, Thrombosis-coronary).",
        type: "categorize",
        level_filter: "Paramedic",
        items: [
          "Suspected massive PE based on recent leg surgery",
          "Patient found in unheated home, skin cool to touch",
          "Known history of end-stage renal disease with missed dialysis",
          "Bottle of tricyclic antidepressants found on nightstand",
          "Muffled heart sounds with JVD noted between compression pauses"
        ],
        categories: ["H's (Reversible Causes)", "T's (Reversible Causes)"],
        correctCategories: [1, 0, 0, 1, 1],
        explanation: "Suspected massive PE = Thrombosis-pulmonary (T). Hypothermic environment = Hypothermia (H). Missed dialysis with ESRD = Hyperkalemia (H). Tricyclic antidepressants = Toxins (T). Muffled heart sounds with JVD = Tamponade (T). Identifying and treating reversible causes is essential when standard ACLS interventions fail to achieve ROSC.",
        guideline_ref: "AHA ACLS Guidelines 2020 — H's and T's of Cardiac Arrest",
        clinical_pearl: "In refractory VF, always reassess for reversible causes. Hyperkalemia is one of the most common and treatable causes — empiric calcium chloride and sodium bicarbonate may be considered."
      },
      {
        phase: "transport",
        prompt: "After 12 minutes of resuscitation, you achieve ROSC. The patient has a pulse of 88, BP 90/60, and is unresponsive with occasional agonal respirations. Select ALL appropriate post-ROSC interventions.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        narrative: "The patient has regained a pulse. He remains unconscious with a GCS of 6 (E1V2M3). Skin is pale and diaphoretic.",
        vitals_update: { hr: 88, bp: "90/60", rr: 6, spo2: 92, gcs: 6 },
        options: [
          { text: "Maintain advanced airway and ventilate at 10 breaths/min; titrate oxygen to SpO2 94-99%", correct: true, critical: false, explanation: "Post-ROSC ventilation should target normoxia (SpO2 94-99%) and normocarbia. Hyperventilation is harmful and should be avoided. A rate of 10 breaths/min is appropriate.", guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020" },
          { text: "Establish IV/IO access and administer a 1-2 L normal saline fluid bolus targeting SBP > 90 mmHg", correct: true, critical: false, explanation: "Hypotension post-ROSC is common and should be treated aggressively with IV fluids and vasopressors as needed. Target SBP ≥ 90 mmHg or MAP ≥ 65 mmHg.", guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020" },
          { text: "Obtain a 12-lead ECG to evaluate for STEMI and prepare for transport to a cardiac catheterization-capable facility", correct: true, critical: false, explanation: "A 12-lead ECG should be obtained as soon as possible post-ROSC. STEMI is a common cause of cardiac arrest, and emergent PCI significantly improves outcomes.", guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020" },
          { text: "Administer prophylactic amiodarone 300 mg IV push to prevent recurrent VF regardless of current rhythm", correct: false, critical: false, explanation: "Prophylactic antiarrhythmics post-ROSC are not routinely recommended. If amiodarone was given during the arrest, a maintenance infusion may be considered, but routine prophylactic boluses are not indicated.", guideline_ref: "AHA ACLS Guidelines 2020" },
          { text: "Hyperventilate the patient at 20 breaths/min to rapidly correct acidosis from the arrest", correct: false, critical: true, explanation: "Hyperventilation is harmful post-ROSC. It decreases cerebral blood flow through excessive CO2 clearance, increases intrathoracic pressure reducing venous return, and worsens neurological outcomes.", guideline_ref: "AHA ACLS Post-Cardiac Arrest Care 2020" }
        ],
        clinical_pearl: "Targeted temperature management (TTM) should be initiated as early as possible for comatose post-cardiac arrest patients. Avoid hyperthermia aggressively. Transport to a facility capable of comprehensive post-cardiac arrest care including PCI and TTM."
      }
    ]
  },

  // ============================================================
  // SCENARIO 2: Allergic Reaction / Anaphylaxis
  // ============================================================
  {
    id: "nat-allergy-01",
    title: "28F — Anaphylaxis at the Park",
    dispatch: "28-year-old female, allergic reaction, difficulty breathing",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 28, sex: "F", cc: "Allergic reaction, difficulty breathing" },
    scene: "You arrive at a public park on a warm afternoon. A 28-year-old female is seated on a bench, visibly distressed. Friends report she was stung by a bee on her right forearm approximately 10 minutes ago. She initially had localized swelling at the sting site, but symptoms have rapidly progressed. She now has diffuse urticaria across her trunk, facial swelling including her lips, audible stridor, and is complaining of throat tightness and difficulty breathing. She appears anxious and is speaking in short sentences.",
    history: { pmh: "Known bee allergy, asthma (mild intermittent)", meds: "Albuterol inhaler PRN", allergies: "Bee venom" },
    vitals: { hr: 124, bp: "88/54", rr: 26, spo2: 91, gcs: 15, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Based on the patient's presentation, which set of findings BEST confirms this is anaphylaxis rather than a localized allergic reaction?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Involvement of two or more body systems (skin: urticaria, respiratory: stridor, cardiovascular: hypotension) following a known allergen exposure", correct: true, critical: false, explanation: "Anaphylaxis is defined by involvement of two or more organ systems after exposure to a likely allergen. This patient has skin (urticaria, angioedema), respiratory (stridor, dyspnea), and cardiovascular (hypotension, tachycardia) involvement — a classic anaphylactic presentation.", guideline_ref: "National EMS Education Standards — Immunologic Emergencies; World Allergy Organization Anaphylaxis Guidelines" },
          { text: "The presence of urticaria and localized swelling at the sting site with an elevated heart rate from anxiety", correct: false, critical: false, explanation: "Localized urticaria with isolated tachycardia could be a simple allergic reaction with anxiety. The key distinguishing features of anaphylaxis are multi-system involvement and signs of systemic compromise (hypotension, airway edema).", guideline_ref: "National EMS Education Standards — Immunologic Emergencies" },
          { text: "A heart rate above 100 and blood pressure below 90 systolic in a young, otherwise healthy patient", correct: false, critical: false, explanation: "While hypotension and tachycardia are concerning, these vital sign abnormalities alone could have many causes. Anaphylaxis diagnosis requires the clinical context of allergen exposure plus multi-system involvement.", guideline_ref: "National EMS Education Standards — Immunologic Emergencies" },
          { text: "Patient report of throat tightness, which is always diagnostic of anaphylaxis regardless of other symptoms", correct: false, critical: false, explanation: "Throat tightness alone is not diagnostic of anaphylaxis. While concerning, it can be caused by anxiety, vocal cord dysfunction, or other conditions. Anaphylaxis requires a pattern of multi-system involvement.", guideline_ref: "National EMS Education Standards — Immunologic Emergencies" }
        ],
        clinical_pearl: "Remember: anaphylaxis can occur without skin findings in up to 20% of cases. Respiratory or cardiovascular compromise after allergen exposure should trigger anaphylaxis treatment even without hives."
      },
      {
        phase: "treatment",
        prompt: "You have confirmed anaphylaxis. Arrange the following treatment interventions in the correct order of priority.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Administer high-flow oxygen via non-rebreather mask",
          "Administer epinephrine via auto-injector (0.3 mg IM, lateral thigh)",
          "Place patient in supine position with legs elevated (shock position)",
          "Establish vascular access and prepare for fluid resuscitation"
        ],
        correctOrder: [1, 0, 2, 3],
        explanation: "The highest priority in anaphylaxis is epinephrine — it is the first-line, life-saving treatment and should never be delayed. Second, administer high-flow oxygen to support the compromised airway and breathing. Third, position the patient supine with legs elevated to support blood pressure (unless contraindicated by respiratory distress — semi-Fowler's may be used as a compromise). Fourth, establish IV access for fluid resuscitation. Epinephrine first — always.",
        guideline_ref: "AHA/ACLS Anaphylaxis Algorithm; National EMS Education Standards — Immunologic Emergencies",
        clinical_pearl: "Epinephrine IM in the lateral thigh is the preferred route and site — it provides faster, more reliable absorption than subcutaneous or deltoid injection. Do not delay epinephrine for IV access."
      },
      {
        phase: "transport",
        prompt: "Five minutes after epinephrine administration, you reassess the patient. Select ALL findings that would indicate the patient is improving and responding to treatment.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        narrative: "You administered epinephrine 0.3 mg IM five minutes ago. The patient is on high-flow O2 via NRB and has an IV established with NS running wide open.",
        vitals_update: { hr: 108, bp: "96/62", rr: 22, spo2: 95 },
        options: [
          { text: "Blood pressure has improved from 88/54 to 96/62 mmHg", correct: true, critical: false, explanation: "Rising blood pressure indicates improved vascular tone from epinephrine's alpha-adrenergic effects. While still below normal, the trend is encouraging and suggests the patient is responding.", guideline_ref: "National EMS Education Standards — Reassessment" },
          { text: "Stridor has diminished and the patient can now speak in full sentences", correct: true, critical: false, explanation: "Improved voice quality and reduced stridor indicate decreased laryngeal edema, a direct effect of epinephrine. This is one of the most reassuring signs of improvement.", guideline_ref: "National EMS Education Standards — Reassessment" },
          { text: "SpO2 has improved from 91% to 95% on high-flow oxygen", correct: true, critical: false, explanation: "Improving oxygen saturation reflects better air exchange as bronchospasm and airway edema resolve. This is a positive trend.", guideline_ref: "National EMS Education Standards — Reassessment" },
          { text: "Heart rate has increased from 124 to 140, indicating epinephrine is working", correct: false, critical: false, explanation: "While epinephrine can increase heart rate, a rising tachycardia in anaphylaxis more likely indicates worsening shock or inadequate treatment response. An improving patient's heart rate should trend downward, not upward.", guideline_ref: "National EMS Education Standards — Reassessment" },
          { text: "Urticaria has spread to cover all extremities despite other improvements", correct: false, critical: false, explanation: "Worsening or spreading urticaria suggests ongoing mast cell degranulation and mediator release. While skin findings alone are less concerning than airway or hemodynamic compromise, this is not a sign of improvement.", guideline_ref: "National EMS Education Standards — Reassessment" }
        ],
        clinical_pearl: "Anaphylaxis can be biphasic — symptoms may recur 1-72 hours after initial resolution. All anaphylaxis patients should be transported to the ED for observation, even if they appear to fully recover in the field."
      }
    ]
  },

  // ============================================================
  // SCENARIO 3: Trauma — Multi-System
  // ============================================================
  {
    id: "nat-trauma-01",
    title: "45M — Multi-System Trauma, Ejection from Vehicle",
    dispatch: "Motor vehicle crash, person ejected, unresponsive",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 45, sex: "M", cc: "Unresponsive after vehicle ejection" },
    scene: "You arrive at a rural two-lane highway where a single vehicle has struck a tree at high speed. The vehicle shows major front-end deformation with a starred windshield. A 45-year-old male is found approximately 20 feet from the vehicle, supine in the grass. He was not wearing a seatbelt and was ejected through the windshield. He is unresponsive to voice, has a large laceration across his forehead with active bleeding, obvious deformity of the left femur, and paradoxical chest wall movement on the right side. Fire department is on scene managing hazards. The scene is now safe to approach.",
    history: { pmh: "Unknown — patient unresponsive, no medical ID found", meds: "Unknown", allergies: "Unknown" },
    vitals: { hr: 132, bp: "78/50", rr: 32, spo2: 84, gcs: 7, temp: "96.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "During the primary survey of this multi-system trauma patient, what is the MOST critical finding that must be addressed first?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Paradoxical chest wall movement on the right side with SpO2 of 84% indicating a flail chest with likely underlying pulmonary contusion", correct: true, critical: false, explanation: "In the XABCDE approach, life-threatening chest injuries take priority after hemorrhage control. The paradoxical chest movement indicates flail chest with probable underlying pulmonary contusion, explaining the severely compromised oxygenation (SpO2 84%). This requires immediate positive-pressure ventilation and high-flow oxygen.", guideline_ref: "PHTLS 10th Edition — Primary Survey; National EMS Education Standards — Trauma Assessment" },
          { text: "The open forehead laceration with active bleeding as it represents a major source of hemorrhage", correct: false, critical: false, explanation: "While scalp lacerations can bleed significantly, this patient's hypotension is more likely from thoracic and/or femur injuries. The forehead laceration should be controlled with direct pressure, but the immediately life-threatening chest injury takes priority in the primary survey.", guideline_ref: "PHTLS 10th Edition — Primary Survey" },
          { text: "The left femur deformity, which requires immediate traction splinting to prevent further vascular damage", correct: false, critical: false, explanation: "Femur fractures can cause significant blood loss (750-1500 mL), but splinting is a secondary survey intervention. The flail chest with hypoxia is the more immediately life-threatening finding that must be addressed in the primary survey.", guideline_ref: "PHTLS 10th Edition — Primary Survey" },
          { text: "The patient's GCS of 7, which requires immediate endotracheal intubation before any other interventions", correct: false, critical: false, explanation: "While a GCS ≤ 8 generally indicates the need for definitive airway management, the XABCDE approach dictates addressing life-threatening hemorrhage and breathing problems before definitive airway. BVM ventilation with OPA can temporize while addressing the flail chest.", guideline_ref: "PHTLS 10th Edition — Primary Survey; National EMS Education Standards — Trauma Assessment" }
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
        correctCells: [[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0]],
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
        explanation: "Priority order: (1) Address the immediately life-threatening flail chest — stabilize the segment and assist ventilations to correct hypoxia while controlling the scalp hemorrhage. (2) Establish IV access and begin fluid resuscitation for hemorrhagic shock. (3) Apply spinal motion restriction — this patient has high mechanism and signs of head/spine injury. (4) Splint the femur fracture — important but addressed after more critical interventions. The principle: treat life threats first, then package and transport.",
        guideline_ref: "PHTLS 10th Edition — Treatment Priorities; National EMS Education Standards — Trauma Management",
        clinical_pearl: "In multi-system trauma, the 'Platinum 10 Minutes' concept emphasizes minimal on-scene time. Focus on interventions that cannot be done en route: hemorrhage control, spinal motion restriction, and splinting. Start IVs and reassess during transport."
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
          { text: "Request helicopter EMS for transport to the Level I trauma center given the patient's multi-system injuries and hemodynamic instability", correct: true, critical: false, explanation: "This patient meets trauma center criteria based on mechanism (ejection), injuries (head, chest, abdomen, extremity), and physiologic compromise (GCS ≤ 8, SBP < 90). Air medical transport to a Level I center provides the best chance for survival.", guideline_ref: "CDC Field Triage Decision Scheme 2021; National EMS Education Standards — Trauma Transport Decisions" },
          { text: "Continue assisted ventilations and consider advanced airway management given the declining GCS", correct: true, critical: false, explanation: "With GCS of 6 and declining, this patient cannot protect his own airway. Continued BVM ventilation or advanced airway placement (supraglottic or ETT by Paramedic) is essential to maintain oxygenation during transport.", guideline_ref: "National EMS Education Standards — Airway Management in Trauma" },
          { text: "Administer tranexamic acid (TXA) within the first 3 hours of injury if available per local guidelines", correct: true, critical: false, explanation: "TXA has been shown to reduce mortality in hemorrhagic trauma when given within 3 hours of injury. Current evidence supports its use in the prehospital setting for patients with suspected significant hemorrhage.", guideline_ref: "CRASH-2 Trial; National Evidence-Based Guidelines — TXA in Trauma" },
          { text: "Transport to the nearest community hospital for stabilization before transferring to the trauma center", correct: false, critical: false, explanation: "Direct transport to a trauma center is preferred for patients meeting major trauma criteria. Stopping at a community hospital adds delay without providing definitive surgical care, and transfer times significantly worsen outcomes.", guideline_ref: "CDC Field Triage Decision Scheme 2021" },
          { text: "Administer aggressive IV fluid resuscitation with 3-4 liters of normal saline to normalize blood pressure before transport", correct: false, critical: true, explanation: "Aggressive crystalloid resuscitation in hemorrhagic shock is harmful — it dilutes clotting factors, worsens hypothermia, and can increase bleeding. Current evidence supports permissive hypotension (SBP 80-90) and early blood products rather than large-volume crystalloid.", guideline_ref: "PHTLS 10th Edition — Shock Management; NAEMSP Position Statement on Fluid Resuscitation" }
        ],
        clinical_pearl: "The 'lethal triad' of trauma — hypothermia, acidosis, and coagulopathy — is worsened by excessive crystalloid administration. Limit NS/LR to 1-2L and prioritize rapid transport to surgical care. Keep the patient warm."
      }
    ]
  },

  // ============================================================
  // SCENARIO 4: Pediatric Seizure
  // ============================================================
  {
    id: "nat-peds-seizure-01",
    title: "4F — Febrile Seizure at Home",
    dispatch: "4-year-old, seizure activity",
    category: "OB/Peds/Neonatal",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 4, sex: "F", cc: "Seizure" },
    scene: "You arrive at a residential home. Parents are extremely anxious. A 4-year-old female is lying on the living room floor on a blanket. Parents report she had a fever of 103.2°F today and was treated with acetaminophen. Approximately 5 minutes ago, she began shaking all over with her eyes rolled back. The seizure lasted about 3 minutes and stopped on its own before your arrival. She is now lying still, eyes closed, and making occasional moaning sounds. She is breathing with good chest rise. The scene is safe.",
    history: { pmh: "No prior seizure history, no chronic medical conditions, recent upper respiratory infection for 2 days", meds: "Acetaminophen (Children's Tylenol) given 1 hour ago", allergies: "No known allergies" },
    vitals: { hr: 142, bp: "90/58", rr: 24, spo2: 97, gcs: 10, temp: "103.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The seizure has stopped and the child is now in a post-ictal state. What is the MOST important initial management priority?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Maintain airway patency by positioning the child in the recovery position, suction as needed, and administer blow-by oxygen", correct: true, critical: false, explanation: "In the post-ictal period, airway management is the top priority. The child's decreased level of consciousness (GCS 10) puts her at risk for airway obstruction. Position in the recovery (lateral) position to prevent aspiration, suction secretions, and provide supplemental oxygen.", guideline_ref: "National EMS Education Standards — Pediatric Seizures; PALS Guidelines" },
          { text: "Immediately obtain IV access and administer a benzodiazepine to prevent seizure recurrence", correct: false, critical: false, explanation: "The seizure has already stopped. Prophylactic benzodiazepines are not indicated for a resolved seizure. IV access is appropriate but should not take priority over airway management. Benzodiazepines are reserved for active seizures lasting > 5 minutes.", guideline_ref: "National EMS Education Standards — Pediatric Seizures" },
          { text: "Apply ice packs to the groin and axillae to rapidly reduce the fever and prevent another seizure", correct: false, critical: false, explanation: "Aggressive cooling measures like ice packs are not recommended for febrile seizures. They can cause shivering (which increases metabolic demand and temperature), discomfort, and do not prevent seizure recurrence. Passive cooling and antipyretics are appropriate.", guideline_ref: "American Academy of Pediatrics — Febrile Seizure Guidelines" },
          { text: "Restrain the child and insert an oral airway immediately to protect from tongue biting if another seizure occurs", correct: false, critical: true, explanation: "Never restrain a seizing patient or force objects into the mouth. An OPA should only be inserted if the child cannot maintain their own airway and has no gag reflex. Tongue biting prevention is a harmful myth — teeth can break oral devices, causing a greater airway risk.", guideline_ref: "National EMS Education Standards — Seizure Management" }
        ],
        clinical_pearl: "Febrile seizures are the most common seizure type in children 6 months to 5 years. Simple febrile seizures (generalized, < 15 minutes, single episode in 24 hours) have an excellent prognosis and do not increase the risk of epilepsy."
      },
      {
        phase: "assessment",
        prompt: "The parents are asking if this was a 'normal' febrile seizure. Categorize each feature as consistent with a 'Simple Febrile Seizure' or a 'Complex Febrile Seizure / Other Etiology' that warrants greater concern.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Generalized tonic-clonic activity lasting 3 minutes",
          "Seizure activity isolated to the right arm and leg only",
          "Age 4 years with fever above 100.4°F and no seizure history",
          "Two separate seizure episodes within the same hour",
          "Prolonged post-ictal period lasting greater than 30 minutes with focal neurological deficits"
        ],
        categories: ["Simple Febrile Seizure", "Complex Febrile Seizure / Other Etiology"],
        correctCategories: [0, 1, 0, 1, 1],
        explanation: "Simple febrile seizures are: generalized (not focal), last < 15 minutes, occur once in 24 hours, and happen in children 6 months to 5 years with fever. This patient's 3-minute generalized seizure at age 4 with fever fits. Focal seizure activity (right side only), multiple seizures in one hour, and prolonged post-ictal states with focal deficits all suggest a complex febrile seizure or other pathology requiring urgent evaluation.",
        guideline_ref: "American Academy of Pediatrics — Febrile Seizure Classification; National EMS Education Standards — Pediatric Neurological Emergencies",
        clinical_pearl: "Complex febrile seizures (focal, prolonged, or recurrent within 24 hours) warrant more aggressive workup in the ED. Always transport pediatric seizure patients for evaluation, even if the seizure appears simple."
      },
      {
        phase: "treatment",
        prompt: "During transport, you notice the child's eyes begin to deviate to the left and she develops rhythmic jerking of all extremities. She is actively seizing again. As the Paramedic, the cardiac monitor shows sinus tachycardia at 150 bpm. You note the child weighs approximately 18 kg. Which assessment finding on the monitor would be MOST concerning for a cause other than a simple febrile seizure?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "The child has begun seizing again during transport. You have IV access established and the monitor applied. The seizure has been ongoing for 2 minutes.",
        vitals_update: { hr: 150, rr: 8, spo2: 93, gcs: 3 },
        options: [
          { text: "Waveform capnography showing a gradually rising ETCO2 of 55 mmHg with a normal rectangular waveform during the seizure", correct: false, critical: false, explanation: "A rising ETCO2 during an active seizure is expected due to increased metabolic activity and potential hypoventilation. A normal waveform shape with elevated values is consistent with the increased CO2 production from seizure activity.", guideline_ref: "National EMS Education Standards — Capnography" },
          { text: "Cardiac monitor displaying a prolonged QTc interval of 520 ms between seizure artifacts", correct: true, critical: false, explanation: "A prolonged QTc interval is a concerning finding that could indicate a cardiac channelopathy (such as Long QT Syndrome), which can cause syncope and seizure-like episodes from cardiac dysrhythmias. This suggests the 'seizure' may actually have a cardiac etiology and warrants urgent cardiology evaluation.", guideline_ref: "AHA PALS Guidelines — Cardiac Causes of Seizures; National EMS Education Standards — Pediatric Cardiology" },
          { text: "SpO2 waveform showing a decrease from 97% to 93% during the active seizure activity", correct: false, critical: false, explanation: "A mild desaturation during an active seizure is common and expected due to increased oxygen consumption and impaired ventilation. This should improve with airway management and seizure termination.", guideline_ref: "National EMS Education Standards — Pediatric Seizures" },
          { text: "Heart rate trending upward from 142 to 150 during the seizure with sinus rhythm maintained", correct: false, critical: false, explanation: "Mild sinus tachycardia during a seizure is a normal physiologic response to the increased sympathetic tone, metabolic demand, and fever. This is expected and not independently concerning.", guideline_ref: "National EMS Education Standards — Pediatric Assessment" }
        ],
        clinical_pearl: "Always consider cardiac etiologies in pediatric patients with seizures, especially if seizures are triggered by exertion, startle, or swimming. Long QT Syndrome affects approximately 1 in 2,000 people and can present as 'seizures' that are actually syncopal episodes from torsades de pointes."
      }
    ]
  },

  // ============================================================
  // SCENARIO 5: Behavioral Emergency
  // ============================================================
  {
    id: "nat-behavioral-01",
    title: "22M — Agitated Patient with Possible Substance Use",
    dispatch: "22-year-old male, aggressive behavior, possible drug use",
    category: "Behavioral/Psychiatric",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 22, sex: "M", cc: "Aggressive behavior" },
    scene: "Law enforcement requests EMS to a convenience store parking lot. A 22-year-old male is pacing rapidly, yelling incoherently, and has punched a car window, cutting his right hand. He is sweating profusely despite cool ambient temperature. Friends at the scene report he took 'something' at a party about 2 hours ago but won't say what. Police have established a perimeter and the patient is not currently armed. He is pacing in an open area, alternating between shouting at bystanders and talking to himself.",
    history: { pmh: "Unknown — friends state he has no significant medical history and does not take medications regularly", meds: "Unknown substance ingested approximately 2 hours ago", allergies: "Unknown" },
    vitals: { hr: 138, bp: "168/98", rr: 22, spo2: 98, gcs: 14, temp: "102.4°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "As you arrive on scene, what is the MOST important initial consideration before approaching this patient?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Ensure law enforcement has secured the scene and establish a safe approach route with a clear exit path before making contact", correct: true, critical: false, explanation: "Scene safety is always the first priority, especially with agitated and potentially violent patients. Wait for law enforcement confirmation, approach from a position that allows retreat, identify exit routes, and never position yourself between the patient and a wall or corner.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies; NAEMSP Position Statement on EMS Provider Safety" },
          { text: "Approach immediately with restraints ready since the patient is actively injuring himself and needs rapid intervention", correct: false, critical: true, explanation: "Rushing toward an agitated patient with restraints is dangerous and escalatory. Premature physical contact with an agitated patient increases the risk of injury to both the patient and providers. De-escalation should always be attempted first.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies" },
          { text: "Have your partner circle around behind the patient while you approach from the front to control the situation", correct: false, critical: true, explanation: "Approaching an agitated patient from behind or surrounding them can trigger a 'fight' response and escalate violence. The patient may feel trapped and become more dangerous. A calm, visible, non-threatening approach is safer.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies" },
          { text: "Begin your assessment from 50 feet away by shouting questions to the patient to determine if he is oriented", correct: false, critical: false, explanation: "While maintaining distance is appropriate, shouting at an agitated patient can escalate the situation. A calm, measured approach at a conversational distance (once scene safety is confirmed) with a quiet, steady voice is more effective.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies" }
        ],
        clinical_pearl: "The 'one plus one' rule: always have at least one more provider than you think you need when managing agitated patients. Never enter the scene alone, and always have an egress plan."
      },
      {
        phase: "assessment",
        prompt: "Law enforcement has secured the scene. You are attempting to engage the patient. Select ALL appropriate verbal de-escalation techniques.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Use a calm, low tone of voice and speak slowly; introduce yourself by name and explain you are there to help", correct: true, critical: false, explanation: "A calm, non-threatening vocal tone is one of the most effective de-escalation tools. Introducing yourself humanizes the interaction and establishes rapport. Speaking slowly helps reduce the patient's arousal level.", guideline_ref: "National EMS Education Standards — Therapeutic Communication; NAEMSP De-escalation Guidelines" },
          { text: "Maintain a relaxed, open body posture with hands visible; avoid crossing arms or pointing", correct: true, critical: false, explanation: "Non-verbal communication accounts for a large portion of interpersonal interaction. Open, non-threatening body language reduces perceived threat. Visible hands show you are not concealing anything and are not preparing for physical intervention.", guideline_ref: "National EMS Education Standards — Therapeutic Communication" },
          { text: "Acknowledge the patient's emotional state without judgment: 'I can see you're upset. Can you tell me what's going on?'", correct: true, critical: false, explanation: "Validating the patient's emotional experience builds rapport and makes them feel heard. This is a core de-escalation principle — empathy without agreement. You are not condoning behavior, but acknowledging their distress.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies; Crisis Intervention Team Training" },
          { text: "Firmly command the patient to sit down and be quiet so you can assess him properly", correct: false, critical: false, explanation: "Authoritative commands escalate agitation in most cases. Agitated patients typically respond poorly to perceived authority or attempts at control. This approach increases the risk of a violent confrontation.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies" },
          { text: "Immediately tell the patient that if he doesn't cooperate, he will be sedated and restrained", correct: false, critical: true, explanation: "Threatening a patient with sedation or restraint is coercive, escalatory, and unethical. This creates a confrontational dynamic, violates patient autonomy, and may constitute assault if carried out without appropriate clinical indication.", guideline_ref: "National EMS Education Standards — Behavioral Emergencies; EMS Code of Ethics" }
        ],
        clinical_pearl: "The HEARD technique: Hear, Empathize, Apologize, Resolve, Diagnose. Spend 60-90 seconds just listening before trying to direct the conversation. Most agitated patients de-escalate when they feel genuinely heard."
      },
      {
        phase: "treatment",
        prompt: "Despite de-escalation attempts, the patient's agitation is worsening. He is now hyperthermic (104.1°F), tachycardic (152), and becoming increasingly combative. Law enforcement assists with safe restraint. Arrange the following priorities in order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient has been safely restrained by law enforcement with padded limb restraints in a supine position. He is continuing to struggle and is now diaphoretic with an altered level of consciousness.",
        vitals_update: { hr: 152, bp: "178/104", rr: 28, spo2: 96, gcs: 12, temp: "104.1°F" },
        items: [
          "Ensure restraints allow monitoring of distal circulation and do not restrict breathing",
          "Actively cool the patient with cold packs to groin and axillae; remove excess clothing",
          "Continuously monitor cardiac rhythm and obtain a 12-lead ECG when feasible",
          "Assess blood glucose level and establish vascular access for medication administration"
        ],
        correctOrder: [0, 3, 1, 2],
        explanation: "First priority: verify restraints are safe — ensure the patient is not prone (risk of positional asphyxia), restraints allow chest expansion, and distal circulation is intact. Second: assess glucose (hypoglycemia can mimic agitation) and establish IV access for medications. Third: actively cool — hyperthermia above 104°F is a medical emergency associated with sympathomimetic toxicity, and can lead to rhabdomyolysis, DIC, and death. Fourth: continuous cardiac monitoring — stimulant drugs can cause lethal dysrhythmias.",
        guideline_ref: "National EMS Education Standards — Behavioral Emergencies; NAEMSP Position Statement on Patient Restraint; Excited Delirium/Acute Behavioral Disturbance Guidelines",
        clinical_pearl: "Excited delirium/acute behavioral disturbance is a medical emergency, not just a behavioral problem. Hyperthermia, tachycardia, and agitation with substance use carry significant mortality risk. These patients need aggressive cooling, sedation (ketamine or benzodiazepines per scope), and rapid transport. Never leave a restrained patient unmonitored — sudden cardiac arrest is a known risk."
      }
    ]
  },

  // ============================================================
  // SCENARIO 6: Hypoglycemia with Altered Mental Status
  // ============================================================
  {
    id: "nat-hypoglycemia-01",
    title: "55M — Hypoglycemia in the Workplace",
    dispatch: "55-year-old male, altered mental status, workplace",
    category: "Medical Emergencies",
    difficulty: "Easy",
    level_min: "EMR",
    patient: { age: 55, sex: "M", cc: "Altered mental status" },
    scene: "You arrive at a small office building. Coworkers direct you to the break room where a 55-year-old male is sitting in a chair, appearing confused and diaphoretic. Coworkers report he seemed fine this morning but skipped lunch due to a busy schedule. Over the last 30 minutes, he became progressively confused, began slurring his words, and nearly fell when he tried to stand. They note he is a diabetic and takes insulin. His medical alert bracelet confirms 'Type 1 Diabetes — Insulin Dependent.' He is conscious but disoriented, following simple commands inconsistently.",
    history: { pmh: "Type 1 diabetes mellitus (insulin-dependent) for 30 years, hypertension", meds: "Insulin glargine (Lantus) daily, insulin lispro (Humalog) with meals, lisinopril", allergies: "Penicillin" },
    vitals: { hr: 104, bp: "148/88", rr: 20, spo2: 98, gcs: 13, temp: "98.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "You encounter a confused, diaphoretic 55-year-old male with a diabetes medical alert bracelet. What is the MOST important initial assessment to determine the cause of his altered mental status?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Obtain a blood glucose reading using a point-of-care glucometer", correct: true, critical: false, explanation: "Blood glucose measurement is the single most important assessment for a diabetic patient with altered mental status. It immediately differentiates hypoglycemia (which requires urgent treatment) from hyperglycemia or other causes. This is fast, non-invasive, and directly guides treatment.", guideline_ref: "National EMS Education Standards — Endocrine Emergencies; ADA Standards of Medical Care" },
          { text: "Perform a detailed neurological exam including Cincinnati Prehospital Stroke Scale", correct: false, critical: false, explanation: "While stroke should be considered in the differential for altered mental status, checking blood glucose first is faster, easier, and more likely to identify the cause in a known diabetic. Hypoglycemia can mimic stroke — always check glucose before assuming CVA.", guideline_ref: "National EMS Education Standards — Endocrine Emergencies" },
          { text: "Establish IV access and administer a fluid bolus to treat possible dehydration from diabetic ketoacidosis", correct: false, critical: false, explanation: "Assuming DKA without checking glucose first could lead to inappropriate treatment. Additionally, this presentation (diaphoresis, rapid onset, known insulin use, missed meal) is more consistent with hypoglycemia than DKA. Always check glucose first.", guideline_ref: "National EMS Education Standards — Endocrine Emergencies" },
          { text: "Administer naloxone intranasally to rule out opioid overdose as a cause of altered mental status", correct: false, critical: false, explanation: "While opioid overdose is in the differential for AMS, the clinical picture (diaphoresis, known diabetic, missed meal, insulin use) strongly suggests hypoglycemia. Naloxone is not indicated without signs of opioid toxicity (respiratory depression, pinpoint pupils). Check glucose first.", guideline_ref: "National EMS Education Standards — Toxicological Emergencies" }
        ],
        clinical_pearl: "The EMS mantra for altered mental status: 'Check the sugar!' Hypoglycemia is one of the most common and easily reversible causes of AMS. It can mimic stroke, intoxication, seizure, and psychiatric emergencies. Every AMS patient should have a glucose check."
      },
      {
        phase: "treatment",
        prompt: "The glucometer reads 38 mg/dL. Arrange the following treatment steps in the correct order based on patient presentation and provider capabilities.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "If the patient can swallow safely, administer oral glucose gel",
          "Reassess blood glucose in 5 minutes and reassess mental status",
          "Assess the patient's ability to protect their airway and swallow",
          "If no improvement or unable to swallow, establish IV and administer dextrose"
        ],
        correctOrder: [2, 0, 1, 3],
        explanation: "Step 1: Assess airway protective reflexes and swallowing ability — this determines the safest treatment route. Step 2: If the patient can swallow, administer oral glucose (the fastest, least invasive intervention available to all provider levels). Step 3: Reassess glucose and mental status after 5 minutes to evaluate response. Step 4: If no improvement or if the patient cannot swallow safely, establish IV access and administer IV dextrose (AEMT/Paramedic level). This stepwise approach ensures the safest and most appropriate treatment for each provider level.",
        guideline_ref: "National EMS Education Standards — Endocrine Emergencies; ADA Hypoglycemia Treatment Guidelines",
        clinical_pearl: "For EMTs: oral glucose is your primary tool — but ONLY if the patient can swallow. For AEMTs: D10 (10% dextrose) is preferred over D50 because it is less caustic to veins and allows easier dose titration. For Paramedics: if IV access fails, glucagon 1 mg IM is an alternative, though it takes 10-15 minutes to work and may not be effective in malnourished or liver-depleted patients."
      },
      {
        phase: "treatment",
        prompt: "Match each glucose treatment intervention to the LOWEST provider level authorized to administer it and the appropriate route.",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        rows: [
          "Oral glucose gel (15-25g) administered by mouth",
          "Dextrose 10% (D10) 25g administered intravenously",
          "Glucagon 1 mg administered intramuscularly",
          "Placing the patient in the recovery position and monitoring until higher-level care arrives"
        ],
        columns: ["EMR", "EMT", "AEMT", "Paramedic"],
        correctCells: [[0,1,0,0],[0,0,1,0],[0,0,1,0],[1,0,0,0]],
        explanation: "Oral glucose gel = EMT (the EMT scope includes oral glucose administration for conscious hypoglycemic patients who can swallow). D10 IV = AEMT (AEMTs can establish IV access and administer select medications including IV dextrose). Glucagon IM = AEMT (glucagon is within the AEMT scope as an alternative to IV dextrose). Recovery position and monitoring = EMR (EMRs provide basic life support and supportive care while awaiting higher-level providers). These reflect the 2021 National EMS Education Standards scope for each certification level.",
        guideline_ref: "2021 National EMS Education Standards — Scope of Practice by Certification Level",
        clinical_pearl: "D10 is increasingly replacing D50 in EMS because: (1) it can be given through a peripheral IV without the vein-damaging osmolarity of D50, (2) it allows more precise titration — give 100-250 mL and recheck, (3) tissue infiltration of D10 causes far less damage than D50. Many services now carry D10 exclusively."
      }
    ]
  }
];
