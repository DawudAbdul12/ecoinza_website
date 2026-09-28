<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('ecoinza-landing');
});

Route::view('/ecoinza-landing', 'ecoinza-landing')->name('ecoinza.landing');

$ecoinzaPages = [
    'about' => [
        'title' => 'About eCoinza',
        'eyebrow' => 'About eCoinza',
        'headline' => 'A modern money platform for stable value across Africa.',
        'description' => 'eCoinza brings local payment rails, digital dollar savings, crypto access, and cross-border money movement into one clear wallet experience for people and businesses across African markets.',
        'hero_image' => 'images/ecoinza/about-african-woman-money.png',
        'hero_image_alt' => 'African woman holding money and a smartphone',
        'stats' => [
            ['value' => '54 countries', 'label' => 'A continent of fragmented money rails'],
            ['value' => '1.5B+ people', 'label' => 'Growing consumers and businesses'],
            ['value' => '$3T+ economy', 'label' => 'Trade needs faster settlement'],
        ],
        'sections' => [
            ['title' => 'Our Mission', 'body' => 'We are making stable digital money practical for everyday financial life. eCoinza connects mobile money, banks, local currency, and digital dollars in one wallet so people can fund, save, transfer, and withdraw with confidence instead of navigating disconnected systems.', 'image' => 'images/ecoinza/about-mission-realistic.png'],
            ['title' => 'Who We Serve', 'body' => 'eCoinza is built for savers protecting income, digital creators earning across global platforms, business owners managing working capital, and diaspora families supporting loved ones. The platform is designed around real financial routines, not abstract crypto use cases.', 'image' => 'images/ecoinza/about-who-we-serve-realistic.png'],
            ['title' => 'What We Believe', 'body' => 'People should understand their money before it moves. That means clear balances, visible rates, transparent fees, identity-aware access, risk monitoring, and product availability that respects local rules and trusted payment rails.', 'image' => 'images/ecoinza/about-believe-realistic.png'],
        ],
        'intro' => [
            'eyebrow' => 'What we are building',
            'title' => 'eCoinza turns fragmented money movement into one connected wallet.',
            'body' => 'Many customers across Africa already rely on mobile money, bank transfers, and global digital platforms, but those systems often feel disconnected. eCoinza is designed to make the path between local currency and digital dollars feel clear: fund locally, hold stable value, send when needed, and withdraw through trusted rails.',
            'points' => [
                'Deposit from mobile money or bank accounts where supported.',
                'Convert local balances into USDC for stable digital dollar exposure.',
                'Move value across wallets, countries, and everyday financial needs.',
                'Withdraw back to supported local rails with visible confirmation details.',
            ],
            'metrics' => [
                ['value' => '54 countries', 'label' => 'A continent of fragmented money rails'],
                ['value' => '1.5B+ people', 'label' => 'Growing consumers and businesses'],
                ['value' => '$3T+ economy', 'label' => 'Trade needs faster settlement'],
            ],
        ],
        'pillars' => [
            ['title' => 'Stable Savings', 'body' => 'Help customers preserve value in USDC while keeping funds accessible for transfers, withdrawals, or future payments.', 'image' => 'images/ecoinza/feature-stable-savings.png'],
            ['title' => 'Local Access', 'body' => 'Meet users where they already are through mobile money and bank rails instead of forcing new financial habits from day one.', 'image' => 'images/ecoinza/feature-deposit-withdraw.png'],
            ['title' => 'Cross-Border Utility', 'body' => 'Support families, digital creators, and businesses that need faster, clearer movement between local economies and global value.', 'image' => 'images/ecoinza/feature-cross-border.png'],
            ['title' => 'Crypto Without Confusion', 'body' => 'Offer supported digital assets through a clean experience that explains balances, confirmations, and transaction context.', 'image' => 'images/ecoinza/feature-crypto-wallet.png'],
        ],
        'audiences' => [
            ['label' => 'Individuals', 'detail' => 'Save in stable digital dollars, transfer funds, and cash out locally when needed.'],
            ['label' => 'Digital Creators', 'detail' => 'Receive platform income, manage dollar value, and convert into local currency with less friction.'],
            ['label' => 'Businesses', 'detail' => 'Hold operating reserves, manage supplier payments, and plan around clearer value movement.'],
            ['label' => 'Diaspora Families', 'detail' => 'Send support home with a wallet flow designed around local withdrawal options.'],
        ],
        'principles' => [
            ['name' => 'Clarity before movement', 'copy' => 'Balances, rates, fees, and destination details should be visible before a customer confirms.'],
            ['name' => 'Responsible access', 'copy' => 'Identity checks, risk monitoring, and jurisdiction-aware availability are part of the product foundation.'],
            ['name' => 'Local trust, global reach', 'copy' => 'The platform connects global digital assets to the payment methods customers already trust.'],
        ],
    ],
    'checkout' => [
        'title' => 'Checkout',
        'eyebrow' => 'Checkout',
        'headline' => 'Checkout pages for local payments and stablecoin settlement.',
        'description' => 'Accept customer payments through clean hosted checkout pages, payment links, and API-ready flows while keeping local currency, USDC settlement, fees, and payment status easier to reconcile.',
        'hero_image' => 'images/ecoinza/product-checkout-hero.png',
        'hero_image_alt' => 'eCoinza checkout interface showing local currency and USDC settlement',
        'story_layout' => true,
        'stats' => [
            ['value' => 'Hosted', 'label' => 'Checkout pages and payment links'],
            ['value' => 'USDC', 'label' => 'Stablecoin settlement support'],
            ['value' => 'Local rails', 'label' => 'Built around familiar payment methods'],
        ],
        'sections' => [
            ['title' => 'Accept More Ways To Pay', 'body' => 'Create a checkout experience where customers can pay through supported local rails or stablecoins without forcing your team to manage disconnected collection paths.', 'image' => 'images/ecoinza/feature-merchant-payments.png'],
            ['title' => 'Settle With Clear Records', 'body' => 'Track the customer, payment method, settlement currency, fees, references, and status in one place so finance teams can reconcile collections faster.', 'image' => 'images/ecoinza/feature-stable-savings.png'],
            ['title' => 'Launch Without Heavy Build Time', 'body' => 'Start with hosted checkout pages or payment links, then move into API and embedded flows as your business needs deeper control.', 'image' => 'images/ecoinza/feature-deposit-withdraw.png'],
        ],
        'intro' => [
            'eyebrow' => 'How checkout works',
            'title' => 'One checkout flow for customers, merchants, and settlement teams.',
            'body' => 'The checkout product is designed for African businesses that need local collection methods and global-value settlement in the same workflow. Customers get a simple payment page. Merchants get clearer records, faster status visibility, and a path to hold value in stable digital dollars where supported.',
            'points' => [
                'Generate a hosted checkout page or payment link for an order.',
                'Let customers choose supported local currency or stablecoin payment methods.',
                'Confirm payment status, settlement currency, references, and fees in one record.',
                'Use APIs and webhooks when your product needs a deeper checkout integration.',
            ],
            'metrics' => [
                ['value' => 'Links', 'label' => 'Send payment requests without code'],
                ['value' => 'Hosted', 'label' => 'Use ready-made checkout pages'],
                ['value' => 'API', 'label' => 'Embed checkout into your own product'],
            ],
        ],
        'pillars_heading' => [
            'eyebrow' => 'Deployment paths',
            'title' => 'Start simple, then integrate deeper when you are ready.',
            'body' => 'Use the checkout path that matches your current team and platform, from shareable links to developer-led integrations.',
        ],
        'pillars' => [
            ['title' => 'Hosted Checkout', 'body' => 'Redirect customers to a secure eCoinza-hosted page with amount, currency, method choices, and payment confirmation.', 'image' => 'images/ecoinza/product-checkout-hero.png'],
            ['title' => 'Payment Links', 'body' => 'Share a link for invoices, social commerce, WhatsApp sales, deposits, or one-off customer collections.', 'image' => 'images/ecoinza/payment-links-qr.svg'],
            ['title' => 'API & SDK Integration', 'body' => 'Build checkout into your own product and receive payment events for order fulfillment and reconciliation.', 'image' => 'images/ecoinza/checkout-api-sdk-integration.svg'],
            ['title' => 'Platform Plugins', 'body' => 'Prepare checkout flows for commerce platforms and internal tools as your operations scale.', 'image' => 'images/ecoinza/feature-cross-border.png'],
        ],
        'audiences_heading' => [
            'eyebrow' => 'Who it helps',
            'title' => 'Checkout flows for businesses that sell across channels and borders.',
        ],
        'audiences' => [
            ['label' => 'E-commerce', 'detail' => 'Collect local payments online while keeping settlement records connected to customer orders.'],
            ['label' => 'Marketplaces', 'detail' => 'Support seller, vendor, and buyer payment flows with cleaner payment status and payout preparation.'],
            ['label' => 'B2B Trading', 'detail' => 'Request invoice payments, deposits, and supplier collections with clearer references.'],
            ['label' => 'Digital Services', 'detail' => 'Accept payments for subscriptions, agencies, creators, software, and remote work.'],
        ],
        'principles' => [
            ['name' => 'Clear payment status', 'copy' => 'Every checkout should make pending, paid, failed, and settled states easy to understand.'],
            ['name' => 'Reconciliation first', 'copy' => 'Amounts, fees, references, methods, and settlement currency should travel with the payment record.'],
            ['name' => 'Compliance-aware access', 'copy' => 'Available methods, stablecoin features, and corridors can vary by market, partner readiness, and review.'],
        ],
        'cta' => [
            'eyebrow' => 'Checkout access',
            'title' => 'Start accepting payments with eCoinza Checkout.',
            'body' => 'Join the waitlist for hosted checkout pages, payment links, API updates, and merchant onboarding availability.',
            'button' => 'Join the Checkout Waitlist',
        ],
    ],
    'contact' => [
        'title' => 'Contact',
        'eyebrow' => 'Contact',
        'headline' => 'Talk to the eCoinza team.',
        'description' => 'Whether you are joining early access, exploring partnerships, or asking about support, reach the right team with context and clarity.',
        'badge' => 'Response paths for users, businesses, and partners.',
        'stats' => [
            ['value' => 'Support', 'label' => 'Product and account questions'],
            ['value' => 'Partners', 'label' => 'Banks, MoMo, and corridors'],
            ['value' => 'Business', 'label' => 'Merchant and treasury needs'],
        ],
        'sections' => [
            ['title' => 'General Support', 'body' => 'Questions about the waitlist, wallet access, deposits, withdrawals, and supported markets.'],
            ['title' => 'Partnerships', 'body' => 'Payment rails, bank partners, compliance vendors, merchant networks, and corridor operators.'],
            ['title' => 'Business Enquiries', 'body' => 'Business wallets, treasury workflows, diaspora payout use cases, and stable reserve planning.'],
        ],
    ],
    'compliance' => [
        'title' => 'Compliance',
        'eyebrow' => 'Compliance',
        'headline' => 'Controls designed for responsible access.',
        'description' => 'eCoinza is structured around identity checks, transparent transaction flows, risk monitoring, and jurisdiction-aware product availability.',
        'badge' => 'KYC ready. Risk aware. Transparent by design.',
        'stats' => [
            ['value' => 'KYC', 'label' => 'Identity checks'],
            ['value' => 'AML', 'label' => 'Risk monitoring'],
            ['value' => 'Clear fees', 'label' => 'Pre-confirmation visibility'],
        ],
        'sections' => [
            ['title' => 'Identity & Access', 'body' => 'Account access is designed around identity verification, eligibility checks, and secure account recovery flows.'],
            ['title' => 'Transaction Monitoring', 'body' => 'Automated monitoring helps detect suspicious activity, unusual patterns, and high-risk behavior before it becomes harmful.'],
            ['title' => 'Market Availability', 'body' => 'Features, rails, and digital asset access may vary by jurisdiction, partner readiness, and compliance review.'],
        ],
    ],
    'help-center' => [
        'title' => 'Help Center',
        'eyebrow' => 'Help Center',
        'headline' => 'Answers for moving, saving, and withdrawing money.',
        'description' => 'Find clear guidance on getting started, funding your wallet, holding USDC, using crypto, and returning funds to mobile money or bank rails.',
        'badge' => 'Simple answers for everyday money movement.',
        'stats' => [
            ['value' => 'Wallet', 'label' => 'Setup and access'],
            ['value' => 'Deposits', 'label' => 'MoMo and bank funding'],
            ['value' => 'Withdrawals', 'label' => 'Cash out locally'],
        ],
        'sections' => [
            ['title' => 'Getting Started', 'body' => 'Join the waitlist, create your wallet, complete required checks, and choose the rails you want to use.'],
            ['title' => 'Deposits & Withdrawals', 'body' => 'Deposit from mobile money or bank, convert when needed, and withdraw back through supported local rails.'],
            ['title' => 'Stable Value & Crypto', 'body' => 'Hold USDC for dollar stability, compare value over time, and use supported crypto assets with clear confirmation screens.'],
        ],
    ],
];

foreach ($ecoinzaPages as $slug => $page) {
    Route::get("/{$slug}", fn () => view('ecoinza-page', ['page' => $page, 'slug' => $slug]))->name("ecoinza.{$slug}");
}
