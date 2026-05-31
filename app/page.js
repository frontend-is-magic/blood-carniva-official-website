import Image from "next/image";
import BandIntroFlipCard from "./components/BandIntroFlipCard";

const manifesto = [
  "把恐惧转译成节拍，让阴影在鼓点里变得可被凝视。",
  "建立一个虚构声音宇宙：每段噪声都是午夜剧场的暗门。",
  "用舞台红色美学包裹黑色童话，让霓虹成为叙事的火光。",
];

const tracks = [
  {
    number: "01",
    title: "霓虹余烬入场",
    description: "慢速后朋克贝斯线与合成器雾面铺底，像帷幕升起前的低声倒数。",
  },
  {
    number: "02",
    title: "恐惧节拍翻译机",
    description: "机械鼓机切出冷冽脉冲，把不安转成可舞动的地下节拍。",
  },
  {
    number: "03",
    title: "黑色童话广播",
    description: "叙事型人声穿过颗粒噪声，像从旧收音机里传来的寓言残片。",
  },
  {
    number: "04",
    title: "午夜游行的空拍",
    description: "明亮但危险感十足的吉他泛音，推进一场不存在的午夜队列。",
  },
  {
    number: "05",
    title: "低频剧场",
    description: "贝斯与电子低频占据前景，制造近乎戏剧灯光般的压迫感。",
  },
  {
    number: "06",
    title: "红幕之后的噪声",
    description: "尾声以反馈、断裂采样和残响收束，留下未完待续的信号。",
  },
];

const members = [
  {
    name: "主唱 / 叙事者",
    status: "已设定",
    isMissing: false,
    text: "以低声吟唱、旁白与碎片化台词牵引故事，是当前设定中唯一明确登场的成员。",
  },
  {
    name: "吉他 / 噪声",
    status: "缺席招募中",
    isMissing: true,
    text: "需要负责金属质感的泛音、刮擦与回授，把剧场墙面反射出的红光变成旋律。",
  },
  {
    name: "贝斯 / 低频",
    status: "缺席招募中",
    isMissing: true,
    text: "需要用持续下潜的线条建立仪式感，让每个段落保留身体性的重量。",
  },
  {
    name: "鼓 / 心跳",
    status: "缺席招募中",
    isMissing: true,
    text: "需要在鼓机与原始敲击之间切换，维持午夜游行的脉搏和现场推动力。",
  },
];

const soundRoutes = [
  {
    title: "后朋克骨架",
    text: "冷色贝斯线、重复鼓点和留白吉他组成最稳定的身体律动。",
  },
  {
    title: "哥特剧场感",
    text: "人声叙事更像灯光调度，用红幕、黑色童话和旁白制造舞台纵深。",
  },
  {
    title: "电子噪声边缘",
    text: "采样、失真与合成器雾面负责把歌曲推向更危险的午夜质地。",
  },
];

const releasePlan = [
  "整理乐队设定、视觉关键词与成员缺席名单。",
  "完成 3 首 Demo 的歌词、封面和试听入口。",
  "补齐成员档案后，开放第一场线上概念演出页面。",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <Hero />
      <BandIntro />
      <BandMembers />
      <SoundRoute />
      <TrackArchive />
      <VisualPoster />
      <ReleasePlan />
      <Subscribe />
      <footer className="border-t border-red-900/40 px-6 py-8 text-sm text-ivory/60 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} 鲜血狂欢</p>
          <p>Concept band website prototype</p>
        </div>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-end overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pb-14">
      <Image
        src="/concept-theater-poster.png"
        alt="红幕剧场、霓虹月亮与线条噪声组成的鲜血狂欢概念海报"
        fill
        priority
        sizes="100vw"
        className="hero-asset object-cover"
      />
      <div className="hero-shade" aria-hidden="true" />
      <nav className="absolute left-6 right-6 top-6 z-20 mx-auto flex max-w-6xl items-center justify-between text-sm text-ivory/80 md:left-10 md:right-10">
        <a href="#top" className="font-semibold text-ivory">
          鲜血狂欢
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#intro" className="transition hover:text-redlight">
            简介
          </a>
          <a href="#members" className="transition hover:text-redlight">
            成员
          </a>
          <a href="#sound" className="transition hover:text-redlight">
            声音路线
          </a>
          <a href="#tracks" className="transition hover:text-redlight">
            曲目
          </a>
          <a href="#signal" className="transition hover:text-redlight">
            信号
          </a>
        </div>
      </nav>

      <div id="top" className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black leading-none text-ivory sm:text-7xl md:text-8xl lg:text-9xl">
            鲜血狂欢
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ivory/84 md:text-2xl md:leading-10">
            一支诞生于地下剧场与霓虹余烬之间的概念乐队
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#intro">
              查看乐队简介
            </a>
            <a className="btn-secondary" href="#members">
              查看成员缺席
            </a>
          </div>
          <p className="mt-8 max-w-2xl border-l border-redlight/70 pl-4 text-sm leading-6 text-ivory/72 md:text-base">
            这是概念性虚构乐队 IP，不对应现实中的具体乐队、成员或演出。
          </p>
        </div>
      </div>
    </section>
  );
}

function BandIntro() {
  return (
    <section id="intro" className="section-shell bg-charcoal">
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="section-heading mb-0">
            <p className="section-index">01</p>
            <h2>乐队简介</h2>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/70">
            点击卡片翻面可以查看乐队内容介绍。这里把“鲜血狂欢”处理成虚构乐队 IP，而不是现实成员履历。
          </p>
          <div className="mt-8 grid gap-4">
            {manifesto.map((line) => (
              <blockquote key={line} className="manifesto-card manifesto-card-compact">
                {line}
              </blockquote>
            ))}
          </div>
        </div>
        <BandIntroFlipCard />
      </div>
    </section>
  );
}

function BandMembers() {
  return (
    <section id="members" className="section-shell bg-ink">
      <div className="section-heading">
        <p className="section-index">02</p>
        <div>
          <h2>乐队成员</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            当前只明确了主唱叙事者，其余成员席位以红色高亮标记为缺席招募中，方便后续补齐真实或虚构档案。
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {members.map((member) => (
          <article
            key={member.name}
            className={`member-card ${member.isMissing ? "member-card-missing" : ""}`}
          >
            <span className={`member-status ${member.isMissing ? "member-status-missing" : ""}`}>
              {member.status}
            </span>
            <h3>{member.name}</h3>
            <p>{member.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SoundRoute() {
  return (
    <section id="sound" className="section-shell bg-charcoal">
      <div className="section-heading">
        <p className="section-index">03</p>
        <div>
          <h2>声音路线</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            为页面增加一个比曲目更上层的风格说明，让访客先理解乐队声音，再进入曲目档案。
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {soundRoutes.map((route) => (
          <article key={route.title} className="sound-card">
            <h3>{route.title}</h3>
            <p>{route.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrackArchive() {
  return (
    <section id="tracks" className="section-shell bg-ink">
      <div className="section-heading">
        <p className="section-index">04</p>
        <div>
          <h2>概念 EP / 曲目档案</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            以下为占位曲目结构，后续可替换为真实 Demo、歌词、试听链接。
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {tracks.map((track) => (
          <article key={track.number} className="track-card">
            <span className="track-number">{track.number}</span>
            <div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VisualPoster() {
  return (
    <section className="section-shell bg-charcoal">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-heading mb-0">
            <p className="section-index">05</p>
            <h2>视觉模块</h2>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/70">
            红幕剧场、霓虹月亮与线条噪声共同构成这支虚构乐队的舞台坐标。红色在这里是灯光、幕布与情绪隐喻，不指向写实血腥或真实伤害。
          </p>
        </div>
        <figure className="css-poster" aria-label="红幕剧场、霓虹月亮与线条噪声概念海报">
          <div className="poster-curtain poster-curtain-left" />
          <div className="poster-curtain poster-curtain-right" />
          <div className="poster-moon" />
          <div className="poster-bars" />
          <div className="poster-noise-lines" />
        </figure>
      </div>
    </section>
  );
}

function ReleasePlan() {
  return (
    <section className="section-shell bg-ink">
      <div className="section-heading">
        <p className="section-index">06</p>
        <div>
          <h2>发布计划</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            这是我补充的页面段落，用来把“缺席成员”和“概念曲目”连接成后续可执行的官网路线。
          </p>
        </div>
      </div>
      <ol className="release-plan">
        {releasePlan.map((item, index) => (
          <li key={item} className="plan-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Subscribe() {
  return (
    <section id="signal" className="section-shell bg-charcoal">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="section-heading mb-0">
            <p className="section-index">07</p>
            <h2>订阅 / 联系</h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-ivory/70">
            留下一个入口，等待下一次信号。当前为静态表单与 mailto 占位，后续可接入 Resend、Buttondown、ConvertKit 或 CMS。
          </p>
        </div>
        <form
          className="signal-form"
          action="mailto:signal@blood-carniva.example"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>信号代号</span>
            <input name="name" type="text" placeholder="午夜听众" />
          </label>
          <label>
            <span>接收邮箱</span>
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>留言</span>
            <textarea name="message" rows="4" placeholder="告诉我们你听见了哪一种噪声" />
          </label>
          <button className="btn-primary w-full sm:w-auto" type="submit">
            接收下一次信号
          </button>
        </form>
      </div>
    </section>
  );
}
