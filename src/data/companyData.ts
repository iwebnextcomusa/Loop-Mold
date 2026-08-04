import { ServiceItem, IndustryItem, MaterialItem, GalleryItem, FAQItem, TestimonialItem } from '../types';

import heroImg from '../assets/images/loop_mold_hero_1785872183790.jpg';
import partsImg from '../assets/images/printed_parts_gallery_1785872195106.jpg';
import materialsImg from '../assets/images/materials_showcase_1785872209617.jpg';

export const HERO_IMAGE = heroImg;
export const PARTS_IMAGE = partsImg;
export const MATERIALS_IMAGE = materialsImg;

export const COMPANY_INFO = {
  name: "Loop Mold",
  location: "Lake Elsinore, California",
  region: "Riverside County & Southern California",
  phone: "(949) 350-7410",
  email: "rul.vel107@gmail.com",
  hours: "Monday - Friday: 8:00 AM - 6:00 PM PST",
  tagline: "Professional 3D Printing & Rapid Prototyping Solutions",
  subheadline: "From concept to creation, Loop Mold delivers precision-engineered 3D printed parts, prototypes, and custom manufacturing solutions with exceptional quality and fast turnaround.",
  addressFull: "Lake Elsinore, CA 92530, United States"
};

export const FEATURES = [
  {
    id: 'precision',
    title: 'Precision Printing',
    description: 'High-accuracy FDM and SLA resin 3D printing with layer resolutions down to 25 microns for exact dimensional tolerances.',
    icon: 'Target'
  },
  {
    id: 'turnaround',
    title: 'Fast Turnaround',
    description: 'Same-day production available for rapid engineering prototypes. Standard orders delivered within 24–48 hours.',
    icon: 'Zap'
  },
  {
    id: 'materials',
    title: 'High Quality Materials',
    description: 'Comprehensive stock of engineering thermoplastics, flexible elastomers, composite carbon fiber, and durable resins.',
    icon: 'Layers'
  },
  {
    id: 'engineering',
    title: 'Engineering Support',
    description: 'Direct DFM (Design for Additive Manufacturing) consultation, CAD optimization, and structural validation.',
    icon: 'Cpu'
  },
  {
    id: 'pricing',
    title: 'Affordable Pricing',
    description: 'Cost-effective prototyping without setup fees or minimum order quantities. Instant transparent estimates.',
    icon: 'DollarSign'
  },
  {
    id: 'local',
    title: 'Local California Service',
    description: 'Proudly based in Lake Elsinore, CA, serving Riverside County, Southern California, and client partners nationwide.',
    icon: 'MapPin'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-3d-printing',
    title: 'Custom 3D Printing',
    iconName: 'Printer',
    description: 'High-resolution additive manufacturing tailored for custom visual models, functional housings, and bespoke end-use components.',
    benefits: [
      'Layer heights from 0.025mm to 0.3mm',
      'Multi-material & dual-extrusion options',
      'Large build volume capabilities up to 500x500x500mm',
      'Smooth surface finishing & vapor smoothing options'
    ],
    industriesServed: ['Consumer Products', 'Automotive', 'Architecture', 'Education'],
    detailedInfo: 'Our custom 3D printing service utilizes industrial-grade additive manufacturing machinery. We handle everything from single bespoke prints to moderate production batches with rigorous inspection.'
  },
  {
    id: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    iconName: 'Rocket',
    description: 'Transform initial CAD models into physical touch-and-feel prototypes within 24 to 48 hours for immediate design review.',
    benefits: [
      'Accelerated product iteration cycles',
      'Substantial savings over traditional tooling',
      'Fit and form testing prior to mass molding',
      'Rapid design validation'
    ],
    industriesServed: ['Engineering', 'Medical', 'Robotics', 'Consumer Products'],
    detailedInfo: 'Iterate faster than your competition. Rapid prototyping allows engineering teams to evaluate ergonomics, mating tolerances, and physical performance early in product development.'
  },
  {
    id: 'functional-parts',
    title: 'Functional Parts',
    iconName: 'Cog',
    description: 'Load-bearing mechanical components, custom brackets, jigs, fixtures, and enclosures engineered for tough operational environments.',
    benefits: [
      'High strength-to-weight ratio materials',
      'Chemical & high-temperature resistance',
      'Threaded brass inserts & embedded hardware support',
      'Anisotropic optimization via infill orientation'
    ],
    industriesServed: ['Automotive', 'Manufacturing', 'Aerospace', 'Robotics'],
    detailedInfo: 'We print end-use functional parts using Nylon, PETG, ABS, and Carbon Fiber composites that meet stringent physical stress and thermal requirements.'
  },
  {
    id: 'product-development',
    title: 'Product Development',
    iconName: 'Lightbulb',
    description: 'End-to-end product development support from rough napkin sketches to production-ready physical hardware.',
    benefits: [
      'Comprehensive design iteration assistance',
      'Assembly design & component nesting',
      'Bill of Materials (BOM) & hardware sourcing advice',
      'Pre-production validation'
    ],
    industriesServed: ['Entrepreneurs', 'Inventors', 'Consumer Products', 'Medical'],
    detailedInfo: 'Loop Mold guides inventors and startup companies through structural engineering, material selection, aesthetic modeling, and physical stress testing.'
  },
  {
    id: 'cad-assistance',
    title: 'CAD Assistance',
    iconName: 'PenTool',
    description: 'Professional 3D modeling, parametric CAD design, and DFM optimization to get your files print-ready.',
    benefits: [
      'Mesh repair & solid geometry conversion',
      'Tolerance adjustments for snap-fits and clearances',
      'Conversion from 2D drawings to full 3D STEP/STL files',
      'Wall thickness and overhang optimization'
    ],
    industriesServed: ['Engineers', 'Inventors', 'Hobbyists', 'Designers'],
    detailedInfo: 'Don’t let broken STL mesh files or non-manifold models hold back your project. Our CAD experts refine and generate native CAD files optimized for additive manufacturing.'
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering',
    iconName: 'RefreshCw',
    description: 'Recreate broken, obsolete, or undocumented physical parts with high-precision measurements and CAD reconstruction.',
    benefits: [
      'Exact dimensional reproduction of legacy components',
      'Material upgrade options for legacy broken plastic',
      'Digital archiving for instant future re-ordering',
      'Improvement of original failure points'
    ],
    industriesServed: ['Automotive', 'Manufacturing', 'Replacement Parts', 'Robotics'],
    detailedInfo: 'When replacement OEM parts are discontinued or unobtainable, Loop Mold measures, models, and prints updated replacement components that often surpass original factory strength.'
  },
  {
    id: 'small-batch-manufacturing',
    title: 'Small Batch Manufacturing',
    iconName: 'Boxes',
    description: 'Bridge the gap between prototyping and high-volume injection molding with low-volume production runs (10 to 1,000+ units).',
    benefits: [
      'Zero expensive mold tooling cost required',
      'On-demand production reduces warehouse inventory',
      'Ability to customize units per customer request',
      'Consistent batch-to-batch quality control'
    ],
    industriesServed: ['Small Businesses', 'Manufacturers', 'Automotive', 'Electronics'],
    detailedInfo: 'Avoid spending tens of thousands of dollars on steel molds for short production runs. Our farm of printers enables fast, scalable small batch manufacturing with consistent quality.'
  },
  {
    id: 'replacement-parts',
    title: 'Replacement Parts',
    iconName: 'Wrench',
    description: 'Custom fabricated replacement gears, knobs, brackets, clips, and levers for machinery, vehicles, household gear, and industrial equipment.',
    benefits: [
      'Faster fulfillment than backordered factory parts',
      'Custom color matching and reinforced infill options',
      'Exact fit tailored to your existing assembly',
      'Save hundreds compared to full assembly replacements'
    ],
    industriesServed: ['Automotive', 'Homeowners', 'Industrial', 'Manufacturing'],
    detailedInfo: 'Avoid throwing away expensive tools, appliances, or machinery over a single broken plastic component. We recreate and print rugged replacement parts on demand.'
  },
  {
    id: 'prototype-validation',
    title: 'Prototype Validation',
    iconName: 'CheckCircle2',
    description: 'Rigorous physical testing, load verification, thermal resilience checking, and snap-fit clearance testing.',
    benefits: [
      'Physical load testing and fatigue simulation',
      'Acoustic and assembly fit validation',
      'Surface finish, painting, and texture testing',
      'Comprehensive validation reporting'
    ],
    industriesServed: ['Aerospace', 'Medical', 'Automotive', 'Engineering'],
    detailedInfo: 'Ensure your prototype meets physical specs before committing to mass production. We conduct hands-on tolerance and stress validation.'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    iconName: 'Car',
    description: 'Custom air intake ducts, dashboard mounts, sensor brackets, gear shift knobs, trim clips, and race-car engine bay prototypes.',
    useCases: ['Custom gauge pods', 'Intake manifolds', 'Light housings', 'Restoration clips'],
    popularMaterials: ['ABS', 'Carbon Fiber PETG', 'Nylon', 'Polycarbonate']
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    iconName: 'Plane',
    description: 'Ultra-lightweight structural ducting, wire routing guides, cabin component mockups, and high-strength fixture tooling.',
    useCases: ['Drone airframes', 'Avionics brackets', 'Wind tunnel models', 'Custom clips'],
    popularMaterials: ['Carbon Fiber Nylon', 'PEEK', 'PETG']
  },
  {
    id: 'medical',
    name: 'Medical',
    iconName: 'Activity',
    description: 'Anatomical teaching models, ergonomic surgical tool handles, custom diagnostic equipment housings, and orthotic prototypes.',
    useCases: ['Medical device enclosures', 'Prosthetic components', 'Lab tool holders', 'Patient mockups'],
    popularMaterials: ['Medical Resin', 'PLA', 'PETG', 'TPU']
  },
  {
    id: 'consumer-products',
    name: 'Consumer Products',
    iconName: 'ShoppingBag',
    description: 'Ergonomic hand tools, wearable technology casings, custom phone mounts, home decor prototypes, and sporting goods components.',
    useCases: ['Electronics enclosures', 'Audio gear clips', 'Kitchen gadget handles', 'Fitness wearables'],
    popularMaterials: ['PLA', 'PETG', 'ABS', 'TPU']
  },
  {
    id: 'engineering',
    name: 'Engineering',
    iconName: 'Cpu',
    description: 'Complex mechanical assemblies, gearboxes, fluid manifold test bodies, and precision test jigs with tight tolerances.',
    useCases: ['Fluid flow models', 'Gear assemblies', 'Structural struts', 'Sensor housings'],
    popularMaterials: ['Nylon', 'Carbon Fiber', 'Resin', 'ABS']
  },
  {
    id: 'architecture',
    name: 'Architecture',
    iconName: 'Building',
    description: 'Detailed architectural scale models, structural topography displays, urban planning models, and custom facade prototypes.',
    useCases: ['Scale building models', 'Topographical maps', 'Interior layout grids', 'Facade panels'],
    popularMaterials: ['PLA', 'High Detail Resin']
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    description: 'Hands-on STEM teaching aids, molecular models, robotic chassis kits, and interactive physics demonstration tools.',
    useCases: ['Robotics kits', 'Molecular structures', 'Engineering teaching models', 'Lab gear'],
    popularMaterials: ['PLA', 'PETG']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    description: 'Assembly line soft jaws, robotic gripper end-effectors, inspection gauges, custom organizer trays, and safety shields.',
    useCases: ['Soft jaws for CNC', 'Robot arm grippers', 'Go/No-Go inspection tools', 'Pallet guides'],
    popularMaterials: ['Carbon Fiber Nylon', 'TPU', 'ABS']
  },
  {
    id: 'robotics',
    name: 'Robotics',
    iconName: 'Bot',
    description: 'Custom servo mounts, lightweight chassis frames, sensor mounts, wheel hubs, and protective bumper shields.',
    useCases: ['Drone arms', 'Rover frames', 'Gripper fingers', 'Cable management clips'],
    popularMaterials: ['Carbon Fiber', 'Nylon', 'TPU', 'PETG']
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'pla',
    name: 'PLA (Polylactic Acid)',
    shortName: 'PLA',
    category: 'Standard Thermoplastic',
    strength: 6,
    durability: 6,
    flexibility: 2,
    printQuality: 10,
    heatResistance: 'up to 55°C (131°F)',
    applications: ['Concept models', 'Architectural mockups', 'Visual prototypes', 'Display items', 'Low-stress enclosures'],
    description: 'The industry standard for clean, crisp visual models with incredible surface detail and zero warping.',
    pros: ['High detail output', 'Eco-friendly biodegradable plastic', 'Wide selection of colors', 'Cost-effective'],
    cons: ['Lower heat deflection temp', 'Brittle under heavy impact']
  },
  {
    id: 'abs',
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    shortName: 'ABS',
    category: 'Engineering Plastic',
    strength: 8,
    durability: 8,
    flexibility: 4,
    printQuality: 8,
    heatResistance: 'up to 95°C (203°F)',
    applications: ['Automotive interior trim', 'Electronic enclosures', 'Impact-resistant housings', 'Snap-fit joints'],
    description: 'Durable, impact-resistant thermoplastic commonly used in OEM automotive components and power tools.',
    pros: ['Excellent heat resistance', 'High impact strength', 'Acetone vapor smoothable', 'Easy to machine'],
    cons: ['Requires enclosed chamber printing']
  },
  {
    id: 'petg',
    name: 'PETG (Polyethylene Terephthalate Glycol)',
    shortName: 'PETG',
    category: 'All-Rounder Plastic',
    strength: 8,
    durability: 9,
    flexibility: 5,
    printQuality: 9,
    heatResistance: 'up to 75°C (167°F)',
    applications: ['Outdoor brackets', 'Waterproof containers', 'Mechanical functional parts', 'Chemical resistant guards'],
    description: 'Combines the printability of PLA with the toughness, weatherability, and chemical resistance of ABS.',
    pros: ['High layer adhesion', 'UV & weather resistant', 'Chemical resistant', 'Food-safe options'],
    cons: ['Prone to fine stringing during printing']
  },
  {
    id: 'nylon',
    name: 'Nylon (PA12 / PA6)',
    shortName: 'Nylon',
    category: 'High-Performance Polyamide',
    strength: 9,
    durability: 10,
    flexibility: 7,
    printQuality: 8,
    heatResistance: 'up to 120°C (248°F)',
    applications: ['Functional gears', 'Hinges & snap-fits', 'High-wear bearings', 'Load-bearing mechanical links'],
    description: 'Incredibly tough material with exceptionally low coefficient of friction and phenomenal fatigue resistance.',
    pros: ['Extreme mechanical strength', 'Low friction & high wear resistance', 'Flexible in thin walls', 'Chemical proof'],
    cons: ['Hygroscopic (absorbs moisture)']
  },
  {
    id: 'tpu',
    name: 'TPU (Thermoplastic Polyurethane)',
    shortName: 'TPU',
    category: 'Flexible Elastomer',
    strength: 7,
    durability: 10,
    flexibility: 10,
    printQuality: 7,
    heatResistance: 'up to 80°C (176°F)',
    applications: ['Gaskets & seals', 'Vibration dampeners', 'Robotic bumpers', 'Phone cases & shoes', 'Flexible ducts'],
    description: 'Rubber-like flexible filament capable of stretching and absorbing heavy shocks without tearing.',
    pros: ['High elasticity & shock absorption', 'Resistant to oils & grease', 'Nearly indestructible durability'],
    cons: ['Requires specialized slow printing']
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber Composite (PETG-CF / Nylon-CF)',
    shortName: 'Carbon Fiber',
    category: 'Composite Reinforcement',
    strength: 10,
    durability: 9,
    flexibility: 1,
    printQuality: 9,
    heatResistance: 'up to 150°C (302°F)',
    applications: ['Drone arms', 'Automotive racing brackets', 'Jigs & fixtures', 'Rigid camera mounts'],
    description: 'Reinforced with chopped carbon fiber strands for extreme rigidity, lightweight strength, and matte dark finish.',
    pros: ['Maximum stiffness & tensile strength', 'Lightweight', 'Stealthy matte surface finish', 'Minimal flex under load'],
    cons: ['Higher raw material cost']
  },
  {
    id: 'resin',
    name: 'Photopolymer Resin (SLA/DLP)',
    shortName: 'Resin',
    category: 'Ultra-High Precision',
    strength: 7,
    durability: 6,
    flexibility: 3,
    printQuality: 10,
    heatResistance: 'up to 65°C (149°F)',
    applications: ['Jewelry casting models', 'Miniatures & figurines', 'Dental prototypes', 'Ultra-detailed micro-enclosures'],
    description: 'Liquid resin cured with UV lasers, producing glass-smooth surfaces and microscopically precise features.',
    pros: ['Unmatched surface smoothness', 'Layer lines virtually invisible', 'Ideal for intricate detail'],
    cons: ['Requires wash & UV post-curing']
  },
  {
    id: 'engineering-plastics',
    name: 'Engineering Plastics (Polycarbonate / PEEK)',
    shortName: 'Polycarbonate/PEEK',
    category: 'Specialty Industrial',
    strength: 10,
    durability: 10,
    flexibility: 4,
    printQuality: 8,
    heatResistance: 'up to 200°C+ (392°F)',
    applications: ['Under-hood automotive components', 'Aerospace brackets', 'Flame retardant electrical shields'],
    description: 'Top-tier engineering polymers engineered for harsh temperatures, flame retardancy, and extreme loads.',
    pros: ['Highest heat deflection', 'Flame retardant properties', 'High dielectric strength'],
    cons: ['Requires specialized high-temp hotends']
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'p1',
    title: 'Custom Automotive Intake Manifold Adapter',
    category: 'Mechanical Parts',
    image: partsImg,
    description: 'Carbon Fiber PETG intake manifold flange designed for high temperature and engine bay vibration resistance.',
    material: 'Carbon Fiber PETG',
    turnaround: '24 Hours',
    industry: 'Automotive'
  },
  {
    id: 'p2',
    title: 'Precision Drone Chassis Frame',
    category: 'Functional Prototypes',
    image: heroImg,
    description: 'Ultra-lightweight high-rigidity Nylon-CF quadcopter frame built for high-speed aerodynamics.',
    material: 'Nylon Carbon Fiber',
    turnaround: '36 Hours',
    industry: 'Aerospace / Robotics'
  },
  {
    id: 'p3',
    title: 'Ergonomic Medical Device Housing',
    category: 'Product Mockups',
    image: materialsImg,
    description: 'SLA photopolymer resin enclosure with smooth matte finish for medical diagnostic handheld prototype.',
    material: 'High-Detail Tough Resin',
    turnaround: '48 Hours',
    industry: 'Medical'
  },
  {
    id: 'p4',
    title: 'Replacement Gear Train Assembly',
    category: 'Replacement Components',
    image: partsImg,
    description: 'Reverse-engineered replacement nylon gears for an obsolete commercial printing press.',
    material: 'Self-Lubricating Nylon 12',
    turnaround: '24 Hours',
    industry: 'Manufacturing'
  },
  {
    id: 'p5',
    title: 'Robotic Gripper End-Effector',
    category: 'Engineering Prints',
    image: heroImg,
    description: 'Dual-material 3D print combining rigid PETG core with soft TPU rubber contact grips.',
    material: 'PETG + TPU Flex',
    turnaround: '48 Hours',
    industry: 'Robotics'
  },
  {
    id: 'p6',
    title: 'Custom Smart Watch Charger Dock',
    category: 'Consumer Products',
    image: materialsImg,
    description: 'Sleek dark charcoal desk charger stand with integrated cable routing and non-slip TPU feet.',
    material: 'Matte Black PLA',
    turnaround: '12 Hours',
    industry: 'Consumer Products'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What are your standard turnaround times for 3D printing?',
    answer: 'Standard rapid prototyping orders are typically printed and ready for pickup or shipment within 24 to 48 hours. Expedited same-day service is available for urgent engineering deadlines upon request. Small batch production runs (10–100+ parts) usually ship within 3 to 5 business days.',
    category: 'turnaround'
  },
  {
    id: 'faq-2',
    question: 'How is 3D printing priced at Loop Mold?',
    answer: 'Our pricing is calculated based on total material volume (grams), machine run time, selected material type, and post-processing requirements. We offer transparent estimates with zero hidden setup fees or minimum order penalties.',
    category: 'pricing'
  },
  {
    id: 'faq-3',
    question: 'Which materials do you stock and print with?',
    answer: 'We stock standard thermoplastics like PLA, ABS, and PETG; engineering polymers including Nylon PA12 and Polycarbonate; flexible elastomers (TPU/TPE); high-rigidity Carbon Fiber composites; and high-resolution SLA photopolymer resins.',
    category: 'materials'
  },
  {
    id: 'faq-4',
    question: 'What 3D file formats do you accept for CAD quotes?',
    answer: 'We accept all major 3D CAD file formats including .STL, .STEP (.STP), .IGES (.IGS), .OBJ, .3MF, and native SolidWorks (.SLDPRT) or Fusion 360 files. If you only have 2D drawings or hand sketches, our CAD design team can convert them to 3D for you.',
    category: 'files'
  },
  {
    id: 'faq-5',
    question: 'Do you offer local pickup in Lake Elsinore, California?',
    answer: 'Yes! Local clients in Lake Elsinore, Temecula, Murrieta, Corona, Riverside, and surrounding Southern California regions can select local pickup at our facility. We also ship via UPS/FedEx nationwide.',
    category: 'shipping'
  },
  {
    id: 'faq-6',
    question: 'Can you assist me if my 3D file is not print-ready or broken?',
    answer: 'Absolutely. We offer complete CAD assistance and DFM (Design for Additive Manufacturing) review. We repair mesh errors, adjust tolerances for snap-fits, and optimize wall thickness to guarantee a successful print.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'Is there a minimum order quantity (MOQ)?',
    answer: 'No! There is no minimum order quantity at Loop Mold. Whether you need a single replacement button or 500 custom enclosures, we give every order the same engineering precision.',
    category: 'pricing'
  },
  {
    id: 'faq-8',
    question: 'How do you recreate broken or discontinued replacement parts?',
    answer: 'Through reverse engineering! Bring or send us the broken part. We use high-precision digital calipers and CAD modeling to reconstruct the exact geometry, often reinforcing known failure points so the replacement lasts longer than the original.',
    category: 'general'
  },
  {
    id: 'faq-9',
    question: 'Can you produce large 3D printed components?',
    answer: 'Yes! Our largest single-piece print volume reaches up to 500mm x 500mm x 500mm. For larger assemblies, we split the model with interlocking alignment pins or dovetails and bond them seamlessly.',
    category: 'general'
  },
  {
    id: 'faq-10',
    question: 'What is the difference between FDM and SLA resin printing?',
    answer: 'FDM (Fused Deposition Modeling) extrudes molten thermoplastic filament layer by layer and is ideal for strong, durable functional parts and large prototypes. SLA (Stereolithography) cures liquid resin with light to produce smooth, highly detailed visual models.',
    category: 'materials'
  },
  {
    id: 'faq-11',
    question: 'Can 3D printed parts hold pressure, liquids, or vacuum?',
    answer: 'Yes, when specified! By using materials like PETG or Nylon with increased wall perimeter counts and vapor smoothing or epoxy sealing, we produce watertight and airtight parts.',
    category: 'materials'
  },
  {
    id: 'faq-12',
    question: 'What accuracy and dimensional tolerances can I expect?',
    answer: 'Standard FDM tolerances are within ±0.1mm to ±0.2mm depending on part geometry. High-resolution SLA resin prints hold tight tolerances down to ±0.05mm (50 microns).',
    category: 'general'
  },
  {
    id: 'faq-13',
    question: 'Do you offer post-processing and surface finishing?',
    answer: 'Yes! Options include support removal, media blasting, acetone vapor smoothing (for ABS), heat-set brass threaded insert installation, sanding, priming, and custom painted finishes.',
    category: 'general'
  },
  {
    id: 'faq-14',
    question: 'How do I protect my intellectual property (IP) and proprietary designs?',
    answer: 'We treat all client designs, files, and communications with strict confidentiality. We are happy to execute non-disclosure agreements (NDAs) prior to file submission.',
    category: 'general'
  },
  {
    id: 'faq-15',
    question: 'How do I submit my project for a fast price quote?',
    answer: 'Click the "Request a Quote" button anywhere on our website, fill out your project details, and attach your 3D CAD file. Our team will review your specifications and email you a detailed estimate within hours.',
    category: 'pricing'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Lead Mechanical Engineer',
    company: 'Vance Dynamics',
    content: 'Loop Mold delivered our carbon-fiber motor mounts in under 24 hours. The dimensional accuracy was spot on and allowed us to hit our test bench milestone early. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Sarah Lin',
    role: 'Product Designer',
    company: 'Nexus Design Lab',
    content: 'Finding a local California 3D printing shop that understands DFM and SLA tolerances was a game changer for us. Loop Mold cleaned up our CAD meshes and printed stunning prototypes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Derek Kowalski',
    role: 'Automotive Restorer',
    company: 'SoCal Custom Performance',
    content: 'An obsolete dash clip broke on a rare classic car. Loop Mold reverse-engineered the broken piece and printed 10 ABS replacements in 2 days. Perfect fit!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    role: 'Founder & Inventor',
    company: 'SmartGrip Innovations',
    content: 'As a small business owner launching a new physical product, Loop Mold gave me personalized consultation on material selection. The PETG batch turned out perfect!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];
