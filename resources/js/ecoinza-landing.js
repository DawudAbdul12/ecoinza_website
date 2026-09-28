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

const hiddenSectionIds = new Set(['deposit-withdraw', 'crypto']);

function isVisibleTarget(id) {
  return !hiddenSectionIds.has(id);
}

function visibleLinks(links) {
  return links.filter((link) => isVisibleTarget(link.id));
}

function visibleSections(sections) {
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => isVisibleTarget(item.id)),
    }))
    .filter((section) => section.items.length > 0);
}

const data = {
  heroSlides: [
    {
      tag: 'Save',
      headline: 'Save beyond inflation.',
      headlineLines: ['Save beyond', 'Inflation.'],
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
    { id: 'features', label: 'Products' },
    { id: 'save', label: 'Business Wallet' },
    { id: 'deposit-withdraw', label: 'Money Movement' },
    { id: 'crypto', label: 'Stablecoins & Crypto' },
    { id: 'security', label: 'Security' },
    { id: 'faq', label: 'FAQ' },
  ],
  navPrimary: [],
  navProductSections: [
    {
      label: 'Products',
      items: [
        { id: 'features', href: '/checkout', title: 'Checkout', desc: 'Let customers pay with local rails or stablecoins from one checkout flow.', icon: 'checkout', details: ['Accept mobile money, bank, card-ready, and stablecoin payment methods through one business checkout.', 'Keep payment status, customer references, settlement currency, and receipts together for easier reconciliation.'] },
        { id: 'save', title: 'Wallet', desc: 'Hold working capital in local currency, USD, and stable digital dollars.', icon: 'wallet', details: ['Separate operational balances for daily spending, collections, supplier funds, and dollar reserves.', 'Give teams a clearer view of what is available, what is pending, and what is ready to move.'] },
        { id: 'deposit-withdraw', title: 'Movement', desc: 'Move money between banks, MoMo, wallets, and cross-border corridors.', icon: 'movement', details: ['Route funds through supported local rails while keeping a record of each step.', 'Use one operating layer for collections, internal transfers, and payouts across markets.'] },
        { id: 'save', title: 'Convert', desc: 'Switch between GHS, USD, USDC, and supported currencies with visible rates.', icon: 'convert', details: ['Show exchange rates before a conversion is confirmed, so finance teams can act with confidence.', 'Move from local currency to stable digital dollars when preserving value matters.'] },
        { id: 'features', title: 'Cards', desc: 'Turn wallet balances into spend controls for online tools and travel.', icon: 'card', details: ['Create controlled spending workflows for ads, software subscriptions, supplier payments, and travel.', 'Set up clearer limits, records, and funding paths as card features become available.'] },
        { id: 'features', title: 'Requests', desc: 'Create payment links and invoices for clients, suppliers, and collections.', icon: 'request', details: ['Send a simple payment request when a customer or partner needs to pay from any supported rail.', 'Track whether a request is pending, paid, expired, or needs follow-up.'] },
        { id: 'features', title: 'Billing', desc: 'Manage recurring collections for subscriptions, retainers, and memberships.', icon: 'billing', details: ['Support repeat payments for service businesses, communities, schools, SaaS tools, and merchant groups.', 'Keep billing cycles, customer references, and collection attempts organized in one place.'] },
        { id: 'features', title: 'Expense', desc: 'Track team spending, settlement trails, and reconciliation from one view.', icon: 'expense', details: ['Connect payments and wallet activity to cleaner internal expense records.', 'Help finance teams compare money in, money out, fees, balances, and settlement outcomes.'] },
      ],
    },
    {
      label: 'Embedded Finance',
      items: [
        { id: 'features', title: 'Account', desc: 'Create verified customer or business accounts inside your own platform.', icon: 'account', details: ['Build onboarding around identity, business profile, compliance status, and account permissions.', 'Use verified accounts as the base for wallets, collections, conversions, and payouts.'] },
        { id: 'save', title: 'Embedded Wallet', desc: 'Offer branded balances for fiat, stablecoins, collections, and payouts.', icon: 'wallet-plus', details: ['Add wallet balances to your own product without rebuilding the money movement layer from scratch.', 'Let users hold, receive, convert, and prepare funds for payout inside your platform experience.'] },
        { id: 'deposit-withdraw', title: 'Payouts', desc: 'Automate supplier, creator, payroll, and marketplace disbursements.', icon: 'movement', details: ['Send funds to supported recipients with clearer payout status and records.', 'Useful for marketplaces, creator platforms, payroll workflows, and supplier settlement.'] },
        { id: 'features', title: 'Issuing', desc: 'Provision virtual cards for spend management, ads, and global tools.', icon: 'issuing', details: ['Connect wallet value to controlled virtual card workflows for business operations.', 'Support spend use cases like digital ads, subscriptions, procurement, and team allowances.'] },
      ],
    },
  ],
  navSolutionSections: [
    {
      label: 'Industries',
      items: [
        { id: 'deposit-withdraw', title: 'Travel', desc: 'Collect bookings locally while holding supplier funds in stable value.', icon: 'travel' },
        { id: 'features', title: 'Payroll', desc: 'Pay distributed teams and contractors across currencies with clearer records.', icon: 'payroll' },
        { id: 'deposit-withdraw', title: 'B2B Trading', desc: 'Settle import, export, and supplier invoices without slow wire cycles.', icon: 'trading' },
        { id: 'features', title: 'Digital Ads', desc: 'Fund ad accounts and campaign spend without repeated card friction.', icon: 'ads' },
        { id: 'features', title: 'eCommerce', desc: 'Accept local payments, settle globally, and pay sellers from one wallet.', icon: 'ecommerce' },
      ],
    },
  ],
  navCompanySections: [
    {
      label: 'Company',
      items: [
        { id: 'security', title: 'About Us', desc: 'Why Ecoinza exists and the businesses we are building for.', icon: 'about' },
        { id: 'security', title: 'Licenses', desc: 'Our approach to regulated operations, KYB, KYC, and partner rails.', icon: 'licenses' },
        { id: 'waitlist', title: 'Careers', desc: 'Help build practical financial infrastructure for African businesses.', icon: 'careers' },
      ],
    },
    {
      label: 'Resource',
      items: [
        { id: 'faq', title: 'Blog', desc: 'Guides on stablecoin settlement, local rails, and business payments.', icon: 'blog' },
        { id: 'faq', title: 'Newsroom', desc: 'Product updates, launch notes, partnerships, and market announcements.', icon: 'newsroom' },
        { id: 'security', title: 'Industry Whitepaper', desc: 'Research on African trade, stable value, and cross-border liquidity.', icon: 'whitepaper' },
        { id: 'faq', title: 'FAQs', desc: 'Answers on deposits, withdrawals, wallet safety, rates, and access.', icon: 'faq' },
      ],
    },
  ],
  navDeveloperSections: [
    {
      label: 'Documentation',
      items: [
        { id: 'features', title: 'Product Documentation', desc: 'Reference guides for wallets, checkout, transfers, and webhooks.', icon: 'docs' },
        { id: 'faq', title: 'Getting Started', desc: 'Integration basics, test flows, API keys, and sandbox setup.', icon: 'getting-started' },
      ],
    },
    {
      label: 'Quick Links',
      items: [
        { id: 'features', title: 'Accounts', desc: 'Build onboarding and balance management into your product.', icon: 'account' },
        { id: 'deposit-withdraw', title: 'Payouts', desc: 'Trigger wallet, bank, MoMo, and stablecoin payouts programmatically.', icon: 'movement' },
        { id: 'features', title: 'Issuing', desc: 'Connect card creation, limits, and transaction controls to your app.', icon: 'card' },
      ],
    },
  ],
  navUtility: [
    { id: 'security', label: 'Compliance' },
    { id: 'faq', label: 'Resources' },
  ],
  navMegaSummaries: {
    products: {
      title: 'Products',
      desc: 'One platform for wallets, collections, conversions, payouts, and settlement.',
    },
    solutions: {
      title: 'Solutions',
      desc: 'Purpose-built payment workflows for teams moving money across markets.',
    },
    company: {
      title: 'Company',
      desc: 'Learn about Ecoinza, our compliance posture, resources, and support.',
    },
    developers: {
      title: 'Developers',
      desc: 'Build accounts, payouts, checkout, and issuing into your product.',
    },
  },
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
  userTypeOptions: ['Individual', 'Business Owner', 'Digital Creator', 'Merchant', 'Student', 'Diaspora Sender'],
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

function navProductIcon(type) {
  const icons = {
    checkout: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5h8.5l2.5 2.5v5.5"></path><path d="M7 4.5A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h4.5"></path><path d="M14.5 4.5V8H18"></path><path d="m14 17 2 2 4-5"></path></svg>',
    wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h14.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16V8.5A2.5 2.5 0 0 1 5.5 6H17"></path><path d="M16 12h4.5"></path><path d="M8 13h4"></path></svg>',
    movement: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5h6.5l4-3.8a2 2 0 0 1 2.7 0"></path><path d="M8 14.5h4.6a1.6 1.6 0 0 0 0-3.2H10"></path><path d="M15 17.5h2.2l3.8-3.8"></path><path d="M12 5.5h5"></path><path d="M14.5 3v5"></path></svg>',
    convert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 8.5A6 6 0 0 0 7 6.5L5.5 8"></path><path d="M5.5 8h4"></path><path d="M6.5 15.5A6 6 0 0 0 17 17.5l1.5-1.5"></path><path d="M14.5 16h4"></path></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"></rect><path d="M4 10h16"></path><path d="M7 15h3"></path></svg>',
    request: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h9l3 3v5"></path><path d="M15 4.5V8h3"></path><path d="M6 4.5A2 2 0 0 0 4 6.5v11A2 2 0 0 0 6 19.5h6"></path><path d="m15 18 4-4"></path><path d="M16 14h3v3"></path></svg>',
    billing: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="11" height="14" rx="2"></rect><path d="M8 9h5"></path><path d="M8 13h3"></path><path d="m14 17 5-3"></path><path d="m19 14-1 4"></path></svg>',
    expense: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="10" cy="7" rx="5" ry="2.4"></ellipse><path d="M5 7v5c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4V7"></path><path d="M9 14.5v2.5c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4v-5"></path><path d="M14 11.6c2.8 0 5 1.1 5 2.4s-2.2 2.4-5 2.4"></path></svg>',
    account: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"></circle><path d="M4.5 11h13"></path><path d="M11 5c1.8 1.7 2.7 3.7 2.7 6s-.9 4.3-2.7 6"></path><path d="M11 5c-1.8 1.7-2.7 3.7-2.7 6s.9 4.3 2.7 6"></path><path d="M18 15.5v5"></path><path d="M15.5 18h5"></path></svg>',
    'wallet-plus': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h14.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16V8.5A2.5 2.5 0 0 1 5.5 6H17"></path><path d="M16 12h4.5"></path><path d="M8 13h4"></path><path d="M16.5 16v4"></path><path d="M14.5 18h4"></path></svg>',
    issuing: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"></rect><path d="M4 10h16"></path><path d="m10 15-1.5-1.5L10 12"></path><path d="m14 15 1.5-1.5L14 12"></path></svg>',
    travel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 11 17-6-6 17-3.4-7.1z"></path><path d="m11.1 14.9 4.2-4.2"></path><path d="M7 7.5 4.5 5"></path><path d="M10 6.5 8 3.5"></path></svg>',
    payroll: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11.5" cy="10.5" r="5.5"></circle><path d="M11.5 8.2v4.6"></path><path d="M9.7 10.5h3.6"></path><path d="M6.5 19.5c1.1-2.1 2.8-3.2 5-3.2"></path><path d="M16.5 15.5 19 18l-2.5 2.5"></path></svg>',
    trading: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16"></path><path d="M6 17v-5.5l6-3.5 6 3.5V17"></path><path d="M9 17v-4h6v4"></path><path d="M8 8V5.5h8V8"></path></svg>',
    ads: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"></circle><path d="m12 12 4-4"></path><path d="m16 8 .2 3.2"></path><path d="M16 8h-3.2"></path><path d="M8.5 16.2a5.2 5.2 0 0 0 7.4-7.4"></path></svg>',
    ecommerce: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 18.5V8.8A2.8 2.8 0 0 1 9.3 6h7.2A2.5 2.5 0 0 1 19 8.5V16"></path><path d="M6.5 18.5h7"></path><path d="M15 14h5v6h-5z"></path><path d="M10 6V4.8A2.8 2.8 0 0 1 12.8 2h.7"></path></svg>',
    about: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="7" r="2.3"></circle><path d="M5.5 18.5v-1.4c0-2.4 1.8-4.1 4.5-4.1"></path><path d="M15.6 19.2 12 16.1a2.3 2.3 0 1 1 3.4-3.1l.2.2.2-.2a2.3 2.3 0 1 1 3.4 3.1z"></path></svg>',
    licenses: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="7" r="2.3"></circle><path d="M5.5 18.5v-1.4c0-2.4 1.8-4.1 4.5-4.1h1"></path><path d="m14 16.5 2 2 4-5"></path></svg>',
    careers: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="12" height="14" rx="2"></rect><path d="M8 9h6"></path><circle cx="17" cy="15.5" r="2.2"></circle><path d="M13.5 21c.6-1.8 1.8-2.7 3.5-2.7s2.9.9 3.5 2.7"></path></svg>',
    blog: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17V8a2 2 0 0 1 2-2h8v12H9a2 2 0 0 1-2-2"></path><path d="M5 10v7a2 2 0 0 0 2 2h10"></path><path d="M10 10h4"></path><path d="M10 14h3"></path></svg>',
    newsroom: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="12" height="14" rx="2"></rect><path d="M9 9h6"></path><path d="M9 13h4"></path></svg>',
    whitepaper: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16.5V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7.5"></path><path d="m8 15 2-2 2 2 2-2 2 2"></path><path d="M8.5 19h7"></path><path d="M9 11h.01"></path><path d="M15 11h.01"></path></svg>',
    faq: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M9.8 9.8a2.4 2.4 0 1 1 3.3 2.2c-.8.4-1.1.9-1.1 1.8"></path><path d="M12 16.8h.01"></path></svg>',
    docs: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 18.5v-11A2.5 2.5 0 0 1 8 5h8.5a2 2 0 0 1 2 2v11.5H8a2.5 2.5 0 0 1-2.5-2.5"></path><path d="M8 18.5V7"></path><path d="M12 10v5"></path><path d="M9.5 12.5h5"></path></svg>',
    'getting-started': '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5.5" r="2.2"></circle><path d="M12 8v10"></path><path d="M8.5 11.5h7"></path><path d="M8 18h3"></path><path d="M13 18h3"></path><path d="m16.5 10 2.5-2.5"></path><path d="m19 7.5-.2 3"></path></svg>',
  };

  return icons[type] || icons.wallet;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) {
    window.location.href = `/#${encodeURIComponent(id)}`;
    return;
  }
  const y = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: y, behavior: 'smooth' });
  closeMobileMenu();
}

function closeMobileMenu() {
  state.mobileMenuOpen = false;
  const menu = $('[data-mobile-menu]');
  const toggle = $('[data-menu-toggle]');
  menu?.classList.remove('is-open');
  document.body.classList.remove('mobile-menu-active');
  if (toggle) {
    toggle.textContent = '☰';
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function closeDesktopMenus(except = null) {
  $$('[data-nav-links] .nav-menu-item').forEach((item) => {
    if (item !== except) {
      item.classList.remove('is-open');
      item.querySelector('.nav-menu-trigger')?.setAttribute('aria-expanded', 'false');
    }
  });
}

function renderNav() {
  const renderMenuAction = (item) => {
    const content = `
      <i>${navProductIcon(item.icon)}</i>
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.desc)}</small>
      </span>
    `;

    return item.href
      ? `<a href="${escapeHtml(item.href)}">${content}</a>`
      : `<button type="button" data-target="${item.id}">${content}</button>`;
  };

  const renderMegaMenu = ({ label, sections, variant }) => `
    <div class="nav-menu-item nav-${variant}-item">
      <button class="nav-menu-trigger nav-${variant}-trigger" type="button" aria-haspopup="true">
        ${escapeHtml(label)}
        <span aria-hidden="true"></span>
      </button>
      <div class="nav-dropdown nav-mega-dropdown nav-${variant}-dropdown">
        ${variant === 'products' ? '' : `
          <aside class="nav-mega-summary">
            <strong>${escapeHtml(data.navMegaSummaries[variant].title)}</strong>
            <p>${escapeHtml(data.navMegaSummaries[variant].desc)}</p>
          </aside>
        `}
        <div class="nav-mega-content">
          ${sections.map((section) => `
            <div class="nav-product-section">
              <h3>${escapeHtml(section.label)}</h3>
              <div class="nav-product-list">
                ${section.items.map(renderMenuAction).join('')}
              </div>
            </div>
            `).join('')}
          </div>
      </div>
    </div>
  `;
  const productSections = visibleSections(data.navProductSections);
  const solutionSections = visibleSections(data.navSolutionSections);
  const companySections = visibleSections(data.navCompanySections);
  const developerSections = visibleSections(data.navDeveloperSections);
  const productMenu = renderMegaMenu({ label: 'Products', sections: productSections, variant: 'products' });
  const solutionsMenu = renderMegaMenu({ label: 'Solutions', sections: solutionSections, variant: 'solutions' });
  const companyMenu = renderMegaMenu({ label: 'Company', sections: companySections, variant: 'company' });
  const developersMenu = renderMegaMenu({ label: 'Developers', sections: developerSections, variant: 'developers' });
  const primary = visibleLinks(data.navPrimary).map((link) => `<button type="button" data-target="${link.id}">${escapeHtml(link.label)}<span aria-hidden="true"></span></button>`).join('');
  const mobileMenus = [
    { label: 'Products', sections: productSections },
    { label: 'Solutions', sections: solutionSections },
    { label: 'Company', sections: companySections },
    { label: 'Developers', sections: developerSections },
  ];
  const mobileGroups = mobileMenus.map((menu) => `
    <div class="mobile-menu-group">
      <button class="mobile-menu-heading" data-mobile-accordion type="button" aria-expanded="false">
        ${escapeHtml(menu.label)}
        <span aria-hidden="true"></span>
      </button>
      <div class="mobile-menu-panel">
        ${menu.sections.map((section) => `
          <div class="mobile-menu-section">
            <span>${escapeHtml(section.label)}</span>
            ${section.items.map(renderMenuAction).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  $('[data-nav-links]').innerHTML = `${productMenu}${solutionsMenu}${companyMenu}${developersMenu}<div class="nav-utility">${primary}</div>`;
  $('[data-mobile-menu]').innerHTML = `
    ${mobileGroups}
    <div class="mobile-menu-actions">
      <button type="button" data-target="waitlist">Join Waitlist</button>
    </div>
  `;
}

function renderHero() {
  if (!$('[data-hero-tag]')) return;
  const slide = data.heroSlides[state.heroIndex];
  $('[data-hero-tag]').textContent = slide.tag;
  $('[data-hero-headline]').innerHTML = (slide.headlineLines || [slide.headline]).map(escapeHtml).join('<br>');
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
  if (!$('[data-hero-tag]')) return;
  state.heroIndex = (state.heroIndex + 1) % data.heroSlides.length;
  renderHero();
}

function previousSlide() {
  if (!$('[data-hero-tag]')) return;
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
  const platformFeatures = $('[data-platform-features]');
  if (platformFeatures) {
    platformFeatures.innerHTML = visibleSections(data.navProductSections).flatMap((section) => (
      section.items.map((item) => `
        <article class="feature-menu-card">
          <figure aria-hidden="true">
            <i>${navProductIcon(item.icon)}</i>
            <span>${escapeHtml(section.label)}</span>
          </figure>
          <div>
            <span>${escapeHtml(section.label)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            ${item.details ? `
              <ul class="feature-points">
                ${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}
              </ul>
            ` : ''}
            ${item.href
              ? `<a class="link-button" href="${escapeHtml(item.href)}">Explore ${escapeHtml(item.title)}</a>`
              : `<button class="link-button js-scroll" data-target="${escapeHtml(item.id)}" type="button">Explore ${escapeHtml(item.title)}</button>`
            }
          </div>
        </article>
      `)
    )).join('');
  }

  const featureGrid = $('[data-features]');
  if (featureGrid) {
    featureGrid.innerHTML = data.features.map((feature) => `
      <article class="feature-card">
        <div class="feature-visual" aria-hidden="true"><img src="${feature.image}" alt=""></div>
        <h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.desc)}</p>
      </article>
    `).join('');
  }

  const inflationPoints = $('[data-inflation-points]');
  if (inflationPoints) {
    inflationPoints.innerHTML = data.inflationPoints.map((point) => `
      <div>
        <i></i>
        <span><strong>${escapeHtml(point.title)}</strong><small>${escapeHtml(point.desc)}</small></span>
      </div>
    `).join('');
  }

  const swapPoints = $('[data-swap-points]');
  if (swapPoints) swapPoints.innerHTML = data.swapPoints.map((point) => `<div><i></i><span>${escapeHtml(point)}</span></div>`).join('');

  const depositOptions = $('[data-deposit-options]');
  if (depositOptions) depositOptions.innerHTML = moneyOptions(data.depositOptions);

  const withdrawOptions = $('[data-withdraw-options]');
  if (withdrawOptions) withdrawOptions.innerHTML = moneyOptions(data.withdrawOptions);

  const txHistory = $('[data-tx-history]');
  if (txHistory) {
    txHistory.innerHTML = data.txHistory.map((tx) => `
      <article>
        <span class="tx-step">${escapeHtml(tx.step)}</span>
        <div>
          <i style="background:${tx.color}">${cryptoIcon(tx.asset)}</i>
          <div><small>${escapeHtml(tx.type)} ${escapeHtml(tx.asset)}</small><strong>${escapeHtml(tx.label)}</strong><em>${escapeHtml(tx.status)}</em></div>
        </div>
        <strong style="color:${tx.amountColor}">${escapeHtml(tx.amount)}</strong>
      </article>
    `).join('');
  }

  const cryptoAssets = $('[data-crypto-assets]');
  if (cryptoAssets) {
    cryptoAssets.innerHTML = data.cryptoAssets.map((asset) => `
      <article class="asset-row"><div><i style="background:${asset.grad}">${cryptoIcon(asset.symbol)}</i><div><strong>${escapeHtml(asset.name)}</strong><small>${escapeHtml(asset.qty)}</small></div></div><div class="asset-value"><strong>${escapeHtml(asset.value)}</strong><small>${escapeHtml(asset.change)}</small></div></article>
    `).join('');
  }

  const cryptoActions = $('[data-crypto-actions]');
  if (cryptoActions) {
    cryptoActions.innerHTML = data.cryptoActions.map((action) => `<button type="button" style="background:${action.bg};color:${action.color};border:1px solid ${action.border}"><i>${actionIcon(action.icon)}</i><span>${escapeHtml(action.label)}</span><small>${escapeHtml(action.hint)}</small></button>`).join('');
  }

  const steps = $('[data-steps]');
  if (steps) steps.innerHTML = data.steps.map((step) => `<article class="step-card"><strong>${step.n}</strong><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.desc)}</p></article>`).join('');

  const trustBadges = $('[data-trust-badges]');
  if (trustBadges) trustBadges.innerHTML = data.trustBadges.map((badge) => `<article class="badge-card"><div class="badge-icon">${trustIcon(badge.icon)}</div><h3>${escapeHtml(badge.title)}</h3><p>${escapeHtml(badge.desc)}</p></article>`).join('');
  renderTestimonials();
}

function renderTestimonials() {
  if (!$('[data-testimonials]')) return;
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
  if (!$('[data-faqs]')) return;
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
  if (!$('[data-waitlist-form]')) return;
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
  const waitlistCount = $('[data-waitlist-count]');
  if (waitlistCount) waitlistCount.textContent = `${(2847 + state.waitlistExtra).toLocaleString()} people already joined`;
}

function showPageToast() {
  const toast = $('[data-page-toast]');
  if (!toast) return;
  toast.hidden = false;
  setTimeout(() => { toast.hidden = true; }, 4500);
}

function initSwap() {
  const fromSelect = $('[data-swap-from]');
  const toSelect = $('[data-swap-to]');
  const amountInput = $('[data-swap-amount]');
  const flipButton = $('[data-swap-flip]');
  const swapForm = $('[data-swap-form]');
  if (!fromSelect || !toSelect || !amountInput || !flipButton || !swapForm) return;

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
  if (!$('[data-footer-menu]')) return;
  const footerMenus = [
    { label: 'Products', sections: data.navProductSections },
    { label: 'Solutions', sections: data.navSolutionSections },
    { label: 'Company', sections: data.navCompanySections },
    { label: 'Developers', sections: data.navDeveloperSections },
  ];
  $('[data-footer-menu]').innerHTML = footerMenus.map((menu) => `
    <div class="footer-menu-column">
      <h3>${escapeHtml(menu.label)}</h3>
      ${visibleSections(menu.sections).flatMap((section) => (
        section.items.map((item) => (
          item.title === 'About Us'
            ? `<a class="link-button" href="/about">${escapeHtml(item.title)}</a>`
            : item.href
              ? `<a class="link-button" href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>`
            : item.title === 'FAQs'
              ? `<button class="link-button" type="button" data-target="faq">${escapeHtml(item.title)}</button>`
            : `<button class="link-button" type="button">${escapeHtml(item.title)}</button>`
        ))
      )).join('')}
    </div>
  `).join('');
  const footerLegal = $('[data-footer-legal]');
  if (footerLegal) footerLegal.innerHTML = data.footerLegal.map((label) => {
    const href = `/${label.toLowerCase().replaceAll(' ', '-')}`;
    return `<a class="link-button" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
  }).join('');
  const socials = $('[data-socials]');
  if (socials) socials.innerHTML = data.socials.map((social) => `<span aria-label="${escapeHtml(social.label)}" title="${escapeHtml(social.label)}">${socialIcon(social.icon)}</span>`).join('');
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
  if (!$('[data-footer-map]')) return;
  $('[data-footer-map]').innerHTML = `
    <defs>
      <pattern id="ecoinzaFooterDots" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.15" fill="rgba(248,215,122,0.82)"></circle>
        <circle cx="6.8" cy="6.8" r="0.72" fill="rgba(255,247,214,0.48)"></circle>
      </pattern>
      <linearGradient id="ecoinzaFooterGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fff7d6"></stop>
        <stop offset="48%" stop-color="#f8d77a"></stop>
        <stop offset="100%" stop-color="#d9a82e"></stop>
      </linearGradient>
      <mask id="ecoinzaFooterWordMask">
        <rect width="1400" height="460" fill="black"></rect>
        <text x="700" y="440" text-anchor="middle" fill="white" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="380" font-weight="800" letter-spacing="-21">eCoinza</text>
      </mask>
    </defs>
    <rect width="1400" height="460" fill="url(#ecoinzaFooterGlow)" mask="url(#ecoinzaFooterWordMask)" opacity="0.72"></rect>
    <rect width="1400" height="460" fill="url(#ecoinzaFooterDots)" mask="url(#ecoinzaFooterWordMask)" opacity="0.78"></rect>
  `;
}

function bindStaticControls() {
  bindScrollTargets();
  bindDesktopMenus();
  bindMobileAccordions();
  $('[data-prev-slide]')?.addEventListener('click', previousSlide);
  $('[data-next-slide]')?.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });
  $('[data-testimonial-prev]')?.addEventListener('click', () => {
    previousTestimonial();
    resetTestimonialAutoplay();
  });
  $('[data-testimonial-next]')?.addEventListener('click', () => {
    nextTestimonial();
    resetTestimonialAutoplay();
  });
  $('[data-menu-toggle]')?.addEventListener('click', (event) => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    $('[data-mobile-menu]')?.classList.toggle('is-open', state.mobileMenuOpen);
    document.body.classList.toggle('mobile-menu-active', state.mobileMenuOpen);
    event.currentTarget.textContent = state.mobileMenuOpen ? '✕' : '☰';
    event.currentTarget.setAttribute('aria-expanded', String(state.mobileMenuOpen));
  });
}

function bindMobileAccordions() {
  $$('[data-mobile-accordion]').forEach((trigger) => {
    if (trigger.dataset.boundAccordion === 'true') return;
    trigger.dataset.boundAccordion = 'true';
    trigger.addEventListener('click', () => {
      const group = trigger.closest('.mobile-menu-group');
      const nextOpen = !group.classList.contains('is-open');
      $$('.mobile-menu-group').forEach((item) => {
        item.classList.remove('is-open');
        item.querySelector('[data-mobile-accordion]')?.setAttribute('aria-expanded', 'false');
      });
      group.classList.toggle('is-open', nextOpen);
      trigger.setAttribute('aria-expanded', String(nextOpen));
    });
  });
}

function bindDesktopMenus() {
  $$('[data-nav-links] .nav-menu-trigger').forEach((trigger) => {
    if (trigger.dataset.boundMenu === 'true') return;
    trigger.dataset.boundMenu = 'true';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const item = trigger.closest('.nav-menu-item');
      const nextOpen = !item.classList.contains('is-open');
      closeDesktopMenus(item);
      item.classList.toggle('is-open', nextOpen);
      trigger.setAttribute('aria-expanded', String(nextOpen));
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-nav-links] .nav-menu-item')) return;
    closeDesktopMenus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDesktopMenus();
  });
}

function bindScrollTargets() {
  $$('[data-target]').forEach((button) => {
    if (button.dataset.boundScroll === 'true') return;
    button.dataset.boundScroll = 'true';
    button.addEventListener('click', () => {
      closeDesktopMenus();
      scrollToSection(button.dataset.target);
    });
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
      button.classList.remove('is-active');
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
    '.buildway-heading',
    '.feature-fields > article',
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
  if ($('[data-hero-tag]')) resetAutoplay();
  if ($('[data-testimonials]')) resetTestimonialAutoplay();
});
