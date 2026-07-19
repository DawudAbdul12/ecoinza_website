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
                </div>
            </section>

            <section class="content-section">
                <div class="container content-card-grid">
                    @foreach ($page['sections'] as $index => $section)
                        <article class="content-info-card">
                            <span>{{ str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT) }}</span>
                            <h2>{{ $section['title'] }}</h2>
                            <p>{{ $section['body'] }}</p>
                        </article>
                    @endforeach
                </div>
            </section>

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
