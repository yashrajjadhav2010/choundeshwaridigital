
        // ==========================================
        // DYNAMIC CATALOG MANAGEMENT (GOOGLE DRIVE)
        // ==========================================
        // Paste your Deployed Web App URL here after setting up script.google.com
        const DRIVE_CATALOG_URL = "https://script.google.com/macros/s/AKfycbwJFU958yZz1fZ9NvGD-dSMLZvlmK7JfVDMPU4iXCQUbFHljMHGKivKXf4IlcEHOXRg/exec"; 

        let products = [
            { id: 1, name: "Swami Samarth frame", price: 450, cat: "god", img: "https://i.ibb.co/ycFpPkdv/swami.png" },
            { id: 2, name: "Antique Gold Mirror", price: 150, cat: "mirror", img: "https://i.ibb.co/dsgVCgXv/mirror01.png" },
            { id: 3, name: "Abstract Decor Set", price: 450, cat: "decor", img: "https://i.ibb.co/5Wy5sv3q/decor01.png" },
            { id: 4, name: "Ganpati 3D Frame", price: 850, cat: "god", img: "https://i.ibb.co/SXkB0cxW/bappa2.png" },
            { id: 5, name: "Hanumanji Frame", price: 550, cat: "god", img: "https://i.ibb.co/0jFDzyWQ/hanuman1.png" },
            { id: 6, name: "Laxmi ji photo", price: 180, cat: "god", img: "https://i.ibb.co/ymTHpTvR/laxmi1.webp" },
            { id: 7, name: "Minimalist White", price: 800, cat: "decor", img: "https://i.ibb.co/mVddqJXW/decore02.jpg" },
            { id: 8, name: "Shree Krishna royal", price: 250, cat: "god", img: "https://i.ibb.co/3mZhqFQq/krishna1.png" },
            { id: 9, name: "Laxmi ji frame", price: 450, cat: "god", img: "https://i.ibb.co/jvDHwKrt/laxmi2.png" },
            { id: 10, name: "Vishnuji frame", price: 350, cat: "god", img: "https://i.ibb.co/r2Q6rxtj/vishnu1.png" },
            { id: 11, name: "Shree Krishna black border frame", price: 180, cat: "god", img: "https://i.ibb.co/ZRqdsK6k/krishna2.jpg" },
            { id: 12, name: "Collage Kit (Set of 4)", price: 250, cat: "decor", img: "https://i.ibb.co/yFK0xGXs/decor03.jpg" },
            { id: 13, name: "Chatrapati Shivaji Maharaj Golden Border Frame", price: 1800, cat: "chatrapati", img: "https://i.ibb.co/R4MsrbYs/chatrapati3.png" },
            { id: 14, name: "Chatrapati Shivaji Maharaj Golden Border Frame", price: 250, cat: "chatrapati", img: "https://i.ibb.co/cSYj0njP/chatrapati.jpg" },
            { id: 15, name: "Shree Ram", price: 550, cat: "god", img: "https://i.ibb.co/VYcW9GZ7/ramji1.png" },
            { id: 16, name: "Chatrapati Shivaji Maharaj Golden Border Frame", price: 800, cat: "chatrapati", img: "https://i.ibb.co/FLLZV5z8/chatrapat01.webp" },
            { id: 17, name: "Shree Datta Maharaj", price: 250, cat: "god", img: "https://i.ibb.co/234hxpHw/datta1.png" },
            { id: 18, name: "ShivRana Black Border Frame", price: 1200, cat: "chatrapati", img: "https://i.ibb.co/Df4ss0h5/chatrapati4.png" },
            { id: 19, name: "Shree Vitthal", price: 210, cat: "god", img: "https://i.ibb.co/Kzw49cjL/vitthal1.png" },
            { id: 20, name: "Shree Krishna Golden border frame", price: 250, cat: "god", img: "https://i.ibb.co/k6qYhSPD/radhakishna1.png" },
            { id: 21, name: "couple black border gift frame", price: 850, cat: "custom", img: "https://i.ibb.co/998px81V/customm1.png" },
            { id: 22, name: "Giftway Newly Couple Custom Photo with Frame", price: 850, cat: "custom", img: "https://i.ibb.co/ZpLQsvKC/custumm2.png" },
            { id: 23, name: "Personalized Picture Collage Photo Frame - Custom Anniversary Gift for Husband / Wife , Customized Photo Frame Collage for Valentine's Day", price: 950, cat: "custom", img: "https://i.ibb.co/1JZ7MJS2/custom3.png" },
            { id: 24, name: "Personalized Picture Collage Photo gift Frame - Custom Anniversary Gift for Husband / Wife , Customized Photo Frame Collage for Valentine's Day", price: 950, cat: "custom", img: "https://i.ibb.co/cS5MZ6nC/cusmtom4.jpg" },
            { id: 25, name: "Dr. Babasaheb Ambedkar photo frame.", price: 950, cat: "Dr. Ambedkar", img: "https://i.ibb.co/bM6DQzgc/ambedkar1.jpg" },
            { id: 26, name: "Dr. Babasaheb Ambedkar Black Border photo frame.", price: 950, cat: "Dr. Ambedkar", img: "https://i.ibb.co/yBpBc30r/ambedkar2.jpg" },
        ];

        async function fetchManagedProducts() {
            if (!DRIVE_CATALOG_URL) return;
            
            try {
                const response = await fetch(DRIVE_CATALOG_URL);
                const driveProducts = await response.json();
                
                if (driveProducts && driveProducts.length > 0) {
                    // Prepend new products from Drive to our static list
                    products = [...driveProducts, ...products];
                    
                    // Re-render UI to show new items
                    renderHome();
                    applyShopFilter('all');
                    console.log("Successfully synced catalog with Google Drive.");
                }
            } catch (error) {
                console.warn("Google Drive Catalog Sync Failed:", error);
            }
        }

        // Multilingual Setup
        const i18n = {
            "en": {
                "nav_home": "Home", "nav_shop": "Shop", "nav_tryon": "Try-On", "nav_custom": "Custom", "nav_contact": "Contact",
                "settings_title": "Settings", "language_select": "Select Language", "about_us": "About Us", "terms_service": "Terms of Service", "privacy_policy": "Privacy Policy",
                "home_capture": "Capture Memories", "home_frame": "Frame your Golden Memories.", "home_framenow": "Frame Now", "home_trend": "Trending Frames", "home_viewall": "View All", "home_follow": "Follow Our Work",
                "story_wedding": "Wedding", "story_baby": "Baby", "story_tryon": "Try-On", "story_orders": "Orders",
                "shop_all": "All", "shop_god": "God", "shop_decor": "Decor", "shop_chatrapati": "Chatrapati", "shop_custom": "Custom", "shop_ambedkar": "Dr.Ambedkar",
                "shop_search": "Search God, Decor...", "shop_custom_size": "Custom Size?", "shop_need_specific": "Need a specific size frame? Get a quote.", "shop_ask_price": "Ask Price",
                "tryon_title": "Magic Try-On", "tryon_live": "Live Camera", "tryon_upload": "Upload Photo", "tryon_select": "Select Frame",
                "cart_title": "Your Cart", "cart_checkout": "Checkout on WhatsApp",
                "custom_title": "Frame Your Photo", "custom_subtitle": "Upload your picture and select a frame border.", "custom_upload": "Upload Your Photo", "custom_select": "Select Premium Frame", "custom_order": "Order Custom Frame", "custom_note": "Please note: The visual preview may slightly differ from the actual product. We are continuously working to improve this feature.",
                "book_profile": "Studio Profile", "book_founder": "Founder & Lead", "book_legacy": "Legacy", "book_rating": "Rating", "book_call": "Call Now", "book_chat": "Chat", "book_session": "Book a Session", "book_name": "Your Name", "book_opt1": "Wedding Photography", "book_opt2": "Baby Shoot", "book_opt3": "Pre-Wedding", "book_opt4": "Passport Photo", "book_opt5": "Event Videography", "book_req": "Request Booking", "book_visit": "Visit Our Studio", "book_address": "Chatrapati Shivaji Maharaj Market Yard, Near HDFC Bank<br>Open Mon-Sun: 9:00 AM - 7:00 PM", "book_dir": "Get Directions", "book_dev": "Developed By",
                "pdp_zoom": "Tap to Zoom", "pdp_desc_title": "Description", "pdp_desc_text": "Experience premium craftsmanship with this high-definition frame from Choundeshwari Digital & Yashraj Photo Frame. Every piece is meticulously crafted using high-quality synthetic wood and features a crystal-clear, shatter-resistant glass front to ensure maximum durability. Our frames are designed to be water-resistant and dust-proof, making them perfect for preserving your cherished memories, devotional art, or home decor for a lifetime. Whether you are looking for a gift or a centerpiece for your own home, our frames offer a blend of traditional elegance and modern longevity.", "pdp_tag1": "Teak Wood", "pdp_tag2": "Sparkle/Matt", "pdp_add": "Add to Cart", "pdp_buy": "Buy Now",
                "home_reviews": "Customer Reviews", "review_1": "The frame quality is excellent! Very premium teak wood and fast delivery.", "review_2": "Loved the magic try-on feature. Ordered an frame and it looks beautiful in my living room.", "review_3": "Best photo frame studio in Jafrabad! The frame is a masterpiece.", "tryon_wall_color": "Wall Color", "install_app": "Install Yashraj Frames",
                "offline_title": "Connection Lost", "offline_text": "It seems the frame bridge is temporarily down. Check your connection to continue framing.", "offline_retry": "Retry Connection"
            },
            "mr": {
                "nav_home": "मुख्यपृष्ठ", "nav_shop": "दुकान", "nav_tryon": "ट्राय-ऑन", "nav_custom": "कस्टम", "nav_contact": "संपर्क",
                "settings_title": "सेटिंग्ज", "language_select": "भाषा निवडा", "about_us": "आमच्याबद्दल", "terms_service": "सेवा अटी", "privacy_policy": "गोपनीयता धोरण",
                "home_capture": "आठवणी साठवा", "home_frame": "तुमच्या सोनेरी आठवणींना फ्रेम करा.", "home_framenow": "आत्ताच फ्रेम करा", "home_trend": "ट्रेंडिंग फ्रेम्स", "home_viewall": "सर्व पहा", "home_follow": "आमचे काम पहा",
                "story_wedding": "लग्न", "story_baby": "बाळ", "story_tryon": "ट्राय-ऑन", "story_orders": "ऑर्डर्स",
                "shop_all": "सर्व", "shop_god": "देव", "shop_decor": "सजावट", "shop_chatrapati": "छत्रपती", "shop_custom": "कस्टम", "shop_ambedkar": "डॉ. आंबेडकर",
                "shop_search": "देव, सजावट शोधा...", "shop_custom_size": "कस्टम आकार?", "shop_need_specific": "विशिष्ट आकाराची फ्रेम हवी आहे? कोट मिळवा.", "shop_ask_price": "किंमत विचारा",
                "tryon_title": "मॅजिक ट्राय-ऑन", "tryon_live": "थेट कॅमेरा", "tryon_upload": "फोटो अपलोड करा", "tryon_select": "फ्रेम निवडा",
                "cart_title": "तुमचे कार्ट", "cart_checkout": "WhatsApp वर चेकआउट करा",
                "custom_title": "तुमचा फोटो फ्रेम करा", "custom_subtitle": "तुमचा फोटो अपलोड करा आणि फ्रेमची बॉर्डर निवडा.", "custom_upload": "तुमचा फोटो अपलोड करा", "custom_select": "प्रीमियम फ्रेम निवडा", "custom_order": "कस्टम फ्रेमची ऑर्डर द्या", "custom_note": "कृपया नोंद घ्या: दृश्य पूर्वावलोकन प्रत्यक्ष उत्पादनापेक्षा थोडे वेगळे असू शकते.",
                "book_profile": "स्टुडिओ प्रोफाइल", "book_founder": "संस्थापक आणि प्रमुख", "book_legacy": "वारसा", "book_rating": "रेटिंग", "book_call": "आता कॉल करा", "book_chat": "चॅट करा", "book_session": "सेशन बुक करा", "book_name": "तुमचे नाव", "book_opt1": "वेडिंग फोटोग्राफी", "book_opt2": "बेबी शूट", "book_opt3": "प्री-वेडिंग", "book_opt4": "पासपोर्ट फोटो", "book_opt5": "इव्हेंट व्हिडिओग्राफी", "book_req": "बुकिंगची विनंती करा", "book_visit": "आमच्या स्टुडिओला भेट द्या", "book_address": "छत्रपती शिवाजी महाराज मार्केट यार्ड, HDFC बँकेच्या जवळ<br>उघडे सोम-रवि: सकाळी ९:०० - संध्याकाळी ७:००", "book_dir": "दिशानिर्देश मिळवा", "book_dev": "विकसित केले",
                "pdp_zoom": "झूम करण्यासाठी टॅप करा", "pdp_desc_title": "वर्णन", "pdp_desc_text": "चौंडेश्वरी डिजिटल आणि यशराज फोटो फ्रेमच्या या हाय-डेफिनिशन फ्रेमसह प्रीमियम हस्तकलेचा अनुभव घ्या. प्रत्येक तुकडा उच्च-गुणवत्तेचे सिंथेटिक लाकूड वापरून काळजीपूर्वक तयार केला जातो. आपल्या आठवणी सुरक्षित ठेवण्यासाठी या फ्रेम्स जलरोधक आणि धूळरोधक आहेत.", "pdp_tag1": "सागवान लाकूड", "pdp_tag2": "स्पार्कल/मॅट", "pdp_add": "कार्टमध्ये जोडा", "pdp_buy": "आता खरेदी करा",
                "home_reviews": "ग्राहक पुनरावलोकने", "review_1": "फ्रेम गुणवत्ता उत्कृष्ट आहे! खूप प्रीमियम सागवान लाकूड आणि जलद वितरण.", "review_2": "मॅजिक ट्राय-ऑन वैशिष्ट्य आवडले. फ्रेम ऑर्डर केली आणि ती माझ्या दिवाणखान्यात सुंदर दिसते.", "review_3": "जाफराबाद मधील सर्वोत्तम फोटो फ्रेम स्टुडिओ! फ्रेम एक उत्कृष्ट नमुना आहे.", "tryon_wall_color": "भिंतीचा रंग", "install_app": "यशराज फ्रेम्स इंस्टॉल करा",
                "offline_title": "कनेक्शन तुटले", "offline_text": "असे वाटते की फ्रेम ब्रिज तात्पुरते बंद आहे. सुरू ठेवण्यासाठी तुमचे कनेक्शन तपासा.", "offline_retry": "पुन्हा प्रयत्न करा"
            },
            "hi": {
                "nav_home": "होम", "nav_shop": "दुकान", "nav_tryon": "ट्राई-ऑन", "nav_custom": "कस्टम", "nav_contact": "संपर्क",
                "settings_title": "सेटिंग्स", "language_select": "भाषा चुनें", "about_us": "हमारे बारे में", "terms_service": "सेवा की शर्तें", "privacy_policy": "गोपनीयता नीति",
                "home_capture": "यादों को संजोएं", "home_frame": "अपनी सुनहरी यादों को फ्रेम करें।", "home_framenow": "अभी फ्रेम करें", "home_trend": "ट्रेंडिंग फ्रेम्स", "home_viewall": "सभी देखें", "home_follow": "हमारा काम देखें",
                "story_wedding": "शादी", "story_baby": "बच्चा", "story_tryon": "ट्राई-ऑन", "story_orders": "ऑर्डर",
                "shop_all": "सभी", "shop_god": "भगवान", "shop_decor": "सजावट", "shop_chatrapati": "छत्रपति", "shop_custom": "कस्टम", "shop_ambedkar": "डॉ. अंबेडकर",
                "shop_search": "भगवान, सजावट खोजें...", "shop_custom_size": "कस्टम आकार?", "shop_need_specific": "एक विशिष्ट आकार की फ्रेम चाहिए? मूल्य पूछें।", "shop_ask_price": "कीमत पूछें",
                "tryon_title": "मैजिक ट्राई-ऑन", "tryon_live": "लाइव कैमरा", "tryon_upload": "फोटो अपलोड करें", "tryon_select": "फ्रेम चुनें",
                "cart_title": "आपका कार्ट", "cart_checkout": "WhatsApp पर चेकआउट करें",
                "custom_title": "अपनी फोटो फ्रेम करें", "custom_subtitle": "अपनी तस्वीर अपलोड करें और एक फ्रेम बॉर्डर चुनें।", "custom_upload": "अपनी फोटो अपलोड करें", "custom_select": "प्रीमियम फ्रेम चुनें", "custom_order": "कस्टम फ्रेम ऑर्डर करें", "custom_note": "कृपया ध्यान दें: दृश्य पूर्वावलोकन वास्तविक उत्पाद से थोड़ा भिन्न हो सकता है।",
                "book_profile": "स्टूडियो प्रोफ़ाइल", "book_founder": "संस्थापक और प्रमुख", "book_legacy": "विरासत", "book_rating": "रेटिंग", "book_call": "अभी कॉल करें", "book_chat": "चैट करें", "book_session": "सेशन बुक करें", "book_name": "आपका नाम", "book_opt1": "वेडिंग फोटोग्राफी", "book_opt2": "बेबी शूट", "book_opt3": "प्री-वेडिंग", "book_opt4": "पासपोर्ट फोटो", "book_opt5": "इवेंट वीडियोग्राफी", "book_req": "बुकिंग का अनुरोध करें", "book_visit": "हमारे स्टूडियो आएं", "book_address": "छत्रपति शिवाजी महाराज मार्केट यार्ड, HDFC बैंक के पास<br>खुला सोम-रवि: सुबह 9:00 - शाम 7:00", "book_dir": "दिशा-निर्देश प्राप्त करें", "book_dev": "विकसित किया गया",
                "pdp_zoom": "ज़ूम करने के लिए टैप करें", "pdp_desc_title": "विवरण", "pdp_desc_text": "चौंडेश्वरी डिजिटल और यशराज फोटो फ्रेम के इस हाई-डेफिनिशन फ्रेम के साथ प्रीमियम शिल्प कौशल का अनुभव करें। प्रत्येक टुकड़ा उच्च गुणवत्ता वाली लकड़ी का उपयोग करके तैयार किया गया है। हमारी फ्रेम जल प्रतिरोधी और धूल-सबूत हैं।", "pdp_tag1": "सागौन की लकड़ी", "pdp_tag2": "स्पार्कल/मैट", "pdp_add": "कार्ट में जोड़ें", "pdp_buy": "अभी खरीदें",
                "home_reviews": "ग्राहक समीक्षाएँ", "review_1": "फ्रेम की गुणवत्ता उत्कृष्ट है! बहुत ही प्रीमियम सागौन की लकड़ी और तेज डिलीवरी।", "review_2": "मैजिक ट्राई-ऑन सुविधा पसंद आई। एक फ्रेम मंगवाया और यह मेरे लिविंग रूम में सुंदर लगता है।", "review_3": "जाफराबाद का सबसे अच्छा फोटो फ्रेम स्टूडियो! फ्रेम एक उत्कृष्ट कृति है।", "tryon_wall_color": "दीवार का रंग", "install_app": "यशराज फ्रेम्स इंस्टॉल करें",
                "offline_title": "कनेक्शन टूट गया", "offline_text": "ऐसा लगता है कि फ्रेम ब्रिज अस्थायी रूप से बंद है। जारी रखने के लिए अपना कनेक्शन जांचें।", "offline_retry": "पुनः प्रयास करें"
            }
        };

        function changeLanguage(lang) {
            localStorage.setItem('yashraj_lang', lang);
            applyTranslations(lang);
        }

        function applyTranslations(lang) {
            if (!i18n[lang]) return;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[lang][key]) {
                    el.innerHTML = i18n[lang][key];
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (i18n[lang][key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = i18n[lang][key];
                    }
                }
            });
            // Update Cart text if empty
            const cartItems = document.getElementById('cart-items');
            if (cartItems && cartItems.innerText.includes('Cart is empty') || cartItems.innerText.includes('कार्ट रिकामा आहे') || cartItems.innerText.includes('कार्ट खाली है')) {
                renderCartPage(); // Will re-render using lang settings
            }
        }

        function openSettingsModal(type) {
            const modal = document.getElementById('info-modal');
            const title = document.getElementById('info-modal-title');
            const content = document.getElementById('info-modal-content');

            const lang = localStorage.getItem('yashraj_lang') || 'en';

            if (type === 'about') {
                title.innerText = i18n[lang].about_us;
                content.innerHTML = `
                    <div style="text-align:left; font-family:'Urbanist', sans-serif;">
                        <img src="https://i.ibb.co/60vv3MMt/yicon4.png" style="width:60px; margin-bottom:20px; border-radius:15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <h3 style="font-family:'Playfair Display', serif; font-size:1.6rem; color:var(--primary); margin-bottom:15px; line-height:1.2;">Crafting Legacy Since Day One</h3>
                        <p style="margin-bottom:15px; font-size:0.95rem; color:var(--secondary); line-height:1.6;">Founded by <b>Madhavrao Jadhav</b> and driven by a family passion for preserving memories, <b>Choundeshwari Digital & Yashraj Photo Frames</b> is a highly acclaimed premium photography and framing studio located in the heart of Jafrabad.</p>
                        
                        <div style="background:var(--surface); border:1px solid var(--border-color); border-radius:12px; padding:15px; margin-bottom:20px;">
                            <h4 style="color:var(--accent); margin-bottom:10px; font-size:1rem;"><i class="fa-solid fa-camera-retro"></i> Our Photography Wing</h4>
                            <p style="font-size:0.85rem; color:var(--secondary); line-height:1.5;">We specialize in breathtaking high-definition wedding photography, intimate baby shoots, dynamic pre-wedding concepts, and cinematic event videography. We don’t just take photos; we capture the emotion.</p>
                        </div>
                        
                        <div style="background:var(--surface); border:1px solid var(--border-color); border-radius:12px; padding:15px;">
                            <h4 style="color:var(--accent); margin-bottom:10px; font-size:1rem;"><i class="fa-solid fa-tree"></i> Our Framing Art</h4>
                            <p style="font-size:0.85rem; color:var(--secondary); line-height:1.5;">Our custom framing division uses only museum-grade synthetic and premium teak wood. Every single frame is painstakingly crafted, water-resistant, and dust-proof to ensure your family memories and devotional art remain flawless for generations.</p>
                        </div>
                    </div>
                `;
            } else if (type === 'terms') {
                title.innerText = i18n[lang].terms_service;
                content.innerHTML = `
                    <div style="text-align:left; font-family:'Urbanist', sans-serif;">
                        <p style="margin-bottom:20px; font-size:0.95rem; color:var(--secondary); line-height:1.6;">By using the Yashraj Frames application, you agree to the following terms regarding the purchase and visualization of our physical products.</p>
                        
                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1.05rem;"><i class="fa-solid fa-truck-fast" style="color:var(--accent); margin-right:8px;"></i> 1. Orders & Fulfillment</h4>
                        <p style="margin-bottom:20px; font-size:0.9rem; color:var(--secondary); line-height:1.5; padding-left:25px;">All standard photo frame orders are processed and made ready for pickup/shipping within <b>24-48 hours</b>. Highly complex custom framing jobs may require additional craftsmanship time. Payment is securely confirmed directly with our team over WhatsApp.</p>
                        
                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1.05rem;"><i class="fa-solid fa-rotate-left" style="color:var(--accent); margin-right:8px;"></i> 2. Returns & Refunds</h4>
                        <p style="margin-bottom:20px; font-size:0.9rem; color:var(--secondary); line-height:1.5; padding-left:25px;">Due to the highly personalized and permanent nature of custom frames, personalized engraving, and printed photos, <b>we do not accept returns or offer refunds</b> unless the physical item is proven to be damaged upon arrival or pickup.</p>
                        
                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1.05rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color:var(--accent); margin-right:8px;"></i> 3. Magic Visualizer Disclaimer</h4>
                        <p style="margin-bottom:10px; font-size:0.9rem; color:var(--secondary); line-height:1.5; padding-left:25px;">The Magic Try-On AR feature provides a very close digital estimation of the product. However, based on phone screen calibration, slight variations in physical scale, exact wood grain, or color may occur in real life.</p>
                    </div>
                `;
            } else if (type === 'privacy') {
                title.innerText = i18n[lang].privacy_policy;
                content.innerHTML = `
                    <div style="text-align:left; font-family:'Urbanist', sans-serif;">
                        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid var(--border-color);">
                            <i class="fa-solid fa-shield-halved" style="font-size:2rem; color:var(--success);"></i>
                            <div>
                                <h3 style="font-size:1.1rem; color:var(--primary);">100% Secure & Private</h3>
                                <p style="font-size:0.8rem; color:var(--secondary);">Your data belongs to you.</p>
                            </div>
                        </div>
                        
                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1rem;">Information Collection</h4>
                        <p style="margin-bottom:20px; font-size:0.9rem; color:var(--secondary); line-height:1.5;">We operate a highly stripped-down data model. We only collect the most basic delivery information (Name, Phone Number, and Address) requested during checkout. This data is strictly used to fulfill your WhatsApp orders and deliver your frames.</p>
                        
                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1rem;">Photo Security & Storage</h4>
                        <p style="margin-bottom:20px; font-size:0.9rem; color:var(--secondary); line-height:1.5;">Any personal photos uploaded through the <b>Magic Try-On</b> or <b>Custom Frame</b> tools are processed <b>locally on your device's browser</b> for preview purposes. We do not permanently upload, save, or share your private family images on remote servers without explicit consent for printing.</p>

                        <h4 style="color:var(--primary); margin-bottom:8px; font-size:1rem;">Third-Party Sharing</h4>
                        <p style="margin-bottom:10px; font-size:0.9rem; color:var(--secondary); line-height:1.5;">We never sell or distribute your contact information or order history to third-party marketing agencies.</p>
                    </div>
                `;
            }

            modal.style.display = 'flex';
        }

        function closeInfoModal() {
            document.getElementById('info-modal').style.display = 'none';
        }

        // Load cart from LocalStorage if it exists, otherwise empty array
        let cart = JSON.parse(localStorage.getItem('yashraj_cart')) || [];
        let videoStream = null;

        window.onload = () => {
            const savedLang = localStorage.getItem('yashraj_lang') || 'en';

            // Wait for DOM
            setTimeout(() => {
                const langSelect = document.getElementById('lang-select');
                if (langSelect) langSelect.value = savedLang;
                applyTranslations(savedLang);
            }, 50);

            applyShopFilter('all');
            renderHome();
            fetchManagedProducts();
            updateOnlineStatus();

            window.addEventListener('online', updateOnlineStatus);
            window.addEventListener('offline', updateOnlineStatus);

            // Handle Direct Product Links (?product=ID)
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('product');
            if (productId) {
                const id = parseInt(productId);
                if (products.some(p => p.id === id)) {
                    // Slight delay to ensure DOM and images are ready for the animation
                    setTimeout(() => openProductPage(id), 300);
                }
            }

            // Check Theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme && savedTheme !== 'light') {
                document.body.setAttribute('data-theme', savedTheme);
            }

            // Restore Cart Badge and List on load
            if (cart.length > 0) {
                const badge = document.getElementById('cart-count');
                badge.style.display = 'flex';
                badge.innerText = cart.length;
                renderCartPage();
            }
        };

        function setAppTheme(themeName) {
            const body = document.body;
            if (themeName === 'light') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', themeName);
                localStorage.setItem('theme', themeName);
            }
        }

        function nav(screenId, el) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            // Remove active from product view if switching main tabs
            document.getElementById('product-view').classList.remove('active');

            document.getElementById(screenId).classList.add('active');

            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            if (el) el.classList.add('active');

            if (screenId !== 'visualizer') stopCamera();

            const logo = document.getElementById('brand-text');
            if (screenId === 'shop') logo.innerHTML = "Yashraj <span>Frames</span>";
            else logo.innerHTML = "Yashraj <span>Frames</span>";

            // Show nav bar again
            document.querySelector('.nav-bar').style.display = 'flex';
        }

        function openPage(id) {
            nav(id, document.querySelector(`.nav-item[onclick*='${id}']`));
        }

        function renderHome() {
            const container = document.getElementById('home-products');
            container.innerHTML = "";
            products.slice(0, 4).forEach(p => container.innerHTML += createCard(p));
        }

        function applyShopFilter(filter) {
            console.log("applyShopFilter called with:", filter);
            const container = document.getElementById('shop-container');
            if (!container) return;
            container.innerHTML = "";
            let list = filter === 'all' ? products : products.filter(p => p.cat === filter);
            list.forEach(p => container.innerHTML += createCard(p));

            // Update Active Class on Buttons
            const buttons = document.querySelectorAll('.shop-filter-btn');
            console.log("Found buttons:", buttons.length);
            buttons.forEach(btn => {
                const cat = btn.getAttribute('data-category');
                if (cat === filter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function createCard(p) {
            return `
                <div class="product-card" onclick="openProductPage(${p.id})">
                    <img src="${p.img}" class="p-img">
                    <div class="p-info">
                        <div class="p-name">${p.name}</div>
                        <div class="p-price">Rs. ${p.price}</div>
                    </div>
                    <div class="card-actions">
                        <div class="action-btn btn-try" onclick="event.stopPropagation(); previewFrame(${p.id})">
                            <i class="fa-solid fa-street-view"></i>
                        </div>
                        <div class="action-btn btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                        </div>
                    </div>
                </div>
            `;
        }

        function searchProd(val) {
            const container = document.getElementById('shop-container');
            container.innerHTML = "";
            const lower = val.toLowerCase();
            const list = products.filter(p => p.name.toLowerCase().includes(lower) || p.cat.includes(lower));
            list.forEach(p => container.innerHTML += createCard(p));
        }

        function addToCart(id) {
            const item = products.find(p => p.id === id);
            cart.push(item);

            // Save updated cart to Local Storage
            localStorage.setItem('yashraj_cart', JSON.stringify(cart));

            const badge = document.getElementById('cart-count');
            badge.style.display = 'flex';
            badge.innerText = cart.length;

            const toast = document.getElementById('toast');
            const lang = localStorage.getItem('yashraj_lang') || 'en';
            toast.innerText = lang === 'mr' ? 'कार्टमध्ये जोडले' : (lang === 'hi' ? 'कार्ट में जोड़ा गया' : 'Added to Cart');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
            renderCartPage();
        }

        function renderCartPage() {
            const list = document.getElementById('cart-items');
            list.innerHTML = "";
            let total = 0;
            const lang = localStorage.getItem('yashraj_lang') || 'en';

            if (cart.length === 0) {
                const emptyMsg = lang === 'mr' ? 'कार्ट रिकामा आहे' : (lang === 'hi' ? 'कार्ट खाली है' : 'Cart is empty');
                list.innerHTML = `<div style='text-align:center; color:var(--secondary); margin-top:50px;'>${emptyMsg}</div>`;
                document.getElementById('cart-total').innerText = "";
                return;
            }
            cart.forEach((p, idx) => {
                total += p.price;
                list.innerHTML += `
                    <div style="display:flex; gap:15px; background:var(--surface); padding:10px; border-radius:15px; border:1px solid var(--border-color);">
                        <img src="${p.img}" style="width:60px; height:60px; border-radius:10px; object-fit:cover;">
                        <div style="flex:1;">
                            <div style="font-weight:700; font-size:0.9rem;">${p.name}</div>
                            <div style="color:var(--accent); font-weight:700;">Rs. ${p.price}</div>
                        </div>
                        <div onclick="remItem(${idx})" style="color:var(--danger); align-self:center; cursor:pointer;"><i class="fa-solid fa-trash"></i></div>
                    </div>
                `;
            });
            const totalPrefix = lang === 'mr' ? 'एकूण' : (lang === 'hi' ? 'कुल' : 'Total');
            document.getElementById('cart-total').innerText = `${totalPrefix}: Rs. ${total}`;
        }

        function remItem(idx) {
            cart.splice(idx, 1);

            // Update Local Storage after removing an item
            localStorage.setItem('yashraj_cart', JSON.stringify(cart));

            document.getElementById('cart-count').innerText = cart.length;
            if (cart.length === 0) document.getElementById('cart-count').style.display = 'none';
            renderCartPage();
        }

        function checkoutWA() {
            if (cart.length === 0) return alert("Your cart is empty!");
            const total = cart.reduce((sum, p) => sum + p.price, 0);
            document.getElementById('chk-total-display').innerText = `Rs. ${total}`;
            nav('checkout', null);
        }

        function processCheckout() {
            const name = document.getElementById('chk-name').value.trim();
            const phone = document.getElementById('chk-phone').value.trim();
            const address = document.getElementById('chk-address').value.trim();
            const city = document.getElementById('chk-city').value.trim();
            const pin = document.getElementById('chk-pin').value.trim();
            const method = document.getElementById('chk-method').value;

            if (!name || !phone || !address || !city || !pin) {
                alert("Please fill all required delivery details to proceed.");
                return;
            }

            let msg = `*NEW ORDER FROM YASHRAJ FRAMES* 🚀%0A%0A`;
            msg += `*CUSTOMER DETAILS*%0A`;
            msg += `👤 Name: ${name}%0A`;
            msg += `📞 Phone: ${phone}%0A`;
            msg += `📍 Address: ${address}, ${city} - ${pin}%0A`;
            msg += `🚚 Delivery: ${method}%0A%0A`;

            msg += `*ORDER ITEMS*%0A`;
            let total = 0;
            cart.forEach(p => {
                msg += `• ${p.name} - Rs. ${p.price}%0A`;
                total += p.price;
            });

            msg += `%0A*GRAND TOTAL: Rs. ${total}*%0A%0A`;
            msg += `Please confirm my order and send payment details.`;

            window.open(`https://wa.me/917588598293?text=${msg}`);
            // Reset to cart implicitly when they return from WA
            nav('cart', null);
        }

        function startCamera() {
            const video = document.getElementById('camera-feed');
            const img = document.getElementById('wall-img');
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
                    .then(function (stream) {
                        videoStream = stream;
                        video.srcObject = stream;
                        video.style.display = "block";
                        img.style.display = "none";
                    })
                    .catch(function (err) {
                        alert("Camera access denied.");
                    });
            } else {
                alert("Camera API not supported.");
            }
        }

        function stopCamera() {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
                videoStream = null;
                document.getElementById('camera-feed').style.display = "none";
                document.getElementById('wall-img').style.display = "block";
            }
        }

        function setRoomBg(url) {
            stopCamera();
            const img = document.getElementById('wall-img');
            img.src = url;
            img.style.display = "block";
            document.querySelector('.visualizer-box').style.background = "#000";
        }

        function loadWall(e) {
            stopCamera();
            document.getElementById('wall-img').src = URL.createObjectURL(e.target.files[0]);
            document.getElementById('wall-img').style.display = "block";
            document.querySelector('.visualizer-box').style.background = "#000";
        }

        function setWallColor(color) {
            stopCamera();
            document.getElementById('wall-img').style.display = "none";
            document.querySelector('.visualizer-box').style.background = color;
        }

        function setFrame(el) {
            document.querySelectorAll('.frame-opt').forEach(i => i.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('frame-overlay').src = el.src;
        }

        const frame = document.getElementById('frame-overlay');
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        // Function to start dragging
        const startDrag = (e) => {
            isDragging = true;
            // Check if it's a mouse or touch event
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            initialLeft = frame.offsetLeft;
            initialTop = frame.offsetTop;
        };

        // Function to drag
        const drag = (e) => {
            if (!isDragging) return;
            e.preventDefault(); // Prevents screen scrolling while dragging
            const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            const dx = currentX - startX;
            const dy = currentY - startY;
            frame.style.left = `${initialLeft + dx}px`;
            frame.style.top = `${initialTop + dy}px`;
        };

        // Function to stop dragging
        const stopDrag = () => { isDragging = false; };

        // Mobile Touch Events
        frame.addEventListener('touchstart', startDrag, { passive: false });
        frame.addEventListener('touchmove', drag, { passive: false });
        frame.addEventListener('touchend', stopDrag);

        // Desktop Mouse Events
        frame.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag, { passive: false });
        document.addEventListener('mouseup', stopDrag);

        function requestQuote() {
            window.open(`https://wa.me/917588598293?text=Hi, I want a custom frame quote.`);
        }
        function sendBooking() {
            const name = document.getElementById('cust-name').value;
            const service = document.getElementById('cust-service').value;
            if (!name) return alert("Enter Name");
            window.open(`https://wa.me/917588598293?text=Hi, I am ${name}. I want to book: ${service}`);
        }

        function startVoiceSearch() {
            const mic = document.getElementById('mic-btn');
            const input = document.getElementById('search-input');
            const lang = localStorage.getItem('yashraj_lang') || 'en';

            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();

                // Set language based on app setting
                if (lang === 'mr') recognition.lang = 'mr-IN';
                else if (lang === 'hi') recognition.lang = 'hi-IN';
                else recognition.lang = 'en-IN';

                recognition.interimResults = false;
                recognition.start();

                mic.classList.add('listening');
                input.placeholder = lang === 'mr' ? "मी ऐकत आहे..." : (lang === 'hi' ? "मैं सुन रहा हूँ..." : "Listening...");

                recognition.onresult = function (event) {
                    const text = event.results[0][0].transcript;
                    input.value = text;
                    searchProd(text);
                    mic.classList.remove('listening');
                    input.placeholder = i18n[lang].shop_search;
                };

                recognition.onend = function () {
                    mic.classList.remove('listening');
                    input.placeholder = i18n[lang].shop_search;
                };

                recognition.onerror = function (event) {
                    mic.classList.remove('listening');
                    input.placeholder = lang === 'mr' ? "पुन्हा प्रयत्न करा" : (lang === 'hi' ? "फिर से कोशिश करें" : "Try again...");
                };
            } else {
                alert("Voice search is not supported in this browser.");
            }
        }

        function previewFrame(id) {
            const item = products.find(p => p.id === id);
            if (!item) return;
            const navBtn = document.querySelector(".nav-item[onclick*='visualizer']");
            nav('visualizer', navBtn);
            const overlay = document.getElementById('frame-overlay');
            overlay.src = item.img;
        }

        function openProductPage(id) {
            const p = products.find(item => item.id === id);
            if (!p) return;

            document.getElementById('view-img').src = p.img;
            document.getElementById('view-name').innerText = p.name;
            document.getElementById('view-price').innerText = `Rs. ${p.price}`;

            const addBtn = document.getElementById('view-add-btn');
            addBtn.onclick = () => { addToCart(p.id); };

            const buyBtn = document.getElementById('view-buy-btn');
            buyBtn.onclick = () => {
                window.open(`https://wa.me/917588598293?text=Hi, I want to buy *${p.name}* - Rs. ${p.price}`);
            };

            const shareBtn = document.getElementById('view-share-btn');
            if (shareBtn) {
                shareBtn.onclick = () => {
                    // Use origin and pathname to construct a clean absolute URL
                    const shareUrl = `${window.location.origin}${window.location.pathname}?product=${p.id}`;
                    const text = encodeURIComponent(`Look at this beautiful frame: *${p.name}* for Rs. ${p.price}. \nCheck it out here: ${shareUrl}`);
                    window.open(`https://wa.me/?text=${text}`);
                };
            }

            const productView = document.getElementById('product-view');
            productView.classList.add('active');

            // Hide nav bar
            document.querySelector('.nav-bar').style.display = 'none';

            // TELE OS Auto-Focus Jump: Focus directly jumps to the "Add to Cart" button when opened
            if (document.body.classList.contains('tele-mode')) {
                setTimeout(() => {
                    addBtn.focus();
                }, 100);
            }

            // Hide nav bar
            document.querySelector('.nav-bar').style.display = 'none';
        }

        function closeProduct() {
            document.getElementById('product-view').classList.remove('active');
            document.querySelector('.nav-bar').style.display = 'flex';
        }

        function openLightbox(src) {
            const lb = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');
            img.src = src;
            lb.style.display = 'flex';
        }

        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
        }

        function resizeFrame(val) {
            const frame = document.getElementById('frame-overlay');
            frame.style.width = val + 'px';
        }

        // Naye Custom Section ke liye functions
        // Naye Custom Section ke Functions
        // Advanced Custom Texture Frame Functions
        function loadCustomPhoto(e) {
            const wrapper = document.getElementById('frame-style-box');
            const img = document.getElementById('custom-photo-display');
            img.src = URL.createObjectURL(e.target.files[0]);
            wrapper.style.display = 'block'; // Wrapper ko visible karein
            applyFrame('solid-black'); // Upload hote hi default black frame lag jaye
        }

        function applyFrame(styleType) {
            const wrapper = document.getElementById('frame-style-box');

            if (wrapper.style.display === "none") {
                alert("Please upload your photo first!");
                return;
            }

            // Purani styling reset karna
            wrapper.style.background = 'none';
            wrapper.style.backgroundColor = 'transparent';
            wrapper.style.backgroundImage = 'none';
            wrapper.style.border = 'none';

            // Textures ke hisaab se Frame ki thickness (padding) aur background set karna
            if (styleType === 'solid-black') {
                wrapper.style.backgroundColor = '#111';
                wrapper.style.padding = '15px';
            } else if (styleType === 'solid-white') {
                wrapper.style.backgroundColor = '#fff';
                wrapper.style.padding = '15px';
            } else if (styleType === 'texture-wood') {
                wrapper.style.backgroundImage = 'url("https://i.ibb.co/Hp4Hz7F6/fabric-texture.jpg")';
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.padding = '22px';
            } else if (styleType === 'texture-gold') {
                wrapper.style.backgroundImage = 'url("https://i.ibb.co/4gVdHsdP/wood-7.jpg")';
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.padding = '13px';
            } else if (styleType === 'texture-vintage') {
                wrapper.style.backgroundImage = 'url("https://i.ibb.co/jPCqy6wN/golden-wall-background.jpg")';
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.padding = '20px';
            } else if (styleType === 'pattern-carved') {
                wrapper.style.backgroundColor = '#C5A059';
                wrapper.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/arabesque.png")';
                wrapper.style.padding = '25px';
                wrapper.style.border = '5px solid #8e733b';
            } else if (styleType === 'pattern-custom1') {
                // NEW PATTERN ADDED HERE
                wrapper.style.backgroundImage = 'url("https://i.ibb.co/rKcB3F7x/pattern1.png")';
                wrapper.style.backgroundRepeat = 'repeat';
                wrapper.style.backgroundSize = 'auto';
                wrapper.style.padding = '18px';
                wrapper.style.border = '3px solid #333';
            }
        }



        // ==========================================
        // AMBIENT LIGHT SENSOR (AUTO THEME ADAPTATION)
        // ==========================================
        function initAutoLighting() {
            // Check agar browser me Ambient Light Sensor support karta hai
            if ('AmbientLightSensor' in window) {
                try {
                    const sensor = new AmbientLightSensor();

                    sensor.addEventListener('reading', () => {
                        const lux = sensor.illuminance;
                        console.log('Current Light Intensity (Lux):', lux);

                        // Agar light 50 Lux se kam hai (Dark Room)
                        if (lux < 50) {
                            if (document.body.getAttribute('data-theme') !== 'dark') {
                                document.body.setAttribute('data-theme', 'dark');
                                document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
                            }
                        }
                        // Agar light bright hai (Normal/Daylight)
                        else {
                            if (document.body.getAttribute('data-theme') === 'dark') {
                                document.body.removeAttribute('data-theme');
                                document.getElementById('theme-icon').classList.replace('fa-sun', 'fa-moon');
                            }
                        }
                    });

                    sensor.addEventListener('error', (event) => {
                        console.warn('Sensor error or permission denied:', event.error.message);
                        applyFallbackTheme(); // Sensor block hone par smart fallback use karein
                    });

                    sensor.start();
                } catch (err) {
                    console.error('Ambient Light Sensor initialization failed:', err);
                    applyFallbackTheme();
                }
            } else {
                console.log('AmbientLightSensor API is not supported in this browser. Using smart fallback.');
                applyFallbackTheme();
            }
        }

        // SMART FALLBACK (Time-based & OS preference)
        function applyFallbackTheme() {
            // Agar phone me system-wide dark mode on hai
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.setAttribute('data-theme', 'dark');
                document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
                return;
            }

            // Ya phir agar raat ka time hai (6 PM se 6 AM tak)
            const hour = new Date().getHours();
            if (hour >= 18 || hour < 6) {
                document.body.setAttribute('data-theme', 'dark');
                document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
            }
        }

        // Run this when page loads
        window.addEventListener('load', initAutoLighting);



        // PWA Service Worker Registration
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(registration => {
                        console.log('PWA ServiceWorker registered with scope:', registration.scope);
                    })
                    .catch(error => {
                        console.error('PWA ServiceWorker registration failed:', error);
                    });
            });
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            // Check if user is actually on a Smart TV based on their device info
            // Initialize Price Slider track
            const priceSlider = document.getElementById('price-slider');
            if (priceSlider) {
                const val = priceSlider.value;
                const min = priceSlider.min || 100;
                const max = priceSlider.max || 3000;
                const percentage = ((val - min) / (max - min)) * 100;
                priceSlider.style.background = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${percentage}%, var(--border-color) ${percentage}%, var(--border-color) 100%)`;
            }

            const isSmartTV = /SmartTV|Web0S|Tizen|Roku|AOSP|Android TV|AppleTV/i.test(navigator.userAgent);
            let teleModeActive = false;

            const enableTeleMode = (e) => {
                // MANUAL TEST MODE FOR LAPTOP: Press 'Shift + T' to force TV Zoom Mode
                if (e.shiftKey && e.key.toLowerCase() === 't') {
                    document.body.classList.add('tv-big-ui');
                }

                // Agar Desktop user sirf arrow keys (scroll karne ke liye) daba raha hai, toh ignore karo
                if (!isSmartTV && !document.body.classList.contains('tv-big-ui') && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                    return;
                }

                const teleKeys = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'];

                if (!teleModeActive && teleKeys.includes(e.key)) {
                    teleModeActive = true;
                    document.body.classList.add('tele-mode');

                    // Agar asli TV hai, tabhi zoom/bada UI on karo
                    if (isSmartTV) {
                        document.body.classList.add('tv-big-ui');
                    }

                    const clickableElements = document.querySelectorAll('.nav-item, .product-card, .action-btn, button, .frame-opt, .story-item, .icon-btn, input, select');

                    clickableElements.forEach(el => {
                        if (!el.hasAttribute('tabindex')) {
                            el.setAttribute('tabindex', '0');

                            el.addEventListener('keydown', function (event) {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    this.click();

                                    // Auto-Focus Jump Logic
                                    if (this.classList.contains('nav-item')) {
                                        setTimeout(() => {
                                            const activeScreen = document.querySelector('.screen.active');
                                            if (activeScreen) {
                                                const firstFocusable = activeScreen.querySelector('[tabindex="0"], button, input, select');
                                                if (firstFocusable) firstFocusable.focus();
                                            }
                                        }, 100);
                                    }
                                }
                            });
                        }
                    });
                }
            };

            window.addEventListener('keydown', enableTeleMode);

            // TV Remote 'BACK' Button Support
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' || e.key === 'Backspace') {
                    const productView = document.getElementById('product-view');
                    const lightbox = document.getElementById('lightbox');

                    if (productView && productView.classList.contains('active')) {
                        e.preventDefault();
                        closeProduct();
                    } else if (lightbox && lightbox.style.display === 'flex') {
                        e.preventDefault();
                        closeLightbox();
                    }
                }
            });
        });

        // PWA Install Prompt Logic
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            const installBtn = document.getElementById('install-app-btn');
            if (installBtn) installBtn.style.display = 'flex';
        });

        function installPWA() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                    const installBtn = document.getElementById('install-app-btn');
                    if (installBtn) installBtn.style.display = 'none';
                });
            } else {
                alert("To install the app, tap your browser's menu (⋮) and select 'Add to Home Screen' or 'Install App'.");
            }
        }

        function orderCustomFrame() {
            let baseUrl = "https://wa.me/917588598293?text=Hi, I want to order a custom frame with my own photo!";
            const engraveText = document.getElementById('engrave-input').value.trim();
            if (engraveText) {
                baseUrl = `https://wa.me/917588598293?text=Hi, I want to order a custom frame with my own photo! Please add this custom text engraving: "${encodeURIComponent(engraveText)}"`;
            }
            window.open(baseUrl);
        }

        function updatePriceSlider(val) {
            const slider = document.getElementById('price-slider');
            const priceVal = document.getElementById('price-val');
            if (priceVal) priceVal.innerText = 'Rs. ' + val;

            const min = slider.min || 100;
            const max = slider.max || 3000;
            const percentage = ((val - min) / (max - min)) * 100;
            slider.style.background = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${percentage}%, var(--border-color) ${percentage}%, var(--border-color) 100%)`;

            filterByPrice(val);
        }

        function filterByPrice(max) {
            const container = document.getElementById('shop-container');
            container.innerHTML = "";
            const currentSearch = document.getElementById('search-input').value.toLowerCase();
            let filtered = products.filter(p => p.price <= parseInt(max));

            if (currentSearch) {
                filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearch) || p.cat.toLowerCase().includes(currentSearch));
            }

            if (filtered.length === 0) {
                container.innerHTML = "<p style='text-align:center; width:100%; color:var(--secondary); margin-top: 20px;'>No frames found in this price range.</p>";
            } else {
                filtered.forEach(p => container.innerHTML += createCard(p));
            }
        }

        function runQuizFilter() {
            const q1 = document.getElementById('quiz-q1').value;
            const q2 = document.getElementById('quiz-q2').value;
            const q3 = parseInt(document.getElementById('quiz-q3').value);
            document.getElementById('quiz-modal').style.display = 'none';

            nav('shop', document.getElementById('nav-shop'));

            const slider = document.getElementById('price-slider');
            const priceVal = document.getElementById('price-val');

            slider.value = q3;
            priceVal.innerText = 'Rs. ' + q3;

            const container = document.getElementById('shop-container');
            container.innerHTML = "";

            let filtered = products;

            if (q1 === 'spiritual') {
                filtered = filtered.filter(p => ['god', 'chatrapati', 'Dr. Ambedkar'].includes(p.cat));
            } else if (q1 === 'decor') {
                filtered = filtered.filter(p => ['decor', 'mirror'].includes(p.cat));
            } else if (q1 === 'gift') {
                filtered = filtered.filter(p => p.cat === 'custom');
            }

            if (q2 === 'god') {
                filtered = filtered.filter(p => p.cat === 'god');
            } else if (q2 === 'leaders') {
                filtered = filtered.filter(p => ['chatrapati', 'Dr. Ambedkar'].includes(p.cat));
            } else if (q2 === 'abstract') {
                filtered = filtered.filter(p => p.cat === 'decor');
            }

            if (q3 === 300) {
                filtered = filtered.filter(p => p.price <= 300);
            } else if (q3 === 700) {
                filtered = filtered.filter(p => p.price > 300 && p.price <= 700);
            } else if (q3 === 3000) {
                filtered = filtered.filter(p => p.price > 700);
            }

            if (filtered.length === 0) {
                container.innerHTML = "<p style='text-align:center; width:100%; color:var(--secondary); margin-top: 20px;'>No exact match found. Try adjusting your preferences.</p>";
            } else {
                if (q3 === 3000) {
                    filtered.sort((a, b) => b.price - a.price);
                } else {
                    filtered.sort((a, b) => a.price - b.price);
                }
                filtered.forEach(p => container.innerHTML += createCard(p));
            }
        }

        // ==========================================
        // Y INFINITY AI ASSISTANT LOGIC (GEMINI)
        // ==========================================
        const GEMINI_API_KEY = "AIzaSyCBZvhr7J9NGBFMg_BuZfwR3xiwJTdWRjU";
        const AI_NAME = "Y Infinity";

        const COMPANY_BIO = `
            Company: Choundeshwari Digital & Yashraj Photo Frames.
            Website: https://yashrajframes.netlify.app
            Founder: Madhavrao Jadhav.
            Developer: Yashraj Jadhav.
            Location: Jafrabad, Maharashtra. Near HDFC Bank, Market Yard.
            Services: Premium Photo Framing (teak wood, synthetic, water/dust proof), Professional Photography (Wedding, Baby, Pre-wedding, Events), Video Editing.
            Special Features: Magic Try-On (AR), Custom Framing with Engraving, Home Delivery.
        `;

        let chatHistory = [];

        function toggleAIChat() {
            const win = document.getElementById('ai-chat-window');
            const fab = document.getElementById('ai-fab');
            const isOpen = win.style.display === 'flex';

            win.style.display = isOpen ? 'none' : 'flex';
            fab.classList.toggle('active');

            if (!isOpen) {
                // Proactive welcome message
                setTimeout(() => {
                    if (document.getElementById('ai-messages').children.length === 0) {
                        addAIMessage(`Hi! I am **${AI_NAME}**, your personal assistant at Yashraj Frames. How can I help you find the perfect frame or book a shoot today?`);
                    }
                }, 300);
            }
        }

        function addAIMessage(text) {
            const container = document.getElementById('ai-messages');
            const div = document.createElement('div');
            div.className = 'msg msg-ai';

            // Basic markdown handling for bold and products
            let processedText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

            // Check for product mentions [ID:X]
            const productRegex = /\[ID:(\d+)\]/g;
            processedText = processedText.replace(productRegex, (match, id) => {
                const p = products.find(item => item.id == id);
                if (p) {
                    return `
                        <div class="ai-prod-card" onclick="openProductPage(${p.id}); toggleAIChat();">
                            <img src="${p.img}">
                            <div>${p.name} - Rs. ${p.price}</div>
                        </div>
                    `;
                }
                return "";
            });

            div.innerHTML = processedText;
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
            chatHistory.push({ role: "model", parts: [{ text: text }] });
        }

        function addUserMessage(text) {
            const container = document.getElementById('ai-messages');
            const div = document.createElement('div');
            div.className = 'msg msg-user';
            div.innerText = text;
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
            chatHistory.push({ role: "user", parts: [{ text: text }] });
        }

        async function handleAISend() {
            const input = document.getElementById('ai-input-text');
            const text = input.value.trim();
            if (!text) return;

            input.value = "";
            addUserMessage(text);
            document.getElementById('ai-typing').style.display = 'block';

            try {
                const response = await callGemini(text);
                document.getElementById('ai-typing').style.display = 'none';
                addAIMessage(response);
            } catch (error) {
                console.error("AI Connection Error:", error);
                document.getElementById('ai-typing').style.display = 'none';

                let errorMsg = "I'm having trouble connecting right now. ";
                if (window.location.protocol === 'file:') {
                    errorMsg += "<b>Action Required:</b> You are running this as a local file (file://). Browser security blocks AI requests in this mode. Please open it using a **Live Server** (like the VS Code extension) to allow the AI to work.";
                } else if (error.message.includes("403")) {
                    errorMsg += "The API key might be restricted or invalid. Please check your Gemini API key settings.";
                } else {
                    errorMsg += "Please check your internet connection and try again.";
                }
                addAIMessage(errorMsg);
            }
        }

        async function callGemini(userPrompt) {
            // Corrected model: gemini-1.5-flash
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

            const systemPrompt = `
                You are "${AI_NAME}", a helpful AI assistant for "Yashraj Frames".
                Context: ${COMPANY_BIO}
                
                Current Product Catalog (Suggest by name and use [ID:number] format to display cards):
                ${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, price: p.price, category: p.cat })))}

                Instructions:
                1. Be polite, premium, and professional.
                2. Help users find products based on their needs.
                3. When recommending a product, refer to it by name and include [ID:N].
                4. Supported languages: English, Hindi, Marathi. Respond in the language the user speaks.
            `;

            const body = {
                system_instruction: {
                    parts: { text: systemPrompt }
                },
                contents: chatHistory
            };

            const resp = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (!resp.ok) {
                const err = await resp.json();
                throw new Error(err.error?.message || "API request failed");
            }

            const data = await resp.json();
            if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Invalid response format");
            }
        }


        function updateOnlineStatus() {
            const offlineScreen = document.getElementById('offline-screen');
            if (navigator.onLine) {
                offlineScreen.style.display = 'none';
            } else {
                offlineScreen.style.display = 'flex';
                // Trigger translation for the offline screen specifically
                const lang = localStorage.getItem('yashraj_lang') || 'en';
                applyTranslations(lang);
            }
        }
    



// Attach to window for dangerouslySetInnerHTML
window.fetchManagedProducts = fetchManagedProducts;
window.changeLanguage = changeLanguage;
window.applyTranslations = applyTranslations;
window.openSettingsModal = openSettingsModal;
window.closeInfoModal = closeInfoModal;
window.setAppTheme = setAppTheme;
window.nav = nav;
window.openPage = openPage;
window.renderHome = renderHome;
window.applyShopFilter = applyShopFilter;
window.createCard = createCard;
window.searchProd = searchProd;
window.addToCart = addToCart;
window.renderCartPage = renderCartPage;
window.remItem = remItem;
window.checkoutWA = checkoutWA;
window.processCheckout = processCheckout;
window.startCamera = startCamera;
window.stopCamera = stopCamera;
window.setRoomBg = setRoomBg;
window.loadWall = loadWall;
window.setWallColor = setWallColor;
window.setFrame = setFrame;
window.requestQuote = requestQuote;
window.sendBooking = sendBooking;
window.startVoiceSearch = startVoiceSearch;
window.previewFrame = previewFrame;
window.openProductPage = openProductPage;
window.closeProduct = closeProduct;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.resizeFrame = resizeFrame;
window.loadCustomPhoto = loadCustomPhoto;
window.applyFrame = applyFrame;
window.initAutoLighting = initAutoLighting;
window.applyFallbackTheme = applyFallbackTheme;
window.installPWA = installPWA;
window.orderCustomFrame = orderCustomFrame;
window.updatePriceSlider = updatePriceSlider;
window.filterByPrice = filterByPrice;
window.runQuizFilter = runQuizFilter;
window.toggleAIChat = toggleAIChat;
window.addAIMessage = addAIMessage;
window.addUserMessage = addUserMessage;
window.handleAISend = handleAISend;
window.callGemini = callGemini;
window.updateOnlineStatus = updateOnlineStatus;
