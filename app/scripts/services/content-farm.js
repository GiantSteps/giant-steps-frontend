'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.contentFarm
 * @description
 * # contentFarm
 * Factory in the giantSteps2App.
 */

var projectText = {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3r6zY6YPTOwwUKOkqWygK2",
        "type": "Entry",
        "createdAt": "2015-05-21T10:22:56.542Z",
        "updatedAt": "2016-01-20T09:25:24.439Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 41,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "5DFddAHe80y2EsG6gewGmi"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Static Texts",
        "aboutIntro": "THE GIANTSTEPS PROJECT AIMS TO CREATE THE “SEVEN-LEAGUE BOOTS” FOR MUSIC PRODUCTION IN THE NEXT DECADE AND BEYOND. WE ENVISION DIGITAL MUSICAL TOOLS THAT UNLEASH THE CREATIVE POTENTIAL OF PRACTITIONERS BY TARGETING THREE DIRECTIONS",
        "about": "- Developing and integrating *musical expert agents*, supportive and inspirational systems for melody, harmony, rhythm, structure or style, providing suggestions from sample to song level, while guiding users when they lack inspiration or technical or musical knowledge. These systems will be based on the latest findings in multimodal music information research (MIR) on symbolic, audio and metadata, as well as on new recommendation strategies for the music production domain.\n\n- Developing improved *interfaces* and paradigms for musical human-computer interaction and *collaborative* control of multi-dimensional parameter spaces, leading to intuitive, expressive and tangible input modalities. These interfaces will incorporate novel *visualisation* techniques that provide meaningful and relevant feedback to enable fast comprehensibility for novices and improved workflows for professionals.\n\n- Addressing *low cost portable devices* by developing low complexity algorithms for music analysis and recommendation tailored to their capabilities. This will allow for beyond state of the art music analysis algorithms in affordable production tools and Apps that can be easily distributed and accessed by both professionals and amateurs.",
        "projectObjectives": "### GiantSteps seeks to overcome the limitations of current digital music production tools, to create more powerful, inspirational, collaborative, affordable, user-friendly, and efficient music creation systems. In order to achieve this, there are three scientific and technological objectives to be addressed:\n\n**OBJECTIVE 1: DEVELOP HIGH-PERFORMANCE AND LOW-COMPLEXITY METHODS FOR MUSIC ANALYSIS AND MULTIMODAL MUSIC INFORMATION RESEARCH**\n\nExtracting musical parameters related to rhythm, tempo, melody, or harmony directly from a digital audio signal plays a central role both in music information research (MIR) and advanced music applications. While in academic research the primary goal is to push the limits of what can theoretically be done, for market-ready products, the priority is on delivering robust solutions that work satisfyingly on the target user’s hardware configuration. The central challenge within this objective is to **develop cutting edge MIR technology while bridging the gap with end users’ requirements** to allow for better integration of research outcomes into real world systems.\n\nTo this end, research into **content-based MIR**, with respect to **description of rhythm, tempo, timbre, harmony, melody, and musical structure** is carried out. In addition, further descriptors useful in the context of music production such as “grooveness” (indicating the likeliness that the beat pattern will evoke rhythmical movement from the listener), “loopability” (indicating how well a sample or a segment thereof is suited to be used in a loop), or “predictability” (as opposed to musical complexity) may be developed. For every descriptor, emphasis is put on high efficiency in terms of:\n\n- **Complexity:** With a large application potential for affordable hardware solutions, such as smartphones and tablets, algorithms need to be designed to work on platforms that may offer only limited resources in terms of CPU speed, CPU instructions, and memory. Nevertheless, developed algorithms are expected to extract musical properties **faster than real-time** even in environments scarce of these resources.\n\n- **Effectiveness:** Even for current algorithms for extraction of musical properties and knowledge there is still room for improvements with the specific use cases in mind. We will develop new and more effective algorithms for meaningful description of music data in the targeted application scenarios. This will be done by focusing not just on the general accuracy of the algorithms, but on their **effectiveness for the tasks potential users will perform** (application and task oriented MIR algorithms).\n\n- **Scalability:** In order to allow the **applicability of the developed methods on massive collections of material** (which may range from the millions of sound samples considered normal today to unknown future quantities) easily indexable feature representations will be chosen.\n\nIn addition to the musical information extracted directly from the audio content, **further musical knowledge will be extracted from the richest source of musical context, i.e. the web.** The web contains plenty of music related texts that describe even the most specific musical styles and their characteristics. We tap this knowledge of **semantic music descriptions** by developing new, ontology and domain knowledge driven methods for web-based Music Information Extraction.\n\n**Measurable outcomes will include:**\n\n- Improved descriptors for rhythm, tempo, timbre, harmony, and melody.\n\n- Optimized structure detection algorithms.\n\n- Optimized extraction algorithms for low resource platforms.\n\n- Methods for automatically extracting stylistic definitions from semi-structured web sources and mapping of extracted definitions to musical and acoustic properties.\n\nThese outcomes will be measured by evaluating their effectiveness for the tasks they will be included in, as well as testing run-time performance and usage of resources on a variety of hardware configurations and systems. The steps necessary to achieve this objective will be carried out in WP3. The resulting software components and the derived knowledge will be used by the expert and recommendation systems (objective 2) and for visualizing musical properties (objective 3).\n\n\n**OBJECTIVE 2: CREATE AUDIO AND MUSIC EXPERT SYSTEMS TO GUIDE USERS IN COMPOSITION**\n\nAudio and music experts will bring theoretical musical knowledge, typically encoded in symbolic notations and compositional theories, to users accustomed only to work with sound loops and files, thus actively promoting the use of advanced musical concepts. These agents will use and combine the musical knowledge contained in the users’ pool of audio material, which will has been extracted following objective 1, for inferring meaningful music information, identifying compositional issues, and suggesting variations, the use of alternative material, developments or new musical solutions. Five types of expert agents will be developed, each of them dealing with higher-level musical knowledge, and respectively concerned with: (1) sample and loop based segmentation; (2) melody and rhythm; (3) harmony and chord progression; (4) traditional song and form structures identification and segmentation; and (5) genre/style suitability.\n\n**Sample and loop-based segmentation** agents will identify the separated audio parts and sources being used in a composition and detect new potential cutting points as well. **Melody and rhythm agents** will be able to suggest, based on the audio material being used (as well as on the previous symbolic material having been already suggested and integrated), new melodic and/or rhythmic sequences, together with variations of the existing ones. **Harmony and chord progression agents** will infer the key (e.g. fundamental + major or minor) and the chords being used, for suggesting successive or alternative chord progressions. **Structure identification and segmentation agents** will be able to identify important parts in the users’ compositions for suggesting repetitions, variations, or the inclusion of new complementary parts. Finally, the **genre/style agent** will give specific advice especially suited for the style of the music being produced. To this end, musical knowledge about specific styles will be expressed in symbolic form. On top of that, the semantic knowledge about musical styles derived from the web will allow adapting compositions to further, even more specific styles and enabling the agent to automatically stay up-to-date on new musical developments expressed and documented on the web.\n\nThese expert agents will be developed combining two complementary strategies, namely heuristic and AI (machine learning) based approaches. The completion of this objective will require the integration of disparate knowledge and strategies that will push further the current state of the art in this area.\n\n**Measurable outcomes** will include:\n\n- Melody and rhythm software components that will facilitate the generation and the variation of melodies and rhythmic phrases.\n\n- Harmony and chord progression software components that will detect key and tonality, suggest alternative or following chords, and correct/adapt existing melodies to alternative chords.\n\n- Song structure identification and recommendation software components that will identify relevant parts in a song, and suggest complementary or alternative structures.\n\n- Sample, loop, and song recommendation software components, that will help identifying new material to be introduced in the piece as well as their fitting positions, or new tracks to be played after the current one.\n\n- Genre/style suitability software components, which will recommend stylistic modifications and material based on an aimed style (both, based on explicit musical knowledge and knowledge automatically derived from the web and accessible through natural language requests).\n\n This will be **measured** by human assessment from both music experts and non-experts. The steps necessary to achieve this objective will be carried out in **WP4**. The software components will make use of the outcome descriptors resulting from objective 1, and will on its turn be used by the interfaces developed in objective 3.\n\n\n**OBJECTIVE 3: DEVELOP NATURAL AND POWERFUL VISUAL AND TANGIBLE INTERFACES FOR ON- AND OFF-SITE COLLABORATION**\n\nNo matter how well grounded or wise they can be, artificial knowledge and expert agent-based advices might be completely useless or, even worse, annoying and odious, if they are not expressed in the right forms. We consider the seamless integration of musical knowledge into the creative process of the users in order to truly preserve and support their modus operandi and flow one of the central objectives of the project. As a result, the development of powerful and yet transparent, natural and “flow friendly” interfaces is an essential challenge in GiantSteps. The development of novel assistive and intelligent music expert agents calls for new concepts in user interaction and user interfaces to reflect these unprecedented possibilities.\n\nMatching the consortium’s structure and partners for exploitation, we will pursue a two-way strategy in terms of user interface innovation. On one hand we will address the more “classical” production workflow based on a block-building metaphor as incorporated in many currently available commercial music production software packages (such as Native Instruments’ software suite Maschine). On the other hand we will develop new tangible interfaces that will allow for real-time hands-on production and performance, in the tradition of the Reactable. For both these production scenarios we will also develop interaction metaphors well suited for affordable but small multi-touch devices such as smartphones and tablets. Collaborative issues will also be specially addressed. Onsite collaboration will be covered with tabletop tangible interfaces, as well as with distributed interfaces for portable devices. Online collaboration will be covered with the development of cloud-based technologies for distributed non-real-time music production.\n\nIn addition, including novel visualization techniques that provide meaningful feedback is crucial to further facilitate usability in all the interfaces we will work with. We will pursue research beyond the state of the art in non-obtrusive visualization of musical parameters in complex production scenarios, in new HCI paradigms for musical interaction and control of multi-dimensional parameter spaces, and in the manipulative representation of complex hierarchical structures (such as songs). We do also expect that several of these new HCI paradigms will be reused in other real-time control contexts not related to music.\n\n**Measurable outcomes** will include:\n\n- Widgets for integrating new audio and musical knowledge and advisors into production suite user interfaces.\n\n- Interactive visualization techniques for integrating new audio and musical knowledge and advisors into multi-touch mobile devices.\n\n- Interactive visualization techniques for song structure and tonal spaces,\nMulti-user distributed interfaces for local network collaborative work using mobile devices and/or tangible interfaces in sync.\n\n- Multi-user distributed interfaces for remote, cloud-based collaborative work without real-time requirement.\n\nThese outcomes will be **measured by** usability tests. The steps necessary to achieve this objective will be carried out in **WP5**. The results of this objective will be presented to and tested with users (WP2).\n",
        "workPlan": "\n![WORKPLAN2](//images.contentful.com/xrzr1u3na612/1WcWWc6Mqce2Ekkm8OKS4G/6f6d250fb5c418862d720555dc92cb6e/Screen_Shot_2015-08-19_at_09.44.57.png)\n\n\n\n**WP1 – PROJECT MANAGEMENT (JCP-CONNECT)**\n\nWP1 activities address the overall coordination and management of the project. A suitable structure is in place in order to guarantee fulfillment of the project objectives. It covers high-level issues and daily management, as well as the integration of regular daily activities and the setup and implementation of efficient coordination and management of the overall project.\n\n**WP2 – ITERATIVE USER-CENTERED DESIGN & EVALUATION (STEIM)**\n\nWP2 focuses on the requirements of the user-driven development process and the testing of prototypes with end-users. Thus, in the first step, the methodological foundations of GiantSteps will be defined. Throughout the project, WP2 includes the planning and organization of workshops and Red Bull Music Academies, the conducting of user experiments in real use scenarios, and the analysis of the obtained feedback. WP2 will inform WP4 (“Audio & Music Experts”) and WP5 (“Interaction”) of all results gathered during experimentation in order to refine their functionality. Information gathered through WP5 will in turn feed back into WP2.\n\n**WP3 – AUDIO & MUSIC KNOWLEDGE EXTRACTION (JKU)**\n\nWP3 is the core work package to realize the S/T Objective 1 of the project, i.e., to develop highperformance and low-complexity methods for music analysis and multimodal Music Information Research. The musical knowledge extracted here will feed into WP4, where the extracted knowledge is integrated, WP5, where the extracted parameters are used for visualization of musical properties, and WP6 (“Product Integration”). The requirements of WP4 will also influence the developments to be made in this WP. Outcomes will be disseminated in academic contexts (WP7).\n\n**WP4 – AUDIO & MUSIC EXPERTS (UPF-MTG)**\n\nThe goal of WP4 is to develop supportive and inspirational higher-level music expert agents for melody, harmony, and rhythm composition, as well as structural and stylistic agents, that assist users in the creation process. Developed expert agents will transparently guide users when they lack relevant technical or musical knowledge. This is aligned with the S/T Objective 2 of the project. In order to develop these expert agents that conform to the findings of WP2, a combination of heuristic and machine learning strategies will be applied to the knowledge extracted in WP3 (or knowledge assumed to be extractable in order to make development in WP4 less dependent on WP3). Developments of WP4 will be integrated into WP5 and WP6. Outcomes will be disseminated in academic contexts (WP7).\n\n**WP5 – INTERACTION, INTERFACES, VISUALIZATION, COLLABORATION (REACTABLE)**\n\nWP5 addresses the development of the user interfaces that will make use of all the musical knowledge gathered from the algorithms developed in WP3 and WP4, fulfilling S/T Objective 3 of the project. This comprises the development of novel widgets for DAWs, novel visualization techniques. to display of musical knowledge, real-time visualization and interaction paradigms for mobile devices, and multiuser distributed interfaces for collaborative work (on-site and on-line) on mobile devices and/or tangible interfaces. Interface prototypes will be evaluated with users (WP2). Outcomes will be disseminated in academic contexts, as well as through workshops and concerts.\n\n**WP6 – PRODUCT INTEGRATION (NI)**\n\nWP6 deals with product integration of the developed technology into existing solutions of the industrial partners as well as into new tools, applications, and Apps. Outcomes will be disseminated in industrial contexts, as well as through workshops and concerts (WP7).\n\n**WP7 – DISSEMINATION AND EXPLOITATION (NI)**\n\nWP7 is concerned with the dissemination of the project’s results on various levels. Apart from dissemination material such as posters, flyers, a project website, a newsletter, or a social network profile, that will also aid in connecting with the community and related EC projects, the main dissemination strategies comprise the academic dissemination of results at conferences or through journals and the industrial dissemination (e.g., through promotions at expositions or by conceiving a business model and exploitation plan). The foundations of a standardization activity will be put in place based on the developed protocol and APIs. Furthermore, the organization of workshops, concerts and events such as Music Hack Days, together with the presence at the Red Bull Music Academies, will ensure a large visibility and outreach of the project.",
        "consortium": "![jcp](//images.contentful.com/xrzr1u3na612/4APtCaDeGQ02syuSI4OuWi/63384656f0a5e13ef39718fe13971433/jcp.png)\n\n**JCP-Connect (JCP-C)** is a French SME with a strong technical experience in broadband and audio-visual technology and economics. JCP-Consult has contributed to R&D and to standardization in these technologies, through chairmanship of different groups and active participation to several bodies (DVB, DAVIC, ETSI ECCA, and CableLabs). They have a long experience in technical, administrative and legal aspects of R&D European and French projects’ set up & management. Furthermore, JCP-Connect has a developed strategy in business consulting and is active in the areas of new applications, services analysis and cost assessment, ecosystem and business modeling.\n\n\n\n![upf](//images.contentful.com/xrzr1u3na612/5JqOUsTPTGseOS6YyIK4GS/a93d3d2114d7f446579f855c0afb7d72/upf.png)\n**The Music Technology Group (MTG)** is a research group of the Department of Information and Communication Technologies in Universitat Pompeu Fabra (UPF) (Barcelona), specialized in sound and music computing. With more than 45 researchers coming from different disciplines, the group carries out research on topics such as sound processing and synthesis; music content description; interactive music systems; computational models of perceptual and music cognition; and the technologies related with music social networks. The MTG has a broad experience in research projects participating in several European projects since FP4, participated in 14 FP7 projects. It has worked in privately funded projects with companies like Yamaha, mSoft, SGAE, Telefónica I+D or Tape Gallery, and has promoted the foundation of 3 spin-off companies (BMAT, Reactable Systems, Voctro Labs). The MTG leads several undergraduate and postgraduate academic programs, such as the Master and PhD in Sound and Music Computing. The group has produced 20 PhD theses and has a long record of international research publications.\n\n\n\n\n![JKU Logo (new)](//images.contentful.com/xrzr1u3na612/3eBNnDe4k0coMs2oU44EiU/733c1f6630381a9e2c2f8bf3a99e5366/JKU_new_logo.png)\n**The Johannes Kepler University (JKU)** is an impulse center for science and the community and prides itself on a very distinguished international reputation. The various academic programs and courses offered at the Faculty of Engineering and Natural Sciences are complemented by a wide range of international research and development collaborations and close cooperation with industry and business. The individual institutes focus on base-knowledge and application-oriented research as well as hands-on, practical experience along with progressive education.\n\nIn the project, JKU is represented by the Department of Computational Perception (CP.JKU), one of the world’s leading research institutions in Music Information Research (MIR). Since its foundation in 2004, it has been striving to combine research on music and Artificial Intelligence at the highest level, leading to extensive expertise in the areas of Machine Learning, Pattern Recognition, Web and Social Media Mining, Intelligent Music and Signal Processing, Music Information Research, Music Performance Research, and Intelligent Audio-visual Interfaces. For the project, CP.JKU will foremost contribute expertise in MIR, Machine Learning, Web Mining, and Web Information Extraction, although expertise in other areas of expertise, such as visualization, will be an additional asset.\n\n\n![yds](//images.contentful.com/xrzr1u3na612/58Zfdslk5OCqqAeAA4wiOS/eeb31534c32e75a1d24e81d4a01e6d63/yadastar.png)\n\n\nIn 1998, **Yadastar (YDS)** developed the **Red Bull Music Academy** and gradually helped build the infrastructure for Red Bull’s transformation from a solely sports-driven to a culturally diverse brand with strong roots in music, arts and media. Since then, Yadastar have realized all fifteen annual editions of the Academy, with more than 800 aspiring artists from around the globe having graduated form it (60 students from 35 countries per year, chosen from 4000 submission from about 100 countries). Key elements of the Academy are lectures and master classes by accomplished musicians and music technology innovators (e.g. Dr.Robert Moog, Erykah Badu, Bootsy Collin, Gilberto Gil) sound music producers, as well as studio production workshops and collaborative writing and recording sessions with students & lecturers. With the ten custom built studios at each edition of the Academy, it is a perfect environment for testing new technologies for music creation. Yadastar have rolled the Academy out internationally to include local workshops (ca. 150/year in 50 countries), music festival stages, radio and recording studios, recording sessions (Yadastar’s studio technology department has managed recording studio design and construction in 10 countries) and signature events in more than 60 countries. Beyond the programming and realization of the Academy event and its numerous spin-offs, Yadastar have created all Red Bull Music Academy content channels like Red Bull Music Academy Radio, the Red Bull Music Academy Website with a Podcast and Event Guides, and are running their 24/7 editorial offices. Yadastar are also responsible for the global Red Bull Music Academy communication strategy, creation of communication tools and the co-ordination of a worldwide network of ambassadors and media departments.\n\n\n\n\n\n![steim-300x165](//images.contentful.com/xrzr1u3na612/3zTibNgQNqKGCAw0yCwauu/f0ec16bcc9ba4d541738b13a02ff4d83/steim-300x165.png)\n\n**STEIM (STudio for Electro Instrumental Music)** is a centre for research and development of new musical instruments in the electronic performing arts, located in Amsterdam, Netherlands. Electronic music in STEIM’s context is always strongly related to the physical and direct actions of a musician. In this tradition, STEIM supports artists in residence such as composers and performers to develop instruments, which allow for improvisation and performance with individually designed technology.\n\n\n\n\n\n![reactable-300x300](//images.contentful.com/xrzr1u3na612/7M2eqr8pk4KS6CmoG2GY6I/0307e5d1cc60838fb2dafaa1999b5ec4/reactable-300x300.png)\n**Reactable Systems (RS)** is a company founded in 2009 and based in Barcelona. It is a Spin-off company of the Music Technology Group at the Pompeu Fabra University in Barcelona. The company’s business is based on interactive technology with a strong link to musical applications, and it is mainly based on the Reactable musical instrument, a table based interactive screen with object recognition and multi-touch input, as well as the Reactable Mobile application for portable devices, phones and tablets. Over one hundred Reactable units are present in international music stages, recording studios or science museums, and more than 100,000 Reactable Mobile apps for IOS and Android have been sold all over the world. Reactable Systems products have receive many international awards, both for the Reactable tabletop (Prix Ars Electronica Golden Nica “Digital Musics” 2008, D&AD “Digital Installations” and “Environmental Design / Installations” Yellow Pencils 2008, City of Barcelona Prize “Multimedia” 2007, Rolling Stone Magazine’s Hot Instrument of the Year 2007, or Hottest Music Biz Start-Up Award MIDEM, Cannes 2007) as well as for Reactable Mobile (App Store. Top 10 Music App Worldwide, iTunes Rewind 2010. Best Music Apps, Best Music App Ever. 2nd and 3rd Place and BI Designs of the Year. Interactive category nomination). Reactable Systems also delivers custom interactive and multimedia applications such as the new software for the magic fountain in Barcelona and the illumination of the Jean Nouvels skyscraper “Torre Agbar” in Barcelona.\n\n\n\n\n\n![ni-300x45](//images.contentful.com/xrzr1u3na612/1atZll0WUOQGYOCUYK8oC2/f84eb4d56cf5479fb8c64c945fc3effa/ni-300x45.png)\n**Native Instruments (NI)** is a leading manufacturer of software and hardware for computer-based audio production and DJing. The company’s mission is to develop innovative, fully integrated solutions for all musical styles and professions. With its foundation in 1996, Native Instruments opened up the world of real-time sound synthesis on standard computers. Since then, the company’s innovative audio technology has strongly influenced the ways in which people create and perform music. Native Instruments products combine outstanding sound quality with high usability and comprehensive functionality. The Maschine product range has revolutionized digital groove production with its integrated hardware-software concept and intuitive real-time workflow. Widely adopted in both electronic and urban music genres and beyond, Maschine created a new and particularly spontaneous way of producing and performing beat-oriented music. Based on the ground-breaking Traktor software that first pioneered the concept of full-featured computer-based DJing in 2001, and complemented with a diverse and growing range of hardware controllers and audio interfaces, the product family has come to represent the contemporary paradigm of DJing. The Komplete family comprises a wide range of software instruments and effects, designed to facilitate professional music production across various styles and genres. It now represents over 50 individual products, including such creative tools as the modular sound design software Reaktor, the market-leading sampler Kontakt, and the digital effects studio Guitar Rig.\n\nNative Instruments sees itself as a part of an international music scene, and is in constant communication with artists whose feedback is integrated into the conception and continuous improvement of its products.\nNative Instruments is run by CEO Daniel Haver and President Mate Galic, and currently employs more than 300 people in its offices in Berlin, Los Angeles and Tokyo.",
        "imprint": "**Name:** Seven League Boots for Music Creation and Performance\n\n**Short name:** GiantSteps\n\n**Instrument:** Collaborative Project (CP) – Small or medium-scale focused research project (STREP)\n\n**Project Identifier:** FP7-610591\n\n**Start Date:** 01 Nov 2013\n\n**End Date:** 31 Oct 2016\n\n**Total Budget:** € 4,220,216.00\n\n**European Commission funding**: € 2,900,000.00\n\n**Scientific Coordination:** Universitat Pompeu Fabra (UPF-MTG)\n\n**Administrative and Financial Coordination:** JCP-Connect SAS (JCP-C)\n\n__This project has received funding from the European Union’s Seventh Framework Programme for research, technological development and demonstration under grant agreement no 610591.__\n\n![flag yellow low transp](//images.contentful.com/xrzr1u3na612/1sTh1iYxMcwsImkMo2wMqA/2b9d5b47d566c0860cecc27cb3af9158/flag_yellow_low_transp.png)\n\n\n\n\n",
        "software": "[Updated version of the SuperFlux onset detection algorithm](https://github.com/CPJKU/SuperFlux)\n\n\n\n[essentiaRT~](http://mtg.upf.edu/technologies/EssentiaRT~) Real-time subset of Essentia (MTG’s open-source C++ library for audio analysis and audio-based music information retrieval) implemented as an external for Pd and Max/MSP.\n\n\n\n[GiantSteps on GitHub](https://github.com/GiantSteps)",
        "dataSets": "Currently, two datasets are available for download.\n\n__1. GiantSteps Tempo Set__, as described in:\n\nP. Knees, Á. Faraldo, P. Herrera, R. Vogl, S. Böck, F. Hörschläger, and M. Le Goff. \nTwo Data Sets for Tempo Estimation and Key Detection in Electronic Dance Music Annotated from User Corrections. \nIn *Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR)*, Málaga, Spain, 2015.\n\nPlease cite this paper if you make use of one of the data sets in your work.\n\n[Access GiantSteps Tempo Set](http://www.cp.jku.at/datasets/giantsteps/#tempo)\n\n\n\n__2. GiantSteps Key Set__, as described in:\n\nP. Knees, Á. Faraldo, P. Herrera, R. Vogl, S. Böck, F. Hörschläger, and M. Le Goff. \nTwo Data Sets for Tempo Estimation and Key Detection in Electronic Dance Music Annotated from User Corrections. \nIn *Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR)*, Málaga, Spain, 2015.\n\nPlease cite this paper if you make use of one of the data sets in your work.\n\n[Access GiantSteps Key Set](https://www.cp.jku.at/datasets/giantsteps/#key)",
        "contact": "test"
      }
    }
  ]
};

var eventsText = {
  "sys": {
    "type": "Array"
  },
  "total": 44,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5F6NTjgarueasakyQycsuu",
        "type": "Entry",
        "createdAt": "2016-06-10T14:32:21.786Z",
        "updatedAt": "2016-06-10T14:33:11.872Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at WavesVienna!",
        "dateTime": "2016-06-10T00:00+03:00",
        "teaser": "GiantSteps is official supporter of WavesVienna!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7hyEllTKOke4sgOUMAYMuM"
            }
          }
        ],
        "bodyText": "The Waves Music Hackday is a full-day workshop event, where hackers, musicians, thinkers and makers come together to design and create the future of music. Meet\ncreative people, spin your ideas, and start realizing them!\n\n[Download leaflet](https://assets.contentful.com/xrzr1u3na612/357N9arzT2kiIGyqgOMQys/2429841c9668a17a9cc238b6dc41e7a2/Waves_2016_Music_Hackday_v4.pdf)",
        "slug": "news_wavesvienna"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3uOHVarKQgcM0aaWME24ac",
        "type": "Entry",
        "createdAt": "2015-10-30T17:15:22.458Z",
        "updatedAt": "2016-01-11T14:44:13.208Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 26,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Understanding human creativity in music",
        "dateTime": "2015-10-30",
        "teaser": "How the workshop between 5 EU projects in Lisbon went...",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3BKq7wS9I4Wa24MuKmSIwm"
            }
          }
        ],
        "bodyText": "5 European projects, complementing each other, got together in Lisbon on 21st of October, in order to share thoughts, ideas, and findings – for better understanding of creativity, for making better tools, technologies and experiences.\n\nCovering plenty of aspects - starting from scientific understanding of human creativity, spreading to creating of something yet unknown - either device, visualization or interface, covering different music styles, both electronic and classical music as well as business aspects this workshop lasted for more than 3 hours.\n\n\nThe presentation given at the workshop can be downloaded for view below:\n\n[Keynote: creativity, its scientific understanding and models](//assets.contentful.com/xrzr1u3na612/6a0ARuFXryE6Wg0eyGuc0m/c7cd3b3d427e9d7031f2fac16ae04011/Maarten_Grachten_presentation.pdf) (Maarten Grachten, project [Lrn2Cre8](http://lrn2cre8.eu/))\n\n[Creation of unknown technology and making new music](//assets.contentful.com/xrzr1u3na612/6ilzByACB2ywsq0oMEQWAW/9c7e5526eeb7be3e3645af8649b3c4d7/GiantSteps_ppt_lisbon_worshop_public__1_.pdf) (Kristina Andersen, project [GiantSteps](http://www.giantsteps-project.eu/#/))\n\n[Pathways for turning Music Tech research outcomes into innovative bricks for new creative industries ventures](https://assets.contentful.com/xrzr1u3na612/7dpwkX3584Uqi8ks2iYiAE/7eb528e16a54ada0764e3e371c8b7325/_MusicBricks.pdf) (Marta Arniani, project [#MusicBricks](http://musictechfest.net/musicbricks/))\n\n[New ways of experiencing classical music](//downloads.contentful.com/xrzr1u3na612/4BpxeugLC0AK8eyceqyieA/2454b9d8694c1ddb6b6f312f67f5702b/PHENICX_presentation_forWeb.pdf) (Cynthia Liem, project [PHENICX](http://phenicx.upf.edu/))\n\n[Designing expressive interfaces for boosting creativity in music](//assets.contentful.com/xrzr1u3na612/5AWYMagASsYGUcY8oo6WWo/c743c6193ffaeb65afecd8a22d978aef/1510_RAPID_MIX_presentation_sergi.pdf) (Sergi Jorda, project [RAPID-MIX](http://rapidmix.goldsmithsdigital.com/))\n\n\n\n\n![IMG 4112](//images.contentful.com/xrzr1u3na612/1t46MuRI4UMEgmCa8ysmkO/93e0b12415447b7f68e7b65b443412df/IMG_4112.JPG) ![IMG 4145](//images.contentful.com/xrzr1u3na612/JfN3Np9D8cI86KAKCOC8o/f7405c6a9eb242cf7d4e94e740e046aa/IMG_4145.JPG) ![IMG 4138](//images.contentful.com/xrzr1u3na612/T05YqZ9aeIUEeICmkoswU/259a960c61af0e260341685ac0d1b092/IMG_4138.JPG) ![IMG 4179](//images.contentful.com/xrzr1u3na612/4nsVIbfMBGI2c6WOKQYSOM/7629d495022a5bf238b93798df1149c5/IMG_4179.JPG) ![IMG 4079](//images.contentful.com/xrzr1u3na612/11oMN9fisiQ4gSumM0YAQe/27def0dcf8183f3a4097dbf4cc2bf8e9/IMG_4079.JPG) ![IMG 4124](//images.contentful.com/xrzr1u3na612/1GbgB0ez96yCwIs6wQaeyS/d65f36ca9dd5668210b395d9bf052207/IMG_4124.JPG) ![IMG 4136](//images.contentful.com/xrzr1u3na612/2or8RR05uAq2uIMCiwE8kU/390f5b39100f8d6f73c927337af9a5a3/IMG_4136.JPG) ![IMG 4096](//images.contentful.com/xrzr1u3na612/3MrSmMqRT2EacEAgK4Cuyw/bc40c7528279de473819d067ae0c9f7d/IMG_4096.JPG) ![IMG 4185](//images.contentful.com/xrzr1u3na612/236fZWBIlSEqIe2EKECC8O/559d060c74680d44a269f5d4302eeffa/IMG_4185.JPG) ![IMG 4093](//images.contentful.com/xrzr1u3na612/3ZGzbuup9mKAaEoawI28G2/1794b99d80d98728a2fba57ce000ea3d/IMG_4093.JPG)\n\n\n",
        "slug": "Lisbon_workshop_on_creativity"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1svWua73zCA2KYs8q4swqQ",
        "type": "Entry",
        "createdAt": "2016-02-29T10:54:52.795Z",
        "updatedAt": "2016-03-31T13:13:21.759Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps talk in Taiwan",
        "dateTime": "2016-02-26",
        "teaser": "Peter Knees from JKU gave a talk at 4th Taiwanese Music and Audio Computing Workshop.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7wXLkq0JyMS4i446mIuGUm"
            }
          }
        ],
        "bodyText": "Peter Knees (Johannes Kepler University Linz) gave a talk on GiantSteps titled \"Only Personalized Retrieval can be Semantic Retrieval or: What Music Producers Want from Retrieval and Recommender Systems” on Feb 22, 2016 at the 4th Taiwanese Music and Audio Computing Workshop.\n\n[More information](https://tmacw16.wordpress.com/)\n\n![tw ws 2](//images.contentful.com/xrzr1u3na612/3y4nYgLF60YeeCyIsoaWeY/f3a41d7bae0145645dc8f273a7c6e039/tw_ws_2.png) ![tw ws 1](//images.contentful.com/xrzr1u3na612/38dGPkbliUCwEasceiakeU/55ad6822ad1b08a983d803ea37ac362d/tw_ws_1.png)\n",
        "slug": "taiwanese_workshop"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5hsesjEKDmywUk6uUqwA0w",
        "type": "Entry",
        "createdAt": "2015-12-03T09:02:11.703Z",
        "updatedAt": "2015-12-03T11:50:54.961Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Second year dissemination report released",
        "dateTime": "2015-12-01",
        "teaser": "Giantsteps team releases latest deliverable, the D7.4 Second year dissemination report!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5eC02esDA4MOkiuayA2giE"
            }
          }
        ],
        "bodyText": "GiantSteps has released its second year dissemination report. For more information and download visit [this page](http://www.giantsteps-project.eu/#/downloads/deliverables)\n\n",
        "slug": "d74release"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "15NaDv8vFQq4E4YAg2ukGs",
        "type": "Entry",
        "createdAt": "2015-11-30T11:27:37.698Z",
        "updatedAt": "2015-11-30T11:27:37.698Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at IRCAM!",
        "dateTime": "2015-11-30",
        "teaser": "International IRCAM Forum Workshop in Paris",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4xtl5DE6CAW0mms6KuIiyi"
            }
          }
        ],
        "bodyText": "GiantSteps was invited to present at the IRCAM forum event in Paris (http://forumnet.ircam.fr/event/parisworkshop2015/) on 26th of November. The presentation outlined the current state of the project with a focus on functional and non-functional prototypes and the methods we use to generate and validate these. There were much interest for the project at the event and questions were centered on our user group (in terms of demographics and style) and our position regarding tangible interfaces versus software.\n ",
        "slug": "ircam"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "350yhVGSNa64eKQwmYUaeW",
        "type": "Entry",
        "createdAt": "2016-06-30T13:17:36.108Z",
        "updatedAt": "2016-06-30T15:03:31.985Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Winning hacks from MTF",
        "dateTime": "2016-06-30T00:00+03:00",
        "teaser": "MTF Berlin GiantSteps Hackathon Challenge winners",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2QHxW95IXYYeeQ6eoeuq6s"
            }
          }
        ],
        "bodyText": "On the weekend from Friday 27th until Sunday 29th of May, the Music Tech Fest Berlin located at the [Funkhaus Berlin](http://www.funkhaus-berlin.net) took place.\n\n\nThe program was a mix of Performances, Art Exhibitions, Tech Talks, Jam Sessions, and the famous MTF Hackathon.\n\n\nGiantSteps sponsored a Hackathon challenge, providing an award of 200€ worth of vouchers for the Native Instruments online shop, going to the best project making use of GiantSteps tools.\n\n\nAround 70 hackers attended the Hackathon and several teams used GiantSteps technology to implement amazing projects within the 24 hours time limit. \nA really nice hack by [Tom Fox](https://vulpestruments.com), [Luis Zayas](http://luiszayas.com), and [Gawain Hewitt](http://gawainhewitt.co.uk/), named “To Be Remembered” convinced the judges and won the challenge. They presented an amazing performance featuring an improvisation by singer Eska to the sounds created by their installation.\n\n\nThey used the harmony agent developed in the course of the GiantSteps project in a sound installation incorporating a tree. Strings mounted on the stem were hit by piano hammers, while diverse sensors were used to control the sound and notes to create a living soundscape.\n\n\nA special mentioning goes to the hack “The Mad Drummer” by Ryan Groves and Georgi Dzhambazov, who used the [madmom](https://github.com/CPJKU/madmom) signal processing library to implement an automatic drummer for guitar accompaniment.\n\n![mtf2](//images.contentful.com/xrzr1u3na612/6Je20bz4cM4YCiMIQ2E6sw/89f1dafccd095f5b66d3e4404b293115/mtf2.png)\n",
        "slug": "MTF_hack_winners"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "41F6cPmECQgeAekAmiwaG2",
        "type": "Entry",
        "createdAt": "2016-05-17T14:37:35.647Z",
        "updatedAt": "2016-05-20T10:24:55.484Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at Music Tech Fest",
        "dateTime": "2016-05-13T00:00+03:00",
        "teaser": "GiantSteps hack challenge at #MTF!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3EgzJvQJNKywUIqAw0AiSG"
            }
          }
        ],
        "bodyText": "GiantSteps will pose a hack challenge at #MTF Berlin on 27-29 of May 2016. The hack challenge is targeted at the most interesting applications using GiantSteps tools. \n\nGiantSteps is a research project, delivering set of new generation digital music-making tools, intelligent agents and interfaces. Musical expert agents, supportive and inspirational systems for melody, harmony, and rhythm are delivered by GiantSteps for guiding users during composition when they lack inspiration or technical or musical knowledge.\n\nTools might be used for composing tracks (full tracks of pieces - e.g. highlighting tempo/style/rhythm transitions), creating new algorithms - or for any other application.\n\nTools available for hackers are:\n\n   GS-Harmony (Pd patch, standalone MIDI I/O application) - harmony expert agent;\n\n   Drumming with Style (Pd patch, standalone MIDI I/O application) - drum pattern variation agent;\n\n   Madmom Library - library rapid prototyping of new algorithms;\n\n   Rhythm Pattern Variation Prototype and Library - Tool for automatic variation of step sequencer rhythm patterns;\n\n   Automatic Dynamic Timewarping Tool - Madmom powered prototype to automatically warp songs with variable tempo to a fixed tempo grid;\n\n   Reactable Studio beta (for iPad Pro - iPad Pro will be provided by GiantSteps team) - Mobile application for music creation/mixing;\n\n   New Reactable Mobile 2.4 (for iPhone/Android) - Mobile application for music creation / mixing;\n\n   Updated Rhythmcat VST - drum sounds search agent.\n\nTechnical support for each tool will be provided for hackers by GiantSteps team (4 people).\n\nFull description of tools functionality and technical information will be available soon.\n\nBest use of GiantSteps tools will be awarded with single prize, which is 200€ voucher for Native Instruments online store.",
        "slug": "MTF_hack_challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5aTMyiNWRiaUIIwGsWuY4w",
        "type": "Entry",
        "createdAt": "2016-07-22T12:24:36.662Z",
        "updatedAt": "2016-07-22T12:25:13.336Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Best paper award at NIME!",
        "dateTime": "2016-07-21T00:00+03:00",
        "teaser": "Paper resulted from GiantSteps!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3TwGsCI6u46Y6AAwA8Q6Os"
            }
          }
        ],
        "bodyText": "A paper resulted from GiantSteps and presented by researchers of the UPF's Music Technology Group (Cárthach Ó Nuanáin, Sergi Jordà & Perfecto Herrera) has received the \"best paper award\" in the 16th International Conference on New Interfaces for Musical Expression (NIME), one of the most relevant and influential in the area of music technology, which was held recently in Brisbane, Australia.\n\n\nThe paper \"An Interactive Software Instrument for Real-time Rhythmic Concatenative Synthesis\" describes an approach for generating and\nvisualising new rhythmic patterns from existing audio in\nreal-time using concatenative synthesis. A graph-based model enables a novel 2-dimensional visualisation and manipulation of new patterns that mimic the rhythmic and timbral character of an existing target seed pattern. A VST audio plugin has been implemented using the reported research and has got positive acceptance not only in Brisbane's presentation but also in other non-academic meetings like Sonar+D and Music Tech Fest.",
        "slug": "NIME_best_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "qpQHhNQ4eW6ua0U40ioUi",
        "type": "Entry",
        "createdAt": "2016-06-16T14:43:41.519Z",
        "updatedAt": "2016-06-20T16:00:58.204Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 9,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "At Sónar+D",
        "dateTime": "2016-06-16T00:00+03:00",
        "teaser": "Live from GiantSteps booth...",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "26THAaia9WYgUSIm4oI6Uw"
            }
          }
        ],
        "bodyText": "GiantSteps partners at GiantSteps booth...\n\n![sonar16 1](//images.contentful.com/xrzr1u3na612/4BSTlGHSXCqEY8YoK6M24G/91f2bf080eed6e09555a689a5d05c4e8/sonar16_1.jpg) ![sonar16 2](//images.contentful.com/xrzr1u3na612/3avWrP3kneayWQeOOaUgWe/d97518de1cc51ff1765d1ade77f02746/sonar16_2.jpg) ![sonar16 3](//images.contentful.com/xrzr1u3na612/4tGASUPFjaCIo8GuKwmWW2/2e460a7d9d88165786e90fc3998c229e/sonar16_3.jpg) ![sonar16 4](//images.contentful.com/xrzr1u3na612/47D6ljUAiksGWMKC66s4w0/0d092b61fcc1a4a63dcb11c61f1dd15a/sonar16_4.jpg)\n![sonar16 5](//images.contentful.com/xrzr1u3na612/WPfBF8rASks8qkyGwCg26/c0ea51b14daadefd1d14072cea90cd61/sonar16_5.jpg) ![sonar16 6](//images.contentful.com/xrzr1u3na612/DVpsKshhQGWgkMsgmOkCk/f02521d667e380b667cac52b1486513c/sonar16_6.jpg)\n![sonar16 7](//images.contentful.com/xrzr1u3na612/2a51XVIJtymWI886SOw4Ok/9306dc3f589167744d7b0633b8daad29/sonar16_7.jpg)\n![sonar16 9](//images.contentful.com/xrzr1u3na612/6lim0BuNwW6GwsY8Ek8kgq/a0e06a17ec6d6a96e38fd4eb6a757255/sonar16_9.jpg)\n![sonar16 11](//images.contentful.com/xrzr1u3na612/2R5pO6RXIkYmmEu42EYowE/10f36e630279a9c65e6fb7d50f27742b/sonar16_11.jpg) ![sonar16 10](//images.contentful.com/xrzr1u3na612/3IkWlc49vW6AYUAyIaEaks/b619c2ba0413aa13ad62ec9a5b7279a1/sonar16_10.jpg) ![sonar16 12](//images.contentful.com/xrzr1u3na612/163FawdQjIq0QEI4o8wQeq/453c2ea6fe4c6770c5480ed633a52315/sonar16_12.jpg)",
        "slug": "live_from_sonar"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "73LsEWxrMW2uM2GEmgqwiO",
        "type": "Entry",
        "createdAt": "2017-02-28T12:44:47.781Z",
        "updatedAt": "2017-02-28T12:44:47.781Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps is over",
        "dateTime": "2017-02-28T00:00+02:00",
        "teaser": "The project has officially ended",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "TEligmo90YwsKqQocyequ"
            }
          }
        ],
        "bodyText": "Project has officially ended (actually already in October 2016), however preparation of last deliverables, final review, administrative issues, etc. are still taking some time.\n\nIn January 2017 the project received an \"Excellent\" mark during the review performed by European Commission and independent experts.",
        "slug": "giantsteps_is_over"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5s7jqezy8w6qeCIQwQoeMo",
        "type": "Entry",
        "createdAt": "2016-05-24T13:44:11.179Z",
        "updatedAt": "2016-05-24T13:52:27.782Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 5,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Sónar+D wants technology to think of users and artists first",
        "dateTime": "2016-05-24T00:00+03:00",
        "teaser": "Article in La Vanguardia mentioning GiantSteps",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4TNPZUinbqqwQy8CygkOOw"
            }
          }
        ],
        "bodyText": "(in Catalan language)\n\n![sonar_writeup](//images.contentful.com/xrzr1u3na612/3NgDCue7448qUE8C2Qyoa6/77a0b336dbd9d9231b8632c301714bbe/sonar_writeup.jpg)\n\n[GiantSteps booth at Sónar+D](http://www.giantsteps-project.eu/#/events/giantsteps_booth_at_sonarplusd)",
        "slug": "lavanguardia"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3Qfhi8ykCQaEKkUSmG02c2",
        "type": "Entry",
        "createdAt": "2015-12-14T11:11:00.164Z",
        "updatedAt": "2015-12-14T11:12:05.663Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Native Instruments iMaschine 2 with GiantSteps Technology",
        "dateTime": "2015-12-11",
        "teaser": "Make music anywhere with iMASCHINE 2!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "416UKEnyU02q666IIIg2aE"
            }
          }
        ],
        "bodyText": "Native Instruments iMaschine 2 introduces a new set of features, including Arranger, Step Mode, and Smart Play functionality. It is also one of the first music production apps to include optimizations for the new 3D Touch features on Apple iPhones.\n\nThe new Smart Play keyboard introduces Scale, Chord and Arpeggiator functionality to iMaschine 2, allowing users to play chords, melodies, and basslines that are always in-key. The Scale mode offers users to select from a variety of traditional and non-traditional scales, while the Chord mode will turn a single key stroke into a full chord, which is especially useful when working on a mobile device. Within Chord Mode, the new Chord Sets present ready-to-play progressions to inspire and augment compositions. Furthermore, the Arpeggiator makes it easy to add dynamic motion to a track.\n\n<a href=\"https://www.youtube.com/watch?v=XllIqoyc6P8\" class=\"embedly-card\" data-card-width=\"100%\" data-card-controls=\"0\">Embedded content: https://www.youtube.com/watch?v=XllIqoyc6P8</a>",
        "slug": "iMaschine2"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3s8F9pw9OEMSauwaQeQoQ0",
        "type": "Entry",
        "createdAt": "2015-09-30T13:26:37.945Z",
        "updatedAt": "2015-09-30T13:32:25.320Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": " Best Bitalino Hack and Best Juce Hack",
        "dateTime": "2015-06-30",
        "teaser": "GiantSteps partner wins the prizes for Best Bitalino Hack and Best Juce Hack!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2jrJpTsF72gGa0ecUmqci4"
            }
          }
        ],
        "bodyText": "GiantSteps partner, JKU researcher Richard Vogl wins the prizes for Best Bitalino Hack and Best Juce Hack at the Music Hack Day 2015 in Barcelona. Watch the [presentation](https://www.youtube.com/watch?v=sWerNCeb7JE&feature=youtu.be&t=2h3m24s) of the hack.",
        "slug": "bitalino_hack_juce_hack"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4lelJK0lSEwIUCwksE4aEQ",
        "type": "Entry",
        "createdAt": "2015-12-16T14:03:38.178Z",
        "updatedAt": "2015-12-16T14:06:03.379Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 5,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Creative Europe: measuring the creative industries of the EU",
        "dateTime": "2015-12-11",
        "teaser": "NESTA welcomes increasing policy debate in report",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "69xaC3JBIW4iWIcWCQSsk6"
            }
          }
        ],
        "bodyText": "[NESTA](http://www.nesta.org.uk/), an innovation charity with a mission to help people and organisations bring great ideas to life, releases [report](<http://www.nesta.org.uk/blog/creative-europe-measuring-creative-industries-eu?utm_source=Nesta+Weekly+Newsletter&utm_campaign=213c2ed2bb-Nesta_Newsletter_16_12_1512_14_2015&utm_medium=email&utm_term=0_d17364114d-213c2ed2bb-181435029#sthash.cTSVO7xf.uxfs&st_refDomain=t.co&st_refQuery=/D3296pEkS0?t=1&cn=ZmxleGlibGVfcmVjc18y&sig=d307ea8a70deaea269b9b6dfabbda4e704a7259e&al=1&iid=a18b4326b8774b28b4007f1ba5dde7a7&autoactions=1450269995&uid=210798140&nid=244+292>) on \"Creative Europe: measuring the creative industries of the EU\".\n\nHere's a teaser:\n\n\"The origins of the EU – a coal and steel free trade agreement - lie elsewhere; however Europe’s creative industries are likely to be an increasingly important part of its economic future. Creative industries provide jobs that are highly skilled and more resistant to automation, jobs that are therefore more likely to be sustainable. Understanding them is therefore of strategic importance.\n\nA challenge in thinking about creative industries at a European level has been the absence of comparable statistics across the countries of the EU. Nesta’s report by Max Nathan, Andy Pratt and Ana Rincon-Aznar, published today, helps address this by providing consistent estimates of employment in the creative industries of the EU’s 28 member states and, where data has allowed, the wider ‘creative economies’ of 20 member states (the ‘creative economy’ consists of jobs inside the creative industries and creative jobs in other industries, for example a designer working for a car manufacturer).\"\n\n\n[See here for the rest](http://www.nesta.org.uk/blog/creative-europe-measuring-creative-industries-eu?utm_source=Nesta+Weekly+Newsletter&utm_campaign=213c2ed2bb-Nesta_Newsletter_16_12_1512_14_2015&utm_medium=email&utm_term=0_d17364114d-213c2ed2bb-181435029#sthash.cTSVO7xf.uxfs&st_refDomain=t.co&st_refQuery=/D3296pEkS0?t=1&cn=ZmxleGlibGVfcmVjc18y&sig=d307ea8a70deaea269b9b6dfabbda4e704a7259e&al=1&iid=a18b4326b8774b28b4007f1ba5dde7a7&autoactions=1450269995&uid=210798140&nid=244+292)",
        "slug": "nesta_report"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4TUpZpEVBmYA0CcM8U82W",
        "type": "Entry",
        "createdAt": "2016-04-15T14:05:51.070Z",
        "updatedAt": "2016-04-15T14:08:07.571Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at NIME2016",
        "dateTime": "2016-04-08",
        "teaser": "An Interactive Software Instrument for Real-time Rhythmic Concatenative Synthesis",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3TwGsCI6u46Y6AAwA8Q6Os"
            }
          }
        ],
        "bodyText": "In this paper we describe an approach for generating and visualising new rhythmic patterns from existing audio in real-time using concatenative synthesis. We introduce a graph-based model enabling novel visualisation and manipulation of patterns that mimic the rhythmic and timbral character of a target seed pattern using a separate database of palette sounds. Our approach is described, reporting on those features that may be useful in describing units of sound related to rhythm and how they might then be projected into two-dimensional space for visualisation using\nreduction techniques and clustering. We conclude the paper with our qualitative appraisal of using the interface and outline scope for future work.\n\n[For more...](http://mtg.upf.edu/node/3464)",
        "slug": "nime_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4Dl1lLfiWcKkGqc80IAiEO",
        "type": "Entry",
        "createdAt": "2016-05-24T13:11:37.706Z",
        "updatedAt": "2016-05-24T13:13:41.850Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at ICMC 2016",
        "dateTime": "2016-05-24T00:00+03:00",
        "teaser": "The GiantSteps Project: A Second-Year Intermediate Report",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2I9o4hbLEs4UUKqS0Y6Qis"
            }
          }
        ],
        "bodyText": "__The GiantSteps Project: A Second-Year Intermediate Report__\n\nP. Knees, K. Andersen, S. Jordà, M. Hlatky, A. Bucci, W. Gaebele, and R. Kaurson.\nProceedings of the 42nd International Computer Music Conference (ICMC 2016)\nUtrecht, the Netherlands, September 14-16, 2016.\n\n__Abstract:__\n\nWe report on the progress of GiantSteps, an EU-funded project involving institutions from academia, practitioners, and industrial partners with the goal of developing new concepts for intelligent and collaborative interfaces for music production and performance. At the core of the project is an iterative, user-centric research approach to music information retrieval (MIR) and human computer interaction (HCI) that is designed to allow us to accomplish three main targets, namely (1) the development of intelligent musical expert agents to support and inspire music makers, (2) more intuitive and collaborative interfaces, and (3) low-complexity methods addressing low-cost devices to enable affordable and accessible production tools and apps. In this paper, we report on the main findings and achievements of the project's first two years.\n\n",
        "slug": "ICMC16_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3i7ydOtZ8c8eo6W8u4m4u8",
        "type": "Entry",
        "createdAt": "2015-08-19T06:21:28.520Z",
        "updatedAt": "2015-08-19T06:21:54.859Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at CHI2014",
        "dateTime": "2014-05-05",
        "teaser": "Giantsteps methodology outlined",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1lkXsI3KHS0qy4CwMOK8MC"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "XckOX5xSQEK0g4KSkQG8G"
            }
          }
        ],
        "bodyText": "The [ACM CHI](https://chi2014.acm.org/) Conference on Human Factors in Computing Systems is the premier international conference of Human-Computer Interaction. It is also the top venue for discussion and publication of state-of-the-art research into any aspect of user involvement.\n\nKristina Andersen submitted a position paper outlining the methodology of Giantsteps to the workshop “Alternate Endings: Using Fiction to Explore Design Futures.” All position papers were peer reviewed and published on the dedicated workshop website.\n\nThe paper was called: Using Props to Explore Design Futures: Making New Instruments and the abstract reads: “This paper describes the making of fictional technological objects in the context of the GiantSteps project. User research is traditionally conducted to allow end-users of a product to influence and guide the development and design of a device. The type of workshop described in this paper sets its aim much earlier in the process to engage users in a conversation about their technological desires and needs, in order to determine the design requirements for the project itself. As such the workshops are an attempt to facilitate a lived experience of engaging directly with an essentially imaginary future object.”\n\nThe workshop itself was an opportunity to discuss design research with top international researchers and the day was very successful not only in enriching our own work within the GiantSteps project but also building alliances and contacts with a view to submitting our own workshop proposal for CHI2015.\n\n\n\n![chi14](//images.contentful.com/xrzr1u3na612/XckOX5xSQEK0g4KSkQG8G/81787e4a44d0734c5397e007f0955773/chi14.jpg)\n",
        "slug": "chi14"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "12DitVU4FwsgqWKIUC8yWM",
        "type": "Entry",
        "createdAt": "2017-02-22T13:57:27.694Z",
        "updatedAt": "2017-02-22T13:59:08.667Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Playing with GiantSteps tools",
        "dateTime": "2017-02-21T00:00+02:00",
        "teaser": "Jam session using only GiantSteps tools!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "44q1uRtmpW8qcCAEUMKcU4"
            }
          }
        ],
        "bodyText": "Only tools developed in the project were used for this jam:\n\n- Reactable ROTOR\n- Dr Drums\n- Rhythmcat\n- NI - Komplete Keyboard with SmartPlay & Light Guide\n- House Harmonic Filler\n- JKU Rhythm Pattern\n\n\n[Visit GitHub](https://github.com/GiantSteps) to get access to these tools or contact us for more information.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/h_hb2oG6eYc\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "playing_giantsteps"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "7c6G2riRQ4IAgO8EgKuCwq",
        "type": "Entry",
        "createdAt": "2015-08-09T17:40:04.138Z",
        "updatedAt": "2015-08-09T21:23:13.190Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Reactable Tour",
        "dateTime": "2014-06-20",
        "teaser": "Reactable Systems visit",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5bB0gpu2MEuAMiSqm6iAsq"
            }
          }
        ],
        "bodyText": "The GiantSteps consortium took the opportunity to visit Reactable Systems during its plenary meeting in Barcelona (June 16-17).\n\nThe Reactable is an electronic instrument that is played by positioning objects with a particular functionality on an interactive tabletop. We can see in the picture the Reactable Experience (in action) that is meant to be used stationary, though still quite transportable.",
        "slug": "reactable_tour"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "CWZLjjLnJAq6oceqU86mE",
        "type": "Entry",
        "createdAt": "2016-06-15T13:26:52.700Z",
        "updatedAt": "2016-06-15T13:26:52.700Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "SOAP workshop co-organized by GiantSteps",
        "dateTime": "2016-06-15T00:00+03:00",
        "teaser": "Workshop on Surprise, Opposition, and Obstruction in Adaptive and Personalized Systems (SOAP)",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6RCwDLNtcs08Aaua6YyIk8"
            }
          }
        ],
        "bodyText": "GiantSteps will co-organize a workshop on Surprise, Opposition, and Obstruction in Adaptive and Personalized Systems (SOAP) at the 24th Conference on User Modeling, Adaptation and Personalization (UMAP) in Halifax, NS, Canada on 16th of July.\n\n[More information](https://soapworkshop2016.wordpress.com/)",
        "slug": "news_soap_workshop"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5XcaPlvKVyMaOeQmOCQSIQ",
        "type": "Entry",
        "createdAt": "2015-09-30T13:42:08.963Z",
        "updatedAt": "2015-09-30T13:42:08.963Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Another prize from Music Hack Day",
        "dateTime": "2015-07-01",
        "teaser": "Sound in Translation by Reactable Systems won the #MusicBricks prize in Barcelona!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6esPuS4aekYYwQqoySSWe8"
            }
          }
        ],
        "bodyText": "The idea for this hack is to explore the possibilities of assisted live remixing in a musical performance.\n\nUsing a hardware controller the user creates a sound and the system searches for a similar sound and adds it to the inputs available for the remix process to start over. This process can continue as the performer listens and reacts to the new sound, finding relevant information within his/her music collection.\n\nAnother performer can join in the conversation by using Bitalino Signals to control effects that alter the sound that is used for the search.",
        "slug": "sound_in_translation"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1tMpsfIeBiwQIEcuqWIQyG",
        "type": "Entry",
        "createdAt": "2016-06-15T13:47:50.484Z",
        "updatedAt": "2016-06-15T13:57:40.658Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 8,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps message at CHI",
        "dateTime": "2016-06-14T00:00+03:00",
        "teaser": "Workshop and paper from GiantSteps at CHI",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5aO3MSiJOE86wckSI4kiKs"
            }
          }
        ],
        "bodyText": "Giantteps co-hosted a workshop called: Attending to Objects as Outcomes of Design Research.\n\nThe goal for this workshop was to provide a venue at CHI for research through design practitioners to materially share their work with each other. Conversation was largely centered upon a discussion of objects produced through a research through design process.\n\n\nBringing together researchers as well as their physical work is a means of gaining insight into the practices and outcomes of research through design. If research through design is to continue to develop as a research practice for generating knowledge within HCI, this requires developing ways of attending to its made, material outcomes. The premise of this workshop was\nsimple: __We need additional spaces for interacting with and reflecting upon material design outcomes at CHI.__\n\n\nThe goal of this workshop was to experiment with such a space, and to initially do so without a strong theoretical or conceptual framing.\n\nThis workshop was strongly related to the methodologies evolved as a part of the participatory engagement in GiantSteps.\n\n\nThe longer term goal is that this format forms the beginning of a sustained community engagement with participatory physical making as a part of the methodology bases at CHI. \n\n\nWe also presented a poster: The Dial: Exploring Computational Strangeness\n\nThis paper describes the process of a computational idea emerging from a process of user engagement: algorithmic recommendations as artistic obstructions in creative work. Through a collaboration between HCI and Music Information Retrieval, we conducted open-ended interviews with professional makers of Electronic Dance Music. We describe how the idea emerged from this process, and consider how algorithmic recommendation systems could be re-considered as tools for artistic inspiration. We propose the concept of a “Strangeness Dial,” which allows the gradual adjustment of the degree of desired otherness, which is tested through the use of a non-functional prop and a series of interviews.\n\n\nThe poster was very well received and engendered a lot of interest from researchers from Spotify, Amazon and Facebook. We also had interesting conversations with the general academic community in the audience including Jakob Nielsen from Nielsen Norman Group.\n\n[Attending to Objects as Outcomes of Design Research](https://assets.contentful.com/xrzr1u3na612/KicqPFIfE22mkgO6QEOuu/1a58f023265787c499f6cc765ab5f60e/ea3423-jenkins.pdf)\n\n[The Dial: Exploring Computational Strangeness](https://downloads.contentful.com/xrzr1u3na612/4LjSJQJ3LiGWOqSA6CA8Qg/420a6763806d60b996da9648fb7c6abe/lbw0572-andersonA.pdf)\n\n![dial_poster_chi](//images.contentful.com/xrzr1u3na612/34P2w5XnPO6e6gkca84Sqm/411edefd426885dd4116950147652286/dial.jpeg)\n\nOn the pictures:\n\n- Kristina Andersen (STEIM)\n\n- \"The Dial: Exploring Computational Strangeness\" poster\n\n\n",
        "slug": "news_chi2016"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3yuFcaOG6sgeay8IYOCOQ4",
        "type": "Entry",
        "createdAt": "2016-12-30T14:02:44.047Z",
        "updatedAt": "2016-12-30T14:04:40.074Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "How did it go in Vienna",
        "dateTime": "2016-10-04T00:00+02:00",
        "teaser": "100 participants, 16 finished hacks in 8 hours!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "62vSEQtynYCM8wOiCMWK6w"
            }
          }
        ],
        "bodyText": "WavesVienna Hack Day gathered 100 participants and 16 finished hacks in 8 hours.\n\nTwo awards were sponsored by GiantSteps:\n\n1. Best interactive sound installation\nWinner: Sweet Spotting. The hack tracks a person and aligns an Acouspade directional speaker + microphone to him/her plus also adapts the sound environment using a Mod Duo by Johannes Wernicke.\n\n2. Best interactive sound retrieval: \nWinner: One Word World. The hack is an automated soundscape generator based on the FreeSound API by Tobias Hildebrandt and Hellska.\n\nIt shall be also noted, that one of persons involved in GiantSteps (Richard Vogl) won a non-GiantSteps challenge: \"Best gesture and sound combination\". The hack was a [wireless gesture actuated pedalboard controller](http://www.hackathon.io/metalstance).\n",
        "slug": "WV_how_did-it_go"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "2a6eODfQBiwsAY8CeyKoUa",
        "type": "Entry",
        "createdAt": "2016-07-22T12:16:31.553Z",
        "updatedAt": "2016-07-22T12:18:49.988Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at ISMIR",
        "dateTime": "2016-07-22T00:00+03:00",
        "teaser": "6 GiantSteps papers will be presented!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "kXXLBAgVIOe68egIK6yeS"
            }
          }
        ],
        "bodyText": "Six papers resulted from GiantSteps will be presented at [ISMIR 2016](https://wp.nyu.edu/ismir2016/):\n\n1. Recurrent Neural Networks for Drum Transcription (R. Vogl, M. Dorfer and P. Knees)\n\n2. Conversations with Expert Users in Music Retrieval and Research Challenges for Creative MIR\t(K. Andersen and P. Knees)\n\n3. Joint Beat and Downbeat Tracking with Recurrent Neural Networks\t(Sebastian Böck, Florian Krebs, Gerhard Widmer)\n\n4. Downbeat Tracking from Beat-Synchronous Features with Recurrent Neural Networks\t(F. Krebs, S. Böck, M. Dorfer, G. Widmer)\n \n5. On the Potential of Simple Framewise Approaches to Piano Transcription\t(R. Kelz, M. Dorfer, F. Korzeniowski, S. Böck, A. Arzt and G. Widmer)\n \n6. An Evaluation Framework and Case Study for Rhythmic Concatenative Synthesis\t(Cárthach Ó Nuanáin, Sergi Jordà, Perfecto Herrera)",
        "slug": "ISMIR_papers"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3fhyCOhpd6mwiIWq2QY0mi",
        "type": "Entry",
        "createdAt": "2017-02-22T13:36:18.613Z",
        "updatedAt": "2017-02-22T13:44:18.920Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "MASCHINE JAM from NATIVE INSTRUMENTS",
        "dateTime": "2017-02-19T00:00+02:00",
        "teaser": "New controller for the desktop version of the MASCHINE software ",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "kldibyQN32EeQgYYiswcw"
            }
          }
        ],
        "bodyText": "MASCHINE JAM incorporates Notes Mode feature, a new creative way to use the Smart Play features previously released with KOMPLETE KONTROL, MASCHINE and iMASCHINE 2.0 and further described in D6.3 \"Mobile Application Prototype\".\n\n\nMASCHINE already incorporated Smart Play features in its 2.2 update – a new scale and chord engine and a powerful arpeggiator. The new JAM controller comes with eight two-touch Smart Strips which allow the user to use the Smart Play features in very creative ways, (s)he can now play advanced melodies by selecting a scale and make perfect chord progressions by sweeping finger on a touch strip.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/pC5q1DuILag\" frameborder=\"0\" allowfullscreen></iframe>\n",
        "slug": "MASCHINE_JAM"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3IiyRRcjfqISGoiI6o8ukk",
        "type": "Entry",
        "createdAt": "2016-12-30T14:42:00.979Z",
        "updatedAt": "2016-12-30T14:42:00.979Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "ROTOR review by TekGadg",
        "dateTime": "2016-11-07T00:00+02:00",
        "teaser": "New Reactable product has been reviewed by TekGadg",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4zl208m0PKQW4Kouk8WIsg"
            }
          }
        ],
        "bodyText": "<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/oBzwlReXLwc\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "ROTOR_review"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3ZzJ36JUlW80c4IqwK6y6A",
        "type": "Entry",
        "createdAt": "2015-08-05T10:31:23.125Z",
        "updatedAt": "2015-08-09T21:17:24.426Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Native Instruments KOMPLETE KONTROL with GiantSteps Technology",
        "dateTime": "2014-10-27",
        "teaser": "First glance at musical expert agents developed through the GiantSteps project",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2mFVFag3HmkCG0giqm6qmM"
            }
          }
        ],
        "bodyText": "The Native Instruments KOMPLETE KONTROL series of keyboard controllers and the accompanying KOMPLETE KONTROL plugin include a first glance at musical expert agents developed through the GiantSteps project: Arpeggiator, Scales and a Chord performance modules.\n\nWith KOMPLETE KONTROL’s arpeggiator a user can turn a single note into a full musical performance – directly from the hardware and independent of the instrument. The eight controller knobs on the hardware manage parameters such as direction, rate, rhythm, patterns, and variations. The integrated scale mapping features gives users instant access to a world of melody. Virtually any musical scale can be mapped to the keyboard, ‘wrong’ notes are indicated through the keyboard’s Light Guide and even remapped so that the played notes are always in tune. A user can further activate chord mode and create a rich harmonic performance by playing single keys. Chords can be mapped by simply by selecting mode and inversion, or by loading up a chord set – ready-to-play progressions to inspire and augment the users own compositions.\n\nWatch the video [here...](https://youtu.be/o_9Xg_kqJls)",
        "slug": "news-kompletekontrol"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5hhifwe5204OEyye4GKYU4",
        "type": "Entry",
        "createdAt": "2016-06-15T13:30:54.083Z",
        "updatedAt": "2016-06-15T13:31:38.669Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "JAES article",
        "dateTime": "2016-06-15T00:00+03:00",
        "teaser": "Publication in the Journal of the Audio Engineering Society (JAES)",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5edj2Yi0qsEEwsgEK2qoC2"
            }
          }
        ],
        "bodyText": "GiantSteps article titled “An Intelligent Interface for Drum Pattern Variation and Comparative Evaluation of Algorithms” accepted for publication in the Journal of the Audio Engineering Society (JAES) – Special Issue on Intelligent Audio Processing, Semantics, and Interaction.\n\nAbstract: Drum tracks of electronic dance music pieces are a central and style-defining element. \nYet, creating them can be a cumbersome task, mostly due to lack of appropriate tools and input devices. In this work we use a UI prototype which aims at supporting musicians compose the rhythmic patterns for drum tracks, to compare different algorithms for drum pattern variation. Starting with a basic pattern (seed pattern), which is provided by the user, a list of variations with varying degree of similarity to the seed pattern is generated. The variations are created using one of the three algorithms compared: i. a similarity-based lookup method using a rhythm pattern database, ii. a generative approach based on a stochastic neural network, and iii. a genetic algorithm using similarity measures as target function. The interface visualizes the patterns and provides an intuitive way to browse through them. User test sessions with experts in electronic music production were conducted to evaluate aspects of the prototype and algorithms. Additionally a web-based survey was performed to assess perceptual properties of the variations in comparison to baseline patterns created by a human expert. The web survey shows that the algorithms produce musical and interesting variations and that the different algorithms have their strengths in different areas. These findings are further supported by the results of the expert interviews.\n",
        "slug": "JAES_article"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5TWMB2ZuCICwYCsCO6Ou4o",
        "type": "Entry",
        "createdAt": "2015-07-10T12:27:15.824Z",
        "updatedAt": "2015-08-19T08:54:02.391Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 8,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "CHI2015 Workshop",
        "dateTime": "2015-01-09T17:07",
        "teaser": "Collaborating with Intelligent Machines: Interfaces for Creative Sound",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2ydSMYC1vSkuKgiyOiuKGw"
            }
          }
        ],
        "bodyText": "Call for Participation\nThis workshop brings together researchers, designers and instrument builders to explore how we can reframe the way we design “machines” for creative expression. For the purpose of this event, we are focussing on the case of music, but no expertise in this field is required, and the outcomes will be useful to the broader field of instruments and interfaces for creative work.\n\nThe following three opportunities/challenges are imminent: The disappearing computer is putting embodiment back at the center of our concerns; intelligent agents are reaching a level of complexity where it is feasible for an interface to provide suggestions based on work practises; and finally, creative work is increasingly done in collaboration reminiscent of the classic image of musicians playing in a group. The workshop is focussed on charting these new possibilities and constraints.\n\nWe invite submissions of true position papers: what is your perspective or experience with these developments, in music or in other areas, which risks and potentials do you see; in short, what is your hunch? Position papers should be short (around 500 words) and could be illustrated by examples, such as existing or conceptualized instruments, images, or pieces of music. We explicitly encourage submissions to use various forms of creative outlets to express a position.\n\nSubmissions\nPlease send your submissions to collaboratingmachines@yahoo.com by January 19th (extended!), 2015. Submitted papers will be peer-reviewed for suitability to the workshop. Notification of acceptance will be sent on February 10th, 2015.\n\nAccepted position papers can be presented in a brief session during the workshop. At least one author of each accepted position paper must attend the workshop and all participants must register for the workshop and for at least one day of the conference. Accepted papers and other textual outcomes will be included in the workshop proceedings and made available through the workshop blog: https://collaboratingmachines.wordpress.com\n\nSocial Event\nThe workshop will be followed by a social event (on the same day or the day after), where outcomes from the workshop will be presented and discussed with artists from Seoul’s thriving music scene.\n\nOrganisers\nFlorian Grote       Native Instruments GmbH, Germany\nKristina Andersen   STEIM, Netherlands\nPeter Knees         Dept. of Computational Perception, JKU Linz, Austria",
        "slug": "CHI-15"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "44ArFNrR6UQiQMyQEIu860",
        "type": "Entry",
        "createdAt": "2015-10-24T13:20:04.018Z",
        "updatedAt": "2015-10-24T13:25:23.945Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 7,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps MTG at Music Tech Fest",
        "dateTime": "2015-10-24",
        "teaser": "More #MusicBricks hack winners present in Slovenia.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3xsRskAP2gO6kUWSWaaKEG"
            }
          }
        ],
        "bodyText": "At Music Hack Day 2015 at Sónar in Barcelona, members of the MTG GiantSteps team developed a hack that won the #MusicBricks ( incubation award. The hack involved real-time key/chord detection for intelligent retrieval and playback of existing datasets of electronic music. Subsequently, a mobile app was developed for real-time chord detection and presented at the Music Tech Fest in Slovenia, Ljubljana in September.\n\nNext stop is a Late Breaking Demo at ISMIR in Malaga! If you want to learn more please visit the project page:\n<http://giantsteps.github.io/eear/>\n",
        "slug": "GiantSteps MTG at Music Tech Fest"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5Mq0QBmsTYYGyeGcggc84k",
        "type": "Entry",
        "createdAt": "2016-04-15T13:56:09.597Z",
        "updatedAt": "2016-04-15T14:06:23.787Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at ACM ICMR 2016",
        "dateTime": "2016-03-31",
        "teaser": "Searching for Audio by Sketching Mental Images of Sound",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "dPRc8ywWQ0igM2Eq822Ay"
            }
          }
        ],
        "bodyText": "by Peter Knees (JKU) and Kristina Andersen (STEIM).\n\nWe propose a new paradigm for searching for sound by allowing users to graphically sketch their mental representation of sound as query. By conducting interviews with professional music producers and creators, we find that existing, text-based indexing and retrieval methods based on file names and tags to search for sound material in large collections (e.g., sample databases) do not reflect their mental concepts, which are often rooted in the visual domain and hence are far from their actual needs, work practices, and intuition. As a consequence, when creating new music on the basis of existing sounds, the process of finding these sounds is cumbersome and breaks their work flow due to being forced to resort to browsing the collection. \r\nPrior work on organizing sound repositories aiming at bridging this conceptual gap between sound and vision builds upon psychological findings (often alluding to synaesthetic phenomena) or makes use of ad-hoc, technology-driven mappings. These methods foremost aim at visualizing the contents of collections or individual sounds and, again, facilitating browsing therein. For the purpose of indexing and querying, such methods have not been applied yet. We argue that the development of a search system that allows for visual queries to audio collections is desired by users and should inform and drive future research in audio retrieval. To explore this notion, we test the idea of a sketch interface with music producers in a semi-structured interview process by making use of a non-functional prototype. Based on the outcomes of this study, we propose a conceptual software prototype for visually querying sound repositories using image manipulation metaphors.",
        "slug": "icmr_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4UvT7OoCAM4gMIOu0KIC0Q",
        "type": "Entry",
        "createdAt": "2015-11-30T11:29:46.222Z",
        "updatedAt": "2015-11-30T11:30:43.684Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at RBMA 2015",
        "dateTime": "2015-11-20",
        "teaser": "Our thoughts are with those who suffered tragic attacks in Paris on 13/11.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3m2xaGTMusgAK6aCiUCYcs"
            }
          }
        ],
        "bodyText": "GiantSteps attended Red Bull Music Academy, this time in Paris. We organized a presentation and a participatory workshop with all 29 participants and gathered a feedback on several software and interface prototypes. Also in depth interviews were conducted, aimed at both confirming work practices and gathering feedback for non-functional prototypes.\n\n*We were planning to visit twice and take part in both academy periods. Due to the tragic events the second session of RBMA was cancelled.*\n\n**Our thoughts are with those who suffered those tragic attacks in Paris.**\n\n \n\n* On the picture: Kristina Andersen (STEIM) and Wulf Gaebele (YDS, RBMA)",
        "slug": "rbma2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1EcGhQEU7aSeK8qY2wA2Kc",
        "type": "Entry",
        "createdAt": "2015-11-30T11:25:42.044Z",
        "updatedAt": "2015-11-30T11:25:42.044Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at SoMeRa2015",
        "dateTime": "2015-11-16",
        "teaser": "2nd International Workshop on Social Media Retrieval",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7JxMoF6aFqwIu4QWOoiKqi"
            }
          }
        ],
        "bodyText": "The goal of the workshop was to provide a forum for state-of-the-art research and to connect the communities in data mining and social media research with the ongoing research projects, particularly with respect to domain-specific media mining and analytics applications, such as linkage of social data and cultural data (e.g., in the context of concerts) or information extraction of musical knowledge from social sensors.\n\nAccepted and presented papers dealt with topics of retrieval, recommendation, browsing, and data mining in social media, as well as on the analysis of the multifaceted user traces in social media. In particular, this comprises research on context-aware music recommendations, sentiment analysis in social media, multi-modal user interest prediction, social media response prediction, life event classification, and latent topic modelling.",
        "slug": "somera2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4EFMdktRkIw0s80sUk8wcC",
        "type": "Entry",
        "createdAt": "2015-08-06T12:00:20.755Z",
        "updatedAt": "2015-08-09T16:54:38.358Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GianSteps panel discussion at Sónar+D",
        "dateTime": "2014-08-27",
        "teaser": "Discussions on how to enhance creativity",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "42ZKYYx61iUOacysAoowGK"
            }
          }
        ],
        "bodyText": "The GiantSteps panel discussion that took place on June 12th, during the Sonar Festival in Barcelona, was an exciting and fun event. Together with our two invited guests, musicians/producers Simonne Jones and Throwing Snow, the GiantSteppers Michael Hlatky (NI), Florian Grote (NI) and Sergi Jordà (UPF-MTG), discussed for more than 90 minutes about digital musical technologies, artificial musical knowledge, interaction design and about how new tools could enhance creativity while preserving each own personal voice and style.",
        "slug": "sonera+d"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "253MRw0mDiWoEAq6Kco2Sy",
        "type": "Entry",
        "createdAt": "2017-01-17T15:27:40.745Z",
        "updatedAt": "2017-01-17T15:29:41.684Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps video",
        "dateTime": "2017-01-17T00:00+02:00",
        "teaser": "GiantSteps at MTF and SONAR+D",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4I2jw4kPaMcEGyMkEsqCcM"
            }
          }
        ],
        "bodyText": "Overview of events with participation of the GiantSteps project in 2016. Covering Sonar+D Giantsteps booth in Barcelona and Music Tech Fest Hackday in Berlin.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/AiIemsaIAkw\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "mtf_sonar_video"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "58vR9zLCtG2YMQM0ysUEM4",
        "type": "Entry",
        "createdAt": "2015-08-09T17:22:53.160Z",
        "updatedAt": "2015-08-09T17:33:03.072Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at the 5th Music Hack Day in Barcelona",
        "dateTime": "2014-07-16",
        "teaser": "100+ hackers in Barcelona build more than 30 hacks",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5hXSVPMeV2EAEegO6sq22g"
            }
          }
        ],
        "bodyText": "The GiantSteps project consortium has taken part at the [5th Barcelona Music Hack Day](http://new.musichackday.org/2014/barcelona/). The hack day was organized by the GiantSteps consortium member [MTG](http://www.mtg.upf.edu/) as an event of the [Sónar+D](http://sonar.es/en/pg/what-is-s%C3%B3nar-d) within the [Sónar 2014](http://sonar.es/en/2014/) festival.\n\nAt a Hack Day all participants have 24 hours to create a “hack” – something new, innovative, and fun. The 100+ hackers in Barcelona built more than 30 hacks, a vast majority of these created and modified sound and music in interesting and new ways.\n\nThe GiantSteps project not only sponsored one of the hack day’s challenges together with the MTG: A Nexus7 tablet for the best use of the new [Essentia](http://essentia.upf.edu/) real-time implementation for [Pd](http://puredata.info/) (won by the team [Fairy Teller](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/fairy-teller)). Many consortium members also participated with their own hacks: The Native Instruments developers teamed up with the [Bauhaus University](http://bauhausinteraction.org/) to create [littleBits of Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/littlebits-of-maschine) (press coverage on [CDM](http://createdigitalmusic.com/2014/06/legotechno-sliding-lego-blocks-make-music-littlebits-maschine-arduino/)), and with the UPF to create [Free Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/free-maschine). The people from JKU built [Casual Games for Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/casual-games-for-maschine).\n\nSee the [Sliding Puzzle Sequencer!](https://youtu.be/ei9jyGvRgvs) video",
        "slug": "barcelona_hack_day"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "65LYBmOBc4yiqiAqEkq4IS",
        "type": "Entry",
        "createdAt": "2015-08-09T18:07:48.655Z",
        "updatedAt": "2015-08-19T06:30:13.685Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "STEIM Tour",
        "dateTime": "2014-03-28",
        "teaser": "Giantsteps visits STEIM",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "B2Cq6FG5vE6waekwcCUEm"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "17F4foS7FgkoaYoM0u4M2m"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "P4jKinmDYq4Gc80qIwIUs"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2fIsvcu6Ioc6CYseoyaSW0"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "45L4fnn4OIquEAwUyC46IA"
            }
          }
        ],
        "bodyText": "\nThe GiantSteps consortium took the opportunity to visit the [STEIM](http://www.giantsteps-project.eu/steim.org/about/) studio during its plenary meeting in Amsterdam (March 24-26).\n\n\nSTEIM owns two “old fashioned” sound  studios that are praised by sound engineers for their quality recordings (modern studios typically “fix” glitches in post-production).\n\n![steim1](//images.contentful.com/xrzr1u3na612/17F4foS7FgkoaYoM0u4M2m/1915f43f80b74ca1bf158dfb4c912e4d/steim1.jpg)\n\n\nOne of the STEIM workshops where artists build their instruments.\n\n![steim2](//images.contentful.com/xrzr1u3na612/3EYOvxB4nS6amUC0Eog422/136cdf051b79e1d1ce4cb160b6d7dd14/steim2.jpg)\n\n\nSTEIM has existed since 1969, which makes it (one of) the oldest studios dedicated to electronic music. As a consequence, it has a large treasure archive (read basement).\n\n![steim3](//images.contentful.com/xrzr1u3na612/2fIsvcu6Ioc6CYseoyaSW0/95a4013054e59600b24c9bf75345e148/steim3.jpg)\n\n\nThe STEIM philosophy is that instruments should be tested during performance. The GS crew was more than happy to serve as an audience (and get down to the nitty-gritty details after).\n\n![steim4](//images.contentful.com/xrzr1u3na612/45L4fnn4OIquEAwUyC46IA/07068ad79ec6d951261032049df1ef48/steim4.jpg)\n",
        "slug": "steimtour"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "6NHiHS731K4SyaqoCUEEQC",
        "type": "Entry",
        "createdAt": "2016-07-01T12:19:13.403Z",
        "updatedAt": "2016-07-01T12:21:16.446Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps in The Ben Heck show",
        "dateTime": "2016-07-01T00:00+03:00",
        "teaser": "Ben Heck Visits Berlin #MTF Hack Camp",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1JE08j6SMsEqI2kGiwEA48"
            }
          }
        ],
        "bodyText": "\n\nIn this episode the Ben Heck Crew visits the Music Tech Fest in Berlin, Germany. Ben and Felix will be judging some of the projects that take place in the hack camp portion of the festival. GiantSteps is mentioned several times!\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FnPf6xO0uuQ\" frameborder=\"0\" allowfullscreen></iframe>\n\n",
        "slug": "GS_in_ben_heck_show"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "194jhZFtLwYWGI84wcSmE4",
        "type": "Entry",
        "createdAt": "2016-09-28T11:34:55.057Z",
        "updatedAt": "2016-09-28T11:36:06.730Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Music Similarity and Retrieval",
        "dateTime": "2016-09-28T00:00+03:00",
        "teaser": "Springer book co-authored by one of GiantSteps partner",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "395p59qTdu0iQsCgYOkyS8"
            }
          }
        ],
        "bodyText": "This book provides a summary of the manifold audio- and web-based approaches to music information retrieval (MIR) research. In contrast to other books dealing solely with music signal processing, it addresses additional cultural and listener-centric aspects and thus provides a more holistic view. Consequently, the text includes methods operating on features extracted directly from the audio signal, as well as methods operating on features extracted from contextual information.\n\nBook is co-authored by Peter Knees (JKU) - partner in GiantSteps project.\n\n[Check for more at Springer website](http://www.springer.com/gp/book/9783662497203)",
        "slug": "springer_book"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1FeK5ve0NisGCOyuwOswGi",
        "type": "Entry",
        "createdAt": "2016-03-07T12:08:04.688Z",
        "updatedAt": "2016-03-07T16:29:53.117Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Berlin testing session completed",
        "dateTime": "2016-03-04",
        "teaser": "Thanks to all participants from GiantSteps team!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "lN6lejvjMssqaA6QGm0qS"
            }
          }
        ],
        "bodyText": "Different RBMA alumni - producers and performers of electronic music, joined us in testing session organized at the Native Instruments offices in Berlin on 15th of February. Several prototypes, including RhythmCat, Note Suggestion, Tempo Quantizer and other were tested and the feedback was documented for further iterations.\n\nWe’d like to thank all who helped us in making this successful and interesting session!\n \n",
        "slug": "berlin_testing_session_completed"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4XE9pHpPhK2GkWuiwqqo6U",
        "type": "Entry",
        "createdAt": "2015-11-20T16:45:30.951Z",
        "updatedAt": "2015-11-20T16:49:46.917Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Hypotetical instruments from STEIM",
        "dateTime": "2015-11-01",
        "teaser": "A workshop held at Amsterdam Dance Event",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "YnRJpaR5U2OC80mY2ggmY"
            }
          }
        ],
        "bodyText": "What will the future of electronic music look like? What instruments will we need? How will we collaborate with the machines that are yet to be built? \n\nIn this workshop we were designing “machines” for creative expression. Working with low and no-tech, we build non-functional instruments aimed at inventing the music machine of the future. By taking as a starting point how an individual imagines the experience of playing electronic music, we spent the afternoon of 16th of October making the perfect machine or instrument for that person. This process is directly informed by the designers and researchers from partners of GiantSteps project - Native Instruments, Johannes Kepler Universität and STEIM, with the goal of making instruments that are positioned on the bleeding edge of technology. \n\nBy Kristina Andesen (STEIM) and Michael Hlatky from Native Instruments.\n\n[More information on ADE webpage](https://http://www.amsterdam-dance-event.nl/program/2015/diy-workshop-steim-hypothetical-instruments/4896015/)\n![1](//images.contentful.com/xrzr1u3na612/2Ms3lhQI6AIwS8KGyaOueI/eb687de48d1f8f5a8c2b9c4323dd0cfc/1.jpg) ![2](//images.contentful.com/xrzr1u3na612/7fkbfw5wRyykwS6G86cQqI/4e9a16fc6709db7856fc0146cface5d1/2.jpg) ![3](//images.contentful.com/xrzr1u3na612/4Mx1fnjsHuqyiQKseKqYaQ/de4f5c04b3a0aabb2cbbe12cd3a3dfea/3.jpg)\n\n",
        "slug": "workshop_at_ade2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "261fgUvGXuIykUACkI64oI",
        "type": "Entry",
        "createdAt": "2015-08-09T17:51:01.228Z",
        "updatedAt": "2015-08-09T17:51:01.228Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "MASCHINE Challenge for Music Hack Day Barcelona 2014 announced!",
        "dateTime": "2014-05-21",
        "teaser": "To the Hackers out there",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1TxEwotwu0QMCyuOSygUCs"
            }
          }
        ],
        "bodyText": "Fellow Hackers!\n\nFor the upcoming [Music Hackday in Barcelona](http://new.musichackday.org/2014/barcelona/), we’ll bring a bunch of [MASCHINE](http://www.native-instruments.com/en/products/maschine/production-systems/maschine/) Controllers ([Mikro MK2](http://www.native-instruments.com/en/products/maschine/production-systems/maschine-mikro/), [MK2](http://www.native-instruments.com/en/products/maschine/production-systems/maschine/) and [Studio](http://www.native-instruments.com/en/products/maschine/production-systems/maschine-studio/)) and the MASCHINE 2 software. You do the hacking. We’ve controlled [MASCHINE with Lego blocks](http://createdigitalmusic.com/2014/05/giant-lego-construction-makes-music-maschine-made-nis-devs/), and we’re eager to see and hear(!) what you come up with. The most creative hack involving MASCHINE will be awarded with a brand-new MASCHINE Studio.\n\nJust to give you some ideas: creative sequencing modes, cool new user interaction paradigms, Coffee-MASCHINE :)\n\nThe challenge is set up to gather feedback on concepts from the GiantSteps project, and the ideas and hacks will be feeding the GiantSteps user-centered design process.",
        "slug": "MASCHINE_Challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3rNk4NcIQMi4AQkSeSigAa",
        "type": "Entry",
        "createdAt": "2016-09-30T11:54:51.062Z",
        "updatedAt": "2016-09-30T11:55:11.963Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps challenge at Waves Vienna",
        "dateTime": "2016-09-29T00:00+03:00",
        "teaser": "Best use of GiantSteps APIs will be awarded!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7hyEllTKOke4sgOUMAYMuM"
            }
          }
        ],
        "bodyText": "We seek the best hack that uses one or more of the GiantSteps APIs for music analysis, recommendation, and semantic sound analysis. We encourage hacks about music making and performance, new instruments, improvising systems, virtual band mates, real-time visualizations or anything that will mesmerize the crowd. The award is 250 Euros in vouchers for music equipment.\n\n<http://www.wavescentraleurope.com/waves-music-hackday/>",
        "slug": "wavesvienna_GS_challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "36VLIDWB1uAeYA4wuMM4I0",
        "type": "Entry",
        "createdAt": "2016-05-17T14:27:41.993Z",
        "updatedAt": "2016-05-20T12:50:43.959Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps booth at Sónar+D!",
        "dateTime": "2016-05-17T00:00+03:00",
        "teaser": "Visit GiantSteps booth in MarketLab at Sónar+D in Barcelona!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6PreyTDCqQggk40MU0uQ6S"
            }
          }
        ],
        "bodyText": "MarketLab is the nerve centre of Sónar+D. It is a space where the creators of the year's most outstanding technology initiatives present the projects that they have developed in creative labs, media labs, universities and businesses. A place for trying out innovations that explore new forms of creation, production and marketing, and which in turn fosters relationships between professionals in the creative industries and the general public.\n\nVisit us on 16th, 17th and 18th of June 2016 in Barcelona!\n\n[Check for more here!](http://sonarplusd.com/activity/giantsteps/)",
        "slug": "giantsteps_at_sonarplusd"
      }
    }
  ],
  "includes": {
    "Asset": [
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "17F4foS7FgkoaYoM0u4M2m",
          "type": "Asset",
          "createdAt": "2015-08-19T06:25:32.847Z",
          "updatedAt": "2015-08-19T06:25:32.847Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim1",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/17F4foS7FgkoaYoM0u4M2m/1915f43f80b74ca1bf158dfb4c912e4d/steim1.jpg",
            "details": {
              "size": 17059,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim1.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1JE08j6SMsEqI2kGiwEA48",
          "type": "Asset",
          "createdAt": "2016-07-01T12:15:14.041Z",
          "updatedAt": "2016-07-01T12:15:14.041Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "benheck",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1JE08j6SMsEqI2kGiwEA48/80fea580d7c0da406d6531a66e69a1a9/benheck.png",
            "details": {
              "size": 227031,
              "image": {
                "width": 432,
                "height": 243
              }
            },
            "fileName": "benheck.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1TxEwotwu0QMCyuOSygUCs",
          "type": "Asset",
          "createdAt": "2015-08-09T17:47:36.923Z",
          "updatedAt": "2015-08-09T17:47:36.923Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NI Maschine Studio Laptop-2709-300x189",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1TxEwotwu0QMCyuOSygUCs/326782dc7b33e28f3f93b8843aedaea9/NI_Maschine_Studio_Laptop-2709-300x189.jpg",
            "details": {
              "size": 12520,
              "image": {
                "width": 300,
                "height": 189
              }
            },
            "fileName": "NI_Maschine_Studio_Laptop-2709-300x189.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1lkXsI3KHS0qy4CwMOK8MC",
          "type": "Asset",
          "createdAt": "2015-08-19T06:18:59.059Z",
          "updatedAt": "2015-08-19T06:18:59.059Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "chi14 logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1lkXsI3KHS0qy4CwMOK8MC/ee31346893ee0dff56f6324743b99f85/Screen_Shot_2015-08-19_at_09.18.12.png",
            "details": {
              "size": 120029,
              "image": {
                "width": 418,
                "height": 135
              }
            },
            "fileName": "Screen Shot 2015-08-19 at 09.18.12.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "26THAaia9WYgUSIm4oI6Uw",
          "type": "Asset",
          "createdAt": "2016-06-16T14:48:51.673Z",
          "updatedAt": "2016-06-16T14:48:51.673Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "sonar_front",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/26THAaia9WYgUSIm4oI6Uw/3c28621409401a6ff63032e781bbdd9b/sonar16_3_front.jpg",
            "details": {
              "size": 75119,
              "image": {
                "width": 800,
                "height": 600
              }
            },
            "fileName": "sonar16_3_front.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2I9o4hbLEs4UUKqS0Y6Qis",
          "type": "Asset",
          "createdAt": "2016-05-24T13:09:17.733Z",
          "updatedAt": "2016-05-24T13:09:17.733Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "icmc logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2I9o4hbLEs4UUKqS0Y6Qis/9bb4dbde73672144f872c9443fbfbb76/icmc_logo.png",
            "details": {
              "size": 22429,
              "image": {
                "width": 666,
                "height": 270
              }
            },
            "fileName": "icmc_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2QHxW95IXYYeeQ6eoeuq6s",
          "type": "Asset",
          "createdAt": "2016-06-30T13:18:44.540Z",
          "updatedAt": "2016-06-30T13:18:44.540Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "mtf1",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2QHxW95IXYYeeQ6eoeuq6s/7b9d69190b3b6f407f0bfb150a93b71b/mtf1.png",
            "details": {
              "size": 775916,
              "image": {
                "width": 800,
                "height": 600
              }
            },
            "fileName": "mtf1.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2fIsvcu6Ioc6CYseoyaSW0",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:07.557Z",
          "updatedAt": "2015-08-19T06:27:07.557Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim3",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2fIsvcu6Ioc6CYseoyaSW0/95a4013054e59600b24c9bf75345e148/steim3.jpg",
            "details": {
              "size": 22723,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim3.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2jrJpTsF72gGa0ecUmqci4",
          "type": "Asset",
          "createdAt": "2015-09-30T13:26:19.977Z",
          "updatedAt": "2015-09-30T13:26:19.977Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Hack",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2jrJpTsF72gGa0ecUmqci4/fdbb9feec949cacc3c8c0d9ffd5334f1/hack.png",
            "details": {
              "size": 629490,
              "image": {
                "width": 649,
                "height": 496
              }
            },
            "fileName": "hack.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2mFVFag3HmkCG0giqm6qmM",
          "type": "Asset",
          "createdAt": "2015-08-06T11:42:35.571Z",
          "updatedAt": "2015-08-09T21:17:16.381Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 2,
          "locale": "en-US"
        },
        "fields": {
          "title": "KomplektKontrol",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2mFVFag3HmkCG0giqm6qmM/83066d06513981351bb856b04eee49d0/KomplektKontrol.png",
            "details": {
              "size": 37807,
              "image": {
                "width": 300,
                "height": 178
              }
            },
            "fileName": "KomplektKontrol.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2ydSMYC1vSkuKgiyOiuKGw",
          "type": "Asset",
          "createdAt": "2015-07-10T12:26:11.961Z",
          "updatedAt": "2015-07-10T12:26:11.961Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "CHI",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2ydSMYC1vSkuKgiyOiuKGw/bc7a6b53b0ea5bf27d3345ab7723df7b/CHI.png",
            "details": {
              "size": 53199,
              "image": {
                "width": 567,
                "height": 315
              }
            },
            "fileName": "CHI.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "395p59qTdu0iQsCgYOkyS8",
          "type": "Asset",
          "createdAt": "2016-09-28T11:33:37.929Z",
          "updatedAt": "2016-09-28T11:33:37.929Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "springer",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/395p59qTdu0iQsCgYOkyS8/3f0a4c0d4918902d00b975bf22d76b6c/springer.jpg",
            "details": {
              "size": 141721,
              "image": {
                "width": 827,
                "height": 1241
              }
            },
            "fileName": "springer.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3BKq7wS9I4Wa24MuKmSIwm",
          "type": "Asset",
          "createdAt": "2015-09-25T10:24:31.676Z",
          "updatedAt": "2015-09-25T10:24:31.676Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "music",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3BKq7wS9I4Wa24MuKmSIwm/1d3aabd68ea11626d98fe950dff6b7c3/music.jpg",
            "details": {
              "size": 52090,
              "image": {
                "width": 300,
                "height": 300
              }
            },
            "fileName": "music.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3EgzJvQJNKywUIqAw0AiSG",
          "type": "Asset",
          "createdAt": "2016-05-17T14:35:12.146Z",
          "updatedAt": "2016-05-17T14:35:12.146Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "MTF-Logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3EgzJvQJNKywUIqAw0AiSG/20cbbea671737be35256becea56bccf4/MTF-Logo.png",
            "details": {
              "size": 65000,
              "image": {
                "width": 1368,
                "height": 942
              }
            },
            "fileName": "MTF-Logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3TwGsCI6u46Y6AAwA8Q6Os",
          "type": "Asset",
          "createdAt": "2016-04-15T14:04:01.027Z",
          "updatedAt": "2016-04-15T14:04:01.028Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NIME",
          "description": "NIME2016",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3TwGsCI6u46Y6AAwA8Q6Os/71602f0eb176bfb6a26c0267a5a91afe/NIME.jpeg",
            "details": {
              "size": 499101,
              "image": {
                "width": 3502,
                "height": 2289
              }
            },
            "fileName": "NIME.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3m2xaGTMusgAK6aCiUCYcs",
          "type": "Asset",
          "createdAt": "2015-11-30T11:30:25.133Z",
          "updatedAt": "2015-11-30T11:30:25.133Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "RBMA",
          "description": "20/11/15 News item image",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3m2xaGTMusgAK6aCiUCYcs/88e02d9b22a1462276c55de9cef0c45e/rbma.png",
            "details": {
              "size": 1334316,
              "image": {
                "width": 1280,
                "height": 854
              }
            },
            "fileName": "rbma.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3xsRskAP2gO6kUWSWaaKEG",
          "type": "Asset",
          "createdAt": "2015-10-24T13:19:50.892Z",
          "updatedAt": "2015-10-24T13:19:50.892Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GiantSteps_MTF",
          "description": "GiantSteps MTG Team at Music Tech Fest",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3xsRskAP2gO6kUWSWaaKEG/0e5a0ed9776f829b803c38e69ecb9049/unnamed.png",
            "details": {
              "size": 523315,
              "image": {
                "width": 776,
                "height": 582
              }
            },
            "fileName": "unnamed.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "416UKEnyU02q666IIIg2aE",
          "type": "Asset",
          "createdAt": "2015-12-14T11:08:31.360Z",
          "updatedAt": "2015-12-14T11:08:31.360Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "iMaschine",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/416UKEnyU02q666IIIg2aE/c2119682e7fe47372a0adff4b5873184/iMaschine.png",
            "details": {
              "size": 1104782,
              "image": {
                "width": 1254,
                "height": 652
              }
            },
            "fileName": "iMaschine.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "42ZKYYx61iUOacysAoowGK",
          "type": "Asset",
          "createdAt": "2015-08-06T12:02:51.828Z",
          "updatedAt": "2015-08-06T12:02:51.828Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Giantsteps panel discussion at Sonera+D",
          "description": "From left to right: Sergi, Florian, Michael, Simonne and Throwing Snow.",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/42ZKYYx61iUOacysAoowGK/467b72a3901ee839f1c5657a53eb44fe/SonarD1.jpg",
            "details": {
              "size": 215632,
              "image": {
                "width": 1024,
                "height": 682
              }
            },
            "fileName": "SonarD1.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "44q1uRtmpW8qcCAEUMKcU4",
          "type": "Asset",
          "createdAt": "2017-02-22T13:56:33.909Z",
          "updatedAt": "2017-02-22T13:56:33.909Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "andyangy",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/44q1uRtmpW8qcCAEUMKcU4/e1c6a36085942c985daa1b7fe98f9957/7.jpg",
            "details": {
              "size": 73751,
              "image": {
                "width": 962,
                "height": 539
              }
            },
            "fileName": "7.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "45L4fnn4OIquEAwUyC46IA",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:25.252Z",
          "updatedAt": "2015-08-19T06:27:25.252Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim4",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/45L4fnn4OIquEAwUyC46IA/07068ad79ec6d951261032049df1ef48/steim4.jpg",
            "details": {
              "size": 22423,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim4.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4I2jw4kPaMcEGyMkEsqCcM",
          "type": "Asset",
          "createdAt": "2017-01-17T15:25:31.672Z",
          "updatedAt": "2017-01-17T15:25:31.672Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GS Video",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4I2jw4kPaMcEGyMkEsqCcM/f804de8dccae996243b7993935fbad2a/GS_Video.png",
            "details": {
              "size": 275344,
              "image": {
                "width": 677,
                "height": 344
              }
            },
            "fileName": "GS_Video.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4TNPZUinbqqwQy8CygkOOw",
          "type": "Asset",
          "createdAt": "2016-05-24T13:37:25.352Z",
          "updatedAt": "2016-05-24T13:37:25.352Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "lavanguardia",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4TNPZUinbqqwQy8CygkOOw/f2a802b5d705fe502bdb88228e845cea/lavanguardia.jpg",
            "details": {
              "size": 36084,
              "image": {
                "width": 822,
                "height": 124
              }
            },
            "fileName": "lavanguardia.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4xtl5DE6CAW0mms6KuIiyi",
          "type": "Asset",
          "createdAt": "2015-11-30T11:27:21.617Z",
          "updatedAt": "2015-11-30T11:27:21.617Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "IRCAM 2015",
          "description": "30/11/15 News item image",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4xtl5DE6CAW0mms6KuIiyi/b77e919c944492243b4f02ba144c8d96/visuel_paris.jpg",
            "details": {
              "size": 215845,
              "image": {
                "width": 1800,
                "height": 420
              }
            },
            "fileName": "visuel_paris.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4zl208m0PKQW4Kouk8WIsg",
          "type": "Asset",
          "createdAt": "2016-12-30T14:39:25.023Z",
          "updatedAt": "2016-12-30T14:39:25.023Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "rotor tekgadg",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4zl208m0PKQW4Kouk8WIsg/0c2523fe5ec59bea36d5d1cedc34310b/rotor_tekgadg.png",
            "details": {
              "size": 554684,
              "image": {
                "width": 788,
                "height": 429
              }
            },
            "fileName": "rotor_tekgadg.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5aO3MSiJOE86wckSI4kiKs",
          "type": "Asset",
          "createdAt": "2016-06-15T13:47:25.570Z",
          "updatedAt": "2016-06-15T13:47:25.570Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "kristina_at_chi",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5aO3MSiJOE86wckSI4kiKs/8e32213ce46891a9b3446eff46c88f80/IMG_7038.jpeg",
            "details": {
              "size": 77756,
              "image": {
                "width": 640,
                "height": 480
              }
            },
            "fileName": "IMG_7038.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5bB0gpu2MEuAMiSqm6iAsq",
          "type": "Asset",
          "createdAt": "2015-08-09T21:20:36.823Z",
          "updatedAt": "2015-08-09T21:20:36.823Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "reactable tabletop",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5bB0gpu2MEuAMiSqm6iAsq/d1fa8387d735085f7dedf7682b19a786/reactable_tabletop.jpg",
            "details": {
              "size": 20284,
              "image": {
                "width": 300,
                "height": 225
              }
            },
            "fileName": "reactable_tabletop.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5eC02esDA4MOkiuayA2giE",
          "type": "Asset",
          "createdAt": "2015-12-03T09:01:57.152Z",
          "updatedAt": "2015-12-03T09:01:57.152Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "D7.4 frontpage",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5eC02esDA4MOkiuayA2giE/3bb700d07213e3fc24765b4524bacf2a/frontpaged74.gif",
            "details": {
              "size": 21146,
              "image": {
                "width": 928,
                "height": 509
              }
            },
            "fileName": "frontpaged74.gif",
            "contentType": "image/gif"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5edj2Yi0qsEEwsgEK2qoC2",
          "type": "Asset",
          "createdAt": "2016-06-15T13:30:34.143Z",
          "updatedAt": "2016-06-15T13:30:34.143Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "JAES",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5edj2Yi0qsEEwsgEK2qoC2/ae204a6098ce73acb4e73d6dff2a3051/JAES.png",
            "details": {
              "size": 99379,
              "image": {
                "width": 1024,
                "height": 417
              }
            },
            "fileName": "JAES.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5hXSVPMeV2EAEegO6sq22g",
          "type": "Asset",
          "createdAt": "2015-08-09T17:26:46.024Z",
          "updatedAt": "2015-08-09T17:26:46.024Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "HackBarcelona-4-300x200",
          "description": "HackDay",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5hXSVPMeV2EAEegO6sq22g/895a208837d4c7271cced76c5cad9ca6/HackBarcelona-4-300x200.jpg",
            "details": {
              "size": 30543,
              "image": {
                "width": 300,
                "height": 200
              }
            },
            "fileName": "HackBarcelona-4-300x200.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "62vSEQtynYCM8wOiCMWK6w",
          "type": "Asset",
          "createdAt": "2016-12-30T13:41:23.736Z",
          "updatedAt": "2016-12-30T13:41:23.736Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GS VW",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/62vSEQtynYCM8wOiCMWK6w/a681d16a333fea0c05f6b347f9c933bd/GS_VW.jpg",
            "details": {
              "size": 57650,
              "image": {
                "width": 600,
                "height": 450
              }
            },
            "fileName": "GS_VW.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "69xaC3JBIW4iWIcWCQSsk6",
          "type": "Asset",
          "createdAt": "2015-12-16T14:01:15.802Z",
          "updatedAt": "2015-12-16T14:01:15.802Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "europe image",
          "description": "copyright esa",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/69xaC3JBIW4iWIcWCQSsk6/05447eeaaa8980eee916a8c23ee54804/europe_image_copyright_esa.jpg",
            "details": {
              "size": 141158,
              "image": {
                "width": 400,
                "height": 400
              }
            },
            "fileName": "europe_image_copyright_esa.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6PreyTDCqQggk40MU0uQ6S",
          "type": "Asset",
          "createdAt": "2016-05-17T14:16:24.636Z",
          "updatedAt": "2016-05-17T14:16:24.636Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "sonar logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6PreyTDCqQggk40MU0uQ6S/f7b45306ffb20d005ef2c88f0ecd6539/sonar_logo.png",
            "details": {
              "size": 2593,
              "image": {
                "width": 251,
                "height": 121
              }
            },
            "fileName": "sonar_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6RCwDLNtcs08Aaua6YyIk8",
          "type": "Asset",
          "createdAt": "2016-06-15T13:22:27.971Z",
          "updatedAt": "2016-06-15T13:22:27.971Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "SOAP",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6RCwDLNtcs08Aaua6YyIk8/f0abfae0c0c0c25dac9b27ea3e7a664a/soap-ws-logo.png",
            "details": {
              "size": 22175,
              "image": {
                "width": 294,
                "height": 161
              }
            },
            "fileName": "soap-ws-logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6esPuS4aekYYwQqoySSWe8",
          "type": "Asset",
          "createdAt": "2015-09-30T13:41:56.015Z",
          "updatedAt": "2015-09-30T13:41:56.015Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "musicbrickslogo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6esPuS4aekYYwQqoySSWe8/6d06e334e48f558df6416ed4f5a106b5/mb-small.png",
            "details": {
              "size": 62306,
              "image": {
                "width": 395,
                "height": 200
              }
            },
            "fileName": "mb-small.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7JxMoF6aFqwIu4QWOoiKqi",
          "type": "Asset",
          "createdAt": "2015-11-30T11:23:04.249Z",
          "updatedAt": "2015-11-30T11:23:04.249Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Social Red",
          "description": "For 16/11/15 News item",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7JxMoF6aFqwIu4QWOoiKqi/fc0b89d95bbabcd8e6cf837e62e9aec3/Social_Red.jpg",
            "details": {
              "size": 177446,
              "image": {
                "width": 484,
                "height": 397
              }
            },
            "fileName": "Social_Red.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7hyEllTKOke4sgOUMAYMuM",
          "type": "Asset",
          "createdAt": "2016-06-10T14:18:49.751Z",
          "updatedAt": "2016-06-10T14:18:49.751Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "fox",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7hyEllTKOke4sgOUMAYMuM/860f6621c5c976d0b6e6b1faf1eaa6ec/fox.png",
            "details": {
              "size": 125177,
              "image": {
                "width": 662,
                "height": 558
              }
            },
            "fileName": "fox.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7wXLkq0JyMS4i446mIuGUm",
          "type": "Asset",
          "createdAt": "2016-02-29T10:52:29.862Z",
          "updatedAt": "2016-02-29T10:52:29.862Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "taiwan",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7wXLkq0JyMS4i446mIuGUm/14e7d8ed19f3e25352f3c1be7a335894/taiwan.png",
            "details": {
              "size": 36678,
              "image": {
                "width": 1204,
                "height": 515
              }
            },
            "fileName": "taiwan.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "B2Cq6FG5vE6waekwcCUEm",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:51.376Z",
          "updatedAt": "2015-08-19T06:27:51.376Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steimlogo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/B2Cq6FG5vE6waekwcCUEm/b4f6784120427fed481d16b1d7aac3a1/steimlogo.jpeg",
            "details": {
              "size": 7209,
              "image": {
                "width": 267,
                "height": 189
              }
            },
            "fileName": "steimlogo.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "P4jKinmDYq4Gc80qIwIUs",
          "type": "Asset",
          "createdAt": "2015-08-09T18:06:35.516Z",
          "updatedAt": "2015-08-09T18:06:35.517Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steimtour",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/P4jKinmDYq4Gc80qIwIUs/2c991b8b8077ba5d37e701e4d525c003/steimtour.jpg",
            "details": {
              "size": 20655,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steimtour.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "TEligmo90YwsKqQocyequ",
          "type": "Asset",
          "createdAt": "2017-02-28T12:36:01.199Z",
          "updatedAt": "2017-02-28T12:36:01.199Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "IMG 20170126 151620",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/TEligmo90YwsKqQocyequ/368bf2fb9dd4895fe38f45299d35ff7f/IMG_20170126_151620.jpg",
            "details": {
              "size": 1510767,
              "image": {
                "width": 2560,
                "height": 1920
              }
            },
            "fileName": "IMG_20170126_151620.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "XckOX5xSQEK0g4KSkQG8G",
          "type": "Asset",
          "createdAt": "2015-08-19T06:18:27.865Z",
          "updatedAt": "2015-08-19T06:18:27.865Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "chi14",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/XckOX5xSQEK0g4KSkQG8G/81787e4a44d0734c5397e007f0955773/chi14.jpg",
            "details": {
              "size": 16519,
              "image": {
                "width": 300,
                "height": 225
              }
            },
            "fileName": "chi14.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "YnRJpaR5U2OC80mY2ggmY",
          "type": "Asset",
          "createdAt": "2015-11-20T16:40:57.452Z",
          "updatedAt": "2015-11-20T16:40:57.453Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ADEteaser",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/YnRJpaR5U2OC80mY2ggmY/54d38a92e2be1c8195012f4c56fd6694/1.png",
            "details": {
              "size": 531463,
              "image": {
                "width": 623,
                "height": 414
              }
            },
            "fileName": "1.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "dPRc8ywWQ0igM2Eq822Ay",
          "type": "Asset",
          "createdAt": "2016-04-15T13:55:22.863Z",
          "updatedAt": "2016-04-15T13:55:22.863Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ICMR",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/dPRc8ywWQ0igM2Eq822Ay/d6d64adb66f11ec492f2e04d249bc813/icmr2016_2.png",
            "details": {
              "size": 206368,
              "image": {
                "width": 964,
                "height": 358
              }
            },
            "fileName": "icmr2016_2.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "kXXLBAgVIOe68egIK6yeS",
          "type": "Asset",
          "createdAt": "2016-07-22T12:14:13.532Z",
          "updatedAt": "2016-07-22T12:14:13.532Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ismir2016 logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/kXXLBAgVIOe68egIK6yeS/096a6359958f856c083b7fc82f15dc2d/ismir2016_logo.png",
            "details": {
              "size": 33974,
              "image": {
                "width": 502,
                "height": 264
              }
            },
            "fileName": "ismir2016_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "kldibyQN32EeQgYYiswcw",
          "type": "Asset",
          "createdAt": "2017-02-22T13:37:38.387Z",
          "updatedAt": "2017-02-22T13:37:38.388Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NI MASCHINE-JAM Foto 03",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/kldibyQN32EeQgYYiswcw/11f9a80ddf42e36940af95ea7a3803e2/NI_MASCHINE-JAM_Foto_03.jpg",
            "details": {
              "size": 995859,
              "image": {
                "width": 2000,
                "height": 1242
              }
            },
            "fileName": "NI_MASCHINE-JAM_Foto_03.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "lN6lejvjMssqaA6QGm0qS",
          "type": "Asset",
          "createdAt": "2016-03-07T12:07:18.083Z",
          "updatedAt": "2016-03-07T12:07:18.083Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "RBMA test",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/lN6lejvjMssqaA6QGm0qS/02f417b10eed1607133cae14bfec8837/RBMA_test.png",
            "details": {
              "size": 1989228,
              "image": {
                "width": 1280,
                "height": 960
              }
            },
            "fileName": "RBMA_test.png",
            "contentType": "image/png"
          }
        }
      }
    ]
  }
}

var eventText = {
  "sys": {
    "type": "Array"
  },
  "total": 44,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5F6NTjgarueasakyQycsuu",
        "type": "Entry",
        "createdAt": "2016-06-10T14:32:21.786Z",
        "updatedAt": "2016-06-10T14:33:11.872Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at WavesVienna!",
        "dateTime": "2016-06-10T00:00+03:00",
        "teaser": "GiantSteps is official supporter of WavesVienna!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7hyEllTKOke4sgOUMAYMuM"
            }
          }
        ],
        "bodyText": "The Waves Music Hackday is a full-day workshop event, where hackers, musicians, thinkers and makers come together to design and create the future of music. Meet\ncreative people, spin your ideas, and start realizing them!\n\n[Download leaflet](https://assets.contentful.com/xrzr1u3na612/357N9arzT2kiIGyqgOMQys/2429841c9668a17a9cc238b6dc41e7a2/Waves_2016_Music_Hackday_v4.pdf)",
        "slug": "news_wavesvienna"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3uOHVarKQgcM0aaWME24ac",
        "type": "Entry",
        "createdAt": "2015-10-30T17:15:22.458Z",
        "updatedAt": "2016-01-11T14:44:13.208Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 26,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Understanding human creativity in music",
        "dateTime": "2015-10-30",
        "teaser": "How the workshop between 5 EU projects in Lisbon went...",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3BKq7wS9I4Wa24MuKmSIwm"
            }
          }
        ],
        "bodyText": "5 European projects, complementing each other, got together in Lisbon on 21st of October, in order to share thoughts, ideas, and findings – for better understanding of creativity, for making better tools, technologies and experiences.\n\nCovering plenty of aspects - starting from scientific understanding of human creativity, spreading to creating of something yet unknown - either device, visualization or interface, covering different music styles, both electronic and classical music as well as business aspects this workshop lasted for more than 3 hours.\n\n\nThe presentation given at the workshop can be downloaded for view below:\n\n[Keynote: creativity, its scientific understanding and models](//assets.contentful.com/xrzr1u3na612/6a0ARuFXryE6Wg0eyGuc0m/c7cd3b3d427e9d7031f2fac16ae04011/Maarten_Grachten_presentation.pdf) (Maarten Grachten, project [Lrn2Cre8](http://lrn2cre8.eu/))\n\n[Creation of unknown technology and making new music](//assets.contentful.com/xrzr1u3na612/6ilzByACB2ywsq0oMEQWAW/9c7e5526eeb7be3e3645af8649b3c4d7/GiantSteps_ppt_lisbon_worshop_public__1_.pdf) (Kristina Andersen, project [GiantSteps](http://www.giantsteps-project.eu/#/))\n\n[Pathways for turning Music Tech research outcomes into innovative bricks for new creative industries ventures](https://assets.contentful.com/xrzr1u3na612/7dpwkX3584Uqi8ks2iYiAE/7eb528e16a54ada0764e3e371c8b7325/_MusicBricks.pdf) (Marta Arniani, project [#MusicBricks](http://musictechfest.net/musicbricks/))\n\n[New ways of experiencing classical music](//downloads.contentful.com/xrzr1u3na612/4BpxeugLC0AK8eyceqyieA/2454b9d8694c1ddb6b6f312f67f5702b/PHENICX_presentation_forWeb.pdf) (Cynthia Liem, project [PHENICX](http://phenicx.upf.edu/))\n\n[Designing expressive interfaces for boosting creativity in music](//assets.contentful.com/xrzr1u3na612/5AWYMagASsYGUcY8oo6WWo/c743c6193ffaeb65afecd8a22d978aef/1510_RAPID_MIX_presentation_sergi.pdf) (Sergi Jorda, project [RAPID-MIX](http://rapidmix.goldsmithsdigital.com/))\n\n\n\n\n![IMG 4112](//images.contentful.com/xrzr1u3na612/1t46MuRI4UMEgmCa8ysmkO/93e0b12415447b7f68e7b65b443412df/IMG_4112.JPG) ![IMG 4145](//images.contentful.com/xrzr1u3na612/JfN3Np9D8cI86KAKCOC8o/f7405c6a9eb242cf7d4e94e740e046aa/IMG_4145.JPG) ![IMG 4138](//images.contentful.com/xrzr1u3na612/T05YqZ9aeIUEeICmkoswU/259a960c61af0e260341685ac0d1b092/IMG_4138.JPG) ![IMG 4179](//images.contentful.com/xrzr1u3na612/4nsVIbfMBGI2c6WOKQYSOM/7629d495022a5bf238b93798df1149c5/IMG_4179.JPG) ![IMG 4079](//images.contentful.com/xrzr1u3na612/11oMN9fisiQ4gSumM0YAQe/27def0dcf8183f3a4097dbf4cc2bf8e9/IMG_4079.JPG) ![IMG 4124](//images.contentful.com/xrzr1u3na612/1GbgB0ez96yCwIs6wQaeyS/d65f36ca9dd5668210b395d9bf052207/IMG_4124.JPG) ![IMG 4136](//images.contentful.com/xrzr1u3na612/2or8RR05uAq2uIMCiwE8kU/390f5b39100f8d6f73c927337af9a5a3/IMG_4136.JPG) ![IMG 4096](//images.contentful.com/xrzr1u3na612/3MrSmMqRT2EacEAgK4Cuyw/bc40c7528279de473819d067ae0c9f7d/IMG_4096.JPG) ![IMG 4185](//images.contentful.com/xrzr1u3na612/236fZWBIlSEqIe2EKECC8O/559d060c74680d44a269f5d4302eeffa/IMG_4185.JPG) ![IMG 4093](//images.contentful.com/xrzr1u3na612/3ZGzbuup9mKAaEoawI28G2/1794b99d80d98728a2fba57ce000ea3d/IMG_4093.JPG)\n\n\n",
        "slug": "Lisbon_workshop_on_creativity"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1svWua73zCA2KYs8q4swqQ",
        "type": "Entry",
        "createdAt": "2016-02-29T10:54:52.795Z",
        "updatedAt": "2016-03-31T13:13:21.759Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps talk in Taiwan",
        "dateTime": "2016-02-26",
        "teaser": "Peter Knees from JKU gave a talk at 4th Taiwanese Music and Audio Computing Workshop.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7wXLkq0JyMS4i446mIuGUm"
            }
          }
        ],
        "bodyText": "Peter Knees (Johannes Kepler University Linz) gave a talk on GiantSteps titled \"Only Personalized Retrieval can be Semantic Retrieval or: What Music Producers Want from Retrieval and Recommender Systems” on Feb 22, 2016 at the 4th Taiwanese Music and Audio Computing Workshop.\n\n[More information](https://tmacw16.wordpress.com/)\n\n![tw ws 2](//images.contentful.com/xrzr1u3na612/3y4nYgLF60YeeCyIsoaWeY/f3a41d7bae0145645dc8f273a7c6e039/tw_ws_2.png) ![tw ws 1](//images.contentful.com/xrzr1u3na612/38dGPkbliUCwEasceiakeU/55ad6822ad1b08a983d803ea37ac362d/tw_ws_1.png)\n",
        "slug": "taiwanese_workshop"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5hsesjEKDmywUk6uUqwA0w",
        "type": "Entry",
        "createdAt": "2015-12-03T09:02:11.703Z",
        "updatedAt": "2015-12-03T11:50:54.961Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Second year dissemination report released",
        "dateTime": "2015-12-01",
        "teaser": "Giantsteps team releases latest deliverable, the D7.4 Second year dissemination report!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5eC02esDA4MOkiuayA2giE"
            }
          }
        ],
        "bodyText": "GiantSteps has released its second year dissemination report. For more information and download visit [this page](http://www.giantsteps-project.eu/#/downloads/deliverables)\n\n",
        "slug": "d74release"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "15NaDv8vFQq4E4YAg2ukGs",
        "type": "Entry",
        "createdAt": "2015-11-30T11:27:37.698Z",
        "updatedAt": "2015-11-30T11:27:37.698Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at IRCAM!",
        "dateTime": "2015-11-30",
        "teaser": "International IRCAM Forum Workshop in Paris",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4xtl5DE6CAW0mms6KuIiyi"
            }
          }
        ],
        "bodyText": "GiantSteps was invited to present at the IRCAM forum event in Paris (http://forumnet.ircam.fr/event/parisworkshop2015/) on 26th of November. The presentation outlined the current state of the project with a focus on functional and non-functional prototypes and the methods we use to generate and validate these. There were much interest for the project at the event and questions were centered on our user group (in terms of demographics and style) and our position regarding tangible interfaces versus software.\n ",
        "slug": "ircam"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "350yhVGSNa64eKQwmYUaeW",
        "type": "Entry",
        "createdAt": "2016-06-30T13:17:36.108Z",
        "updatedAt": "2016-06-30T15:03:31.985Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Winning hacks from MTF",
        "dateTime": "2016-06-30T00:00+03:00",
        "teaser": "MTF Berlin GiantSteps Hackathon Challenge winners",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2QHxW95IXYYeeQ6eoeuq6s"
            }
          }
        ],
        "bodyText": "On the weekend from Friday 27th until Sunday 29th of May, the Music Tech Fest Berlin located at the [Funkhaus Berlin](http://www.funkhaus-berlin.net) took place.\n\n\nThe program was a mix of Performances, Art Exhibitions, Tech Talks, Jam Sessions, and the famous MTF Hackathon.\n\n\nGiantSteps sponsored a Hackathon challenge, providing an award of 200€ worth of vouchers for the Native Instruments online shop, going to the best project making use of GiantSteps tools.\n\n\nAround 70 hackers attended the Hackathon and several teams used GiantSteps technology to implement amazing projects within the 24 hours time limit. \nA really nice hack by [Tom Fox](https://vulpestruments.com), [Luis Zayas](http://luiszayas.com), and [Gawain Hewitt](http://gawainhewitt.co.uk/), named “To Be Remembered” convinced the judges and won the challenge. They presented an amazing performance featuring an improvisation by singer Eska to the sounds created by their installation.\n\n\nThey used the harmony agent developed in the course of the GiantSteps project in a sound installation incorporating a tree. Strings mounted on the stem were hit by piano hammers, while diverse sensors were used to control the sound and notes to create a living soundscape.\n\n\nA special mentioning goes to the hack “The Mad Drummer” by Ryan Groves and Georgi Dzhambazov, who used the [madmom](https://github.com/CPJKU/madmom) signal processing library to implement an automatic drummer for guitar accompaniment.\n\n![mtf2](//images.contentful.com/xrzr1u3na612/6Je20bz4cM4YCiMIQ2E6sw/89f1dafccd095f5b66d3e4404b293115/mtf2.png)\n",
        "slug": "MTF_hack_winners"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "41F6cPmECQgeAekAmiwaG2",
        "type": "Entry",
        "createdAt": "2016-05-17T14:37:35.647Z",
        "updatedAt": "2016-05-20T10:24:55.484Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at Music Tech Fest",
        "dateTime": "2016-05-13T00:00+03:00",
        "teaser": "GiantSteps hack challenge at #MTF!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3EgzJvQJNKywUIqAw0AiSG"
            }
          }
        ],
        "bodyText": "GiantSteps will pose a hack challenge at #MTF Berlin on 27-29 of May 2016. The hack challenge is targeted at the most interesting applications using GiantSteps tools. \n\nGiantSteps is a research project, delivering set of new generation digital music-making tools, intelligent agents and interfaces. Musical expert agents, supportive and inspirational systems for melody, harmony, and rhythm are delivered by GiantSteps for guiding users during composition when they lack inspiration or technical or musical knowledge.\n\nTools might be used for composing tracks (full tracks of pieces - e.g. highlighting tempo/style/rhythm transitions), creating new algorithms - or for any other application.\n\nTools available for hackers are:\n\n   GS-Harmony (Pd patch, standalone MIDI I/O application) - harmony expert agent;\n\n   Drumming with Style (Pd patch, standalone MIDI I/O application) - drum pattern variation agent;\n\n   Madmom Library - library rapid prototyping of new algorithms;\n\n   Rhythm Pattern Variation Prototype and Library - Tool for automatic variation of step sequencer rhythm patterns;\n\n   Automatic Dynamic Timewarping Tool - Madmom powered prototype to automatically warp songs with variable tempo to a fixed tempo grid;\n\n   Reactable Studio beta (for iPad Pro - iPad Pro will be provided by GiantSteps team) - Mobile application for music creation/mixing;\n\n   New Reactable Mobile 2.4 (for iPhone/Android) - Mobile application for music creation / mixing;\n\n   Updated Rhythmcat VST - drum sounds search agent.\n\nTechnical support for each tool will be provided for hackers by GiantSteps team (4 people).\n\nFull description of tools functionality and technical information will be available soon.\n\nBest use of GiantSteps tools will be awarded with single prize, which is 200€ voucher for Native Instruments online store.",
        "slug": "MTF_hack_challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5aTMyiNWRiaUIIwGsWuY4w",
        "type": "Entry",
        "createdAt": "2016-07-22T12:24:36.662Z",
        "updatedAt": "2016-07-22T12:25:13.336Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Best paper award at NIME!",
        "dateTime": "2016-07-21T00:00+03:00",
        "teaser": "Paper resulted from GiantSteps!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3TwGsCI6u46Y6AAwA8Q6Os"
            }
          }
        ],
        "bodyText": "A paper resulted from GiantSteps and presented by researchers of the UPF's Music Technology Group (Cárthach Ó Nuanáin, Sergi Jordà & Perfecto Herrera) has received the \"best paper award\" in the 16th International Conference on New Interfaces for Musical Expression (NIME), one of the most relevant and influential in the area of music technology, which was held recently in Brisbane, Australia.\n\n\nThe paper \"An Interactive Software Instrument for Real-time Rhythmic Concatenative Synthesis\" describes an approach for generating and\nvisualising new rhythmic patterns from existing audio in\nreal-time using concatenative synthesis. A graph-based model enables a novel 2-dimensional visualisation and manipulation of new patterns that mimic the rhythmic and timbral character of an existing target seed pattern. A VST audio plugin has been implemented using the reported research and has got positive acceptance not only in Brisbane's presentation but also in other non-academic meetings like Sonar+D and Music Tech Fest.",
        "slug": "NIME_best_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "qpQHhNQ4eW6ua0U40ioUi",
        "type": "Entry",
        "createdAt": "2016-06-16T14:43:41.519Z",
        "updatedAt": "2016-06-20T16:00:58.204Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 9,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "At Sónar+D",
        "dateTime": "2016-06-16T00:00+03:00",
        "teaser": "Live from GiantSteps booth...",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "26THAaia9WYgUSIm4oI6Uw"
            }
          }
        ],
        "bodyText": "GiantSteps partners at GiantSteps booth...\n\n![sonar16 1](//images.contentful.com/xrzr1u3na612/4BSTlGHSXCqEY8YoK6M24G/91f2bf080eed6e09555a689a5d05c4e8/sonar16_1.jpg) ![sonar16 2](//images.contentful.com/xrzr1u3na612/3avWrP3kneayWQeOOaUgWe/d97518de1cc51ff1765d1ade77f02746/sonar16_2.jpg) ![sonar16 3](//images.contentful.com/xrzr1u3na612/4tGASUPFjaCIo8GuKwmWW2/2e460a7d9d88165786e90fc3998c229e/sonar16_3.jpg) ![sonar16 4](//images.contentful.com/xrzr1u3na612/47D6ljUAiksGWMKC66s4w0/0d092b61fcc1a4a63dcb11c61f1dd15a/sonar16_4.jpg)\n![sonar16 5](//images.contentful.com/xrzr1u3na612/WPfBF8rASks8qkyGwCg26/c0ea51b14daadefd1d14072cea90cd61/sonar16_5.jpg) ![sonar16 6](//images.contentful.com/xrzr1u3na612/DVpsKshhQGWgkMsgmOkCk/f02521d667e380b667cac52b1486513c/sonar16_6.jpg)\n![sonar16 7](//images.contentful.com/xrzr1u3na612/2a51XVIJtymWI886SOw4Ok/9306dc3f589167744d7b0633b8daad29/sonar16_7.jpg)\n![sonar16 9](//images.contentful.com/xrzr1u3na612/6lim0BuNwW6GwsY8Ek8kgq/a0e06a17ec6d6a96e38fd4eb6a757255/sonar16_9.jpg)\n![sonar16 11](//images.contentful.com/xrzr1u3na612/2R5pO6RXIkYmmEu42EYowE/10f36e630279a9c65e6fb7d50f27742b/sonar16_11.jpg) ![sonar16 10](//images.contentful.com/xrzr1u3na612/3IkWlc49vW6AYUAyIaEaks/b619c2ba0413aa13ad62ec9a5b7279a1/sonar16_10.jpg) ![sonar16 12](//images.contentful.com/xrzr1u3na612/163FawdQjIq0QEI4o8wQeq/453c2ea6fe4c6770c5480ed633a52315/sonar16_12.jpg)",
        "slug": "live_from_sonar"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "73LsEWxrMW2uM2GEmgqwiO",
        "type": "Entry",
        "createdAt": "2017-02-28T12:44:47.781Z",
        "updatedAt": "2017-02-28T12:44:47.781Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps is over",
        "dateTime": "2017-02-28T00:00+02:00",
        "teaser": "The project has officially ended",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "TEligmo90YwsKqQocyequ"
            }
          }
        ],
        "bodyText": "Project has officially ended (actually already in October 2016), however preparation of last deliverables, final review, administrative issues, etc. are still taking some time.\n\nIn January 2017 the project received an \"Excellent\" mark during the review performed by European Commission and independent experts.",
        "slug": "giantsteps_is_over"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5s7jqezy8w6qeCIQwQoeMo",
        "type": "Entry",
        "createdAt": "2016-05-24T13:44:11.179Z",
        "updatedAt": "2016-05-24T13:52:27.782Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 5,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Sónar+D wants technology to think of users and artists first",
        "dateTime": "2016-05-24T00:00+03:00",
        "teaser": "Article in La Vanguardia mentioning GiantSteps",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4TNPZUinbqqwQy8CygkOOw"
            }
          }
        ],
        "bodyText": "(in Catalan language)\n\n![sonar_writeup](//images.contentful.com/xrzr1u3na612/3NgDCue7448qUE8C2Qyoa6/77a0b336dbd9d9231b8632c301714bbe/sonar_writeup.jpg)\n\n[GiantSteps booth at Sónar+D](http://www.giantsteps-project.eu/#/events/giantsteps_booth_at_sonarplusd)",
        "slug": "lavanguardia"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3Qfhi8ykCQaEKkUSmG02c2",
        "type": "Entry",
        "createdAt": "2015-12-14T11:11:00.164Z",
        "updatedAt": "2015-12-14T11:12:05.663Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Native Instruments iMaschine 2 with GiantSteps Technology",
        "dateTime": "2015-12-11",
        "teaser": "Make music anywhere with iMASCHINE 2!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "416UKEnyU02q666IIIg2aE"
            }
          }
        ],
        "bodyText": "Native Instruments iMaschine 2 introduces a new set of features, including Arranger, Step Mode, and Smart Play functionality. It is also one of the first music production apps to include optimizations for the new 3D Touch features on Apple iPhones.\n\nThe new Smart Play keyboard introduces Scale, Chord and Arpeggiator functionality to iMaschine 2, allowing users to play chords, melodies, and basslines that are always in-key. The Scale mode offers users to select from a variety of traditional and non-traditional scales, while the Chord mode will turn a single key stroke into a full chord, which is especially useful when working on a mobile device. Within Chord Mode, the new Chord Sets present ready-to-play progressions to inspire and augment compositions. Furthermore, the Arpeggiator makes it easy to add dynamic motion to a track.\n\n<a href=\"https://www.youtube.com/watch?v=XllIqoyc6P8\" class=\"embedly-card\" data-card-width=\"100%\" data-card-controls=\"0\">Embedded content: https://www.youtube.com/watch?v=XllIqoyc6P8</a>",
        "slug": "iMaschine2"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3s8F9pw9OEMSauwaQeQoQ0",
        "type": "Entry",
        "createdAt": "2015-09-30T13:26:37.945Z",
        "updatedAt": "2015-09-30T13:32:25.320Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": " Best Bitalino Hack and Best Juce Hack",
        "dateTime": "2015-06-30",
        "teaser": "GiantSteps partner wins the prizes for Best Bitalino Hack and Best Juce Hack!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2jrJpTsF72gGa0ecUmqci4"
            }
          }
        ],
        "bodyText": "GiantSteps partner, JKU researcher Richard Vogl wins the prizes for Best Bitalino Hack and Best Juce Hack at the Music Hack Day 2015 in Barcelona. Watch the [presentation](https://www.youtube.com/watch?v=sWerNCeb7JE&feature=youtu.be&t=2h3m24s) of the hack.",
        "slug": "bitalino_hack_juce_hack"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4lelJK0lSEwIUCwksE4aEQ",
        "type": "Entry",
        "createdAt": "2015-12-16T14:03:38.178Z",
        "updatedAt": "2015-12-16T14:06:03.379Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 5,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Creative Europe: measuring the creative industries of the EU",
        "dateTime": "2015-12-11",
        "teaser": "NESTA welcomes increasing policy debate in report",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "69xaC3JBIW4iWIcWCQSsk6"
            }
          }
        ],
        "bodyText": "[NESTA](http://www.nesta.org.uk/), an innovation charity with a mission to help people and organisations bring great ideas to life, releases [report](<http://www.nesta.org.uk/blog/creative-europe-measuring-creative-industries-eu?utm_source=Nesta+Weekly+Newsletter&utm_campaign=213c2ed2bb-Nesta_Newsletter_16_12_1512_14_2015&utm_medium=email&utm_term=0_d17364114d-213c2ed2bb-181435029#sthash.cTSVO7xf.uxfs&st_refDomain=t.co&st_refQuery=/D3296pEkS0?t=1&cn=ZmxleGlibGVfcmVjc18y&sig=d307ea8a70deaea269b9b6dfabbda4e704a7259e&al=1&iid=a18b4326b8774b28b4007f1ba5dde7a7&autoactions=1450269995&uid=210798140&nid=244+292>) on \"Creative Europe: measuring the creative industries of the EU\".\n\nHere's a teaser:\n\n\"The origins of the EU – a coal and steel free trade agreement - lie elsewhere; however Europe’s creative industries are likely to be an increasingly important part of its economic future. Creative industries provide jobs that are highly skilled and more resistant to automation, jobs that are therefore more likely to be sustainable. Understanding them is therefore of strategic importance.\n\nA challenge in thinking about creative industries at a European level has been the absence of comparable statistics across the countries of the EU. Nesta’s report by Max Nathan, Andy Pratt and Ana Rincon-Aznar, published today, helps address this by providing consistent estimates of employment in the creative industries of the EU’s 28 member states and, where data has allowed, the wider ‘creative economies’ of 20 member states (the ‘creative economy’ consists of jobs inside the creative industries and creative jobs in other industries, for example a designer working for a car manufacturer).\"\n\n\n[See here for the rest](http://www.nesta.org.uk/blog/creative-europe-measuring-creative-industries-eu?utm_source=Nesta+Weekly+Newsletter&utm_campaign=213c2ed2bb-Nesta_Newsletter_16_12_1512_14_2015&utm_medium=email&utm_term=0_d17364114d-213c2ed2bb-181435029#sthash.cTSVO7xf.uxfs&st_refDomain=t.co&st_refQuery=/D3296pEkS0?t=1&cn=ZmxleGlibGVfcmVjc18y&sig=d307ea8a70deaea269b9b6dfabbda4e704a7259e&al=1&iid=a18b4326b8774b28b4007f1ba5dde7a7&autoactions=1450269995&uid=210798140&nid=244+292)",
        "slug": "nesta_report"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4TUpZpEVBmYA0CcM8U82W",
        "type": "Entry",
        "createdAt": "2016-04-15T14:05:51.070Z",
        "updatedAt": "2016-04-15T14:08:07.571Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at NIME2016",
        "dateTime": "2016-04-08",
        "teaser": "An Interactive Software Instrument for Real-time Rhythmic Concatenative Synthesis",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3TwGsCI6u46Y6AAwA8Q6Os"
            }
          }
        ],
        "bodyText": "In this paper we describe an approach for generating and visualising new rhythmic patterns from existing audio in real-time using concatenative synthesis. We introduce a graph-based model enabling novel visualisation and manipulation of patterns that mimic the rhythmic and timbral character of a target seed pattern using a separate database of palette sounds. Our approach is described, reporting on those features that may be useful in describing units of sound related to rhythm and how they might then be projected into two-dimensional space for visualisation using\nreduction techniques and clustering. We conclude the paper with our qualitative appraisal of using the interface and outline scope for future work.\n\n[For more...](http://mtg.upf.edu/node/3464)",
        "slug": "nime_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4Dl1lLfiWcKkGqc80IAiEO",
        "type": "Entry",
        "createdAt": "2016-05-24T13:11:37.706Z",
        "updatedAt": "2016-05-24T13:13:41.850Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at ICMC 2016",
        "dateTime": "2016-05-24T00:00+03:00",
        "teaser": "The GiantSteps Project: A Second-Year Intermediate Report",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2I9o4hbLEs4UUKqS0Y6Qis"
            }
          }
        ],
        "bodyText": "__The GiantSteps Project: A Second-Year Intermediate Report__\n\nP. Knees, K. Andersen, S. Jordà, M. Hlatky, A. Bucci, W. Gaebele, and R. Kaurson.\nProceedings of the 42nd International Computer Music Conference (ICMC 2016)\nUtrecht, the Netherlands, September 14-16, 2016.\n\n__Abstract:__\n\nWe report on the progress of GiantSteps, an EU-funded project involving institutions from academia, practitioners, and industrial partners with the goal of developing new concepts for intelligent and collaborative interfaces for music production and performance. At the core of the project is an iterative, user-centric research approach to music information retrieval (MIR) and human computer interaction (HCI) that is designed to allow us to accomplish three main targets, namely (1) the development of intelligent musical expert agents to support and inspire music makers, (2) more intuitive and collaborative interfaces, and (3) low-complexity methods addressing low-cost devices to enable affordable and accessible production tools and apps. In this paper, we report on the main findings and achievements of the project's first two years.\n\n",
        "slug": "ICMC16_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3i7ydOtZ8c8eo6W8u4m4u8",
        "type": "Entry",
        "createdAt": "2015-08-19T06:21:28.520Z",
        "updatedAt": "2015-08-19T06:21:54.859Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at CHI2014",
        "dateTime": "2014-05-05",
        "teaser": "Giantsteps methodology outlined",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1lkXsI3KHS0qy4CwMOK8MC"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "XckOX5xSQEK0g4KSkQG8G"
            }
          }
        ],
        "bodyText": "The [ACM CHI](https://chi2014.acm.org/) Conference on Human Factors in Computing Systems is the premier international conference of Human-Computer Interaction. It is also the top venue for discussion and publication of state-of-the-art research into any aspect of user involvement.\n\nKristina Andersen submitted a position paper outlining the methodology of Giantsteps to the workshop “Alternate Endings: Using Fiction to Explore Design Futures.” All position papers were peer reviewed and published on the dedicated workshop website.\n\nThe paper was called: Using Props to Explore Design Futures: Making New Instruments and the abstract reads: “This paper describes the making of fictional technological objects in the context of the GiantSteps project. User research is traditionally conducted to allow end-users of a product to influence and guide the development and design of a device. The type of workshop described in this paper sets its aim much earlier in the process to engage users in a conversation about their technological desires and needs, in order to determine the design requirements for the project itself. As such the workshops are an attempt to facilitate a lived experience of engaging directly with an essentially imaginary future object.”\n\nThe workshop itself was an opportunity to discuss design research with top international researchers and the day was very successful not only in enriching our own work within the GiantSteps project but also building alliances and contacts with a view to submitting our own workshop proposal for CHI2015.\n\n\n\n![chi14](//images.contentful.com/xrzr1u3na612/XckOX5xSQEK0g4KSkQG8G/81787e4a44d0734c5397e007f0955773/chi14.jpg)\n",
        "slug": "chi14"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "12DitVU4FwsgqWKIUC8yWM",
        "type": "Entry",
        "createdAt": "2017-02-22T13:57:27.694Z",
        "updatedAt": "2017-02-22T13:59:08.667Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Playing with GiantSteps tools",
        "dateTime": "2017-02-21T00:00+02:00",
        "teaser": "Jam session using only GiantSteps tools!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "44q1uRtmpW8qcCAEUMKcU4"
            }
          }
        ],
        "bodyText": "Only tools developed in the project were used for this jam:\n\n- Reactable ROTOR\n- Dr Drums\n- Rhythmcat\n- NI - Komplete Keyboard with SmartPlay & Light Guide\n- House Harmonic Filler\n- JKU Rhythm Pattern\n\n\n[Visit GitHub](https://github.com/GiantSteps) to get access to these tools or contact us for more information.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/h_hb2oG6eYc\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "playing_giantsteps"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "7c6G2riRQ4IAgO8EgKuCwq",
        "type": "Entry",
        "createdAt": "2015-08-09T17:40:04.138Z",
        "updatedAt": "2015-08-09T21:23:13.190Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Reactable Tour",
        "dateTime": "2014-06-20",
        "teaser": "Reactable Systems visit",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5bB0gpu2MEuAMiSqm6iAsq"
            }
          }
        ],
        "bodyText": "The GiantSteps consortium took the opportunity to visit Reactable Systems during its plenary meeting in Barcelona (June 16-17).\n\nThe Reactable is an electronic instrument that is played by positioning objects with a particular functionality on an interactive tabletop. We can see in the picture the Reactable Experience (in action) that is meant to be used stationary, though still quite transportable.",
        "slug": "reactable_tour"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "CWZLjjLnJAq6oceqU86mE",
        "type": "Entry",
        "createdAt": "2016-06-15T13:26:52.700Z",
        "updatedAt": "2016-06-15T13:26:52.700Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "SOAP workshop co-organized by GiantSteps",
        "dateTime": "2016-06-15T00:00+03:00",
        "teaser": "Workshop on Surprise, Opposition, and Obstruction in Adaptive and Personalized Systems (SOAP)",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6RCwDLNtcs08Aaua6YyIk8"
            }
          }
        ],
        "bodyText": "GiantSteps will co-organize a workshop on Surprise, Opposition, and Obstruction in Adaptive and Personalized Systems (SOAP) at the 24th Conference on User Modeling, Adaptation and Personalization (UMAP) in Halifax, NS, Canada on 16th of July.\n\n[More information](https://soapworkshop2016.wordpress.com/)",
        "slug": "news_soap_workshop"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5XcaPlvKVyMaOeQmOCQSIQ",
        "type": "Entry",
        "createdAt": "2015-09-30T13:42:08.963Z",
        "updatedAt": "2015-09-30T13:42:08.963Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Another prize from Music Hack Day",
        "dateTime": "2015-07-01",
        "teaser": "Sound in Translation by Reactable Systems won the #MusicBricks prize in Barcelona!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6esPuS4aekYYwQqoySSWe8"
            }
          }
        ],
        "bodyText": "The idea for this hack is to explore the possibilities of assisted live remixing in a musical performance.\n\nUsing a hardware controller the user creates a sound and the system searches for a similar sound and adds it to the inputs available for the remix process to start over. This process can continue as the performer listens and reacts to the new sound, finding relevant information within his/her music collection.\n\nAnother performer can join in the conversation by using Bitalino Signals to control effects that alter the sound that is used for the search.",
        "slug": "sound_in_translation"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1tMpsfIeBiwQIEcuqWIQyG",
        "type": "Entry",
        "createdAt": "2016-06-15T13:47:50.484Z",
        "updatedAt": "2016-06-15T13:57:40.658Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 8,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps message at CHI",
        "dateTime": "2016-06-14T00:00+03:00",
        "teaser": "Workshop and paper from GiantSteps at CHI",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5aO3MSiJOE86wckSI4kiKs"
            }
          }
        ],
        "bodyText": "Giantteps co-hosted a workshop called: Attending to Objects as Outcomes of Design Research.\n\nThe goal for this workshop was to provide a venue at CHI for research through design practitioners to materially share their work with each other. Conversation was largely centered upon a discussion of objects produced through a research through design process.\n\n\nBringing together researchers as well as their physical work is a means of gaining insight into the practices and outcomes of research through design. If research through design is to continue to develop as a research practice for generating knowledge within HCI, this requires developing ways of attending to its made, material outcomes. The premise of this workshop was\nsimple: __We need additional spaces for interacting with and reflecting upon material design outcomes at CHI.__\n\n\nThe goal of this workshop was to experiment with such a space, and to initially do so without a strong theoretical or conceptual framing.\n\nThis workshop was strongly related to the methodologies evolved as a part of the participatory engagement in GiantSteps.\n\n\nThe longer term goal is that this format forms the beginning of a sustained community engagement with participatory physical making as a part of the methodology bases at CHI. \n\n\nWe also presented a poster: The Dial: Exploring Computational Strangeness\n\nThis paper describes the process of a computational idea emerging from a process of user engagement: algorithmic recommendations as artistic obstructions in creative work. Through a collaboration between HCI and Music Information Retrieval, we conducted open-ended interviews with professional makers of Electronic Dance Music. We describe how the idea emerged from this process, and consider how algorithmic recommendation systems could be re-considered as tools for artistic inspiration. We propose the concept of a “Strangeness Dial,” which allows the gradual adjustment of the degree of desired otherness, which is tested through the use of a non-functional prop and a series of interviews.\n\n\nThe poster was very well received and engendered a lot of interest from researchers from Spotify, Amazon and Facebook. We also had interesting conversations with the general academic community in the audience including Jakob Nielsen from Nielsen Norman Group.\n\n[Attending to Objects as Outcomes of Design Research](https://assets.contentful.com/xrzr1u3na612/KicqPFIfE22mkgO6QEOuu/1a58f023265787c499f6cc765ab5f60e/ea3423-jenkins.pdf)\n\n[The Dial: Exploring Computational Strangeness](https://downloads.contentful.com/xrzr1u3na612/4LjSJQJ3LiGWOqSA6CA8Qg/420a6763806d60b996da9648fb7c6abe/lbw0572-andersonA.pdf)\n\n![dial_poster_chi](//images.contentful.com/xrzr1u3na612/34P2w5XnPO6e6gkca84Sqm/411edefd426885dd4116950147652286/dial.jpeg)\n\nOn the pictures:\n\n- Kristina Andersen (STEIM)\n\n- \"The Dial: Exploring Computational Strangeness\" poster\n\n\n",
        "slug": "news_chi2016"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3yuFcaOG6sgeay8IYOCOQ4",
        "type": "Entry",
        "createdAt": "2016-12-30T14:02:44.047Z",
        "updatedAt": "2016-12-30T14:04:40.074Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "How did it go in Vienna",
        "dateTime": "2016-10-04T00:00+02:00",
        "teaser": "100 participants, 16 finished hacks in 8 hours!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "62vSEQtynYCM8wOiCMWK6w"
            }
          }
        ],
        "bodyText": "WavesVienna Hack Day gathered 100 participants and 16 finished hacks in 8 hours.\n\nTwo awards were sponsored by GiantSteps:\n\n1. Best interactive sound installation\nWinner: Sweet Spotting. The hack tracks a person and aligns an Acouspade directional speaker + microphone to him/her plus also adapts the sound environment using a Mod Duo by Johannes Wernicke.\n\n2. Best interactive sound retrieval: \nWinner: One Word World. The hack is an automated soundscape generator based on the FreeSound API by Tobias Hildebrandt and Hellska.\n\nIt shall be also noted, that one of persons involved in GiantSteps (Richard Vogl) won a non-GiantSteps challenge: \"Best gesture and sound combination\". The hack was a [wireless gesture actuated pedalboard controller](http://www.hackathon.io/metalstance).\n",
        "slug": "WV_how_did-it_go"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "2a6eODfQBiwsAY8CeyKoUa",
        "type": "Entry",
        "createdAt": "2016-07-22T12:16:31.553Z",
        "updatedAt": "2016-07-22T12:18:49.988Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at ISMIR",
        "dateTime": "2016-07-22T00:00+03:00",
        "teaser": "6 GiantSteps papers will be presented!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "kXXLBAgVIOe68egIK6yeS"
            }
          }
        ],
        "bodyText": "Six papers resulted from GiantSteps will be presented at [ISMIR 2016](https://wp.nyu.edu/ismir2016/):\n\n1. Recurrent Neural Networks for Drum Transcription (R. Vogl, M. Dorfer and P. Knees)\n\n2. Conversations with Expert Users in Music Retrieval and Research Challenges for Creative MIR\t(K. Andersen and P. Knees)\n\n3. Joint Beat and Downbeat Tracking with Recurrent Neural Networks\t(Sebastian Böck, Florian Krebs, Gerhard Widmer)\n\n4. Downbeat Tracking from Beat-Synchronous Features with Recurrent Neural Networks\t(F. Krebs, S. Böck, M. Dorfer, G. Widmer)\n \n5. On the Potential of Simple Framewise Approaches to Piano Transcription\t(R. Kelz, M. Dorfer, F. Korzeniowski, S. Böck, A. Arzt and G. Widmer)\n \n6. An Evaluation Framework and Case Study for Rhythmic Concatenative Synthesis\t(Cárthach Ó Nuanáin, Sergi Jordà, Perfecto Herrera)",
        "slug": "ISMIR_papers"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3fhyCOhpd6mwiIWq2QY0mi",
        "type": "Entry",
        "createdAt": "2017-02-22T13:36:18.613Z",
        "updatedAt": "2017-02-22T13:44:18.920Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "MASCHINE JAM from NATIVE INSTRUMENTS",
        "dateTime": "2017-02-19T00:00+02:00",
        "teaser": "New controller for the desktop version of the MASCHINE software ",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "kldibyQN32EeQgYYiswcw"
            }
          }
        ],
        "bodyText": "MASCHINE JAM incorporates Notes Mode feature, a new creative way to use the Smart Play features previously released with KOMPLETE KONTROL, MASCHINE and iMASCHINE 2.0 and further described in D6.3 \"Mobile Application Prototype\".\n\n\nMASCHINE already incorporated Smart Play features in its 2.2 update – a new scale and chord engine and a powerful arpeggiator. The new JAM controller comes with eight two-touch Smart Strips which allow the user to use the Smart Play features in very creative ways, (s)he can now play advanced melodies by selecting a scale and make perfect chord progressions by sweeping finger on a touch strip.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/pC5q1DuILag\" frameborder=\"0\" allowfullscreen></iframe>\n",
        "slug": "MASCHINE_JAM"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3IiyRRcjfqISGoiI6o8ukk",
        "type": "Entry",
        "createdAt": "2016-12-30T14:42:00.979Z",
        "updatedAt": "2016-12-30T14:42:00.979Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "ROTOR review by TekGadg",
        "dateTime": "2016-11-07T00:00+02:00",
        "teaser": "New Reactable product has been reviewed by TekGadg",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4zl208m0PKQW4Kouk8WIsg"
            }
          }
        ],
        "bodyText": "<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/oBzwlReXLwc\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "ROTOR_review"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3ZzJ36JUlW80c4IqwK6y6A",
        "type": "Entry",
        "createdAt": "2015-08-05T10:31:23.125Z",
        "updatedAt": "2015-08-09T21:17:24.426Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Native Instruments KOMPLETE KONTROL with GiantSteps Technology",
        "dateTime": "2014-10-27",
        "teaser": "First glance at musical expert agents developed through the GiantSteps project",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2mFVFag3HmkCG0giqm6qmM"
            }
          }
        ],
        "bodyText": "The Native Instruments KOMPLETE KONTROL series of keyboard controllers and the accompanying KOMPLETE KONTROL plugin include a first glance at musical expert agents developed through the GiantSteps project: Arpeggiator, Scales and a Chord performance modules.\n\nWith KOMPLETE KONTROL’s arpeggiator a user can turn a single note into a full musical performance – directly from the hardware and independent of the instrument. The eight controller knobs on the hardware manage parameters such as direction, rate, rhythm, patterns, and variations. The integrated scale mapping features gives users instant access to a world of melody. Virtually any musical scale can be mapped to the keyboard, ‘wrong’ notes are indicated through the keyboard’s Light Guide and even remapped so that the played notes are always in tune. A user can further activate chord mode and create a rich harmonic performance by playing single keys. Chords can be mapped by simply by selecting mode and inversion, or by loading up a chord set – ready-to-play progressions to inspire and augment the users own compositions.\n\nWatch the video [here...](https://youtu.be/o_9Xg_kqJls)",
        "slug": "news-kompletekontrol"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5hhifwe5204OEyye4GKYU4",
        "type": "Entry",
        "createdAt": "2016-06-15T13:30:54.083Z",
        "updatedAt": "2016-06-15T13:31:38.669Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "JAES article",
        "dateTime": "2016-06-15T00:00+03:00",
        "teaser": "Publication in the Journal of the Audio Engineering Society (JAES)",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5edj2Yi0qsEEwsgEK2qoC2"
            }
          }
        ],
        "bodyText": "GiantSteps article titled “An Intelligent Interface for Drum Pattern Variation and Comparative Evaluation of Algorithms” accepted for publication in the Journal of the Audio Engineering Society (JAES) – Special Issue on Intelligent Audio Processing, Semantics, and Interaction.\n\nAbstract: Drum tracks of electronic dance music pieces are a central and style-defining element. \nYet, creating them can be a cumbersome task, mostly due to lack of appropriate tools and input devices. In this work we use a UI prototype which aims at supporting musicians compose the rhythmic patterns for drum tracks, to compare different algorithms for drum pattern variation. Starting with a basic pattern (seed pattern), which is provided by the user, a list of variations with varying degree of similarity to the seed pattern is generated. The variations are created using one of the three algorithms compared: i. a similarity-based lookup method using a rhythm pattern database, ii. a generative approach based on a stochastic neural network, and iii. a genetic algorithm using similarity measures as target function. The interface visualizes the patterns and provides an intuitive way to browse through them. User test sessions with experts in electronic music production were conducted to evaluate aspects of the prototype and algorithms. Additionally a web-based survey was performed to assess perceptual properties of the variations in comparison to baseline patterns created by a human expert. The web survey shows that the algorithms produce musical and interesting variations and that the different algorithms have their strengths in different areas. These findings are further supported by the results of the expert interviews.\n",
        "slug": "JAES_article"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5TWMB2ZuCICwYCsCO6Ou4o",
        "type": "Entry",
        "createdAt": "2015-07-10T12:27:15.824Z",
        "updatedAt": "2015-08-19T08:54:02.391Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 8,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "CHI2015 Workshop",
        "dateTime": "2015-01-09T17:07",
        "teaser": "Collaborating with Intelligent Machines: Interfaces for Creative Sound",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2ydSMYC1vSkuKgiyOiuKGw"
            }
          }
        ],
        "bodyText": "Call for Participation\nThis workshop brings together researchers, designers and instrument builders to explore how we can reframe the way we design “machines” for creative expression. For the purpose of this event, we are focussing on the case of music, but no expertise in this field is required, and the outcomes will be useful to the broader field of instruments and interfaces for creative work.\n\nThe following three opportunities/challenges are imminent: The disappearing computer is putting embodiment back at the center of our concerns; intelligent agents are reaching a level of complexity where it is feasible for an interface to provide suggestions based on work practises; and finally, creative work is increasingly done in collaboration reminiscent of the classic image of musicians playing in a group. The workshop is focussed on charting these new possibilities and constraints.\n\nWe invite submissions of true position papers: what is your perspective or experience with these developments, in music or in other areas, which risks and potentials do you see; in short, what is your hunch? Position papers should be short (around 500 words) and could be illustrated by examples, such as existing or conceptualized instruments, images, or pieces of music. We explicitly encourage submissions to use various forms of creative outlets to express a position.\n\nSubmissions\nPlease send your submissions to collaboratingmachines@yahoo.com by January 19th (extended!), 2015. Submitted papers will be peer-reviewed for suitability to the workshop. Notification of acceptance will be sent on February 10th, 2015.\n\nAccepted position papers can be presented in a brief session during the workshop. At least one author of each accepted position paper must attend the workshop and all participants must register for the workshop and for at least one day of the conference. Accepted papers and other textual outcomes will be included in the workshop proceedings and made available through the workshop blog: https://collaboratingmachines.wordpress.com\n\nSocial Event\nThe workshop will be followed by a social event (on the same day or the day after), where outcomes from the workshop will be presented and discussed with artists from Seoul’s thriving music scene.\n\nOrganisers\nFlorian Grote       Native Instruments GmbH, Germany\nKristina Andersen   STEIM, Netherlands\nPeter Knees         Dept. of Computational Perception, JKU Linz, Austria",
        "slug": "CHI-15"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "44ArFNrR6UQiQMyQEIu860",
        "type": "Entry",
        "createdAt": "2015-10-24T13:20:04.018Z",
        "updatedAt": "2015-10-24T13:25:23.945Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 7,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps MTG at Music Tech Fest",
        "dateTime": "2015-10-24",
        "teaser": "More #MusicBricks hack winners present in Slovenia.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3xsRskAP2gO6kUWSWaaKEG"
            }
          }
        ],
        "bodyText": "At Music Hack Day 2015 at Sónar in Barcelona, members of the MTG GiantSteps team developed a hack that won the #MusicBricks ( incubation award. The hack involved real-time key/chord detection for intelligent retrieval and playback of existing datasets of electronic music. Subsequently, a mobile app was developed for real-time chord detection and presented at the Music Tech Fest in Slovenia, Ljubljana in September.\n\nNext stop is a Late Breaking Demo at ISMIR in Malaga! If you want to learn more please visit the project page:\n<http://giantsteps.github.io/eear/>\n",
        "slug": "GiantSteps MTG at Music Tech Fest"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "5Mq0QBmsTYYGyeGcggc84k",
        "type": "Entry",
        "createdAt": "2016-04-15T13:56:09.597Z",
        "updatedAt": "2016-04-15T14:06:23.787Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 6,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps paper at ACM ICMR 2016",
        "dateTime": "2016-03-31",
        "teaser": "Searching for Audio by Sketching Mental Images of Sound",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "dPRc8ywWQ0igM2Eq822Ay"
            }
          }
        ],
        "bodyText": "by Peter Knees (JKU) and Kristina Andersen (STEIM).\n\nWe propose a new paradigm for searching for sound by allowing users to graphically sketch their mental representation of sound as query. By conducting interviews with professional music producers and creators, we find that existing, text-based indexing and retrieval methods based on file names and tags to search for sound material in large collections (e.g., sample databases) do not reflect their mental concepts, which are often rooted in the visual domain and hence are far from their actual needs, work practices, and intuition. As a consequence, when creating new music on the basis of existing sounds, the process of finding these sounds is cumbersome and breaks their work flow due to being forced to resort to browsing the collection. \r\nPrior work on organizing sound repositories aiming at bridging this conceptual gap between sound and vision builds upon psychological findings (often alluding to synaesthetic phenomena) or makes use of ad-hoc, technology-driven mappings. These methods foremost aim at visualizing the contents of collections or individual sounds and, again, facilitating browsing therein. For the purpose of indexing and querying, such methods have not been applied yet. We argue that the development of a search system that allows for visual queries to audio collections is desired by users and should inform and drive future research in audio retrieval. To explore this notion, we test the idea of a sketch interface with music producers in a semi-structured interview process by making use of a non-functional prototype. Based on the outcomes of this study, we propose a conceptual software prototype for visually querying sound repositories using image manipulation metaphors.",
        "slug": "icmr_paper"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4UvT7OoCAM4gMIOu0KIC0Q",
        "type": "Entry",
        "createdAt": "2015-11-30T11:29:46.222Z",
        "updatedAt": "2015-11-30T11:30:43.684Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at RBMA 2015",
        "dateTime": "2015-11-20",
        "teaser": "Our thoughts are with those who suffered tragic attacks in Paris on 13/11.",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3m2xaGTMusgAK6aCiUCYcs"
            }
          }
        ],
        "bodyText": "GiantSteps attended Red Bull Music Academy, this time in Paris. We organized a presentation and a participatory workshop with all 29 participants and gathered a feedback on several software and interface prototypes. Also in depth interviews were conducted, aimed at both confirming work practices and gathering feedback for non-functional prototypes.\n\n*We were planning to visit twice and take part in both academy periods. Due to the tragic events the second session of RBMA was cancelled.*\n\n**Our thoughts are with those who suffered those tragic attacks in Paris.**\n\n \n\n* On the picture: Kristina Andersen (STEIM) and Wulf Gaebele (YDS, RBMA)",
        "slug": "rbma2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1EcGhQEU7aSeK8qY2wA2Kc",
        "type": "Entry",
        "createdAt": "2015-11-30T11:25:42.044Z",
        "updatedAt": "2015-11-30T11:25:42.044Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at SoMeRa2015",
        "dateTime": "2015-11-16",
        "teaser": "2nd International Workshop on Social Media Retrieval",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7JxMoF6aFqwIu4QWOoiKqi"
            }
          }
        ],
        "bodyText": "The goal of the workshop was to provide a forum for state-of-the-art research and to connect the communities in data mining and social media research with the ongoing research projects, particularly with respect to domain-specific media mining and analytics applications, such as linkage of social data and cultural data (e.g., in the context of concerts) or information extraction of musical knowledge from social sensors.\n\nAccepted and presented papers dealt with topics of retrieval, recommendation, browsing, and data mining in social media, as well as on the analysis of the multifaceted user traces in social media. In particular, this comprises research on context-aware music recommendations, sentiment analysis in social media, multi-modal user interest prediction, social media response prediction, life event classification, and latent topic modelling.",
        "slug": "somera2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4EFMdktRkIw0s80sUk8wcC",
        "type": "Entry",
        "createdAt": "2015-08-06T12:00:20.755Z",
        "updatedAt": "2015-08-09T16:54:38.358Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GianSteps panel discussion at Sónar+D",
        "dateTime": "2014-08-27",
        "teaser": "Discussions on how to enhance creativity",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "42ZKYYx61iUOacysAoowGK"
            }
          }
        ],
        "bodyText": "The GiantSteps panel discussion that took place on June 12th, during the Sonar Festival in Barcelona, was an exciting and fun event. Together with our two invited guests, musicians/producers Simonne Jones and Throwing Snow, the GiantSteppers Michael Hlatky (NI), Florian Grote (NI) and Sergi Jordà (UPF-MTG), discussed for more than 90 minutes about digital musical technologies, artificial musical knowledge, interaction design and about how new tools could enhance creativity while preserving each own personal voice and style.",
        "slug": "sonera+d"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "253MRw0mDiWoEAq6Kco2Sy",
        "type": "Entry",
        "createdAt": "2017-01-17T15:27:40.745Z",
        "updatedAt": "2017-01-17T15:29:41.684Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps video",
        "dateTime": "2017-01-17T00:00+02:00",
        "teaser": "GiantSteps at MTF and SONAR+D",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4I2jw4kPaMcEGyMkEsqCcM"
            }
          }
        ],
        "bodyText": "Overview of events with participation of the GiantSteps project in 2016. Covering Sonar+D Giantsteps booth in Barcelona and Music Tech Fest Hackday in Berlin.\n\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/AiIemsaIAkw\" frameborder=\"0\" allowfullscreen></iframe>",
        "slug": "mtf_sonar_video"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "58vR9zLCtG2YMQM0ysUEM4",
        "type": "Entry",
        "createdAt": "2015-08-09T17:22:53.160Z",
        "updatedAt": "2015-08-09T17:33:03.072Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps at the 5th Music Hack Day in Barcelona",
        "dateTime": "2014-07-16",
        "teaser": "100+ hackers in Barcelona build more than 30 hacks",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5hXSVPMeV2EAEegO6sq22g"
            }
          }
        ],
        "bodyText": "The GiantSteps project consortium has taken part at the [5th Barcelona Music Hack Day](http://new.musichackday.org/2014/barcelona/). The hack day was organized by the GiantSteps consortium member [MTG](http://www.mtg.upf.edu/) as an event of the [Sónar+D](http://sonar.es/en/pg/what-is-s%C3%B3nar-d) within the [Sónar 2014](http://sonar.es/en/2014/) festival.\n\nAt a Hack Day all participants have 24 hours to create a “hack” – something new, innovative, and fun. The 100+ hackers in Barcelona built more than 30 hacks, a vast majority of these created and modified sound and music in interesting and new ways.\n\nThe GiantSteps project not only sponsored one of the hack day’s challenges together with the MTG: A Nexus7 tablet for the best use of the new [Essentia](http://essentia.upf.edu/) real-time implementation for [Pd](http://puredata.info/) (won by the team [Fairy Teller](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/fairy-teller)). Many consortium members also participated with their own hacks: The Native Instruments developers teamed up with the [Bauhaus University](http://bauhausinteraction.org/) to create [littleBits of Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/littlebits-of-maschine) (press coverage on [CDM](http://createdigitalmusic.com/2014/06/legotechno-sliding-lego-blocks-make-music-littlebits-maschine-arduino/)), and with the UPF to create [Free Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/free-maschine). The people from JKU built [Casual Games for Maschine](https://www.hackerleague.org/hackathons/music-hack-day-barcelona-2014/hacks/casual-games-for-maschine).\n\nSee the [Sliding Puzzle Sequencer!](https://youtu.be/ei9jyGvRgvs) video",
        "slug": "barcelona_hack_day"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "65LYBmOBc4yiqiAqEkq4IS",
        "type": "Entry",
        "createdAt": "2015-08-09T18:07:48.655Z",
        "updatedAt": "2015-08-19T06:30:13.685Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "STEIM Tour",
        "dateTime": "2014-03-28",
        "teaser": "Giantsteps visits STEIM",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "B2Cq6FG5vE6waekwcCUEm"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "17F4foS7FgkoaYoM0u4M2m"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "P4jKinmDYq4Gc80qIwIUs"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2fIsvcu6Ioc6CYseoyaSW0"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "45L4fnn4OIquEAwUyC46IA"
            }
          }
        ],
        "bodyText": "\nThe GiantSteps consortium took the opportunity to visit the [STEIM](http://www.giantsteps-project.eu/steim.org/about/) studio during its plenary meeting in Amsterdam (March 24-26).\n\n\nSTEIM owns two “old fashioned” sound  studios that are praised by sound engineers for their quality recordings (modern studios typically “fix” glitches in post-production).\n\n![steim1](//images.contentful.com/xrzr1u3na612/17F4foS7FgkoaYoM0u4M2m/1915f43f80b74ca1bf158dfb4c912e4d/steim1.jpg)\n\n\nOne of the STEIM workshops where artists build their instruments.\n\n![steim2](//images.contentful.com/xrzr1u3na612/3EYOvxB4nS6amUC0Eog422/136cdf051b79e1d1ce4cb160b6d7dd14/steim2.jpg)\n\n\nSTEIM has existed since 1969, which makes it (one of) the oldest studios dedicated to electronic music. As a consequence, it has a large treasure archive (read basement).\n\n![steim3](//images.contentful.com/xrzr1u3na612/2fIsvcu6Ioc6CYseoyaSW0/95a4013054e59600b24c9bf75345e148/steim3.jpg)\n\n\nThe STEIM philosophy is that instruments should be tested during performance. The GS crew was more than happy to serve as an audience (and get down to the nitty-gritty details after).\n\n![steim4](//images.contentful.com/xrzr1u3na612/45L4fnn4OIquEAwUyC46IA/07068ad79ec6d951261032049df1ef48/steim4.jpg)\n",
        "slug": "steimtour"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "6NHiHS731K4SyaqoCUEEQC",
        "type": "Entry",
        "createdAt": "2016-07-01T12:19:13.403Z",
        "updatedAt": "2016-07-01T12:21:16.446Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps in The Ben Heck show",
        "dateTime": "2016-07-01T00:00+03:00",
        "teaser": "Ben Heck Visits Berlin #MTF Hack Camp",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1JE08j6SMsEqI2kGiwEA48"
            }
          }
        ],
        "bodyText": "\n\nIn this episode the Ben Heck Crew visits the Music Tech Fest in Berlin, Germany. Ben and Felix will be judging some of the projects that take place in the hack camp portion of the festival. GiantSteps is mentioned several times!\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FnPf6xO0uuQ\" frameborder=\"0\" allowfullscreen></iframe>\n\n",
        "slug": "GS_in_ben_heck_show"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "194jhZFtLwYWGI84wcSmE4",
        "type": "Entry",
        "createdAt": "2016-09-28T11:34:55.057Z",
        "updatedAt": "2016-09-28T11:36:06.730Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Music Similarity and Retrieval",
        "dateTime": "2016-09-28T00:00+03:00",
        "teaser": "Springer book co-authored by one of GiantSteps partner",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "395p59qTdu0iQsCgYOkyS8"
            }
          }
        ],
        "bodyText": "This book provides a summary of the manifold audio- and web-based approaches to music information retrieval (MIR) research. In contrast to other books dealing solely with music signal processing, it addresses additional cultural and listener-centric aspects and thus provides a more holistic view. Consequently, the text includes methods operating on features extracted directly from the audio signal, as well as methods operating on features extracted from contextual information.\n\nBook is co-authored by Peter Knees (JKU) - partner in GiantSteps project.\n\n[Check for more at Springer website](http://www.springer.com/gp/book/9783662497203)",
        "slug": "springer_book"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "1FeK5ve0NisGCOyuwOswGi",
        "type": "Entry",
        "createdAt": "2016-03-07T12:08:04.688Z",
        "updatedAt": "2016-03-07T16:29:53.117Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Berlin testing session completed",
        "dateTime": "2016-03-04",
        "teaser": "Thanks to all participants from GiantSteps team!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "lN6lejvjMssqaA6QGm0qS"
            }
          }
        ],
        "bodyText": "Different RBMA alumni - producers and performers of electronic music, joined us in testing session organized at the Native Instruments offices in Berlin on 15th of February. Several prototypes, including RhythmCat, Note Suggestion, Tempo Quantizer and other were tested and the feedback was documented for further iterations.\n\nWe’d like to thank all who helped us in making this successful and interesting session!\n \n",
        "slug": "berlin_testing_session_completed"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "4XE9pHpPhK2GkWuiwqqo6U",
        "type": "Entry",
        "createdAt": "2015-11-20T16:45:30.951Z",
        "updatedAt": "2015-11-20T16:49:46.917Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Hypotetical instruments from STEIM",
        "dateTime": "2015-11-01",
        "teaser": "A workshop held at Amsterdam Dance Event",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "YnRJpaR5U2OC80mY2ggmY"
            }
          }
        ],
        "bodyText": "What will the future of electronic music look like? What instruments will we need? How will we collaborate with the machines that are yet to be built? \n\nIn this workshop we were designing “machines” for creative expression. Working with low and no-tech, we build non-functional instruments aimed at inventing the music machine of the future. By taking as a starting point how an individual imagines the experience of playing electronic music, we spent the afternoon of 16th of October making the perfect machine or instrument for that person. This process is directly informed by the designers and researchers from partners of GiantSteps project - Native Instruments, Johannes Kepler Universität and STEIM, with the goal of making instruments that are positioned on the bleeding edge of technology. \n\nBy Kristina Andesen (STEIM) and Michael Hlatky from Native Instruments.\n\n[More information on ADE webpage](https://http://www.amsterdam-dance-event.nl/program/2015/diy-workshop-steim-hypothetical-instruments/4896015/)\n![1](//images.contentful.com/xrzr1u3na612/2Ms3lhQI6AIwS8KGyaOueI/eb687de48d1f8f5a8c2b9c4323dd0cfc/1.jpg) ![2](//images.contentful.com/xrzr1u3na612/7fkbfw5wRyykwS6G86cQqI/4e9a16fc6709db7856fc0146cface5d1/2.jpg) ![3](//images.contentful.com/xrzr1u3na612/4Mx1fnjsHuqyiQKseKqYaQ/de4f5c04b3a0aabb2cbbe12cd3a3dfea/3.jpg)\n\n",
        "slug": "workshop_at_ade2015"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "261fgUvGXuIykUACkI64oI",
        "type": "Entry",
        "createdAt": "2015-08-09T17:51:01.228Z",
        "updatedAt": "2015-08-09T17:51:01.228Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "MASCHINE Challenge for Music Hack Day Barcelona 2014 announced!",
        "dateTime": "2014-05-21",
        "teaser": "To the Hackers out there",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1TxEwotwu0QMCyuOSygUCs"
            }
          }
        ],
        "bodyText": "Fellow Hackers!\n\nFor the upcoming [Music Hackday in Barcelona](http://new.musichackday.org/2014/barcelona/), we’ll bring a bunch of [MASCHINE](http://www.native-instruments.com/en/products/maschine/production-systems/maschine/) Controllers ([Mikro MK2](http://www.native-instruments.com/en/products/maschine/production-systems/maschine-mikro/), [MK2](http://www.native-instruments.com/en/products/maschine/production-systems/maschine/) and [Studio](http://www.native-instruments.com/en/products/maschine/production-systems/maschine-studio/)) and the MASCHINE 2 software. You do the hacking. We’ve controlled [MASCHINE with Lego blocks](http://createdigitalmusic.com/2014/05/giant-lego-construction-makes-music-maschine-made-nis-devs/), and we’re eager to see and hear(!) what you come up with. The most creative hack involving MASCHINE will be awarded with a brand-new MASCHINE Studio.\n\nJust to give you some ideas: creative sequencing modes, cool new user interaction paradigms, Coffee-MASCHINE :)\n\nThe challenge is set up to gather feedback on concepts from the GiantSteps project, and the ideas and hacks will be feeding the GiantSteps user-centered design process.",
        "slug": "MASCHINE_Challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "3rNk4NcIQMi4AQkSeSigAa",
        "type": "Entry",
        "createdAt": "2016-09-30T11:54:51.062Z",
        "updatedAt": "2016-09-30T11:55:11.963Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps challenge at Waves Vienna",
        "dateTime": "2016-09-29T00:00+03:00",
        "teaser": "Best use of GiantSteps APIs will be awarded!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7hyEllTKOke4sgOUMAYMuM"
            }
          }
        ],
        "bodyText": "We seek the best hack that uses one or more of the GiantSteps APIs for music analysis, recommendation, and semantic sound analysis. We encourage hacks about music making and performance, new instruments, improvising systems, virtual band mates, real-time visualizations or anything that will mesmerize the crowd. The award is 250 Euros in vouchers for music equipment.\n\n<http://www.wavescentraleurope.com/waves-music-hackday/>",
        "slug": "wavesvienna_GS_challenge"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "xrzr1u3na612"
          }
        },
        "id": "36VLIDWB1uAeYA4wuMM4I0",
        "type": "Entry",
        "createdAt": "2016-05-17T14:27:41.993Z",
        "updatedAt": "2016-05-20T12:50:43.959Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "M3fej7oIGiOImiQwEkoS8"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "GiantSteps booth at Sónar+D!",
        "dateTime": "2016-05-17T00:00+03:00",
        "teaser": "Visit GiantSteps booth in MarketLab at Sónar+D in Barcelona!",
        "images": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6PreyTDCqQggk40MU0uQ6S"
            }
          }
        ],
        "bodyText": "MarketLab is the nerve centre of Sónar+D. It is a space where the creators of the year's most outstanding technology initiatives present the projects that they have developed in creative labs, media labs, universities and businesses. A place for trying out innovations that explore new forms of creation, production and marketing, and which in turn fosters relationships between professionals in the creative industries and the general public.\n\nVisit us on 16th, 17th and 18th of June 2016 in Barcelona!\n\n[Check for more here!](http://sonarplusd.com/activity/giantsteps/)",
        "slug": "giantsteps_at_sonarplusd"
      }
    }
  ],
  "includes": {
    "Asset": [
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "17F4foS7FgkoaYoM0u4M2m",
          "type": "Asset",
          "createdAt": "2015-08-19T06:25:32.847Z",
          "updatedAt": "2015-08-19T06:25:32.847Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim1",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/17F4foS7FgkoaYoM0u4M2m/1915f43f80b74ca1bf158dfb4c912e4d/steim1.jpg",
            "details": {
              "size": 17059,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim1.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1JE08j6SMsEqI2kGiwEA48",
          "type": "Asset",
          "createdAt": "2016-07-01T12:15:14.041Z",
          "updatedAt": "2016-07-01T12:15:14.041Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "benheck",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1JE08j6SMsEqI2kGiwEA48/80fea580d7c0da406d6531a66e69a1a9/benheck.png",
            "details": {
              "size": 227031,
              "image": {
                "width": 432,
                "height": 243
              }
            },
            "fileName": "benheck.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1TxEwotwu0QMCyuOSygUCs",
          "type": "Asset",
          "createdAt": "2015-08-09T17:47:36.923Z",
          "updatedAt": "2015-08-09T17:47:36.923Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NI Maschine Studio Laptop-2709-300x189",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1TxEwotwu0QMCyuOSygUCs/326782dc7b33e28f3f93b8843aedaea9/NI_Maschine_Studio_Laptop-2709-300x189.jpg",
            "details": {
              "size": 12520,
              "image": {
                "width": 300,
                "height": 189
              }
            },
            "fileName": "NI_Maschine_Studio_Laptop-2709-300x189.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "1lkXsI3KHS0qy4CwMOK8MC",
          "type": "Asset",
          "createdAt": "2015-08-19T06:18:59.059Z",
          "updatedAt": "2015-08-19T06:18:59.059Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "chi14 logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/1lkXsI3KHS0qy4CwMOK8MC/ee31346893ee0dff56f6324743b99f85/Screen_Shot_2015-08-19_at_09.18.12.png",
            "details": {
              "size": 120029,
              "image": {
                "width": 418,
                "height": 135
              }
            },
            "fileName": "Screen Shot 2015-08-19 at 09.18.12.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "26THAaia9WYgUSIm4oI6Uw",
          "type": "Asset",
          "createdAt": "2016-06-16T14:48:51.673Z",
          "updatedAt": "2016-06-16T14:48:51.673Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "sonar_front",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/26THAaia9WYgUSIm4oI6Uw/3c28621409401a6ff63032e781bbdd9b/sonar16_3_front.jpg",
            "details": {
              "size": 75119,
              "image": {
                "width": 800,
                "height": 600
              }
            },
            "fileName": "sonar16_3_front.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2I9o4hbLEs4UUKqS0Y6Qis",
          "type": "Asset",
          "createdAt": "2016-05-24T13:09:17.733Z",
          "updatedAt": "2016-05-24T13:09:17.733Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "icmc logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2I9o4hbLEs4UUKqS0Y6Qis/9bb4dbde73672144f872c9443fbfbb76/icmc_logo.png",
            "details": {
              "size": 22429,
              "image": {
                "width": 666,
                "height": 270
              }
            },
            "fileName": "icmc_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2QHxW95IXYYeeQ6eoeuq6s",
          "type": "Asset",
          "createdAt": "2016-06-30T13:18:44.540Z",
          "updatedAt": "2016-06-30T13:18:44.540Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "mtf1",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2QHxW95IXYYeeQ6eoeuq6s/7b9d69190b3b6f407f0bfb150a93b71b/mtf1.png",
            "details": {
              "size": 775916,
              "image": {
                "width": 800,
                "height": 600
              }
            },
            "fileName": "mtf1.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2fIsvcu6Ioc6CYseoyaSW0",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:07.557Z",
          "updatedAt": "2015-08-19T06:27:07.557Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim3",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2fIsvcu6Ioc6CYseoyaSW0/95a4013054e59600b24c9bf75345e148/steim3.jpg",
            "details": {
              "size": 22723,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim3.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2jrJpTsF72gGa0ecUmqci4",
          "type": "Asset",
          "createdAt": "2015-09-30T13:26:19.977Z",
          "updatedAt": "2015-09-30T13:26:19.977Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Hack",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2jrJpTsF72gGa0ecUmqci4/fdbb9feec949cacc3c8c0d9ffd5334f1/hack.png",
            "details": {
              "size": 629490,
              "image": {
                "width": 649,
                "height": 496
              }
            },
            "fileName": "hack.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2mFVFag3HmkCG0giqm6qmM",
          "type": "Asset",
          "createdAt": "2015-08-06T11:42:35.571Z",
          "updatedAt": "2015-08-09T21:17:16.381Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 2,
          "locale": "en-US"
        },
        "fields": {
          "title": "KomplektKontrol",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2mFVFag3HmkCG0giqm6qmM/83066d06513981351bb856b04eee49d0/KomplektKontrol.png",
            "details": {
              "size": 37807,
              "image": {
                "width": 300,
                "height": 178
              }
            },
            "fileName": "KomplektKontrol.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "2ydSMYC1vSkuKgiyOiuKGw",
          "type": "Asset",
          "createdAt": "2015-07-10T12:26:11.961Z",
          "updatedAt": "2015-07-10T12:26:11.961Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "CHI",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/2ydSMYC1vSkuKgiyOiuKGw/bc7a6b53b0ea5bf27d3345ab7723df7b/CHI.png",
            "details": {
              "size": 53199,
              "image": {
                "width": 567,
                "height": 315
              }
            },
            "fileName": "CHI.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "395p59qTdu0iQsCgYOkyS8",
          "type": "Asset",
          "createdAt": "2016-09-28T11:33:37.929Z",
          "updatedAt": "2016-09-28T11:33:37.929Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "springer",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/395p59qTdu0iQsCgYOkyS8/3f0a4c0d4918902d00b975bf22d76b6c/springer.jpg",
            "details": {
              "size": 141721,
              "image": {
                "width": 827,
                "height": 1241
              }
            },
            "fileName": "springer.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3BKq7wS9I4Wa24MuKmSIwm",
          "type": "Asset",
          "createdAt": "2015-09-25T10:24:31.676Z",
          "updatedAt": "2015-09-25T10:24:31.676Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "music",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3BKq7wS9I4Wa24MuKmSIwm/1d3aabd68ea11626d98fe950dff6b7c3/music.jpg",
            "details": {
              "size": 52090,
              "image": {
                "width": 300,
                "height": 300
              }
            },
            "fileName": "music.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3EgzJvQJNKywUIqAw0AiSG",
          "type": "Asset",
          "createdAt": "2016-05-17T14:35:12.146Z",
          "updatedAt": "2016-05-17T14:35:12.146Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "MTF-Logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3EgzJvQJNKywUIqAw0AiSG/20cbbea671737be35256becea56bccf4/MTF-Logo.png",
            "details": {
              "size": 65000,
              "image": {
                "width": 1368,
                "height": 942
              }
            },
            "fileName": "MTF-Logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3TwGsCI6u46Y6AAwA8Q6Os",
          "type": "Asset",
          "createdAt": "2016-04-15T14:04:01.027Z",
          "updatedAt": "2016-04-15T14:04:01.028Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NIME",
          "description": "NIME2016",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3TwGsCI6u46Y6AAwA8Q6Os/71602f0eb176bfb6a26c0267a5a91afe/NIME.jpeg",
            "details": {
              "size": 499101,
              "image": {
                "width": 3502,
                "height": 2289
              }
            },
            "fileName": "NIME.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3m2xaGTMusgAK6aCiUCYcs",
          "type": "Asset",
          "createdAt": "2015-11-30T11:30:25.133Z",
          "updatedAt": "2015-11-30T11:30:25.133Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "RBMA",
          "description": "20/11/15 News item image",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3m2xaGTMusgAK6aCiUCYcs/88e02d9b22a1462276c55de9cef0c45e/rbma.png",
            "details": {
              "size": 1334316,
              "image": {
                "width": 1280,
                "height": 854
              }
            },
            "fileName": "rbma.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "3xsRskAP2gO6kUWSWaaKEG",
          "type": "Asset",
          "createdAt": "2015-10-24T13:19:50.892Z",
          "updatedAt": "2015-10-24T13:19:50.892Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GiantSteps_MTF",
          "description": "GiantSteps MTG Team at Music Tech Fest",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/3xsRskAP2gO6kUWSWaaKEG/0e5a0ed9776f829b803c38e69ecb9049/unnamed.png",
            "details": {
              "size": 523315,
              "image": {
                "width": 776,
                "height": 582
              }
            },
            "fileName": "unnamed.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "416UKEnyU02q666IIIg2aE",
          "type": "Asset",
          "createdAt": "2015-12-14T11:08:31.360Z",
          "updatedAt": "2015-12-14T11:08:31.360Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "iMaschine",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/416UKEnyU02q666IIIg2aE/c2119682e7fe47372a0adff4b5873184/iMaschine.png",
            "details": {
              "size": 1104782,
              "image": {
                "width": 1254,
                "height": 652
              }
            },
            "fileName": "iMaschine.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "42ZKYYx61iUOacysAoowGK",
          "type": "Asset",
          "createdAt": "2015-08-06T12:02:51.828Z",
          "updatedAt": "2015-08-06T12:02:51.828Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Giantsteps panel discussion at Sonera+D",
          "description": "From left to right: Sergi, Florian, Michael, Simonne and Throwing Snow.",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/42ZKYYx61iUOacysAoowGK/467b72a3901ee839f1c5657a53eb44fe/SonarD1.jpg",
            "details": {
              "size": 215632,
              "image": {
                "width": 1024,
                "height": 682
              }
            },
            "fileName": "SonarD1.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "44q1uRtmpW8qcCAEUMKcU4",
          "type": "Asset",
          "createdAt": "2017-02-22T13:56:33.909Z",
          "updatedAt": "2017-02-22T13:56:33.909Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "andyangy",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/44q1uRtmpW8qcCAEUMKcU4/e1c6a36085942c985daa1b7fe98f9957/7.jpg",
            "details": {
              "size": 73751,
              "image": {
                "width": 962,
                "height": 539
              }
            },
            "fileName": "7.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "45L4fnn4OIquEAwUyC46IA",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:25.252Z",
          "updatedAt": "2015-08-19T06:27:25.252Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steim4",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/45L4fnn4OIquEAwUyC46IA/07068ad79ec6d951261032049df1ef48/steim4.jpg",
            "details": {
              "size": 22423,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steim4.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4I2jw4kPaMcEGyMkEsqCcM",
          "type": "Asset",
          "createdAt": "2017-01-17T15:25:31.672Z",
          "updatedAt": "2017-01-17T15:25:31.672Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GS Video",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4I2jw4kPaMcEGyMkEsqCcM/f804de8dccae996243b7993935fbad2a/GS_Video.png",
            "details": {
              "size": 275344,
              "image": {
                "width": 677,
                "height": 344
              }
            },
            "fileName": "GS_Video.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4TNPZUinbqqwQy8CygkOOw",
          "type": "Asset",
          "createdAt": "2016-05-24T13:37:25.352Z",
          "updatedAt": "2016-05-24T13:37:25.352Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "lavanguardia",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4TNPZUinbqqwQy8CygkOOw/f2a802b5d705fe502bdb88228e845cea/lavanguardia.jpg",
            "details": {
              "size": 36084,
              "image": {
                "width": 822,
                "height": 124
              }
            },
            "fileName": "lavanguardia.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4xtl5DE6CAW0mms6KuIiyi",
          "type": "Asset",
          "createdAt": "2015-11-30T11:27:21.617Z",
          "updatedAt": "2015-11-30T11:27:21.617Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "IRCAM 2015",
          "description": "30/11/15 News item image",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4xtl5DE6CAW0mms6KuIiyi/b77e919c944492243b4f02ba144c8d96/visuel_paris.jpg",
            "details": {
              "size": 215845,
              "image": {
                "width": 1800,
                "height": 420
              }
            },
            "fileName": "visuel_paris.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "4zl208m0PKQW4Kouk8WIsg",
          "type": "Asset",
          "createdAt": "2016-12-30T14:39:25.023Z",
          "updatedAt": "2016-12-30T14:39:25.023Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "rotor tekgadg",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/4zl208m0PKQW4Kouk8WIsg/0c2523fe5ec59bea36d5d1cedc34310b/rotor_tekgadg.png",
            "details": {
              "size": 554684,
              "image": {
                "width": 788,
                "height": 429
              }
            },
            "fileName": "rotor_tekgadg.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5aO3MSiJOE86wckSI4kiKs",
          "type": "Asset",
          "createdAt": "2016-06-15T13:47:25.570Z",
          "updatedAt": "2016-06-15T13:47:25.570Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "kristina_at_chi",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5aO3MSiJOE86wckSI4kiKs/8e32213ce46891a9b3446eff46c88f80/IMG_7038.jpeg",
            "details": {
              "size": 77756,
              "image": {
                "width": 640,
                "height": 480
              }
            },
            "fileName": "IMG_7038.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5bB0gpu2MEuAMiSqm6iAsq",
          "type": "Asset",
          "createdAt": "2015-08-09T21:20:36.823Z",
          "updatedAt": "2015-08-09T21:20:36.823Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "reactable tabletop",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5bB0gpu2MEuAMiSqm6iAsq/d1fa8387d735085f7dedf7682b19a786/reactable_tabletop.jpg",
            "details": {
              "size": 20284,
              "image": {
                "width": 300,
                "height": 225
              }
            },
            "fileName": "reactable_tabletop.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5eC02esDA4MOkiuayA2giE",
          "type": "Asset",
          "createdAt": "2015-12-03T09:01:57.152Z",
          "updatedAt": "2015-12-03T09:01:57.152Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "D7.4 frontpage",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5eC02esDA4MOkiuayA2giE/3bb700d07213e3fc24765b4524bacf2a/frontpaged74.gif",
            "details": {
              "size": 21146,
              "image": {
                "width": 928,
                "height": 509
              }
            },
            "fileName": "frontpaged74.gif",
            "contentType": "image/gif"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5edj2Yi0qsEEwsgEK2qoC2",
          "type": "Asset",
          "createdAt": "2016-06-15T13:30:34.143Z",
          "updatedAt": "2016-06-15T13:30:34.143Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "JAES",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5edj2Yi0qsEEwsgEK2qoC2/ae204a6098ce73acb4e73d6dff2a3051/JAES.png",
            "details": {
              "size": 99379,
              "image": {
                "width": 1024,
                "height": 417
              }
            },
            "fileName": "JAES.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "5hXSVPMeV2EAEegO6sq22g",
          "type": "Asset",
          "createdAt": "2015-08-09T17:26:46.024Z",
          "updatedAt": "2015-08-09T17:26:46.024Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "HackBarcelona-4-300x200",
          "description": "HackDay",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/5hXSVPMeV2EAEegO6sq22g/895a208837d4c7271cced76c5cad9ca6/HackBarcelona-4-300x200.jpg",
            "details": {
              "size": 30543,
              "image": {
                "width": 300,
                "height": 200
              }
            },
            "fileName": "HackBarcelona-4-300x200.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "62vSEQtynYCM8wOiCMWK6w",
          "type": "Asset",
          "createdAt": "2016-12-30T13:41:23.736Z",
          "updatedAt": "2016-12-30T13:41:23.736Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "GS VW",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/62vSEQtynYCM8wOiCMWK6w/a681d16a333fea0c05f6b347f9c933bd/GS_VW.jpg",
            "details": {
              "size": 57650,
              "image": {
                "width": 600,
                "height": 450
              }
            },
            "fileName": "GS_VW.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "69xaC3JBIW4iWIcWCQSsk6",
          "type": "Asset",
          "createdAt": "2015-12-16T14:01:15.802Z",
          "updatedAt": "2015-12-16T14:01:15.802Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "europe image",
          "description": "copyright esa",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/69xaC3JBIW4iWIcWCQSsk6/05447eeaaa8980eee916a8c23ee54804/europe_image_copyright_esa.jpg",
            "details": {
              "size": 141158,
              "image": {
                "width": 400,
                "height": 400
              }
            },
            "fileName": "europe_image_copyright_esa.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6PreyTDCqQggk40MU0uQ6S",
          "type": "Asset",
          "createdAt": "2016-05-17T14:16:24.636Z",
          "updatedAt": "2016-05-17T14:16:24.636Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "sonar logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6PreyTDCqQggk40MU0uQ6S/f7b45306ffb20d005ef2c88f0ecd6539/sonar_logo.png",
            "details": {
              "size": 2593,
              "image": {
                "width": 251,
                "height": 121
              }
            },
            "fileName": "sonar_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6RCwDLNtcs08Aaua6YyIk8",
          "type": "Asset",
          "createdAt": "2016-06-15T13:22:27.971Z",
          "updatedAt": "2016-06-15T13:22:27.971Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "SOAP",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6RCwDLNtcs08Aaua6YyIk8/f0abfae0c0c0c25dac9b27ea3e7a664a/soap-ws-logo.png",
            "details": {
              "size": 22175,
              "image": {
                "width": 294,
                "height": 161
              }
            },
            "fileName": "soap-ws-logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "6esPuS4aekYYwQqoySSWe8",
          "type": "Asset",
          "createdAt": "2015-09-30T13:41:56.015Z",
          "updatedAt": "2015-09-30T13:41:56.015Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "musicbrickslogo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/6esPuS4aekYYwQqoySSWe8/6d06e334e48f558df6416ed4f5a106b5/mb-small.png",
            "details": {
              "size": 62306,
              "image": {
                "width": 395,
                "height": 200
              }
            },
            "fileName": "mb-small.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7JxMoF6aFqwIu4QWOoiKqi",
          "type": "Asset",
          "createdAt": "2015-11-30T11:23:04.249Z",
          "updatedAt": "2015-11-30T11:23:04.249Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Social Red",
          "description": "For 16/11/15 News item",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7JxMoF6aFqwIu4QWOoiKqi/fc0b89d95bbabcd8e6cf837e62e9aec3/Social_Red.jpg",
            "details": {
              "size": 177446,
              "image": {
                "width": 484,
                "height": 397
              }
            },
            "fileName": "Social_Red.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7hyEllTKOke4sgOUMAYMuM",
          "type": "Asset",
          "createdAt": "2016-06-10T14:18:49.751Z",
          "updatedAt": "2016-06-10T14:18:49.751Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "fox",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7hyEllTKOke4sgOUMAYMuM/860f6621c5c976d0b6e6b1faf1eaa6ec/fox.png",
            "details": {
              "size": 125177,
              "image": {
                "width": 662,
                "height": 558
              }
            },
            "fileName": "fox.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "7wXLkq0JyMS4i446mIuGUm",
          "type": "Asset",
          "createdAt": "2016-02-29T10:52:29.862Z",
          "updatedAt": "2016-02-29T10:52:29.862Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "taiwan",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/7wXLkq0JyMS4i446mIuGUm/14e7d8ed19f3e25352f3c1be7a335894/taiwan.png",
            "details": {
              "size": 36678,
              "image": {
                "width": 1204,
                "height": 515
              }
            },
            "fileName": "taiwan.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "B2Cq6FG5vE6waekwcCUEm",
          "type": "Asset",
          "createdAt": "2015-08-19T06:27:51.376Z",
          "updatedAt": "2015-08-19T06:27:51.376Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steimlogo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/B2Cq6FG5vE6waekwcCUEm/b4f6784120427fed481d16b1d7aac3a1/steimlogo.jpeg",
            "details": {
              "size": 7209,
              "image": {
                "width": 267,
                "height": 189
              }
            },
            "fileName": "steimlogo.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "P4jKinmDYq4Gc80qIwIUs",
          "type": "Asset",
          "createdAt": "2015-08-09T18:06:35.516Z",
          "updatedAt": "2015-08-09T18:06:35.517Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "steimtour",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/P4jKinmDYq4Gc80qIwIUs/2c991b8b8077ba5d37e701e4d525c003/steimtour.jpg",
            "details": {
              "size": 20655,
              "image": {
                "width": 222,
                "height": 300
              }
            },
            "fileName": "steimtour.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "TEligmo90YwsKqQocyequ",
          "type": "Asset",
          "createdAt": "2017-02-28T12:36:01.199Z",
          "updatedAt": "2017-02-28T12:36:01.199Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "IMG 20170126 151620",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/TEligmo90YwsKqQocyequ/368bf2fb9dd4895fe38f45299d35ff7f/IMG_20170126_151620.jpg",
            "details": {
              "size": 1510767,
              "image": {
                "width": 2560,
                "height": 1920
              }
            },
            "fileName": "IMG_20170126_151620.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "XckOX5xSQEK0g4KSkQG8G",
          "type": "Asset",
          "createdAt": "2015-08-19T06:18:27.865Z",
          "updatedAt": "2015-08-19T06:18:27.865Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "chi14",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/XckOX5xSQEK0g4KSkQG8G/81787e4a44d0734c5397e007f0955773/chi14.jpg",
            "details": {
              "size": 16519,
              "image": {
                "width": 300,
                "height": 225
              }
            },
            "fileName": "chi14.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "YnRJpaR5U2OC80mY2ggmY",
          "type": "Asset",
          "createdAt": "2015-11-20T16:40:57.452Z",
          "updatedAt": "2015-11-20T16:40:57.453Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ADEteaser",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/YnRJpaR5U2OC80mY2ggmY/54d38a92e2be1c8195012f4c56fd6694/1.png",
            "details": {
              "size": 531463,
              "image": {
                "width": 623,
                "height": 414
              }
            },
            "fileName": "1.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "dPRc8ywWQ0igM2Eq822Ay",
          "type": "Asset",
          "createdAt": "2016-04-15T13:55:22.863Z",
          "updatedAt": "2016-04-15T13:55:22.863Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ICMR",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/dPRc8ywWQ0igM2Eq822Ay/d6d64adb66f11ec492f2e04d249bc813/icmr2016_2.png",
            "details": {
              "size": 206368,
              "image": {
                "width": 964,
                "height": 358
              }
            },
            "fileName": "icmr2016_2.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "kXXLBAgVIOe68egIK6yeS",
          "type": "Asset",
          "createdAt": "2016-07-22T12:14:13.532Z",
          "updatedAt": "2016-07-22T12:14:13.532Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "ismir2016 logo",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/kXXLBAgVIOe68egIK6yeS/096a6359958f856c083b7fc82f15dc2d/ismir2016_logo.png",
            "details": {
              "size": 33974,
              "image": {
                "width": 502,
                "height": 264
              }
            },
            "fileName": "ismir2016_logo.png",
            "contentType": "image/png"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "kldibyQN32EeQgYYiswcw",
          "type": "Asset",
          "createdAt": "2017-02-22T13:37:38.387Z",
          "updatedAt": "2017-02-22T13:37:38.388Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "NI MASCHINE-JAM Foto 03",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/kldibyQN32EeQgYYiswcw/11f9a80ddf42e36940af95ea7a3803e2/NI_MASCHINE-JAM_Foto_03.jpg",
            "details": {
              "size": 995859,
              "image": {
                "width": 2000,
                "height": 1242
              }
            },
            "fileName": "NI_MASCHINE-JAM_Foto_03.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "xrzr1u3na612"
            }
          },
          "id": "lN6lejvjMssqaA6QGm0qS",
          "type": "Asset",
          "createdAt": "2016-03-07T12:07:18.083Z",
          "updatedAt": "2016-03-07T12:07:18.083Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "RBMA test",
          "file": {
            "url": "//images.ctfassets.net/xrzr1u3na612/lN6lejvjMssqaA6QGm0qS/02f417b10eed1607133cae14bfec8837/RBMA_test.png",
            "details": {
              "size": 1989228,
              "image": {
                "width": 1280,
                "height": 960
              }
            },
            "fileName": "RBMA_test.png",
            "contentType": "image/png"
          }
        }
      }
    ]
  }
}

angular.module('giantSteps2App').factory('contentFarm', [
  '$q',
  '$cacheFactory',
  'contentfulClient',
  'cacheService',
  function ($q, $cacheFactory, contentfulClient, cacheService) {
    // Service logic
    // ...
    console.log(contentfulClient);
    var ids = {
      eventsId: '5SOxrPbANq4gQ8W6MUeW6g',
      textsId: '5DFddAHe80y2EsG6gewGmi',
      publicationsId: '4aver57i6AEmyaQ4SYSSio',
      deliverablesId: '4LUNA2sqm4WQ0Ue6ewmaOc',
      softwareId: '3yd4wfWccgcaQW24oagWKC',
      newsId: 'M3fej7oIGiOImiQwEkoS8',
      dataSets: '6Va4POKGt208EmOmiiCoUe'
    };

    var textCache = cacheService.text();
    var eventsCache = cacheService.events();
    var publicationsCache = cacheService.publications();
    var deliverablesCache = cacheService.deliverables();
    var softwareCache = cacheService.software();
    var newsCache = cacheService.news();

    var eventAssets = eventText.includes.Asset;


    var content = {


      // -------------------------------------------------
      //
      // Events
      // 
      // -------------------------------------------------

      events: {

        index: function () {
          var deferred = $q.defer();

          if (eventsCache.get('events')) {
            deferred.resolve(eventsCache.get('events'));
          }

          else {
            eventsCache.put('events', eventsText);
            deferred.resolve(eventsCache.get('events'));
          }
          return deferred.promise;
        },


        show: function (id) {
          var deferred = $q.defer();

          // find target
          var target = eventsText.items.find(e => e.fields.slug === id);
          if (target) {

            if (target.fields.images && target.fields.images.length) {
              for (var x = 0; x < target.fields.images.length; x++) {
                var id = target.fields.images[x].sys.id;
                // find in assets
                var imgtarget = eventAssets.find(a => a.sys.id === id);
                if (imgtarget) {
                  target.fields.images[x].url = imgtarget.fields.file.url;
                }
              }
            }

            deferred.resolve(target);
          } else {
            deferred.reject(new Error('Missing target'));
          }

          return deferred.promise;
        }
      },


      // -------------------------------------------------
      //
      // Static Texts
      // 
      // -------------------------------------------------

      text: {
        index: function () {
          var deferred = $q.defer();

          if (textCache.get('text')) {
            deferred.resolve(textCache.get('text'));
          }

          else {

            textCache.put('text', projectText);
            deferred.resolve(textCache.get('text'));

          }
          return deferred.promise;
        },
      },

      // -------------------------------------------------
      //
      // Downloads
      // 
      // -------------------------------------------------

      publications: {

        index: function () {
          var deferred = $q.defer();

          if (publicationsCache.get('publications')) {
            deferred.resolve(publicationsCache.get('publications'));
          }

          else {
            contentfulClient.entries({
              'content_type': ids.publicationsId
            }).then(function (response) {

              // ------------------------------------------------
              // Add to cache
              //
              publicationsCache.put('publications', response);


              deferred.resolve(publicationsCache.get('publications'));

            }, function (err) {
              console.log(err);
              deferred.reject(err);
            });


          }
          return deferred.promise;
        }
      },


      // ------------------------------------------------
      // Deliverables
      //
      deliverables: {
        index: function () {
          var deferred = $q.defer();



          if (deliverablesCache.get('deliverables')) {
            var devs = deliverablesCache.get('deliverables');
            deferred.resolve(devs);
          }

          else {
            contentfulClient.entries({
              'content_type': ids.deliverablesId
            }).then(function (response) {

              // ------------------------------------------------
              // Add to cache
              //
              deliverablesCache.put('deliverables', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(deliverablesCache.get('deliverables'));

            }, function (err) {
              console.log(err);
              deferred.reject(err);
            });
          }

          return deferred.promise;
        }
      },


      // ------------------------------------------------
      // Software
      //
      software: {
        index: function () {
          var deferred = $q.defer();

          if (softwareCache.get('software')) {
            var softwares = softwareCache.get('software');
            deferred.resolve(softwares);
          }

          else {
            contentfulClient.entries({
              'content_type': ids.softwareId
            }).then(function (response) {

              // ------------------------------------------------
              // Add to cache
              //

              softwareCache.put('software', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(softwareCache.get('software'));

            }, function (err) {
              deferred.reject(err);
              console.log(err);
            });
          }

          return deferred.promise;
        }
      },


      dataSets: {

        index: function () {
          var deferred = $q.defer();

          contentfulClient.entries({
            'content_type': ids.dataSets
          }).then(function (response) {


            deferred.resolve(response);
          }, function (err) {
            deferred.reject(err);
            console.log(err);
          });

          return deferred.promise;
        }



      },


      // ------------------------------------------------
      // News
      //

      news: {
        index: function () {
          var deferred = $q.defer();

          if (newsCache.get('news')) {
            var news = newsCache.get('news');
            deferred.resolve(news);
          }

          else {
            contentfulClient.entries({
              'content_type': ids.newsId
            }).then(function (response) {

              // ------------------------------------------------
              // Add to cache
              //

              newsCache.put('news', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(newsCache.get('news'));

            }, function (err) {
              deferred.reject(err);
              console.log(err);
            });
          }

          return deferred.promise;

        },

        show: function (id) {
          var deferred = $q.defer();


          contentfulClient.entries({
            'content_type': ids.newsId,
            'fields.slug': id,
            limit: 1
          }).then(function (event) {
            deferred.resolve(event);
          }, function (err) {
            console.log(err);
            deferred.reject(err);
          });

          return deferred.promise;
        }
      }



    };

    // Public API here
    return {
      eventsIndex: function () {
        return content.events.index();
      },
      eventsShow: function (id) {
        return content.events.show(id);
      },
      textIndex: function () {
        return content.text.index();
      },
      publicationsIndex: function () {
        return content.publications.index();
      },
      deliverablesIndex: function () {
        return content.deliverables.index();
      },
      softwareIndex: function () {
        return content.software.index();
      },
      newsIndex: function () {
        return content.news.index();
      },
      newsShow: function (id) {
        return content.news.show(id);
      },

      dataSetsIndex: function () {
        return content.dataSets.index();
      }
    };
  }
]);
