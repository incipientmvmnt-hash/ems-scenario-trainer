const ALS_FIX_3 = {

  "nat-hypoglycemia-01": {
    questions: [
      {
        phase: "assessment",
        prompt: "You encounter a confused, diaphoretic 55-year-old male with a diabetes medical alert bracelet. What is the MOST important initial assessment to determine the cause of his altered mental status?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          {
            text: "Obtain a blood glucose reading using a point-of-care glucometer",
            correct: true,
            critical: false,
            explanation: "Blood glucose measurement is the single most important assessment for a diabetic patient with altered mental status. It immediately differentiates hypoglycemia (which requires urgent treatment) from hyperglycemia or other causes. This is fast, non-invasive, and directly guides treatment.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies; ADA Standards of Medical Care"
          },
          {
            text: "Perform a detailed neurological exam including Cincinnati Prehospital Stroke Scale",
            correct: false,
            critical: false,
            explanation: "While stroke should be considered in the differential for altered mental status, checking blood glucose first is faster, easier, and more likely to identify the cause in a known diabetic. Hypoglycemia can mimic stroke — always check glucose before assuming CVA.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies"
          },
          {
            text: "Establish IV access and administer a fluid bolus to treat possible dehydration from diabetic ketoacidosis",
            correct: false,
            critical: false,
            explanation: "Assuming DKA without checking glucose first could lead to inappropriate treatment. Additionally, this presentation (diaphoresis, rapid onset, known insulin use, missed meal) is more consistent with hypoglycemia than DKA. Always check glucose first.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies"
          },
          {
            text: "Administer naloxone intranasally to rule out opioid overdose as a cause of altered mental status",
            correct: false,
            critical: false,
            explanation: "While opioid overdose is in the differential for AMS, the clinical picture (diaphoresis, known diabetic, missed meal, insulin use) strongly suggests hypoglycemia. Naloxone is not indicated without signs of opioid toxicity (respiratory depression, pinpoint pupils). Check glucose first.",
            guideline_ref: "National EMS Education Standards — Toxicological Emergencies"
          }
        ],
        clinical_pearl: "The EMS mantra for altered mental status: 'Check the sugar!' Hypoglycemia is one of the most common and easily reversible causes of AMS. It can mimic stroke, intoxication, seizure, and psychiatric emergencies. Every AMS patient should have a glucose check."
      },
      {
        phase: "treatment",
        prompt: "The glucometer reads 38 mg/dL. Arrange the following treatment steps in the correct order for managing this hypoglycemic patient.",
        type: "order",
        level_filter: "EMR-EMT",
        items: [
          "If the patient can swallow safely, administer oral glucose gel",
          "Reassess blood glucose in 5 minutes and reassess mental status",
          "Assess the patient's ability to protect their airway and swallow",
          "If no improvement or unable to swallow, request ALS intercept"
        ],
        correctOrder: [2, 0, 1, 3],
        explanation: "Step 1: Assess airway protective reflexes and swallowing ability — this determines the safest treatment route. Step 2: If the patient can swallow, administer oral glucose (the fastest, least invasive intervention). Step 3: Reassess glucose and mental status after 5 minutes to evaluate response. Step 4: If no improvement or if the patient cannot swallow safely, request ALS intercept for IV dextrose administration.",
        guideline_ref: "National EMS Education Standards — Endocrine Emergencies; ADA Hypoglycemia Treatment Guidelines",
        clinical_pearl: "Oral glucose is an EMT's primary tool for hypoglycemia — but ONLY if the patient can swallow safely. A patient with a GCS below 13 or who cannot follow commands may not be able to protect their airway during oral administration."
      },
      {
        phase: "treatment",
        prompt: "The glucometer reads 38 mg/dL and the patient cannot reliably swallow. You have established IV access. Which dextrose formulation and dose is MOST appropriate?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          {
            text: "Dextrose 10% (D10) 25g IV, administered as 250 mL and titrated to clinical response",
            correct: true,
            critical: false,
            explanation: "D10 is the preferred formulation in modern EMS practice. It is less hypertonic than D50, causes less venous damage on extravasation, and allows precise titration. Administer 100-250 mL (10-25g dextrose) and reassess glucose every 5 minutes.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies; NAEMSP Dextrose Administration Guidelines"
          },
          {
            text: "Dextrose 50% (D50) one full amp (25g) rapid IV push through any available access",
            correct: false,
            critical: false,
            explanation: "D50 is highly hypertonic (2,525 mOsm/L) and caustic to veins. Extravasation causes significant tissue necrosis. It is being phased out of many EMS systems in favor of D10. If D50 is used, it must be given slowly through a large-bore, well-flowing IV in a large vein.",
            guideline_ref: "NAEMSP Dextrose Administration Position Statement"
          },
          {
            text: "Normal saline 1,000 mL bolus — the fluid will dilute the insulin and raise glucose",
            correct: false,
            critical: true,
            explanation: "Normal saline does not contain glucose and will not correct hypoglycemia. This patient needs exogenous glucose, not volume. Delaying dextrose administration while running saline could result in permanent neurological injury.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies"
          },
          {
            text: "Dextrose 5% (D5W) 500 mL IV over 30 minutes",
            correct: false,
            critical: false,
            explanation: "D5W contains only 5g of dextrose per 100 mL — a 500 mL bag delivers just 25g but far too slowly to correct symptomatic hypoglycemia. This patient needs a more concentrated dextrose solution for rapid correction.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies"
          }
        ],
        clinical_pearl: "D10 is increasingly replacing D50 in EMS because: (1) it can be given through a peripheral IV without the vein-damaging osmolarity of D50, (2) it allows more precise titration — give 100-250 mL and recheck, (3) tissue infiltration of D10 causes far less damage than D50. Many services now carry D10 exclusively."
      },
      {
        phase: "treatment",
        prompt: "Match each glucose treatment intervention to the LOWEST provider level authorized to administer it and the appropriate route.",
        type: "table",
        level_filter: "EMR-EMT-AEMT",
        rows: [
          "Oral glucose gel (15-25g) administered by mouth",
          "Dextrose 10% (D10) 25g administered intravenously",
          "Glucagon 1 mg administered intramuscularly",
          "Placing the patient in the recovery position and monitoring until higher-level care arrives"
        ],
        columns: ["EMR", "EMT", "AEMT", "Paramedic"],
        correctCells: [
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [1, 0, 0, 0]
        ],
        explanation: "Oral glucose gel = EMT (the EMT scope includes oral glucose administration for conscious hypoglycemic patients who can swallow). D10 IV = AEMT (AEMTs can establish IV access and administer select medications including IV dextrose). Glucagon IM = AEMT (glucagon is within the AEMT scope as an alternative to IV dextrose). Recovery position and monitoring = EMR (EMRs provide basic life support and supportive care while awaiting higher-level providers).",
        guideline_ref: "2021 National EMS Education Standards — Scope of Practice by Certification Level",
        clinical_pearl: "D10 is increasingly replacing D50 in EMS because: (1) it can be given through a peripheral IV without the vein-damaging osmolarity of D50, (2) it allows more precise titration — give 100-250 mL and recheck, (3) tissue infiltration of D10 causes far less damage than D50."
      },
      {
        phase: "treatment",
        prompt: "After administering 25g of D10 IV, the patient's glucose rises to 68 mg/dL and mental status improves but remains mildly confused. IV access is established and patent. What additional considerations should guide your continued management?",
        type: "mr",
        level_filter: "Paramedic",
        multi_select: true,
        options: [
          {
            text: "Administer an additional 10-15g D10 IV and reassess — target glucose above 80 mg/dL with normal mentation",
            correct: true,
            critical: false,
            explanation: "The patient is improving but still symptomatic at 68 mg/dL. Additional D10 should be titrated to achieve a glucose >80 mg/dL with return of normal mentation. D10 allows precise dose titration.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies; ADA Hypoglycemia Guidelines"
          },
          {
            text: "Consider that the patient's long-acting insulin (glargine) will continue to lower glucose — rebound hypoglycemia is likely and requires extended monitoring",
            correct: true,
            critical: false,
            explanation: "Insulin glargine has a duration of up to 24 hours. Even after correcting the acute episode, glucose will trend downward again. These patients need hospital observation and likely a dextrose infusion. Alert the receiving facility.",
            guideline_ref: "ADA Standards of Medical Care — Hypoglycemia Management"
          },
          {
            text: "Glucagon 1 mg IM should replace further IV dextrose since the IV is already established and functioning",
            correct: false,
            critical: false,
            explanation: "With a functioning IV, dextrose is far superior to glucagon. Glucagon works by stimulating hepatic glycogenolysis — it takes 10-15 minutes to work, may be ineffective in malnourished or glycogen-depleted patients, and commonly causes nausea and vomiting. Reserve glucagon for when IV/IO access cannot be obtained.",
            guideline_ref: "National EMS Education Standards — Endocrine Emergencies"
          },
          {
            text: "Obtain a 12-lead ECG — hypoglycemia can cause cardiac dysrhythmias including QT prolongation",
            correct: true,
            critical: false,
            explanation: "Hypoglycemia triggers catecholamine release and can prolong the QT interval, increasing the risk of ventricular dysrhythmias. A 12-lead ECG is prudent, especially in a 55-year-old with hypertension. It also evaluates for an acute coronary event as a possible contributing factor.",
            guideline_ref: "AHA ACLS Guidelines; ADA Standards of Medical Care"
          },
          {
            text: "The patient can be released on scene if glucose normalizes since the cause is clearly from a missed meal",
            correct: false,
            critical: true,
            explanation: "Patients on long-acting insulin who become hypoglycemic are at high risk for recurrent hypoglycemia and should be transported. The duration of insulin glargine far exceeds the duration of administered dextrose. Refusal of transport requires thorough informed consent with clear return precautions.",
            guideline_ref: "NAEMSP Position Statement — Prehospital Hypoglycemia Management and Transport Decisions"
          }
        ],
        clinical_pearl: "Patients on long-acting insulin (glargine, detemir) who develop hypoglycemia are at high risk for rebound hypoglycemia. A single dextrose bolus may last only 15-20 minutes while the insulin continues to work for hours. These patients generally require hospital observation and a continuous dextrose infusion."
      }
    ]
  },

  "nat-tox-01": {
    questions: [
      {
        phase: "treatment",
        prompt: "What is the MOST critical first intervention for this patient?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient is unresponsive (GCS 3), breathing at 4 breaths per minute, with cyanotic lips and SpO2 of 72%. Pinpoint pupils are noted. Drug paraphernalia is visible nearby.",
        clinical_pearl: "Opioid overdose deaths occur from respiratory failure, not from the drug directly stopping the heart. The single most important intervention is restoring adequate ventilation. Naloxone is critical but takes 2–5 minutes to work — the patient will suffer irreversible brain damage or die from hypoxia in that time if you don't ventilate first.",
        options: [
          {
            text: "Open the airway and begin bag-valve-mask ventilation with supplemental oxygen — ventilation is the immediate life-saving intervention",
            correct: true,
            critical: false,
            explanation: "Airway and breathing first — always. This patient is in respiratory failure with severe hypoxia (SpO2 72%). BVM ventilation with supplemental oxygen immediately addresses the life threat. Naloxone is important but is an adjunct to ventilation, not a replacement.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; 2021 National EMS Education Standards — Toxicological Emergencies"
          },
          {
            text: "Administer intranasal naloxone 4 mg immediately — reversing the opioid is the highest priority before any airway intervention",
            correct: false,
            critical: false,
            explanation: "Naloxone is essential but not the FIRST intervention. It takes 2–5 minutes to take effect. With a respiratory rate of 4 and SpO2 of 72%, this patient needs ventilatory support NOW while naloxone is being prepared and administered.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Algorithm"
          },
          {
            text: "Perform a sternal rub to attempt to arouse the patient — pain stimulus may be sufficient to increase respiratory drive",
            correct: false,
            critical: false,
            explanation: "A patient with GCS 3 and a respiratory rate of 4 is unlikely to respond to painful stimuli sufficiently to restore adequate ventilation. This wastes critical time.",
            guideline_ref: "2021 National EMS Education Standards — Patient Assessment"
          },
          {
            text: "Place the patient in the recovery position and monitor — naloxone should only be given after confirming the substance used",
            correct: false,
            critical: true,
            explanation: "This patient is in respiratory arrest. Placing a patient with a respiratory rate of 4 and SpO2 of 72% in the recovery position without assisted ventilation will likely result in death or anoxic brain injury. Naloxone does not require confirmation of the specific opioid.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following steps of opioid overdose management in the correct sequence:",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        multi_select: false,
        narrative: "The patient remains in respiratory failure. You need to manage this patient systematically.",
        clinical_pearl: "Titrate naloxone to restore adequate respirations, not necessarily to full consciousness. A fully awake patient who was using opioids may become combative, experience acute withdrawal (vomiting with aspiration risk), or leave against medical advice. The goal is a respiratory rate of 12+ with adequate tidal volume.",
        items: [
          "Ensure scene safety — wear gloves, be aware of needles, do not touch unknown powders",
          "Open the airway and begin assisted ventilation with BVM and supplemental oxygen",
          "Administer naloxone via appropriate route (intranasal, intramuscular, or intravenous)",
          "Reassess respirations and titrate additional naloxone doses every 2–3 minutes if inadequate response",
          "Monitor closely for recurrence — naloxone duration (30–90 min) may be shorter than the opioid, requiring redosing or extended observation"
        ],
        explanation: "Scene safety first (needles, unknown substances). Ventilation is the immediate life-saving priority. Naloxone administration follows. Titration continues until adequate respirations are restored. Ongoing monitoring is essential because naloxone may wear off before the opioid.",
        guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; NAEMSP Position on Naloxone Administration"
      },
      {
        phase: "assessment",
        prompt: "Categorize the following clinical findings as characteristic of OPIOID toxidrome versus OTHER toxidromes:",
        type: "categorize",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "Recognizing toxidrome patterns helps identify the substance class involved and guides treatment, even when the specific drug is unknown.",
        clinical_pearl: "The classic opioid toxidrome triad is: respiratory depression + pinpoint pupils (miosis) + altered mental status. However, mixed ingestions are common — a patient may have taken stimulants AND opioids simultaneously, creating a confusing clinical picture. When in doubt, if respirations are depressed, give naloxone.",
        categories: ["Opioid Toxidrome", "Other Toxidrome"],
        items: [
          { text: "Pinpoint pupils (miosis)", category: "Opioid Toxidrome" },
          { text: "Respiratory depression with bradycardia", category: "Opioid Toxidrome" },
          { text: "Dilated pupils, tachycardia, agitation, and hyperthermia (sympathomimetic)", category: "Other Toxidrome" },
          { text: "Excessive salivation, lacrimation, urination, defecation, and bradycardia (cholinergic)", category: "Other Toxidrome" },
          { text: "Decreased level of consciousness with hypotension", category: "Opioid Toxidrome" },
          { text: "Seizures, wide QRS complex on ECG, and dry skin (anticholinergic/TCA)", category: "Other Toxidrome" }
        ],
        explanation: "The opioid toxidrome features respiratory depression, miosis, CNS depression, and hypotension. Sympathomimetic, cholinergic, and anticholinergic toxidromes have distinctly different presentations. Pattern recognition enables appropriate treatment even when the substance is unknown.",
        guideline_ref: "2021 National EMS Education Standards — Toxicology; AHA 2020 ACLS — Toxicology"
      },
      {
        phase: "treatment",
        prompt: "You have established IV access on this patient. His respiratory rate has improved to 8 with BVM ventilation and intranasal naloxone. What is the MOST appropriate next step for naloxone administration?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "After BVM ventilation and 4 mg intranasal naloxone, the patient has some respiratory effort (RR 8) but remains obtunded. SpO2 has improved to 88% with assisted ventilation. IV access is patent in the right antecubital fossa.",
        clinical_pearl: "IV naloxone allows precise titration in 0.04-0.4 mg increments. The goal is to restore respiratory drive (RR ≥12) without precipitating full opioid withdrawal. Acute withdrawal causes vomiting (aspiration risk in an obtunded patient), agitation, tachycardia, and sometimes pulmonary edema. Titrate to ventilation, not to consciousness.",
        options: [
          {
            text: "Administer naloxone 0.04-0.4 mg IV, titrating in small increments every 2-3 minutes until respiratory rate is ≥12 with adequate tidal volume",
            correct: true,
            critical: false,
            explanation: "IV naloxone should be titrated in small doses to restore adequate respirations without precipitating acute withdrawal. The intranasal dose may have been partially absorbed; IV titration allows precise control. Continue BVM assist between doses.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; NAEMSP Naloxone Position Statement"
          },
          {
            text: "Administer naloxone 2 mg IV push to ensure the patient wakes up fully",
            correct: false,
            critical: false,
            explanation: "A large bolus of IV naloxone will precipitate acute opioid withdrawal — projectile vomiting (aspiration risk), severe agitation, tachycardia, hypertension, and potentially flash pulmonary edema. The goal is respiratory adequacy, not full consciousness.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines"
          },
          {
            text: "Withhold further naloxone — the intranasal dose should be sufficient once it takes full effect",
            correct: false,
            critical: false,
            explanation: "With a RR of only 8 and persistent obtundation, the intranasal dose has not achieved adequate reversal. This may be a fentanyl analog requiring higher total naloxone doses. Additional titrated IV doses are indicated.",
            guideline_ref: "NAEMSP Naloxone Position Statement"
          },
          {
            text: "Administer naloxone 4 mg IV to match the intranasal dose already given",
            correct: false,
            critical: true,
            explanation: "IV naloxone is far more bioavailable than intranasal (nearly 100% vs ~40-50%). Giving 4 mg IV would deliver an extremely high effective dose, virtually guaranteeing severe precipitated withdrawal with dangerous complications.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; FDA Naloxone Dosing"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "The patient's respiratory rate has improved to 14 after titrated IV naloxone, but he remains drowsy. SpO2 is 96%. Which advanced airway consideration is MOST appropriate at this time?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "Total naloxone administered: 4 mg IN + 0.4 mg IV. The patient is breathing adequately (RR 14, SpO2 96%) but opens eyes only to voice and is not following commands. You suspect a long-acting or high-potency synthetic opioid.",
        clinical_pearl: "When high doses of naloxone are required, suspect fentanyl analogs (carfentanil, etc.) which may have durations far exceeding naloxone. These patients are at very high risk for re-narcotization. Have advanced airway equipment immediately accessible and consider a naloxone infusion (2/3 of the effective bolus dose per hour) for sustained reversal during transport.",
        options: [
          {
            text: "Maintain BVM at bedside, monitor closely, and prepare for possible re-narcotization — consider a naloxone infusion if available",
            correct: true,
            critical: false,
            explanation: "The patient is currently ventilating adequately, so invasive airway management is not indicated. However, the high naloxone requirement suggests a potent or long-acting opioid. Re-narcotization is likely as naloxone wears off (30-90 min). A naloxone infusion (2/3 of the effective reversal dose per hour) maintains steady antagonism during transport.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines; NAEMSP Naloxone Infusion Guidance"
          },
          {
            text: "Perform immediate endotracheal intubation since the patient's GCS is below 8",
            correct: false,
            critical: false,
            explanation: "While GCS <8 is often cited as an intubation threshold, this patient is currently breathing adequately (RR 14, SpO2 96%) and improving. Intubation carries risks and is not indicated when ventilation is adequate and the clinical trajectory is improving with naloxone.",
            guideline_ref: "NAEMSP Airway Management Position Statement"
          },
          {
            text: "Insert a nasopharyngeal airway and discontinue all monitoring since the naloxone has worked",
            correct: false,
            critical: true,
            explanation: "Discontinuing monitoring after naloxone reversal is dangerous. Naloxone has a shorter duration than most opioids. Re-narcotization can occur suddenly, causing respiratory arrest. Continuous monitoring is mandatory.",
            guideline_ref: "AHA 2020 Opioid-Associated Emergency Guidelines"
          },
          {
            text: "Perform rapid sequence intubation to protect the airway from aspiration",
            correct: false,
            critical: false,
            explanation: "RSI requires pharmacologic paralysis and sedation — paralyzing a patient who is currently breathing adequately and improving with naloxone is inappropriate. RSI would commit you to managing the airway mechanically and negate the benefit of the naloxone reversal.",
            guideline_ref: "NAEMSP RSI Position Statement; National EMS Education Standards — Airway Management"
          }
        ]
      }
    ]
  },

  "nat-air-02": {
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
            explanation: "While high-flow oxygen may ultimately be needed, jumping straight to 15 LPM NRB bypasses a titrated approach. A reasonable step-up targeting 88-92% is more appropriate for a patient with known chronic lung disease.",
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
        level_filter: "EMT",
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
        guideline_ref: "NREMT Psychomotor Skills — Supplemental Oxygen / Airway Management; National EMS Education Standards"
      },
      {
        phase: "treatment",
        prompt: "You have IV access established. Which combination of interventions is MOST appropriate for this patient with severe obstructive airway disease exacerbation and SpO2 of 89%?",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "The patient remains in significant distress despite positioning and supplemental oxygen. Expiratory wheezing is diffuse bilaterally with prolonged expiratory phase. He has used his home albuterol inhaler multiple times without relief. RR is 28, HR 108, SpO2 89%.",
        clinical_pearl: "Nebulized bronchodilators are far more effective than MDIs for severe exacerbations because the patient's poor inspiratory effort cannot generate adequate flow through an inhaler. Continuous nebulization is appropriate for severe cases. Ipratropium added to albuterol provides synergistic bronchodilation via different mechanisms (anticholinergic + beta-2 agonist).",
        options: [
          {
            text: "Administer albuterol 2.5 mg via nebulizer — nebulization delivers medication more effectively than an MDI in severe respiratory distress",
            correct: true,
            critical: false,
            explanation: "Nebulized albuterol is first-line for acute bronchospasm. In severe distress, patients cannot generate the inspiratory flow needed for an MDI. Nebulization delivers medication with passive tidal breathing. Can be repeated or run continuously in severe cases.",
            guideline_ref: "NAEMSP Bronchospasm Management; GOLD COPD Guidelines"
          },
          {
            text: "Add ipratropium bromide 0.5 mg to the nebulizer — combined bronchodilator therapy is superior in severe exacerbations",
            correct: true,
            critical: false,
            explanation: "Ipratropium (an anticholinergic) combined with albuterol (a beta-2 agonist) provides additive bronchodilation through different mechanisms. This combination is standard of care for severe obstructive airway disease exacerbations.",
            guideline_ref: "GOLD COPD Guidelines; NAEMSP Bronchospasm Management"
          },
          {
            text: "Apply CPAP at 5-10 cmH2O — positive pressure helps stent open collapsing airways and reduces work of breathing",
            correct: true,
            critical: false,
            explanation: "CPAP can be highly effective in severe COPD exacerbations. It stents open airways, reduces air trapping, decreases work of breathing, and improves gas exchange. Some CPAP devices allow concurrent nebulization. Monitor closely for tolerance.",
            guideline_ref: "NAEMSP CPAP Position Statement; GOLD COPD Guidelines"
          },
          {
            text: "Administer a 1,000 mL normal saline bolus to improve perfusion and oxygen delivery",
            correct: false,
            critical: false,
            explanation: "This patient is not volume-depleted. Unnecessary fluid administration could worsen respiratory status, particularly if there is any component of right heart strain from chronic lung disease (cor pulmonale).",
            guideline_ref: "GOLD COPD Guidelines"
          },
          {
            text: "Administer furosemide 40 mg IV to reduce pulmonary fluid and improve oxygenation",
            correct: false,
            critical: false,
            explanation: "This patient has obstructive lung disease, not pulmonary edema. Diuretics are not indicated for COPD exacerbation and could cause volume depletion and electrolyte imbalances. The crackles heard in COPD are from mucus plugging, not fluid overload.",
            guideline_ref: "GOLD COPD Guidelines; NAEMSP Respiratory Emergency Management"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate ongoing assessments and interventions for this patient? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT",
        multi_select: true,
        narrative: "You are en route to the hospital. The patient's breathing has improved slightly with the inhaler but he remains tachypneic at 24/min. SpO2 is 90% on supplemental oxygen.",
        vitals_update: { hr: 102, bp: "150/88", rr: 24, spo2: 90, gcs: 15 },
        clinical_pearl: "Worsening mental status in a respiratory patient (confusion, drowsiness, agitation) may indicate CO2 retention and impending respiratory failure — this is a critical finding that demands immediate intervention.",
        options: [
          {
            text: "Reassess lung sounds every 5 minutes",
            correct: true,
            explanation: "Serial lung sound assessment tracks response to treatment and can identify deterioration.",
            guideline_ref: "EMT National Education Standards — Reassessment"
          },
          {
            text: "Monitor mental status closely for any changes",
            correct: true,
            explanation: "Declining mental status may indicate CO2 narcosis or worsening hypoxia — both are signs of impending respiratory failure.",
            guideline_ref: "AHA/ECC Guidelines — Respiratory Emergency Assessment"
          },
          {
            text: "Lay the patient supine for transport to maintain spinal alignment",
            correct: false,
            critical: true,
            explanation: "Placing a patient in severe respiratory distress supine worsens breathing mechanics and can precipitate respiratory failure.",
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
            explanation: "Having BVM ready is prudent for any patient in significant respiratory distress.",
            guideline_ref: "AHA Guidelines — Assisted Ventilation"
          },
          {
            text: "Administer a second round of the patient's albuterol inhaler without contacting medical direction",
            correct: false,
            explanation: "EMTs assisting with a patient's prescribed medication should follow local protocol regarding repeat doses and medical direction contact.",
            guideline_ref: "NREMT Practice Standards — Medication Administration (EMT)"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "Despite nebulized bronchodilators and CPAP, the patient's condition worsens: SpO2 drops to 84%, RR increases to 34, and he becomes confused and drowsy. Place the following interventions in order of priority.",
        type: "order",
        level_filter: "Paramedic",
        narrative: "The patient is now only speaking single words. He appears exhausted, with decreasing respiratory effort. Capnography shows EtCO2 of 65 mmHg. Wheezing is diminishing — not from improvement, but from decreasing air movement.",
        vitals_update: { hr: 120, bp: "170/100", rr: 34, spo2: 84, gcs: 12 },
        clinical_pearl: "Diminishing wheezing in a worsening patient is an ominous sign — it means air movement is so poor that there is not enough flow to generate wheezes. This 'silent chest' combined with rising EtCO2, confusion, and fatigue signals imminent respiratory arrest. Prepare for assisted ventilation and consider all pharmacologic options including IV/IM epinephrine for severe refractory bronchospasm.",
        items: [
          "Assist ventilations with BVM — slow rate (10-12/min) with prolonged expiratory phase to avoid air trapping",
          "Administer epinephrine 0.3 mg IM (1:1,000) for severe refractory bronchospasm",
          "Prepare for advanced airway placement (supraglottic or endotracheal) if BVM ventilation is inadequate",
          "Consider IV magnesium sulfate 2g over 20 minutes as adjunct bronchodilator",
          "Notify receiving facility of impending respiratory failure — request respiratory therapy at bedside on arrival"
        ],
        explanation: "Assisted ventilation is the immediate priority when the patient is failing. Epinephrine IM provides potent bronchodilation via beta-2 stimulation. Advanced airway preparation is prudent if BVM is inadequate. Magnesium sulfate is an evidence-based adjunct that relaxes bronchial smooth muscle. Early hospital notification ensures resources are ready. Note: ventilate slowly to avoid auto-PEEP and air trapping, which can cause pneumothorax in obstructive disease.",
        guideline_ref: "NAEMSP Airway Management; GOLD COPD Guidelines; National EMS Education Standards — Airway Management"
      }
    ]
  },

  "nat-ob-02": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient is postictal and has a blood pressure of 188/116. What is the MOST important immediate action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The patient is lying on her left side, groaning but not following commands. Her airway is patent with occasional gurgling. The partner confirms she is 36 weeks pregnant with no complications until now.",
        clinical_pearl: "In late pregnancy with seizures and severe hypertension, eclampsia should be strongly suspected. Positioning the patient in the left lateral recumbent position helps prevent supine hypotensive syndrome by displacing the uterus off the inferior vena cava.",
        options: [
          {
            text: "Position patient in left lateral recumbent position and suction airway as needed",
            correct: true,
            explanation: "Left lateral positioning prevents aortocaval compression and improves venous return. Suctioning addresses the gurgling to maintain airway patency. These are immediate priority interventions for any postictal pregnant patient.",
            guideline_ref: "NAEMSP Obstetric Emergencies; AHA ACLS in Pregnancy Guidelines"
          },
          {
            text: "Restrain the patient to prevent injury during further seizure activity",
            correct: false,
            critical: true,
            explanation: "Restraining a seizing or postictal patient is inappropriate and can cause injury. Protect from harm by clearing the area, but do not restrain.",
            guideline_ref: "NAEMSP Seizure Management Guidelines"
          },
          {
            text: "Immediately begin rapid transport without further assessment",
            correct: false,
            explanation: "While transport is important, failing to address airway and positioning first could lead to aspiration or cardiovascular compromise during transport.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Administer oral glucose in case of hypoglycemia",
            correct: false,
            critical: true,
            explanation: "The patient has a GCS of 10 and is not fully conscious. Administering oral glucose to a patient who cannot protect their airway risks aspiration.",
            guideline_ref: "AHA ACLS Airway Management"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient.",
        type: "order",
        level_filter: "EMR-EMT",
        narrative: "You have positioned the patient on her left side and suctioned her airway. She remains postictal with a GCS of 10. Her SpO2 is 94% and vitals are unchanged.",
        explanation: "Airway management and oxygenation take priority, followed by protecting the patient from injury, continuous monitoring, and initiating transport to an appropriate facility with OB capability.",
        guideline_ref: "NAEMSP Obstetric Emergencies; National EMS Education Standards",
        clinical_pearl: "For EMR/EMT providers, the key to eclampsia management is airway protection, left lateral positioning, supplemental oxygen, and rapid transport to a facility with obstetric capability. Seizure precautions and supportive care are the focus at this level.",
        items: [
          "Apply high-flow oxygen via non-rebreather mask",
          "Pad surrounding area and maintain seizure precautions",
          "Obtain vascular access or prepare for transport",
          "Perform ongoing neurological and vital sign reassessment",
          "Transport emergently to closest appropriate facility with OB capability"
        ]
      },
      {
        phase: "treatment",
        prompt: "You have established IV access. This patient has eclamptic seizures with a BP of 188/116 at 36 weeks gestation. What is the MOST appropriate pharmacologic intervention?",
        type: "mc",
        level_filter: "Paramedic",
        narrative: "The patient remains postictal (GCS 10) with BP 188/116. You have a patent 18g IV in the left forearm. She is at high risk for recurrent seizures.",
        clinical_pearl: "Magnesium sulfate is the gold standard for eclamptic seizures — it is superior to diazepam, phenytoin, and all other anticonvulsants for this specific condition. It works by stabilizing neuronal membranes and reducing cerebral vasospasm. Monitor for toxicity: loss of deep tendon reflexes (first sign), respiratory depression, and hypotension. Calcium gluconate is the antidote.",
        options: [
          {
            text: "Magnesium sulfate 4g IV over 15-20 minutes — this is the definitive treatment for eclamptic seizures",
            correct: true,
            critical: false,
            explanation: "Magnesium sulfate is the evidence-based treatment of choice for eclamptic seizures. A 4g loading dose IV over 15-20 minutes reduces seizure recurrence and is superior to benzodiazepines for this indication. Monitor deep tendon reflexes, respiratory rate, and blood pressure during infusion.",
            guideline_ref: "AHA ACLS in Pregnancy; ACOG Practice Bulletin — Hypertensive Disorders; NAEMSP Obstetric Emergencies"
          },
          {
            text: "Diazepam 10 mg IV push — benzodiazepines are the first-line anticonvulsant for all seizure types",
            correct: false,
            critical: false,
            explanation: "While benzodiazepines are first-line for most seizure types, multiple large randomized trials (MAGPIE, Eclampsia Trial Collaborative Group) have shown magnesium sulfate is superior to diazepam for eclamptic seizures specifically. Benzodiazepines also cause more respiratory and CNS depression in both mother and fetus.",
            guideline_ref: "AHA ACLS in Pregnancy; Lancet Eclampsia Trial Collaborative Group"
          },
          {
            text: "Phenytoin 1g IV — this provides longer-lasting seizure control than magnesium",
            correct: false,
            critical: false,
            explanation: "Phenytoin is inferior to magnesium sulfate for eclamptic seizures. The Eclampsia Trial demonstrated higher seizure recurrence with phenytoin. It also has a narrow therapeutic window, requires cardiac monitoring during infusion, and can cause hypotension.",
            guideline_ref: "Eclampsia Trial Collaborative Group; AHA ACLS in Pregnancy"
          },
          {
            text: "Labetalol 20 mg IV to lower blood pressure — controlling hypertension will prevent further seizures",
            correct: false,
            critical: false,
            explanation: "While blood pressure management is important in eclampsia, antihypertensives alone do not prevent seizure recurrence. Magnesium sulfate is needed specifically for seizure prophylaxis. Labetalol may be appropriate as an adjunct for severe hypertension (SBP >160 or DBP >110) but does not replace magnesium.",
            guideline_ref: "ACOG Practice Bulletin — Hypertensive Disorders of Pregnancy"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "The patient has another seizure en route. Which interventions are appropriate at this time? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT",
        multi_select: true,
        narrative: "Three minutes into transport, the patient begins tonic-clonic seizure activity again. She is on the stretcher with oxygen in place.",
        vitals_update: { hr: 124, bp: "194/120", rr: 8, spo2: 88, gcs: 3 },
        clinical_pearl: "Recurrent seizures in eclampsia indicate severe disease. At the EMR/EMT level, focus on airway protection, oxygenation, and rapid transport. Definitive pharmacologic management requires ALS intervention.",
        options: [
          {
            text: "Maintain left lateral position and protect from injury",
            correct: true,
            explanation: "Continued left lateral positioning and injury prevention are core interventions during active seizures in pregnancy.",
            guideline_ref: "NAEMSP Obstetric Emergencies"
          },
          {
            text: "Suction airway as needed and maintain high-flow oxygen",
            correct: true,
            explanation: "Airway management is critical during and after seizures. Suction and supplemental oxygen address the dropping SpO2.",
            guideline_ref: "National EMS Education Standards — Airway Management"
          },
          {
            text: "Insert an oropharyngeal airway during active seizure",
            correct: false,
            critical: true,
            explanation: "Do NOT insert an OPA during active seizure activity — it risks oral trauma and broken teeth. Wait until the seizure subsides.",
            guideline_ref: "NAEMSP Airway Management; AHA Guidelines"
          },
          {
            text: "Notify the receiving facility of the patient's condition and recurrent seizures",
            correct: true,
            explanation: "Early hospital notification allows the OB team to prepare for a critically ill eclamptic patient.",
            guideline_ref: "NAEMSP Transport and Communication Guidelines"
          },
          {
            text: "Administer IV magnesium sulfate",
            correct: false,
            explanation: "Magnesium sulfate is the treatment of choice for eclamptic seizures but is outside EMT scope of practice.",
            guideline_ref: "NAEMSP Obstetric Emergencies; AHA ACLS in Pregnancy"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "During magnesium sulfate infusion, which findings would indicate magnesium toxicity requiring immediate intervention? Select ALL that apply.",
        type: "mr",
        level_filter: "Paramedic",
        multi_select: true,
        narrative: "You are administering the magnesium sulfate loading dose. The patient's seizure has stopped. You need to monitor for therapeutic effect and toxicity.",
        clinical_pearl: "Magnesium toxicity progresses in a predictable sequence: loss of deep tendon reflexes (DTRs) at 7-10 mEq/L → respiratory depression at 10-13 mEq/L → cardiac arrest at >15 mEq/L. Check patellar DTRs every 5 minutes during infusion. If reflexes are absent, STOP the infusion. Calcium gluconate 1g IV is the antidote — it directly antagonizes magnesium at the neuromuscular junction.",
        options: [
          {
            text: "Loss of deep tendon reflexes (patellar reflex absent bilaterally)",
            correct: true,
            critical: false,
            explanation: "Absent DTRs are the earliest clinical sign of magnesium toxicity (serum level 7-10 mEq/L). This is the key bedside monitoring tool — check patellar reflexes every 5 minutes during infusion. If absent, stop the infusion immediately.",
            guideline_ref: "AHA ACLS in Pregnancy; ACOG Magnesium Sulfate Monitoring Guidelines"
          },
          {
            text: "Respiratory rate dropping below 12 breaths per minute",
            correct: true,
            critical: false,
            explanation: "Respiratory depression occurs at magnesium levels of 10-13 mEq/L. A respiratory rate <12 during magnesium infusion mandates stopping the infusion and preparing for ventilatory support. Administer calcium gluconate 1g IV.",
            guideline_ref: "AHA ACLS in Pregnancy; ACOG Practice Bulletin"
          },
          {
            text: "Blood pressure decreasing from 188/116 to 155/95",
            correct: false,
            critical: false,
            explanation: "A modest blood pressure reduction is actually a beneficial therapeutic effect of magnesium. Magnesium causes mild vasodilation. Concern arises only with severe hypotension (SBP <90) suggesting toxicity or other causes.",
            guideline_ref: "ACOG Practice Bulletin — Hypertensive Disorders"
          },
          {
            text: "Patient becoming more drowsy with decreasing level of consciousness",
            correct: true,
            critical: false,
            explanation: "Progressive CNS depression beyond expected postictal recovery may indicate magnesium toxicity. While some sedation is expected, worsening LOC during infusion warrants stopping magnesium and reassessing.",
            guideline_ref: "AHA ACLS in Pregnancy"
          },
          {
            text: "Urine output decreasing — magnesium is renally excreted and renal impairment accelerates toxicity",
            correct: true,
            critical: false,
            explanation: "Magnesium is almost entirely renally excreted. Decreased urine output (oliguria) means magnesium is not being cleared, increasing toxicity risk. While difficult to measure precisely in the field, noting absence of urine output during transport is relevant information for the receiving facility.",
            guideline_ref: "ACOG Magnesium Sulfate Safety Guidelines"
          },
          {
            text: "Fetal heart rate of 140 bpm",
            correct: false,
            critical: false,
            explanation: "A fetal heart rate of 140 bpm is within the normal range (110-160 bpm) and does not indicate magnesium toxicity. Fetal bradycardia (<110) could be concerning but is not typically the first sign of maternal magnesium toxicity.",
            guideline_ref: "ACOG Fetal Heart Rate Monitoring Guidelines"
          }
        ]
      },
      {
        phase: "decision-making",
        prompt: "Categorize the following findings as either signs of SEVERE preeclampsia/eclampsia or NORMAL pregnancy findings.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "The seizure has stopped. You are gathering additional history from the partner while continuing transport.",
        clinical_pearl: "Distinguishing normal pregnancy discomforts from warning signs of preeclampsia/eclampsia is critical. Severe headache, visual changes, upper abdominal pain, and marked edema with hypertension are red flags that demand urgent evaluation.",
        explanation: "Recognizing the constellation of eclampsia warning signs versus normal pregnancy changes helps providers triage and communicate urgency to receiving facilities.",
        guideline_ref: "ACOG Practice Bulletin — Hypertensive Disorders of Pregnancy; NAEMSP Obstetric Emergencies",
        categories: ["Severe Preeclampsia / Eclampsia Warning Signs", "Normal Pregnancy Findings"],
        items: [
          { text: "Blood pressure 188/116", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Mild ankle swelling that worsens throughout the day", category: "Normal Pregnancy Findings" },
          { text: "Severe persistent headache unrelieved by rest", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Occasional heartburn after meals", category: "Normal Pregnancy Findings" },
          { text: "Visual disturbances — seeing spots or flashing lights", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Right upper quadrant or epigastric pain", category: "Severe Preeclampsia / Eclampsia Warning Signs" },
          { text: "Mild shortness of breath when climbing stairs", category: "Normal Pregnancy Findings" },
          { text: "Sudden facial and hand edema", category: "Severe Preeclampsia / Eclampsia Warning Signs" }
        ]
      }
    ]
  },

  "nat-beh-03": {
    questions: [
      {
        phase: "initial-assessment",
        prompt: "The patient's vital signs are currently normal and she is alert and oriented. What is the MOST important consideration about this ingestion?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The patient is cooperative, tearful, and answering questions. She states she swallowed 'a big handful' of pills about 30 minutes ago. She has not vomited. Her vitals are stable and she appears clinically well at this time.",
        clinical_pearl: "Acetaminophen overdose is extremely deceptive. Patients often look and feel completely well for the first 24 hours while silent hepatic destruction is occurring. A potentially lethal dose (>150 mg/kg) requires urgent treatment with N-acetylcysteine, which is most effective within 8 hours. Never be falsely reassured by normal vitals in early acetaminophen ingestion.",
        options: [
          {
            text: "The patient may appear well now but could develop delayed life-threatening organ damage",
            correct: true,
            explanation: "Acetaminophen toxicity has a deceptive timeline. The patient may look fine for 12-24 hours while hepatotoxic metabolites cause irreversible liver damage. Early hospital treatment is critical even though the patient currently looks well.",
            guideline_ref: "NAEMSP Toxicology Emergencies; American Association of Poison Control Centers Guidelines"
          },
          {
            text: "Since vital signs are normal, this is primarily a psychiatric emergency, not medical",
            correct: false,
            critical: true,
            explanation: "This is BOTH a medical and psychiatric emergency. Dismissing the medical significance because vitals are currently normal could result in the patient dying from liver failure days later.",
            guideline_ref: "NAEMSP Toxicology Emergencies; NAEMSP Behavioral Emergencies"
          },
          {
            text: "The patient should be made to vomit to remove the pills",
            correct: false,
            critical: true,
            explanation: "Inducing emesis is no longer recommended in the prehospital setting. It is ineffective at removing significant amounts of ingested substance and can cause aspiration, esophageal tears, and delays to definitive care.",
            guideline_ref: "NAEMSP Toxicology Guidelines; American Association of Poison Control Centers"
          },
          {
            text: "Since she regrets the action, she is no longer a suicide risk",
            correct: false,
            explanation: "Expressing regret does not eliminate suicide risk. Ambivalence is common in suicidal patients. She still requires psychiatric evaluation.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; National Suicide Prevention Standards"
          }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following actions in the correct order for managing this patient.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The patient is cooperative and willing to go to the hospital. Her mother wants to drive her. You need to determine the appropriate course of action.",
        explanation: "The correct sequence addresses scene safety and evidence preservation first, then medical assessment, emotional support and rapport-building, and finally transport to an appropriate facility. Bringing the medication container provides critical information for toxicology treatment at the hospital.",
        guideline_ref: "NAEMSP Behavioral Emergencies; NAEMSP Toxicology Guidelines; National EMS Education Standards",
        clinical_pearl: "Always bring the medication container to the hospital — it tells the ED the exact formulation, strength, original quantity, and refill date. This is critical data for calculating the ingested dose and determining whether N-acetylcysteine is needed.",
        items: [
          "Ensure scene safety — confirm no weapons or additional hazards, secure remaining medications",
          "Perform thorough patient assessment and gather ingestion details (what, how much, when)",
          "Establish rapport — use calm, non-judgmental communication and active listening",
          "Bring the medication container and any remaining pills to the hospital",
          "Transport to a facility capable of both medical management and psychiatric evaluation"
        ]
      },
      {
        phase: "treatment",
        prompt: "You have established IV access. Given that this patient ingested a potentially lethal dose of acetaminophen approximately 30 minutes ago, which prehospital considerations are appropriate? Select ALL that apply.",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        multi_select: true,
        narrative: "The patient weighs approximately 55 kg. If she ingested 40 tablets of 500 mg acetaminophen, that is approximately 20,000 mg — roughly 364 mg/kg, well above the toxic threshold of 150 mg/kg. She remains asymptomatic. IV access is established.",
        clinical_pearl: "N-acetylcysteine (NAC) is the antidote for acetaminophen toxicity and is most effective when given within 8 hours of ingestion. In the field, your role is rapid transport, IV access, and communicating the ingested dose and timing to the receiving facility. Some EMS systems now carry NAC for extended transport times.",
        options: [
          {
            text: "Establish IV access and maintain a TKO rate — the patient will need IV NAC at the hospital and patent access saves critical time",
            correct: true,
            critical: false,
            explanation: "Patent IV access is essential. The definitive treatment (IV N-acetylcysteine) will be initiated in the ED. Having IV access ready on arrival saves valuable time in the treatment window.",
            guideline_ref: "NAEMSP Toxicology Emergencies; National EMS Education Standards"
          },
          {
            text: "Calculate and communicate the estimated mg/kg dose ingested to the receiving facility in your pre-arrival report",
            correct: true,
            critical: false,
            explanation: "The mg/kg dose is the most important piece of information for the ED toxicologist. Approximately 364 mg/kg (if all 40 tablets ingested) is significantly above the 150 mg/kg toxic threshold. This information directly guides the decision to start NAC.",
            guideline_ref: "American Association of Poison Control Centers; Rumack-Matthew Nomogram"
          },
          {
            text: "Administer activated charcoal if available and within 1 hour of ingestion — it can significantly reduce acetaminophen absorption",
            correct: true,
            critical: false,
            explanation: "Activated charcoal is most effective within 1 hour of ingestion and can reduce acetaminophen absorption by up to 50-70%. At 30 minutes post-ingestion, this patient is within the optimal window. Ensure the patient is alert with intact airway protective reflexes before administration.",
            guideline_ref: "American Association of Poison Control Centers; NAEMSP Toxicology Position Statement"
          },
          {
            text: "Administer ondansetron 4 mg IV prophylactically — the patient will likely vomit from the acetaminophen and NAC treatment",
            correct: false,
            critical: false,
            explanation: "Prophylactic antiemetics are not indicated in the prehospital setting for a currently asymptomatic patient. If nausea develops, treatment can be initiated, but routine prophylaxis is not standard prehospital practice for ingestions.",
            guideline_ref: "NAEMSP Toxicology Emergencies"
          },
          {
            text: "There is no urgency — acetaminophen overdose takes days to cause harm so normal transport is fine",
            correct: false,
            critical: true,
            explanation: "While symptoms may be delayed, the treatment window is time-sensitive. NAC is most effective within 8 hours, and every hour of delay reduces its efficacy. This patient needs expedient transport to receive timely antidote therapy.",
            guideline_ref: "Rumack-Matthew Nomogram; NAEMSP Toxicology Emergencies"
          }
        ]
      },
      {
        phase: "reassessment",
        prompt: "During transport, which of the following are appropriate actions? Select ALL that apply.",
        type: "mr",
        level_filter: "EMR-EMT",
        multi_select: true,
        narrative: "The patient is on the stretcher, crying quietly. Her mother is riding in the front of the ambulance. The patient says, 'Please don't tell anyone at school about this.' She asks you, 'Do you think I'm crazy?'",
        clinical_pearl: "Your interaction with a suicidal patient in the ambulance may be one of the most impactful moments in their life. Compassionate, non-judgmental care has been shown to reduce future suicide attempts. Avoid clichés like 'you have so much to live for' — instead, validate their pain and reinforce that seeking help was the right thing to do.",
        options: [
          {
            text: "Reassure confidentiality within professional limits and answer her questions honestly and compassionately",
            correct: true,
            explanation: "Honest, compassionate communication builds trust. Explain that her medical information is protected but that the treatment team needs to know what happened to help her.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; Crisis Intervention Standards"
          },
          {
            text: "Monitor vital signs every 5 minutes — watch for nausea, vomiting, or abdominal pain",
            correct: true,
            explanation: "Early signs of acetaminophen toxicity include nausea, vomiting, and right upper quadrant pain. Frequent vital sign monitoring detects any early deterioration.",
            guideline_ref: "NAEMSP Toxicology Emergencies; Poison Control Guidelines"
          },
          {
            text: "Tell her 'Don't worry, everything will be fine — you have so much to live for'",
            correct: false,
            explanation: "Dismissive platitudes minimize the patient's emotional pain and can damage rapport. Instead, validate her feelings.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; National Suicide Prevention Standards"
          },
          {
            text: "Do not leave the patient unattended at any point during transport",
            correct: true,
            explanation: "Suicidal patients must never be left alone. They may attempt further self-harm or have a medical decompensation from the ingestion.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines"
          },
          {
            text: "Scold the patient to make her understand the seriousness of her actions",
            correct: false,
            critical: true,
            explanation: "Lecturing, scolding, or shaming a suicidal patient is harmful and unprofessional. It increases psychological distress and may reduce the likelihood of seeking help in the future.",
            guideline_ref: "NAEMSP Behavioral Emergency Guidelines; Crisis Intervention Standards"
          }
        ]
      }
    ]
  },

  "nat-card-06": {
    questions: [
      {
        phase: "assessment",
        prompt: "This patient presents with severe pulmonary edema and hypotension. Which of the following BEST describes why this combination makes treatment especially challenging?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        narrative: "Auscultation reveals diffuse crackles bilaterally to the apices. The patient can only speak in 1-2 word phrases. Her skin is cool, pale, and diaphoretic. Jugular venous distension is visible even in the upright position.",
        clinical_pearl: "Cardiogenic pulmonary edema with hypotension (cardiogenic shock) is a 'can't win' scenario: the lungs are drowning but the blood pressure can't tolerate the vasodilators (nitroglycerin) that would normally offload the heart. These patients need CPAP, cautious fluid management, and often hospital-level interventions like inotropes or mechanical support.",
        options: [
          {
            text: "Standard CHF treatments like nitroglycerin require adequate blood pressure, which this patient lacks",
            correct: true,
            explanation: "Nitroglycerin is first-line for acute CHF with adequate BP (typically SBP >100), but this patient's SBP of 92 makes vasodilator use dangerous. This is cardiogenic shock — the heart is failing as a pump, and reducing preload further could cause cardiovascular collapse.",
            guideline_ref: "AHA/ACC Heart Failure Guidelines; NAEMSP CHF Prehospital Management"
          },
          {
            text: "The low blood pressure means the patient is actually dehydrated and needs aggressive fluid resuscitation",
            correct: false,
            critical: true,
            explanation: "Fluid resuscitation in a patient with acute pulmonary edema would be catastrophic. The lungs are already flooded because the heart cannot pump effectively — adding volume would worsen the fluid overload.",
            guideline_ref: "AHA/ACC Heart Failure Guidelines"
          },
          {
            text: "Pulmonary edema and hypotension cannot occur simultaneously — reassess the patient",
            correct: false,
            explanation: "Cardiogenic shock absolutely presents with both pulmonary edema and hypotension. The failing left ventricle cannot eject blood forward (causing hypotension) and blood backs up into the lungs (causing edema).",
            guideline_ref: "AHA/ACC Heart Failure Guidelines — Cardiogenic Shock"
          },
          {
            text: "The wheezing indicates this is actually asthma, not a cardiac problem",
            correct: false,
            explanation: "While 'cardiac asthma' can produce wheezing from bronchospasm triggered by pulmonary edema, the overall clinical picture — orthopnea, JVD, crackles, history of CHF with low EF — clearly points to a cardiac etiology.",
            guideline_ref: "AHA/ACC Heart Failure Guidelines — Differential Diagnosis"
          }
        ]
      },
      {
        phase: "assessment",
        prompt: "Categorize the following clinical findings as features of LEFT-sided heart failure or RIGHT-sided heart failure:",
        type: "categorize",
        level_filter: "AEMT-Paramedic",
        narrative: "As you continue your assessment, you note multiple findings. Understanding which side of the heart is failing helps guide your treatment priorities and hospital communication.",
        clinical_pearl: "Remember: LEFT = LUNGS, RIGHT = the REST. Left-sided failure backs blood into the pulmonary circuit (crackles, dyspnea, orthopnea, pink frothy sputum). Right-sided failure backs blood into the systemic venous system (JVD, peripheral edema, hepatomegaly, ascites). Many patients with advanced CHF have biventricular failure with features of both.",
        explanation: "Left-sided heart failure primarily manifests in the pulmonary system because blood backs up from the left ventricle into the lungs. Right-sided failure manifests in the systemic venous system because blood backs up from the right ventricle into the body.",
        guideline_ref: "AHA/ACC Heart Failure Guidelines; Pathophysiology of Heart Failure",
        categories: ["Left-Sided Heart Failure", "Right-Sided Heart Failure"],
        items: [
          { text: "Pulmonary crackles / rales", category: "Left-Sided Heart Failure" },
          { text: "Orthopnea (sleeping on multiple pillows)", category: "Left-Sided Heart Failure" },
          { text: "Paroxysmal nocturnal dyspnea (waking up gasping)", category: "Left-Sided Heart Failure" },
          { text: "Pink, frothy sputum", category: "Left-Sided Heart Failure" },
          { text: "Dyspnea on exertion", category: "Left-Sided Heart Failure" },
          { text: "Jugular venous distension (JVD)", category: "Right-Sided Heart Failure" },
          { text: "Peripheral edema (swollen ankles/legs)", category: "Right-Sided Heart Failure" },
          { text: "Hepatomegaly (enlarged liver)", category: "Right-Sided Heart Failure" },
          { text: "Ascites (abdominal fluid accumulation)", category: "Right-Sided Heart Failure" },
          { text: "Weight gain from fluid retention", category: "Right-Sided Heart Failure" }
        ]
      },
      {
        phase: "treatment",
        prompt: "Place the following interventions in the correct order for managing this patient with cardiogenic pulmonary edema and hypotension:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        narrative: "The patient's SpO2 remains at 82% despite high-flow oxygen via non-rebreather. She is becoming more confused and her breathing is increasingly labored with pink-tinged sputum.",
        vitals_update: { spo2: 82, gcs: 13 },
        explanation: "CPAP is the highest-impact intervention for cardiogenic pulmonary edema — it reduces preload, afterload, and work of breathing simultaneously. Upright positioning aids breathing. IV access is needed but fluids should be avoided. Given hypotension, nitroglycerin is contraindicated. Early hospital notification allows preparation for advanced interventions.",
        guideline_ref: "AHA/ACC Heart Failure Guidelines; NAEMSP CPAP Position Statement; Cardiogenic Shock Management",
        clinical_pearl: "CPAP is the single most impactful prehospital intervention for cardiogenic pulmonary edema. It works by: (1) increasing intraalveolar pressure to push fluid out of alveoli, (2) reducing preload by increasing intrathoracic pressure, (3) reducing afterload by decreasing transmural LV pressure, (4) recruiting collapsed alveoli. Start at 5 cmH2O and titrate up to 10 cmH2O as tolerated.",
        items: [
          "Apply CPAP at 5-10 cmH2O (if patient can cooperate and maintain airway)",
          "Position patient sitting fully upright with legs dependent",
          "Establish IV access — keep line at TKO rate, avoid fluid bolus",
          "Continuous cardiac monitoring — obtain 12-lead ECG to evaluate for acute MI as cause",
          "Provide early notification to receiving facility of cardiogenic shock presentation",
          "Rapid transport — reassess CPAP tolerance and respiratory status every 2-3 minutes"
        ]
      },
      {
        phase: "treatment",
        prompt: "The 12-lead ECG shows atrial fibrillation with rapid ventricular response at 128 bpm and ST depression in leads V4-V6. Given the clinical picture of cardiogenic shock, which pharmacologic considerations are MOST appropriate?",
        type: "graphical",
        level_filter: "Paramedic",
        narrative: "The ECG confirms atrial fibrillation with RVR. ST depression is noted in the lateral leads. BP remains 92/60. The patient is on CPAP with SpO2 improved to 88%. She remains in severe distress.",
        clinical_pearl: "In cardiogenic shock with rapid atrial fibrillation, rate control is desirable but extremely dangerous with the standard agents. Beta-blockers (metoprolol) and calcium channel blockers (diltiazem) both have negative inotropic effects that can further depress the already-failing heart. These patients often need hospital-level interventions: IV amiodarone (less hemodynamic compromise), inotropes (dobutamine, milrinone), or even synchronized cardioversion if hemodynamically unstable. In the field, focus on CPAP, positioning, and rapid transport.",
        image_desc: "12-lead ECG showing irregularly irregular rhythm (atrial fibrillation) at rate of 128, no P waves, ST depression in V4-V6, and no ST elevation.",
        options: [
          {
            text: "Avoid rate-control agents (metoprolol, diltiazem) in the field — their negative inotropic effects could worsen cardiogenic shock; focus on CPAP and rapid transport",
            correct: true,
            critical: false,
            explanation: "Beta-blockers and calcium channel blockers reduce cardiac contractility — exactly what this failing heart cannot tolerate. With an EF of 25% and cardiogenic shock, even standard doses could precipitate cardiovascular collapse. The rate is not the primary problem — the failing pump is. Focus on CPAP, supportive care, and rapid transport.",
            guideline_ref: "AHA/ACC Heart Failure Guidelines; AHA ACLS — Atrial Fibrillation with Heart Failure"
          },
          {
            text: "Administer metoprolol 5 mg IV to control the rapid ventricular rate — rate control is the priority",
            correct: false,
            critical: true,
            explanation: "Metoprolol is a beta-blocker with significant negative inotropic effects. In a patient with an EF of 25% and cardiogenic shock (SBP 92), IV metoprolol could cause immediate cardiovascular collapse. This is one of the most dangerous interventions possible in this scenario.",
            guideline_ref: "AHA ACLS — Atrial Fibrillation Management; AHA/ACC Heart Failure Guidelines"
          },
          {
            text: "Administer diltiazem 0.25 mg/kg IV to slow the heart rate and improve diastolic filling",
            correct: false,
            critical: true,
            explanation: "Diltiazem is a calcium channel blocker with potent negative inotropic effects. It is specifically contraindicated in decompensated heart failure with reduced ejection fraction. It would likely cause profound hypotension and could be fatal.",
            guideline_ref: "AHA ACLS — Atrial Fibrillation; ACC/AHA Heart Failure Guidelines"
          },
          {
            text: "Perform immediate synchronized cardioversion at 120-200J — the rapid rate is causing hemodynamic instability",
            correct: false,
            critical: false,
            explanation: "While cardioversion is an option for hemodynamically unstable atrial fibrillation, this patient's instability is primarily from pump failure (chronic EF 25%), not the rate alone. Cardioversion of chronic atrial fibrillation often fails to convert or maintain sinus rhythm, and the procedure requires sedation which carries additional hemodynamic risk. This decision is better made in the ED with more resources.",
            guideline_ref: "AHA ACLS — Atrial Fibrillation; AHA/ACC Atrial Fibrillation Guidelines"
          }
        ]
      }
    ]
  }

};
