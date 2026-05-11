// ============================================================
// app/news/data.ts
// SalesKR 뉴스룸 기사 데이터 (영문 베이스 · 4개 기사)
// ============================================================

export interface NewsArticle {
  id: string;
  date: string;
  dateDisplay: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  listImage: string;
  mainImage: string;
  image2: string;
  image2Caption: string;
  image3: string;
  image3Caption: string;
  stats: { value: string; label: string }[];
  pullquote: string;
  pullquoteAuthor: string;
  lead: string;
  sections: { heading: string; paragraphs: string[] }[];
  conclusionHeading: string;
  conclusionParagraphs: string[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
    // ──────────────────────────────────────────────────────────
  // 기사 5 · PARTNERSHIP · 2026-05-11
  // ──────────────────────────────────────────────────────────
  {
    id: "saleskr-gudai-global-partnership-2026",
    date: "2026-05-11",
    dateDisplay: "MAY 11, 2026",
    category: "PARTNERSHIP",

    title: "SalesKR Secures Official Sourcing Partnership with Gudai Global",
    subtitle:
      "A landmark direct sourcing agreement with Gudai Global unlocks authentic access to Beauty of Joseon, SKIN1004, TIRTIR, and Dr. Nineteen — positioning SalesKR as a premier K-Beauty gateway for Latin America, CIS, Hong Kong, and Africa.",
    excerpt:
      "SalesKR has officially established a direct sourcing partnership with Gudai Global, securing authenticated supply of some of Korea's most sought-after skincare brands. This milestone agreement marks a significant expansion of SalesKR's global distribution capabilities and its commitment to delivering genuine, trend-leading K-Beauty products to emerging markets worldwide.",

    listImage: "/images/gudai-partnership-hero.png",
    mainImage: "/images/gudai-partnership-hero.png",
    image2:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    image2Caption:
      "Gudai Global's portfolio includes some of Korea's most globally recognized skincare brands, now available through SalesKR with full authenticity guarantees and direct sourcing documentation.",
    image3:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80",
    image3Caption:
      "Latin America and emerging markets represent the next major frontier for K-Beauty growth. SalesKR's new partnership infrastructure is purpose-built to serve these high-growth regions with speed, compliance, and competitive pricing.",

    stats: [
      { value: "4",    label: "Brands Secured"         },
      { value: "6+",   label: "Target Markets"         },
      { value: "24hr", label: "Inquiry Response Time"  },
    ],

    pullquote:
      '"This partnership is not just about adding brands to our portfolio. It is about giving our global buyers the confidence that every product they source through SalesKR is authentic, compliant, and backed by a direct relationship with the brand headquarters."',
    pullquoteAuthor: "Jung, Yong Chul — CEO, SalesKR",

    lead:
      "SalesKR is proud to announce the official establishment of a direct sourcing partnership with Gudai Global, the brand company behind some of the most recognized and fastest-growing names in Korean skincare — Beauty of Joseon, SKIN1004, TIRTIR, and the emerging derma-cosmetic label Dr. Nineteen. This agreement represents one of the most significant milestones in SalesKR's history as a global K-Beauty distributor, transforming the company's sourcing model from indirect procurement to fully authenticated, brand-headquarters-direct supply. For SalesKR's international buyer network spanning 47 countries, this means a fundamentally more reliable, more transparent, and more competitive supply chain for some of the world's most in-demand Korean skincare products.",

    sections: [
      {
        heading: "What This Partnership Means for Global Buyers",
        paragraphs: [
          "The Korean beauty export market is increasingly defined by the challenge of authenticity. As global demand for brands like Beauty of Joseon, SKIN1004, and TIRTIR has surged, so too has the volume of parallel imports, grey-market product, and counterfeit goods entering international channels. For importers, distributors, and retail buyers, sourcing from unverified intermediaries carries significant risk — not just in terms of product quality and regulatory compliance, but in terms of brand reputation with end consumers who have become increasingly sophisticated in identifying inauthentic product.",
          "SalesKR's direct sourcing agreement with Gudai Global eliminates this risk entirely. Under the terms of the partnership, all products supplied by SalesKR through this agreement are sourced directly from Gudai Global's brand headquarters in Korea. This means that every unit shipped carries the full chain-of-custody documentation required by importers in markets with strict authenticity and origin requirements, including certificates of origin, brand authorization letters, and Korean FDA registration documentation where applicable.",
          "For buyers who have previously relied on indirect sourcing channels for these brands, the SalesKR-Gudai Global partnership offers a clear upgrade path: direct pricing with no additional intermediary margins, documented authenticity that satisfies customs and retail compliance requirements, and a single point of contact for all supply, documentation, and logistics needs.",
          "Beyond the immediate supply benefits, the partnership also gives SalesKR buyers priority access to new product launches, limited edition collections, and seasonal SKUs from the Gudai Global brand portfolio — a meaningful advantage in markets where being first to shelf with trending Korean skincare products drives significant retail performance.",
        ],
      },
      {
        heading: "Strategic Focus: Latin America, CIS, Hong Kong, and Africa",
        paragraphs: [
          "While SalesKR's existing distribution network spans 47 countries across Asia Pacific, Europe, North America, and the Middle East, this partnership is specifically designed to accelerate growth in four high-priority emerging market regions: Latin America, CIS countries, Hong Kong, and Africa.",
          "Latin America represents perhaps the most compelling opportunity. Consumer awareness of Korean skincare has grown dramatically in markets including Mexico, Brazil, Colombia, and Chile, driven by social media influence, the global expansion of K-pop culture, and the increasing availability of Korean products in regional specialty retail chains. However, the supply chain infrastructure to support consistent, authenticated sourcing of Korean products into Latin America has historically lagged behind consumer demand. SalesKR's Gudai Global partnership addresses this gap directly, providing the documentation, compliance support, and logistics coordination that Latin American importers need to bring authentic K-Beauty brands to market at scale.",
          "The CIS region — encompassing Russia, Kazakhstan, Ukraine, and neighboring markets — has historically been an important but complex market for Korean beauty exports. Regulatory requirements vary significantly between countries, and the documentation burden for product registration can be substantial. SalesKR's experience in navigating complex export documentation, combined with the brand-direct sourcing relationship established through the Gudai Global partnership, positions the company to serve CIS buyers with a level of compliance support that few Korean distributors can match.",
          "In Hong Kong, the partnership strengthens SalesKR's ability to compete in one of Asia's most sophisticated and brand-conscious beauty markets. Hong Kong consumers are among the most knowledgeable K-Beauty buyers in the world, and brand authenticity is a non-negotiable baseline expectation. The Gudai Global partnership provides the verified sourcing credentials that Hong Kong retailers and distributors require.",
          "Africa represents the longest-term opportunity in SalesKR's emerging market strategy. Rising middle-class consumer spending, growing urban retail infrastructure, and increasing exposure to global beauty trends through digital channels are creating the conditions for significant K-Beauty growth across Sub-Saharan Africa, North Africa, and East Africa. SalesKR is establishing the supply chain foundations now — through partnerships like the one with Gudai Global — to be positioned as the leading K-Beauty source when these markets reach full scale.",
        ],
      },
      {
        heading: "Introducing Dr. Nineteen: Derma-Cosmetic Innovation for Emerging Markets",
        paragraphs: [
          "A particularly significant element of the Gudai Global partnership is SalesKR's introduction of Dr. Nineteen to its global distribution portfolio. Dr. Nineteen is a derma-cosmetic brand that has been specifically developed to address the functional skincare needs of emerging market consumers — combining the clinical efficacy credentials that define Korea's premium derma-cosmetic segment with an accessible price positioning that makes high-performance skincare available to a broader consumer base.",
          "The brand's core philosophy is grounded in the belief that effective skincare should not be a luxury. Dr. Nineteen's formulations are developed with the same rigorous approach to ingredient science that characterizes Korea's leading derma-cosmetic labels — active concentrations validated for efficacy, minimal fragrance and irritant profiles, and clinical testing documentation — but at a price point and packaging specification that is deliberately designed for mass-market retail in price-sensitive markets.",
          "Key categories in the Dr. Nineteen range include barrier-repair moisturizers, niacinamide-centered brightening serums, CICA-based soothing treatments, and broad-spectrum SPF products formulated for tropical climates. This product mix is particularly well-aligned with the most prevalent skincare concerns in Latin America and Africa: hyperpigmentation from sun exposure, humidity-related skin congestion, and the need for lightweight yet effective daily protection.",
          "For SalesKR buyers in Mexico, Brazil, Colombia, and South Africa, Dr. Nineteen represents an opportunity to offer clinically credible Korean skincare at a retail price point that can achieve meaningful mass-market penetration — a combination that has proven successful in analogous markets across Southeast Asia over the past three years.",
          "SalesKR will provide full brand introduction support for Dr. Nineteen, including product education materials, ingredient documentation, retail merchandising guidance, and clinical reference summaries for buyers who need to present the brand to pharmacy and drugstore buyers in their markets.",
        ],
      },
      {
        heading: "Compliance and Market-Specific Distribution Strategy",
        paragraphs: [
          "One of the defining characteristics of SalesKR's approach to international distribution is the company's commitment to compliance-first supply chain management. This is particularly important in markets like Mexico, where the Federal Commission for Protection against Sanitary Risk (COFEPRIS) requires product registration and import licensing for cosmetics before retail sale. SalesKR's team is fully equipped to assist buyers with the documentation process required for COFEPRIS registration, including providing the certificates of free sale, Good Manufacturing Practice documentation, and product formulation data that the registration process requires.",
          "It is also important to be transparent about the distribution framework within which the Gudai Global partnership operates. Certain brands within the Gudai Global portfolio maintain exclusive distribution agreements in specific retail channels — particularly large-format retail chains and department store groups. In markets where such exclusivity arrangements are in place, SalesKR works closely with each buyer to clearly define and verify the local distribution channels being targeted, ensuring that all supply arrangements are fully compliant with the brand's channel policies.",
          "This channel verification process is not a barrier to doing business — it is a protection for buyers. By ensuring that each SalesKR buyer is operating within a clearly defined and brand-approved distribution channel, we protect our buyers from the risk of future channel conflicts that could disrupt their business. SalesKR's compliance framework is designed to create sustainable, long-term supply relationships rather than short-term transactional opportunities that may later create legal or commercial complications.",
          "For buyers in markets with complex import regulatory environments, SalesKR offers a dedicated compliance consultation service as part of its partnership onboarding process. This includes a review of the target market's cosmetics import requirements, identification of any product-specific registration needs, and a timeline assessment for bringing the Gudai Global portfolio brands to retail-ready status in the buyer's market.",
        ],
      },
      {
        heading: "SalesKR's Commitment to Authentic, Long-Term K-Beauty Supply",
        paragraphs: [
          "The Gudai Global partnership is the latest in a series of strategic sourcing relationships that SalesKR has built since its establishment in 2019. Over that period, the company has grown from a focused Korean cosmetics trading operation into a comprehensive multi-category export platform, serving verified importers, distributors, and retail buyers across 47 countries with a portfolio spanning more than 70 Korean brands in cosmetics, K-food, and health supplements.",
          "What has remained constant throughout that growth is SalesKR's foundational commitment to authenticity. In a market increasingly complicated by grey-market supply, counterfeit product, and unauthorized parallel imports, SalesKR's value proposition is built on the opposite: verified sourcing, documented authenticity, and supply relationships that can withstand the scrutiny of the most demanding retail and regulatory environments.",
          "The Gudai Global partnership strengthens this proposition meaningfully. By securing direct brand-headquarters sourcing for Beauty of Joseon, SKIN1004, TIRTIR, and Dr. Nineteen, SalesKR is adding four of the most globally in-demand Korean skincare brands to its authenticated portfolio — and making them available to buyers in emerging markets that have historically struggled to access these brands through legitimate supply channels.",
          "For international buyers who are serious about building a sustainable K-Beauty business in their markets, SalesKR's direct brand partnerships offer something that the grey market cannot: reliability, compliance, and a supply relationship built to last.",
        ],
      },
    ],

    conclusionHeading: "Partner with SalesKR — Your Direct Gateway to Authentic K-Beauty",
    conclusionParagraphs: [
      "SalesKR welcomes direct inquiries from importers, distributors, and retail buyers in Latin America, CIS countries, Hong Kong, Africa, and all other target markets. Whether you are looking to introduce Beauty of Joseon, SKIN1004, or TIRTIR to your market for the first time, or to explore the opportunity with the Dr. Nineteen derma-cosmetic brand, our team is ready to provide full product catalogs, pricing proposals, compliance documentation, and sample arrangements.",
      "With over a decade of experience in global distribution and parallel export of Korean cosmetics and food products, SalesKR continues to connect international buyers with authentic, trend-leading K-beauty brands. We are committed to providing authentic products sourced directly from Korea, competitive pricing and flexible supply solutions, and market-specific strategies for long-term growth. Contact us at www.saleskr.com or reach our team directly for wholesale inquiries and global partnership opportunities. We look forward to building a long-term supply relationship with your business.",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 기사 1 · MARKET · 2026-03-18
  // ──────────────────────────────────────────────────────────
  {
    id: "k-beauty-trends-2026",
    date: "2026-03-18",
    dateDisplay: "MAR 18, 2026",
    category: "MARKET",

    title: "2026 K-Beauty Trends: Functionality, Clean Beauty, and Global Expansion",
    subtitle:
      "Global consumers now demand proven skincare effectiveness, transparent ingredients, and ethical values — and Korean brands are leading the way.",
    excerpt:
      "In 2026, the Korean cosmetics industry is evolving beyond traditional trends to focus on high functionality and sustainability. SalesKR is actively identifying and supplying competitive brands to meet rising global demand.",

    listImage:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1400&q=85",
    image2:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80",
    image2Caption:
      "Key ingredients such as Niacinamide, CICA, and Peptides are now global standards in premium skincare formulations.",
    image3:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
    image3Caption:
      "K-Beauty products are expanding shelf space in global retailers, from Southeast Asia to North America and Europe.",

    stats: [
      { value: "70+",  label: "Brands Available"   },
      { value: "47",   label: "Export Countries"    },
      { value: "38%",  label: "YoY Demand Growth"   },
    ],

    pullquote:
      '"K-Beauty in 2026 is no longer about trends. It is about science-backed performance, clean formulations, and consistent results that global consumers trust."',
    pullquoteAuthor: "SalesKR Market Intelligence Team",

    lead:
      "In 2026, the Korean cosmetics industry is undergoing a fundamental transformation. The era of novelty-driven K-Beauty trends is giving way to a more mature, performance-focused market — one where global consumers demand proven efficacy, transparent ingredient lists, and alignment with ethical values such as vegan certification and cruelty-free production. SalesKR is at the forefront of this shift, curating and supplying the most competitive brands to meet the evolving needs of international buyers.",

    sections: [
      {
        heading: "The Rise of Derma-Cosmetics and Functional Skincare",
        paragraphs: [
          "The fastest-growing segment of the Korean beauty market in 2026 is derma-cosmetics — products that bridge the gap between pharmaceuticals and cosmetics. Brands in this category focus on clinically validated ingredients that deliver measurable improvements in skin tone, texture, and barrier function. Global dermatologists and beauty editors have taken notice, with derma-cosmetic products now commanding premium shelf positions in pharmacies across Europe, Australia, and the United States.",
          "Niacinamide remains the most searched skincare ingredient globally for the third consecutive year, praised for its brightening, pore-minimizing, and anti-inflammatory properties. CICA (Centella Asiatica) continues to dominate the soothing and barrier-repair segment, particularly among consumers recovering from over-exfoliation or sensitive skin conditions. Peptides, meanwhile, are increasingly featured in anti-aging lines targeting the growing 35–55 age demographic in North America and Europe.",
          "SalesKR has built a specialized portfolio of brands excelling in these categories, offering verified sourcing, stable supply chains, and competitive minimum order quantities for international distributors and importers.",
        ],
      },
      {
        heading: "Clean Beauty and Vegan Certification: No Longer Optional",
        paragraphs: [
          "Consumer expectations around ingredient transparency have fundamentally changed. In key markets including Germany, the United Kingdom, and Australia, a significant proportion of beauty buyers now check ingredient labels before purchase. The demand for vegan, cruelty-free, and free-from formulations (free from parabens, sulfates, and synthetic fragrances) has moved from niche to mainstream.",
          "Korean brands have responded faster than their Western counterparts. The Korean cosmetics regulatory framework already requires full ingredient disclosure on all products, giving K-Beauty brands a structural advantage when entering markets with strict labeling requirements. Several SalesKR partner brands have obtained both PETA vegan certification and EU Cosmos Organic status, making them directly eligible for distribution in premium European retail channels.",
          "For global buyers, this means that sourcing through SalesKR provides not just product quality, but regulatory readiness — a critical factor in accelerating time-to-shelf in markets with complex import requirements.",
        ],
      },
      {
        heading: "What Global Buyers Should Know for 2026",
        paragraphs: [
          "The competitive landscape for K-Beauty sourcing is shifting. Brands that were affordable alternatives two years ago are now premium players with waiting lists. Early partnership agreements with verified Korean distributors like SalesKR offer buyers first-mover access to emerging brands before they reach mass-market saturation.",
          "SalesKR provides end-to-end sourcing support: from brand selection and sample procurement to export documentation, customs classification, and logistics coordination. Buyers in the derma-cosmetic and clean beauty segments are encouraged to contact SalesKR directly for customized sourcing proposals tailored to their target market and retail channel.",
        ],
      },
    ],

    conclusionHeading: "The Opportunity Ahead",
    conclusionParagraphs: [
      "The 2026 K-Beauty market represents one of the most compelling sourcing opportunities in global beauty. Brands with strong clinical credentials, clean formulations, and scalable production capacity are in high demand — and supply remains constrained. Buyers who establish direct procurement partnerships now will be best positioned to meet consumer demand through 2027 and beyond.",
      "Contact SalesKR for wholesale inquiries and global partnership opportunities. Our team is available to provide product catalogs, pricing, and sample arrangements within 24 hours.",
    ],
  },


  // ──────────────────────────────────────────────────────────
  // 기사 2 · GLOBAL · 2026-02-05
  // ──────────────────────────────────────────────────────────
  {
    id: "saleskr-global-expansion-2026",
    date: "2026-02-05",
    dateDisplay: "FEB 05, 2026",
    category: "GLOBAL",

    title: "SalesKR Expands Global Distribution Network and Business Portfolio",
    subtitle:
      "From Korean cosmetics to premium Kimchi and health supplements — SalesKR strengthens direct buyer partnerships worldwide.",
    excerpt:
      "Since its establishment in 2019, SalesKR has grown into a specialized leader in the distribution and trade of Korean food and cosmetics. We are now expanding direct partnerships with global buyers and developing Ready-to-eat Kimchi product lines.",

    listImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85",
    image2:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
    image2Caption:
      "SalesKR's logistics network supports stable, fast delivery to verified importers and distributors across 47 countries.",
    image3:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    image3Caption:
      "SalesKR's direct partnership model eliminates unnecessary intermediaries, enabling competitive pricing for global buyers.",

    stats: [
      { value: "70+",  label: "Korean Brands"       },
      { value: "47",   label: "Countries Reached"   },
      { value: "2019", label: "Founded"              },
    ],

    pullquote:
      '"Our strength is not just what we supply — it is how reliably and how fast we supply it. That consistency is what global buyers come back for."',
    pullquoteAuthor: "Jung, Yong Chul — CEO, SalesKR",

    lead:
      "Since its establishment in 2019, SalesKR has built a reputation as one of Korea's most reliable B2B distributors for Korean food and cosmetics. What began as a focused cosmetics trading operation has evolved into a multi-category export platform, now encompassing premium Kimchi products, health supplement sourcing, and OEM manufacturing coordination. In 2026, the company is accelerating its expansion strategy with a clear focus on direct buyer partnerships and ready-to-eat Korean food product development.",

    sections: [
      {
        heading: "A Multi-Category Business Built for Global Demand",
        paragraphs: [
          "SalesKR's core business today spans three distinct verticals. The first and largest is Korean cosmetics distribution — currently offering more than 70 verified Korean cosmetic brands across skincare, color cosmetics, and functional beauty categories. These brands are sourced directly from Korean manufacturers, allowing SalesKR to offer competitive pricing, reliable stock availability, and fast order fulfillment.",
          "The second vertical is Korean food export, centered on the company's premium Kimchi portfolio. SalesKR supplies both traditional fermented Kimchi and a growing range of ready-to-eat (RTE) Kimchi products developed specifically for international retail and food service channels. The RTE line addresses the practical needs of overseas consumers who want authentic Korean fermented products without specialized preparation knowledge.",
          "The third vertical is health supplement sourcing, including OEM manufacturing support for buyers who wish to develop private-label Korean health and wellness products. SalesKR coordinates with certified Korean manufacturers to handle formulation development, packaging design, regulatory documentation, and export logistics from a single point of contact.",
        ],
      },
      {
        heading: "Why Direct Partnerships Are the Company's Strategic Priority",
        paragraphs: [
          "The traditional Korean export model — manufacturer to trading company to master distributor to regional importer — adds cost and lead time at every layer. SalesKR's strategic priority in 2026 is to eliminate unnecessary intermediaries by establishing direct procurement relationships with importers, retailers, and wholesale buyers in each target market.",
          "This direct model benefits buyers in three measurable ways: lower landed cost per unit due to reduced margin layers, faster response time for custom orders and sample requests, and more direct access to product information, regulatory documentation, and manufacturer support. SalesKR's team is available to respond to all wholesale inquiries within 24 hours — a service standard that reflects the company's commitment to treating buyers as long-term partners.",
        ],
      },
      {
        heading: "2026 Expansion: Key Markets and Product Focus",
        paragraphs: [
          "SalesKR's primary focus markets for 2026 expansion are China, Hong Kong, Australia, New Zealand, the United States, and Europe. These markets have been selected based on existing buyer relationships, demonstrated demand for Korean products, and regulatory frameworks favorable to Korean cosmetics and food imports.",
          "On the product side, the company is prioritizing its ready-to-eat Kimchi line for food service and specialty grocery channels in Australia and the United States, and its derma-cosmetic brand portfolio for pharmacy and premium beauty retail in Europe. The health supplement OEM service is being positioned for buyers in Southeast Asia, where demand for Korean-manufactured wellness products is growing rapidly.",
        ],
      },
    ],

    conclusionHeading: "Partner with SalesKR",
    conclusionParagraphs: [
      "SalesKR welcomes direct inquiries from importers, distributors, and retail buyers across all categories. Whether you are looking to introduce Korean cosmetics to your market, source premium Kimchi for your food service operation, or develop a private-label Korean health product, our team is ready to provide product catalogs, pricing proposals, and sample arrangements.",
      "Contact us for wholesale inquiries and global partnership opportunities. We look forward to building a long-term supply relationship with your business.",
    ],
  },


  // ──────────────────────────────────────────────────────────
  // 기사 3 · INDUSTRY · 2026-01-14
  // ──────────────────────────────────────────────────────────
  {
    id: "korean-ingredients-global-2026",
    date: "2026-01-14",
    dateDisplay: "JAN 14, 2026",
    category: "INDUSTRY",

    title: "Why Korean Cosmetic Ingredients Are Gaining Global Attention",
    subtitle:
      "CICA, Niacinamide, Peptides, and fermented actives — the science behind K-Beauty's ingredient advantage explained.",
    excerpt:
      "The core strength of K-Beauty lies in its advanced ingredient technology. Key ingredients such as CICA, Niacinamide, and Peptides have become global standards. SalesKR sources high-performance products that incorporate these cutting-edge ingredients.",

    listImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1400&q=85",
    image2:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    image2Caption:
      "Korean cosmetics R&D labs invest heavily in ingredient innovation, resulting in formulations that outperform global competitors in clinical testing.",
    image3:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80",
    image3Caption:
      "Products featuring fermented actives and bio-fermentation technology are among the fastest-growing categories in global prestige skincare.",

    stats: [
      { value: "#1",  label: "Niacinamide Search Rank" },
      { value: "62%", label: "SPF Demand Growth 2025"  },
      { value: "5K+", label: "Active Ingredient Patents" },
    ],

    pullquote:
      '"Korean cosmetic science does not follow global trends — it creates them. The ingredients that define modern skincare were pioneered in Korean R&D labs."',
    pullquoteAuthor: "SalesKR Product Sourcing Team",

    lead:
      "Ask any global beauty editor, dermatologist, or skincare-obsessed consumer to name the most innovative cosmetics market in the world today, and the answer is almost invariably Korea. But the dominance of K-Beauty is not built on marketing alone. It is built on ingredient science — a deep, sustained investment in bioactive compounds, fermentation technology, and clinical validation that has made Korean cosmetic formulations the benchmark for efficacy worldwide.",

    sections: [
      {
        heading: "CICA: The Soothing Ingredient That Went Global",
        paragraphs: [
          "Centella Asiatica — universally known in the beauty industry as CICA — is a medicinal herb that has been used in Korean and Southeast Asian traditional medicine for centuries. Its application in modern cosmetics, however, is a Korean innovation. Korean formulators were the first to isolate and standardize the four key active compounds in Centella Asiatica (asiaticoside, madecassoside, asiatic acid, and madecassic acid) at concentrations high enough to produce measurable clinical results.",
          "The result is a generation of soothing, barrier-repairing products that have become essential for consumers dealing with sensitivity, rosacea, post-procedure recovery, and the widespread skin damage caused by over-reliance on aggressive exfoliants. CICA-based products from Korean brands now account for a significant share of the global soothing skincare segment, with particular strength in pharmacies across France, Germany, and the United Kingdom.",
          "SalesKR supplies multiple CICA-focused brands across different price tiers, from mass-market options suitable for pharmacy retail to premium derma-cosmetic formulations for medical aesthetics channels.",
        ],
      },
      {
        heading: "Niacinamide and Peptides: The Workhorses of Modern Skincare",
        paragraphs: [
          "Niacinamide (Vitamin B3) has been the most globally searched skincare ingredient for three consecutive years. Its multi-functional profile — brightening, pore-refining, oil-controlling, and barrier-strengthening — makes it applicable across virtually every skin type and concern. Korean brands were among the first to formulate niacinamide at the clinically validated 5–10% concentration range in stable, sensory-elegant textures, establishing a product standard that the global market has since adopted.",
          "Peptides represent the premium end of functional skincare. These short chains of amino acids signal the skin to produce collagen, elastin, and other structural proteins that diminish with age. Korean peptide formulations are distinguished by their use of proprietary delivery systems — including liposome encapsulation and bio-fermentation processing — that significantly improve penetration depth and efficacy compared to conventional peptide products.",
        ],
      },
      {
        heading: "Fermentation Technology: Korea's Signature Advantage",
        paragraphs: [
          "Perhaps the most distinctive Korean contribution to global cosmetics is the application of bio-fermentation technology to skincare actives. The fermentation process — applied to ingredients ranging from galactomyces to rice, red ginseng, and black bean — produces smaller molecular structures that penetrate the skin barrier more effectively, and generates beneficial byproducts such as amino acids, enzymes, and probiotics that enhance the skin's natural microbiome.",
          "This technology, which has roots in Korea's centuries-old fermentation food culture, has been refined by Korean cosmetics companies into a proprietary advantage that is extraordinarily difficult for competitors to replicate. The result is a category of products — fermented essences, yeast-based serums, and probiotic moisturizers — that consistently rank among the highest-rated products in global skincare reviews.",
        ],
      },
    ],

    conclusionHeading: "Sourcing the Best of Korean Ingredient Science",
    conclusionParagraphs: [
      "For global buyers, the opportunity is clear: Korean cosmetic brands combining rigorous ingredient science with competitive pricing and scalable production represent the most compelling sourcing proposition in global beauty. The challenge is identifying the right brands and establishing reliable supply chains.",
      "SalesKR specializes in precisely this. Our sourcing team evaluates brands on ingredient quality, manufacturing standards, regulatory compliance, and export capability — so that the products you receive are market-ready from day one. Contact us for wholesale inquiries and global partnership opportunities.",
    ],
  },


  // ──────────────────────────────────────────────────────────
  // 기사 4 · K-FOOD · 2026-01-03
  // ──────────────────────────────────────────────────────────
  {
    id: "kimchi-global-superfood-2026",
    date: "2026-01-03",
    dateDisplay: "JAN 03, 2026",
    category: "K-FOOD",

    title: "Kimchi: More Than Food, A Global Superfood",
    subtitle:
      "Scientifically proven gut health benefits, rich probiotics, and authentic Korean fermentation — SalesKR delivers premium Kimchi to global markets.",
    excerpt:
      "Kimchi, Korea's traditional fermented dish, is now globally celebrated as a premier superfood. SalesKR delivers authentic Korean food culture to global markets through our premium Kimchi selection and ready-to-eat product lines.",

    listImage:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
    mainImage:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1400&q=85",
    image2:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80",
    image2Caption:
      "Traditional Korean fermentation processes produce Kimchi with complex probiotic profiles that modern science has confirmed deliver measurable gut health benefits.",
    image3:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    image3Caption:
      "Premium Kimchi, crafted with high-quality napa cabbage and traditional fermentation, is now a staple ingredient in health-focused kitchens worldwide.",

    stats: [
      { value: "1B+",  label: "Probiotic CFU per Serve" },
      { value: "18+",  label: "Vitamins & Minerals"     },
      { value: "40%",  label: "Global Demand Growth"    },
    ],

    pullquote:
      '"Kimchi is not a side dish anymore. In the global health food market, it is a functional food product with a growing body of scientific evidence behind it."',
    pullquoteAuthor: "SalesKR K-Food Division",

    lead:
      "Few foods have made the transition from cultural staple to global superfood as rapidly and convincingly as Kimchi. In less than a decade, Korea's most iconic fermented dish has moved from the ethnic foods aisle of specialty grocery stores to mainstream supermarket shelves, Michelin-starred restaurant menus, and the dietary recommendations of nutritionists and gut health specialists worldwide. Behind this transformation is a combination of scientific validation, cultural momentum, and the work of specialized distributors like SalesKR, who are making high-quality Korean Kimchi consistently available to global buyers.",

    sections: [
      {
        heading: "The Science Behind Kimchi's Health Benefits",
        paragraphs: [
          "Kimchi's health credentials are no longer based on tradition alone. A growing body of peer-reviewed research has confirmed the specific mechanisms through which regular Kimchi consumption delivers health benefits. The fermentation process produces a rich community of lactic acid bacteria — primarily Lactobacillus species — that survive transit through the upper digestive system and colonize the gut microbiome. Studies have linked regular consumption of fermented vegetables to improved gut barrier function, reduced inflammation markers, and enhanced immune response.",
          "Beyond probiotics, Kimchi is a nutritionally dense food. It contains significant levels of Vitamin C, Vitamin K, Vitamin B6, folate, and dietary fiber. The fermentation process increases the bioavailability of several key nutrients compared to raw cabbage, and generates beneficial compounds including bacteriocins and short-chain fatty acids that support intestinal health. The garlic, ginger, and red pepper components of traditional Kimchi add further antioxidant and anti-microbial properties.",
          "Weight management researchers have also drawn attention to Kimchi's low caloric density combined with high satiety value — a combination that makes it a natural fit for health-conscious consumers managing caloric intake without sacrificing nutritional quality.",
        ],
      },
      {
        heading: "Premium Kimchi vs. Mass-Market: What Buyers Need to Know",
        paragraphs: [
          "Not all Kimchi is equal. The quality of Kimchi sold internationally varies enormously, and buyers who have only encountered low-cost, mass-produced versions may not be aware of the difference that premium ingredients and proper fermentation make. Authentic premium Kimchi begins with napa cabbage of specific freshness grades, salted and drained for the precise duration required to achieve the ideal texture and moisture content.",
          "The gochugaru (red pepper flakes) used in premium Kimchi is sourced from specific Korean growing regions known for color intensity and controlled heat levels. Fermentation is managed at temperatures and timescales that develop complex flavor profiles without over-acidifying the product. The result is a product with noticeably superior taste, texture, and probiotic content compared to commodity-grade alternatives.",
          "SalesKR sources Kimchi exclusively from manufacturers whose production processes meet these quality standards. All products are accompanied by third-party microbiological testing documentation confirming probiotic counts and food safety compliance for the destination market's import requirements.",
        ],
      },
      {
        heading: "Ready-to-Eat Kimchi: Meeting the Demand of International Markets",
        paragraphs: [
          "One of the most significant barriers to Kimchi adoption in international retail has historically been consumer uncertainty about handling and storage. Traditional Kimchi requires refrigeration, continues to ferment after opening, and changes in flavor profile over time — characteristics that are familiar to Korean consumers but unfamiliar to international buyers.",
          "SalesKR's ready-to-eat (RTE) Kimchi product line has been specifically developed to address these barriers. The RTE range features modified atmosphere packaging that extends shelf life and stabilizes flavor profile after opening, portion sizes appropriate for retail and food service, and detailed English-language handling instructions. These products are designed to integrate seamlessly into international retail environments without requiring consumer education.",
        ],
      },
    ],

    conclusionHeading: "Global Kimchi Distribution Starts Here",
    conclusionParagraphs: [
      "For food importers, specialty grocery retailers, and health food distributors looking to capitalize on the global superfood trend, Kimchi represents a compelling opportunity. Consumer awareness is high, health credentials are scientifically validated, and demand is growing in every major market.",
      "SalesKR is the trusted source for premium Korean Kimchi and ready-to-eat Korean food products for international buyers. We offer flexible MOQ, competitive pricing, and full export documentation support. Contact us for wholesale inquiries and global partnership opportunities.",
    ],
  },

];

// ──────────────────────────────────────────────────────────
// 유틸 함수 (기존과 동일하게 유지)
// ──────────────────────────────────────────────────────────

export const SORTED_NEWS = [...NEWS_ARTICLES].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getArticleById(id: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.id === id);
}

export function getNextArticle(currentId: string): NewsArticle | undefined {
  const idx = SORTED_NEWS.findIndex((a) => a.id === currentId);
  return idx !== -1 && idx < SORTED_NEWS.length - 1
    ? SORTED_NEWS[idx + 1]
    : SORTED_NEWS[0];
}