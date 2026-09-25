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
    @vite(['resources/css/ecoinza-landing.css'])
</head>
<body>
    <div class="site-shell">
        <header class="site-header">
            <nav class="nav-wrap page-nav" aria-label="Primary navigation">
                <a class="brand" href="{{ url('/') }}">
                    <img src="{{ asset('images/ecoinza/logo-white.png') }}" alt="eCoinza" class="brand-logo">
                </a>
                <div class="page-nav-links">
                    <a href="{{ url('/about') }}" @class(['is-active' => $slug === 'about'])>About</a>
                    <a href="{{ url('/contact') }}" @class(['is-active' => $slug === 'contact'])>Contact</a>
                    <a href="{{ url('/compliance') }}" @class(['is-active' => $slug === 'compliance'])>Compliance</a>
                    <a href="{{ url('/help-center') }}" @class(['is-active' => $slug === 'help-center'])>Help</a>
                </div>
                <a class="btn btn-light nav-cta" href="{{ url('/#waitlist') }}">Join Waitlist</a>
            </nav>
        </header>

        <main>
            <section class="content-hero">
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
                        <figure class="content-hero-image">
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

            @isset($page['intro'])
                <section class="about-intro-section">
                    <div class="container about-intro-grid">
                        <div class="about-intro-copy">
                            <span class="kicker dark">{{ $page['intro']['eyebrow'] }}</span>
                            <h2>{{ $page['intro']['title'] }}</h2>
                            <p>{{ $page['intro']['body'] }}</p>
                            <div class="about-intro-metrics" aria-label="eCoinza money movement summary">
                                <span><strong>Fund</strong>MoMo + Bank</span>
                                <span><strong>Hold</strong>USDC value</span>
                                <span><strong>Exit</strong>Local rails</span>
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

            <section @class(['content-section', 'about-story-section' => $slug === 'about'])>
                <div @class(['container', 'content-card-grid', 'about-story-grid' => $slug === 'about'])>
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
                            <span>Platform focus</span>
                            <h2>Designed for the realities of African money movement.</h2>
                            <p>eCoinza combines stable value, familiar access rails, and simple transaction flows for customers who need money to be useful across currencies and borders.</p>
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
                            <span class="kicker dark">Who it helps</span>
                            <h2>Built for people and teams who live between local needs and global value.</h2>
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

            <section class="content-cta">
                <div class="container content-cta-inner">
                    <div>
                        <span class="kicker dark">Early access</span>
                        <h2>Be first to experience eCoinza.</h2>
                        <p>Join the waitlist for product updates, corridor availability, and early access invitations.</p>
                    </div>
                    <a class="btn btn-dark" href="{{ url('/#waitlist') }}">Join the Waitlist</a>
                </div>
            </section>
        </main>

        <footer class="site-footer compact-footer">
            <div class="container footer-bottom">
                <div><img src="{{ asset('images/ecoinza/logo-white.png') }}" alt="eCoinza" class="footer-logo"><span>© 2026. All rights reserved.</span></div>
                <div>
                    <a href="{{ url('/about') }}">About</a>
                    <a href="{{ url('/contact') }}">Contact</a>
                    <a href="{{ url('/compliance') }}">Compliance</a>
                    <a href="{{ url('/help-center') }}">Help</a>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
