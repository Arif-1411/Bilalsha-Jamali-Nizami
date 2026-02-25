/**
 * Blog Page JavaScript
 * Handles dynamic content loading based on URL parameters
 */

// Blog content data
const blogData = {
    'public-lectures': {
        title: 'The Spiritual Gnostics (Arifeen)',
        subtitle: 'Guardians of Ahl al-Sunnah — Exploring the Inseparable Bond of Shari\'ah and Tariqah',
        category: 'Public Lecture',
        content: `
            <h2>The Dual Dimensions of Islam</h2>
            <p>Islam is an encompassment of two inseparable dimensions: <strong>Shari'ah</strong> (The Sacred Law) and <strong>Tariqah</strong> (The Spiritual Path). A believer's journey remains incomplete if either is neglected.</p>
            
            <p>This series explores how the Great Gnostics and Scholars of Tasawwuf have guarded the essence of Islam and spearheaded spiritual and intellectual reformations throughout history.</p>
            
            <div class="highlight-box">
                <p>The outward observance of Islamic law without inner purification leads to spiritual emptiness, while pursuing spirituality without adherence to Sacred Law leads to deviation and misguidance.</p>
            </div>

            <h2>Key Content Highlights</h2>

            <h3>1. Integration of Shari'ah & Tariqah</h3>
            <p>A comprehensive study on why both dimensions are vital and how isolating one from the other leads to spiritual deficiency. The great scholars of Islam have always emphasized that:</p>
            <ul>
                <li>Shari'ah provides the framework and boundaries for worship</li>
                <li>Tariqah breathes life and sincerity into those acts of worship</li>
                <li>Together, they form the complete path to Allah's pleasure</li>
            </ul>

            <div class="blog-quote">
                <p>Whoever practices Tasawwuf without learning Sacred Law corrupts his faith, while whoever learns Sacred Law without practicing Tasawwuf corrupts himself. Only he who combines the two proves true.</p>
                <cite>— Imam Malik ibn Anas (رحمه الله)</cite>
            </div>

            <h3>2. The Mission of the Gnostics</h3>
            <p>Analyzing the methods used by spiritual masters for <em>Tazkiyah</em> (Purification of the Heart) and the spiritual elevation of humanity. This includes:</p>
            <ul>
                <li>The science of purifying the heart from spiritual diseases</li>
                <li>Methods of developing love for Allah and His Messenger ﷺ</li>
                <li>The role of the spiritual guide (Murshid) in the seeker's journey</li>
                <li>Stages of spiritual development (Maqamat) and states (Ahwal)</li>
            </ul>

            <h3>3. Intellectual Contributions</h3>
            <p>Highlighting the transformative impact spiritual scholars have had on the global landscape of Islamic knowledge. The Arifeen have:</p>
            <ul>
                <li>Preserved and transmitted sacred knowledge across generations</li>
                <li>Defended Islam against philosophical attacks</li>
                <li>Brought countless people to the path of guidance</li>
                <li>Produced monumental works in every Islamic science</li>
            </ul>

            <div class="key-points">
                <h4><i class="fas fa-star"></i> Notable Gnostics in History</h4>
                <ul>
                    <li><strong>Imam al-Ghazali</strong> — The Proof of Islam, reviver of the faith</li>
                    <li><strong>Shaykh Abdul Qadir al-Jilani</strong> — The Sultan of the Saints</li>
                    <li><strong>Imam al-Junayd al-Baghdadi</strong> — Master of the Spiritual Path</li>
                    <li><strong>Khwaja Moinuddin Chishti</strong> — Spreader of Islam in the Indian subcontinent</li>
                    <li><strong>Ahmad Muhyiddin Noorishah Jeelani</strong> — The spiritual revivalist of Kerala and the founder of Jamia Nooriya, Pattikkad</li>
                      
                    
                </ul>
            </div>

            <h3>4. Identifying the Counterfeit</h3>
            <p>Clear guidelines on how to distinguish authentic spiritual guidance from fraudulent claims and practices that contradict Shari'ah. True Tasawwuf:</p>
            <ul>
                <li>Never contradicts the Quran and Sunnah</li>
                <li>Does not claim exemption from Islamic obligations</li>
                <li>Leads to increased worship, not decreased</li>
                <li>Produces humility, not arrogance</li>
                <li>Connects to an authentic chain of transmission</li>
            </ul>

            <div class="highlight-box">
                <p>Any "spirituality" that permits what Allah has forbidden or forbids what Allah has permitted is not Tasawwuf—it is deviation dressed in spiritual clothing.</p>
            </div>

            <h3>5. Refuting the Critics</h3>
            <p>A robust, evidence-based response to those who ignorantly critique either the legal or the spiritual aspects of the faith. We address:</p>
            <ul>
                <li>Misconceptions about Sufi practices</li>
                <li>False accusations against the scholars of Tasawwuf</li>
                <li>The Quranic and Hadith basis for spiritual purification</li>
                <li>Historical consensus of scholars on the validity of Tasawwuf</li>
            </ul>

            <div class="blog-quote">
                <p>This knowledge of ours is bound by the Quran and the Sunnah. Whoever does not memorize the Quran and write Hadith and learn Fiqh is not fit to be followed.</p>
                <cite>— Imam al-Junayd al-Baghdadi (رحمه الله)</cite>
            </div>

            <h2>Series Objectives</h2>
            <p>Through this lecture series, viewers will gain:</p>
            <ul>
                <li>A clear understanding of authentic Sunni Tasawwuf</li>
                <li>Knowledge of the contributions of the great Arifeen</li>
                <li>Tools to distinguish truth from falsehood in spiritual matters</li>
                <li>Appreciation for the unity of Shari'ah and Tariqah</li>
                <li>Motivation to pursue both outward and inward excellence</li>
            </ul>
        `
    },

    'debates-dialogue': {
        title: 'Ideological Deviations of Samastha',
        subtitle: 'The Authentic Principles of Ahl al-Sunnah vs. Contemporary Distortions',
        category: 'Debates & Dialogue',
        content: `
            <h2>An Objective Analysis</h2>
            <p>This video series provides an objective analysis of the ideological shifts and doctrinal lapses occurring within the religious organization <strong>Samastha Kerala Jam'iyyathul Ulama</strong>, specifically concerning its departures from the authentic path of Ahl al-Sunnah wal-Jama'ah.</p>
            
            <p>While the organization outwardly claims a "Sunni Heritage," these sessions utilize scriptural evidence to expose the "Anti-Sunni" ideologies that have permeated its practical and doctrinal framework.</p>
            
            <div class="highlight-box">
                <p>Our critique is not born of animosity, but of sincere concern for preserving the authentic teachings of Ahl al-Sunnah wal-Jama'ah and protecting the Muslim community from doctrinal confusion.</p>
            </div>

            <h2>Key Content Highlights</h2>

            <h3>1. Ideological Analysis</h3>
            <p>An objective exposition of the authentic Sunni Creed (Aqeedah) based on the classical texts and foundational works of the great Imams of the Ahl al-Sunnah. This includes:</p>
            <ul>
                <li>The creed of Imam Abu al-Hasan al-Ash'ari</li>
                <li>The methodology of Imam Abu Mansur al-Maturidi</li>
                <li>The theological positions of the Four Imams</li>
                <li>The consensus positions documented in classical texts</li>
            </ul>

            <div class="blog-quote">
                <p>Ahl al-Sunnah wal-Jama'ah are those who follow the way of the Prophet ﷺ and his Companions, without innovation in creed and without deviation in methodology.</p>
                <cite>— Classical Definition of Ahl al-Sunnah</cite>
            </div>

            <h3>2. The Roots of Deviation</h3>
            <p>A refutation of the tendencies to misinterpret sacred texts to serve:</p>
            <ul>
                <li><strong>Personal interests</strong> — Using religion for worldly gain</li>
                <li><strong>Individual animosity</strong> — Targeting scholars and groups out of jealousy</li>
                <li><strong>Narrow organizational sectarianism</strong> — Prioritizing group identity over truth</li>
            </ul>
            
            <p>We examine specific instances where organizational politics have overridden scriptural fidelity, leading to positions that contradict established Sunni scholarship.</p>

            <div class="key-points">
                <h4><i class="fas fa-exclamation-triangle"></i> Signs of Deviation</h4>
                <ul>
                    <li>Rejecting classical scholarly positions without evidence</li>
                    <li>Issuing fatwas that contradict the Four Madhabs</li>
                    <li>Making takfir (excommunication) of fellow Sunnis</li>
                    <li>Denying established practices of Ahl al-Sunnah</li>
                    <li>Following personalities over principles</li>
                </ul>
            </div>

            <h3>3. Critique of Nominal Sunnism</h3>
            <p>A scholarly and scientific analysis of the contradictions inherent in promoting anti-Sunni ideas while operating under a traditionalist label. We expose:</p>
            <ul>
                <li>The gap between claimed beliefs and actual teachings</li>
                <li>Selective application of scholarly opinions</li>
                <li>Misrepresentation of classical texts</li>
                <li>Double standards in applying religious rulings</li>
            </ul>

            <div class="highlight-box">
                <p>Claiming the label of "Sunni" while opposing the documented positions of Sunni scholars across centuries is a form of intellectual dishonesty that harms the Muslim community.</p>
            </div>

            <h3>4. Evidence-Based Refutation</h3>
            <p>Providing robust responses to contemporary claims that deviate from the Sunni tradition, grounded firmly in:</p>
            
            <div class="key-points">
                <h4><i class="fas fa-book-quran"></i> Sources of Evidence</h4>
                <ul>
                    <li><strong>Al-Quran al-Karim</strong> — The primary source of Islamic guidance</li>
                    <li><strong>Hadith</strong> — Authentic narrations from the Prophet ﷺ</li>
                    <li><strong>Ijma' (Consensus)</strong> — Agreed-upon positions of scholars</li>
                    <li><strong>Qiyas (Analogy)</strong> — Reasoned extension of established rulings</li>
                </ul>
            </div>

            <h2>Methodology of This Series</h2>
            <p>Our approach in these discussions is based on:</p>
            <ul>
                <li><strong>Academic rigor</strong> — Every claim is supported by evidence</li>
                <li><strong>Fairness</strong> — Opposing views are presented accurately before refutation</li>
                <li><strong>Respect</strong> — Criticism of ideas, not personal attacks</li>
                <li><strong>Transparency</strong> — Sources are cited and verifiable</li>
            </ul>

            <div class="blog-quote">
                <p>Speak the truth even if it is against yourself, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.</p>
                <cite>— Based on Quran 4:135 & 5:8</cite>
            </div>

            <h2>Objective of This Series</h2>
            <p>Our goal is not to create division, but to:</p>
            <ul>
                <li>Clarify the authentic Sunni position on contested issues</li>
                <li>Protect Muslims from ideological confusion</li>
                <li>Encourage return to evidence-based scholarship</li>
                <li>Promote unity based on truth, not organizational loyalty</li>
            </ul>
        `
    },

    'defense-ahlus-sunnah': {
        title: 'Is Music Anti-Islamic?',
        subtitle: 'An Objective Analysis — Moving Beyond Polarized Arguments',
        category: 'Defense of Ahl al-Sunnah',
        content: `
            <h2>A Balanced Perspective</h2>
            <p>Amidst the polarized arguments regarding the art of music and its Islamic dimensions, this video series presents a <strong>balanced and evidence-based perspective</strong>.</p>
            
            <p>Moving beyond superficial conclusions—which claim either that music is entirely prohibited or that all forms of music and instruments are unconditionally permissible—this series analyzes the subject through both theoretical and jurisprudential (Fiqh) frameworks.</p>
            
            <div class="highlight-box">
                <p>The question of music in Islam deserves scholarly treatment, not emotional reactions. We present the evidence and let the classical tradition speak for itself.</p>
            </div>

            <h2>Key Content Highlights</h2>

            <h3>1. Music: Art and Philosophy</h3>
            <p>A theoretical analysis of music as the art of sound arrangement, discussing its psychological and spiritual impact on the human mind:</p>
            <ul>
                <li>Definition of music in Arabic terminology (الموسيقى، الغناء، السماع)</li>
                <li>The psychology of sound and its effect on human emotions</li>
                <li>Historical views on music across civilizations</li>
                <li>The spiritual dimension of auditory experiences</li>
            </ul>

            <div class="blog-quote">
                <p>Sound has the power to move the soul in ways that bypass the rational mind. This is precisely why Islam provides guidance on what we listen to.</p>
                <cite>— Scholarly Observation</cite>
            </div>

            <h3>2. Classification of Instruments</h3>
            <p>Categorizing musical instruments based on their construction and type, while clarifying the specific Islamic rulings associated with each:</p>
            
            <div class="key-points">
                <h4><i class="fas fa-music"></i> Instrument Categories</h4>
                <ul>
                    <li><strong>String Instruments (الآلات الوترية)</strong> — Oud, Guitar, Violin, etc.</li>
                    <li><strong>Percussion Instruments (الآلات الإيقاعية)</strong> — Duff, Drums, Tabla, etc.</li>
                    <li><strong>Wind Instruments (الآلات الهوائية)</strong> — Flute, Trumpet, etc.</li>
                </ul>
            </div>

            <p>We examine what classical scholars said about each category, presenting the range of opinions from prohibition to permissibility with conditions.</p>

            <h3>3. Jurisprudential Framework</h3>
            <p>Defining the boundaries of "permissibility" in the light of:</p>
            <ul>
                <li><strong>Quranic Evidence</strong> — Verses cited by both sides and their proper interpretation</li>
                <li><strong>Hadith Literature</strong> — Authentic narrations regarding music and singing</li>
                <li><strong>Opinions of the Four Madhabs</strong> — What each school actually says</li>
                <li><strong>Fatwas of Classical Imams</strong> — Legal verdicts across Islamic history</li>
            </ul>

            <div class="highlight-box">
                <p>The truth lies neither in blanket prohibition nor unrestricted permissibility. Classical scholarship offers a nuanced middle path that honors both the letter and spirit of the law.</p>
            </div>

            <h3>4. Refuting Misconceptions</h3>
            <p>A critique of emotional and extremist approaches, providing scriptural responses to:</p>

            <h4>Those Who Adopt Excessive Austerity:</h4>
            <ul>
                <li>Claiming ALL music is absolutely haram without exception</li>
                <li>Ignoring authentic hadith that permit certain forms</li>
                <li>Making takfir of those who hold different scholarly opinions</li>
                <li>Rejecting the views of major scholars throughout history</li>
            </ul>

            <h4>Those Who Adopt Unregulated Liberalism:</h4>
            <ul>
                <li>Claiming ALL music is halal without any conditions</li>
                <li>Ignoring clear prohibitions mentioned in authentic texts</li>
                <li>Dismissing scholarly consensus where it exists</li>
                <li>Using weak or fabricated narrations as evidence</li>
            </ul>

            <div class="blog-quote">
                <p>The middle path is the way of this Ummah. Extremism in either direction leads to harm.</p>
                <cite>— Based on Prophetic Guidance</cite>
            </div>

            <h3>5. Spiritual Melodies (السماع الروحاني)</h3>
            <p>An in-depth study of auditory forms conducive to the purification of the heart and the remembrance of Allah, including:</p>
            
            <div class="key-points">
                <h4><i class="fas fa-heart"></i> Permissible Auditory Practices</h4>
                <ul>
                    <li><strong>Quran Recitation</strong> — The most beautiful and beneficial sound</li>
                    <li><strong>Nasheed & Qasida</strong> — Poetry in praise of Allah and His Messenger ﷺ</li>
                    <li><strong>Sufi Sama' Tradition</strong> — Its history, conditions, and scholarly views</li>
                    <li><strong>The Duff in Celebrations</strong> — What is permitted and when</li>
                </ul>
            </div>

            <p>We examine the practice of Sama' among the great Sufi masters, clarifying what they actually practiced versus what is falsely attributed to them.</p>

            <h2>What This Series Offers</h2>
            <ul>
                <li>A comprehensive review of all major scholarly opinions</li>
                <li>Original Arabic sources with translation and explanation</li>
                <li>Practical guidance for Muslims seeking clarity</li>
                <li>Refutation of extremism on both ends of the spectrum</li>
                <li>Recognition of legitimate scholarly difference (Ikhtilaf)</li>
            </ul>

            <div class="highlight-box">
                <p>Our goal is not to tell you what to believe, but to present the classical tradition faithfully so you can make an informed decision based on knowledge, not emotion.</p>
            </div>
        `
    },

   'digital-outreach': {
    title: 'Digital Outreach',
    subtitle: 'The Modern Face of Scholarly Tradition',
    category: 'Digital Outreach',
    content: `
        <h2>Bridging Tradition and Technology</h2>
        <p>The digital revolution has fundamentally transformed the methods by which knowledge is disseminated and acquired. <strong>Bilalsha Jamali Nizami</strong> stands at the forefront of this evolution, blending a traditionalist oratory style rooted in the Sunni heritage with the accessibility of the modern age. His scholarly contributions continue to resonate deeply with Muslim audiences across Kerala and globally.</p>
        
        <div class="highlight-box">
            <p>What distinguishes Bilalsha Jamali Nizami, beyond his profound classical erudition, is an analytical presentation style tailored for a contemporary audience. Moving away from mere emotional rhetoric or unsubstantiated critiques, he employs an academic approach that prioritizes scriptural evidence and logical discourse to address opposing viewpoints.</p>
        </div>

        <h2>YouTube Channel: A Virtual Academy</h2>
        <p>His official YouTube channel functions as a <strong>"Digital Classroom"</strong> for seekers of knowledge. His lectures and dialogues are categorized to facilitate systematic learning:</p>
        
        <h3>Full-Length Lectures</h3>
        <p>Comprehensive sessions providing in-depth explorations of various Islamic sciences, ranging from Aqeedah (Creed) to Fiqh (Jurisprudence).</p>
        
        <h3>Short Clips</h3>
        <p>Concise and clear responses to daily life queries and complex theological concepts, perfect for quick reference.</p>
        
        <h3>Live Sessions</h3>
        <p>Interactive broadcasts that foster direct engagement, allowing viewers to seek clarifications and interact with scholarship in real-time.</p>

        <h2>Key Content Categories</h2>
        
        <div class="key-points">
            <h4><i class="fas fa-folder-open"></i> Content Library</h4>
            <ul>
                <li><strong>Aqeedah Essentials</strong> — A breakdown of the foundational principles of the Sunni creed.</li>
                <li><strong>Scriptural Exegesis</strong> — Authoritative commentaries on the Quran and Hadith, anchored in the traditional Sunni methodology.</li>
                <li><strong>Fiqh Analysis</strong> — Rigorous examination and analysis of complex jurisprudential matters (Mas'alas).</li>
                <li><strong>Historical Biographies (Seerah & Chronicles)</strong> — Analytical studies on the lives of the Prophet ﷺ, the Companions, the Successors (Tabi'un), the great Imams, and the Sufi saints.</li>
                <li><strong>Contemporary Issues</strong> — Islamic perspectives and solutions to the multifaceted questions and challenges of the modern world.</li>
                <li><strong>Defensive Scholarship (Refutations)</strong> — Evidence-based defenses of Ahl al-Sunnah principles against distorted interpretations and misinformation.</li>
            </ul>
        </div>

        <h2>Social Media Presence</h2>
        <p>Beyond YouTube, he maintains an active presence across multiple digital platforms:</p>
        
        <h3>Facebook</h3>
        <p>A hub for scholarly notes, event announcements, and the sharing of beneficial insights for community engagement.</p>
        
        <h3>Instagram</h3>
        <p>A repository of visual content, including curated quotes, infographics, and short-form educational videos.</p>

        <h2>Social Impact</h2>
        <p>The scholarly interventions of Bilalsha Jamali Nizami are driving significant social transformation by:</p>
        
        <ul>
            <li>Providing authentic corrections to common religious misconceptions.</li>
            <li>Offering a reliable and verified source of knowledge for spiritual seekers.</li>
            <li>Preserving classical Sunni teachings through the innovative use of modern technology.</li>
            <li>Countering misinformation with verified scholarship to foster an informed and aware community.</li>
        </ul>

        <div class="highlight-box">
            <p>The one who guides to good is like the one who does it. Help us spread authentic knowledge by subscribing to our channels and sharing content with family and friends.</p>
        </div>
    `
}
};

// Initialize blog page
document.addEventListener('DOMContentLoaded', function() {
    initBlogPage();
    initShareButtons();
    initCopyLink();
    updateYear();
});

function initBlogPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    
    if (topic && blogData[topic]) {
        renderBlogContent(topic);
    } else {
        renderError();
    }
}

function renderBlogContent(topic) {
    const data = blogData[topic];
    
    // Update page title
    document.title = `${data.title} - Bilalsha Jamali Nizami`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', data.subtitle);
    }
    
    // Update hero section
    document.getElementById('blog-title').textContent = data.title;
    document.getElementById('blog-subtitle').textContent = data.subtitle;
    document.getElementById('breadcrumb-current').textContent = data.category || data.title;
    
    // Update article content
    document.getElementById('article-content').innerHTML = data.content;
    
    // Update related topics
    renderRelatedTopics(topic);
    
    // Initialize AOS for new content
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function renderRelatedTopics(currentTopic) {
    const relatedList = document.getElementById('related-topics');
    let html = '';
    
    const icons = {
        'public-lectures': 'fas fa-microphone-alt',
        'debates-dialogue': 'fas fa-comments',
        'defense-ahlus-sunnah': 'fas fa-shield-alt',
        'digital-outreach': 'fab fa-youtube'
    };
    
    const shortTitles = {
        'public-lectures': 'The Spiritual Gnostics',
        'debates-dialogue': 'Ideological Deviations',
        'defense-ahlus-sunnah': 'Music in Islam',
        'digital-outreach': 'Digital Outreach'
    };
    
    for (const [key, data] of Object.entries(blogData)) {
        const isActive = key === currentTopic;
        html += `
            <li>
                <a href="blog.html?topic=${key}" class="${isActive ? 'active' : ''}">
                    <i class="${icons[key]}"></i>
                    ${shortTitles[key]}
                </a>
            </li>
        `;
    }
    
    relatedList.innerHTML = html;
}

function renderError() {
    document.getElementById('blog-title').textContent = 'Article Not Found';
    document.getElementById('blog-subtitle').textContent = 'The requested article could not be found.';
    
    document.getElementById('article-content').innerHTML = `
        <div class="blog-error">
            <i class="fas fa-exclamation-circle"></i>
            <h3>Oops! Article Not Found</h3>
            <p>The article you're looking for doesn't exist or has been moved.</p>
            <a href="index.html#engagement" class="back-btn" style="display: inline-flex; margin-top: 20px;">
                <i class="fas fa-arrow-left"></i>
                <span>Back to Engagement</span>
            </a>
        </div>
    `;
    
    // Hide share and back sections
    const blogShare = document.querySelector('.blog-share');
    const blogBack = document.querySelector('.blog-back');
    
    if (blogShare) blogShare.style.display = 'none';
    if (blogBack) blogBack.style.display = 'none';
}

function initShareButtons() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.getElementById('blog-title')?.textContent || 'Article');
    
    const whatsappBtn = document.getElementById('share-whatsapp');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(`https://wa.me/?text=${pageTitle}%20${pageUrl}`, '_blank');
        });
    }
}

function initCopyLink() {
    const copyBtn = document.getElementById('copy-link');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.classList.add('copied');
                this.innerHTML = '<i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = '<i class="fas fa-link"></i>';
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = window.location.href;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                this.classList.add('copied');
                this.innerHTML = '<i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = '<i class="fas fa-link"></i>';
                }, 2000);
            });
        });
    }
}

function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}