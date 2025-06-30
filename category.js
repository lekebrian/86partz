// Category-specific products data
const categoryProducts = {
    engine: [
      {
        id: 101,
        name: "Turbo Upgrade Kit Pro",
        price: 1299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "engine",
        description:
          "Complete turbo upgrade kit with intercooler, piping, and ECU tune. Increases power by 150+ HP with reliable performance for daily driving and track use.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 102,
        name: "Cold Air Intake System",
        price: 329.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "engine",
        description:
          "High-flow cold air intake with washable filter and heat shield. Improves throttle response and adds 15-20 HP with enhanced engine sound.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        ],
      },
      {
        id: 103,
        name: "Performance Exhaust Headers",
        price: 599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "engine",
        description:
          "Stainless steel long-tube headers with ceramic coating. Reduces backpressure and increases power output while improving exhaust note.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 104,
        name: "High-Flow Fuel Injectors",
        price: 449.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "engine",
        description:
          "Precision-engineered fuel injectors for increased fuel delivery. Essential for turbo and supercharged applications requiring higher fuel flow.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 105,
        name: "Performance Camshafts",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "engine",
        description:
          "High-lift performance camshafts for increased valve duration and lift. Optimized for naturally aspirated builds seeking maximum power.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 106,
        name: "Forged Pistons Set",
        price: 1199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "engine",
        description:
          "Forged aluminum pistons with rings and pins. Built to withstand high boost and compression ratios for extreme performance builds.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 107,
        name: "Performance Oil Pump",
        price: 379.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "engine",
        description:
          "High-volume oil pump for improved oil circulation. Essential for high-RPM applications and modified engines requiring increased oil flow.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 108,
        name: "Lightweight Flywheel",
        price: 549.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "engine",
        description:
          "Chromoly steel lightweight flywheel reduces rotational mass by 40%. Improves throttle response and acceleration with precise balance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 109,
        name: "Performance Clutch Kit",
        price: 699.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "engine",
        description:
          "Stage 2 clutch kit with pressure plate and disc. Handles up to 400 HP with smooth engagement and long-lasting performance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 110,
        name: "ECU Tuning Package",
        price: 799.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "engine",
        description:
          "Professional ECU tune with custom mapping. Optimizes fuel and ignition timing for maximum power and reliability with your modifications.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 111,
        name: "Intercooler Upgrade Kit",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "engine",
        description:
          "Front-mount intercooler with piping and couplers. Reduces intake temperatures by 100°F for consistent power delivery under boost.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 112,
        name: "Performance Throttle Body",
        price: 429.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "engine",
        description:
          "Large bore throttle body for increased airflow. CNC-machined from billet aluminum with smooth internal finish for optimal flow.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
    ],
    suspension: [
      {
        id: 201,
        name: "Coilover Suspension Kit",
        price: 1599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "suspension",
        description:
          "Fully adjustable coilover system with 32-way damping adjustment. Height adjustable from 1-3 inches with pillow ball top mounts.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 202,
        name: "Sway Bar Kit Front/Rear",
        price: 449.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "suspension",
        description:
          "Hollow steel sway bars with adjustable end links. Reduces body roll by 60% while maintaining ride comfort for daily driving.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 203,
        name: "Strut Tower Brace",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "suspension",
        description:
          "Aluminum strut tower brace increases chassis rigidity. Improves steering response and reduces flex during cornering.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 204,
        name: "Lowering Springs Set",
        price: 329.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "suspension",
        description:
          "Progressive rate lowering springs drop vehicle 1.5 inches. Maintains OEM ride quality while improving handling and appearance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 205,
        name: "Adjustable Control Arms",
        price: 699.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "suspension",
        description:
          "Adjustable rear control arms with spherical bearings. Allows precise camber and toe adjustment for track alignment settings.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 206,
        name: "Performance Shocks Set",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "suspension",
        description:
          "Gas-charged performance shocks with rebound adjustment. Designed for lowered vehicles with improved damping characteristics.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 207,
        name: "Camber Adjustment Kit",
        price: 249.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "suspension",
        description:
          "Front and rear camber plates for precise alignment. Essential for lowered vehicles to achieve proper tire contact patch.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 208,
        name: "Polyurethane Bushing Kit",
        price: 179.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "suspension",
        description:
          "Complete polyurethane bushing replacement kit. Eliminates suspension deflection and improves handling precision.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 209,
        name: "Adjustable Toe Arms",
        price: 399.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "suspension",
        description:
          "Rear adjustable toe arms with rod ends. Allows precise toe adjustment for improved straight-line stability and tire wear.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 210,
        name: "Roll Center Adjusters",
        price: 299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "suspension",
        description:
          "Front roll center adjustment kit corrects geometry on lowered vehicles. Improves handling balance and reduces understeer.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 211,
        name: "Traction Bars",
        price: 349.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "suspension",
        description:
          "Rear traction bars eliminate wheel hop during acceleration. Essential for high-power applications and drag racing.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 212,
        name: "Chassis Reinforcement Kit",
        price: 599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "suspension",
        description:
          "Complete chassis bracing package with floor bars and tunnel brace. Increases torsional rigidity by 40% for improved handling.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
    ],
    brakes: [
      {
        id: 301,
        name: "Big Brake Kit Front",
        price: 1899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "brakes",
        description:
          "6-piston front brake kit with 355mm rotors. Provides exceptional stopping power with fade resistance for track use.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 302,
        name: "Performance Brake Pads",
        price: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "brakes",
        description:
          "Ceramic brake pads with low dust formula. Provides consistent braking performance with reduced noise and wheel dust.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 303,
        name: "Slotted Brake Rotors",
        price: 299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "brakes",
        description:
          "Cross-drilled and slotted rotors improve heat dissipation. Reduces brake fade and maintains consistent pedal feel.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 304,
        name: "Stainless Brake Lines",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "brakes",
        description:
          "Stainless steel braided brake lines improve pedal feel. Eliminates line expansion under pressure for consistent braking.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 305,
        name: "Performance Brake Fluid",
        price: 24.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "brakes",
        description:
          "DOT 4 high-temperature brake fluid with 500°F dry boiling point. Essential for track use and high-performance applications.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 306,
        name: "Forged Aluminum Wheels",
        price: 2199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "wheels",
        description:
          "Lightweight forged wheels reduce unsprung weight by 8 lbs per wheel. Available in multiple finishes and sizes.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 307,
        name: "Track Brake Pads",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "brakes",
        description:
          "High-friction track pads for racing applications. Provides maximum stopping power with excellent fade resistance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 308,
        name: "Brake Cooling Ducts",
        price: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "brakes",
        description:
          "Front brake cooling ducts direct airflow to rotors. Reduces brake temperatures by 200°F during track sessions.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 309,
        name: "Master Cylinder Upgrade",
        price: 399.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "brakes",
        description:
          "Larger bore master cylinder for big brake kits. Maintains proper pedal travel and feel with upgraded calipers.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 310,
        name: "Brake Proportioning Valve",
        price: 179.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "brakes",
        description:
          "Adjustable brake bias valve for fine-tuning brake balance. Essential for cars with front/rear brake upgrades.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 311,
        name: "Racing Wheel Set",
        price: 1599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "wheels",
        description:
          "Flow-formed racing wheels with optimized spoke design. Lightweight construction with maximum strength for track use.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 312,
        name: "Brake Caliper Paint Kit",
        price: 49.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "brakes",
        description:
          "High-temperature brake caliper paint withstands 500°F. Available in multiple colors with primer and clear coat.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
    ],
    exterior: [
      {
        id: 401,
        name: "Carbon Fiber Hood",
        price: 1299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior",
        description:
          "Lightweight carbon fiber hood reduces weight by 15 lbs. Features functional vents for improved engine cooling and aerodynamics.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 402,
        name: "Front Splitter Kit",
        price: 599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior",
        description:
          "Aerodynamic front splitter increases downforce by 50 lbs at 100 mph. Includes mounting hardware and installation guide.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 403,
        name: "Rear Wing Spoiler",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "exterior",
        description:
          "Adjustable rear wing with multiple angle settings. Provides significant downforce for high-speed stability and cornering.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 404,
        name: "Side Skirt Extensions",
        price: 449.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "exterior",
        description:
          "Aerodynamic side skirts improve airflow management. Reduces lift and enhances vehicle stability at speed.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 405,
        name: "LED Headlight Conversion",
        price: 799.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "exterior",
        description:
          "Complete LED headlight conversion with DRL integration. 300% brighter than halogen with modern appearance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 406,
        name: "Carbon Fiber Mirrors",
        price: 399.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior",
        description:
          "Carbon fiber mirror covers with glossy finish. Direct replacement for OEM covers with weight reduction.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 407,
        name: "Rear Diffuser",
        price: 699.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior",
        description:
          "Functional rear diffuser improves aerodynamic efficiency. Reduces drag and increases rear downforce for better stability.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 408,
        name: "Fender Flares Kit",
        price: 549.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "exterior",
        description:
          "Wide-body fender flares accommodate larger wheels and tires. Aggressive styling with functional tire clearance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 409,
        name: "Carbon Fiber Trunk",
        price: 999.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "exterior",
        description:
          "Lightweight carbon fiber trunk lid with integrated spoiler. Reduces rear weight and improves weight distribution.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 410,
        name: "Canards Set",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "exterior",
        description:
          "Front canards increase front downforce and improve turn-in response. Adjustable angle for fine-tuning aerodynamics.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 411,
        name: "Vortex Generators",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior",
        description:
          "Roof-mounted vortex generators improve rear spoiler efficiency. Reduces drag and increases rear stability at speed.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 412,
        name: "Window Tint Kit",
        price: 299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior",
        description:
          "Premium ceramic window tint blocks 99% UV rays. Reduces interior heat and provides privacy with legal compliance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
    ],
    interior: [
      {
        id: 501,
        name: "Racing Seat Pair",
        price: 1599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "interior",
        description:
          "FIA-approved racing seats with 6-point harness compatibility. Lightweight carbon fiber shell with premium upholstery.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 502,
        name: "Roll Cage Kit",
        price: 1299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "interior",
        description:
          "Bolt-in roll cage meets SCCA specifications. Increases chassis rigidity while providing safety protection for track use.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 503,
        name: "Carbon Fiber Dashboard",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "interior",
        description:
          "Carbon fiber dashboard overlay with perfect fitment. Transforms interior appearance with lightweight construction.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 504,
        name: "Quick Release Steering Wheel",
        price: 399.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "interior",
        description:
          "350mm suede steering wheel with quick release hub. Provides excellent grip and professional racing feel.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 505,
        name: "Digital Gauge Cluster",
        price: 1199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "interior",
        description:
          "Full-color digital dashboard with customizable displays. Shows all engine parameters with data logging capability.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 506,
        name: "Short Shifter Kit",
        price: 249.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "interior",
        description:
          "Reduces shift throw by 40% with improved feel. Precision-machined components with adjustable height.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 507,
        name: "Harness Bar",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "interior",
        description:
          "Bolt-in harness bar for 4-point racing harnesses. Provides proper mounting angle for safety harness installation.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 508,
        name: "Aluminum Pedal Set",
        price: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "interior",
        description:
          "Billet aluminum pedals with anti-slip surface. Direct bolt-on replacement with racing-inspired design.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 509,
        name: "Fire Extinguisher Mount",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "interior",
        description:
          "Quick-release fire extinguisher mount for track safety. Meets racing organization requirements with easy access.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 510,
        name: "Window Net",
        price: 79.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "interior",
        description:
          "SFI-approved window net for racing safety. Quick-release mechanism with proper mounting hardware included.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 511,
        name: "ECU Tuning Interface",
        price: 599.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "interior",
        description:
          "Professional ECU tuning software and interface cable. Allows custom tuning and real-time parameter adjustment.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 512,
        name: "Data Logger System",
        price: 899.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "interior",
        description:
          "Advanced data logging system with GPS and accelerometer. Records all vehicle parameters for performance analysis.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
    ],
    "interior-accessories": [
      {
        id: 601,
        name: "Custom Floor Mat Set",
        price: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "interior-accessories",
        description:
          "Premium all-weather floor mats with custom logo embroidery. Laser-measured fit with anti-slip backing.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 602,
        name: "LED Interior Lighting Kit",
        price: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "interior-accessories",
        description:
          "Complete LED interior lighting conversion with multiple colors. App-controlled with music sync capability.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 603,
        name: "Seat Covers Set",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "interior-accessories",
        description: "Premium leather seat covers with custom stitching. Perfect fit with easy installation and removal.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 604,
        name: "Dashboard Camera",
        price: 179.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "interior-accessories",
        description: "4K dashboard camera with night vision and GPS. Loop recording with emergency file protection.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 605,
        name: "Phone Mount System",
        price: 49.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "interior-accessories",
        description: "Magnetic phone mount with wireless charging. Adjustable viewing angle with secure magnetic hold.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 606,
        name: "Trunk Organizer",
        price: 79.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "interior-accessories",
        description:
          "Collapsible trunk organizer with multiple compartments. Prevents cargo movement with non-slip base.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 607,
        name: "Sunshade Set",
        price: 39.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "interior-accessories",
        description:
          "Custom-fit sunshades for all windows. Reduces interior temperature and protects upholstery from UV damage.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 608,
        name: "Air Freshener System",
        price: 29.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "interior-accessories",
        description:
          "Automatic air freshener with multiple scent options. Long-lasting fragrance with adjustable intensity.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 609,
        name: "Cup Holder Insert",
        price: 24.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "interior-accessories",
        description: "Custom cup holder inserts with LED illumination. Perfect fit with multiple size accommodations.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 610,
        name: "Steering Wheel Cover",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "interior-accessories",
        description:
          "Premium leather steering wheel cover with hand-stitched seams. Improves grip and comfort during driving.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 611,
        name: "Gear Shift Knob",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "interior-accessories",
        description:
          "Weighted aluminum shift knob with custom engraving. Improves shift feel with temperature-resistant coating.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 612,
        name: "Door Sill Plates",
        price: 119.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "interior-accessories",
        description:
          "Illuminated door sill plates with custom logo. LED lighting with motion activation and battery backup.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
    ],
    "exterior-accessories": [
      {
        id: 701,
        name: "Car Cover Premium",
        price: 199.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior-accessories",
        description:
          "Custom-fit car cover with UV protection and water resistance. Breathable fabric prevents moisture buildup.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 702,
        name: "License Plate Frame",
        price: 29.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior-accessories",
        description:
          "Carbon fiber license plate frame with GT86Partz logo. Lightweight construction with corrosion resistance.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 703,
        name: "Mud Flap Set",
        price: 79.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "exterior-accessories",
        description:
          "Rally-style mud flaps with custom logo. Protects paint from road debris with flexible construction.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 704,
        name: "Antenna Delete Kit",
        price: 39.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "exterior-accessories",
        description:
          "Clean antenna delete plug for streamlined appearance. Color-matched finish with perfect OEM fitment.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 705,
        name: "Vinyl Decal Kit",
        price: 89.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "exterior-accessories",
        description:
          "Professional vinyl decal kit with racing stripes. High-quality material with easy application and removal.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 706,
        name: "Tow Hook Kit",
        price: 49.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior-accessories",
        description: "Lightweight aluminum tow hook for track use. Anodized finish with proper thread pitch for safety.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 707,
        name: "Side Marker Lights",
        price: 69.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior-accessories",
        description:
          "LED side marker lights with sequential turn signal. Plug-and-play installation with modern styling.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 708,
        name: "Door Handle Covers",
        price: 59.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        category: "exterior-accessories",
        description:
          "Carbon fiber door handle covers with 3M adhesive. Easy installation with perfect fitment and finish.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        ],
      },
      {
        id: 709,
        name: "Fog Light Kit",
        price: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
        category: "exterior-accessories",
        description:
          "LED fog light kit with wiring harness and switch. Improves visibility in adverse weather conditions.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        ],
      },
      {
        id: 710,
        name: "Wheel Spacers Set",
        price: 129.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
        category: "exterior-accessories",
        description:
          "Hub-centric wheel spacers for improved stance. Precision-machined with extended wheel bolts included.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095632-gny62T74vJWNJc2t6zPixhpCTVboya.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
      {
        id: 711,
        name: "Paint Protection Film",
        price: 299.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
        category: "exterior-accessories",
        description: "Clear paint protection film for high-impact areas. Self-healing technology with 10-year warranty.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095649-gkXhL32UCKZhpZfyrXnx1PulIBg7Ld.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        ],
      },
      {
        id: 712,
        name: "Emblem Badge Set",
        price: 39.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
        category: "exterior-accessories",
        description:
          "Custom GT86Partz emblems for front and rear. High-quality construction with strong adhesive backing.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095707-9KFl9PRl1G7eF2ec54aQDze5sgqf8n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095619-HU1Marh9RnUaFif1f88Gcglr9IKt3V.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20095548-cdxFVAKSIVU7Amr4ijKKLZHpk71tne.png",
        ],
      },
    ],
  }
  
  let currentCategory = ""
  let currentPage = 1
  const productsPerPage = 5
  
  function initializeCategoryPage(category) {
    currentCategory = category
    currentPage = 1
    loadCategoryProducts()
    updateCartCount()
    setupAnimations()
    setupEventListeners()
  }
  
  function loadCategoryProducts() {
    const container = document.getElementById("categoryProducts")
    if (!container) return
  
    const products = categoryProducts[currentCategory] || []
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    const displayProducts = products.slice(startIndex, endIndex)
  
    container.innerHTML = displayProducts
      .map(
        (product, index) => `
          <div class="product-card animate-fade-up" style="animation-delay: ${index * 0.1}s">
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <div class="product-info">
                  <h3 class="product-title">${product.name}</h3>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-actions">
                      <button class="btn btn-outline btn-small" onclick="showProductDetail(${product.id})">
                          See Details
                      </button>
                      <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                          Add to Cart
                      </button>
                  </div>
              </div>
          </div>
      `,
      )
      .join("")
  
    updatePagination()
  }
  
  function updatePagination() {
    const products = categoryProducts[currentCategory] || []
    const totalPages = Math.ceil(products.length / productsPerPage)
  
    const page1Btn = document.getElementById("page1")
    const page2Btn = document.getElementById("page2")
  
    if (page1Btn && page2Btn) {
      page1Btn.classList.toggle("active", currentPage === 1)
      page2Btn.classList.toggle("active", currentPage === 2)
  
      page2Btn.style.display = totalPages > 1 ? "block" : "none"
    }
  }
  
  function changePage(page) {
    const products = categoryProducts[currentCategory] || []
    const totalPages = Math.ceil(products.length / productsPerPage)
  
    if (page >= 1 && page <= totalPages) {
      currentPage = page
      loadCategoryProducts()
  
      // Scroll to top of products
      document.getElementById("categoryProducts").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  
  function showProductDetail(productId) {
    // Find product in all categories
    let product = null
    for (const category in categoryProducts) {
      product = categoryProducts[category].find((p) => p.id === productId)
      if (product) break
    }
  
    if (!product) return
  
    // Create modal if it doesn't exist
    let modal = document.getElementById("productDetailModal")
    if (!modal) {
      modal = document.createElement("div")
      modal.id = "productDetailModal"
      modal.className = "product-detail"
      document.body.appendChild(modal)
    }
  
    modal.innerHTML = `
          <div class="product-detail-content">
              <div class="product-detail-header">
                  <h2>${product.name}</h2>
                  <button class="close-detail" onclick="closeProductDetail()">
                      <i class="fas fa-times"></i>
                  </button>
              </div>
              <div class="product-detail-body">
                  <div class="product-images">
                      ${product.images.map((img) => `<img src="${img}" alt="${product.name}">`).join("")}
                  </div>
                  <div class="product-price">$${product.price}</div>
                  <p class="product-description">${product.description}</p>
                  <div class="quantity-controls">
                      <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                      <input type="number" value="1" min="1" class="quantity-input" id="productQuantity">
                      <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                  </div>
                  <div class="product-actions">
                      <button class="btn btn-primary" onclick="addToCartWithQuantity(${product.id})">
                          Add to Cart
                      </button>
                      <button class="btn btn-outline" onclick="closeProductDetail()">
                          Back to Catalog
                      </button>
                  </div>
              </div>
          </div>
      `
  
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
  
  function closeProductDetail() {
    const modal = document.getElementById("productDetailModal")
    if (modal) {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    }
  }
  
  function changeQuantity(change) {
    const input = document.getElementById("productQuantity")
    if (input) {
      const currentValue = Number.parseInt(input.value)
      const newValue = Math.max(1, currentValue + change)
      input.value = newValue
    }
  }
  
  function addToCart(productId, quantity = 1) {
    // Find product in all categories
    let product = null
    for (const category in categoryProducts) {
      product = categoryProducts[category].find((p) => p.id === productId)
      if (product) break
    }
  
    if (!product) return
  
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const existingItem = cart.find((item) => item.id === productId)
  
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({
        ...product,
        quantity: quantity,
      })
    }
  
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
    showNotification(`${product.name} added to cart!`)
  }
  
  function addToCartWithQuantity(productId) {
    const quantityInput = document.getElementById("productQuantity")
    const quantity = quantityInput ? Number.parseInt(quantityInput.value) : 1
    addToCart(productId, quantity)
    closeProductDetail()
  }
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const cartCount = document.querySelector(".cart-count")
    if (cartCount) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
      cartCount.textContent = totalItems
    }
  }
  
  function showNotification(message) {
    const notification = document.createElement("div")
    notification.style.cssText = `
          position: fixed;
          top: 100px;
          right: 20px;
          background: var(--accent-color);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-lg);
          z-index: 3000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
      `
    notification.textContent = message
  
    document.body.appendChild(notification)
  
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)
  
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }
  
  function setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"
        }
      })
    }, observerOptions)
  
    document.querySelectorAll(".animate-fade-up, .animate-slide-right, .animate-slide-left").forEach((el) => {
      el.style.animationPlayState = "paused"
      observer.observe(el)
    })
  }
  
  function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.getElementById("hamburger")
    const mobileMenu = document.getElementById("mobileMenu")
  
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        mobileMenu.classList.toggle("active")
      })
    }
  
    // Mobile dropdown toggles
    const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn")
    mobileDropdownBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling
        content.classList.toggle("active")
  
        const icon = this.querySelector("i")
        icon.style.transform = content.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)"
      })
    })
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mobileMenu &&
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.classList.remove("active")
        mobileMenu.classList.remove("active")
      }
    })
  
    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const email = this.querySelector(".newsletter-input").value
        if (email) {
          alert("Thank you for subscribing to our newsletter!")
          this.reset()
        }
      })
    }
  }
  
  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("productDetailModal")
    if (modal && modal.classList.contains("active") && e.target === modal) {
      closeProductDetail()
    }
  })
  
  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductDetail()
      const mobileMenu = document.getElementById("mobileMenu")
      const hamburger = document.getElementById("hamburger")
      if (mobileMenu && mobileMenu.classList.contains("active")) {
        hamburger.classList.remove("active")
        mobileMenu.classList.remove("active")
      }
    }
  })
  