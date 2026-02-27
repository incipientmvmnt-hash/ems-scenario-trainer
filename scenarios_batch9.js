const BATCH9 = [
  // ============================================================
  // BEHAVIORAL/PSYCHIATRIC SCENARIOS (4)
  // ============================================================
  {
    id: "nat-beh-04",
    title: "Acute Psychosis with Command Hallucinations",
    dispatch: "Welfare check requested by family member for a 28-year-old male acting erratically",
    category: "Behavioral/Psychiatric",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 28, sex: "M", cc: "Bizarre behavior, talking to unseen persons" },
    scene: "Small apartment, furniture overturned, patient standing in corner speaking to the wall. Family member outside states he stopped taking medications 2 weeks ago. No weapons visible.",
    history: {
      pmh: "Schizophrenia diagnosed age 22, two prior psychiatric admissions",
      meds: "Risperidone (stopped 2 weeks ago)",
      allergies: "NKDA"
    },
    vitals: { hr: 112, bp: "148/92", rr: 22, spo2: 98, gcs: 13, temp: "98.8°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "You arrive on scene. The patient is pacing and yelling at the wall. What is your FIRST priority?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Approach quickly and establish physical contact to build rapport", correct: false },
          { text: "Ensure scene safety, identify exits, request law enforcement if not already dispatched", correct: true },
          { text: "Immediately prepare physical restraints", correct: false },
          { text: "Begin a detailed psychiatric history from the patient", correct: false }
        ],
        explanation: "Scene safety is paramount with behavioral emergencies. Identify exits, remove potential weapons, and ensure adequate personnel before approaching. Law enforcement should be requested for safety standby.",
        guideline_ref: "NAEMSP Position Statement on EMS Management of Patients in Behavioral Crisis (2020)",
        clinical_pearl: "Never position yourself between the patient and the only exit. Always have an escape route—this protects both you and reduces the patient's feeling of being trapped."
      },
      {
        phase: "assessment",
        prompt: "The patient suddenly becomes quiet and stares at you intensely. He says 'They're telling me you're one of them.' Categorize the following findings as either 'Positive Symptoms of Psychosis' or 'Negative Symptoms of Psychosis':",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Auditory command hallucinations",
          "Paranoid delusions",
          "Flat affect and social withdrawal (per family)",
          "Disorganized speech patterns",
          "Decreased motivation and self-care (per family)",
          "Thought broadcasting belief"
        ],
        categories: ["Positive Symptoms of Psychosis", "Negative Symptoms of Psychosis"],
        correctCategories: [
          "Positive Symptoms of Psychosis",
          "Positive Symptoms of Psychosis",
          "Negative Symptoms of Psychosis",
          "Positive Symptoms of Psychosis",
          "Negative Symptoms of Psychosis",
          "Positive Symptoms of Psychosis"
        ],
        explanation: "Positive symptoms represent additions to normal experience (hallucinations, delusions, disorganized speech). Negative symptoms represent loss of normal function (flat affect, avolition, social withdrawal). Understanding this distinction helps communicate effectively with receiving facilities.",
        guideline_ref: "APA Practice Guidelines for Schizophrenia (2020)",
        clinical_pearl: "Medication non-compliance is the #1 cause of acute psychotic decompensation. Always ask family when the patient stopped meds—this helps the ED prioritize re-stabilization."
      },
      {
        phase: "treatment",
        prompt: "The patient becomes increasingly agitated, clenching fists and advancing toward you. Verbal de-escalation has failed. Select the appropriate pharmacological intervention:",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Midazolam 5 mg IM", correct: true },
          { text: "Naloxone 2 mg IN", correct: false },
          { text: "Diphenhydramine 50 mg IV push", correct: false },
          { text: "Epinephrine 0.3 mg IM", correct: false }
        ],
        critical: true,
        explanation: "IM midazolam is the preferred first-line agent for acute undifferentiated agitation when IV access is not established. It provides rapid sedation (onset 5-10 min IM) and can be given without patient cooperation. Ketamine IM is an alternative per many protocols.",
        guideline_ref: "NAEMSP/ACEP Prehospital Use of Sedatives for Acute Behavioral Disturbance (2021)",
        clinical_pearl: "IM injection is preferred over IV in acutely combative patients—attempting IV access on an uncooperative patient risks needlestick injury to providers and the patient."
      },
      {
        phase: "transport",
        prompt: "After sedation, the patient is calmer (GCS 12). You apply soft restraints per protocol. Place the following post-sedation monitoring steps in the correct priority order:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Continuous SpO2 and EtCO2 monitoring",
          "Reassess airway patency and respiratory effort",
          "Place patient in lateral recumbent position if possible",
          "Document time of medication administration and ongoing reassessments",
          "Obtain IV/IO access for potential repeat dosing"
        ],
        correctOrder: [
          "Reassess airway patency and respiratory effort",
          "Place patient in lateral recumbent position if possible",
          "Continuous SpO2 and EtCO2 monitoring",
          "Obtain IV/IO access for potential repeat dosing",
          "Document time of medication administration and ongoing reassessments"
        ],
        explanation: "Airway management is always first after chemical sedation. Lateral positioning reduces aspiration risk. Continuous monitoring with waveform capnography detects hypoventilation before SpO2 drops. IV access allows repeat dosing if needed.",
        guideline_ref: "NAEMSP Position Statement on Patient Restraint (2020); EtCO2 monitoring per AHA guidelines",
        clinical_pearl: "Waveform capnography is your earliest warning of respiratory depression post-sedation—SpO2 desaturation is a LATE finding. If EtCO2 rises above 50 mmHg or waveform becomes irregular, intervene immediately."
      }
    ]
  },

  {
    id: "nat-beh-05",
    title: "Panic Attack vs Acute Coronary Event",
    dispatch: "32-year-old female with chest pain and difficulty breathing at an office building",
    category: "Behavioral/Psychiatric",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 32, sex: "F", cc: "Chest tightness, can't breathe, tingling in hands" },
    scene: "Office break room, patient sitting in chair hyperventilating. Coworkers state it started suddenly during a meeting. Patient is tearful and says 'I think I'm dying.'",
    history: {
      pmh: "Generalized anxiety disorder, prior panic attacks, oral contraceptive use",
      meds: "Sertraline 100 mg daily, combined oral contraceptive",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 118, bp: "136/88", rr: 28, spo2: 99, gcs: 15, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which findings would INCREASE your suspicion for a true cardiac event rather than panic attack? Select all that apply.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Chest pain that radiates to the jaw or left arm", correct: true },
          { text: "Bilateral hand and perioral tingling", correct: false },
          { text: "Diaphoresis with exertion-related onset", correct: true },
          { text: "A feeling of impending doom", correct: false },
          { text: "New ST-segment changes on 12-lead ECG", correct: true },
          { text: "Symptoms that improve with slow breathing coaching", correct: false }
        ],
        explanation: "Radiating pain, diaphoresis with exertional onset, and ECG changes are red flags for ACS. 'Impending doom' occurs in both conditions. Bilateral tingling suggests hyperventilation-induced respiratory alkalosis. Never assume panic without ruling out life threats.",
        guideline_ref: "AHA/ACC Guidelines for Management of ACS (2021); ACEP Clinical Policy on Chest Pain (2018)",
        clinical_pearl: "Oral contraceptive use is an independent risk factor for venous thromboembolism. In a young female with chest pain and dyspnea, PE should also be on your differential—not just ACS vs panic."
      },
      {
        phase: "assessment",
        prompt: "You obtain a 12-lead ECG. It shows sinus tachycardia at 116 bpm with no ST changes. The patient's symptoms are improving with coaching. What is the appropriate next step?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Cancel transport—the ECG is normal and symptoms are improving", correct: false },
          { text: "Continue assessment, maintain IV access, transport for evaluation", correct: true },
          { text: "Administer aspirin 324 mg and nitroglycerin since chest pain is present", correct: false },
          { text: "Administer a benzodiazepine for anxiety", correct: false }
        ],
        critical: true,
        explanation: "A normal prehospital ECG does NOT rule out ACS—serial ECGs and troponin levels are needed. All chest pain patients warrant transport and ED evaluation. Aspirin may be appropriate but nitroglycerin requires more thorough assessment first. Benzodiazepines should not be the primary intervention without ruling out organic causes.",
        guideline_ref: "AHA/ACC Chest Pain Guidelines (2021)",
        clinical_pearl: "Up to 12% of patients with NSTEMI have a completely normal initial ECG. Never let a 'clean' 12-lead give you tunnel vision—the prehospital ECG is a snapshot, not a verdict."
      },
      {
        phase: "treatment",
        prompt: "Review the following table comparing panic attack and cardiac event presentations. Which row contains an ERROR?",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "| Feature | Panic Attack | Cardiac Event |\n|---|---|---|\n| Onset | Sudden, often at rest | Often exertional |\n| Duration | 10-30 minutes typically | Variable, often >30 min |\n| Pain character | Sharp, localized | Pressure, squeezing |\n| Associated symptoms | Tingling, derealization | Diaphoresis, nausea |\n| ECG findings | Normal sinus or sinus tach | ST changes, arrhythmias |\n| Response to coaching | Often improves | No improvement |\n| Age relevance | Can occur at any age | Risk increases with age, but occurs at any age |",
        options: [
          { text: "Row 1 (Onset) — cardiac events can also occur at rest", correct: true },
          { text: "Row 3 (Pain character) — this is accurately described", correct: false },
          { text: "Row 5 (ECG findings) — panic attacks always show ST depression", correct: false },
          { text: "Row 7 (Age relevance) — this is accurately described", correct: false }
        ],
        explanation: "ACS can absolutely present at rest (unstable angina, vasospastic angina, STEMI). Describing cardiac events as 'often exertional' is misleading and dangerous—it may cause providers to dismiss resting chest pain.",
        guideline_ref: "AHA/ACC Guidelines for Management of ACS (2021)",
        clinical_pearl: "Prinzmetal's (vasospastic) angina classically occurs at REST, often in the early morning hours, and can cause dramatic ST elevation that mimics STEMI. Young patients with 'panic attacks' at 3 AM deserve a 12-lead."
      }
    ]
  },

  {
    id: "nat-beh-06",
    title: "Dementia Patient with Combative Behavior",
    dispatch: "78-year-old male, combative, at a memory care facility",
    category: "Behavioral/Psychiatric",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 78, sex: "M", cc: "Acute agitation and combativeness, not at baseline per staff" },
    scene: "Memory care unit, patient in his room attempting to strike staff. Room is disheveled. Staff reports behavior change started 2 hours ago; he is normally cooperative and redirectable. He had a mechanical fall yesterday but was not sent to ED.",
    history: {
      pmh: "Alzheimer's dementia (moderate), hypertension, type 2 diabetes, recent UTI treated with antibiotics",
      meds: "Donepezil, lisinopril, metformin, trimethoprim-sulfamethoxazole (day 3 of 7)",
      allergies: "Penicillin (rash)"
    },
    vitals: { hr: 102, bp: "168/94", rr: 20, spo2: 95, gcs: 12, temp: "101.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient's acute behavior change is NOT at baseline. What is the most likely underlying cause to investigate?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Progression of Alzheimer's disease", correct: false },
          { text: "Delirium secondary to an acute medical condition", correct: true },
          { text: "Primary psychiatric disorder requiring sedation", correct: false },
          { text: "Attention-seeking behavior", correct: false }
        ],
        explanation: "Acute behavior change in a dementia patient is delirium until proven otherwise. This patient has multiple delirium risk factors: active UTI, fever (101.2°F), recent fall (subdural hematoma risk), advanced age, and baseline cognitive impairment. Dementia progression is gradual, not acute.",
        guideline_ref: "AGS Delirium Prevention and Management Guidelines (2023); Geriatric Emergency Medicine Guidelines (ACEP/AGS 2022)",
        clinical_pearl: "The mnemonic DELIRIUMS covers common delirium causes: Drugs, Electrolytes, Low oxygen, Infection, Retention (urinary), Intracranial, Metabolic, Subdural hematoma. This patient checks multiple boxes."
      },
      {
        phase: "assessment",
        prompt: "Given this patient's history, which acute conditions must you consider? Select all that apply.",
        type: "mr",
        selectCount: 4,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Sepsis from undertreated or resistant UTI", correct: true },
          { text: "Subdural hematoma from yesterday's fall", correct: true },
          { text: "Hypoglycemia from metformin and possible poor oral intake", correct: true },
          { text: "Acute onset schizophrenia", correct: false },
          { text: "Hypertensive emergency with end-organ damage", correct: true },
          { text: "Alzheimer's medication side effects causing hallucinations", correct: false }
        ],
        explanation: "Sepsis (fever + UTI + tachycardia), subdural hematoma (fall + anticoagulant-age risk), hypoglycemia (metformin + likely decreased intake), and hypertensive emergency (168/94 with altered mentation) are all plausible. New-onset schizophrenia at age 78 is essentially unheard of.",
        guideline_ref: "Surviving Sepsis Campaign (2021); ACEP Geriatric Emergency Guidelines (2022)",
        clinical_pearl: "Elderly patients on metformin who become acutely ill often stop eating but keep taking medications. Always check blood glucose in altered elderly patients—it takes 30 seconds and can be immediately life-saving."
      },
      {
        phase: "treatment",
        prompt: "You need to assess this patient but he swings at anyone who approaches. Place the following de-escalation and management steps in the correct order:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Reduce environmental stimulation (dim lights, limit personnel, reduce noise)",
          "Use calm, simple, one-step commands with the patient's name",
          "Check blood glucose as the first hands-on assessment",
          "If de-escalation fails, consider chemical restraint with appropriate agent and dose reduction for age",
          "Perform a focused trauma assessment (head/neuro) given fall history"
        ],
        correctOrder: [
          "Reduce environmental stimulation (dim lights, limit personnel, reduce noise)",
          "Use calm, simple, one-step commands with the patient's name",
          "Check blood glucose as the first hands-on assessment",
          "Perform a focused trauma assessment (head/neuro) given fall history",
          "If de-escalation fails, consider chemical restraint with appropriate agent and dose reduction for age"
        ],
        explanation: "Environmental modification and verbal approaches come first. Blood glucose is the most rapidly correctable life threat. Head/neuro exam is critical given the fall history. Chemical restraint is last resort in elderly patients due to increased sensitivity and risk of over-sedation.",
        guideline_ref: "AGS Beers Criteria (2023); NAEMSP Behavioral Emergency Guidelines (2020)",
        clinical_pearl: "Dose-reduce ALL sedatives by 50% in elderly patients. A standard adult dose of midazolam can cause prolonged respiratory depression in a 78-year-old. Start low, go slow—you can always give more."
      }
    ]
  },

  {
    id: "nat-beh-07",
    title: "PTSD Crisis in Combat Veteran",
    dispatch: "38-year-old male, 'mental health crisis,' caller reports the patient is barricaded in his garage",
    category: "Behavioral/Psychiatric",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: 38, sex: "M", cc: "Acute distress, hypervigilance, reports hearing explosions" },
    scene: "Residential garage, patient sitting against far wall behind a workbench. He is alert but hypervigilant, scanning the room. Spouse outside states neighborhood fireworks triggered the episode. She confirms he owns firearms but believes they are locked in a bedroom safe. Patient has been talking about 'not being able to do this anymore.'",
    history: {
      pmh: "PTSD (combat-related, 2 deployments), TBI (mild, blast injury 2014), depression, chronic insomnia",
      meds: "Prazosin 2 mg qhs, sertraline 150 mg daily, trazodone 100 mg qhs",
      allergies: "NKDA"
    },
    vitals: { hr: 108, bp: "152/96", rr: 24, spo2: 98, gcs: 15, temp: "98.6°F" },
    questions: [
      {
        phase: "scene_size_up",
        prompt: "Before approaching this patient, which scene safety considerations are MOST important? Select all that apply.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Confirm law enforcement is on scene or en route given mention of firearm access", correct: true },
          { text: "Have spouse remove or secure all firearms before you enter", correct: true },
          { text: "Rush in to establish rapport before the patient escalates further", correct: false },
          { text: "Identify yourself clearly from a distance and ask permission to approach", correct: true },
          { text: "Enter the garage wearing body armor and a tactical helmet", correct: false },
          { text: "Use a loud, authoritative voice to establish command presence", correct: false }
        ],
        explanation: "Firearm access in a mental health crisis is the #1 scene safety concern. Law enforcement coordination and weapon securing are essential before approach. Identifying yourself from a distance respects the patient's hypervigilance and reduces perceived threat. Aggressive postures or commanding tones can trigger defensive responses in PTSD patients.",
        guideline_ref: "NAEMSP/ACEP Joint Statement on Law Enforcement and EMS Response to Behavioral Emergencies (2021); VA/DoD PTSD Clinical Practice Guidelines (2023)",
        clinical_pearl: "Veterans in crisis may perceive EMS uniforms and equipment as military-adjacent. Approach slowly, keep hands visible, and avoid standing directly over the patient—this mirrors threat postures from combat."
      },
      {
        phase: "assessment",
        prompt: "You've established contact. The patient is cooperative but distressed. He says 'I'm not going to hurt anyone, I just can't make it stop.' What is the most appropriate communication approach?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Tell him to 'calm down' and that 'everything is fine'", correct: false },
          { text: "Acknowledge his distress, use grounding techniques, and ask directly about suicidal thoughts", correct: true },
          { text: "Avoid mentioning suicide to prevent giving him the idea", correct: false },
          { text: "Immediately begin a physical exam to look for injuries", correct: false }
        ],
        critical: true,
        explanation: "Directly asking about suicidal ideation does NOT increase risk—evidence consistently shows it reduces distress by allowing the person to feel heard. 'I can't make it stop' combined with 'not being able to do this anymore' are significant warning phrases. Grounding techniques (5-4-3-2-1 sensory method) can help manage acute flashbacks.",
        guideline_ref: "Columbia Suicide Severity Rating Scale (C-SSRS); National Suicide Prevention Resource Center Best Practices (2022); VA/DoD PTSD CPG (2023)",
        clinical_pearl: "The 5-4-3-2-1 grounding technique works well for acute flashbacks: ask the patient to name 5 things they see, 4 they hear, 3 they can touch, 2 they smell, 1 they taste. It redirects the brain from the amygdala (threat) to the prefrontal cortex (present awareness)."
      },
      {
        phase: "treatment",
        prompt: "The following image shows a risk assessment framework. Based on this patient's presentation, identify which risk level applies:",
        type: "graphical",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "Risk Stratification Pyramid (bottom to top):\n🟢 LOW RISK — No suicidal ideation, future-oriented thinking, strong social support, engaged in treatment\n🟡 MODERATE RISK — Passive ideation ('can't do this'), some protective factors, willing to accept help, no specific plan\n🔴 HIGH RISK — Active ideation with plan, access to means, recent loss/crisis, hopelessness, prior attempts\n⚫ IMMINENT RISK — Stated intent, means in hand, goodbye behaviors, command hallucinations to self-harm",
        options: [
          { text: "Low Risk — patient is cooperative and has no stated plan", correct: false },
          { text: "Moderate Risk — passive ideation with some protective factors present", correct: false },
          { text: "High Risk — passive-to-active ideation, firearm access, acute crisis, TBI history", correct: true },
          { text: "Imminent Risk — patient has weapon in hand and stated intent", correct: false }
        ],
        critical: true,
        explanation: "This patient has multiple high-risk factors: statements suggesting suicidal ideation (passive evolving), access to lethal means (firearms), acute crisis trigger, TBI history (independent risk factor), PTSD, and depression. He is not imminent (no weapon in hand, no stated plan with timeline), but the combination of risk factors places him firmly in the high-risk category requiring emergent psychiatric evaluation.",
        guideline_ref: "Columbia Suicide Severity Rating Scale (C-SSRS); CDC Preventing Suicide: A Technical Package (2022)",
        clinical_pearl: "TBI is an independent risk factor for suicide, separate from PTSD. Veterans with comorbid TBI+PTSD have significantly higher suicide rates than either condition alone. Always document TBI history for the receiving facility."
      },
      {
        phase: "transport",
        prompt: "The patient agrees to transport. During the ride, he becomes quiet and withdrawn. Which action is most appropriate?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "Allow silence—he's calming down and doesn't need further intervention", correct: false },
          { text: "Maintain a calm, non-intrusive presence, periodically check in, and continue suicide risk monitoring", correct: true },
          { text: "Engage in detailed questioning about his combat experiences to understand his PTSD", correct: false },
          { text: "Play music to lighten the mood", correct: false }
        ],
        explanation: "Sudden calmness after acute distress can indicate the patient has made a decision (potentially dangerous). Maintain observation, check in periodically with simple open-ended questions, and document any behavioral changes. Probing combat trauma is inappropriate and can re-traumatize. Complete silence without monitoring is unsafe.",
        guideline_ref: "National Suicide Prevention Resource Center: Recommended Standard of Care (2022)",
        clinical_pearl: "A sudden shift from agitation to calm in a suicidal patient is one of the most dangerous warning signs in behavioral emergencies. It may indicate the patient has resolved their internal conflict by deciding to act. Never relax your vigilance because a patient 'seems better.'"
      }
    ]
  },

  // ============================================================
  // PHARMACOLOGY SCENARIOS (3)
  // ============================================================
  {
    id: "nat-pharm-03",
    title: "Beta-Blocker Overdose with Hemodynamic Compromise",
    dispatch: "55-year-old male, found unresponsive by wife, multiple medication bottles nearby",
    category: "Pharmacology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 55, sex: "M", cc: "Unresponsive, slow pulse per caller" },
    scene: "Master bedroom, patient supine on bed. Wife found him 30 minutes ago with a suicide note. Multiple empty bottles on nightstand including metoprolol succinate (50 mg, was full ~60 tablets), and an empty bottle of amlodipine (10 mg, ~30 tablets). Note written approximately 2 hours ago per timestamp.",
    history: {
      pmh: "Hypertension, atrial fibrillation, depression, type 2 diabetes",
      meds: "Metoprolol succinate 50 mg daily, amlodipine 10 mg daily, apixaban 5 mg BID, metformin 1000 mg BID",
      allergies: "Lisinopril (angioedema)"
    },
    vitals: { hr: 38, bp: "72/40", rr: 10, spo2: 91, gcs: 7, temp: "96.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient has ingested both a beta-blocker and a calcium channel blocker. Categorize the following clinical findings by which drug class is PRIMARILY responsible:",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        items: [
          "Profound bradycardia (HR 38)",
          "Hypotension refractory to fluid bolus",
          "Bronchospasm (beta-2 blockade)",
          "Hyperglycemia (impaired insulin release)",
          "Depressed myocardial contractility",
          "Peripheral vasodilation"
        ],
        categories: ["Primarily Beta-Blocker Effect", "Primarily Calcium Channel Blocker Effect", "Both Drug Classes"],
        correctCategories: [
          "Both Drug Classes",
          "Both Drug Classes",
          "Primarily Beta-Blocker Effect",
          "Primarily Beta-Blocker Effect",
          "Both Drug Classes",
          "Primarily Calcium Channel Blocker Effect"
        ],
        explanation: "Both drug classes cause bradycardia, hypotension, and decreased contractility through different mechanisms. Bronchospasm and hyperglycemia (masked hypoglycemia) are beta-blocker-specific effects. Peripheral vasodilation is primarily a CCB effect (especially dihydropyridines like amlodipine).",
        guideline_ref: "ACMT Position Statement on Beta-Blocker and Calcium Channel Blocker Toxicity (2023); AHA ACLS Toxicology Guidelines",
        clinical_pearl: "Beta-blocker OD classically causes hypoglycemia (impaired glycogenolysis), while CCB OD causes HYPERglycemia (impaired insulin release). Finding hyperglycemia in a mixed OD suggests the CCB component is significant—this is a useful toxicologic differentiator."
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions for this combined beta-blocker/CCB overdose in the correct treatment priority order:",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Glucagon 3-5 mg IV bolus",
          "Atropine 1 mg IV for symptomatic bradycardia",
          "High-dose insulin (1 unit/kg IV bolus) with dextrose",
          "IV fluid bolus 20 mL/kg NS",
          "Calcium chloride 1-2 g IV (or calcium gluconate 3-6 g IV)",
          "Vasopressor infusion (norepinephrine)"
        ],
        correctOrder: [
          "IV fluid bolus 20 mL/kg NS",
          "Atropine 1 mg IV for symptomatic bradycardia",
          "Calcium chloride 1-2 g IV (or calcium gluconate 3-6 g IV)",
          "Glucagon 3-5 mg IV bolus",
          "High-dose insulin (1 unit/kg IV bolus) with dextrose",
          "Vasopressor infusion (norepinephrine)"
        ],
        critical: true,
        explanation: "Start with volume resuscitation and atropine (though often ineffective in significant OD). Calcium directly antagonizes CCB effects and should be given early. Glucagon bypasses the beta-receptor to increase cAMP and improve chronotropy/inotropy. High-dose insulin euglycemic therapy (HIET) is the definitive treatment for severe CCB/BB toxicity but requires careful glucose monitoring. Vasopressors are added if above measures fail.",
        guideline_ref: "ACMT Guidelines for Management of Beta-Blocker and Calcium Channel Blocker Poisoning (2023); ACLS Toxicology Algorithms",
        clinical_pearl: "High-dose insulin therapy (1 U/kg bolus + 1 U/kg/hr drip) is the single most effective intervention for severe BB/CCB toxicity—it improves cardiac output by enhancing myocardial glucose utilization. Start D10W co-infusion and check glucose every 15-20 minutes."
      },
      {
        phase: "treatment",
        prompt: "After atropine and calcium, the heart rate improves to 52 but BP remains 78/44. You initiate glucagon. What is the most important consideration with IV glucagon administration?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Glucagon must be diluted in D5W, not normal saline", correct: false },
          { text: "Glucagon commonly causes vomiting—position the patient to protect the airway", correct: true },
          { text: "Glucagon is contraindicated in diabetic patients", correct: false },
          { text: "Glucagon onset is 30-45 minutes IV so effects won't be seen in the field", correct: false }
        ],
        explanation: "Glucagon at therapeutic doses (3-5 mg) almost always causes vomiting. In a patient with GCS 7 and depressed airway reflexes, this creates significant aspiration risk. Ensure the patient is positioned appropriately and have suction immediately available. Glucagon onset IV is 1-3 minutes.",
        guideline_ref: "ACMT Position Statement on Glucagon Use in Poisoning (2023)",
        clinical_pearl: "Consider intubating BEFORE giving high-dose glucagon in a patient with depressed GCS. Emesis in an unprotected airway is a leading cause of aspiration death in poisoned patients."
      }
    ]
  },

  {
    id: "nat-pharm-04",
    title: "Polypharmacy Crisis in Geriatric Patient",
    dispatch: "82-year-old female, found on floor by home health aide, confused",
    category: "Pharmacology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 82, sex: "F", cc: "Found on floor, confused, unable to get up" },
    scene: "Living room floor, patient in nightgown. Home health aide arrived for morning visit and found patient on floor, unsure how long she's been down. Kitchen counter has a 14-day pill organizer and 9 additional prescription bottles. Patient lives alone.",
    history: {
      pmh: "Atrial fibrillation, CHF (EF 35%), hypertension, type 2 diabetes, osteoporosis, chronic kidney disease stage 3, depression, GERD",
      meds: "Warfarin 5 mg, digoxin 0.25 mg, furosemide 40 mg BID, lisinopril 20 mg, metformin 500 mg BID, alendronate 70 mg weekly, citalopram 20 mg, omeprazole 20 mg, potassium chloride 20 mEq, recently added: levofloxacin 500 mg (started 3 days ago for pneumonia)",
      allergies: "Codeine (nausea)"
    },
    vitals: { hr: 48, bp: "94/58", rr: 18, spo2: 93, gcs: 13, temp: "97.1°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient is on 10 medications. Which drug interaction is MOST likely causing her acute presentation of bradycardia and altered mental status?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Levofloxacin inhibiting digoxin clearance, causing digoxin toxicity", correct: true },
          { text: "Omeprazole interacting with warfarin causing bleeding", correct: false },
          { text: "Metformin and furosemide causing lactic acidosis", correct: false },
          { text: "Citalopram and lisinopril causing serotonin syndrome", correct: false }
        ],
        explanation: "Fluoroquinolones (levofloxacin) can significantly increase digoxin levels by reducing renal clearance and altering gut flora that metabolize digoxin. In a patient with CKD stage 3, this effect is amplified. Classic digoxin toxicity presents with bradycardia, altered mental status, GI symptoms, and visual changes. The 3-day timeline since adding levofloxacin fits perfectly.",
        guideline_ref: "AGS Beers Criteria (2023); AHA Scientific Statement on Digoxin Toxicity (2020)",
        clinical_pearl: "The therapeutic window for digoxin is one of the narrowest in medicine (0.5-2.0 ng/mL, toxic >2.0). In elderly patients with CKD, ANY new medication should trigger concern for digoxin level changes. When in doubt, treat the bradycardia."
      },
      {
        phase: "assessment",
        prompt: "You check the pill organizer and notice today's (Thursday) and yesterday's (Wednesday) compartments are still full. What additional complications should this raise concern for? Select all that apply.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Missed warfarin doses—but no acute risk from 2 missed doses", correct: false },
          { text: "Missed furosemide—risk of acute CHF exacerbation and pulmonary edema", correct: true },
          { text: "Missed potassium—but she's on furosemide so it may balance out", correct: false },
          { text: "The patient may have been on the floor for over 24 hours—assess for rhabdomyolysis and pressure injuries", correct: true },
          { text: "Hypothermia risk from prolonged floor exposure", correct: true },
          { text: "Missed omeprazole—risk of acute GI bleed", correct: false }
        ],
        explanation: "If both days' medications are untouched, the patient may have been down since Tuesday night—over 24 hours. Prolonged immobilization causes rhabdomyolysis (crush syndrome), pressure injuries, hypothermia (temp 97.1°F), and dehydration. Missed furosemide in a patient with EF 35% creates real risk of fluid overload. Missed omeprazole and warfarin are not acutely dangerous over 2 days.",
        guideline_ref: "ACEP Geriatric Emergency Guidelines (2022); NICE Guidelines on Falls in Older Adults (2022)",
        clinical_pearl: "A 'long lie' (>1 hour on the floor) in elderly patients carries 50% mortality at 6 months. Always assess for rhabdomyolysis (dark urine, muscle pain, elevated creatinine) and request CK levels at the ED. Aggressive IV hydration in the field can be renal-protective."
      },
      {
        phase: "treatment",
        prompt: "You suspect digoxin toxicity. The patient's heart rate is 48 with an irregular rhythm. What is the most appropriate prehospital treatment?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Atropine 0.5 mg IV; avoid cardioversion; transport rapidly for digoxin-specific antibody (Digibind)", correct: true },
          { text: "Transcutaneous pacing at 70 bpm", correct: false },
          { text: "Amiodarone 150 mg IV for the irregular rhythm", correct: false },
          { text: "Synchronized cardioversion at 100J", correct: false }
        ],
        critical: true,
        explanation: "Atropine may temporarily improve heart rate in digoxin toxicity. Electrical cardioversion and pacing are relatively CONTRAINDICATED in digoxin toxicity—they can precipitate lethal ventricular arrhythmias in a digitalized heart. Amiodarone is also avoided. Definitive treatment is digoxin-specific antibody fragments (Digibind/DigiFab) at the hospital.",
        guideline_ref: "AHA ACLS Guidelines (2020); AHA Scientific Statement on Management of Digoxin Toxicity",
        clinical_pearl: "Electrical therapy in digoxin toxicity can trigger intractable ventricular fibrillation. If pacing is absolutely necessary for hemodynamic collapse, use the LOWEST effective current. But the real answer is rapid transport for Digibind—nothing you carry replaces it."
      }
    ]
  },

  {
    id: "nat-pharm-05",
    title: "Steroid-Dependent Adrenal Crisis",
    dispatch: "44-year-old female, weakness and near-syncope at home",
    category: "Pharmacology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: 44, sex: "F", cc: "Extreme weakness, dizziness, abdominal pain, nearly passed out" },
    scene: "Patient sitting on bathroom floor, pale and diaphoretic. She states she has been vomiting for 2 days with a stomach virus and has been unable to keep her medications down. A MedicAlert bracelet reads 'Adrenal Insufficiency — Steroid Dependent.'",
    history: {
      pmh: "Primary adrenal insufficiency (Addison's disease), hypothyroidism, vitiligo",
      meds: "Hydrocortisone 20 mg AM / 10 mg PM, fludrocortisone 0.1 mg daily, levothyroxine 88 mcg daily — has NOT been able to take meds for 2 days",
      allergies: "NKDA"
    },
    vitals: { hr: 128, bp: "76/48", rr: 22, spo2: 97, gcs: 14, temp: "100.6°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient wears a MedicAlert bracelet for adrenal insufficiency and has been unable to take hydrocortisone for 2 days during an illness. Review the following diagram of the adrenal crisis cascade and identify the PRIMARY mechanism of her hypotension:",
        type: "graphical",
        level_filter: "AEMT-Paramedic",
        narrative: "Adrenal Crisis Cascade:\n\n[Stress/Illness] → [Increased cortisol demand]\n       ↓\n[Adrenal glands cannot respond] → [Cortisol deficiency]\n       ↓                                    ↓\n[Loss of vascular tone] ←——— [Decreased catecholamine sensitivity]\n       ↓                                    ↓\n[Refractory hypotension] ←—— [Impaired cardiac output]\n       ↓\n[Aldosterone deficiency] → [Sodium wasting + Potassium retention]\n       ↓                              ↓\n[Hypovolemia]              [Hyperkalemia → dysrhythmias]",
        options: [
          { text: "Hypovolemia from vomiting alone", correct: false },
          { text: "Cortisol deficiency causing loss of vascular tone and catecholamine resistance", correct: true },
          { text: "Septic shock from the stomach virus", correct: false },
          { text: "Hypothyroidism causing myxedema coma", correct: false }
        ],
        explanation: "Cortisol is essential for maintaining vascular tone and catecholamine receptor sensitivity. Without cortisol, blood vessels cannot constrict even with endogenous or exogenous catecholamines—this is why adrenal crisis causes shock that is REFRACTORY to fluids and vasopressors alone. Cortisol replacement is the definitive treatment.",
        guideline_ref: "Endocrine Society Clinical Practice Guideline: Adrenal Insufficiency (2016, updated 2022)",
        clinical_pearl: "Adrenal crisis is the only form of shock where the definitive treatment is a hormone, not a vasopressor. If you push pressors without steroids, the vasculature literally cannot respond. Always give steroids FIRST or simultaneously."
      },
      {
        phase: "treatment",
        prompt: "What is the correct prehospital treatment for this patient?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Normal saline bolus only — steroids are a hospital medication", correct: false },
          { text: "Dextrose 50% IV push for presumed hypoglycemia, hold fluids", correct: false },
          { text: "IV/IO NS bolus (1-2 L), hydrocortisone 100 mg IV/IM (or dexamethasone 4 mg if available), check glucose and treat if low", correct: true },
          { text: "Start a norepinephrine drip for refractory hypotension", correct: false }
        ],
        critical: true,
        explanation: "Adrenal crisis requires THREE things: aggressive fluid resuscitation (NS, not D5W), stress-dose steroids (hydrocortisone 100 mg IV/IM is first-line; dexamethasone 4 mg is an alternative), and glucose monitoring/replacement. Many EMS systems now carry hydrocortisone or dexamethasone for this indication. Vasopressors will be ineffective without cortisol replacement.",
        guideline_ref: "Endocrine Society Emergency Management of Adrenal Crisis (2022); NAEMSP Recommendations on Prehospital Steroid Administration",
        clinical_pearl: "Many patients with known adrenal insufficiency carry an emergency injection kit (Solu-Cortef 100 mg IM). ALWAYS check the patient's belongings and ask family—the life-saving medication may already be in their refrigerator or purse."
      },
      {
        phase: "transport",
        prompt: "En route, you check a blood glucose and it reads 54 mg/dL. The patient's BP after 500 mL NS is 82/50. Categorize the following lab abnormalities as 'Expected in Adrenal Crisis' or 'NOT Expected in Adrenal Crisis':",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        items: [
          "Hypoglycemia (glucose 54)",
          "Hyperkalemia",
          "Hyponatremia",
          "Metabolic alkalosis",
          "Hypercalcemia",
          "Elevated BUN/creatinine"
        ],
        categories: ["Expected in Adrenal Crisis", "NOT Expected in Adrenal Crisis"],
        correctCategories: [
          "Expected in Adrenal Crisis",
          "Expected in Adrenal Crisis",
          "Expected in Adrenal Crisis",
          "NOT Expected in Adrenal Crisis",
          "Expected in Adrenal Crisis",
          "Expected in Adrenal Crisis"
        ],
        explanation: "Adrenal crisis causes: hypoglycemia (cortisol is needed for gluconeogenesis), hyperkalemia (aldosterone deficiency impairs K+ excretion), hyponatremia (aldosterone-mediated Na+ wasting + ADH effects), hypercalcemia (cortisol normally suppresses calcium absorption), and elevated BUN/Cr (prerenal from hypovolemia). Metabolic ACIDOSIS (not alkalosis) occurs from poor perfusion.",
        guideline_ref: "Endocrine Society Clinical Practice Guideline: Adrenal Insufficiency (2022)",
        clinical_pearl: "Hyperkalemia in adrenal crisis can cause fatal cardiac arrhythmias. If you see peaked T-waves or widened QRS on the monitor, give calcium chloride 1g IV to stabilize the myocardium while the steroids take effect. The 12-lead is your friend in adrenal crisis."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { BATCH9 };
