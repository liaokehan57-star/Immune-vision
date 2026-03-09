export interface TimelineEvent {
  id: string
  year: string
  title: string
  subtitle: string
  era: string
  eraColor: string
  description: string
  keyFigures: {
    name: string
    role: string
  }[]
  contributions: string[]
  significance: string
  impact: string
  imageUrl: string
  imageCaption: string
}

export interface TimelineEra {
  id: string
  name: string
  nameEn: string
  period: string
  color: string
  gradient: string
  description: string
  events: TimelineEvent[]
}

export const timelineData: TimelineEra[] = [
  {
    id: 'era1',
    name: '经验免疫时代',
    nameEn: 'Era of Empirical Immunity',
    period: '10世纪 - 1796年',
    color: 'from-amber-600 to-orange-700',
    gradient: 'from-amber-50 to-orange-50',
    description: '人类通过经验观察，开始尝试预防传染病的早期探索',
    events: [
      {
        id: 'event-1-1',
        year: '10世纪',
        title: '人痘接种术诞生',
        subtitle: '中国宋代的免疫学萌芽',
        era: '经验免疫时代',
        eraColor: 'from-amber-600 to-orange-700',
        description: '中国宋代开始使用人痘接种术预防天花，这是人类历史上最早的主动免疫尝试。通过将天花患者的痘痂研磨后吹入健康人鼻腔，使其获得对天花的抵抗力。',
        keyFigures: [
          { name: '中国医家', role: '人痘接种术创始人' },
        ],
        contributions: [
          '首次提出"以毒攻毒"的免疫学思想',
          '建立了人工主动免疫的雏形',
          '为后世疫苗学奠定了经验基础',
        ],
        significance: '这是人类免疫学史上的第一次革命性尝试，虽然风险较高（死亡率约1-2%），但显著降低了天花的致死率（自然感染死亡率约30%）。',
        impact: '人痘接种术后来传播到土耳其、欧洲等地，直接启发了爱德华·詹纳发明更安全的牛痘接种术。',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
        imageCaption: '建议配图：中国古代人痘接种术的历史画作或医学典籍插图',
      },
      {
        id: 'event-1-2',
        year: '1796',
        title: '牛痘疫苗诞生',
        subtitle: 'Edward Jenner 开创免疫学先河',
        era: '经验免疫时代',
        eraColor: 'from-amber-600 to-orange-700',
        description: '英国医生爱德华·詹纳发现挤奶女工感染牛痘后不会得天花，于是将牛痘接种到8岁男孩詹姆斯·菲普斯身上，成功预防了天花。这标志着现代免疫学的诞生。',
        keyFigures: [
          { name: 'Edward Jenner', role: '现代免疫学之父' },
          { name: 'James Phipps', role: '首位疫苗接种者' },
        ],
        contributions: [
          '发明了世界上第一支疫苗（牛痘疫苗）',
          '提出"疫苗接种"（Vaccination）概念',
          '为天花的最终根除奠定基础',
        ],
        significance: '詹纳的工作将免疫学从经验医学提升为科学实践，开启了预防医学的新纪元。',
        impact: '1980年，世界卫生组织宣布天花在全球范围内被根除，这是人类历史上唯一被彻底消灭的传染病，詹纳功不可没。',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
        imageCaption: '建议配图：詹纳为詹姆斯·菲普斯接种牛痘的历史油画',
      },
    ],
  },
  {
    id: 'era2',
    name: '经典免疫学时代',
    nameEn: 'Era of Classical Immunology',
    period: '1880年 - 1950年',
    color: 'from-blue-600 to-indigo-700',
    gradient: 'from-blue-50 to-indigo-50',
    description: '微生物学与免疫学结合，建立体液免疫和细胞免疫理论',
    events: [
      {
        id: 'event-2-1',
        year: '1880',
        title: '减毒活疫苗问世',
        subtitle: 'Louis Pasteur 的微生物学革命',
        era: '经典免疫学时代',
        eraColor: 'from-blue-600 to-indigo-700',
        description: '法国微生物学家路易·巴斯德通过减弱病原体毒力，成功研制出鸡霍乱疫苗、炭疽疫苗和狂犬病疫苗，建立了"减毒活疫苗"的科学原理。',
        keyFigures: [
          { name: 'Louis Pasteur', role: '微生物学之父' },
        ],
        contributions: [
          '发明减毒活疫苗技术',
          '证明微生物是传染病的病因',
          '建立疫苗学的科学基础',
        ],
        significance: '巴斯德将詹纳的经验观察提升为可重复的科学方法，使疫苗研发从偶然发现转变为系统工程。',
        impact: '减毒活疫苗技术至今仍是疫苗研发的主流策略之一，如麻疹、腮腺炎、风疹（MMR）疫苗。',
        imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
        imageCaption: '建议配图：巴斯德在实验室工作的历史照片或狂犬病疫苗接种场景',
      },
      {
        id: 'event-2-2',
        year: '1890',
        title: '抗体理论诞生',
        subtitle: 'Emil von Behring 发现抗毒素',
        era: '经典免疫学时代',
        eraColor: 'from-blue-600 to-indigo-700',
        description: '德国医生埃米尔·冯·贝林发现血清中存在能够中和白喉毒素的"抗毒素"（即抗体），开创了体液免疫学。他因此获得1901年首届诺贝尔生理学或医学奖。',
        keyFigures: [
          { name: 'Emil von Behring', role: '血清疗法创始人' },
          { name: 'Shibasaburo Kitasato', role: '合作者' },
        ],
        contributions: [
          '发现抗毒素（抗体）',
          '建立血清疗法',
          '证明体液免疫的存在',
        ],
        significance: '这是人类首次认识到免疫系统可以产生特异性分子来对抗病原体，为后来的抗体药物开发奠定基础。',
        impact: '血清疗法在抗生素发明前拯救了无数白喉和破伤风患者的生命，现代单克隆抗体药物正是这一理论的延续。',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200',
        imageCaption: '建议配图：贝林的诺贝尔奖肖像或白喉抗毒素血清瓶',
      },
      {
        id: 'event-2-3',
        year: '1908',
        title: '吞噬细胞理论',
        subtitle: 'Élie Metchnikoff 发现细胞免疫',
        era: '经典免疫学时代',
        eraColor: 'from-blue-600 to-indigo-700',
        description: '俄国生物学家梅契尼科夫通过观察海星幼虫吞噬玫瑰刺，发现了吞噬细胞的免疫功能，建立了细胞免疫理论。他与保罗·欧立希共同获得1908年诺贝尔奖。',
        keyFigures: [
          { name: 'Élie Metchnikoff', role: '细胞免疫学之父' },
          { name: 'Paul Ehrlich', role: '侧链理论提出者' },
        ],
        contributions: [
          '发现吞噬细胞的免疫功能',
          '建立细胞免疫理论',
          '证明免疫系统的双重机制（体液+细胞）',
        ],
        significance: '梅契尼科夫的工作与贝林的抗体理论形成互补，共同构建了免疫学的两大支柱。',
        impact: '吞噬细胞理论为后来巨噬细胞、树突状细胞等固有免疫细胞的研究奠定了基础。',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
        imageCaption: '建议配图：梅契尼科夫的显微镜观察图或吞噬细胞吞噬细菌的电镜图',
      },
    ],
  },
  {
    id: 'era3',
    name: '现代免疫学奠基',
    nameEn: 'Foundation of Modern Immunology',
    period: '1950年 - 1970年',
    color: 'from-purple-600 to-pink-700',
    gradient: 'from-purple-50 to-pink-50',
    description: '分子生物学与免疫学融合，建立克隆选择和免疫耐受理论',
    events: [
      {
        id: 'event-3-1',
        year: '1957',
        title: '克隆选择学说',
        subtitle: 'Frank Macfarlane Burnet 的理论革命',
        era: '现代免疫学奠基',
        eraColor: 'from-purple-600 to-pink-700',
        description: '澳大利亚免疫学家伯内特提出克隆选择学说，解释了抗体多样性的产生机制：每个淋巴细胞只表达一种特异性受体，抗原选择性激活相应克隆。',
        keyFigures: [
          { name: 'Frank Macfarlane Burnet', role: '克隆选择学说创始人' },
        ],
        contributions: [
          '提出克隆选择学说',
          '解释抗体多样性的产生',
          '预言免疫记忆的细胞学基础',
        ],
        significance: '这一理论彻底改变了人们对免疫系统的认识，从"指导学说"转向"选择学说"，为后来的免疫学研究指明了方向。',
        impact: '克隆选择学说是现代免疫学的核心理论，直接催生了单克隆抗体技术和CAR-T疗法。',
        imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
        imageCaption: '建议配图：伯内特的肖像或克隆选择学说的示意图',
      },
      {
        id: 'event-3-2',
        year: '1960',
        title: '免疫耐受发现',
        subtitle: 'Peter Medawar 揭示自我识别机制',
        era: '现代免疫学奠基',
        eraColor: 'from-purple-600 to-pink-700',
        description: '英国生物学家彼得·梅达沃通过小鼠实验证明，免疫系统可以"学习"区分自我和非我，建立了免疫耐受理论。他与伯内特共同获得1960年诺贝尔奖。',
        keyFigures: [
          { name: 'Peter Medawar', role: '免疫耐受理论创始人' },
        ],
        contributions: [
          '发现获得性免疫耐受',
          '解释自身免疫病的机制',
          '为器官移植奠定理论基础',
        ],
        significance: '免疫耐受理论解释了为什么免疫系统不攻击自身组织，为自身免疫病和器官移植研究开辟了道路。',
        impact: '这一发现使器官移植成为可能，并为自身免疫病（如类风湿关节炎、系统性红斑狼疮）的治疗提供了理论依据。',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200',
        imageCaption: '建议配图：梅达沃的实验室照片或器官移植手术场景',
      },
    ],
  },
  {
    id: 'era4',
    name: '分子免疫学时代',
    nameEn: 'Era of Molecular Immunology',
    period: '1970年 - 2000年',
    color: 'from-cyan-600 to-blue-700',
    gradient: 'from-cyan-50 to-blue-50',
    description: '分子生物学技术突破，揭示免疫识别的分子机制',
    events: [
      {
        id: 'event-4-1',
        year: '1975',
        title: '单克隆抗体技术',
        subtitle: 'Köhler & Milstein 的诺贝尔奖成果',
        era: '分子免疫学时代',
        eraColor: 'from-cyan-600 to-blue-700',
        description: '德国科学家乔治·科勒和阿根廷科学家塞萨尔·米尔斯坦发明了杂交瘤技术，可以大量生产单一特异性的抗体，开创了单克隆抗体时代。',
        keyFigures: [
          { name: 'Georges Köhler', role: '杂交瘤技术共同发明人' },
          { name: 'César Milstein', role: '杂交瘤技术共同发明人' },
        ],
        contributions: [
          '发明杂交瘤技术',
          '实现单克隆抗体的大规模生产',
          '开创抗体药物时代',
        ],
        significance: '单克隆抗体技术使抗体从实验室工具变为临床药物，彻底改变了疾病诊断和治疗。',
        impact: '目前全球销售额前10的药物中，有7个是单克隆抗体药物（如阿达木单抗、曲妥珠单抗），年销售额超过千亿美元。',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
        imageCaption: '建议配图：单克隆抗体的Y型结构模型或杂交瘤细胞培养图',
      },
      {
        id: 'event-4-2',
        year: '1980s',
        title: 'TCR与MHC限制性',
        subtitle: '揭示T细胞识别的分子密码',
        era: '分子免疫学时代',
        eraColor: 'from-cyan-600 to-blue-700',
        description: '科学家们发现T细胞受体（TCR）的结构，并揭示了MHC限制性：T细胞只能识别由MHC分子呈递的抗原肽。这一发现解释了器官移植排斥和自身免疫病的分子机制。',
        keyFigures: [
          { name: 'Susumu Tonegawa', role: 'TCR基因重排发现者（1987诺奖）' },
          { name: 'Peter Doherty & Rolf Zinkernagel', role: 'MHC限制性发现者（1996诺奖）' },
        ],
        contributions: [
          '发现TCR的基因重排机制',
          '揭示MHC限制性',
          '解释T细胞的抗原识别机制',
        ],
        significance: '这些发现完整解释了适应性免疫的分子基础，为免疫治疗提供了精确靶点。',
        impact: 'MHC配型成为器官移植的金标准，TCR工程化T细胞（如TCR-T疗法）成为肿瘤免疫治疗的新方向。',
        imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
        imageCaption: '建议配图：TCR-MHC-抗原肽复合物的三维结构图',
      },
    ],
  },
  {
    id: 'era5',
    name: '免疫治疗革命',
    nameEn: 'Revolution of Immunotherapy',
    period: '2000年 - 至今',
    color: 'from-emerald-600 to-teal-700',
    gradient: 'from-emerald-50 to-teal-50',
    description: '免疫检查点抑制剂和细胞疗法开启癌症治疗新纪元',
    events: [
      {
        id: 'event-5-1',
        year: '2018',
        title: '免疫检查点疗法',
        subtitle: 'Allison & Honjo 获诺贝尔奖',
        era: '免疫治疗革命',
        eraColor: 'from-emerald-600 to-teal-700',
        description: '美国科学家詹姆斯·艾利森和日本科学家本庶佑因发现CTLA-4和PD-1免疫检查点，开创了癌症免疫治疗新时代，共同获得2018年诺贝尔生理学或医学奖。',
        keyFigures: [
          { name: 'James P. Allison', role: 'CTLA-4抑制剂开发者' },
          { name: 'Tasuku Honjo', role: 'PD-1抑制剂开发者' },
        ],
        contributions: [
          '发现CTLA-4和PD-1免疫检查点',
          '开发免疫检查点抑制剂',
          '使晚期癌症患者获得长期生存',
        ],
        significance: '免疫检查点抑制剂"解除刹车"，让T细胞重新识别并攻击肿瘤细胞，使部分晚期癌症患者实现长期生存甚至治愈。',
        impact: 'PD-1/PD-L1抑制剂（如帕博利珠单抗、纳武利尤单抗）已成为多种癌症的一线治疗方案，改变了肿瘤治疗格局。',
        imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200',
        imageCaption: '建议配图：艾利森和本庶佑的诺贝尔奖颁奖照片或PD-1/PD-L1通路示意图',
      },
      {
        id: 'event-5-2',
        year: '2017',
        title: 'CAR-T细胞疗法获批',
        subtitle: '首个基因工程化细胞疗法上市',
        era: '免疫治疗革命',
        eraColor: 'from-emerald-600 to-teal-700',
        description: 'FDA批准首个CAR-T细胞疗法（Kymriah）用于治疗急性淋巴细胞白血病，标志着细胞疗法从实验室走向临床，开启了"活的药物"时代。',
        keyFigures: [
          { name: 'Carl June', role: 'CAR-T疗法先驱' },
          { name: 'Michel Sadelain', role: 'CAR结构优化者' },
        ],
        contributions: [
          '开发嵌合抗原受体（CAR）技术',
          '实现T细胞的基因工程化改造',
          '使部分血液肿瘤患者获得治愈',
        ],
        significance: 'CAR-T疗法是首个获批的基因工程化细胞疗法，代表了精准医学和个体化治疗的最高水平。',
        impact: 'CAR-T疗法在B细胞淋巴瘤和白血病中取得了惊人疗效（完全缓解率可达80%以上），正在向实体瘤领域拓展。',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
        imageCaption: '建议配图：CAR-T细胞攻击肿瘤细胞的示意图或CAR结构图',
      },
    ],
  },
]
