const BATCH8 = [
  {
    id: "nat-med-08",
    title: "Sickle Cell Crisis",
    dispatch: "22-year-old female, severe pain, difficulty breathing",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 22, sex: "F", cc: "Severe bone pain and shortness of breath" },
    scene: "You arrive at a small apartment. A 22-year-old female is curled up on the couch, clutching her legs and crying in pain. Her roommate states the patient has been in pain since this morning and it's been getting worse. The apartment is warm and there are no hazards.",
    history: {
      pmh: "Sickle cell disease (HbSS), multiple prior pain crises, previous acute chest syndrome, cholecystectomy age 19",
      meds: "Hydroxyurea, folic acid, oxycodone PRN",
      allergies: "Morphine (itching)"
    },
    vitals: { hr: 112, bp: "128/78", rr: 22, spo2: 93, gcs: 15, temp: "38.4°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient rates her pain 9/10 in her legs and lower back. She says this feels like her usual crises but worse, and she's also having some chest tightness. What is your MOST important initial concern with this presentation?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is tachycardic, mildly febrile, and her SpO2 is below normal. She appears in significant distress and is splinting her breathing.",
        clinical_pearl: "Acute chest syndrome (ACS) is the leading cause of death in sickle cell patients. Any sickle cell patient with chest pain, tachypnea, fever, or dropping SpO2 should be treated aggressively with oxygen and transport — do not dismiss respiratory complaints as just part of the pain crisis.",
        options: [
          { text: "She may be developing acute chest syndrome, a life-threatening complication", correct: true, explanation: "The combination of chest tightness, fever, tachypnea, and low SpO2 in a sickle cell patient raises concern for acute chest syndrome, which requires aggressive oxygen therapy and rapid transport.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; ACS diagnostic criteria" },
          { text: "Her pain is causing hyperventilation and anxiety — reassurance is the priority", correct: false, explanation: "While pain can cause tachypnea, dismissing respiratory symptoms in a sickle cell patient is dangerous. The low SpO2 and fever suggest a more serious process than anxiety.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" },
          { text: "The fever indicates a simple infection unrelated to her sickle cell disease", correct: false, critical: true, explanation: "Fever in sickle cell patients is never 'simple.' These patients are functionally asplenic and at high risk for sepsis and acute chest syndrome. Fever always warrants urgent evaluation.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; Emergency Severity Index for SCD" },
          { text: "This is a routine pain crisis and standard pain management is all that's needed", correct: false, explanation: "While pain management is important, the respiratory symptoms, fever, and low SpO2 indicate this may be more than a routine vaso-occlusive crisis. A thorough assessment is essential before focusing only on pain.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order of priority for this patient:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient's SpO2 has dropped to 91% and she is becoming more tachypneic. She remains alert but is now having difficulty completing full sentences.",
        vitals_update: { spo2: 91, rr: 26 },
        explanation: "Oxygen is the immediate priority given worsening hypoxemia. Positioning and keeping the patient warm prevent further sickling. IV access enables fluid and medication administration. Pain management is important but follows life-threat interventions. Transport should not be delayed.",
        guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; National Association of EMS Physicians position statement on SCD",
        items: [
          "Apply high-flow oxygen via non-rebreather mask",
          "Position patient upright for comfort and breathing",
          "Keep patient warm — avoid cold exposure",
          "Establish IV access and administer normal saline bolus",
          "Provide appropriate pain management per protocol",
          "Initiate rapid transport to appropriate facility"
        ]
      },
      {
        phase: "treatment",
        prompt: "Which of the following are appropriate prehospital considerations for this sickle cell patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You have the patient on high-flow oxygen and her SpO2 has improved to 94%. She is still in significant pain. Your partner is preparing for transport.",
        vitals_update: { spo2: 94 },
        clinical_pearl: "Cold exposure and dehydration trigger sickling. Keep the ambulance warm, use warmed IV fluids if available, and avoid ice packs. Sickle cell patients often have difficult IV access due to repeated hospitalizations — consider alternative sites early.",
        options: [
          { text: "Keep the ambulance warm and avoid exposing the patient to cold", correct: true, explanation: "Cold causes vasoconstriction and promotes sickling. Maintaining a warm environment is a simple but critical intervention.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" },
          { text: "Administer IV normal saline — dehydration worsens sickling", correct: true, explanation: "Hydration helps reduce blood viscosity and prevent further vaso-occlusion. Normal saline is the appropriate fluid choice.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" },
          { text: "Apply ice packs to the most painful areas for comfort", correct: false, critical: true, explanation: "Ice packs cause local vasoconstriction and cooling, which directly promotes sickling and can worsen the crisis. Never apply cold to a sickle cell patient in crisis.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" },
          { text: "Note the patient's morphine allergy and communicate it to the receiving facility", correct: true, explanation: "Accurate allergy documentation prevents administration of a medication that causes adverse reactions. This information is critical for hospital pain management planning.", guideline_ref: "General prehospital documentation standards" },
          { text: "Withhold all pain medication because the patient takes oxycodone at home", correct: false, critical: true, explanation: "Withholding pain management from a patient in sickle cell crisis is inappropriate and harmful. Pain itself worsens sickling through stress responses. Treat pain aggressively within your scope.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines; NAEMSP position on prehospital pain management" },
          { text: "Transport to a facility experienced in managing sickle cell disease if available", correct: true, explanation: "Sickle cell patients benefit from care at facilities familiar with the disease, especially when acute chest syndrome is suspected. This may require a specialty center.", guideline_ref: "NAEMSP Sickle Cell Prehospital Guidelines" }
        ]
      }
    ]
  },
  {
    id: "nat-med-09",
    title: "Hyperkalemia",
    dispatch: "58-year-old male, weakness, heart racing, missed dialysis",
    category: "Medical Emergencies",
    difficulty: "Hard",
    level_min: "Paramedic",
    patient: { age: 58, sex: "M", cc: "Generalized weakness and palpitations" },
    scene: "You arrive at a single-story home. A 58-year-old male is sitting in a recliner, appearing fatigued and pale. His wife reports he missed his last two dialysis sessions due to transportation issues. He says his heart has been 'fluttering' and his legs feel heavy and weak. An AV fistula is visible on his left forearm.",
    history: {
      pmh: "End-stage renal disease on hemodialysis (MWF schedule), hypertension, type 2 diabetes, peripheral neuropathy",
      meds: "Lisinopril, insulin glargine, sevelamer, epoetin alfa",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 48, bp: "98/60", rr: 20, spo2: 96, gcs: 15, temp: "36.8°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "You obtain a 12-lead ECG. Which of the following findings would you expect to see given this patient's likely condition?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "The cardiac monitor shows a slow, wide rhythm. You print a 12-lead ECG for interpretation. The patient's wife confirms he has not urinated in years and relies entirely on dialysis.",
        clinical_pearl: "ECG changes in hyperkalemia follow a predictable progression: peaked T-waves → PR prolongation → QRS widening → loss of P-waves → sine wave pattern → cardiac arrest. However, patients can skip stages and go directly to lethal rhythms. Any dialysis patient with ECG changes needs emergent treatment.",
        options: [
          { text: "Peaked (tall, narrow) T-waves with a widened QRS complex", correct: true, explanation: "Peaked T-waves are the earliest ECG finding in hyperkalemia, and QRS widening indicates more severe elevation. In a bradycardic dialysis patient who missed treatments, these findings strongly suggest dangerous hyperkalemia.", guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management; NAEMSP Dialysis Patient Guidelines" },
          { text: "ST elevation in contiguous leads with reciprocal depression", correct: false, explanation: "This pattern suggests acute myocardial infarction, not hyperkalemia. While MI is always a consideration, the clinical picture of a missed-dialysis patient with bradycardia points toward a metabolic cause.", guideline_ref: "AHA ACLS Guidelines — STEMI Recognition" },
          { text: "Narrow-complex tachycardia with sawtooth flutter waves", correct: false, explanation: "Atrial flutter produces a regular tachycardia with sawtooth waves — the opposite of this patient's slow, wide-complex presentation.", guideline_ref: "AHA ACLS Guidelines — Atrial Flutter" },
          { text: "Normal sinus rhythm with ST depression and U-waves", correct: false, explanation: "ST depression with prominent U-waves is characteristic of hypokalemia (low potassium), which is the opposite electrolyte disturbance. This patient is expected to be hyperkalemic.", guideline_ref: "AHA ACLS Guidelines — Hypokalemia ECG Findings" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Your 12-lead confirms peaked T-waves with a widened QRS. The patient remains bradycardic at 44 bpm with a BP of 94/58. What is the MOST appropriate first medication to administer?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "You have established IV access in the right arm (avoiding the fistula arm). The patient is becoming more lethargic and his wife is increasingly worried.",
        vitals_update: { hr: 44, bp: "94/58", gcs: 14 },
        clinical_pearl: "Calcium does not lower potassium levels — it stabilizes the cardiac membrane against the effects of hyperkalemia. Think of it as 'buying time' while you pursue definitive treatment. Its onset is rapid (1-3 minutes) but duration is short (30-60 minutes).",
        options: [
          { text: "Calcium chloride (or calcium gluconate) IV to stabilize the myocardium", correct: true, explanation: "Calcium is the first-line emergency treatment for hyperkalemia with ECG changes. It directly antagonizes the membrane effects of potassium on the heart, reducing the risk of fatal dysrhythmia. It does not lower potassium but buys critical time.", guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management Algorithm" },
          { text: "Atropine IV for the symptomatic bradycardia", correct: false, explanation: "While atropine treats symptomatic bradycardia, it is often ineffective in hyperkalemic bradycardia because the conduction slowing is caused by the potassium level, not vagal tone. Treating the underlying hyperkalemia is the priority.", guideline_ref: "AHA ACLS Guidelines — Bradycardia Algorithm; Hyperkalemia Management" },
          { text: "Sodium bicarbonate IV push to correct the acidosis", correct: false, explanation: "Sodium bicarbonate can help shift potassium intracellularly and is part of hyperkalemia management, but it is not first-line. Calcium to stabilize the heart takes priority over potassium-shifting agents.", guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management Algorithm" },
          { text: "Epinephrine IV drip for the hypotension and bradycardia", correct: false, explanation: "Starting a vasopressor without addressing the underlying hyperkalemia is treating downstream effects. Calcium administration to stabilize the myocardium should precede vasopressor consideration.", guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management Algorithm" }
        ]
      },
      {
        phase: "treatment",
        prompt: "After calcium administration, place the remaining hyperkalemia interventions in the correct treatment sequence:",
        type: "order",
        level_filter: "Paramedic",
        narrative: "After calcium chloride administration, the QRS narrows slightly and the heart rate increases to 52 bpm. The patient says he feels a little better but is still weak. You need to continue treatment during transport.",
        vitals_update: { hr: 52 },
        explanation: "After calcium stabilizes the heart, albuterol provides rapid potassium shifting via beta-2 stimulation. Sodium bicarbonate further shifts potassium into cells. Continuous monitoring is essential as these are temporizing measures — only dialysis provides definitive treatment. Rapid transport to a facility with dialysis capability is critical.",
        guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management Algorithm; NAEMSP Renal Emergency Guidelines",
        items: [
          "Administer nebulized albuterol (high dose) to shift potassium intracellularly",
          "Consider sodium bicarbonate IV if metabolic acidosis suspected",
          "Continuous cardiac monitoring with transcutaneous pacing pads applied",
          "Rapid transport to facility with emergent dialysis capability",
          "Provide early hospital notification with ECG findings and missed dialysis history"
        ]
      },
      {
        phase: "evaluation",
        prompt: "Match each hyperkalemia treatment to its correct mechanism of action:",
        type: "table",
        level_filter: "Paramedic",
        narrative: "During transport, you review the rationale for each intervention with your partner. Understanding why each treatment works helps guide decision-making if the patient's condition changes.",
        explanation: "Hyperkalemia treatment works through three distinct mechanisms: cardiac membrane stabilization (calcium), intracellular potassium shifting (albuterol, sodium bicarbonate, insulin/glucose), and potassium elimination (dialysis, kayexalate). Prehospital care focuses on the first two — only the hospital can provide elimination therapies.",
        guideline_ref: "AHA ACLS Guidelines — Hyperkalemia Management; Pharmacology of Electrolyte Emergencies",
        columns: ["Treatment", "Mechanism of Action"],
        rows: [
          ["Calcium chloride / gluconate", "Stabilizes cardiac cell membranes — does NOT lower potassium"],
          ["Nebulized albuterol (high dose)", "Beta-2 stimulation drives potassium into cells via Na+/K+ ATPase"],
          ["Sodium bicarbonate", "Corrects acidosis, causing hydrogen ion exchange and potassium shift into cells"],
          ["Insulin with dextrose (hospital)", "Insulin drives potassium into cells; dextrose prevents hypoglycemia"],
          ["Hemodialysis (hospital)", "Directly removes potassium from the blood — only definitive treatment"]
        ]
      }
    ]
  },
  {
    id: "nat-card-06",
    title: "Cardiogenic Shock / CHF",
    dispatch: "72-year-old female, can't breathe, woke up gasping",
    category: "Cardiology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 72, sex: "F", cc: "Severe difficulty breathing, woke from sleep" },
    scene: "You arrive at a second-floor bedroom. A 72-year-old female is sitting bolt upright at the edge of her bed, tripoding, with labored breathing. The bed has four pillows stacked at the head. Her husband states she went to bed feeling fine but woke up about 30 minutes ago unable to breathe. You can hear audible gurgling with each breath from the doorway.",
    history: {
      pmh: "Congestive heart failure (EF 25%), atrial fibrillation, hypertension, coronary artery disease with prior stent placement",
      meds: "Furosemide, carvedilol, lisinopril, apixaban, potassium chloride",
      allergies: "No known allergies"
    },
    vitals: { hr: 128, bp: "92/60", rr: 36, spo2: 82, gcs: 14, temp: "36.6°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient presents with severe pulmonary edema and hypotension. Which of the following BEST describes why this combination makes treatment especially challenging?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "Auscultation reveals diffuse crackles bilaterally to the apices. The patient can only speak in 1-2 word phrases. Her skin is cool, pale, and diaphoretic. Jugular venous distension is visible even in the upright position.",
        clinical_pearl: "Cardiogenic pulmonary edema with hypotension (cardiogenic shock) is a 'can't win' scenario: the lungs are drowning but the blood pressure can't tolerate the vasodilators (nitroglycerin) that would normally offload the heart. These patients need CPAP, cautious fluid management, and often hospital-level interventions like inotropes or mechanical support.",
        options: [
          { text: "Standard CHF treatments like nitroglycerin require adequate blood pressure, which this patient lacks", correct: true, explanation: "Nitroglycerin is first-line for acute CHF with adequate BP (typically SBP >100), but this patient's SBP of 92 makes vasodilator use dangerous. This is cardiogenic shock — the heart is failing as a pump, and reducing preload further could cause cardiovascular collapse.", guideline_ref: "AHA/ACC Heart Failure Guidelines; NAEMSP CHF Prehospital Management" },
          { text: "The low blood pressure means the patient is actually dehydrated and needs aggressive fluid resuscitation", correct: false, critical: true, explanation: "Fluid resuscitation in a patient with acute pulmonary edema would be catastrophic. The lungs are already flooded because the heart cannot pump effectively — adding volume would worsen the fluid overload and could cause respiratory arrest.", guideline_ref: "AHA/ACC Heart Failure Guidelines" },
          { text: "Pulmonary edema and hypotension cannot occur simultaneously — reassess the patient", correct: false, explanation: "Cardiogenic shock absolutely presents with both pulmonary edema and hypotension. The failing left ventricle cannot eject blood forward (causing hypotension) and blood backs up into the lungs (causing edema).", guideline_ref: "AHA/ACC Heart Failure Guidelines — Cardiogenic Shock" },
          { text: "The wheezing indicates this is actually asthma, not a cardiac problem", correct: false, explanation: "While 'cardiac asthma' can produce wheezing from bronchospasm triggered by pulmonary edema, the overall clinical picture — orthopnea, JVD, crackles, history of CHF with low EF — clearly points to a cardiac etiology.", guideline_ref: "AHA/ACC Heart Failure Guidelines — Differential Diagnosis" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize the following clinical findings as features of LEFT-sided heart failure or RIGHT-sided heart failure:",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        narrative: "As you continue your assessment, you note multiple findings. Understanding which side of the heart is failing helps guide your treatment priorities and hospital communication.",
        clinical_pearl: "Remember: LEFT = LUNGS, RIGHT = the REST. Left-sided failure backs blood into the pulmonary circuit (crackles, dyspnea, orthopnea, pink frothy sputum). Right-sided failure backs blood into the systemic venous system (JVD, peripheral edema, hepatomegaly, ascites). Many patients with advanced CHF have biventricular failure with features of both.",
        explanation: "Left-sided heart failure primarily manifests in the pulmonary system because blood backs up from the left ventricle into the lungs. Right-sided failure manifests in the systemic venous system because blood backs up from the right ventricle into the body. This patient likely has biventricular failure given her JVD (right) and pulmonary edema (left).",
        guideline_ref: "AHA/ACC Heart Failure Guidelines; Pathophysiology of Heart Failure",
        categories: {
          "Left-Sided Heart Failure": [
            "Pulmonary crackles / rales",
            "Orthopnea (sleeping on multiple pillows)",
            "Paroxysmal nocturnal dyspnea (waking up gasping)",
            "Pink, frothy sputum",
            "Dyspnea on exertion"
          ],
          "Right-Sided Heart Failure": [
            "Jugular venous distension (JVD)",
            "Peripheral edema (swollen ankles/legs)",
            "Hepatomegaly (enlarged liver)",
            "Ascites (abdominal fluid accumulation)",
            "Weight gain from fluid retention"
          ]
        }
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient with cardiogenic pulmonary edema and hypotension:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient's SpO2 remains at 82% despite high-flow oxygen via non-rebreather. She is becoming more confused and her breathing is increasingly labored with pink-tinged sputum.",
        vitals_update: { spo2: 82, gcs: 13 },
        explanation: "CPAP is the highest-impact intervention for cardiogenic pulmonary edema — it reduces preload, afterload, and work of breathing simultaneously. Upright positioning aids breathing. IV access is needed but fluids should be avoided. Given hypotension, nitroglycerin is contraindicated. Early hospital notification allows preparation for advanced interventions (inotropes, possible catheterization). Rapid transport is essential as definitive management exceeds field capabilities.",
        guideline_ref: "AHA/ACC Heart Failure Guidelines; NAEMSP CPAP Position Statement; Cardiogenic Shock Management",
        items: [
          "Apply CPAP at 5-10 cmH2O (if patient can cooperate and maintain airway)",
          "Position patient sitting fully upright with legs dependent",
          "Establish IV access — keep line at TKO rate, avoid fluid bolus",
          "Continuous cardiac monitoring — obtain 12-lead ECG to evaluate for acute MI as cause",
          "Provide early notification to receiving facility of cardiogenic shock presentation",
          "Rapid transport — reassess CPAP tolerance and respiratory status every 2-3 minutes"
        ]
      }
    ]
  },
  {
    id: "nat-air-05",
    title: "Tension Pneumothorax — Medical",
    dispatch: "Priority 1 — intubated patient deteriorating during interfacility transport",
    category: "Airway & Breathing",
    difficulty: "Hard",
    level_min: "Paramedic",
    patient: { age: 45, sex: "M", cc: "Sudden deterioration after intubation" },
    scene: "You are providing interfacility transport for a 45-year-old male who was intubated at a community hospital for respiratory failure. Fifteen minutes into transport, ventilator alarms begin sounding. The patient's SpO2 is rapidly dropping and peak airway pressures are climbing. The patient was stable when you departed the sending facility.",
    history: {
      pmh: "COPD, chronic bronchitis, former smoker (40 pack-year history), recurrent pneumonia",
      meds: "Albuterol, ipratropium, prednisone taper, home oxygen 2L NC",
      allergies: "Penicillin"
    },
    vitals: { hr: 132, bp: "82/50", rr: "vent rate 14 (high pressure alarms)", spo2: 78, gcs: "3T (sedated/intubated)", temp: "37.2°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "When an intubated patient suddenly deteriorates, the DOPE mnemonic guides your troubleshooting. What does DOPE stand for, and which element is MOST critical to rule out first?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "Alarms are sounding and SpO2 continues to fall. You need to rapidly identify the cause. Your partner asks what to check first.",
        clinical_pearl: "DOPE = Displacement, Obstruction, Pneumothorax, Equipment failure. Always start with the simplest: disconnect from the vent and bag the patient. If bagging is easy and SpO2 improves → equipment problem. If bagging is difficult → obstruction or pneumothorax. If tube position is wrong → displacement. This systematic approach prevents tunnel vision.",
        options: [
          { text: "Displacement, Obstruction, Pneumothorax, Equipment — disconnect from ventilator and attempt manual ventilation first", correct: true, explanation: "Disconnecting from the ventilator and bagging the patient immediately identifies whether the problem is the ventilator (equipment) or the patient. If resistance is felt while bagging, it narrows the differential to displacement, obstruction, or pneumothorax.", guideline_ref: "AHA ACLS Guidelines — Post-Intubation Management; DOPE Mnemonic" },
          { text: "Displacement, Obstruction, Pneumothorax, Equipment — immediately perform needle decompression", correct: false, critical: true, explanation: "Jumping to needle decompression without first ruling out simpler causes (displaced tube, kinked tubing, vent malfunction) is dangerous. Needle decompression on a patient who does not have a pneumothorax carries risk of iatrogenic injury. Follow the systematic approach.", guideline_ref: "AHA ACLS Guidelines — Post-Intubation Troubleshooting" },
          { text: "Drip rates, Oxygen levels, Patient positioning, Endotracheal tube — check IV drips first", correct: false, explanation: "This is not the correct DOPE mnemonic. The mnemonic is Displacement, Obstruction, Pneumothorax, Equipment — designed specifically for intubated patient deterioration.", guideline_ref: "AHA ACLS Guidelines — DOPE Mnemonic" },
          { text: "Displacement, Obstruction, Pneumothorax, Equipment — increase ventilator pressure settings to overcome the resistance", correct: false, critical: true, explanation: "Increasing ventilator pressure against an obstruction or into a tension pneumothorax can be fatal. Higher pressures could worsen a pneumothorax or cause barotrauma. Always disconnect and assess before adjusting the ventilator.", guideline_ref: "AHA ACLS Guidelines — Ventilator Management; Barotrauma Prevention" }
        ]
      },
      {
        phase: "assessment",
        prompt: "You disconnect from the ventilator and attempt manual BVM ventilation. You meet significant resistance. ET tube depth is confirmed at 22cm at the teeth (appropriate). You proceed to assess for pneumothorax. Which combination of physical exam findings indicates a tension pneumothorax on the LEFT side?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "Suctioning the ET tube produces minimal secretions, ruling out obstruction. The tube has not moved from its secured position. You must now evaluate for pneumothorax. The patient's neck veins are distended and trachea appears shifted.",
        clinical_pearl: "Tension pneumothorax is a clinical diagnosis in the prehospital setting — do NOT wait for imaging. The classic triad is absent breath sounds on the affected side, JVD, and tracheal deviation AWAY from the affected side. However, tracheal deviation is a late and unreliable finding. Absent breath sounds with hypotension in a deteriorating patient is enough to act.",
        options: [
          { text: "Absent breath sounds on the LEFT, JVD, tracheal deviation to the RIGHT, hyperresonance on the LEFT", correct: true, explanation: "In left-sided tension pneumothorax, air accumulates in the left pleural space. Breath sounds are absent on that side, the trapped air produces hyperresonance to percussion, and as pressure builds, mediastinal structures (including the trachea) shift toward the RIGHT (away from tension). JVD occurs from impaired venous return.", guideline_ref: "AHA ACLS Guidelines — Tension Pneumothorax; PHTLS Chest Trauma Assessment" },
          { text: "Absent breath sounds on the RIGHT, JVD, tracheal deviation to the LEFT, hyperresonance on the RIGHT", correct: false, explanation: "This combination describes a RIGHT-sided tension pneumothorax. In left-sided tension, the affected findings (absent sounds, hyperresonance) are on the LEFT, with deviation AWAY from the affected side (to the right).", guideline_ref: "AHA ACLS Guidelines — Tension Pneumothorax" },
          { text: "Diminished breath sounds BILATERALLY, flat neck veins, midline trachea, dullness to percussion on the LEFT", correct: false, explanation: "Dullness to percussion suggests fluid (hemothorax or effusion), not air. Flat neck veins suggest hypovolemia rather than obstructive shock. Bilateral diminished sounds with midline trachea does not localize a tension pneumothorax.", guideline_ref: "PHTLS Chest Assessment — Percussion Findings" },
          { text: "Absent breath sounds on the LEFT, flat neck veins, tracheal deviation to the LEFT, dullness on the LEFT", correct: false, explanation: "Tracheal deviation occurs AWAY from the tension (toward the right in left-sided tension). Flat neck veins are inconsistent with the obstructive shock physiology of tension pneumothorax. Dullness suggests fluid, not trapped air.", guideline_ref: "AHA ACLS Guidelines — Tension Pneumothorax Pathophysiology" }
        ]
      },
      {
        phase: "treatment",
        prompt: "You confirm findings consistent with left-sided tension pneumothorax. Place the following steps in the correct order:",
        type: "order",
        level_filter: "Paramedic",
        narrative: "The patient's blood pressure has dropped to 74/40 and heart rate is 140. SpO2 reads 71%. This is immediately life-threatening and you must act now.",
        vitals_update: { hr: 140, bp: "74/40", spo2: 71 },
        explanation: "Needle decompression is the immediate life-saving intervention for tension pneumothorax. The procedure must be performed on the correct (affected) side. After decompression, reassess for improvement in breath sounds, hemodynamics, and ventilation compliance. Resume ventilation, provide ongoing monitoring, and transport emergently. Hospital notification allows preparation for chest tube placement.",
        guideline_ref: "AHA ACLS Guidelines — Tension Pneumothorax Management; NAEMSP Needle Decompression Position Statement",
        items: [
          "Identify landmarks for needle decompression — 2nd intercostal space, midclavicular line, LEFT chest (or 4th-5th ICS, anterior axillary line)",
          "Perform needle decompression with appropriately sized catheter (minimum 3.25 inch in adults)",
          "Listen for rush of air confirming decompression and reassess breath sounds",
          "Resume manual ventilation and reassess SpO2, blood pressure, and heart rate",
          "Secure the catheter and monitor for reaccumulation (may need repeat decompression)",
          "Continue rapid transport and notify receiving facility of pneumothorax and decompression"
        ]
      }
    ]
  },
  {
    id: "nat-pharm-02",
    title: "Allergic Reaction to Medication",
    dispatch: "50-year-old female, swelling and rash after doctor visit",
    category: "Pharmacology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 50, sex: "F", cc: "Swelling, rash, and itching" },
    scene: "You arrive at a medical clinic parking lot. A 50-year-old female is sitting on a bench outside the front entrance. She has visible hives on her face, neck, and arms. Her lips appear swollen. A clinic nurse is with her and states the patient received an intramuscular antibiotic injection about 20 minutes ago and developed symptoms within 10 minutes. The nurse brought the patient outside and called 911.",
    history: {
      pmh: "Urinary tract infections (recurrent), hypertension, osteoarthritis",
      meds: "Amlodipine, ibuprofen PRN",
      allergies: "No previously known drug allergies"
    },
    vitals: { hr: 108, bp: "104/68", rr: 22, spo2: 96, gcs: 15, temp: "37.0°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient has hives, facial swelling, and reports her throat feels 'tight.' Her voice sounds slightly hoarse compared to when you first made contact. What finding would MOST clearly indicate this reaction is progressing to anaphylaxis?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "As you assess the patient, she clears her throat repeatedly and says the itching is spreading to her chest. She seems anxious. The clinic nurse reports the patient received ceftriaxone IM for a UTI.",
        clinical_pearl: "Anaphylaxis is defined by involvement of TWO or more body systems (skin, respiratory, cardiovascular, GI) after allergen exposure. However, any single sign of airway compromise (stridor, hoarseness, tongue swelling) after known exposure is enough to treat as anaphylaxis. Don't wait for full criteria — early epinephrine saves lives.",
        options: [
          { text: "Development of stridor, wheezing, or increasing difficulty breathing — signs of airway compromise", correct: true, explanation: "Airway involvement (stridor, wheezing, dyspnea, hoarseness) in the setting of an allergic reaction indicates anaphylaxis. Throat tightness with voice changes suggests laryngeal edema is beginning, and progression to complete airway obstruction can be rapid.", guideline_ref: "NIAID/FAAN Anaphylaxis Guidelines; AHA Anaphylaxis Treatment Algorithm" },
          { text: "The presence of hives alone confirms anaphylaxis", correct: false, explanation: "Hives (urticaria) alone represent a localized allergic reaction. Anaphylaxis requires involvement of additional body systems or specific severe criteria such as hypotension or airway compromise. However, hives with throat tightness warrants close monitoring.", guideline_ref: "NIAID/FAAN Anaphylaxis Diagnostic Criteria" },
          { text: "A heart rate above 100 bpm is the definitive sign of anaphylaxis", correct: false, explanation: "While tachycardia can occur in anaphylaxis, it is nonspecific — anxiety, pain, and exertion also cause tachycardia. Tachycardia alone does not diagnose anaphylaxis, though it should increase suspicion in the right clinical context.", guideline_ref: "NIAID/FAAN Anaphylaxis Guidelines" },
          { text: "Anaphylaxis cannot occur from an intramuscular injection — only oral or IV medications cause it", correct: false, critical: true, explanation: "Anaphylaxis can occur from any route of exposure including intramuscular, subcutaneous, oral, IV, topical, and even inhalation. IM antibiotics like ceftriaxone are well-documented causes of anaphylaxis.", guideline_ref: "NIAID/FAAN Anaphylaxis Guidelines — Routes of Exposure" }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient now has audible wheezing and her voice is noticeably hoarse. You determine this is anaphylaxis. Place the following interventions in the correct order:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "Over the past two minutes, the patient's symptoms have progressed. She now has audible wheezing, her lip swelling has increased, and she reports feeling like her tongue is getting bigger. Her SpO2 has dropped to 93%.",
        vitals_update: { hr: 118, bp: "96/62", rr: 26, spo2: 93 },
        explanation: "Epinephrine IM is the single most important intervention in anaphylaxis and should never be delayed. It addresses all pathophysiology: bronchospasm, vasodilation, and edema. High-flow oxygen supports the airway. Positioning (supine with legs elevated) supports blood pressure unless respiratory distress requires upright positioning. IV fluid bolus treats distributive shock. Adjunct medications (diphenhydramine, albuterol) address remaining symptoms. Transport should not be delayed for adjuncts.",
        guideline_ref: "NIAID/FAAN Anaphylaxis Guidelines; AHA Anaphylaxis Algorithm; NAEMSP Epinephrine Position Statement",
        items: [
          "Administer epinephrine IM (0.3 mg 1:1,000) in the lateral thigh immediately",
          "Apply high-flow oxygen via non-rebreather mask",
          "Position patient appropriately — monitor airway closely for worsening edema",
          "Establish IV access and administer normal saline bolus for hypotension",
          "Consider adjunct medications: diphenhydramine, nebulized albuterol for persistent wheezing",
          "Initiate rapid transport — be prepared to repeat epinephrine in 5-15 minutes if no improvement"
        ]
      },
      {
        phase: "evaluation",
        prompt: "Categorize the following signs and symptoms as features of a MILD allergic reaction or SEVERE allergic reaction (anaphylaxis):",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "After epinephrine administration, the patient's wheezing has improved and her swelling has stabilized. During transport, you review the distinction between mild and severe allergic reactions with your partner to reinforce clinical decision-making.",
        vitals_update: { hr: 100, bp: "108/70", spo2: 96 },
        explanation: "The critical distinction is systemic severity and involvement of multiple organ systems. Mild reactions involve the skin and cause discomfort but do not threaten life. Severe reactions (anaphylaxis) involve the airway, breathing, or circulation and are immediately life-threatening. Any airway or hemodynamic compromise in an allergic reaction = anaphylaxis = epinephrine.",
        guideline_ref: "NIAID/FAAN Anaphylaxis Diagnostic Criteria; World Allergy Organization Anaphylaxis Guidelines",
        categories: {
          "Mild Allergic Reaction": [
            "Localized hives or urticaria without spread",
            "Itching and skin redness at the exposure site",
            "Mild, localized swelling (e.g., small area around injection)",
            "Runny nose or mild sneezing",
            "Isolated mild nausea without other systemic symptoms"
          ],
          "Severe Allergic Reaction (Anaphylaxis)": [
            "Stridor or hoarseness indicating airway edema",
            "Wheezing or significant bronchospasm",
            "Hypotension or signs of shock (tachycardia, pallor, altered mental status)",
            "Widespread angioedema (lips, tongue, throat swelling)",
            "Abdominal cramping with vomiting AND skin/respiratory involvement"
          ]
        }
      }
    ]
  },
  {
    id: "nat-med-10",
    title: "Acute Abdomen / GI Emergency",
    dispatch: "65-year-old male, severe stomach pain, sweating",
    category: "Medical Emergencies",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 65, sex: "M", cc: "Severe abdominal pain" },
    scene: "You arrive at a restaurant. A 65-year-old male is lying on his side on the floor near the restrooms, knees drawn to his chest. He is pale and diaphoretic. The restaurant manager states the patient suddenly grabbed his stomach, nearly collapsed, and has been unable to stand. There is no evidence of trauma.",
    history: {
      pmh: "Peptic ulcer disease, atrial fibrillation, hypertension, abdominal aortic aneurysm (4.2 cm, monitored)",
      meds: "Warfarin, metoprolol, omeprazole, lisinopril",
      allergies: "Aspirin (GI bleeding)"
    },
    vitals: { hr: 116, bp: "88/56", rr: 24, spo2: 97, gcs: 15, temp: "36.4°C" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient has sudden severe abdominal pain with hypotension, tachycardia, and a known abdominal aortic aneurysm. Which of the following is the MOST important consideration guiding your management?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "On palpation, the patient's abdomen is rigid and diffusely tender. He guards severely with any touch. He reports the pain came on suddenly 'like someone stabbed me' and rates it 10/10. You note his medical alert bracelet lists warfarin use.",
        clinical_pearl: "Any patient with a known AAA who presents with sudden abdominal or back pain and hypotension should be treated as a ruptured AAA until proven otherwise. This is a true surgical emergency — survival depends on rapid transport to a surgical center. Do not waste time on the scene attempting extensive assessment. These patients can decompensate and die within minutes.",
        options: [
          { text: "This presentation is consistent with a life-threatening vascular emergency — prioritize rapid transport to a surgical facility", correct: true, explanation: "The combination of known AAA, sudden severe abdominal pain, and hemodynamic instability (tachycardia, hypotension) is the classic presentation of a ruptured or leaking abdominal aortic aneurysm. This is a surgical emergency with high mortality, and time to the operating room is the primary determinant of survival.", guideline_ref: "ACS/SVS AAA Management Guidelines; NAEMSP Time-Sensitive Conditions" },
          { text: "The rigid abdomen indicates peritonitis from a perforated ulcer — give fluids and transport routinely", correct: false, explanation: "While a perforated ulcer is possible given his peptic ulcer history, the known AAA with hemodynamic instability makes ruptured aneurysm the most dangerous and most likely diagnosis. Both are surgical emergencies, but AAA rupture kills faster. Transport should be rapid, not routine.", guideline_ref: "ACS Acute Abdomen Assessment Guidelines" },
          { text: "Abdominal pain in elderly patients is usually not serious — focus on comfort measures", correct: false, critical: true, explanation: "Abdominal pain in elderly patients is MORE likely to represent serious pathology than in younger patients. Elderly patients often present atypically with muted symptoms even in catastrophic emergencies. This patient is hemodynamically unstable — this is clearly serious.", guideline_ref: "ACEP Geriatric Emergency Guidelines; Atypical Presentations in Elderly" },
          { text: "The hypotension is likely from a vasovagal response to pain — keep the patient supine and he should improve", correct: false, explanation: "While vasovagal syncope can cause transient hypotension, sustained hypotension with tachycardia, rigid abdomen, and known AAA is not vasovagal. This clinical picture suggests hemorrhagic or distributive shock from an intra-abdominal catastrophe.", guideline_ref: "AHA Shock Assessment Algorithm" }
        ]
      },
      {
        phase: "assessment",
        prompt: "Given this patient's presentation, which of the following history and physical findings INCREASE your concern for a life-threatening intra-abdominal emergency? Select ALL that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "You are performing a rapid assessment while your partner prepares the stretcher. The patient reports the pain radiates to his back and he feels like he might pass out. He also mentions his stools have been dark for the past few days.",
        clinical_pearl: "Dark or tarry stools (melena) indicate upper GI bleeding — in a patient on warfarin, this means he may already be volume-depleted from occult blood loss BEFORE this acute event. The combination of chronic anticoagulation, known AAA, and acute hemodynamic instability is an extremely high-risk presentation.",
        options: [
          { text: "Known abdominal aortic aneurysm with new-onset severe pain", correct: true, explanation: "A known AAA with sudden pain is the hallmark presentation of aneurysm expansion or rupture. The aneurysm size of 4.2 cm is below typical surgical threshold but can still rupture.", guideline_ref: "ACS/SVS AAA Screening and Management Guidelines" },
          { text: "Anticoagulant (warfarin) use — increases bleeding risk significantly", correct: true, explanation: "Warfarin impairs clotting and dramatically worsens outcomes in any hemorrhagic emergency. If this patient is bleeding internally, his body cannot form effective clots to slow the hemorrhage.", guideline_ref: "AHA Anticoagulant-Associated Hemorrhage Guidelines" },
          { text: "Pain radiating to the back — suggests retroperitoneal pathology", correct: true, explanation: "Back pain with abdominal pain suggests retroperitoneal involvement, which is consistent with AAA rupture (the aorta is retroperitoneal), pancreatitis, or other posterior abdominal pathology.", guideline_ref: "ACS Acute Abdomen Assessment — Pain Radiation Patterns" },
          { text: "Dark/tarry stools suggesting ongoing GI blood loss", correct: true, explanation: "Melena indicates blood loss from the upper GI tract. In a patient on warfarin with peptic ulcer disease, this may mean chronic blood loss contributing to his current hemodynamic instability.", guideline_ref: "ACG GI Bleeding Guidelines" },
          { text: "The patient ate at a restaurant, so this is most likely food poisoning", correct: false, explanation: "Food poisoning does not cause sudden-onset 10/10 pain with rigid abdomen and hemodynamic instability. The acuity and severity of this presentation far exceed a foodborne illness.", guideline_ref: "CDC Foodborne Illness — Typical Presentation and Timeline" },
          { text: "SpO2 of 97% indicates the patient is hemodynamically stable", correct: false, explanation: "SpO2 measures oxygenation, not perfusion or hemodynamic stability. A patient can maintain normal SpO2 while bleeding to death. The hypotension and tachycardia are the critical indicators of hemodynamic compromise.", guideline_ref: "AHA Shock Assessment — Limitations of Pulse Oximetry" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following prehospital interventions in the correct order for this patient:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient's blood pressure has dropped to 82/50 on repeat assessment. He is becoming increasingly confused and pale. You need to move quickly.",
        vitals_update: { hr: 124, bp: "82/50", gcs: 14 },
        explanation: "Scene time must be minimized — this patient needs a surgeon, not field interventions. Position supine, apply oxygen, keep warm to prevent coagulopathy worsening. IV access and judicious fluids can be initiated en route — do not delay transport for IV. Permissive hypotension (target SBP ~90) avoids disrupting any clot formation. Early surgical notification is critical for OR preparation.",
        guideline_ref: "NAEMSP Time-Sensitive Transport Guidelines; ACS Hemorrhagic Shock Management; Permissive Hypotension in Hemorrhage",
        items: [
          "Immediate movement to ambulance — minimize on-scene time",
          "Position supine, apply high-flow oxygen, keep patient warm",
          "Initiate rapid transport to nearest appropriate surgical facility",
          "Establish IV access en route — administer judicious fluid bolus (avoid aggressive resuscitation)",
          "Provide early notification to receiving facility: suspected surgical abdomen, hemodynamic instability, anticoagulant use",
          "Continuous reassessment of mental status and vitals during transport"
        ]
      }
    ]
  }
];
