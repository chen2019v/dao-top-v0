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

      {/* ===== HERO — 水墨气场 ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ink-wash-hero">
        {/* 宣纸纹理叠加 */}
        <div className="absolute inset-0 z-0 ink-texture-overlay opacity-10" />
        {/* 天青色光晕 */}
        <div className="absolute inset-0 z-0 celadon-glow opacity-20" />
        {/* 顶底微光线 */}
        <div className="absolute top-0 left-0 w-full h-px z-10 bg-[linear-gradient(to_right,transparent,rgba(123,167,160,0.35),transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-px z-10 bg-[linear-gradient(to_right,transparent,rgba(123,167,160,0.25),transparent)]" />

        {/* Hero 内容 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto py-24">

          {/* 印章 — 朱砂红 */}
          <div className="mb-10 animate-fade-in-up animate-delay-1">
            <div className="seal seal-lg seal-rotate">
              <span className="tracking-widest">道</span>
            </div>
          </div>

          {/* 标签 */}
          <p className="text-[11px] tracking-[0.5em] uppercase mb-8 animate-fade-in-up animate-delay-2"
            style={{ color: "rgba(123,167,160,0.55)" }}>
            宋式美学 · DAO之道
          </p>

          {/* 主标题 DAO.top */}
          <h1 className="font-serif font-normal tracking-[0.06em] leading-[1.1] mb-8 animate-fade-in-up animate-delay-3"
            style={{ color: "#f5f3ef", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
            DAO
            <span style={{ color: "rgba(123,167,160,0.45)" }}>.</span>
            <span style={{ color: "rgba(123,167,160,0.35)" }}>top</span>
          </h1>

          {/* 英文副标题 */}
          <p className="font-serif italic tracking-[0.08em] mb-3 animate-fade-in-up animate-delay-3"
            style={{ color: "rgba(123,167,160,0.6)", fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}>
            The Eastern Way of Serene Living
          </p>

          {/* 中文副标题 */}
          <p className="tracking-[0.15em] mb-14 animate-fade-in-up animate-delay-4"
            style={{ color: "rgba(245,243,239,0.22)", fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)" }}>
            道法自然 · 静以修身
          </p>

          {/* 诗句引用 */}
          <div className="mb-14 animate-fade-in-up animate-delay-4">
            <div className="mx-auto mb-6" style={{ width: "3rem", height: "1px", background: "rgba(123,167,160,0.2)" }} />
            <p className="font-serif italic leading-[2] tracking-[0.04em]"
              style={{ color: "rgba(245,243,239,0.28)", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}>
              "In the silence between breaths,<br />the beauty of a thousand years whispers."
            </p>
            <div className="mx-auto mt-6" style={{ width: "3rem", height: "1px", background: "rgba(123,167,160,0.2)" }} />
          </div>

          {/* 双CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animate-delay-5">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              进入店铺
            </a>
            <Link href="/daos" className="btn-outline-light">
              探索诸道
            </Link>
          </div>

          {/* 滚动提示 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-6">
            <span className="tracking-[0.4em] uppercase" style={{ color: "rgba(245,243,239,0.13)", fontSize: "9px" }}>Discover</span>
            <div className="w-px h-10 animate-[bounce_2.5s_ease-in-out_infinite]" style={{ background: "rgba(123,167,160,0.18)" }} />
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative bg-rice-paper py-28 md:py-40 flex justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(to_right,transparent,rgba(200,190,175,0.25),transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(to_right,transparent,rgba(200,190,175,0.25),transparent)]" />
        <div className="relative z-10 max-w-2xl text-center px-6">
          <div className="flex justify-center mb-8">
            <div className="seal seal-sm">Dao</div>
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-6">哲思</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-[0.04em] text-ink mb-8 leading-[1.4]">
            美在留白之间<br /><span className="text-ink/40">the Space Between</span>
          </h2>
          <div className="divider-ink mb-8" />
          <p className="text-base md:text-lg font-serif italic text-ink/55 leading-[2] tracking-[0.03em] mb-6">
            &ldquo;The beauty of the East is not in abundance,&ldquo;<br />&ldquo;but in the restraint — the space where meaning breathes.&rdquo;
          </p>
          <p className="text-sm text-ink/40 leading-relaxed tracking-[0.01em] max-w-md mx-auto">
            源于宋代美学——一笔一画，承载千年。DAO.top 甄选连接古智与静谧之物。
          </p>
          <div className="divider-ink mt-8" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { zh: "静", en: "Serenity" },
              { zh: "真", en: "Authenticity" },
              { zh: "美", en: "Beauty" },
            ].map((val) => (
              <div key={val.zh} className="text-center">
                <p className="font-serif text-2xl text-ink/15 mb-1">{val.zh}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30">{val.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE FOUR DAOS ===== */}
      <section className="px-6 py-24 md:py-36 bg-ink/[0.012]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">诸道</p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">四道</h2>
          <div className="divider-ink mb-6" />
          <p className="text-sm text-ink/40 max-w-lg mx-auto leading-relaxed">
            东方雅事四道，乃静心修为之径——每道皆是一扇门，引寻常之物入不凡之境。
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreDaos.map((dao, i) => (
              <Link key={dao.slug} href={`/daos/${dao.slug}`} className={`group block ${i % 2 === 1 ? "md:mt-16" : ""}`}>
                <div className="relative overflow-hidden aspect-[4/5] bg-ink/5">
                  <img src={dao.coverImage} alt={dao.name}
                    className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-10 h-10 border border-rice/30 flex items-center justify-center">
                      <span className="font-serif text-[10px] text-rice/50">{dao.name.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pb-2">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">{dao.nameZh}</p>
                  <h3 className="text-lg font-serif tracking-[0.04em] text-ink mb-1 group-hover:text-ink/60 transition-colors duration-500">{dao.name}</h3>
                  <p className="text-xs text-ink/40 italic tracking-[0.02em]">{dao.tagline}</p>
                  <div className="w-6 h-[0.5px] bg-ink/20 mt-3 group-hover:w-10 transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRAFTSMANSHIP ===== */}
      <section className="relative px-6 py-28 md:py-40 bg-ink text-rice overflow-hidden">
        <div className="absolute top-20 left-10 w-px h-40 bg-celadon/10" />
        <div className="absolute bottom-20 right-10 w-px h-40 bg-celadon/10" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-celadon/50 mb-6">匠心</p>
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.04em] text-rice mb-8 leading-[1.5]">
            千载匠心<br />一物一故事
          </h2>
          <div className="w-12 h-[0.5px] bg-celadon/30 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { num: "01", title: "Natural", zh: "天然",
                desc: "Every material is sourced from nature — agarwood from the forests of Hainan, jade from the mountains of Hetian." },
              { num: "02", title: "Handcrafted", zh: "匠心",
                desc: "Each piece passes through the hands of master artisans who have inherited techniques unchanged since the Song Dynasty." },
              { num: "03", title: "Timeless", zh: "永恒",
                desc: "Designed not for a season, but for a lifetime. Objects that age with grace, acquiring beauty through use." },
            ].map((item) => (
              <div key={item.num} className="border-l border-celadon/15 pl-5">
                <p className="text-[10px] tracking-[0.2em] text-celadon/30 mb-2">{item.num}</p>
                <h3 className="font-serif text-lg text-rice/80 mb-1">{item.title}</h3>
                <p className="font-serif text-sm text-celadon/40 mb-3">{item.zh}</p>
                <p className="text-xs text-rice/35 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIGITAL IP ===== */}
      <section className="px-6 py-24 md:py-36 bg-rice-paper">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">文化使者</p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">遇见数字IP</h2>
            <div className="divider-ink mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "DaoQing", nameZh: "道清", title: "The Keeper of Ancient Wisdom",
                desc: "Embodies the stillness of a mountain temple at dawn. The guardian of Eastern contemplation, reminding us that wisdom is not acquired, but remembered.",
                img: "https://images.unsplash.com/photo-1536158856838-31f9da69e5a8?w=800&q=80", href: "/digital-ip/daoqing" },
              { name: "XuanHeng", nameZh: "玄珩", title: "The Artisan of Living Beauty",
                desc: "Represents the creative spirit of Eastern craftsmanship. The hands that shape beauty from raw nature, the eye that finds perfection in imperfection.",
                img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80", href: "/digital-ip/xuanheng" },
            ].map((char) => (
              <Link key={char.name} href={char.href} className="group flex flex-col sm:flex-row gap-6 items-start p-6 border border-ink/5 hover:border-ink/15 transition-colors duration-500">
                <div className="w-full sm:w-36 aspect-square overflow-hidden bg-ink/5 flex-shrink-0">
                  <img src={char.img} alt={char.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-ink/25 mb-1">{char.nameZh}</p>
                  <h3 className="font-serif text-xl tracking-[0.03em] text-ink mb-1">{char.name}</h3>
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
            <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">雅集随笔</p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.04em] text-ink mb-4">故事与洞见</h2>
            <div className="divider-ink mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-ink/5 mb-5">
                  <img src={post.coverImage} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-ink/25 mb-2">{post.category} &middot; {post.readTime}</p>
                <h3 className="font-serif text-base tracking-[0.02em] text-ink leading-snug mb-2 group-hover:text-ink/60 transition-colors duration-500">{post.title}</h3>
                <p className="text-xs text-ink/40 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/journal" className="btn-outline-dark text-[11px]">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ===== GIFT CTA ===== */}
      <section className="px-6 py-28 md:py-40 bg-ink text-rice">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-celadon/40 mb-4">雅礼赠予</p>
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.04em] text-rice mb-6 leading-[1.4]">
            一份承载<br />文化之礼
          </h2>
          <div className="w-12 h-[0.5px] bg-celadon/30 mx-auto mb-8" />
          <p className="text-sm text-rice/40 leading-relaxed mb-10 max-w-md mx-auto">
            Each DAO.top piece carries centuries of meaning — a gift that speaks of discernment, culture, and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/gift" className="btn-outline-light">Gift Guide</Link>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#f5f3ef", color: "#1a1a1a" }}>Shop Now</a>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="px-6 py-24 md:py-32 bg-rice-paper">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ink/30 mb-4">加入雅集</p>
          <h2 className="text-2xl md:text-3xl font-serif tracking-[0.04em] text-ink mb-4">静谧之语</h2>
          <div className="divider-ink mb-6" />
          <p className="text-sm text-ink/40 leading-relaxed mb-8">
            东方文化故事、新品预览、静谧片刻——轻柔送达您的邮箱。
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
