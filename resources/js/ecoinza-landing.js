const state = {
  heroIndex: 0,
  faqOpen: 0,
  mobileMenuOpen: false,
  waitlistExtra: 0,
  submitting: false,
  submitted: false,
  swapFrom: 'GHS',
  swapTo: 'USDC',
  swapAmount: '5000',
  testimonialIndex: 0,
  testimonialDirection: 1,
};

const data = {
  heroSlides: [
    {
      tag: 'Save',
      headline: 'Save beyond inflation.',
      sub: 'Convert your local currency into stable digital dollars and protect your value from depreciation.',
      image: '/images/ecoinza/hero-save.png',
    },
    {
      tag: 'Transfer',
      headline: 'Send money across borders in seconds.',
      sub: 'Move value between Ghana, Nigeria, Kenya, South Africa, the UK, Europe, and the US with speed and clarity.',
      image: '/images/ecoinza/hero-transfer-map.png',
    },
    {
      tag: 'Deposit & Withdraw',
      headline: 'Deposit and withdraw with MoMo or bank.',
      sub: 'Fund your wallet through mobile money or bank accounts, then withdraw back to either rail whenever you need cash.',
      image: '/images/ecoinza/hero-deposit.png',
    },
    {
      tag: 'Crypto',
      headline: 'Crypto without confusion.',
      sub: 'Buy, sell, hold, and send USDC, BTC, and ETH with a clean interface designed for everyday users.',
      image: '/images/ecoinza/hero-crypto.png',
    },
  ],
  navLinks: [
    { id: 'save', label: 'Save' },
    { id: 'deposit-withdraw', label: 'Deposit' },
    { id: 'deposit-withdraw', label: 'Withdraw' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'security', label: 'Security' },
    { id: 'faq', label: 'FAQ' },
  ],
  features: [
    { title: 'Stable Savings', desc: "Convert GHS, NGN, KES and more into USDC and hold value that doesn't erode.", image: '/images/ecoinza/feature-stable-savings.png' },
    { title: 'Cross-Border Transfers', desc: 'Send money to Nigeria, Kenya, the UK, US and EU in seconds, not days.', image: '/images/ecoinza/feature-cross-border.png' },
    { title: 'Deposit & Withdraw', desc: 'Deposit and withdraw with both bank accounts and mobile money, whenever you need local cash.', image: '/images/ecoinza/feature-deposit-withdraw.png' },
    { title: 'Crypto Wallet', desc: 'Buy, hold and send USDC, BTC and ETH from one secure, simple wallet.', image: '/images/ecoinza/feature-crypto-wallet.png' },
    { title: 'Merchant Payments', desc: 'Accept stablecoin and mobile money payments for your business, instantly settled.', image: '/images/ecoinza/feature-merchant-payments.png' },
    { title: 'Multi-Currency Wallet', desc: 'Hold GHS, NGN, KES, USD and USDC side by side and switch between them freely.', image: '/images/ecoinza/feature-multi-currency.png' },
  ],
  inflationPoints: [
    { title: 'Convert idle balances', desc: 'Move local currency into USDC from one refined wallet experience.' },
    { title: 'Compare purchasing power', desc: 'See how stable dollar reserves perform against local value over time.' },
    { title: 'Cash out locally', desc: 'Withdraw through mobile money or bank rails when you need to spend.' },
    { title: 'Plan real-life needs', desc: 'Use reserves for emergency funds, business cash, school fees, or diaspora support.' },
  ],
  depositOptions: [
    { title: 'Mobile Money Deposit', desc: 'Fund from MTN MoMo, Vodafone Cash, AirtelTigo and supported wallets', icon: 'phone' },
    { title: 'Bank Account Deposit', desc: 'Transfer from a local bank account into your eCoinza wallet', icon: 'bank' },
    { title: 'Instant Wallet Credit', desc: 'See confirmed deposits reflected in your wallet balance', icon: 'wallet' },
    { title: 'Transparent Confirmation', desc: 'Review rates, fees, and status before funds move', icon: 'receipt' },
  ],
  withdrawOptions: [
    { title: 'Mobile Money Withdrawal', desc: 'Cash out directly to your supported MoMo wallet', icon: 'phone' },
    { title: 'Bank Account Withdrawal', desc: 'Settle funds back into your local bank account', icon: 'bank' },
    { title: 'Local Currency Conversion', desc: 'Convert from USDC before withdrawing to local rails', icon: 'swap' },
    { title: 'Withdrawal Tracking', desc: 'Follow each payout from request to completion', icon: 'status' },
  ],
  txHistory: [
    { step: '01', type: 'Buy', asset: 'USDC', label: 'Bought $300 USDC', amount: '+$300.00', status: 'Added to wallet', amountColor: '#FFFFFF', color: 'linear-gradient(135deg,#2775CA,#8AB4F8)' },
    { step: '02', type: 'Swap', asset: 'USDT', label: 'Swapped $120 USDT to GHS', amount: '-$120.00', status: 'Converted to local', amountColor: '#A7F3D0', color: 'linear-gradient(135deg,#26A17B,#A7F3D0)' },
    { step: '03', type: 'Send', asset: 'BTC', label: 'Sent 0.004 BTC', amount: '-0.004 BTC', status: 'Transfer complete', amountColor: '#F8D77A', color: 'linear-gradient(135deg,#F7931A,#F8D77A)' },
  ],
  cryptoAssets: [
    { symbol: 'BTC', name: 'Bitcoin', qty: '0.048 BTC', value: '$3,216.00', change: '+2.4%', grad: 'linear-gradient(135deg,#F7931A,#F8D77A)' },
    { symbol: 'ETH', name: 'Ethereum', qty: '0.82 ETH', value: '$2,747.00', change: '+1.8%', grad: 'linear-gradient(135deg,#627EEA,#C4B5FD)' },
    { symbol: 'USDT', name: 'Tether', qty: '1,180.00 USDT', value: '$1,180.00', change: 'Stable', grad: 'linear-gradient(135deg,#26A17B,#A7F3D0)' },
    { symbol: 'USDC', name: 'USD Coin', qty: '940.40 USDC', value: '$940.40', change: 'Stable', grad: 'linear-gradient(135deg,#2775CA,#8AB4F8)' },
    { symbol: 'BNB', name: 'BNB', qty: '0.64 BNB', value: '$372.00', change: '+0.9%', grad: 'linear-gradient(135deg,#F3BA2F,#FFF1B8)' },
    { symbol: 'SOL', name: 'Solana', qty: '1.42 SOL', value: '$71.00', change: '+3.1%', grad: 'linear-gradient(135deg,#14F195,#9945FF)' },
  ],
  cryptoActions: [
    { label: 'Buy', hint: 'Add assets', icon: 'buy', bg: 'rgba(45,212,191,0.14)', color: '#D7FFF5', border: 'rgba(45,212,191,0.32)' },
    { label: 'Sell', hint: 'Cash out', icon: 'sell', bg: 'rgba(248,215,122,0.14)', color: '#FFF1B8', border: 'rgba(248,215,122,0.32)' },
    { label: 'Send', hint: 'Transfer crypto', icon: 'send', bg: 'rgba(96,165,250,0.14)', color: '#DBEAFE', border: 'rgba(96,165,250,0.32)' },
    { label: 'Receive', hint: 'Get paid', icon: 'receive', bg: 'rgba(255,255,255,0.08)', color: '#F5F5F5', border: 'rgba(255,255,255,0.16)' },
  ],
  swapPoints: [
    'Real-time exchange rates with no hidden markups.',
    'Swap between local currency and stablecoins in seconds.',
    'Every conversion is transparent before you confirm.',
  ],
  currencies: [
    { code: 'GHS', label: 'Ghana Cedi', rate: 0.068 },
    { code: 'NGN', label: 'Nigerian Naira', rate: 0.00062 },
    { code: 'KES', label: 'Kenyan Shilling', rate: 0.0077 },
    { code: 'ZAR', label: 'South African Rand', rate: 0.055 },
    { code: 'USD', label: 'US Dollar', rate: 1 },
    { code: 'USDC', label: 'USD Coin', rate: 1 },
    { code: 'USDT', label: 'Tether', rate: 1 },
    { code: 'BTC', label: 'Bitcoin', rate: 67000 },
    { code: 'ETH', label: 'Ethereum', rate: 3350 },
    { code: 'BNB', label: 'BNB', rate: 580 },
    { code: 'SOL', label: 'Solana', rate: 50 },
  ],
  steps: [
    { n: '1', title: 'Join the waitlist', desc: 'Sign up in under a minute and secure early access.' },
    { n: '2', title: 'Create your wallet', desc: 'Verify your identity and set up your secure eCoinza wallet.' },
    { n: '3', title: 'Deposit with MoMo or bank', desc: 'Fund your wallet instantly from mobile money or your bank.' },
    { n: '4', title: 'Save, transfer, or trade', desc: 'Save in USDC, send money abroad, withdraw, or trade crypto.' },
  ],
  trustBadges: [
    { icon: 'lock', title: 'Encrypted Transactions', desc: 'Every transfer and balance is protected with modern encryption.' },
    { icon: 'id', title: 'KYC Ready', desc: 'Identity checks are designed for compliant account access.' },
    { icon: 'radar', title: 'Fraud Monitoring', desc: 'Automated monitoring helps flag suspicious activity early.' },
    { icon: 'wallet-shield', title: 'Secure Wallet', desc: 'Layered wallet controls help protect funds and access.' },
    { icon: 'receipt', title: 'Transparent Fees', desc: 'Rates and fees stay visible before you confirm.' },
    { icon: 'support', title: 'Account Recovery', desc: 'Guided recovery flows help users regain access safely.' },
  ],
  testimonials: [
    { name: 'Ama Owusu-Bempah', role: 'Textile Business Owner, Accra', quote: 'Keeping working capital in USDC means I no longer watch my margins shrink every quarter. eCoinza made it simple to protect what I earn.', avatarColor: 'linear-gradient(135deg,#FFFFFF,#262626)' },
    { name: 'Kwabena Mensah', role: 'Freelance Designer, Kumasi', quote: 'My international clients pay me in dollars and it lands in my wallet in seconds. No more waiting days for a wire transfer to clear.', avatarColor: 'linear-gradient(135deg,#8A8A8A,#4D4D4D)' },
    { name: 'Linda Adjei', role: 'Diaspora Nurse, London', quote: 'Sending money home to my family in Ghana used to cost so much and take forever. Now it takes seconds and they can cash out to MoMo instantly.', avatarColor: 'linear-gradient(135deg,#1A1A1A,#9CA3AF)' },
    { name: 'Chidi Okafor', role: 'Import Trader, Lagos', quote: 'I can keep supplier funds in stable dollars, then convert when I need naira liquidity. It gives my business a cleaner way to manage volatility.', avatarColor: 'linear-gradient(135deg,#2DD4BF,#0F766E)' },
    { name: 'Aisha Mwangi', role: 'Student, Nairobi', quote: 'Saving for tuition in USDC feels more predictable. I can still cash out locally when fees are due, but my balance is easier to plan around.', avatarColor: 'linear-gradient(135deg,#60A5FA,#1D4ED8)' },
  ],
  faqs: [
    { q: 'What is eCoinza?', a: 'eCoinza is a stablecoin-powered financial platform built for Africa, helping you save in stable digital dollars, transfer money across countries, deposit and withdraw funds, and access crypto from one wallet.' },
    { q: 'Is eCoinza a bank?', a: 'No. eCoinza is a fintech platform, not a licensed bank. We partner with regulated payment and custody providers to move and safeguard your funds.' },
    { q: 'What currencies can I save in?', a: 'You can hold and save in USDC, a US dollar-backed stablecoin, alongside your local currency such as GHS, NGN, or KES.' },
    { q: 'Can I deposit with mobile money?', a: 'Yes. You can fund your wallet instantly using MTN MoMo, Vodafone Cash, AirtelTigo Money, and other supported mobile money providers.' },
    { q: 'Can I withdraw to my bank account?', a: 'Yes. You can withdraw funds directly to any supported local bank account, usually settling within minutes.' },
    { q: 'Can I send money to other countries?', a: 'Yes. eCoinza supports transfers between Ghana, Nigeria, Kenya, South Africa, the UK, Europe, and the US.' },
    { q: 'Does eCoinza support crypto?', a: 'Yes. You can buy, sell, hold, and send USDC, Bitcoin, and Ethereum directly from your eCoinza wallet.' },
    { q: 'When will eCoinza launch?', a: "We're finalizing licensing and security review ahead of public launch. Join the waitlist to be notified the moment early access opens." },
  ],
  countryOptions: ['Ghana', 'Nigeria', 'Kenya', 'South Africa', 'United Kingdom', 'United States', 'European Union', 'Other'],
  userTypeOptions: ['Individual', 'Business Owner', 'Freelancer', 'Merchant', 'Student', 'Diaspora Sender'],
  interestOptions: ['Saving in USDC', 'Sending money across countries', 'Deposit and withdrawal', 'Crypto trading', 'Merchant payments', 'Business wallet'],
  footerProduct: [
    { id: 'save', label: 'Save in USDC' },
    { id: 'deposit-withdraw', label: 'Deposit & Withdraw' },
    { id: 'crypto', label: 'Crypto Wallet' },
    { id: 'security', label: 'Security' },
  ],
  footerExplore: ['Waitlist', 'How it works', 'Supported countries'],
  footerCompany: [
    { label: 'About eCoinza', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Help center', href: '/help-center' },
  ],
  footerLegal: ['Terms', 'Privacy', 'Risk disclosure'],
  socials: [
    { label: 'X', icon: 'x' },
    { label: 'LinkedIn', icon: 'linkedin' },
    { label: 'Instagram', icon: 'instagram' },
    { label: 'Telegram', icon: 'telegram' },
  ],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: y, behavior: 'smooth' });
  closeMobileMenu();
}

function closeMobileMenu() {
  state.mobileMenuOpen = false;
  const menu = $('[data-mobile-menu]');
  const toggle = $('[data-menu-toggle]');
  menu?.classList.remove('is-open');
  if (toggle) {
    toggle.textContent = '☰';
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function renderNav() {
  const html = data.navLinks.map((link) => `<button type="button" data-target="${link.id}">${escapeHtml(link.label)}</button>`).join('');
  $('[data-nav-links]').innerHTML = html;
  $('[data-mobile-menu]').innerHTML = `${html}<button type="button" data-target="waitlist">Join Waitlist</button>`;
}

function renderHero() {
  const slide = data.heroSlides[state.heroIndex];
  $('[data-hero-tag]').textContent = slide.tag;
  $('[data-hero-headline]').textContent = slide.headline;
  $('[data-hero-sub]').textContent = slide.sub;

  const image = $('[data-hero-image]');
  if (image.getAttribute('src') !== slide.image) {
    image.classList.add('is-changing');
    setTimeout(() => {
      image.src = slide.image;
      image.classList.remove('is-changing');
    }, 140);
  }

  $('[data-slide-dots]').innerHTML = data.heroSlides.map((_, index) => `<button class="${index === state.heroIndex ? 'is-active' : ''}" type="button" data-slide="${index}" aria-label="Show slide ${index + 1}"></button>`).join('');
  $$('[data-slide]').forEach((button) => button.addEventListener('click', () => {
    state.heroIndex = Number(button.dataset.slide);
    renderHero();
    resetAutoplay();
  }));

}

function nextSlide() {
  state.heroIndex = (state.heroIndex + 1) % data.heroSlides.length;
  renderHero();
}

function previousSlide() {
  state.heroIndex = (state.heroIndex - 1 + data.heroSlides.length) % data.heroSlides.length;
  renderHero();
  resetAutoplay();
}

let autoplay = null;
function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 6500);
}

let testimonialAutoplay = null;
function nextTestimonial() {
  state.testimonialDirection = 1;
  state.testimonialIndex = (state.testimonialIndex + 1) % data.testimonials.length;
  renderTestimonials();
}

function previousTestimonial() {
  state.testimonialDirection = -1;
  state.testimonialIndex = (state.testimonialIndex - 1 + data.testimonials.length) % data.testimonials.length;
  renderTestimonials();
}

function resetTestimonialAutoplay() {
  clearInterval(testimonialAutoplay);
  testimonialAutoplay = setInterval(nextTestimonial, 6200);
}

function renderSimpleLists() {
  $('[data-features]').innerHTML = data.features.map((feature) => `
    <article class="feature-card">
      <div class="feature-visual" aria-hidden="true"><img src="${feature.image}" alt=""></div>
      <h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.desc)}</p>
    </article>
  `).join('');

  $('[data-inflation-points]').innerHTML = data.inflationPoints.map((point) => `
    <div>
      <i></i>
      <span><strong>${escapeHtml(point.title)}</strong><small>${escapeHtml(point.desc)}</small></span>
    </div>
  `).join('');
  $('[data-swap-points]').innerHTML = data.swapPoints.map((point) => `<div><i></i><span>${escapeHtml(point)}</span></div>`).join('');
  $('[data-deposit-options]').innerHTML = moneyOptions(data.depositOptions);
  $('[data-withdraw-options]').innerHTML = moneyOptions(data.withdrawOptions);

  $('[data-tx-history]').innerHTML = data.txHistory.map((tx) => `
    <article>
      <span class="tx-step">${escapeHtml(tx.step)}</span>
      <div>
        <i style="background:${tx.color}">${cryptoIcon(tx.asset)}</i>
        <div><small>${escapeHtml(tx.type)} ${escapeHtml(tx.asset)}</small><strong>${escapeHtml(tx.label)}</strong><em>${escapeHtml(tx.status)}</em></div>
      </div>
      <strong style="color:${tx.amountColor}">${escapeHtml(tx.amount)}</strong>
    </article>
  `).join('');
  $('[data-crypto-assets]').innerHTML = data.cryptoAssets.map((asset) => `
    <article class="asset-row"><div><i style="background:${asset.grad}">${cryptoIcon(asset.symbol)}</i><div><strong>${escapeHtml(asset.name)}</strong><small>${escapeHtml(asset.qty)}</small></div></div><div class="asset-value"><strong>${escapeHtml(asset.value)}</strong><small>${escapeHtml(asset.change)}</small></div></article>
  `).join('');
  $('[data-crypto-actions]').innerHTML = data.cryptoActions.map((action) => `<button type="button" style="background:${action.bg};color:${action.color};border:1px solid ${action.border}"><i>${actionIcon(action.icon)}</i><span>${escapeHtml(action.label)}</span><small>${escapeHtml(action.hint)}</small></button>`).join('');

  $('[data-steps]').innerHTML = data.steps.map((step) => `<article class="step-card"><strong>${step.n}</strong><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.desc)}</p></article>`).join('');
  $('[data-trust-badges]').innerHTML = data.trustBadges.map((badge) => `<article class="badge-card"><div class="badge-icon">${trustIcon(badge.icon)}</div><h3>${escapeHtml(badge.title)}</h3><p>${escapeHtml(badge.desc)}</p></article>`).join('');
  renderTestimonials();
}

function renderTestimonials() {
  const active = data.testimonials[state.testimonialIndex];
  const previous = data.testimonials[(state.testimonialIndex - 1 + data.testimonials.length) % data.testimonials.length];
  const next = data.testimonials[(state.testimonialIndex + 1) % data.testimonials.length];
  $('[data-testimonials]').innerHTML = [previous, active, next].map((item, index) => `
    <article class="testimonial-card ${index === 1 ? 'is-active' : ''}" style="--testimonial-direction:${state.testimonialDirection}">
      <blockquote>${escapeHtml(item.quote)}</blockquote>
      <div class="person"><i style="background:${item.avatarColor}"></i><div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.role)}</span></div></div>
    </article>
  `).join('');
  $('[data-testimonial-dots]').innerHTML = data.testimonials.map((_, index) => `<button class="${index === state.testimonialIndex ? 'is-active' : ''}" type="button" data-testimonial-dot="${index}" aria-label="Show testimonial ${index + 1}"></button>`).join('');
  $$('[data-testimonial-dot]').forEach((button) => button.addEventListener('click', () => {
    const nextIndex = Number(button.dataset.testimonialDot);
    state.testimonialDirection = nextIndex >= state.testimonialIndex ? 1 : -1;
    state.testimonialIndex = nextIndex;
    renderTestimonials();
    resetTestimonialAutoplay();
  }));
}

function moneyOptions(options) {
  return options.map((option) => `
    <article class="money-option"><i>${moneyIcon(option.icon)}</i><div><strong>${escapeHtml(option.title)}</strong><span>${escapeHtml(option.desc)}</span></div></article>
  `).join('');
}

function moneyIcon(type) {
  const icons = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.8" width="10" height="18.4" rx="2.4"></rect><path d="M10 18h4"></path><path d="M10 6h4"></path></svg>',
    bank: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.5 12 4l8.5 5.5"></path><path d="M5 10h14"></path><path d="M7 10v7"></path><path d="M12 10v7"></path><path d="M17 10v7"></path><path d="M4.5 19h15"></path></svg>',
    wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h14.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16V8.5A2.5 2.5 0 0 1 5.5 6H17"></path><path d="M16 12h4.5"></path><path d="M8 13h4"></path></svg>',
    receipt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.8h12v16.4l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h3"></path></svg>',
    swap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h11"></path><path d="m15 4 3 3-3 3"></path><path d="M17 17H6"></path><path d="m9 14-3 3 3 3"></path></svg>',
    status: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0-9-9"></path><path d="m3 15 3 3 5-6"></path><path d="M12 7v5l3 2"></path></svg>',
  };
  return icons[type] || icons.wallet;
}

function cryptoIcon(symbol) {
  const icons = {
    BTC: '<svg class="crypto-logo crypto-logo-btc" viewBox="0 0 24 24" aria-label="Bitcoin"><path d="M9.2 4.2v15.6"></path><path d="M12.1 4.2v15.6"></path><path d="M7 7.1h7.1c1.7 0 2.8.9 2.8 2.2 0 1.1-.7 1.9-1.8 2.2 1.4.2 2.4 1.1 2.4 2.6 0 1.7-1.3 2.8-3.4 2.8H7"></path><path d="M7 11.5h6.5"></path></svg>',
    ETH: '<svg class="crypto-logo crypto-logo-eth" viewBox="0 0 24 24" aria-label="Ethereum"><path d="M12 2.8 5.4 12.1 12 15.9l6.6-3.8z"></path><path d="M5.4 12.1 12 9.1l6.6 3"></path><path d="M12 21.2 5.4 13.6 12 17.4l6.6-3.8z"></path></svg>',
    USDT: '<svg class="crypto-logo crypto-logo-usdt" viewBox="0 0 24 24" aria-label="Tether"><path d="M6 6h12"></path><path d="M12 6v10.8"></path><path d="M8.3 10.2h7.4"></path><path d="M5.8 12.4c1.4 1 3.6 1.6 6.2 1.6s4.8-.6 6.2-1.6"></path></svg>',
    USDC: '<svg class="crypto-logo crypto-logo-usdc" viewBox="0 0 24 24" aria-label="USD Coin"><circle cx="12" cy="12" r="7.4"></circle><path d="M9.5 14.3c.5.7 1.4 1.1 2.5 1.1 1.3 0 2.2-.6 2.2-1.5 0-2.2-4.2-.9-4.2-3.5 0-.9.8-1.7 2-1.7.9 0 1.7.3 2.2.9"></path><path d="M12 7.3v9.4"></path><path d="M6.2 8.2a8.7 8.7 0 0 0 0 7.6"></path><path d="M17.8 8.2a8.7 8.7 0 0 1 0 7.6"></path></svg>',
    BNB: '<svg class="crypto-logo crypto-logo-bnb" viewBox="0 0 24 24" aria-label="BNB"><path d="m12 3.5 3.1 3.1L12 9.7 8.9 6.6z"></path><path d="m6.6 8.9 3.1 3.1-3.1 3.1L3.5 12z"></path><path d="m17.4 8.9 3.1 3.1-3.1 3.1-3.1-3.1z"></path><path d="m12 14.3 3.1 3.1-3.1 3.1-3.1-3.1z"></path><path d="m12 10.2 1.8 1.8-1.8 1.8-1.8-1.8z"></path></svg>',
    SOL: '<svg class="crypto-logo crypto-logo-sol" viewBox="0 0 24 24" aria-label="Solana"><path d="M6.2 6.2h12l-2.4 2.6h-12z"></path><path d="M5.8 10.7h12l-2.4 2.6h-12z"></path><path d="M6.2 15.2h12l-2.4 2.6h-12z"></path></svg>',
  };
  return icons[symbol] || `<span>${escapeHtml(symbol)}</span>`;
}

function actionIcon(type) {
  const icons = {
    buy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
    sell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"></path><path d="M14 8l4 4-4 4"></path></svg>',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13"></path><path d="m13 7 5 5-5 5"></path></svg>',
    receive: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H6"></path><path d="m11 7-5 5 5 5"></path></svg>',
  };
  return icons[type] || icons.buy;
}

function trustIcon(type) {
  const icons = {
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path><path d="M12 14v2"></path></svg>',
    id: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M8 10h.01"></path><path d="M11 10h5"></path><path d="M8 14h8"></path></svg>',
    radar: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"></circle><path d="M12 12 17 7"></path><path d="M9 12a3 3 0 0 0 3 3"></path><path d="M5 19 3.5 20.5"></path><path d="M19 19l1.5 1.5"></path></svg>',
    'wallet-shield': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h14.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-7A2.5 2.5 0 0 1 5.5 6H17"></path><path d="M15 11.2 18 10l3 1.2v2.4c0 1.8-1.2 3.4-3 4.2-1.8-.8-3-2.4-3-4.2z"></path></svg>',
    receipt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.8h12v16.4l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h3"></path></svg>',
    support: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a8.5 8.5 0 1 0-8.5-8.5"></path><path d="M4 17v4h4"></path><path d="M9.5 10a2.5 2.5 0 1 1 3.9 2.1c-.9.6-1.4 1-1.4 2"></path><path d="M12 17h.01"></path></svg>',
  };
  return icons[type] || icons.lock;
}

function renderFaqs() {
  $('[data-faqs]').innerHTML = data.faqs.map((faq, index) => `
    <article class="faq-item ${index === state.faqOpen ? 'is-open' : ''}">
      <button class="faq-question" type="button" data-faq="${index}"><span>${escapeHtml(faq.q)}</span><span>+</span></button>
      <div class="faq-answer">${escapeHtml(faq.a)}</div>
    </article>
  `).join('');
  $$('[data-faq]').forEach((button) => button.addEventListener('click', () => {
    const index = Number(button.dataset.faq);
    state.faqOpen = state.faqOpen === index ? null : index;
    renderFaqs();
  }));
}

function renderSelect(select, options, placeholder, selected = '') {
  const placeholderOption = placeholder ? `<option value="">${escapeHtml(placeholder)}</option>` : '';
  select.innerHTML = `${placeholderOption}${options.map((option) => {
    const value = typeof option === 'string' ? option : option.code;
    const label = typeof option === 'string' ? option : option.code;
    return `<option value="${escapeHtml(value)}" ${value === selected ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('')}`;
}

function initWaitlist() {
  renderSelect($('[data-country-options]'), data.countryOptions, 'Select country');
  renderSelect($('[data-user-type-options]'), data.userTypeOptions, 'Select one');
  renderSelect($('[data-interest-options]'), data.interestOptions, 'What brings you to eCoinza?');
  updateWaitlistCount();

  $('[data-waitlist-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const errors = validateForm(values);
    showErrors(errors);
    if (Object.keys(errors).length) return;

    state.submitting = true;
    $('[data-submit-label]').textContent = 'Joining...';
    $('[data-submit-label]').style.opacity = '0.75';
    setTimeout(() => submitWaitlist(values, form), 800);
  });
  $('[data-reset-form]').addEventListener('click', resetForm);
}

function validateForm(form) {
  const errors = {};
  if (!form.fullName || form.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email || '')) errors.email = 'Please enter a valid email address.';
  if (!form.phone || form.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!form.country) errors.country = 'Please select your country.';
  if (!form.userType) errors.userType = 'Please tell us what best describes you.';
  if (!form.interest) errors.interest = 'Please select your main interest.';
  return errors;
}

function showErrors(errors) {
  $$('.field').forEach((field) => field.classList.remove('has-error'));
  $$('[data-error-for]').forEach((slot) => {
    slot.textContent = errors[slot.dataset.errorFor] || '';
    if (errors[slot.dataset.errorFor]) slot.closest('.field').classList.add('has-error');
  });
}

function submitWaitlist(values, form) {
  try {
    const list = JSON.parse(localStorage.getItem('ecoinza_waitlist') || '[]');
    list.push({ ...values, submittedAt: new Date().toISOString() });
    localStorage.setItem('ecoinza_waitlist', JSON.stringify(list));
    state.waitlistExtra = list.length;
  } catch (error) {
    state.waitlistExtra += 1;
  }
  state.submitting = false;
  state.submitted = true;
  updateWaitlistCount();
  $('[data-waitlist-form]').hidden = true;
  $('[data-success-card]').hidden = false;
  $('[data-success-message]').textContent = `Thanks, ${values.fullName}. We'll email ${values.email} the moment eCoinza opens for early access.`;
  showPageToast();
  form.reset();
  $('[data-submit-label]').textContent = 'Join the eCoinza Waitlist';
  $('[data-submit-label]').style.opacity = '1';
}

function resetForm() {
  state.submitted = false;
  $('[data-success-card]').hidden = true;
  $('[data-waitlist-form]').hidden = false;
  showErrors({});
}

function updateWaitlistCount() {
  try {
    const list = JSON.parse(localStorage.getItem('ecoinza_waitlist') || '[]');
    if (Array.isArray(list)) state.waitlistExtra = list.length;
  } catch (error) {
    state.waitlistExtra = 0;
  }
  $('[data-waitlist-count]').textContent = `${(2847 + state.waitlistExtra).toLocaleString()} people already joined`;
}

function showPageToast() {
  const toast = $('[data-page-toast]');
  toast.hidden = false;
  setTimeout(() => { toast.hidden = true; }, 4500);
}

function initSwap() {
  const fromSelect = $('[data-swap-from]');
  const toSelect = $('[data-swap-to]');
  const amountInput = $('[data-swap-amount]');
  const flipButton = $('[data-swap-flip]');
  const swapForm = $('[data-swap-form]');

  renderSelect(fromSelect, data.currencies, '', state.swapFrom);
  renderSelect(toSelect, data.currencies, '', state.swapTo);
  amountInput.value = state.swapAmount;

  fromSelect.addEventListener('change', (event) => {
    state.swapFrom = event.target.value || data.currencies[0].code;
    syncSwapControls();
    updateSwap();
  });
  toSelect.addEventListener('change', (event) => {
    state.swapTo = event.target.value || data.currencies[1].code;
    syncSwapControls();
    updateSwap();
  });
  amountInput.addEventListener('input', (event) => {
    const nextValue = event.target.value.replaceAll(',', '');
    if (nextValue === '' || /^\d*\.?\d*$/.test(nextValue)) {
      event.target.value = nextValue;
      state.swapAmount = event.target.value;
    } else {
      event.target.value = state.swapAmount;
    }
    updateSwap();
  });
  flipButton.addEventListener('click', () => {
    const from = state.swapFrom;
    state.swapFrom = state.swapTo;
    state.swapTo = from;
    flipButton.classList.add('is-flipping');
    setTimeout(() => flipButton.classList.remove('is-flipping'), 400);
    syncSwapControls();
    updateSwap();
  });
  swapForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const toast = $('[data-swap-toast]');
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 3200);
  });
  updateSwap();
}

function syncSwapControls() {
  const fromSelect = $('[data-swap-from]');
  const toSelect = $('[data-swap-to]');
  if (!data.currencies.some((currency) => currency.code === state.swapFrom)) state.swapFrom = data.currencies[0].code;
  if (!data.currencies.some((currency) => currency.code === state.swapTo)) state.swapTo = data.currencies[1].code;
  fromSelect.value = state.swapFrom;
  toSelect.value = state.swapTo;
  $('[data-swap-amount]').value = state.swapAmount;
}

function updateSwap() {
  const from = data.currencies.find((currency) => currency.code === state.swapFrom) || data.currencies[0];
  const to = data.currencies.find((currency) => currency.code === state.swapTo) || data.currencies[1];
  const amount = parseFloat(state.swapAmount) || 0;
  const converted = to.rate > 0 ? (amount * from.rate) / to.rate : 0;
  $('[data-swap-output]').textContent = formatAmount(converted, to.code);
  $('[data-swap-rate]').textContent = `1 ${from.code} ≈ ${formatAmount(from.rate / to.rate, to.code)} ${to.code}`;
}

function formatAmount(value, code) {
  if (['BTC', 'ETH', 'BNB', 'SOL'].includes(code)) {
    if (value === 0) return '0';
    return value.toLocaleString(undefined, {
      minimumFractionDigits: value < 1 ? 6 : 2,
      maximumFractionDigits: value < 1 ? 8 : 4,
    });
  }
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function renderFooter() {
  $('[data-footer-product]').innerHTML = data.footerProduct.map((link) => `<button class="link-button" type="button" data-target="${link.id}">${escapeHtml(link.label)}</button>`).join('');
  $('[data-footer-explore]').innerHTML = data.footerExplore.map((label) => `<button class="link-button" type="button">${escapeHtml(label)}</button>`).join('');
  $('[data-footer-company]').innerHTML = data.footerCompany.map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`).join('');
  $('[data-footer-legal]').innerHTML = data.footerLegal.map((label) => `<button class="link-button" type="button">${escapeHtml(label)}</button>`).join('');
  $('[data-socials]').innerHTML = data.socials.map((social) => `<span aria-label="${escapeHtml(social.label)}" title="${escapeHtml(social.label)}">${socialIcon(social.icon)}</span>`).join('');
  buildFooterMap();
}

function socialIcon(type) {
  const icons = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 16 16"></path><path d="M20 4 4 20"></path></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 10v8"></path><path d="M6.5 6v.01"></path><path d="M11 18v-8"></path><path d="M11 13.5c0-2 1.2-3.5 3.2-3.5 1.9 0 3.3 1.3 3.3 3.8V18"></path></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"></rect><circle cx="12" cy="12" r="3.2"></circle><path d="M16.6 7.4h.01"></path></svg>',
    telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 5 4 11.5l6 2.2L17 8l-5.2 7.4L16 19z"></path></svg>',
  };
  return icons[type] || icons.x;
}

function buildFooterMap() {
  $('[data-footer-map]').innerHTML = `
    <defs>
      <pattern id="ecoinzaFooterDots" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.15" fill="rgba(248,215,122,0.82)"></circle>
        <circle cx="6.8" cy="6.8" r="0.72" fill="rgba(45,212,191,0.32)"></circle>
      </pattern>
      <linearGradient id="ecoinzaFooterGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(248,215,122,0.18)"></stop>
        <stop offset="38%" stop-color="rgba(248,215,122,0.54)"></stop>
        <stop offset="74%" stop-color="rgba(255,241,184,0.62)"></stop>
        <stop offset="100%" stop-color="rgba(45,212,191,0.22)"></stop>
      </linearGradient>
      <mask id="ecoinzaFooterWordMask">
        <rect width="1400" height="460" fill="black"></rect>
        <text x="700" y="440" text-anchor="middle" fill="white" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="380" font-weight="800" letter-spacing="-21">eCoinza</text>
      </mask>
    </defs>
    <rect width="1400" height="460" fill="url(#ecoinzaFooterDots)" mask="url(#ecoinzaFooterWordMask)"></rect>
    <rect width="1400" height="460" fill="url(#ecoinzaFooterGlow)" mask="url(#ecoinzaFooterWordMask)" opacity="0.5"></rect>
  `;
}

function bindStaticControls() {
  bindScrollTargets();
  $('[data-prev-slide]').addEventListener('click', previousSlide);
  $('[data-next-slide]').addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });
  $('[data-testimonial-prev]').addEventListener('click', () => {
    previousTestimonial();
    resetTestimonialAutoplay();
  });
  $('[data-testimonial-next]').addEventListener('click', () => {
    nextTestimonial();
    resetTestimonialAutoplay();
  });
  $('[data-menu-toggle]').addEventListener('click', (event) => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    $('[data-mobile-menu]').classList.toggle('is-open', state.mobileMenuOpen);
    event.currentTarget.textContent = state.mobileMenuOpen ? '✕' : '☰';
    event.currentTarget.setAttribute('aria-expanded', String(state.mobileMenuOpen));
  });
}

function bindScrollTargets() {
  $$('[data-target]').forEach((button) => {
    if (button.dataset.boundScroll === 'true') return;
    button.dataset.boundScroll = 'true';
    button.addEventListener('click', () => scrollToSection(button.dataset.target));
  });
}

function initActiveNavigation() {
  const sectionIds = [...new Set(data.navLinks.map((link) => link.id))];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const setActive = () => {
    const current = sections.reduce((active, section) => {
      const top = section.getBoundingClientRect().top;
      return top <= 140 ? section.id : active;
    }, sections[0].id);

    $$('[data-nav-links] [data-target]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.target === current);
    });
  };

  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
}

function initRevealAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = [
    '.section-heading',
    '.split-grid > *',
    '.hero-proof > div',
    '.feature-card',
    '.value-metrics > div',
    '.value-copy .point-list > div',
    '.value-card',
    '.rail-overview > div',
    '.money-card',
    '.money-flow > *',
    '.crypto-wallet',
    '.asset-row',
    '.crypto-actions > button',
    '.tx-list > article',
    '.swap-card',
    '.swap-section .point-list > div',
    '.step-card',
    '.badge-card',
    '.testimonial-carousel',
    '.faq-item',
    '.waitlist-form',
    '.success-card',
    '.footer-grid > div',
    '.footer-bottom',
    '.footer-map',
  ];
  const elements = $$(selectors.join(',')).filter((element) => !element.closest('.hero-grid'));

  elements.forEach((element, index) => {
    element.classList.add('reveal-motion');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderSimpleLists();
  renderFaqs();
  renderFooter();
  bindScrollTargets();
  initWaitlist();
  initSwap();
  bindStaticControls();
  initActiveNavigation();
  initRevealAnimations();
  resetAutoplay();
  resetTestimonialAutoplay();
});
