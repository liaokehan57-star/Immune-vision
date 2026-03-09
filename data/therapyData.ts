export interface TherapyItem {
  id: string
  title: string
  titleEn: string
  description: string
  icon: string
  color: string
  imageUrl: string
  imageCaption: string
  principle: string
  indications: string[]
  advances: string[]
  significance: string
  relatedLinks?: string[]
}

export const therapyData: TherapyItem[] = [
  {
    id: 'checkpoint-inhibitors',
    title: '免疫检查点抑制剂',
    titleEn: 'Immune Checkpoint Inhibitors',
    description: '解除肿瘤对免疫系统的"刹车"，让 T 细胞重新识别并攻击癌细胞',
    icon: 'sparkles',
    color: 'from-blue-500 to-cyan-500',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200',
    imageCaption: '建议配图：PD-1/PD-L1 结合阻断原理示意图',
    principle: '免疫检查点抑制剂通过阻断 PD-1/PD-L1 或 CTLA-4 等免疫检查点分子，解除肿瘤细胞对 T 细胞的抑制作用。正常情况下，这些检查点分子防止免疫系统过度激活，但肿瘤细胞利用这一机制逃避免疫监视。抑制剂"解除刹车"后，T 细胞重新获得识别和杀伤肿瘤细胞的能力，从而实现抗肿瘤效果。',
    indications: [
      '黑色素瘤（晚期或转移性）',
      '非小细胞肺癌（PD-L1 高表达）',
      '肾细胞癌',
      '霍奇金淋巴瘤',
      '头颈部鳞状细胞癌',
      '尿路上皮癌',
      '微卫星不稳定性高（MSI-H）实体瘤',
    ],
    advances: [
      '2018年诺贝尔生理学或医学奖授予 James P. Allison 和 Tasuku Honjo，表彰其在免疫检查点疗法领域的开创性贡献',
      'PD-1 抑制剂（如帕博利珠单抗、纳武利尤单抗）已成为多种癌症的一线治疗方案',
      '联合疗法（检查点抑制剂 + 化疗/靶向药）显著提高疗效',
      '新型检查点分子（如 LAG-3、TIM-3）的抑制剂正在临床试验中',
      '生物标志物（如 TMB、MSI）帮助筛选获益人群',
    ],
    significance: '免疫检查点抑制剂彻底改变了肿瘤治疗格局，使部分晚期癌症患者实现长期生存甚至临床治愈。与传统化疗不同，它激活患者自身免疫系统，具有持久的抗肿瘤记忆效应。目前全球销售额超过 500 亿美元，是肿瘤免疫治疗的里程碑。',
  },
  {
    id: 'car-t',
    title: 'CAR-T 细胞疗法',
    titleEn: 'CAR-T Cell Therapy',
    description: '改造患者自身 T 细胞，装上"导航系统"精准识别并消灭肿瘤细胞',
    icon: 'zap',
    color: 'from-purple-500 to-pink-500',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
    imageCaption: '建议配图：CAR-T 细胞攻击肿瘤细胞的过程示意图或 CAR 结构图',
    principle: 'CAR-T（嵌合抗原受体 T 细胞）疗法是一种个体化细胞免疫治疗。医生从患者体内采集 T 细胞，通过基因工程技术将编码 CAR 的基因导入 T 细胞，使其表面表达能够识别肿瘤特异性抗原（如 CD19）的受体。改造后的 T 细胞在体外大量扩增后回输患者体内，精准识别并杀伤肿瘤细胞，同时具有免疫记忆功能，防止复发。',
    indications: [
      '急性淋巴细胞白血病（ALL）',
      'B 细胞淋巴瘤（弥漫大 B 细胞淋巴瘤、滤泡性淋巴瘤）',
      '多发性骨髓瘤',
      '慢性淋巴细胞白血病（CLL）',
      '实体瘤（正在研发中，如胶质母细胞瘤、肝癌）',
    ],
    advances: [
      '2017年 FDA 批准首个 CAR-T 疗法 Kymriah，用于治疗儿童急性淋巴细胞白血病',
      'B 细胞淋巴瘤患者完全缓解率可达 80% 以上',
      '第二代 CAR-T（双信号域）显著提高疗效和持久性',
      '通用型 CAR-T（off-the-shelf）正在研发，有望降低成本和缩短治疗周期',
      '双靶点 CAR-T（如 CD19/CD22）减少肿瘤逃逸',
      '实体瘤 CAR-T 面临肿瘤微环境抑制等挑战，正在探索联合疗法',
    ],
    significance: 'CAR-T 疗法是首个获批的基因工程化细胞疗法，代表了精准医学和个体化治疗的最高水平。它为传统治疗无效的血液肿瘤患者带来了治愈希望，被誉为"活的药物"。尽管目前成本高昂（单次治疗约 40-50 万美元），但随着技术进步和规模化生产，有望惠及更多患者。',
  },
  {
    id: 'cancer-vaccine',
    title: '肿瘤疫苗',
    titleEn: 'Cancer Vaccines',
    description: '训练免疫系统识别肿瘤特异性抗原，建立长期的抗肿瘤免疫记忆',
    icon: 'syringe',
    color: 'from-green-500 to-emerald-500',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200',
    imageCaption: '建议配图：树突状细胞呈递抗原或 mRNA 疫苗机制示意图',
    principle: '肿瘤疫苗通过向患者体内引入肿瘤相关抗原（TAA）或肿瘤特异性抗原（TSA），激活树突状细胞（DC）等抗原呈递细胞，进而激活 T 细胞产生针对肿瘤的特异性免疫应答。与传统疫苗预防感染不同，肿瘤疫苗主要用于治疗已存在的肿瘤或预防复发。mRNA 疫苗技术的突破（如 COVID-19 疫苗）为个体化肿瘤疫苗开辟了新路径。',
    indications: [
      '前列腺癌（Provenge，已获批）',
      '黑色素瘤',
      '宫颈癌（HPV 疫苗，预防性）',
      '肝癌（HBV 疫苗，预防性）',
      '个体化新抗原疫苗（针对患者特异性突变）',
    ],
    advances: [
      '2010年 FDA 批准首个治疗性肿瘤疫苗 Provenge（前列腺癌）',
      'mRNA 疫苗技术使个体化肿瘤疫苗成为可能（如 BioNTech 的 BNT111）',
      '新抗原疫苗（Neoantigen Vaccine）针对患者肿瘤特异性突变，精准度更高',
      '联合免疫检查点抑制剂显著提高疗效',
      'DC 疫苗、多肽疫苗、病毒载体疫苗等多种技术路线并行发展',
    ],
    significance: '肿瘤疫苗代表了"主动免疫"策略，通过训练免疫系统建立长期记忆，理论上可实现持久的抗肿瘤效果。mRNA 技术的成熟使个体化疫苗成为现实，为每位患者量身定制治疗方案。尽管目前疗效仍需提升，但其安全性高、副作用小的特点使其成为肿瘤免疫治疗的重要补充。',
  },
  {
    id: 'bispecific-antibody',
    title: '双特异性抗体',
    titleEn: 'Bispecific Antibodies',
    description: '同时结合 T 细胞和肿瘤细胞，搭建"桥梁"引导免疫细胞精准打击',
    icon: 'sparkles',
    color: 'from-orange-500 to-red-500',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200',
    imageCaption: '建议配图：双特异性抗体连接 T 细胞与肿瘤细胞的"桥梁"示意图',
    principle: '双特异性抗体（BsAb）是一种人工设计的抗体分子，具有两个不同的抗原结合位点。一端结合 T 细胞表面的 CD3 分子，另一端结合肿瘤细胞表面的特异性抗原（如 CD19、BCMA）。通过物理连接 T 细胞和肿瘤细胞，双特异性抗体将 T 细胞"拉"到肿瘤细胞附近，激活 T 细胞释放穿孔素和颗粒酶，直接杀伤肿瘤细胞。这种"桥梁"机制无需预先激活 T 细胞，也不依赖 MHC 限制性。',
    indications: [
      '急性淋巴细胞白血病（ALL）',
      'B 细胞淋巴瘤',
      '多发性骨髓瘤',
      '实体瘤（如胃癌、肺癌，正在研发中）',
    ],
    advances: [
      '2014年 FDA 批准首个双特异性抗体 Blincyto（CD19/CD3），用于治疗急性淋巴细胞白血病',
      '2020年批准 Tecvayli（BCMA/CD3），用于多发性骨髓瘤',
      '第二代双特异性抗体优化了半衰期和安全性',
      '三特异性抗体（TriAb）正在研发，可同时靶向多个抗原',
      '双特异性 NK 细胞接合器（BiKE）利用 NK 细胞杀伤肿瘤',
    ],
    significance: '双特异性抗体结合了单克隆抗体的靶向性和细胞免疫治疗的杀伤力，是"现成"（off-the-shelf）的免疫治疗药物，无需个体化制备。与 CAR-T 相比，双特异性抗体成本更低、生产周期更短，且不需要复杂的细胞工程。目前全球有超过 100 种双特异性抗体在临床试验中，是肿瘤免疫治疗的重要发展方向。',
  },
]
