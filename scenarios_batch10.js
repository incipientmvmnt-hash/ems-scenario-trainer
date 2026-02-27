const BATCH10 = [
  {
    id: "nat-ops-05",
    title: "Crew Resource Management / Communication Failure",
    dispatch: "Respond to a 58-year-old male, difficulty breathing, second floor apartment",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 58, sex: "M", cc: "Difficulty breathing" },
    scene: "Second floor walk-up apartment. Patient is on a couch, visibly short of breath. Your partner begins assessment while you prepare equipment. There is notable tension — your partner dismisses your suggestion to obtain a 12-lead and states 'just load and go.'",
    history: { pmh: "COPD, HTN", meds: "Albuterol, lisinopril", allergies: "Sulfa" },
    vitals: { hr: 110, bp: "168/94", rr: 28, spo2: 88, gcs: 15, temp: "98.8°F" },
    questions: [
      {
        phase: "scene",
        prompt: "Your partner dismisses your clinical concern and tells you to 'just load and go.' What is the MOST appropriate next step using CRM principles?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Comply silently to avoid conflict", correct: false },
          { text: "Use a structured assertion such as 'I am concerned because…I suggest we…'", correct: true },
          { text: "Radio your supervisor to override your partner", correct: false },
          { text: "Ignore your partner and perform the intervention yourself", correct: false }
        ],
        explanation: "CRM teaches structured advocacy using tools like CUS (Concerned-Uncomfortable-Safety) or DESC scripts. Asserting concerns respectfully keeps patient care on track without creating dysfunction.",
        guideline_ref: "NAEMSP Position Statement on Crew Resource Management in EMS (2014); FAA/AHRQ TeamSTEPPS Framework",
        clinical_pearl: "The CUS framework — 'I am Concerned, I am Uncomfortable, this is a Safety issue' — gives providers a graduated escalation path that is direct but non-confrontational."
      },
      {
        phase: "transport",
        prompt: "Place the following CRM communication steps in the correct order when advocating for a patient care intervention your partner has dismissed.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "State your concern using 'I' language",
          "Provide the clinical reasoning behind your concern",
          "Propose a specific alternative action",
          "If unresolved, invoke a 'safety word' or escalate to medical control"
        ],
        correctOrder: [
          "State your concern using 'I' language",
          "Provide the clinical reasoning behind your concern",
          "Propose a specific alternative action",
          "If unresolved, invoke a 'safety word' or escalate to medical control"
        ],
        explanation: "Graduated assertion follows a predictable escalation: concern → reasoning → proposal → escalation. This mirrors the Two-Challenge Rule in TeamSTEPPS.",
        guideline_ref: "AHRQ TeamSTEPPS 2.0 — Two-Challenge Rule; NAEMSP CRM Position Statement",
        clinical_pearl: "Many EMS agencies now adopt a 'safety word' (e.g., 'Red Light') that any crew member can invoke to pause and reassess — similar to a surgical time-out."
      },
      {
        phase: "post-call",
        prompt: "Which of the following are recognized barriers to effective CRM in EMS? Select 3.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Authority gradient between provider levels", correct: true },
          { text: "Using closed-loop communication", correct: false },
          { text: "Fatigue and high call volume", correct: true },
          { text: "Conducting after-action debriefs", correct: false },
          { text: "Normalization of deviance over time", correct: true }
        ],
        explanation: "Authority gradients, fatigue, and normalization of deviance are well-documented barriers. Closed-loop communication and debriefs are CRM solutions, not barriers.",
        guideline_ref: "NAEMSP CRM Position Statement; NHTSA EMS Culture of Safety Report (2018)",
        clinical_pearl: "Normalization of deviance — when shortcuts become routine — is the silent killer of safety culture. If you catch yourself saying 'we always do it this way,' that's the red flag."
      }
    ]
  },
  {
    id: "nat-ops-06",
    title: "Active Shooter / Rescue Task Force Response",
    dispatch: "Reports of an active shooter at a shopping mall. Multiple victims reported. Law enforcement on scene. EMS staging requested.",
    category: "EMS Operations",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: "Multiple", sex: "Mixed", cc: "Multiple gunshot wounds reported" },
    scene: "Large suburban mall. Law enforcement has established a warm zone. Gunfire has stopped but shooter has not been located. You are assigned to a Rescue Task Force element with two LEOs and one additional medic.",
    history: { pmh: "Unknown — multiple patients", meds: "Unknown", allergies: "Unknown" },
    vitals: { hr: "Variable", bp: "Variable", rr: "Variable", spo2: "Variable", gcs: "Variable", temp: "N/A" },
    questions: [
      {
        phase: "scene",
        prompt: "Categorize the following actions into the correct threat zone where they should be performed.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["Hot Zone", "Warm Zone", "Cold Zone"],
        items: [
          "Law enforcement engages the threat",
          "Rescue Task Force applies tourniquets and moves victims",
          "Full ALS assessment and IV access",
          "Casualty Collection Point triage",
          "Self-applied tourniquet by wounded officer",
          "Ambulance staging and patient loading"
        ],
        correctCategories: {
          "Hot Zone": ["Law enforcement engages the threat", "Self-applied tourniquet by wounded officer"],
          "Warm Zone": ["Rescue Task Force applies tourniquets and moves victims", "Casualty Collection Point triage"],
          "Cold Zone": ["Full ALS assessment and IV access", "Ambulance staging and patient loading"]
        },
        explanation: "EMS does not enter the hot zone. RTF operates in the warm zone performing hemorrhage control and rapid extraction. Definitive care occurs in the cold zone.",
        guideline_ref: "TECC Guidelines (C-TECC, 2021); NFPA 3000 Standard for Active Shooter/Hostile Events",
        clinical_pearl: "In warm zone operations, the only medical interventions are 'threat suppressed care' — tourniquets, wound packing, and airway positioning. Save IVs and detailed assessments for the cold zone."
      },
      {
        phase: "treatment",
        prompt: "You encounter a victim in the warm zone with massive bleeding from a right thigh wound. Place these RTF interventions in the correct priority order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Apply a tourniquet high and tight on the affected extremity",
          "Rapidly assess for other life-threatening hemorrhage",
          "Mark the patient with triage category",
          "Coordinate with LEO escort for extraction to the Casualty Collection Point"
        ],
        correctOrder: [
          "Apply a tourniquet high and tight on the affected extremity",
          "Rapidly assess for other life-threatening hemorrhage",
          "Mark the patient with triage category",
          "Coordinate with LEO escort for extraction to the Casualty Collection Point"
        ],
        explanation: "In the warm zone, hemorrhage control is the singular priority. Tourniquet first, sweep for additional bleeding, tag, and move. Extended assessment happens in the cold zone.",
        guideline_ref: "TECC Guidelines — Indirect Threat Care; Hartford Consensus (2015)",
        clinical_pearl: "The Hartford Consensus distills active shooter medical response to one phrase: 'No one should die from uncontrolled bleeding.' Every RTF member — including LEOs — should carry and know how to apply a tourniquet."
      },
      {
        phase: "transport",
        prompt: "Examine the diagram of the incident scene showing Hot, Warm, and Cold zones. Identify where the Rescue Task Force (RTF) staging point should be located.",
        type: "graphical",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        narrative: "The diagram shows concentric zones around the mall: the innermost Hot Zone (active threat area) in red, the Warm Zone (cleared but not secured) in yellow surrounding it, and the Cold Zone (fully secured perimeter) in green. Four labeled points are marked: A (inside the mall entrance — Hot Zone), B (parking structure adjacent to the warm/cold zone boundary), C (intersection 2 blocks away in the Cold Zone), D (inside the Warm Zone corridor).",
        options: [
          { text: "Point A — Inside the mall entrance for fastest patient access", correct: false },
          { text: "Point B — At the warm/cold zone boundary for rapid deployment into the warm zone with immediate cold zone fallback", correct: true },
          { text: "Point C — Two blocks away for maximum crew safety", correct: false },
          { text: "Point D — Inside the warm zone corridor to be embedded with patients", correct: false }
        ],
        explanation: "RTF staging should be at the warm/cold zone interface. This allows rapid deployment into the warm zone under LEO escort while maintaining immediate fallback to safety. Staging inside the warm zone exposes crews unnecessarily; staging too far away delays response.",
        guideline_ref: "NFPA 3000 — Standard for Active Shooter/Hostile Events; TECC Guidelines — Indirect Threat Care; DHS Active Shooter Response Guide",
        clinical_pearl: "Body armor alone does not make a zone safe. The difference between hot and warm is not equipment — it's whether law enforcement has established a security corridor. RTF stages at the boundary, not inside."
      }
    ]
  },
  {
    id: "nat-ops-07",
    title: "Ambulance Crash / Crew Injury",
    dispatch: "MVA involving an ambulance at an intersection. Ambulance was transporting a patient. Crew and patient on board.",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMT",
    patient: { age: 34, sex: "F", cc: "Provider in the patient compartment struck during collision" },
    scene: "T-bone collision at a controlled intersection. The ambulance was impacted on the right side. The driver is conscious with neck pain. The attending provider in the back was unrestrained and thrown against cabinets. The original patient on the stretcher is secured but distressed. Fluids and equipment are scattered.",
    history: { pmh: "None (crew member)", meds: "None", allergies: "NKDA" },
    vitals: { hr: 118, bp: "102/68", rr: 22, spo2: 97, gcs: 14, temp: "98.6°F" },
    questions: [
      {
        phase: "scene",
        prompt: "You arrive as the first additional unit. Place your initial actions in the correct order.",
        type: "order",
        level_filter: "EMT-AEMT-Paramedic",
        items: [
          "Ensure scene safety — stabilize the ambulance and manage traffic hazards",
          "Request additional resources and establish incident command",
          "Triage all occupants including crew members as patients",
          "Begin assessment and treatment of the most critically injured"
        ],
        correctOrder: [
          "Ensure scene safety — stabilize the ambulance and manage traffic hazards",
          "Request additional resources and establish incident command",
          "Triage all occupants including crew members as patients",
          "Begin assessment and treatment of the most critically injured"
        ],
        explanation: "Scene safety remains paramount even when colleagues are injured. Establishing command ensures an organized response. Crew members must be treated as patients — not allowed to self-triage or continue working.",
        guideline_ref: "NHTSA EMT-Paramedic National Standard Curriculum — Scene Management; NAEMSP Ambulance Safety Position Statement",
        clinical_pearl: "Injured crew members will often minimize their own symptoms due to adrenaline and a desire to keep working. They must be formally triaged and assessed — provider bias leads to missed injuries."
      },
      {
        phase: "treatment",
        prompt: "The unrestrained provider in the back has left flank tenderness, is tachycardic at 118, and BP is 102/68. What is the MOST important concern?",
        type: "mc",
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Isolated musculoskeletal injury from impact with cabinets", correct: false },
          { text: "Internal hemorrhage from blunt abdominal/thoracic trauma", correct: true, critical: true },
          { text: "Vasovagal response from stress of the collision", correct: false },
          { text: "Positional hypotension from being on the floor", correct: false }
        ],
        explanation: "Tachycardia with borderline hypotension and left flank tenderness in an unrestrained occupant of a high-energy collision is concerning for splenic or renal injury with internal hemorrhage until proven otherwise.",
        guideline_ref: "PHTLS 10th Edition — Blunt Abdominal Trauma; NAEMSP Ambulance Safety Guidelines",
        clinical_pearl: "The patient compartment of an ambulance is one of the most dangerous places in a collision. Unrestrained providers experience forces similar to unbelted passengers — the human body and loose equipment become projectiles."
      },
      {
        phase: "post-call",
        prompt: "Which of the following are required components of post-ambulance-crash management? Select 3.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Mandatory drug and alcohol testing per federal DOT regulations", correct: true },
          { text: "Immediate return to service if crew members feel fine", correct: false },
          { text: "Critical incident stress management resources offered to all involved", correct: true },
          { text: "Vehicle inspection and removal from service until cleared", correct: true },
          { text: "Crew members complete their own patient care reports for the original patient", correct: false }
        ],
        explanation: "Post-crash protocols require DOT drug/alcohol testing, CISM resources, and vehicle out-of-service status. Injured crew should not complete documentation — they are now patients. They should never 'self-clear' back to service.",
        guideline_ref: "49 CFR Part 382 — DOT Post-Accident Testing; NAEMSP Ambulance Safety Position Statement; ICISF CISM Framework",
        clinical_pearl: "Federal DOT regulations require post-accident drug and alcohol testing when the crash involves a fatality, a citation with injury, or a citation with a vehicle towed. Many agencies apply broader internal policies."
      }
    ]
  },
  {
    id: "nat-ops-08",
    title: "Special Event / Mass Gathering Medical Planning",
    dispatch: "Your agency has been contracted to provide medical coverage for an outdoor music festival expecting 25,000 attendees over 3 days in July.",
    category: "EMS Operations",
    difficulty: "Hard",
    level_min: "EMT",
    patient: { age: "N/A", sex: "N/A", cc: "Pre-event medical planning" },
    scene: "Open-air venue on a fairground. Nearest hospital is 18 minutes by ground. Forecast calls for temperatures above 95°F. Event includes alcohol sales. No permanent medical infrastructure exists on site.",
    history: { pmh: "N/A", meds: "N/A", allergies: "N/A" },
    vitals: { hr: "N/A", bp: "N/A", rr: "N/A", spo2: "N/A", gcs: "N/A", temp: "N/A" },
    questions: [
      {
        phase: "scene",
        prompt: "Using established mass gathering medicine formulas, which factors MOST influence the predicted patient presentation rate (PPR)? Select 3.",
        type: "mr",
        selectCount: 3,
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Crowd size and density", correct: true },
          { text: "Color of event T-shirts", correct: false },
          { text: "Ambient temperature and weather conditions", correct: true },
          { text: "Availability of alcohol or drugs", correct: true },
          { text: "Distance from the state capital", correct: false }
        ],
        explanation: "The Arbon, Hartman, and Leonard models all identify crowd size, weather extremes, and substance availability as primary drivers of patient volume at mass gatherings.",
        guideline_ref: "NAEMSP Position Statement on Mass Gathering Medical Care (2019); Arbon Mass Gathering PPR Model",
        clinical_pearl: "A commonly used planning estimate is 1-2 patients per 1,000 attendees per day for low-risk events, rising to 5-8+ per 1,000 for high-risk events (heat, alcohol, young crowds, multi-day)."
      },
      {
        phase: "treatment",
        prompt: "You are designing the on-site medical plan. Categorize each resource into its appropriate medical support tier.",
        type: "categorize",
        level_filter: "EMT-AEMT-Paramedic",
        categories: ["First Aid / BLS Tier", "ALS Treatment Tier", "Transport / Hospital Interface"],
        items: [
          "Roving first aid teams with minor care supplies",
          "Fixed medical tent with cardiac monitor, IV supplies, and medications",
          "Dedicated ambulance(s) staged for immediate hospital transport",
          "Hydration and blister stations at venue perimeter",
          "Physician or advanced practice provider on site",
          "Communication link with receiving hospital ED for patient notification"
        ],
        correctCategories: {
          "First Aid / BLS Tier": ["Roving first aid teams with minor care supplies", "Hydration and blister stations at venue perimeter"],
          "ALS Treatment Tier": ["Fixed medical tent with cardiac monitor, IV supplies, and medications", "Physician or advanced practice provider on site"],
          "Transport / Hospital Interface": ["Dedicated ambulance(s) staged for immediate hospital transport", "Communication link with receiving hospital ED for patient notification"]
        },
        explanation: "Tiered medical coverage ensures minor complaints are handled at the point of contact, ALS-level care is available on site, and transport resources are preserved for true emergencies.",
        guideline_ref: "NAEMSP Mass Gathering Position Statement; NFPA 1584; DHS Special Event Contingency Planning Guide",
        clinical_pearl: "The goal of on-site mass gathering medicine is to treat and release 80-90% of patients at the venue, preventing unnecessary ED transports that could overwhelm local hospitals."
      },
      {
        phase: "post-call",
        prompt: "Review the Day 1 patient data summary table. Based on this data, which operational adjustment is MOST warranted for Day 2?",
        type: "table",
        level_filter: "EMT-AEMT-Paramedic",
        narrative: "| Category | Patients Seen | Transported | Treat & Release | Avg On-Site Time |\n|---|---|---|---|---|\n| Heat-related illness | 52 | 3 | 49 | 28 min |\n| Alcohol intoxication | 28 | 4 | 24 | 45 min |\n| Minor trauma (falls/lacs) | 10 | 1 | 9 | 18 min |\n| Cardiac/respiratory | 3 | 3 | 0 | 12 min |\n| Other | 2 | 0 | 2 | 10 min |\n| **Totals** | **95** | **11** | **84** | **29 min** |",
        options: [
          { text: "Add more roving first aid teams — most patients are minor trauma", correct: false },
          { text: "Increase cooling and IV fluid capacity — heat illness is the primary volume driver and alcohol cases have long on-site times", correct: true },
          { text: "Station a cardiac team at the main stage — cardiac cases all required transport", correct: false },
          { text: "Reduce staffing since the treat-and-release rate is already 88%", correct: false }
        ],
        explanation: "Heat illness accounts for 55% of patient volume, and alcohol intoxication cases have the longest on-site dwell time (45 min), tying up resources. Increasing cooling stations, shade, misting, and IV capability addresses both the highest-volume and highest-dwell-time categories. Day 2 forecast is equally hot.",
        guideline_ref: "NAEMSP Mass Gathering Medical Care Position Statement; Arbon PPR Model — Environmental Modifiers",
        clinical_pearl: "Data-driven adjustments between event days are the hallmark of professional mass gathering medical operations. Track patient volume by hour and category — patterns predict tomorrow's needs."
      }
    ]
  },
  {
    id: "nat-ops-09",
    title: "Inter-Facility Critical Care Transport",
    dispatch: "Requested for inter-facility transport of a 62-year-old male from a rural ED to a tertiary cardiac center, 90-minute ground transport.",
    category: "EMS Operations",
    difficulty: "Hard",
    level_min: "Paramedic",
    patient: { age: 62, sex: "M", cc: "Chest pain with ST changes requiring cardiac catheterization" },
    scene: "Rural critical access hospital ED. Patient is on a heparin drip, has a 12-lead showing ST elevation in leads II, III, and aVF. The sending physician requests transport. The patient is currently hemodynamically stable but had a brief run of ventricular tachycardia 30 minutes ago.",
    history: { pmh: "DM type 2, hyperlipidemia, prior MI 4 years ago", meds: "Metformin, atorvastatin, aspirin 81mg", allergies: "Morphine" },
    vitals: { hr: 88, bp: "134/82", rr: 18, spo2: 96, gcs: 15, temp: "98.2°F" },
    questions: [
      {
        phase: "scene",
        prompt: "Before accepting this inter-facility transport, which is the MOST critical operational consideration?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Confirming the receiving facility has an available catheterization lab and has accepted the patient", correct: true, critical: true },
          { text: "Ensuring your ambulance has a full tank of fuel", correct: false },
          { text: "Verifying the patient's insurance coverage", correct: false },
          { text: "Checking whether your agency has a contract with the sending hospital", correct: false }
        ],
        explanation: "EMTALA requires a confirmed accepting physician and available bed/resources before transfer. Transporting a STEMI patient without confirmed cath lab availability could result in a critically ill patient with nowhere to go.",
        guideline_ref: "EMTALA (42 USC §1395dd) — Appropriate Transfer Requirements; AHA STEMI Systems of Care Guidelines",
        clinical_pearl: "Always get the accepting physician's name and direct callback number before departing. If the patient decompensates en route, you need a real person to call — not a hospital switchboard."
      },
      {
        phase: "treatment",
        prompt: "During transport, the patient develops sustained ventricular tachycardia with a pulse. BP drops to 88/54. Place your interventions in the correct order.",
        type: "order",
        level_filter: "Paramedic",
        items: [
          "Confirm rhythm on the monitor and assess patient responsiveness",
          "Administer amiodarone 150mg IV over 10 minutes",
          "Prepare for synchronized cardioversion if pharmacologic therapy fails",
          "Contact medical control and the receiving facility to update on status change"
        ],
        correctOrder: [
          "Confirm rhythm on the monitor and assess patient responsiveness",
          "Administer amiodarone 150mg IV over 10 minutes",
          "Prepare for synchronized cardioversion if pharmacologic therapy fails",
          "Contact medical control and the receiving facility to update on status change"
        ],
        explanation: "Stable but symptomatic VT with a pulse warrants pharmacologic intervention first (amiodarone). If the patient becomes unstable or medication fails, synchronized cardioversion is indicated. Continuous communication with medical control is essential during IFT.",
        guideline_ref: "AHA ACLS Guidelines — Stable Wide-Complex Tachycardia Algorithm; NAEMSP Critical Care Transport Position Statement",
        clinical_pearl: "Morphine allergy is documented — remember this if considering pain management. Fentanyl is a safe alternative. Allergy review before departure prevents mid-transport surprises."
      },
      {
        phase: "transport",
        prompt: "Which of the following elements must be included in an EMTALA-compliant inter-facility transfer? Select 3.",
        type: "mr",
        selectCount: 3,
        level_filter: "AEMT-Paramedic",
        options: [
          { text: "Signed physician certification that benefits of transfer outweigh risks", correct: true },
          { text: "Patient transported by personnel with appropriate equipment and skill level", correct: true },
          { text: "Transfer must occur within 30 minutes of the decision to transfer", correct: false },
          { text: "All available medical records and imaging sent with the patient", correct: true },
          { text: "A family member must accompany the patient", correct: false }
        ],
        explanation: "EMTALA requires physician certification of transfer benefit, appropriate transport personnel/equipment, and medical records/imaging. There is no mandated time window, and family accompaniment, while ideal, is not legally required.",
        guideline_ref: "EMTALA (42 USC §1395dd); CMS State Operations Manual — Transfer Requirements",
        clinical_pearl: "The sending physician — not EMS — bears legal responsibility for ensuring the transfer meets EMTALA requirements. However, a transport crew that knowingly accepts a patient beyond their scope assumes shared liability."
      },
      {
        phase: "post-call",
        prompt: "You successfully deliver the patient to the cath lab. What is the MOST important quality metric for this type of STEMI transfer?",
        type: "mc",
        level_filter: "Paramedic",
        options: [
          { text: "Total door-to-balloon time (first medical contact to balloon inflation)", correct: true },
          { text: "Time from dispatch to ambulance arrival at sending facility", correct: false },
          { text: "Number of medications administered during transport", correct: false },
          { text: "Length of the patient care report", correct: false }
        ],
        explanation: "First medical contact to balloon inflation (total ischemic time) is the defining quality metric for STEMI systems of care. The AHA target for transfer cases is <120 minutes.",
        guideline_ref: "AHA/ACC STEMI Guidelines — Systems of Care; Mission: Lifeline Program Standards",
        clinical_pearl: "Every 30-minute delay in reperfusion increases mortality by approximately 7.5%. Time documentation during STEMI transport isn't just paperwork — it's a quality measure that drives system improvement."
      }
    ]
  },
  {
    id: "nat-ops-10",
    title: "Pediatric Safe Surrender / Abandoned Newborn",
    dispatch: "Fire station crew reports a newborn infant was left at the station by an unknown female who departed before crews could speak with her.",
    category: "EMS Operations",
    difficulty: "Medium",
    level_min: "EMR",
    patient: { age: 0, sex: "F", cc: "Newborn left at fire station" },
    scene: "Engine company bay. A newborn infant wrapped in a towel is lying in a plastic bin that was left just inside the apparatus bay door. The infant is crying, appears full-term, and the umbilical cord has been cut and crudely tied. No placenta is present. No note or identification.",
    history: { pmh: "Unknown", meds: "Unknown", allergies: "Unknown" },
    vitals: { hr: 156, bp: "N/A", rr: 44, spo2: 94, gcs: "N/A — neonatal", temp: "96.8°F" },
    questions: [
      {
        phase: "scene",
        prompt: "Under Safe Haven / Safe Surrender laws, which of the following statements is TRUE?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "The mother can be charged with abandonment if she does not provide identification", correct: false },
          { text: "Fire stations, hospitals, and designated locations are legal surrender sites and the surrendering parent is protected from prosecution", correct: true },
          { text: "EMS must attempt to detain the parent until law enforcement arrives", correct: false },
          { text: "Safe Haven laws only apply during business hours at hospitals", correct: false }
        ],
        explanation: "All 50 US states have Safe Haven laws permitting anonymous, legal surrender of newborns at designated locations (fire stations, hospitals, and in some states EMS stations) without criminal prosecution of the parent.",
        guideline_ref: "State Safe Haven Laws (all 50 states); NFPA Safe Haven Guidance; HHS Child Welfare Information Gateway — Safe Haven Summary",
        clinical_pearl: "Safe Haven age limits vary by state — from 72 hours to 1 year. Know your state's law. The intent is to prevent unsafe abandonment by providing a legal, no-questions-asked alternative."
      },
      {
        phase: "treatment",
        prompt: "The newborn's temperature is 96.8°F (36.0°C). Place neonatal warming interventions in priority order.",
        type: "order",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        items: [
          "Dry the infant thoroughly and remove wet wrappings",
          "Apply skin-to-skin contact or wrap in warm dry blankets",
          "Cover the head with a cap to prevent heat loss",
          "Place in a prewarmed ambulance and transport to the ED"
        ],
        correctOrder: [
          "Dry the infant thoroughly and remove wet wrappings",
          "Apply skin-to-skin contact or wrap in warm dry blankets",
          "Cover the head with a cap to prevent heat loss",
          "Place in a prewarmed ambulance and transport to the ED"
        ],
        explanation: "Neonatal thermoregulation is critical. Wet surfaces cause evaporative heat loss. Drying, warm dry wrappings, head covering, and a warm environment address all four mechanisms of heat loss (evaporation, convection, conduction, radiation).",
        guideline_ref: "NRP (Neonatal Resuscitation Program) 8th Edition — Initial Steps of Newborn Care; AAP/AHA Neonatal Guidelines",
        clinical_pearl: "A newborn's head represents ~20% of body surface area — proportionally far more than an adult. Leaving the head uncovered is like leaving a radiator running. A simple cap prevents significant heat loss."
      },
      {
        phase: "treatment",
        prompt: "The umbilical cord stump appears crudely tied with a shoelace. It is not actively bleeding. What is the MOST appropriate action?",
        type: "mc",
        level_filter: "EMT-AEMT-Paramedic",
        options: [
          { text: "Remove the shoelace and replace with a sterile umbilical clamp", correct: false },
          { text: "Leave the existing tie in place if hemostasis is achieved, and apply a sterile umbilical clamp adjacent to it", correct: true },
          { text: "Cut the remaining cord shorter to reduce infection risk", correct: false },
          { text: "Apply a tourniquet proximal to the cord tie", correct: false }
        ],
        explanation: "If the existing tie is providing adequate hemostasis, do not disturb it — manipulation risks hemorrhage. Place a proper umbilical clamp adjacent to the tie as a safety measure. The cord will be managed definitively at the hospital.",
        guideline_ref: "NRP 8th Edition — Umbilical Cord Care; NAEMSP Neonatal Transport Guidelines",
        clinical_pearl: "Neonatal blood volume is only ~80 mL/kg. A 3 kg newborn has approximately 240 mL of total blood — even small umbilical hemorrhage can be proportionally catastrophic."
      },
      {
        phase: "transport",
        prompt: "Which agency must be notified in all Safe Haven surrender cases in addition to transporting the infant to the hospital?",
        type: "mc",
        level_filter: "EMR-EMT-AEMT-Paramedic",
        options: [
          { text: "The FBI", correct: false },
          { text: "Child Protective Services / Department of Children and Families", correct: true },
          { text: "The state medical examiner", correct: false },
          { text: "The local school district", correct: false }
        ],
        explanation: "Safe Haven laws universally require notification of child protective services (CPS/DCF) so the infant can be placed in protective custody and the legal process for the child's welfare can begin.",
        guideline_ref: "HHS Child Welfare Information Gateway — Safe Haven Laws; State-specific Safe Haven statutes",
        clinical_pearl: "Document everything you can about the infant's condition and any items left with the baby (clothing, notes, items). This information becomes part of the child's permanent record and may be their only medical history."
      }
    ]
  }
];

if (typeof module !== "undefined") module.exports = { BATCH10 };
