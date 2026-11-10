/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * Journal Details Script (journal detail.js)
 * Full interactive multi-article routing engine:
 * Supports 6 distinct journal cards, dynamic hero banner, context, why-choose, pricing, faqs & cta.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STATE & STORAGE KEYS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  // -------------------------------------------------------------------------
  // 2. COMPREHENSIVE 6-ARTICLE REPOSITORY
  // -------------------------------------------------------------------------
  const JOURNAL_DATABASE = {
    '1': {
      id: 1,
      slug: 'dmv-test-checkpoints',
      category: 'Test Preparation & DMV',
      badge: 'Official Examiner Protocol',
      title: 'Mastering the DMV Practical Driving Test: Top 10 Examiner Checkpoints',
      heroImage: 'https://images.pexels.com/photos/10661529/pexels-photo-10661529.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'November 8, 2026',
      readTime: '7 Min Read',
      author: {
        name: 'Marcus Vance',
        role: 'Lead Test Examiner Coach',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=240&auto=format&fit=crop',
        bio: 'Former regional DMV examiner with 14 years of evaluating practical exams. Marcus has mentored over 2,200 students to first-time driving license success.'
      },
      quickStats: {
        focus: 'Official Route Checkpoints',
        level: 'Test-Ready Learners',
        passRate: '96% First-Attempt Success'
      },
      context: {
        lead: 'The 40-minute practical road test is designed to assess not merely whether you can steer a vehicle, but whether you make calm, predictable decisions under real traffic conditions. Here is the verified examiner scoring rubric.',
        p1: 'During your test, examiners utilize a standardized fault tracking sheet. Most students fail not on dramatic collisions, but through an accumulation of minor procedural oversights—primarily mirror routines, failure to scan pedestrian blind spots, and hesitation at roundabouts.',
        quote: 'Examiners are looking for confidence and hazard anticipation. When you check your mirrors before signaling and maintain correct road positioning, you demonstrate complete situational awareness.',
        quoteAuthor: 'Marcus Vance, Senior Examiner Coach',
        checkpoints: [
          {
            num: '01',
            title: 'MSPSL Routine Before Any Direction Change',
            desc: 'Mirrors, Signal, Position, Speed, and Look. Check center and relevant side mirrors before applying your blinker, not during or after steering.'
          },
          {
            num: '02',
            title: 'Junction Observation & Stopping Distances',
            desc: 'Always stop where tires meet the tarmac behind the vehicle ahead. Never creep into pedestrian zebra crossings while waiting for a green arrow.'
          },
          {
            num: '03',
            title: 'Roundabout Lane Selection & Spiral Discipline',
            desc: 'Signal left on approach for third-exit turns, maintain lane discipline across the circulatory carriageway, and signal right immediately after passing the penultimate exit.'
          },
          {
            num: '04',
            title: 'Speed Appropriateness & Progressive Acceleration',
            desc: 'Driving 10 mph under the speed limit without cause is penalised as undue hesitation. Match the flow of traffic smoothly within posted safety zones.'
          }
        ],
        matrix: {
          faultsTitle: 'Common Critical Faults (Automatic Test Failure)',
          faults: [
            'Failing to check blind spots over your shoulder before moving off from a parked curb.',
            'Misjudging a gap in opposing traffic when executing an unprotected left turn.',
            'Mounting the curb during the reverse parallel parking or 3-point turn maneuver.',
            'Approaching a stop sign at rolling speed rather than bringing the wheels to a full standstill.'
          ],
          correctTitle: 'Examiner-Approved Best Practices',
          correct: [
            'Conduct a full 6-point check including blind spots before releasing the handbrake.',
            'Wait patiently at unprotected turns until safe visibility is 100% verified.',
            'Maintain slow, steady clutch biting control with continuous 360-degree observation.',
            'Complete a solid 3-second full stop with pedal balance behind the white stop line.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Train for the DMV Test with DRIVEPRO?',
        features: [
          {
            icon: 'fa-route',
            title: 'Pre-Scouted Test Routes',
            desc: 'Practice directly on official test routes around all 8 regional DMV test centers with tricky junctions mapped in advance.'
          },
          {
            icon: 'fa-car',
            title: 'Dual-Control Exam Car Rental',
            desc: 'Take your actual test in our modern dual-control training vehicles, meeting all examiner compliance requirements.'
          },
          {
            icon: 'fa-clipboard-check',
            title: 'Scored Examiner Mock Exams',
            desc: 'Experience full 40-minute mock tests graded using official examiner scorecards with comprehensive fault breakdown.'
          },
          {
            icon: 'fa-shield-halved',
            title: 'Zero Test-Day Anxiety',
            desc: 'Our 1-hour pre-test warm-up drive settles your nerves and prepares your muscle memory for test success.'
          }
        ]
      },
      servicePricing: {
        packageName: 'DMV Road Test Preparation & Mock Pack',
        packageBadge: 'Most Popular for Exam Day',
        price: '$199',
        term: 'All-Inclusive Exam Package',
        installments: 'Or 2 split installments of $99.50 with 0% interest',
        features: [
          '2 Full 40-Minute Mock Driving Tests with Fault Diagnostic Sheet',
          'Official DMV Test Day Dual-Control Car Hire & Insurance',
          '60-Minute Pre-Test Warm-Up Coaching Session',
          'Doorstep Pick-Up & Return from Home, Campus or Office',
          'Examiner-approved maneuvers polish: Parallel, Bay & 3-Point Turn'
        ],
        ctaText: 'Enroll in Road Test Prep ($199)'
      },
      faqs: [
        {
          q: 'Can I use this package if my test is scheduled for next week?',
          a: 'Yes! We offer priority scheduling for students with upcoming test dates within 7 to 14 days, subject to instructor vehicle availability.'
        },
        {
          q: 'What paperwork do I need to bring on practical test day?',
          a: 'You will need your valid learner permit, completed logbook hours (if applicable), proof of driving course completion, and confirmation receipt.'
        },
        {
          q: 'Will my instructor accompany me inside the car during the DMV test?',
          a: 'Examiner regulations vary by state, but your instructor remains at the testing center and assists you throughout the pre-test registration and vehicle handover.'
        }
      ],
      cta: {
        heading: 'Ready to Clear Your Practical Road Test on Your Very First Try?',
        desc: 'Book your scored examiner mock test and test-day car hire with DRIVEPRO’s certified coaching specialists today.',
        badge: '96% First-Attempt Success'
      }
    },

    '2': {
      id: 2,
      slug: 'transmission-guide',
      category: 'Transmission & Fleet Tech',
      badge: 'Gearbox Architecture & Licensing',
      title: 'Manual vs. Automatic Transmission: Which License Fits Your Driving Goals?',
      heroImage: 'https://images.pexels.com/photos/91152/pexels-photo-91152.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'November 5, 2026',
      readTime: '6 Min Read',
      author: {
        name: 'Sarah Jenkins',
        role: 'Senior Fleet & Gearbox Specialist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop',
        bio: 'Mechanical automotive engineer and Grade A driving coach with 11 years of experience in dual-transmission curriculum design.'
      },
      quickStats: {
        focus: 'Dual-Transmission Fleet',
        level: 'All Experience Levels',
        passRate: 'Zero-Stall Mastery'
      },
      context: {
        lead: 'Choosing between a manual and automatic driving license is one of the most critical decisions a new driver will make. Here is the engineering and practical breakdown of both options.',
        p1: 'Passing in a manual vehicle grants you a full Category B license, enabling you to legally drive both manual and automatic cars worldwide. Conversely, an automatic license restricts you solely to vehicles with two pedals. Understanding clutch mechanics and EV trends helps you make the right choice.',
        quote: 'Learning manual gives you an intimate understanding of vehicle weight transfer and engine braking, while automatic lets you dedicate 100% of your cognitive bandwidth to road hazards.',
        quoteAuthor: 'Sarah Jenkins, Fleet Specialist',
        checkpoints: [
          {
            num: '01',
            title: 'Clutch Biting Point & Friction Plate Physics',
            desc: 'The clutch connects the flywheel to the transmission. Learning muscle memory for the biting point eliminates rollback and engine stalls on steep inclines.'
          },
          {
            num: '02',
            title: 'Rev-Matching & Smooth Downshifting',
            desc: 'Downshifting smoothly before entering tight corners ensures the engine assists in deceleration, preserving brake life and improving corner stability.'
          },
          {
            num: '03',
            title: 'Cognitive Load Reduction in Heavy Urban Traffic',
            desc: 'Automatic vehicles eliminate the physical fatigue of constant gear shifting and clutch pumping in stop-and-go downtown traffic jams.'
          },
          {
            num: '04',
            title: 'Future-Proofing: The Global Shift to Electric Vehicles',
            desc: 'With over 90% of modern EVs and hybrids using single-speed automatic drivetrains, automatic licensing has become the primary global choice.'
          }
        ],
        matrix: {
          faultsTitle: 'Common Manual Pitfalls for Beginners',
          faults: [
            'Riding the clutch pedal at red lights, causing premature clutch plate burnout.',
            'Coasting with the clutch depressed downhill, reducing vehicular control.',
            'Forgetting to downshift to 1st or 2nd gear when slowing down for sharp turns.',
            'Sudden clutch release on hill starts, causing violent engine stalls.'
          ],
          correctTitle: 'Mastery Best Practices',
          correct: [
            'Shift to neutral and engage handbrake when stopped for more than 5 seconds.',
            'Keep car in proper gear throughout deceleration to retain engine braking power.',
            'Select the correct gear before initiating turn entry for optimal traction.',
            'Set the throttle gently to 1,500 RPM and hold the clutch at biting point before release.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Learn Transmissions with DRIVEPRO?',
        features: [
          {
            icon: 'fa-gears',
            title: 'Dual-Transmission Fleet',
            desc: 'Train in modern manual hot-hatches or automatic luxury cruisers with seamless cross-transmission transfer options.'
          },
          {
            icon: 'fa-circle-pause',
            title: 'Anti-Stall Dual Pedals',
            desc: 'Our certified dual-control safety pedals allow instructors to intervene instantly, guaranteeing zero embarrassment or stress.'
          },
          {
            icon: 'fa-bolt',
            title: 'Modern EV Hybrid Training',
            desc: 'Experience regenerative braking and drive-mode selectors in our Euro NCAP 5-star hybrid automatic training cars.'
          },
          {
            icon: 'fa-certificate',
            title: 'Full Unrestricted License',
            desc: 'Our manual program guarantees complete qualification for global car rental without transmission limitations.'
          }
        ]
      },
      servicePricing: {
        packageName: 'Manual vs. Automatic Transmission Course',
        packageBadge: 'Flexible Dual-Gearbox Pack',
        price: '$280',
        term: '10 Intensive Training Hours',
        installments: '3 monthly installments of $93.33 with 0% interest',
        features: [
          '10 Dedicated 1-on-1 Practical Lessons in Your Preferred Transmission',
          'Option to split hours 50/50 between Manual and Automatic fleets',
          'Hill start & biting point precision masterclass with dual pedals',
          'Complimentary doorstep pickup & return on every session',
          'Access to DRIVEPRO digital cockpit theory modules'
        ],
        ctaText: 'Enroll in Transmission Training ($280)'
      },
      faqs: [
        {
          q: 'If I pass in an automatic car, can I convert to a manual license later?',
          a: 'Yes! You can take our 6-hour Manual Upgrade Course and sit a short practical manual test without retaking the theory exam.'
        },
        {
          q: 'Is it true that automatic driving lessons are easier for beginners?',
          a: 'Most students achieve test readiness 5 to 10 hours faster in an automatic car because they do not have to master clutch pedal coordination.'
        },
        {
          q: 'Do your manual cars have hill-start assist technology?',
          a: 'Yes, our training fleet includes modern electronic handbrake assist while still teaching traditional handbrake technique for older cars.'
        }
      ],
      cta: {
        heading: 'Master Either Transmission with Total Confidence',
        desc: 'Book your lesson in either manual or automatic with DRIVEPRO’s certified coaches today.',
        badge: 'Dual-Control Certified Fleet'
      }
    },

    '3': {
      id: 3,
      slug: 'defensive-weather-driving',
      category: 'Road Safety & Defense',
      badge: 'Hazard Perception & Dynamics',
      title: 'Defensive Driving in Extreme Weather: Rain, Fog, Night Hazards & Aquaplaning',
      heroImage: 'https://images.pexels.com/photos/1600909/pexels-photo-1600909.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'October 28, 2026',
      readTime: '8 Min Read',
      author: {
        name: 'David Chen',
        role: 'Advanced Vehicle Handling Coach',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=240&auto=format&fit=crop',
        bio: 'Former high-speed tactical driver and certified skid-pan instructor with over 15 years specializing in adverse weather accident prevention.'
      },
      quickStats: {
        focus: 'Adverse Weather Mastery',
        level: 'Licensed & Advanced Learners',
        passRate: 'Zero-Accident Protocol'
      },
      context: {
        lead: 'Adverse weather conditions multiply braking distances and drastically reduce driver reaction margins. Master the physics of tire adhesion and hazard scanning to remain completely safe.',
        p1: 'At 30 mph on dry pavement, the average stopping distance is 23 meters. On wet tarmac, that distance doubles to 46 meters, and on icy surfaces it multiplies up to ten-fold. When tires cannot evacuate standing water, a film forms beneath the tread—a lethal phenomenon called aquaplaning.',
        quote: 'Defensive driving is the art of never having to rely on an emergency reflex. When you read the road surface 200 meters ahead, you control your vehicle’s trajectory before a skid can initiate.',
        quoteAuthor: 'David Chen, Handling Coach',
        checkpoints: [
          {
            num: '01',
            title: 'The 4-Second Following Distance Rule',
            desc: 'Double the standard 2-second gap on wet highways. Use fixed roadside landmarks like bridges or signposts to benchmark your trailing distance.'
          },
          {
            num: '02',
            title: 'Aquaplaning Recovery Without Slamming Brakes',
            desc: 'If steering suddenly feels light and tires lose grip on water pools, ease off the accelerator smoothly, keep steering straight, and avoid abrupt braking.'
          },
          {
            num: '03',
            title: 'Fog Lighting Protocol & Glare Reduction',
            desc: 'Never use high-beam headlights in dense fog, as moisture droplets reflect glare directly back into your eyes. Use dipped low beams and dedicated fog lamps.'
          },
          {
            num: '04',
            title: 'Anticipatory Skid Management (Understeer vs Oversteer)',
            desc: 'Learn gentle steering corrections and weight transfer management on low-friction road surfaces to retain directional stability.'
          }
        ],
        matrix: {
          faultsTitle: 'Dangerous Weather Misconceptions',
          faults: [
            'Using cruise control in torrential rain or standing puddles, leading to sudden hydroplane spinning.',
            'Braking hard while the steering wheel is turned during a slick-road skid.',
            'Accelerating quickly when entering highway standing water ribbons.',
            'Neglecting windshield defroster airflow, causing sudden inside glass fogging.'
          ],
          correctTitle: 'Defensive Driving Gold Standards',
          correct: [
            'Disengage all cruise control systems immediately when road surfaces become wet.',
            'Steer smoothly in the direction you want the front tires to go without jerky pedal inputs.',
            'Maintain gentle, steady throttle and enter water pools with wheels strictly straight.',
            'Set climate control to A/C defrost mode to continuously dehydrate cabin air.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Take Advanced Defensive Training with DRIVEPRO?',
        features: [
          {
            icon: 'fa-cloud-showers-heavy',
            title: 'Real Adverse Weather Drills',
            desc: 'Learn practical wet-road braking, night driving, and motorway merging in safety-controlled environments.'
          },
          {
            icon: 'fa-sliders',
            title: 'ABS & Stability Telemetry',
            desc: 'Experience active electronic stability program (ESP) triggers and anti-lock braking feel on wet pavement.'
          },
          {
            icon: 'fa-road',
            title: 'Motorway Overtaking Mastery',
            desc: 'Build high-speed lane discipline and truck blind spot management for confident intercity travel.'
          },
          {
            icon: 'fa-shield-heart',
            title: 'Insurance Premium Discounts',
            desc: 'Graduates receive certified Defensive Driver accreditation that qualifies for up to 15% automotive insurance discounts.'
          }
        ]
      },
      servicePricing: {
        packageName: 'Advanced Defensive & Weather Mastery Program',
        packageBadge: 'Accredited Safety Course',
        price: '$360',
        term: '12 Hours Advanced Coaching',
        installments: '3 monthly payments of $120 with 0% interest',
        features: [
          '12 Hours of Advanced Motorway, Night & Adverse Weather Driving',
          'Emergency braking & aquaplaning avoidance telemetry drills',
          'High-speed overtaking & commercial truck slipstream management',
          'Official Defensive Driving Certificate for insurance discount',
          'Comprehensive vehicle fluids & tire tread safety inspection module'
        ],
        ctaText: 'Enroll in Defensive Driving ($360)'
      },
      faqs: [
        {
          q: 'Is this course suitable for newly licensed drivers?',
          a: 'Yes, this is the perfect follow-up for students who recently passed their test and want highway and adverse weather confidence.'
        },
        {
          q: 'Do we train on actual highways and motorways?',
          a: 'Yes, all 12 hours cover regional motorways, complex interchanges, multi-lane roundabouts, and rural unlit roads.'
        },
        {
          q: 'Will completing this program lower my car insurance rates?',
          a: 'Most major insurance providers offer between 10% to 15% discounts upon presenting the DRIVEPRO Defensive Driver Certificate.'
        }
      ],
      cta: {
        heading: 'Master the Road in Any Weather Condition',
        desc: 'Acquire lifelong defensive instincts with DRIVEPRO’s advanced vehicle handling specialists.',
        badge: 'Accredited Defensive Certification'
      }
    },

    '4': {
      id: 4,
      slug: 'parking-mastery',
      category: 'Precision Maneuvers',
      badge: 'Spatial Control & Parking',
      title: 'Parallel Parking & Tight Bay Maneuvers: The Precision Blueprint',
      heroImage: 'https://images.pexels.com/photos/29515560/pexels-photo-29515560.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'October 22, 2026',
      readTime: '5 Min Read',
      author: {
        name: 'Elena Rostova',
        role: 'Precision Maneuver Specialist',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop',
        bio: 'Precision stunt and parking coach with over a decade teaching micro-spatial vehicle dynamics to nervous and beginner learners.'
      },
      quickStats: {
        focus: 'Maneuver Geometry',
        level: 'Beginner to Test Prep',
        passRate: '100% Maneuver Test Clearance'
      },
      context: {
        lead: 'Parallel parking and reversing into tight parking bays cause more driver stress than almost any other task. By learning exact reference points, parking becomes simple geometry.',
        p1: 'Examiners and city drivers alike assess parallel parking based on three criteria: constant 360-degree observation, low controlled speed at clutch biting point, and finishing within 30 centimeters of the curb without striking it.',
        quote: 'Parking is not guesswork. When your rear axle aligns with the neighboring car’s bumper, turning the wheel one full turn creates an exact 45-degree trajectory into the bay.',
        quoteAuthor: 'Elena Rostova, Maneuver Coach',
        checkpoints: [
          {
            num: '01',
            title: 'Initial Position: 1-Meter Lateral Alignment',
            desc: 'Pull up parallel to the target vehicle approximately 1 meter away, ensuring both rear bumpers are flush before shifting into reverse.'
          },
          {
            num: '02',
            title: 'The 45-Degree Angle Lock',
            desc: 'Check all around including the blind spot over your right shoulder. Reverse slowly and apply one full lock toward the curb until your car reaches a 45-degree angle.'
          },
          {
            num: '03',
            title: 'Straight Line Reversal to the Curb',
            desc: 'Straighten your wheels and reverse backwards until your front bumper clears the rear corner of the parked car ahead.'
          },
          {
            num: '04',
            title: 'Counter-Lock and Final Straightening',
            desc: 'Lock the steering wheel in the opposite direction. The front of the vehicle will swing smoothly into the space parallel to the curb.'
          }
        ],
        matrix: {
          faultsTitle: 'Common Parking Errors on Test Day',
          faults: [
            'Staring solely at the side mirror while reversing, failing to scan pedestrians walking behind.',
            'Moving the vehicle too rapidly, eliminating time to make micro-steering adjustments.',
            'Striking the curb with a hard jolt, resulting in an immediate test failure.',
            'Ending up more than 1 foot (30cm) away from the curb, blocking through traffic.'
          ],
          correctTitle: 'Examiner-Approved Parking Execution',
          correct: [
            'Perform continuous 360-degree head checks across all windows every 3 to 4 seconds.',
            'Maintain creeping walking pace using steady clutch biting point control.',
            'Gently touch or brush tires against rubber markers with zero suspension impact.',
            'Park parallel between 10cm and 25cm from the curb with wheels straightened.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Learn Precision Parking with DRIVEPRO?',
        features: [
          {
            icon: 'fa-bullseye',
            title: 'Guaranteed Reference Markers',
            desc: 'We teach universal visual landmarks on windows and wing mirrors that work on any sedan, hatchback, or SUV.'
          },
          {
            icon: 'fa-camera',
            title: '360° Sensors & Camera Fleet',
            desc: 'Learn traditional spatial awareness first, then learn how to cross-validate with modern rearview cameras.'
          },
          {
            icon: 'fa-square-parking',
            title: 'All Test Maneuvers Included',
            desc: 'Master parallel parking, forward bay parking, reverse bay parking, and roadside emergency pull-overs.'
          },
          {
            icon: 'fa-shield-halved',
            title: 'Zero-Scrape Safety Cones',
            desc: 'Begin training in spacious parking lots with soft foam markers before moving between real vehicles.'
          }
        ]
      },
      servicePricing: {
        packageName: 'Precision Maneuver & Parking Masterclass',
        packageBadge: 'Fast-Track Skill Booster',
        price: '$150',
        term: '4 Hours Dedicated Parking Coaching',
        installments: 'Single payment with instant scheduling',
        features: [
          '4 Hours of Private 1-on-1 Dedicated Parking Training',
          'Parallel parking between real vehicles with instructor dual pedals',
          'Reverse bay parking & tight 90-degree shopping center stalls',
          'Curb-climb prevention & mirror tilt blind-spot adjustment',
          'Doorstep pickup & drop-off included'
        ],
        ctaText: 'Enroll in Parking Masterclass ($150)'
      },
      faqs: [
        {
          q: 'Will this masterclass fix my fear of hitting other cars while parking?',
          a: 'Yes! We start in dedicated cone zones to establish muscle memory before transitioning to suburban streets with dual-control protection.'
        },
        {
          q: 'Is parallel parking still mandatory on the driving exam?',
          a: 'In most jurisdictions, examiners select one major maneuver at random: either parallel park, reverse bay park, or pull up on the right and reverse 2 car lengths.'
        },
        {
          q: 'Can I practice in my own vehicle?',
          a: 'We initially recommend training in our dual-control vehicles for safety, followed by a transition session in your personal car.'
        }
      ],
      cta: {
        heading: 'Never Worry About Finding a Parking Spot Again',
        desc: 'Master the geometry of tight maneuvers with DRIVEPRO’s dedicated parking specialists.',
        badge: '100% Maneuver Success'
      }
    },

    '5': {
      id: 5,
      slug: 'driving-anxiety-confidence',
      category: 'Psychology & Confidence',
      badge: 'Cognitive Driver Psychology',
      title: 'Overcoming Driving Anxiety: Cockpit Routines & Neuroscience for Nervous Drivers',
      heroImage: 'https://images.pexels.com/photos/10649706/pexels-photo-10649706.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'October 15, 2026',
      readTime: '7 Min Read',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Driver Psychology & Stress Consultant',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=240&auto=format&fit=crop',
        bio: 'Cognitive behavioral psychologist and specialist in vehicular phobia treatment. Aris has helped over 1,500 nervous learners eliminate driving panic.'
      },
      quickStats: {
        focus: 'Stress & Anxiety Elimination',
        level: 'Nervous & Anxious Learners',
        passRate: 'Zero-Stress Learning Protocol'
      },
      context: {
        lead: 'Driving anxiety is not a lack of capability—it is a physiological overactivation of the sympathetic nervous system. Learn how neuroscience-backed cockpit routines restore calm control.',
        p1: 'When nervous learners sit behind the wheel, elevated cortisol and adrenaline trigger tunnel vision, rapid breathing, and tense grip on the steering wheel. By implementing structured cognitive resets, progressive exposure therapy, and patient coaching, driving transitions from a source of dread into calm autonomy.',
        quote: 'Anxiety shrinks your visual field to 30 degrees. When you regulate your breath and soften your grip on the wheel, peripheral vision returns, and road hazards appear in slow motion.',
        quoteAuthor: 'Dr. Aris Thorne, Driver Psychologist',
        checkpoints: [
          {
            num: '01',
            title: 'The 4-7-8 Cockpit Breathing Reset',
            desc: 'Before inserting the key or pressing start, take three cycles of inhaling for 4 seconds, holding for 7 seconds, and exhaling for 8 seconds to lower heart rate.'
          },
          {
            num: '02',
            title: 'De-Gripping the Steering Wheel (The 2-Finger Check)',
            desc: 'White-knuckling the steering wheel creates shoulder fatigue and jerky inputs. Periodically verify you can gently wiggle your index fingers to keep forearms relaxed.'
          },
          {
            num: '03',
            title: 'Progressive Micro-Exposure Therapy',
            desc: 'Start inside a parked car, advance to empty parking lots, progress to quiet suburban grids, and only introduce highway merges when your baseline pulse remains steady.'
          },
          {
            num: '04',
            title: 'Internal Dialogue Neutralization',
            desc: 'Replace catastrophic thoughts ("I am holding up traffic") with factual procedural statements ("I am driving at a legal, safe speed for this junction").'
          }
        ],
        matrix: {
          faultsTitle: 'Common Habits That Escalate Anxiety',
          faults: [
            'Rushing to book a test before emotional comfort on the road is established.',
            'Training with impatient family members who shout or criticize mistakes.',
            'Holding breath during lane changes or complex roundabout entries.',
            'Fixating on the rearview mirror worried about aggressive tailgating drivers.'
          ],
          correctTitle: 'Confidence-Building Mental Frameworks',
          correct: [
            'Set progress benchmarks based on emotional calm rather than lesson counts.',
            'Train exclusively with certified, non-judgmental professional coaches.',
            'Exhale rhythmically while initiating turns and mirror checks.',
            'Maintain focus on forward stopping distance; let tailgaters overtake safely.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Choose DRIVEPRO’s Anxiety-Free Learning Program?',
        features: [
          {
            icon: 'fa-heart',
            title: 'Patience-First Certified Coaches',
            desc: 'Our instructors receive specialized training in cognitive coaching, patience, and supportive learner communication.'
          },
          {
            icon: 'fa-shield',
            title: '100% Dual-Pedal Safety Shield',
            desc: 'Instructors can gently assist braking or steering at any instant, meaning you can never make a dangerous error.'
          },
          {
            icon: 'fa-gauge',
            title: 'Self-Paced Progression',
            desc: 'Never forced into scary traffic. You decide when you feel ready to advance from quiet roads to multi-lane highways.'
          },
          {
            icon: 'fa-music',
            title: 'Calm Cockpit Environment',
            desc: 'Custom climate comfort, optional calming background audio, and zero-shouting guarantee.'
          }
        ]
      },
      servicePricing: {
        packageName: 'Nervous Driver Confidence & Anxiety Reset Pack',
        packageBadge: 'Patient Coaching Specialist',
        price: '$320',
        term: '8 Hours Low-Stress 1-on-1 Coaching',
        installments: '2 monthly installments of $160 with 0% interest',
        features: [
          '8 Hours of Private 1-on-1 Low-Stress Practical Road Lessons',
          'Specially trained senior patience-first certified instructor',
          'Quiet neighborhood route gradual exposure progression',
          'Cognitive cockpit breathing & anxiety reset curriculum',
          'Doorstep pickup & drop-off with flexible rescheduling'
        ],
        ctaText: 'Enroll in Confidence Coaching ($320)'
      },
      faqs: [
        {
          q: 'What if I panic during a lesson?',
          a: 'Your instructor has full dual-control pedals and can safely bring the vehicle to a stop at any time. We will pull over, take a calm breather, and proceed only when you feel ready.'
        },
        {
          q: 'I haven’t driven in 5 years after an accident. Is this course right for me?',
          a: 'Yes, our instructors frequently work with licensed drivers returning to the road after traumatic experiences or long periods of absence.'
        },
        {
          q: 'Can I request a female instructor?',
          a: 'Yes, we have both male and female certified senior instructors available upon request during booking.'
        }
      ],
      cta: {
        heading: 'Transform Driving Fear Into Calm, Lifelong Road Freedom',
        desc: 'Experience zero-stress driver education with DRIVEPRO’s compassionate certified coaches.',
        badge: 'Zero-Anxiety Protocol'
      }
    },

    '6': {
      id: 6,
      slug: 'eco-driving-technique',
      category: 'Eco-Driving & Efficiency',
      badge: 'Vehicle Telemetry & Efficiency',
      title: 'Eco-Driving & Fuel Economy: Advanced Hyper-Miling Techniques for Modern Roads',
      heroImage: 'https://images.pexels.com/photos/945443/pexels-photo-945443.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'October 10, 2026',
      readTime: '6 Min Read',
      author: {
        name: 'Marcus Vance',
        role: 'Advanced Telemetry & Eco Coach',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop',
        bio: 'Automotive telemetry specialist focusing on fuel-efficient vehicular kinetics, hybrid range maximization, and low-emission driving techniques.'
      },
      quickStats: {
        focus: 'Fuel Economy & Emissions',
        level: 'All Drivers',
        passRate: 'Up to 25% Fuel Savings'
      },
      context: {
        lead: 'Eco-driving is not about driving slowly—it is about preserving kinetic energy and managing engine thermal efficiency. Learn the exact techniques to save up to 25% at the pump.',
        p1: 'Every time you brake aggressively, energy that took fuel to create is wasted as heat in brake rotors. By reading traffic lights 300 meters ahead, utilizing predictive engine braking, and optimizing shift points, modern drivers drastically reduce fuel consumption, brake wear, and carbon emissions.',
        quote: 'Smoothness is speed, and smoothness is efficiency. The best drivers rarely touch their brakes in city traffic because their trailing gap absorbs speed fluctuations naturally.',
        quoteAuthor: 'Marcus Vance, Telemetry Coach',
        checkpoints: [
          {
            num: '01',
            title: 'Predictive Kinetic Momentum Management',
            desc: 'When approaching red lights or roundabouts, lift off the accelerator early. Modern fuel-injected engines cut fuel delivery to zero while coasting in gear.'
          },
          {
            num: '02',
            title: 'Short-Shifting in the Peak Torque Window',
            desc: 'Shift up early (between 1,800 to 2,200 RPM in gasoline cars, 1,500 to 1,800 in diesels) to prevent high-RPM cylinder pumping losses.'
          },
          {
            num: '03',
            title: 'Tire Pressure & Rolling Resistance Optimization',
            desc: 'Tires under-inflated by just 5 PSI increase rolling resistance by 10% and fuel burn by 3%. Verify manufacturer tire pressure monthly.'
          },
          {
            num: '04',
            title: 'Hybrid EV Regenerative Braking Modulation',
            desc: 'In hybrid and electric cars, gentle early braking maximizes kinetic energy recovery back into the high-voltage battery rather than using friction pads.'
          }
        ],
        matrix: {
          faultsTitle: 'Fuel-Wasting Driving Habits',
          faults: [
            'Jackrabbit starts from green lights followed by hard braking at the next signal.',
            'Idling the vehicle for more than 60 seconds rather than utilizing start-stop systems.',
            'Leaving heavy cargo or empty roof racks mounted, degrading highway aerodynamics.',
            'Driving in too low a gear at highway cruising speeds.'
          ],
          correctTitle: 'Eco-Driving Best Practices',
          correct: [
            'Accelerate progressively and anticipate traffic flow to cruise smoothly.',
            'Turn off the engine during extended waits at drawbridges or level crossings.',
            'Keep trunk empty and remove roof bars when not in active use.',
            'Engage top gear as early as the engine runs smoothly without lugging.'
          ]
        }
      },
      whyChoose: {
        heading: 'Why Learn Eco-Driving with DRIVEPRO?',
        features: [
          {
            icon: 'fa-leaf',
            title: 'Instant 20–25% Fuel Savings',
            desc: 'Save hundreds of dollars annually on gasoline or extend EV battery range by 15–20 miles per charge.'
          },
          {
            icon: 'fa-gauge-high',
            title: 'Live Telemetry Dashboard',
            desc: 'Our hybrid training vehicles display instantaneous MPG, brake regen metrics, and kinetic scores.'
          },
          {
            icon: 'fa-wrench',
            title: 'Triple Brake & Tire Lifespan',
            desc: 'Smooth deceleration reduces brake pad wear, tire shoulder scrub, and clutch friction strain.'
          },
          {
            icon: 'fa-award',
            title: 'Eco-Driver Certification',
            desc: 'Receive official recognition valued by fleet employers and rideshare commercial operators.'
          }
        ]
      },
      servicePricing: {
        packageName: 'Eco-Driving & Fuel Telemetry Certification',
        packageBadge: 'Cost-Saving Specialist Pack',
        price: '$180',
        term: '6 Hours Kinetic Telemetry Coaching',
        installments: 'Single payment with instant scheduling',
        features: [
          '6 Hours of 1-on-1 Practical Highway & Urban Eco-Driving Coaching',
          'Live vehicle telemetry trip computer analysis with instructor',
          'Electric vehicle regenerative braking optimization masterclass',
          'Doorstep pickup and return included',
          'Official DRIVEPRO Eco-Driver Certificate of Completion'
        ],
        ctaText: 'Enroll in Eco-Driver Course ($180)'
      },
      faqs: [
        {
          q: 'Does eco-driving mean I have to drive under the speed limit?',
          a: 'Not at all! Eco-driving is about how smoothly you reach speed and how efficiently you maintain momentum, always matching legal traffic speeds.'
        },
        {
          q: 'Will these techniques work on older non-hybrid vehicles?',
          a: 'Yes, predictive coasting in gear, early gear selection, and tire management yield the highest percentage savings on traditional gas and diesel engines.'
        },
        {
          q: 'Is this course useful for commercial or rideshare drivers?',
          a: 'Extremely useful. Full-time Uber/Lyft or delivery drivers save an average of $1,200+ annually after adopting these driving techniques.'
        }
      ],
      cta: {
        heading: 'Drive Smarter, Cleaner, and Save Money on Every Mile',
        desc: 'Master the art of vehicular efficiency with DRIVEPRO’s telemetry certified instructors.',
        badge: '25% Proven Fuel Savings'
      }
    }
  };

  // Map of URL alias keywords to canonical article IDs
  const ALIAS_MAP = {
    '1': '1',
    'dmv': '1',
    'dmv-test': '1',
    'dmv-test-checkpoints': '1',
    'test-prep': '1',
    '2': '2',
    'transmission': '2',
    'manual-vs-automatic': '2',
    'transmission-guide': '2',
    '3': '3',
    'weather': '3',
    'defensive': '3',
    'defensive-weather-driving': '3',
    'adverse-weather': '3',
    '4': '4',
    'parking': '4',
    'parallel-parking': '4',
    'parking-mastery': '4',
    'maneuvers': '4',
    '5': '5',
    'anxiety': '5',
    'nervous': '5',
    'driving-anxiety-confidence': '5',
    'confidence': '5',
    '6': '6',
    'eco': '6',
    'fuel': '6',
    'eco-driving': '6',
    'eco-driving-technique': '6'
  };

  // -------------------------------------------------------------------------
  // 3. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `
      <i class="fa-solid ${icon}" style="color: var(--primary);" aria-hidden="true"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // -------------------------------------------------------------------------
  // 4. THEME & RTL MANAGEMENT
  // -------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');

    if (theme === 'dark') {
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun theme-icon';
      if (mobileThemeIcon) mobileThemeIcon.className = 'fa-solid fa-sun';
    } else {
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon theme-icon';
      if (mobileThemeIcon) mobileThemeIcon.className = 'fa-solid fa-moon';
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  }

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
    applyDirection(savedDir);

    const rtlBtn = document.getElementById('rtl-toggle-btn');
    const mobileRtlBtn = document.getElementById('mobile-rtl-btn');

    if (rtlBtn) rtlBtn.addEventListener('click', toggleDirection);
    if (mobileRtlBtn) mobileRtlBtn.addEventListener('click', toggleDirection);
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    const rtlLabel = document.getElementById('rtl-label');
    const mobileRtlLabel = document.getElementById('mobile-rtl-label');

    if (dir === 'rtl') {
      if (rtlLabel) rtlLabel.textContent = 'LTR';
      if (mobileRtlLabel) mobileRtlLabel.textContent = 'LTR Mode';
    } else {
      if (rtlLabel) rtlLabel.textContent = 'RTL';
      if (mobileRtlLabel) mobileRtlLabel.textContent = 'RTL Mode';
    }
  }

  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
    showToast(`Switched text layout to ${newDir.toUpperCase()}`, 'info');
  }

  // -------------------------------------------------------------------------
  // 5. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------------------------
  function initMobileDrawer() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    function openDrawer() {
      if (drawer) {
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
      }
      if (backdrop) backdrop.classList.add('active');
      document.documentElement.classList.add('drawer-scroll-lock');
      document.body.classList.add('drawer-scroll-lock');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
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
      if (drawer) {
        drawer.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (backdrop) backdrop.classList.remove('active');
      document.documentElement.classList.remove('drawer-scroll-lock');
      document.body.classList.remove('drawer-scroll-lock');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
      backdrop.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
      backdrop.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }

    const homeToggle = document.getElementById('mobile-home-toggle');
    const subMenu = document.getElementById('mobile-home-submenu');
    if (homeToggle && subMenu) {
      homeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        subMenu.classList.toggle('active');
        const icon = homeToggle.querySelector('.mobile-dropdown-icon');
        if (icon) {
          icon.style.transform = subMenu.classList.contains('active') ? 'rotate(180deg)' : '';
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  // 6. ARTICLE ROUTER & DYNAMIC CONTENT INJECTION
  // -------------------------------------------------------------------------
  function getRequestedArticleId() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id') || urlParams.get('article') || urlParams.get('card');

    if (paramId) {
      const cleanParam = paramId.toLowerCase().trim();
      if (ALIAS_MAP[cleanParam]) return ALIAS_MAP[cleanParam];
    }

    const hash = window.location.hash.replace('#', '').toLowerCase().trim();
    if (hash && ALIAS_MAP[hash]) return ALIAS_MAP[hash];

    // Default to Article 1
    return '1';
  }

  function renderArticle(articleId) {
    const data = JOURNAL_DATABASE[articleId] || JOURNAL_DATABASE['1'];

    // Update document title
    document.title = `${data.title} – DRIVEPRO Journal`;

    // 1. Hero Section Injections
    const heroBgImg = document.getElementById('detail-hero-bg-img');
    if (heroBgImg) heroBgImg.src = data.heroImage;

    const categoryBadge = document.getElementById('detail-category-badge');
    if (categoryBadge) categoryBadge.textContent = data.category;

    const protocolBadge = document.getElementById('detail-protocol-badge');
    if (protocolBadge) protocolBadge.textContent = data.badge;

    const heroTitle = document.getElementById('detail-hero-title');
    if (heroTitle) heroTitle.textContent = data.title;

    const heroAuthorAvatar = document.getElementById('detail-author-avatar');
    if (heroAuthorAvatar) heroAuthorAvatar.src = data.author.avatar;

    const heroAuthorName = document.getElementById('detail-author-name');
    if (heroAuthorName) heroAuthorName.textContent = data.author.name;

    const heroAuthorRole = document.getElementById('detail-author-cred');
    if (heroAuthorRole) heroAuthorRole.textContent = data.author.role;

    const heroDate = document.getElementById('detail-hero-date');
    if (heroDate) heroDate.textContent = data.date;

    const heroReadTime = document.getElementById('detail-hero-readtime');
    if (heroReadTime) heroReadTime.textContent = data.readTime;

    // 2. Main Context Section Injections
    const contextLead = document.getElementById('detail-context-lead');
    if (contextLead) contextLead.textContent = data.context.lead;

    const contextP1 = document.getElementById('detail-context-p1');
    if (contextP1) contextP1.textContent = data.context.p1;

    const quoteText = document.getElementById('detail-quote-text');
    if (quoteText) quoteText.textContent = `“${data.context.quote}”`;

    const quoteAuthor = document.getElementById('detail-quote-author');
    if (quoteAuthor) quoteAuthor.innerHTML = `<i class="fa-solid fa-quote-left" aria-hidden="true"></i> <span>${data.context.quoteAuthor}</span>`;

    // Checkpoints List
    const checkpointsContainer = document.getElementById('detail-checkpoints-list');
    if (checkpointsContainer) {
      checkpointsContainer.innerHTML = data.context.checkpoints.map(cp => `
        <div class="checkpoint-card">
          <div class="checkpoint-num">${cp.num}</div>
          <div class="checkpoint-content">
            <h4 class="checkpoint-title">${cp.title}</h4>
            <p class="checkpoint-desc">${cp.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Matrix Card (Faults vs Correct)
    const faultsTitle = document.getElementById('detail-faults-title');
    if (faultsTitle) faultsTitle.textContent = data.context.matrix.faultsTitle;

    const faultsList = document.getElementById('detail-faults-list');
    if (faultsList) {
      faultsList.innerHTML = data.context.matrix.faults.map(f => `
        <li>
          <i class="fa-solid fa-circle-xmark" style="color: #EF4444;" aria-hidden="true"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    const correctTitle = document.getElementById('detail-correct-title');
    if (correctTitle) correctTitle.textContent = data.context.matrix.correctTitle;

    const correctList = document.getElementById('detail-correct-list');
    if (correctList) {
      correctList.innerHTML = data.context.matrix.correct.map(c => `
        <li>
          <i class="fa-solid fa-circle-check" style="color: #10B981;" aria-hidden="true"></i>
          <span>${c}</span>
        </li>
      `).join('');
    }

    // 3. Why Choose This Journal & Training Injections
    const whyHeading = document.getElementById('detail-why-heading');
    if (whyHeading) whyHeading.textContent = data.whyChoose.heading;

    const whyFeaturesGrid = document.getElementById('detail-why-features');
    if (whyFeaturesGrid) {
      whyFeaturesGrid.innerHTML = data.whyChoose.features.map(f => `
        <div class="why-feature-item">
          <div class="why-feature-icon">
            <i class="fa-solid ${f.icon}" aria-hidden="true"></i>
          </div>
          <div>
            <h4 class="why-feature-title">${f.title}</h4>
            <p class="why-feature-desc">${f.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 4. Service Pricing Package Injections
    const pkgBadge = document.getElementById('detail-pricing-badge');
    if (pkgBadge) pkgBadge.textContent = data.servicePricing.packageBadge;

    const pkgName = document.getElementById('detail-pricing-name');
    if (pkgName) pkgName.textContent = data.servicePricing.packageName;

    const pkgPrice = document.getElementById('detail-pricing-amount');
    if (pkgPrice) pkgPrice.textContent = data.servicePricing.price;

    const pkgTerm = document.getElementById('detail-pricing-term');
    if (pkgTerm) pkgTerm.textContent = data.servicePricing.term;

    const pkgInstallment = document.getElementById('detail-pricing-installment');
    if (pkgInstallment) pkgInstallment.innerHTML = `<i class="fa-solid fa-credit-card" aria-hidden="true"></i> <span>${data.servicePricing.installments}</span>`;

    const pkgFeatures = document.getElementById('detail-pricing-features');
    if (pkgFeatures) {
      pkgFeatures.innerHTML = data.servicePricing.features.map(feat => `
        <div class="service-feature-item">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>${feat}</span>
        </div>
      `).join('');
    }

    const pkgBtn = document.getElementById('detail-pricing-btn');
    if (pkgBtn) {
      pkgBtn.textContent = data.servicePricing.ctaText;
      pkgBtn.onclick = () => {
        showToast(`Selected: ${data.servicePricing.packageName}. Redirecting to enrollment...`, 'success');
        setTimeout(() => {
          window.location.href = `services.html`;
        }, 1200);
      };
    }

    // 5. Topic-Specific FAQs Injections
    const faqsAccordion = document.getElementById('detail-faqs-accordion');
    if (faqsAccordion) {
      faqsAccordion.innerHTML = data.faqs.map((faq, idx) => `
        <div class="article-faq-item ${idx === 0 ? 'active' : ''}">
          <button class="article-faq-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>${faq.q}</span>
            <div class="article-faq-icon">
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </div>
          </button>
          <div class="article-faq-body" style="${idx === 0 ? 'max-height: 200px;' : ''}">
            <div class="article-faq-body-inner">
              <p>${faq.a}</p>
            </div>
          </div>
        </div>
      `).join('');

      initArticleFaqs();
    }

    // 6. Sidebar Author Injections
    const sideAvatar = document.getElementById('sidebar-author-avatar');
    if (sideAvatar) sideAvatar.src = data.author.avatar;

    const sideName = document.getElementById('sidebar-author-name');
    if (sideName) sideName.textContent = data.author.name;

    const sideRole = document.getElementById('sidebar-author-role');
    if (sideRole) sideRole.textContent = data.author.role;

    const sideBio = document.getElementById('sidebar-author-bio');
    if (sideBio) sideBio.textContent = data.author.bio;

    // Sidebar Guides Switcher (Highlight Active Card)
    const guidesList = document.getElementById('sidebar-guides-list');
    if (guidesList) {
      guidesList.innerHTML = Object.keys(JOURNAL_DATABASE).map(k => {
        const item = JOURNAL_DATABASE[k];
        const isActive = k === articleId;
        return `
          <a href="journal detail.html?id=${item.id}" class="sidebar-guide-item ${isActive ? 'active' : ''}">
            <img src="${item.heroImage}" alt="${item.title}" class="sidebar-guide-thumb" />
            <div class="sidebar-guide-info">
              <span class="sidebar-guide-tag">${item.category}</span>
              <strong class="sidebar-guide-title">${item.title}</strong>
            </div>
          </a>
        `;
      }).join('');
    }

    // 7. Article Navigator (Prev / Next Article)
    const prevId = data.id > 1 ? (data.id - 1).toString() : '6';
    const nextId = data.id < 6 ? (data.id + 1).toString() : '1';
    const prevItem = JOURNAL_DATABASE[prevId];
    const nextItem = JOURNAL_DATABASE[nextId];

    const prevCard = document.getElementById('article-nav-prev');
    if (prevCard) {
      prevCard.href = `journal detail.html?id=${prevItem.id}`;
      prevCard.innerHTML = `
        <span class="article-nav-label"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Previous Article</span>
        <strong class="article-nav-title">${prevItem.title}</strong>
      `;
    }

    const nextCard = document.getElementById('article-nav-next');
    if (nextCard) {
      nextCard.href = `journal detail.html?id=${nextItem.id}`;
      nextCard.innerHTML = `
        <span class="article-nav-label" style="justify-content: flex-end;">Next Article <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
        <strong class="article-nav-title" style="text-align: right;">${nextItem.title}</strong>
      `;
    }

    // 8. CTA Section Injections
    const ctaHeading = document.getElementById('detail-cta-heading');
    if (ctaHeading) ctaHeading.textContent = data.cta.heading;

    const ctaDesc = document.getElementById('detail-cta-desc');
    if (ctaDesc) ctaDesc.textContent = data.cta.desc;

    const ctaBadge = document.getElementById('detail-cta-badge');
    if (ctaBadge) ctaBadge.textContent = data.cta.badge;
  }

  // -------------------------------------------------------------------------
  // 7. ARTICLE FAQS TOGGLE ACCORDION
  // -------------------------------------------------------------------------
  function initArticleFaqs() {
    const faqItems = document.querySelectorAll('.article-faq-item');
    faqItems.forEach((item) => {
      const btn = item.querySelector('.article-faq-btn');
      const body = item.querySelector('.article-faq-body');

      if (!btn || !body) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBody = other.querySelector('.article-faq-body');
            if (otherBody) otherBody.style.maxHeight = null;
            const otherBtn = other.querySelector('.article-faq-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          body.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. SIDEBAR LESSON RESERVATION FORM
  // -------------------------------------------------------------------------
  function initSidebarBooking() {
    const form = document.getElementById('sidebar-booking-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sidebar-student-name')?.value || 'Student';
      const date = document.getElementById('sidebar-lesson-date')?.value || 'Upcoming Slot';
      const trans = document.getElementById('sidebar-transmission-select')?.value || 'Automatic';

      showToast(`Reservation Confirmed for ${name} (${trans}) on ${date}! Our academy team will reach out shortly.`, 'success');
      form.reset();
    });
  }

  // -------------------------------------------------------------------------
  // 9. INITIALIZATION
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initMobileDrawer();

    const articleId = getRequestedArticleId();
    renderArticle(articleId);

    initSidebarBooking();

    document.querySelectorAll('.placeholder-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.pageName || 'Legal Information';
        showToast(`${pageName} portal opens in your browser policy drawer.`, 'info');
      });
    });
  });
})();

