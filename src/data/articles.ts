import { Article } from '../types';

export const articles: Article[] = [
  {
    id: "art-1",
    title: "Climate-Smart Farming Techniques: Enhancing Crop Resilience Under Thermal Stress",
    slug: "climate-smart-farming-techniques-thermal-stress",
    category: "Climate Change Adaptation",
    author: "Dr. P. Sathiyapriya",
    authorAffiliation: "Department of Crop Production and Agronomy, Tamil Nadu Agricultural University",
    coAuthors: ["Dr. T. Sanker", "R. Manivel"],
    date: "January 19, 2026",
    readTime: "8 min read",
    abstract: "Thermal extremes and erratic precipitation patterns present escalating threats to global food systems. This paper examines climate-smart agronomic interventions—including micro-irrigation scheduling, multi-tier agroforestry, and stress-tolerant cultivar integration—that measurably stabilize grain yield while sequestering soil organic carbon in tropical agricultural belts.",
    keywords: ["Climate Resilience", "Agronomy", "Micro-Irrigation", "Carbon Sequestration", "Thermal Stress"],
    tags: ["Climate Resilience", "Agronomy", "Micro-Irrigation", "Carbon Sequestration"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0601",
    views: 1840,
    downloadsCount: 480,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Thermal anomalies and precipitation unpredictability are severely constraining traditional cropping calendars across tropical and subtropical agro-ecosystems. Under business-as-usual scenarios, baseline crop yields of cereal staples are projected to decline by 12–18% by mid-century without deliberate climate adaptation. Climate-smart agriculture (CSA) systematically addresses three intertwined objectives: sustainably increasing agricultural productivity and incomes; adapting and building resilience to climate change; and reducing greenhouse gas emissions where feasible.",
      methodology: "Field experiments were conducted across four consecutive cropping seasons (2022–2025) across randomized complete block design plots. Treatments evaluated solar-powered deficit drip systems (0.8 ETc), shade tree microclimates (Gliricidia sepium alley cropping at 6m x 3m), and traditional vs. climate-resilient millet varieties.",
      results: "Deficit micro-irrigation delivered water savings of 42% alongside an 18% boost in nitrogen use efficiency compared to conventional border irrigation. Agroforestry canopy cover moderated peak canopy temperatures by 3.2°C during severe heatwaves, while soil organic carbon in the 0–15 cm horizon accumulated at an annual rate of 0.45 t C/ha.",
      discussion: "The synergy between agroforestry microclimates and precision water application cushions physiological stomatal conductance during midday vapor pressure deficits. This prevents cellular oxidative stress in flowering cereals.",
      conclusion: "Integrating climate-smart micro-irrigation with leguminous agroforestry provides an accessible, high-return adaptation pathway for smallholder farmers vulnerable to monsoonal delays."
    },
    figures: [
      {
        id: "fig-1",
        caption: "Figure 1: Mean diurnal canopy temperature profiles across agroforestry vs. open field plots during peak summer (May 2025).",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
      }
    ],
    tables: [
      {
        id: "tab-1",
        title: "Table 1: Agronomic Water Productivity and Yield Performance under Contrasting Irrigation Regimes",
        headers: ["Irrigation Treatment", "Water Applied (mm)", "Grain Yield (t/ha)", "Water Productivity (kg/m³)"],
        rows: [
          ["Conventional Flood", "850", "4.12", "0.48"],
          ["Standard Drip (1.0 ETc)", "560", "4.85", "0.86"],
          ["Deficit Drip (0.8 ETc)", "480", "4.78", "0.99"]
        ]
      }
    ],
    references: [
      { id: 1, text: "FAO (2024). The State of Food and Agriculture: Climate-smart solutions in dryland tropics. Food and Agriculture Organization, Rome." },
      { id: 2, text: "Sanker, T. & Sathiyapriya, P. (2023). Deficit micro-irrigation protocols for tropical deltas. Agrodiversity Magazine, 3(7), 45-58." },
      { id: 3, text: "Lal, R. (2020). Soil organic matter content and climate resilience in smallholder agriculture. Geoderma, 368, 114285." }
    ]
  },
  {
    id: "art-2",
    title: "Advances in Crop Genetics and Breeding: Harnessing Wild Relatives for Durable Resistance",
    slug: "advances-crop-genetics-wild-relatives",
    category: "Plant Biotechnology and Breeding",
    author: "Dr. B. Ramya",
    authorAffiliation: "Department of Crop Improvement, Center for Plant Breeding and Genetics",
    coAuthors: ["Dr. A. Nahadevan", "K. Soundararajan"],
    date: "January 19, 2026",
    readTime: "11 min read",
    abstract: "Crop wild relatives (CWR) harbor indispensable genetic reservoirs of biotic and abiotic stress endurance lost through millennia of domestication bottlenecks. We review genomic-assisted introgression pathways, marker-assisted recurrent selection, and QTL mapping applied to wild Oryza and Vigna accessions.",
    keywords: ["Crop Genetics", "Wild Relatives", "QTL Mapping", "Plant Breeding", "Marker-Assisted Selection"],
    tags: ["Crop Genetics", "Wild Relatives", "QTL Mapping", "Plant Breeding"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0602",
    views: 2190,
    downloadsCount: 560,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Modern elite cultivars, while exceptionally high-yielding under optimal chemical inputs, frequently display narrow genetic bases that make them vulnerable to emerging biotypes of pests and soil-borne pathogens. Crop wild relatives (CWR) represent unmined reservoirs of evolutionary adaptation accumulated across hostile natural habitats.",
      methodology: "A systematic review of 86 peer-reviewed introgression trials published between 2018 and 2025, complemented by original whole-genome resequencing data from wild Oryza nivara and Vigna radiata var. sublobata germplasm accessions.",
      results: "Broad-spectrum brown planthopper (Nilaparvata lugens) resistance genes (Bph14, Bph18) introgressed from wild Oryza nivara conferred durable resistance without yield penalties. In blackgram, bruchid-resistant alleles (Br1, Br2) were successfully tagged and validated with flanking SNP markers.",
      discussion: "Linkage drag remains the central bottleneck in wild germplasm utilization. The advent of CRISPR-Cas-mediated target site editing and nested association mapping (NAM) populations now enables precise excision of unfavorable linkage blocks.",
      conclusion: "Systematic pre-breeding consortiums between public genebanks and field breeders are essential to fast-track wild relative alleles into commercial climate-resilient cultivar pipelines."
    },
    figures: [
      {
        id: "fig-2",
        caption: "Figure 1: Genomic schematic of marker-assisted introgression pathways utilizing backcross populations (BC3F2).",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800"
      }
    ],
    tables: [
      {
        id: "tab-2",
        title: "Table 1: Successfully Introgressed Stress-Tolerance Genes from Crop Wild Relatives into Elite Cultivars",
        headers: ["Target Crop", "Wild Donor Accession", "Introgressed Locus", "Conferred Trait"],
        rows: [
          ["Oryza sativa (Rice)", "Oryza nivara", "Bph14 / Bph18", "Brown Planthopper Resistance"],
          ["Oryza sativa (Rice)", "Oryza rufipogon", "Saltol QTL", "Seedling Stage Salinity Tolerance"],
          ["Vigna mungo (Blackgram)", "Vigna radiata var. sublobata", "Br1 / Br2", "Storage Pest (Bruchid) Resistance"]
        ]
      }
    ],
    references: [
      { id: 1, text: "Ramya, B. et al. (2024). Pre-breeding strategies for wild relative exploitation in grain legumes. Journal of Agricultural Genomics, 12(3), 112-127." },
      { id: 2, text: "Dempewolf, H. et al. (2017). Adapting agriculture to climate change: A global investment in crop wild relatives. Plant Genetic Resources, 15(1), 1-12." }
    ]
  },
  {
    id: "art-3",
    title: "Soil Health and Nutrient Management: Microbial Consortia and Carbon Dynamics",
    slug: "soil-health-nutrient-management-microbial-consortia",
    category: "Soil and Water Management",
    author: "Mr. A. Partiban",
    authorAffiliation: "Department of Soil Science and Natural Farming Systems",
    coAuthors: ["S. Muthukumar", "V. Rajesh"],
    date: "January 19, 2026",
    readTime: "7 min read",
    abstract: "Long-term soil degradation stems from chemical imbalance and biological impoverishment. This field study evaluates native mycorrhizal fungi (AMF), phosphate-solubilizing bacteria (PSB), and bio-enriched compost in restoring cation exchange capacity and microbial biomass carbon.",
    keywords: ["Soil Health", "Microbial Consortia", "Biofertilizers", "Nutrient Cycling", "Organic Carbon"],
    tags: ["Soil Health", "Microbial Consortia", "Biofertilizers", "Nutrient Cycling"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0603",
    views: 1420,
    downloadsCount: 390,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Healthy soil is a living biological ecosystem containing billions of microorganisms in every handful. Decades of heavy synthetic fertilization have depleted soil organic matter (SOM) in intensively cropped alluvial and red soil belts, resulting in surface crusting and nutrient leaching.",
      methodology: "A 3-year split-plot field experiment evaluated four soil amendments: (T1) 100% Recommended Chemical NPK; (T2) 75% NPK + Farmyard Manure (FYM 5 t/ha); (T3) 50% NPK + Microbial Consortium (Glomus intraradices + Azospirillum + Bacillus megaterium); (T4) Full Organic Bio-enriched compost.",
      results: "Plots treated with microbial consortia and 5 t/ha enriched farmyard manure showed a 34% increase in microbial biomass carbon within 180 days, with available phosphorus increasing by 22% through biological solubilization without additional rock phosphate inputs.",
      discussion: "Glomus mycorrhizal hyphae form expansive underground networks that solubilize immobilized soil nutrients while synthesizing glomalin, an insoluble glycoprotein that binds mineral particles into stable macro-aggregates.",
      conclusion: "Bio-priming degraded soils with microbial consortia enables a 30–40% reduction in chemical phosphate fertilizer application while revitalizing biological vitality."
    },
    references: [
      { id: 1, text: "Partiban, A. & Rajesh, V. (2024). Biological indices of soil health in tropical agro-ecosystems. Soil Biology & Biochemistry, 189, 109281." },
      { id: 2, text: "Lehmann, J. & Kleber, M. (2015). The contentious nature of soil organic matter. Nature, 528(7580), 60-68." }
    ]
  },
  {
    id: "art-4",
    title: "Organic and Natural Farming Practices: Transitioning Away from Synthetic Chemical Inputs",
    slug: "organic-natural-farming-practices-transition",
    category: "Sustainable Crop Production",
    author: "Mr. Naveen Irudhayam",
    authorAffiliation: "Department of Plant Protection — Entomology & Pathology",
    coAuthors: ["Mrs. D. Ananthanayahi"],
    date: "January 19, 2026",
    readTime: "9 min read",
    abstract: "Transitioning to zero-synthetic natural farming systems presents short-term yield uncertainties but long-term profitability. This comparative study tracks economic returns, pest population dynamics, and beneficial insect biodiversity across 40 transitioning family farms over three seasons.",
    keywords: ["Natural Farming", "Organic Agriculture", "Agroecology", "Beneficial Insects", "Economic Sustainability"],
    tags: ["Natural Farming", "Organic Agriculture", "Agroecology", "Pest Management"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0604",
    views: 1670,
    downloadsCount: 430,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Rising input expenditures for synthetic fertilizers, fungicides, and synthetic pyrethroids have contributed to growing indebtedness among smallholder farmers. Agro-ecological natural farming offers an autonomous alternative grounded in closed-loop farm biological nutrient recycling.",
      methodology: "A longitudinal cohort study tracked 40 contiguous smallholdings in Tamil Nadu transitioning from high-input chemical agriculture to bio-formulation based natural farming protocols (Jeevamarutha, Beejamrutha, and botanical decoctions).",
      results: "Initial season grain yields dropped by 11.2%, but fully rebounded by Season 3. Total production expenditure decreased by 48.6%, resulting in an average net benefit-cost ratio increase from 1.62 to 2.18.",
      discussion: "The rapid recovery of predatory spiders (Lycosidae) and ladybird beetles (Coccinellidae) established a natural biological check on sucking pests, rendering expensive systemic insecticides unnecessary.",
      conclusion: "Natural farming provides smallholders with financial insulation against global input price shocks while restoring on-farm ecological equilibrium."
    },
    references: [
      { id: 1, text: "Irudhayam, N. (2023). Natural predatory population recovery in zero-budget farming systems. Indian Journal of Entomology, 85(4), 412-420." },
      { id: 2, text: "Altieri, M. A. (2018). Agroecology: The science of sustainable agriculture. CRC Press, Boca Raton." }
    ]
  },
  {
    id: "art-5",
    title: "AI, IoT and Precision Farming: Empowering Smallholder Agriculture",
    slug: "ai-iot-precision-farming-smallholders",
    category: "Farmer-Centric Innovations",
    author: "A. Shankar",
    authorAffiliation: "Postgraduate Scholar in Crop Science & Digital Agriculture Cell",
    coAuthors: ["Mr. B. Sathiyaraja"],
    date: "January 19, 2026",
    readTime: "7 min read",
    abstract: "Artificial Intelligence and Internet of Things (IoT) technologies are rapidly moving from large industrial estates to smallholder farms. We showcase open-hardware soil moisture probes, smartphone leaf spectral analyzers, and automated micro-valves engineered for affordable rural deployment.",
    keywords: ["AI Agriculture", "IoT Sensors", "Precision Farming", "Appropriate Technology", "Digital Extension"],
    tags: ["AI in Agriculture", "IoT Sensors", "Precision Farming", "Appropriate Technology"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0605",
    views: 2310,
    downloadsCount: 640,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Digital agriculture is widely acknowledged as the next frontier of agrarian productivity. However, commercial proprietary IoT platforms remain cost-prohibitive for the world's 500 million smallholder farm households.",
      methodology: "We evaluated ESP32 microcontroller arrays paired with capacitive soil moisture sensors and optical edge-AI cameras deploying lightweight MobileNet models for real-time foliar pest identification directly on farmer smartphones without cellular internet dependencies.",
      results: "The open-source sensor kit, assembled for under $35 USD, decreased irrigation water consumption by 32% across 25 vegetable polyhouses and enabled detection of early-stage powdery mildew with 92.4% accuracy.",
      discussion: "Democratizing hardware designs through open-source licensing allows rural polytechnics and youth farmer collectives to fabricate and service localized precision kits autonomously.",
      conclusion: "Low-cost edge-computing tools bridge the digital divide in agriculture, transforming data into accessible daily agronomic guidance for rural smallholders."
    },
    references: [
      { id: 1, text: "Shankar, A. & Sathiyaraja, B. (2025). Edge-AI diagnostics for rural horticultural belts. Journal of Agricultural Informatics, 16(2), 77-89." }
    ]
  },
  {
    id: "art-6",
    title: "Agro-biodiversity in Eastern Ghats: Conservation of Indigenous Millet Landraces",
    slug: "agro-biodiversity-eastern-ghats-millets",
    category: "Agro-biodiversity Conservation",
    author: "Mrs. D. Ananthanayahi",
    authorAffiliation: "Agricultural Extension and Farmer Innovation, Center for Farmer Innovation & Extension",
    coAuthors: ["Dr. B. Ramya", "M. Palaniswamy"],
    date: "November 18, 2022",
    readTime: "8 min read",
    abstract: "Participatory ethnobotanical survey cataloging 24 rare indigenous finger millet and little millet ecotypes cultivated by tribal communities in Kolli Hills and Javadi Hills, evaluating their nutritional density and drought coping mechanisms.",
    keywords: ["Agro-biodiversity", "Millets", "Indigenous Knowledge", "Conservation", "Tribal Farming"],
    tags: ["Agro-biodiversity", "Millets", "Indigenous Knowledge", "Conservation"],
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2022.0201",
    views: 1340,
    downloadsCount: 315,
    published: true,
    issueId: "iss-2022-02",
    issueTitle: "Volume 2, Issue 04 — 2022",
    sections: {
      introduction: "The Eastern Ghats region of southern India represents a global biodiversity hotspot characterized by rich indigenous agro-ecosystems. Indigenous tribal farmers have conserved drought-hardy, pest-resistant millet landraces over centuries through traditional seed-saving systems.",
      methodology: "Participatory rural appraisal (PRA) combined with nutritional assays (calcium, iron, dietary fiber) across 24 localized landraces collected from 18 remote tribal hamlets.",
      results: "Landrace 'Karunganni Ragi' demonstrated remarkable tolerance to 28-day dry spells while exhibiting 348 mg/100g calcium content—nearly 30% higher than modern hybrid check varieties.",
      discussion: "Community seed banks emerged as the single most vital operational mechanism for continuous in-situ preservation, ensuring farmers maintain ownership over genetic heritage.",
      conclusion: "Policy recognition and minimum support prices for indigenous millet landraces are urgent imperatives to prevent genetic erosion in tribal biodiversity hubs."
    },
    references: [
      { id: 1, text: "Ananthanayahi, D. & Ramya, B. (2022). Ethnobotanical catalog of dryland millets in Tamil Nadu. Agrodiversity Magazine, 2(4), 18-32." }
    ]
  },
  {
    id: "art-7",
    title: "Precision Water Management in Rice Systems: Alternate Wetting and Drying (AWD)",
    slug: "precision-water-management-rice-awd",
    category: "Soil and Water Management",
    author: "Dr. T. Sanker",
    authorAffiliation: "Department of Agronomy",
    coAuthors: ["Dr. P. Sathiyapriya"],
    date: "July 22, 2023",
    readTime: "7 min read",
    abstract: "Quantifying methane emission abatement and water productivity gains under perforated field water tube (Pani Pipe) AWD regimes in irrigated lowland rice tracts.",
    keywords: ["Water Stewardship", "Rice Systems", "AWD", "Methane Reduction", "Water Productivity"],
    tags: ["Water Stewardship", "Rice Systems", "AWD", "Methane Reduction"],
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2023.0302",
    views: 1450,
    downloadsCount: 360,
    published: true,
    issueId: "iss-2023-03",
    issueTitle: "Volume 3, Issue 07 — 2023",
    sections: {
      introduction: "Conventional continuously flooded rice paddies consume approximately 3,000 to 5,000 liters of fresh water to produce one single kilogram of milled rice, simultaneously contributing significant quantities of anthropogenic methane gas.",
      methodology: "Field trials deploying perforated PVC Pani Pipes installed at 15 cm depth in deltaic paddy soils across 60 farmer participatory demonstration plots.",
      results: "Irrigation water usage was curtailed by 28% without yield reduction, while closed-chamber gas chromatography confirmed a 38% drop in seasonal methane emissions.",
      discussion: "Aerobic soil pauses between irrigation events stimulate deeper rice root branching and suppress anaerobic methanogenic archaea in the rhizosphere.",
      conclusion: "Scaling AWD through community irrigation canals offers dual benefits of regional groundwater replenishment and national climate mitigation commitments."
    },
    references: [
      { id: 1, text: "Sanker, T. (2023). Methane mitigation in irrigated lowland paddy. Environmental Agronomy Letters, 9(1), 12-25." }
    ]
  },
  {
    id: "art-8",
    title: "Grassroots Farmer Innovations: Low-Cost Solar Seed Dryers and Modified Weeder Attachments",
    slug: "grassroots-farmer-innovations-solar-dryer",
    category: "Farmer-Centric Innovations",
    author: "Mrs. D. Ananthanayahi",
    authorAffiliation: "Agricultural Extension and Farmer Innovation",
    coAuthors: ["Mr. B. Sathiyaraja", "K. Ramanathan (Farmer-Innovator)"],
    date: "March 15, 2024",
    readTime: "6 min read",
    abstract: "Documenting field-validated machinery adaptations conceptualized by practicing grassroots farmers: an affordable polycarbonate convective solar dryer and an ergonomic motorized cono-weeder.",
    keywords: ["Farmer Innovation", "Appropriate Technology", "Post-Harvest", "Mechanization", "Rural Engineering"],
    tags: ["Farmer Innovation", "Appropriate Technology", "Post-Harvest", "Mechanization"],
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2024.0401",
    views: 1720,
    downloadsCount: 460,
    published: true,
    issueId: "iss-2024-04",
    issueTitle: "Volume 4, Issue 03 — 2024",
    sections: {
      introduction: "Farmer-led grassroots engineering frequently solves acute operational bottlenecks that industrial farm equipment manufacturers overlook due to scale or cost assumptions.",
      methodology: "Technical assessment of physical throughput, drying uniformity, moisture curves, and ergonomic energy expenditure for two farmer-fabricated machines in Thanjavur district.",
      results: "The convective solar dryer reduced paddy moisture from 22% to 12% in under 18 hours without grain breakage. The motorized weeder decreased manual weeding labor by 65% in System of Rice Intensification (SRI) fields.",
      discussion: "Grassroots innovations are uniquely matched to local soil conditions and farm micro-topographies. Institutional patenting and fabrication grants can scale these designs rapidly.",
      conclusion: "Agrodiversity Magazine remains committed to validating, documenting, and honoring practicing farmer-inventors on academic publishing platforms."
    },
    references: [
      { id: 1, text: "Ramanathan, K. & Ananthanayahi, D. (2024). Farm-level solar drying systems for paddy. Agrodiversity Magazine, 4(3), 8-15." }
    ]
  },
  {
    id: "art-9",
    title: "Biotechnology & Endophytic Microbes for Biotic Stress Alleviation in Solanaceous Crops",
    slug: "biotechnology-endophytic-microbes-solanaceous",
    category: "Plant Biotechnology and Breeding",
    author: "Dr. A. Nahadevan",
    authorAffiliation: "Department of Horticulture and Vegetable Science",
    coAuthors: ["Mr. Naveen Irudhayam"],
    date: "September 10, 2025",
    readTime: "9 min read",
    abstract: "Investigating bacterial and fungal endophytes isolated from wild tomato accessions (Solanum pimpinellifolium) that elicit systemic acquired resistance against Ralstonia solanacearum bacterial wilt.",
    keywords: ["Biotechnology", "Endophytes", "Systemic Resistance", "Horticulture", "Bacterial Wilt"],
    tags: ["Biotechnology", "Endophytes", "Systemic Resistance", "Horticulture"],
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2025.0502",
    views: 1290,
    downloadsCount: 330,
    published: true,
    issueId: "iss-2025-05",
    issueTitle: "Volume 5, Issue 09 — 2025",
    sections: {
      introduction: "Bacterial wilt caused by Ralstonia solanacearum remains one of the most devastating and difficult-to-control soil-borne pathogens affecting tomatoes, brinjals, and chili peppers globally.",
      methodology: "Metagenomic profiling of endophytic strains isolated from asymptomatic wild Solanum pimpinellifolium accessions, followed by root dip inoculation of susceptible commercial tomato seedlings.",
      results: "Bacillus amyloliquefaciens strain AG-8 demonstrated 78% protection against vascular wilt symptoms by priming plant salicylic and jasmonic acid defensive signaling cascades.",
      discussion: "Endophytes inhabit plant vascular tissues without inciting disease, actively synthesizing antimicrobial lipopeptides that inhibit pathogen colonization in xylem vessels.",
      conclusion: "Formulating stable endophytic microbial seed coatings provides a chemical-free, durable shield for protected horticulture."
    },
    references: [
      { id: 1, text: "Nahadevan, A. & Irudhayam, N. (2025). Endophytic biocontrol of Ralstonia in solanaceous vegetables. Phytopathology Reports, 115(8), 940-952." }
    ]
  },
  {
    id: "art-10",
    title: "Agro-Ecological Plant Protection: Biological Suppression of Fall Armyworm (Spodoptera frugiperda)",
    slug: "biological-suppression-fall-armyworm",
    category: "Sustainable Crop Production",
    author: "Mr. Naveen Irudhayam",
    authorAffiliation: "Department of Plant Protection — Entomology & Pathology",
    coAuthors: ["Dr. B. Ramya", "A. Shankar"],
    date: "January 19, 2026",
    readTime: "8 min read",
    abstract: "Assessing parasitoid mass releases (Trichogramma chilonis) and entomopathogenic fungi (Nomuraea rileyi) in maize fields across southern peninsular India.",
    keywords: ["Plant Protection", "Biological Control", "Entomology", "Crop Health", "Fall Armyworm"],
    tags: ["Plant Protection", "Biological Control", "Entomology", "Crop Health"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
    doi: "10.5281/agrodiversity.2026.0601",
    views: 1120,
    downloadsCount: 290,
    published: true,
    issueId: "iss-2026-01",
    issueTitle: "Volume 6, Issue 01 — 2026",
    sections: {
      introduction: "Since its invasive arrival in India, the Fall Armyworm has caused widespread economic damage to maize and sorghum crops. Synthetic broad-spectrum pesticides often lead to rapid pest resistance and toxic residues.",
      methodology: "A longitudinal multi-village trial across 12 demonstration clusters evaluating early whorl placement of Trichogramma egg parasitoids combined with spray applications of entomopathogenic fungus Nomuraea rileyi.",
      results: "Biological treatments maintained larval leaf damage below the economic injury threshold of 10%, achieving parity with chemical insecticide controls while preserving native spider and predator populations.",
      discussion: "Entomopathogenic fungi penetrate larval cuticles directly, providing effective control even against older instars hidden within maize whorls.",
      conclusion: "Area-wide community biological control protocols represent the most sustainable long-term defense against invasive crop pests."
    },
    references: [
      { id: 1, text: "Irudhayam, N. et al. (2026). Area-wide biocontrol of Spodoptera frugiperda in peninsular India. Biological Control Review, 41, 104-118." }
    ]
  }
];
