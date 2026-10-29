/* =========================================================
   CC Cyber Cafe — script.js
   ========================================================= */
(function(){
  "use strict";

  // Configure the business WhatsApp destination here (country code + number, digits only).
  // This reuses the number already present in the original website.
  const BUSINESS_WHATSAPP = "917053658240";
  const DEFAULT_WHATSAPP_MESSAGE = "Namaste! 👋 I would like to enquire about your services.";

  function createWhatsAppUrl(message) {
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE)}`;
  }

  function initWhatsAppLinks(root = document) {
    root.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      link.href = createWhatsAppUrl(link.dataset.whatsappMessage || DEFAULT_WHATSAPP_MESSAGE);
    });

    root.querySelectorAll("[data-whatsapp-service]").forEach((link) => {
      const service = link.dataset.whatsappService.trim();
      const message = `Namaste! 👋\n\nMujhe ${service} service ke baare mein jaankari chahiye.\n\nKripya mujhe available options, price aur processing time bata dijiye.\n\nThank you!`;
      link.href = createWhatsAppUrl(message);
      link.setAttribute("aria-label", `Order ${service} via WhatsApp`);
    });
  }

  // Populate WhatsApp links after the page markup is available.
  initWhatsAppLinks();

  /* ---------- Icon library (small inline SVG strings) ---------- */
  const ICONS = {
    aadhaar: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="11" r="2.3" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 17c.6-1.8 2-2.7 3.5-2.7s2.9.9 3.5 2.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 9h4M15 12h4M15 15h2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    pan: '<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/><circle cx="8" cy="12" r="2" stroke="currentColor" stroke-width="1.8"/><path d="M13 10h6M13 14h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    passport: '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10" r="2.6" stroke="currentColor" stroke-width="1.8"/><path d="M8 17c.7-1.6 2.2-2.4 4-2.4s3.3.8 4 2.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    voter: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M7 12l3 3 7-7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    income: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h16M6 20V10l6-5 6 5v10" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 20v-6h4v6" stroke="currentColor" stroke-width="1.8"/></svg>',
    caste: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 5-3.4 8.5-8 9.5-4.6-1-8-4.5-8-9.5V7l8-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    forms: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 3h6l4 4v14H8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M11 12h5M11 16h5M11 9h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    bill: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 10l9-6 9 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9M3 19h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    domicile: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11l8-7 8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9h12v-9" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 19v-5h4v5" stroke="currentColor" stroke-width="1.8"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 9a2 2 0 010-4h18a2 2 0 010 4 2 2 0 000 4 2 2 0 010 4H3a2 2 0 010-4 2 2 0 000-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 5v14" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 2"/></svg>',
    insurance: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 5-3.4 8.5-8 9.5-4.6-1-8-4.5-8-9.5V7l8-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 8v8M9 12h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5 11-11" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    farm: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 20h18M6 20V9l6-5 6 5v11" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke="currentColor" stroke-width="1.8"/></svg>',
    health: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9.3-9.2C1.4 8.4 3 5 6.5 5c1.9 0 3.3 1 4 2.3.7-1.3 2.1-2.3 4-2.3C18 5 19.6 8.4 18.3 11.8 16 16.5 12 21 12 21z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    labour: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M5 20c1.5-4.2 4-6 7-6s5.5 1.8 7 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    craft: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 4l6 6-9 9-6 1 1-6 8-10z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    energy: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    pension: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ---------- Data: Services ---------- */
  const SERVICES = [
    
{
  id: "aadhaar", icon: ICONS.aadhaar, name: "Aadhaar Services",
  short: "Update your Aadhaar mobile number and address with professional assistance.",
  what: "We assist customers with Aadhaar mobile number and address update applications. Visit our centre for guidance on the update process and applicable requirements.",
  why: "Keeping your Aadhaar mobile number and address up to date helps you receive important OTPs, access Aadhaar-based services and maintain accurate records.",
  who: "Existing Aadhaar holders who need to update their registered mobile number or address.",
  documents: ["Existing Aadhaar card", "Valid address proof for address updates", "Registered mobile number, if available"],
  note: "Mobile number updates generally require a visit to an authorised Aadhaar centre for biometric verification. Address updates may require valid supporting documents. We will guide you according to the applicable UIDAI process."
},

    {
      id: "pan", icon: ICONS.pan, name: "PAN Card",
      short: "New PAN application, corrections and reprint — filed and tracked for you.",
      what: "A Permanent Account Number (PAN) is a 10-digit code issued by the Income Tax Department, used for tax filing, banking and large financial transactions.",
      why: "You need a PAN to open a bank account, file income tax, invest, buy property, or carry out transactions above a certain value.",
      who: "Individuals, minors (through a guardian), and businesses who don't yet have a PAN, or need corrections to an existing one.",
      documents: ["Aadhaar card", "Address proof", "Passport-size photograph", "Date of birth proof (for new applicants)"],
      note: "Processing is handled through the official NSDL/UTIITSL portals; typical delivery is 10–15 working days after submission.",
    },
    {
      id: "passport", icon: ICONS.passport, name: "Passport Assistance",
      short: "Application form filling, appointment booking and document checks.",
      what: "We assist with new passport applications, renewals and reissues — including filling the online form correctly and booking your appointment slot.",
      why: "A passport is essential for international travel, and errors in the application are a common reason for delays. Getting it right the first time saves you repeat visits.",
      who: "First-time applicants, passport renewals, and those needing changes such as address or name updates on an existing passport.",
      documents: ["Aadhaar card", "Address proof", "Birth certificate or class 10 marksheet (date of birth proof)", "Passport-size photographs", "Old passport (for renewal)"],
      note: "The final appointment happens at the Passport Seva Kendra — we prepare your file so that visit goes smoothly.",
    },
    {
      id: "voter", icon: ICONS.voter, name: "Voter ID",
      short: "New voter registration, corrections and address transfer.",
      what: "Voter ID (EPIC) is issued by the Election Commission and lets you vote and serves as valid identity proof for many purposes.",
      why: "You need it to vote in elections, and it's widely accepted as a photo ID for other services too.",
      who: "Citizens aged 18 and above who are not yet registered, or existing voters who've moved and need an address transfer.",
      documents: ["Aadhaar card", "Address proof", "Passport-size photograph", "Age proof (for first-time registration)"],
      note: "Applications are filed on the official Election Commission portal and linked to your constituency.",
    },
    {
      id: "income-cert", icon: ICONS.income, name: "Income Certificate",
      short: "Apply for an income certificate with document verification support.",
      what: "An income certificate is an official record of your family's annual income, issued by the local revenue department (Tehsildar/SDM office).",
      why: "It's required for scholarships, fee concessions, government scheme applications and various subsidy programmes.",
      who: "Any resident who needs to prove their household income for an official purpose.",
      documents: ["Aadhaar card", "Address proof", "Salary slip or self-declaration of income", "Ration card (if available)"],
      note: "Verification is done by the revenue department and may take a few working days depending on your area.",
    },
    {
      id: "caste-cert", icon: ICONS.caste, name: "Caste Certificate",
      short: "Application support for SC/ST/OBC caste certificates.",
      what: "A caste certificate is an official document confirming your caste category, issued by the revenue department.",
      why: "It's required for reserved-category admissions, government job applications, and several welfare scheme benefits.",
      who: "Applicants belonging to SC, ST or OBC categories who need official proof for education, employment or scheme benefits.",
      documents: ["Aadhaar card", "Address proof", "Father's/family caste certificate (if available)", "Passport-size photograph"],
      note: "First-time applicants without a family reference document may need additional local verification.",
    },
    {
      id: "domicile", icon: ICONS.domicile, name: "Domicile Certificate",
      short: "Proof of residence certificate for education and employment use.",
      what: "A domicile certificate confirms that you are a permanent resident of the state, issued by the revenue department.",
      why: "Required for state quota college admissions, state government job applications and certain scheme eligibility checks.",
      who: "Residents who have lived in the state for the minimum required period and need official proof of residence.",
      documents: ["Aadhaar card", "Address proof (multiple years, if available)", "Ration card or voter ID", "Passport-size photograph"],
      note: "Requirements around minimum years of residence vary by state — we'll confirm what applies to you.",
    },
    {
      id: "gov-forms", icon: ICONS.forms, name: "Government Forms & CSC Services",
      short: "Access central and state government scheme applications under one roof.",
      what: "As an authorised Common Service Centre (CSC), we help you fill and submit a wide range of government forms and portal-based applications.",
      why: "Many government services have moved online, and correct form-filling matters — small errors can delay approvals.",
      who: "Anyone applying for a central or state government service, form or scheme through the official CSC/portal system.",
      documents: ["Aadhaar card", "Relevant scheme or service-specific documents", "Mobile number linked to Aadhaar (for OTP)"],
      note: "We'll tell you exactly which documents are needed once you tell us which form or scheme you're applying for.",
    },
    {
      id: "bill-pay", icon: ICONS.bill, name: "Bill Payments",
      short: "Electricity, water and mobile bill payments — no queue, no waiting.",
      what: "Pay your electricity, water, mobile recharge and other utility bills at our counter, without standing in line at the utility office.",
      why: "Saves you a trip to a separate office or app troubleshooting — we handle the payment and give you a receipt on the spot.",
      who: "Any customer who wants a quick, in-person way to pay recurring bills.",
      documents: ["Bill copy or consumer/account number", "Payment amount in cash or UPI"],
      note: "A small convenience charge may apply, shown to you upfront before payment.",
    },
    {
      id: "bank-account", icon: ICONS.bank, name: "Banking Services",
      short: "Assistance opening a savings account with partner banks.",
      what: "We help you complete the paperwork and KYC process for opening a savings bank account with our partner banks.",
      why: "A bank account is essential to receive government scheme payments (DBT), salaries and to build savings safely.",
      who: "Anyone without a bank account, or wanting to open an account under a scheme like Jan Dhan Yojana.",
      documents: ["Aadhaar card", "PAN card (or Form 60)", "Passport-size photograph", "Address proof"],
      note: "Account approval and account number allotment are done by the bank; we assist only with the application.",
    },
    {
      id: "insurance", icon: ICONS.insurance, name: "Insurance Services",
      short: "Support enrolling in government life and accident insurance schemes.",
      what: "We help you enrol in affordable government-backed insurance schemes such as PM Suraksha Bima Yojana and PM Jeevan Jyoti Bima Yojana.",
      why: "These schemes offer accident and life cover at very low annual premiums, giving your family a financial safety net.",
      who: "Bank account holders in the eligible age group who want low-cost life or accident cover.",
      documents: ["Aadhaar card", "Bank account details", "Nominee details"],
      note: "Premiums are usually auto-debited annually from your linked bank account.",
    },
    {
      id: "ticket-booking", icon: ICONS.ticket, name: "Ticket Booking",
      short: "Railway and bus ticket booking assistance.",
      what: "We help you book railway and bus tickets, including checking availability and choosing the right travel class.",
      why: "Convenient for those who are not comfortable booking online themselves or want help avoiding common booking errors.",
      who: "Anyone needing help booking train or bus travel.",
      documents: ["Valid ID proof of all passengers", "Travel date and preferred class/route"],
      note: "Ticket confirmation is subject to seat availability at the time of booking.",
    }
  
  ];

  /* ---------- Data: Government schemes ---------- */
  const SCHEMES = [
    {
      id: "pm-kisan", cat: "agri", catLabel: "Agriculture", icon: ICONS.farm,
      name: "PM-KISAN", ministry: "Ministry of Agriculture & Farmers Welfare",
      short: "Income support of ₹6,000 per year to eligible farmer families across the country.",
      what: "PM-KISAN provides direct income support to landholding farmer families, paid in three instalments of ₹2,000 each directly into their bank account.",
      benefit: "₹6,000 per year, transferred directly to your bank account (DBT) in three instalments.",
      eligibility: ["Landholding farmer family (as per state land records)", "Bank account linked with Aadhaar", "Certain categories such as institutional landholders and income-tax payers are excluded — we'll help you check"],
      documents: ["Aadhaar card", "Land ownership records (Khatauni/Khasra)", "Bank account passbook"],
      process: ["Bring your documents to our center", "We verify eligibility and land records", "Application submitted on the PM-KISAN portal", "You receive an application/registration ID", "Instalments credited directly by the government once approved"],
      note: "Approval and payment timelines are decided by the government; we assist only with correct application and tracking.",
    },
    {
      id: "ayushman", cat: "health", catLabel: "Healthcare", icon: ICONS.health,
      name: "Ayushman Bharat (PM-JAY)", ministry: "Ministry of Health & Family Welfare",
      short: "Health cover of up to ₹5 lakh per family per year for secondary and tertiary care.",
      what: "PM-JAY provides free, cashless hospital treatment up to ₹5 lakh per family per year at empanelled government and private hospitals.",
      benefit: "Cashless hospitalisation cover of up to ₹5 lakh per family, per year, for eligible secondary and tertiary care treatments.",
      eligibility: ["Families identified as eligible under SECC/state database criteria", "No cap on family size, age or gender for eligible families"],
      documents: ["Aadhaar card", "Ration card or family ID", "Mobile number"],
      process: ["We check your eligibility using your family details", "Apply for your Ayushman card at our center", "Card generated after verification", "Use the card for cashless treatment at empanelled hospitals"],
      note: "Eligibility is decided by government databases, not by us — we help you check and apply, not guarantee approval.",
    },
    {
      id: "e-shram", cat: "labour", catLabel: "Labour & Employment", icon: ICONS.labour,
      name: "e-Shram Card", ministry: "Ministry of Labour & Employment",
      short: "National database registration for unorganised sector workers, with accident insurance cover.",
      what: "e-Shram creates a national database of unorganised workers (construction, domestic work, street vending, gig work, etc.) and issues a Universal Account Number (UAN) card.",
      benefit: "Free accidental insurance cover of ₹2 lakh, and access to future welfare scheme benefits linked to the database.",
      eligibility: ["Unorganised sector worker aged 16–59", "Not a member of EPFO or ESIC", "Not an income-tax payer"],
      documents: ["Aadhaar card", "Bank account details", "Mobile number linked to Aadhaar"],
      process: ["Confirm eligibility with our team", "Registration on the e-Shram portal", "UAN card generated instantly", "Card is valid for use across the country"],
      note: "Registration is free of any government fee; we charge only our standard assistance charge, shown upfront.",
    },
    {
      id: "pm-vishwakarma", cat: "craft", catLabel: "Skill & Craft", icon: ICONS.craft,
      name: "PM Vishwakarma", ministry: "Ministry of MSME",
      short: "Support for traditional artisans and craftspeople — training, toolkits and low-interest loans.",
      what: "PM Vishwakarma supports traditional trades such as carpentry, tailoring, pottery, blacksmithing and more, with recognition, skill training and financial assistance.",
      benefit: "Toolkit incentive, skill training with stipend, and collateral-free loans at concessional interest rates.",
      eligibility: ["Engaged in one of the 18 recognised traditional trades", "Working with hands and tools, self-employed at the grassroots level"],
      documents: ["Aadhaar card", "Bank account details", "Proof of trade/occupation"],
      process: ["We confirm your trade category", "Registration on the PM Vishwakarma portal", "Biometric verification at a designated centre", "Certificate and ID card issued", "Access training and loan benefits as per your track"],
      note: "Loan approval is subject to the lending bank's assessment; registration itself does not guarantee a loan.",
    },
    {
      id: "ujjwala", cat: "energy", catLabel: "Household Welfare", icon: ICONS.energy,
      name: "Ujjwala Yojana", ministry: "Ministry of Petroleum & Natural Gas",
      short: "Free LPG gas connection for women from low-income households.",
      what: "Pradhan Mantri Ujjwala Yojana provides free LPG (cooking gas) connections to women from below-poverty-line and other eligible low-income households.",
      benefit: "Free LPG connection with first refill and stove support (as per current scheme terms), reducing dependence on unsafe cooking fuels.",
      eligibility: ["Woman applicant aged 18 and above", "Household does not already have an LPG connection", "Belongs to an eligible low-income category (BPL/SECC list or similar)"],
      documents: ["Aadhaar card of the applicant", "Address proof", "Bank account details", "BPL/ration card, if available"],
      process: ["We confirm your eligibility category", "Application filed with the nearest LPG distributor", "Verification by the distributor", "Connection released to your address"],
      note: "Final connection release depends on distributor stock and verification in your area.",
    },
    {
      id: "pension", cat: "pension", catLabel: "Social Security", icon: ICONS.pension,
      name: "Pension Schemes (NSAP/Atal Pension Yojana)", ministry: "Ministry of Rural Development / Finance",
      short: "Monthly pension support for senior citizens, widows, and low-income individuals planning retirement savings.",
      what: "We assist with two types of pension support — old-age/widow pension under NSAP for those who currently need income support, and Atal Pension Yojana for those building a retirement pension.",
      benefit: "Monthly pension amount under NSAP (as fixed by your state), or a guaranteed monthly pension after age 60 under Atal Pension Yojana based on your contributions.",
      eligibility: ["NSAP: senior citizens, widows or disabled persons from BPL households", "APY: any bank account holder aged 18–40"],
      documents: ["Aadhaar card", "Age proof", "Bank account details", "Income/BPL proof (for NSAP)"],
      process: ["We identify which scheme fits your situation", "Application filed with the relevant department/bank", "Verification carried out by the department or bank", "Pension credited monthly once approved"],
      note: "Pension amounts and eligibility criteria vary by state and scheme — we'll walk you through what applies to you.",
    }
  ];

  /* ---------- Render: Service cards ---------- */
  const serviceGrid = document.getElementById("serviceGrid");
  const VISIBLE_COUNT = 6;
  SERVICES.forEach((svc, i) => {
    const card = document.createElement("div");
    card.className = "service-card" + (i >= VISIBLE_COUNT ? " hidden-extra" : "");
    const servicePhotos = [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=700&q=80"
    ];
    const photo = servicePhotos[i % servicePhotos.length];
    card.innerHTML = `
      <div class="service-photo"><img src="${photo}" alt="${svc.name} service assistance" loading="lazy"></div>
      <div class="service-card-content">
      <span class="svc-icon">${svc.icon}</span>
      <h3>${svc.name}</h3>
      <p>${svc.short}</p>
      <button class="learn-more" data-service="${svc.id}">Learn more ${ICONS.arrow}</button>
      </div>
    `;
    serviceGrid.appendChild(card);
  });

  const toggleBtn = document.getElementById("toggleServicesBtn");
  toggleBtn.addEventListener("click", () => {
    const expanded = serviceGrid.classList.toggle("expanded");
    toggleBtn.textContent = expanded ? "Show fewer services" : "View all services";
  });

  /* ---------- Render: Scheme cards ---------- */
  const schemeList = document.getElementById("schemeList");
  SCHEMES.forEach(sch => {
    const card = document.createElement("div");
    card.className = `scheme-card cat-${sch.cat}`;
    card.innerHTML = `
      <span class="scheme-bar"></span>
      <div class="scheme-body">
        <span class="scheme-cat">${sch.catLabel}</span>
        <h3>${sch.name}</h3>
        <p>${sch.short}</p>
        <button class="learn-more" data-scheme="${sch.id}">Learn more ${ICONS.arrow}</button>
      </div>
    `;
    schemeList.appendChild(card);
  });

  /* ---------- Modal ---------- */
  const overlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  let lastFocused = null;

  function checkListHTML(items){
    return `<ul class="check-list">${items.map(t => `<li>${ICONS.check}<span>${t}</span></li>`).join("")}</ul>`;
  }
  function stepListHTML(items){
    return `<ol class="step-list">${items.map(t => `<li>${t}</li>`).join("")}</ol>`;
  }

  function openServiceModal(svc){
    modalBody.innerHTML = `
      <div class="detail-head">
        <span class="detail-icon">${svc.icon}</span>
        <h3 class="detail-title" id="modalTitle">${svc.name}</h3>
      </div>
      <p class="detail-intro">${svc.short}</p>

      <div class="detail-block"><h4>What is this service?</h4><p>${svc.what}</p></div>
      <div class="detail-block"><h4>Why do you need it?</h4><p>${svc.why}</p></div>
      <div class="detail-block"><h4>Who can apply?</h4><p>${svc.who}</p></div>
      <div class="detail-block"><h4>Required documents</h4>${checkListHTML(svc.documents)}</div>
      <div class="detail-block"><h4>How the process works</h4>${stepListHTML(["Contact us","Document verification","Application preparation","Online submission","Application tracking","Completion / delivery"])}</div>
      <div class="detail-block"><h4>Important information</h4><p class="detail-note">${svc.note}</p></div>
      <div class="detail-block">
        <h4>Why choose CC Cyber Cafe?</h4>
        <ul class="detail-why">
          <li>${ICONS.check}<span>Professional assistance with every form</span></li>
          <li>${ICONS.check}<span>Secure handling of your documents</span></li>
          <li>${ICONS.check}<span>Accurate form filling to avoid rejections</span></li>
          <li>${ICONS.check}<span>Transparent process and charges</span></li>
          <li>${ICONS.check}<span>Support tracking your application status</span></li>
        </ul>
      </div>

      <div class="detail-cta">
        <div><h4>Need this service?</h4><p>Call or WhatsApp us and we'll take it from here.</p></div>
        <div class="detail-cta-actions">
          <a href="tel:+917053658240" class="btn btn-primary">Call Now</a>
          <a href="${createWhatsAppUrl('Namaste! 👋 I would like to enquire about this service.')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">WhatsApp Us</a>
        </div>
      </div>
    `;
    openModal();
  }

  function openSchemeModal(sch){
    modalBody.innerHTML = `
      <div class="detail-head">
        <span class="detail-icon">${sch.icon}</span>
        <h3 class="detail-title" id="modalTitle">${sch.name}</h3>
      </div>
      <p class="detail-intro">${sch.ministry}</p>

      <div class="detail-block"><h4>What is this scheme?</h4><p>${sch.what}</p></div>
      <div class="detail-block"><h4>Who can benefit?</h4><p>${sch.short}</p></div>
      <div class="detail-block"><h4>Eligibility</h4>${checkListHTML(sch.eligibility)}</div>
      <div class="detail-block"><h4>Benefits</h4><p>${sch.benefit}</p></div>
      <div class="detail-block"><h4>Required documents</h4>${checkListHTML(sch.documents)}</div>
      <div class="detail-block"><h4>Application process</h4>${stepListHTML(sch.process)}</div>
      <div class="detail-block"><h4>Important information</h4><p class="detail-note">${sch.note}</p></div>

      <div class="detail-cta">
        <div><h4>Think you're eligible?</h4><p>Bring your documents in — we'll check and apply for you.</p></div>
        <div class="detail-cta-actions">
          <a href="tel:+917053658240" class="btn btn-primary">Call Now</a>
          <a href="${createWhatsAppUrl('Namaste! 👋 I would like to enquire about this service.')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">WhatsApp Us</a>
        </div>
      </div>
    `;
    openModal();
  }

  function openModal(){
    lastFocused = document.activeElement;
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }
  function closeModal(){
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (e) => {
    const svcBtn = e.target.closest("[data-service]");
    if (svcBtn){
      const svc = SERVICES.find(s => s.id === svcBtn.dataset.service);
      if (svc) openServiceModal(svc);
      return;
    }
    const schBtn = e.target.closest("[data-scheme]");
    if (schBtn){
      const sch = SCHEMES.find(s => s.id === schBtn.dataset.scheme);
      if (sch) openSchemeModal(sch);
      return;
    }
    if (e.target === overlay) closeModal();
  });
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  /* ---------- Mobile nav ---------- */
  const hamburger = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");
  const navScrim = document.getElementById("navScrim");

  function setNav(open){
    hamburger.setAttribute("aria-expanded", String(open));
    mainNav.classList.toggle("open", open);
    navScrim.classList.toggle("show", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  hamburger.addEventListener("click", () => setNav(!mainNav.classList.contains("open")));
  navScrim.addEventListener("click", () => setNav(false));
  mainNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => setNav(false));
  });

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = Array.from(mainNav.querySelectorAll(".nav-link"));
  const sections = navLinks.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  function updateActiveNav(){
    let current = sections[0];
    const y = window.scrollY + 100;
    sections.forEach(sec => { if (sec.offsetTop <= y) current = sec; });
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${current.id}`));
  }
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Track application demo ---------- */
  const SAMPLE_REF = "CC-2026-004821";
  const trackForm = document.getElementById("trackForm");
  const refInput = document.getElementById("refInput");
  const trackResult = document.getElementById("trackResult");
  const trackNotFound = document.getElementById("trackNotFound");
  const fillSampleRef = document.getElementById("fillSampleRef");

  fillSampleRef.addEventListener("click", () => { refInput.value = SAMPLE_REF; refInput.focus(); });

  trackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = refInput.value.trim().toUpperCase();
    trackResult.hidden = true;
    trackNotFound.hidden = true;
    if (val === SAMPLE_REF.toUpperCase()){
      trackResult.hidden = false;
      trackResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      trackNotFound.hidden = false;
    }
  });

  /* ---------- Contact form validation ---------- */
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  // The current contact area embeds a Google Form. Keep this validator ready
  // for the original custom form if it is restored, without throwing when absent.
  if (contactForm && formSuccess) contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("cfName");
    const phone = document.getElementById("cfPhone");
    const msg = document.getElementById("cfMsg");
    const errName = document.getElementById("errName");
    const errPhone = document.getElementById("errPhone");
    const errMsg = document.getElementById("errMsg");

    errName.textContent = ""; errPhone.textContent = ""; errMsg.textContent = "";
    [name, phone, msg].forEach(f => f.closest(".form-row").classList.remove("error"));

    if (name.value.trim().length < 2){
      errName.textContent = "Please enter your full name.";
      name.closest(".form-row").classList.add("error");
      valid = false;
    }
    const phoneDigits = phone.value.replace(/\D/g, "");
    if (phoneDigits.length < 10){
      errPhone.textContent = "Please enter a valid 10-digit phone number.";
      phone.closest(".form-row").classList.add("error");
      valid = false;
    }
    if (msg.value.trim().length < 5){
      errMsg.textContent = "Please tell us briefly what you need help with.";
      msg.closest(".form-row").classList.add("error");
      valid = false;
    }

    formSuccess.hidden = true;
    if (valid){
      formSuccess.hidden = false;
      contactForm.reset();
    }
  });

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 8px 24px -16px rgba(0,0,0,.4)" : "none";
  }, { passive: true });

})();
