import Link from "next/link";
import { getPublishedDaos, getCoreDaos } from "@/data/daos";
import { getLatestPosts } from "@/data/journal";
import { SHOP_URL } from "@/data/navigation";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  const coreDaos = getCoreDaos();
  const latestPosts = getLatestPosts(3);

  return (
    <div className="flex flex-col">
      {/* ===== HERO — 水墨气场（纯CSS，无外部图片依赖） ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 多层水墨渐变底色 — 完全不依赖外部图片 */}
        <div className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(160deg, #1a1a1a 0%, #2a2a28 25%, #1f1f1f 50%, #232320 75%, #1a1a1a 100%)",
          }}
        />
        {/* 宣纸纹理叠加 — SVG noise，数据URI内嵌，零网络依赖 */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: "256px 256px",
          }}
        />
        {/* 天青色水墨晕染光晕 */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            background:
            "radial-gradient(ellipse at 30% 40%, rgba(123,167,160,0.25) 0%, transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(123,167,160,0.15) 0%, transparent 50%)",
          }}
        />
        {/* 顶部微光 */}
        <div
          className="absolute top-0 left-0 w-full h-px z-10"
          style={{ background: "linear-gradient(to right, transparent, rgba(123,167,160,0.4), transparent)" }}
        />
        {/* 底部微光 */}
        <div
          className="absolute bottom-0 left-0 w-full h-px z-10"
          style={{ background: "linear-gradient(to right, transparent, rgba(123,167,160,0.3), transparent)" }}
        />

        {/* Hero 内容区 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto py-24">
          {/* 印章 — 朱砂红，传统中国印色 */}
          <div className="mb-10" style={{ animationDelay: "0.2s" }}>
            <div
              className="w-20 h-20 flex items-center justify-center"
              style={{
                border: "2.5px solid #b54434",
                transform: "rotate(3deg)",
                opacity: 0.85,
              }}
            >
              <span
                className="font-serif"
                style={{
                  color: "#b54434",
                  fontSize: "20px",
                  letterSpacing: "0.15em",
                }}
              >
                道
              </span>
            </div>
          </div>

          {/* Est. 标签 */}
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-8 animate-fade-in-up"
            style={{ color: "rgba(123,167,160,0.6)", animationDelay: "0.3s" }}
          >
            Est. 2024 &middot; Song Dynasty Aesthetics
          </p>

          {/* 主标题 DAO.top */}
          <h1
            className="font-serif font-normal tracking-[0.06em] leading-[1.1] mb-8 animate-fade-in-up"
            style={{
              color: "#f5f3ef",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              animationDelay: "0.5s",
            }}
          >
            DAO
            <span style={{ color: "rgba(123,167,160,0.5)" }}>.</span>
            <span style={{ color: "rgba(123,167,160,0.4)" }}>top</span>
          </h1>

          {/* 英文副标题 */}
          <p
            className="font-serif italic tracking-[0.08em] mb-3 animate-fade-in-up"
            style={{
              color: "rgba(123,167,160,0.65)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
              animationDelay: "0.7s",
            }}
          >
            The Eastern Way of Serene Living
          </p>

          {/* 中文副标题 */}
          <p
            className="tracking-[0.15em] mb-14 animate-fade-in-up"
            style={{
              color: "rgba(245,243,239,0.25)",
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
              animationDelay: "0.9s",
            }}
          >
            道法自然 · 静以修身
          </p>

          {/* 诗句引用 */}
          <div
            className="mb-14 animate-fade-in-up"
            style={{ animationDelay: "1.1s" }}
          >
            <div
              className="mx-auto mb-6"
              style={{ width: "3rem", height: "1px", background: "rgba(123,167,160,0.25)" }}
            />
            <p
              className="font-serif italic leading-[2] tracking-[0.04em]"
              style={{ color: "rgba(245,243,239,0.3)", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}
            >
              "In the silence between breaths,<br />
              the beauty of a thousand years whispers."
            </p>
            <div
              className="mx-auto mt-6"
              style={{ width: "3rem", height: "1px", background: "rgba(123,167,160,0.25)" }}
            />
          </div>

          {/* 双CTA */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "1.3s" }}
          >
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 uppercase tracking-[0.2em] text-[11px] transition-all duration-500 hover:opacity-85"
              style={{
                background: "#f5f3ef",
                color: "#1a1a1a",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              Visit Our Shop
            </a>
            <Link
              href="/daos"
              className="px-8 py-3 uppercase tracking-[0.2em] text-[11px] transition-all duration-500 hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(245,243,239,0.25)",
                color: "#f5f3ef",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              Explore The Daos
            </Link>
          </div>

          {/* 滚动提示 */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up"
            style={{ animationDelay: "1.6s" }}
          >
            <span
              className="tracking-[0.4em] uppercase"
              style={{ color: "rgba(245,243,239,0.15)", fontSize: "9px" }}
            >
              Discover
            </span>
            <div
              className="animate-[gentle-bounce_2.5s_ease-in-out_infinite]"
              style={{ width: "1px", height: "2.5rem", background: "rgba(123,167,160,0.2)" }}
            />
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY — 宋式留白 ===== */}
      <section className="relative bg-rice-paper py-28 md:py-40 flex justify-center overflow-hidden">
        {/* 水墨纹理装饰 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink-wash to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink-wash to-transparent" />

        <div className="relative z-10 max-w-2xl text-center px-6">
          {/* 印章 */}
          <div className="flex justify-center mb-8">
            <div className="seal-stamp">Dao</div>
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-6">
            Philosophy
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-[0.04em] text-ink mb-8 leading-[1.4]">
            Beauty Lies in<br />
            <span className="text-ink/40">the Space Between</span>
          </h2>

          <div className="divider-ink mb-8" />

          <p className="text-base md:text-lg font-serif italic text-ink/55 leading-[2] tracking-[0.03em] mb-6">
            &ldquo;The beauty of the East is not in abundance,&ldquo;
            <br />
            &ldquo;but in the restraint — the space where meaning breathes.&rdquo;
          </p>

          <p className="text-sm text-ink/40 leading-relaxed tracking-[0.01em] max-w-md mx-auto">
            Inspired by Song Dynasty aesthetics — where a single brushstroke
            carries the weight of a thousand years. DAO.top curates pieces that
            bridge ancient wisdom and modern serenity.
          </p>

          <div className="divider-ink mt-8" />

          {/* 三个理念关键词 */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { zh: "静", en: "Serenity" },
              { zh: "真", en: "Authenticity" },
              { zh: "美", en: "Beauty" },
            ].map((val) => (
              <div key={val.zh} className="text-center">
                <p className="font-serif text-2xl text-ink/15 mb-1">{val.zh}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30">
                  {val.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE FOUR DAOS — 四道 ===== */}
      <section className="px-6 py-24 md:py-36 bg-ink/[0.015]">
        <div className="max-w-6xl mx-auto">
          {/* 区块标题 */}
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">
              The Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">
              The Four Daos
            </h2>
            <div className="divider-ink mb-6" />
            <p className="text-sm text-ink/40 max-w-lg mx-auto leading-relaxed">
              Four pillars of Eastern contemplation. Each Dao is a path — a way of
              being that transforms the ordinary into the extraordinary.
            </p>
          </div>

          {/* 四道卡片 — 交替布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreDaos.map((dao, i) => (
              <Link
                key={dao.slug}
                href={`/daos/${dao.slug}`}
                className={`group block ${i % 2 === 1 ? "md:mt-16" : ""}`}
              >
                {/* 图片区 */}
                <div className="relative overflow-hidden aspect-[4/5] bg-ink/5">
                  <img
                    src={dao.coverImage}
                    alt={dao.name}
                    className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-105"
                  />
                  {/* 悬停时的墨色遮罩 */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                  {/* 悬停时出现的印章 */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-10 h-10 border border-rice/30 flex items-center justify-center">
                      <span className="font-serif text-[10px] text-rice/50">{dao.name.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* 文字区 */}
                <div className="pt-5 pb-2">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                    {dao.nameZh}
                  </p>
                  <h3 className="text-lg font-serif tracking-[0.04em] text-ink mb-1 group-hover:text-ink/60 transition-colors duration-500">
                    {dao.name}
                  </h3>
                  <p className="text-xs text-ink/40 italic tracking-[0.02em]">
                    {dao.tagline}
                  </p>
                  {/* 下划线动画 */}
                  <div className="w-6 h-[0.5px] bg-ink/20 mt-3 group-hover:w-10 transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRAFTSMANSHIP — 工艺理念 ===== */}
      <section className="relative px-6 py-28 md:py-40 bg-ink text-rice overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-px h-40 bg-celadon" />
          <div className="absolute bottom-20 right-10 w-px h-40 bg-celadon" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-celadon/50 mb-6">
            Craftsmanship
          </p>
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.04em] text-rice mb-8 leading-[1.5]">
            Every Piece Tells<br />a Thousand-Year Story
          </h2>
          <div className="w-12 h-[0.5px] bg-celadon/30 mx-auto mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                num: "01",
                title: "Natural",
                zh: "天然",
                desc: "Every material is sourced from nature — agarwood from the forests of Hainan, jade from the mountains of Hetian, clay from the earth of Longquan.",
              },
              {
                num: "02",
                title: "Handcrafted",
                zh: "匠心",
                desc: "Each piece passes through the hands of master artisans who have inherited techniques unchanged since the Song Dynasty.",
              },
              {
                num: "03",
                title: "Timeless",
                zh: "永恒",
                desc: "Designed not for a season, but for a lifetime. Objects that age with grace, acquiring beauty through use.",
              },
            ].map((item) => (
              <div key={item.num} className="border-l border-celadon/15 pl-5">
                <p className="text-[10px] tracking-[0.2em] text-celadon/30 mb-2">
                  {item.num}
                </p>
                <h3 className="font-serif text-lg text-rice/80 mb-1">{item.title}</h3>
                <p className="font-serif text-sm text-celadon/40 mb-3">{item.zh}</p>
                <p className="text-xs text-rice/35 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIGITAL IP — 数字IP ===== */}
      <section className="px-6 py-24 md:py-36 bg-rice-paper">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">
              Cultural Ambassadors
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">
              Meet Our Digital IPs
            </h2>
            <div className="divider-ink mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "DaoQing",
                nameZh: "道清",
                title: "The Keeper of Ancient Wisdom",
                desc: "Embodies the stillness of a mountain temple at dawn. The guardian of Eastern contemplation, reminding us that wisdom is not acquired, but remembered.",
                img: "https://images.unsplash.com/photo-1536158856838-31f9da69e5a8?w=800&q=80",
                href: "/digital-ip/daoqing",
              },
              {
                name: "XuanHeng",
                nameZh: "玄珩",
                title: "The Artisan of Living Beauty",
                desc: "Represents the creative spirit of Eastern craftsmanship. The hands that shape beauty from raw nature, the eye that finds perfection in imperfection.",
                img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
                href: "/digital-ip/xuanheng",
              },
            ].map((char) => (
              <Link
                key={char.name}
                href={char.href}
                className="group flex flex-col sm:flex-row gap-6 items-start p-6 border border-ink/5 hover:border-ink/15 transition-colors duration-500"
              >
                <div className="w-full sm:w-36 aspect-square overflow-hidden bg-ink/5 flex-shrink-0">
                  <img
                    src={char.img}
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-ink/25 mb-1">
                    {char.nameZh}
                  </p>
                  <h3 className="font-serif text-xl tracking-[0.03em] text-ink mb-1">
                    {char.name}
                  </h3>
                  <p className="text-xs text-ink/40 italic mb-3">{char.title}</p>
                  <p className="text-sm text-ink/50 leading-relaxed">{char.desc}</p>
                  <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-ink/25 mt-4 group-hover:text-ink/50 transition-colors">
                    Read the Story &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOURNAL PREVIEW ===== */}
      <section className="px-6 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">
              From the Journal
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">
              Stories & Insights
            </h2>
            <div className="divider-ink mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink/5 mb-5">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-ink/25 mb-2">
                  {post.category} &middot; {post.readTime}
                </p>
                <h3 className="font-serif text-base tracking-[0.02em] text-ink leading-snug mb-2 group-hover:text-ink/60 transition-colors duration-500">
                  {post.title}
                </h3>
                <p className="text-xs text-ink/40 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/journal" className="btn-outline text-[11px]">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GIFT CTA ===== */}
      <section className="px-6 py-28 md:py-40 bg-ink text-rice">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-celadon/40 mb-4">
            Thoughtful Gifting
          </p>
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.04em] text-rice mb-6 leading-[1.4]">
            A Gift That Speaks<br />of Culture & Soul
          </h2>
          <div className="w-12 h-[0.5px] bg-celadon/30 mx-auto mb-8" />
          <p className="text-sm text-rice/40 leading-relaxed mb-10 max-w-md mx-auto">
            Each DAO.top piece carries centuries of meaning — a gift that speaks
            of discernment, culture, and timeless elegance. Let our guide help you
            choose the perfect gesture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gift"
              className="btn-outline"
              style={{ borderColor: "rgba(245,243,239,0.2)", color: "var(--color-rice)" }}
            >
              Gift Guide
            </Link>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
              style={{ background: "var(--color-rice)", color: "var(--color-ink)" }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="px-6 py-24 md:py-32 bg-rice-paper">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">
            Join Our Circle
          </p>
          <h2 className="text-2xl md:text-3xl font-serif tracking-[0.04em] text-ink mb-4">
            A Quiet Word, Now and Then
          </h2>
          <div className="divider-ink mb-6" />
          <p className="text-sm text-ink/40 leading-relaxed mb-8">
            Stories of Eastern culture, new collection previews, and moments of
            serenity — delivered gently to your inbox. No spam, just soul.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
