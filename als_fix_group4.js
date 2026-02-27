const ALS_FIX_4 = {

  "nat-str-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "You perform a rapid neurological assessment. Using the Cincinnati Prehospital Stroke Scale (CPSS), which combination of findings is MOST consistent with an acute stroke?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient attempts to follow your commands. When she smiles, the right side of her face droops noticeably. When she raises both arms and closes her eyes, the right arm drifts downward within 5 seconds. Her speech is slurred and she substitutes incorrect words.",
        vitals_update: {},
        clinical_pearl: "The CPSS evaluates three components: facial droop, arm drift, and speech. Abnormality in ANY one component has a sensitivity of approximately 66% for stroke. Document the exact time of symptom onset — this drives treatment decisions at the hospital.",
        options: [
          {
            text: "Facial droop on the right, right arm drift, and abnormal speech — all three CPSS components are positive",
            correct: true,
            critical: false,
            explanation: "All three CPSS components are abnormal: unilateral facial droop, unilateral arm drift, and slurred/inappropriate speech. This is highly suggestive of acute stroke.",
            guideline_ref: "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke; 2021 National EMS Education Standards — Neurological Emergencies"
          },
          {
            text: "Bilateral arm weakness, normal speech, and facial droop — two of three CPSS components are positive",
            correct: false,
            critical: false,
            explanation: "Bilateral arm weakness is not typical of a unilateral stroke affecting one hemisphere. CPSS specifically assesses for unilateral findings.",
            guideline_ref: "AHA/ASA Prehospital Stroke Assessment"
          },
          {
            text: "Right arm drift and slurred speech only — facial symmetry is normal so only two components count",
            correct: false,
            critical: false,
            explanation: "The scenario clearly describes right-sided facial droop. All three components are positive, not just two.",
            guideline_ref: "Cincinnati Prehospital Stroke Scale"
          },
          {
            text: "Altered mental status and headache with normal motor findings — suggests metabolic cause rather than stroke",
            correct: false,
            critical: false,
            explanation: "The patient has clear motor deficits (facial droop, arm drift). While altered mental status can occur in stroke, the focal neurological findings here point strongly to stroke.",
            guideline_ref: "AHA/ASA Prehospital Stroke Assessment"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Place the following steps of your stroke assessment and early management in the correct order:",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Your CPSS is positive for all three components. You need to move efficiently — time is critical.",
        vitals_update: {},
        clinical_pearl: "Remember: 'Time is brain.' Each minute of large vessel occlusion results in the loss of approximately 1.9 million neurons. Establishing last known well time is as important as any intervention you perform.",
        options: [
          {
            text: "Establish last known well time and note current time",
            correct: true,
            critical: false,
            explanation: "First priority — last known well time determines eligibility for thrombolytics (up to 4.5 hours) and thrombectomy (up to 24 hours in select patients). Document it immediately.",
            guideline_ref: "AHA/ASA 2019 Acute Ischemic Stroke Guidelines"
          },
          {
            text: "Perform Cincinnati Prehospital Stroke Scale assessment",
            correct: true,
            critical: false,
            explanation: "Rapid validated stroke screen confirms suspicion and communicates findings efficiently to the receiving facility.",
            guideline_ref: "AHA/ASA Prehospital Stroke Care"
          },
          {
            text: "Check blood glucose level",
            correct: true,
            critical: false,
            explanation: "Hypoglycemia is the most common stroke mimic and is rapidly reversible. Checking glucose is essential to rule out this treatable cause.",
            guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards"
          },
          {
            text: "Provide early notification to a designated stroke center",
            correct: true,
            critical: false,
            explanation: "Early hospital notification activates the stroke team and reduces door-to-needle time. This should occur as soon as stroke is suspected, not upon arrival.",
            guideline_ref: "AHA/ASA Mission: Lifeline Stroke Severity-Based Routing"
          },
          {
            text: "Initiate rapid transport to the closest appropriate stroke center",
            correct: true,
            critical: false,
            explanation: "Transport to the closest appropriate stroke-capable facility — not necessarily the closest hospital. Do not delay transport for non-essential interventions.",
            guideline_ref: "AHA/ASA 2019 Guidelines; NAEMSP Position Statement on Stroke Routing"
          }
        ]
      },
      {
        phase: "transport",
        prompt: "Which of the following transport decisions are consistent with current evidence-based stroke guidelines? (Select ALL that apply)",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: true,
        narrative: "Your glucose is 142 mg/dL. CPSS is positive for all three components. Last known well time was 25 minutes ago. The closest hospital is 8 minutes away but is not a stroke center. A certified Primary Stroke Center is 18 minutes away. A Comprehensive Stroke Center is 30 minutes away.",
        vitals_update: {
          hr: 90,
          bp: "182/98",
          rr: 16,
          spo2: 96,
          gcs: 13
        },
        clinical_pearl: "Bypass protocols for stroke routing are increasingly evidence-based. The AHA recommends transport to the highest level of stroke care available within a reasonable time frame, considering patient severity and transport time differences.",
        options: [
          {
            text: "Transport to the Primary Stroke Center 18 minutes away, as it is the closest stroke-capable facility",
            correct: true,
            critical: false,
            explanation: "The Primary Stroke Center can provide IV thrombolytics. Bypassing the non-stroke-capable hospital is appropriate when a stroke center is within a reasonable additional transport time.",
            guideline_ref: "AHA/ASA Mission: Lifeline Stroke Routing; NAEMSP Position Statement"
          },
          {
            text: "Provide early notification to the receiving stroke center including last known well time and CPSS findings",
            correct: true,
            critical: false,
            explanation: "Pre-arrival notification with stroke scale results and last known well time significantly reduces door-to-treatment times.",
            guideline_ref: "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke"
          },
          {
            text: "Transport to the closest hospital 8 minutes away since it can stabilize the patient and transfer later",
            correct: false,
            critical: false,
            explanation: "The 'drip and ship' model adds significant delays. When a stroke center is within reasonable transport time, direct transport is preferred.",
            guideline_ref: "AHA/ASA Stroke System of Care; NAEMSP Stroke Routing"
          },
          {
            text: "Position the patient supine with the head of the stretcher elevated to 30 degrees during transport",
            correct: true,
            critical: false,
            explanation: "Head elevation to 30 degrees is recommended to optimize cerebral venous drainage and reduce intracranial pressure.",
            guideline_ref: "AHA/ASA 2019 Acute Stroke Guidelines"
          },
          {
            text: "Administer aspirin 324 mg to begin antiplatelet therapy during transport",
            correct: false,
            critical: true,
            explanation: "NEVER administer aspirin in the prehospital setting for suspected stroke. A CT scan must first rule out hemorrhagic stroke — aspirin could worsen an intracranial hemorrhage and be fatal.",
            guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Review the following clinical presentations. Identify which findings are consistent with ACUTE STROKE versus common STROKE MIMICS:",
        type: "graphical",
        level_filter: "EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Consider the following clinical scenarios and classify each as more likely stroke or more likely a stroke mimic. This distinction is important for clinical reasoning, though prehospital providers should treat all suspected strokes as emergencies.",
        vitals_update: {},
        clinical_pearl: "Up to 30% of suspected strokes are ultimately diagnosed as mimics. However, prehospital providers should err on the side of transporting to a stroke center — the consequences of missing a real stroke far outweigh overtriage. Hypoglycemia is the most common and most important mimic to rule out in the field.",
        options: [
          {
            text: "Sudden unilateral facial droop with arm weakness and speech difficulty in a patient with atrial fibrillation → ACUTE STROKE",
            correct: true,
            critical: false,
            explanation: "Classic acute stroke presentation: sudden onset, unilateral deficits, and a major risk factor (atrial fibrillation). This is a high-probability stroke.",
            guideline_ref: "AHA/ASA Stroke Recognition Guidelines"
          },
          {
            text: "Gradual onset of bilateral tingling in hands and feet with anxiety and hyperventilation → STROKE MIMIC",
            correct: true,
            critical: false,
            explanation: "Bilateral symptoms, gradual onset, and association with hyperventilation suggest a mimic — likely hyperventilation syndrome or anxiety. Stroke typically causes unilateral, sudden-onset deficits.",
            guideline_ref: "AHA/ASA Stroke Differential Diagnosis"
          },
          {
            text: "Unresponsive patient with blood glucose of 38 mg/dL and left-sided weakness → STROKE MIMIC",
            correct: true,
            critical: false,
            explanation: "Hypoglycemia is the most common stroke mimic and can produce focal neurological deficits identical to stroke. Treat the glucose first — if symptoms resolve, it was likely hypoglycemia.",
            guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards"
          },
          {
            text: "Sudden severe headache described as 'worst of my life' with vomiting and neck stiffness → ACUTE STROKE (hemorrhagic)",
            correct: true,
            critical: false,
            explanation: "This 'thunderclap headache' presentation with meningeal signs is classic for subarachnoid hemorrhage, a form of hemorrhagic stroke. This is a true neurological emergency.",
            guideline_ref: "AHA/ASA Subarachnoid Hemorrhage Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "You establish IV access and the patient's blood pressure is 182/98 mmHg. Which of the following statements regarding prehospital blood pressure management in suspected acute stroke are correct? (Select ALL that apply)",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "You have established a saline lock on the left (non-affected) arm. The patient's BP has remained elevated at 182/98. Your partner asks whether you should treat the hypertension.",
        vitals_update: {},
        clinical_pearl: "In acute ischemic stroke, hypertension is often a compensatory response to maintain cerebral perfusion through occluded or narrowed vessels (the ischemic penumbra). Aggressively lowering BP can extend the infarct by reducing perfusion to at-risk brain tissue. The threshold for prehospital treatment is generally >220/120 mmHg.",
        options: [
          {
            text: "Do NOT treat this blood pressure — permissive hypertension up to 220/120 mmHg is recommended prior to thrombolytic eligibility determination",
            correct: true,
            critical: false,
            explanation: "AHA/ASA guidelines recommend NOT lowering BP unless it exceeds 220/120 mmHg in patients who are not candidates for thrombolytics, or >185/110 in those who may receive tPA. At 182/98, this patient's BP should not be treated prehospitally.",
            guideline_ref: "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke"
          },
          {
            text: "Establish IV access with a saline lock — the receiving facility will need vascular access for CT contrast and potential thrombolytic administration",
            correct: true,
            critical: false,
            explanation: "Prehospital IV access saves critical time at the hospital. A saline lock on the non-affected side is ideal. Avoid dextrose-containing solutions unless treating confirmed hypoglycemia.",
            guideline_ref: "AHA/ASA 2019 Acute Stroke Guidelines; NAEMSP Stroke Care"
          },
          {
            text: "Administer labetalol 10 mg IV to bring the BP below 140/90 and reduce the risk of hemorrhagic conversion",
            correct: false,
            critical: true,
            explanation: "Aggressively lowering BP to 140/90 in acute ischemic stroke can extend the infarct by reducing perfusion to the ischemic penumbra. Prehospital BP reduction is only considered for extreme hypertension (>220/120) and should target modest reductions, not normotension.",
            guideline_ref: "AHA/ASA 2019 Guidelines — Blood Pressure Management in Acute Stroke"
          },
          {
            text: "Avoid dextrose-containing IV fluids unless treating confirmed hypoglycemia, as hyperglycemia worsens stroke outcomes",
            correct: true,
            critical: false,
            explanation: "Hyperglycemia is independently associated with worse outcomes in acute stroke. Use normal saline for IV access. Only administer dextrose for documented hypoglycemia.",
            guideline_ref: "AHA/ASA 2019 Guidelines; National EMS Education Standards"
          },
          {
            text: "Administer nitroglycerin sublingually to reduce afterload and improve cerebral blood flow",
            correct: false,
            critical: true,
            explanation: "Nitroglycerin causes unpredictable BP drops and is NOT indicated for stroke-related hypertension. The resulting hypotension can worsen cerebral ischemia catastrophically.",
            guideline_ref: "AHA/ASA 2019 Guidelines — Blood Pressure Management in Acute Stroke"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "You perform a more detailed stroke severity assessment. Match each component to the appropriate stroke severity scale.",
        type: "table",
        level_filter: "Paramedic",
        multi_select: false,
        narrative: "Medical command asks you to perform a severity-based stroke assessment to help determine if the patient may benefit from direct transport to a Comprehensive Stroke Center for thrombectomy rather than the closer Primary Stroke Center.",
        vitals_update: {},
        clinical_pearl: "Large vessel occlusion (LVO) screening tools help determine if a patient may benefit from mechanical thrombectomy, which is only available at Comprehensive Stroke Centers. The RACE, LAMS, and VAN scales are commonly used prehospital LVO screens. Identifying LVO early can save critical time by routing directly to a thrombectomy-capable center.",
        options: [
          {
            text: "Facial droop, arm drift, speech abnormality → Cincinnati Prehospital Stroke Scale (CPSS) — stroke detection screen",
            correct: true,
            critical: false,
            explanation: "CPSS is a detection tool — it identifies whether a stroke is likely occurring. It has high sensitivity but does not assess severity or predict LVO.",
            guideline_ref: "AHA/ASA Prehospital Stroke Screening; 2021 National EMS Education Standards"
          },
          {
            text: "Facial palsy grading, arm motor function, gaze deviation → RACE Scale — large vessel occlusion severity screen",
            correct: true,
            critical: false,
            explanation: "The Rapid Arterial oCclusion Evaluation (RACE) scale scores facial palsy, arm/leg motor function, gaze, and aphasia/agnosia. A score ≥5 suggests LVO with good sensitivity and specificity.",
            guideline_ref: "AHA/ASA Mission: Lifeline Stroke Severity-Based Routing"
          },
          {
            text: "Arm weakness severity, gaze deviation, level of consciousness → NIHSS — comprehensive in-hospital stroke severity scale",
            correct: true,
            critical: false,
            explanation: "The NIH Stroke Scale is the gold standard for stroke severity assessment, primarily used in-hospital. Some EMS systems train paramedics on abbreviated versions to communicate severity to receiving facilities.",
            guideline_ref: "AHA/ASA 2019 Guidelines; NIH Stroke Scale"
          },
          {
            text: "Visual field cut, aphasia, neglect → VAN Assessment — cortical sign screening for LVO",
            correct: true,
            critical: false,
            explanation: "The Vision-Aphasia-Neglect (VAN) assessment screens for cortical signs that suggest large vessel occlusion. Presence of any VAN finding in a CPSS-positive patient strongly suggests LVO.",
            guideline_ref: "AHA/ASA Stroke Severity Routing; VAN Assessment Validation Studies"
          }
        ]
      }
    ]
  },

  "nat-env-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "Based on this presentation, which condition does this patient MOST likely have, and what is the critical distinguishing feature from a less severe heat illness?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient's core temperature is 105.2°F. He is confused, combative, and unable to answer questions appropriately. His skin is hot and flushed. He has tachycardia, hypotension, and tachypnea.",
        vitals_update: {},
        clinical_pearl: "The critical distinction: heat STROKE has altered mental status; heat EXHAUSTION does not. A patient with a heat-related illness who is confused, combative, seizing, or unconscious has heat stroke until proven otherwise. Temperature >104°F (40°C) with altered mental status = heat stroke = true emergency with up to 80% mortality if untreated.",
        options: [
          {
            text: "Heat stroke — distinguished from heat exhaustion by the presence of altered mental status and core temperature above 104°F (40°C)",
            correct: true,
            critical: false,
            explanation: "Heat stroke is defined by core temperature >104°F (40°C) with CNS dysfunction (confusion, combativeness, seizures, coma). This is a life-threatening emergency. Heat exhaustion preserves normal mental status.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Heat Illness Guidelines"
          },
          {
            text: "Heat exhaustion — the vomiting, tachycardia, and hypotension indicate severe dehydration rather than true heat stroke",
            correct: false,
            critical: true,
            explanation: "This patient has altered mental status (GCS 12, confused, combative) and a temperature of 105.2°F — this is heat STROKE, not exhaustion. Misclassifying heat stroke as exhaustion delays critical cooling and can be fatal.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies"
          },
          {
            text: "Sympathomimetic toxidrome from MDMA — the altered mental status is from the drug, not the heat",
            correct: false,
            critical: false,
            explanation: "MDMA can cause hyperthermia and may be contributory, but the treatment is the same — aggressive cooling. Regardless of cause, a temperature of 105.2°F with altered mental status requires immediate cooling. Don't delay treatment debating the cause.",
            guideline_ref: "2021 National EMS Education Standards — Toxicology/Environmental"
          },
          {
            text: "Hyponatremia from excessive water intake — this is more common than heat stroke at outdoor events",
            correct: false,
            critical: false,
            explanation: "The history describes minimal water intake and alcohol/possible MDMA use, making hyponatremia unlikely. Additionally, hyponatremia does not typically cause core temperatures of 105°F.",
            guideline_ref: "Wilderness Medical Society Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following cooling interventions in order of priority for this heat stroke patient:",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "You have identified this as heat stroke. Rapid cooling is the definitive treatment — every minute of delay increases organ damage and mortality.",
        vitals_update: {},
        clinical_pearl: "The goal is to reduce core temperature to below 104°F (40°C) as rapidly as possible. Cold water immersion is the gold standard (cooling rate ~0.2°C/min). If immersion isn't possible, apply ice packs to the neck, axillae, and groin (areas of high blood flow), and wet the entire body with cool water while fanning. Do NOT administer antipyretics (acetaminophen/ibuprofen) — they don't work for heat stroke and may worsen liver/kidney injury.",
        options: [
          {
            text: "Remove the patient from the hot environment to a shaded or air-conditioned area",
            correct: true,
            critical: false,
            explanation: "First step — stop the heat exposure. Move to shade or a cooled ambulance. This alone won't suffice but prevents further heat gain.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies"
          },
          {
            text: "Remove excess clothing and begin cold water immersion if available, or apply ice packs to neck, axillae, and groin",
            correct: true,
            critical: false,
            explanation: "Aggressive cooling is the definitive treatment. Cold water immersion is the gold standard. If unavailable, ice packs to the neck, axillae, and groin target high-flow vascular areas for maximum heat exchange.",
            guideline_ref: "Wilderness Medical Society Heat Illness Guidelines; NAEMSP Position on Heat Stroke"
          },
          {
            text: "Wet the patient's entire body with cool water and fan continuously to maximize evaporative cooling",
            correct: true,
            critical: false,
            explanation: "Evaporative cooling (wetting + fanning) is effective and can be done simultaneously with ice packs. This creates additional cooling via convection and evaporation.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Cooling Methods"
          },
          {
            text: "Administer IV normal saline (if scope allows) for volume replacement — avoid ice-cold fluids that may cause shivering",
            correct: true,
            critical: false,
            explanation: "IV fluids address dehydration and support blood pressure. Room temperature or cool fluids are appropriate. Some evidence supports cold IV fluids for internal cooling, though shivering must be monitored as it generates heat.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Guidelines"
          },
          {
            text: "Initiate rapid transport to the hospital while continuing active cooling measures en route",
            correct: true,
            critical: false,
            explanation: "Heat stroke requires hospital-based monitoring, lab evaluation (rhabdomyolysis, coagulopathy, organ damage), and potentially more aggressive interventions. Never delay cooling for transport — do both simultaneously.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Match each heat illness classification to its characteristic clinical findings:",
        type: "table",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "Understanding the spectrum of heat-related illness helps providers accurately assess severity and determine appropriate treatment urgency.",
        vitals_update: {},
        clinical_pearl: "Heat illness exists on a spectrum, but heat stroke is NOT simply 'severe heat exhaustion' — it is a distinct pathological state involving thermoregulatory failure and systemic inflammatory response. Progression from exhaustion to stroke can occur rapidly, especially with continued exertion. When in doubt, treat for the more severe condition.",
        options: [
          {
            text: "Heat cramps → Painful muscle spasms during or after exertion in heat; normal mental status; normal to mildly elevated core temperature; treated with rest, cooling, and oral electrolyte replacement",
            correct: true,
            critical: false,
            explanation: "Heat cramps are the mildest heat illness. Caused by electrolyte losses in sweat, particularly sodium. Mental status is completely normal. Stretching, rest, and oral rehydration are usually sufficient.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies"
          },
          {
            text: "Heat exhaustion → Heavy sweating, weakness, nausea, headache, and dizziness; NORMAL mental status; core temperature typically 100–104°F; skin may be cool and clammy; responds to rest, cooling, and rehydration",
            correct: true,
            critical: false,
            explanation: "Heat exhaustion is moderate heat illness with systemic symptoms but preserved mental status. This is the critical distinction from heat stroke. These patients can deteriorate to heat stroke if not cooled.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Guidelines"
          },
          {
            text: "Exertional heat stroke → Core temperature >104°F (40°C) with ALTERED mental status (confusion, combativeness, seizures, coma); hot skin (may still be sweating); tachycardia; potential for multi-organ failure; requires immediate aggressive cooling",
            correct: true,
            critical: false,
            explanation: "Heat stroke is a true emergency defined by hyperthermia >104°F with CNS dysfunction. Contrary to classic teaching, exertional heat stroke patients often ARE still sweating. Do not rely on dry skin to diagnose heat stroke.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Heat Illness Guidelines"
          },
          {
            text: "Classic (non-exertional) heat stroke → Develops over days in elderly/chronically ill during heat waves; hot, dry skin typical; altered mental status; core temperature >104°F; high mortality without cooling",
            correct: true,
            critical: false,
            explanation: "Classic heat stroke affects the elderly, chronically ill, and those without air conditioning during prolonged heat waves. Unlike exertional, skin is typically dry. Same treatment: aggressive, rapid cooling.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; CDC Heat-Related Illness Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "You establish IV access on this heat stroke patient. Which of the following pharmacological and advanced interventions are appropriate? (Select ALL that apply)",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "Despite aggressive external cooling, the patient remains combative with a GCS of 10. His temperature is now 104.6°F. He has had one brief generalized seizure lasting approximately 20 seconds. IV access has been established. BP is 92/58, HR 140.",
        vitals_update: {
          hr: 140,
          bp: "92/58",
          rr: 26,
          spo2: 94,
          gcs: 10,
          temp: "104.6°F"
        },
        clinical_pearl: "Benzodiazepines are the first-line treatment for heat stroke-related seizures AND shivering. Shivering is counterproductive as it generates heat and increases metabolic demand. Midazolam IM/IV is preferred for rapid control. Avoid antipyretics entirely — the hyperthermia is not mediated by prostaglandins, so acetaminophen and NSAIDs are ineffective and may worsen hepatic and renal injury.",
        options: [
          {
            text: "Administer a 20 mL/kg normal saline bolus to address hypotension and dehydration",
            correct: true,
            critical: false,
            explanation: "This patient is hypotensive (92/58) with tachycardia — aggressive IV fluid resuscitation with isotonic crystalloid is indicated. Heat stroke causes massive fluid losses through sweating and third-spacing. Target a systolic BP >90 mmHg.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; Wilderness Medical Society Heat Illness Guidelines"
          },
          {
            text: "Administer midazolam 5 mg IV/IM for seizure control and to prevent shivering during cooling",
            correct: true,
            critical: false,
            explanation: "Benzodiazepines serve dual purpose in heat stroke: they terminate seizures and suppress shivering, which generates heat and increases oxygen consumption. Midazolam IM is particularly useful if IV access is difficult in a combative patient.",
            guideline_ref: "2021 National EMS Education Standards — Environmental/Neurological Emergencies; NAEMSP Heat Stroke Management"
          },
          {
            text: "Administer acetaminophen 1000 mg rectally to reduce the core temperature",
            correct: false,
            critical: false,
            explanation: "Antipyretics (acetaminophen, ibuprofen) are INEFFECTIVE for heat stroke. Heat stroke hyperthermia results from thermoregulatory failure and excessive heat production, not prostaglandin-mediated fever. Additionally, acetaminophen may worsen the hepatic injury commonly seen in heat stroke.",
            guideline_ref: "Wilderness Medical Society Heat Illness Guidelines; NAEMSP Position on Heat Stroke"
          },
          {
            text: "Place the patient on a cardiac monitor and obtain a 12-lead ECG",
            correct: true,
            critical: false,
            explanation: "Heat stroke causes electrolyte derangements (hypokalemia, hyperkalemia, hypomagnesemia) that can produce life-threatening dysrhythmias. Continuous cardiac monitoring is essential. The 12-lead may reveal ST changes, QT prolongation, or conduction abnormalities.",
            guideline_ref: "2021 National EMS Education Standards — Environmental Emergencies; AHA Guidelines"
          },
          {
            text: "Administer dantrolene 2.5 mg/kg IV as the definitive treatment for heat stroke",
            correct: false,
            critical: false,
            explanation: "Dantrolene is the treatment for malignant hyperthermia (an anesthetic complication), NOT environmental heat stroke. While both involve dangerous hyperthermia, the mechanisms differ. Dantrolene has not shown benefit in exertional or classic heat stroke.",
            guideline_ref: "Wilderness Medical Society Heat Illness Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Given the possible MDMA ingestion, which additional ALS considerations are important for this patient's management?",
        type: "mc",
        level_filter: "Paramedic",
        multi_select: false,
        narrative: "Friends now confirm the patient took two MDMA tablets approximately 3 hours ago. He has been dancing in the sun since. You are continuing cooling measures and fluid resuscitation en route. The cardiac monitor shows sinus tachycardia at 140 bpm with no ectopy.",
        vitals_update: {},
        clinical_pearl: "MDMA-associated hyperthermia can be more refractory to cooling than purely exertional heat stroke because the drug directly impairs thermoregulation and increases serotonin-mediated heat production. These patients are at particularly high risk for rhabdomyolysis, DIC, and serotonin syndrome. Aggressive fluid resuscitation is critical to protect the kidneys from myoglobin damage.",
        options: [
          {
            text: "Continue aggressive cooling and fluid resuscitation; administer benzodiazepines for agitation; avoid physical restraint which increases heat production and rhabdomyolysis risk",
            correct: true,
            critical: false,
            explanation: "MDMA-related hyperthermia treatment is the same as heat stroke — aggressive cooling and fluids — with added emphasis on chemical sedation over physical restraint. Struggling against restraints dramatically increases heat production, metabolic acidosis, and rhabdomyolysis risk. Benzodiazepines reduce agitation, decrease heat production, and lower seizure threshold.",
            guideline_ref: "2021 National EMS Education Standards — Toxicology; ACMT Position Statement on Sympathomimetic Toxicity"
          },
          {
            text: "Administer activated charcoal to decontaminate the GI tract since ingestion was only 3 hours ago",
            correct: false,
            critical: false,
            explanation: "Activated charcoal is not indicated here. MDMA has likely been fully absorbed after 3 hours, and administering charcoal to a patient with altered mental status risks aspiration, which could be fatal.",
            guideline_ref: "ACMT Guidelines — GI Decontamination; 2021 National EMS Education Standards — Toxicology"
          },
          {
            text: "Administer cyproheptadine to block serotonin receptors and treat presumed serotonin syndrome",
            correct: false,
            critical: false,
            explanation: "Cyproheptadine is an in-hospital treatment for serotonin syndrome and is only available in oral form. It is not a prehospital intervention. The prehospital priorities are cooling, sedation, and fluid resuscitation.",
            guideline_ref: "ACMT Serotonin Syndrome Guidelines"
          },
          {
            text: "Administer a beta-blocker to control the tachycardia and reduce cardiac workload",
            correct: false,
            critical: true,
            explanation: "Beta-blockers are contraindicated in sympathomimetic toxicity. Blocking beta-receptors leaves alpha-mediated vasoconstriction unopposed, potentially causing severe hypertension, coronary vasospasm, and worsened hyperthermia. Treat the tachycardia with cooling and benzodiazepines.",
            guideline_ref: "ACMT Position Statement — Sympathomimetic Toxicity; 2021 National EMS Education Standards — Toxicology"
          }
        ]
      }
    ]
  },

  "nat-air-04": {
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
        categories: [
          "Compensated Respiratory Distress",
          "Decompensated Respiratory Failure"
        ],
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
        prompt: "Place the following initial interventions in the correct order for managing this patient's severe asthma exacerbation.",
        type: "order",
        level_filter: "EMR-EMT",
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
        phase: "treatment",
        prompt: "You establish IV access and begin nebulized albuterol. Place the following ALS interventions in the correct order for this worsening status asthmaticus patient.",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient's SpO2 is 88% and dropping despite supplemental oxygen. You have established IV access. The patient can barely speak and is becoming increasingly fatigued. Continuous albuterol nebulization is running.",
        clinical_pearl: "In status asthmaticus refractory to initial beta-agonist therapy, ipratropium bromide (Atrovent) added to albuterol provides additive bronchodilation through a different mechanism (anticholinergic vs. beta-agonist). This combination is more effective than either agent alone in severe acute asthma.",
        items: [
          "Initiate continuous nebulized albuterol 10-15 mg/hr with ipratropium bromide 0.5 mg",
          "Administer magnesium sulfate 2 g IV over 15-20 minutes for refractory bronchospasm",
          "Prepare epinephrine 0.3 mg IM (1:1,000) if patient continues to deteriorate despite nebulized therapy",
          "If respiratory failure is imminent, provide BVM ventilation with slow rates and prolonged exhalation phase",
          "Consider advanced airway only as a last resort — prepare for difficult ventilation due to high airway resistance"
        ],
        explanation: "Continuous nebulization with combined beta-agonist and anticholinergic provides maximum inhaled bronchodilation. Magnesium sulfate is a smooth muscle relaxant with evidence supporting its use in severe acute asthma. IM epinephrine provides systemic beta-agonism when inhaled medications can't reach the lower airways due to severe obstruction. BVM with slow rates prevents air trapping. Intubation is a last resort in status asthmaticus — these patients are extremely difficult to ventilate mechanically.",
        guideline_ref: "AHA PALS Guidelines — Severe Asthma; NAEMSP Acute Asthma Management; 2021 National EMS Education Standards"
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate actions if the patient's condition continues to deteriorate? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT",
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
            text: "Request advanced life support intercept if available for advanced airway and medication administration",
            correct: true,
            explanation: "A deteriorating status asthmaticus patient benefits from ALS interventions including IV/IO access, epinephrine, continuous nebulized albuterol, and advanced airway management if needed.",
            guideline_ref: "NAEMSP Guidelines — Intercept Criteria"
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
      },
      {
        phase: "reassessment",
        prompt: "The patient deteriorates to respiratory arrest. Which of the following are critical considerations for advanced airway management and post-intubation care in status asthmaticus?",
        type: "mr",
        level_filter: "Paramedic",
        multi_select: true,
        narrative: "Despite continuous nebulization, IM epinephrine, and IV magnesium, the patient becomes unresponsive with agonal respirations. SpO2 is 72%. You are providing BVM ventilation and preparing for intubation.",
        vitals_update: {
          hr: 62,
          bp: "88/50",
          rr: 4,
          spo2: 72,
          gcs: 3
        },
        clinical_pearl: "Intubation in status asthmaticus is a high-risk procedure. These patients are profoundly hypoxic and may arrest during the attempt. Post-intubation, the biggest danger is breath stacking (auto-PEEP) from incomplete exhalation — this causes pneumothorax and hemodynamic collapse. Use low rates (8-10/min), small tidal volumes, and a prolonged expiratory phase (I:E ratio of 1:4 or 1:5). If the patient develops sudden hypotension post-intubation, disconnect the ETT and allow full exhalation — it may be tension pneumothorax from auto-PEEP or simply air trapping reducing venous return.",
        options: [
          {
            text: "Use a larger-than-expected ETT to reduce airway resistance; ventilate at low rates (8-10/min) with prolonged expiratory phase (I:E ratio 1:4 to 1:5)",
            correct: true,
            critical: false,
            explanation: "A larger ETT reduces resistance to gas flow, which is critical when airway resistance is already extremely high from bronchospasm. Low ventilatory rates with prolonged exhalation allow trapped air to escape and prevent dangerous auto-PEEP.",
            guideline_ref: "AHA PALS Guidelines — Ventilation in Obstructive Lung Disease; NAEMSP Asthma Airway Management"
          },
          {
            text: "If sudden hypotension occurs after intubation, disconnect the ETT from the ventilator/BVM and allow passive exhalation before reassessing",
            correct: true,
            critical: false,
            explanation: "Post-intubation hypotension in asthma is often caused by air trapping (auto-PEEP) reducing venous return. Disconnecting the ETT allows trapped air to escape. If BP improves, the cause was auto-PEEP. If not, consider tension pneumothorax and perform needle decompression.",
            guideline_ref: "AHA PALS Guidelines — Auto-PEEP Management; NAEMSP Critical Care Transport"
          },
          {
            text: "Consider ketamine 1-2 mg/kg IV as an induction agent due to its bronchodilatory properties",
            correct: true,
            critical: false,
            explanation: "Ketamine is the preferred induction agent for intubation in status asthmaticus because it causes bronchodilation through catecholamine release and direct smooth muscle relaxation. It also preserves respiratory drive and hemodynamic stability. This makes it superior to other induction agents in this clinical scenario.",
            guideline_ref: "2021 National EMS Education Standards — Pharmacology; NAEMSP RSI Guidelines"
          },
          {
            text: "Ventilate aggressively at 20+ breaths per minute to correct the severe hypoxia and respiratory acidosis as quickly as possible",
            correct: false,
            critical: true,
            explanation: "Aggressive ventilation in severe bronchospasm causes catastrophic air trapping. Each breath adds more air that cannot escape, building intrathoracic pressure that compresses the heart and great vessels. This leads to tension physiology, cardiovascular collapse, and cardiac arrest. Accept permissive hypercapnia and focus on oxygenation.",
            guideline_ref: "AHA PALS Guidelines — Avoiding Breath Stacking; Permissive Hypercapnia in Asthma"
          },
          {
            text: "Administer inline nebulized albuterol through the ETT circuit while ventilating",
            correct: true,
            critical: false,
            explanation: "Continuous nebulized albuterol can be delivered through the ventilator circuit after intubation. This allows ongoing bronchodilator therapy to reach the lower airways. Use an inline nebulizer adapter to avoid disconnecting the circuit.",
            guideline_ref: "NAEMSP Acute Asthma Management; AHA PALS Guidelines"
          },
          {
            text: "Perform needle decompression bilaterally as a prophylactic measure since pneumothorax is common after intubation in asthma",
            correct: false,
            critical: false,
            explanation: "Needle decompression is only indicated when clinical signs of tension pneumothorax are present (absent breath sounds unilaterally, tracheal deviation, hemodynamic collapse not improved by disconnecting the ETT). Prophylactic decompression causes unnecessary iatrogenic injury.",
            guideline_ref: "AHA PALS Guidelines; NAEMSP Needle Decompression Indications"
          }
        ]
      }
    ]
  },

  "nat-ob-03": {
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
        clinical_pearl: "Knee-chest position uses gravity to shift the fetal presenting part away from the pelvis and off the cord. Trendelenburg (head-down) achieves a similar effect. Either position reduces cord compression while you maintain manual elevation.",
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
      },
      {
        phase: "treatment",
        prompt: "You establish IV access on the mother. Which of the following ALS interventions are appropriate for managing this prolapsed cord emergency? (Select ALL that apply)",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "You have established a large-bore IV on the mother's left arm. The cord continues to pulsate. The mother is anxious but hemodynamically stable. Contractions continue every 2 minutes and she is having difficulty resisting the urge to push. Transport time is 8 minutes.",
        vitals_update: {},
        clinical_pearl: "In cord prolapse, the goal of pharmacological intervention is to reduce uterine contractions that increase pressure on the cord and to optimize maternal-fetal perfusion. Terbutaline, a beta-2 agonist, is the most commonly used tocolytic in the prehospital setting for acute cord prolapse because of its rapid onset (subcutaneous administration works within 5 minutes) and ease of use.",
        options: [
          {
            text: "Administer terbutaline 0.25 mg subcutaneously to reduce uterine contractions and decrease pressure on the cord",
            correct: true,
            critical: false,
            explanation: "Terbutaline is a beta-2 agonist that rapidly relaxes uterine smooth muscle, reducing contractions. In cord prolapse, this decreases intermittent compression of the cord by the presenting part during contractions. Onset is within 5 minutes subcutaneously.",
            guideline_ref: "ACOG Umbilical Cord Prolapse Management; 2021 National EMS Education Standards — OB Emergencies"
          },
          {
            text: "Initiate a normal saline IV bolus to maintain adequate maternal blood pressure and uterine perfusion",
            correct: true,
            critical: false,
            explanation: "Adequate maternal volume status optimizes uterine blood flow and fetal perfusion through the umbilical cord. A fluid bolus also helps counteract the hypotensive effects of terbutaline and Trendelenburg positioning.",
            guideline_ref: "2021 National EMS Education Standards — OB Emergencies; NAEMSP Obstetric Care"
          },
          {
            text: "Administer oxytocin 10 units IM to accelerate delivery and resolve the cord prolapse",
            correct: false,
            critical: true,
            explanation: "Oxytocin INCREASES uterine contractions, which would increase pressure on the prolapsed cord and worsen fetal compromise. The goal is to STOP contractions, not augment them. Vaginal delivery is not the goal — emergency cesarean is the definitive treatment.",
            guideline_ref: "ACOG Cord Prolapse Management; NAEMSP Obstetric Emergencies"
          },
          {
            text: "Place the patient on continuous cardiac monitoring given the tocolytic administration and hemodynamic stress",
            correct: true,
            critical: false,
            explanation: "Terbutaline can cause maternal tachycardia, palpitations, and rarely dysrhythmias. Combined with the stress of the emergency, cardiac monitoring is prudent. The mother's hemodynamic status directly affects fetal perfusion.",
            guideline_ref: "2021 National EMS Education Standards — Pharmacology; ACOG Tocolytic Safety"
          },
          {
            text: "Administer fentanyl 1 mcg/kg IV for maternal pain and anxiety management",
            correct: false,
            critical: false,
            explanation: "While maternal comfort is important, opioids cross the placenta and can cause neonatal respiratory depression at delivery. Given the imminent cesarean (8 minutes transport), the surgical team will manage anesthesia. Prehospital opioids offer limited benefit and add fetal risk in this scenario.",
            guideline_ref: "2021 National EMS Education Standards — OB Pharmacology; ACOG Intrapartum Opioid Considerations"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "During transport, the cord pulsations weaken significantly. Categorize each potential cause and intervention appropriately.",
        type: "categorize",
        level_filter: "Paramedic",
        narrative: "Five minutes into transport, you notice the cord pulsations have weakened noticeably. The mother's BP is 118/74, HR 112. Contractions are less frequent since terbutaline administration but still present. You are maintaining manual elevation of the presenting part.",
        clinical_pearl: "Weakening cord pulsations indicate decreasing fetal perfusion — this is an ominous sign. Reassess your hand position to ensure adequate elevation, verify maternal hemodynamic status (hypotension reduces uterine perfusion), and consider whether contractions are still compressing the cord. Communicate this change immediately to the receiving facility so they can expedite the OR team.",
        categories: [
          "Likely Contributing to Decreased Cord Pulsations",
          "Appropriate Immediate Response"
        ],
        items: [
          { text: "Insufficient elevation of the presenting part allowing intermittent cord compression", category: "Likely Contributing to Decreased Cord Pulsations" },
          { text: "Maternal hypotension reducing uterine blood flow", category: "Likely Contributing to Decreased Cord Pulsations" },
          { text: "Cord vasospasm from exposure to cold or drying", category: "Likely Contributing to Decreased Cord Pulsations" },
          { text: "Reposition hand to ensure maximal lift of the presenting part off the cord", category: "Appropriate Immediate Response" },
          { text: "Administer additional IV fluid bolus to optimize maternal perfusion", category: "Appropriate Immediate Response" },
          { text: "Re-wet cord dressings with warm saline to prevent vasospasm", category: "Appropriate Immediate Response" },
          { text: "Update the receiving facility on fetal status change and request immediate OR availability", category: "Appropriate Immediate Response" }
        ],
        explanation: "Weakening cord pulsations require immediate reassessment of all modifiable factors: hand position, maternal hemodynamics, and cord condition. Simultaneously communicating the deterioration to the receiving facility allows them to have the OR immediately ready upon arrival. Every second matters for fetal survival.",
        guideline_ref: "ACOG Umbilical Cord Prolapse Management; NAEMSP Obstetric Emergencies; 2021 National EMS Education Standards"
      }
    ]
  },

  "nat-env-03": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "After ensuring scene safety, what is the MOST appropriate initial prehospital intervention for this patient's bite wound?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The patient is anxious but alert. You see two puncture marks on the right lateral ankle with localized swelling extending about 2 cm around the wound. He rates his pain 6/10.",
        clinical_pearl: "Mark the leading edge of swelling with a pen and note the time. Serial measurements help the receiving facility gauge whether envenomation is progressing.",
        options: [
          {
            text: "Immobilize the affected extremity, keep it at or slightly below heart level, remove jewelry, and transport",
            correct: true,
            explanation: "Immobilization slows lymphatic spread of venom. Removing jewelry prevents complications from progressive swelling. Keep the extremity at or slightly below heart level and transport promptly.",
            guideline_ref: "AHA First Aid 2020; Wilderness Medical Society CPG — Snake Envenomation"
          },
          {
            text: "Apply a tourniquet proximal to the bite to prevent venom spread",
            correct: false,
            critical: true,
            explanation: "Tourniquets concentrate venom in the limb, increasing local tissue destruction and risking limb loss. They are contraindicated for North American pit viper bites.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; AHA First Aid 2020"
          },
          {
            text: "Cut the wound and attempt to suck out the venom",
            correct: false,
            critical: true,
            explanation: "Incision and suction are ineffective at removing venom and cause additional tissue damage and infection risk. This is a harmful myth.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation"
          },
          {
            text: "Apply ice directly to the bite site to slow venom absorption",
            correct: false,
            explanation: "Ice application can worsen tissue damage by causing vasoconstriction and local cold injury on top of the envenomation. It is not recommended.",
            guideline_ref: "AHA First Aid 2020; Wilderness Medical Society CPG"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of prehospital snake bite management in the correct order.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "You have assessed the patient and are preparing to manage and transport. Your partner is getting the stretcher.",
        clinical_pearl: "The definitive treatment for pit viper envenomation is antivenom (CroFab or Anavip), which is only available at the hospital. Your prehospital role is to prevent further harm, monitor for systemic progression, and transport rapidly to a facility with antivenom capability.",
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
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "While transporting, your new partner asks about common myths versus evidence-based practices for snake bites.",
        clinical_pearl: "Attempting to capture or kill the snake delays care and risks additional bites. A photo from a safe distance may help with identification, but it should never delay transport.",
        categories: [
          "DO — Appropriate Actions",
          "DON'T — Harmful or Ineffective"
        ],
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
      },
      {
        phase: "treatment",
        prompt: "You establish IV access and the patient's condition begins to change. Which of the following ALS interventions and assessments are appropriate? (Select ALL that apply)",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "During transport, the swelling has progressed rapidly from the ankle to mid-calf in 20 minutes. The patient reports tingling around his mouth and a metallic taste. He is nauseated and has vomited once. Vitals are now HR 118, BP 104/68, RR 22. You have established a large-bore IV in the unaffected left arm.",
        vitals_update: {
          hr: 118,
          bp: "104/68",
          rr: 22,
          spo2: 97,
          gcs: 15
        },
        clinical_pearl: "Perioral tingling, metallic taste, and rapid swelling progression are signs of significant systemic envenomation. These patients may develop coagulopathy (venom-induced consumptive coagulopathy), thrombocytopenia, and hemodynamic instability. Establishing IV access AWAY from the affected limb is critical — the envenomated extremity may have unpredictable vascular permeability.",
        options: [
          {
            text: "Administer a normal saline bolus (20 mL/kg) to address the hypotension from venom-induced vasodilation and third-spacing",
            correct: true,
            critical: false,
            explanation: "Pit viper envenomation can cause significant hypotension through vasodilation, increased capillary permeability, and third-spacing of fluid into the envenomated tissue. IV crystalloid resuscitation supports blood pressure and perfusion.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; 2021 National EMS Education Standards — Environmental Emergencies"
          },
          {
            text: "Place the patient on continuous cardiac monitoring — pit viper venom can cause dysrhythmias and conduction abnormalities",
            correct: true,
            critical: false,
            explanation: "Crotalid venom contains cardiotoxic components that can cause dysrhythmias, particularly in severe envenomation. Continuous monitoring allows early detection of cardiac complications.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; 2021 National EMS Education Standards"
          },
          {
            text: "Administer ondansetron (Zofran) 4 mg IV for nausea and vomiting",
            correct: true,
            critical: false,
            explanation: "Nausea and vomiting are common systemic effects of envenomation. Ondansetron provides symptomatic relief and reduces the risk of aspiration, particularly important if the patient's condition deteriorates.",
            guideline_ref: "2021 National EMS Education Standards — Pharmacology; NAEMSP Antiemetic Guidelines"
          },
          {
            text: "Administer epinephrine 0.3 mg IM as prophylaxis against anaphylaxis to future antivenom administration",
            correct: false,
            critical: false,
            explanation: "Epinephrine is only indicated if anaphylaxis actually occurs. Prophylactic epinephrine for a potential future reaction is not standard practice and wastes a critical medication. The hospital will premedicate with diphenhydramine if needed before antivenom.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; AHA Anaphylaxis Guidelines"
          },
          {
            text: "Administer ketorolac (Toradol) 30 mg IV for pain management",
            correct: false,
            critical: true,
            explanation: "NSAIDs (including ketorolac) are CONTRAINDICATED in pit viper envenomation. Crotalid venom causes coagulopathy (venom-induced consumptive coagulopathy), and NSAIDs further impair platelet function, dramatically increasing bleeding risk.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation; 2021 National EMS Education Standards"
          },
          {
            text: "Administer fentanyl 1 mcg/kg IV for pain management — opioids are the appropriate analgesic choice in envenomation",
            correct: true,
            critical: false,
            explanation: "Opioid analgesics are the appropriate choice for snake bite pain because they do not affect coagulation. Fentanyl provides effective analgesia with a rapid onset and short duration, allowing for dose titration.",
            guideline_ref: "Wilderness Medical Society CPG — Snake Envenomation Pain Management; 2021 National EMS Education Standards — Pharmacology"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "The patient develops signs of a severe allergic reaction during transport. Review the clinical findings and match each sign to the appropriate body system affected by the envenomation.",
        type: "graphical",
        level_filter: "Paramedic",
        multi_select: false,
        narrative: "The patient now has diffuse urticaria on his trunk, his lips are swelling, and he reports throat tightness. BP has dropped to 88/54. Wheezing is audible. You are unsure if this is worsening envenomation, anaphylaxis to the venom itself, or both. The distinction matters less than the treatment.",
        vitals_update: {
          hr: 134,
          bp: "88/54",
          rr: 28,
          spo2: 92,
          gcs: 15
        },
        clinical_pearl: "True anaphylaxis to snake venom (IgE-mediated) is rare but can occur, particularly in patients with prior exposure. More commonly, venom components directly activate mast cells (anaphylactoid reaction). The treatment is identical: epinephrine IM, aggressive fluids, and airway management. Do not withhold epinephrine while debating the mechanism — the patient is in distributive shock with airway compromise.",
        options: [
          {
            text: "Urticaria and lip swelling → Integumentary/immune system — mast cell degranulation releasing histamine causing vasodilation and increased capillary permeability",
            correct: true,
            critical: false,
            explanation: "Urticaria and angioedema result from histamine release causing local vasodilation and plasma extravasation. This can be IgE-mediated (true anaphylaxis) or direct mast cell activation by venom components.",
            guideline_ref: "2021 National EMS Education Standards — Immunology; AHA Anaphylaxis Guidelines"
          },
          {
            text: "Wheezing and throat tightness → Respiratory system — bronchospasm and laryngeal edema from inflammatory mediators threatening airway patency",
            correct: true,
            critical: false,
            explanation: "Histamine and leukotrienes cause bronchospasm and mucosal edema in the upper and lower airways. Throat tightness with wheezing indicates both upper and lower airway involvement — this can progress to complete airway obstruction.",
            guideline_ref: "2021 National EMS Education Standards — Immunology/Airway; AHA Anaphylaxis Guidelines"
          },
          {
            text: "Hypotension (88/54) → Cardiovascular system — profound vasodilation and capillary leak causing distributive shock",
            correct: true,
            critical: false,
            explanation: "Anaphylactic shock is a form of distributive shock. Massive vasodilation combined with fluid shifts out of the vascular space causes hypotension. This is compounded by the direct cardiovascular effects of the pit viper venom.",
            guideline_ref: "2021 National EMS Education Standards — Shock; AHA Anaphylaxis Guidelines"
          },
          {
            text: "Treatment: Epinephrine 0.3 mg IM (lateral thigh), repeat every 5-15 minutes; aggressive IV fluids; prepare for advanced airway management if upper airway edema worsens",
            correct: true,
            critical: false,
            explanation: "Epinephrine is the ONLY first-line treatment for anaphylaxis. It reverses bronchospasm (beta-2), supports blood pressure (alpha-1 and beta-1), and inhibits further mast cell degranulation. IM in the lateral thigh provides the fastest absorption. Aggressive fluids address the distributive shock. Airway management may be needed if laryngeal edema progresses.",
            guideline_ref: "AHA 2020 Anaphylaxis Guidelines; 2021 National EMS Education Standards — Immunology"
          }
        ]
      }
    ]
  }

};
