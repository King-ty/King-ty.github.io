const translations = {
    en: {
        name: "Yu TIAN (Tyrace)",
        tagline: "M.Phil. @ HKU",
        sub_tagline: "AI Infra & ML Sys",
        location: "Shanghai",
        nav_home: "Home",
        nav_edu: "Education",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_pubs: "Publications",
        nav_teaching: "Teaching",
        nav_awards: "Awards",
        nav_skills: "Skills",
        page_title: "Welcome to Yu TIAN's Homepage",
        
        // About
        about_title: "About Me",
        about_intro: `I am a final-year Master of Philosophy (M.Phil.) candidate in Computer Science at the University of Hong Kong (HKU), supervised by <a href="https://i.cs.hku.hk/~heming/">Prof. Heming Cui</a>. Before that, I received my B.Eng. degree in Computer Science from Tongji University. Currently, I am a Research Intern at ByteDance Seed-Infra-Training in Shanghai.`,
        about_status: `<strong>Update:</strong> I am actively looking for <strong>job opportunities</strong> / <strong>PhD positions (Fall 2026)</strong> — feel free to reach out!`,
        about_detail: `My research focuses on <strong>Machine Learning Systems</strong>, <strong>AI Infrastructure</strong>, and <strong>Distributed Computing</strong>. Specifically, I specialize in building high-performance, scalable, and reliable systems for Large Language Models (LLMs). My work tackles critical challenges in distributed training and inference, such as ensuring consistency in large-scale Reinforcement Learning (RL) scenarios and optimizing Pipeline Parallelism (PP) in inference frameworks.`,
        about_fun: `<i class="fas fa-terminal"></i> <strong>Fun Fact:</strong> You can also call me the <strong>"Handle Runner"</strong> — inspired by one of my favorite movies, "Blade Runner". While we CS guys might not be good at physical running, we are always running <code class="inline-code">handles</code>!`,

        // Education
        section_edu: "Education",
        edu_hku_school: "The University of Hong Kong (HKU)",
        edu_hku_time: "Sep 2023 - Present",
        edu_hku_degree: "M.Phil. in Computer Science",
        edu_hku_activities: "",
        edu_tongji_school: "Tongji University",
        edu_tongji_time: "Sep 2019 - Jun 2023",
        edu_tongji_degree: "B.Eng. in Computer Science and Technology",
        edu_tongji_gpa: "GPA: 91.63/100",
        edu_tongji_activities: "<strong>Activities:</strong> One of the Leaders of CPC Lab (Tongji University)",

        // Experience
        section_exp: "Internship Experience",
        exp_bytedance_role: "ByteDance / Seed-Infra-Training",
        exp_bytedance_time: "Jan 2026 - Present",
        exp_bytedance_desc: "Participating in R&D for Agent RL post-training systems. Designing and implementing low-overhead calibration mechanisms for asynchronous streaming RL training to address data consistency challenges and ensure stability in large-scale RL training.",
        exp_huawei_role: "Huawei 2012 Labs (Hong Kong)",
        exp_huawei_time: "May 2025 - Nov 2025",
        exp_huawei_desc: "Developed Pipeline Parallelism (PP) modules for Ascend LLM inference systems. Researched optimization techniques including Parallelism Mechanisms, PD Disaggregation, Speculative Decoding, Sparse/Linear Attention, and Quantization. Addressed resource scheduling and memory bottlenecks in super-node environments.",
        exp_shlab_role: "Shanghai AI Laboratory",
        exp_shlab_time: "Oct 2022 - Apr 2023",
        exp_shlab_desc: "Researched secure microservice architectures. Designed a secure and efficient microservice runtime based on Trusted Execution Environments (TEE) and Rust.",

        // Projects
        section_projects: "Research Projects",
        proj_huawei_title: "Efficient PD Disaggregation Inference System Optimized by Pipeline Parallelism (PP)",
        proj_huawei_desc: "<strong>Huawei Research:</strong> Integrated Pipeline Parallelism (PP) to optimize long-sequence and multi-node scenarios. First complete solution combining PP, PD disaggregation, and Multi-Token Prediction. Improved throughput by <strong>9.47%</strong> and kept pipeline bubbles <5%.",
        proj_huawei_stat: "<i class=\"fas fa-check-circle\"></i> Landed in Huawei OmniInfer (Patent filed as First Inventor)",
        
        proj_hedas_title: "Secure and Efficient Distributed OLAP System via Fully Homomorphic Encryption (FHE)",
        proj_hedas_desc: "<strong>HKU Research:</strong> First FHE-based distributed OLAP system. Achieved secure and efficient data processing. Reduced end-to-end latency by <strong>44.1%</strong> compared to SOTA single-node systems in 4-node settings.",
        proj_hedas_stat: "<i class=\"fas fa-book\"></i> Published in ESORICS DPM '24",

        proj_olap_title: "High-Throughput OLAP System Accelerated by GPU/NPU",
        proj_olap_desc: "<strong>HKU-Huawei Joint Research:</strong> Designed high-performance OLAP system using GPU/NPU for offline scenarios. Achieved <strong>50%</strong> throughput improvement compared to NVIDIA RAPIDS for Spark.",
        proj_olap_stat: "<i class=\"fas fa-users\"></i> Team Lead (Led 2 RAs)",

        // Publications
        section_pubs: "Publications",
        pub_hedas_venue: "ESORICS 2024 International Workshops: DPM, CBT, and CyberICPS, 77-93.",
        pub_hedas_authors: "<strong>Yu Tian</strong>, Tianxiang Shen, Qi Hu, Wei Chen, Heming Cui, and Ji Qi<sup class=\"envelope-icon\"><i class=\"fas fa-envelope\"></i></sup>",

        // Teaching
        section_teaching: "Teaching Experience",
        ta_hku_detail: "<strong>Teaching Assistant</strong> @ HKU (COMP3230: Operating Systems)",
        ta_hku_date: "Fall 2023 & 2024",
        
        ta_tongji_detail: "<strong>Teaching Assistant</strong> @ Tongji (Advanced Programming Language)",
        ta_tongji_date: "Sep 2020 - Jun 2021",
    
        // Awards
        section_awards: "Honors & Awards",
        award_national: "National Scholarship (Top 0.2%)",
        award_icpc: "ICPC Asia Regional Contest (Jinan) Silver Medal",
        award_qidi: "Tongji University Qidi Scholarship (Top 1%)",
        award_grad: "Outstanding Graduate of Tongji University",
        award_csp: "CCF CSP Certification 350 (Top 1.49%)",

        // Skills (New Keys)
        section_skills: "Technical Skills",
        skill_cat_lang: "Languages",
        skill_cat_frameworks: "Systems & Frameworks",
        skill_cat_research: "Research Areas",
        skill_lang: "English (TOEFL 98)",
        rein_learn: "Reinforcement Learning"
    },
    zh: {
        name: "田宇",
        tagline: "香港大学 计算机研究型硕士 (M.Phil.)",
        sub_tagline: "AI 基础设施 & 机器学习系统",
        location: "上海",
        nav_home: "主页",
        nav_edu: "教育背景",
        nav_exp: "实习经历",
        nav_projects: "科研项目",
        nav_pubs: "学术论文",
        nav_teaching: "助教经历",
        nav_awards: "荣誉奖项",
        nav_skills: "技术栈",
        page_title: "欢迎来到田宇的个人主页",
        
        // About
        about_title: "关于我",
        about_intro: `我是香港大学计算机科学专业的在读研究型硕士 (M.Phil.)，导师是<a href="https://i.cs.hku.hk/~heming/">崔鹤鸣副教授</a>。在此之前，我于同济大学获得计算机科学与技术学士学位。目前，我是字节跳动 Seed-Infra 团队的实习生。`,
        about_status: `<strong>最新动态：</strong> 我正在积极寻找 <strong>工作机会</strong> / <strong>2026 秋季 PhD 职位</strong> —— 欢迎与我联系！`,
        about_detail: `我的研究重点是 <strong>机器学习系统</strong>、<strong>AI 基础设施</strong> 和 <strong>分布式计算</strong>。具体来说，我专注于构建高性能、可扩展且可靠的大语言模型 (LLM) 系统。我的工作致力于解决分布式训练和推理中的关键挑战，例如大规模强化学习 (RL) 场景下的一致性问题以及推理框架中的流水线并行 (PP) 优化。`,
        about_fun: `<i class="fas fa-terminal"></i> <strong>Fun Fact: </strong> 你也可以叫我 <strong>"Handle Runner"</strong> (灵感来自电影《Blade Runner》)。虽然我们搞 CS 的不一定物理上擅长跑步 (Running)，但我们总是擅长运行 (Running) <code class="inline-code">handles</code>！`,

        // Education
        section_edu: "教育背景",
        edu_hku_school: "香港大学 (HKU)",
        edu_hku_time: "2023.09 - 至今",
        edu_hku_degree: "研究型硕士 (M.Phil.), 计算机科学",
        edu_hku_activities: "",
        edu_tongji_school: "同济大学",
        edu_tongji_time: "2019.09 - 2023.06",
        edu_tongji_degree: "工学学士, 计算机科学与技术",
        edu_tongji_gpa: "成绩 (GPA): 91.63/100",
        edu_tongji_activities: "<strong>活动：</strong>同济大学CPC Lab 负责人 (之一)",

        // Experience
        section_exp: "实习经历",
        exp_bytedance_role: "字节跳动 / Seed-Infra-Training",
        exp_bytedance_time: "2026.01 - 至今",
        exp_bytedance_desc: "参与 Agent RL 后训练系统研发。针对全异步流式 RL 训练场景下的长序列数据一致性挑战，参与设计并主导实现了低系统开销的校准机制，以解决跨版本生成带来的精度偏差问题，保障大规模 RL 训练的收敛稳定性。",
        exp_huawei_role: "华为 2012 实验室 / 香港理论研究部",
        exp_huawei_time: "2025.05 - 2025.11",
        exp_huawei_desc: "在华为昇腾平台 LLM 推理系统上研发流水并行 (PP)。研究并行推理、PD 分离、投机推理、稀疏注意力、线性注意力、量化等推理优化技术。协助解决华为超节点分布式环境下的资源调度、显存瓶颈和推理精度问题。",
        exp_shlab_role: "上海人工智能实验室 / 基础软件研究部",
        exp_shlab_time: "2022.10 - 2023.04",
        exp_shlab_desc: "研究微服务安全架构。设计基于可信执行环境 (TEE) 和 Rust 语言的安全高效微服务运行时。",

        // Projects
        section_projects: "科研项目",
        proj_huawei_title: "基于流水线并行 (PP) 优化的高效 PD 分离推理系统",
        proj_huawei_desc: "<strong>华为研究项目：</strong> 在 LLM 推理系统中引入流水线并行 (PP) 以优化长序列场景和多节点推理，并解决系统架构冲突和流水线空泡。这是首个结合流水线并行、PD 分离和多 Token 预测的完整技术方案。在相同SLA的测试场景中，相比原方案 (TP+DP+EP) 端到端吞吐提升 <strong>9.47%</strong>，并控制流水线空泡率在 5% 以下。",
        proj_huawei_stat: "<i class=\"fas fa-check-circle\"></i> 已落地华为开源推理框架 OmniInfer (第一发明人专利)",
        
        proj_hedas_title: "基于全同态加密 (FHE) 的分布式安全高效 OLAP 系统",
        proj_hedas_desc: "<strong>港大研究项目：</strong> 首个基于全同态加密 (FHE) 的分布式 OLAP 系统。相比 SOTA 单机系统，在 4 个计算节点下有效降低 <strong>44.1%</strong> 的端到端延迟，且系统扩展性良好。",
        proj_hedas_stat: "<i class=\"fas fa-book\"></i> 论文已被 ESORICS DPM '24 接收",

        proj_olap_title: "基于加速器 (GPU/NPU) 加速的高吞吐 OLAP 系统",
        proj_olap_desc: "<strong>港大-华为合作项目：</strong> 针对离线 OLAP 场景吞吐不足的问题，设计基于加速器 (GPU/NPU) 的高性能系统。对比 NVIDIA RAPIDS for Spark 吞吐提升 <strong>50%</strong>。",
        proj_olap_stat: "<i class=\"fas fa-users\"></i> 项目负责人 (带领 2 名 RA)",

        // Publications
        section_pubs: "学术论文",
        pub_hedas_venue: "ESORICS 2024 International Workshops: DPM, CBT, and CyberICPS, 77-93.",
        pub_hedas_authors: "<strong>Yu Tian</strong>, Tianxiang Shen, Qi Hu, Wei Chen, Heming Cui, and Ji Qi<sup class=\"envelope-icon\"><i class=\"fas fa-envelope\"></i></sup>",

        // Teaching
        section_teaching: "助教经历",
        ta_hku_detail: "<strong>课程助教</strong> @ 香港大学 (COMP3230: 操作系统)",
        ta_hku_date: "2023 秋季 & 2024 秋季",
        
        ta_tongji_detail: "<strong>课程助教</strong> @ 同济大学 (高级语言程序设计)",
        ta_tongji_date: "2020.09 - 2021.06",
    
        // Awards
        section_awards: "荣誉奖项",
        award_national: "本科生国家奖学金 (前 0.2%)",
        award_icpc: "ICPC 亚洲区域赛 (济南站) 银牌",
        award_qidi: "同济大学启迪奖学金 (前 1%)",
        award_grad: "同济大学本科生优秀毕业生",
        award_csp: "CCF 计算机软件能力认证 (CSP) 350分 (前 1.49%)",

        // Skills (New Keys)
        section_skills: "专业技能",
        skill_cat_lang: "编程语言",
        skill_cat_frameworks: "系统与框架",
        skill_cat_research: "研究方向",
        skill_lang: "英语 (托福 98)",
        rein_learn: "强化学习 (RL)"
    }
};