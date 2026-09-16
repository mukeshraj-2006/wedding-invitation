// ════════════════════════════════════════════════════════════════
//  WEDDING INVITATION DATA — SINGLE SOURCE OF TRUTH
// ════════════════════════════════════════════════════════════════
//  Edit this file to update ALL wedding information.
//  The website automatically uses values from this file.
//  You should NOT need to edit index.html, style.css, or script.js
//  to change wedding details.
// ════════════════════════════════════════════════════════════════

const weddingData = {

    // ── Meta & SEO ───────────────────────────────────────────
    meta: {
        titleTamil: "திருமண அழைப்பிதழ்",
        titleEnglish: "Wedding Invitation",
        ogDescription: "K. Ganesh Raj & V. Gayathri cordially invite you to their wedding celebration on November 13, 2026 at Thirumalai, Tirupathi.",
        themeColor: "#0A5E54"
    },

    // ── Religious Headers (Page 2 top) ───────────────────────
    religious: {
        left: "ஸ்ரீ ஏலம்மன் துணை",
        center: ["ஓம்", "ஸ்ரீ வெங்கமுனி துணை", "நீதியங்கி அம்மன் துணை"],
        right: "ஸ்ரீ போர்மன் துணை"
    },

    // ── Groom ────────────────────────────────────────────────
    groom: {
        nameTamil: "பிரனாய்",
        nameEnglish: "PRANAY",
        qualification: "B.E(CSE)",
        workplace: "Assa Abloy, Chennai",
        workplaceEnglish: "Assa Abloy, Chennai",
        district: "விருதுநகர் மாவட்டம், சாத்தூர் தாலுகா, கிருஷ்ணாபுரம்",
        districtEnglish: "Virudhunagar District, Sattur Taluk, Krishnapuram",
        photo: "assets/images/groom.jpg"
    },

    // ── Bride ────────────────────────────────────────────────
    bride: {
        nameTamil: "காவ்யா",
        nameEnglish: "KAVYA",
        qualification: "B.E(CSE)",
        district: "வெங்ககோட்டை ஒன்றியம், புலிப்பாளைப்பட்டி கிராமம்",
        districtEnglish: "Vengakottai Union, Pulipaalaipatty Village",
        photo: "assets/images/bride.jpg"
    },

    // ── Wedding Ceremony ─────────────────────────────────────
    wedding: {
        date: "2026-11-13",              // ISO format for calendar/countdown
        dateDisplay: "13.11.2026",
        dateTamil: "ஐப்பசி மாதம் 27-ம் நாள்",
        dateEnglish: "November 13, 2026",
        dayTamil: "வெள்ளிக்கிழமை",
        dayEnglish: "Friday",
        year: "பராபவ வருடம்",
        muhurthamTamil: "காலை 9.00 – 10.30 மணி",
        muhurthamEnglish: "9:00 AM – 10:30 AM",
        muhurthamStart: "09:00",           // 24h format
        muhurthamEnd: "10:30"              // 24h format
    },

    // ── Astrological Details ─────────────────────────────────
    astrology: {
        tithi: { tamil: "சதுர்த்தி திதி", english: "Chathurthi Tithi" },
        nakshatra: { tamil: "மூலம் நட்சத்திரம்", english: "Moolam Nakshatra" },
        yogam: { tamil: "அமிர்தயோகம்", english: "Amirthayogam" },
        lagnam: { tamil: "தனுசு லக்னம்", english: "Dhanusu (Sagittarius)" }
    },

    // ── Venue ────────────────────────────────────────────────
    venue: {
        nameTamil: "வெங்கடாசலபதி ஸ்ரீ ராகவேந்திரா திருமண மஹால்",
        nameEnglish: "Venkatachalapathi Sri Raghavendra Thirumana Mahal",
        locationTamil: "திருமலை திருப்பதி",
        locationEnglish: "Thirumalai, Tirupathi",
        fullAddressTamil: "வெங்கடாசலபதி ஸ்ரீ ராகவேந்திரா திருமண மஹால், திருமலை திருப்பதி",
        fullAddressEnglish: "Venkatachalapathi Sri Raghavendra Thirumana Mahal, Thirumalai, Tirupathi",
        // UPDATE THIS with the actual Google Maps URL for the venue
        mapsUrl: "https://maps.google.com/?q=Venkatachalapathi+Sri+Raghavendra+Thirumana+Mahal+Tirupati"
    },

    // ── Parents / Signatories ────────────────────────────────
    parents: {
        groomSide: {
            father: { tamil: "A.P.வெங்கடேசன்", english: "A.P. Venkatesan" },
            mother: { tamil: "V.மகேஸ்வரி", english: "V. Maheswari" },
            sibling: { tamil: "V.நித்தீஷ்", english: "V. Nitheesh" },
            place: { tamil: "முதலிபாளையம்", english: "Muthalipalayam" }
        },
        brideSide: {
            father: { tamil: "S.கந்தசாமி", english: "S. Kandasamy" },
            fatherBusiness: "ஸ்ரீ பாலாஜி பிளாஸ்டிக்ஸ்",
            fatherBusinessEnglish: "Sri Balaji Plastics",
            mother: { tamil: "K.சாந்தி", english: "K. Shanthi" },
            sibling: { tamil: "K.முகேஷ்ராஜ்", english: "K. Mukeshraj", qualification: "B.Tech(CS)., AIML." },
            place: { tamil: "வஞ்சிபாளையம்", english: "Vanjipalayam" }
        }
    },

    // ── Groom's Lineage (Page 2 — grandparents) ──────────────
    groomLineage: {
        blessing: "தெய்வத்திரு. R.A.நாயம்மாள் அவர்களின் நல்லாசியுடன்",
        blessingEnglish: "With the blessings of Late R.A. Naayammal",
        paternalGrandparents: {
            tamil: "தெய்வத்திரு. R.சாந்தூர்சாமி நாயுடு – திருமதி. S.அழகம்மாள்",
            english: "Late R. Saanthoorchamy Nayudu & Smt. S. Azhagammal",
            relation: "மகன்வழிப் பேரன்",
            relationEnglish: "Grandson (paternal)"
        },
        maternalGrandparents: {
            tamil: "அருப்புக்கோட்டை, தெய்வத்திரு. G.ராமசாமி நாயுடு – திருமதி. கோமதி",
            english: "Late G. Ramasamy Nayudu & Smt. Gomathi, Aruppukkottai",
            relation: "மகள்வழிப் பேரன்",
            relationEnglish: "Grandson (maternal)"
        }
    },

    // ── Bride's Lineage (Page 2 — grandparents) ──────────────
    brideLineage: {
        paternalGrandparents: {
            tamil: "தெய்வத்திரு. A.பெருமாள்சாமி நாயுடு – A.லட்சுமியம்மாள்",
            english: "Late A. Perumalchamy Nayudu & A. Lakshmiyammal",
            relation: "மகன்வழிப் பேத்தி",
            relationEnglish: "Granddaughter (paternal)"
        },
        maternalGrandparents: {
            tamil: "குன்மாலை, தெய்வத்திரு. M.வரதராஜன் – V.ரங்கம்மாள்",
            english: "Late M. Varatharajan & V. Rangammal, Kunmalai",
            relation: "மகள்வழிப் பேத்தி",
            relationEnglish: "Granddaughter (maternal)"
        }
    },

    // ── Extended Family ──────────────────────────────────────
    family: {
        groomSide: [
            {
                relation: { tamil: "பெரியப்பா – பெரியம்மா", english: "Uncle & Aunt (Elder)" },
                members: [
                    "S.சுப்புராஜ் – S.சுமதி, சென்னை",
                    "S.வேல்ராஜ், கிருஷ்ணாபுரம்"
                ]
            },
            {
                relation: { tamil: "சித்தப்பா – சித்தி", english: "Uncle & Aunt (Younger)" },
                members: [
                    "S.குருசாமி – G.அமுதா, Thai Plastics, திருப்பூர்"
                ]
            },
            {
                relation: { tamil: "மாமா – அத்தை", english: "Maternal Uncle & Aunt" },
                members: [
                    "M.விஜயகுமார் – V.சப்பித்தாய், இளையரசநேந்தல்"
                ]
            },
            {
                relation: { tamil: "அக்கா – மாமா", english: "Sister & Brother-in-law" },
                events: [
                    {
                        title: "Haldi",
                        date: "25th March 2026",
                        time: "10:00 AM onwards",
                        venue: "Taj Krishna, Hyderabad",
                        address: "Road No 1, Banjara Hills",
                        mapLink: "#",
                        icon: "assets/icons/haldi.svg",
                        bgColor: "var(--pale-yellow)"
                    },
                    {
                        title: "Mehendi",
                        date: "25th March 2026",
                        time: "4:00 PM onwards",
                        venue: "Taj Krishna, Hyderabad",
                        address: "Road No 1, Banjara Hills",
                        mapLink: "#",
                        icon: "assets/icons/mehendi.svg",
                        bgColor: "var(--teal)"
                    },
                    {
                        title: "Sangeet",
                        date: "26th March 2026",
                        time: "7:00 PM onwards",
                        venue: "Taj Krishna, Hyderabad",
                        address: "Road No 1, Banjara Hills",
                        mapLink: "#",
                        icon: "assets/icons/sangeet.svg",
                        bgColor: "var(--navy-blue)"
                    },
                    {
                        title: "Muhurtham",
                        date: "27th March 2026",
                        time: "9:00 AM onwards",
                        venue: "Taj Krishna, Hyderabad",
                        address: "Road No 1, Banjara Hills",
                        mapLink: "#",
                        icon: "assets/icons/muhurtham.svg",
                        bgColor: "var(--dusty-pink)"
                    }
                ]
            },
            {
                relation: { tamil: "தம்பி", english: "Brother" },
                members: [
                    "G.கார்த்திக்ராஜ் B.Tech(CS) AIML., MBA., (AU)"
                ]
            },
            {
                relation: { tamil: "தங்கை", english: "Sister" },
                members: [
                    "G.ஸ்ரீ பிரியதர்ஷினி"
                ]
            }
        ],
        brideSide: [
            {
                relation: { tamil: "பெரியப்பா – பெரியம்மா", english: "Uncle & Aunt (Elder)" },
                members: [
                    "S.வெகுமால்சாமி – லட்சுமியம்மாள்",
                    "S.வேண்ணுச்சாமி – வெங்கிடம்மாள்",
                    "குணசேகரன் – ஜோதிலட்சுமி",
                    "தெய்வத்திரு. ராகவேல் – ஜான்சி"
                ]
            },
            {
                relation: { tamil: "அத்தை – மாமா", english: "Aunt & Uncle" },
                members: [
                    "லிங்கசாமி – ஏலம்மாள்"
                ]
            }
        ]
    },

    // ── Invitation Messages ──────────────────────────────────
    messages: {
        // Salutation
        salutation: "அன்புடையீர்,",
        salutationEnglish: "Dear Ones,",

        // Full ceremony description paragraph (Tamil)
        invitationBodyTamil: "நிகழும் மங்களகரமான பராபவ வருடம் ஐப்பசி மாதம் 27-ம் நாள் (13.11.2026) வெள்ளிக்கிழமை சதுர்த்தி திதியும், மூலம் நட்சத்திரமும், அமிர்தயோகமும் கூடிய சுபயோக சுபதினத்தில் காலை 9.00 மணிக்குமேல் 10.30 மணிக்குள் தனுசு லக்னத்தில் அமைந்த சுபவேளையில்",

        // Groom intro line
        groomIntroTamil: "எங்களது செல்வ புத்திரனுமான",
        groomIntroEnglish: "Our beloved son",

        // Bride intro line
        brideIntroTamil: "எங்களது செல்வ புத்திரியுமான",
        brideIntroEnglish: "Our beloved daughter",

        // Closing invitation paragraph (Tamil)
        closingTamil: "ஆகியோரது திருமணம் பெரியோர்களால் நிச்சயிக்கப்பட்டு மேற்படி திருமணம் திருமலை திருப்பதி, வெங்கடாசலபதி ஸ்ரீ ராகவேந்திரா திருமண மஹாலில் வைத்து நடைபெற உள்ளதால் தாங்கள் தங்கள் சுற்றமும் நட்பும் கூட வருகை தந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.",
        closingEnglish: "We lovingly invite you along with your family and friends to grace the occasion and bless the couple.",

        // Sign-off
        signOff: "தங்கள் அன்புள்ள",
        signOffEnglish: "With love,",

        // Family closing
        familyClosing: "மற்றும் சுற்றமும்... நட்பும்..",
        familyClosingEnglish: "And family & friends...",

        // Home invitation note
        homeInvitation: "(இது இல்ல அழைப்பு)",
        homeInvitationEnglish: "(This is a family invitation)",

        // Blessing request (for closing scene)
        blessingRequestTamil: "உங்கள் வருகையால் எங்கள் திருமண விழா சிறப்புறும்.",
        blessingRequestEnglish: "Your presence will make our wedding celebration special.",

        // Family page title
        familyPageTitle: "தங்கள் நல்வரவை நாடும்",
        familyPageTitleEnglish: "Seeking Your Gracious Presence",

        // Groom family title
        groomFamilyTitle: "மணமகன் வீட்டார்",
        groomFamilyTitleEnglish: "Groom's Family",

        // Bride family title
        brideFamilyTitle: "மணமகள் வீட்டார்",
        brideFamilyTitleEnglish: "Bride's Family",

        // Share text
        shareText: "K. Ganesh Raj & V. Gayathri invite you to their wedding on November 13, 2026 at Thirumalai, Tirupathi. Join us to celebrate!"
    },

    // ── Editable Color Theme ─────────────────────────────────
    //  Change these to update the entire website's color palette.
    colors: {
        deepTeal: "#0A5E54",
        softMint: "#1A8A7D",
        dustyPink: "#D4918E",
        cream: "#FDF5E6",
        paleYellow: "#FAF0D7",
        mutedGold: "#C9A94E",
        deepNavy: "#0F1B3D",
        lavender: "#C8B4D4",
        warmPeach: "#F2C4A4",
        darkText: "#2C1810",
        lightText: "#FDF5E6"
    },

    // ── Asset File Paths ─────────────────────────────────────
    //  Update these paths when you replace placeholder images.
    assets: {
        couplePhoto: "assets/images/couple.jpg",
        groomPhoto: "assets/images/groom.jpg",
        bridePhoto: "assets/images/bride.jpg",
        templeImage: "assets/images/meenaya-gopuram.png",
        ganeshaImage: "assets/images/meenaya-ganesha.svg",
        vintageCarImage: "assets/images/meenaya-car.png",
        photoFrameImage: "assets/images/frame-transparent.png",
        backgroundMusic: "assets/music/wedding-music.mp3"
    }
};
