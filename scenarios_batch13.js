const BATCH13 = [
  // ============ OB/Peds/Neonatal ============
  {
    id: "nat-ob-04",
    title: "Placental Abruption / Third Trimester Hemorrhage",
    dispatch: "32-year-old female, 34 weeks pregnant, abdominal pain with vaginal bleeding",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: "32 years", sex: "Female", cc: "Severe abdominal pain and vaginal bleeding" },
    scene: "Patient found lying on couch in living room, visibly distressed, holding abdomen. Dark blood noted on clothing. Partner states bleeding started about 30 minutes ago after she fell on icy steps.",
    history: {
      pmh: "G3P2, gestational hypertension this pregnancy, prior C-section",
      meds: "Labetalol 200mg BID, prenatal vitamins",
      allergies: "Sulfa drugs"
    },
    vitals: { hr: 118, bp: "92/58", rr: 24, spo2: 96, gcs: 15, temp: "98.4°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "The patient's abdomen is rigid and tender on palpation, and she reports the pain is constant rather than coming in waves. Dark vaginal bleeding is present but not profuse. Which findings are most consistent with placental abruption versus placenta previa?",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Constant abdominal pain",
          "Rigid/board-like uterus",
          "Painless bright red bleeding",
          "Dark blood",
          "History of trauma",
          "Bleeding provoked by cervical change"
        ],
        categories: ["Suggests Abruption", "Suggests Previa"],
        correctCategories: {
          "Constant abdominal pain": "Suggests Abruption",
          "Rigid/board-like uterus": "Suggests Abruption",
          "Dark blood": "Suggests Abruption",
          "History of trauma": "Suggests Abruption",
          "Painless bright red bleeding": "Suggests Previa",
          "Bleeding provoked by cervical change": "Suggests Previa"
        },
        explanation: "Placental abruption typically presents with constant pain, a rigid uterus, dark blood (trapped behind placenta), and may follow trauma. Placenta previa classically causes painless, bright red bleeding often triggered by cervical dilation or exam. Both are third-trimester emergencies but management priorities differ.",
        guideline_ref: "ACOG Practice Bulletin #200 (2018) — Early Pregnancy Loss; NAEMSP Position Statement on Obstetric Emergencies",
        clinical_pearl: "Never perform a vaginal exam on a third-trimester bleeding patient in the field — if it's previa, you could provoke catastrophic hemorrhage."
      },
      {
        phase: "treatment",
        prompt: "You establish IV access. The patient's BP is now 86/52 and HR 128. What is the correct sequence of interventions for this patient?",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Position patient in left lateral tilt",
          "Begin aggressive isotonic crystalloid bolus",
          "Apply high-flow oxygen via NRB",
          "Notify receiving facility of OB emergency",
          "Initiate rapid transport to closest facility with OB surgical capability"
        ],
        correctOrder: [
          "Apply high-flow oxygen via NRB",
          "Position patient in left lateral tilt",
          "Begin aggressive isotonic crystalloid bolus",
          "Notify receiving facility of OB emergency",
          "Initiate rapid transport to closest facility with OB surgical capability"
        ],
        explanation: "Oxygen addresses fetal and maternal hypoxia first. Left lateral tilt prevents aortocaval compression and improves venous return. Crystalloid resuscitation addresses hypovolemia. Early notification allows the OB team to prepare for possible emergent C-section. Transport must be to a facility with surgical OB capability — a community ED without OB is insufficient.",
        guideline_ref: "AHA/ACOG Maternal Cardiac Arrest Guidelines; NAEMSP Obstetric Emergency Position Statement",
        clinical_pearl: "In abruption, visible bleeding often underestimates total blood loss — blood can be concealed behind the placenta. Treat the clinical shock, not the visible hemorrhage.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "En route, you perform ongoing monitoring. The fetal heart rate by Doppler is 95 bpm. Which of the following statements about fetal assessment in the prehospital setting is correct?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Normal fetal heart rate is 120-160 bpm; a rate of 95 suggests fetal distress and reinforces the need for rapid transport", correct: true },
          { text: "Fetal heart rate monitoring is unreliable in the field and should not influence transport decisions", correct: false },
          { text: "A fetal heart rate under 100 is normal during the third trimester at rest", correct: false },
          { text: "Administer terbutaline to improve fetal heart rate", correct: false }
        ],
        explanation: "Normal fetal heart rate is 120-160 bpm. Fetal bradycardia (<110 bpm) indicates distress, likely from decreased placental perfusion. While prehospital Doppler is not continuous fetal monitoring, a persistently low rate is a critical finding that reinforces urgent transport. Terbutaline is a tocolytic that may be used for acute tocolysis but does not treat the underlying cause of fetal bradycardia from abruption.",
        guideline_ref: "ACOG Practice Bulletin #106 — Intrapartum Fetal Heart Rate Monitoring; NRP 8th Edition",
        clinical_pearl: "If you can hear a fetal heart rate, document it and the time — this data helps the receiving OB team make rapid surgical decisions."
      }
    ]
  },
  {
    id: "nat-ob-05",
    title: "Pediatric Severe Asthma Exacerbation",
    dispatch: "7-year-old male, difficulty breathing, mother states inhaler not helping",
    category: "OB/Peds/Neonatal",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: "7 years", sex: "Male", cc: "Worsening shortness of breath" },
    scene: "Child sitting upright on bed in tripod position, using accessory muscles. Audible wheezing from doorway. Multiple albuterol MDI canisters on nightstand. Mother states he has used his inhaler 6 times in the past 2 hours with no improvement.",
    history: {
      pmh: "Asthma since age 3, two prior hospitalizations, one prior intubation at age 5",
      meds: "Albuterol MDI PRN, fluticasone 88mcg BID (mother admits he hasn't used it in weeks)",
      allergies: "None known"
    },
    vitals: { hr: 148, bp: "98/62", rr: 36, spo2: 88, gcs: 15, temp: "98.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "Which of the following findings would indicate this child is progressing toward respiratory failure? Select all that apply.",
        type: "mr",
        level_filter: "EMT-AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Decreasing wheezing with worsening respiratory effort", correct: true },
          { text: "Altered mental status or inability to speak in sentences", correct: true },
          { text: "SpO2 remaining below 90% despite supplemental oxygen", correct: true },
          { text: "Respiratory rate of 36 with audible wheezing", correct: false },
          { text: "Heart rate of 148", correct: false }
        ],
        explanation: "The 'silent chest' — decreasing wheezing despite continued distress — indicates air movement is critically reduced and is an ominous sign. Altered mentation signals hypoxia or hypercapnia. Persistent hypoxemia despite oxygen indicates severe bronchospasm. Tachycardia and tachypnea with audible wheezing, while concerning, are expected in a moderate-severe exacerbation and don't alone signal imminent failure.",
        guideline_ref: "NAEPP EPR-3 (NIH) — Guidelines for the Diagnosis and Management of Asthma; PALS Provider Manual (AHA)",
        clinical_pearl: "A quiet chest in a distressed asthmatic child is far more dangerous than a loud, wheezy one — silence means air isn't moving."
      },
      {
        phase: "treatment",
        prompt: "You initiate treatment. Place the following interventions in the correct order of priority:",
        type: "order",
        level_filter: "AEMT-Paramedic",
        items: [
          "Continuous nebulized albuterol 5mg",
          "Supplemental oxygen to maintain SpO2 >94%",
          "Ipratropium bromide 0.5mg nebulized",
          "IV/IO access and methylprednisolone 2mg/kg IV",
          "Consider IV magnesium sulfate 25-50mg/kg over 20 min"
        ],
        correctOrder: [
          "Supplemental oxygen to maintain SpO2 >94%",
          "Continuous nebulized albuterol 5mg",
          "Ipratropium bromide 0.5mg nebulized",
          "IV/IO access and methylprednisolone 2mg/kg IV",
          "Consider IV magnesium sulfate 25-50mg/kg over 20 min"
        ],
        explanation: "Oxygen addresses life-threatening hypoxemia first. Continuous nebulized albuterol is the mainstay of bronchospasm treatment. Ipratropium is added in severe exacerbations for synergistic bronchodilation. Systemic corticosteroids reduce inflammation (onset 4-6 hours but should be given early). Magnesium sulfate is reserved for severe/refractory cases not responding to initial therapy.",
        guideline_ref: "NAEPP EPR-3 — Stepwise Management of Acute Asthma Exacerbation; PALS Systematic Approach",
        clinical_pearl: "Nebulized albuterol can be driven with oxygen in pediatric patients — you're treating bronchospasm AND hypoxia simultaneously with one setup."
      },
      {
        phase: "reassessment",
        prompt: "After 10 minutes of continuous albuterol and ipratropium, the child's wheezing has slightly improved but SpO2 is now 91% on high-flow O2. He is becoming drowsy. What is the most appropriate next step?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Prepare for assisted ventilation with BVM and consider epinephrine 0.01mg/kg IM; continue rapid transport", correct: true },
          { text: "Increase albuterol dose and continue monitoring", correct: false },
          { text: "Switch to blow-by oxygen as the child appears tired and needs rest", correct: false },
          { text: "Perform endotracheal intubation immediately", correct: false }
        ],
        narrative: "The child is now only responsive to voice, wheezing is diminishing, and respiratory rate has dropped to 18 — slower than expected for his age and clinical condition.",
        explanation: "Drowsiness with decreasing respiratory rate in a child with severe asthma signals impending respiratory failure — not improvement. BVM-assisted ventilation with PEEP supports oxygenation and ventilation. IM epinephrine (0.01mg/kg of 1:1,000) provides systemic bronchodilation when inhaled medications aren't reaching the airways. Intubation is a last resort in status asthmaticus — it's extremely high-risk due to severe bronchospasm and air trapping. Increasing albuterol alone is insufficient, and reducing oxygen support would be dangerous.",
        guideline_ref: "PALS Provider Manual (AHA) — Management of Lower Airway Obstruction; NAEPP EPR-3 Severe Exacerbation Pathway",
        clinical_pearl: "Intubation in status asthmaticus is a last resort — the combination of air trapping, high airway pressures, and post-intubation sedation can cause cardiovascular collapse. Optimize medical therapy aggressively first.",
        critical: true
      }
    ]
  },
  {
    id: "nat-ob-06",
    title: "Neonatal Meconium Aspiration",
    dispatch: "Woman just delivered baby at home, baby not breathing well",
    category: "OB/Peds/Neonatal",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: "Newborn (just delivered)", sex: "Male", cc: "Poor respiratory effort after delivery" },
    scene: "Full-term newborn delivered 3 minutes ago on bathroom floor. Amniotic fluid is thick, dark green-brown. Baby is limp, covered in thick meconium-stained fluid. Skin appears dusky/cyanotic. Mother is alert, placenta not yet delivered. Umbilical cord is intact and pulsating.",
    history: {
      pmh: "Mother G2P1 at 41+3 weeks, no prenatal complications reported",
      meds: "Prenatal vitamins only",
      allergies: "None known"
    },
    vitals: { hr: 78, bp: "N/A", rr: 6, spo2: 55, gcs: "N/A (newborn)", temp: "N/A" },
    questions: [
      {
        phase: "assessment",
        prompt: "The newborn is limp, has gasping respirations at about 6/min, and HR by cord pulsation is approximately 78 bpm. Thick meconium is visible in the mouth and nares. According to current NRP guidelines, what is the correct initial approach?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Begin initial steps of resuscitation (warm, dry, stimulate, suction mouth then nose, position airway) and assess response", correct: true },
          { text: "Immediately intubate and suction the trachea before any other intervention", correct: false },
          { text: "Vigorously stimulate the baby until crying begins before any airway management", correct: false },
          { text: "Begin chest compressions immediately due to heart rate below 100", correct: false }
        ],
        explanation: "Current NRP guidelines (8th edition, 2021) no longer recommend routine tracheal suctioning of meconium-stained non-vigorous newborns. Instead, begin standard initial steps: warm, dry, stimulate, position the airway, and suction the mouth and nose. If the infant does not improve, proceed to PPV. Intubation and tracheal suction may still be considered if the airway appears obstructed despite initial steps, but it is no longer the automatic first action. This was a major guideline change from previous editions.",
        guideline_ref: "NRP 8th Edition (AAP/AHA 2021) — Initial Steps of Newborn Resuscitation; ILCOR 2020 CoSTR",
        clinical_pearl: "NRP 8th edition changed meconium management significantly — routine tracheal suctioning is no longer recommended. Focus on initiating ventilation quickly rather than prolonged attempts to clear the airway."
      },
      {
        phase: "treatment",
        prompt: "After initial steps, the newborn's HR is now 54 bpm and respiratory effort is absent despite stimulation. You begin PPV with room air via bag-mask. After 30 seconds of effective PPV, HR remains 48 bpm. What are the correct next interventions?",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Increase FiO2 to 100% oxygen", correct: true },
          { text: "Verify effective ventilation — chest rise, mask seal, airway positioning", correct: true },
          { text: "Begin chest compressions at 3:1 ratio with ventilations", correct: true },
          { text: "Administer epinephrine 0.01mg/kg IV immediately", correct: false },
          { text: "Stop PPV and attempt aggressive suctioning", correct: false }
        ],
        explanation: "With HR <60 despite 30 seconds of effective PPV, NRP calls for: (1) increase to 100% O2, (2) reassess ventilation effectiveness (MR SOPA — Mask adjustment, Reposition, Suction, Open mouth, Pressure increase, Alternative airway), and (3) initiate chest compressions at a 3:1 compression-to-ventilation ratio. Epinephrine is indicated only if HR remains <60 after 60 seconds of coordinated compressions and ventilation with 100% O2. Stopping ventilation for suctioning would be harmful.",
        guideline_ref: "NRP 8th Edition (AAP/AHA 2021) — Positive Pressure Ventilation and Chest Compressions Algorithm",
        clinical_pearl: "In neonatal resuscitation, the compression-to-ventilation ratio is 3:1 (not 15:2 or 30:2) — reflecting that neonatal arrest is almost always respiratory in origin. Ventilation is the most important intervention.",
        critical: true
      },
      {
        phase: "treatment",
        prompt: "You are managing the newborn and mother simultaneously. Match each task to the appropriate priority category for your team:",
        type: "graphical",
        level_filter: "EMT-AEMT-Paramedic",
        prompt_image_desc: "Timeline showing concurrent maternal and neonatal management priorities: Immediate (0-60 sec), Urgent (1-5 min), and Ongoing (5+ min). Items must be placed in correct time windows.",
        items: [
          "Clamp and cut umbilical cord",
          "Neonatal airway management and PPV",
          "Maternal uterine massage for placental delivery",
          "Continuous neonatal HR and SpO2 monitoring",
          "Maternal hemorrhage assessment",
          "Thermoregulation — dry and wrap newborn"
        ],
        categories: ["Immediate (0-60 sec)", "Urgent (1-5 min)", "Ongoing (5+ min)"],
        correctCategories: {
          "Neonatal airway management and PPV": "Immediate (0-60 sec)",
          "Thermoregulation — dry and wrap newborn": "Immediate (0-60 sec)",
          "Clamp and cut umbilical cord": "Urgent (1-5 min)",
          "Maternal hemorrhage assessment": "Urgent (1-5 min)",
          "Continuous neonatal HR and SpO2 monitoring": "Ongoing (5+ min)",
          "Maternal uterine massage for placental delivery": "Ongoing (5+ min)"
        },
        explanation: "The non-breathing newborn is the immediate priority — airway management and thermoregulation cannot wait. Cord clamping facilitates separation for resuscitation (in a compromised neonate, delayed clamping is not recommended). Maternal hemorrhage assessment is urgent but secondary to neonatal resuscitation when the mother is stable. Ongoing monitoring and placental management continue during transport.",
        guideline_ref: "NRP 8th Edition — Team-Based Resuscitation; NAEMSP Field Delivery Guidelines",
        clinical_pearl: "In a field delivery with a compromised neonate, immediately clamp and cut the cord to allow the baby to be moved to a clean, warm surface for resuscitation — delayed cord clamping is only for vigorous newborns."
      }
    ]
  },

  // ============ Pharmacology ============
  {
    id: "nat-pharm-06",
    title: "Calcium Channel Blocker Overdose",
    dispatch: "58-year-old male found unresponsive by wife, empty medication bottles nearby",
    category: "Pharmacology",
    difficulty: "Hard",
    level_min: "AEMT",
    patient: { age: "58 years", sex: "Male", cc: "Unresponsive" },
    scene: "Patient found supine on bedroom floor. Wife states she found him 20 minutes ago. Several empty prescription bottles on nightstand including amlodipine and verapamil. A suicide note is present. Patient is bradycardic on initial assessment with cool, mottled extremities.",
    history: {
      pmh: "Hypertension, atrial fibrillation, depression, type 2 diabetes",
      meds: "Verapamil ER 240mg BID, amlodipine 10mg daily, metformin 1000mg BID, sertraline 100mg daily",
      allergies: "Codeine"
    },
    vitals: { hr: 38, bp: "68/40", rr: 10, spo2: 91, gcs: 7, temp: "96.2°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient presents with profound bradycardia, hypotension, and altered mental status following suspected calcium channel blocker ingestion. Which physiologic effects explain this presentation?",
        type: "mr",
        level_filter: "Paramedic",
        selectCount: 3,
        options: [
          { text: "Decreased cardiac contractility (negative inotropy)", correct: true },
          { text: "Decreased heart rate via SA and AV node depression (negative chronotropy)", correct: true },
          { text: "Peripheral vasodilation and loss of vascular tone", correct: true },
          { text: "Sodium channel blockade causing QRS widening", correct: false },
          { text: "Potassium efflux causing hyperkalemia", correct: false }
        ],
        explanation: "Calcium channel blockers (especially non-dihydropyridines like verapamil) block L-type calcium channels in the heart and vasculature causing: decreased contractility, SA/AV node depression (bradycardia and conduction delays), and vasodilation. Sodium channel blockade and QRS widening are characteristic of TCA or class I antiarrhythmic toxicity, not CCB overdose. CCBs can cause hyperglycemia (impaired insulin release) — not hyperkalemia.",
        guideline_ref: "ACMT Position Statement on CCB Poisoning (2023); AHA ACLS Toxicology Guidelines",
        clinical_pearl: "Hyperglycemia in a CCB overdose is actually a marker of severity — calcium channels are needed for pancreatic insulin release. A blood glucose >200 in CCB toxicity predicts worse outcomes."
      },
      {
        phase: "treatment",
        prompt: "You establish IV access. Place the following treatments in the recommended order for managing this severe CCB overdose:",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Calcium chloride 1-2g IV slow push (or calcium gluconate 3-6g)",
          "Atropine 1mg IV for symptomatic bradycardia",
          "High-dose insulin therapy — regular insulin 1 unit/kg IV bolus with dextrose",
          "Norepinephrine infusion for refractory hypotension",
          "IV crystalloid bolus 20mL/kg"
        ],
        correctOrder: [
          "Atropine 1mg IV for symptomatic bradycardia",
          "Calcium chloride 1-2g IV slow push (or calcium gluconate 3-6g)",
          "IV crystalloid bolus 20mL/kg",
          "High-dose insulin therapy — regular insulin 1 unit/kg IV bolus with dextrose",
          "Norepinephrine infusion for refractory hypotension"
        ],
        explanation: "Atropine is the fastest intervention for symptomatic bradycardia though often ineffective in severe CCB toxicity. Calcium is the direct physiologic antidote — it competes with the CCB at the receptor. Volume resuscitation addresses vasodilation. High-dose insulin (HDI) is the cornerstone of severe CCB toxicity management — it improves cardiac contractility by enhancing myocardial glucose utilization. Vasopressors are added for refractory shock. Note: atropine will likely fail but is fast and low-risk, so it's given while preparing calcium.",
        guideline_ref: "ACMT/AACT Position Statement on CCB Poisoning; AHA ACLS — Toxicological Emergencies",
        clinical_pearl: "High-dose insulin (1 unit/kg bolus then 1-10 units/kg/hr drip) is the most evidence-supported treatment for severe CCB toxicity — it works by improving cardiac contractility via enhanced myocardial glucose metabolism, not by lowering blood sugar.",
        critical: true
      },
      {
        phase: "reassessment",
        prompt: "After calcium and atropine, the patient's HR is 44 and BP 72/44. You begin high-dose insulin therapy. Which of the following monitoring considerations is most important during this infusion?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Frequent blood glucose monitoring — administer dextrose boluses to maintain glucose >150mg/dL and prevent hypoglycemia", correct: true },
          { text: "Monitor potassium levels — insulin will cause dangerous hyperkalemia", correct: false },
          { text: "Limit insulin infusion to 30 minutes to avoid insulin shock", correct: false },
          { text: "Discontinue insulin if heart rate doesn't improve within 5 minutes", correct: false }
        ],
        explanation: "High-dose insulin therapy requires aggressive glucose monitoring and supplementation. Insulin drives glucose into cells, causing hypoglycemia — the most common complication. Dextrose infusions (D10W or D25W) should maintain glucose >150mg/dL. Insulin actually causes hypokalemia (not hyperkalemia) by shifting K+ intracellularly. HDI may take 15-45 minutes for full hemodynamic effect, so early discontinuation would be premature. The infusion often continues for hours.",
        guideline_ref: "ACMT Position Statement — High-Dose Insulin for CCB and Beta-Blocker Toxicity",
        clinical_pearl: "Start dextrose supplementation preemptively with high-dose insulin — don't wait for the glucose to drop. Most patients will need D10W running at 100-200mL/hr alongside the insulin drip."
      }
    ]
  },
  {
    id: "nat-pharm-07",
    title: "Polypharmacy Adverse Drug Interaction in Elderly",
    dispatch: "82-year-old female, found confused and weak, daughter requesting evaluation",
    category: "Pharmacology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: "82 years", sex: "Female", cc: "Confusion and weakness" },
    scene: "Patient seated in recliner, appears lethargic but arousable. Daughter states she has been increasingly confused over the past 2 days and nearly fell twice today. A medication organizer on the kitchen counter contains 11 different medications. Daughter notes her mother was recently prescribed a new antibiotic by urgent care for a UTI.",
    history: {
      pmh: "Atrial fibrillation, CHF, hypertension, GERD, osteoarthritis, mild renal insufficiency",
      meds: "Warfarin 5mg daily, digoxin 0.125mg daily, lisinopril 20mg daily, furosemide 40mg daily, metoprolol 50mg BID, omeprazole 20mg daily, acetaminophen PRN, potassium chloride 20mEq daily, trimethoprim-sulfamethoxazole (Bactrim) started 5 days ago, aspirin 81mg daily, calcium 600mg daily",
      allergies: "Penicillin"
    },
    vitals: { hr: 52, bp: "88/54", rr: 16, spo2: 95, gcs: 13, temp: "99.1°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient's presentation — new confusion, bradycardia, and hypotension — may be explained by drug-drug interactions involving her recently added antibiotic (trimethoprim-sulfamethoxazole). Which potential interactions are of greatest concern?",
        type: "table",
        level_filter: "AEMT-Paramedic",
        items: [
          { drug_pair: "TMP-SMX + Warfarin", interaction: "Increased anticoagulant effect → bleeding risk", severity: "High" },
          { drug_pair: "TMP-SMX + Metoprolol", interaction: "Increased metoprolol levels → excessive bradycardia/hypotension", severity: "Moderate" },
          { drug_pair: "TMP-SMX + Digoxin", interaction: "Increased digoxin levels → toxicity (nausea, bradycardia, visual changes)", severity: "High" },
          { drug_pair: "TMP-SMX + Potassium supplement", interaction: "Hyperkalemia risk (TMP-SMX blocks renal K+ excretion)", severity: "High" }
        ],
        explanation: "Trimethoprim-sulfamethoxazole is notorious for drug interactions in elderly polypharmacy patients. It inhibits CYP2C9, increasing warfarin's anticoagulant effect (bleeding risk). It reduces renal clearance of digoxin, potentially causing toxicity (bradycardia, visual changes, nausea). TMP blocks ENaC channels in the kidney similarly to amiloride, causing potassium retention — combined with a potassium supplement, this creates hyperkalemia risk. The bradycardia and hypotension here likely reflect digoxin toxicity and/or hyperkalemia, both precipitated by the new antibiotic.",
        guideline_ref: "AGS Beers Criteria (2023) — Potentially Inappropriate Medications in Older Adults; FDA Drug Interaction Labeling Guidelines",
        clinical_pearl: "TMP-SMX is one of the most dangerous additions to an elderly patient's medication list — it interacts with warfarin, digoxin, ACE inhibitors, and potassium-sparing agents. Always ask about new medications in the past 1-2 weeks."
      },
      {
        phase: "treatment",
        prompt: "Given the likelihood of digoxin toxicity and possible hyperkalemia contributing to this patient's bradycardia and hypotension, which is the most appropriate prehospital intervention?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Establish IV access, administer a cautious fluid bolus (250mL NS), obtain a 12-lead ECG, and transport with continuous cardiac monitoring", correct: true },
          { text: "Administer atropine 0.5mg IV push immediately and repeat every 3 minutes", correct: false },
          { text: "Administer calcium chloride IV to treat suspected hyperkalemia", correct: false },
          { text: "Withhold all interventions and transport non-emergently since vitals are stable", correct: false }
        ],
        explanation: "IV access, cautious fluids, a 12-lead ECG (looking for digoxin toxicity patterns and hyperkalemia signs), and cardiac monitoring with transport is the safest approach. Atropine may be considered for symptomatic bradycardia but has limited effectiveness in digoxin toxicity and can provoke lethal arrhythmias. Calcium is normally used for hyperkalemia but is CONTRAINDICATED in digoxin toxicity — it can cause fatal 'stone heart' (refractory ventricular fibrillation). The patient is not 'stable' with a GCS of 13, HR of 52, and BP of 88/54.",
        guideline_ref: "AHA ACLS — Bradycardia with a Pulse Algorithm; UpToDate — Digoxin Toxicity Management",
        clinical_pearl: "Never give IV calcium to a bradycardic patient who might have digoxin toxicity — it can precipitate fatal cardiac arrest. The definitive treatment is digoxin-specific antibody fragments (Digibind/DigiFab), which is hospital-based.",
        critical: true
      },
      {
        phase: "reassessment",
        prompt: "Your 12-lead ECG shows a slow, regular rhythm with a distinctive pattern. Which ECG findings would you expect in digoxin toxicity with possible hyperkalemia?",
        type: "mr",
        level_filter: "Paramedic",
        selectCount: 3,
        options: [
          { text: "Scooped ST segments ('Salvador Dali mustache' pattern) from digoxin effect", correct: true },
          { text: "Peaked T waves suggesting hyperkalemia", correct: true },
          { text: "Regularized atrial fibrillation (suggests AV block from toxicity)", correct: true },
          { text: "Delta waves indicating pre-excitation", correct: false },
          { text: "ST elevation in contiguous leads suggesting STEMI", correct: false }
        ],
        explanation: "Digoxin characteristically produces scooped/sagging ST segments. In toxicity, atrial fibrillation may become regularized due to complete AV block with a junctional escape rhythm — 'regularized A-fib' is nearly pathognomonic for digoxin toxicity. Concurrent hyperkalemia produces peaked T waves. Delta waves suggest WPW, and ST elevation suggests MI — neither is expected here.",
        guideline_ref: "AHA ACLS — Recognition of Toxicological ECG Patterns; ACC/AHA ECG Interpretation Guidelines",
        clinical_pearl: "If a patient with known atrial fibrillation presents with a slow, REGULAR rhythm — think digoxin toxicity causing complete heart block with junctional escape. The regularity in a normally irregular rhythm is the clue."
      }
    ]
  },
  {
    id: "nat-pharm-08",
    title: "Steroid-Dependent Adrenal Crisis",
    dispatch: "45-year-old female, weak and dizzy, history of lupus",
    category: "Pharmacology",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: "45 years", sex: "Female", cc: "Severe weakness, dizziness, abdominal pain" },
    scene: "Patient lying on kitchen floor, too weak to stand. Skin is notably tanned despite winter season. She states she has been vomiting for 2 days with a stomach bug and has not been able to keep her medications down, including her prednisone. She ran out of her prescription 4 days ago and her rheumatologist appointment isn't until next week.",
    history: {
      pmh: "Systemic lupus erythematosus, adrenal insufficiency (secondary to chronic steroid use), hypothyroidism",
      meds: "Prednisone 20mg daily (has NOT taken for 4 days), levothyroxine 75mcg daily, hydroxychloroquine 200mg BID",
      allergies: "Ibuprofen (GI bleed)"
    },
    vitals: { hr: 122, bp: "78/48", rr: 22, spo2: 97, gcs: 14, temp: "100.8°F" },
    questions: [
      {
        phase: "assessment",
        prompt: "This patient has not taken her prednisone for 4 days after chronic use. Which statement best explains why abrupt cessation of chronic corticosteroids causes adrenal crisis?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Chronic exogenous steroids suppress the HPA axis; the adrenal glands cannot produce adequate cortisol when the exogenous source is removed, especially during physiologic stress", correct: true },
          { text: "Prednisone directly maintains blood pressure, and stopping it causes immediate vascular collapse", correct: false },
          { text: "Steroid withdrawal causes an immune rebound that attacks the adrenal glands", correct: false },
          { text: "The body becomes addicted to steroids and experiences withdrawal seizures similar to benzodiazepine withdrawal", correct: false }
        ],
        explanation: "Chronic corticosteroid use suppresses the hypothalamic-pituitary-adrenal (HPA) axis through negative feedback. The adrenal glands atrophy and cannot mount an appropriate cortisol response to stress. When the exogenous steroid is abruptly stopped — especially during illness (a physiologic stressor) — the body cannot produce enough cortisol, leading to cardiovascular collapse, hypoglycemia, electrolyte disturbances (hyponatremia, hyperkalemia), and potentially death.",
        guideline_ref: "Endocrine Society Clinical Practice Guidelines — Adrenal Insufficiency; NAEMSP Endocrine Emergency Guidance",
        clinical_pearl: "Any patient on chronic steroids (>2 weeks of daily use) who stops abruptly or faces physiologic stress (illness, trauma, surgery) is at risk for adrenal crisis. Always ask medication compliance questions — especially about steroids."
      },
      {
        phase: "treatment",
        prompt: "You establish IV access. Which interventions are appropriate for suspected adrenal crisis in the prehospital setting?",
        type: "mr",
        level_filter: "AEMT-Paramedic",
        selectCount: 3,
        options: [
          { text: "Aggressive IV normal saline bolus (1-2L) for volume resuscitation", correct: true },
          { text: "Dextrose-containing IV fluid or D50 if glucose is low", correct: true },
          { text: "Hydrocortisone 100mg IV (or dexamethasone 4mg IV if available) — stress-dose steroids", correct: true },
          { text: "Vasopressin 20 units IV push for refractory hypotension", correct: false },
          { text: "Sodium bicarbonate 1mEq/kg IV for metabolic correction", correct: false }
        ],
        explanation: "The three pillars of adrenal crisis management are: (1) Aggressive volume resuscitation with NS — these patients are profoundly volume depleted from vomiting, sodium wasting, and poor vascular tone. (2) Glucose management — cortisol is essential for gluconeogenesis; hypoglycemia is common. (3) Stress-dose steroids — hydrocortisone 100mg IV is ideal as it has both glucocorticoid and mineralocorticoid activity. Dexamethasone 4mg IV is an alternative. Vasopressin at push-dose is not standard first-line. Bicarbonate is not indicated without confirmed acidosis requiring treatment.",
        guideline_ref: "Endocrine Society Guidelines — Management of Adrenal Crisis; ACEP Emergency Medicine Practice — Adrenal Emergencies",
        clinical_pearl: "If your service carries dexamethasone (many do for croup/asthma), it can be used for adrenal crisis — 4mg IV is approximately equivalent to 100mg hydrocortisone for glucocorticoid effect, though it lacks mineralocorticoid activity.",
        critical: true
      },
      {
        phase: "reassessment",
        prompt: "Categorize the following clinical features as findings you would expect in adrenal crisis versus findings that suggest an alternative diagnosis:",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Hypotension refractory to IV fluids alone",
          "Hypoglycemia",
          "Hyponatremia",
          "Hyperkalemia",
          "Hypertension with bradycardia",
          "Unilateral facial droop"
        ],
        categories: ["Expected in Adrenal Crisis", "Suggests Alternative Diagnosis"],
        correctCategories: {
          "Hypotension refractory to IV fluids alone": "Expected in Adrenal Crisis",
          "Hypoglycemia": "Expected in Adrenal Crisis",
          "Hyponatremia": "Expected in Adrenal Crisis",
          "Hyperkalemia": "Expected in Adrenal Crisis",
          "Hypertension with bradycardia": "Suggests Alternative Diagnosis",
          "Unilateral facial droop": "Suggests Alternative Diagnosis"
        },
        explanation: "Adrenal crisis presents with hypotension (poor vascular tone + volume depletion), hypoglycemia (impaired gluconeogenesis), hyponatremia (impaired free water excretion + sodium wasting), and hyperkalemia (loss of aldosterone effect). Cushing's triad (hypertension with bradycardia) suggests increased ICP, and unilateral facial droop suggests stroke — neither is consistent with adrenal crisis.",
        guideline_ref: "Endocrine Society Clinical Practice Guidelines — Primary Adrenal Insufficiency; NAEMSP Endocrine Emergency Guidance",
        clinical_pearl: "The hypotension of adrenal crisis is characteristically resistant to IV fluids and vasopressors until steroids are administered — if a hypotensive patient isn't responding to fluids, ask about steroid use."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { BATCH13 };
