import { PenTool, Users, Zap, Share2, ArrowRight } from "lucide-react"
import { Button } from "@repo/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <PenTool className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold tracking-tight">DrawBoard</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition"
              >
                Showcase
              </a>
              <a href="#pricing" className="text-xs font-medium text-muted-foreground hover:text-foreground transition">
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-3">
             <Link href="/signin">
             <Button size="md">Sign In</Button>
             </Link>
             <Link href="/signup">
             <Button size="md">Sign Up</Button>
             </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-4 py-1.5">
                    New: Infinite Canvas
                  </p>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
                  Think. <span className="text-primary">Sketch.</span> <br className="hidden sm:block" />
                  <span className="text-primary">Collaborate.</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-7 font-medium">
                  The infinite canvas for your ideas. DrawBoard brings your team together to sketch, design, and
                  brainstorm in real-time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full gap-2 h-12 px-8 font-semibold text-sm">
                  Start Drawing Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 font-semibold text-sm bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                No credit card required. Free forever plan included.
              </p>
            </div>

            {/* Right Visual */}
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/15 to-accent/10 border-2 border-primary/20 flex items-center justify-center shadow-2xl">
                <div className="space-y-6 p-8 w-full">
                  <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
                    <PenTool className="h-20 w-20 text-primary opacity-60" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-14 rounded-xl bg-primary/20 border-2 border-primary/30" />
                    <div className="h-14 rounded-xl bg-primary/20 border-2 border-primary/30" />
                    <div className="h-14 rounded-xl bg-primary/20 border-2 border-primary/30" />
                    <div className="h-14 rounded-xl bg-primary/20 border-2 border-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-border px-4 py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Trusted by teams worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition duration-300">
              <div className="text-sm font-bold text-foreground">Figma</div>
            </div>
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition duration-300">
              <div className="text-sm font-bold text-foreground">Slack</div>
            </div>
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition duration-300">
              <div className="text-sm font-bold text-foreground">Notion</div>
            </div>
            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition duration-300">
              <div className="text-sm font-bold text-foreground">Zapier</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
              Powerful features for creative teams
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-medium leading-6">
              Everything you need to sketch, design, and collaborate seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <PenTool className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Infinite Canvas</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Draw freely without boundaries. Your canvas expands as you create, perfect for sketching big ideas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Real-Time Collaboration</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Invite teammates and sketch together instantly. See changes live with zero latency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Optimized for speed. Experience smooth, responsive drawing with zero lag.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Share2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Easy Sharing</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Share boards with a link or export as PNG, SVG, or PDF instantly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <PenTool className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Rich Drawing Tools</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Extensive brush styles, shapes, and customization options for your unique style.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Version History</h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Never lose your work. Access previous versions and restore anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="px-4 py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
                Collaboration Made Simple
              </h2>
              <p className="text-base text-muted-foreground leading-7 font-medium">
                Bring your entire team into the creative process. Chat, comment, and iterate together on the same
                canvas.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Multiple team members drawing simultaneously
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Built-in comments and annotations
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Permission controls and sharing settings
                  </span>
                </li>
              </ul>
              <Button size="lg" className="rounded-full gap-2 h-12 px-8 text-sm font-semibold w-fit">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/15 border-2 border-primary/25 flex items-center justify-center shadow-xl">
                <div className="w-full h-full rounded-3xl flex items-center justify-center text-muted-foreground">
                  <span className="text-center">
                    <Users className="h-28 w-28 mx-auto mb-4 opacity-40" />
                    <p className="text-sm font-semibold">Collaboration in action</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
              Ready to start sketching?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-7 font-medium">
              Join thousands of creative teams using DrawBoard to bring their ideas to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full gap-2 h-12 px-8 text-sm font-semibold">
              Start Drawing Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-sm font-semibold bg-transparent">
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            Free forever. No credit card required. Upgrade anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 py-12 md:py-16 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <PenTool className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-sm">DrawBoard</span>
              </div>
              <p className="text-xs text-muted-foreground leading-6 font-medium">
                The collaborative whiteboard for creative minds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">Product</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">Company</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">Legal</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">Follow</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition duration-200">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-medium">
            <p>&copy; 2025 DrawBoard. All rights reserved.</p>
            <p>Made with care for creative teams</p>
          </div>
        </div>
      </section>
    </div>
  )
}
