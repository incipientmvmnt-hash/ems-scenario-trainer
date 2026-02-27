const BATCH14 = [
  // ── nat-tra-08: Traumatic Brain Injury / Concussion Management ──
  {
    id: "nat-tra-08",
    title: "Traumatic Brain Injury — Fall from Height",
    dispatch: "Fall from scaffolding, approximately 12 feet. Patient conscious but confused.",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 34, sex: "M", cc: "Head injury with confusion after fall" },
    scene: "Construction site. Patient found sitting on ground, hard hat cracked. Coworkers state he fell from scaffolding and struck his head on a steel beam during descent. Small pool of blood under his head.",
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    vitals: { hr: 58, bp: "178/94", rr: 14, spo2: 97, gcs: 12, temp: null },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient's vitals show HR 58, BP 178/94, and irregular respirations. What does this triad suggest?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Cushing's triad — sign of rising intracranial pressure", correct: true },
          { text: "Neurogenic shock from spinal cord injury", correct: false },
          { text: "Normal stress response to pain", correct: false },
          { text: "Vagal response from nausea", correct: false }
        ],
        critical: true,
        explanation: "Cushing's triad (hypertension, bradycardia, irregular respirations) indicates rising ICP and impending herniation. This requires emergent intervention and rapid transport.",
        guideline_ref: "Brain Trauma Foundation — Guidelines for Prehospital Management of TBI, 3rd Ed.",
        clinical_pearl: "Cushing's triad is a LATE sign of rising ICP. By the time you see it, herniation may be imminent. Don't wait for the full triad to act — even two of three components should raise alarm."
      },
      {
        phase: "treatment",
        prompt: "Place the following TBI management steps in the correct order:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Maintain inline spinal stabilization",
          "Establish patent airway with jaw thrust",
          "Administer high-flow oxygen to maintain SpO2 ≥94%",
          "Elevate head of backboard 30 degrees",
          "Perform serial neurological assessments (GCS) every 5 minutes"
        ],
        correctOrder: [
          "Maintain inline spinal stabilization",
          "Establish patent airway with jaw thrust",
          "Administer high-flow oxygen to maintain SpO2 ≥94%",
          "Elevate head of backboard 30 degrees",
          "Perform serial neurological assessments (GCS) every 5 minutes"
        ],
        explanation: "C-spine stabilization and airway are simultaneous priorities, followed by oxygenation to prevent secondary brain injury. Head elevation reduces ICP. Serial GCS tracks deterioration.",
        guideline_ref: "Brain Trauma Foundation — Prehospital Guidelines for TBI; NAEMSP Position Statement on TBI",
        clinical_pearl: "Hypoxia (SpO2 <90%) doubles mortality in TBI. Preventing secondary brain injury through oxygenation and perfusion is the single most impactful prehospital intervention."
      },
      {
        phase: "treatment",
        prompt: "The patient's GCS drops from 12 to 7 en route and he is no longer protecting his airway. As a paramedic, which interventions are appropriate? (Select 3)",
        type: "mr",
        selectCount: 3,
        level_filter: "Paramedic",
        options: [
          { text: "Perform endotracheal intubation with in-line stabilization", correct: true },
          { text: "Initiate controlled ventilation at 10 breaths/min, targeting ETCO2 35-40 mmHg", correct: true },
          { text: "Hyperventilate aggressively at 20+ breaths/min to reduce ICP", correct: false },
          { text: "Administer 3% hypertonic saline if within scope and protocol", correct: true },
          { text: "Administer prophylactic mannitol for all head injuries", correct: false },
          { text: "Place patient in Trendelenburg position", correct: false }
        ],
        critical: true,
        explanation: "Secure the airway, ventilate at normal rates targeting normocapnia (ETCO2 35-40), and consider hypertonic saline for herniation signs. Hyperventilation causes cerebral vasoconstriction and worsens ischemia. Trendelenburg raises ICP.",
        guideline_ref: "Brain Trauma Foundation — Guidelines for Prehospital Management of TBI; ACS-TQIP TBI Guidelines",
        clinical_pearl: "Routine hyperventilation in TBI is one of the most harmful legacy practices in EMS. Target ETCO2 35-40 mmHg. Brief hyperventilation (ETCO2 30-35) is ONLY for active signs of herniation (posturing, blown pupil) as a temporizing bridge."
      }
    ]
  },

  // ── nat-tra-09: Pelvic Fracture with Hemodynamic Instability ──
  {
    id: "nat-tra-09",
    title: "Pelvic Fracture — Pedestrian vs. Vehicle",
    dispatch: "Pedestrian struck by vehicle at moderate speed. Patient down in roadway, conscious.",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 42, sex: "F", cc: "Severe hip and pelvic pain after being struck by car" },
    scene: "Suburban intersection. Patient lying supine in crosswalk. Vehicle damage to front bumper consistent with mid-body impact. Patient guarding pelvis, legs externally rotated. Bystanders holding traffic.",
    history: { pmh: "Hypertension", meds: "Lisinopril 10mg", allergies: "Sulfa" },
    vitals: { hr: 128, bp: "84/58", rr: 26, spo2: 95, gcs: 15, temp: null },
    questions: [
      {
        phase: "assessment",
        prompt: "During your rapid trauma assessment, how should you evaluate the pelvis?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Gently compress the pelvis once — if unstable or painful, do NOT repeat; apply a pelvic binder", correct: true },
          { text: "Perform firm rocking compression of the iliac crests multiple times to confirm instability", correct: false },
          { text: "Skip pelvic assessment entirely — mechanism alone is sufficient to apply a binder", correct: false },
          { text: "Have the patient attempt to stand to assess weight-bearing ability", correct: false }
        ],
        critical: true,
        explanation: "Pelvic assessment should be done ONCE with gentle compression. Repeated manipulation can dislodge clots and worsen hemorrhage. An unstable or painful pelvis on single exam is indication for binder application.",
        guideline_ref: "PHTLS 10th Edition — Musculoskeletal Trauma; NAEMSP Pelvic Binder Position Statement",
        clinical_pearl: "The pelvis can hold 2-3 liters of blood before external signs appear. A pelvic fracture in a hypotensive patient is a surgical emergency — your job is to bind it, prevent further blood loss, and transport rapidly."
      },
      {
        phase: "treatment",
        prompt: "Categorize the following interventions as appropriate for pelvic fracture management or contraindicated/harmful:",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["Appropriate", "Contraindicated/Harmful"],
        items: [
          "Apply commercial pelvic binder at level of greater trochanters",
          "Place patient in PASG/MAST trousers and inflate all compartments",
          "Bind knees and ankles together with cravats to internally rotate legs",
          "Insert urinary catheter to assess for urethral injury",
          "Administer IV TXA within protocol timeframe",
          "Log-roll patient repeatedly to assess posterior pelvis"
        ],
        correctCategories: {
          "Apply commercial pelvic binder at level of greater trochanters": "Appropriate",
          "Place patient in PASG/MAST trousers and inflate all compartments": "Contraindicated/Harmful",
          "Bind knees and ankles together with cravats to internally rotate legs": "Appropriate",
          "Insert urinary catheter to assess for urethral injury": "Contraindicated/Harmful",
          "Administer IV TXA within protocol timeframe": "Appropriate",
          "Log-roll patient repeatedly to assess posterior pelvis": "Contraindicated/Harmful"
        },
        explanation: "Pelvic binder at the trochanters and internal rotation reduce pelvic volume and tamponade bleeding. TXA addresses coagulopathy. MAST/PASG are outdated. Urinary catheterization is a hospital procedure. Repeated log-rolling disrupts clots.",
        guideline_ref: "PHTLS 10th Edition; NAEMSP/ACS-COT Pelvic Binder Guidelines; CRASH-2 Trial (TXA)",
        clinical_pearl: "No commercial binder available? A folded bedsheet centered at the greater trochanters and tied or clamped anteriorly is equally effective. Practice this skill — improvisation saves lives."
      },
      {
        phase: "transport",
        prompt: "With BP 84/58 and suspected pelvic hemorrhage, what is the target systolic BP for fluid resuscitation in this trauma patient?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "80-90 mmHg systolic (permissive hypotension)", correct: true },
          { text: "120 mmHg systolic (normotension)", correct: false },
          { text: "60 mmHg systolic (aggressive hypotension to minimize bleeding)", correct: false },
          { text: "Fluid resuscitation is contraindicated in pelvic fractures", correct: false }
        ],
        explanation: "Permissive hypotension (SBP 80-90 mmHg) balances perfusion with clot preservation. Aggressive fluid resuscitation dilutes clotting factors and can dislodge clots, worsening hemorrhage.",
        guideline_ref: "NAEMSP/ACS-COT Position Statement on Prehospital Fluid Resuscitation; PHTLS 10th Edition",
        clinical_pearl: "Permissive hypotension does NOT apply to TBI patients — they need SBP ≥90 mmHg for cerebral perfusion. Always consider combined injuries before choosing a BP target."
      }
    ]
  },

  // ── nat-tra-10: Crush Injury / Compartment Syndrome ──
  {
    id: "nat-tra-10",
    title: "Crush Injury — Building Collapse",
    dispatch: "Partial building collapse, one worker trapped under concrete debris. Fire rescue on scene extricating.",
    category: "Trauma",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 29, sex: "M", cc: "Bilateral lower extremities trapped under concrete for approximately 90 minutes" },
    scene: "Partially collapsed commercial building. Patient alert and talking, torso and arms free. Both legs pinned under a large concrete slab from mid-thigh down. Fire rescue preparing to lift debris. Patient reports his legs feel 'tingly and numb.'",
    history: { pmh: "None", meds: "None", allergies: "Penicillin" },
    vitals: { hr: 110, bp: "136/88", rr: 22, spo2: 98, gcs: 15, temp: null },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient has been trapped for 90 minutes. Which life-threatening complication must you prepare for BEFORE extrication?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Crush syndrome — hyperkalemia and cardiac arrest upon release of compression", correct: true },
          { text: "Fat embolism from long bone fractures", correct: false },
          { text: "Neurogenic shock from spinal cord compression", correct: false },
          { text: "Rhabdomyolysis is only a concern after 6+ hours of entrapment", correct: false }
        ],
        critical: true,
        explanation: "Crush syndrome occurs when compressed muscle releases potassium, myoglobin, and lactic acid into circulation upon extrication. Entrapment >60 minutes with significant muscle mass involvement requires pre-treatment before release.",
        guideline_ref: "NAEMSP Position Statement on Crush Injury; PHTLS 10th Edition — Environmental/Wilderness Chapter",
        clinical_pearl: "The most dangerous moment in a crush injury isn't the entrapment — it's the extrication. Patients who are talking and alert can arrest within minutes of debris removal due to a sudden potassium surge causing fatal dysrhythmias."
      },
      {
        phase: "treatment",
        prompt: "Place the following crush injury management steps in the correct order prior to and during extrication:",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Establish large-bore IV access in an unaffected extremity",
          "Begin aggressive normal saline bolus (1-2 L) BEFORE debris removal",
          "Place patient on continuous cardiac monitor",
          "Have calcium chloride and sodium bicarbonate drawn up and ready",
          "Coordinate with rescue team — begin slow, controlled debris removal",
          "Monitor 12-lead ECG for peaked T-waves and widened QRS"
        ],
        correctOrder: [
          "Establish large-bore IV access in an unaffected extremity",
          "Place patient on continuous cardiac monitor",
          "Begin aggressive normal saline bolus (1-2 L) BEFORE debris removal",
          "Have calcium chloride and sodium bicarbonate drawn up and ready",
          "Coordinate with rescue team — begin slow, controlled debris removal",
          "Monitor 12-lead ECG for peaked T-waves and widened QRS"
        ],
        explanation: "IV access and monitoring come first. Aggressive pre-hydration dilutes the anticipated potassium and myoglobin load. Calcium and bicarb must be ready before release. Controlled extrication allows monitoring. Post-release ECG monitors for hyperkalemia.",
        guideline_ref: "NAEMSP Crush Injury Guidelines; ITLS Advanced — Crush Syndrome Protocol",
        clinical_pearl: "Normal saline is preferred over lactated Ringer's in crush syndrome — LR contains potassium (~4 mEq/L), and the last thing a crush patient needs is more potassium. This is one of the few times NS is the clearly better choice."
      },
      {
        phase: "treatment",
        prompt: "After extrication, the cardiac monitor shows tall, peaked T-waves with heart rate of 48. What is your immediate pharmacological intervention?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Calcium chloride 1g IV push to stabilize the myocardium", correct: true },
          { text: "Atropine 1mg IV for the bradycardia", correct: false },
          { text: "Amiodarone 150mg IV for dysrhythmia prevention", correct: false },
          { text: "Epinephrine 1mg IV push", correct: false }
        ],
        critical: true,
        explanation: "Peaked T-waves with bradycardia indicate hyperkalemia. Calcium chloride stabilizes the cardiac membrane against the effects of potassium. Atropine does not address the underlying cause. Follow calcium with sodium bicarbonate and continued fluid resuscitation.",
        guideline_ref: "AHA ACLS — Hyperkalemia Management; NAEMSP Crush Injury Position Statement",
        clinical_pearl: "Calcium chloride contains 3x more elemental calcium than calcium gluconate (13.6 mEq vs 4.6 mEq per 10 mL). In a crashing hyperkalemia patient, calcium chloride via a large-bore IV is the faster stabilizer — but it will cause tissue necrosis if it infiltrates."
      }
    ]
  },

  // ── nat-tra-11: Geriatric Fall on Blood Thinners ──
  {
    id: "nat-tra-11",
    title: "Geriatric Fall — Anticoagulated Patient",
    dispatch: "Elderly person fallen at home, minor bleeding from head. Family requesting evaluation.",
    category: "Trauma",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 78, sex: "F", cc: "Fall at home, hit head on coffee table" },
    scene: "Well-kept living room. Patient sitting in recliner with a towel pressed to a 3cm laceration on her left temporal area. Small blood stain on carpet near coffee table. Daughter states patient tripped on rug approximately 30 minutes ago. Patient is alert, oriented, and conversational.",
    history: { pmh: "Atrial fibrillation, hypertension, DVT (2 years ago)", meds: "Apixaban (Eliquis) 5mg BID, metoprolol 50mg daily, amlodipine 5mg", allergies: "Codeine" },
    vitals: { hr: 72, bp: "158/82", rr: 16, spo2: 97, gcs: 15, temp: 98.2 },
    questions: [
      {
        phase: "assessment",
        prompt: "Review the patient's risk factors and determine which features make this a HIGH-risk geriatric head injury requiring emergent trauma center transport:",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "| Risk Factor | This Patient | High Risk? |\n|---|---|---|\n| Age | 78 years old | ? |\n| Anticoagulant use | Apixaban (Eliquis) 5mg BID | ? |\n| GCS | 15 — alert and oriented | ? |\n| Mechanism | Ground-level fall onto furniture | ? |\n| LOC / Amnesia | Denies loss of consciousness | ? |\n| Symptoms | Mild headache at laceration site only | ? |",
        options: [
          { text: "Age ≥65, anticoagulant use, and mechanism of head strike are all HIGH risk — this patient requires emergent transport to a facility with neurosurgical capability regardless of current GCS", correct: true },
          { text: "Only the anticoagulant use is concerning; age and mechanism are low-risk features", correct: false },
          { text: "GCS of 15 with no LOC means this is a low-risk presentation — patient can follow up with PCP", correct: false },
          { text: "All factors are low risk — ground-level falls rarely cause intracranial hemorrhage", correct: false }
        ],
        critical: true,
        explanation: "Age ≥65 AND anticoagulant use are independently high-risk features per CDC/ACEP guidelines. Together, they dramatically increase the probability of intracranial hemorrhage even from minor mechanisms. A normal GCS does NOT rule out evolving hemorrhage in anticoagulated patients.",
        guideline_ref: "CDC Guideline on Geriatric TBI; ACS-TQIP Geriatric Trauma Guidelines; ACEP Clinical Policy on Mild TBI",
        clinical_pearl: "Apixaban (Eliquis) and rivaroxaban (Xarelto) are direct factor Xa inhibitors that don't show up on standard coagulation tests (PT/INR). A 'normal' INR does NOT mean the patient isn't anticoagulated. Always ask about ALL blood thinners by name."
      },
      {
        phase: "assessment",
        prompt: "Which of the following findings during transport would suggest early signs of neurological deterioration? (Select 2)",
        type: "mr",
        selectCount: 2,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "New onset of repetitive questioning (repeating the same questions)", correct: true },
          { text: "Blood pressure increasing to 168/88", correct: false },
          { text: "Unilateral pupil becoming sluggish to react compared to the other", correct: true },
          { text: "Patient requesting something to drink", correct: false },
          { text: "Heart rate remaining at 72", correct: false }
        ],
        explanation: "Repetitive questioning indicates short-term memory impairment from increasing intracranial pressure. Unilateral pupil changes suggest uncal herniation compressing CN III. Subtle findings in a conversational patient are easy to miss without serial assessments.",
        guideline_ref: "Brain Trauma Foundation — Prehospital TBI Guidelines; CDC Geriatric TBI Guideline",
        clinical_pearl: "In geriatric patients on anticoagulants, the 'talk and die' phenomenon is real. Patients who are initially lucid can herniate hours later from slowly expanding subdural hematomas. Serial neuro checks every 5 minutes are essential — document GCS, pupils, and grip strength each time."
      },
      {
        phase: "treatment",
        prompt: "Categorize the following actions as 'Appropriate Prehospital Care' or 'Deferred to Hospital':",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["Appropriate Prehospital Care", "Deferred to Hospital"],
        items: [
          "Control scalp bleeding with direct pressure",
          "Perform serial GCS and pupil assessments every 5 minutes",
          "Administer reversal agent (andexanet alfa) for apixaban",
          "Obtain 12-lead ECG given history of atrial fibrillation",
          "Transport to facility with neurosurgical capability",
          "Withhold the patient's next dose of apixaban"
        ],
        correctCategories: {
          "Control scalp bleeding with direct pressure": "Appropriate Prehospital Care",
          "Perform serial GCS and pupil assessments every 5 minutes": "Appropriate Prehospital Care",
          "Administer reversal agent (andexanet alfa) for apixaban": "Deferred to Hospital",
          "Obtain 12-lead ECG given history of atrial fibrillation": "Appropriate Prehospital Care",
          "Transport to facility with neurosurgical capability": "Appropriate Prehospital Care",
          "Withhold the patient's next dose of apixaban": "Deferred to Hospital"
        },
        explanation: "Bleeding control, serial neuro monitoring, ECG, and trauma center transport are prehospital priorities. Reversal agents (andexanet alfa/Andexxa for factor Xa inhibitors) are hospital-based. Medication decisions are physician-directed.",
        guideline_ref: "ACS-TQIP Geriatric Trauma Guidelines; NAEMSP Geriatric Prehospital Care Position Statement",
        clinical_pearl: "Know the common anticoagulants and their reversal agents: warfarin → vitamin K + 4-factor PCC; dabigatran → idarucizumab (Praxbind); apixaban/rivaroxaban → andexanet alfa (Andexxa) or 4-factor PCC. You won't give these in the field, but communicating the specific drug to the receiving facility speeds reversal."
      }
    ]
  },

  // ── nat-tra-12: Motorcycle Crash with Degloving / Extremity Amputation ──
  {
    id: "nat-tra-12",
    title: "Motorcycle Crash — Traumatic Amputation",
    dispatch: "Motorcycle accident on highway, rider down. Bystanders report significant injuries to leg.",
    category: "Trauma",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 26, sex: "M", cc: "Motorcycle crash with severe left leg injury" },
    scene: "Highway shoulder. Motorcycle debris scattered over 50 feet. Patient supine on asphalt, helmet cracked but intact. Left leg has a traumatic amputation below the knee — the distal portion is located approximately 10 feet away. Right forearm has extensive road rash with degloving injury. Bystander applying pressure to the left leg stump with a t-shirt. Moderate ongoing hemorrhage.",
    history: { pmh: "None", meds: "None", allergies: "NKDA" },
    vitals: { hr: 136, bp: "88/62", rr: 28, spo2: 94, gcs: 14, temp: null },
    questions: [
      {
        phase: "treatment",
        prompt: "What is the FIRST priority intervention for this patient?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Apply a tourniquet proximal to the amputation site on the left leg", correct: true },
          { text: "Start two large-bore IVs and begin fluid resuscitation", correct: false },
          { text: "Locate and package the amputated limb segment", correct: false },
          { text: "Apply a cervical collar given the mechanism", correct: false }
        ],
        critical: true,
        explanation: "Life-threatening hemorrhage control is the top priority per the MARCH/XABC algorithm. A tourniquet should be applied immediately to the left leg proximal to the amputation. All other interventions follow hemorrhage control.",
        guideline_ref: "PHTLS 10th Edition — XABC; CoTCCC Tourniquet Guidelines; Stop the Bleed",
        clinical_pearl: "In traumatic amputation, the first tourniquet may not fully control bleeding — be prepared to apply a second tourniquet side-by-side proximal to the first. Document the TIME of application on the tourniquet itself."
      },
      {
        phase: "treatment",
        prompt: "How should the amputated limb segment be managed for potential reimplantation?",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Locate the amputated part — assign a second rescuer if available",
          "Rinse the part gently with normal saline or clean water to remove gross debris",
          "Wrap the part in saline-moistened sterile gauze",
          "Place the wrapped part in a sealed plastic bag",
          "Place the sealed bag on ice or in a cooled container — do NOT place part directly on ice"
        ],
        correctOrder: [
          "Locate the amputated part — assign a second rescuer if available",
          "Rinse the part gently with normal saline or clean water to remove gross debris",
          "Wrap the part in saline-moistened sterile gauze",
          "Place the wrapped part in a sealed plastic bag",
          "Place the sealed bag on ice or in a cooled container — do NOT place part directly on ice"
        ],
        explanation: "Proper packaging preserves the tissue for up to 18 hours (cooled) vs ~6 hours (warm). Direct ice contact causes frostbite and cell death, destroying reimplantation viability. The part should be cool, moist, and protected.",
        guideline_ref: "PHTLS 10th Edition — Musculoskeletal Trauma; ACS-COT Amputated Part Management",
        clinical_pearl: "Never say 'it can't be reattached' in the field. Microsurgical techniques have advanced dramatically. Even parts that look non-viable may have options. Package it properly and let the surgeons decide."
      },
      {
        phase: "treatment",
        prompt: "The right forearm has a circumferential degloving injury with the skin rolled back like a sleeve. Which statement about managing this injury is correct?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Gently replace the avulsed skin flap to its anatomical position, cover with moist sterile dressing, and splint the extremity", correct: true },
          { text: "Remove the degloved skin completely as it is non-viable tissue", correct: false },
          { text: "Apply a tourniquet to the forearm to prevent further blood loss from the degloving", correct: false },
          { text: "Leave the wound open and uncovered to allow air drying", correct: false }
        ],
        explanation: "Degloved skin should be gently repositioned as a biological dressing to protect underlying tissue. Moist dressing prevents desiccation. The skin flap may be partially viable and can serve as a graft. A tourniquet is inappropriate unless there is life-threatening arterial hemorrhage.",
        guideline_ref: "PHTLS 10th Edition — Soft Tissue Trauma; ITLS Advanced — Wound Management",
        clinical_pearl: "Degloving injuries are deceptively severe — the avulsed skin disrupts the blood supply to a wide area, and underlying structures (tendons, nerves, vessels) may be exposed and injured. These patients need a trauma center even if bleeding is controlled."
      },
      {
        phase: "transport",
        prompt: "This patient is tachycardic (136), hypotensive (88/62), and has had significant blood loss. Which is the most accurate assessment of his shock class and appropriate fluid strategy?",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        narrative: "Use the following clinical data to determine shock classification:\n\n| Parameter | Value |\n|-----------|-------|\n| Heart Rate | 136 |\n| Systolic BP | 88 mmHg |\n| Respiratory Rate | 28 |\n| Mental Status | GCS 14 (confused) |\n| Estimated Blood Loss | >30% (amputation + degloving) |",
        options: [
          { text: "Class III hemorrhagic shock — initiate permissive hypotension (SBP 80-90), give blood products if available, transport emergently to trauma center", correct: true },
          { text: "Class II hemorrhagic shock — 2L crystalloid bolus should restore normovolemia", correct: false },
          { text: "Class IV hemorrhagic shock — begin CPR preparations", correct: false },
          { text: "Class I hemorrhagic shock — observation and monitoring sufficient", correct: false }
        ],
        explanation: "Tachycardia >120, hypotension, tachypnea, confusion, and >30% blood loss characterize Class III shock. Current evidence favors permissive hypotension and blood products over large-volume crystalloid. Massive crystalloid worsens coagulopathy and outcomes.",
        guideline_ref: "ACS-ATLS 10th Edition — Shock Classification; NAEMSP Fluid Resuscitation Position Statement; PHTLS 10th Edition",
        clinical_pearl: "The 2-liter crystalloid bolus is falling out of favor. Current evidence shows that large-volume crystalloid resuscitation dilutes clotting factors, worsens acidosis, and increases mortality. If your service carries whole blood or packed RBCs, these are the gold standard for hemorrhagic shock."
      }
    ]
  },

  // ── nat-ob-07: Pediatric Drowning / Near-Drowning ──
  {
    id: "nat-ob-07",
    title: "Pediatric Near-Drowning — Secondary Drowning Concern",
    dispatch: "4-year-old pulled from swimming pool by parent. Child is awake and crying.",
    category: "OB/Peds/Neonatal",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 4, sex: "F", cc: "Submersion in pool, now awake and coughing" },
    scene: "Backyard pool. Child wrapped in towel on pool deck, crying and clinging to mother. Mother states child was found face-down in pool for 'maybe 30 seconds' before being pulled out. Child vomited a small amount of water and has been coughing intermittently since. No CPR was performed — child was responsive immediately.",
    history: { pmh: "None, up to date on vaccinations", meds: "None", allergies: "NKDA" },
    vitals: { hr: 132, bp: "94/58", rr: 28, spo2: 93, gcs: 15, temp: 97.4 },
    questions: [
      {
        phase: "assessment",
        prompt: "The child is conscious with GCS 15 but has SpO2 of 93% and intermittent coughing. Which findings would indicate this child needs continued monitoring and transport despite appearing 'fine'? (Select 3)",
        type: "mr",
        selectCount: 3,
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "SpO2 below 95% on room air after submersion event", correct: true },
          { text: "Persistent cough more than 10 minutes after event", correct: true },
          { text: "Heart rate of 132 — normal for a crying 4-year-old", correct: false },
          { text: "Crackles or rhonchi on lung auscultation", correct: true },
          { text: "Child is crying — indicates adequate oxygenation and no concern", correct: false },
          { text: "Temperature of 97.4°F — mild hypothermia from pool immersion", correct: false }
        ],
        explanation: "SpO2 <95%, persistent cough, and adventitious lung sounds all indicate pulmonary water aspiration and potential for delayed respiratory deterioration. Even brief submersion can cause surfactant washout and progressive respiratory failure hours later.",
        guideline_ref: "AHA/ILCOR Drowning Resuscitation Guidelines; Wilderness Medical Society Drowning Guidelines; AAP Drowning Prevention Policy",
        clinical_pearl: "The terms 'dry drowning' and 'secondary drowning' are NOT endorsed by the medical community — they create confusion. The correct approach: ANY child with submersion + respiratory symptoms (cough, tachypnea, low SpO2) needs ED evaluation and observation, regardless of how 'well' they appear."
      },
      {
        phase: "treatment",
        prompt: "What is the appropriate oxygen delivery and monitoring strategy for this child?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Blow-by or pediatric non-rebreather at 10-15 LPM to maintain SpO2 ≥94%; reassess every 5 minutes", correct: true },
          { text: "No oxygen needed — SpO2 of 93% is normal for a pediatric patient", correct: false },
          { text: "Immediate intubation to protect the airway from further aspiration", correct: false },
          { text: "CPAP at 10 cmH2O for all pediatric submersion patients", correct: false }
        ],
        explanation: "Supplemental oxygen to maintain SpO2 ≥94% is appropriate. In a conscious, crying child, use the least invasive method the child will tolerate (blow-by if resisting a mask). Intubation is not indicated in a conscious child with adequate ventilation. CPAP may be considered in worsening respiratory distress but is not first-line for this presentation.",
        guideline_ref: "AHA PALS — Drowning Algorithm; ILCOR 2020 Drowning Resuscitation Guidelines",
        clinical_pearl: "A scared, crying 4-year-old will fight a face mask. Blow-by oxygen (holding the mask near the face) is an underappreciated technique in pediatrics. A parent holding the mask as a 'game' often works better than a provider forcing it on. Cooperation > confrontation."
      },
      {
        phase: "transport",
        prompt: "During transport, the child's SpO2 drops to 88% and respiratory rate increases to 36 with visible intercostal retractions. Place the following escalation steps in order:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Switch to properly-sized pediatric non-rebreather mask at 15 LPM",
          "Auscultate lung sounds bilaterally for worsening crackles or wheezing",
          "Consider CPAP at 5-10 cmH2O if child is cooperative and equipment is available",
          "Establish vascular access (IV or IO) and prepare for potential respiratory failure",
          "Notify receiving facility of deteriorating pediatric drowning patient"
        ],
        correctOrder: [
          "Switch to properly-sized pediatric non-rebreather mask at 15 LPM",
          "Auscultate lung sounds bilaterally for worsening crackles or wheezing",
          "Consider CPAP at 5-10 cmH2O if child is cooperative and equipment is available",
          "Establish vascular access (IV or IO) and prepare for potential respiratory failure",
          "Notify receiving facility of deteriorating pediatric drowning patient"
        ],
        explanation: "Escalate oxygen delivery first, then reassess lung sounds to guide further treatment. CPAP provides positive-pressure recruitment of fluid-filled alveoli. Vascular access prepares for further deterioration. Early hospital notification allows them to prepare for a potentially critically ill pediatric patient.",
        guideline_ref: "AHA PALS 2020; ILCOR Drowning Guidelines; ENA/NAEMSP Pediatric Emergency Care",
        clinical_pearl: "Drowning victims deteriorate because aspirated water washes out surfactant, causing progressive alveolar collapse. This can take 2-6 hours to fully manifest. A child who looks OK at the poolside can be in full respiratory failure by the time you reach the ED. This is why ALL symptomatic submersion patients need hospital observation — even if they 'improve' en route."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { BATCH14 };
