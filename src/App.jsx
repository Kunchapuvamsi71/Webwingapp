import { useState, useRef } from "react";
import {
  Search,
  SlidersHorizontal,
  Plane,
  Hotel,
  TrainFront,
  Compass,
  Map as MapIcon,
  Star,
  ChevronRight,
  ChevronLeft,
  Home as HomeIcon,
  Bookmark,
  User,
  CalendarRange,
  Wallet,
  CloudSun,
  BookImage,
  Bell,
  Heart,
} from "lucide-react";

/* ---------------------------------------------------------
   WEBWING — dark, premium adventure-travel mobile homepage
   Palette: near-black navy base, electric purple accent,
   cyan / green / orange / pink used sparingly as data-color.
--------------------------------------------------------- */

const IMG = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const QUICK_SERVICES = [
  { key: "flights", label: "Flights", sub: "Best deals", icon: Plane, glow: "#A855F7" },
  { key: "hotels", label: "Hotels", sub: "Stay in comfort", icon: Hotel, glow: "#22D3EE" },
  { key: "transit", label: "Trains & Buses", sub: "Easy booking", icon: TrainFront, glow: "#34D399" },
  { key: "explore", label: "Explore", sub: "Top destinations", icon: Compass, glow: "#FB923C" },
  { key: "maps", label: "Maps", sub: "Navigate easily", icon: MapIcon, glow: "#F472B6" },
];

const FEATURED = [
  {
    name: "Santorini, Greece",
    tag: "Blue skies. White walls. Endless vibes.",
    seed: "santorini-webwing",
  },
  {
    name: "Kyoto, Japan",
    tag: "Ancient temples. Quiet gardens. Golden light.",
    seed: "kyoto-webwing",
  },
  {
    name: "Reykjavik, Iceland",
    tag: "Glacier air. Northern lights. Wild silence.",
    seed: "iceland-webwing",
  },
  {
    name: "Marrakech, Morocco",
    tag: "Spice markets. Desert wind. Living color.",
    seed: "marrakech-webwing",
  },
  {
    name: "Queenstown, New Zealand",
    tag: "Sheer cliffs. Cold rivers. Big sky.",
    seed: "queenstown-webwing",
  },
];

const PLAN_CARDS = [
  { key: "itinerary", label: "Create Itinerary", sub: "Day-wise plan", icon: CalendarRange, seed: "itinerary-plan" },
  { key: "budget", label: "Budget Tracker", sub: "Track your spend", icon: Wallet, seed: "budget-plan" },
  { key: "weather", label: "Weather", sub: "Be prepared", icon: CloudSun, seed: "weather-plan" },
  { key: "journal", label: "Travel Journal", sub: "Capture memories", icon: BookImage, seed: "journal-plan" },
];

const TRENDING = [
  { name: "Bali, Indonesia", rating: 4.8, seed: "bali-trend" },
  { name: "Paris, France", rating: 4.7, seed: "paris-trend" },
  { name: "Phuket, Thailand", rating: 4.6, seed: "phuket-trend" },
  { name: "Tokyo, Japan", rating: 4.8, seed: "tokyo-trend" },
];

const NAV = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "explore", label: "Explore", icon: Compass },
  { key: "trips", label: "My Trips", icon: CalendarRange },
  { key: "saved", label: "Saved", icon: Bookmark },
  { key: "profile", label: "Profile", icon: User },
];

/* ---------- tiny decorative marks (bat + web), very low opacity ---------- */

function BatMark({ className }) {
  return (
    <svg viewBox="0 0 200 90" className={className} fill="currentColor">
      <path d="M100 20c-8-14-30-20-44-10-3-10-16-14-24-8 6 4 8 10 6 16-16 2-30 12-38 26 14-6 26-8 36-6-8 8-12 18-10 30 8-10 18-16 28-18 4 10 12 18 22 22v10h8V70c10-4 18-12 22-22 10 2 20 8 28 18 2-12-2-22-10-30 10-2 22 0 36 6-8-14-22-24-38-26-2-6 0-12 6-16-8-6-21-2-24 8-14-10-36-4-44 10z" />
    </svg>
  );
}

function WebCorner({ className }) {
  return (
    <svg viewBox="0 0 120 120" className={className} stroke="currentColor" fill="none" strokeWidth="0.6">
      <path d="M0,0 Q60,10 40,60 Q20,100 0,120" />
      <path d="M0,0 Q70,25 60,70 Q45,105 20,120" />
      <path d="M0,0 Q80,45 80,80 Q75,105 55,120" />
      <path d="M0,0 L120,0" />
      <path d="M0,0 L0,120" />
      <path d="M0,0 L100,100" />
    </svg>
  );
}

/* ---------------------------------- app ---------------------------------- */

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const [saved, setSaved] = useState(() => new Set());
  const trendingScroller = useRef(null);

  const toggleSaved = (name) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const nextFeatured = () => setFeaturedIdx((i) => (i + 1) % FEATURED.length);
  const prevFeatured = () => setFeaturedIdx((i) => (i - 1 + FEATURED.length) % FEATURED.length);

  const scrollTrending = (dir) => {
    if (!trendingScroller.current) return;
    trendingScroller.current.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  const feature = FEATURED[featuredIdx];

  return (
    <div className="min-h-screen w-full bg-[#05060F] flex items-center justify-center py-6 px-3 ">
      {/* phone frame */}
      <div className="relative w-full max-w-[420px] h-[900px] rounded-[2.75rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(124,58,237,0.35)] border border-white/10 bg-[#05060F]">
        {/* ambient background glow */}
        <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-[#7C3AED] opacity-20 blur-[90px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-[#22D3EE] opacity-10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-10 -left-10 w-60 h-60 rounded-full bg-[#34D399] opacity-10 blur-[90px]" />

        {/* decorative web corner + bat marks, very subtle */}
        <WebCorner className="pointer-events-none absolute top-0 left-0 w-28 h-28 text-white/10" />
        <BatMark className="pointer-events-none absolute bottom-24 right-3 w-16 h-8 text-white/5 rotate-6" />
        <BatMark className="pointer-events-none absolute top-40 -left-6 w-20 h-9 text-white/5 -rotate-12" />

        <div className="relative z-10 h-full overflow-y-scroll no-scrollbar pb-24">
          {activeTab === "home" ? (
            <HomeScreen
              query={query}
              setQuery={setQuery}
              activeService={activeService}
              setActiveService={setActiveService}
              feature={feature}
              featuredIdx={featuredIdx}
              nextFeatured={nextFeatured}
              prevFeatured={prevFeatured}
              saved={saved}
              toggleSaved={toggleSaved}
              trendingScroller={trendingScroller}
              scrollTrending={scrollTrending}
            />
          ) : (
            <OtherScreen tabKey={activeTab} saved={saved} toggleSaved={toggleSaved} />
          )}
        </div>

        {/* bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="glass mx-3 mb-3 rounded-3xl px-2 py-2 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {NAV.map(({ key, label, icon: Icon }) => {
              const active = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300"
                  style={{
                    background: active
                      ? "linear-gradient(180deg, rgba(168,85,247,0.25), rgba(168,85,247,0.05))"
                      : "transparent",
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="transition-colors duration-300"
                    color={active ? "#C084FC" : "#6B7280"}
                  />
                  <span
                    className="text-[10px] font-medium transition-colors duration-300"
                    style={{ color: active ? "#C084FC" : "#6B7280" }}
                  >
                    {label}
                  </span>
                  {active && (
                    <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- home screen ------------------------------ */

function HomeScreen({
  query,
  setQuery,
  activeService,
  setActiveService,
  feature,
  featuredIdx,
  nextFeatured,
  prevFeatured,
  saved,
  toggleSaved,
  trendingScroller,
  scrollTrending,
}) {
  return (
    <div className="px-5 pt-6">
      {/* header */}
      <div className="flex items-center justify-between rise">
        <div className="flex items-center gap-2">
          <BatMark className="w-8 h-4 text-[#C084FC]" />
          <span className="font-display text-xl font-bold text-white tracking-tight">
            Webwing
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full glass flex items-center justify-center">
            <Bell size={16} color="#C7D2FE" />
          </button>
          <button className="w-10 h-10 rounded-full overflow-hidden border border-[#C084FC]/50">
            <img src={IMG("profile-webwing", 100, 100)} alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* hero */}
      <div className="mt-6 relative rounded-[2rem] overflow-hidden h-64 rise" style={{ animationDelay: "60ms" }}>
        <img
          src={IMG("hero-mountain-webwing", 900, 700)}
          alt="Traveler overlooking a mountain lake at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060F] via-[#05060F]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h1 className="font-display text-[26px] leading-[1.15] font-bold text-white">
            New places.
            <br />
            Bigger dreams.
            <br />
            With <span className="text-[#C084FC]">Webwing</span>.
          </h1>
          <p className="mt-2 text-[13px] text-white/70 max-w-[280px]">
            Your complete travel companion for a smoother, smarter journey.
          </p>
        </div>
      </div>

      {/* search */}
      <div className="mt-5 rise" style={{ animationDelay: "120ms" }}>
        <div className="glass rounded-2xl flex items-center gap-3 px-4 py-3.5">
          <Search size={18} color="#9CA3AF" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you want to go?"
            className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-500"
          />
          <button className="w-8 h-8 rounded-xl bg-[#A855F7]/15 flex items-center justify-center">
            <SlidersHorizontal size={15} color="#C084FC" />
          </button>
        </div>
      </div>

      {/* quick services */}
      <div className="mt-6 rise" style={{ animationDelay: "160ms" }}>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {QUICK_SERVICES.map(({ key, label, sub, icon: Icon, glow }) => {
            const active = activeService === key;
            return (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className="glass shrink-0 w-[104px] rounded-2xl px-3 py-4 flex flex-col items-start gap-3 transition-transform duration-200"
                style={{
                  transform: active ? "translateY(-3px)" : "none",
                  boxShadow: active ? `0 8px 24px ${glow}33` : "none",
                  borderColor: active ? `${glow}55` : undefined,
                }}
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${glow}22` }}
                >
                  <Icon size={17} color={glow} />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold text-white leading-tight">{label}</span>
                  <span className="block text-[10.5px] text-gray-500 mt-0.5">{sub}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* featured destination */}
      <div className="mt-7 rise" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-[15px] font-semibold text-white">Featured destination</h2>
          <div className="flex items-center gap-2">
            <button onClick={prevFeatured} className="w-7 h-7 rounded-full glass flex items-center justify-center">
              <ChevronLeft size={13} color="#C7D2FE" />
            </button>
            <button onClick={nextFeatured} className="w-7 h-7 rounded-full glass flex items-center justify-center">
              <ChevronRight size={13} color="#C7D2FE" />
            </button>
          </div>
        </div>
        <div className="relative rounded-[1.75rem] overflow-hidden h-52">
          <img
            key={feature.seed}
            src={IMG(feature.seed, 900, 600)}
            alt={feature.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060F] via-[#05060F]/30 to-transparent" />
          <div className="absolute top-4 right-4 text-[11px] text-white/70 glass px-2.5 py-1 rounded-full">
            {featuredIdx + 1}/{FEATURED.length}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-lg font-bold text-white">{feature.name}</h3>
            <p className="text-[12.5px] text-white/70 mt-1 max-w-[240px]">{feature.tag}</p>
            <button className="mt-3 inline-flex items-center gap-1.5 bg-[#A855F7] text-white text-[12.5px] font-semibold px-4 py-2 rounded-full shadow-[0_6px_20px_rgba(168,85,247,0.45)] active:scale-95 transition-transform">
              Explore now <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* plan your trip */}
      <div className="mt-7 rise" style={{ animationDelay: "240ms" }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-[15px] font-semibold text-white">Plan your trip</h2>
          <button className="text-[12px] text-[#C084FC] font-medium flex items-center gap-0.5">
            See all <ChevronRight size={13} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PLAN_CARDS.map(({ key, label, sub, icon: Icon, seed }) => (
            <button key={key} className="relative rounded-2xl overflow-hidden h-28 text-left">
              <img src={IMG(seed, 400, 300)} alt={label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060F] via-[#05060F]/50 to-transparent" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <Icon size={15} color="#C084FC" className="mb-1" />
                <span className="text-[12px] font-semibold text-white leading-tight">{label}</span>
                <span className="text-[10px] text-gray-400">{sub}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* trending destinations */}
      <div className="mt-7 rise" style={{ animationDelay: "280ms" }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-[15px] font-semibold text-white">Trending destinations</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => scrollTrending(-1)} className="w-7 h-7 rounded-full glass flex items-center justify-center">
              <ChevronLeft size={13} color="#C7D2FE" />
            </button>
            <button onClick={() => scrollTrending(1)} className="w-7 h-7 rounded-full glass flex items-center justify-center">
              <ChevronRight size={13} color="#C7D2FE" />
            </button>
          </div>
        </div>
        <div ref={trendingScroller} className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {TRENDING.map(({ name, rating, seed }) => {
            const isSaved = saved.has(name);
            return (
              <div key={name} className="glass shrink-0 w-40 rounded-2xl overflow-hidden">
                <div className="relative h-28">
                  <img src={IMG(seed, 300, 220)} alt={name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => toggleSaved(name)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur flex items-center justify-center"
                  >
                    <Heart size={13} fill={isSaved ? "#F472B6" : "none"} color={isSaved ? "#F472B6" : "#fff"} />
                  </button>
                </div>
                <div className="p-3">
                  <span className="block text-[12.5px] font-semibold text-white">{name}</span>
                  <span className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                    <Star size={11} fill="#FBBF24" color="#FBBF24" /> {rating.toFixed(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 mb-2 text-center text-[10.5px] text-gray-600 tracking-wide">
        Explore &nbsp;•&nbsp; Plan &nbsp;•&nbsp; Travel
      </div>
    </div>
  );
}

/* ------------------------- placeholder secondary screens ------------------------- */

function OtherScreen({ tabKey, saved, toggleSaved }) {
  const titles = {
    explore: "Explore the map",
    trips: "Your trips",
    saved: "Saved places",
    profile: "Your profile",
  };
  const subtitles = {
    explore: "Discover new corners of the world, curated for you.",
    trips: "Everything you've booked and planned, in one place.",
    saved: "Places you've marked to come back to.",
    profile: "Manage your details, preferences and travel history.",
  };

  if (tabKey === "saved") {
    const items = TRENDING.filter((t) => saved.has(t.name));
    return (
      <div className="px-5 pt-8 rise">
        <h2 className="font-display text-xl font-bold text-white">{titles.saved}</h2>
        <p className="text-[13px] text-gray-500 mt-1 mb-6">{subtitles.saved}</p>
        {items.length === 0 ? (
          <div className="glass rounded-2xl p-6 text-center">
            <Heart className="mx-auto mb-3" size={22} color="#F472B6" />
            <p className="text-[13px] text-gray-400">
              Nothing saved yet. Tap the heart on any destination to keep it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {items.map(({ name, rating, seed }) => (
              <div key={name} className="glass rounded-2xl overflow-hidden">
                <div className="relative h-28">
                  <img src={IMG(seed, 300, 220)} alt={name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => toggleSaved(name)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur flex items-center justify-center"
                  >
                    <Heart size={13} fill="#F472B6" color="#F472B6" />
                  </button>
                </div>
                <div className="p-3">
                  <span className="block text-[12.5px] font-semibold text-white">{name}</span>
                  <span className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                    <Star size={11} fill="#FBBF24" color="#FBBF24" /> {rating.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-5 pt-8 rise">
      <h2 className="font-display text-xl font-bold text-white">{titles[tabKey]}</h2>
      <p className="text-[13px] text-gray-500 mt-1 mb-6">{subtitles[tabKey]}</p>
      <div className="glass rounded-[1.75rem] h-72 flex items-center justify-center overflow-hidden relative">
        <img src={IMG(`${tabKey}-screen-webwing`, 700, 700)} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="" />
        <div className="relative text-center px-8">
          <BatMark className="w-14 h-7 text-[#C084FC]/60 mx-auto mb-3" />
          <p className="text-[13px] text-gray-300">This screen is part of the full Webwing experience — under construction for this preview.</p>
        </div>
      </div>
    </div>
  );
}
