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
        'headline' => 'Financial infrastructure for stable value across Africa.',
        'description' => 'eCoinza is building a stablecoin-powered wallet experience for people, freelancers, businesses, and diaspora families who need money to move clearly between local rails and digital dollars.',
        'badge' => 'Built for Africa. Connected to the world.',
        'stats' => [
            ['value' => '7 markets', 'label' => 'Launch corridor focus'],
            ['value' => 'USDC-first', 'label' => 'Stable value design'],
            ['value' => 'MoMo + Bank', 'label' => 'Local rail support'],
        ],
        'sections' => [
            ['title' => 'Our Mission', 'body' => 'Make stable digital money feel simple, trusted, and useful for everyday financial life across African markets.'],
            ['title' => 'Who We Serve', 'body' => 'Individuals protecting savings, business owners managing reserves, freelancers receiving global income, and diaspora families supporting loved ones.'],
            ['title' => 'What We Believe', 'body' => 'Money should be transparent before it moves, accessible when people need it, and designed around the rails customers already trust.'],
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
