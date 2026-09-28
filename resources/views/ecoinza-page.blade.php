<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $page['title'] }} | eCoinza</title>
    <meta name="description" content="{{ $page['description'] }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    @vite(['resources/css/ecoinza-landing.css', 'resources/js/ecoinza-landing.js'])
</head>
<body>
    <div class="site-shell">
        <header class="site-header">
            <nav class="nav-wrap" aria-label="Primary navigation">
                <button class="brand js-scroll" data-target="hero" type="button">
                    <img src="{{ asset('images/ecoinza/logo-white.png') }}" alt="eCoinza" class="brand-logo">
                </button>

                <div class="nav-links" data-nav-links></div>

                <div class="nav-actions">
                    <button class="nav-login js-scroll" data-target="security" type="button">Security</button>
                    <button class="btn btn-light nav-cta js-scroll" data-target="waitlist" type="button">Join Waitlist</button>
                </div>
                <button class="menu-toggle" data-menu-toggle type="button" aria-label="Open menu" aria-expanded="false">☰</button>
            </nav>
        </header>
        <div class="mobile-menu" data-mobile-menu></div>

        <main>
            <section @class(['content-hero', 'content-hero-product' => $slug === 'checkout'])>
                <div class="container content-hero-grid">
                    <div>
                        <span class="kicker">{{ $page['eyebrow'] }}</span>
                        <h1>{{ $page['headline'] }}</h1>
                        <p>{{ $page['description'] }}</p>
                        <div class="content-actions">
                            <a class="btn btn-light" href="{{ url('/#waitlist') }}">Join Waitlist</a>
                            <a class="btn btn-outline-dark" href="{{ url('/#faq') }}">Read FAQ</a>
                        </div>
                    </div>
                    @isset($page['hero_image'])
                        <figure @class(['content-hero-image', 'content-hero-mockup' => $slug === 'checkout'])>
                            <img src="{{ asset($page['hero_image']) }}" alt="{{ $page['hero_image_alt'] ?? $page['title'] }}">
                        </figure>
                    @else
                        <aside class="content-panel" aria-label="{{ $page['title'] }} summary">
                            <strong>{{ $page['badge'] }}</strong>
                            <div class="content-stats">
                                @foreach ($page['stats'] as $stat)
                                    <div>
                                        <span>{{ $stat['value'] }}</span>
                                        <small>{{ $stat['label'] }}</small>
                                    </div>
                                @endforeach
                            </div>
                        </aside>
                    @endisset
                </div>
            </section>

            @if ($slug === 'checkout')
                <section class="checkout-proof-section">
                    <div class="container checkout-proof-grid" aria-label="Checkout product highlights">
                        @foreach ($page['stats'] as $stat)
                            <article>
                                <strong>{{ $stat['value'] }}</strong>
                                <span>{{ $stat['label'] }}</span>
                            </article>
                        @endforeach
                    </div>
                </section>

                <section class="checkout-flow-section">
                    <div class="container">
                        <div class="product-section-heading">
                            <span>{{ $page['intro']['eyebrow'] }}</span>
                            <h2>{{ $page['intro']['title'] }}</h2>
                            <p>{{ $page['intro']['body'] }}</p>
                        </div>
                        <div class="checkout-flow-grid">
                            @foreach ($page['intro']['points'] as $point)
                                <article>
                                    <span>{{ str_pad((string) ($loop->iteration), 2, '0', STR_PAD_LEFT) }}</span>
                                    <p>{{ $point }}</p>
                                </article>
                            @endforeach
                        </div>
                    </div>
                </section>

                <section class="checkout-feature-section">
                    <div class="container checkout-feature-stack">
                        @foreach ($page['sections'] as $section)
                            <article>
                                <div>
                                    <h2>{{ $section['title'] }}</h2>
                                    <p>{{ $section['body'] }}</p>
                                </div>
                                @isset($section['image'])
                                    <figure>
                                        <img src="{{ asset($section['image']) }}" alt="{{ $section['title'] }}">
                                    </figure>
                                @endisset
                            </article>
                        @endforeach
                    </div>
                </section>

                <section class="checkout-integration-section">
                    <div class="container">
                        <div class="product-section-heading compact">
                            <span>{{ $page['pillars_heading']['eyebrow'] }}</span>
                            <h2>{{ $page['pillars_heading']['title'] }}</h2>
                            <p>{{ $page['pillars_heading']['body'] }}</p>
                        </div>
                        <div class="checkout-integration-grid">
                            @foreach ($page['pillars'] as $pillar)
                                <article>
                                    @isset($pillar['image'])
                                        <figure>
                                            <img src="{{ asset($pillar['image']) }}" alt="{{ $pillar['title'] }}">
                                        </figure>
                                    @endisset
                                    <div>
                                        <h3>{{ $pillar['title'] }}</h3>
                                        <p>{{ $pillar['body'] }}</p>
                                    </div>
                                </article>
                            @endforeach
                        </div>
                    </div>
                </section>

                <section class="checkout-industry-section">
                    <div class="container checkout-industry-grid">
                        <div>
                            <span class="kicker dark">{{ $page['audiences_heading']['eyebrow'] }}</span>
                            <h2>{{ $page['audiences_heading']['title'] }}</h2>
                        </div>
                        <div class="checkout-industry-list">
                            @foreach ($page['audiences'] as $audience)
                                <article>
                                    <strong>{{ $audience['label'] }}</strong>
                                    <p>{{ $audience['detail'] }}</p>
                                </article>
                            @endforeach
                        </div>
                    </div>
                </section>

                <section class="checkout-controls-section">
                    <div class="container checkout-controls-grid">
                        @foreach ($page['principles'] as $principle)
                            <article>
                                <span>{{ str_pad((string) ($loop->iteration), 2, '0', STR_PAD_LEFT) }}</span>
                                <h3>{{ $principle['name'] }}</h3>
                                <p>{{ $principle['copy'] }}</p>
                            </article>
                        @endforeach
                    </div>
                </section>
            @else
            @isset($page['intro'])
                <section class="about-intro-section">
                    <div class="container about-intro-grid">
                        <div class="about-intro-copy">
                            <span class="kicker dark">{{ $page['intro']['eyebrow'] }}</span>
                            <h2>{{ $page['intro']['title'] }}</h2>
                            <p>{{ $page['intro']['body'] }}</p>
                            <div class="about-intro-metrics" aria-label="eCoinza money movement summary">
                                @foreach ($page['intro']['metrics'] ?? [] as $metric)
                                    <span><strong>{{ $metric['value'] }}</strong>{{ $metric['label'] }}</span>
                                @endforeach
                            </div>
                        </div>
                        <div class="about-intro-list-panel">
                            <div class="about-checklist">
                                @foreach ($page['intro']['points'] as $point)
                                    <div><i></i><span>{{ $point }}</span></div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </section>
            @endisset

            <section @class(['content-section', 'about-story-section' => $slug === 'about' || ($page['story_layout'] ?? false)])>
                <div @class(['container', 'content-card-grid', 'about-story-grid' => $slug === 'about' || ($page['story_layout'] ?? false)])>
                    @foreach ($page['sections'] as $index => $section)
                        @isset($section['image'])
                            <article class="content-info-card about-story-card">
                                <div class="about-story-copy">
                                    <span>{{ str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT) }}</span>
                                    <h2>{{ $section['title'] }}</h2>
                                    <p>{{ $section['body'] }}</p>
                                </div>
                                <figure>
                                    <img src="{{ asset($section['image']) }}" alt="{{ $section['title'] }}">
                                </figure>
                            </article>
                        @else
                            <article class="content-info-card">
                                <span>{{ str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT) }}</span>
                                <h2>{{ $section['title'] }}</h2>
                                <p>{{ $section['body'] }}</p>
                            </article>
                        @endisset
                    @endforeach
                </div>
            </section>

            @isset($page['pillars'])
                <section class="about-pillar-section">
                    <div class="container">
                        <div class="section-heading">
                            <span>{{ $page['pillars_heading']['eyebrow'] ?? 'Platform focus' }}</span>
                            <h2>{{ $page['pillars_heading']['title'] ?? 'Designed for the realities of African money movement.' }}</h2>
                            <p>{{ $page['pillars_heading']['body'] ?? 'eCoinza combines stable value, familiar access rails, and simple transaction flows for customers who need money to be useful across currencies and borders.' }}</p>
                        </div>
                        <div class="about-pillar-grid">
                            @foreach ($page['pillars'] as $pillar)
                                <article>
                                    <div>
                                        <h3>{{ $pillar['title'] }}</h3>
                                        <p>{{ $pillar['body'] }}</p>
                                    </div>
                                    <figure>
                                        <img src="{{ asset($pillar['image']) }}" alt="{{ $pillar['title'] }}">
                                    </figure>
                                </article>
                            @endforeach
                        </div>
                    </div>
                </section>
            @endisset

            @isset($page['audiences'])
                <section class="about-audience-section">
                    <div class="container about-audience-grid">
                        <div>
                            <span class="kicker dark">{{ $page['audiences_heading']['eyebrow'] ?? 'Who it helps' }}</span>
                            <h2>{{ $page['audiences_heading']['title'] ?? 'Built for people and teams who live between local needs and global value.' }}</h2>
                        </div>
                        <div class="about-audience-list">
                            @foreach ($page['audiences'] as $audience)
                                <article>
                                    <i aria-hidden="true"></i>
                                    <div>
                                        <strong>{{ $audience['label'] }}</strong>
                                        <p>{{ $audience['detail'] }}</p>
                                    </div>
                                </article>
                            @endforeach
                        </div>
                    </div>
                </section>
            @endisset

            @isset($page['principles'])
                <section class="about-principles-section">
                    <div class="container about-principles-grid">
                        @foreach ($page['principles'] as $principle)
                            <article>
                                <span>{{ str_pad((string) ($loop->iteration), 2, '0', STR_PAD_LEFT) }}</span>
                                <h3>{{ $principle['name'] }}</h3>
                                <p>{{ $principle['copy'] }}</p>
                            </article>
                        @endforeach
                    </div>
                </section>
            @endisset
            @endif

            <section class="content-cta">
                <div class="container content-cta-inner">
                    <div>
                        <span class="kicker dark">{{ $page['cta']['eyebrow'] ?? 'Early access' }}</span>
                        <h2>{{ $page['cta']['title'] ?? 'Be first to experience eCoinza.' }}</h2>
                        <p>{{ $page['cta']['body'] ?? 'Join the waitlist for product updates, corridor availability, and early access invitations.' }}</p>
                    </div>
                    <a class="btn btn-dark" href="{{ url('/#waitlist') }}">{{ $page['cta']['button'] ?? 'Join the Waitlist' }}</a>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="container footer-grid">
                <div>
                    <h2>Next-generation stablecoin platform built for how Africa moves money.</h2>
                    <div class="footer-signup">
                        <input type="email" placeholder="Email address">
                        <button class="js-scroll" data-target="waitlist" type="button">Stay updated</button>
                    </div>
                    <p>By submitting this form, you agree to our terms. You can opt out anytime.</p>
                    <p class="footer-disclaimer">eCoinza is a fintech platform, not a bank. Digital assets may fluctuate in value, and product availability may vary by jurisdiction and compliance review.</p>
                    <div class="socials" data-socials></div>
                </div>
                <div class="footer-menu-grid" data-footer-menu></div>
            </div>
            <div class="container footer-bottom">
                <div><img src="{{ asset('images/ecoinza/logo-white.png') }}" alt="eCoinza" class="footer-logo"><span>© 2026. All rights reserved.</span></div>
                <div data-footer-legal></div>
            </div>
            <div class="footer-map"><svg viewBox="0 0 1400 460" preserveAspectRatio="xMidYMid meet" data-footer-map></svg></div>
        </footer>

        <div class="toast" data-page-toast hidden>
            <i></i><span>You're on the list. Welcome to eCoinza!</span>
        </div>
    </div>
</body>
</html>
