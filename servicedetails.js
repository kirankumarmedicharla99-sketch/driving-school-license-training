/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * Service Details Page Script (servicedeatails.js / servicedetails.js)
 * Full interactive support for all 6 courses, dynamic routing, theme, RTL & booking calculations
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STATE & STORAGE CONSTANTS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  // Complete data repository for all 6 driving school courses
  const COURSES_DATABASE = {
    'beginner-driving': {
      id: 'beginner-driving',
      name: 'Beginner Driving Course',
      badge: 'Foundation Level',
      heroImage: 'https://images.pexels.com/photos/9518244/pexels-photo-9518244.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'Zero-anxiety foundational driving lessons engineered to build lifelong road confidence.',
      overviewTitle: 'Master the Road from Your First Cockpit Drill',
      overviewText: 'The Beginner Driving Course at DRIVEPRO is custom-crafted for first-time learners, nervous beginners, and students stepping into the driver\'s seat for the very first time. Our patience-first certified coaches break down vehicle mechanics into intuitive, low-stress milestones, ensuring you gain complete mastery over pedal sensitivity, mirror routines, smooth braking, and quiet suburban street navigation before stepping into heavier traffic.',
      duration: '20 Practical Hours',
      level: 'Novice / First-Time Learner',
      transmission: 'Manual & Automatic Available',
      licenseType: 'Class D / Category B Full Car License',
      passRate: '96% First-Attempt Success',
      basePriceManual: 540,
      basePriceAuto: 570,
      installments: '3 monthly payments of $180 (0% interest)',
      benefits: [
        '1-on-1 Patient, certified senior instructor dedicated to your journey',
        'Dual-control Euro NCAP 5-Star safety fleet with instructor pedals',
        'Complimentary doorstep pickup & return from home, campus, or office',
        'Comprehensive zero-deductible learner driver insurance included',
        'Step-by-step digital progress scorecard tracking every maneuver',
        'Official DMV theory exam app access with mock question banks'
      ],
      curriculum: [
        {
          num: '01',
          title: 'Cockpit Drills, Controls & Basic Moving Off',
          desc: 'Learn DSSSM (Doors, Seat, Steering, Seatbelt, Mirrors) cockpit routine, accelerator and brake sensitivity, biting point control, and smooth straight-line stops.'
        },
        {
          num: '02',
          title: 'Steering Precision, Gear Shifting & Minor Road Junctions',
          desc: 'Master push-pull steering technique, clutch balance during upshifts/downshifts, approaching T-junctions, and establishing correct lane positioning.'
        },
        {
          num: '03',
          title: 'Roundabouts, Crossroads & Priority Rules',
          desc: 'Navigate mini-roundabouts, single-lane roundabouts, crossroads with traffic lights, pedestrian crosswalks, and reading road markings with anticipation.'
        },
        {
          num: '04',
          title: 'Slow-Speed Maneuvering & Essential Parking',
          desc: 'Practice parallel parking between cars, 90-degree bay parking forward and reverse, pulling up on the right-hand side, and emergency stopping technique.'
        },
        {
          num: '05',
          title: 'Urban Traffic Flow, Dual Carriageways & Hazard Perception',
          desc: 'Build confidence on busy multi-lane avenues, speed regulation, mirror-signal-maneuver discipline, and spotting blind-spot hazards early.'
        },
        {
          num: '06',
          title: 'Independent Driving & Milestone Skill Assessment',
          desc: 'Follow directional traffic signs and sat-nav guidance independently, complete an examiner-style trial run, and receive your comprehensive progress debrief.'
        }
      ],
      vehicle: {
        model: 'Volkswagen Golf & Toyota Corolla Dual-Control Fleet',
        safety: '5-Star Euro NCAP, Dual Brake & Clutch Pedals, Dual Instructor Mirrors',
        comfort: 'Climate Controlled Cockpit, Adjustable Orthopedic Seating, Power Steering',
        tech: '360-Degree Parking Sensors, High-Definition Reversing Camera, Route Telemetry'
      },
      requirements: [
        'Valid Provisional Driver\'s Permit / Learner License (Ages 16+)',
        'Ability to read a standard vehicle license plate from 20 meters away',
        'Theory test in progress or completed (not mandatory for first lesson)',
        'Comfortable, flat-soled driving shoes'
      ],
      instructor: {
        name: 'Sarah Jenkins',
        role: 'Senior Novice Training Specialist',
        experience: '11+ Years Coaching • 97% First-Time Pass Rate',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
        bio: 'Sarah is renowned for her calming teaching presence and specialized anxiety-management coaching for nervous beginners.'
      },
      faqs: [
        {
          q: 'Do I need to pass my Theory Test before starting beginner lessons?',
          a: 'No! You can legally start practical lessons as soon as you have your provisional learner permit. Many students find practical road experience actually helps them pass the theory test faster.'
        },
        {
          q: 'What happens if I stall the car on my first lesson?',
          a: 'Stalling is a completely natural part of learning! All our vehicles feature dual controls, meaning your instructor can assist smoothly and keep you 100% safe at all times in quiet, dedicated practice zones.'
        },
        {
          q: 'Can I choose between a male or female instructor?',
          a: 'Yes, absolutely. We have experienced male and female certified instructors available. You can specify your preference when reserving your lesson slot.'
        }
      ]
    },

    'car-license': {
      id: 'car-license',
      name: 'Car License Training',
      badge: 'Most Popular',
      heroImage: 'https://images.pexels.com/photos/37112146/pexels-photo-37112146/free-photo-of-driving-school-vehicle-with-learning-sign.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'Comprehensive test preparation designed around official practical exam marking criteria.',
      overviewTitle: 'Complete Practical License Road Preparation',
      overviewText: 'Our flagship Car License Training program is designed to transform learner drivers into certified, confident license holders. Covering 30 extensive hours of real-world road training, official test route simulations, complex spiral roundabouts, and 2 full-length scored mock exams, this curriculum delivers our highest pass rate across all regional testing centers.',
      duration: '30 Practical Hours + 2 Mock Tests',
      level: 'Intermediate / License Candidate',
      transmission: 'Manual & Automatic Available',
      licenseType: 'Class D / Full Driver\'s License',
      passRate: '98% First-Attempt Success',
      basePriceManual: 790,
      basePriceAuto: 820,
      installments: '3 monthly payments of $263 (0% interest)',
      benefits: [
        'Complete coverage of all official examiner test routes & tricky intersections',
        '2 full scored mock driving exams with official score fault breakdowns',
        'Use of your familiar dual-control training vehicle on official road test day',
        '1-hour warm-up session immediately prior to your practical test appointment',
        'Intensive mastery of all compulsory maneuvers (parallel, bay, emergency stop)',
        'Fast-track practical driving test cancellation booking assistance'
      ],
      curriculum: [
        {
          num: '01',
          title: 'Advanced Road Craft & Mirror-Signal Routine',
          desc: 'Refine situational hazard awareness, smooth vehicle dynamics, early signal timing, and multi-lane positioning at highway speeds.'
        },
        {
          num: '02',
          title: 'Complex Multi-Lane & Spiral Roundabouts',
          desc: 'Decipher lane designations, spiral entry/exit positioning, high-density traffic gaps, and examiner expectations on complex interchanges.'
        },
        {
          num: '03',
          title: 'Full Maneuvers Perfection & Precision Parking',
          desc: 'Master parallel parking between two cars within 1 foot of the curb, reverse bay parking into tight stalls, and clean forward bay parking.'
        },
        {
          num: '04',
          title: 'Independent Driving with Sat-Nav & Sign Following',
          desc: 'Simulate the 20-minute independent driving portion of the official practical test following GPS audio prompts and physical route signs.'
        },
        {
          num: '05',
          title: 'Mock Test 01 – Regional Center Route Simulation',
          desc: 'Complete an authentic 40-minute simulated driving test with strict examiner scoring, followed by an immediate error-correction debrief.'
        },
        {
          num: '06',
          title: 'Mock Test 02 & Official Exam Day Readiness',
          desc: 'Final dress-rehearsal examination under test conditions, vehicle safety "Show Me / Tell Me" question review, and test-day logistics plan.'
        }
      ],
      vehicle: {
        model: 'Audi A3 Sportback & Volkswagen Passat Dual-Control',
        safety: '5-Star Euro NCAP, Dual Brake and Accelerator, Wide-Angle Instructor Mirrors',
        comfort: 'Smooth Electric Power Steering, Digital Cockpit Display, Dual-Zone Climate',
        tech: 'Dashcam Fleet Recording, Electronic Parking Assist, Adaptive Brake Assist'
      },
      requirements: [
        'Valid Provisional Driver\'s License / Permit',
        'Basic foundational vehicle control experience (or completion of beginner hours)',
        'Valid state Theory / Knowledge Test certificate'
      ],
      instructor: {
        name: 'David Sterling',
        role: 'Car License & Mock Exam Lead',
        experience: '14+ Years Experience • 98% Pass Rate',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
        bio: 'Former senior road examiner who knows every local test route, tricky turn, and common examiner fault trap.'
      },
      faqs: [
        {
          q: 'Is the test-day car rental included in this package?',
          a: 'Yes, 100%! You get the exact same dual-control car you trained in for your exam, plus a 1-hour warm-up session right before your test.'
        },
        {
          q: 'What happens if I fail my first practical test?',
          a: 'We offer a Free Test Retake Guarantee. If you complete all 30 hours and mock tests with us, we cover the instructor car rental fee for your second exam attempt.'
        },
        {
          q: 'Can I split the $790 into installments?',
          a: 'Yes! We offer 0% interest split payments in 3 equal monthly installments with zero credit check.'
        }
      ]
    },

    'advanced-driving': {
      id: 'advanced-driving',
      name: 'Advanced Driving Course',
      badge: 'Defensive Mastery',
      heroImage: 'https://images.pexels.com/photos/12676275/pexels-photo-12676275.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'High-speed highway, adverse weather, night driving, and spatial precision for licensed drivers.',
      overviewTitle: 'Elevate from License Holder to Elite Motorist',
      overviewText: 'Passing your driving exam is just the baseline. The Advanced Driving Course is tailored for licensed drivers looking to eradicate highway anxiety, master torrential rain and night-time hazard navigation, learn skid prevention, and conquer tight multi-story parking structures with surgical precision.',
      duration: '15 Practical Hours',
      level: 'Licensed Drivers / Skill Refinement',
      transmission: 'Manual & Automatic Available',
      licenseType: 'Advanced Driving Certificate (Insurance Discount)',
      passRate: '100% Course Completion Rate',
      basePriceManual: 420,
      basePriceAuto: 450,
      installments: '2 monthly payments of $210 (0% interest)',
      benefits: [
        'Motorway high-speed merging, overtaking, and safe distance management',
        'Wet-weather hydroplaning mitigation and emergency skid control',
        'Night-time glare reduction, peripheral vision and hazard anticipation',
        'Fuel-efficient eco-driving techniques reducing fuel burn by up to 20%',
        'Official Advanced Driving Academy Certificate recognized by major auto insurers',
        'Tight downtown parking garage and tight parallel maneuvering mastery'
      ],
      curriculum: [
        {
          num: '01',
          title: 'High-Speed Highway Merging & Slip-Road Tactics',
          desc: 'Gain total confidence joining fast-moving motorways at 65-75 mph, calculating gaps, and smooth multi-lane overtaking.'
        },
        {
          num: '02',
          title: 'Adverse Weather Handling & Skid Prevention',
          desc: 'Learn wet-surface stopping distances, aquaplaning recovery, driving through standing water, fog lighting, and winter grip management.'
        },
        {
          num: '03',
          title: 'Night Driving & Low-Visibility Road Craft',
          desc: 'Master headlight beam etiquette, dealing with oncoming high-beam glare, identifying unlit hazards, and nocturnal fatigue management.'
        },
        {
          num: '04',
          title: 'Complex City Center & Multi-Story Precision',
          desc: 'Navigate narrow one-way downtown networks, delivery truck blockades, tight spiral parking ramps, and congested urban intersections.'
        },
        {
          num: '05',
          title: 'Eco-Driving Dynamics & Vehicle Longevity',
          desc: 'Harness momentum driving, progressive gear shifting, rolling resistance reduction, and smooth brake wear management.'
        }
      ],
      vehicle: {
        model: 'BMW 3 Series & Audi A4 Dual-Control Sedan Fleet',
        safety: 'Dynamic Stability Control, Euro NCAP 5-Star, Dual Safety Controls',
        comfort: 'Sport Seats, Head-Up Display, Lane Keep Assist, Rain-Sensing Systems',
        tech: 'Telemetry Speed & G-Force Sensors, Electronic Brake Distribution'
      },
      requirements: [
        'Valid Full Driver\'s License (any issuing state or international transfer)',
        'No active suspensions or disqualifications'
      ],
      instructor: {
        name: 'Marcus Vance',
        role: 'Advanced & Highway Skills Coach',
        experience: '16+ Years Experience • RoSPA Gold Certified',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        bio: 'Specialist in defensive motor vehicle dynamics, skid control, and corporate fleet safety training.'
      },
      faqs: [
        {
          q: 'Does this course qualify for auto insurance discounts?',
          a: 'Yes! Most major auto insurance carriers offer between 10% and 15% annual premium reductions upon presenting our signed Advanced Driving Certificate.'
        },
        {
          q: 'Can I use my own personal car for this course?',
          a: 'Yes, after an initial 2-hour assessment in our dual-control car, you have the option to complete sessions in your personal vehicle.'
        }
      ]
    },

    'intensive-fast-track': {
      id: 'intensive-fast-track',
      name: 'Intensive Fast-Track Course',
      badge: 'Fast-Track 10-14 Days',
      heroImage: 'https://images.pexels.com/photos/9518018/pexels-photo-9518018.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'Pass your driving test in under two weeks with daily 2-to-3 hour immersion lessons.',
      overviewTitle: 'Get Your Full Driving License in Just 10 to 14 Days',
      overviewText: 'Need your driving license fast for a new job, university relocation, or upcoming road trip? Our Intensive Fast-Track program compresses months of weekly lessons into an immersive 10-to-14 day schedule. You\'ll train daily with a dedicated instructor and receive priority road test appointment booking.',
      duration: '25 Practical Hours (10–14 Days)',
      level: 'Fast-Track License Seekers',
      transmission: 'Manual & Automatic Available',
      licenseType: 'Class D Full License',
      passRate: '95% Rapid-Completion Pass Rate',
      basePriceManual: 720,
      basePriceAuto: 750,
      installments: '3 payments of $240 (0% interest)',
      benefits: [
        'Daily 2-3 hour accelerated behind-the-wheel coaching sessions',
        'Dedicated senior coach assigned exclusively to your schedule',
        'Rapid muscle-memory retention eliminating between-lesson knowledge decay',
        'VIP priority practical test date booking and cancellation scouting',
        'Official test car hire and 1-hour warm-up included on exam day',
        'Comprehensive mock examination on Day 10 with instant feedback'
      ],
      curriculum: [
        {
          num: '01',
          title: 'Days 1-3: Rapid Foundation & Controls Immersion',
          desc: 'Daily 2.5-hour sessions covering complete vehicle operation, smooth clutch/brake coordination, and basic suburban traffic.'
        },
        {
          num: '02',
          title: 'Days 4-7: Maneuvers, Intersections & Road Signs',
          desc: 'Intensive drilling of all four test maneuvers until flawless, navigating roundabouts, and dual-carriageway speed control.'
        },
        {
          num: '03',
          title: 'Days 8-11: Official Exam Route Saturation',
          desc: 'Complete multiple runs across all published DMV examination circuits, identifying tricky lane traps and speed zone changes.'
        },
        {
          num: '04',
          title: 'Days 12-14: Scored Mock Trials & Test Day',
          desc: 'Full mock examination scoring, final confidence tune-up, pre-test car prep, and official examiner road test accompaniment.'
        }
      ],
      vehicle: {
        model: 'Dedicated Dual-Control Sedan (Guaranteed for Test Day)',
        safety: '5-Star Euro NCAP, Dual Braking, Backup Camera, Instructor Mirrors',
        comfort: 'Air Conditioned, Automatic Hill Hold, Adjustable Steering Column',
        tech: 'Integrated Sat-Nav, Live Speed Logging, Dual Dashcam System'
      },
      requirements: [
        'Valid Provisional Driver\'s License / Permit',
        'Passed state Theory / Knowledge test prior to Day 1',
        'Availability for daily morning or afternoon lesson slots across 2 consecutive weeks'
      ],
      instructor: {
        name: 'Elena Rostova',
        role: 'Fast-Track Program Director',
        experience: '12+ Years Coaching • 99% 14-Day Completion Rate',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
        bio: 'Specialist in accelerated cognitive driver training and rapid practical skill building.'
      },
      faqs: [
        {
          q: 'Do you book the practical driving test for me?',
          a: 'Yes! Our VIP concierge team scouts priority test slots and early cancellation appointments to match the end of your course.'
        },
        {
          q: 'Is it better to do manual or automatic on an intensive course?',
          a: 'Both are popular, but automatic allows learners to progress even faster because there is zero risk of stalling or clutch coordination challenges.'
        }
      ]
    },

    'automatic-license': {
      id: 'automatic-license',
      name: 'Automatic License Training',
      badge: 'Zero Clutch Stress',
      heroImage: 'https://images.pexels.com/photos/20312398/pexels-photo-20312398.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'Skip gear shifts and hill-start clutch anxiety with our modern automatic dual-control fleet.',
      overviewTitle: 'Pure Focus on Safety, Road Positioning & Traffic Flow',
      overviewText: 'Driving should be enjoyable, intuitive, and stress-free. Our Automatic License Training removes the complexity of gear shifters, clutch biting points, and roll-back anxiety on hills. By removing manual transmission distractions, students learn faster, build road awareness quicker, and pass their road test in fewer total hours.',
      duration: '22 Practical Hours',
      level: 'All Skill Levels / Automatic Only',
      transmission: 'Dedicated Automatic Dual-Control Fleet',
      licenseType: 'Class D Automatic License',
      passRate: '98% First-Attempt Success',
      basePriceManual: 610,
      basePriceAuto: 610,
      installments: '3 monthly payments of $203 (0% interest)',
      benefits: [
        'Zero stalling, zero roll-backs, zero clutch wear stress',
        'Modern 2024 automatic fleet with electronic handbrake & hill assist',
        'Fewer lessons required on average to reach official test standard',
        '100% mental focus on hazard perception, road signs, and mirrors',
        'Doorstep collection and drop-off included for every session',
        'Full test center route practice with certified automatic specialists'
      ],
      curriculum: [
        {
          num: '01',
          title: 'Automatic Transmission Operation & Creep Control',
          desc: 'Master Drive, Reverse, Park, and Neutral selections, utilizing brake-creep for millimeter-perfect low-speed maneuvering.'
        },
        {
          num: '02',
          title: 'Smooth Acceleration, Braking & Road Anticipation',
          desc: 'Develop smooth foot transitions, progressive stopping, reading traffic signals early, and maintaining safe following gaps.'
        },
        {
          num: '03',
          title: 'Stress-Free Roundabouts & Busy Crossroads',
          desc: 'Navigate multi-lane roundabouts with full attention on lane discipline without ever worrying about downshifting gears.'
        },
        {
          num: '04',
          title: '360° Reversing, Parallel & Bay Parking',
          desc: 'Use high-definition rearview cameras, dynamic guidance lines, and wing mirrors to park perfectly on your first try.'
        },
        {
          num: '05',
          title: 'High-Speed Highway Merging & Examiner Mock Test',
          desc: 'Seamless dual-carriageway acceleration, overtaking, and a full 40-minute mock practical exam with official feedback.'
        }
      ],
      vehicle: {
        model: '2024 Toyota Yaris Cross & Honda Civic Hybrid Automatic',
        safety: 'Euro NCAP 5-Star, Dual Brake Controls, Blind Spot Monitoring',
        comfort: 'High Driving Position, Whisper-Quiet Hybrid Drive, Touchscreen Apple CarPlay',
        tech: 'Electronic Parking Brake with Auto-Hold, Reversing Camera, Parking Sensors'
      },
      requirements: [
        'Valid Provisional Driving License / Permit',
        'Minimum age 16+ with basic vision check'
      ],
      instructor: {
        name: 'David Sterling',
        role: 'Automatic Fleet Director',
        experience: '14+ Years Experience • 98% Pass Rate',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
        bio: 'David champions automatic driver training for faster qualification and relaxed, anxiety-free learning.'
      },
      faqs: [
        {
          q: 'Can I drive a manual car if I pass in an automatic?',
          a: 'Passing in an automatic grants you a full automatic license. If you later wish to drive manual vehicles, you simply take a quick practical conversion test.'
        },
        {
          q: 'Do students really pass faster in automatic cars?',
          a: 'Yes, statistically learners need 20% to 30% fewer lesson hours in an automatic because there are no clutch or gear-coordination hurdles to overcome.'
        }
      ]
    },

    'mock-test-refresher': {
      id: 'mock-test-refresher',
      name: 'Mock Test & Refresher Pack',
      badge: 'Test Polish & Refresher',
      heroImage: 'https://images.pexels.com/photos/14823463/pexels-photo-14823463.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tagline: 'Pinpoint and eliminate minor faults before test day, or rebuild road confidence after a hiatus.',
      overviewTitle: 'Eliminate Test Nerves with Authentic Examiner Simulations',
      overviewText: 'Ideal for learner drivers with a test date just around the corner or licensed motorists returning to driving after a long break. This targeted 10-hour intensive package focuses on high-impact polish: realistic examiner mock tests, diagnosing tricky maneuvers, and test center route traps.',
      duration: '10 Practical Hours',
      level: 'Test-Ready Learners & Returning Drivers',
      transmission: 'Manual & Automatic Available',
      licenseType: 'Exam Readiness & Confidence Certificate',
      passRate: '99% Mock-To-Pass Correlation',
      basePriceManual: 290,
      basePriceAuto: 310,
      installments: 'Pay in full or 2 payments of $145',
      benefits: [
        '3 complete 40-minute simulated driving tests with official scorecards',
        'Targeted diagnosis and elimination of habitual minor faults',
        'Intensive parallel parking, bay parking, and emergency stop drills',
        'Familiarization with published test routes and tricky speed zones',
        'Full test-day vehicle hire option for your real practical exam',
        'Immediate post-lesson video/debrief reviews with your senior instructor'
      ],
      curriculum: [
        {
          num: '01',
          title: 'Diagnostic Road Assessment & Fault Analysis',
          desc: 'Identify minor steering, mirror, or positioning flaws under standard traffic conditions.'
        },
        {
          num: '02',
          title: 'Full Examiner Mock Test 01 & Maneuver Isolation',
          desc: 'Simulated 40-minute road test with strict examiner sheet scoring, followed by maneuver correction.'
        },
        {
          num: '03',
          title: 'Complex Roundabouts, Spiral Lanes & Speed Traps',
          desc: 'Targeted practice on known local test center traps, ambiguous lane transitions, and high-density exits.'
        },
        {
          num: '04',
          title: 'Full Examiner Mock Test 02 & Show-Me-Tell-Me Review',
          desc: 'Final dress rehearsal mock test with under-the-hood and cockpit safety questions.'
        }
      ],
      vehicle: {
        model: 'Dual-Control Test Vehicle (Manual or Automatic)',
        safety: '5-Star Euro NCAP, Dual Braking, Wide-Angle Examiner Mirrors',
        comfort: 'Clean, sanitized cockpit with modern electronic driver aids',
        tech: 'Reversing Cameras, Speed Logging, Real-Time Telemetry Feedback'
      },
      requirements: [
        'Provisional permit with prior driving experience, OR valid full driver\'s license'
      ],
      instructor: {
        name: 'Michael Chang',
        role: 'Senior Examiner Prep Coach',
        experience: '13+ Years Experience • 97% First-Time Pass Rate',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
        bio: 'Former test examiner coach who specializes in turning test anxiety into calm, composed road confidence.'
      },
      faqs: [
        {
          q: 'Can I book this course just 1 week before my practical driving test?',
          a: 'Yes! Subject to instructor availability, we can schedule these 10 hours across 3 to 5 days leading right up to your test date.'
        },
        {
          q: 'Can I hire your dual-control car for my actual driving test?',
          a: 'Yes, this package can be seamlessly upgraded to include test-day vehicle hire and pre-test warm-up accompaniment.'
        }
      ]
    }
  };

  // Map of URL alias keywords to canonical course IDs
  const ALIAS_MAP = {
    'beginner': 'beginner-driving',
    'beginner-driving': 'beginner-driving',
    'car-license': 'car-license',
    'license': 'car-license',
    'car-license-training': 'car-license',
    'advanced': 'advanced-driving',
    'advanced-driving': 'advanced-driving',
    'fast-track': 'intensive-fast-track',
    'intensive': 'intensive-fast-track',
    'intensive-fast-track': 'intensive-fast-track',
    'automatic': 'automatic-license',
    'automatic-license': 'automatic-license',
    'mock-test': 'mock-test-refresher',
    'refresher': 'mock-test-refresher',
    'mock-test-refresher': 'mock-test-refresher'
  };

  // -------------------------------------------------------------------------
  // 2. DOM ELEMENTS CACHE
  // -------------------------------------------------------------------------
  let currentCourse = null;
  let selectedTransmission = 'manual';

  // -------------------------------------------------------------------------
  // 3. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `
      <i class="fa-solid ${icon} text-primary" aria-hidden="true"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // -------------------------------------------------------------------------
  // 4. THEME & DIRECTION (RTL/LTR) HANDLERS
  // -------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', toggleTheme);
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const icons = [document.getElementById('theme-icon'), document.getElementById('mobile-theme-icon')];
    icons.forEach(icon => {
      if (!icon) return;
      if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    showToast(`Switched to ${next.toUpperCase()} theme`);
  }

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
    applyDirection(savedDir);

    const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
    const mobileRtlBtn = document.getElementById('mobile-rtl-btn');

    if (rtlToggleBtn) {
      rtlToggleBtn.addEventListener('click', toggleDirection);
    }
    if (mobileRtlBtn) {
      mobileRtlBtn.addEventListener('click', toggleDirection);
    }
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    const labels = [document.getElementById('rtl-label'), document.getElementById('mobile-rtl-label')];
    labels.forEach(lbl => {
      if (!lbl) return;
      lbl.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  function toggleDirection() {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(next);
    showToast(`Layout switched to ${next.toUpperCase()} mode`);
  }

  // -------------------------------------------------------------------------
  // 5. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------------------------
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('close-drawer-btn');
    const backdrop = document.getElementById('drawer-backdrop');

    if (!toggleBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      if (backdrop) backdrop.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('drawer-scroll-lock');
      document.body.classList.add('drawer-scroll-lock');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (!document.documentElement.dataset.drawerTouchGuardBound) {
        document.documentElement.dataset.drawerTouchGuardBound = '1';
        document.addEventListener('touchmove', (e) => {
          if (!document.documentElement.classList.contains('drawer-scroll-lock')) return;
          const inner = e.target.closest('.mobile-drawer-inner');
          if (!inner || inner.scrollHeight <= inner.clientHeight) {
            e.preventDefault();
          }
        }, { passive: false });
      }
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      if (backdrop) backdrop.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('drawer-scroll-lock');
      document.body.classList.remove('drawer-scroll-lock');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
      backdrop.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
      backdrop.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }

    // Mobile submenu toggle
    const mobileHomeBtn = document.getElementById('mobile-home-btn');
    const mobileSubMenu = document.getElementById('mobile-home-submenu');
    if (mobileHomeBtn && mobileSubMenu) {
      mobileHomeBtn.addEventListener('click', function () {
        mobileSubMenu.classList.toggle('active');
      });
    }
  }

  // -------------------------------------------------------------------------
  // 6. ROUTING & DATA INJECTION ENGINE
  // -------------------------------------------------------------------------
  function resolveCourseFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('course') || urlParams.get('service') || window.location.hash.replace('#', '');

    if (param && ALIAS_MAP[param.toLowerCase()]) {
      return COURSES_DATABASE[ALIAS_MAP[param.toLowerCase()]];
    }
    return COURSES_DATABASE['beginner-driving']; // Default
  }

  function renderCourse(course) {
    if (!course) return;
    currentCourse = course;

    // 1. Page Title & Meta
    document.title = `${course.name} – DRIVEPRO Driving Academy`;

    // 2. Breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumb-course-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = course.name;

    // 3. Hero Section
    const heroBgImg = document.getElementById('hero-bg-img');
    if (heroBgImg) heroBgImg.src = course.heroImage;

    const heroBadge = document.getElementById('hero-badge-text');
    if (heroBadge) heroBadge.textContent = course.badge;

    const heroTitle = document.getElementById('hero-course-title');
    if (heroTitle) heroTitle.textContent = course.name;

    const heroDesc = document.getElementById('hero-course-desc');
    if (heroDesc) heroDesc.textContent = course.tagline;

    const pillDuration = document.getElementById('pill-duration');
    if (pillDuration) pillDuration.textContent = course.duration;

    const pillTransmission = document.getElementById('pill-transmission');
    if (pillTransmission) pillTransmission.textContent = course.transmission;

    const pillLevel = document.getElementById('pill-level');
    if (pillLevel) pillLevel.textContent = course.level;

    const pillPassRate = document.getElementById('pill-pass-rate');
    if (pillPassRate) pillPassRate.textContent = course.passRate;

    // 4. Course Overview Card
    const overviewTitle = document.getElementById('overview-title');
    if (overviewTitle) overviewTitle.textContent = course.overviewTitle;

    const overviewText = document.getElementById('overview-text');
    if (overviewText) overviewText.textContent = course.overviewText;

    const benefitsGrid = document.getElementById('benefits-grid');
    if (benefitsGrid) {
      benefitsGrid.innerHTML = course.benefits.map(b => `
        <div class="benefit-item">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>${b}</span>
        </div>
      `).join('');
    }

    // 5. Curriculum Accordion
    const curriculumContainer = document.getElementById('curriculum-accordion');
    if (curriculumContainer) {
      curriculumContainer.innerHTML = course.curriculum.map((m, idx) => `
        <div class="curriculum-item ${idx === 0 ? 'active' : ''}">
          <button class="curriculum-header" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <div class="curriculum-header-left">
              <span class="module-badge">Module ${m.num}</span>
              <span>${m.title}</span>
            </div>
            <i class="fa-solid fa-chevron-down module-toggle-icon" aria-hidden="true"></i>
          </button>
          <div class="curriculum-body">
            <p>${m.desc}</p>
            <ul class="curriculum-topics-list">
              <li><i class="fa-solid fa-check"></i> Certified 1-on-1 Practical Execution</li>
              <li><i class="fa-solid fa-check"></i> Instructor Safety Evaluation & Debrief</li>
            </ul>
          </div>
        </div>
      `).join('');

      attachAccordionListeners(curriculumContainer, '.curriculum-header', '.curriculum-item');
    }

    // 6. Vehicle Specs
    const specModel = document.getElementById('spec-model');
    if (specModel) specModel.textContent = course.vehicle.model;

    const specSafety = document.getElementById('spec-safety');
    if (specSafety) specSafety.textContent = course.vehicle.safety;

    const specComfort = document.getElementById('spec-comfort');
    if (specComfort) specComfort.textContent = course.vehicle.comfort;

    const specTech = document.getElementById('spec-tech');
    if (specTech) specTech.textContent = course.vehicle.tech;

    // 7. Requirements
    const reqList = document.getElementById('requirements-list');
    if (reqList) {
      reqList.innerHTML = course.requirements.map(r => `
        <div class="req-item">
          <i class="fa-solid fa-id-card-clip" aria-hidden="true"></i>
          <span>${r}</span>
        </div>
      `).join('');
    }

    // 8. Instructor Spotlight
    const instName = document.getElementById('instructor-name');
    if (instName) instName.textContent = course.instructor.name;

    const instRole = document.getElementById('instructor-role');
    if (instRole) instRole.textContent = course.instructor.role;

    const instBio = document.getElementById('instructor-bio');
    if (instBio) instBio.textContent = `${course.instructor.experience} — ${course.instructor.bio}`;

    const instImg = document.getElementById('instructor-img');
    if (instImg) instImg.src = course.instructor.image;

    // 9. Course FAQs
    const faqContainer = document.getElementById('course-faq-list');
    if (faqContainer) {
      faqContainer.innerHTML = course.faqs.map((f, idx) => `
        <div class="faq-item ${idx === 0 ? 'active' : ''}">
          <button class="faq-question-btn" type="button">
            <span>${f.q}</span>
            <i class="fa-solid fa-chevron-down faq-arrow" aria-hidden="true"></i>
          </button>
          <div class="faq-answer">
            <p>${f.a}</p>
          </div>
        </div>
      `).join('');

      attachAccordionListeners(faqContainer, '.faq-question-btn', '.faq-item');
    }

    // 10. Sidebar Pricing & Metadata
    updateSidebarPricing();

    const sideMetaDuration = document.getElementById('side-meta-duration');
    if (sideMetaDuration) sideMetaDuration.textContent = course.duration;

    const sideMetaLicense = document.getElementById('side-meta-license');
    if (sideMetaLicense) sideMetaLicense.textContent = course.licenseType;

    const sideMetaPassRate = document.getElementById('side-meta-pass');
    if (sideMetaPassRate) sideMetaPassRate.textContent = course.passRate;

    // Form Course Select auto-selection
    const formCourseSelect = document.getElementById('book-course-select');
    if (formCourseSelect) formCourseSelect.value = course.id;

    // 11. Update Quick-Nav Active States
    const quicknavLinks = document.querySelectorAll('.quicknav-link');
    quicknavLinks.forEach(link => {
      if (link.getAttribute('data-target-course') === course.id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 12. Render Related Courses Grid (showing other 3 courses)
    renderRelatedCourses(course.id);
  }

  function updateSidebarPricing() {
    if (!currentCourse) return;
    const priceDisplay = document.getElementById('sidebar-price');
    const installmentDisplay = document.getElementById('sidebar-installment');

    const price = selectedTransmission === 'auto' ? currentCourse.basePriceAuto : currentCourse.basePriceManual;
    if (priceDisplay) priceDisplay.textContent = `$${price}`;
    if (installmentDisplay) installmentDisplay.textContent = currentCourse.installments;
  }

  function attachAccordionListeners(container, btnSelector, itemSelector) {
    const buttons = container.querySelectorAll(btnSelector);
    buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = this.closest(itemSelector);
        const isActive = item.classList.contains('active');

        // Close other items in the container
        container.querySelectorAll(itemSelector).forEach(other => {
          other.classList.remove('active');
          const otherBtn = other.querySelector(btnSelector);
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function renderRelatedCourses(currentId) {
    const container = document.getElementById('related-courses-grid');
    if (!container) return;

    const otherCourses = Object.values(COURSES_DATABASE).filter(c => c.id !== currentId).slice(0, 3);

    container.innerHTML = otherCourses.map(c => `
      <article class="related-course-card">
        <img src="${c.heroImage}" alt="${c.name}" class="related-card-img" loading="lazy" />
        <div class="related-card-body">
          <div class="related-card-meta">
            <span><i class="fa-regular fa-clock"></i> ${c.duration}</span>
            <span class="badge-upcoming">${c.badge}</span>
          </div>
          <h3 class="related-card-title">${c.name}</h3>
          <p class="related-card-desc">${c.tagline}</p>
          <div class="related-card-footer">
            <span class="related-card-price">$${c.basePriceManual}</span>
            <button class="btn btn-secondary switch-course-btn" data-course-id="${c.id}" type="button">
              <span>View Program</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach switch event
    container.querySelectorAll('.switch-course-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-course-id');
        navigateToCourse(targetId);
      });
    });
  }

  function navigateToCourse(courseId) {
    const targetCourse = COURSES_DATABASE[courseId];
    if (!targetCourse) return;

    // Update URL query state without reload
    const newUrl = `${window.location.pathname}?course=${courseId}`;
    window.history.pushState({ courseId }, '', newUrl);

    renderCourse(targetCourse);

    // Smooth scroll to top of details
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    showToast(`Loaded ${targetCourse.name}`);
  }

  // -------------------------------------------------------------------------
  // 7. SIDEBAR CONTROLS & BOOKING FORM
  // -------------------------------------------------------------------------
  function initSidebarControls() {
    // Transmission Selector
    const transBtns = document.querySelectorAll('.trans-option-btn');
    transBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        transBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedTransmission = this.getAttribute('data-trans') || 'manual';
        updateSidebarPricing();
        showToast(`Transmission set to ${selectedTransmission.toUpperCase()}`);
      });
    });

    // Quick-Nav Sidebar Links
    const quicknavLinks = document.querySelectorAll('.quicknav-link');
    quicknavLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target-course');
        navigateToCourse(targetId);
      });
    });

    // Booking Inquiry Form Submission
    const bookingForm = document.getElementById('sidebar-booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('book-name').value.trim();
        const email = document.getElementById('book-email').value.trim();
        const phone = document.getElementById('book-phone').value.trim();
        const date = document.getElementById('book-date').value;

        if (!name || !email || !phone) {
          showToast('Please fill in your name, email and contact number.', 'info');
          return;
        }

        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Reserving Slot...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
          bookingForm.reset();

          showToast(`Success! Your lesson slot reservation inquiry for ${currentCourse.name} has been received. Our coordinator will call you within 30 minutes!`);
        }, 1200);
      });
    }

    // Modal Triggers
    const openLoginBtns = [document.getElementById('header-login-btn'), document.getElementById('mobile-login-btn')];
    const loginModal = document.getElementById('login-modal');
    const closeLoginBtn = document.getElementById('close-login-modal');

    openLoginBtns.forEach(btn => {
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (loginModal) loginModal.classList.add('is-open');
      });
    });

    if (closeLoginBtn && loginModal) {
      closeLoginBtn.addEventListener('click', function () {
        loginModal.classList.remove('is-open');
      });

      loginModal.addEventListener('click', function (e) {
        if (e.target === loginModal) {
          loginModal.classList.remove('is-open');
        }
      });
    }

    // Download Syllabus Button
    const downloadBtn = document.getElementById('download-syllabus-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showToast(`Generating certified PDF syllabus for ${currentCourse.name}...`);
        setTimeout(() => {
          showToast('Curriculum PDF downloaded successfully!');
        }, 1500);
      });
    }
  }

  // -------------------------------------------------------------------------
  // 8. POPSTATE & BROWSER NAVIGATION LISTENER
  // -------------------------------------------------------------------------
  window.addEventListener('popstate', function () {
    const course = resolveCourseFromUrl();
    renderCourse(course);
  });

  // -------------------------------------------------------------------------
  // 9. INITIALIZATION
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initDirection();
    initMobileMenu();

    const initialCourse = resolveCourseFromUrl();
    renderCourse(initialCourse);

    initSidebarControls();

    document.querySelectorAll('.placeholder-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.pageName || 'Legal Information';
        showToast(`${pageName} portal opens in your browser policy drawer.`);
      });
    });
  });

})();
