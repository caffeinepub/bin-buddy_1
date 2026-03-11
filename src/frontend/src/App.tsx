import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Mail,
  Menu,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Sparkle SVG Decorator ──────────────────────────────────────────────────
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.2H22l-6.4 4.8 2.4 7.2L12 17l-6 4.2 2.4-7.2L2 9.2h7.6z" />
    </svg>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-blue/10 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-sm"
                style={{ background: "oklch(0.42 0.22 258 / 0.55)" }}
              />
              {/* Blue circle background */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/30 shadow-brand-sm"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.22 258) 0%, oklch(0.32 0.2 258) 60%, oklch(0.38 0.18 245) 100%)",
                }}
              />
              {/* Mascot */}
              <img
                src="/assets/generated/bin-buddy-mascot-transparent.dim_400x400.png"
                alt="Bin Buddy mascot"
                className="relative z-10 w-9 h-9 object-contain drop-shadow-md"
              />
              {/* Sparkles */}
              <SparkleIcon className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-yellow-300 animate-sparkle-pulse z-20" />
              <SparkleIcon className="absolute -bottom-0.5 -left-0.5 w-2 h-2 text-brand-green-light animate-sparkle-pulse [animation-delay:0.7s] z-20" />
            </div>
            <span className="font-display font-bold text-xl text-brand-blue tracking-tight">
              Bin Buddy
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-brand-blue transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="mailto:sales.binbuddyinc@outlook.com"
              data-ocid="nav.primary_button"
            >
              <Button className="rounded-full bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold px-6 shadow-brand-sm">
                Get a Free Estimate
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-brand-blue transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-brand-blue/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-base font-semibold text-foreground/80 hover:text-brand-blue transition-colors"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:sales.binbuddyinc@outlook.com"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.primary_button"
              >
                <Button className="w-full rounded-full bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold mt-2">
                  Get a Free Estimate
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      data-ocid="hero.section"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-white/3 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-white/90 mb-6 border border-white/20"
            >
              <Leaf size={14} className="text-brand-green-light" />
              Eco-Friendly Commercial Bin Cleaning
            </motion.div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
              Keep Your Bins{" "}
              <span className="relative">
                <span className="text-brand-green-light">Spotlessly</span>
              </span>{" "}
              Clean
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-white/80 mb-4 leading-relaxed">
              Bin Buddy — we help commercial clients keep bins clean.
            </p>

            <p className="text-base sm:text-lg text-white/65 mb-10 leading-relaxed max-w-xl">
              Professional bin cleaning services for condos, apartment
              buildings, community centers, and retirement communities.
              Sanitary, eco-friendly, and hassle-free.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="rounded-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-base px-8 py-6 shadow-green-sm transition-all duration-200 hover:scale-105"
                >
                  Get a Free Estimate
                  <ChevronRight size={18} className="ml-1" />
                </Button>
              </a>
              <a href="#about" data-ocid="hero.secondary_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white text-white bg-white/15 hover:bg-white/25 font-bold text-base px-8 py-6 backdrop-blur-sm transition-all duration-200"
                >
                  Learn More
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-10 text-white/60 text-sm font-medium"
            >
              {[
                "✓ Eco-Friendly Products",
                "✓ Recurring Plans",
                "✓ No Hidden Fees",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Mascot with sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 blur-xl" />
            </div>

            {/* Main mascot circle */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-brand-lg" />

              {/* Mascot image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-float-mascot">
                <img
                  src="/assets/generated/bin-buddy-mascot-transparent.dim_400x400.png"
                  alt="Bin Buddy friendly mascot"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Sparkle decorations */}
              <SparkleIcon className="absolute top-2 right-4 w-6 h-6 text-yellow-300 animate-sparkle-pulse" />
              <SparkleIcon className="absolute top-8 left-2 w-4 h-4 text-brand-green-light animate-sparkle-pulse [animation-delay:0.5s]" />
              <SparkleIcon className="absolute bottom-8 right-2 w-5 h-5 text-yellow-200 animate-sparkle-pulse [animation-delay:1s]" />
              <SparkleIcon className="absolute bottom-4 left-8 w-3 h-3 text-white animate-sparkle-pulse [animation-delay:1.5s]" />
              <SparkleIcon className="absolute top-1/3 -right-4 w-4 h-4 text-brand-green-light animate-sparkle-float" />
              <SparkleIcon className="absolute top-1/4 -left-4 w-5 h-5 text-yellow-300 animate-sparkle-float [animation-delay:1s]" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-brand-md flex items-center gap-2 whitespace-nowrap"
              >
                <Droplets size={14} className="text-brand-blue" />
                <span className="text-xs font-bold text-brand-blue">
                  100% Eco-Friendly
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 60H1440V20C1200 50 960 60 720 40C480 20 240 10 0 20V60Z"
            fill="oklch(0.98 0.004 240)"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────
function AboutSection() {
  const services = [
    {
      icon: <Recycle size={28} />,
      color: "bg-brand-blue-pale text-brand-blue",
      title: "Commercial Bin Cleaning",
      desc: "We clean all types of commercial waste and recycling bins on-site using high-pressure hot water sanitation, removing grime, bacteria, and buildup with precision.",
    },
    {
      icon: <Leaf size={28} />,
      color: "bg-brand-green-pale text-brand-green",
      title: "Eco-Friendly Sanitation",
      desc: "Our biodegradable cleaning solutions are safe for the environment and highly effective against bacteria, mold, and odors — no harsh chemicals, ever.",
    },
    {
      icon: <Calendar size={28} />,
      color: "bg-brand-blue-pale text-brand-blue",
      title: "Recurring Service Plans",
      desc: "Choose biweekly or monthly cleaning schedules tailored to your property's needs. Set it and forget it — we handle the rest, consistently, on time.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-background"
      data-ocid="about.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale rounded-full px-4 py-2 text-sm font-semibold text-brand-blue mb-4">
            <Sparkles size={14} />
            What We Do
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4 tracking-tight">
            Professional Bin Cleaning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional bin cleaning that keeps your property spotless and
            hygienic — tailored for commercial properties of all sizes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-xs card-hover"
              data-ocid={`about.card.${i + 1}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Benefits Section ────────────────────────────────────────────────────────
function BenefitsSection() {
  const benefits = [
    {
      icon: <ShieldCheck size={24} />,
      color: "bg-brand-blue text-white",
      title: "Cleaner, Hygienic Bins",
      desc: "Regular professional cleaning eliminates bacteria, mold, and harmful pathogens that pose health risks to residents and visitors.",
    },
    {
      icon: <Wind size={24} />,
      color: "bg-brand-green text-white",
      title: "Odor & Pest Reduction",
      desc: "Say goodbye to foul smells and pest attraction from dirty bins. Our thorough cleaning keeps bins fresh and uninviting to insects and rodents.",
    },
    {
      icon: <Building2 size={24} />,
      color: "bg-brand-blue text-white",
      title: "Improved Curb Appeal",
      desc: "Clean, maintained bins enhance your property's appearance for residents and visitors alike, boosting overall property value and pride.",
    },
    {
      icon: <Heart size={24} />,
      color: "bg-brand-green text-white",
      title: "Friendly, Reliable Service",
      desc: "Our team shows up on schedule, every single time. No excuses, no delays — just dependable, friendly professionals you can count on.",
    },
    {
      icon: <Leaf size={24} />,
      color: "bg-brand-blue text-white",
      title: "Eco-Friendly Solutions",
      desc: "Biodegradable products that are safe for your property, residents, and the planet. We clean responsibly, leaving no harmful residues.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 section-alt"
      data-ocid="benefits.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale rounded-full px-4 py-2 text-sm font-semibold text-brand-blue mb-4">
            <Star size={14} />
            Why Choose Us
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4 tracking-tight">
            Why Choose Bin Buddy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We make bin maintenance effortless for property managers and
            building owners across the city.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-xs flex gap-5 card-hover"
              data-ocid={`benefits.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${benefit.color}`}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ─────────────────────────────────────────────────────────
function PricingSection() {
  const plans = [
    {
      name: "Per Clean",
      price: "$30",
      unit: "/ bin",
      desc: "Pay as you go. Perfect for one-time or occasional cleanings with no commitment required.",
      features: [
        "Single visit cleaning",
        "All bin types accepted",
        "On-site hot water sanitation",
        "No contracts",
      ],
      cta: "Book a Clean",
      href: "#contact",
      highlighted: false,
      badge: null,
    },
    {
      name: "Biweekly Plan",
      price: "Custom",
      unit: "quote",
      desc: "Regular biweekly service for high-traffic properties. Includes priority scheduling and dedicated support.",
      features: [
        "Biweekly service visits",
        "Priority scheduling",
        "Dedicated account manager",
        "Flexible bin count",
      ],
      cta: "Get a Quote",
      href: "#contact",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Monthly Plan",
      price: "Custom",
      unit: "quote",
      desc: "Monthly maintenance for lower-traffic properties. Consistent hygiene at a lower frequency.",
      features: [
        "Monthly service visits",
        "Scheduled reminders",
        "Online booking",
        "Volume discounts",
      ],
      cta: "Get a Quote",
      href: "#contact",
      highlighted: false,
      badge: null,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 bg-background"
      data-ocid="pricing.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-green-pale rounded-full px-4 py-2 text-sm font-semibold text-brand-green mb-4">
            <CheckCircle2 size={14} />
            Simple Pricing
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Pay per clean or save with a recurring plan designed
            for your property.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start pt-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "border-brand-blue bg-brand-blue text-white shadow-brand-lg scale-105"
                  : "border-border bg-card shadow-xs hover:shadow-brand-sm"
              }`}
              data-ocid={`pricing.card.${i + 1}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-green text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-green-sm whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-bold text-xl mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`font-display font-black text-4xl ${plan.highlighted ? "text-white" : "text-brand-blue"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-semibold ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}
                  >
                    {plan.unit}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/75" : "text-muted-foreground"}`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-white/20" : "bg-brand-green-pale"
                      }`}
                    >
                      <CheckCircle2
                        size={12}
                        className={
                          plan.highlighted ? "text-white" : "text-brand-green"
                        }
                      />
                    </div>
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/85"
                          : "text-foreground/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={plan.href} data-ocid={`pricing.card.button.${i + 1}`}>
                <Button
                  className={`w-full rounded-full font-bold py-3 transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-brand-blue hover:bg-white/90"
                      : "bg-brand-blue text-white hover:bg-brand-blue-dark"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center bg-brand-blue-pale rounded-3xl p-10 border border-brand-blue/15"
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-3">
            Need a custom plan for your property?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us for a personalized quote tailored to your building's
            specific needs — we work with properties of all sizes.
          </p>
          <a href="#contact" data-ocid="pricing.custom_button">
            <Button className="rounded-full bg-brand-blue text-white hover:bg-brand-blue-dark font-bold px-8 py-3 shadow-brand-sm">
              Contact Us
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────────────────
function ContactSection() {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        for (const el of document.querySelectorAll(
          "iframe[data-tally-src]:not([src])",
        )) {
          (el as HTMLIFrameElement).src = (el as HTMLElement).dataset.tallySrc!;
        }
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      loadEmbeds();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-24 hero-gradient relative overflow-hidden"
      data-ocid="contact.section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white mb-4">
            <Mail size={14} />
            Get in Touch
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Reach out for a free estimate or to learn more about our commercial
            bin cleaning services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h3 className="font-display font-bold text-2xl mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              <a
                href="tel:28992283610"
                className="flex items-center gap-4 group"
                data-ocid="contact.phone_link"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <div className="font-semibold text-lg group-hover:text-brand-green-light transition-colors">
                    28992283610
                  </div>
                </div>
              </a>

              <a
                href="mailto:sales.binbuddyinc@outlook.com"
                className="flex items-center gap-4 group"
                data-ocid="contact.email_link"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="font-semibold text-lg group-hover:text-brand-green-light transition-colors">
                    sales.binbuddyinc@outlook.com
                  </div>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/binbuddybiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors hover:text-brand-green-light"
                  aria-label="Instagram"
                  data-ocid="contact.instagram_link"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors hover:text-brand-green-light"
                  aria-label="Facebook"
                  data-ocid="contact.facebook_link"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Mascot decorative — vibrant hero-style, desktop only */}
            <div className="hidden lg:flex items-center justify-start mt-12">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-white/15 blur-xl" />
                </div>
                {/* Circle background */}
                <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-brand-lg" />
                {/* Mascot image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center animate-float-mascot">
                  <img
                    src="/assets/generated/bin-buddy-mascot-transparent.dim_400x400.png"
                    alt="Bin Buddy mascot"
                    className="w-40 h-40 object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Sparkle decorations */}
                <SparkleIcon className="absolute top-2 right-4 w-5 h-5 text-yellow-300 animate-sparkle-pulse" />
                <SparkleIcon className="absolute top-6 left-2 w-3.5 h-3.5 text-brand-green-light animate-sparkle-pulse [animation-delay:0.5s]" />
                <SparkleIcon className="absolute bottom-6 right-2 w-4 h-4 text-yellow-200 animate-sparkle-pulse [animation-delay:1s]" />
                <SparkleIcon className="absolute bottom-3 left-8 w-3 h-3 text-white animate-sparkle-pulse [animation-delay:1.5s]" />
                <SparkleIcon className="absolute top-1/3 -right-3 w-3.5 h-3.5 text-brand-green-light animate-sparkle-float" />
                <SparkleIcon className="absolute top-1/4 -left-3 w-4 h-4 text-yellow-300 animate-sparkle-float [animation-delay:1s]" />
              </div>
            </div>
          </motion.div>

          {/* Tally Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-white rounded-3xl p-8 shadow-brand-lg"
              data-ocid="contact.form"
            >
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Send a Message
              </h3>
              <iframe
                data-tally-src="https://tally.so/embed/ODPV9k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="466"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 60H1440V20C1200 50 960 60 720 40C480 20 240 10 0 20V60Z"
            fill="oklch(0.98 0.004 240)"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-white py-16"
      data-ocid="footer.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Mobile: simple circle */}
              <div className="md:hidden w-12 h-12 rounded-full overflow-hidden bg-brand-blue-pale flex items-center justify-center">
                <img
                  src="/assets/generated/bin-buddy-mascot-transparent.dim_400x400.png"
                  alt="Bin Buddy"
                  className="w-11 h-11 object-contain"
                />
              </div>
              {/* Desktop: vibrant hero-style logo */}
              <div className="hidden md:flex relative w-16 h-16 items-center justify-center flex-shrink-0">
                {/* Outer glow ring matching hero */}
                <div
                  className="absolute inset-0 rounded-full blur-md"
                  style={{ background: "oklch(0.42 0.22 258 / 0.7)" }}
                />
                {/* Circle background matching hero gradient */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-white/30 shadow-brand-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.22 258) 0%, oklch(0.32 0.2 258) 60%, oklch(0.38 0.18 245) 100%)",
                  }}
                />
                {/* Mascot */}
                <img
                  src="/assets/generated/bin-buddy-mascot-transparent.dim_400x400.png"
                  alt="Bin Buddy"
                  className="relative z-10 w-13 h-13 object-contain drop-shadow-2xl animate-float-mascot"
                  style={{ width: "52px", height: "52px" }}
                />
                {/* Sparkles */}
                <SparkleIcon className="absolute -top-1 -right-1 w-3.5 h-3.5 text-yellow-300 animate-sparkle-pulse" />
                <SparkleIcon className="absolute -bottom-1 -left-1 w-2.5 h-2.5 text-brand-green-light animate-sparkle-pulse [animation-delay:0.7s]" />
                <SparkleIcon className="absolute top-0 left-0 w-2 h-2 text-white animate-sparkle-float [animation-delay:1.2s]" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight">
                Bin Buddy
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Keeping commercial properties clean, one bin at a time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:28992283610"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                data-ocid="footer.phone_link"
              >
                <Phone size={14} />
                28992283610
              </a>
              <a
                href="mailto:sales.binbuddyinc@outlook.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                data-ocid="footer.email_link"
              >
                <Mail size={14} />
                sales.binbuddyinc@outlook.com
              </a>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/binbuddybiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Instagram"
                data-ocid="footer.instagram_link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Facebook"
                data-ocid="footer.facebook_link"
              >
                <Facebook size={16} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              {["About", "Benefits", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <span>© {currentYear} Bin Buddy. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
