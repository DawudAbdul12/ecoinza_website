<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>eCoinza | Stablecoin Platform for Africa</title>
    <meta name="description" content="Save in USDC, send money across borders, deposit with mobile money, withdraw to banks, and access crypto from one eCoinza wallet.">
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

                <button class="btn btn-light nav-cta js-scroll" data-target="waitlist" type="button">Join Waitlist</button>
                <button class="menu-toggle" data-menu-toggle type="button" aria-label="Open menu" aria-expanded="false">☰</button>
            </nav>
            <div class="mobile-menu" data-mobile-menu></div>
        </header>

        <main>
            <section id="hero" class="hero section-light">
                <img
                    class="hero-background-image"
                    data-hero-image
                    src="{{ asset('images/ecoinza/hero-save.png') }}"
                    alt=""
                    width="1792"
                    height="1024"
                    aria-hidden="true"
                >
                <div class="hero-overlay"></div>
                <div class="container hero-grid">
                    <div class="hero-copy">
                        <div class="eyebrow"><span></span><strong data-hero-tag>Save</strong></div>
                        <h1 data-hero-headline>Save beyond inflation.</h1>
                        <p data-hero-sub>Convert your local currency into stable digital dollars and protect your value from depreciation.</p>
                        <div class="actions">
                            <button class="btn btn-dark js-scroll" data-target="waitlist" type="button">Join the Waitlist</button>
                            <button class="btn btn-outline-dark js-scroll" data-target="features" type="button">Explore Features</button>
                        </div>
                        <div class="slider-controls">
                            <button type="button" data-prev-slide aria-label="Previous slide">‹</button>
                            <div class="slide-dots" data-slide-dots></div>
                            <button type="button" data-next-slide aria-label="Next slide">›</button>
                        </div>
                    </div>
                </div>
                <div class="container hero-proof">
                    <div>
                        <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3 5 14h6l-1 7 8-11h-6z"></path></svg></i>
                        <span><strong>8 sec</strong><small>Average transfer simulation</small></span>
                    </div>
                    <div>
                        <i><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M4 12h16"></path><path d="M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8"></path><path d="M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8"></path></svg></i>
                        <span><strong>7 markets</strong><small>Launch corridor focus</small></span>
                    </div>
                    <div>
                        <i><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M9.5 14.3c.5.7 1.4 1.1 2.5 1.1 1.3 0 2.2-.6 2.2-1.5 0-2.2-4.2-.9-4.2-3.5 0-.9.8-1.7 2-1.7.9 0 1.7.3 2.2.9"></path><path d="M12 7.3v9.4"></path></svg></i>
                        <span><strong>USDC-first</strong><small>Designed for stable value</small></span>
                    </div>
                    <div>
                        <i><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="7" height="14" rx="2"></rect><path d="M6.5 16h2"></path><path d="M14 8h6"></path><path d="M15 12h4"></path><path d="M14 16h6"></path></svg></i>
                        <span><strong>MoMo + Bank</strong><small>Built around local rails</small></span>
                    </div>
                </div>
            </section>

            <section id="features" class="section-dark features-section">
                <div class="container">
                    <div class="section-heading">
                        <span>Everything In One Wallet</span>
                        <h2>Built for how Africa moves money.</h2>
                    </div>
                    <div class="feature-grid" data-features></div>
                </div>
            </section>

            <section id="save" class="section-light split-section">
                <div class="container split-grid">
                    <div class="value-copy">
                        <span class="kicker dark">Protect Your Value</span>
                        <h2>Keep wealth in stable dollars, ready when life needs it.</h2>
                        <p>eCoinza helps you move idle local currency into USDC, a digital dollar designed to preserve spending power while keeping your money liquid across mobile money and bank rails.</p>
                        <div class="value-metrics" aria-label="Value protection highlights">
                            <div><strong>24/7</strong><span>Move in and out when markets shift</span></div>
                            <div><strong>USDC</strong><span>Stable digital dollar reserve</span></div>
                            <div><strong>0 lockups</strong><span>Withdraw back to local rails anytime</span></div>
                        </div>
                        <div class="point-list dark" data-inflation-points></div>
                    </div>
                    <div class="value-card">
                        <div class="value-card-header">
                            <div>
                                <span>Reserve Scenario</span>
                                <h3>Value protected over 12 months</h3>
                            </div>
                            <strong>USDC Vault</strong>
                        </div>
                        <div class="value-rate-strip" aria-label="Example conversion">
                            <span>Starting balance</span>
                            <strong>GHS 10,000</strong>
                            <em>Converted to $860 USDC</em>
                        </div>
                        <div class="bar-chart">
                            <div><span class="bar local"></span><small>Local cash<br><b>Real value -21.5%</b></small></div>
                            <div><span class="bar stable"></span><small>eCoinza USDC<br><b>Value held in dollars</b></small></div>
                        </div>
                        <div class="value-stats">
                            <div><small>Local cash after inflation</small><strong>₵7,850</strong><span>Purchasing power compressed</span></div>
                            <div><small>Protected dollar reserve</small><strong>$860.00</strong><span>Held in USDC, accessible anytime</span></div>
                        </div>
                        <div class="value-comparison">
                            <div>
                                <span>Before</span>
                                <strong>Savings sit exposed to depreciation, even when untouched.</strong>
                            </div>
                            <div>
                                <span>With eCoinza</span>
                                <strong>Store in stable digital dollars, then cash out locally when you are ready.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="deposit-withdraw" class="section-light deposit-section">
                <div class="container">
                    <div class="section-heading dark-heading">
                        <span>Move Money Freely</span>
                        <h2>Deposit and withdraw with MoMo or bank.</h2>
                        <p>Fund your eCoinza wallet from mobile money or your bank, save in USDC, then cash out through the same trusted local rails whenever you need liquidity.</p>
                    </div>
                    <div class="rail-overview" aria-label="Supported deposit and withdrawal rails">
                        <div>
                            <i>01</i>
                            <span>Deposit rails</span>
                            <strong class="rail-pair rail-pair-deposit"><b>MoMo</b><em>+</em><b>Bank</b></strong>
                            <small>Fund from mobile money wallets or local bank accounts.</small>
                        </div>
                        <div>
                            <i>02</i>
                            <span>eCoinza wallet</span>
                            <strong class="conversion-pair"><b>GHS</b><em></em><b>USDC</b></strong>
                            <small>Convert, hold, send, or prepare funds for withdrawal.</small>
                        </div>
                        <div>
                            <i>03</i>
                            <span>Withdrawal rails</span>
                            <strong class="rail-pair rail-pair-withdraw"><b>Bank</b><em>+</em><b>MoMo</b></strong>
                            <small>Cash out to your bank account or mobile money wallet.</small>
                        </div>
                    </div>
                    <div class="deposit-grid">
                        <article class="money-card money-card-dark">
                            <div class="money-card-heading">
                                <span>Money In</span>
                                <h3>Deposit</h3>
                            </div>
                            <p>Top up your eCoinza wallet using the payment rail that fits your day.</p>
                            <div data-deposit-options></div>
                            <div class="money-flow">
                                <span>MoMo / Bank</span>
                                <i></i>
                                <span>eCoinza Wallet</span>
                                <i></i>
                                <span>USDC Reserve</span>
                            </div>
                            <footer>Deposits are designed for fast confirmation, clear fees, and immediate wallet visibility.</footer>
                        </article>
                        <article class="money-card money-card-light">
                            <div class="money-card-heading">
                                <span>Money Out</span>
                                <h3>Withdraw</h3>
                            </div>
                            <p>Convert your balance back and send funds to the local account you use every day.</p>
                            <div data-withdraw-options></div>
                            <div class="money-flow">
                                <span>USDC Wallet</span>
                                <i></i>
                                <span>Local Currency</span>
                                <i></i>
                                <span>MoMo / Bank</span>
                            </div>
                            <footer>Withdrawals support both bank accounts and mobile money wallets, with status tracking.</footer>
                        </article>
                    </div>
                </div>
            </section>

            <section id="crypto" class="section-dark crypto-section">
                <div class="container split-grid">
                    <div>
                        <span class="kicker">Crypto Made Simple</span>
                        <h2>A premium crypto wallet without the noise.</h2>
                        <p>Buy, sell, hold, and send popular digital assets like BTC, ETH, USDT, USDC, BNB, and SOL from a clean wallet designed for everyday money movement.</p>
                        <div class="crypto-highlights" aria-label="Crypto wallet highlights">
                            <div><strong>6+</strong><span>Popular assets</span></div>
                            <div><strong>1 wallet</strong><span>Stablecoins and crypto</span></div>
                            <div><strong>Live</strong><span>Transparent rates</span></div>
                        </div>
                        <div class="tx-list" data-tx-history></div>
                    </div>
                    <div class="crypto-wallet">
                        <div class="wallet-header">
                            <span>Premium Crypto Wallet</span>
                            <strong>$8,526.40</strong>
                        </div>
                        <div class="wallet-balance">
                            <span>Total balance</span>
                            <strong>$8,526.40</strong>
                            <small>Stablecoins, Bitcoin, Ethereum and more in one view</small>
                        </div>
                        <div data-crypto-assets></div>
                        <div class="crypto-actions" data-crypto-actions></div>
                    </div>
                </div>
            </section>

            <section id="swap" class="section-dark swap-section">
                <div class="container split-grid">
                    <div>
                        <span class="kicker">Instant Conversion</span>
                        <h2>Swap your currencies with a few clicks.</h2>
                        <p>Move seamlessly between GHS, NGN, KES, ZAR, USD and crypto assets like USDC, BTC and ETH.</p>
                        <div class="point-list" data-swap-points></div>
                        <button class="btn btn-light js-scroll" data-target="waitlist" type="button">Learn More</button>
                    </div>
                    <form class="swap-card" data-swap-form>
                        <span>Swap</span>
                        <label>
                            <small>You Send</small>
                            <div><input type="text" inputmode="decimal" data-swap-amount value="5000"><select data-swap-from></select></div>
                        </label>
                        <button class="swap-flip" data-swap-flip type="button">⇅</button>
                        <label>
                            <small>You Receive</small>
                            <div><output data-swap-output>73,529.41</output><select data-swap-to></select></div>
                        </label>
                        <div class="rate-row"><span data-swap-rate></span><em><i></i>Est. rate</em></div>
                        <button class="btn btn-light full" data-swap-submit type="submit">Swap Now</button>
                        <div class="swap-toast" data-swap-toast hidden>Swaps go live at launch. You're on the early access list!</div>
                    </form>
                </div>
            </section>

            <section id="how" class="section-dark how-section">
                <div class="container">
                    <div class="section-heading">
                        <span>Getting Started</span>
                        <h2>Four steps to financial freedom.</h2>
                    </div>
                    <div class="steps-grid" data-steps></div>
                </div>
            </section>

            <section id="security" class="section-dark security-section">
                <div class="container">
                    <div class="section-heading">
                        <span>Built On Trust</span>
                        <h2>Security you can bank on.</h2>
                        <p>eCoinza is built with African users and businesses in mind, from encrypted infrastructure to transparent pricing.</p>
                    </div>
                    <div class="badge-grid" data-trust-badges></div>
                </div>
            </section>

            <section id="testimonials" class="section-dark testimonials-section">
                <div class="container">
                    <div class="section-heading">
                        <span>Real People, Real Impact</span>
                        <h2>Trusted across Africa and the diaspora.</h2>
                    </div>
                    <div class="testimonial-carousel" aria-label="Customer testimonials">
                        <button type="button" data-testimonial-prev aria-label="Previous testimonial">‹</button>
                        <div class="testimonial-viewport" data-testimonials></div>
                        <button type="button" data-testimonial-next aria-label="Next testimonial">›</button>
                    </div>
                    <div class="testimonial-dots" data-testimonial-dots></div>
                </div>
            </section>

            <section id="waitlist" class="section-light waitlist-section">
                <div class="waitlist-inner">
                    <div class="section-heading dark-heading">
                        <span data-waitlist-count>2,847 people already joined</span>
                        <h2>Be first in line for launch.</h2>
                        <p>Join the waitlist and get early access to eCoinza before public launch.</p>
                    </div>
                    <form class="waitlist-form" data-waitlist-form novalidate>
                        <div class="field full"><label for="fullName">Full Name</label><input id="fullName" name="fullName" placeholder="Ama Owusu" type="text"><small data-error-for="fullName"></small></div>
                        <div class="field"><label for="email">Email Address</label><input id="email" name="email" placeholder="ama@email.com" type="email"><small data-error-for="email"></small></div>
                        <div class="field"><label for="phone">Phone Number</label><input id="phone" name="phone" placeholder="+233 24 000 0000" type="tel"><small data-error-for="phone"></small></div>
                        <div class="field"><label for="country">Country</label><select id="country" name="country" data-country-options></select><small data-error-for="country"></small></div>
                        <div class="field"><label for="userType">I am a...</label><select id="userType" name="userType" data-user-type-options></select><small data-error-for="userType"></small></div>
                        <div class="field full"><label for="interest">Main Interest</label><select id="interest" name="interest" data-interest-options></select><small data-error-for="interest"></small></div>
                        <button class="btn btn-dark full" type="submit" data-submit-label>Join the eCoinza Waitlist</button>
                    </form>
                    <div class="success-card" data-success-card hidden>
                        <i></i>
                        <h3>You're on the list!</h3>
                        <p data-success-message></p>
                        <button type="button" class="btn btn-outline-dark" data-reset-form>Add another person</button>
                    </div>
                </div>
            </section>

            <section id="faq" class="section-dark faq-section">
                <div class="container narrow">
                    <div class="section-heading">
                        <span>Questions</span>
                        <h2>Frequently asked questions.</h2>
                    </div>
                    <div class="faq-list" data-faqs></div>
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
                <div><h3>Product</h3><div data-footer-product></div></div>
                <div><h3>Explore</h3><div data-footer-explore></div></div>
                <div><h3>Discover eCoinza</h3><div data-footer-company></div></div>
            </div>
            <div class="container footer-bottom">
                <div><img src="{{ asset('images/ecoinza/logo-white.png') }}" alt="eCoinza" class="footer-logo"><span>© 2026. All rights reserved.</span></div>
                <div data-footer-legal></div>
            </div>
            <div class="footer-map"><svg viewBox="0 0 1400 460" preserveAspectRatio="xMidYMax slice" data-footer-map></svg></div>
        </footer>

        <div class="toast" data-page-toast hidden>
            <i></i><span>You're on the list. Welcome to eCoinza!</span>
        </div>
    </div>
</body>
</html>
