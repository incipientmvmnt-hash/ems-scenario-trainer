const BATCH7 = [
  // ============================================================
  // 1. nat-env-02 — Hypothermia
  // ============================================================
  {
    id: "nat-env-02",
    title: "Hypothermia — Cold Exposure",
    dispatch: "70-year-old male, found outside, cold, confused",
    category: "Environmental",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 70, sex: "Male", cc: "Found outside, cold and confused" },
    scene: "Winter evening, patient found on a park bench by a passerby. Temperature is 25°F (-4°C). Patient is wearing a light jacket and no gloves. He is shivering intermittently and appears confused. No signs of trauma. An empty bottle is next to him.",
    history: {
      pmh: "Hypertension, type 2 diabetes",
      meds: "Metoprolol, metformin",
      allergies: "No known allergies"
    },
    vitals: { hr: 48, bp: "90/60", rr: 10, spo2: 91, gcs: 12, temp: "86°F (30°C)" },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "Your patient is found outside in freezing weather, shivering intermittently with an altered mental status and a heart rate of 48. What is the MOST important initial intervention?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You arrive and find the patient sitting on a bench. He opens his eyes to your voice but is confused about where he is and what day it is. His skin is cold to the touch and pale. Shivering comes and goes.",
        clinical_pearl: "Handle hypothermic patients gently — rough movement can trigger cardiac dysrhythmias including ventricular fibrillation. Bradycardia in hypothermia is a physiologic response and should not be treated with aggressive interventions until rewarming is underway.",
        options: [
          { text: "Remove wet/cold clothing and prevent further heat loss", correct: true, explanation: "Removing the patient from the cold environment and preventing further heat loss is the priority. Passive and active rewarming should follow.", guideline_ref: "NAEMSP Hypothermia Guidelines; AHA ECC 2020 — Hypothermia Management" },
          { text: "Administer atropine 0.5 mg IV for the bradycardia", correct: false, critical: true, explanation: "Atropine is generally ineffective in hypothermic bradycardia and may provoke dysrhythmias. The bradycardia is a physiologic response to cold and will improve with rewarming.", guideline_ref: "AHA ACLS 2020 — Hypothermia Algorithm" },
          { text: "Begin vigorous chest compressions", correct: false, explanation: "The patient has a pulse. CPR is not indicated. Unnecessary chest manipulation in a hypothermic patient could trigger V-fib.", guideline_ref: "AHA BLS/ACLS 2020" },
          { text: "Apply high-flow oxygen via non-rebreather and transport immediately without any rewarming", correct: false, explanation: "While oxygen is appropriate, failing to initiate rewarming and prevent further heat loss is a critical omission. Rewarming measures should begin in the field.", guideline_ref: "NAEMSP Hypothermia Guidelines" }
        ]
      },
      {
        phase: "clinical-reasoning",
        prompt: "Categorize the following core body temperatures into the correct hypothermia severity classification.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have removed the patient's cold clothing and wrapped him in blankets. You are en route to the hospital and reviewing hypothermia classifications.",
        clinical_pearl: "Shivering typically stops below 86°F (30°C), which is a sign of worsening hypothermia — not improvement. The absence of shivering in a cold patient is ominous.",
        categories: ["Mild (90–95°F / 32–35°C)", "Moderate (82–90°F / 28–32°C)", "Severe (Below 82°F / Below 28°C)"],
        items: [
          { text: "93°F — shivering, alert and oriented", category: "Mild (90–95°F / 32–35°C)" },
          { text: "88°F — shivering has stopped, confused", category: "Moderate (82–90°F / 28–32°C)" },
          { text: "84°F — lethargic, bradycardic, no shivering", category: "Moderate (82–90°F / 28–32°C)" },
          { text: "78°F — unresponsive, barely detectable pulse", category: "Severe (Below 82°F / Below 28°C)" },
          { text: "91°F — vigorous shivering, mild confusion", category: "Mild (90–95°F / 32–35°C)" },
          { text: "75°F — fixed dilated pupils, no detectable pulse", category: "Severe (Below 82°F / Below 28°C)" }
        ],
        explanation: "Hypothermia is classified by core temperature: Mild (90–95°F) presents with shivering and altered mentation; Moderate (82–90°F) shows loss of shivering, worsening confusion, and bradycardia; Severe (below 82°F) presents with unresponsiveness, absent reflexes, and risk of cardiac arrest.",
        guideline_ref: "AHA ECC 2020 — Accidental Hypothermia; Wilderness Medical Society CPG for Hypothermia"
      },
      {
        phase: "treatment",
        prompt: "Place the following steps for managing this hypothermic patient in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "Your partner asks you to walk through the management steps for this patient as you continue transport.",
        items: [
          { text: "Ensure scene safety and move patient to a warm environment" },
          { text: "Gently remove cold/wet clothing" },
          { text: "Handle the patient gently — avoid rough or jarring movements" },
          { text: "Apply warm blankets, heat packs to trunk (axillae, groin, neck)" },
          { text: "Administer warmed, humidified oxygen if available" },
          { text: "Monitor cardiac rhythm continuously during transport" },
          { text: "Transport to an appropriate facility for active core rewarming" }
        ],
        explanation: "Hypothermia management follows a stepwise approach: remove from the cold, prevent further heat loss, gently rewarm, support oxygenation, and transport. Gentle handling throughout is critical to prevent dysrhythmias.",
        guideline_ref: "AHA ECC 2020 — Hypothermia; NAEMSP Hypothermia Guidelines; Wilderness Medical Society CPG"
      },
      {
        phase: "treatment",
        prompt: "Which of the following are appropriate rewarming techniques for this patient in the prehospital setting? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You are in the back of the ambulance with the patient wrapped in blankets. His shivering has stopped and GCS remains 12.",
        vitals_update: { hr: 44, bp: "88/58", rr: 9, spo2: 90, gcs: 12, temp: "85°F (29.4°C)" },
        clinical_pearl: "Never assume a hypothermic patient is dead. The adage 'no one is dead until they are warm and dead' reflects that full neurologic recovery is possible even after prolonged hypothermic cardiac arrest.",
        options: [
          { text: "Apply heat packs to the axillae, groin, and neck (over clothing/barrier)", correct: true, explanation: "Applying heat to areas near major blood vessels promotes core rewarming without risking burns.", guideline_ref: "AHA ECC 2020; Wilderness Medical Society CPG" },
          { text: "Wrap in blankets and a vapor barrier (e.g., plastic sheet)", correct: true, explanation: "A vapor barrier prevents evaporative heat loss and traps warmth from blankets and heat packs.", guideline_ref: "Wilderness Medical Society CPG for Hypothermia" },
          { text: "Administer warmed IV fluids (AEMT/Paramedic level)", correct: true, explanation: "Warmed IV normal saline (40–42°C) helps prevent further core temperature drop from room-temperature fluids. Available at AEMT/Paramedic scope.", guideline_ref: "AHA ECC 2020 — Hypothermia; NAEMSP Guidelines" },
          { text: "Immerse the patient in hot water in the ambulance", correct: false, explanation: "Hot water immersion is not practical in the prehospital setting and risks burns, afterdrop, and cardiovascular collapse from peripheral vasodilation.", guideline_ref: "AHA ECC 2020" },
          { text: "Vigorously rub the patient's extremities to restore circulation", correct: false, critical: true, explanation: "Rubbing extremities can cause tissue damage and may push cold peripheral blood to the core, worsening hypothermia and risking dysrhythmias (afterdrop).", guideline_ref: "AHA ECC 2020; Wilderness Medical Society CPG" },
          { text: "Give the patient alcohol to warm up", correct: false, critical: true, explanation: "Alcohol causes peripheral vasodilation, accelerating heat loss, and impairs the shivering response. It worsens hypothermia.", guideline_ref: "Wilderness Medical Society CPG" }
        ]
      }
    ]
  },

  // ============================================================
  // 2. nat-env-03 — Snake Bite Envenomation
  // ============================================================
  {
    id: "nat-env-03",
    title: "Envenomation — Snake Bite",
    dispatch: "45-year-old male, bitten by snake on hiking trail",
    category: "Environmental",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 45, sex: "Male", cc: "Bitten on ankle while hiking" },
    scene: "Warm afternoon on a rocky hiking trail. Patient is sitting on a rock holding his right ankle. Two small puncture wounds are visible on the lateral ankle with mild swelling and redness. He states a snake struck him about 15 minutes ago. He did not capture or kill the snake. Bystanders describe a thick-bodied snake with a triangular head.",
    history: {
      pmh: "None",
      meds: "Daily multivitamin",
      allergies: "No known allergies"
    },
    vitals: { hr: 102, bp: "134/86", rr: 20, spo2: 98, gcs: 15, temp: "98.6°F (37°C)" },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "After ensuring scene safety, what is the MOST appropriate initial prehospital intervention for this patient's bite wound?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is anxious but alert. You see two puncture marks on the right lateral ankle with localized swelling extending about 2 cm around the wound. He rates his pain 6/10.",
        clinical_pearl: "Mark the leading edge of swelling with a pen and note the time. Serial measurements help the receiving facility gauge whether envenomation is progressing.",
        options: [
          { text: "Immobilize the affected extremity, keep it at or slightly below heart level, remove jewelry, and transport", correct: true, explanation: "Immobilization slows lymphatic spread of venom. Removing jewelry prevents complications from progressive swelling. Keep the extremity at or slightly below heart level and transport promptly.", guideline_ref: "AHA First Aid 2020; Wilderness Medical Society CPG — Snake Envenomation" },
          { text: "Apply a tourniquet proximal to the bite to prevent venom spread", correct: false, critical: true, explanation: "Tourniquets concentrate venom in the limb, increasing local tissue destruction and risking limb loss. They are contraindicated for North American pit viper bites.", guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; AHA First Aid 2020" },
          { text: "Cut the wound and attempt to suck out the venom", correct: false, critical: true, explanation: "Incision and suction are ineffective at removing venom and cause additional tissue damage and infection risk. This is a harmful myth.", guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation" },
          { text: "Apply ice directly to the bite site to slow venom absorption", correct: false, explanation: "Ice application can worsen tissue damage by causing vasoconstriction and local cold injury on top of the envenomation. It is not recommended.", guideline_ref: "AHA First Aid 2020; Wilderness Medical Society CPG" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of prehospital snake bite management in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You have assessed the patient and are preparing to manage and transport. Your partner is getting the stretcher.",
        items: [
          { text: "Ensure the scene is safe — move away from the snake's location" },
          { text: "Calm and reassure the patient; limit physical activity" },
          { text: "Remove rings, watches, and tight clothing from the affected extremity" },
          { text: "Immobilize the extremity with a splint; keep at or slightly below heart level" },
          { text: "Mark the edge of swelling and note the time" },
          { text: "Transport to a facility capable of administering antivenom" }
        ],
        explanation: "Snake bite management prioritizes safety, calming the patient (elevated heart rate increases venom distribution), removing constrictive items before swelling worsens, immobilization, tracking progression, and rapid transport to definitive care (antivenom).",
        guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; AHA First Aid 2020"
      },
      {
        phase: "clinical-reasoning",
        prompt: "Categorize the following actions into appropriate (DO) and inappropriate (DON'T) for prehospital snake bite management.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "While transporting, your new partner asks about common myths versus evidence-based practices for snake bites.",
        clinical_pearl: "Attempting to capture or kill the snake delays care and risks additional bites. A photo from a safe distance may help with identification, but it should never delay transport.",
        categories: ["DO — Appropriate Actions", "DON'T — Harmful or Ineffective"],
        items: [
          { text: "Immobilize the affected limb", category: "DO — Appropriate Actions" },
          { text: "Remove jewelry and constrictive clothing", category: "DO — Appropriate Actions" },
          { text: "Keep the patient calm and still", category: "DO — Appropriate Actions" },
          { text: "Mark and monitor swelling progression", category: "DO — Appropriate Actions" },
          { text: "Apply a constriction band or tourniquet", category: "DON'T — Harmful or Ineffective" },
          { text: "Apply ice or a cold pack to the bite", category: "DON'T — Harmful or Ineffective" },
          { text: "Cut the wound and suction the venom", category: "DON'T — Harmful or Ineffective" },
          { text: "Apply electric shock to the bite site", category: "DON'T — Harmful or Ineffective" },
          { text: "Give the patient aspirin for pain", category: "DON'T — Harmful or Ineffective" }
        ],
        explanation: "Evidence-based snake bite care focuses on immobilization, swelling monitoring, and rapid transport. Many traditional remedies (tourniquet, incision/suction, ice, electric shock) are harmful. Aspirin and NSAIDs are avoided because pit viper venom can cause coagulopathy, and these drugs impair clotting.",
        guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; AHA First Aid 2020"
      }
    ]
  },

  // ============================================================
  // 3. nat-env-04 — Electrical Injury
  // ============================================================
  {
    id: "nat-env-04",
    title: "Electrical Injury with Fall",
    dispatch: "28-year-old male, electrical injury at construction site, fell",
    category: "Environmental",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 28, sex: "Male", cc: "Shocked and fell from scaffolding" },
    scene: "Active construction site. Patient is supine on the ground approximately 12 feet below scaffolding. Co-workers state the power has been shut off. Patient is responsive to pain, with burns visible on his right hand and left foot. Hard hat is cracked. C-spine precautions have not been initiated.",
    history: {
      pmh: "None",
      meds: "None",
      allergies: "No known allergies"
    },
    vitals: { hr: 118, bp: "100/68", rr: 24, spo2: 95, gcs: 10, temp: "98.4°F (36.9°C)" },
    questions: [
      {
        phase: "initial-assessment",
        prompt: "What is the MOST critical first action upon arriving at this patient's side?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You arrive and confirm the power source has been disconnected. The patient is on the ground moaning. You see entry and exit burns and evidence of a fall from height.",
        clinical_pearl: "Electrical injury patients often have injuries far worse than what is visible externally. The current travels through the body along the path of least resistance, damaging muscles, nerves, and blood vessels internally. Always assume the worst.",
        options: [
          { text: "Establish manual in-line cervical spine stabilization", correct: true, explanation: "This patient has both an electrical injury and a fall from height (~12 feet). Spinal injury must be assumed. Manual C-spine stabilization takes priority after confirming the scene is safe and the power source is off.", guideline_ref: "NAEMSP/ACS Position Statement on Spinal Motion Restriction; PHTLS 9th Edition — Electrical Injuries" },
          { text: "Immediately assess and treat the burn wounds", correct: false, explanation: "While burns need attention, spinal stabilization is the priority given the mechanism (fall from height). Burns are addressed after life threats and spinal precautions.", guideline_ref: "PHTLS 9th Edition" },
          { text: "Perform a 12-lead ECG before any other intervention", correct: false, explanation: "Cardiac monitoring is important for electrical injuries but does not precede airway management, C-spine stabilization, and primary survey in a trauma patient.", guideline_ref: "AHA ACLS 2020; PHTLS 9th Edition" },
          { text: "Cool the burns with running water for 20 minutes", correct: false, explanation: "Burn cooling is a secondary concern. Prolonged cooling in a patient with altered consciousness and potential spinal injury can cause hypothermia and delay critical interventions.", guideline_ref: "ABA Burn Referral Criteria; PHTLS 9th Edition" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are appropriate considerations for this electrical injury patient? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You have stabilized the cervical spine, opened the airway with a jaw thrust, and are continuing your assessment. The patient withdraws from pain but does not follow commands. You see charred tissue on the right palm and a smaller burn on the left sole.",
        vitals_update: { hr: 122, bp: "96/64", rr: 26, spo2: 94, gcs: 9 },
        clinical_pearl: "Electrical burns often have small external wounds but massive internal destruction — like an iceberg. The entry and exit wounds represent only a fraction of the damage. Myoglobin released from destroyed muscle can cause acute kidney failure.",
        options: [
          { text: "Continuous cardiac monitoring — electrical injury can cause dysrhythmias", correct: true, explanation: "Electrical current passing through the body can disrupt cardiac conduction, causing dysrhythmias ranging from sinus tachycardia to ventricular fibrillation. Continuous monitoring is essential.", guideline_ref: "AHA ACLS 2020 — Electrical Injuries; PHTLS 9th Edition" },
          { text: "Assume internal injuries are more severe than external burns suggest", correct: true, explanation: "Electrical injuries cause deep tissue damage along the current's path. External burns drastically underrepresent the degree of internal injury to muscles, nerves, and vessels.", guideline_ref: "PHTLS 9th Edition — Electrical Injuries; ABA Burn Referral Criteria" },
          { text: "Spinal motion restriction due to the fall mechanism", correct: true, explanation: "A 12-foot fall is a significant mechanism. Combined with altered mental status, spinal motion restriction is clearly indicated.", guideline_ref: "NAEMSP/ACS Spinal Motion Restriction; PHTLS 9th Edition" },
          { text: "Aggressive IV fluid resuscitation (AEMT/Paramedic scope)", correct: true, explanation: "Electrical burns cause significant internal tissue destruction and rhabdomyolysis. Aggressive fluid resuscitation helps prevent renal failure from myoglobin. This exceeds EMT scope but is critical at AEMT/Paramedic level.", guideline_ref: "ABA Burn Guidelines; PHTLS 9th Edition" },
          { text: "Cover burns with dry sterile dressings", correct: true, explanation: "After addressing life threats, burns should be covered with dry sterile dressings to prevent contamination and further heat loss.", guideline_ref: "PHTLS 9th Edition; ABA Burn Guidelines" },
          { text: "The visible burns are small, so this is likely a minor injury", correct: false, critical: true, explanation: "This is a dangerous assumption. Electrical injuries cause severe internal damage disproportionate to external findings. Small entry/exit wounds can mask life-threatening muscle destruction, cardiac damage, and internal hemorrhage.", guideline_ref: "PHTLS 9th Edition — Electrical Injuries" }
        ]
      },
      {
        phase: "transport",
        prompt: "Place the following management priorities for this patient in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "You are packaging the patient for transport. Your crew asks for a summary of priorities.",
        items: [
          { text: "Confirm scene safety — ensure power source is disconnected" },
          { text: "Establish manual in-line cervical spine stabilization" },
          { text: "Manage airway with jaw-thrust maneuver; provide high-flow oxygen" },
          { text: "Assess circulation — control any hemorrhage, assess pulses distal to burns" },
          { text: "Apply cardiac monitor; initiate continuous ECG monitoring" },
          { text: "Cover burns with dry sterile dressings" },
          { text: "Initiate IV access and fluid resuscitation (AEMT/Paramedic)" },
          { text: "Rapidly transport to a burn/trauma center" }
        ],
        explanation: "Electrical injury management follows a trauma-based approach: scene safety first (power off), then C-spine, airway, breathing, circulation, cardiac monitoring, wound care, fluids, and transport to an appropriate center. These patients require burn center and/or trauma center care.",
        guideline_ref: "PHTLS 9th Edition — Electrical Injuries; ABA Burn Referral Criteria; AHA ACLS 2020"
      }
    ]
  },

  // ============================================================
  // 4. nat-ops-02 — Hazmat Awareness
  // ============================================================
  {
    id: "nat-ops-02",
    title: "Hazmat Awareness — Chemical Spill",
    dispatch: "Chemical spill on highway, multiple people feeling sick",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: "Multiple", sex: "Multiple", cc: "Multiple patients with breathing difficulty and nausea near chemical spill" },
    scene: "Highway incident involving an overturned tanker truck. A yellow-green cloud is visible drifting from the truck. Several bystanders and motorists are coughing and moving away from the area. The truck has a placard but you cannot read it from your current distance. Fire department is en route, ETA 8 minutes. At least 6 people appear affected.",
    history: {
      pmh: "Unknown — multiple patients",
      meds: "Unknown",
      allergies: "Unknown"
    },
    vitals: { hr: "Varies", bp: "Varies", rr: "Varies", spo2: "Varies", gcs: "Varies", temp: "Varies" },
    questions: [
      {
        phase: "scene-size-up",
        prompt: "You arrive first on scene and see a visible chemical cloud. What is your MOST appropriate immediate action?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You are the first EMS unit on scene. You can see a yellow-green cloud coming from the overturned tanker about 200 yards ahead. People are running toward you from the direction of the spill. Your windows are up and the AC is on recirculate.",
        clinical_pearl: "EMS providers at the Awareness level should NEVER enter a hazmat scene to perform rescue. Your role is to recognize, protect yourself, isolate the area, and call for specialized resources. Dead rescuers cannot help anyone.",
        options: [
          { text: "Stop at a safe distance upwind/uphill, do NOT approach, and call for hazmat team resources", correct: true, explanation: "At the Awareness level, the correct action is to recognize the hazard, keep a safe distance (upwind and uphill), deny entry, and request hazmat-trained responders. Never enter the hot zone without proper PPE and training.", guideline_ref: "OSHA 29 CFR 1910.120 — Hazmat Awareness Level; ERG (Emergency Response Guidebook)" },
          { text: "Drive closer to read the placard number for identification", correct: false, critical: true, explanation: "Approaching an unknown chemical release without proper PPE is extremely dangerous. Use binoculars or wait for information from a safe distance. The visible cloud indicates a significant release.", guideline_ref: "OSHA 29 CFR 1910.120; ERG — Initial Isolation Distances" },
          { text: "Put on your N95 mask and enter the scene to begin triage", correct: false, critical: true, explanation: "An N95 provides no protection against chemical vapors or gases. Entering a hazmat scene without appropriate chemical PPE (Level A or B suit with SCBA) is life-threatening.", guideline_ref: "OSHA 29 CFR 1910.120; NIOSH PPE Guidelines" },
          { text: "Begin treating the patients who are walking toward you without establishing any zones", correct: false, explanation: "Patients walking out of the hot zone may be contaminated and require decontamination before treatment. Treating contaminated patients without decon can expose you and spread contamination.", guideline_ref: "OSHA 29 CFR 1910.120; FIRESCOPE ICS-HM" }
        ]
      },
      {
        phase: "scene-management",
        prompt: "Place the following hazmat response steps in the correct order for an EMS crew at the Awareness level.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You have stopped your unit upwind at a safe distance. Dispatch confirms fire/hazmat is en route. Several patients are walking toward your position coughing.",
        items: [
          { text: "Recognize the presence of a hazardous material (visual clues, placards, cloud)" },
          { text: "Establish a safe position upwind, uphill, and at a safe distance" },
          { text: "Request hazmat team, fire, and additional EMS resources through dispatch" },
          { text: "Isolate the area — deny entry to bystanders and other responders" },
          { text: "Attempt to identify the substance using binoculars, ERG, or information from the driver" },
          { text: "Direct ambulatory patients to move upwind and await decontamination" },
          { text: "Establish a treatment area in the cold zone for decontaminated patients" }
        ],
        explanation: "The Awareness-level response follows: Recognize → Protect yourself → Notify → Isolate → Identify (from a distance) → Direct patients away from the hazard → Prepare for treatment only after decontamination. Never enter the hot zone.",
        guideline_ref: "OSHA 29 CFR 1910.120 — Awareness Level Competencies; ERG; FIRESCOPE ICS"
      },
      {
        phase: "clinical-reasoning",
        prompt: "Categorize the following activities into the correct hazmat zone where they should occur.",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The hazmat team has arrived and is establishing zones. The incident commander asks you to help brief incoming EMS crews on the zone structure.",
        categories: ["Hot Zone (Exclusion Zone)", "Warm Zone (Contamination Reduction)", "Cold Zone (Support Zone)"],
        items: [
          { text: "Hazmat technicians in Level A suits stop the chemical leak", category: "Hot Zone (Exclusion Zone)" },
          { text: "Rescue of non-ambulatory patients from the spill area", category: "Hot Zone (Exclusion Zone)" },
          { text: "Gross decontamination — initial wash-down of contaminated patients", category: "Warm Zone (Contamination Reduction)" },
          { text: "Removal and bagging of contaminated clothing", category: "Warm Zone (Contamination Reduction)" },
          { text: "Secondary decontamination — thorough washing before entering cold zone", category: "Warm Zone (Contamination Reduction)" },
          { text: "Full patient assessment, triage, and medical treatment by EMS", category: "Cold Zone (Support Zone)" },
          { text: "EMS command post and staging area", category: "Cold Zone (Support Zone)" },
          { text: "Loading patients into ambulances for transport", category: "Cold Zone (Support Zone)" }
        ],
        explanation: "Hazmat zones separate the dangerous area (Hot) from the decontamination corridor (Warm) and the clean treatment/support area (Cold). EMS without hazmat PPE operates only in the Cold Zone. Patients must be decontaminated in the Warm Zone before receiving medical care in the Cold Zone.",
        guideline_ref: "OSHA 29 CFR 1910.120; FIRESCOPE ICS-HM; NFPA 472/473"
      },
      {
        phase: "clinical-reasoning",
        prompt: "Match the following hazmat reference resources to their correct description and primary use.",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "While waiting for the hazmat team, your partner asks about the different resources available for identifying hazardous materials.",
        columns: ["Resource", "Description"],
        rows: [
          { Resource: "ERG (Emergency Response Guidebook)", Description: "DOT guide with initial isolation distances, ID numbers, and first-response actions for hazmat incidents" },
          { Resource: "SDS (Safety Data Sheet)", Description: "Manufacturer-provided document with detailed chemical properties, health hazards, and first-aid measures" },
          { Resource: "CHEMTREC (1-800-424-9300)", Description: "24/7 emergency hotline providing real-time chemical information and response guidance" },
          { Resource: "UN/DOT Placards", Description: "Diamond-shaped signs on vehicles indicating hazard class, division, and 4-digit ID number" },
          { Resource: "NIOSH Pocket Guide", Description: "Reference for occupational chemical hazards including exposure limits and PPE recommendations" }
        ],
        explanation: "Multiple resources exist for hazmat identification and response. The ERG is the most commonly used initial field reference. SDS sheets provide detailed information if available. CHEMTREC offers 24/7 expert guidance. Placards provide immediate visual clues about hazard class. The NIOSH Pocket Guide is useful for detailed exposure information.",
        guideline_ref: "OSHA 29 CFR 1910.120; DOT ERG 2024; NFPA 472"
      }
    ]
  },

  // ============================================================
  // 5. nat-ops-03 — Air Medical Activation / Transport Decision
  // ============================================================
  {
    id: "nat-ops-03",
    title: "Air Medical Activation — Transport Decision",
    dispatch: "Motor vehicle crash, rural highway, person trapped",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 32, sex: "Female", cc: "Trapped in vehicle after high-speed crash" },
    scene: "Two-vehicle head-on collision on a rural two-lane highway. One patient is trapped in a heavily deformed sedan. Fire/rescue is on scene beginning extrication, estimating 15–20 minutes. Nearest community hospital is 25 minutes by ground. Nearest Level I trauma center is 40 minutes by ground or approximately 18 minutes by helicopter (with an estimated 12-minute activation/launch time). Patient is responsive to voice with obvious deformity of the left femur and significant steering wheel damage to the dashboard.",
    history: {
      pmh: "Unknown — patient is not fully responsive",
      meds: "Unknown",
      allergies: "Unknown"
    },
    vitals: { hr: 128, bp: "86/58", rr: 28, spo2: 93, gcs: 11, temp: "97.8°F (36.6°C)" },
    questions: [
      {
        phase: "transport-decision",
        prompt: "Based on this patient's presentation and the available transport options, what is the MOST appropriate transport decision?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "Extrication is ongoing. The patient moans and opens her eyes when you call her name. Her left thigh is visibly angulated. The steering column is displaced into the cabin. She has a weak, rapid radial pulse. Her skin is pale, cool, and diaphoretic.",
        clinical_pearl: "When calculating air medical benefit, consider total time: activation + flight + scene time vs. ground transport time. The 'golden hour' concept emphasizes that critically injured trauma patients benefit from definitive surgical care as soon as possible.",
        options: [
          { text: "Request air medical transport to the Level I trauma center", correct: true, explanation: "This patient meets multiple air medical activation criteria: prolonged extrication (>20 min), hemodynamic instability (hypotension, tachycardia), altered mental status, high-energy mechanism, and prolonged ground transport to a trauma center. Air transport (~30 min total: 12-min activation + 18-min flight) gets her to definitive surgical care faster than the 40-min ground transport.", guideline_ref: "NAEMSP/ACS Air Medical Activation Criteria; ACS Committee on Trauma — Resources for Optimal Care of the Injured Patient" },
          { text: "Transport by ground to the community hospital 25 minutes away", correct: false, explanation: "While closer, a community hospital may lack surgical capability for this patient's likely injuries (hemorrhagic shock, likely femur fracture, possible internal injuries). This patient needs a trauma center.", guideline_ref: "ACS Committee on Trauma — Field Triage Decision Scheme; CDC Field Triage Guidelines" },
          { text: "Transport by ground to the trauma center 40 minutes away", correct: false, explanation: "While getting to the trauma center is correct, ground transport takes 40 minutes vs. approximately 30 minutes total by air. Given the patient's hemodynamic instability, the time savings with air transport is significant and justified.", guideline_ref: "NAEMSP Air Medical Position Statement" },
          { text: "Wait and reassess after extrication is complete before making a transport decision", correct: false, explanation: "Delaying the transport decision wastes critical time. Air medical should be activated early — if the patient improves, the helicopter can be cancelled. It's better to activate and cancel than to delay and wish you had called sooner.", guideline_ref: "NAEMSP/ACS Air Medical Activation Criteria" }
        ]
      },
      {
        phase: "clinical-reasoning",
        prompt: "Which of the following are recognized criteria for air medical activation? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You have requested air medical transport. Your partner asks what criteria justify the activation for documentation purposes.",
        clinical_pearl: "Remember: activate early, cancel if not needed. A helicopter call that gets cancelled costs far less than a preventable death from delayed transport to definitive care.",
        options: [
          { text: "Prolonged extrication (>20 minutes)", correct: true, explanation: "Prolonged extrication is a standard air medical activation criterion because it increases scene time and delays definitive care.", guideline_ref: "NAEMSP/ACS Air Medical Activation Criteria" },
          { text: "GCS less than or equal to 13 with trauma mechanism", correct: true, explanation: "Altered mental status with a trauma mechanism indicates possible traumatic brain injury and meets triage criteria for a trauma center, supporting air medical activation when ground transport time is prolonged.", guideline_ref: "CDC Field Triage Guidelines; NAEMSP Air Medical Criteria" },
          { text: "Systolic BP less than 90 mmHg", correct: true, explanation: "Hypotension in trauma indicates hemorrhagic shock and meets physiologic triage criteria for a trauma center.", guideline_ref: "CDC Field Triage Guidelines; ACS-COT" },
          { text: "Ground transport time to an appropriate facility exceeds 20–30 minutes", correct: true, explanation: "When the closest appropriate facility is more than 20–30 minutes by ground, air transport should be considered if it provides a meaningful time advantage.", guideline_ref: "NAEMSP Air Medical Position Statement" },
          { text: "Any motor vehicle crash regardless of patient condition", correct: false, explanation: "Not all MVCs require air transport. Activation should be based on patient condition, mechanism severity, and transport time considerations — not the mere occurrence of a crash.", guideline_ref: "NAEMSP/ACS Air Medical Activation Criteria" },
          { text: "Patient or family requests helicopter transport", correct: false, explanation: "Air medical activation is a clinical and operational decision based on patient need, not patient or family preference.", guideline_ref: "NAEMSP Air Medical Position Statement" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps in the correct order for managing this patient while awaiting air medical transport.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The helicopter has been activated with an ETA of 12 minutes to launch. Extrication is progressing. You need to prepare for patient handoff.",
        vitals_update: { hr: 132, bp: "82/54", rr: 30, spo2: 91, gcs: 10 },
        items: [
          { text: "Maintain cervical spine stabilization throughout extrication" },
          { text: "Apply high-flow oxygen via non-rebreather mask" },
          { text: "Control any external hemorrhage with direct pressure and tourniquets as needed" },
          { text: "Apply a traction splint to the angulated femur fracture once extricated" },
          { text: "Prepare a concise handoff report (MIST: Mechanism, Injuries, Signs/vitals, Treatment)" },
          { text: "Identify and secure a safe landing zone (100 × 100 ft minimum, clear of debris and wires)" },
          { text: "Transfer patient care to the flight crew with verbal and written report" }
        ],
        explanation: "While awaiting the helicopter, focus on life-saving interventions: C-spine, oxygen, hemorrhage control, and splinting. Simultaneously prepare a landing zone and organize a concise handoff report. The MIST format (Mechanism, Injuries, Signs/vitals, Treatment) provides the flight crew with critical information efficiently.",
        guideline_ref: "NAEMSP Air Medical Guidelines; PHTLS 9th Edition; ACS-COT Field Triage"
      }
    ]
  },

  // ============================================================
  // 6. nat-ops-04 — Refusal of Care / Medical-Legal
  // ============================================================
  {
    id: "nat-ops-04",
    title: "Refusal of Care — Medical-Legal Considerations",
    dispatch: "62-year-old male, chest pain, wants to refuse care",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 62, sex: "Male", cc: "Chest discomfort, wants to refuse transport" },
    scene: "Single-family home, patient is sitting in his recliner. His wife called 911 because he was complaining of chest tightness 30 minutes ago. He now states the discomfort has 'mostly gone away' and he does not want to go to the hospital. He appears anxious but alert and oriented. His wife is visibly concerned.",
    history: {
      pmh: "Hypertension, hyperlipidemia, previous MI (5 years ago), type 2 diabetes",
      meds: "Lisinopril, atorvastatin, metformin, aspirin 81 mg daily",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 88, bp: "148/92", rr: 18, spo2: 96, gcs: 15, temp: "98.2°F (36.8°C)" },
    questions: [
      {
        phase: "clinical-reasoning",
        prompt: "The patient insists he is fine and wants to refuse transport. What is the MOST appropriate initial approach?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient says, 'I feel much better now. It was probably just heartburn. I don't need to go to the hospital.' His wife says, 'Please, tell him he needs to go!' The patient is alert, oriented to person, place, time, and event, and appears to understand the conversation.",
        clinical_pearl: "A patient's right to refuse care is legally protected, but it must be an INFORMED refusal. Your job is not to force transport — it is to ensure the patient fully understands the risks of refusing so they can make a truly informed decision.",
        options: [
          { text: "Thoroughly explain the risks of refusing, including the possibility of a life-threatening condition, and ensure the patient demonstrates understanding", correct: true, explanation: "Informed refusal requires that the patient understand their condition, the recommended treatment, the risks of refusing (including death), and alternatives. The provider must ensure the patient has decision-making capacity and document the entire interaction.", guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport; ACEP — Informed Consent in EMS" },
          { text: "Accept the refusal immediately — the patient has the right to refuse and you should respect that without further discussion", correct: false, explanation: "While patients have the right to refuse, EMS has an obligation to ensure it is an informed refusal. Simply accepting without thorough risk explanation and capacity assessment is negligent.", guideline_ref: "NAEMSP — Patient Refusal of Transport" },
          { text: "Tell the patient you will restrain and transport him against his will because his condition is dangerous", correct: false, critical: true, explanation: "Transporting a competent adult against their will constitutes assault and battery and false imprisonment. A patient with decision-making capacity has the legal right to refuse, even if the decision is medically unwise.", guideline_ref: "NAEMSP — Patient Refusal; Legal Principles of EMS" },
          { text: "Leave without documenting the interaction since the patient refused", correct: false, critical: true, explanation: "Failure to document a refusal is a major medical-legal liability. Thorough documentation of the assessment, risks explained, patient understanding, and refusal is essential to protect both the patient and the provider.", guideline_ref: "NAEMSP — Patient Refusal Documentation; EMS Medical-Legal Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of the refusal of care process in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient continues to refuse transport. You need to follow proper refusal procedures to protect the patient and yourself.",
        clinical_pearl: "Consider contacting medical control (online medical direction) for high-risk refusals. Having a physician speak directly with the patient can sometimes change their mind and also provides additional documentation and medical oversight for the refusal.",
        items: [
          { text: "Perform a thorough patient assessment including vitals and history" },
          { text: "Assess decision-making capacity: alert, oriented, understands situation and consequences" },
          { text: "Clearly explain your assessment findings and why transport is recommended" },
          { text: "Explain specific risks of refusing, including the possibility of worsening condition or death" },
          { text: "Contact medical control (online medical direction) for physician input on this high-risk refusal" },
          { text: "If patient still refuses: have patient sign the refusal form after confirming understanding" },
          { text: "Provide instructions for calling 911 again if symptoms return or worsen" },
          { text: "Document the entire encounter thoroughly: assessment, risks explained, patient responses, and signatures" }
        ],
        explanation: "A proper refusal of care follows a systematic approach: assess the patient, confirm capacity, inform them of risks (especially death or serious harm), involve medical control for high-risk situations, obtain a signed refusal, provide return instructions, and document everything meticulously.",
        guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport; ACEP Informed Consent in EMS"
      },
      {
        phase: "clinical-reasoning",
        prompt: "Which of the following should be included in your documentation of this refusal? (Select all that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "The patient has signed the refusal form. You are completing your patient care report and want to ensure thorough documentation.",
        clinical_pearl: "Document as if a jury will read it — because they might. Refusal calls are among the highest-liability EMS encounters. Thorough documentation is your best legal protection.",
        options: [
          { text: "Complete patient assessment findings and vital signs", correct: true, explanation: "Full assessment and vitals demonstrate you performed a thorough evaluation before accepting the refusal.", guideline_ref: "NAEMSP — Patient Refusal Documentation" },
          { text: "Specific risks explained to the patient, including the possibility of death", correct: true, explanation: "Documenting the specific risks communicated proves the refusal was informed. Always document that you discussed the risk of death or serious disability.", guideline_ref: "NAEMSP Position Statement — Patient Refusal of Transport" },
          { text: "Patient's mental status and evidence of decision-making capacity", correct: true, explanation: "Documenting that the patient was alert, oriented, and demonstrated understanding of the risks confirms they had the capacity to make an informed decision.", guideline_ref: "NAEMSP — Patient Refusal; ACEP Informed Consent" },
          { text: "That medical control was contacted and their recommendations", correct: true, explanation: "If medical control was contacted, document the physician's name, their recommendations, and whether the physician spoke to the patient directly.", guideline_ref: "NAEMSP — Patient Refusal Documentation" },
          { text: "Instructions given for follow-up care and when to call 911 again", correct: true, explanation: "Documenting discharge instructions shows you took steps to ensure patient safety even after refusal.", guideline_ref: "NAEMSP — Patient Refusal Documentation" },
          { text: "Signatures of the patient and a witness", correct: true, explanation: "A signed refusal with a witness signature provides legal evidence that the patient was informed and voluntarily refused. If a witness is available (such as the patient's wife), obtain their signature.", guideline_ref: "NAEMSP — Patient Refusal Documentation" },
          { text: "Your personal opinion that the patient is making a bad decision", correct: false, explanation: "Personal opinions do not belong in medical documentation. Document objective findings, what was communicated, and patient responses — not subjective judgments about the patient's choices.", guideline_ref: "EMS Documentation Best Practices" }
        ]
      }
    ]
  }
];
