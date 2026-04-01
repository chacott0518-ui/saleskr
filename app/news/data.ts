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
    {
      id: "global-2026",
      date: "2026-04-01",
      dateDisplay: "APR 01, 2026",
      category: "GLOBAL",
      title: "SalesKR Announces 2026 Global Expansion Roadmap",
      subtitle: "Targeting 50 countries with new logistics hubs in Northern Europe and the Middle East",
      excerpt: "Expanding our export networks to 50 countries including Northern Europe and Middle East through optimized logistics and AI-powered demand forecasting.",
      listImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
      mainImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1400&q=85",
      image2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
      image2Caption: "SalesKR's logistics infrastructure handles over 2,400 SKUs across temperature-sensitive and ambient product categories.",
      image3: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      image3Caption: "SalesKR's international partnerships team coordinates with over 120 active importers across 47 countries.",
      stats: [
        { value: "50",  label: "Target Countries" },
        { value: "2",   label: "New Hub Cities"   },
        { value: "40%", label: "Faster Delivery"  },
      ],
      pullquote: "\"We are not simply adding countries to a list. We are building the most intelligent Korean product supply network the world has ever seen.\"",
      pullquoteAuthor: "Jung, Yong Chul — CEO, SalesKR",
      lead: "In a landmark announcement that signals a new chapter for Korean product distribution, SalesKR has unveiled its most ambitious strategy to date — a comprehensive 2026 Global Expansion Roadmap that targets supply chain operations across 50 countries by the end of the fiscal year.",
      sections: [
        {
          heading: "Why Oslo and Dubai?",
          paragraphs: [
            "The selection of Oslo and Dubai as the two anchor hubs was the result of an 18-month feasibility study conducted across 23 candidate cities. Oslo offers unparalleled access to the Nordic and Baltic markets — regions where per-capita spending on premium skincare and functional foods has grown by 31% since 2023. Dubai, meanwhile, serves as the natural gateway to the GCC bloc, South Asia, and the broader MENA corridor, handling over $14 billion in re-export trade annually.",
            "Both cities share critical infrastructure advantages: world-class cold-chain logistics for food products, robust customs frameworks favorable to Korean HS-coded exports, and established Korean business communities that streamline the on-the-ground partner acquisition process. SalesKR's logistics team confirmed that average delivery lead times to end importers in these regions will drop from 11 days to under 7 days once the hubs are fully operational by Q3 2026.",
          ],
        },
        {
          heading: "AI-Powered Demand Forecasting",
          paragraphs: [
            "Central to the 2026 roadmap is the deployment of SalesKR's proprietary demand intelligence platform — a machine-learning system trained on five years of cross-border purchase data, social search trend signals from TikTok and Instagram, and regional regulatory change feeds. The system processes over 2 million data points weekly to generate market-specific demand forecasts with a reported accuracy rate of 87.4%.",
            "In practical terms, this means SalesKR's import partners will receive automated reorder recommendations 30 days in advance of projected demand spikes. Early pilot results from the Southeast Asia trial in Q4 2025 showed a 28% reduction in out-of-stock incidents and a 19% decrease in over-ordering waste across participating distributors.",
          ],
        },
        {
          heading: "The Partner Ecosystem Strategy",
          paragraphs: [
            "Unlike traditional export models that rely on a single master distributor per country, SalesKR's 2026 framework introduces a tiered partnership architecture. At the top sits a Platinum Distributor — typically a national-scale importer with cold storage capacity and a minimum monthly order volume of $250,000.",
            "This structure is deliberately designed to prevent channel conflict while maximizing geographic penetration. In countries where no single distributor has national reach — common in markets like Brazil, Nigeria, and the Philippines — SalesKR will operate a direct-import program using co-managed bonded warehouse facilities.",
          ],
        },
      ],
      conclusionHeading: "Looking Ahead to 2027",
      conclusionParagraphs: [
        "The 2026 roadmap is explicitly framed as a foundation, not a destination. SalesKR outlined preliminary plans for a 2027 phase that would include direct-to-consumer capabilities in select high-value markets, positioning the company not just as a B2B wholesaler but as a vertically integrated Korean product platform.",
        "For the global importers, distributors, and retail buyers who work with SalesKR today, the message is clear: the company is now building the infrastructure to make Korean products as reliably available as any domestic brand — regardless of which country you operate in.",
      ],
    },
    {
      id: "k-beauty-2025",
      date: "2025-12-05",
      dateDisplay: "DEC 05, 2025",
      category: "MARKET",
      title: "K-Beauty Market Share Surges in North America",
      subtitle: "Data-driven distribution strategy delivers a 40% increase in K-skincare demand across US major retailers",
      excerpt: "SalesKR's exclusive distribution strategy leads to a 40% increase in K-skincare demand across US major retailers.",
      listImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      mainImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=85",
      image2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      image2Caption: "Korean beauty products now occupy dedicated shelf space in over 3,200 retail locations across the United States and Canada.",
      image3: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&q=80",
      image3Caption: "Consumers in North America have adopted multi-step Korean skincare routines at a rate that outpaces any other product import category.",
      stats: [
        { value: "40%",  label: "Demand Increase"  },
        { value: "3.2K", label: "Retail Locations"  },
        { value: "45%",  label: "Repurchase Rate"   },
      ],
      pullquote: "\"The North American consumer has moved beyond the K-beauty trend phase. This is now category loyalty — and SalesKR is the infrastructure behind it.\"",
      pullquoteAuthor: "SalesKR Market Intelligence Team",
      lead: "The North American beauty market has undergone a structural shift. Across the United States and Canada, Korean skincare and cosmetics are no longer niche imports — they are mainstream shelf staples, and SalesKR's exclusive distribution model has been central to making that transition possible.",
      sections: [
        {
          heading: "How the Data Led the Strategy",
          paragraphs: [
            "SalesKR's entry into the North American market was not built on instinct alone. The company's market intelligence team analyzed over 1 million consumer search queries per month across Google, TikTok, and Reddit to identify which Korean product categories were generating organic interest without reliable supply. The answer was clear: SPF products, low-pH cleansers, and ceramide-based moisturizers were the three fastest-growing segments, yet retail shelf availability lagged search intent by an average of 14 months.",
            "Armed with this gap analysis, SalesKR partnered directly with eight Korean manufacturers across these categories — bypassing traditional multi-tier import chains — and established direct supply agreements that reduced landed cost per unit by an average of 23%. The savings were passed on to retail partners in the form of a more competitive wholesale price point.",
          ],
        },
        {
          heading: "Retail Penetration by Category",
          paragraphs: [
            "Skincare leads the North American performance story with a 40% year-over-year demand increase, followed by sheet masks at 28% and color cosmetics at 17%. The sunscreen category saw a 62% increase in sell-through during the 2025 summer season, driven by dermatologist endorsements on social media and a growing consumer preference for lightweight, non-greasy formulas.",
            "Retail partners report that Korean beauty products now generate a repurchase rate of 45% within 90 days of first purchase — 18 percentage points higher than the category average for imported beauty goods. This loyalty dynamic is transforming the economics of the relationship between SalesKR and its retail partners.",
          ],
        },
        {
          heading: "The Supply Chain Behind the Numbers",
          paragraphs: [
            "Sustaining a 40% demand surge requires more than good product — it requires infrastructure that can scale without breaking. SalesKR's North American distribution network is anchored by two bonded warehouse facilities in Los Angeles and New Jersey, each equipped with climate-controlled storage zones for temperature-sensitive formulations.",
            "The company's inventory management system uses real-time point-of-sale data feeds from major retail partners to trigger automated replenishment orders before stock depletion occurs. The result is a near-zero out-of-stock rate across the top 50 SKUs — the metric retailers cite most often when expanding Korean beauty shelf space.",
          ],
        },
      ],
      conclusionHeading: "What Comes Next for North America",
      conclusionParagraphs: [
        "SalesKR's North American team is in advanced discussions with two major pharmacy chains and one premium department store group to introduce dedicated K-beauty shop-in-shop formats scheduled for rollout in Q2 2026.",
        "What began as a niche import category is now competing directly with legacy European and American beauty brands for prime retail real estate. SalesKR has positioned itself not merely as the supplier behind this shift, but as the strategic architect of it.",
      ],
    },
    {
      id: "k-food-2025",
      date: "2025-07-31",
      dateDisplay: "JUL 31, 2025",
      category: "PARTNERSHIP",
      title: "Strategic Partnership with European Fine Dining",
      subtitle: "Secured a premium supply agreement to bring authentic Korean ingredients to Michelin-starred restaurants across Europe",
      excerpt: "Secured a premium sponsorship to supply authentic Korean ingredients to Michelin-starred restaurants in Europe.",
      listImage: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
      mainImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85",
      image2: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80",
      image2Caption: "Korean fermented ingredients, including artisanal kimchi and doenjang, are now being incorporated into contemporary European tasting menus.",
      image3: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1200&q=80",
      image3Caption: "Traditional Korean fermentation techniques produce complex umami profiles that European chefs are incorporating into modern cuisine.",
      stats: [
        { value: "14", label: "Partner Restaurants" },
        { value: "6",  label: "European Countries"  },
        { value: "3★", label: "Michelin Rated"      },
      ],
      pullquote: "\"Korean fermentation is not a trend — it is a culinary philosophy. We are honoured to bring these ingredients to our kitchen, and to our guests.\"",
      pullquoteAuthor: "Executive Chef, Partner Restaurant — Paris",
      lead: "When a three-Michelin-star restaurant in Paris puts Korean doenjang on its tasting menu, it is not a marketing exercise. It is a recognition that Korean fermentation science has achieved what few culinary traditions manage — crossing the boundary between cultural curiosity and fine-dining legitimacy.",
      sections: [
        {
          heading: "How the Partnership Came Together",
          paragraphs: [
            "The partnership originated from a cold inquiry from the purchasing director of a two-Michelin-star restaurant in Copenhagen, who had encountered SalesKR's aged kimchi at a food trade exhibition in Seoul in 2024. The request was specific — the kitchen wanted a consistent supply of 18-month fermented kimchi and single-origin gochugaru sourced from a specific region in North Jeolla Province.",
            "SalesKR's culinary supply team, which had been quietly developing a premium food-service division for 18 months, was uniquely positioned to fulfil this request. Within six weeks, a trial shipment was en route to Copenhagen — and within four months, eleven more restaurants had joined the supply programme.",
          ],
        },
        {
          heading: "The Science of Korean Fermentation",
          paragraphs: [
            "What attracts Michelin-level chefs to Korean fermented ingredients is not nostalgia or novelty — it is the biochemical complexity that results from traditional fermentation processes. Kimchi fermented for 18 months or more develops lactic acid concentrations and amino acid profiles that closely mirror those of aged European cheeses.",
            "Doenjang, the Korean fermented soybean paste, presents a similar case. Its glutamate content is measurably higher than many European counterparts, making it exceptionally versatile as a background ingredient in stocks, reductions, and emulsions.",
          ],
        },
        {
          heading: "Supply Chain Integrity at the Fine-Dining Level",
          paragraphs: [
            "Supplying to Michelin-starred kitchens imposes requirements that go far beyond standard food export. Chefs at this level demand traceability to the individual producer, consistency across batches, and flexibility around irregular order volumes. SalesKR's culinary supply division addresses these through a dedicated small-batch logistics system.",
            "Each shipment is accompanied by a digital provenance document that includes the farm of origin, fermentation start date, specific microbial strain used, and third-party laboratory analysis results. This documentation has proven decisive in convincing cautious procurement directors to approve the supplier.",
          ],
        },
      ],
      conclusionHeading: "The Ripple Effect on Korean Food Exports",
      conclusionParagraphs: [
        "The fine-dining partnership is generating value that extends well beyond its direct commercial scale. SalesKR's marketing team has documented a measurable increase in wholesale enquiries from European specialty grocery retailers in the six months since the first partner restaurant announced its Korean ingredient programme.",
        "The longer-term ambition is to establish Korean fermentation as a recognized culinary category in Europe — in the same way that Japanese fermentation has moved from niche import to everyday ingredient over the past two decades.",
      ],
    },
    {
      id: "csr-2025",
      date: "2025-12-07",
      dateDisplay: "DEC 07, 2025",
      category: "CSR",
      title: "Annual Blood Donation Campaign Completed",
      subtitle: "SalesKR employees unite for the fifth consecutive year of nationwide social contribution initiatives",
      excerpt: "SalesKR continues its commitment to social responsibility through nationwide donation initiatives.",
      listImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
      mainImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85",
      image2: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
      image2Caption: "SalesKR employees gathered at donation centres across Seoul, Busan, and Incheon for the annual campaign.",
      image3: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80",
      image3Caption: "Blood donation certificates collected during the campaign are transferred directly to partner medical facilities.",
      stats: [
        { value: "94",  label: "Employees Participated" },
        { value: "5th", label: "Consecutive Year"       },
        { value: "12",  label: "Partner Hospitals"      },
      ],
      pullquote: "\"A company grows when its people grow — and our people grow when they give back. This campaign is the truest expression of who we are.\"",
      pullquoteAuthor: "Jung, Yong Chul — CEO, SalesKR",
      lead: "On a cold December morning, employees across SalesKR's Seoul headquarters and regional offices did something that had nothing to do with export logistics or quarterly targets. They gave blood. For the fifth consecutive year, SalesKR's annual donation campaign brought together 94% of the company's workforce in a shared act of community contribution.",
      sections: [
        {
          heading: "Five Years of Consistent Commitment",
          paragraphs: [
            "The SalesKR Blood Donation Campaign began in 2021 as a modest initiative organized by three employees who wanted to mark the company's fifth anniversary with something meaningful. That first year, 34 employees participated. By 2025, participation had grown to include 94% of the total workforce across all departments.",
            "What has kept participation so consistently high is not mandatory enrolment — participation has always been entirely voluntary. The company provides paid leave time for participation, and each employee who donates receives a personal acknowledgement from the CEO.",
          ],
        },
        {
          heading: "Where the Donations Go",
          paragraphs: [
            "SalesKR's donation certificates are directed to twelve partner hospitals across Korea, selected in coordination with the Korean Red Cross based on the relative scarcity of specific blood types in each region. This year's campaign placed particular emphasis on type O-negative donations, which the Red Cross identified as critically low across metropolitan hospital networks.",
            "SalesKR's CSR team maintains a follow-up relationship with each partner hospital, receiving quarterly reports on how the donated blood was used. This level of accountability is unusual in corporate donation programmes and reflects a deliberate philosophy: that giving without knowing the outcome is giving without full commitment.",
          ],
        },
        {
          heading: "Voices from the Campaign",
          paragraphs: [
            "Park Jiyeon, a logistics coordinator based in the Seoul head office, participated for the third consecutive year. 'The first time I went alone and felt a bit nervous. This year I went with six colleagues and we had lunch together after. It does not feel like a corporate obligation — it feels like something we genuinely want to do together.'",
            "Kim Donghyun, a senior account manager who organized the Incheon branch session, coordinated with three nearby companies to create a joint donation event. 'I thought if we were going to do this, we should invite our partners too. Now it is something our business network does together every year.'",
          ],
        },
      ],
      conclusionHeading: "Looking Ahead: The 2026 CSR Agenda",
      conclusionParagraphs: [
        "Building on the momentum of the donation campaign, SalesKR has announced plans to expand its CSR programme in 2026 to include a food bank supply initiative — leveraging the company's logistics infrastructure to route surplus food inventory to community welfare organizations, with a target of contributing 10,000 meal equivalents in the first year.",
        "For a company whose business is built on the movement of products across borders, the CSR agenda reflects a belief that the same networks that drive commercial growth can — and should — be directed toward social impact.",
      ],
    },
  ];
  
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