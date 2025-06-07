import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider, keyframes } from "styled-components";
import {
  FaShieldAlt,
  FaRocket,
  FaGlobeAmericas,
  FaUserShield,
  FaStar,
  FaChartLine,
  FaCogs,
  FaDiscord,
  FaServer
} from "react-icons/fa";
import { GiCube } from "react-icons/gi";

// Nebula background animation
const nebulaAnim = keyframes`
  0% { background-position: 0% 50%, 100% 50%; }
  50% { background-position: 100% 50%, 0% 50%; }
  100% { background-position: 0% 50%, 100% 50%; }
`;

const theme = {
  colors: {
    background: "#0a0a1a",
    magenta: "#ff00cc",
    magentaDark: "#990066",
    text: "#fafaff",
    card: "#18182a",
    accent: "#a700ff",
    cardGlow: "#ff00cc55",
    accentGlow: "#a700ff55"
  }
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Montserrat', 'Orbitron', 'Inter', 'Segoe UI', Arial, sans-serif;
    margin: 0;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed;
    z-index: 0;
    left: 0; right: 0; top: 0; bottom: 0;
    pointer-events: none;
    background: radial-gradient(ellipse at 20% 40%, #ff00cc33 0%, transparent 70%),
                radial-gradient(ellipse at 80% 70%, #a700ff44 0%, transparent 65%);
    background-size: 200% 200%, 200% 200%;
    background-repeat: no-repeat;
    animation: ${nebulaAnim} 20s linear infinite;
    opacity: 0.8;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
`;

const HeaderBar = styled.header`
  padding: 2.5rem 0 1.3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background: linear-gradient(180deg, #0a0a1a 70%, #18182a 100%);
  z-index: 2;
  position: relative;
`;

const Logo = styled.div`
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff00cc 60%, #a700ff 100%);
  border-radius: 18px;
  box-shadow: 0 0 36px 0 #ff00cc55, 0 0 0 6px #0a0a1a;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-family: 'Orbitron', 'Montserrat', sans-serif;
  background: linear-gradient(90deg, #ff00cc, #a700ff 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background: #18182a;
  box-shadow: 0 2px 16px 0 #0002;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TabButton = styled.button<{ active?: boolean }>`
  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(90deg, ${theme.colors.magenta}, ${theme.colors.accent})`
      : "transparent"};
  color: ${({ active, theme }) => (active ? "#fff" : theme.colors.magenta)};
  border: none;
  outline: none;
  font-size: 1.18rem;
  font-family: 'Montserrat', 'Orbitron', sans-serif;
  font-weight: 700;
  padding: 1.08rem 2.3rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  border-bottom: ${({ active, theme }) =>
    active ? `3.5px solid ${theme.colors.accent}` : "3.5px solid transparent"};
  box-shadow: ${({ active, theme }) => active ? `0 2px 16px 0 ${theme.colors.cardGlow}` : "none"};
  position: relative;
  z-index: 1;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.magenta}22;
    color: #fff;
  }
`;

const Section = styled.section<{ animate?: boolean }>`
  max-width: 980px;
  margin: 3.2rem auto 2.5rem auto;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 28px;
  padding: 2.7rem 2.6rem 1.7rem 2.6rem;
  box-shadow: 0 6px 48px 0 #ff00cc18, 0 1.5px 0.5px 0 #a700ff18;
  border: 1.5px solid ${({ theme }) => theme.colors.magentaDark}55;
  position: relative;
  animation: ${fadeIn} 0.8s cubic-bezier(.42,1.7,.59,1) both;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.magenta};
  margin-bottom: 1.5rem;
  font-size: 2.1rem;
  font-weight: 900;
  font-family: 'Orbitron', 'Montserrat', sans-serif;
  letter-spacing: 1.2px;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 2.1rem;
  h2 {
    font-size: 2.3rem;
    font-family: 'Orbitron', 'Montserrat', sans-serif;
    background: linear-gradient(90deg, #ff00cc 75%, #a700ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.2rem;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 1.28rem;
    color: #eee;
    margin-bottom: 2.1rem;
    font-family: 'Montserrat', 'Inter', sans-serif;
  }
`;

const GlowButton = styled.a`
  display: inline-block;
  margin-top: 1.6rem;
  background: linear-gradient(90deg, #ff00cc 70%, #a700ff 100%);
  color: #fff;
  padding: 1.07rem 2.6rem;
  font-size: 1.26rem;
  border-radius: 15px;
  font-weight: 900;
  font-family: 'Montserrat', 'Orbitron', sans-serif;
  text-decoration: none;
  letter-spacing: 1px;
  transition: background 0.15s, box-shadow 0.18s, transform 0.12s;
  box-shadow: 0 0 32px 0 #ff00cc33, 0 1.5px 0.5px 0 #a700ff18;
  border: none;
  cursor: pointer;
  &:hover, &:focus {
    transform: scale(1.05);
    background: linear-gradient(90deg, #ff00cc 40%, #a700ff 100%);
    box-shadow: 0 0 36px 4px #a700ff44, 0 2px 4px 0 #ff00cc33;
    color: #fff;
  }
`;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 2.1rem;
  margin: 2.2rem 0 1.5rem 0;
`;

const HomeCard = styled.div`
  background: linear-gradient(135deg, #191928 90%, #22182c 100%);
  border-radius: 18px;
  padding: 1.5rem 1.1rem 1.35rem 1.1rem;
  border: 1.6px solid ${({ theme }) => theme.colors.accent}33;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  box-shadow: 0 2px 36px 0 #a700ff22, 0 1.5px 0.5px 0 #ff00cc18;
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
  transition: box-shadow 0.18s, border 0.18s, transform 0.18s;
  position: relative;
  z-index: 1;
  &:hover {
    border: 1.8px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 7px 28px 0 #ff00cc55, 0 2.5px 1.5px 0 #a700ff55;
    transform: translateY(-7px) scale(1.03);
  }
  h3 {
    color: ${({ theme }) => theme.colors.magenta};
    font-size: 1.15rem;
    margin-bottom: 0.4rem;
    margin-top: 0.1rem;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.52em;
  }
  p {
    margin: 0;
    color: #e0e0f0;
    font-size: 1rem;
    font-family: 'Montserrat', 'Inter', sans-serif;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin: 2rem 0 1.5rem 0;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2.1rem;
  font-family: 'Orbitron', 'Montserrat', sans-serif;
  font-weight: 800;
  text-shadow: 0 0 18px #ff00cc44;
  text-align: center;
  span {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.text};
    display: block;
    font-family: 'Montserrat', 'Inter', sans-serif;
    font-weight: 100;
    margin-top: 0.2rem;
    letter-spacing: 0.3px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 2.1rem;
  margin-top: 2.2rem;
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, #18182a 90%, #191928 100%);
  border-radius: 18px;
  padding: 1.45rem 1.1rem 1.25rem 1.1rem;
  border: 1.6px solid ${({ theme }) => theme.colors.accent}33;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  box-shadow: 0 2px 36px 0 #a700ff22, 0 1.5px 0.5px 0 #ff00cc18;
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  transition: box-shadow 0.18s, border 0.18s, transform 0.18s;
  position: relative;
  z-index: 1;
  &:hover {
    border: 1.8px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 7px 28px 0 #ff00cc55, 0 2.5px 1.5px 0 #a700ff55;
    transform: translateY(-7px) scale(1.03);
  }
  h3 {
    color: ${({ theme }) => theme.colors.magenta};
    font-size: 1.21rem;
    margin-bottom: 0.5rem;
    margin-top: 0.1rem;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.52em;
  }
  p {
    margin: 0;
    color: #e0e0f0;
    font-size: 1.07rem;
    font-family: 'Montserrat', 'Inter', sans-serif;
  }
`;

const PricingTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.3rem;
  align-items: stretch;
  justify-content: center;
  margin-top: 2.2rem;
`;

const PricingCard = styled.div<{highlighted?: boolean}>`
  background: ${({ highlighted, theme }) => highlighted ? "linear-gradient(120deg,#24104a 80%,#2c0e43 100%)" : "#1a1030"};
  border: 2.7px solid ${({ theme }) => theme.colors.magenta};
  border-radius: 22px;
  color: ${({ theme }) => theme.colors.text};
  padding: 2.35rem 2.7rem;
  min-width: 245px;
  max-width: 330px;
  text-align: center;
  box-shadow: 0 0 34px 0 #ff00cc44, 0 1.5px 0.5px 0 #a700ff18;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: box-shadow 0.2s, border 0.2s, transform 0.15s;
  &:hover {
    border: 2.7px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 56px 0 #ff00cc77, 0 2.5px 1.5px 0 #a700ff77;
    transform: translateY(-9px) scale(1.045);
  }
  h3 {
    margin-bottom: 1.3rem;
    color: ${({ theme }) => theme.colors.magenta};
    font-size: 1.47rem;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    font-weight: 900;
  }
  .price {
    font-size: 2.26rem;
    margin-bottom: 1.13rem;
    background: linear-gradient(90deg, #ff00cc, #a700ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 860;
    font-family: 'Orbitron', 'Montserrat', sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
    color: #ccc;
    font-size: 1.07rem;
    text-align: left;
    margin-bottom: 1.3rem;
    min-height: 110px;
    font-family: 'Montserrat', 'Inter', sans-serif;
  }
  button {
    background: ${({ theme }) => theme.colors.magenta};
    color: #fff;
    border: none;
    font-size: 1.13rem;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    font-weight: 800;
    padding: 0.9rem 1.7rem;
    border-radius: 13px;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.17s;
    margin-top: 1.1rem;
    box-shadow: 0 0 18px 0 #a700ff33;
    &:hover, &:focus {
      background: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 24px 2px #ff00cc33;
      color: #fff;
    }
  }
  .ribbon {
    position: absolute;
    right: -54px;
    top: 18px;
    background: linear-gradient(90deg, #ff00cc, #a700ff);
    color: #fff;
    font-weight: bold;
    font-size: 0.99rem;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    padding: 0.3em 2.5em;
    transform: rotate(25deg);
    z-index: 2;
    box-shadow: 0 0 18px 0 #a700ff88;
    letter-spacing: 1.2px;
  }
`;

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1380891636145586359/IM109x5aNd8btu3Mb8gEwqr2odXYA8I-sD25KRLS6ecbdTMqo_NE-xRNOPj-DbBl5x9A";

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  max-width: 440px;
  margin: 0 auto;
  input, textarea {
    padding: 1.1rem;
    border: 1.3px solid ${({ theme }) => theme.colors.magentaDark};
    border-radius: 9px;
    font-size: 1.09rem;
    background: #161425;
    color: #fff;
    font-family: 'Montserrat', 'Inter', sans-serif;
    resize: vertical;
    outline: none;
    transition: border 0.15s;
    &:focus {
      border: 1.8px solid ${({ theme }) => theme.colors.accent};
    }
  }
  button {
    background: linear-gradient(90deg, #ff00cc, #a700ff);
    color: #fff;
    border: none;
    padding: 1.1rem 0;
    font-size: 1.22rem;
    border-radius: 11px;
    font-family: 'Montserrat', 'Orbitron', sans-serif;
    font-weight: 800;
    cursor: pointer;
    transition: background 0.18s, box-shadow 0.15s;
    box-shadow: 0 0 18px 0 #a700ff44;
    &:hover, &:focus {
      background: linear-gradient(90deg, #a700ff, #ff00cc);
      box-shadow: 0 0 28px 2px #ff00cc44;
    }
  }
`;

function ContactUsForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Discord embed formatting
    const payload = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0xff00cc,
          fields: [
            { name: "Name", value: name || "N/A" },
            { name: "Email", value: email || "N/A" },
            { name: "Message", value: message || "N/A" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");

      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted)
    return (
      <div style={{ textAlign: "center", color: "#ff00cc", margin: "2rem 0" }}>
        <b>Thank you!</b> Your message has been sent.
      </div>
    );

  return (
    <ContactForm onSubmit={handleSubmit} autoComplete="off">
      <input name="name" type="text" placeholder="Your Name" required disabled={submitting} />
      <input name="email" type="email" placeholder="Your Email" required disabled={submitting} />
      <textarea name="message" rows={5} placeholder="Your server IP & how we can help?" required disabled={submitting} />
      <button type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
      {error && (
        <div style={{ color: "#ff4f80", marginTop: "0.5rem", textAlign: "center" }}>{error}</div>
      )}
    </ContactForm>
  );
}

const Footer = styled.footer`
  text-align: center;
  color: #ff00cc88;
  margin: 3rem 0 1.7rem 0;
  font-size: 1.02rem;
  font-family: 'Montserrat', 'Orbitron', sans-serif;
  position: relative;
  z-index: 2;
`;

type TabType = "home" | "features" | "pricing" | "contact";

export default function App() {
  const [tab, setTab] = useState<TabType>("home");

  // Realistic stats (update with your actual numbers if available)
  const stats = [
    { icon: <FaServer />, value: "10+", label: "Servers Protected" },
    { icon: <FaShieldAlt />, value: "99.99% Uptime", label: "on Our Network" },
    { icon: <FaDiscord />, value: "Join Us", label: "on Discord" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderBar>
        <Logo>
          <GiCube color="#fff" size={36} style={{filter:"drop-shadow(0 0 5px #ff00cc)"}} />
        </Logo>
        <Title>ProtectX</Title>
      </HeaderBar>
      <NavBar>
        <TabButton active={tab === "home"} onClick={() => setTab("home")}>Home</TabButton>
        <TabButton active={tab === "features"} onClick={() => setTab("features")}>Features</TabButton>
        <TabButton active={tab === "pricing"} onClick={() => setTab("pricing")}>Pricing</TabButton>
        <TabButton active={tab === "contact"} onClick={() => setTab("contact")}>Contact Us</TabButton>
      </NavBar>

      <div style={{minHeight: 600, zIndex: 1, position: "relative"}}>
      {tab === "home" && (
        <Section animate key="home">
          <Hero>
            <h2>Minecraft Server DDoS Protection</h2>
            <p>
              <b>ProtectX</b> helps keep your Minecraft server online and smooth. Simple setup, no plugins required, and real human support.
            </p>
            <GlowButton href="#" onClick={e => {e.preventDefault(); setTab("pricing");}}>
              See Minecraft Plans
            </GlowButton>
          </Hero>

          <StatsBar>
            {stats.map((stat, i) => (
              <Stat key={i}>{stat.icon} {stat.value}
                <span>{stat.label}</span>
              </Stat>
            ))}
          </StatsBar>

          <HomeGrid>
            <HomeCard>
              <span><FaShieldAlt color={theme.colors.magenta} size={28}/></span>
              <div>
                <h3>Reliable DDoS Protection</h3>
                <p>Stop most Minecraft-targeted attacks. Your IP is hidden and traffic is filtered before it reaches your server.</p>
              </div>
            </HomeCard>
            <HomeCard>
              <span><FaDiscord color={theme.colors.accent} size={28}/></span>
              <div>
                <h3>Active Support</h3>
                <p>Get help from real people via Discord or email. No bots, no long waits.</p>
              </div>
            </HomeCard>
            <HomeCard>
              <span><FaServer color={theme.colors.accent} size={28}/></span>
              <div>
                <h3>Works with Any Host</h3>
                <p>ProtectX works no matter where your server is hosted. Just point your DNS to us.</p>
              </div>
            </HomeCard>
            <HomeCard>
              <span><FaCogs color={theme.colors.magentaDark} size={28}/></span>
              <div>
                <h3>No Plugins Needed</h3>
                <p>All protection is at the network level. No impact on TPS or server performance.</p>
              </div>
            </HomeCard>
          </HomeGrid>
        </Section>
      )}

      {tab === "features" && (
        <Section animate key="features">
          <SectionTitle>Features for Minecraft Servers</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <span><FaRocket color={theme.colors.magenta} size={30}/></span>
              <div>
                <h3>Zero-Lag Mitigation</h3>
                <p>Our filtering is tuned for Minecraft traffic—legit players play, bots get booted. No false kicks, no lag spikes.</p>
              </div>
            </FeatureCard>
            <FeatureCard>
              <span><FaGlobeAmericas color={theme.colors.accent} size={30}/></span>
              <div>
                <h3>Worldwide POPs</h3>
                <p>Nodes on every continent for low ping and instant absorption of even the largest attacks.</p>
              </div>
            </FeatureCard>
            <FeatureCard>
              <span><FaUserShield color={theme.colors.magenta} size={30}/></span>
              <div>
                <h3>Minecraft-Smart Rules</h3>
                <p>We block bot floods, join/leave spam, and layer-7 exploits—while letting real Minecrafters in instantly!</p>
              </div>
            </FeatureCard>
            <FeatureCard>
              <span><FaStar color={theme.colors.magentaDark} size={30}/></span>
              <div>
                <h3>One-Click Protection</h3>
                <p>Easiest setup on the market: change your DNS, and you’re protected in minutes. No plugins required.</p>
              </div>
            </FeatureCard>
            <FeatureCard>
              <span><FaChartLine color={theme.colors.accent} size={28}/></span>
              <div>
                <h3>Realtime Analytics</h3>
                <p>Live dashboards show connections, attacks blocked, and player trends. Analyze traffic and attacks with beautiful charts.</p>
              </div>
            </FeatureCard>
            <FeatureCard>
              <span><FaCogs color={theme.colors.magenta} size={28}/></span>
              <div>
                <h3>Customizable Filters</h3>
                <p>Tailor protection settings for your server. Advanced users can fine-tune rules and allowlists/denylists.</p>
              </div>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      )}

      {tab === "pricing" && (
        <Section animate key="pricing">
          <SectionTitle>Minecraft Plans & Pricing</SectionTitle>
          <PricingTable>
            <PricingCard>
              <h3>Basic</h3>
              <div className="price">$12/mo</div>
              <ul>
                <li>120 Tbit/s+ Network Capacity</li>
                <li>Unmetered Bandwidth</li>
                <li>Protect Unlimited Domains</li>
                <li>4 Available Locations Worldwide</li>
                <li>1 Network</li>
                <li>1 Backend Server</li>
                <li>Advanced Antibot Protection</li>
                <li>Standard Ports</li>
              </ul>
              <button>Get Basic</button>
            </PricingCard>
            <PricingCard highlighted>
              <div className="ribbon">Most Popular</div>
              <h3>Advance</h3>
              <div className="price">$30/mo</div>
              <ul>
                <li>120 Tbit/s+ Network Capacity</li>
                <li>Unmetered Bandwidth</li>
                <li>Protect Unlimited Domains</li>
                <li>4 Available Locations Worldwide</li>
                <li>1 Network</li>
                <li>1 Backend Server</li>
                <li>Advanced Antibot Protection</li>
                <li>Minecraft Ports Enabled: 25565</li>
                <li>Priority Support</li>
                <li>Real-time Traffic Analytics Dashboard</li>
                <li>Customizable Filtering Rules</li>
              </ul>
              <button>Get Advance</button>
            </PricingCard>
            <PricingCard>
              <h3>Business</h3>
              <div className="price">Custom</div>
              <ul>
                <li>120 Tbit/s+ Network Capacity</li>
                <li>Unmetered Bandwidth</li>
                <li>Protect Unlimited Domains</li>
                <li>4+ Available Locations</li>
                <li>Multiple Networks & Backend Servers</li>
                <li>Advanced Antibot Protection with AI-driven Mitigation</li>
                <li>Full Port Range Support</li>
                <li>Dedicated Account Manager</li>
                <li>SLA with Guaranteed Uptime</li>
                <li>Custom Integration & API Access</li>
              </ul>
              <button>Go Business</button>
            </PricingCard>
          </PricingTable>
        </Section>
      )}

      {tab === "contact" && (
        <Section animate key="contact">
          <SectionTitle>Contact Us</SectionTitle>
          <ContactUsForm />
        </Section>
      )}
      </div>

      <Footer>
        &copy; {new Date().getFullYear()} ProtectX &mdash; Minecraft Server DDoS Protection.
      </Footer>
    </ThemeProvider>
  );
}